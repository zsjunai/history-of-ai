# House · Baidu AI

> The earliest of China's tech giants to go "All in AI" — from search engine to deep-learning platform to autonomous driving to LLMs, Baidu's winding journey traces every possibility and every regret of an entire generation of Chinese internet companies in AI.

## I. From Hyperlink Analysis to Search Hegemon

On 1 January 2000, **Robin Li (李彦宏)** and **Eric Xu (徐勇)** registered "Baidu Online Network Technology (Beijing) Co., Ltd." in Room 1414 of the Beida Resources Hotel in Beijing's Zhongguancun.

The name "Baidu" was drawn from a line by Xin Qiji — "众里寻他千百度" ("a hundred and a thousand times I sought him in the crowd") — chosen by Robin Li himself. He was 31, just back from Silicon Valley's Infoseek, holding a search patent later named **Hyperlink Analysis** — filed earlier than PageRank, but reaching product form two years after Google.

Baidu started by providing search to portals, then in September 2001 pivoted into the standalone search engine baidu.com. By riding superior Chinese word-segmentation, denser local distribution, and the vacuum left after Google's 2010 exit from mainland China, Baidu became the unchallenged king of Chinese search through the 2010s, with market share at one point above 80%.

In that era, before mobile internet had fully matured, "Baidu it" became virtually a synonym for going online itself.

But Robin Li recognized internally, very early, that search was a business that "would be rewritten." Smartphones were moving the user's information entry point from the browser to apps; super-apps (WeChat, Taobao, Douyin) were walling off the source of content. The "searchable internet" available to a search engine was rapidly narrowing.

In a 2013 internal speech he said: "The next act of the internet is artificial intelligence."

That sentence has been quoted endlessly since, and it set the tone for everything Baidu would do afterwards. From that year on, "AI" replaced "search" as the most-used word in Baidu's internal communications.

## II. IDL and Andrew Ng — The Silicon Valley Bet

In January 2013, Baidu announced the founding of the **Institute of Deep Learning (IDL)**, with Robin Li as honorary head, Yu Kai (余凯, formerly head of department at NEC Labs America) as standing deputy director, and Wang Haifeng (王海峰), Zhang Tong (张潼), and others on the founding bench.

This was the first research institute named for "deep learning" inside any Chinese internet company — earlier than any of its peers at the time. IDL's early results included pushing speech-recognition error rates significantly below 8% for the first time and surpassing 99% on LFW face recognition, putting Baidu at the front of the Chinese AI scene in 2013–2014.

On 16 May 2014, Baidu announced that **Andrew Ng (1976– )** had joined as Chief Scientist, overseeing Baidu Research (Beijing IDL plus the Sunnyvale Lab). Ng's choice — after Stanford, Google Brain, and Coursera — to land at Baidu was the biggest AI personnel news of the year worldwide.

The Sunnyvale lab he led gathered stars in deep learning and systems including Adam Coates, Lin Yuanqing, and Bryan Catanzaro, producing the **Deep Speech** speech-recognition series and neural-network machine translation. Deep Speech 2 (ICML 2015) was the first to systematically prove that an end-to-end CTC architecture could beat traditional HMM pipelines on both English and Mandarin — widely regarded as a milestone in deep-learning speech recognition.

On 22 March 2017, Andrew Ng announced via a Medium open letter that he was leaving Baidu to focus on his own ventures (Landing AI / deeplearning.ai). His departure had multiple causes; from the outside, much had to do with internal restructuring and tensions between research and business lines.

After Ng, **Qi Lu (陆奇)**, who had joined Baidu as COO in January 2017 (formerly Microsoft EVP), became the new AI standard-bearer. During his tenure he set "All in AI" as the company slogan, cut non-core businesses such as healthcare and food delivery, and elevated autonomous driving and conversational AI to top strategic priorities. He framed Baidu's external narrative around "DuerOS + Apollo" — the two pillars of "ears that hear" and "wheels that drive."

In May 2018, Lu announced his departure for "family reasons," after just 14 months.

Two AI flag-bearers in succession had walked out, leaving a meaningful blank in Baidu's AI story — and seeding years of recurring discussion: why can Baidu not retain top AI executives?

## III. Apollo and PaddlePaddle — Two Plays on Platform

The two most consequential things from Lu's tenure both happened in 2017.

On 19 April, at the Shanghai Auto Show, Baidu announced the **Apollo program**, opening its autonomous-driving platform — code, perception data, simulation environments — for free to automakers, parts suppliers, and developers. It was China's first large-scale open-source autonomous-driving platform, modeled on the logic of the Android ecosystem: Baidu provided the "operating system," and OEMs built cars on top of it.

By 2026, Apollo's ecosystem partners exceed 200, including Ford, Hyundai, GAC, BAIC, and Chery. Apollo's codebase has grown from a few hundred thousand lines in 2017 to several million in 2024 — among the largest open-source autonomous-driving projects in the world.

In July, at Baidu's AI developer conference, **PaddlePaddle** ("飞桨" — "an oar to row by") was officially open-sourced, led by Wang Haifeng and **Xu Wei (徐伟)**, an early head of PaddlePaddle.

