# 世家 · xAI

> 马斯克在与 OpenAI 决裂之后，用一座 122 天建成的十万卡超算与一只名叫 Grok 的"反觉醒"模型，重新进入了他八年前播下又拱手让出的那场牌局。

## 一、决裂之后的回归

故事要从一桩 2018 年的旧事说起，更准确地说，要从 2015 年那个加州门洛帕克 Rosewood Sand Hill 酒店的会议室说起——那一年 12 月，<Person id="altman" />、<Person id="sutskever" />、Greg Brockman、马斯克等人坐在那里达成共识，要做一家"反垄断"AI 实验室，对抗 Google 的 AGI 集中化。OpenAI 由此诞生。那一年 2 月，<Person id="altman" />与马斯克（Elon Musk）在 OpenAI 的方向问题上彻底闹翻——马斯克想把 OpenAI 并入特斯拉旗下亲自掌舵被否决，他愤而辞去董事会职务，并停掉了原本承诺的资助。此后五年，他眼睁睁看着自己出钱出力推动建立的非营利组织在 2019 年成立营利子公司、2022 年放出 ChatGPT、2023 年 1 月接受微软 100 亿美元注资——曾经的"开放 AI"成了世界上最封闭、最赚钱的 AI 公司。

转折发生在 2022 年底。ChatGPT 发布后，马斯克在 Twitter 上公开抱怨"OpenAI 已经背叛初心"，要求查看公司账目未果。与此同时他注意到一个让他更焦虑的细节：他十年前为 OpenAI 立下的"避免 AI 灭绝人类"的使命，正在被一家由微软实际主导的公司接管——而微软的工程文化中没有"使命"这个词，只有"季度业绩"。

2023 年 3 月 9 日，马斯克在内华达州注册了一家新公司，名字叫 **X.AI Corp**。同年 7 月 12 日，他在 X 平台（前身 Twitter）上正式公开 **xAI** 的成立，使命写得野心勃勃——"理解宇宙的真实本质"（understand the true nature of the universe）。马斯克要重新下场，并且这一次没有董事会能逼他离开。值得一提的是，2023 年 3 月他还联署了那封要求"暂停训练比 GPT-4 更强模型 6 个月"的公开信——而签字之后不到两周，他自己悄悄注册了 xAI。

公司初期的总部设在旧金山湾区帕洛阿尔托，几个月后迁往加州 Burlingame 一处独立办公楼；2024 年起在田纳西州孟菲斯设立训练中心，2025 年在内华达州、密西西比州、得克萨斯州陆续布局算力据点。这种"沿着马斯克其他公司选址"的扩张方式，让 xAI 与 Tesla、SpaceX 在地理上形成天然协同。

## 二、班底

公司成立之初的核心团队几乎全是从老对手家挖来的人——

- **伊戈尔·巴布什金（Igor Babuschkin）**，前 DeepMind 研究员、前 OpenAI 工程师，xAI 联合创始人之一，负责工程与基础设施；
- **吉米·巴（Jimmy Ba）**，多伦多大学教授、Adam 优化器的合作者之一（与 Diederik Kingma 合著 *Adam: A Method for Stochastic Optimization*）；
- **克里斯蒂安·塞格迪（Christian Szegedy）**，前 Google Brain 研究员，BatchNorm 与 Inception 系列论文作者之一；
- **曼努埃尔·克罗伊斯（Manuel Kroiss）**、托尼·吴（Tony Wu）、张国栋（Greg Yang）、吴宇怀（Yuhuai "Tony" Wu）等十余位来自 DeepMind、OpenAI、Google、Microsoft Research 的研究员。

团队规模在创立时不过十几人，但简历堆叠起来约等于半个 DeepMind 加半个 OpenAI 早期。马斯克本人仍同时担任特斯拉 CEO、SpaceX CEO、X 平台所有人——这种"四肩挑"在硅谷史上前所未有。

