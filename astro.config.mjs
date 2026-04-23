// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logo from './src/assets/logo-white.png';

export default defineConfig({
	site: 'https://docs.astralpass.com',
	integrations: [
		starlight({
			disable404Route: true,
			title: 'AstralPass Docs',
			description: 'Documentation for AstralPass, the Discord, wallet, and Star Atlas bridge.',
			logo: {
				src: logo,
				alt: 'AstralPass',
			},
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AstralPass/astralpass-docs' }],
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: '/brand/favicon.png' } },
			],
			sidebar: [
				{
					label: 'Core',
					items: [
						{ label: 'About AstralPass', slug: 'core/about-astralpass' },
						{ label: 'Getting Started', slug: 'core/getting-started' },
						{ label: 'Linking Wallets', slug: 'core/linking-wallets' },
						{ label: 'Hardware Wallets', slug: 'core/hardware-wallets' },
						{ label: 'Discord Roles', slug: 'core/discord-roles' },
						{ label: 'Solo Players', slug: 'core/solo-players' },
						{ label: 'Troubleshooting', slug: 'core/troubleshooting' },
						{ label: 'FAQ', slug: 'core/faq' },
					],
				},
				{
					label: 'Star Atlas',
					items: [
						{ label: 'Why AstralPass for Star Atlas', slug: 'star-atlas/why-astralpass-for-star-atlas' },
						{ label: 'Player Profiles', slug: 'star-atlas/player-profiles' },
						{ label: 'What Is a DAC?', slug: 'star-atlas/what-is-a-dac' },
						{ label: 'Joining a DAC On-Chain', slug: 'star-atlas/joining-a-dac-on-chain' },
						{ label: 'DAC Membership and Discord Roles', slug: 'star-atlas/dac-membership-and-discord-roles' },
						{ label: 'Glossary', slug: 'star-atlas/glossary' },
					],
				},
			],
		}),
	],
});
