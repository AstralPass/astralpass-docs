---
title: About AstralPass
description: What AstralPass is and the three main things it helps users and DACs do.
---

At its core, AstralPass is a (Solana & z.ink) wallet verification tool for Discord. By asking you to log in with your Discord account, and then prove you own a certain wallet through signing an off-chain message (so no costs are incurred) we verify you are the owners of both.

> Discord server admins can use this service to manage their roles (often used for gating access), guide users through (partially) external onboarding flows, expand the information they have on their users, and more.

## What sets it apart

There are a number of similar services out there for Solana, such as [Grape Verification](https://verification.governance.so/), [Matrica](https://matrica.io/), and [PubKey](https://github.com/pubkeyapp).

AstralPass is the only one that was **custom-built for Star Atlas** from the ground up. This does not mean it ignores other use-cases, such as Fungeible, and Non-fungible Token detection.

It does, however, mean that AstralPass connects **three** things (instead of two) that usually live in separate places:
- your **Discord identity**
- your **wallet ownership**
- your **Star Atlas Player Profile**

Furthermore, AstralPass sports the following unique features:
- A Discord bot that does not only add a convenient `/verify` command (and `/join` alias) to trigger the verification process, but also runs the custom ruleset for that Discord server and guides then user through the next steps (using links, if need be)
- Users can link multiple wallets to one Discord account. There is no maximum.
- The dashboard is not just for managing wallets. It's a real-time view into your Star Atlas portfolio and (relevant) NFT ownership.
- Beyond Solana, this tool also supports the new z.ink chain after its TGE.
- Free to use for [Star Atlas DACs](/star-atlas/what-is-a-dac/) (guilds)

## The three main parts of AstralPass

AstralPass is a Discord verification, Guided onboarding, and Game insights platform.

### 1. Verification

AstralPass can verify that your Discord account and your wallet belong to you.
That gives DACs a trusted base for role sync and onboarding.

### 2. Guided onboarding

AstralPass can help members move through the steps a Discord server (or DAC) requires for onboarding, instead of leaving them to guess what is missing.
That can include Discord-side steps, wallet linking, and Star Atlas-specific DAC steps.

### 3. Star Atlas-aware insights

AstralPass treats Star Atlas Player Profiles and DAC-related data as first-class information.
That is one of the key ways it differs from generic wallet-verification tools.

## Who it is for

AstralPass was built for **Star Atlas DACs** first, but it is not limited to DAC members. The dashboard is still a convenient way to get insights into the current state of your Star Alas presence at a glance.

Beyond Star Atlas, it can be used by any on-chain project that utilizes (N)FTs to gate-keep, assign custom roles, or that requires custom guided onboarding for their Discord users.

## Why it exists

AstralPass exists because Discord membership, wallet ownership, and on-chain DAC membership often drift apart in practice.
AstralPass helps bring those worlds back into alignment.

If you want the practical starting point, continue with [Getting Started](/core/getting-started/).
