# 书 · 美国 AI 发展史

> AI 这个词诞生在美国新罕布什尔州的一座学院，七十年后依然在加州的几间公司里被改写。从达特茅斯的暑期会议到硅谷的算力军备，从五角大楼的科研合同到曼哈顿东面的一间办公室里写下的 OpenAI 章程——美国 AI 的故事，是大学、军方、资本与移民四股力量交织出来的一张巨网。它不是某一位天才的胜利，而是一种制度的胜利。

## 一、起源：四足鼎立的学术地理（1956—1990）

1956 年夏，<Person id="mccarthy" /> 在新罕布什尔州达特茅斯学院召集了一场两个月的研讨会，与会者包括 <Person id="minsky" />、<Person id="shannon" />、<Person id="rochester" /> 等十人。在那份由 <Person id="mccarthy" /> 起草的提案里，"Artificial Intelligence"一词第一次以正式学术身份出现。从那个夏天起，美国 AI 的版图就以四个学术重镇为支柱铺开。

麻省理工学院（MIT）在 1959 年由 <Person id="mccarthy" /> 与 <Person id="minsky" /> 共同创立人工智能项目，后来分裂为 AI Lab 与符号派的根据地。斯坦福大学（Stanford）由 <Person id="mccarthy" /> 1962 年南下创建 SAIL（Stanford AI Lab），主攻机器人与逻辑推理；<Person id="feigenbaum" /> 则把它推进专家系统时代，DENDRAL 与 MYCIN 成为符号派的最高成就。卡内基梅隆大学（CMU）由 <Person id="newell" /> 与 <Person id="simon" /> 主导，从 Logic Theorist 一路走到 Soong-2 围棋程序，是认知科学与 AI 的交叉发源地。新泽西的贝尔实验室则在另一条路径上深耕——<Person id="shannon" /> 的信息论遗产、<Person id="vapnik" /> 与 <Person id="cortes" /> 的支持向量机，以及 <Person id="lecun" /> 1989 年的卷积网络手写邮编识别，皆诞生于此。

这四足鼎立的格局，至今仍是美国 AI 学术的骨架。

## 二、DARPA 的隐形之手

如果说大学提供了头脑，五角大楼提供的则是钱、问题和耐心。

1958 年艾森豪威尔签署成立的 ARPA（后改名 DARPA），从一开始就把 AI 列为重点资助方向。1960 年代，DARPA 几乎独力撑起了 MIT、Stanford、CMU 三校的 AI 研究经费；1970 年代它资助 SUR（Speech Understanding Research）孵化出 CMU 的 Harpy 语音识别系统；1980 年代的战略计算计划（Strategic Computing Initiative）投入十亿美元押注下一代 AI 与并行计算。

DARPA 真正的天才之处不在于它选对了哪个项目，而在于它能容忍连续失败。<Person id="lighthill" /> 报告之后欧洲全面砍掉 AI 经费时，DARPA 顶住压力继续注资。2004 年首届 DARPA 大挑战（Grand Challenge）上，所有参赛车辆全部抛锚在莫哈维沙漠；一年后第二届，斯坦福的 Stanley 完成 212 公里全程，特龙（Sebastian Thrun）随即被谷歌邀去开创无人车项目。互联网（ARPANET）、GPS、Siri、自动驾驶——这些被视为美国科技标志的产物，几乎都打着 DARPA 早期合同的水印。

军方花的是纳税人的钱，孵化出的却往往是民间最赚钱的产业。

## 三、互联网时代：搜索与推荐的统治（1995—2010）

1990 年代中期，万维网把美国 AI 的应用场景从实验室猛地推向了亿级用户。

1998 年，<Person id="page" /> 与 <Person id="brin" /> 在斯坦福的一篇博士工作论文里提出 PageRank，把网页的重要性建模为图上的特征向量。Google 由此诞生，并在十年内成为人类有史以来最大的信息检索系统。Yahoo、Amazon、eBay 纷纷把机器学习塞进搜索、推荐、反欺诈的每一层管线里。<Person id="breiman" /> 1990 年代发展的随机森林，<Person id="vapnik" /> 与 <Person id="cortes" /> 的 SVM，<Person id="pearl" /> 的贝叶斯网络——这些理论的工业化变现，几乎全部发生在硅谷。

互联网时代的第一桶金不是大模型，而是排序、点击率预估和广告竞价。它训练出了一代懂数据、懂工程、懂商业的"机器学习工程师"，为日后深度学习的产业化储备了人。

## 四、深度学习与硅谷的合流（2012—2018）

