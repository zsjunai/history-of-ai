# House · MiniMax (Hailuo · Talkie)

> A team that walked out of SenseTime turned, in four years, four modalities — language, voice, video, and music — into a single full-stack production line. Xingye and Talkie became the largest AI-companion products at home and abroad; Hailuo Video stands against Sora; abab MoE and M1 reasoning pushed it into the front rank of "China's Five LLM Tigers."

## I. Yan Junjie and a SenseTime Origin

MiniMax's founding story begins with an early believer in Artificial General Intelligence. **Yan Junjie (闫俊杰, Junjie Yan)** earned his undergraduate degree at Tsinghua and his PhD at the Chinese University of Hong Kong under Tang Xiaoou, founder of SenseTime. During his doctorate he focused on face recognition and deep learning; his papers on face detection and recognition were widely cited at CVPR and ICCV. After graduation he joined SenseTime as one of its earliest core researchers, rose to VP in his early thirties, and became Dean of SenseTime's **General Intelligence Research Institute** — the first division within SenseTime to systematically bet on general LLMs.

At SenseTime, Yan led multiple foundational model projects, including a vision foundation model and multimodal pretraining. Internally he was regarded as one of the few researchers "truly faithful to AGI," and in talks and interviews he repeatedly said that "achieving AGI is the most important thing for this generation of researchers." That near-religious conviction was the inner driver of his choice to leave a publicly listed company valued in the tens of billions.

In late 2021 Yan left SenseTime. That December he founded **MiniMax** in Shanghai under the Chinese corporate name "稀宇科技" (Xiyu Technology). Several SenseTime alumni left with him: co-founder **Yang Bin (杨斌)**, formerly SVP at SenseTime in charge of commercialization, became COO; later additions included Liu Jiankun (刘建昆) and other deep-learning engineering leads. The early engineering culture carries a strong SenseTime imprint — hardcore engineering orientation, heavy investment in foundational infrastructure, the conviction that "compute + data + algorithms" is the only road to AGI.

The name MiniMax is borrowed from the minimax principle in game theory and gestures at "achieving maximum intelligence at minimum cost." In the China of 2022, when the "Hundred Models War" identified most companies as fast followers, MiniMax was one of the few that publicly declared its target as "foundation models + multimodal" — committed from day one to building its own base, not wrapping someone else's. That choice was widely seen by investors in 2022 as "too risky"; by 2024 it was vindicated.

MiniMax's most important early judgment was this: in the China of 2022, applications were easier to build than foundations, but in ten years the genuinely valuable assets would be foundations. That conviction shaped every resource allocation that followed — the bulk of R&D budgets went into foundation models and the compute stack, not product, marketing, or sales.

## II. The abab Family and China's First MoE

MiniMax's first publicly visible self-trained model was **abab** — a name that doubles the pinyin initials of "白白鼠" (lab mouse), carrying the wry humor of an engineering lab. abab-1 went online internally in late 2022; abab-2 opened externally in early 2023.

The true technical manifesto came with **abab-MoE**, released in March 2023 — the first commercially released Mixture-of-Experts model from China. The Chinese mainstream then was still dense Transformers; even in Silicon Valley, MoE was discussed mostly through Google's Switch Transformer and rumored hints about early GPT-4. MiniMax's choice rested partly on Yan's team's read that "given China's compute constraints, MoE is the more rational scaling path." The view was vindicated in 2024 by Mistral Mixtral, DeepSeek-V2, and Qwen MoE all arriving in succession.

The abab series then iterated densely:

- **abab-5** (August 2023): hundred-billion-parameter scale.
- **abab-6** (April 2024): expanded context and multilingual capability, against GPT-4.
- **abab-6.5** (September 2024): MoE upgrade, 200K context.
- **abab-7** (late 2024): trillion-parameter MoE, with a major upgrade to the training stack.
- **MiniMax-Text-01** (January 2025): 456B total parameters (about 45.9B active) open-source MoE, supporting up to four million tokens of context, with paper and weights public on Hugging Face.
- **MiniMax-VL-01** (January 2025): the multimodal counterpart released alongside Text-01.
- **MiniMax-M1** (June 2025): reasoning-optimized model, officially benchmarked against OpenAI o3 and DeepSeek R1 — among the standouts of China's "reasoning model wave."

