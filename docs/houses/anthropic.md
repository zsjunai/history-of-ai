# 世家 · Anthropic

> 当其他人都在竞速能力时，这家公司把"AI 安全"写在招牌上——但它很快发现，要谈论安全，自己必须先坐上能力的第一桌。

## 一、出走：从 OpenAI 到另起炉灶

2020 年末到 2021 年初，OpenAI 内部气氛紧张。GPT-3 已经展示出惊人的能力，公司正全速驶向商业化——与微软达成独家算力协议、推出 API、探索消费级产品。但一部分研究者对这个方向感到不安。他们认为大模型能力增长的速度远快于人类理解它的速度，而 OpenAI 的组织架构和商业压力让"安全优先"越来越像一句口号。

2021 年初，多位关键研究员相继辞职。领头的是时任研究副总裁的<Person id="amodei" />。他是普林斯顿大学理论物理博士，2016 年加入 OpenAI，领导 GPT-2 和 GPT-3 项目，是 InstructGPT（后来成为 ChatGPT 技术基础）背后的核心推手之一。与他一起离开的还有他的妹妹 Daniela Amodei（前 OpenAI 安全与政策副总裁）、<Person id="brown" />（GPT-3 论文第一作者）、<Person id="kaplan" />（规模定律论文作者）、Chris Olah（OpenAI 可解释性团队负责人）、Sam McCandlish、Tom Henighan、Jared Mueller、Jack Clark 等人——几乎是 GPT-3 论文作者表的半壁江山。

2021 年 5 月，他们在旧金山注册成立 Anthropic，以"公共利益公司"（Public Benefit Corporation，PBC）形式组建，初始团队约 20 人，种子轮融资 1.24 亿美元——对一家研究实验室来说是天文数字，但创始团队判断：训练前沿模型的成本只会越来越高，起步就必须备足弹药。

## 二、安全研究的底色

Anthropic 把"AI 安全"作为公司的第一性原则。但它理解的"安全"不是回避能力——恰恰相反，团队认为只有站在能力前沿的实验室才有资格谈安全。

三条研究主线由此确立。

**其一是机器可解释性**（Mechanistic Interpretability）。Chris Olah 是这个领域的开创者之一，他在谷歌大脑和 OpenAI 期间就发表过大量分析神经网络内部"电路"的论文。在 Anthropic，他的团队把这项工作系统化：把神经网络的每一层拆解成可理解的特征，试图回答"模型到底在想什么"这个黑箱问题。2023-2024 年，团队发布的《Toy Models of Superposition》、《Scaling Monosemanticity》、《Extracting Interpretable Features》等论文，为理解 Claude 系列的内部结构提供了前所未有的透视能力。

**其二是对齐技术**。Anthropic 2022 年 12 月发表的《Constitutional AI》（宪法式 AI）是这条路线的代表作。其核心思想是：用一套明确书写的"宪法"——由一组人类可理解的原则组成的规则集——指导模型自我批判和修订输出，大幅降低对人类反馈数据的依赖。这套方法后来成为 Claude 训练的基石，也被业界视为 RLHF 之外最重要的对齐范式之一。

**其三是前沿风险评估**。公司内部设有"Frontier Red Team"（前沿红队），专门在模型发布前测试生化武器、网络攻击、自主复制等极端风险；并在 2023 年发布了《负责任扩展政策》（Responsible Scaling Policy，RSP），明确规定不同"AI 安全等级"（ASL）下公司必须满足的安全条件——这份政策后来被 Google DeepMind、OpenAI 等竞争对手借鉴。

## 三、Claude：从二号玩家到顶级对手

Anthropic 的公开产品线集中在 Claude 系列，名字来自信息论之父<Person id="shannon" />（Claude Shannon）。

2023 年 3 月，Claude 1.0 通过 Slack 集成低调推出。它在推理能力上与 GPT-3.5 相当，在"有害输出控制"上明显更严格。同年 7 月，Claude 2 发布，首次开放公众使用，并把上下文窗口扩展到 100K tokens——当时业界第一，一次性可以塞进整本短篇小说或大型代码库。

真正让 Claude 进入顶级对手位置的是 2024 年 3 月的 **Claude 3 系列**。Anthropic 第一次把产品按能力分层：Haiku（快而便宜）、Sonnet（均衡）、Opus（最强）。Opus 在多个基准测试上超过 GPT-4，媒体称这是 GPT-4 发布一年后首次被外部模型正面超越。同年 6 月推出的 **Claude 3.5 Sonnet** 在 Opus 之上继续抬高上限，编程能力尤为突出，成为许多开发者日常工具的首选；同年 10 月发布的 **Computer Use** 功能让 Claude 直接操作屏幕、移动鼠标、填表单——首次把大模型推向"真正能动手的 Agent"。

2025 年起，Anthropic 的产品节奏明显加快：Claude 3.7 Sonnet（带可调推理强度）、Claude 4 系列（Opus 4、Sonnet 4、Haiku 4）、Claude 4.5 等相继登场。**MCP（Model Context Protocol）**—— Anthropic 2024 年 11 月开源的一个统一接口协议，让第三方工具可以用标准化的方式被任何 LLM 调用——被行业迅速采纳，成为事实标准之一。Artifacts（在对话中生成可交互文档）、Projects（持久化上下文容器）、代码模式等产品创新持续涌现。

## 四、资本与算力：谁在为安全埋单

Anthropic 的故事里最具张力的一章，是资本与独立的拉扯。

