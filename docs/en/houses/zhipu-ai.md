# House · Zhipu AI (GLM)

> A Chinese LLM company that emerged from Tsinghua University's Knowledge Engineering Group — with academic rigor and an open-source line, it has written the three letters "GLM" into the core vocabulary of Chinese NLP.

## I. Twenty Years of Groundwork at Tsinghua KEG

To understand Zhipu AI, one must begin in a single room in Tsinghua University's CS department — the **Knowledge Engineering Group (KEG)**. Founded by Li Juanzi (李涓子), Tang Jie (唐杰), and others, KEG has long worked on knowledge graphs, social network analysis, and graph mining. From 2006, KEG launched **ArnetMiner / AMiner**, a global researcher database that built a million-scale knowledge graph from academic papers — in an era before LLMs, one of China's earliest "AI for Knowledge" infrastructures. The system remains online today, covering hundreds of millions of papers and millions of researcher profiles, and is the most widely used research-graph platform in China's academic community.

At KEG's center sits Tsinghua CS Professor **Tang Jie (唐杰)**. He has ranked among the world's highly cited scholars in data mining, social networks, and graph neural networks for years on end. From 2017 he served as deputy director of KEG, leading PhD students to publish at KDD, WWW, and ACL. After BERT's release in 2018, KEG began turning from knowledge graphs toward pretrained language models — using its graphs to label data while training its own models. This "graph + language model" hybrid line became one source of the later GLM path.

In June 2019, Tang Jie and his PhD student **Zhang Peng (张鹏)** co-founded **Beijing Zhipu Huazhang Technology Co., Ltd. (Zhipu AI)** — Zhang Peng as CEO, Tang Jie as Chief Scientist and Chairman — bringing two decades of lab accumulation directly into the company. Early funding came from Tsinghua-affiliated funds and Legend Capital, and the founding team was fewer than 30, working on East Zhongguancun Road just outside Tsinghua's campus.

Academic pedigree is Zhipu's most distinctive label. Most early staff came from Tsinghua, Peking University, and CAS, many holding triple identities of professor, PhD student, and company employee — teaching by day in the FIT building, writing code by night in the science park. This "lab-as-startup" structure has given Zhipu, alone among Chinese LLM camps, a sustained academic temperament — publishing papers, open-sourcing code, writing technical reports — echoing Anthropic and Meta FAIR in subtle ways, and standing apart from the "internet-product company" feel of teams like ByteDance Doubao or Alibaba Qwen.

Beyond Tang Jie and Zhang Peng, the company's core team includes Tsinghua CS Associate Professor **Dong Yuxiao (东昱晓)** in graph neural networks, and Associate Professor **Liu Zhiyuan (刘知远)** in NLP — Liu, long a contributor to OpenBMB and ChatGLM, is among the youngest core figures in domestic NLP academia. This "professors collectively in the trenches" structure visibly distinguishes Zhipu from other LLM companies.

## II. The GLM Paradigm: A Unified Pretraining Framework

In March 2021, Tang Jie's team posted *GLM: General Language Model Pretraining with Autoregressive Blank Infilling* to arXiv, proposing the **GLM (General Language Model)** pretraining paradigm. At the time, the mainstream split into two paths: BERT's bidirectional autoencoding (strong on understanding) and GPT's autoregression (strong on generation). GLM tried to unify them — its "Autoregressive Blank Infilling" task allowed the model both to read context like BERT and to generate fluent text like GPT.

The most important engineering output of this line was **GLM-130B**, released in August 2022 — a 130-billion-parameter Chinese-English bilingual open model. It arrived at almost the same time as Meta's OPT-175B and BigScience's BLOOM-176B, making it one of the few open-weight 100B-class LLMs of its day. The GLM-130B paper documented in detail the team's mixed-precision training experience on domestic A100 and Ascend 910 clusters — including handling of INT4 quantization, gradient anomalies, and loss spikes — engineering details that would deeply inform later Chinese LLM training practice.