Across the abab and MiniMax-Text lines, Yan's team has held one judgment widely quoted in the industry: **compute, parameters, and context are three relatively independent resource axes**. At the same compute budget, holding active parameters at a moderate size, pushing total parameters (MoE sum) very high, and pushing context length very long, can yield better cost-performance than a dense model in many real scenarios. That call set MiniMax apart from peers and gave its models good deployment economics for ToB customers.

## III. Xingye, Talkie, and Number One in AI Companionship

MiniMax's true consumer hit was not a general chatbot but AI companionship.

In July 2023, MiniMax launched **Xingye (星野)** in China — an AI character-companion app on its own model, where users chat with virtual characters, create their own characters, and join story arcs. The early version was called Glow, then renamed Xingye. The overseas version, **Talkie**, launched the same year on Google Play and the App Store, targeting English-speaking users.

Talkie's explosion caught everyone off guard. By 2024 its global MAU broke ten million, climbing into the top entertainment charts in multiple country app stores — the first AI app from China to truly reach consumer scale in mainstream Western markets. Its rival was character.ai, the U.S.-native pioneer of the genre, founded by former Google LaMDA's Noam Shazeer. With a more aggressive character ecosystem, stronger female-user retention, and visuals attuned to Gen-Z taste, Talkie carved a large slice out of character.ai's home market.

Talkie's product philosophy is utterly unlike WeChat or Douyin's "national-traffic platform" logic — it serves a private, intimate, late-night kind of conversation. Many overseas users treat it as "half friend, half psychological confidant." Sensor Tower and other third-party data show Talkie's per-session usage time among the highest of any AI app, with daily per-user time exceeding half an hour at peaks — usage intensity higher even than typical social apps.

In August 2024, character.ai's team was acquired in a roughly USD 2.7 billion "reverse acquisition" by Google, leaving a market gap that Talkie absorbed in large part. In AI companionship, from the second half of 2024 onward, Talkie has been the de facto global number one. That shift moved valuations in the other direction too — when MiniMax engaged international investors in late 2024, Talkie's overseas revenue data was a key support for the valuation step-up.

## IV. Hailuo AI: The General Entry Point and the Video Highlight

In January 2024, MiniMax launched **Hailuo AI (海螺 AI)** — a Web and app general-purpose chatbot positioning against ChatGPT and Kimi as "an all-rounder for work, study, and creation." Hailuo's differentiation lies in two places: its base model's multimodal capabilities, and tight coupling with the platform API.

What truly broke Hailuo AI into the public eye was the September 2024 release of **Hailuo Video** — MiniMax's self-developed video generation model. After OpenAI Sora's February 2024 demos, the world was racing to catch up, but very few video models could be reliably opened to consumers. Hailuo Video was the first high-quality video generation product widely usable on the consumer side in China — a single 6-second clip generated in tens of seconds, with physical consistency, motion coherence, and facial expression at then-leading quality. Suddenly the #HailuoAI tag flooded overseas social media with creator works, and TechCrunch and The Verge published features.

By 2025, MiniMax's full-stack multimodal lineup was complete:

- **Text**: abab series, MiniMax-Text-01, M1 reasoning model.
- **Voice**: speech-01, speech-02 — high-fidelity voice synthesis and cloning, reviewed as approaching ElevenLabs for Chinese.
- **Video**: Hailuo Video / T2V (text-to-video), I2V (image-to-video).
- **Music**: music-01 text-to-music model.

This matrix made MiniMax one of the few Chinese companies to push "model-as-product" end-to-end across all modalities — from foundation model to API platform to consumer app, every layer self-built. The only directly comparable Chinese player at full breadth is ByteDance's Doubao series; among startups, no other has reached this depth.