2012 年 ImageNet 之后，<Person id="hinton" /> 的两位学生 <Person id="krizhevsky" /> 与 <Person id="sutskever" /> 与导师一起，在多伦多注册了一家名为 DNNresearch 的小公司。次年初，谷歌以未公开金额买下这家三人公司——不要技术，要人。<Person id="hinton" /> 兼职加入 Google Brain，迪恩（Jeff Dean）领导的这支团队此后成为深度学习产业化的总指挥部。

2013 年底，<Person id="lecun" /> 接受扎克伯格（Mark Zuckerberg）邀请，创立 Facebook AI Research（FAIR）。同年，<Person id="ng" /> 离开斯坦福，先后执掌百度、Coursera。2014 年 1 月，谷歌以约 6 亿美元收购伦敦的 DeepMind——三家美国巨头各自圈下了一支顶级深度学习团队。

苹果的入局相对低调。2016 年起，<Person id="federighi" /> 在 WWDC 开始系统介绍 Core ML 与设备端神经网络；2018 年苹果挖来 <Person id="jgiannandrea" />（前 Google 搜索与 AI 主管），统一管理机器学习与 Siri。亚马逊则把深度学习塞进 Alexa、推荐与 AWS GPU 实例的销售里。

到 2018 年，美国五大科技巨头各自配齐了 AI 实验室、自有大数据、自有云算力，垂直整合的飞轮已经成型。

## 五、OpenAI 与"创业 AI"时代（2015—2025）

2015 年 12 月，<Person id="altman" />、<Person id="musk" />、<Person id="sutskever" /> 等十一人在旧金山一家酒店宣布成立 OpenAI，初始承诺资金 10 亿美元。它的章程原本是非营利、开源、对抗 DeepMind 的垄断。八年之后，这三条几乎全部反转——OpenAI 转为有上限营利结构，把 GPT-2 之后的权重大多数留作闭源，并在 2023 年成为全球估值最高的 AI 公司。

2021 年，<Person id="amodei" /> 兄妹与七位 OpenAI 安全研究员出走，在旧金山创立 Anthropic，主打"宪法 AI"与对齐研究，2024 年推出的 Claude 3 系列在多个基准上首次追上 GPT-4。2023 年 7 月，<Person id="musk" /> 注册 xAI，半年后发布 Grok，把 X 平台与大模型绑在一起。

旧金山几个街区的小生态——OpenAI 总部所在的 Mission Bay、Anthropic 的 SoMa、Hugging Face 的 Brooklyn 远程办公——把"创业 AI 时代"的高光浓缩在不到二十平方公里的范围内。<Person id="karpathy" /> 在 2024 年的一次演讲中评论："过去六十年 AI 是一场学术运动，现在它第一次彻底是一场创业运动。"

## 六、算力霸权：<Person id="huang" /> 与 NVIDIA 的崛起

没有 NVIDIA，就没有今天的美国 AI。

1993 年成立的 NVIDIA 最初只是一家做显卡的二线厂商。2006 年 <Person id="huang" /> 拍板推出 CUDA——一个把 GPU 从图形渲染解放成通用并行计算的编程接口——在当时看来是一次纯粹的赌博。2012 年 AlexNet 用两块 GTX 580 训练出 ImageNet 冠军，CUDA 的赌注一夜兑现。

此后十二年，NVIDIA 几乎垄断了全球 AI 加速器市场。2020 年的 A100、2022 年的 H100、2024 年的 Blackwell B200，一代比一代更紧地绑定整个行业的训练管线。CUDA 生态、NVLink 互联、InfiniBand 网络、Mellanox 收购，构成了一道几乎无法绕过的护城河。2024 年 6 月，NVIDIA 市值短暂超过苹果与微软，登顶全球。<Person id="huang" /> 那身永不脱下的黑色皮夹克，成了这个时代算力霸权的象征。

## 七、出口管制与中美 AI 竞赛

2022 年 10 月 7 日，美国商务部工业与安全局（BIS）发布对华先进半导体出口管制新规，A100/H100 等高端 GPU 首次被明确列入禁运清单。2023 年 10 月规则收紧，连为中国市场特供的 A800/H800 也被堵死。2024 年 12 月，新一轮规则把 HBM 高带宽内存与部分半导体设备一并纳入。

这是冷战之后美国第一次以"算力"为单位划出技术国境线。它催生了 DeepSeek 在 H800 上极致优化的 R1 时刻，也催生了华为昇腾、寒武纪、摩尔线程等一批国产替代。在华盛顿的政策圈，"出口管制 + 联盟管制 + 投资审查"被合称为"小院高墙"，2025 年特朗普第二任期延续并加码了这一战略。

中美 AI 竞赛由此从一场技术比赛，演变为一场制度与供应链的对决。

## 八、美国 AI 的"三角"结构

