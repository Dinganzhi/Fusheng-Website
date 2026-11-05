// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fusheng Group',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Dinganzhi/Fusheng-Website',
				},
			],
			sidebar: [
				{
					label: 'Guides',
					items: [{ label: 'Example Guide', slug: 'guides/example' }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