PaddlePaddle is China's first industrial-grade deep-learning framework, oriented to industry use, supporting large-scale distributed training — the earliest mature non-American framework outside TensorFlow / PyTorch. In ten years, PaddlePaddle has reached over 15 million developers in China's industry and education sectors, and underpins almost every internal AI business at Baidu, including ERNIE and Apollo.

These two acts established Baidu's industrial AI path: **build platforms, build foundations, open-source them.**

This stands in sharp contrast to its contemporaneous domestic rivals' business-driven approach, and gave Baidu a long-running claim to "first in Chinese AI" in public discourse. Open-source for ecosystem, ecosystem for data, data feeding the model — even in the LLM era this loop has not entirely been displaced.

## IV. ERNIE and ERNIE Bot — Early Lead, Late Loss in the LLM Era

After BERT detonated the pretraining era, Baidu followed quickly.

In March 2019, Baidu released **ERNIE 1.0** (Enhanced Representation through Knowledge Integration, 文心), led by Wang Haifeng's team, introducing the first systematic "knowledge-enhanced pretraining" — adding entity-level, phrase-level, and knowledge-graph-level masking on top of MLM, allowing the model to better encode Chinese entities and world knowledge.

ERNIE outperformed vanilla BERT on multiple GLUE / Chinese-GLUE tasks and became the first Chinese pretrained model widely cited internationally. ERNIE 2.0 (2019), ERNIE 3.0 (2021, 10B parameters), and ERNIE 3.0 Titan (2021, 260B parameters) followed in succession, refreshing Chinese leaderboards repeatedly. ERNIE became Baidu's flagship NLP brand.

When ChatGPT erupted in November 2022, the global AI map was redrawn. Baidu's response was the fastest of any Chinese tech giant.

At 2 p.m. on 16 March 2023, Robin Li personally took the stage in Building K2 of Baidu Science Park, Beijing, to launch **ERNIE Bot (文心一言)** — China's first publicly released conversational LLM product positioned against ChatGPT.

But the launch was widely panned. Robin Li did not interact live; the demos were pre-recorded; technical details were sparse. After the event, Baidu's stock fell about 6% in a single day. The Chinese market's first impression of a domestic chatbot was thus shadowed by this launch.

Several insiders later remarked: Baidu did not lose on technology — it lost on timing. Just weeks earlier it had shipped first; two months later, when rivals caught up, the launch's blemishes turned into the easiest quote for competitors.

Baidu iterated continuously after that. ERNIE 3.5 (June 2023, claiming reasoning on par with GPT-3.5), **ERNIE 4.0** (October 2023, with Robin Li claiming overall capability "no longer behind GPT-4"), ERNIE 4.5 (March 2025, made free), and the reasoning-augmented **ERNIE X1** (March 2025, against DeepSeek-R1 / o1) were released in succession.

But starting in 2024, the domestic LLM landscape was being carved up by Alibaba's Qwen, ByteDance's Doubao, Moonshot AI's Kimi, and DeepSeek. Baidu's first-mover advantage in general LLMs was steadily eroded.

ERNIE 4.5 / X1 were made free in March 2025 and partially open-sourced in June 2025 (with weights of the base versions released under permissive licenses) — a pivot under pressure, and another way of returning, after a decade of open-source narrative, to where Baidu had begun.

## V. Apollo Go and "Robotaxi on the Streets"

What truly carried Baidu AI into Chinese households was not the LLM but autonomous driving.

After Apollo opened in 2017, Baidu pursued its own Robotaxi in parallel. In October 2020, **Apollo Go** opened to public riders in Beijing's Haidian District; in May 2021, in Beijing's Shougang Park, Baidu obtained the country's first fully driverless commercial demonstration license. In 2022 the brand was renamed **Apollo Go (Baidu Robotaxi)** — known in Chinese as 萝卜快跑.

From 2024, Apollo Go's mass commercialization in Wuhan attracted nationwide attention — a fleet of more than 400 vehicles, daily order volumes that repeatedly broke Chinese Robotaxi records, and ride prices within a 5-kilometer radius dropping to as low as RMB 3 to 5.

Discussions of "machines stealing taxi drivers' livelihoods" trended on Weibo, and videos of local taxi drivers' collective petitions circulated on social platforms. It became China's first large-scale public conversation about "autonomous driving displacing employment."

By the end of 2025, Apollo Go was in regular operation in more than ten cities, including Beijing, Wuhan, Chongqing, Shenzhen, Shanghai, Guangzhou, Changsha, and Hefei, with cumulative orders running into the tens of millions — alongside Waymo, one of only two companies in the world running fully driverless Robotaxi commercial service.

In parallel, Baidu pushed **Kunlun (昆仑芯)** AI accelerator chips — from the Kunlun-1 FPGA tape-out in 2018 to the mass production of Kunlun-3 in 2024 — completing a "chip → framework → model → application" full domestic AI stack, a chain that few Chinese companies have driven all the way to commercial reality.

## VI. Wang Haifeng, Shen Dou, and a Generation of Technical Backbone

