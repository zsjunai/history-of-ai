# 书 · AI 硬件与算力

> 没有硬件的进化，就没有深度学习的革命。从 CPU 到 GPU 到 TPU，从单卡训练到 10 万卡超级集群，从硅谷到东数西算，算力是人工智能进步最容易被忽视、却最难以替代的关键变量。算法是聚光灯下的主角，但真正决定时代节奏的，是埋在地下与山洞里的电缆、变压器和服务器机架。

## 一、芯片演进：从串行的瓶颈到并行的解放

故事的起点是一个被低估的限制：CPU 是为串行而生的。中央处理器（Central Processing Unit）的核心被设计成尽可能快地执行一连串指令，缓存层次复杂、分支预测精巧——但其浮点运算的并行度极其有限。神经网络的训练却几乎是反向需求：海量矩阵乘法、相同操作在不同数据上重复执行。

转机来自一个完全不相关的行业——电子游戏。1990 年代末，NVIDIA 与 ATI 为渲染 3D 图形而设计的图形处理器（Graphics Processing Unit, GPU）天然包含成百上千个并行流处理器。2007 年，<Person id="huang" />领导的 NVIDIA 推出 CUDA（Compute Unified Device Architecture），让开发者可以直接用类 C 语法在 GPU 上跑通用计算。这一举把 GPU 从"只懂渲染"的图形卡，变成了科学计算的廉价超算节点。

第一批吃螃蟹的人是机器学习研究者。2009 年，斯坦福<Person id="ng" />团队在 ICML 上发表论文，证明 GPU 训练深度网络比 CPU 快 70 倍。2012 年 10 月，<Person id="krizhevsky" />在两块 NVIDIA GTX 580 上训练出 AlexNet，将 ImageNet Top-5 错误率从 26.2% 砍到 16.4%。那一天起，GPU 与深度学习的命运被永远绑定。

2016 年，Google 公开 TPU（Tensor Processing Unit）——一块为机器学习推理量身定制的 ASIC。第一代 TPU 在 AlphaGo 与李世石对决中默默发力，第二代起开始训练用途；至 2024 年的 TPU v5p 与 v6（Trillium），每一代都在追逐"性能/瓦特/美元"三角的极限。

NVIDIA 仍是这场游戏的最大赢家。2020 年的 A100 重定义了大模型训练的标准；2022 年的 H100 引入 Transformer Engine 与 FP8 精度，几乎独占了 GPT-4 与 LLaMA 时代的训练算力；2024 年的 Blackwell 架构（B200、GB200 NVL72）把单机柜算力推向 1.4 EFLOPS。NVIDIA 市值在 2024 年 6 月首次突破 3 万亿美元，年中一度超越苹果与微软，成为全球第一。

挑战者从未停歇。Cerebras 把整片 12 寸晶圆做成一颗"WSE"超大芯片，4 万亿晶体管，主打不需切片的连续计算。Groq 走另一条路：抛弃 HBM 改用片上 SRAM，专攻推理的极致时延。AMD 在 2023 年发布 MI300X，正面对抗 H100。Intel 的 Gaudi 系列、英国 Graphcore 的 IPU、以色列 Habana 都在争夺 NVIDIA 难以兼顾的细分场景。中国厂商也已成阵：华为昇腾 910B/910C、寒武纪思元、百度昆仑芯、摩尔线程 MTT S4000——尽管制程被锁在 7 nm 一代，仍在国内训练市场迅速放量。

## 二、数据中心：从云计算到 AI 工厂

数据中心的形态正在被 AI 重塑。

过去十年，"云"是一种通用资源池，CPU 服务器叠满楼层，主要业务是网站、数据库、视频转码。GPT-3 之后，巨头们开始为大模型训练单独造楼——选址优先看输电容量与气候，机柜密度从 10 kW 飙升到 100 kW 以上，液冷取代风冷成为新标配。<Person id="huang" />在 2024 年 GTC 主题演讲中创造了一个新词："AI 工厂（AI Factory）"——把 token 当作产成品，把电力与 GPU 当作原料。

