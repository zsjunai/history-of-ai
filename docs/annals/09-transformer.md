# 本纪第九 · Transformer 纪元（2017—2022）

> 2017 年 6 月，八位谷歌研究员提交了一篇论文，标题只有五个词："Attention Is All You Need"。他们当时不可能知道，这篇论文将催生价值万亿美元的产业、改变数亿人的日常生活、引发关于人类文明未来的激烈争论。一切始于一个简单的想法：抛弃循环，只用注意力。

## 一、核心之争：序列建模的正确方式是什么？

2017 年之前，处理序列数据（文本、语音、时间序列）的主流方法是循环神经网络（RNN）及其变体长短期记忆网络（LSTM）。RNN 逐个处理序列中的元素——读入第一个词，更新内部状态，读入第二个词，再更新状态——像一个人一个字一个字地读书。

这种串行处理方式有两个严重问题。第一，**速度慢**：因为必须按顺序处理，无法利用 GPU 的并行计算能力。第二，**长程依赖困难**：当句子很长时，前面的信息在经过多步传递后会被"稀释"，网络很难记住远处的上下文。LSTM 通过精巧的"门控"机制缓解了第二个问题，但无法根本解决。

Transformer 的革命性在于：它完全抛弃了循环结构，用**自注意力机制**（Self-Attention）一次性处理整个序列。每个词可以直接"看到"序列中所有其他词，并根据它们之间的相关性决定该关注哪些——无论它们相距多远。这既解决了长程依赖问题，又让计算可以完全并行化。

## 二、Attention Is All You Need

### 八位作者

2017 年 6 月，谷歌的<Person id="vaswani" />等八位研究员在 arXiv 上发表了论文《Attention Is All You Need》。这篇论文提出了 Transformer 架构——一种完全基于注意力机制的序列到序列模型。

Transformer 的核心是**多头自注意力**（Multi-Head Self-Attention）：对于输入序列中的每个位置，计算它与所有其他位置的"注意力权重"——即相关性得分——然后用这些权重对所有位置的表征进行加权求和。"多头"意味着同时运行多组独立的注意力计算，每一组可以捕捉不同类型的依赖关系（如语法关系、语义关系、位置关系）。

论文的实验场景是机器翻译。Transformer 在英德和英法翻译任务上都刷新了当时的最优成绩，同时训练速度比 RNN 模型快了一个数量级。但论文的影响远不止于翻译——它提供了一个通用的、高效的、可扩展的序列建模框架，很快被应用到几乎所有涉及序列数据的 AI 任务上。

### 一个意外的事实

八位作者中没有一位留在谷歌。他们后来分别创办了 AI 创业公司或加入了其他机构——瓦斯瓦尼联合创办了 Essential AI，诺姆·沙泽尔（Noam Shazeer）联合创办了 Character.AI（后来回到谷歌）。Transformer 的诞生地没能留住它的创造者，但 Transformer 本身留在了一切地方。

## 三、BERT 与 GPT：两条分岔的路

Transformer 发表后，AI 社区迅速分化为两条路线——代表了对"如何利用 Transformer"的两种不同哲学。

### BERT：理解的路线

2018 年 10 月，谷歌的<Person id="devlin" />等人发表了 BERT（Bidirectional Encoder Representations from Transformers）。BERT 的核心思想是**双向预训练**：在大规模文本上，随机遮盖一些词（掩码语言模型，Masked Language Model），让模型根据上下文预测被遮盖的词。因为预测时可以同时看到左边和右边的上下文，BERT 学到的是真正"双向"的语言表征。

BERT 在 11 个 NLP 基准测试上全面刷新了最优成绩，引发了 NLP 社区的震动。它确立了一种新的范式——"预训练 + 微调"（Pre-train + Fine-tune）：先在海量无标签文本上预训练一个通用的语言模型，然后在特定任务（如情感分析、问答、命名实体识别）上用少量标注数据微调。这种范式极大地降低了 NLP 任务的门槛——你不再需要为每个任务从头训练一个模型。

### GPT：生成的路线

几乎在同一时期，OpenAI 的<Person id="radford" />走了一条不同的路。2018 年 6 月，他发表了 GPT-1（Generative Pre-trained Transformer）——用 Transformer 的**解码器**（而非编码器）做单向语言模型：给定前面的词，预测下一个词。

GPT-1 只有 1.17 亿个参数，在当时并不引人注目。但 OpenAI 坚信规模是关键。2019 年 2 月，GPT-2 发布——15 亿参数，比 GPT-1 大了 10 倍以上。OpenAI 以"太危险"为由延迟公开模型权重，引发了 AI 社区关于开源与安全的第一次大规模争论。GPT-2 能生成连贯的长篇文本——虽然仔细看仍有逻辑漏洞，但流畅度已经令人不安。

### 分歧的深意

