# House · Moonshot AI (Kimi)

> A primary author of Transformer-XL and XLNet, from Tsinghua to CMU and back to Beijing's Zhongguancun, turned "long context" into the sharpest banner among Chinese LLMs — Kimi's 2-million-character window once defined the conversational center of Chinese AI in 2024.

## I. Yang Zhilin: Hinton's Disciple's Disciple

To speak of Moonshot AI, one must speak first of one person. **Yang Zhilin (杨植麟, Zhilin Yang)** was born in 1992 in Shantou, Guangdong. He earned his undergraduate degree at Tsinghua's CS department, then a PhD at Carnegie Mellon University under Ruslan Salakhutdinov — himself a former PhD student of Geoffrey Hinton at the University of Toronto and one of the earliest disciples of deep learning. Counted along that line, Yang is Hinton's "disciple's disciple."

Yang's academic record glitters. As a PhD student he co-first-authored two NLP landmarks:

- **Transformer-XL** (ACL 2019, Dai, Yang et al.) — the first systematic resolution of "context fragmentation" in long-sequence Transformer modeling, introducing segment-level recurrence and relative positional encoding; the conceptual foundation for every later long-context model.
- **XLNet** (NeurIPS 2019, Yang et al.) — proposed a permutation-language-modeling objective for bidirectional pretraining, briefly surpassing BERT on multiple NLP benchmarks.

Together the two papers exceed ten thousand citations. After his PhD, Yang did short stints at Google Brain and FAIR, then returned in 2020 as Assistant Professor at Tsinghua's IIIS. In Chinese-Western academic circles he was regarded as one of the most discriminating Chinese NLP researchers of his generation — low-key style, low publication count, but every paper striking at a core problem. Many senior NLP scholars have remarked he is "a researcher of high taste, every paper a methodological contribution."

After ChatGPT launched in November 2022, Yang sensed that the gap between academia and industry was opening at an unprecedented pace — frontier research was no longer happening in universities, but inside industrial labs like OpenAI, Anthropic, and DeepMind. To keep doing "frontier research" he would need to build a lab of comparable scale himself.

In early 2023, with ChatGPT's aftershocks still rippling, Yang resigned from Tsinghua to start a company. In April 2023, in Beijing's Haidian district, he founded **Moonshot AI (月之暗面)** — the name borrowed from Pink Floyd's *The Dark Side of the Moon*, signaling "the side that has not yet been seen." The literary naming style carries through to Kimi's product voice and gave Moonshot a distinctive personal stamp from day one.

One more line about Yang: he has personal and academic ties with many of the OpenAI generation — having shared courses or work with peers who later joined OpenAI, Anthropic, or DeepMind. That "same-generation network" gave him an information edge on Silicon Valley research cadence that few Chinese founders enjoy.

## II. The Tsinghua-CMU Hardcore Team

Moonshot's early team was among the most academically dense of any Chinese AI startup. Beyond Yang, co-founders **Zhou Xinyu (周昕宇)** (Tsinghua undergrad, CMU PhD) and **Wu Yuxin (吴育昕)** (Tsinghua undergrad, CMU PhD, formerly at FAIR, a primary contributor to detectron2) were equally bright young CV-and-systems scholars. **Zhang Yutao (张宇韬)** (Tsinghua PhD) and other core members formed a Tsinghua + CMU + returnee composite.

Researchers from Google Brain, Meta AI, and ByteDance AI Lab made up a high share of early staff. The team's signature is sound research and top-tier engineering — but limited startup-management experience, a trait that would be both strength and burden in 2024's "traffic-buy war."

The other side of the company is Yang's exceptional ability to draw capital. Within months of June 2023, Moonshot closed its first round, led by HongShan and Zhenfund. In February 2024 it took a roughly **USD 1 billion round led by Alibaba** — at the time the single largest financing round for a Chinese AI startup, with valuation per multiple media sources reaching USD 2.5 billion. A roughly USD 300 million follow-on came in July 2024, lifting valuation to about USD 3.3 billion. Investors included Alibaba, HongShan, IDG, Zhenfund, Meituan, Hillhouse, and Tencent.

Through 2025 the market generally placed Moonshot at USD 3.3–3.6 billion — among the highest valuations in China's "AI Big Four."

