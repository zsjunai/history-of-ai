# 书 · 大语言模型

> 从 GPT-1 的 1.17 亿参数到 GPT-4 的万亿级规模，大语言模型在不到六年内由实验室的好奇心化为一种普惠的生产力。这是 AI 历史上最猛烈的一次范式革命，也是科学、产业与权力第一次在同一张桌子上同时下注。

## 一、前传：语言模型的演进

故事的起点远比 ChatGPT 古老。早在 1948 年，<Person id="shannon" /> 在《通信的数学理论》中已用 n-gram 描述英语字母的统计规律——语言模型的雏形其实是一台信息熵计算器。半个世纪里，n-gram 凭借马尔可夫假设支撑起了机器翻译与语音识别，却终究困在数据稀疏与上下文短视的牢笼里。

转机来自 2003 年。<Person id="bengio" /> 在 *A Neural Probabilistic Language Model* 中第一次将神经网络嵌入语言建模：把每个词映射为低维稠密向量，再用前馈网络预测下一个词。论文当年并未引爆舆论，却为日后所有语言模型奠定了"分布式表示"的根基。十年之后，谷歌的 Mikolov 团队推出 Word2Vec（2013），让"国王 - 男人 + 女人 ≈ 女王"的代数等式登上《自然》与所有教科书。2018 年初，AllenAI 的 ELMo 又把上下文塞进词向量——同一个"bank"在不同句子中拥有不同的表示。

舞台已经搭好，只等一种新的架构走上来。

## 二、Transformer 的诞生

2017 年 6 月，<Person id="vaswani" /> 与七位同事在 arXiv 挂出 *Attention Is All You Need*。论文做了一个在当时近乎鲁莽的决定：彻底抛弃 RNN 与 CNN，仅靠自注意力（Self-Attention）建模任意距离的依赖。它天然适合 GPU 并行，训练速度数倍于 LSTM。

Transformer 很快裂变出三条家族支线。编码器路线诞生了 BERT（Google, 2018）——双向掩码预训练横扫 GLUE 11 项基准。解码器路线被 OpenAI 拾起，成为 GPT 系列的骨架。编码器-解码器路线则演化为 T5（Google, 2019），把所有 NLP 任务统一为"文本到文本"。三条路线从同一条河里分出去，最后又在 2023 年的多模态大模型中悄然合流。

## 三、规模定律与涌现

GPT-1（2018 年 6 月）只有 1.17 亿参数，论文标题朴素得近乎随意——*Improving Language Understanding by Generative Pre-Training*。它的贡献不在性能，而在证明"先无监督预训练、再有监督微调"是一条可走通的路。

一年后，GPT-2 把参数推到 15 亿。OpenAI 以"被滥用风险过高"为由，史无前例地分阶段放出权重。学界一半愤怒一半好奇——这是大模型第一次因为"太强"而上新闻。

真正的奇点是 GPT-3。2020 年 5 月，OpenAI 公布 1750 亿参数的怪兽，并展示了少样本学习（Few-Shot Learning）：给三五个例子，模型就能模仿格式、续写代码、翻译语种。同年，<Person id="kaplan" /> 等人发表 *Scaling Laws for Neural Language Models*，把模型性能、参数量、数据量、计算量之间的幂律关系画成了一张可外推的图。从此，"加大参数"不再是赌博，而是工程。

但故事很快出现修正。2022 年，DeepMind 训练 Chinchilla（70B 参数、1.4T tokens）击败 Gopher（280B 参数、300B tokens），提出了著名的 Chinchilla 定律：在固定计算预算下，参数与数据应当同比例放大。从此每一份训练报告都得回答同一个问题——你的数据够吃吗？

更迷人的是涌现能力（Emergent Abilities）。Wei 等人在 2022 年系统记录了二三十种能力：当模型跨过某个规模门槛，多步算术、思维链推理、指令遵循突然从近乎为零跃升至可用——仿佛量变在某一点真的引起了质变。

## 四、ChatGPT 时刻

2022 年初，OpenAI 用人类反馈强化学习（RLHF）将 GPT-3.5 调教成 InstructGPT，让模型第一次学会"听话"。<Person id="brown" /> 与同事在论文中报告：13 亿参数的 InstructGPT 在用户偏好上击败了 1750 亿参数的原版 GPT-3——对齐的价值首次被定量证实。

