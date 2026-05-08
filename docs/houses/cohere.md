# 世家 · Cohere

> 三位 Transformer 论文的合著者之一在多伦多创办的大模型公司——不追求 C 端爆款，只专心做企业级 API 与私有部署，是大模型时代"务实派"的代表。

## 一、从 Transformer 论文走出来的人

2017 年 6 月 12 日，谷歌大脑发表《Attention Is All You Need》。论文署名 8 位作者，最末一位的名字写作 **Aidan N. Gomez**。

那时艾丹·戈麦斯（Aidan Gomez）只有 20 岁出头，是多伦多大学的本科生，正在以实习生的身份在谷歌大脑做研究。他参与了 Transformer 论文的实现工作，也因此成为这场技术革命最年轻的"原始见证者"之一。论文的另一位作者尼基·帕尔马尔（Niki Parmar）后来形容他："Aidan 写代码极快，是那种你给他一个想法，他第二天给你一个能跑的实现的人。"

戈麦斯在多伦多大学的导师是<Person id="hinton" />。Hinton 在 2017 年前后已经把大量精力转向"胶囊网络"，但他依然是多伦多 AI 圈的精神支柱。戈麦斯在这种环境里完成了"Transformer 作者 + Hinton 学派"的双重学术血缘。

2019 年，戈麦斯回到多伦多，与本科同学伊万·张（Ivan Zhang）、以及同样出自 Hinton 实验室的尼克·弗罗斯特（Nick Frosst）共同创办了 **Cohere**。三人都不到三十岁，都从北美 AI 黄金圈里走出来，都不想去硅谷加入下一家 ChatGPT。他们想做的是另一件事：**让 Transformer 这件武器成为企业可用的工具**。

## 二、定位差异化

2019 年到 2022 年间，AI 创业的主流剧本是"做面向消费者的 AI 应用"——OpenAI 推 ChatGPT、Anthropic 推 Claude、Inflection 推 Pi、Character.AI 推角色扮演。媒体的注意力、独角兽估值、用户数据飞轮，全部都集中在 C 端。

Cohere 偏偏不走这条路。从第一天起，公司就在内部反复强调三件事：

第一，**不做消费产品**。没有 App，没有聊天界面，没有 KOL 推广。

第二，**只服务企业**。客户是银行、保险、法律、医疗、零售、电信——这些行业有钱、有数据、对合规敏感、不能直接用 OpenAI Web。

第三，**支持私有部署**。模型权重可以下载，可以在客户自己的 VPC、自有数据中心甚至边缘节点上运行，与 OpenAI 那种"必须云端调 API"的架构形成鲜明对照。

这套打法在 2020-2022 年间显得不性感，但到 2023 年大模型爆发后开始显出价值——所有金融、医疗、政府客户都在追问"我能不能私有化部署 GPT-4"，而 OpenAI 的答案永远是"不能"。Cohere 的答案是"我们做的就是这个"。

## 三、三大产品线：Embed、Command、Rerank

Cohere 的产品矩阵围绕**检索增强生成**（RAG，Retrieval-Augmented Generation）这条战线展开。

**Embed 系列**——文本嵌入模型，把任意文本映射为高维向量。在向量数据库（Pinecone、Weaviate、Milvus、pgvector 等）兴起的 2022-2024 年间，Cohere Embed v2 / v3 成为业界质量最稳的商用嵌入模型之一。2024 年发布的 Embed v3 在 MTEB 多语言基准上长期居于第一梯队。

**Command 系列**——生成式语言模型，是 Cohere 的旗舰。2023 年初推出 Command；2024 年 3 月发布 **Command R**；2024 年 4 月发布 **Command R+**——1040 亿参数、原生支持 RAG 引用、支持 10 种主要商业语言。Command R 系列最特别的一点是：**权重以非商业研究许可证开源**，可在 Hugging Face Hub 下载。这等于在闭源派系（GPT、Claude、Gemini）和纯开源派系（Llama、Mistral）之间开辟了一条中间路线。

**Rerank API**——检索结果重排序模型，配合 Embed 一起把 RAG 流水线的检索精度推到生产可用水平。Rerank 是 Cohere 的隐藏王牌——很多客户即使主模型用 GPT-4 或 Claude，检索环节也要用 Cohere Rerank。

这三件套合在一起，让 Cohere 在 RAG 这一最重要的企业 AI 落地场景上形成了独特的护城河。

## 四、Cohere For AI 与 Aya 多语言模型

2022 年，Cohere 创立了独立的非营利研究分支 **Cohere For AI**（C4AI），由前谷歌大脑研究员 Sara Hooker 领导。C4AI 的定位是"开源研究 + 多元化招生"——它特别强调来自非洲、拉美、东南亚、东欧的研究者参与，反对 AI 研究只集中在美西+多伦多+伦敦的小圈子内。

2024 年 2 月 13 日，C4AI 发布 **Aya**——一个覆盖 **101 种语言**的多语言大模型。Aya 项目动员了 119 个国家的 3000 多名贡献者，是迄今为止规模最大的开源多语言对齐数据集协作。这之后又有 **Aya 23**（23 种主要语言深度优化）、**Aya Expanse**（2024 年发布，支持 23 种语言、性能对标 Llama 3）。

Aya 的意义不止于技术。它向行业发出了一份明确的信号：**大模型不应该只服务英语世界**。这一声音在 2024 年的多伦多被特别强烈地叫出来——这座城市本身就是世界上最多元的英语城市之一。

## 五、估值 55 亿与企业客户网络

资本市场用了一段时间才真正认识到 Cohere 的价值。2021 年 9 月，Cohere 完成 A 轮 4000 万美元，由 Index Ventures 领投。2022 年 2 月 B 轮 1.25 亿美元，Tiger Global 领投，估值 22 亿美元。2024 年 7 月 22 日，Cohere 宣布完成 **C 轮 5 亿美元**，估值跃升至 **55 亿美元**——领投方阵容堪称大模型时代最具战略意义的拼盘：