GLM-130B was not a consumer chatbot product — it was a research milestone: proof that a Chinese academic institution could independently train a 100B-class model, and let the community reuse it via open weights. After paper and weights were released, downloads on Hugging Face exceeded ten thousand even before ChatGPT appeared, and Stanford's HELM benchmark listed it alongside OPT and BLOOM as a peer-class model. This "one step ahead" training experience laid critical groundwork for ChatGLM's lightning response half a year later.

## III. ChatGLM-6B: The Icebreaker for Chinese Open-Source Dialogue

When ChatGPT erupted in November 2022, the global NLP community shook. Domestic majors were still internally debating "whether LLMs were worth doing" — Zhipu, with the GLM-130B training experience and an engineering team built from Tsinghua students, responded with extraordinary speed. On 14 March 2023 — less than four months after ChatGPT's release — Zhipu open-sourced **ChatGLM-6B**: 6.2 billion parameters, GLM architecture, fine-tuned for Chinese-English dialogue, runnable on consumer-grade GPUs (6 GB of memory under INT4 quantization).

ChatGLM-6B was the first dialogue LLM in Chinese open-source that "you could run on your own computer." Downloads on Hugging Face and GitHub passed a million quickly. Across China, individual developers, SMEs, and university labs built private deployments around it — customer service, writing assistants, knowledge Q&A, local RAG. Two months after open-sourcing, the GitHub repo broke 20K stars; six months later, 40K. To the Chinese open-source ecosystem, its significance equaled Llama's significance to the global one in the same year: overnight, China had its own "open-source LLM baseline." Many later Chinese vertical models — medical, legal, financial — began life as ChatGLM-6B fine-tunes.

Versions iterated densely after that:

- **ChatGLM2-6B** (June 2023): context expanded from 2K to 32K, inference doubled in speed.
- **ChatGLM3-6B** (October 2023): supports tool use and code interpretation, aligned with OpenAI Function Calling.
- **GLM-4** (16 January 2024): closed-source flagship, against GPT-4, with 128K context and native tool use.
- **GLM-4-Plus** (August 2024): approached or exceeded GPT-4o on MMLU, CMMLU, GSM8K and other benchmarks.
- **GLM-4-Voice** (October 2024): end-to-end voice model with Chinese-English voice dialogue and emotive expression, contemporaneous with OpenAI Advanced Voice.
- **GLM-4.5 / GLM-4.6** (2025): open-source flagships at hundred-billion-parameter scale, performance closing on first-tier closed models.

By 2025, Zhipu's multimodal branches had also bloomed: **CogVLM** vision-language models passed a million downloads on Hugging Face; **CogVideoX** (open-sourced August 2024) is one of China's earliest openly available high-quality text-to-video models, widely re-used by global developers; the image-generation **CogView** series has iterated continuously since 2021 and is one of the few multimodal lines in the Chinese community committed to open source from day one.

The existence of CogView and CogVLM has earned Zhipu international research credit comparable to Llama — citing Zhipu models as comparison baselines is now standard practice in European and American university labs. That academic influence is an asset that closed-source Chinese majors like ByteDance and Alibaba cannot easily replicate.

A note of nuance: Zhipu's open-source licenses are mostly not fully permissive Apache 2.0 / MIT, but carry "commercial use requires registration" clauses — similar to Meta Llama's strategy, retaining ecosystem influence while preventing pure commercial repackaging. This has drawn debate in the Chinese developer community, but is more often understood as "a reasonable choice in the Chinese context."

## IV. Zhipu Qingyan and the Commercial Map

Beyond models, Zhipu also makes products. In August 2023, the consumer chat app **Zhipu Qingyan (智谱清言)** launched, among the first batch of LLM products in China to receive registration under the *Interim Measures for the Administration of Generative AI Services* — alongside Baidu's ERNIE Bot, Alibaba's Qwen, and SenseChat among the first eleven. Qingyan's market presence trails ByteDance Doubao and Moonshot's Kimi, but holds steady in the front rank of China's consumer LLM users, with monthly actives in the millions to low tens of millions. Its differentiation is "GLM-4 + agents" — among the earliest to integrate agents, code interpreters, and document Q&A into a single dialogue interface.