11 月 30 日，OpenAI 顺手把对话界面包装上线，取名 ChatGPT。<Person id="altman" /> 当晚在推特上写道："今天我们发布了 ChatGPT。"五天后用户破百万，两个月破亿，刷新了消费互联网的所有增长曲线。它并不是当时最强的模型——GPT-4 已在内测——但它把模型变成了产品：免费、无门槛、能聊天。

连锁反应铺天盖地。微软次年初追加 100 亿美元投资 OpenAI，谷歌内部拉响"红色警报"，字节、百度、阿里、腾讯几乎在同一周宣布大模型战略；监管者第一次意识到自己已经迟到。

## 五、GPT-4 与多模态

2023 年 3 月 14 日，GPT-4 发布。它在律师资格考试 UBE 中拿到第 90 百分位，在 SAT 数学考到 700 分以上，并第一次原生支持图像输入。OpenAI 没有公布参数量与结构，业内推测是 1.8 万亿参数级别的稀疏专家混合（MoE）。

竞争者紧随其后。Anthropic 由 OpenAI 前研究副总裁 <Person id="amodei" /> 创立，2024 年 3 月推出 Claude 3 三件套（Haiku/Sonnet/Opus），主打 200K 上下文与"宪法 AI"对齐法。谷歌把 PaLM 系列收编进 Gemini 品牌，2023 年 12 月发布 Gemini 1.0，2024 年 2 月推出原生多模态、上下文窗口 1M tokens 的 Gemini 1.5 Pro。2024 年 5 月，OpenAI 发布 GPT-4o——"o"代表 omni，文本、图像、音频在同一个网络里端到端处理，语音延迟降到 232 毫秒，逼近真人对话。

## 六、推理能力的突破

2022 年初，谷歌的 Wei 等人提出思维链（Chain-of-Thought, CoT）：在提示中加上"让我们一步步思考"，模型在数学和常识推理上的准确率成倍跃升。这一发现让人意识到，模型的能力不仅取决于参数，也取决于推理时如何组织计算。

2024 年 9 月，OpenAI 发布 o1（代号 Strawberry），把强化学习与长链 CoT 结合，在 AIME 数学竞赛中取得 83% 的准确率，远超 GPT-4o 的 13%。它开创了"推理时计算"（Test-Time Compute）的新范式：不再只靠预训练，而是让模型在回答前自己思考几秒钟到几分钟。

更猛烈的冲击来自杭州。2025 年 1 月 20 日，DeepSeek 发布 R1，纯靠强化学习激发出与 o1 相当的推理能力，训练成本据称仅 557 万美元，权重以 MIT 协议开源。R1 上线一周内下载量登顶美区 App Store，英伟达单日市值蒸发近 6000 亿美元——华尔街第一次怀疑"算力即护城河"的剧本。

## 七、全球大模型竞赛

**美国**——OpenAI 以商业化为矛，把 ChatGPT 做成消费级入口；Anthropic 以安全为盾，Claude 系列成为编程与企业市场的首选；谷歌 Gemini 押注搜索与 Workspace 的整合；<Person id="touvron" /> 等人 2023 年开源的 LLaMA 系列把"开源即生态"推到极致，到 LLaMA 3.1（2024 年 7 月）已逼近闭源旗舰；xAI 的 Grok 则借助 X 的实时语料另辟蹊径。

**中国**——百度文心一言在 2023 年 3 月率先在国内发布；阿里通义千问（Qwen）成为开源最积极的力量，Qwen2.5、Qwen3 系列在 Hugging Face 累计下载过亿；智谱 ChatGLM 出身清华，深耕学术与政企；DeepSeek 以 V3、R1 把"小团队 + 高效算力"的样板写进教科书；月之暗面 Kimi 把上下文窗口推到 200 万字，专攻长文档；MiniMax 在语音与多模态上自成一派；字节豆包凭借抖音流量后来居上，2025 年月活逼近 ChatGPT。

**欧洲**——法国的 Mistral 由前 Meta、DeepMind 研究员创立，以 7B、Mixtral 8x7B 等小而美的开源模型在欧洲扛旗。