挖人的方式也极具马斯克风格：他自称"亲自面试每一位早期员工"，标准只有一条——"工程能力 + 不怕被骂"。Babuschkin 后来透露，2023 年春天他接到马斯克的电话邀请加盟时，被告知"前六个月没有薪水，只有股票和工位"——这种条款只有马斯克这种品牌能开得出口。但即便如此，DeepMind 与 OpenAI 仍有十余位研究员主动跳槽，原因之一是他们认同马斯克对 AGI 风险的论述，原因之二是 xAI 提供的算力将远超原雇主。Babuschkin 本人于 2025 年 2 月离开 xAI 创办 AI 安全公司 Babuschkin Ventures，是早期班底中第一位高调出走的核心成员。

在公司运营理念上，xAI 沿袭了 SpaceX 与 Tesla 那套"快速试错、扁平结构、首要原则思维"。公司没有传统的产品经理职能，工程师直接对接马斯克本人；没有冗长的代码评审流程；产品发布常常以"周"而不是"季度"为单位。这种节奏在保守的科研机构里是不可想象的，但在马斯克的体系里已被验证过两遍。

## 三、Grok 系列：一年一代

xAI 的第一个产品在公司成立四个月后亮相。

- **Grok-1**（2023 年 11 月发布，3140 亿参数 MoE，2024 年 3 月以 Apache 2.0 协议开源权重）——名字 Grok 取自海因莱因（Robert A. Heinlein）1961 年小说《Stranger in a Strange Land》中的火星词，意为"以本能彻底理解"。Grok 1 的卖点不是性能（彼时落后 GPT-4 一代），而是**幽默、直言、不加道德滤镜**——马斯克借此攻击 ChatGPT 的"觉醒病"（wokeness）。
- **Grok-1.5**（2024 年 3 月）：上下文窗口扩展到 128K，多模态加入视觉理解。
- **Grok-2**（2024 年 8 月）：在 LMSYS Chatbot Arena 上短暂逼近 GPT-4o 与 Claude 3.5 Sonnet，集成图像生成（基于 FLUX.1）。
- **Grok-3**（2025 年 2 月）：在 Memphis 超算上完成训练，预训练算力是 Grok-2 的十倍以上，发布会上演示在数学（AIME）、物理、编程基准上对当时 GPT-o1、Claude 3.7、Gemini 2 形成局部领先。
- **Grok-4**（2025 年 7 月）：第一个被 xAI 官方称为"前沿模型"的版本，引入"思考"模式与多智能体协作（Grok 4 Heavy），上下文 256K，配套发布 **Grok Code Fast**（编程模型）、**Grok Imagine**（多模态生成）、**Grok 2 Vision**（视觉理解端）。

从 Grok-1 到 Grok-4，时间跨度不到 22 个月——这种迭代速度只有同期的 OpenAI、Anthropic 与 DeepSeek 能匹敌。

技术路线上，xAI 几乎全套照搬 Transformer + RLHF 主流方案，但在两件事上独树一帜——**第一**，强调"实时数据优势"，Grok 默认接入 X 平台的实时推文流，对突发新闻的响应速度领先所有对手；**第二**，强调"原生工具调用"，从 Grok-3 起，模型默认带浏览、写代码、调用 X 搜索三件套，而非外挂插件。这两条被马斯克概括为"训练数据 + 集成 = 护城河"。

值得指出的是，Grok 的"反觉醒"标签某种程度上是市场定位策略——技术上 Grok 与同代 GPT、Claude 在架构层面差别不大，主要差异在 RLHF 阶段使用了不同的人类反馈数据与系统提示词。马斯克本人也承认："要么我们做一个有立场的 AI，要么市场上只有 OpenAI 那种立场的 AI。"

## 四、Memphis 的赌注：Colossus 超算

让 xAI 真正引发硅谷敬畏的，不是 Grok 模型本身，而是**它建数据中心的速度**。

