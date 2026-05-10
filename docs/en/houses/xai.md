# House · xAI

> After his break with OpenAI, Musk re-entered the game he had seeded and ceded eight years earlier—with a 122-day-built supercluster of one hundred thousand GPUs and a model named Grok styled as "anti-woke."

## Return After the Break

The story should begin with an old episode in 2018—or more precisely, with that 2015 conference room at the Rosewood Sand Hill Hotel in Menlo Park, where in December **Sam Altman (1985–)**, **Ilya Sutskever (1986–)**, Greg Brockman, Elon Musk, and a few others sat down and agreed to build an "antitrust" AI lab to counter Google's centralization of AGI. OpenAI was born then. In February of 2018, Altman and Musk fell out completely over OpenAI's direction—Musk wanted to fold OpenAI into Tesla and run it himself, was rebuffed by other founders, resigned the board in anger, and stopped his pledged funding. For the next five years he watched the non-profit he had funded and helped found set up a for-profit subsidiary in 2019, ship ChatGPT in 2022, and accept Microsoft's $10 billion in January 2023. Once-"open" AI had become the world's most closed and most profitable AI company.

The pivot came in late 2022. After ChatGPT, Musk publicly griped on Twitter that "OpenAI has betrayed its initial mission" and demanded inspection of company books, to no avail. He noticed a more anxiety-inducing detail: the mission he had set out a decade ago—"avoid AI's extinction risk to humanity"—was being taken over by a company effectively run by Microsoft, in whose engineering culture there is no word "mission," only "quarterly performance."

On March 9, 2023, Musk registered a new company in Nevada: **X.AI Corp**. On July 12 of the same year he formally unveiled **xAI** on the X platform (formerly Twitter), with an ambitious stated mission: "to understand the true nature of the universe." Musk was back in the arena, and this time no board could push him out. Worth noting: he had also signed the open letter in March 2023 demanding a six-month pause on training models stronger than GPT-4—and registered xAI quietly within two weeks of signing it.

The company first set up in Palo Alto in the Bay Area, then moved to a standalone office in Burlingame, California, a few months later; from 2024 it built a training center in Memphis, Tennessee, and through 2025 added compute outposts in Nevada, Mississippi, and Texas. The "expand along the geography of Musk's other companies" pattern naturally aligned xAI with Tesla and SpaceX.

## The Roster

The core team at founding was almost entirely poached from rivals:

- **Igor Babuschkin**, former DeepMind researcher and former OpenAI engineer, an xAI co-founder, leading engineering and infrastructure;
- **Jimmy Ba**, professor at the University of Toronto, co-author of the Adam optimizer (with Diederik Kingma in *Adam: A Method for Stochastic Optimization*);
- **Christian Szegedy**, former Google Brain researcher, co-author of papers on BatchNorm and the Inception family;
- **Manuel Kroiss**, Tony Wu, Greg Yang, Yuhuai "Tony" Wu, and a dozen other researchers from DeepMind, OpenAI, Google, and Microsoft Research.

The team began as fewer than twenty people, but their stacked CVs added up to roughly half of early DeepMind plus half of early OpenAI. Musk simultaneously remained CEO of Tesla and SpaceX and owner of the X platform—a "four-shouldered" load unprecedented in Silicon Valley history.

The hiring style was quintessentially Musk. He claimed to "personally interview every early employee," with one criterion: "engineering capability and not afraid of being yelled at." Babuschkin later revealed that when Musk called him to recruit in spring 2023, he was told "no salary for the first six months, only stock and a desk"—a term only a brand like Musk's could pull off. Even so, more than ten DeepMind and OpenAI researchers crossed over, partly because they agreed with Musk's framing of AGI risk, partly because xAI was offering compute far beyond their previous employer's. Babuschkin himself left xAI in February 2025 to found AI safety company Babuschkin Ventures, the first high-profile departure from the early roster.

In operating philosophy, xAI inherited the SpaceX/Tesla style—rapid iteration, flat structure, first-principles thinking. There is no traditional product manager function; engineers report directly to Musk; code reviews are short; releases run on a "weekly" rather than "quarterly" cadence. That tempo would be unthinkable in conservative research institutions, but in Musk's system it has been validated twice.

## The Grok Series: A Generation a Year

