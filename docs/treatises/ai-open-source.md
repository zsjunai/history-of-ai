# 书 · AI 与开源运动

> 从 Theano 第一次让全世界共享一份梯度公式，到 LLaMA 权重在论坛上一夜流出，再到 DeepSeek 把推理模型免费送给整个互联网——开源不只是软件协议，它是 AI 时代最强大的反垄断工具，也是一场关于权力、安全与国家边界的新型博弈。

## 一、学术开源时代（2010—2015）

深度学习的复兴，是开源精神最纯粹的产物。

2010 年，蒙特利尔大学<Person id="bengio" />实验室发布 Theano——第一个被广泛使用的符号微分（Symbolic Differentiation）框架。它能把数学表达式自动编译成 GPU 上的 CUDA 代码，免去研究者亲手实现反向传播之苦。Theano 的代码不到 10 万行，但一整代深度学习研究者都从它开始。<Person id="goodfellow" />、Razvan Pascanu、David Warde-Farley 等人都在它上面写就了奠基性论文。

2013 年，伯克利的贾扬清（Yangqing Jia）发布 Caffe。它专攻卷积神经网络，配置文件即模型——把训练流程从"研究者亲手写"变成"工程师配置一份 prototxt"。Caffe 让 CNN 大规模工业化第一次成为可能；2014 年 ImageNet 比赛上，Caffe 已是参赛队伍最常用的工具之一。

同一时期，Facebook AI Research 在 Lua 语言上重写 Torch。Torch 不算大众，却养出了一批顶级研究者——<Person id="lecun" />、Soumith Chintala、Adam Paszke 都是其铁杆。2017 年，他们把 Torch 的灵魂迁移到 Python，那便是日后席卷学术界的 PyTorch。

这一阶段的开源是"学术共享"传统的自然延续：论文附代码，模型可复现，实验可校验。NeurIPS、ICML 的录用率与 GitHub 上的 star 数开始挂钩——一个 AI 研究者的影响力，越来越多由开源代码而非论文引用决定。

## 二、框架之战（2015—2020）

2015 年 11 月 9 日，Google 把内部使用的 DistBelief 重写为新框架，并冠以全新名字 TensorFlow，一次性以 Apache 2.0 协议开源。这一举对学术界几乎是降维打击：背靠 Google Brain，文档完整，分布式训练能力业界最强。一夜之间，工业界几乎家家言必称 TensorFlow。

但优势没有持续多久。2016 年 9 月，Facebook AI Research 发布 PyTorch。它的核心优势只有一句话：动态计算图（Dynamic Computational Graph）。TensorFlow 1.x 要求先定义静态计算图再喂数据——对调试和研究极不友好；PyTorch 则让研究者像写普通 Python 一样写神经网络，print 一下就能看到中间结果。

研究社区迅速倒戈。2018 年 NeurIPS 上，PyTorch 论文数量首次超过 TensorFlow；2019 年起 PyTorch 在顶级 AI 会议中已是绝对主流；2020 年 9 月 Google 不得不推出 TensorFlow 2.x，全面拥抱 PyTorch 风格的 eager execution。但市场惯性已不可逆——研究领域，PyTorch 赢；生产部署，TensorFlow 仍占一席。

框架之战留给历史的最大教训是：开发者体验重于公司背景。Google 体量再大，敌不过研究者一句"我能直接 print 张量"。

其他参与者依然层出不穷。Amazon 押注 MXNet（一度是 AWS 官方框架，后衰落）。百度发布 PaddlePaddle（飞桨），强调中文文档与本土生态。华为在 2020 年开源 MindSpore，配套昇腾芯片。在 LLM 时代，HuggingFace Transformers 成为新的"框架级"基础设施，几乎所有大模型训练都从它派生而出。

## 三、模型共享平台的崛起：Hugging Face 现象

2016 年成立的 Hugging Face 一开始只是个聊天机器人产品，转折发生在 2018 年——他们发布了 BERT 与 GPT 的 PyTorch 实现，迅速被研究者与企业采用。后来这套代码演化为 `transformers` 库——成为下载量最大的 AI 库之一，至 2024 年 GitHub star 超过 13 万。

Hugging Face 的更大野心是构建"AI 界的 GitHub"。Model Hub 让任何人能上传与下载模型权重，Datasets 提供开放数据集，Spaces 提供托管 demo 的免费容器。从 BERT 到 LLaMA 到 Stable Diffusion，几乎每一个开源大模型的权威发布都默认通过 Hugging Face。截至 2025 年，平台上托管模型数量超过 100 万，月活跃开发者数百万。

