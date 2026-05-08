# 世家 · Hugging Face

> 一家从"给青少年做聊天机器人"开始的初创公司，意外成为全球开源 AI 的事实标准——`pip install transformers`这一行命令，是过去八年里被键入次数最多的 AI 入门咒语。

## 一、纽约的法国人

故事开始于 2016 年的纽约。三位法国人——克莱芒·德朗格（Clément Delangue）、朱利安·肖蒙（Julien Chaumond）、托马·沃尔夫（Thomas Wolf）——在曼哈顿的一间小办公室里注册了一家公司，取名 **Hugging Face**，标志是一个微笑流泪的拥抱表情符号 🤗。德朗格从巴黎 HEC 商学院毕业、做过 eBay；肖蒙是技术合伙人、做过初创工程师；沃尔夫是物理学博士出身，正在自学 NLP。

最初的产品是一款面向青少年的娱乐聊天机器人 App——你可以在 iPhone 上跟一个有点贱、有点可爱的虚拟朋友互发表情包、聊八卦。它不是为了改变世界而生的产品，更像是一个 Y Combinator 风格的"先做出来再说"的实验。它在 App Store 上获得了几十万下载，但远远没到爆款级别。

如果故事就停在这里，Hugging Face 会是 2010 年代千百家 chatbot 创业公司中默默消失的一家。但 2018 年发生了两件事，让它的命运彻底掉头。

## 二、BERT 来的那一刻

2018 年 10 月 11 日，谷歌发布 BERT 论文。<Person id="devlin" />和团队展示了"双向预训练 + 任务微调"的力量，把 NLP 几乎所有标准任务的 SOTA 一夜之间刷到了新高度。整个 NLP 社区都意识到，预训练语言模型才是未来。

谷歌随后开源了 BERT 的 TensorFlow 实现。但 PyTorch 社区里一时拿不到能用的版本。Hugging Face 团队的沃尔夫和工程师 Lysandre Debut 在内部为 chatbot 训练用的 PyTorch 移植版本，被他们以一个朴素的名字开源到了 GitHub：**pytorch-pretrained-BERT**。

发布是 2018 年 11 月。仓库一星期内就被 NLP 学者疯狂引用、Star、Fork。沃尔夫等人意识到——他们做的这件"顺手"的事，价值远远大过他们的 chatbot 产品本身。整个 2019 年，团队几乎全部精力都投入到把 pytorch-pretrained-BERT 扩展为一个支持**多模型**（GPT-2、XLNet、RoBERTa、DistilBERT 等）、**多框架**（PyTorch + TensorFlow，后来加入 JAX）的通用库。1.0 版本发布时，库改名为 `transformers`。

那是 Hugging Face 的真正起点。

## 三、Transformers 库的胜利

`transformers` 库在 2019 至 2021 年间迅速成为 NLP 的事实标准。理由有三：

第一，**统一的 API**。无论是 BERT、GPT、T5 还是 ALBERT，都用同一套 `from_pretrained()` / `tokenizer()` / `model()` 调用方式。这把研究者和工程师从"每个模型一份代码、每份代码各自为政"的泥潭里捞了出来。

第二，**框架无关**。同一个模型可以一行切换 PyTorch / TensorFlow / JAX，让团队可以根据自己的偏好选用框架。

第三，**Pythonic、文档详尽、对学生友好**。HF 团队在文档、教程、Notebook 上的投入是同期开源库中最舍得花力气的；任何一个本科生都能在一个下午里跑通自己的第一个 BERT 微调实验。

到 2020 年底，几乎所有顶会 NLP 论文（ACL、EMNLP、NAACL）的开源代码都基于 `transformers`。它的下载量在 2024 年突破每月一亿次。

围绕 `transformers`，HF 又陆续推出 **Datasets**（数据集统一接口）、**Tokenizers**（Rust 写的高速分词器）、**Accelerate**（分布式训练简化层）、**PEFT**（参数高效微调，LoRA 等）、**TRL**（强化学习与 RLHF 工具）。这一整套工具链覆盖了从数据准备、训练、微调、对齐到部署的整个 NLP 工程流程。

## 四、Hub：AI 时代的 GitHub

2020 年起，Hugging Face 推出 **Model Hub**——一个让任何人都可以上传、下载、版本管理 AI 模型权重的开放平台，定位完全对标 GitHub 之于代码。Hub 的关键设计是**默认开放、Git LFS 存储、社区可评论与试用**。

Hub 一旦上线就开始爆炸式增长：

- 2021 年初突破 1 万个模型；
- 2022 年下半年 Stable Diffusion 在 Hub 上爆火，社区微调版本以"周"为单位涌现；
- 2023 年 Meta 发布 Llama 2 后选择 Hub 为官方分发渠道；
- 截至 2026 年初，Hub 上有超过 **150 万个模型、25 万个数据集、50 万个 Space 演示**。

Hub 的另一个关键特性是 **Spaces**：用户可以零门槛地用 Gradio 或 Streamlit 把模型包装成 Web Demo，让所有人在浏览器里直接试用。这让"会写论文的研究者"和"会用模型的产品经理"之间不再隔着一道工程鸿沟。

"AI 界的 GitHub"——这个外号在 2023 年前后已经成为整个行业的共识。

## 五、BigScience 与 BLOOM

如果说 OpenAI 走的是"闭源 + 商业 API"的路，那 Hugging Face 几乎是它在哲学上最强烈的对照。这份对照在 **BigScience** 项目上达到顶点。

