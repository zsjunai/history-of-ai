# 世家 · Google Brain

> Transformer 诞生于此——一个企业内部研究团队，写出了改变 AI 历史走向的论文；而它最大的遗憾也是：没能把这篇论文直接变成今天的 ChatGPT。

## 一、车库计划：从 Google X 的一个角落开始

2011 年，Google X 实验室里有一个不起眼的项目，最早叫"Google Brain"，由 Google 首席架构师<Person id="ng" />和 Google 的传奇基础设施工程师 Jeff Dean 联合发起。时任 Google CEO 的拉里·佩奇批准了这个项目：让一小队研究员探索"大规模深度学习"到底能走多远。

当时深度学习还未主流。AlexNet 要到 2012 年 9 月才引爆 ImageNet。多伦多的<Person id="hinton" />、蒙特利尔的<Person id="bengio" />、纽约大学的<Person id="lecun" />还在学术寒冬中坚持。但 Jeff Dean 和吴恩达看到了别人还没看到的事：Google 拥有全球最大规模的分布式计算基础设施，而大规模训练神经网络正是最吃这种资源的问题。

**2012 年 6 月 26 日**，吴恩达、Jeff Dean、Quoc Le 等人发表论文 *Building High-level Features Using Large Scale Unsupervised Learning*。他们用 16000 颗 CPU 核心、在 1000 万张 YouTube 缩略图上训练一个 9 层神经网络。最出名的一项发现是：网络里有一个神经元在没有任何人类监督的情况下，学会了识别"猫脸"。媒体很快以"**Google 教会电脑识别猫**"（Google Cat）为标题报道了这项研究。

这是 Google Brain 走出车库的第一次鸣响。

## 二、TensorFlow 与框架战争

2015 年 11 月 9 日，Google Brain 宣布开源 **TensorFlow**——Google 内部第二代机器学习系统（第一代叫 DistBelief，2011 年起在 Brain 使用）。

TensorFlow 的发布是一次重大战略行动。那时 Theano、Torch、Caffe 等学术框架已经存在，但没有一个具备工业级规模。Google 把自己打磨多年的内部工具开源，既是礼物，也是战略——让全球研究者、企业都习惯用 Google 定义的 API 写神经网络，等于把深度学习时代的"操作系统"收入囊中。

从 2015 年到 2018 年，TensorFlow 是深度学习世界的主流框架。Google 在它周围构建了完整生态：TensorBoard（可视化）、TensorFlow Hub（模型仓库）、TensorFlow Serving（部署）、TPU（自研硬件）。学术界、工业界、教育界——到 2017 年几乎所有"深度学习教程"的第一堂课都从 TensorFlow 开始。

但 2018 年之后，Facebook 的 PyTorch 开始在学术界反超。到 2020 年，大部分顶级会议的论文代码默认用 PyTorch。TensorFlow 从"全面主导"退回"产业部署"——这是 Google Brain 在框架战争中的一次重要失守，但并不致命，因为它真正的致命贡献还在后头。

## 三、Transformer 的诞生

2017 年 6 月 12 日，arXiv 上出现一篇论文：**Attention Is All You Need**。作者八人全部来自 Google Brain 和 Google Research：<Person id="vaswani" />（第一作者）、Noam Shazeer、Niki Parmar、Jakob Uszkoreit、Llion Jones、Aidan Gomez（实习生）、Lukasz Kaiser、Illia Polosukhin。

论文提出了 **Transformer** 架构——一种完全基于注意力机制、没有循环和卷积的序列模型。它最初的目的是改进机器翻译，论文实验就是在 WMT 英-德、英-法翻译任务上——Transformer 在更短的训练时间里达到当时最好水平。

没有人（包括作者自己）预料到这篇论文将如何改变世界。七年后的 2024 年，几乎每一个当代大模型——GPT 系列、Claude、Gemini、LLaMA、Qwen、DeepSeek、Mistral——都建立在 Transformer 架构之上。到 2026 年，整个生成式 AI 产业的万亿美元市值，几乎可以追溯到这八个人和这 11 页论文。