The founding team began with under 30 people, headquartered in Beijing's Zhongguancun a few kilometers from Tsinghua's campus. The early roster's average credentials matched a USD-fund GP's or a top-conference program committee — extremely high PhD share, exceptional engineers. This "all-researcher" structure is one reason Moonshot can wrestle giants like ByteDance on the ToC field; the same structure has kept it in build-out mode on "non-research" functions like growth, content operations, and user research.

It is worth noting that mid-2024 brought a public dispute between the founding team and early investors over equity and personnel decisions — the latter filing suit over the destinations of certain core team members. The matter eventually settled, with no material impact on operations, but it reminded the industry: as China's AI primary market accelerates, governance and contracts matter as much as technology and product. The episode became one of the most-watched cases in China's AI venture circles in 2024.

## III. Kimi Chat and the 2-Million-Character Context

On 9 October 2023, Moonshot released its first product, **Kimi Chat**. The name, in the founders' own description, "was chosen to be short, easy to remember, and neutral" — Chinese users came to call it affectionately "Kimi 智能助手" (Kimi Smart Assistant).

Kimi launched featuring a **200,000-Chinese-character super-long context** — at a time when ChatGPT was still 8K (GPT-3.5) / 32K (GPT-4 Turbo), and ERNIE Bot and Qwen were generally 8K. Kimi's 200K Chinese characters briefly led the world among commercial products. It excelled at long papers, long contracts, full-book reading, and long-conversation memory in Chinese — quickly adopted in finance, law, and academia.

What truly triggered phenomenon-level attention was 18 March 2024, when Moonshot announced **Kimi's context window expanding to 2 million Chinese characters**, with rollouts on Web and app. The upgrade kicked off the so-called "Kimi concept stocks" rally on China's A-share market: stocks linked directly or indirectly to Kimi — compute, media, AI applications — hit consecutive limit-ups for days, becoming one of the most important speculative themes of A-share TMT in 2024. Moonshot, almost overnight, vaulted from AI startup into a household financial-news term.

Behind 2 million characters was not simple KV-cache stacking but a series of long-context engineering innovations: sparse attention, chunked re-arrangement, retrieval-augmented generation, long-text compression. By mid-2024, Kimi was the best Chinese long-text consumer model in China, with virtually no equal.

The practical meaning of 2 million characters: in one go, the model can ingest a medium-length book, a full annual report, or dozens of consecutive research papers, then answer cross-document questions in a unified context. For information-dense fields — law, finance, academic research — this was something GPT-4 Turbo's then 128K (about 90,000–100,000 English tokens) window simply could not do. Kimi accordingly won a base of die-hard users among financial analysts, lawyers, academics, and consultants.

## IV. Traffic-Buy ToC and the "RMB 300 Billion" War with ByteDance Doubao

200 million characters did not just bring Moonshot technical reputation — it brought traffic ambition. From 2024, Kimi walked a path different from Zhipu and MiniMax: **traffic-buy ToC growth**.

From the second half of 2024, Kimi placed unprecedented advertising on Douyin, Bilibili, Xiaohongshu, and inside the WeChat ecosystem. At the same time, ByteDance's **Doubao app** ramped massive placements both in-house and through external channels. Industry estimates put combined 2024 traffic spending by these two on the AI-assistant track on Douyin / Bilibili at the order of **RMB 300 billion** (counting equivalent traffic, KOL deals, and brand cooperation) — an unprecedented "AI assistant traffic war."

Outcomes: both pushed monthly actives into the tens of millions, but ROI was viewed differently by each side. Doubao, sitting on ByteDance, has near-zero distribution cost; its MAU jumped quickly into the hundreds of millions. Kimi has no such content distribution base — every MAU paid in real money. Internal reflection in late 2024 centered on a key question: can the retention bought by traffic cover acquisition cost? Has product experience been distorted by growth pressure?

In a late-2024 interview, Yang publicly reflected: "We spent too much time on growth in the past period. We should return to product and model." That was widely read as a key inflection point in China's ToC LLM line, and it directly shaped Moonshot's 2025 strategy: less traffic-buy, return to differentiation through long context and reasoning.

The 2024 traffic war is a singular chapter in Chinese LLM history. It proved, on one hand, that AI assistants have real demand as a consumer product — Kimi's search volume bought through Douyin alone testifies to user appetite for a Chinese AI assistant. On the other, it exposed the structural disadvantage of a startup on a giant's traffic platform — ByteDance's marginal cost to push Doubao via its own traffic is near-zero, while Moonshot pays market rate for every user. The eventual winners of a traffic war are nearly destined to be "traffic-self-supplied" players like ByteDance Doubao; if independent startups cannot establish irreplaceable product differentiation, long-term sustainability is hard.