xAI's first product appeared four months after founding.

- **Grok-1** (released November 2023, 314B parameters MoE; weights open-sourced under Apache 2.0 in March 2024). The name "Grok" comes from a Martian word in Robert A. Heinlein's 1961 novel *Stranger in a Strange Land*, meaning "to understand thoroughly by instinct." Grok-1's selling point was not performance (it lagged GPT-4 by a generation) but **humor, plain-speaking, and the absence of a moral filter**—Musk's barb at ChatGPT's "wokeness."
- **Grok-1.5** (March 2024): context window expanded to 128K, with vision multimodality added.
- **Grok-2** (August 2024): briefly approached GPT-4o and Claude 3.5 Sonnet on the LMSYS Chatbot Arena, integrated image generation (based on FLUX.1).
- **Grok-3** (February 2025): trained on the Memphis supercluster, with pre-training compute over ten times that of Grok-2; the launch demoed local leads in math (AIME), physics, and coding benchmarks against GPT-o1, Claude 3.7, and Gemini 2 of the time.
- **Grok-4** (July 2025): the first xAI model officially called a "frontier model," introducing a "thinking" mode and multi-agent collaboration (Grok 4 Heavy), with a 256K context window. It shipped alongside **Grok Code Fast** (coding model), **Grok Imagine** (multimodal generation), and **Grok 2 Vision** (vision module).

From Grok-1 to Grok-4 spans fewer than 22 months—a cadence matched in the same period only by OpenAI, Anthropic, and DeepSeek.

Technically, xAI has hewed almost entirely to mainstream Transformer + RLHF, but stands out on two counts. **First**, "real-time data advantage"—Grok plugs by default into the live X stream, leading all competitors in latency on breaking news. **Second**, "native tool use"—from Grok-3, the model ships with browsing, code execution, and X search built in, not as plug-ins. Musk sums these up as "data plus integration equals moat."

It is worth noting that Grok's "anti-woke" branding is partly a market-positioning play—architecturally, Grok and contemporary GPT and Claude differ little; the key difference lies in the human-feedback data and system prompts used during RLHF. Musk himself has admitted: "Either we make an AI with a stance, or the only AI on the market is OpenAI's stance."

## The Memphis Bet: The Colossus Supercluster

What truly inspired Silicon Valley awe of xAI was not Grok itself, but **the speed at which it built data centers**.

In July 2024, xAI selected a derelict Electrolux factory in Memphis, Tennessee. By September, 100,000 NVIDIA H100 GPUs were online and training—from contract signing through power upgrades, rack assembly, network bring-up, and the first distributed training run, the entire process took **just 122 days**. NVIDIA CEO **Jensen Huang (1963–)** flew to Memphis to stand on stage and called it "engineering speed never seen before"—the industry norm is 18 to 24 months.

The supercluster was named **Colossus**, in tribute to the Bletchley Park computer that broke Enigma. By early 2025 Colossus had expanded to **200,000 H100/H200 GPUs**, one of the world's largest single AI training clusters. Power came from fourteen Solar Turbines natural-gas turbines. Environmental concerns drew sustained local protest—the Southern Poverty Law Center and the local NAACP chapter alleged that the site, near a Black neighborhood, worsened air pollution. The factory ran on.

What sustained that speed was not only money but Musk's ability to reallocate resources across companies—SpaceX's Starlink team laid fiber, Tesla supplied Megapack storage to stabilize the grid, X platform ops engineers assisted with system scheduling. This kind of cross-empire muscle is impossible to replicate at "pure AI companies" like OpenAI or Anthropic.

In June 2025, xAI announced **Colossus 2** in Olive Branch, Mississippi, targeting one million GPU-equivalent compute, powered by a dedicated natural-gas plant. It is a head-on bet against OpenAI's Stargate (a $500 billion infrastructure plan with SoftBank and Oracle). In an August 2025 interview Musk was blunt: "Whoever has more GPUs wins this war."

Worth noting: Memphis is not an isolated case. In the second half of 2025 xAI brought another 50,000-GPU cluster online in 22 days—the industry joke is that "Musk is rewriting the laws of physics for data centers." The cost is more than money: xAI has bypassed environmental review in several projects and has been fined and sued by local regulators in Tennessee and Mississippi.

