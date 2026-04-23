---
title: Discord Roles
description: How AstralPass uses your linked wallets and other checks to keep Discord roles in sync.
---

AstralPass can help DACs keep Discord roles in sync with the conditions they care about.

## What AstralPass may evaluate

Depending on how a DAC has configured its rules, AstralPass may look at:

- whether you have linked a wallet
- which wallets are linked
- whether you are part of a DAC on-chain
- what Discord roles you already have
- Star Atlas-specific data tied to your wallets or profiles

## Why roles may change

Your roles may update when:

- you link a wallet
- you remove a wallet
- you run a verification or join flow again
- the DAC runs its background role checks
- your Star Atlas or Discord-side state changes

## Why a role may not appear right away

If a role does not appear immediately, possible reasons include:

- you still need to complete another step
- the DAC requires manual approval first
- the linked wallet does not satisfy the rule
- AstralPass has not re-evaluated your state yet

## The key idea

AstralPass is not only checking whether you own a wallet.
It is checking whether your current wallet, Discord, and sometimes Star Atlas state satisfy the DAC's configured rules.

If a role still looks wrong, continue with [Troubleshooting](/core/troubleshooting/).