竞赛随即进入"百万卡时代"的前奏。

- xAI Colossus（孟菲斯，2024 年 7 月）：<Person id="musk" />团队在 122 天内建成 10 万张 H100 的训练集群，是史上最快投产的大型 AI 集群。2025 年初宣布扩展到 20 万卡，目标百万卡。
- Microsoft × OpenAI Stargate（2025 年 1 月公布）：四年内投入 5,000 亿美元建设新一代 AI 基础设施，首站位于德州 Abilene。
- Meta 自建集群：2024 年公开两套各 24,576 张 H100 的训练集群，并宣布 2024 年底前部署等价 60 万张 H100 的算力。
- Google：2024 年起在新建的 Hyperion 园区将 TPU v5p 集群规模推至 8,960 颗一组。

中国的"东数西算"工程则给出另一条路径——把电力富裕、气候适宜的西部地区（贵州、内蒙古、宁夏、甘肃、宁夏、四川）建成八大算力枢纽，与东部需求侧通过国家骨干网络打通。这是一项国家级规划：把算力当电力网来调度。

谁拥有算力，谁就拥有大模型时代的话语权——这一判断已不再需要论证。

## 三、算力经济学：从研究项目到军备开支

成本曲线是这个时代最惊人的曲线之一。

- GPT-3（2020）训练成本估算约 460 万美元；
- GPT-4（2023）约 6,000 万至 1 亿美元；
- 公开报道中，前沿训练任务在 2024 年已频频突破 5 亿美元上限；
- 业界对 GPT-5 / Gemini 3 / Claude 4 之类下一代模型的内部估算，单次训练已迈向 10 亿美元量级。

但训练只是冰山一角。模型一旦部署，推理（Inference）的边际成本会被亿万次调用放大。Sam Altman 多次公开承认，OpenAI 的推理支出已超过训练。NVIDIA 的财报里，Hopper 架构的 H100/H200 已不再只是训练芯片，更多用于部署侧；Groq、SambaNova、Tenstorrent、CerebrasInference 等推理专精厂商崛起，押注的正是这一长尾。

DeepSeek 在 2024 年底至 2025 年初的崛起，第一次向行业泼了一盆冷水。DeepSeek-V3 公开宣称训练成本约 558 万美元，DeepSeek-R1 用强化学习实现接近 GPT-o1 的推理能力——这两个数字让 NVIDIA 当日股价一度暴跌 17%，市值蒸发约 6,000 亿美元。"算力即一切"的信仰第一次被严肃质疑：稀疏化（Sparsity）、量化（Quantization）、专家混合（Mixture of Experts, MoE）、知识蒸馏（Distillation）等"软"技术的杠杆，可能比再多 10 万张 H100 更具决定性。

但这并不意味着算力竞赛结束。OpenAI、xAI、Anthropic 都在 2025 年宣布更激进的算力扩张计划。一个朴素的判断是：算法效率的红利会被立即用于训练更大的模型——节省下来的算力不会闲置，只会被吞噬到下一个数量级的实验里。

## 四、能耗与环境：电力成为新的瓶颈

最先察觉到 AI 真正瓶颈的不是芯片厂，而是电力公司。

国际能源署（IEA）2024 年报告估计，全球数据中心用电量将从 2022 年的 460 TWh 翻倍到 2026 年的 800–1,000 TWh，约等于日本全国年用电量。Goldman Sachs 在同年的报告中警告，美国电网在未来五年需新增 47 GW 数据中心专用电力——相当于在每个州都建一座大型电厂。

电力短缺催生了核能的复兴。

- 2024 年 9 月，Microsoft 与 Constellation Energy 签下 20 年购电协议，重启 1979 年因事故关闭的三里岛核电站 1 号机组（更名 Crane Clean Energy Center），全部电力供给微软的 AI 数据中心。
- 同年 10 月，Google 与 Kairos Power 签约采购小型模块化反应堆（SMR）的电力，目标 2030 年前部署。
- Amazon 收购了 Talen Energy 旗下的核电站附建数据中心。
- OpenAI 投资的核聚变公司 Helion 与 Microsoft 签署了 2028 年开始供电的协议。

