# House · Anthropic

> While others raced for capability, this company put "AI safety" on its sign—only to discover that to talk about safety, it first had to take a seat at the capability table.

## Exodus: From OpenAI to a New Hearth

In late 2020 and early 2021, the mood inside OpenAI was tense. GPT-3 had already shown remarkable power, and the company was charging toward commercialization—an exclusive compute deal with Microsoft, an API rollout, exploration of consumer products. A faction of researchers grew uneasy with that direction. They believed the rate at which large-model capability was growing now outran the rate at which humans could understand it, and that OpenAI's structure and commercial pressures were turning "safety first" into a slogan.

In early 2021, several key researchers resigned in succession. The leader was VP of research **Dario Amodei (1983–)**. He held a Princeton PhD in theoretical physics, had joined OpenAI in 2016, led the GPT-2 and GPT-3 projects, and was a central figure behind InstructGPT—later the technical foundation of ChatGPT. He left alongside his sister Daniela Amodei (former VP of safety and policy at OpenAI), **Tom Brown (1990–)** (first author of the GPT-3 paper), **Jared Kaplan (1986–)** (author of the scaling laws paper), Chris Olah (head of OpenAI's interpretability team), Sam McCandlish, Tom Henighan, Jared Mueller, Jack Clark, and others—roughly half of the GPT-3 paper's author list.

In May 2021 they registered Anthropic in San Francisco, structured as a Public Benefit Corporation (PBC), with about twenty people and a seed round of $124 million—an astronomical figure for a research lab, but the founders judged that frontier-model training costs would only climb, and they had to start with full magazines.

## The Color of Safety Research

Anthropic placed AI safety as its first principle. But its conception of "safety" did not mean retreating from capability; on the contrary, the team believed only a lab at the frontier of capability had the right to talk about safety.

Three lines of research were established.

**The first is mechanistic interpretability**. Chris Olah is one of the field's pioneers, having published a body of work on neural-network "circuits" during his time at Google Brain and OpenAI. At Anthropic he systematized the project: dissecting each layer of the network into intelligible features, attempting to answer the black-box question of "what is the model actually thinking?" Across 2023–2024 the team released *Toy Models of Superposition*, *Scaling Monosemanticity*, and *Extracting Interpretable Features*—offering unprecedented visibility into the internals of the Claude series.

**The second is alignment technique**. *Constitutional AI*, published in December 2022, is the line's signature work. Its core idea: a written "constitution"—a set of human-readable principles—guides the model to critique and revise its own outputs, sharply reducing dependence on human feedback data. The method became the foundation of Claude training and is widely viewed as the most important alignment paradigm beyond RLHF.

**The third is frontier risk evaluation**. The company runs a dedicated "Frontier Red Team" that tests for extreme risks—biological and chemical weapons, cyberattacks, autonomous self-replication—before model release. In 2023 Anthropic published its **Responsible Scaling Policy (RSP)**, defining the safety conditions a company must satisfy at each "AI Safety Level" (ASL). The policy was later adopted as a reference by Google DeepMind, OpenAI, and others.

## Claude: From Number Two to a Top Contender

Anthropic's public product line centers on the Claude series, named after the father of information theory, **Claude Shannon (1916–2001)**.

In March 2023, Claude 1.0 quietly launched via Slack integration. Its reasoning was on par with GPT-3.5, and its control of harmful output was visibly stricter. In July of the same year Claude 2 opened to the public and pushed the context window to 100K tokens—an industry first that could swallow an entire short novel or a large codebase in one pass.

The leap that brought Claude into the top tier came with the **Claude 3 family** in March 2024. Anthropic for the first time tiered its products by capability: Haiku (fast and cheap), Sonnet (balanced), Opus (strongest). Opus surpassed GPT-4 on multiple benchmarks—the first time, the press noted, that an outside model had bested GPT-4 head-on a year after its release. **Claude 3.5 Sonnet**, released that June, raised the ceiling further atop Opus, with coding capability so strong it became the default daily tool for many developers. **Computer Use**, launched in October, gave Claude the ability to drive screens, move cursors, and fill forms—the first push of large models toward agents that could actually act.

From 2025 the cadence accelerated visibly: Claude 3.7 Sonnet (with adjustable reasoning depth), the Claude 4 family (Opus 4, Sonnet 4, Haiku 4), and Claude 4.5 followed in succession. **MCP (Model Context Protocol)**—an open standard Anthropic released in November 2024 that lets third-party tools be invoked by any LLM through a unified interface—was rapidly adopted across the industry as a de facto standard. Artifacts (interactive documents inside conversations), Projects (persistent context containers), and code modes continued to multiply.

## Capital and Compute: Who Pays for Safety

The most charged chapter of Anthropic's story is the tension between capital and independence.

**Google** invested $550 million in 2023, later topped up to roughly $2 billion, integrating Claude into Google Cloud Vertex AI. **Amazon** announced an investment of up to $4 billion in September 2023, added $2.75 billion in March 2024 to complete the first tranche, and added another $4 billion in November 2024—**bringing Amazon's total commitment to $8 billion**, the largest external investment in AWS history. In return, the bulk of Anthropic's training migrated to AWS Trainium and Trainium2 chips, and Claude became the flagship model on AWS Bedrock.

Repeated funding rounds across late 2024 and 2025 pushed Anthropic's valuation steadily upward: roughly $18 billion in early 2024, into the $60 billion class by late 2024, then between $100 billion and $180 billion across 2025 (different rounds carried different valuations). Headcount grew from about 50 in 2022 to over 2,000 by 2026.

The path raised a question Anthropic has never escaped: how "independent" can a company be if its survival rests on $8 billion from Amazon and additional investment from Google? The founders' answer has been consistent: they chose PBC structure, the mission is written into the charter, and the charter is written into shareholder agreements; so long as decisions are compliant, no single investor can dictate direction. Critics counter that when AWS is simultaneously your largest investor and your largest customer, "independence" becomes a word that must be re-earned every day.

## Research Output and Industry Influence

Anthropic may publish at the densest cadence of any frontier lab. From 2023 to 2025 alone the company published over a hundred papers on "trustworthy AI"—covering chain-of-thought faithfulness, model self-knowledge, jailbreak attack and defense, alignment faking, long-horizon goal extrapolation, multi-agent risk, evaluation benchmarks, and more. These papers are cited not only in academia but also enter the policy circle: in 2024 the UK's AI Safety Institute (AISI) signed a pre-release evaluation agreement with Anthropic, with the U.S. AI Safety Institute (USAISI) following soon after.

Anthropic was also among the earliest companies to publish "model cards" and "responsible disclosure" reports systematically. Each major Claude release ships with a multi-dozen-page evaluation report covering bias, dangerous capabilities, jailbreak resistance, and education and finance use cases. The practice has since become a near-mandatory industry norm.

## A Mirror of OpenAI

In a sense, Anthropic is OpenAI's mirror image:

- OpenAI traces a "non-profit → capped profit → quasi-corporation" arc; Anthropic began directly as a PBC.
- OpenAI is the most aggressive on commercialization; Anthropic the most conservative on safety.
- OpenAI is deeply tied to Microsoft; Anthropic to Amazon and Google on two lines.
- OpenAI won consumer mindshare with ChatGPT; Anthropic is building a moat on the B2B side (coding, enterprise agents).
- OpenAI weathered a board coup in 2023; Anthropic, under PBC structure, has avoided governance crisis but has paid for it in critiques that the structure is "too slow."

This contrast itself constitutes the most important duality in mid-2020s AI: one company holds "reaching AGI" as the first goal, the other holds "safely reaching AGI" as the first goal. Both accept the endgame as inevitable; the dispute is over the path.

## Anthropic Today

By spring 2026, Anthropic exceeds 2,000 employees, sits in the global AI top tier by valuation (behind only OpenAI and xAI), and Claude is used by audiences ranging from individual developers to large enterprises and governments. The company has opened offices in London, Dublin, and Zurich. Dario Amodei has become one of the most frequently cited research-CEOs in AI policy debate—his warnings about "AI exceeding human capability within the next five to ten years" recur in congressional testimony, *The Economist* interviews, and his own essay *Machines of Loving Grace* (October 2024).

But Anthropic has entered its hardest stretch: balancing capability against safety, business against mission, independence against capital dependence. None of these has a clean answer, and the company is answering them while it walks.

::: tip Historian's Note
Watching Anthropic take shape, one sees a response to the era utterly different from OpenAI's: the same belief that AI will change everything, paired with the conviction that it must be tamed rather than released. The Amodei siblings' departure from OpenAI carried out more than people—it carried out a whole methodology of "research first, safety first, charter first." Constitutional AI, interpretability, RSP—each is a technical answer to the fear that "we do not understand what we are building." Yet capital does not care for charters. With $8 billion from Amazon, valuations approaching $200 billion, headcount from 20 to 2,000—"slow" itself becomes the company's largest cost. Whether Anthropic can hold its safety vow at the rim of a commercial volcano is not only one company's fate but a touchstone for whether the AI safety line can survive at all.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Anthropic, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Anthropic (2021). "Anthropic: A New AI Safety Company." Company announcement.
2. Bai, Y. et al. (2022). "Constitutional AI: Harmlessness from AI Feedback." arXiv:2212.08073.
3. Anthropic (2023). "Responsible Scaling Policy, Version 1.0."
4. Anthropic (2024). "The Claude 3 Model Family: Opus, Sonnet, Haiku." Technical Report.
5. Olah, C. et al. (2023). "Toy Models of Superposition." Transformer Circuits Thread.
6. Templeton, A. et al. (2024). "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet." Anthropic Research.
7. Amodei, D. (2024). "Machines of Loving Grace." Personal essay, October 2024.
8. Anthropic (2024). "Introducing the Model Context Protocol." Product announcement.
9. AWS (2024). "Amazon Announces $4B Additional Investment in Anthropic." Press release.
10. Metz, C. (2023). "Ex-OpenAI Leaders Form Anthropic to Build Safer AI." *The New York Times*.
11. The Economist (2024). "Interview with Dario Amodei on AI safety and scaling."
