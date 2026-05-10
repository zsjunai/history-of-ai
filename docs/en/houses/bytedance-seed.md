# House · ByteDance / Seed

> A content company built on recommendation algorithms — in the LLM era, with the fastest pace, the lowest prices, and the widest distribution channels in China, it pushed AI to the broadest swath of Chinese consumer users.

## I. The "Primitive Capital" of Recommendation Algorithms

On 9 March 2012, **Zhang Yiming (张一鸣)** and **Liang Rubo (梁汝波)** founded Beijing ByteDance Technology Co., Ltd. in a rented residential apartment on Zhichun Road in Beijing's Haidian District.

That August, the **Toutiao** (今日头条) app went live. Its product form was alien to the Chinese internet of its day — no editors, no channels, no user-initiated subscriptions. All content was determined by a machine-learning recommendation system.

That recommendation system is the true origin of every AI story ByteDance would later tell. It does not lean on Google-style search intent, but on massive logs of user behavior — clicks, dwell time, completion rates, interactions. It evolved generation by generation, from collaborative filtering to matrix factorization to deep neural networks, and ended up as the recommendation engine behind today's Douyin / TikTok — endlessly studied, endlessly imitated, never fully replicated.

Douyin launched in September 2016; TikTok, the overseas version, launched in May 2017. In August 2018 ByteDance acquired Musical.ly for around USD 1 billion and folded it into TikTok, formally igniting its globalization engine.

To Western internet companies, ByteDance was "that Chinese company whose algorithm overran Instagram and YouTube." Internally, it had always been **a company where the algorithm was the product**.

That fact lowered its threshold for the LLM turn: compute, data, and recommendation-system-grade engineering experience were already in place.

Meta spent three years iterating Reels' recommender to something close to TikTok's; YouTube has yet to make Shorts truly press past TikTok in short video — these are not coincidences, but the compounding interest of ByteDance's decade-long investment in algorithms.

## II. The Early Lineup at AI Lab

In 2016, ByteDance founded its **AI Lab**, initially led by **Wei-Ying Ma (马维英)** — formerly an EVP at Microsoft Research Asia — and **Hang Li (李航)** — author of *Statistical Learning Methods* and former director of Huawei's Noah's Ark Lab — both former colleagues of **Andrew Ng (1976– )**.

Early AI Lab priorities were NLP, machine translation, recommendation, and computer vision in support of business — its results piped directly into Toutiao, Douyin, Lark (Feishu), and Volcano Engine.

From 2017, ByteDance recruited large numbers of overseas Chinese researchers; in 2018 it founded the ByteDance AI Lab US in Mountain View, and in 2019 a UK lab in London.

In July 2020, **Tong Zhang (张潼)** — formerly head of Tencent AI Lab and HKUST professor — joined ByteDance to take over AI Lab, lifting its academic profile into the front rank.

But unlike Baidu and Alibaba, ByteDance rarely amplified the "AI Lab" brand externally.

In Zhang Yiming's "rational, restrained, low-posture" internal culture, AI Lab's results were mostly hidden behind products — content understanding inside TikTok, smart editing in CapCut (剪映), meeting summaries in Lark, ad-targeting prediction in Ocean Engine (巨量引擎). It was only when ChatGPT arrived in 2022 that ByteDance was forced to bring AI to the front.

## III. The Founding of Seed — The LLM Pivot

After ChatGPT, ByteDance's internal response was not actually fast. In early 2023, the company's reading was: "Wait — let's see the routes before we bet."

Within months, the picture cleared up: Baidu's ERNIE Bot, Alibaba's Qwen, Zhipu's GLM, and Moonshot's Kimi had locked the first round of seats. ByteDance decided to push all-in.

From the second half of 2023, ByteDance consolidated the LLM-related teams within AI Lab and aggressively poached from Google DeepMind, OpenAI, Alibaba, Baidu, and elsewhere. In early 2024, it formally separated the Doubao LLM team into the **Seed Team** — its name a reference to "seeds," signaling a long-term commitment to fundamental research.

Seed is led by **Wenjia Zhu (朱文佳)**, a former senior researcher at Google DeepMind. **Yonghui Wu (吴永辉)**, formerly a senior leader at Google Brain / Translate, joined as VP of Research. Senior researchers include **Liang Xiang (项亮)** (formerly DAMO, author of *Recommender Systems in Practice*), Ma Jie, Jimmy Ma, and others.