"arXiv + GitHub + Hugging Face"成为现代 AI 研究的三件套。一篇新论文上线 arXiv 当天，配套代码与模型就出现在另外两端，不到 24 小时就有人复现并报告效果。这种闭环速度，是 AI 进步加速的隐性引擎。

Hugging Face 自己也在 2023—2024 年完成两轮融资，估值飙升至 45 亿美元。它没有训练任何最强大的基础模型，却扮演着比许多基础模型公司更重要的"基础设施"角色。

## 四、LLaMA 事件与开源大模型运动（2023）

2023 年 2 月 24 日，Meta 发布 LLaMA（Large Language Model Meta AI）—— 7B 到 65B 四个参数规模的预训练模型。彼时 ChatGPT 已席卷三个月，GPT-4 尚未发布，业界对"开源能否触及 GPT 级别"普遍悲观。LLaMA 的论文发布时附带一份非商业研究许可，研究者需向 Meta 提交申请，才能拿到权重下载链接。

但仅仅一周后，3 月 3 日，一个 4chan 用户上传了完整 65B 权重的种子，整套模型在 BitTorrent 网络中扩散开来。Meta 派律师函给个别站点，但已无法收回——开源世界第一次拥有了一个真正接近商业级别的 LLM。

接下来三个月，世界见证了开源 AI 的"寒武纪大爆发"。

- 3 月 14 日，斯坦福发布 Alpaca：用 GPT-3.5 生成的 5.2 万条指令在 LLaMA 7B 上微调，训练成本不到 600 美元，效果惊人。
- 3 月 30 日，UC Berkeley、CMU 等联合发布 Vicuna：70K ShareGPT 对话微调，号称达到 ChatGPT 90% 水平。
- 4 月起，WizardLM、Guanaco、Koala 蜂拥而出。LoRA、QLoRA 等参数高效微调技术让一张消费级显卡也能训练 13B 级别模型。

Meta 在压力下转向。2023 年 7 月 18 日，Meta 与 Microsoft 联合发布 LLaMA 2，第一次给出商用许可（月活 7 亿以下企业可免费商用），并附带一份完整的责任使用指南。<Person id="lecun" />与扎克伯格一起把"开源"作为 Meta 对抗 OpenAI 的核心战略写进股东信。

2024 年 4 月与 7 月，LLaMA 3 与 LLaMA 3.1 系列陆续发布，405B 参数规模的旗舰版本在多项基准上首次让开源模型与 GPT-4 比肩。LLaMA 3.3（2024 年 12 月）和 LLaMA 4（2025 年）在多模态与代码生成上继续推进。开源模型与闭源前沿之间的差距，从原本的 18 个月被压缩到 6 个月以内。

## 五、全球开源大模型生态

### 美国

LLaMA 系列让 Meta 成为开源大模型的"事实旗手"。扎克伯格在 2024 年公开信中写下："开源 AI 是前进之路。"（Open source AI is the path forward.）这句话，是过去十年硅谷开源文化最铿锵的延续。

法国 Mistral AI 在 2023 年 4 月成立，6 月成立四周即融资 1.05 亿欧元。其首发产品 Mistral 7B（2023 年 9 月）以 70 亿参数击败了 LLaMA 13B，证明小模型也能高效。Mistral 8x7B（MoE，2023 年 12 月）让"专家混合"架构走向大众；2024 年的 Mistral Large 与 Codestral 加入闭源高端。Mistral 是欧洲第一个具有全球影响力的开源 AI 厂商。

### 中国

2023 年起，中国互联网厂商集体下场开源。

- 通义千问 Qwen（阿里巴巴）：从 Qwen 1 到 Qwen 2.5（2024 年 9 月）再到 Qwen 3（2025 年），覆盖 0.5B 到 72B、文本与多模态、长上下文与推理特化全套。Hugging Face 月度下载榜常年占据头部，是全球下载量最大的开源中文模型家族之一。
- 智谱 AI（清华系）：自 2023 年开源 ChatGLM-6B 起，GLM-4、GLM-4-9B、GLM-4-Plus 形成完整阶梯。中国学术界使用最广泛。
- DeepSeek（梁文锋创立）：2024 年的 DeepSeek-V2 引入精简的 MoE 架构与 MLA（Multi-Head Latent Attention）注意力，把推理成本降到行业最低；DeepSeek-V3（2024 年 12 月）在多项基准接近 GPT-4o。2025 年 1 月发布的 DeepSeek-R1 是首个完全开源的强化学习推理模型，与 OpenAI o1 性能相当。R1 发布当天，NVIDIA 股价单日跌幅创纪录，这场冲击被业界称为"DeepSeek 时刻"。
- 月之暗面 Moonshot：开源 Moonlight MoE 模型；商业产品 Kimi 以长上下文能力闻名。
- MiniMax：开源 MiniMax-01 系列，重点放在多模态、语音、长上下文。
- 百川智能（王小川）、零一万物（<Person id="kai-fu-lee" />）：Baichuan 与 Yi 系列均是中国早期开源大模型代表。
- 此外还有阶跃星辰 Step、商汤日日新、面壁智能 MiniCPM 等众多参与者。

