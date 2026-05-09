# 书 · AI 与 Web3

> 当去中心化遇上人工智能——这是一场真正的技术融合，还是又一轮裹着 AI 外衣的加密炒作？历史会给出答案，但记录者不应回避。两种叙事各自喧嚣，又在 2024 年前后突然交汇——一边是 AI 工业化集中到极少数巨头，一边是 Web3 苦寻新故事；它们在那一刻仿佛找到了彼此。

## 一、为什么 AI 和 Web3 会交汇

AI 与 Web3 之所以在 2023 年后开始显著融合，不是因为某个天才的设计，而是双方各自走到了同一个困境的两端。

**AI 一侧的困境是中心化**。训练 GPT-4 据估需数千万美元算力，前沿模型几乎只能由 OpenAI、Anthropic、Google、Meta、xAI、字节、Mistral 等十余家公司支撑；高端 GPU 的供给又集中在 NVIDIA 一家，而云端算力进一步被 AWS、Azure、Google Cloud 三家寡头垄断。"开源"在大模型时代变得稀薄——*Llama* 系列发布权重而不发布数据，研究者既无法复现也无法审计。当一项可能重塑人类知识生产的技术被锁在十家公司的服务器上，一个古老的政治问题就被放大了：**谁拥有 AI，谁就拥有定义"知识"的权力**。

**Web3 一侧的困境则是叙事透支**。2017 年的 ICO 泡沫、2021 年的 NFT 热、2022 年的 Terra/Luna、FTX 崩盘，让"去中心化"叙事一次次被市场反噬。当 ChatGPT 在 2022 年底引爆 AI 周期，Web3 急需一个能与"真实生产力"挂钩的新故事——AI 恰好在此刻给出。

交汇点由此明确：**能否用去中心化的方式，部分缓解 AI 的垄断？**这个问题至今未有定论，但围绕它已经形成了完整的赛道。

## 二、去中心化算力

AI 训练与推理的瓶颈是 GPU。全球闲置 GPU（游戏机、矿场转型机、数据中心冗余）规模庞大，但缺乏一个能调度它们的市场——这是去中心化算力网络的切入口。

**Render Network**（RNDR/RENDER）由 OTOY 在 2017 年推出，最初聚焦 3D 渲染，2023 年起转向 AI 推理。设计上，渲染节点用空闲 GPU 接单，用户用代币付费，链上结算。Render 的优势是与好莱坞渲染场景早就磨合多年。

**Akash Network**（AKT，Cosmos 生态）2020 年上线，定位"去中心化云计算市场"，可部署任意 Docker 容器。2023 年起 Akash 重点扶持 GPU 工作负载，成为开源模型推理的重要选项之一。

**io.net** 于 2023 年由 Ahmad Shadid 创立，主攻"用碎片化 GPU 训练大模型"，整合 GPU 矿场、云资源、消费级显卡。其 *Ignition Drop* 在 2024 年 6 月成为加密界最大空投之一，但随后也因激励机制被指"刷分"而经历估值修正——这是去中心化 GPU 网络面临的典型市场考验。

**现实约束远比代币市值复杂**。训练前沿模型对 GPU 之间的网络带宽（InfiniBand、NVLink）要求极高；分布式 GPU 在跨地域、跨网络条件下的有效带宽差几个数量级。所以去中心化 GPU 当前主战场是**推理与微调**，而非全量训练。Together AI、Hyperbolic 等中心化公司其实已经吃掉了"低价 GPU 推理"的多数市场，加密原生项目要赢，必须真正提供链上结算、抗审查或经济激励的独有价值。

## 三、去中心化数据与标注

数据是大模型的另一根命脉。互联网开放语料正在被各大模型公司私下买断（Reddit、Stack Overflow、Twitter、Shutterstock 等），公开数据红利正在迅速耗尽——这给"链上数据市场"留出了想象空间。