BERT 和 GPT 的分歧不仅是技术选择的差异，更反映了对 AI 未来方向的不同判断。BERT 路线认为"理解"是核心——先学会理解语言，再应用到下游任务。GPT 路线则认为"生成"就是理解——如果一个模型能够持续地预测下一个词，它就必须在某种程度上理解了语言的结构和含义。

历史最终站在了 GPT 一边——但不是因为 BERT 的思路错了，而是因为 GPT 路线更容易通过规模扩展来提升性能。"预测下一个词"是一个极其简单的训练目标，可以利用互联网上几乎无限的文本数据，而且天然适合自回归生成。

## 四、GPT-3：规模的暴力美学

### 1750 亿参数

2020 年 5 月，OpenAI 发表了 GPT-3 的论文——<Person id="brown" />等人的《Language Models are Few-Shot Learners》。GPT-3 拥有 1750 亿个参数，训练数据集包含约 5000 亿个词元（token），训练成本据估计超过 400 万美元。

GPT-3 展现了一种令人惊讶的能力：**少样本学习**（Few-Shot Learning）。你不需要对模型进行微调，只需要在提示词（Prompt）中给出几个示例，模型就能"理解"任务并执行——翻译、摘要、问答、编程、写诗、甚至做算术。这种能力在此前的任何模型中都没有观察到。

### 涌现能力

GPT-3 的能力引发了关于"涌现"（Emergence）的讨论。许多能力在 GPT-2 的规模上完全不存在，但在 GPT-3 的规模上突然出现——仿佛模型在穿越某个"规模门槛"后获得了质变。

这种涌现现象后来被<Person id="kaplan" />等人在《规模定律》（Scaling Laws for Neural Language Models, 2020）论文中部分解释：模型性能与参数量、数据量和计算量之间存在可预测的幂律关系。更大的模型、更多的数据、更长的训练，几乎总是带来更好的性能——而且这个关系在已有的规模范围内没有显示出饱和的迹象。

规模定律给出了一个简洁但深刻的指引：**继续扩大规模**。这个指引将定义接下来几年 AI 的主旋律。

## 五、多模态：AI 学会看、画、写代码

### DALL-E 与图像生成

2021 年 1 月，OpenAI 发布了 DALL-E——一个能够根据文字描述生成图像的模型。你输入"一只穿宇航服的柯基犬在月球上跳舞"，它就能画出来。DALL-E 的名字融合了达利（Salvador Dalí）和瓦力（WALL-E），暗示了艺术与技术的交汇。

DALL-E 背后是 Transformer 架构的扩展——将文本和图像统一编码为离散的词元序列，然后用自回归模型生成。2022 年 4 月发布的 DALL-E 2 使用了扩散模型（Diffusion Model）——一种通过逐步去除噪声来生成图像的方法——图像质量大幅提升。

几乎同一时期，Stability AI 的 Stable Diffusion（2022 年 8 月开源）和 Midjourney 也相继发布。AI 图像生成从实验室走进了百万用户的日常工具箱。

### GitHub Copilot 与代码生成

2021 年 6 月，GitHub 和 OpenAI 联合发布了 Copilot——一个基于 GPT 变体 Codex 的 AI 编程助手。Copilot 能根据注释、函数名和上下文自动补全代码，有时甚至能生成完整的函数。

Copilot 的意义不仅在于技术——它是 AI 第一次大规模渗透到专业工作者的日常工作流中。程序员发现自己每天都在和一个 AI "搭档"合作写代码。这预示了一种全新的人机协作模式——不是 AI 取代人类，而是 AI 增强人类的生产力。

## 六、AlphaFold：AI 解决了生物学的五十年难题

2020 年 11 月，<Person id="hassabis" />领导的 DeepMind 团队宣布 AlphaFold 2 在蛋白质结构预测竞赛 CASP14 中取得了突破性成绩——预测精度达到了实验测定水平。2021 年 7 月，AlphaFold 2 的论文在《自然》杂志发表，同时 DeepMind 公开了超过 36 万个蛋白质的预测结构；到 2022 年，这个数字扩展到了超过 2 亿个——几乎覆盖了已知的所有蛋白质。

蛋白质折叠问题——从氨基酸序列预测三维结构——困扰了生物学家超过五十年。传统的实验方法（如 X 射线晶体学、冷冻电镜）耗时数月甚至数年，而 AlphaFold 可以在几分钟内给出高精度的预测。

AlphaFold 是 AI 在基础科学中最具说服力的胜利。它不是在游戏中击败人类，而是在帮助人类理解生命本身。哈萨比斯因此在 2024 年获得了诺贝尔化学奖。

## 七、暗流与伏笔