中国成为全球开源密度最高的市场之一——政策鼓励、互联网巨头投入、创业公司密集，加上国家算力基础设施加持。

### 其他地区

- 阿联酋 TII 的 Falcon 系列：2023 年的 Falcon 40B 与 180B 让中东第一次出现在开源 AI 版图上。
- 英国 Stability AI：Stable Diffusion 之外亦发布 StableLM 系列，但 2024 年起公司经历严重财务动荡。
- 日本 Sakana AI（前 Google 研究员 David Ha 创立）：2024 年提出"演化合并"等独特路线，主张开源加学术派。

## 六、开源 vs 闭源之争

这是一场没有赢家的辩论，但每一方都站得堂堂正正。

扎克伯格的立场最为旗帜鲜明：开源是默认选项，开源能避免少数公司垄断 AI，能加速研究、加速产业、加速安全。Meta 把 LLaMA 系列定位为"AI 时代的 Linux"——基础模型应该像操作系统一样成为公共基础设施。

<Person id="altman" />与 OpenAI 走向了相反方向。OpenAI 自 GPT-3 起就不再开源权重；<Person id="altman" />在多次访谈中表达："最前沿的模型不应该开源——风险过高。"OpenAI 的转向引发巨大讽刺：一家以"Open"命名、由<Person id="musk" />与<Person id="altman" />在 2015 年共同创立、口号是"造福全人类"的非营利机构，最终成为闭源最坚决的捍卫者之一。<Person id="musk" />在 2024 年公开起诉 OpenAI，正与这一身份漂移有关。

Anthropic 走中间路线：发表大量研究论文、负责任地公布部分 benchmark，但不开放模型权重。<Person id="amodei" />认为前沿模型的开源可能不可逆地加剧滥用风险，但拒绝拥抱完全闭源的"黑箱"。

<Person id="hinton" />在 2023 年从 Google 辞职后，公开警告开源最强模型可能"无法收回"——一旦权重外流，恐怖分子、敌对国家都可能在其上构建武器化用途。这一警告在政策圈引发回响：英国 *AI Safety Institute* 与美国 *AI Safety Institute* 都在 2024 年起将"开源前沿模型评估"列入议程。

## 七、许可证之争：什么算"真开源"？

LLaMA 让一个老问题浮出水面——它真的算"开源"吗？

开放源代码促进会（Open Source Initiative, OSI）有十条标准定义"开源"，最关键的一条是不歧视使用者与使用领域。LLaMA 2 协议禁止月活 7 亿以上企业使用，按 OSI 定义这违反"不歧视"原则。OSI 2024 年发布的 *Open Source AI Definition v1.0* 进一步要求：模型权重、训练代码、训练数据信息都应公开，缺一不可——按这个标准，LLaMA、Qwen、DeepSeek 都只能算"开放权重"（Open Weight），而非真正的"开源"。

更复杂的现象被业界称为"开放洗白"（Open Washing）：公司大张旗鼓宣称开源，附加细则中却限制商业使用、禁止评测、要求注明"由 X 提供"等。Stable Diffusion 的 CreativeML 协议、LLaMA 的接受使用政策、Mistral 的部分研究许可，都被批评者贴过这一标签。

商业模式则是另一道难题。如果模型免费，公司靠什么赚钱？现实给出的答案多种多样：

- 模型本身免费，闭源版本与定制服务收费（Mistral、智谱、Qwen 等的混合策略）；
- 围绕开源构建云服务（Hugging Face、Together AI、Fireworks AI、Anyscale）；
- 提供企业级模型托管与微调（Databricks、Snowflake）；
- 由母公司从其他业务（云、广告、电商）变现 AI 红利（Meta、阿里、腾讯）。

开源不再是非营利的乌托邦——它是一种竞争策略。

## 八、开源作为地缘策略

把开源放回地缘政治的棋盘，画面立刻不同。

美国视角：开源是建立全球技术标准的工具。如果全世界都在 LLaMA 与 PyTorch 上开发，硅谷就掌握了 AI 时代的"事实标准"。这是过去 30 年互联网霸权（Linux、Apache、TCP/IP）的精确延续。Meta 与扎克伯格的"开源主义"，本质上是这一战略的当代版本。

