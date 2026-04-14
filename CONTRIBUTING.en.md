English | [中文](CONTRIBUTING.md)

# Contributing Guide

Thank you for your interest in the History of AI project! Below is the complete guide for contributing.

## How to Contribute

### Corrections

If you find factual errors, timeline discrepancies, or other issues:

1. Submit a [Correction Issue](https://github.com/zsjunai/history-of-ai/issues/new?template=correction.md)
2. Or submit a Pull Request directly with the fix

### Content Suggestions

To suggest new people, events, institutions, or topics:

1. Submit a [Suggestion Issue](https://github.com/zsjunai/history-of-ai/issues/new?template=suggestion.md)
2. After discussion and approval, claim the writing task

### Claim a Chapter

Many chapters are currently in a "to be completed" state. You are welcome to claim and write them:

1. Leave a comment on the corresponding Issue to claim it (to avoid duplicate work)
2. Fork the repository, create a branch, and write
3. Submit a Pull Request when finished

### Firsthand Accounts

If you are a firsthand witness in the AI field (attended important conferences, worked at key institutions, or worked alongside people featured in the book), you are welcome to contribute first-person recollections in the "Firsthand Accounts" section of the relevant chapter.

---

## Development Workflow

### Environment Setup

```bash
# Clone the repository
git clone https://github.com/zsjunai/history-of-ai.git
cd history-of-ai

# Install dependencies
npm install

# Start local preview (with hot reload)
npm run docs:dev

# Build verification
npm run docs:build
```

### Branch Naming Convention

| Branch | Purpose |
|--------|---------|
| `main` | Main branch, always in a deployable state |
| `feat/xxx` | New content (e.g., `feat/biography-hinton`) |
| `fix/xxx` | Error corrections (e.g., `fix/timeline-date`) |
| `docs/xxx` | Documentation improvements (e.g., `docs/readme-update`) |
| `style/xxx` | Style adjustments |

### Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>: <description>

<optional body>
```

| type | Description | Example |
|------|-------------|---------|
| `feat` | New content or feature | `feat: write complete content for Biographies - Hinton` |
| `fix` | Error correction | `fix: correct the year AlphaGo defeated Lee Sedol` |
| `docs` | Documentation improvement | `docs: update README project scale data` |
| `style` | Style adjustment | `style: adjust homepage card spacing` |
| `refactor` | Refactoring | `refactor: restructure timeline data` |
| `chore` | Chores | `chore: update dependency versions` |

### Pull Request Process

1. Ensure `npm run docs:build` passes locally
2. Ensure content follows the writing guidelines below
3. Use commit convention format for PR titles
4. Describe the changes and rationale in the PR description
5. If the content involves factual claims, include reference sources

---

## Writing Guidelines

### Language

- **Primarily Chinese**, using modern vernacular
- **Retain English originals for key terms**; on first occurrence, use the format: `Chinese (English Term)`
  - Example: 感知机 (Perceptron), 反向传播 (Backpropagation)
- **Chinese names preferred**; on first occurrence, use the format: `Chinese Name (English Full Name)`
  - Example: 图灵 (Alan Turing), 辛顿 (Geoffrey Hinton)
- **Always use Chinese translations when a common one exists**; do not use English-only names
  - Correct: 奥特曼 (Sam Altman)
  - Incorrect: Sam Altman

### Citation Guidelines

- Paper citation format: Author, "Title", Year
  - Example: Turing, "Computing Machinery and Intelligence", 1950
- Include source links when citing facts whenever possible
- For controversial claims, note different viewpoints
- All chapters should have a "References" section at the end

### File Naming

- Use lowercase English with hyphens
- Annals: `01-dawn.md`, `02-golden-age.md` (two-digit prefix)
- Houses: `openai.md`, `mit-ai-lab.md`
- Biographies: `turing.md`, `fei-fei-li.md`
- Treatises: `neural-networks.md`, `ai-hardware.md`

### Chapter Title Format

| Style | Title Format | Example |
|-------|-------------|---------|
| Annals | `# Annals X - Title (Period)` | `# Annals I - The Dawn (1943–1956)` |
| Houses | `# Houses - Institution Name` | `# Houses - OpenAI` |
| Biographies | `# Biographies - Chinese Name (English Name)` | `# Biographies - 图灵 (Alan Turing)` |
| Treatises | `# Treatises - Title` | `# Treatises - The Rise and Fall of Neural Networks` |

### Markdown Format

- `#` Level 1 heading (article title, only one per article)
- `##` Level 2 heading (sections)
- `###` Level 3 heading (subsections)
- **Bold** for key years and important terms
- *Italics* for paper and book titles
- Blockquote `>` for a one-sentence summary at the beginning of a chapter

### Required Chapter Structure

Every complete chapter should include the following sections:

```markdown
# Title

> One-sentence summary (blockquote)

Main content...

::: tip Historian's Commentary
The author's subjective commentary and reflections.
:::

## Firsthand Accounts

::: info Seeking Contributions
If you have access to relevant firsthand information, please [submit a contribution](https://github.com/zsjunai/history-of-ai).
:::

## References

- Source 1
- Source 2
```

### Templates for Each Style

**Annals (Chronological History)**:

```markdown
# Annals X - Title (Period)

> One-sentence summary of this era

## Core Debates

## Key Events

### Event One (Year)

### Event Two (Year)

## Representative Achievements

::: tip Historian's Commentary
Commentary...
:::

## Firsthand Accounts
...

## References
```

**Biographies (Personal Biographies)**:

```markdown
# Biographies - Chinese Name (English Name)

> One-sentence evaluation

## Life

## Major Contributions

## Representative Works

## Historical Assessment

::: tip Historian's Commentary
Commentary...
:::

## Firsthand Accounts
...

## References
```

**Houses (Institutional Histories)**:

```markdown
# Houses - Institution Name

> One-sentence summary

## Overview

## Key Figures

::: tip Historian's Commentary
Commentary...
:::

## Firsthand Accounts
...

## References
```

---

## Image Guidelines

### Copyright Requirements

All images must meet one of the following conditions:

- **Public Domain**
- **Creative Commons License** (CC0, CC-BY, CC-BY-SA)
- **Official media assets**

### Image Directory

```
docs/public/images/
├── people/      # Portrait photos
├── events/      # Historical events
└── companies/   # Institution logos
```

### Naming Rules

- Lowercase English + hyphens: `turing.jpg`, `dartmouth-conference.jpg`
- Recommended dimensions: width 600-800px
- Format: JPG or PNG

### When Submitting Images

- Note the source and license for each image in the PR
- Update the image inventory in `docs/public/images/README.md`

---

## Data Guidelines

### Timeline Data

All timeline events are maintained centrally in `docs/.vitepress/data/timeline.ts`. The homepage animation and the chronology page share this data source.

When adding a new event, provide:
- `year`: Year (string)
- `event`: Event description (in Chinese)
- `link`: Associated page path (optional)

### Configuration Files

- Sidebar navigation: `docs/.vitepress/config.ts`
- Theme styles: `docs/.vitepress/theme/styles/`
- Components: `docs/.vitepress/theme/components/`

After modifying configuration, be sure to run `npm run docs:build` to verify the build passes.

---

## Code of Conduct

- Maintain an objective and neutral attitude toward historical records
- Strive for fairness in evaluating individuals; present multiple perspectives
- Respect the work of other contributors
- Discuss controversial content in Issues first
- No personal attacks or discriminatory remarks
- Do not submit false or unverified information

---

## Contributor License Agreement (CLA)

By submitting a Pull Request to this project, you agree to the following terms:

1. **You own the copyright to the content you submit**, or have obtained the necessary authorization
2. **You grant the project maintainers a perpetual, worldwide, royalty-free, irrevocable license** to use, copy, modify, and distribute your submitted content in any form, including but not limited to:
   - Publishing under the CC-BY-SA 4.0 license in this open-source project
   - Publishing in print, e-book, or other commercial formats
   - Translating into other languages
3. **You retain the copyright to your submitted content**; you are still free to use your own content
4. **You understand that your contribution will be made public under the CC-BY-SA 4.0 license**, and anyone may use it in compliance with that license

In short: your contribution remains yours, but you agree that the project may use it in any form (including potential future commercial publication). You will receive credited acknowledgment in publications.

If you do not agree to the above terms, please do not submit a Pull Request. You may still provide suggestions and corrections through Issues, which are not subject to the CLA.

---

## Contact

- Email: 987835330@qq.com
- GitHub: [@zsjunai](https://github.com/zsjunai)
- Issues: [Submit an Issue](https://github.com/zsjunai/history-of-ai/issues)