冷却技术也在被改写。液冷与浸没冷却（Immersion Cooling）成为 100 kW/机柜以上密度的必选项。NVIDIA Blackwell 系列已默认采用直接到芯片的液冷管路（Direct-to-Chip Liquid Cooling），传统风冷逐渐退出训练数据中心。

可持续 AI 是一场效率提升与规模扩张的赛跑——算法变高效一倍，模型规模就被翻一番，碳足迹的总量曲线仍在向上。这是 AI 时代最尴尬的伦理悖论之一。

## 五、芯片禁令与算力地缘政治

2022 年 10 月 7 日，美国商务部工业与安全局（BIS）发布对华先进半导体出口管制新规，首次将先进 AI GPU（性能阈值大致围绕 H100）纳入限制。这一日是地缘政治史上的重要一夜——它标志着 AI 算力正式被列入"两用物项"。

NVIDIA 迅速为中国市场推出"特供版"H800、A800（核心阉割了高速互连），勉强维持出货。2023 年 10 月，BIS 加严规则，将 H800、A800、L40S 也纳入限制；NVIDIA 又推出更弱的 H20、L20。2024 年 12 月，BIS 又加码出口管制——围绕 HBM 内存、先进光刻机、设计工具，几乎覆盖了 AI 算力的全产业链。2025 年 4 月，H20 也被纳入逐案审批。

中国的应对呈现两条路径。

- 国产替代加速：华为昇腾 910B/910C 在 DeepSeek、阿里、字节、百度的训练任务中规模化部署；中芯国际（SMIC）量产 7 nm 工艺。
- 架构与软件创新：通过 MoE、低精度训练、跨集群弹性调度，在每一张可用卡的有效产出上做最大努力。DeepSeek-V3 与 R1 的成功被视为这一路径的首个标志性成果。

"算力铁幕"是越来越多人开始使用的词。它指的不只是硬件被切断，而是整个软件栈、模型权重、人才流动正在沿地缘界限被重新组织。同样的变化在欧盟、印度、海湾国家以不同方式上演——每个区域大国都在追问同一个问题：本国 AI 主权依赖于谁？

## 六、马斯克的算力版图

<Person id="musk" />在算力赛道上的进入方式与所有人不同——他不是一个 AI 公司创始人去采购算力，他是一个产业资本家在拼接一条全栈链路。

xAI 在 2023 年 7 月成立。一年后，孟菲斯郊外的 Colossus 集群上线，10 万张 H100 仅用 122 天完成部署，刷新了大型 AI 数据中心的建设速度纪录。2024 年底 Grok 3 发布时，背后正是这套设施。马斯克的下一步是"百万卡集群"，并罕见地与 OpenAI 直接竞争同一类电力与场地资源。

更深的图景是马斯克跨公司的"垂直整合"：

- 算力：xAI Colossus + 收购 Tesla 富余 GPU；
- 芯片：Tesla Dojo（D1 芯片，专攻自动驾驶视频训练）；
- 数据：Tesla 全球数百万辆车与 Optimus 机器人、X（前 Twitter）平台的实时社交数据流；
- 网络：Starlink 提供低延时的全球骨干，把"边缘 AI + 自动驾驶 + 机器人"统一在一张星座网下；
- 终端：Tesla Cybercab、Optimus、Neuralink。

是否成功是另一回事。但这一垂直整合的样板，正在被更多巨头悄悄学习——<Person id="huang" />在 GTC 2024 上谈到 NVIDIA 的"全栈愿景"时，所引用的逻辑与马斯克并无二致。

## 七、未来：物理定律的尽头

晶体管已逼近 1 nm 制程的物理边界。摩尔定律（Moore's Law）以纯硅工艺为基础的版本，正在熄火。下一阶段的算力红利从哪里来？