中国视角：开源是降低追赶成本的捷径，但也带来对美国软件栈的依赖。LLaMA 一度是中国大量"中文大模型"的实质底座；PyTorch 几乎所有训练代码都跑在 NVIDIA CUDA 上。芯片禁令之后，中国开源开始向"自主可控"延伸——Qwen、DeepSeek、GLM 公开了完整训练代码与论文，DeepSeek-V3/R1 把训练细节披露到能让任何团队复现的程度。这是一种"反向开源"——把自身实力对外辐射，赢得国际开发者的认可与依赖。

芯片禁令使软件开源在中国获得新意义：硬件被锁，软件就必须更开放、更高效。一个有趣的循环开始形成——美国闭源前沿模型 + 中国开源追赶者 + 全球开发者从两边各取所需。

未来已经在分叉：开源 AI 会成为"公共基础设施"还是"军备竞赛的武器"？答案可能不是二选一，而是同时是两者。Linux 既是公共基础设施，也是国防部最喜欢的操作系统。LLaMA、Qwen、DeepSeek 注定也将是。

---

::: tip 太史公曰
余观 AI 开源十五年，叹其势如水流——能载舟，亦能覆舟。Theano 与 Caffe 之时，开源乃学术共享之天经地义；TensorFlow 与 PyTorch 之争，开源已是工业巨头之战略要塞；至于 LLaMA 一夜外泄，开源遂成动摇 GPT 霸权之利刃。扎克伯格言"开源是前进之路"，奥特曼曰"前沿不可开源"，辛顿警告"权重无法收回"——三人皆有其理，皆有其惧。开源 AI 之争，表面是协议条款，骨子里是权力分配：模型一旦开放，话语权便从少数公司转向千万开发者。然此等民主化亦非全然之善——核武不可民主，生物武器不可民主，强人工智能是否可以？此问题在十年前似科幻，于今日则成监管者每日所面。中国厂商之集体开源，与其说是慷慨，不如说是地缘必然——硬件被锁则软件必开，被压制者必以共享换取盟友。DeepSeek 一夜震动华尔街，证明小成本也能撼动大格局。开源之于 AI，正如活字印刷之于文艺复兴——不是技术细节，而是权力结构的重塑。十年之后回看，今日讨论之激烈，恐才刚开了个头。
:::

## 亲历者说

::: info 征集中
如果你贡献过 AI 开源框架、模型或社区，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Bergstra, J., Breuleux, O., Bastien, F., et al. (2010). Theano: A CPU and GPU math compiler in Python. *Proceedings of SciPy 2010*.
2. Jia, Y., Shelhamer, E., Donahue, J., et al. (2014). Caffe: Convolutional architecture for fast feature embedding. *Proceedings of ACM Multimedia*, 675-678.
3. Abadi, M., Barham, P., Chen, J., et al. (2016). TensorFlow: A system for large-scale machine learning. *Proceedings of OSDI 2016*, 265-283.
4. Paszke, A., Gross, S., Massa, F., et al. (2019). PyTorch: An imperative style, high-performance deep learning library. *Advances in Neural Information Processing Systems*, 32.
5. Wolf, T., Debut, L., Sanh, V., et al. (2020). Transformers: State-of-the-art natural language processing. *Proceedings of EMNLP 2020 (System Demonstrations)*, 38-45.
6. Touvron, H., Lavril, T., Izacard, G., et al. (2023). LLaMA: Open and efficient foundation language models. *arXiv preprint arXiv:2302.13971*.
7. Touvron, H., Martin, L., Stone, K., et al. (2023). Llama 2: Open foundation and fine-tuned chat models. *arXiv preprint arXiv:2307.09288*.
8. Meta AI (2024, July 23). *The Llama 3 Herd of Models*. arXiv:2407.21783.
9. Jiang, A. Q., Sablayrolles, A., Mensch, A., et al. (2023). Mistral 7B. *arXiv preprint arXiv:2310.06825*.
10. Bai, J., Bai, S., Chu, Y., et al. (2023). Qwen technical report. *arXiv preprint arXiv:2309.16609*.
11. DeepSeek-AI (2024). DeepSeek-V3 technical report. *arXiv preprint arXiv:2412.19437*.
12. DeepSeek-AI (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
13. Open Source Initiative (2024, October 28). *The Open Source AI Definition – 1.0*.
14. Zuckerberg, M. (2024, July 23). Open source AI is the path forward. *Meta Newsroom*.
