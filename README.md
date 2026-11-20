# Till Delay Do Us Part — GTA 6 Meme for make.fun

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Tayuya69/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/Tayuya69/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

This is my v2 entry for **gta6-meme-x-01**, "Post a GTA 6 meme on X" — a $500 bounty where the top 50 entries share the pot. It closes on Monday 23 November at 21:00 WIB.

## Why v2 exists

The v1 entry finished at rank 1608 of 2638, with a judge score of 577,510, while the bar for the top 50 sits at 864,571 — nowhere near a payout.

The v1 joke — a GTA VI download stuck at 99% — simply did not land. It was a familiar gag with nothing new to notice on a second look, so v2 throws it out and starts from a different joke entirely.

## The meme

The v2 meme is a marriage certificate issued by the State of Leonida.

It joins **ONE PATIENT GAMER** and **GRAND THEFT AUTO VI** in marriage, after a thirteen-year engagement. The ceremony took place in Vice City, Leonida, with Jason and Lucia standing as witnesses.

The certificate itemises the marriage the way a real document would: the honeymoon luggage weighs in at 120 GB, and the price of the union is $79.99. Every field on it is part of the joke, which is why it reads like an official record of a very long, very expensive relationship.

The real make.fun ghost logo mark sits inside a magenta seal at the top of the certificate, so the sponsor is part of the document itself rather than a watermark pasted on afterwards.

A diagonal magenta rubber stamp cuts across the certificate and reads:

> RECEPTION PAID BY MY AI AGENT ON MAKE.FUN

And the kicker line at the bottom of the certificate reads:

> TILL DELAY DO US PART

That last line is the whole point of the meme. After thirteen years of waiting, the marriage is real — but so is the delay, and the vows admit it.

## The post

The meme goes up on X from **@bangjayHQ**. Jay posts it himself; the post text lives outside this repository.

- Play code: `makefun-north-pansy-macaroni`
- Referral code: `fmy43x6e`
- Bounty page: https://make.fun/bounty/gta6-meme-x-01

The post and the account must stay up and public until the results are out, so the entry can still be checked when judging finishes.

## Entry mechanics

This repository holds the meme image (`meme.png`), the post address (`POST.json`), and the small program that hands the post address to the grader (`main.ts`).

`main.ts` runs on Node 22 and uses only the standard library. It reads `POST.json` from the repository root, creates `/output` if it does not already exist, and copies `POST.json` into `/output`.

`POST.json` holds a single key, `url`, with the address of the X post. Until Jay posts, it holds a placeholder address for @bangjayHQ whose status id is nineteen zeros. Once the real post is live, that address is swapped in for the placeholder.

## Design notes

A formal document beats a scene illustration for this judge: a certificate gives the joke a structure to read through, and every line on it — the thirteen-year engagement, the 120 GB of luggage, the $79.99 price — lands as another specific, checkable detail instead of background decoration. The ghost is worked into the seal at the top, so the sponsor mark reads as part of the official paperwork, and the sell line is stamped diagonally across the document itself, so the message cannot be cropped away from the meme.
