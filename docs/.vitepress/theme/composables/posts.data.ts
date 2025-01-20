import type { MarkdownRenderer } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { formatDistance } from 'date-fns'
import { createMarkdownRenderer } from 'vitepress'
import useBlogFile from './useBlogFile'

let md: MarkdownRenderer
const { folderDir, readFrontMatter } = useBlogFile()

const dir = folderDir('entries')

export interface Post {
  title: string
  confidence: string
  importance: number
  status: string
  author: string
  href: string
  start_date: {
    time: number
    string: string
    since: string
  }
  last_update: {
    time: number
    string: string
  }
  excerpt: string | undefined
  data: Record<string, any>
}

declare const data: Post[]
export { data }

async function load(): Promise<Post[]>
async function load() {
  md = md || (await createMarkdownRenderer(process.cwd()))
  return fs
    .readdirSync(dir)
    .map(file => getPost(file, dir))
    .sort((a, b) => b.start_date.time - a.start_date.time)
}

export default {
  watch: path.join(dir, '*.md'),
  load,
}

const cache = new Map()

function getPost(file: string, postDir: string): Post {
  const fullPath = path.join(postDir, file)
  const timestamp = fs.statSync(fullPath).mtimeMs

  const { data, excerpt } = readFrontMatter(file, postDir, cache)

  const post: Post = {
    title: data.title,
    confidence: data.confidence,
    importance: Number.parseInt(data.importance, 10),
    status: data.status,
    author: data.author ? data.author : 'Unknown',
    href: `/entries/${file.replace(/\.md$/, '.html')}`,
    start_date: formatDate(data.start_date),
    last_update: formatDate2(data.last_update),
    excerpt: excerpt && md.render(excerpt),
    data,
  }

  cache.set(fullPath, {
    timestamp,
    post,
  })
  return post
}

function formatDate(date: string | Date): Post['start_date'] {
  if (!(date instanceof Date))
    date = new Date(date)

  date.setUTCHours(12)

  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    since: formatDistance(date, new Date(), { addSuffix: true }),
  }
}

function formatDate2(date: string | Date): Post['last_update'] {
  if (!(date instanceof Date))
    date = new Date(date)

  date.setUTCHours(12)

  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