如果要用一句话概括美国 AI 的优势，那就是大学、企业与资本三角的紧密耦合。

斯坦福、MIT、CMU、Berkeley、UW、Princeton、Cornell 与 NYU 八所学校供给绝大部分顶级博士生；Google、Meta、Microsoft、Apple、Amazon、NVIDIA、OpenAI、Anthropic 提供工业级算力与数据；Sand Hill Road 上的红杉、A16Z、Founders Fund，以及 Tiger Global、Coatue 等成长基金，则负责把研究成果在三到五年内推到上市估值。

这三个角点之间的人才流动几乎没有摩擦：一位斯坦福博士可以毕业后入职 OpenAI，三年后离职创业拿到 a16z 领投的种子轮，五年后被 Google 收购。这是欧洲、日本、中国都尚未完全复制的速度。

## 九、风险投资的支撑：从 Sand Hill Road 到 a16z

美国 AI 之所以能持续把"研究"变成"产品"，离不开一条独特的资本通道。

1972 年成立的红杉资本（Sequoia Capital）与凯鹏华盈（KPCB）开创了硅谷风投模式；2009 年成立的 a16z（Andreessen Horowitz）则把"软件吞噬世界"的论调变成了一代创业者的圣经。2023—2025 年的 AI 浪潮中，OpenAI 单家公司就累计融资超过 600 亿美元，估值在 2025 年 10 月触及 5000 亿美元；Anthropic 估值 1830 亿美元；xAI 估值约 2000 亿美元。这些数字若放在任何一个非美国市场，都几乎不可想象。

值得注意的是，AI 大模型时代的主要资本方不再是传统 VC，而是云厂商：Microsoft 押注 OpenAI、Amazon 与 Google 共同押注 Anthropic、Oracle 与 NVIDIA 押注算力承包商。投资变成了"算力换股权"，资本与计算正在合并为同一种商品。

## 十、一个未解的悬念

美国 AI 的优势在 2026 年仍然显赫，但裂缝也已显形：算力集中度过高、模型透明度逐年下降、AI 军用化与失业焦虑同时上升、版权诉讼此起彼伏（《纽约时报》诉 OpenAI、Getty Images 诉 Stability AI 等案件均在审理中）、国会立法迟缓而州法（如加州 SB 1047）则在 2025 年继续被否决与重提之间反复。

一句话——美国 AI 仍在领跑，但它必须回答一个旧问题：当一项技术既改变国家、也威胁国家时，谁来制衡谁？

---

::: tip 太史公曰
余观美国 AI 七十年史，叹其制度之厚而非天才之奇。达特茅斯十人会上，<Person id="mccarthy" /> 不过提出一个新名词，却恰逢冷战军费、移民红利、计算革命三股大潮交汇——大学敢花国家的钱做无用之事，DARPA 敢押二十年看不到回报的方向，硅谷敢拿养老金去赌一家两年没收入的公司。此非一人之功，乃一制之果。神经网络数次被埋葬于美国，又数次被美国挖出——明斯基扼之于 1969，辛顿入籍多伦多再返之于 2012，OpenAI 起于非营利又转身入营利。技术之兴衰从不直线，制度之韧性方为根本。然今日之美国，亦非无忧。算力垄于五家，估值聚于湾区，立法滞于争吵，军用与民用之界日渐模糊。昔者罗马以兼容并蓄而霸地中海，亦以排外封闭而失天下。美国 AI 若欲延其荣，当问者非"如何赢"，而是"如何不重蹈神经网络寒冬之路"——切勿以一时之共识，扼杀下一个被嘲笑的异端。
:::

## 亲历者说

::: info 征集中
如果你曾在美国参与 AI 研究或产业实践，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. McCarthy, J., Minsky, M., Rochester, N., & Shannon, C. (1955). *A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence*.
2. Roland, A., & Shiman, P. (2002). *Strategic Computing: DARPA and the Quest for Machine Intelligence, 1983–1993*. MIT Press.
3. Brin, S., & Page, L. (1998). The anatomy of a large-scale hypertextual web search engine. *Computer Networks and ISDN Systems*, 30(1-7), 107-117.
4. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *NeurIPS*.
5. OpenAI. (2015). *OpenAI Charter*. openai.com/charter.
6. U.S. Department of Commerce, Bureau of Industry and Security. (2022, Oct 7). *Implementation of Additional Export Controls: Certain Advanced Computing and Semiconductor Manufacturing Items*.
7. Anthropic. (2024). *The Claude 3 Model Family: Opus, Sonnet, Haiku*. Anthropic Technical Report.
8. Stanford HAI. (2025). *Artificial Intelligence Index Report 2025*.