In 2024 reporting, ByteDance's salary packages for top researchers repeatedly reset records for Chinese tech firms — annual offers north of RMB 10 million were no longer rare, and multi-year packages for top-tier researchers reportedly approached RMB 50 million.

By 2024–2025, ByteDance had become the most active buyer in the Chinese AI talent market, by a wide margin. It poached directly from OpenAI, Anthropic, and DeepMind — bringing North American AI circles, for the first time, into serious conversation about "Chinese companies using sheer salary differentials to peel off our engineers."

## IV. Doubao — The ToC Bet

ByteDance's LLM path differs sharply from Baidu's and Alibaba's: **ToC first, ToB second**.

On 15 May 2024, at Volcano Engine's "Force Conference" (原动力大会), ByteDance officially released its **Doubao (豆包)** model family — including general models Pro / Lite, role-play, function-calling, embeddings, text-to-image, nine in total.

What shook the industry that day was not the models themselves but the pricing: Doubao Pro 32K's input price was **RMB 0.8 per million tokens** — an order of magnitude cheaper than competing domestic models, roughly 99% cheaper than GPT-4.

This was the starting gun for China's 2024 LLM price war — Baidu, Alibaba, Zhipu, and Tencent Hunyuan all cut prices over the next two months; some models went outright free. "Token prices crashed to cabbage levels" became the year's slogan.

Some startup founders later admitted that without ByteDance's blade, they would not have been forced to adjust their business models — token prices would have stuck longer at otherwise unsustainable highs.

Beyond price, ByteDance's true weapon is distribution. The **Doubao app** (with overseas counterpart Cici) launched in August 2023 and, leveraging blanket placements across Toutiao, Douyin, and Ocean Engine, grew rapidly into China's most-active conversational AI assistant by 2024.

QuestMobile / Sensor Tower data showed Doubao's China MAU breaking 47 million in September 2024 and 80 million by early 2025, with ad spend that year ranking first among all AI apps. The logic of treating AI as a traffic product is one ByteDance plays better than any rival.

In 2024–2025, the Doubao series shipped at a pace of one new version every two to three months on average: Doubao Pro 1.5 (January 2025, 256K context, multimodal MoE), Doubao Vision, Doubao 1.5 Pro, Doubao video model **Seedance**, Doubao simultaneous interpretation, Doubao deep reasoning. Overseas, Cici, **Coze (扣子)**, and Gauth (a homework solver) cover Southeast Asia, North America, and Indonesia.

## V. Volcano Ark and the ToB Loop

Doubao faces consumers; **Volcano Ark (火山方舟)** faces developers and enterprises. Launched in June 2023, it is ByteDance's model-hosting platform sitting on Volcano Engine.

From the start, Volcano Ark adopted a "Doubao + third-party" dual-track architecture — hosting both ByteDance's own Doubao series and rival models from MiniMax, Zhipu, Moonshot, Baichuan, and others, with unified billing and a unified SDK. Such "player and referee at the same time" openness is rare among Chinese tech majors and is an important chip in ByteDance's bid for the Chinese MaaS market.

Above Volcano Ark sits **Coze** — ByteDance's agent platform, positioned against OpenAI's GPTs.

From 2024, Coze opened to individual developers for free, and the overseas version Coze.com launched in parallel — switching the model source to OpenAI / Claude and other overseas models. This "domestic and overseas dual SKU" product strategy carries forward ByteDance's accumulated globalization experience.

By 2025, Volcano Engine ranked first among public-cloud LLM API call volumes in China, processing trillions of tokens daily — a number that in turn fed Doubao's training with vast real-world feedback.

In doing so, Volcano Engine evolved from "ByteDance's internal cloud" into the first cloud vendor with truly large-scale MaaS revenue in China's AI era.

## VI. Seed's Research — From Models to Video

Entering 2025, Seed's research output began to land thick and fast in public.

- **Seed1.5 / Seed1.6** (2025): ByteDance's flagship dialogue and reasoning models, repeatedly entering the front rank of LMSYS Chinese leaderboards.
- **Seed-VL** (2025): a natively multimodal LLM covering image, video, and document understanding.
- **Seed-OSS** (August 2025): Seed's first open-sourced 36B base model, with weights under a commercial license — ByteDance's first probe at the "open vs. closed" stance.
- **PixelDance** (2024) and **Seedance** (2025): video generation models, capable of generating high-consistency video over 10 seconds — among the most competitive Chinese video models in the post-Sora era.
- **Seaweed** (2025): ByteDance's foundational research on video generation, emphasizing long-range consistency and motion smoothness, with capabilities feeding down into CapCut and TikTok creation tools.