2021 年中，Hugging Face 发起 BigScience——一个由全球 1000 多名研究者参与、法国 GENCI 提供 Jean Zay 超算资源的开放科学协作项目。目标是公开训练一个与 GPT-3 同级别的多语言大模型。

2022 年 7 月 12 日，BigScience 发布 **BLOOM**：1760 亿参数、覆盖 46 种自然语言和 13 种编程语言，权重完全开源、训练数据公开、许可证为 Responsible AI License（RAIL）。BLOOM 不是当时最强的模型，但它证明了一件事——**社区有能力以非商业方式训练出旗舰级大模型**。这份证明本身就是巨大的政治意义。

2023 年 4 月，Hugging Face 又推出 **HuggingChat**——开源版 ChatGPT，把 LLaMA、Falcon、Zephyr、Mistral 等开源模型包装成对话接口。HuggingChat 永远落后于闭源 SOTA 一两个身位，但它代表了一条不向 OpenAI 低头的备选路径。

## 六、估值 45 亿与生态扩张

2023 年 8 月 24 日，Hugging Face 完成 **D 轮融资 2.35 亿美元**，估值 **45 亿美元**。这一轮的投资人名单本身就是一份大模型时代的"豪门图谱"：谷歌、亚马逊、英伟达、AMD、Salesforce、Sound Ventures、IBM、Intel、Qualcomm 共同进场。这种"所有大公司都来站台"的局面，几乎只在做"行业基础设施"的公司身上才会出现——它意味着每一家巨头都不敢让 Hugging Face 倒向自己的对手。

接下来两年里，Hugging Face 的产品继续向纵深生长：

- **2023 年**：发布 Zephyr 系列开源对齐模型，与 LlamaIndex、LangChain 形成开源 LLM 应用栈的标配三件套；
- **2024 年**：Llama 3 发布即上 Hub，月下载过亿；推出 **SmolLM** 系列小模型（135M / 360M / 1.7B），证明小模型在端侧也有大用；
- **2024 年 11 月**：Hub 月活用户超过 500 万；
- **2025 年**：与 NVIDIA 合作 NIM 推理服务，与 AWS 合作 Inferentia 部署，与 Apple、华为合作端侧 SDK；
- **2025 年**：开源机器人项目 **LeRobot** 上线 Hub，扩张到具身智能领域。

## 七、开源 AI 的最大公约数

回到最初的问题：Hugging Face 凭什么这么重要？

答案是它选对了**身份**。OpenAI 选了"做最强模型"这条路，Anthropic 选了"做最安全模型"，谷歌选了"做最大算力底座"，Meta 选了"开源换生态"——而 Hugging Face 选了一条最不性感、但最持久的路：**做所有这些路线的中立基础设施**。

它不训练旗舰模型，但所有旗舰模型都要上它的 Hub；它不做闭源 API，但所有闭源 API 的开发者都要先在它的库里学会 Transformer；它不与任何巨头为敌，但所有巨头都不能离开它。这是开源 AI 时代典型的"基础设施红利"——位置比能力更重要，中立比强大更稀缺。

德朗格、肖蒙、沃尔夫这三位法国创业者无意中做对的最重要的一件事，是从"我们要做一个产品"切换到"我们要做一个生态"。这种切换需要勇气——它意味着放弃做"明星 App"的可能性，去做一份永远不会上头条但永远不可替代的工作。回头看，这是 2010 年代末最大胆也最聪明的一次产品转型之一。

::: tip 太史公曰
Hugging Face 是开源 AI 时代最大的赢家，但赢的方式与所有人想象的不同。它没有训练出最强的模型，没有做出最炸的产品，没有打过最响的口水仗。它做的是一件最不显眼也最难替代的事——把 AI 这门手艺的"工具箱"标准化、平台化、去中心化。每一个 AI 工程师入门都要装它的库，每一份开源模型都要上它的 Hub，每一篇论文的开源代码都要靠它的 API。这是数字时代最古老的胜利模式：不做风暴中心，而做风暴里所有船都要停靠的港口。法国人用了八年时间把这座港口从纽约一间小办公室建成全球开源 AI 的总枢纽——这是新世纪硅谷之外少有的非美国 AI 故事。
:::

## 亲历者说

::: info 征集中
如果你曾在 Hugging Face 工作、为 transformers 等开源库贡献代码、或在 Hub 上传过模型，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Wolf, T., et al. (2020). "Transformers: State-of-the-Art Natural Language Processing." *Proceedings of EMNLP 2020 System Demonstrations*.
2. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." *arXiv:1810.04805*.
3. BigScience Workshop. (2022). "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model." *arXiv:2211.05100*.
4. Hugging Face. (2023, August 24). "Hugging Face Raises $235M Series D." Press Release.
5. Delangue, C. (2020). "From Chatbot to NLP Powerhouse: The Hugging Face Story." *Hugging Face Blog*.
6. Wolf, T. (2019). "🤗 Transformers: The Story Behind the Library." *Medium*.
7. Hugging Face. *transformers* GitHub Repository (https://github.com/huggingface/transformers).
8. Stable Diffusion Public Release. (2022, August). Stability AI / Hugging Face Blog.
9. Meta AI. (2023). "Llama 2: Open Foundation and Fine-Tuned Chat Models." *Meta AI Research*.
10. Hugging Face Hub Statistics Dashboard (2024–2026).
11. The New York Times. (2024). "How Hugging Face Became the GitHub of AI." Technology Section.
