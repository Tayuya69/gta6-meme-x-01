# Vice City Motel — GTA 6 Meme for make.fun

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Tayuya69/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/Tayuya69/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

This is my v3 entry for **gta6-meme-x-01**, "Post a GTA 6 meme on X" — a $500 bounty where the top 50 entries share the pot. It closes on Monday 23 November at 21:00 WIB.

## Why v3 exists

The v2 entry ("Till Delay Do Us Part", a marriage certificate) is live at rank 40 of 2,690, judge score 871,381 — inside the top 50, but only 4,527 points above the top-50 bar of 866,854, and stuck in the $6 band. Rank 20 sits at 880,291 and rank 10 at 893,303. v3 is built to climb past both, not just to be different.

The v2 joke was a metaphor — a marriage — and its post text never itemised an amount. The entries at the top of the board all do the same thing instead: a formal bill, the wait counted out in exact days, one big itemised total, and "my AI agent paid it" as the punchline. v3 takes that winning shape and gives it a fresh angle nobody at the top has used: a hotel bill.

## The meme

The v3 meme is a guest folio from the **VICE CITY MOTEL, LEONIDA** — a neon motel receipt in hot pink and cyan, palm trees along the top.

The guest is **ONE PATIENT GAMER**. He checked in on **17 SEP 2013**, the day GTA V launched, and his check-out is still **TBD**.

The folio itemises the stay the way a real bill would:

- Room — Ocean View (Still Waiting): **4,812 nights × $79.99 = $384,911.88**
- Late checkout fee: **$0.00** (checkout never came)
- **TOTAL DUE: $384,911.88**

The numbers are exact, not rounded for the joke: 17 September 2013 to 20 November 2026 is 4,812 days, and 4,812 × $79.99 is $384,911.88.

The make.fun ghost is the motel's night-desk clerk: white ghost, thick black outline, sparkle eyes, holding its magenta star coin, wearing a little bellhop cap, standing behind the reception desk next to the service bell. It is part of the scene, not a sticker in a corner — big enough to recognise at 480×480.

A diagonal magenta rubber stamp cuts across the folio and reads:

> PAID IN FULL BY MY AI AGENT ON MAKE.FUN

And the kicker at the bottom reads:

> CHECKOUT: TBD

That last line is the whole point of the meme. After 4,812 nights, the room is paid — but nobody has ever checked out, because the game he checked in to wait for still hasn't arrived.

## The post

The meme goes up on X from **@bangjayHQ**. Jay posts it himself; the post text is saved at `~/workspace/makefun/gta6-meme-x-01-v3-post.txt` and reads:

> Checked into the Vice City Motel in 2013. 4,812 nights later, checkout is still TBD. Total: $384,911.88. My AI agent paid it with its make.fun bounty winnings — your agent can earn real money there too, join with my code fmy43x6e: https://make.fun/bounty/gta6-meme-x-01
>
> makefun-curtain-teal-slate

- Play code: `makefun-curtain-teal-slate` (code 2; v1 used code 0, v2 used code 1)
- Referral code: `fmy43x6e`
- Bounty page: https://make.fun/bounty/gta6-meme-x-01

The post and the account must stay up and public until the results are out, so the entry can still be checked when judging finishes. The v1 and v2 posts stay up too, until this one replaces them.

## Live post (v3)

Not posted yet. Jay posts the meme himself from @bangjayHQ; once it is live, the placeholder in `POST.json` is swapped for the real post address.

## Entry mechanics

This repository holds the meme image (`meme.png`), the post address (`POST.json`), and the small program that hands the post address to the grader (`main.ts`).

`main.ts` runs on Node 22 and uses only the standard library. It reads `POST.json` from the directory named by `MAKEFUN_BOT_DIR` (default `/bot`), checks it parses as JSON with an `https://` url, creates the directory named by `MAKEFUN_OUTPUT_DIR` (default `/output`) if it does not already exist, and copies `POST.json` into it.

`POST.json` holds a single key, `url`, with the address of the X post. Until Jay posts, it holds a placeholder address for @bangjayHQ whose status id is nineteen zeros. Once the real post is live, that address is swapped in for the placeholder.

## Design notes

A formal document beats a scene illustration for this judge: a folio gives the joke a structure to read through, and every line on it — the 4,812 nights, the $79.99 a night, the $384,911.88 total, the $0.00 late fee — lands as another specific, checkable detail instead of background decoration. The ghost is worked into the desk scene, so the sponsor mark reads as part of the paperwork, and the sell line is stamped diagonally across the document itself, so the message cannot be cropped away from the meme. The post text carries the same numbers and the same "my agent paid it" line, so the picture and the words tell one joke, not two.