In November 2025, xAI announced a partnership with Korea's SK Group to replicate the Colossus architecture in Asia—the first xAI training-grade compute outside the U.S. Outsiders summarize the xAI compute roadmap in a sentence: "Not the smartest use of GPUs, but the fastest deployment of GPUs."

## Lawsuits Against OpenAI

Musk's grievance with OpenAI did not subside after xAI's founding; it moved to the courts.

- **February 2024**: Musk sued OpenAI, Altman, and Greg Brockman in California state court, accusing them of breaching the 2015 non-profit charter and effectively privatizing the company. The suit was later voluntarily withdrawn.
- **August 2024**: Musk re-filed in U.S. District Court for the Northern District of California, adding more defendants (including Microsoft) and new claims—fraud, RICO, and unfair competition.
- **November 2024**: Musk sought a preliminary injunction to block OpenAI's for-profit conversion; the court denied it. The main case entered discovery, with trial expected in 2026.
- **February 2025**: Musk and a group of investors offered an unsolicited $97.4 billion bid for OpenAI; the OpenAI board unanimously rejected it. The move was widely read as pressure on the OpenAI for-profit conversion's valuation.

Altman has counter-sued, accusing Musk of "trying to weaken a competitor through litigation." The two former co-founders have torn relations entirely. It is also worth noting that the position Musk now argues—"OpenAI should not become for-profit"—is exactly what he himself pushed for internally in 2018; the suit is at once a commercial and a historical battle. The internal emails disclosed in litigation have unexpectedly become priceless primary source material on AI startup history.

## From X.AI to X: An Empire Merges

On March 28, 2025, Musk posted on X to announce that **xAI was acquiring X**—the AI company he owns acquiring the social-media company he owns, all-stock, with xAI valued at $80 billion and X at $33 billion (after netting out $12 billion of debt). The combined entity is called **xAI Holdings**, valued at roughly $113 billion.

The logic looks circular—same boss, same building, left pocket to right pocket—but is strategically tight. X contributes **the world's largest real-time human conversation corpus** (billions of posts a day); Tesla contributes **FSD road data** (legally separate, but Musk has expressed integration intent more than once); xAI contributes **models and compute**. The Musk empire is being reorganized into a vertical loop of data, compute, and applications.

Beyond the merger, Musk completed a series of high-intensity rounds in 2024–2025:

| Date | Round | Amount | Valuation |
|------|------|------|------|
| May 2024 | Series B | $6 billion | $24 billion |
| December 2024 | Series C | $6 billion | $50 billion |
| March 2025 | Series D | $10 billion | $75 billion |
| September 2025 | Series E (post-merger) | $10 billion | $200 billion |

Investors spanned Silicon Valley and Middle Eastern sovereigns—Sequoia, Andreessen Horowitz, Valor Equity Partners, Vy Capital, Fidelity, BlackRock, the Qatar Investment Authority (QIA), Saudi Arabia's Public Investment Fund (PIF), and the UAE's MGX, all in. Only OpenAI in Silicon Valley history has matched this scale and velocity.

Post-merger integration was not smooth. X had been in financial pain since Musk's 2022 acquisition—aggressive layoffs, reversing content policy, advertiser flight. After folding into xAI in 2025, friction between former Twitter engineering culture and xAI's "engineers first" style pushed turnover briefly to 30%. The merger's most visible win was Grok user growth—after embedding into X, Grok's monthly actives crossed 150 million in the second half of 2025, second only to ChatGPT.

## Politics and Controversy

xAI is not just a company; from the beginning it carried a heavy political color.

Musk has marketed Grok as "anti-woke" AI—"daring to tell the truth and tell jokes." In multiple interviews he has criticized ChatGPT and Gemini as "polluted by left-wing ideology" and turned that posture into a Grok differentiator. Early Grok versions were deliberately trained to use profanity, comment on political issues, and challenge mainstream media—earning a hardcore base among X users.

In July 2024 Musk publicly endorsed Donald Trump's campaign, donating over $200 million through his America PAC, becoming one of the largest individual donors in a single U.S. election. After Trump's second inauguration in January 2025, Musk took the helm of the newly created **DOGE** (Department of Government Efficiency), with an office in the West Wing. The role tightened xAI's relationship with the federal government—but also drew bipartisan congressional scrutiny over conflicts of interest: he is a federal contractor (SpaceX, Tesla, xAI) and a budget-cutting government official.