2024 年 7 月，xAI 在田纳西州孟菲斯（Memphis）一座废弃的伊莱克斯（Electrolux）工厂选址。9 月，10 万张 NVIDIA H100 GPU 上线投入训练——从签合同、改造电力、装配机柜、调通网络到第一次跑通分布式训练，全过程**仅 122 天**。NVIDIA CEO <Person id="huang" />亲自飞到 Memphis 站台，称这是"前所未见的工程速度"——业界的常规节奏是 18–24 个月。

这座超算被命名为 **Colossus**，致敬二战时期布莱切利园破解 Enigma 的同名计算机。2025 年初，Colossus 扩建至 **20 万张 H100/H200**，成为全球最大的单体 AI 训练集群之一。配套电力供应来自 14 台 Solar Turbines 的天然气涡轮，环保问题在当地引发持续抗议——南方贫困法律中心（Southern Poverty Law Center）与本地 NAACP 分会指控选址工厂位于黑人社区附近，造成空气污染恶化。但工厂照常运转。

支撑这种速度的，不只是钱，还有马斯克跨公司调度资源的能力——SpaceX 派去了 Starlink 工程团队铺光纤、Tesla 派出 Megapack 储能设施稳定电网、X 平台的运维工程师协助系统调度。这种把帝国所有臂膀拧成一股绳的执行力，是 OpenAI、Anthropic 这种"纯 AI 公司"无法复制的。

2025 年 6 月，xAI 宣布在密西西比州 Olive Branch 启动 **Colossus 2**，目标 100 万 GPU 等效算力，电力来自专用天然气电厂。这是一项与 OpenAI 的 Stargate 项目（与 SoftBank、Oracle 合作的 5000 亿美元基建计划）正面竞争的算力豪赌。马斯克在 2025 年 8 月接受采访时直白表态："谁的 GPU 多，谁就能赢这场战争。"

值得提的是：Memphis 的速度并非孤例。2025 年下半年，xAI 又在 22 天内把另一个 5 万卡集群上线——业内戏称"马斯克在重写数据中心的物理定律"。背后的代价不只是钱：xAI 在多个项目中绕过环保评估流程，在田纳西、密西西比都遭遇过本地监管部门的处罚与诉讼。

2025 年 11 月，xAI 又宣布与韩国 SK 集团合作，把 Colossus 同款架构复制到亚洲——这是 xAI 第一次在美国本土之外建设训练级算力。整个 xAI 的算力路线图被外界总结为一句话："不是把 GPU 用得最聪明，而是把 GPU 装得最快。"

## 五、与 OpenAI 的诉讼战

马斯克对 OpenAI 的怨气在 xAI 成立后并未平息，而是搬到了法庭。

- **2024 年 2 月**，马斯克在加州州法院起诉 OpenAI、阿尔特曼与格雷格·布罗克曼（Greg Brockman），指控他们违反 2015 年成立时的非营利初衷，将公司事实上私有化。这起诉讼后被自行撤回。
- **2024 年 8 月**，马斯克在加州北区联邦法院重提诉讼，加入更多被告（包括微软）与新指控——欺诈、勒索（RICO）、不当竞争。
- **2024 年 11 月**，马斯克申请初步禁令试图阻止 OpenAI 的盈利转型，被法院驳回；但案件主体进入证据开示阶段，预计 2026 年开庭。
- **2025 年 2 月**，马斯克联合一群投资者向 OpenAI 提出 974 亿美元的"非自愿收购要约"，被 OpenAI 董事会一致拒绝——这一举动被普遍视为对 OpenAI 营利转型估值的施压策略。

阿尔特曼方面则反诉马斯克"试图通过诉讼削弱竞争对手"。两位昔日联合创始人就此撕破脸。值得一提的是，马斯克提出的"OpenAI 不应该转为营利公司"恰恰是他 2018 年自己曾在内部强力推动过的方向——这桩官司既是商业战，也是史料战。诉讼中披露的内部邮件，意外成为 AI 创业史上最珍贵的一手史料。

## 六、从 X.AI 到 X：合并的帝国