Zhipu's true revenue base lies in **B-side MaaS (Model as a Service) via BigModel.cn** and on-premise deployments. From 2024, Zhipu won large numbers of central state-owned enterprise (SOE), state-owned, and local-government customers — finance, energy, electricity, government affairs, education — becoming the representative supplier among "Chinese national-team" LLMs. Its client list includes China Mobile, State Grid, China Merchants Bank, and CITIC Group; these large contracts provide stable cash flow and reinforce its "national team" tag. Zhipu is reported to have one of the highest 2024 ToB revenues among Chinese LLM startups.

The other side of ToB is the developer ecosystem. The BigModel.cn platform exposes the GLM-4 family via API, with aggressive pricing — GLM-4 Air and similar variants cut prices several times during the late-2024 price war, with some lightweight models priced at fractions of a cent per thousand tokens. Together with ByteDance, Alibaba, and DeepSeek, Zhipu pulled Chinese LLM API prices to among the lowest globally. This "Chinese LLM price war" was repeatedly reported overseas, treated as key evidence that the structure of China's LLM market diverges from Silicon Valley's.

In September 2024, Zhipu closed a strategic financing round of about RMB 3 billion at roughly RMB 20 billion valuation — the highest among China's "AI Big Four" startups (Zhipu, Moonshot, Baichuan, 01.AI). The investor lineup is striking: Alibaba, Tencent, Meituan, Xiaomi, Ant Group, Legend Capital, the National Social Security Fund, Zhongguancun Development Group. Internet giants and state capital arrive together — a literal embodiment of its "academia-industry-government" triple identity.

It is worth noting that nearly all leading internet majors appear simultaneously on Zhipu's cap table — a "everyone in" structure unique among Chinese LLM companies. One reading: Zhipu's Tsinghua background and "political reliability" make it a strategic option no one can afford to miss; another: nobody wants to miss the next OpenAI, so they spread their bets.

## V. The Day It Was Added to the Entity List

On 15 January 2025, the U.S. Treasury's Office of Foreign Assets Control (OFAC) issued a notice placing Zhipu AI and several affiliated entities on the **Entity List**, citing "providing AI capability support to China's military modernization." Zhipu became the first Chinese LLM company directly sanctioned by the U.S. for its model business — an extension of the late-2024 escalation of American export controls.

The practical effects: bans on U.S. companies supplying high-end GPUs, restrictions on the use of U.S. cloud services, and limits on academic collaboration with U.S. institutions. In a public statement, Zhipu "firmly opposed" the allegations and emphasized that its models are deployed solely for civilian and commercial use. But being on the Entity List has changed its standing in the international open-source community — Hugging Face and GitHub access, joint papers with overseas academic institutions, and potential dollar-fund financing have all been affected to varying degrees.

The backdrop is the white-hot U.S.-China AI rivalry of late 2024 — OpenAI's June 2024 announcement that it would "gradually restrict China-IP access to the ChatGPT API" pushed domestic LLM companies into a position of mandatory substitution. Zhipu, carrying open-source flagship, hundred-billion-parameter scale, and SOE customers all at once, became the first to be "counter-targeted." In a sense, the sanctions are a kind of inverse certification: in the eyes of U.S. regulators, Zhipu has been recognized as an irreplaceable part of China's AI industrial system.

In another sense, the sanctions also confirmed Zhipu's standing within China's LLM map — no longer just a lab-spinoff company in Tsinghua, but a representative enterprise viewed externally as a national strategic asset.

After the Entity-List event, Zhipu's public messaging visibly intensified the narratives of "self-reliance" and "domestic compute" — completing LLM training and inference verification on Ascend, Cambricon, and other domestic chips, and participating in foundational-model evaluation benchmarks led by CAICT and the Ministry of Industry and Information Technology. It is no longer just a startup, but is written into official discourse as a model paragraph for "scientific self-reliance."

## VI. Coexistence and Divergence among the Big Four

In 2024–2025 China's LLM contest entered the second half, and the "Big Four" pattern began to diverge.

