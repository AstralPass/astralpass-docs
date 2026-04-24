// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logoDark from './src/assets/logo-white.png';
import logoLight from './src/assets/logo-color.png';

export default defineConfig({
	site: 'https://docs.astralpass.com',
	integrations: [
		starlight({
			disable404Route: true,
			title: 'AstralPass Docs',
			description:
				'Learn how AstralPass connects Discord, Solana wallets, and Star Atlas identities to make community access easier and more reliable.',
			logo: {
				dark: logoDark,
				light: logoLight,
				alt: 'AstralPass',
			},
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AstralPass/astralpass-docs' }],
			head: [{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: '/brand/favicon.png' } }],
			sidebar: [
				{
					label: 'Using AstralPass',
					items: [
						{ label: 'What Is AstralPass?', slug: 'core/about-astralpass' },
						{ label: 'Getting Started', slug: 'core/getting-started' },
						{ label: 'Linking Your Wallets', slug: 'core/linking-wallets' },
						{ label: 'Using Hardware Wallets', slug: 'core/hardware-wallets' },
						{ label: 'Discord Roles and Access', slug: 'core/discord-roles' },
						{ label: 'For Solo Players', slug: 'core/solo-players' },
						{ label: 'Troubleshooting', slug: 'core/troubleshooting' },
						{ label: 'FAQ', slug: 'core/faq' },
					],
				},
				{
					label: 'Star Atlas Communities',
					items: [
						{ label: 'Why Use AstralPass', slug: 'star-atlas/why-astralpass-for-star-atlas' },
						{ label: 'Player Profiles', slug: 'star-atlas/player-profiles' },
						{ label: 'Guilds / DACs', slug: 'star-atlas/what-is-a-dac' },
						{ label: 'Joining a DAC On-Chain', slug: 'star-atlas/joining-a-dac-on-chain' },
						{
							label: 'DAC Membership and Discord Roles',
							slug: 'star-atlas/dac-membership-and-discord-roles',
						},
						{ label: 'Glossary', slug: 'star-atlas/glossary' },
					],
				},
			],
		}),
	],
});
