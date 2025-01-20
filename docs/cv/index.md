<script setup>
import { withBase, useData } from 'vitepress'
const url = withBase('/cv.pdf')
// https://pdfobject.com/api/
// https://pdfobject.com/guide/quick-start.html
// https://pipwerks.com/2024/02/01/pdfobject-for-vue-3/
// height: '1000px', width: '1000px',
</script>

<a :href="url">Download pdf</a>

<PdfObject :url="url" :options="{ id: 'cv-pdf', title: 'Personal CV',  pdfOpenParams: { view: 'FitV' }, height: '1000px', width: '1000px' }" />