## V. The K-Series Reasoning Models and China's "Twin Stars"

In November 2024, Moonshot released **Kimi Exploration Edition** (based on the K0 series), introducing visible "thinking process" interactions — users could see the model's search, reasoning, and decision steps, akin to OpenAI o1's openness.

On 20 January 2025, Moonshot released the reasoning model **Kimi K1.5**. It and DeepSeek's contemporaneous **DeepSeek R1** became the "twin stars of Chinese reasoning models." The two arXiv papers and public releases came within the same week. For the first time in early 2025, the global AI conversation centered on "Chinese reasoning models." K1.5's performance on math, code, and scientific reasoning approached OpenAI o1, with overseas developer reactions strongly positive.

After that, Moonshot shipped:

- **Kimi K2** (mid-2025): further gains on long-chain reasoning and tool use.
- **Kimi-VL** (2025): vision-language model, extending the long-context advantage to multimodal.
- **Kimi long-text writing / coding assistants**: deeper productization in professional writing and code completion.
- **Kimi Exploration / Academic Search**: research-assistant forms based on long-context plus retrieval augmentation.

By late 2025 Moonshot's product line had clarified: **long context + reasoning + writing strength**, with ToC still the main battlefield but no longer purely traffic-buy.

K1.5 carried a second meaning: its training paper publicly disclosed substantial RL training detail, including how to handle reward noise in reasoning, how to prevent reward hacking, and how to maintain stability during long-chain reasoning. These details were valuable references for the global open-source community, and earned Moonshot meaningful international research credit — something its prior ToC traffic-buy strategy could not buy.

## VI. Among the "Big Four" Rivals

Place Moonshot inside China's "Big Four" (Zhipu, Moonshot, Baichuan, 01.AI) and the differences are sharp.

**Zhipu** weights ToB and open source; central SOEs and academic clout form its base. **Moonshot** weights ToC and a single hit product, pushing one product to the limit. **Baichuan AI** (founded by Wang Xiaochuan) goes vertical ToB. **01.AI** (founded by Kai-Fu Lee) shifted in late 2024 toward "model-as-business," de-emphasizing the general-LLM line.

Above the Big Four sits another divide: DeepSeek and ByteDance Doubao. DeepSeek emerged with pure research and extreme open source, becoming the most-discussed Chinese AI company globally after R1 in early 2025; ByteDance Doubao, riding Douyin, hit a hundred-million-DAU and is the de facto winner on the ToC field. Moonshot threads its position between them — neither giving up product nor giving up frontier research.

Among the four, Moonshot has **the strongest consumer brand recognition** — among ordinary Chinese internet users, Kimi's awareness and DAU outstrip the other three. It also has **the most academic founding team** (Yang's NLP standing) paired with a least-academic product playbook (traffic-buy growth) — a tension that is both Moonshot's signature and the source of internal reflection.

Through 2026, Moonshot's rumored IPO cadence trails that of Zhipu and MiniMax, but it remains among the most-watched Chinese AI startups — chiefly because it owns an asset few others have: **Yang Zhilin himself**. Among Chinese AI founders, he is a rare combination of research credibility, age advantage, capital pull, and public recognition.

## VII. Moonshot as an Institution

Coming back to Moonshot itself, the story compresses into one sentence: **for the first time, an academic-pedigree founder faces head-on China's most brutal ToC battlefield**.

Yang's strength is research taste and technical credibility. Betting on "long context" was an academically grounded call — Transformer-XL had given him an earlier understanding than peers of long-sequence modeling's bottlenecks and breakthroughs; Kimi's 2-million-character window was not parameter-stacking but a carefully designed engineering scheme.

Yang's challenge is commercialization and organizational management. Moonshot ballooned in 2024 on "traffic-buy growth," then realized in late 2024 the path was unsustainable; in 2025 it returned to product and model. But by then ByteDance Doubao, Tencent Yuanbao, and Alibaba Qwen were carving up China's ToC LLM field — the window left for independent startups was narrower than in early 2024.

Is its next step ToC or ToB? Domestic or overseas? These questions are not fully answered in 2026. But whichever road it walks, Moonshot has already left a clear mark in Chinese AI history, on two counts: long context and the reasoning twin star.

