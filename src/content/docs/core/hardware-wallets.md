---
title: Hardware Wallets
description: What to expect when using AstralPass with Ledger and other hardware-wallet setups.
---

If you use a Ledger or another hardware wallet, AstralPass may feel a little different from a standard hot-wallet flow.

That is normal.

## Why hardware wallets feel different

Hardware wallets usually introduce extra confirmation and signing steps.
Depending on the wallet software you use, AstralPass may need to:

- wait for the wallet app to prepare a request
- wait for you to approve on the device
- use a slightly different signing path from a normal hot wallet

## What to check first

If a hardware-wallet flow is not behaving as expected, check these basics:

- the correct wallet account is selected
- the wallet software is connected to the device
- the device is unlocked
- the relevant app is open on the device when required
- you approved the request on the device, not just in the browser wallet

## Common source of confusion

A hardware wallet may expose the same account through a browser wallet, but the signing behavior can still differ from a hot wallet.
So even if a wallet address looks familiar, the approval flow may not behave the same way.

## Practical advice

If you are troubleshooting a Ledger flow:

1. make sure the correct wallet account is selected
2. retry the flow from the start
3. confirm every device prompt carefully
4. if needed, remove the wallet connection and relink it cleanly

If the issue is not clearly a device prompt problem, continue with [Troubleshooting](/core/troubleshooting/).