Seed's internal stance on AGI is more pragmatic. In a 2024 internal session, Wenjia Zhu said: Seed does not chase "PR-grade SOTA," but "SOTA you can drop into Douyin, TikTok, Lark, or CapCut and run." That is a quintessentially ByteDance ordering — research is not for points, but for one more problem solved in the next product iteration.

## VII. The ByteDance Way

Looking back across 2012–2026, ByteDance is the one Chinese internet company that "looks least like an AI company yet is most AI."

It did not shout "All in AI" earliest like Baidu; it did not host a "DAMO launch" like Alibaba. But it wired recommendation, feed, video generation, and conversational AI one at a time into its own distribution engine, putting AI for the first time into every Chinese smartphone as a **consumer-grade everyday tool**.

Its domestic playbook reduces to three sentences: **the model just has to be good enough, the price floored, and distribution emptied of every round of ammunition.**

The playbook has discomfited rivals and provoked debate over "whether ByteDance's mode can work for serious AI." But the fact remains: in 2024–2025, on the two most critical industrial metrics — China LLM API call volume and consumer-grade AI assistant MAU — ByteDance is first.

By the end of 2025, ByteDance had passed Tencent at roughly USD 400 billion (secondary-market valuation), making it one of the most valuable internet companies in China — still unlisted, already a colossus.

Its story is unromantic — no Musk-style slogans, no Altman-style essays, no Jack-Ma-style Zen — but the impact on China's AI industry post-2024 may be the most direct of any: when one company decides to bet all its chips on distribution and price, the entire market is forced to readjust its breathing.

::: tip Historian's Note
ByteDance arose from recommendation, flourished through the distribution of Douyin and TikTok, and in the LLM era struck with the lowest prices, the widest channels, and the deepest pockets. Its entry was late — a decade behind Baidu in establishing a research name, a year behind Alibaba in setting up Seed — but its move was sharp and well-aimed: when Doubao's pricing landed, every Chinese LLM cut prices in turn; when the Doubao app launched, the throne of domestic AI-assistant MAU changed hands. ByteDance has never bragged about research, and even now does not flaunt "AGI" as a slogan, asking only that its models can drop into Douyin, CapCut, Lark, Cici, and Coze. Its merit: turning AI from a laboratory object into a household instrument. Its loss: leaving Chinese LLM API margins all but vanished. Its momentum: not yet exhausted. Whoever later writes the history of ByteDance must speak first of its recommendation roots, then of its distribution wings, and finally of its low-price blade — three combined, becoming today's Seed.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at ByteDance AI Lab, Seed, or Volcano Engine, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. 张一鸣 (Zhang Yiming) (2018). "ByteDance Sixth Anniversary Internal Letter," public version reprinted by multiple media outlets.
2. ByteDance Seed (2024). "Doubao Pro Technical Report." Volcano Engine technical blog.
3. ByteDance Seed (2025). "Seed-OSS-36B Technical Report." Hugging Face / GitHub release notes.
4. ByteDance (2023). "PixelDance: High-Dynamic Video Generation." arXiv:2311.10982 and follow-up reports.
5. Volcano Engine "Force Conference" (15 May 2024), on-site transcript via 36Kr and Yicai.
6. Caixin (2024). 《字节大模型简史：朱文佳、吴永辉与 Seed 的诞生》 [A Short History of ByteDance LLMs: Wenjia Zhu, Yonghui Wu, and the Birth of Seed].
7. The Information (2024). "How ByteDance Is Spending Billions to Catch Up on AI."
8. QuestMobile (December 2024). "Monthly Report on Generative AI Apps in China's Mobile Internet."
9. Sensor Tower (January 2025). "Top AI Apps Worldwide: Doubao, Cici, ChatGPT."
10. ByteDance (2024). "Coze Agent Platform Developer Documentation," coze.cn / coze.com.
11. Bloomberg (2025). "ByteDance Valuation Tops Tencent in Secondary Market."
12. 李航 (Hang Li) (2012). 《统计学习方法》 [Statistical Learning Methods]. Tsinghua University Press (background).
13. 项亮 (Liang Xiang) (2012). 《推荐系统实践》 [Recommender Systems in Practice]. Posts & Telecom Press (background).