2025 年 3 月 28 日，马斯克在 X 平台发文，宣布 **xAI 收购 X**——他名下的 AI 公司收购他名下的社交媒体公司，全股票交易，xAI 估值 800 亿美元，X 估值 330 亿美元（剔除 120 亿美元债务后）。合并后实体名为 **xAI Holdings**，估值约 1130 亿美元。

合并的逻辑表面看是循环——同一个老板、同一栋楼、左口袋装到右口袋——但战略上有其严密性。X 平台贡献的是**全球最大的实时人类对话语料**（每日数十亿条推文），Tesla 贡献的是 **FSD 路面数据**（虽然法律上分属两家公司，但马斯克本人曾多次表达整合意向），xAI 贡献的是**模型与算力**。整个马斯克帝国正在被重组为一个数据-算力-应用的垂直闭环。

合并之外，马斯克在 2024–2025 年完成了一系列高强度融资：

| 时间 | 轮次 | 金额 | 估值 |
|------|------|------|------|
| 2024 年 5 月 | B 轮 | 60 亿美元 | 240 亿美元 |
| 2024 年 12 月 | C 轮 | 60 亿美元 | 500 亿美元 |
| 2025 年 3 月 | D 轮 | 100 亿美元 | 750 亿美元 |
| 2025 年 9 月 | E 轮（合并后） | 100 亿美元 | 2000 亿美元 |

主要投资人横跨硅谷与中东主权基金——Sequoia、Andreessen Horowitz、Valor Equity Partners、Vy Capital、Fidelity、贝莱德（BlackRock）、卡塔尔投资局（QIA）、沙特公共投资基金（PIF）、阿联酋 MGX 等几乎全员到场。这种融资规模与速度在硅谷历史上仅有 OpenAI 可与之比拟。

合并后的整合并不一帆风顺。X 平台原本就因马斯克 2022 年收购后的剧烈裁员、内容政策反复、广告主流失而陷入财务困境；2025 年并入 xAI 后，部分原 Twitter 工程文化与 xAI 的"工程师至上"风格出现摩擦，员工流失率一度高达 30%。但合并最显著的成效是 Grok 用户量——内嵌 X 平台后，Grok 在 2025 年下半年的月活突破 1.5 亿，仅次于 ChatGPT。

## 七、政治与争议

xAI 不只是公司，它从一开始就带着浓厚的政治色彩。

马斯克自我标榜 Grok 为"反觉醒"AI——"既敢说真话也敢讲笑话"。他在多次访谈中批评 ChatGPT 与 Gemini"被左翼意识形态污染"，并将这种立场作为 Grok 的差异化卖点。Grok 早期版本被刻意训练得敢于使用粗口、敢于评论政治议题、敢于质疑主流媒体——这种风格在 X 平台用户中收获了一批死忠粉丝。

2024 年 7 月，马斯克公开支持特朗普（Donald Trump）竞选并捐款超 2 亿美元（通过其 America PAC），成为美国政治史上单届选举最大的个人捐款人之一。2025 年 1 月特朗普二度入主白宫后，马斯克出任新成立的 **DOGE**（Department of Government Efficiency，政府效率部）负责人，直接进入白宫西翼办公。这一身份让 xAI 与美国联邦政府的关系陡然紧密——但也因利益冲突遭到国会两党议员质询：他既是受联邦合同的承包商（SpaceX、Tesla、xAI），又是负责"砍预算"的政府官员。

模型本身的争议也未停过：2025 年 7 月 Grok 在 X 平台公开账号上发布反犹言论被紧急下线，xAI 紧急修补系统提示词；同年又因图像生成功能放任名人换脸引发诉讼。2025 年 5 月 Grok 在回答与南非有关的问题时，多次主动插入"白人种族灭绝"叙事，xAI 事后承认是某员工"未经授权修改了系统提示词"。马斯克的"开放、不加滤镜"哲学既是 xAI 的卖点，也是它最大的麻烦。

