# How to Contribute

We welcome contributions of every kind. Whether you fix a typo or write an entire biography, every contribution makes this book better.

## Contribution Tiers

| Type | Effort | Difficulty |
|------|--------|------------|
| Fix a typo / broken link | 5 minutes | ⭐ |
| Add a timeline entry (with link) | 15 minutes | ⭐ |
| Add a dictionary entry for an existing person (avatar / bio) | 30 minutes | ⭐⭐ |
| Write a biography or institutional history | 2–4 hours | ⭐⭐⭐ |
| Translate a chapter into English | 2–6 hours | ⭐⭐⭐ |

## How to Contribute

### 1. Report an issue

Found a factual error, an omission, or a broken link? Open an Issue on GitHub:

- **Correction**: use the "Content Correction" template; specify the location (path or link) and the correct information (please cite a source).
- **Suggestion**: use the "Content Suggestion" template; describe the chapter or event you would like to see added.

### 2. Submit changes

```bash
# 1. Fork the repository, then clone your fork
git clone https://github.com/<your-username>/history-of-ai.git
cd history-of-ai

# 2. Install dependencies
npm install

# 3. Start local preview (http://localhost:10001)
npm run docs:dev

# 4. Create a branch
git checkout -b feat/your-topic

# 5. After editing, verify the build (no errors)
npm run docs:build

# 6. Commit and push
git commit -m "docs: short description of your change"
git push origin feat/your-topic

# 7. Open a Pull Request on GitHub
```

### 3. Join the discussion

Share your views on AI history in Issues or Discussions, and propose new directions for chapters.

## Writing Standards

### Truth above all

- **Facts before flourish**: every name, year, event, and number must hold up under scrutiny. When in doubt, leave it out — never invent.
- **Distinguish fact from legend**: many AI stories (such as the details of Pitts writing to Russell) exist in multiple versions. Adopt the mainstream consensus and mark contested details with "reportedly" or a citation.
- **Numbers must be exact**: vacuum-tube counts, paper publication years, ages — these slip easily. Cross-check against at least two independent sources before committing them.
- **Prefer primary sources**: original papers and first-hand recollections beat second-hand summaries.

### Voice and style

- **Narrative first**: tell history as a story. Drive forward through scenes and human action; avoid the dryness of a textbook.
- **Mix long and short sentences**: long sentences open up causation; short sentences create rhythm and judgment. Avoid a wall of long sentences.
- **Grave but not stiff**: keep the overall tone serious and literary. Metaphor and image are welcome; ornamental prose is not.
- **Detail does the work**: a single paper, a single meeting, a single decision can carry an argument far better than a sweeping generalization.

### Format conventions

#### Mixing Chinese and English

```markdown
Primary text in the local language, with key terms in their original English form: 中文（English Term）
```

(For the English edition, terms in their original language can be glossed in parentheses where useful.)

#### The `<Person id="xxx" />` component

The **first appearance** of any person in a chapter must use the `<Person>` component — it shows a hover card with the English name, nationality, field, dates, and a short bio. Subsequent mentions can use only the name.

```markdown
<Person id="turing" /> published *On Computable Numbers* in 1936... Turing later proved...
```

If the person is not yet in the dictionary at `docs/.vitepress/data/people.ts`:

1. **Preferred**: add them to the dictionary first, then use the component
2. **Temporary**: use `中文名 (English Name)` inline

When adding a person to the dictionary, include `id`, `name`, `englishName`, `nationality`, `field`, `born`, `died` (optional), `bio`, and `avatar` (optional).

#### Three required closing sections

Every chapter must end with:

```markdown
::: tip Historian's Note
A short historical commentary in the spirit of *Records of the Grand Historian*: 6–12 lines distilling the chapter's argument and historical place.
:::

## Eyewitness Accounts

::: info Open Call
If you took part in or witnessed XXX, please [contribute](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Verifiable papers, books, or reports — with author, year, and source.
2. ...
```

Biographies additionally require a **Selected Works** section as a Markdown table; other forms may omit it.

### Chapter-count synchronization (important)

After adding or removing a chapter, every place that records the chapter count must be updated:

1. `CLAUDE.md` — the five-fold structure table
2. `README.md` — the structure table and the chapter list
3. `docs/guide/introduction.md` and `docs/en/guide/introduction.md` — the chapter counts in the preface
4. `docs/index.md` and `docs/en/index.md` — the chapter counts in the homepage features
5. `docs/.vitepress/theme/components/StatsBar.vue` — the `number` values in the stats bar

## Image Licensing

Only images from the following sources are accepted. News-media photos, scraped social-media images, and any image of unclear provenance are **not** accepted.

| Source | Accepted | Notes |
|--------|----------|-------|
| Public Domain | ✅ | Copyright expired or waived |
| CC0 / CC-BY / CC-BY-SA | ✅ | Credit author + original link |
| Official Press Kit | ✅ | Materials a company or institution releases for free use |
| Getty Images / news photos | ❌ | Not accepted, even for academic use |

Every image must be logged in `docs/public/images/people/CREDITS.md` with: filename, person, source URL, uploader, license, and year of capture.

## Pull Request Checklist

Before opening a PR, please check:

- [ ] Content is factually accurate, with citations for key claims
- [ ] First mention of any person uses `<Person id="xxx" />` or `Name (English Name)`
- [ ] Chapter ends with "Historian's Note" + "Eyewitness Accounts" + "References"
- [ ] `npm run docs:build` runs without errors or warnings (chunk-size warning excepted)
- [ ] Chapter counts updated everywhere they appear (if you added or removed a chapter)
- [ ] Image sources logged in `CREDITS.md` (if you added images)
- [ ] Commit message uses a conventional prefix: `feat: / fix: / docs: / refactor:` etc.