Worth noting is MiniMax's open platform platform.minimaxi.com — exposing four classes of API (text, voice, video, music) to enterprise developers. It is used by many short-video companies, audiobook makers, and content-creation tools. Voice and video APIs alone contributed non-trivial ToB revenue for MiniMax in the second half of 2024.

## V. Capital: Alibaba, Tencent, miHoYo, and Sequoia

MiniMax's funding history is unusual among Chinese LLM companies — it has pulled internet majors, gaming firms, and top dollar funds into a single cap table.

- 2022–2023 early rounds: Hillhouse, IDG, miHoYo (the breakout gaming company), and others — miHoYo's interest in AI companionship lent symbolic weight.
- 2024 Series A: led by Alibaba, with Tencent and HongShan (Sequoia China) — valuation around USD 2.5 billion.
- 2025 new round: valuation rose to around USD 4 billion, putting it in the top tier of Chinese AI valuations.

Alibaba is the most strategic investor — it has invested in Zhipu, Moonshot, 01.AI, Baichuan, and MiniMax all together, betting on essentially every leading Chinese LLM startup. miHoYo's presence hints at MiniMax's natural affinity with gaming, anime, and character-generation scenarios.

Since late 2024, the market has seen recurring reports that MiniMax is preparing a Hong Kong IPO; the process continued through 2025. If listed successfully, it likely sits alongside Zhipu as one of China's first publicly listed LLM companies. That would be a key "market price discovery" for the industry — all Chinese LLM valuations today sit in the primary market without secondary pricing.

A special variable in MiniMax's capital story is the share of overseas revenue. Talkie makes it one of the few Chinese AI companies with a real "USD revenue" story for dollar-fund investors — particularly important against the 2025 backdrop of bifurcating U.S.-China AI capital markets.

## VI. Technical Line: MoE, Long Context, Native Multimodal

Back to the technology. MiniMax's research line carries three sharp keywords.

**MoE as foundation.** From abab-MoE to Text-01, MiniMax was the earliest Chinese team to bet on MoE — more than a year ahead of DeepSeek-V2. MoE lets it push "effective parameter count" to the trillion scale under compute constraints — a choice fully validated by the 2024–2025 global MoE wave.

**Ultra-long context.** MiniMax-Text-01 supports a 4-million-token context window — among the longest of any open-source model in the world, and a step beyond Kimi's 2-million-Chinese-character line. The **Lightning Attention** and hybrid-attention mechanism MiniMax introduced keeps long-sequence inference cost within engineering reach.

**Natively multimodal.** MiniMax did not first build a language model and then bolt on vision — it placed voice, vision, video, and language into the same infrastructure for joint training from the architecture level. Hailuo Video, the speech series, and the music series share an underlying compute stack. The full-stack layout kept it from falling behind in 2024's multimodal race.

The common thread of these three lines is "achieving the broadest cross-modal coverage under compute constraints" — exactly the game-theoretic logic behind the company's name: under the worst opponent and the worst conditions, maximize one's worst performance.

## VII. MiniMax as an Institution

Coming back to MiniMax itself: among "China's Five LLM Tigers" (ByteDance Doubao, Zhipu, Moonshot, DeepSeek, MiniMax), its position is the hardest to pin down.

It is not a giant's internal arm like ByteDance Doubao, with no 600-million-DAU distribution underneath; it is not a "national team + academic pedigree" like Zhipu, with no Tsinghua-affiliated halo; it is not a "traffic-buy ToC single product" like Moonshot, betting all chips on one product; it is not a "pure research line + extreme open-source" like DeepSeek, unwilling to surrender commercialization.

It walks a path of "full-stack self-built + multimodal + globalization" — building MoE foundation models, building voice/video/music, running ToC products at home (Xingye) and abroad (Talkie) at the same time, exposing APIs on a ToB platform. The cost of this line is its breadth — engineering, product, and globalization must all be online simultaneously. The reward, once it lands, is a head position in multiple lanes at once.

