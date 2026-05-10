# House · DeepSeek

> A Chinese startup incubated from a quantitative hedge fund — at a fraction of Silicon Valley's cost it reproduced a top-tier reasoning LLM, and on a single night in January 2025 forced the entire industry to re-examine the creed that "compute is everything."

## I. Origin: A Quant Fund and Its GPU Cluster

To understand DeepSeek, one must first understand its mother — **High-Flyer Quant (幻方量化)**.

In February 2015, **Liang Wenfeng (梁文锋)**, born in 1985 in Guangdong, founded High-Flyer Quant in Hangzhou with partners after graduating from the CS department at Zhejiang University. As an undergraduate Liang had already been deeply involved in quantitative-trading algorithm research; an ABD doctorate in Signal Systems and Control at Zhejiang gave him both a mathematical base and engineering fluency. From 2016 High-Flyer migrated all trading strategies onto deep learning, becoming one of the earliest teams in China to put deep neural networks at the heart of A-share quant trading.

In 2019 High-Flyer made a decision that would later bend the story's arc: **build a large-scale GPU cluster in-house**. While most domestic peers leaned on cloud vendors, High-Flyer instead bought tens of thousands of NVIDIA V100s — and later A100s — and stood up its own data center, named "Fire-Flyer (萤火)." By 2022 High-Flyer had over ten thousand A100s — one of China's largest non-internet-company GPU clusters. Quant trading does not require that much compute; Liang clearly saw further than that — he was looking at LLMs.

## II. July 2023: DeepSeek Spins Out

On 17 July 2023, **DeepSeek Artificial Intelligence Co., Ltd.** was registered in Hangzhou's Yuhang District, with Liang Wenfeng as legal representative. It is not a subsidiary of High-Flyer but an independent company — sharing High-Flyer's compute, capital, and engineering culture. Its mission is sharply defined: **work only on foundation-model research, not application products**.

The positioning was singular in China's 2023 LLM scene. The "Hundred Models War" was at full pitch — Zhipu, Baichuan, Moonshot, MiniMax, 01.AI, StepFun — the six tigers each marking valuations, racing to fundraise, chasing customers. DeepSeek, by contrast, kept exceptional restraint: no fundraising, no PR, no product launches. Its core researchers were mostly recent PhDs and young researchers from Tsinghua, Peking University, USTC, and Zhejiang University, with average age below 30.

In November 2023, DeepSeek released its first-generation **DeepSeek LLM 7B/67B** with open weights. Performance was close to Llama 2 of the time, but not yet stunning. Its real value was not in the model itself, but in the signal: "we are here."

## III. Three Technical Leaps

2024 was the year DeepSeek went from "yet another open-source model company" to "technical leader." Three pivotal innovations cashed in that year, one after another.

**DeepSeek-Coder** (January 2024). A 67B model focused on code generation, refreshing open-source records on HumanEval, MBPP, and other coding benchmarks. A signature DeepSeek strategy: first hone training paradigms in domains with "definite answers" — code and math — before pushing them to general models.

**DeepSeek-V2** (May 2024). This generation introduced two architectural innovations:

- **MLA** (Multi-head Latent Attention): compresses the KV cache to roughly 1/10 of the original, sharply reducing inference memory.
- **DeepSeekMoE**: mixture-of-experts, 236B total parameters with only 21B active per token — extremely low training and inference cost.

DeepSeek-V2 reached GPT-4-class performance at roughly one-tenth the inference price, instantly upending the price structure of China's LLM API market. Baidu, Alibaba, ByteDance, and Zhipu cut prices in succession — the "Chinese LLM price war" of May 2024 was lit by DeepSeek-V2.

**DeepSeek-V3** (released 26 December 2024). A 671B-parameter MoE model trained on roughly 2.78 million GPU hours (H800), at a cost of about **USD 5.576 million** — one to two orders of magnitude below comparable closed-source models. DeepSeek published the figure plainly in its technical report, shaking the industry.

## IV. 20 January 2025: The R1 Moment

If DeepSeek-V3 was a technical bomb, **DeepSeek-R1** was an industrial earthquake.