**谷歌**在 2023 年投资 5.5 亿美元，后追加至约 20 亿美元，把 Claude 整合进 Google Cloud Vertex AI。**亚马逊**在 2023 年 9 月宣布投资最高 40 亿美元，2024 年 3 月追加 27.5 亿美元补足首期，2024 年 11 月再追加 40 亿美元——**累计对 Anthropic 的投资达到 80 亿美元**，是 AWS 历史上最大的单笔对外投资。作为交换，Anthropic 的模型训练主体迁移至 AWS Trainium/Trainium2 芯片，Claude 成为 AWS Bedrock 平台的旗舰模型。

2024 年底到 2025 年的多轮融资让 Anthropic 估值不断攀升：从 2024 年初的约 180 亿美元、到 2024 年底的 600 亿美元级别、再到 2025 年的 1000-1800 亿美元区间（不同融资轮估值不同）。员工规模从 2022 年的约 50 人扩张到 2026 年的两千人以上。

这条路径引出一个 Anthropic 始终被追问的问题：一家靠 80 亿美元亚马逊投资 + 谷歌投资生存的公司，还能多"独立"地谈安全？创始人的回答始终是：他们选择成为 PBC（公共利益公司），使命写进章程，章程写进股东协议；只要决策合规，任何单一投资人都不能强制改变公司方向。但也有批评者指出：当 AWS 同时是你的第一大投资人和第一大客户，"独立"已经是一个需要每天去重新争取的词。

## 五、研究发布与行业影响

Anthropic 的研究论文产量可能是所有前沿实验室里最密集的。仅 2023-2025 年，公司发表的"可信 AI"相关论文就超过百篇，覆盖：Chain-of-Thought 的忠实性、模型自我认知、越狱攻击与防御、对齐伪装、长期目标外推、多 Agent 风险、评估基准等等。这些论文不只被学术界引用，也直接进入政策圈——2024 年英国 AI 安全研究所（AISI）与 Anthropic 签署模型预发布评估协议，美国 AI 安全研究所（USAISI）同期跟进。

Anthropic 也是最早系统发布"模型卡"和"负责任披露报告"的公司之一。每次 Claude 主版本发布都会同步一份几十页的评估报告——涵盖偏见、危险能力、越狱抵御、教育和金融用例等。这种做法后来成为行业半强制的规范。

## 六、与 OpenAI 的对照

某种意义上，Anthropic 是 OpenAI 的"镜像"：

- OpenAI 起于"非营利→有上限利润→准公司化"的曲线，Anthropic 直接以 PBC 起步；
- OpenAI 在商业化上最激进，Anthropic 在安全上最保守；
- OpenAI 与微软深度绑定，Anthropic 与亚马逊+谷歌双线绑定；
- OpenAI 因 ChatGPT 赢得 C 端心智，Anthropic 在 B 端（编程、企业 Agent）逐渐建立护城河；
- OpenAI 2023 年经历董事会政变，Anthropic 在 PBC 架构下避开了治理危机，但也因此承担了"结构偏缓慢"的批评。

这种对照本身构成了 2020 年代中期 AI 产业最重要的二元结构：一家把"到达 AGI"作为首要目标，另一家把"安全地到达 AGI"作为首要目标。两者都承认终局不可避免，争论的只是路径。

## 七、今日的 Anthropic

到 2026 年春，Anthropic 员工数超过两千人，估值处于全球 AI 公司的第一梯队（仅次于 OpenAI 和 xAI），Claude 系列覆盖了从个人开发者到大型企业和政府机构的广泛用户。公司已在伦敦、都柏林、苏黎世设立办公室；Dario Amodei 成为 AI 政策讨论中最频繁出现的研究型 CEO 之一——他对"未来五到十年内出现能力超越人类的 AI"的警告反复出现在国会听证、《经济学人》专访和其自己的长文《Machines of Loving Grace》（2024 年 10 月）里。

但 Anthropic 也进入了它最难的一段路：在能力和安全之间找平衡，在商业和使命之间找平衡，在独立性和资本依赖之间找平衡。没有一个问题有明确答案，公司正一边回答一边继续往前走。

::: tip 太史公曰
观 Anthropic 立业，可见一种与 OpenAI 截然不同的时代回应：同样相信 AI 将改变一切，却相信它必须被驯服而非被释放。阿莫代兄妹从 OpenAI 出走，带走的不只是人——是一整套"研究优先、安全优先、章程优先"的方法论。Constitutional AI、可解释性、RSP——每一项都是对"我们不懂自己造出的东西"这一恐惧的技术回应。然而资本的逻辑并不关心章程。当亚马逊砸下 80 亿美元，当估值逼近 2000 亿美元，当员工数从 20 人扩到 2000 人，"慢"本身就成了公司最大的成本。Anthropic 能不能在商业的火山口继续守住安全的誓言——这不仅是一家公司的命运，也是整个 AI 安全路线能否存活的试金石。
:::

## 亲历者说

::: info 征集中
如果你曾在 Anthropic 工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Anthropic (2021). "Anthropic: A New AI Safety Company." Company announcement.
2. Bai, Y. et al. (2022). "Constitutional AI: Harmlessness from AI Feedback." arXiv:2212.08073.
3. Anthropic (2023). "Responsible Scaling Policy, Version 1.0."
4. Anthropic (2024). "The Claude 3 Model Family: Opus, Sonnet, Haiku." Technical Report.
5. Olah, C. et al. (2023). "Toy Models of Superposition." Transformer Circuits Thread.
6. Templeton, A. et al. (2024). "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet." Anthropic Research.
7. Amodei, D. (2024). "Machines of Loving Grace." Personal essay, October 2024.
8. Anthropic (2024). "Introducing the Model Context Protocol." Product announcement.
9. AWS (2024). "Amazon Announces $4B Additional Investment in Anthropic." Press release.
10. Metz, C. (2023). "Ex-OpenAI Leaders Form Anthropic to Build Safer AI." *The New York Times*.
11. The Economist (2024). "Interview with Dario Amodei on AI safety and scaling."