- 量子计算：2019 年 Google 宣称"量子优越性"，2024 年 12 月发布 Willow 量子芯片；IBM、本源量子、中国"九章"系列在小规模任务上展示加速。但对深度学习训练这种通用任务而言，量子优势仍在论证阶段。
- 光子计算：Lightmatter、Lightelligence、PsiQuantum 等公司用光波导执行矩阵乘法，能耗仅为电子计算的几十分之一。2024 年 Lightmatter 宣布 4 亿美元 D 轮融资，估值 44 亿美元。
- 类脑芯片：Intel Loihi 2、IBM NorthPole 用脉冲神经网络（Spiking Neural Networks）模拟生物神经元，主打超低功耗推理。
- 存内计算：Mythic、Sambanova、清华大学吴华强团队的 RRAM 阵列，把矩阵乘法直接做在存储单元里，绕过冯·诺依曼瓶颈（<Person id="vonneumann" />Bottleneck）。
- Chiplet 与 3D 堆叠：当单片硅的物理极限到来，把多个小芯片用先进封装（CoWoS、SoIC）连成"超级芯片"成为新的 Moore's Law。

最终的追问指向物理本身：单位能量下能进行多少次浮点运算？这是 Landauer 极限给出的硬天花板。在那之前，每一代硬件突破——无论 GPU、TPU、光子还是量子——都是在为同一个目标服务：让 AI 的训练与推理脱离能源与电网的桎梏。

算力之争，归根到底是能量之争。

---

::: tip 太史公曰
余观 AI 算力八十年，悟其势如江河——上游源远，中段汇流，下游则奔涌入海。CPU 时代之串行运算，似涓涓溪水；GPU 之并行架构，乃汪洋潮涌；至于今日万卡集群，则如大江大河，电力为水，硅片为帆。NVIDIA 一夜冠绝全球，其势岂止运气？黄仁勋之远见，在二十年前便押注 CUDA 生态——彼时无 AI 之名，已有并行之实。Google TPU 自有其雄心，xAI Colossus 一百二十二日成军，皆显巨头对算力之执念。然 DeepSeek 一夜震荡，又证算力非万能：算法效率与软件创新，仍可在硬件被锁时杀出血路。芯片禁令、东数西算、核电复兴、量子前夜——这些看似互不相关的新闻，实则同源：算力已是国之重器，其紧要程度堪比石油与电网。未来之 AI 竞争，半在算法，半在能源；半在芯片，半在外交。算力即权力，已非戏言，而是这个时代最坚硬的现实。
:::

## 亲历者说

::: info 征集中
如果你参与过 AI 芯片设计、数据中心建设或算力调度，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Raina, R., Madhavan, A., & Ng, A. Y. (2009). Large-scale deep unsupervised learning using graphics processors. *Proceedings of ICML 2009*, 873-880.
2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Advances in Neural Information Processing Systems*, 25.
3. Jouppi, N. P., Young, C., Patil, N., et al. (2017). In-datacenter performance analysis of a tensor processing unit. *Proceedings of ISCA 2017*, 1-12.
4. NVIDIA (2022). *NVIDIA H100 Tensor Core GPU Architecture White Paper*.
5. NVIDIA (2024). *NVIDIA Blackwell Architecture Technical Brief*.
6. Sevilla, J., Heim, L., Ho, A., et al. (2022). Compute trends across three eras of machine learning. *Proceedings of IJCNN 2022*.
7. Patterson, D., Gonzalez, J., Le, Q., et al. (2021). Carbon emissions and large neural network training. *arXiv preprint arXiv:2104.10350*.
8. International Energy Agency (2024). *Electricity 2024: Analysis and forecast to 2026*.
9. U.S. Department of Commerce, Bureau of Industry and Security (2022, October 7). Implementation of additional export controls: Certain advanced computing and semiconductor manufacturing items. *Federal Register*, 87 FR 62186.
10. DeepSeek-AI (2024). DeepSeek-V3 technical report. *arXiv preprint arXiv:2412.19437*.
11. DeepSeek-AI (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
12. Microsoft & Constellation Energy (2024, September 20). *Joint announcement: Three Mile Island Unit 1 restart agreement*.