**第一，ChatGPT 的前兆。** GPT-3 的少样本学习能力和 InstructGPT（2022 年 1 月）的指令微调技术，已经为一个"对话式 AI"产品的诞生做好了技术准备。2022 年 11 月，ChatGPT 的发布将把所有这些技术积累转化为一场全球性的现象——但那属于下一篇的故事。

**第二，AI 安全的争论升温。** 随着模型能力的增长，担忧也在增长。<Person id="altman" />在公开场合反复表示 AI 可能带来"存在性风险"。<Person id="sutskever" />在 OpenAI 内部越来越多地关注对齐（Alignment）问题。<Person id="amodei" />在 2021 年离开 OpenAI，创办了专注安全的 Anthropic。AI 安全从一个边缘话题变成了产业界不得不面对的核心议题。

**第三，开源与闭源之争的序幕。** GPT-2 的延迟公开引发的争论，到 GPT-3 时更加激烈——OpenAI 只提供 API 访问，不公开模型权重。这种"闭源"策略引发了学术界和开源社区的强烈不满，也为 Meta 后来的 LLaMA 开源路线埋下了伏笔。

**第四，硬件军备竞赛加速。** NVIDIA 的 A100 GPU（2020）和后来的 H100（2022）成为训练大模型的标配硬件。谷歌开发了 TPU（Tensor Processing Unit）。AI 芯片从一个利基市场变成了科技产业最热门的赛道。NVIDIA 的市值从 2020 年的约 3000 亿美元一路飙升。

## 八、年表

| 年份 | 事件 | 关键人物 |
|------|------|---------|
| 2017 | "Attention Is All You Need" 发表，Transformer 架构诞生 | <Person id="vaswani" /> 等八位作者 |
| 2018 | GPT-1 发布（1.17 亿参数） | <Person id="radford" /> |
| 2018 | BERT 发表，双向预训练刷新 11 项 NLP 基准 | <Person id="devlin" /> |
| 2019 | GPT-2 发布（15 亿参数），OpenAI 以"太危险"为由延迟公开 | <Person id="radford" /> |
| 2020 | GPT-3 发布（1750 亿参数），展现少样本学习能力 | <Person id="brown" /> |
| 2020 | 规模定律论文发表，揭示模型性能与规模的幂律关系 | <Person id="kaplan" /> |
| 2020 | AlphaFold 2 在 CASP14 中突破蛋白质折叠预测 | <Person id="hassabis" /> |
| 2021 | DALL-E 发布，AI 学会根据文字生成图像 | <Person id="radford" /> |
| 2021 | GitHub Copilot 发布，AI 编程助手进入开发者工作流 | — |
| 2021 | 阿莫代离开 OpenAI，创办 Anthropic | <Person id="amodei" /> |
| 2022 | Stable Diffusion 开源，AI 图像生成全面普及 | — |
| 2022 | InstructGPT 发表，用人类反馈的强化学习（RLHF）提升对话能力 | <Person id="altman" />、<Person id="sutskever" /> |

---

::: tip 太史公曰
Transformer 纪元的五年，是人工智能从"有用的工具"变成"不可忽视的力量"的五年。一篇论文的标题——"注意力就是你所需要的一切"——在事后看来既是技术宣言，也是预言。Transformer 的自注意力机制做了一件看似简单的事：让序列中的每个元素都能直接与所有其他元素对话。但这个简单的设计释放了巨大的能量——它让语言模型可以无限扩展，让规模成为通往能力的直通车。GPT-3 的涌现能力震惊了连创造者自己都震惊——一个"预测下一个词"的模型，怎么就学会了翻译、编程、推理？没有人有完整的答案，但每个人都感受到了地面在震动。当 AlphaFold 在分子层面解决了困扰生物学家半个世纪的问题时，AI 终于超越了棋盘和竞赛，触及了人类最深层的好奇心——理解生命本身。而这一切，还只是序曲。
:::

## 亲历者说

::: info 征集中
如果你了解这段历史的第一手资料或亲历者回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

---

## 参考资料

1. Vaswani, A. et al. (2017). "Attention Is All You Need." *NeurIPS 2017*.
2. Devlin, J. et al. (2019). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." *NAACL 2019*.
3. Radford, A. et al. (2018). "Improving Language Understanding by Generative Pre-Training." OpenAI Technical Report.
4. Radford, A. et al. (2019). "Language Models are Unsupervised Multitask Learners." OpenAI Technical Report.
5. Brown, T. et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS 2020*.
6. Kaplan, J. et al. (2020). "Scaling Laws for Neural Language Models." arXiv:2001.08361.
7. Jumper, J. et al. (2021). "Highly accurate protein structure prediction with AlphaFold." *Nature*, 596, 583–589.
8. Ramesh, A. et al. (2021). "Zero-Shot Text-to-Image Generation." *ICML 2021*.
9. Chen, M. et al. (2021). "Evaluating Large Language Models Trained on Code." arXiv:2107.03374.
10. Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS 2022*.
