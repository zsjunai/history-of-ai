# House · Alibaba DAMO Academy

> The moment in 2017 when an e-commerce company announced it would build "China's Bell Labs," Chinese tech firms gained, for the first time, the ambition to converse with basic research. Eight years later, Qwen had cashed in that ambition as one of the most influential open-source Chinese LLMs in the world.

## I. RMB 100 Billion at Yunqi

On 11 October 2017, in the small town of Yunqi by Hangzhou, at the main forum of the Yunqi Conference,

**Jack Ma (马云)** announced that Alibaba was formally founding the **DAMO Academy** (达摩院), with more than RMB 100 billion to be invested over three years across artificial intelligence, quantum computing, machine learning, network security, visual computing, natural language processing, human-machine natural interaction, chip technology, sensor technology, embedded systems, and a dozen other directions.

The name carried Jack Ma's brand of romance — drawn from the Zen tale of Bodhidharma, while the formal English acronym DAMO stood for **D**iscovery, **A**dventure, **M**omentum, **O**utlook.

Ma set the academy a brashly ambitious bar: it should "outlive Alibaba — at least 102 years; serve at least two billion people worldwide." His exact words: DAMO must "make money, but not do research for the sake of making money."

The first dean was concurrently held by Alibaba's CTO, **Zhang Jianfeng (Xingdian, 行癫)**. The academic advisory board recruited an internationally heavyweight roster: Turing laureate **Judea Pearl (1936– )**, machine-learning master **Michael I. Jordan (1956– )**, quantum physicist Pan Jianwei, cryptographer Wang Xiaoyun, AI scholar Fei-Fei Li (then at Google), and computer-systems expert Zhang Yaqin.

The list itself was a manifesto.

For the first time, a Chinese internet company had placed "basic research" at the center of its public narrative. Behind the applause at Yunqi sat a deeper bafflement: why would an e-commerce company do something this seemingly unprofitable?

Internally, DAMO was bound from day one to Alibaba Cloud. Its compute, engineering staff, and data sources all came from Alibaba Cloud's infrastructure. That coupling spared it from building a compute base from scratch, but it also made eventual convergence with the cloud business inevitable.

## II. Chips, Quantum, and T-Head

When DAMO was first launched, outsiders assumed it would be a mostly software, AI-leaning research institute. As it turned out, Jack Ma was bolder than anyone.

In April 2018, Alibaba announced its full acquisition of Hangzhou C-SKY Microsystems, a domestic embedded-CPU IP firm. In September of the same year, Alibaba merged C-SKY with DAMO's chip team into **T-Head Semiconductor (平头哥半导体)** — its name a wink to the African honey badger, an internet meme for "willing to bite anything."

In July 2019, T-Head released **Xuantie 910 (玄铁 910)**, then one of the highest-performance RISC-V processors in the world, with single-core SPECint2006 score above 7.1.

Two months later, on 25 September 2019, at Yunqi Conference, Alibaba unveiled **Hanguang 800 (含光 800)**, an AI inference NPU that hit a peak of 78,563 IPS on ResNet-50 — among the strongest AI inference chips of its day, deployed inside Alibaba's e-commerce visual-search services such as Pailitao.

The quantum direction moved equally aggressively. In 2017 DAMO founded a Quantum Lab and invited Yiwen Shi (施尧耘) of the University of Michigan to lead it. By 2018 it had achieved an 11-qubit superconducting quantum computing system. In early 2024 Alibaba announced that the Quantum Lab would be donated in its entirety to Zhejiang University — a strategic retrenchment, but one whose earlier investments left an important legacy in China's quantum-computing community.

In databases, DAMO was deeply involved in **OceanBase** — once an internal Ant Group project, it grew into the world's top-ranked TPC-C relational database, with multiple VLDB / SIGMOD papers co-authored by Alibaba, DAMO, and Ant.

In autonomous driving, DAMO led the development of Cainiao's last-mile delivery vehicle "Xiaomanlv" — deployed on university campuses since 2020, one of the most rapidly scaled L4 low-speed autonomous-vehicle programs from China.

## III. M6 and the Trillion-Parameter Chinese Origin

AI was the direction that finally carried DAMO into the public eye.

In 2020, DAMO unveiled **M6** (MultiModality-to-MultiModality Multitask Mega-transformer), led by Hongxia Yang and **Junyang Lin (林俊旸)**, among others.

A 100B-parameter version arrived in March 2021; in May 2021 it was extended to 10 trillion parameters (using a Mixture-of-Experts architecture) — at the time, the largest publicly announced parameter count of any Chinese LLM. M6's target scenarios were multimodal generation inside e-commerce: product copy, posters, virtual try-on.