By 2026, MiniMax has secured key positions on three fronts: global number one in AI companionship (Talkie); China leader in consumer video generation (Hailuo Video); China front-rank in long-context + MoE (Text-01 / M1). It is not necessarily China's largest AI company — but it may well be China's most successful AI exporter abroad.

For that reason, MiniMax's place in Chinese AI history is not just a technology thread but a "product-going-global" thread — after TikTok, SHEIN, and Genshin Impact, the application layer of AI has, for the first time, run a real Chinese name into mainstream Western markets. This thread carries weight more lasting than any one or two model versions.

::: tip Historian's Note
MiniMax arose from a flank of SenseTime — Yan Junjie led former SenseTime hands south to Shanghai, raised the banner of "Xiyu," and aimed at AGI. Three peculiarities of his deployment: first, an early bet on MoE — walking a side road while dense Transformers held court, and three years on, with the wind shifting his way; second, parallel attack across all modalities — text, voice, video, music — none falling behind; third, two-front war at home and abroad — Xingye holding the inner pool, Talkie striking into character.ai's home court and winning. The breadth of his line is unmatched among Chinese LLM startups. Yet the breadth is also the burden — base, product, and abroad each need top talent and endless compute. MiniMax's future hangs on whether, among the Five Tigers, it can stand on the two moats of "full-stack self-built" and "global users." If it succeeds, China gains its first true international consumer AI brand; if not, only the regret of dispersed force. But on Talkie alone the record is enough — it has shown that Chinese AI in mainstream Western markets can be number one, not a follower.
:::

A trait often overlooked in MiniMax as an institution: it is among the more research-public Chinese LLM companies. From abab-MoE onward, key models have been released alongside technical reports or papers; the MiniMax-01 series open-sourced full weights and training details. That openness is a major reason it is widely discussed in Western research circles — not a Chinese company that only ships products, but one that genuinely shows up in NeurIPS and ICLR reviewing.

By 2026, whether MiniMax becomes "China's first globalized AI company" remains undecided, but the path is clear: foundation, products, abroad — three legs standing simultaneously. In Chinese AI company history, no other has stood on all three so far.

Yan Junjie himself rarely appears in public and avoids verbal sparring with peers. The restraint makes MiniMax conspicuously low-profile in Chinese AI. But low profile is not lack of ambition — what it intends is the largest thing any Chinese AI company has set out to do: become a globalized AI company with its own user base, covering every modality.

## Eyewitness Accounts

::: info Call for contributions
If you have worked at MiniMax or contributed to Talkie / Hailuo's development or operations, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. MiniMax (2025). "MiniMax-01: Scaling Foundation Models with Lightning Attention." arXiv:2501.08313.
2. MiniMax (2025). "MiniMax-M1: Open-Sourcing the World's Most Efficient Reasoning Model." minimax.io technical blog.
3. *Caixin* (2024). 《MiniMax 闫俊杰：从商汤副总裁到大模型五虎》 [Yan Junjie of MiniMax: From SenseTime SVP to LLM Tiger].
4. *36Kr* (2024). 《Talkie 海外月活破千万：中国 AI 出海第一爆款是怎么炼成的》 [How Talkie Made 10M MAU Overseas].
5. *The Information* (2024). "China's MiniMax Is Quietly Beating Character.AI Overseas."
6. *TechCrunch* (September 2024). "Hailuo AI Video: China's Answer to Sora Goes Public."
7. *The Verge* (2024). "Hailuo's Video Model Is Surprisingly Good — and Free."
8. *Southern Weekly* (2024). 《AI 陪伴的国民级产品：星野与 Talkie 的两条战线》 [The National-Scale AI-Companion Products: Two Fronts of Xingye and Talkie].
9. *Caijing* (2025). 《MiniMax 港股 IPO 进程追踪》 [Tracking MiniMax's HK IPO Process].
10. Sensor Tower (2024). "Top AI Companion Apps Worldwide: Q3 2024 Report."
11. *Bloomberg* (2025). "Alibaba's Bet on Every Chinese AI Unicorn."
12. MiniMax open-platform technical documentation (2024–2025). platform.minimaxi.com.