**但 Google 自己并没有在这条路上走到最前。** 论文的八位作者在此后几年里陆续离开 Google：Vaswani 创办 Essential AI；Shazeer 创办 Character.AI（2024 年回到 Google）；Aidan Gomez 创办 Cohere；Illia Polosukhin 创办 NEAR Protocol；Uszkoreit 做 Inceptive。Google 孕育了 Transformer，但没能留住它的发明者。

## 四、BERT：预训练的胜利与 LLM 竞赛的错失

Transformer 发布一年后，Google Brain 和 Google Research 的 <Person id="devlin" />、Ming-Wei Chang、Kenton Lee、Kristina Toutanova 四人发表了 **BERT**（Bidirectional Encoder Representations from Transformers，2018 年 10 月）。这是把 Transformer **编码器**用在语言理解任务上的第一次系统尝试——通过"掩码语言模型"预训练，在 11 个 NLP 基准上全面刷新记录。

BERT 定义了"**预训练+微调**"的范式，此后几年里被广泛模仿。T5、ELECTRA、ALBERT、RoBERTa 都是这条线的延伸。

然而 Google 走的是"**理解**"路线（编码器），而 OpenAI 走的是"**生成**"路线（解码器）。2020 年 GPT-3 发布，规模定律的威力第一次真正显现，局势开始逆转。Google Brain 内部一直有大模型研究（LaMDA、PaLM、FLAN），但始终没有对外发布 ChatGPT 这样的产品。

2022 年 11 月 30 日 ChatGPT 上线，震惊整个硅谷——包括 Google 自己。内部随即发布"红色警报"（Code Red），叫停多个项目集中资源应战。但 Google 的结构性劣势已经暴露：研究发表文化让论文先发 ，产品迭代却慢；FAIR 与 PyTorch 在研究社区占优；而 OpenAI 在"把模型变成产品"的节奏上领先太多。

## 五、与 DeepMind 的合并：从双线到单一

Google 内部长期有两条 AI 线：**Google Brain**（美国加州，强调工程与规模）和 **DeepMind**（英国伦敦，2014 年被收购，强调强化学习与科学 AI）。两支团队有时合作，更多时候竞争——同一个问题两组人并行做，同一个国际会议两组人各自发论文。

2023 年 4 月 20 日，皮查伊（Sundar Pichai）宣布：**Google Brain 与 DeepMind 合并为 Google DeepMind**，由 Demis Hassabis 任 CEO，Jeff Dean 任 Google 首席科学家（Chief Scientist）负责全公司 AI 研究。这是 Google 对 ChatGPT 冲击的最直接回应——集中资源、统一指挥、全力推出 Gemini。

Google Brain 作为一个独立品牌到此终结。但它留下的遗产——TensorFlow、Transformer、BERT、Word2Vec、Seq2Seq、神经机器翻译（GNMT）、TPU——已经写入整个 AI 时代的底层协议。

## 六、人才的大流散

Google Brain 的另一个历史意义是：它是 AI 时代最大的人才输送带。

从这里离开创业或加入竞争对手的名单非常惊人：

- **<Person id="altman" />并非来自 Brain 但 OpenAI 早期从 Brain 挖走了大量核心**：**Ilya Sutskever**（2012 年 AlexNet 之后加入 Brain，2015 年被 OpenAI 挖走成为联合创始人兼首席科学家）
- **Dario Amodei**：2016 年加入 Brain，后去 OpenAI，2021 年创立 Anthropic
- **Jan Leike**：前 Brain 研究员，后任 OpenAI 对齐负责人，2024 年加入 Anthropic
- **Andrej Karpathy**：2015 年 Google Brain 实习，后加入 OpenAI 联合创始人行列、特斯拉 AI 总监、又回 OpenAI、2024 年离开
- **Sam McCandlish、Tom Brown**：GPT-3 核心作者，早期与 Brain 有关联，后全部去 Anthropic
- **吴恩达**：2014 年离开 Brain 加入百度任首席科学家
- **Transformer 八位作者**：五位创业、一位去 Character.AI、一位回 Google
- **Noam Shazeer**：创立 Character.AI，2024 年 8 月 Google 以 27 亿美元回购、他本人回到 Google DeepMind

