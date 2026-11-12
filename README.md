# juliandominic.github.io

[LINK](https://juliandominic.github.io)

Built with [Hugo](https://gohugo.io). Everything is Markdown; pushing to `main` deploys via GitHub Actions.

## Editing

| What | Where |
| --- | --- |
| About me (home page) | `content/_index.md`. Text before the first `##` is the intro; each `##` heading becomes a section. |
| Blog intro line | `content/blog/_index.md` |
| Blog posts | `content/blog/<slug>.md` |
| Contact links, nav | `hugo.yml` |
| Images | `static/images/…`, referenced as `/images/…` |

Profile photo: put it at `static/images/profile.jpg` and uncomment `photo:` in `content/_index.md`.

## New post

```sh
hugo new blog/my-post.md   # creates a draft from archetypes/blog.md
hugo server -D             # preview at http://localhost:1313 (including drafts)
```

Front matter:

```yaml
---
title: "My post"
date: 2026-11-11
draft: true          # remove to publish
tags: [homelab, linux]
description: "Optional one-liner for the blog list (defaults to the first paragraph)."
cover: /images/blog/my-post.jpg   # optional thumbnail
---
```

Any other `content/<name>.md` becomes a standalone page at `/<name>/`; add it to `menus.main` in `hugo.yml` to show it in the nav.