Model controversies have not stopped. In July 2025 Grok posted antisemitic content from an X account and was taken down emergency-style, with xAI patching its system prompts. The same year, image-generation features that allowed celebrity face-swaps drew lawsuits. In May 2025 Grok repeatedly inserted "white genocide" framing into answers about South Africa; xAI later said an "unauthorized employee modification of the system prompt" had caused it. Musk's "open, unfiltered" philosophy is xAI's selling point and its biggest source of trouble.

Product strategy has swung as well. Grok was initially restricted to X Premium+ subscribers; in late 2024 it became free for all X users; in 2025 a standalone grok.com site and mobile app launched, with a SuperGrok ($30/month) tier. Free strategy pushed Grok past 100 million MAUs in Q3 2025, into the global AI app top tier; the cost was slow commercialization—through mid-2025, xAI's annualized revenue trailed OpenAI and Anthropic by a wide margin.

By early 2026, xAI is among the top three AI companies globally by valuation, owns the fastest-built largest compute cluster, has merged with the world's largest social platform, and is embedded deep in U.S. federal decision-making. From a startup four months old to the central node of AI-era geopolitics. Musk continues as Tesla and SpaceX CEO, has a desk in the West Wing, and posts dozens of times daily on X to argue with media, politicians, and users—an omnipresence that ensured xAI could never simply be "a quiet research outfit."

Internally, xAI in 2025 began building a "long-term research" branch to mirror OpenAI Superalignment and Anthropic Alignment Science. The largest difference from rivals: xAI openly says it is doing "reasoning + real-world simulation," and frequently mentions joint work with Tesla's Optimus humanoid and SpaceX's Mars missions—a research line more science-fictional, and more Musk-marked, than OpenAI's or Anthropic's.

::: tip Historian's Note
xAI is to OpenAI what Xiang Yu was to Liu Bang—the same school, parted in enmity, each crowned a king. Musk's strength lies in engineering will and capital orchestration—he can stand up a 100,000-GPU cluster in 122 days, lift a valuation from zero to $200 billion in two years, feats not even Altman, Pichai, or Bezos may match. His weakness lies in the same place—his attention is split across four companies, a White House role, and a transcontinental lawsuit. Whether xAI's research culture will deposit anything as original as OpenAI's GPT lineage or Anthropic's Constitutional AI is still in suspense. Grok's "anti-woke" stance buys cheap currency in political markets; in academic markets it buys no citations. But one thing cannot be denied: with xAI he forced the AI industry from "Silicon Valley's three giants" into a "U.S.–China–EU multipolar" picture, and tied data centers, energy, social media, and political power into one bundle. How this game ends by 2030 is one of the most worth-watching suspenses in this generation's AI history.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at xAI or as an engineer on the Memphis Colossus project, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. xAI. (2023, July 12). "Announcing xAI." Official launch announcement.
2. xAI. (2024, March 17). "Open Release of Grok-1." Apache 2.0 license, GitHub: xai-org/grok-1.
3. xAI. (2025, February 17). "Grok 3 Beta — The Age of Reasoning Agents." Official blog post.
4. xAI. (2025, July 9). "Introducing Grok 4." Official launch.
5. Reuters. (2024, September 5). "Musk's xAI brings Memphis supercomputer Colossus online with 100,000 Nvidia GPUs."
6. The Wall Street Journal. (2025, March 28). "Musk's xAI Acquires X in $33 Billion Deal."
7. Bloomberg. (2024, May 27). "Musk's xAI Raises $6 Billion to Battle OpenAI."
8. Bloomberg. (2025, March 31). "xAI Hits $80 Billion Valuation Even Before Latest Round."
9. *Musk v. Altman et al.*, U.S. District Court, Northern District of California, Case No. 4:24-cv-04722 (filed August 2024).
10. Kingma, D., & Ba, J. (2014). "Adam: A Method for Stochastic Optimization." *arXiv:1412.6980*.
11. The New York Times. (2025, January). "Elon Musk's DOGE Office Sets Up Inside the White House."
12. Financial Times. (2025, June). "xAI plans Colossus 2 in Mississippi targeting one million GPU-equivalent compute."