Worth recording too: Moonshot may be the Chinese LLM startup that "most resembles early OpenAI" — research-bred founder, single star product anchoring perception, users won by technical innovation rather than channel volume, clear and personal product philosophy. What OpenAI later became is another story; but in 2023–2025, Moonshot's resemblance in temperament to OpenAI of 2018–2020 exceeds that of any other Chinese AI company.

Another long-term asset is Yang's personal research credit. Among Chinese AI company founders, very few can speak directly to Silicon Valley's frontline researchers with first-hand papers and code; Yang is one. In a Chinese AI environment of compute scarcity, tightening policy, and difficult globalization, that "research passport" is an irreplaceable resource.

Back to the original question: is long context truly the central battleground of LLMs? The 2-million-character moment in 2024 said "yes"; the 2025 reasoning-model wave told us the answer is more complex — long context is necessary infrastructure, but on its own not sufficient to win the future. Moonshot is recalibrating its position in this revision; the sharpest line it has left in Chinese AI history is already inscribed under a name A-shares chanted endlessly that spring of 2024: Kimi.

::: tip Historian's Note
Moonshot's wonder lies almost entirely in Yang Zhilin alone. Young yet able with words; founding a company at thirty, carrying the names of Transformer-XL and XLNet; raising capital from Alibaba and HongShan; building an army called Kimi in Zhongguancun. Two sharpnesses to his deployment: long context, from 200,000 characters to 2 million, walking alone among Chinese ToC and stoking A-share fever; and the reasoning instrument, releasing K1.5 the same week as DeepSeek's R1, drawing the world's eye to China at the start of 2025. One regret: in the traffic-buy war against ByteDance Doubao, the squandering of hundreds of billions for retention beyond verifying — and only at year-end did he wake, returning to product and model. Academic value is long; market urgency is fast — Yang's bind sits in that long-versus-short. Yet of China's Big Four, only Moonshot wears the badge of "founder-as-brand"; only Moonshot has left a "phenomenon-level" memory in ToC. Whether it leads the next stage is unknowable; that its name endures is not.
:::

On a longer time scale, Yang and the wave of "young PhDs returning home to start LLM companies" represent a concentrated cash-out of 2010s deep-learning education investment: Chinese NLP PhDs trained at Tsinghua, CMU, MIT, and Stanford, returning in 2023–2024 to Beijing, Shanghai, and Hangzhou to build research-style companies that map directly onto Silicon Valley counterparts. Moonshot is one of the most symbolic samples of that generational narrative.

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Moonshot AI or have used Kimi extensively, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Dai, Z., Yang, Z., Yang, Y., Carbonell, J., Le, Q., & Salakhutdinov, R. (2019). "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context." *ACL 2019*.
2. Yang, Z., Dai, Z., Yang, Y., Carbonell, J., Salakhutdinov, R., & Le, Q. V. (2019). "XLNet: Generalized Autoregressive Pretraining for Language Understanding." *NeurIPS 2019*.
3. Moonshot AI (2025). "Kimi K1.5: Scaling Reinforcement Learning with LLMs." arXiv:2501.12599.
4. *Caixin Weekly* (2024). 《杨植麟与月之暗面：长上下文的创业者》 [Yang Zhilin and Moonshot: Founder of Long Context].
5. *LatePost* (2024). 《Kimi 投流复盘：3000 亿广告战之后的反思》 [Kimi Traffic-Buy Postmortem: Reflections After the RMB 300B Ad War].
6. *36Kr* (February 2024). 《月之暗面完成阿里领投 10 亿美元融资》 [Moonshot Closes $1B Round Led by Alibaba].
7. *The Information* (2024). "Inside Moonshot AI: China's Most Watched LLM Startup."
8. *Southern Weekly* (March 2024). 《Kimi 200 万字上下文与 A 股的 Kimi 概念股行情》 [Kimi's 2M-character Context and the A-Share "Kimi Concept" Rally].
9. *Bloomberg* (2024). "Alibaba Backs Moonshot AI in Race to Catch OpenAI."
10. *MIT Technology Review* (2025). "DeepSeek R1 and Kimi K1.5: China's Reasoning Model Twin Stars."
11. *21st Century Business Herald* (2025). 《月之暗面战略调整：从投流到产品回归》 [Moonshot's Strategy Shift: From Traffic to Product Return].
12. Moonshot AI technical blog (2024–2025). moonshot.cn / kimi.com.