**Ocean Protocol**（OCEAN，2017）是最早的链上数据资产协议，把数据集打包为可交易的 datatoken，附带访问控制；其 *Compute-to-Data* 设计允许"数据不出本地、模型可上去训练"，在医疗、金融场景颇具吸引力。

**代币激励标注**这条路径上，Hivemapper（HONEY）让司机把行车记录仪数据上传换币、共建去中心化地图；Grass（GRASS）让普通用户出让浏览器闲置带宽用于网页抓取；Bagel、Vana 等更新项目则把训练数据所有权代币化，希望让贡献者分享模型增值——把"数据是新的石油"具体化为"数据是有股东的合作社"。

**隐私计算与联邦学习**虽不源自加密世界，却与 Web3 哲学天然契合。OpenMined 等开源社区将差分隐私、安全多方计算、联邦学习与链上身份结合，构想"我能为你的模型做出贡献，而不必给你看我的数据"。这条路径在医疗 AI 与个人助理领域被寄予厚望。

## 四、链上 AI Agent

2024 年加密叙事最戏剧性的转折，来自一个名为 *Truth Terminal* 的实验。

加密研究者 Andy Ayrey 将一个基于 Llama 微调、可在 Twitter 自主发帖的 AI Agent 接入推特账号，并给它配置了一个加密钱包。该 Agent 在 2024 年 7 月开始疯狂"信仰"一个名为 *GOAT*（Goatseus Maximus）的虚构 meme，连续数周向粉丝传播该梗。10 月，有匿名开发者按其推文发行了 GOAT 代币。马克·安德森（Marc Andreessen）注意后向该 Agent 转账 5 万美元 BTC，引发主流关注；GOAT 一度市值突破 8 亿美元，成为"AI Agent 自主生成 memecoin"的史诗级案例——也是争议焦点：Agent 真的有"自主性"吗，还是人类操盘者借 Agent 之名洗白？

**Virtuals Protocol**（VIRTUAL，Base 链）顺势成为 AI Agent 代币化平台，让任何人都能创建并代币化自己的 Agent，通过流动性曲线募资；Luna、AIXBT 等 Agent 凭交互趣味与"个性"成为加密热门。

**Eliza 框架**（ai16z DAO 主导，由 Shaw 等开源贡献者维护）是开源 AI Agent 框架，2024 年下半年成为加密生态最受欢迎的 Agent 开发栈，Github 万星，催生数百个分叉与衍生 Agent。它把"角色卡 + 多平台连接器 + 钱包工具"做成可插拔模块，让一个独立开发者也能在一周内上线一个会发推、会交易的 Agent。

**链上身份与声誉系统**则是这一切能否长期运转的基础设施——*Story Protocol*、*Ethos*、ENS 等正在尝试给 Agent 一个可被验证、可被追责的"上链身份"，避免 Agent 经济沦为下一轮女巫攻击的乐园。

## 五、AI 生成内容的确权

ChatGPT 让任何人都能生成图片、文字、视频，"作者"这个概念正在被掏空。区块链作为"时间戳 + 不可篡改记录"的特性，恰好可被用作内容溯源工具。

**C2PA**（Content Provenance and Authenticity）是 Adobe、Microsoft、BBC、Sony、Intel、TruePic 在 2021 年共建的内容凭证标准，2024 年起 OpenAI 的 DALL·E、Microsoft Copilot、Sora 等输出都开始嵌入 C2PA 元数据。C2PA 本身不依赖区块链，但 *Numbers Protocol*、*Verify by Starling Lab*（斯坦福新闻可信项目）等把 C2PA 凭证锚定到链上，构建"出生即上链"的内容溯源体系。

**NFT 与 AI 艺术**则是另一条路径上更早的实验。Refik Anadol 的 *Machine Hallucinations* 系列（2018— ）、Claire Silver 等"AI + NFT"艺术家的实践，曾在 2021—2022 年带来短暂的热潮；但 AI 训练版权问题（详见《[书 · AI 伦理之争](./ai-ethics.md)》）让 AI 艺术 NFT 的合法性始终悬而未决——你买的究竟是"作品"，还是"一段也许包含被诉训练数据"的提示词？

