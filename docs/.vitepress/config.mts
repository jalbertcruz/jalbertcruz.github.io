import Unocss from "unocss/vite";
import { defineConfig } from "vitepress";

export default defineConfig({
	base: "/",
	description: "jalbert garden",
	markdown: {
		headers: {
			level: [0, 0],
		},
	},
	themeConfig: {
		footer: {
			message: "Personal garden",
			copyright: "Copyright © 2025 jalbertcruz",
		},
		search: {
			provider: "local",
		},
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/jalbertcruz/jalbertcruz.github.io",
			},
		],
		nav: nav(),
		garden: {
			title: "Entries",
			description: "Some ideas",
		},
	},
	title: "Personal garden",
	vite: {
		plugins: [
			Unocss({
				configFile: "../../unocss.config.ts",
			}),
		],
	},
});

function nav() {
	return [
		{ text: "CV", link: "/cv/", activeMatch: "/cv/" },
		{ text: "Garden", link: "/garden/", activeMatch: "/garden/" },
		{
			text: "External links",
			items: [
				{
					text: "LinkedIn",
					link: "https://www.linkedin.com/in/jalbertcruz",
				},
				{
					text: "GitHub",
					link: "https://github.com/jalbertcruz",
				},
			],
		},
	];
}
