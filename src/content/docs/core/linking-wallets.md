---
title: Linking Wallets
description: How wallet linking works in AstralPass, including hot wallets, Ledger wallets, and multiple wallets.
---

AstralPass lets you link one or more Solana wallets to your account.

That gives AstralPass a way to verify ownership and evaluate the rules that depend on your wallet state.

## Hot wallets

For a normal browser wallet, the process is usually straightforward:

1. sign in with Discord
2. choose the wallet you want to link
3. approve the ownership check
4. return to AstralPass

## Ledger and hardware wallets

Hardware wallets can involve extra prompts or slightly different signing behavior.
That is normal.

If you use a Ledger:
- make sure the correct wallet account is selected
- follow the prompts shown by the wallet software
- confirm on the device when required

## Multiple wallets

You can link more than one wallet.

That matters because a DAC may evaluate your rules across **all linked wallets**, not just whichever wallet you used most recently.

## Linking the right wallet matters

A lot of problems come from linking a wallet that does not actually hold the relevant Star Atlas state.

For example:
- your DAC membership may be on one wallet
- your Player Profile may be associated with another
- the wallet you linked may simply not be the one the DAC expects

If something seems off after linking, first make sure the correct wallet is actually connected.

If your roles or status still look wrong, continue with [Discord Roles](/core/discord-roles/) or [Troubleshooting](/core/troubleshooting/).