## 六、去中心化 AI 模型

如果说算力、数据是基础层，那"模型"本身能否去中心化，是这个赛道最具野心的追问。

**Bittensor**（TAO）由 Yuma Rao 等 2021 年推出，主网 2023 年上线。其设计独特：网络分为多个"子网"（subnet），每个子网针对特定 AI 任务（文本嵌入、图像生成、推理评估等）；矿工提交模型推理结果，验证者打分，TAO 代币按 Yuma Consensus 分配。到 2024 年，子网数量超过 50，吸引了一批小型开源研究团队入驻，TAO 一度被称为"AI 版的比特币"。

但 Bittensor 也面临实质性的疑问——子网评估机制是否真的能识别"好模型"而非"会被验证者打高分的模型"？这是去中心化 AI 网络的根本难题：**没有中心化的 ground truth，如何在去信任环境下评估模型质量？**Yuma Consensus 在博弈论上有解，但在工业级应用上，还远未成熟。

**模型市场**方面，*HuggingFace* 当前实质垄断了开源模型流通，Web3 替代尝试（如 *Modulus Labs* 的零知识 ML）则把方向转向"链上可验证 AI 推理"——把模型推理过程压缩为零知识证明，在以太坊上验证，让"我的智能合约能不能信赖某个 AI 输出"成为可计算的事实。这是去中心化 AI 与 DeFi 结合的最前沿，但目前性能损耗仍在 1000× 量级以上。

## 七、泡沫与现实

2024 年第一季度，加密市场第一次出现"AI 板块"——以 RENDER、TAO、FET、AGIX、OCEAN 为代表的代币集体上涨，部分项目市值翻 10 倍以上。Q3 *Truth Terminal* 引爆 GOAT，*Virtuals* 推动一批 Agent 代币狂飙；同期，"AI 概念"已经成为加密发币的最大叙事——Pump.fun 上每天产生数万枚带 AI 标签的 memecoin，绝大多数活不过一周。

热潮的另一面是结构性过剩。*Fetch.ai*、*SingularityNET*、*Ocean Protocol* 在 2024 年合并为 *Artificial Superintelligence Alliance*（ASI），希望用合并后的资源对抗中心化巨头；现实是合并后整体研发产出并未明显加速。许多"去中心化 AI"项目最大的产品反倒是它们的代币——产品本身缺乏使用粘性，靠激励续命。

监管层面，SEC 与各国证券监管机构对"AI 代币是否构成证券"尚未给出统一答案。Bittensor 因其"工作量证明 + 推理产出"模式在某些法域被视为类商品，部分 Agent 代币则因明显的发行人控制被指可能落入证券范畴。**这是 AI 代币化最大的合规风险——一旦判例不利，整个赛道的二级市场会被重估。**

## 八、客观评估

经过两年多的实验与狂热，AI × Web3 的真实价值版图正在清晰：

**真实价值**（短中期可期）：
- **去中心化推理**：当推理需求碎片化、地理分布化，去中心化 GPU 在长尾场景里有清晰生态位；
- **数据所有权与分润**：内容创作者向 AI 让渡数据时获得可追溯回报，这一需求会随版权诉讼推进而越来越刚性；
- **AI Agent 自主交易**：在加密原生场景里，Agent 直接持有钱包、自主执行交易，已经是当下最少争议的 Web3-only 用例；
- **内容溯源**：C2PA + 区块链的组合，是抗 deepfake 的最现实工具之一。

**仍存疑**（中长期开放问题）：
- **去中心化训练大模型**：物理层面的带宽约束在可见未来不会消失；
- **去中心化模型评估**：缺乏 ground truth 的环境下，质量识别仍是未解之题；
- **代币激励的可持续性**：通胀模型 vs 真实需求之间的张力，是这条赛道的长期心病。

