---
title: Getting Started
description: The normal AstralPass flow for signing in, linking a wallet, and moving through verification.
---

In your AstralPass-powered Discord server, simply type `/verify` (or `/join` — they both do exactly the same). This will right away trigger the AstralPass ruleset that was set up for that server. If you are brand new, you will be asked to verify your account through AstralPass, along with a clickable link.

Note: Some servers may also require additional steps for you to perform, which will be clearly communicated through the bot's response.

On the AstralPass website, you will go through a simple, 2-step flow:

1. **Sign in with Discord**
2. **Connect your first wallet**

Then, in the background, the server will run the rules again, and evaluate your current state. If all conditions have been met, you will likely see a message that all is well. If you have connected a wallet you use for any Star Atlas services (SAGE, z.ink, the Lockers) you should see some additional information on the dasboard.

Head back to your Discord to run the same command again. It will either tell you that you are verified, or it will add additional steps.

## What AstralPass is checking

Depending on the Discord server / DAC, AstralPass may care about:

- Your wallet containing an NFT, or other assets
- What Discord roles you already have
- Your wallet containing a Star Atlas Player Profile
- Whether you are part of a DAC on-chain (exclusively, or not)
- Star Atlas-specific data tied to your wallets or profiles

## What happens after you sign in

After you sign in and link a wallet, AstralPass can:

- update your Discord roles
- show you what is still missing through the Discord's verification command

## Important: Discord approval and DAC membership are not the same thing

A common point of confusion is assuming that one completed step means everything is done.

In reality, a DAC may require several separate things, such as:
- Discord-side approval
- on-chain DAC membership
- wallet linking

AstralPass helps make those differences visible.

If you are ready to connect a wallet, continue with [Linking Wallets](/core/linking-wallets/).