批评者会说：Google 有 AI 历史上最顶级的人才池，却在关键时刻留不住人。支持者会说：正是 Google Brain 培养和放出了这些人，才让整个 AI 产业有了今天的繁荣。两种说法都对。

## 七、硬件：TPU 的秘密武器

Google Brain 还有一条常被忽视的贡献线——**TPU**（Tensor Processing Unit，张量处理器）。

2013 年前后 Google 内部意识到：深度学习的计算需求增长远快于摩尔定律，继续用 CPU 或 GPU 不可持续。Norm Jouppi 等人在 Google Brain 支持下启动了 TPU 项目，第一代 TPUv1 于 2015 年在内部部署，专为推理优化；TPUv2（2017）增加训练能力；TPUv3（2018）液冷大规模集群；TPUv4、TPUv5、TPUv6（Trillium）持续迭代。

TPU 让 Google 成为硅谷里极少数能在"计算基础设施"上完全不依赖 NVIDIA 的大厂。Gemini 系列模型正是在 TPU 集群上训练的——这是 Google 在与 OpenAI、Anthropic 的竞争中保留的独特结构性优势。

## 八、今日：Google Brain 的余韵

到 2026 年，Google Brain 这个名字已不再使用。它的研究员要么合并进了 Google DeepMind，要么离开了 Google。但它的精神遗产遍及 AI 的每一个角落：

- Transformer 在**每一个**当代大模型里
- TensorFlow 在**每一个**生产部署的边缘设备上
- BERT 的"预训练+微调"范式仍是 NLP 的基础
- Jeff Dean 仍任 Google 首席科学家，是公司 AI 战略的灵魂
- 吴恩达在 Coursera 和 DeepLearning.AI 继续教几千万人用深度学习
- 那八位 Transformer 作者的新公司和老公司，构成了 AI 产业的半壁江山

作为一个独立建制它已经消失，作为一种文化与方法论，它无处不在。

::: tip 太史公曰
Google Brain 是 AI 时代最辉煌、也最令人扼腕的内部实验室。它发明了 Transformer，却眼看 OpenAI 用同一个架构搭起了 ChatGPT 的帝国；它孕育了几乎所有当代 AI 巨头的核心研究员，却留不住他们；它坚持学术开放的文化让整个行业受益，也让自己的商业节奏永远慢半拍。**AI 历史上最痛的教训之一就是：发明一样东西和用好一样东西，是两件完全不同的事。** Google Brain 的命运证明，即使拥有最强的研究团队、最大的算力、最早的突破，也不必然赢得接下来的战争。但它留给 AI 的地基是无可替代的——如果未来某一天 AGI 真的到来，我们仍会回到那篇 2017 年 6 月 12 日发布的 11 页论文，以及那个叫"Attention"的名字。
:::

## 亲历者说

::: info 征集中
如果你曾在 Google Brain 工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Le, Q. V. et al. (2012). "Building High-level Features Using Large Scale Unsupervised Learning." *ICML 2012*.
2. Mikolov, T. et al. (2013). "Efficient Estimation of Word Representations in Vector Space."（Word2Vec）
3. Sutskever, I., Vinyals, O., & Le, Q. V. (2014). "Sequence to Sequence Learning with Neural Networks." *NeurIPS 2014*.
4. Vaswani, A. et al. (2017). "Attention Is All You Need." *NeurIPS 2017*.
5. Devlin, J. et al. (2019). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." *NAACL 2019*.
6. Abadi, M. et al. (2016). "TensorFlow: A System for Large-Scale Machine Learning." *OSDI 2016*.
7. Jouppi, N. P. et al. (2017). "In-Datacenter Performance Analysis of a Tensor Processing Unit." *ISCA 2017*.
8. Pichai, S. (2023). "Google DeepMind: A New Era of AI Research." Google blog, April 2023.
9. Metz, C. (2023). "How Google Plans to Challenge ChatGPT with Gemini." *The New York Times*.
10. Levy, S. (2024). "The Great Talent Diaspora: How Google Brain Seeded Silicon Valley AI."