**Zhipu** holds to "open source + B-side + academia" as a trinity. Unlike Moonshot, it does not pour money into ToC traffic; unlike MiniMax, it does not bet on overseas consumer products. It positions itself as "China's Anthropic + Meta FAIR" — both the strongest open-source baseline and the steadiest enterprise-grade supplier. The positioning gives it few direct rivals in ToB, but cost it the window for ToC user growth. Through the late-2024 ToC traffic war, Zhipu Qingyan was largely absent — resources went into iterating GLM-4-Plus, GLM-4-Voice, and CogVideoX.

**Baichuan AI** (founded by Wang Xiaochuan) has walked a similar path but bent more toward vertical industries; **01.AI** (founded by Kai-Fu Lee) shifted in late 2024 to "model as business," de-emphasizing the general-LLM line; **Moonshot AI** (founded by Yang Zhilin) focuses on long-context ToC. The four, marching shoulder-to-shoulder in 2023, have gradually fanned out into distinct stages.

Beyond the Big Four sit fiercer rivals: **ByteDance Doubao** built hundred-million-MAU on Douyin's traffic; **Alibaba Qwen** put together the most complete open-source family on cloud and e-commerce; **DeepSeek** rose in 2025 with extreme open-source and reasoning models, becoming the most internationally amplified Chinese LLM brand. Zhipu is now in a more crowded lane than in 2023.

By early 2026, the industry generally regards Zhipu as the Big-Four firm "closest to IPO" — multiple media outlets have reported its Hong Kong listing process, and "Zhipu and MiniMax as the twin Chinese LLM stars" has spread among investors. Should it list in Hong Kong, Zhipu would be among China's first truly "publicly listed LLM companies," reshaping valuation reference points industry-wide.

In the geopolitical lens, Zhipu is also the first Chinese LLM company that overseas academia treats as a formal "OpenAI counterpart" research subject — Cambridge, Stanford, and CSET reports across 2024–2025 single it out for analysis, on a par with their attention to DeepSeek.

## VII. Beyond Qingyan: Agents and AutoGLM

Through 2024–2025, Zhipu placed an important product bet: **AutoGLM**. It is a "general agent" product for phones and browsers, executing multi-step tasks like booking flights, ordering food, and organizing documents through voice commands — in the same lane as Anthropic Claude's Computer Use and OpenAI's Operator. Its first public demo in October 2024 sparked substantial discussion — not a chatbot, but an "operating bot," letting an LLM directly take over a phone screen to complete real tasks.

AutoGLM matters because it represents a leap in Zhipu's product form — from "chat box + API" toward "screen control + agent." If the path works, it opens scenarios far broader than chat assistants; if it does not, it can burn substantial resources without visible return. By the end of 2025, AutoGLM was still iterating, in the state of "stunning demos but no large-scale rollout" — exactly where the agent track sits globally.

## VIII. Zhipu as an Institution

Coming back to Zhipu itself: its singularity emerges from a triple stack.

**It is an academic-pedigree company** — its CEO and Chief Scientist are simultaneously Tsinghua professors; many employees are PhDs and university faculty; its publication density far exceeds that of domestic peers. At ACL, NeurIPS, and ICLR, "THUDM" (Tsinghua University Data Mining Group) appears as a collaborator extraordinarily often — Zhipu is the most active publisher among Chinese LLM companies.

**It is an "open-source" company** — from ChatGLM to CogVLM to CogVideoX, almost every flagship has had an open-source version. Its open-source strategy is similar to Meta Llama's but more aggressive: training code and inference frameworks are released alongside, letting global universities reproduce experiments — making ChatGLM a standard lab subject in Chinese NLP teaching.

**It is also a "national team" company** — its client list is filled with central SOEs; the National Social Security Fund and state capital sit on its cap table; after the Entity-List designation, it is treated in official discourse as "a strategic technology force that must be supported." Among Chinese LLM startups, no other is closer to "national information infrastructure."