On 20 January 2025, DeepSeek released the reasoning model **R1**, against OpenAI's **o1** released in September 2024. Its core contributions:

1. **Reasoning trained by pure reinforcement learning**: the R1-Zero variant required no supervised fine-tuning at all — strong reasoning was trained directly from the base model with reinforcement learning (the GRPO algorithm), a path widely considered extremely hard in academia.
2. **o1-class reasoning**: on math (AIME, MATH-500), code (Codeforces, LiveCodeBench), and scientific reasoning, R1's performance approached o1-1217.
3. **API price at 3% of o1's**: USD 0.55 per million input tokens, USD 2.19 per million output — versus o1's roughly USD 15 input / USD 60 output.
4. **Fully open**: weights, training details, and paper all released on arXiv and Hugging Face.

Within days of R1's release, Hugging Face downloads passed a million. On Monday 27 January, U.S. markets opened to NVIDIA shares falling 17% in a single day, **wiping out roughly USD 589 billion in market value — the largest one-day market-cap loss in U.S. stock-market history**. Wall Street, for the first time, asked systematically: if an LLM can be trained for USD 6 million, are Silicon Valley's tens-of-billions in CapEx still rational?

In the weeks that followed, the DeepSeek app reached number one on the App Store free chart in 132 countries; Sam Altman, in a rare X post, called DeepSeek-R1 "an impressive model, especially considering its low cost"; Dario Amodei published a long essay acknowledging DeepSeek's technical strength while signaling geopolitical anxiety; from the White House, Donald Trump said DeepSeek "is a wake-up call for U.S. tech."

## V. Why DeepSeek

In the half-year after R1, the global AI community asked one question repeatedly: **why DeepSeek?**

The answer has several layers.

**Compute reserve.** High-Flyer's 2019-onwards GPU investment translated into DeepSeek's infrastructure in 2022–2023 — a "family inheritance" most Chinese LLM startups did not have. While the other six tigers were still scrambling for A100 quota, DeepSeek already had a ready ten-thousand-card cluster.

**Engineering culture.** High-Flyer's high-frequency quant DNA bred extreme efficiency obsession — every line of code costed. MLA, MoE, FP8 training, communication optimization, kernel fusion — these seemingly fussy engineering optimizations, summed up, account for an order-of-magnitude difference in training cost.

**Talent model.** DeepSeek does not poach senior researchers from Meta or Google; it hires recent PhDs from top Chinese universities directly. These young people are not anchored to overseas-major-tech path dependence and dare to attempt "full-stack innovation" from scratch. In one of his rare 2024 public interviews, Liang Wenfeng said: "True disruptive innovation does not lie in tweaking parameters behind others, but in daring to invest in directions others believe impossible."

**Open-source belief.** In a 2024 Silicon Valley turning ever more closed, DeepSeek went thoroughly open — not just weights, but training details written into technical reports. That captured the global open-source community's mindshare quickly. Meta's Yann LeCun wrote publicly: "DeepSeek shows that open source can catch up to closed source — something I have waited a long time for."

## VI. Globalization and Ecosystem

After R1, DeepSeek's influence extended past the model itself.

**API price war.** Within a week of R1, OpenAI introduced o3-mini at sharply lower prices, Anthropic launched a cheaper Claude 3.5 Haiku, and Google's Gemini 2.0 Flash cut prices — the global LLM-API price baseline dropped an order of magnitude in spring 2025.

**Reasoning as new standard.** After R1, almost every leading model released a "reasoning / thinking" variant — Google Gemini 2.5, Anthropic Claude 3.7, xAI Grok 3, Alibaba Qwen-Max all followed. "Slow thinking" went from OpenAI exclusive to industry default.

**Open-source LLMs rise.** On Hugging Face, models distilled from or modified upon DeepSeek-R1 quickly passed a thousand. Meta released Llama 4 ahead of schedule in response to DeepSeek's impact. Subsequent open-source releases from Zhipu, Alibaba Qwen, and MiniMax visibly drew on MLA and GRPO.