Baidu AI's ten-year output owes itself not to any single "star scientist," but to a roster of long-distance technical operators.

**Wang Haifeng (王海峰)**, CTO and core lead of IDL and the ERNIE series, joined Baidu in 2010 — the soul engineer of the PaddlePaddle / ERNIE lineage and one of the earliest ACL Fellows from China's NLP community.

**Shen Dou (沈抖)**, since 2024 also serving as head of the Intelligent Cloud Group, leads ERNIE's commercialization and cloud-side MaaS. **Ma Yanjun (马艳军)** is the current technical lead for PaddlePaddle. He Zhongjun, Xiao Xinyan, and He Jingzhou have built deep work in machine translation, ERNIE, and Apollo respectively.

After Qi Lu's departure, no parachuted "star COO" arrived from outside; the engineering cadre grown internally became the actual backbone of Baidu's AI front. This "localization of technical leadership" sets Baidu apart from Alibaba and ByteDance — once Andrew Ng and Qi Lu left, the company stopped relying on overseas stars and instead sent its homegrown engineers to the front.

The cost is lower public buzz; the upside is greater technical-path stability.

## VII. The Price of Going First

Looking back across 2013–2026, Baidu was the earliest among Chinese internet giants to bet the house on AI, and the earliest to make "All in AI" a slogan.

It was first at many things in China: the first deep-learning research institute, the first industrial-grade open-source framework, the first open-source autonomous-driving platform, the first publicly-released chatbot, the first city-scale fleet of commercially operating Robotaxis.

But "first" does not necessarily mean "strongest." On the general-LLM table, by 2025 Baidu had been overtaken by Qwen, Doubao, and DeepSeek; in its core search business, the AI rewriting of search has narrowed its moat visibly; its share price has slid from the 2021 peak, with market cap stuck for a long stretch around USD 30–40 billion — sidelined in China's "internet number-two" race.

In an internal letter in 2024, Robin Li acknowledged: "What used to be our advantages may not still be advantages."

Baidu remains one of the most important players in Chinese AI — its PaddlePaddle, Apollo, Kunlun, and Apollo Go form together the most complete industrial chain of Chinese AI. It is also a company being repeatedly tested by the times: whether its first-mover advantage can survive the next wave of reshuffling depends on the story after 2026.

::: tip Historian's Note
Baidu is to Chinese AI as the early-departing goose: it fanned the wind first, and was first buffeted by it. Across a decade, it gave us IDL, then Apollo, then PaddlePaddle, then ERNIE — all roads later trodden by others. Yet the first-mover is not always the beneficiary: Andrew Ng and Qi Lu left in turn, ERNIE Bot's debut stumbled, and in general LLMs, the latecomers carried away the prize. Its lasting gain lies in the long view: PaddlePaddle is to Chinese deep-learning developers what Linux is to operating systems; Apollo Go is to Chinese mobility what a single bridge is to a great river. Its loss lies in cadence: each time it stood at the front of the wind, it was the first to feel the wind turn. But matters of technology are reckoned in decades, not in years — looking back from 2030 onward, Baidu's "All in AI" may yet prove to have been more than empty words.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Baidu IDL, Baidu Research, PaddlePaddle, Apollo, ERNIE, or Apollo Go, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. 李彦宏 (Robin Li) (2017). 《智能革命：迎接人工智能时代的社会、经济与文化变革》 [The Smart Revolution]. CITIC Press.
2. Hannun, A., Case, C., Casper, J., et al. (2014). "Deep Speech: Scaling up end-to-end speech recognition." arXiv:1412.5567.
3. Amodei, D., Anubhai, R., Battenberg, E., et al. (2016). "Deep Speech 2: End-to-End Speech Recognition in English and Mandarin." ICML 2016.
4. Sun, Y., Wang, S., Li, Y., et al. (2019). "ERNIE: Enhanced Representation through Knowledge Integration." arXiv:1904.09223.
5. Sun, Y., Wang, S., Feng, S., et al. (2021). "ERNIE 3.0: Large-scale Knowledge Enhanced Pre-training for Language Understanding and Generation." arXiv:2107.02137.
6. Ma, Y., Yu, D., Wu, T., & Wang, H. (2019). "PaddlePaddle: An Open-Source Deep Learning Platform from Industrial Practice." *Frontiers of Data and Computing*, 1(1).
7. Andrew Ng. "Opening a new chapter of my work in AI." Medium, 22 March 2017.
8. 陆奇 (Qi Lu) (18 May 2018). "Baidu all-staff letter," via Tencent Tech and 36Kr coverage.
9. Baidu Apollo Open Platform Whitepapers (2017–2025).
10. 李彦宏 (Robin Li) (16 March 2023). On-site transcript of the ERNIE Bot launch, via Xinhua, Yicai, and The Paper.
11. 36Kr (July 2024). 《萝卜快跑武汉调查：5 块钱打到的未来》 [Inside Apollo Go in Wuhan: A Five-Yuan Future].
12. Baidu Inc. Annual Reports (Form 20-F), 2014–2024.
13. Wang Haifeng et al. (2024). "ERNIE 4.0 Technical Report." Baidu Research public document.