It was never released to consumers, but it accumulated for the team training experience at the thousands-to-tens-of-thousands-of-GPU scale, and became an important precursor to the Qwen engineering team.

Running in parallel was the **Tongyi (通义)** series. In September 2022, DAMO released the "Tongyi" unified model base, covering NLP, CV, and multimodal.

At the Alibaba Cloud Summit on 11 April 2023, Daniel Zhang (then CEO) personally launched **Qwen (通义千问)** — Alibaba's first publicly-released conversational LLM. The Chinese name "Qianwen" translates to "a thousand questions"; Qwen is the romanization of Qianwen.

When Qwen 1.0 launched, the public reaction was lukewarm — "yet another Chinese model going up against ChatGPT." The same window saw releases from Baidu's ERNIE Bot, SenseTime's SenseChat, Huawei's Pangu, and dozens of other Chinese LLMs; narrative fatigue was setting in.

What truly redrew the global LLM map for Qwen was its choice to **fully open-source**.

## IV. Qwen — China's Llama

On 3 August 2023, Alibaba simultaneously open-sourced **Qwen-7B** and Qwen-7B-Chat on ModelScope (DAMO's "Chinese Hugging Face") and on Hugging Face itself, under a commercially-usable weight license.

This was the first time a Chinese tech major had taken the Llama path and released its flagship model weights directly. Three months later Qwen-14B followed; by the end of 2023, Qwen-72B and Qwen-Audio were all open-sourced.

After that, the Qwen series iterated at startling density:

- **February 2024**: Qwen1.5 — supporting 32K context, with six sizes from 0.5B to 72B.
- **June 2024**: Qwen2 — introducing GQA, long context (128K), and major multilingual gains; Qwen2-72B closed in on Llama 3.1 405B on multiple leaderboards.
- **September 2024**: Qwen2.5 — with specialized branches Qwen2.5-Coder and Qwen2.5-Math; Qwen2.5-72B-Instruct briefly took the top open-source slot on LMSYS Chatbot Arena.
- **From 2025**: Qwen3, Qwen3-Coder, Qwen-Max, Qwen-VL Max, Qwen-Omni multimodal, Qwen3-Next, and others kept shipping. Qwen's cumulative downloads on Hugging Face have stayed first among Chinese models for the long term, earning the nickname "China's Llama" overseas.

The Qwen technical line is led by Junyang Lin, **Bai Jinze (白金泽)**, **Liu Yiran (刘羿然)**, and other core researchers, with overall direction from Alibaba Cloud CTO **Jingren Zhou (周靖人)** — a Princeton CS PhD and former Microsoft Partner VP — who is the strategic decisionmaker behind Qwen's open-source choice.

The payoff from open-sourcing has exceeded all expectations. By 2025, derivative models fine-tuned from Qwen on the Hugging Face leaderboard exceeded ten thousand. Qwen has become, after Llama, the second most-used open-source LLM family by developers worldwide.

## V. Joseph Tsai, Eddie Wu, and "All in AI"

On 10 September 2023 (Alibaba's 24th anniversary), Alibaba announced a major leadership change: **Joseph Tsai (蔡崇信)** became Chairman of the Board, and **Eddie Wu (吴泳铭)** became CEO. Both men were members of Alibaba's "Eighteen Arhats" of 1999.

In his inaugural speech in November, Wu set out two phrases that would be quoted endlessly: Alibaba should be "user-first and AI-driven," and "All in AI" became the most important strategy of the company's next decade.

After this leadership change, Alibaba's resource tilt toward AI moved into a new order of magnitude. In February 2024, Alibaba announced strategic investments in early rounds of Moonshot AI (Kimi) and DeepSeek — covering nearly every major Chinese LLM startup.

From 2024 onward, Alibaba Cloud ranked first in domestic Model-as-a-Service (MaaS) market share, with Qwen and third-party models hosted side by side on the Bailian (百炼) platform.

In November 2024, Alibaba and Apple reached an agreement on "Apple Intelligence for China," with Qwen selected as one of the AI model providers for the China-mainland version of the iPhone — the first time a Chinese LLM entered the built-in AI stack of a top-tier global hardware platform, regarded by the industry as the most public endorsement of Qwen's capabilities.

In February 2025, in a Bloomberg interview in Dubai, Eddie Wu announced that Alibaba would invest more than RMB 380 billion in cloud and AI infrastructure over the next three years — exceeding the past decade combined.

The capital markets responded violently: Alibaba's Hong Kong-listed shares rose more than 70% within the year, and its market cap returned to USD 300 billion.

## VI. DAMO and Alibaba Cloud — Two Faces of the Same Body

As LLMs became the strategic center of the company, DAMO's boundaries became increasingly blurred.

From 2023 onward, "DAMO Academy" gradually faded from external branding, and its LLM and cloud-related teams were largely absorbed into Alibaba Cloud Intelligence. The "Tongyi" lab today is organizationally part of Alibaba Cloud; in research lineage it succeeds DAMO; commercially it interfaces with MaaS and ToB.

Chips (T-Head) operate independently and from 2024 stepped up external sales as a T-Head Semiconductor subsidiary; quantum has been spun off to Zhejiang University; databases (OceanBase) are tightly bound to Ant; autonomous driving (Xiaomanlv) remains under DAMO; other basic-science directions are partly housed in DAMO research centers outside the former Quantum Lab, partly funded as collaborations with universities through grants.

This evolution has shifted external perception — DAMO is no longer seen as an independent "China's Bell Labs," but as the research upstream of Alibaba Cloud AI. Jack Ma's 2017 ideal of "earning money but not for the sake of earning money" has, in the LLM era, inevitably converged with commercialization.

But precisely for that reason, Alibaba has become the Chinese tech major with the clearest commercialization path: training, hosting, compute — three streams flowing through a single outlet, Alibaba Cloud.

## VII. Eight Years On

Looking back across 2017–2025, the three things DAMO has left to Chinese AI, in order, are these:

- It put the four characters "basic research" into the annual report of a publicly-listed company;
- It brought a stack of hard-tech projects — Hanguang, Xuantie, T-Head — into the industry's line of sight;
- It open-sourced Qwen onto the desktops of developers worldwide.

Whether DAMO became "China's Bell Labs" — the answer is roughly: no, but it made the idea of "China's Bell Labs" feel, for the first time, less hollow.

That is the more practical victory — not the construction of a temple, but the demonstration to those who follow that the path of "afford it, build it, deploy it" is a viable one inside a Chinese internet company.

::: tip Historian's Note
DAMO arose at Yunqi in 2017, with Jack Ma's promise of one hundred billion. Scholars gathered, observers chattered: how could an e-commerce house speak of fundamentals? Yet across eight years, T-Head emerged, Hanguang took shape, Xuantie went into production; M6 opened the way and Qwen carried it forward, with the seven-billion and seventy-two-billion open-source models reaching developers across the world. Its ambition could not in the end live up to its founding words — the Quantum Lab fractured, the DAMO name receded under the Cloud, and research and commerce gradually merged. But three things it left behind: it put "basic research" into the deliberations of a public company; it set "Chinese LLMs" shoulder-to-shoulder with Llama on Hugging Face; it made "open source" a strategy for Chinese tech majors, and not just a posture. Jack Ma's hundred billion may not have been spent quite as he intended, but DAMO stands.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Alibaba DAMO Academy, T-Head, or the Qwen team, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. 马云 (Jack Ma) (11 October 2017). "Founding of DAMO Academy" keynote, on-site transcript at the Yunqi Conference.
2. Bai, J., Bai, S., Chu, Y., et al. (2023). "Qwen Technical Report." arXiv:2309.16609.
3. Yang, A., Yang, B., Hui, B., et al. (2024). "Qwen2 Technical Report." arXiv:2407.10671.
4. Qwen Team (2024). "Qwen2.5 Technical Report." arXiv:2412.15115.
5. Lin, J., Yang, A., Zhang, Y., et al. (2021). "M6: A Chinese Multimodal Pretrainer." arXiv:2103.00823.
6. T-Head Semiconductor (2019). "Hanguang 800: A High-Performance AI Inference Chip." Hot Chips 31 talk materials.
7. Alibaba Group (2017–2024). Annual Reports (Form 20-F), DAMO investments and organizational disclosures.
8. 周靖人 (Jingren Zhou) (2024). "Tongyi LLMs and Alibaba Cloud's MaaS Strategy," keynote at Alibaba Yunqi Conference.
9. 吴泳铭 (Eddie Wu) (November 2023). "User-first, AI-driven," Alibaba all-staff letter.
10. Caixin (April 2024). 《阿里 All in AI 路线图》 [Alibaba's All-in-AI Roadmap], in-depth report.
11. Bloomberg (February 2025). "Alibaba to Spend $53 Billion on AI Infrastructure."
12. ModelScope official documentation (2022–2025).
13. OceanBase Team (2019). "OceanBase: A 707 Million tpmC TPC-C Benchmark." TPC.org public report.