- **NVIDIA**——算力供应方，深度合作 NIM 推理服务；
- **Oracle**——把 Cohere 模型嵌入 Oracle Cloud Infrastructure 与 NetSuite 等企业产品；
- **Salesforce Ventures**——通过 Salesforce 把 Cohere 接入全球最大企业 CRM；
- **Cisco**——把 Cohere 嵌入 Webex 与企业网络产品；
- **Inovia Capital、PSP Investments**（加拿大公共养老金）——加拿大本土资本的政治背书；
- **AMD、Fujitsu**——硬件与日本市场入口。

这份名单的潜台词清晰：每一家都不愿意把自己的 AI 战略完全押在 OpenAI 或 Anthropic 身上，每一家都需要一个"中立、可私有部署、对企业负责"的 LLM 供应商。Cohere 正好填上这个位置。

## 六、加拿大 AI 的产业代表

如果说<Person id="bengio" />代表的 MILA 是加拿大 AI 的学术心脏，<Person id="hinton" />代表的多伦多大学 + Vector Institute 是加拿大 AI 的智识源头，那 Cohere 就是加拿大 AI 的**产业化样本**。

加拿大政府对此非常清楚。2024 年 4 月，加拿大联邦政府宣布投入 24 亿加元的"主权 AI 计算战略"，其中相当一部分预算与 Cohere 直接相关——支持其在国内部署 AI 算力底座，避免本国关键行业的数据流向境外。2024 年 5 月，加拿大公共养老金 PSP 与 CDPQ 共同投资 Cohere，是这个国家级战略的资本部分。

戈麦斯本人也成了加拿大 AI 公共形象的代表之一。他频繁在 Ottawa、Davos、Bletchley Park（2023 年 AI 安全峰会）等场合代表加拿大企业声音发言，与 OpenAI 的奥尔特曼、Anthropic 的阿莫代、xAI 的马斯克形成清晰的"加拿大务实派"对照。

## 七、不与 OpenAI 正面打的智慧

到 2026 年，Cohere 没有 ChatGPT 那样的 5 亿月活用户，没有 Claude 在编程任务上的 SOTA 光环，也没有 Gemini 那样横扫多模态基准的资源。在公开舆论场上，它不算是大模型"第一梯队"。

但翻开它的客户列表，你会看到一个完全不同的故事：Oracle Cloud 的 NL2SQL、Salesforce 的 Einstein、Notion 的企业版搜索、Fujitsu 的日本政府客户、欧盟成员国的本地化部署、加拿大五大银行（RBC、TD、BMO、Scotiabank、CIBC）的内部合规 AI。这是一份**只在 B 端世界里才看得到的版图**。

戈麦斯在多次访谈中提过他的逻辑：在这场大模型战争里，与其和 OpenAI、Anthropic 在 C 端 SOTA 上拼消耗，不如**做那些它们做不了或不愿意做的事**——私有部署、严格合规、深度行业定制、多语言、嵌入到客户已有的工作流。这是一种典型的"非对称竞争"——不与最强者在最强处争锋，而在它的盲区里建立自己的根据地。

到 2026 年初，Cohere 估值仍维持在 55 亿美元这一档（远低于 OpenAI 的 3000 亿与 Anthropic 的 600 亿+），但它的现金流健康度、客户续约率、毛利结构在所有大模型公司里居于最稳健的几家之一。这是另一种胜利——不是估值最高的胜利，而是活得最久的胜利。

::: tip 太史公曰
大模型创业从来不只一条路。当 OpenAI 把闪光灯都吸走的时候，多伦多的三个年轻人选择走进黑暗——做企业 API、做私有部署、做没人发推特的 RAG 检索。八年过去，他们没有成为时代的主角，但他们的模型已经悄悄运行在加拿大五大银行的合规系统里、Oracle 的客户数据库里、Fujitsu 给日本政府提供的政务系统里。这是一种典型的"加拿大式胜利"——不要风口，要根基；不要明星，要客户；不要估值，要现金流。AI 时代的故事不会全部由 OpenAI 来写，Cohere 写的这一章是关于"另一种活法"的——它证明了，在深度学习时代里依然存在一条让中型公司活得很好的中间道路。
:::

## 亲历者说

::: info 征集中
如果你曾在 Cohere、Cohere For AI 或多伦多 AI 生态工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). "Attention Is All You Need." *NeurIPS 2017*.
2. Cohere. (2024, March 11). "Command R: Retrieval Augmented Generation at Production Scale." Cohere Blog.
3. Cohere. (2024, April 4). "Introducing Command R+: A Scalable LLM Built for Business." Cohere Blog.
4. Cohere For AI. (2024, February 13). "Aya: An Open Science Initiative to Accelerate Multilingual AI Progress." Cohere For AI.
5. Cohere For AI. (2024, October 24). "Aya Expanse: Connecting Our World." Cohere For AI Blog.
6. Cohere. (2024, July 22). "Cohere Raises $500M Series C at $5.5B Valuation." Press Release.
7. Government of Canada. (2024, April). "Canadian Sovereign AI Compute Strategy." Innovation, Science and Economic Development Canada.
8. Gomez, A. (2023). Bletchley Park AI Safety Summit Statement. UK Government Transcript.
9. Hooker, S. (2023). "The Hardware Lottery." *Communications of the ACM*, 64(12).
10. Forbes. (2024). "How Cohere Quietly Became the Enterprise LLM Pick." Cover Story.
11. The Globe and Mail. (2024). "Inside Canada's Most Important AI Company." Business Section.