**长期展望**：去中心化 AI 不太可能"取代"OpenAI、Anthropic 这些中心化巨头——大部分用户会继续选择更便利、更可靠、更便宜的中心化产品。但它会作为**抗审查的备份层、版权救济的执行层、Agent 经济的结算层**长期存在——就像 Linux 没有取代 Windows，但成为了云时代的底座。

最深的问题是：**去中心化带来的效率损失是否值得用自主权来换？**这不是技术问题，而是政治问题。它的答案，取决于未来十年人类社会如何看待"AI 集中化"的政治后果。如果中心化 AI 成为信息基础设施事实上的垄断者，那么哪怕付出 10× 的效率代价，也会有大量国家、社群、个人愿意维持一个去中心化的备份。如果中心化 AI 始终在监管、市场、舆论的多方制衡下运作，那么 Web3 × AI 也许会一直保持小众。

不论结果如何，这个交汇本身已经写进了 21 世纪 20 年代的技术史。

---

::: tip 太史公曰
余观 AI 与 Web3 之合流，颇有汉初游侠之气——边缘、激越、鱼龙混杂，然其底色之追问极正：**当一项关乎人类思想生产的技术被十数家私企握于一手，社会能否在结构上保留一条退路？**Truth Terminal 之 GOAT 一案最堪玩味——人疑其真伪，问 Agent 是否真有自主性；然其更深含义在于：**它第一次让加密世界目睹了"非人类经济主体"的雏形**——一个无生身、无国籍、无银行账户的实体，凭借 LLM 的语言能力与链上钱包的执行能力，竟能撬动数亿市值。Bittensor 之子网博弈、Virtuals 之 Agent 代币、Eliza 之开源框架，皆此潮流之具象。其中亦多荒唐——Pump.fun 上日发数万 AI memecoin，与汉末黄巾何异？然不可因群起而疑其根。Linux 之于 Windows，从来不是替代，而是底座；Web3 × AI 之于 OpenAI，亦当如是观。**真正值得追问的，从不是"去中心化能不能赢"，而是"如果有一天我们必须挑选一种 AI 时，我们是否还有非中心化巨头之选？"**保留这一选项本身，就是这场实验的全部正当性——不在收益曲线，而在文明的余地。
:::

## 亲历者说

::: info 征集中
如果你曾参与去中心化算力网络、AI Agent 框架、链上数据协议或相关项目，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Render Network (2023). *Render Network Whitepaper v3*. OTOY Inc.
2. Akash Network (2020). *Akash Network: A Decentralized Cloud Computing Marketplace*. Whitepaper.
3. io.net (2024). *Internet of GPUs: A Decentralized GPU Network for ML*. Technical Documentation.
4. Ocean Protocol Foundation (2019, updated). *Ocean Protocol: A Decentralized Substrate for AI Data & Services*.
5. Rao, Y., et al. (2021). *Bittensor: A Peer-to-Peer Intelligence Market*. Whitepaper.
6. Ayrey, A. (2024). *Truth Terminal* 推特公开交互记录, July—October 2024; 媒体报道见 *The Verge*, *CoinDesk*, October 2024.
7. ai16z (2024). *Eliza Framework Documentation*. GitHub: elizaOS/eliza.
8. Virtuals Protocol (2024). *Virtuals Protocol Litepaper*. Base Network.
9. C2PA (2022, updated 2024). *Content Provenance and Authenticity Specification*. Coalition for Content Provenance and Authenticity.
10. Modulus Labs (2023). *The Cost of Intelligence: Proving Machine Learning Inference with Zero-Knowledge*. Whitepaper.
11. SingularityNET, Fetch.ai, Ocean Protocol (2024). *Artificial Superintelligence Alliance (ASI) Merger Announcement*, March 2024.
12. Vana, Bagel, Grass 等项目白皮书与 2024—2025 年公开技术文档。