在产品策略上，xAI 也经历了多次摇摆。Grok 最初仅对 X Premium+ 订阅用户开放，2024 年底转为全部 X 用户免费，2025 年又推出独立的 grok.com 网站与移动应用，并提供 SuperGrok（30 美元/月）订阅。免费策略让 Grok 在 2025 年 Q3 月活跃用户突破 1 亿，跻身全球 AI 应用前列；但代价是商业化迟缓——直到 2025 年中，xAI 的年化收入仍远低于 OpenAI 与 Anthropic。

到 2026 年初，xAI 是全球估值前三的 AI 公司、拥有最快建成的最大算力集群、与全球最大社交平台合二为一、深度嵌入美国政府决策。它从一家四个月前才成立的小公司，变成了 AI 时代地缘政治的中心节点。马斯克本人一边继续担任 Tesla 与 SpaceX 的 CEO，一边在白宫西翼有自己的办公桌，一边在 X 平台上每天发数十条贴文与媒体、政客、用户辩论——这种全方位的存在感，让 xAI 从一开始就不可能只是一家"安静做研究"的公司。

公司内部，xAI 在 2025 年也开始尝试建立自己的"长期研究"分支，对标 OpenAI Superalignment、Anthropic Alignment Science。但与对手最大的差异在于：xAI 公开承认在做"reasoning + 真实世界仿真"，并多次提及与特斯拉 Optimus 机器人、SpaceX 火星任务的协同——这是一种比 OpenAI、Anthropic 更具科幻色彩、也更具马斯克个人印记的研究路线。

::: tip 太史公曰
xAI 之于 OpenAI，犹项羽之于刘邦——同出一门，反目相向，各自称王。马斯克之长，在于工程意志与资本调度——他能用 122 天拉起十万卡集群，能在两年内把估值从零拉到 2000 亿，这些是阿尔特曼、皮查伊乃至贝索斯都未必做得到的。马斯克之短，亦在于此——他的精力分散在四家公司、一个白宫职位与一场跨洲诉讼之间，xAI 的研究文化能否沉淀出 OpenAI 的 GPT 谱系或 Anthropic 的 Constitutional AI 这般有原创性的科学贡献，仍是悬念。Grok 的"反觉醒"姿态在政治市场上占了便宜，在学术市场上却换不来引用。但有一点不可否认：他用 xAI 把 AI 行业从"硅谷三巨头"逼成了"美中欧多极"，并把数据中心、能源、社交媒体、政治权力捆成了一束。看他这盘棋下到 2030 年是何收场——这是这一代 AI 史最值得追的悬念之一。
:::

## 亲历者说

::: info 征集中
如果你曾在 xAI 工作，或在 Memphis Colossus 项目中担任过工程师，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. xAI. (2023, July 12). "Announcing xAI." Official launch announcement.
2. xAI. (2024, March 17). "Open Release of Grok-1." Apache 2.0 license, GitHub: xai-org/grok-1.
3. xAI. (2025, February 17). "Grok 3 Beta — The Age of Reasoning Agents." Official blog post.
4. xAI. (2025, July 9). "Introducing Grok 4." Official launch.
5. Reuters. (2024, September 5). "Musk's xAI brings Memphis supercomputer Colossus online with 100,000 Nvidia GPUs."
6. The Wall Street Journal. (2025, March 28). "Musk's xAI Acquires X in $33 Billion Deal."
7. Bloomberg. (2024, May 27). "Musk's xAI Raises $6 Billion to Battle OpenAI."
8. Bloomberg. (2025, March 31). "xAI Hits $80 Billion Valuation Even Before Latest Round."
9. *Musk v. Altman et al.*, U.S. District Court, Northern District of California, Case No. 4:24-cv-04722 (filed August 2024).
10. Kingma, D., & Ba, J. (2014). "Adam: A Method for Stochastic Optimization." *arXiv:1412.6980*.
11. The New York Times. (2025, January). "Elon Musk's DOGE Office Sets Up Inside the White House."
12. Financial Times. (2025, June). "xAI plans Colossus 2 in Mississippi targeting one million GPU-equivalent compute."