## 八、LLM 的局限与批评

幻觉（Hallucination）是头号顽疾——模型会自信地编造不存在的论文、法条与人物，且越流畅的输出越难被察觉。推理同样脆弱：把数学题里的名字换一遍，准确率就可能掉一截。Apple 团队 2024 年的 GSM-Symbolic 研究表明，主流 LLM 的"推理"在很大程度上仍是模式匹配。

数据版权也在 2023—2025 年间集体引爆。《纽约时报》起诉 OpenAI 与微软，Getty Images 起诉 Stability AI，作家、画家、程序员相继加入诉讼方阵；欧盟《AI 法案》与中国《生成式人工智能服务管理暂行办法》几乎在同一周落地。能耗同样令人不安——训练一个 GPT-4 级模型的电力消耗，相当于一座小型城市数月的用量。

最尖锐的批评来自 <Person id="lecun" />。他坚持 LLM 是"自回归在 token 空间的曲线拟合"，无法理解物理世界，永远到不了人类智能。<Person id="bengio" /> 与 <Person id="hinton" /> 则走向另一端：在 2023 年陆续公开警告 LLM 的进展速度已超出他们二十年前的预期，可能在十年内带来失控风险。LLM 究竟是通往 AGI 的康庄大道还是优雅的死胡同？这是 2026 年最贵的开放问题。

## 九、LLM 的应用生态

模型只是底座，真正改变世界的是上层应用。GitHub Copilot（2021）让一半的代码在补全中产生，Cursor 与 Claude Code（Anthropic, 2025）把 IDE 重新发明成"与模型结对编程"的工作站。Perplexity 与 SearchGPT 把搜索引擎改写成对话式答案机；RAG（Retrieval-Augmented Generation）让 LLM 接入企业知识库，成为合规与时效性的标准解。

更激进的方向是 Agent。从 AutoGPT 的玩具实验，到 Anthropic 在 2024 年定义 MCP（Model Context Protocol）协议、2025 年 OpenAI 推出 Operator、谷歌发布 Project Mariner，模型正从"对话助手"进化为可以自主调用工具、浏览网页、操作软件的数字员工。客服、法务、医疗、教育、招聘、投研——几乎每一个白领工种都在重新洗牌。

---

::: tip 太史公曰
余观大语言模型之兴，叹未有如此速者也。GPT-1 至 GPT-4，五年而参数千倍，市值万亿。其势之猛，乃在三事之合：架构得 Transformer 之利，算力得英伟达之惠，数据得万维网之积。然规模非神器，Chinchilla 一出，知数据与参数当并重；R1 一出，知开源与算法亦能折服闭源之资。ChatGPT 之所以惊天动地，不在模型最强，而在产品最简——百亿之投，输于一个对话框。今美中欧各执一隅，闭源与开源、推理与直觉、对齐与放任，俱未有定论。后之览者，当记此节：每一次"已经到顶"的论断，都在两年内被一行新论文推翻。
:::

## 亲历者说

::: info 征集中
如果你参与过大模型的研发、产品化或落地实践，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Bengio, Y., Ducharme, R., Vincent, P., & Jauvin, C. (2003). A neural probabilistic language model. *Journal of Machine Learning Research*, 3, 1137-1155.
2. Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. *arXiv preprint arXiv:1301.3781*.
3. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
4. Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *Proceedings of NAACL-HLT*, 4171-4186.
5. Radford, A., Wu, J., Child, R., et al. (2019). Language models are unsupervised multitask learners. *OpenAI Technical Report*.
6. Brown, T., Mann, B., Ryder, N., et al. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, 33.
7. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). Scaling laws for neural language models. *arXiv preprint arXiv:2001.08361*.
8. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). Training compute-optimal large language models (Chinchilla). *arXiv preprint arXiv:2203.15556*.
9. Ouyang, L., Wu, J., Jiang, X., et al. (2022). Training language models to follow instructions with human feedback (InstructGPT). *Advances in Neural Information Processing Systems*, 35.
10. Wei, J., Wang, X., Schuurmans, D., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. *Advances in Neural Information Processing Systems*, 35.
11. OpenAI. (2023). GPT-4 technical report. *arXiv preprint arXiv:2303.08774*.
12. DeepSeek-AI. (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
