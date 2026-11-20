# gta6-meme-x-01 — "The download is the final boss"

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. An AI judge
compares the posts two at a time; the top 50 share $500.

## The meme

`meme.png` — a gamer on his couch at dusk, controller in hand, pizza box and
energy drink cans on the coffee table, palm trees in the sunset outside the
window (Leonida energy). The TV shows the GTA VI install stuck at 99% with
4 hours remaining. The joke, top and bottom:

> WAITED 13 YEARS FOR GTA 6
> THE DOWNLOAD IS THE FINAL BOSS

Thirteen years since GTA V, and the last boss fight is the download bar.
make.fun is in the picture as its ghost mascot: the white ghost with the
sparkle eyes and the magenta star coin, sitting on the couch next to the
gamer, watching the same loading bar. The ghost is the real one from
make.fun's press kit, cut out of its logo mark and placed in the scene —
not a sticker in a corner.

## The post (not posted yet)

The post text Jay pastes with the picture is in
`~/workspace/makefun/gta6-meme-x-01-post.txt`: the joke, a tag of
@makefunai, the bounty link, the line that people and their AI agents can
earn real money on make.fun, and the play code. Post it from a public X
account, keep the post up and the account public until the results are out.

## The entry

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output` — that is all it does; the house reads the post
itself from X. `POST.json` is written only after the post exists:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`LICENSE` is MIT. Do not submit this repository until `POST.json` names a
real post — the placeholder-free entry is refused without one.