These three identities are both strength and burden. Academic pedigree gives it technical depth but slower market reflexes; open source gives it enormous community influence but thinner profits than closed-source rivals; the national-team mantle gives it ample capital but means it bears the brunt of geopolitical shifts. The three pull on each other, making every strategic choice at Zhipu more complex than at a purely commercial firm — it cannot purely chase users like ByteDance Doubao, nor purely chase open-source reputation like DeepSeek.

Zhipu's story is a microcosm of the Chinese AI path: starting from a university lab, building community through open source, securing cash flow through ToB, and finally standing under both domestic and international gazes. Whether it becomes the next OpenAI is uncertain; what is certain is that the narrative of "China's autonomous LLMs" cannot omit it.

By early 2026, whether this company eventually heads to IPO or some form of consolidation, the marks it has left over 2019–2025 are clear: it wrote the GLM framework into NLP textbooks; it wrote ChatGLM onto every developer's drive who wanted to run an LLM locally; and it turned "a Chinese 100B-parameter open-source LLM" from nothing into reality. That is what most deserves recording in Chinese AI history under Zhipu's name.

::: tip Historian's Note
Zhipu rose from a single corner of Tsinghua, KEG. Master and student Tang and Zhang, after twenty years deep in knowledge graphs, when the LLM tide arrived, used GLM as one frame to bind understanding and generation; and as the wind from ChatGPT just stirred, within a few short months open-sourced ChatGLM-6B, giving Chinese students a downloadable LLM at last. Such speed was no fortune of a day. Yet its standing rests not on consumer traffic, but on a tripod of academia, open source, and central SOEs — so when storms arrive, OFAC sanctions outside, fragmentation within, the base does not move. Zhipu is to Chinese LLMs what Tsinghua is to Chinese science and engineering — winning not by the sharpest blade, but by the deepest base. Whether it becomes the next OpenAI is unknowable; but the narrative of "China's autonomous LLMs" cannot be written without Zhipu in its pages.
:::

A final note on Zhipu can be taken from a 2025 overseas report: in CSIS's assessment of "systemic risks" from Chinese AI companies, Zhipu sits in the same tier as DeepSeek and Alibaba Qwen. A decade earlier, similar lists carried only BAT. The shift in position is itself the simplest, sharpest footnote on China's AI decade.

## Eyewitness Accounts

::: info Call for contributions
If you have studied or worked at Zhipu AI or Tsinghua KEG, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Du, Z., Qian, Y., Liu, X., Ding, M., Qiu, J., Yang, Z., & Tang, J. (2022). "GLM: General Language Model Pretraining with Autoregressive Blank Infilling." *ACL 2022*.
2. Zeng, A., Liu, X., Du, Z., et al. (2023). "GLM-130B: An Open Bilingual Pre-trained Model." *ICLR 2023*.
3. THUDM (2023). "ChatGLM-6B: An Open Bilingual Dialogue Language Model." GitHub: github.com/THUDM/ChatGLM-6B.
4. Tang, J., et al. (2008). "ArnetMiner: Extraction and Mining of Academic Social Networks." *KDD 2008*.
5. Zhipu AI (2024). "GLM-4 Technical Report." bigmodel.cn.
6. U.S. Department of the Treasury, OFAC (15 January 2025). "Treasury Sanctions Entities Supporting China's Military-Industrial Base."
7. *Caixin Weekly* (2024). 《智谱 AI：清华系大模型独角兽的 ToB 路径》 [Zhipu AI: A Tsinghua-Affiliated LLM Unicorn's ToB Path].
8. *36Kr* (September 2024). 《智谱 AI 完成新一轮 30 亿元融资，估值达 200 亿》 [Zhipu AI Closes RMB 3 Billion Round at RMB 20 Billion Valuation].
9. Wang, W., et al. (2023). "CogVLM: Visual Expert for Pretrained Language Models." arXiv:2311.03079.
10. Yang, Z., et al. (2024). "CogVideoX: Text-to-Video Diffusion Models with An Expert Transformer." arXiv:2408.06072.
11. *MIT Technology Review* (2024). "China's Open-Source AI Strategy: The Rise of Zhipu and DeepSeek."
12. *Southern Weekly* (2025). "After the Entity List: Zhipu AI's Next Step."