**DeepSeek-V3.1 / R2** (released Q3/Q4 2025): continued catch-up on code, multimodal, and agent capabilities. By early 2026, DeepSeek was widely viewed by Chinese users as "the China replacement for ChatGPT," with reported app DAUs exceeding 30 million.

## VII. Constraints and Geopolitics

DeepSeek's success has put it at the center of geopolitics.

**Compute constraints.** U.S. export controls on AI chips for China have tightened steadily since 2022. A100/H100 were embargoed in 2022; A800/H800 added in 2023. DeepSeek's 2024–2025 training has used H800 (the China-special version of H100, with bandwidth and interconnect curbed). If stricter restrictions land — such as the "memory bandwidth threshold" debated from 2025 — DeepSeek's next-generation models could face a compute cliff.

**International scrutiny.** After R1, government agencies in Italy, South Korea, Australia, India, and others banned DeepSeek apps on official computers, citing "data transmission to China." Multiple U.S. members of Congress called for federal device bans. DeepSeek's globalization path is thereby complicated — however strong the technology, it cannot easily bypass the geopolitical narrative.

**Sustainability of the open-source model.** DeepSeek does not raise capital, does not charge — it is funded entirely by parent High-Flyer. Liang Wenfeng has said repeatedly, "we are not short of money" — but as model scale grows, training the next 500B or even 1T-parameter model will jump to tens or hundreds of millions of dollars. Whether High-Flyer can continue to underwrite this is an open question.

## VIII. DeepSeek Today

By spring 2026, DeepSeek had roughly 200 employees and still kept its "small and elite" geek culture. It is the only Chinese LLM company widely recognized by the international AI community as "world-class" in 2026 — even matching or outpacing American peers on many indicators.

Liang Wenfeng himself rarely appears in public. In January 2024 he attended Premier Li Qiang's symposium with entrepreneurs, his most visible public outing. There he said: "We want to prove that Chinese companies can also produce world-class original innovation." R1 had not yet been released; the words sounded more like a wish. A year later, the world had heard the answer.

::: tip Historian's Note
DeepSeek's success looks accidental: an overflow from a quant fund, a handful of new PhDs, a small company that did not raise capital and did not announce — and yet, at the loudest moment of LLMs, it dropped the loudest stone. But study it closely and necessity sits inside the accident. **High-Flyer's decade of compute** gave it ten thousand cards while others lacked GPUs; **the efficiency obsession in its quant DNA** allowed it to design "minimum-everything" architectures like MLA and MoE; **its conviction in open source** captured in one week the global mindshare that closed-source giants had spent years amassing. R1's value is not that it surpassed o1 — it did not — but that it **proved another path**: not piling compute, not raising a billion, not hiring senior researchers; young people, plus compute, plus long-term commitment, can stand at the world's frontier. Whether the path is sustainable remains to be seen; but it has permanently reset the industry's assumptions about how much money LLMs require. In that sense, DeepSeek is the last company in AI history to alter the landscape with the spirit of a "garage startup" — even if its garage holds ten thousand A100s.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at DeepSeek or High-Flyer Quant, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. DeepSeek AI (2024). "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model." arXiv:2405.04434.
2. DeepSeek AI (2024). "DeepSeek-V3 Technical Report." arXiv:2412.19437.
3. DeepSeek AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948.
4. Liang Wenfeng remarks (January 2024), Premier Li Qiang's symposium with entrepreneurs.
5. 36Kr (2024). 《幻方量化：一家量化私募的大模型野望》 [High-Flyer Quant: One Quant Fund's LLM Ambition].
6. Bloomberg (2025). "DeepSeek's AI Model Shakes Silicon Valley." 27 January 2025.
7. *Financial Times* (2025). "The DeepSeek Shock: How a Chinese Startup Upended AI." February 2025.
8. Amodei, D. (2025). "On DeepSeek and Export Controls." Personal essay, January 2025.
9. The Information (2025). "Inside High-Flyer's Decade-Long Bet on GPUs."
10. SemiAnalysis (2025). "The DeepSeek Cost Debate: What's Real and What's Noise."
11. *Huxiu* (2025). 《DeepSeek 与中国 AI 的另一条路径》 [DeepSeek and the Other Path of Chinese AI].
