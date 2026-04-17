# 世家 · 英伟达（NVIDIA）

> 一家最初为游戏玩家造显卡的公司，意外成为整个 AI 时代的地基。没有它的 GPU 与 CUDA，就没有深度学习革命；而它自己，也从硅谷的众多芯片创业公司中脱颖而出，在 2025 年成为人类历史上第一家市值突破 4 万亿美元的企业。

## 丹尼餐厅里的三个人

1993 年 4 月，美国加州圣何塞（San Jose）东郊一家名叫 Denny's 的 24 小时连锁餐厅。30 岁的 <Person id="huang" />、34 岁的克里斯·马拉乔夫斯基（Chris Malachowsky）和 32 岁的柯蒂斯·普里姆（Curtis Priem）坐在咖啡杯和培根之间，讨论一个赌注——个人电脑即将需要一块专门的芯片来处理 3D 图形，而当时的 CPU 根本顾不过来。

三人背景各异。黄仁勋 9 岁从台湾移民美国，是俄勒冈州立大学电机工程学士、斯坦福大学硕士，此前在超微半导体（AMD）和 LSI Logic 做过芯片设计；马拉乔夫斯基来自太阳微系统（Sun Microsystems），是硬件工程专家；普里姆则在 IBM 和 Sun 设计过图形芯片，被视为天才架构师。他们凑了 4 万美元启动资金，公司名称取自拉丁语 *invidia*（妒忌）和他们最初给文件命名时常用的 "NV"（next version），合成"NVIDIA"。

公司的头几年并不顺利。1995 年推出的第一款产品 NV1，试图同时做图形、音频和游戏手柄控制，却因为押错了技术路线（二次曲面渲染而非后来成为主流的三角形）几乎让公司破产。黄仁勋后来多次讲述那段日子：账面现金只够维持三十天，他把剩余员工召集起来说——"我们要么彻底改一次方向，要么回家"。

公司活了下来。1997 年的 RIVA 128 和 1998 年的 RIVA TNT 系列让 NVIDIA 在 3D 游戏显卡市场站稳脚跟，与当时如日中天的 3dfx Interactive 正面交锋。到 1999 年 1 月，NVIDIA 在纳斯达克上市；同年 8 月，它发布了一款改变命运的产品——GeForce 256。

## GPU 的诞生：从画面到并行

GeForce 256 的发布广告里，NVIDIA 第一次用了一个新词："the world's first GPU"。GPU（图形处理器，Graphics Processing Unit）这个术语就是在这一刻被定义的：一块每秒能处理至少一千万个多边形、内置硬件变换与光照（T&L）引擎的可编程芯片。它把原本由 CPU 负责的 3D 数学运算彻底卸载，让个人电脑第一次可以流畅运行《雷神之锤 III》和《半条命》这样的 3D 游戏。

2000 年，NVIDIA 以 7000 万美元收购了已经破产的老对手 3dfx，吸收其大部分工程师，从此独步 PC 游戏显卡市场。2001 年的 GeForce 3 首次引入可编程着色器（programmable shader），开发者可以自己写小段程序告诉 GPU 如何处理每一个像素、每一个顶点。

这一步看似只是让游戏更漂亮，实际上却在硬件层面埋下了整个 AI 时代的伏笔：GPU 从此不再是一块"画画的"固定功能芯片，而是一个**拥有数百个并行计算单元的可编程处理器**。敏锐的学术界很快嗅到了机会。2003 年前后，斯坦福、北卡罗来纳等高校的研究者开始尝试用像素着色器跑矩阵乘法、流体模拟——这种"滥用"图形管线的做法被称作 GPGPU（General-Purpose computing on GPU），但写起来极其痛苦：你必须把科学计算伪装成一张贴图。

黄仁勋看到了这个机会。

## CUDA：一场被华尔街嘲笑的长赌

2004 年，NVIDIA 招来了刚从斯坦福博士毕业的伊恩·巴克（Ian Buck）。巴克的博士论文就是 Brook——一种让 GPU 像并行处理器一样编程的流式语言。他加入 NVIDIA 后主导的项目，后来被命名为 **CUDA**（Compute Unified Device Architecture，统一计算设备架构）。

2006 年 11 月，与 GeForce 8800 GTX 同步发布的 CUDA 1.0，第一次让普通开发者可以用接近 C 语言的方式给 GPU 写通用计算程序。这是一个巨大的赌注：NVIDIA 在 GeForce 8 系列芯片里专门留出了面积给不属于图形管线的控制逻辑、调度器和共享内存，同时把 CUDA SDK 免费开放，还投入数千名工程师维护驱动和库。

华尔街当时并不买账。游戏业务本就利润微薄，为一个"科学家们可能会用"的平台年年烧掉数亿美元研发，被不少分析师视为黄仁勋的执念。从 2008 年金融危机到 2012 年，NVIDIA 的股价长期徘徊在个位数到十几美元之间，市值常年不到 100 亿美元。

但大学实验室和国家超算中心开始行动。橡树岭国家实验室、瑞士 CSCS、东京工业大学相继上线以 Tesla GPU 为核心的超级计算机；分子动力学、地震模拟、金融定价领域一个接一个地被 CUDA 改写。最关键的是，一群搞神经网络的边缘研究者也注意到了它。

## 与深度学习的命运邂逅

2009 年，斯坦福大学的 <Person id="ng" /> 和博士生拉亚特·莱纳（Rajat Raina）发表论文 *Large-scale Deep Unsupervised Learning using Graphics Processors*，用两块 GeForce GTX 280 训练一个拥有上亿参数的深度置信网络，**比当时的 CPU 集群快约 70 倍**。这是 GPU 第一次被严肃用于训练大规模神经网络。

三年后的 2012 年 9 月，多伦多大学的 <Person id="hinton" /> 团队震动了整个计算机视觉界。<Person id="krizhevsky" /> 和伊利亚·苏茨克维（后来的 <Person id="sutskever" />）用**两块 GeForce GTX 580 游戏显卡**，训练出一个八层卷积神经网络 AlexNet，在 ImageNet 图像识别比赛中把错误率从第二名的 26.2% 一举降到 15.3%。训练代码是 Krizhevsky 亲手写的 cuda-convnet，一行行 CUDA C++ 堆出来的矩阵乘法。

那一刻，世界上所有做视觉、语音、NLP 的研究者都明白了同一件事：未来的算法必须跑在 GPU 上。而全世界能跑深度学习的 GPU，只有一家公司在卖。

## 从 Tesla 到 Blackwell：算力阶梯

AlexNet 之后，NVIDIA 的数据中心 GPU 走上了一条近乎等差加速的发展路线，每一代都以一位物理学家或天文学家命名：

- **Kepler**（2012，开普勒）：K20、K40，AlexNet 同时代产品，第一代真正意义上为科学计算优化的 GPU；
- **Maxwell**（2014，麦克斯韦）：能效大幅提升；
- **Pascal**（2016，帕斯卡）：P100 引入 NVLink 高速互连和半精度（FP16）运算，专为深度学习设计；
- **Volta**（2017，伏特）：V100 首次加入张量核心（Tensor Core），针对矩阵乘法做硬件加速，成为 GPT-2 等早期大模型的主力；
- **Ampere**（2020，安培）：A100 把张量核心扩展到 TF32、BF16，单卡显存从 40 GB 提升到 80 GB，成为 GPT-3 时代的绝对主角；
- **Hopper**（2022，霍珀）：H100 引入 Transformer Engine，FP8 精度让训练速度再翻一倍，是 GPT-4、Claude、Gemini 等一代旗舰模型的训练平台；
- **Blackwell**（2024，布莱克韦尔）：B100/B200 两颗裸片通过 10 TB/s 互连封装成一颗 GPU，单颗芯片 AI 算力达到 H100 的 2.5 倍，GB200 NVL72 整机柜把 72 张 B200 用铜缆 NVLink 串成一颗"虚拟超级 GPU"；
- **Rubin**（2026，鲁宾）：黄仁勋已在 GTC 宣布的下一代架构，以女天文学家 Vera Rubin 命名，将于 2026 年进入量产。

每一代之间不过两到三年，算力却以近十倍的速率跃升——这条曲线已经把摩尔定律甩在身后。业界戏称之为"黄氏定律"（Huang's Law）。

## CUDA 的护城河

硬件只是可见的那一半。NVIDIA 真正深不可测的是软件栈。

**cuDNN**（深度神经网络库）封装了卷积、RNN、Attention 等基本算子；**NCCL** 负责多卡多机之间的集合通信；**TensorRT** 把训练好的模型编译为极致优化的推理引擎；**Triton 推理服务器**管理模型部署；**Megatron-LM** 提供训练万亿参数模型的并行框架；**NeMo** 面向 LLM 定制训练；**RAPIDS** 让数据科学家用 GPU 跑 pandas 和 scikit-learn。

这套生态的厉害之处在于**时间**——从 2007 年 CUDA 1.0 至 2026 年近二十年的持续投入，已经积累了数万个开源项目、数百万开发者、数千所高校的课程。PyTorch 的底层算子几乎逐一对应 cuDNN 调用；TensorFlow、JAX、MLX 也莫不如此。即便 AMD 的 ROCm、英特尔的 OneAPI 在硬件层面赶了上来，要想复制整套软件栈，至少还需要十年。

竞争对手如 Cerebras、Graphcore、SambaNova 都尝试过另起炉灶，但没有一家能在生态上撼动 CUDA。到 2025 年，全球 AI 研究者每发表一篇论文，几乎默认代码能用 `pip install` 在一块 NVIDIA GPU 上跑起来——这就是护城河。

## 大模型时代：一卡难求

2022 年 11 月，OpenAI 发布 ChatGPT。两个月内，全球科技巨头意识到：谁有更多 H100，谁就能训练更大、更好的模型。

2023 年起，NVIDIA 的 H100 变成了硬通货。OpenAI、微软、谷歌、Meta、Anthropic、xAI、字节跳动、阿里巴巴、百度争相下单，订单一路排到两年以后。一块 H100 在二级市场被炒到 4 万美元以上，整机柜的 DGX H100 系统被包机空运，像 20 世纪初的石油一样成为战略资源。

这种疯狂直接反映在财报上。NVIDIA **2025 财年**（截至 2025 年 1 月，以日历年 2024 为主）总营收 **1305 亿美元**，同比增长 **114%**，其中数据中心业务贡献约 1150 亿美元——相比 2023 财年的 150 亿美元，两年翻了近八倍。2025 财年四季度单季数据中心收入 356 亿美元，同比再增 93%。

市值的曲线比营收更夸张：2020 年初约 1500 亿美元；2021 年底 7300 亿美元；2023 年 6 月首次突破 1 万亿美元；2024 年 2 月突破 2 万亿美元，6 月短暂超过微软、苹果，成为全球市值第一的公司，首次突破 3 万亿美元；**2025 年 7 月成为人类历史上第一家市值达到 4 万亿美元的公司**；2025 年 10 月一度触及 5 万亿美元。到 2026 年 4 月，NVIDIA 市值稳定在约 4.8 万亿美元左右，是全球市值最高的企业。

## DeepSeek 震撼与 CoWoS 瓶颈

然而神话并非没有裂缝。

**2024 年**开始，全球 AI 芯片的真正瓶颈不再是 GPU 本身，而是台积电的 **CoWoS**（Chip-on-Wafer-on-Substrate）先进封装产能。H100、B200 都需要 CoWoS 把 HBM 高带宽内存和计算芯片堆叠在一起；而全球 CoWoS 月产能一度卡在 3 万片晶圆左右，被 NVIDIA 几乎独占，也成为所有 AI 大模型交付节奏的隐形节拍器。

更大的冲击来自 **2025 年 1 月 27 日**。中国公司 DeepSeek 发布 R1 推理模型，宣称仅用约 600 万美元和约 2000 张 H800（H100 的对华特供版）就训练出媲美 GPT-4 的模型。消息传出当天，NVIDIA 股价单日下跌 **17%**，市值蒸发约 **5890 亿美元**——**美国股市历史上最大单日市值损失**。华尔街第一次认真问：如果模型可以更高效地训练，我们还需要那么多 GPU 吗？

黄仁勋几周后在 GTC 大会上给出了自己的回答："推理模型需要更多算力，不是更少——因为它要在回答之前思考。" 事实也支持他：DeepSeek 之后的几个月里，B200 订单不降反升，整个 Blackwell 产品线到 **2026 年年中之前已全部售罄**，积压订单据报道超过 360 万颗。

## 收购 ARM 的失败与野心的重塑

在大模型狂潮之前，NVIDIA 曾试图通过一次超级收购重塑半导体版图。

2020 年 9 月，NVIDIA 宣布以 400 亿美元现金加股票的价格收购英国芯片设计公司 ARM——全球最主流的移动和嵌入式 CPU 架构公司，其授权的 CPU 核存在于几乎每一部手机里。这是半导体史上规模最大的交易。然而，该交易在全球引发强烈反垄断担忧：ARM 原本向所有公司（包括苹果、高通、华为）中立地授权，被 NVIDIA 收购后会不会偏袒自家？2022 年 2 月，在美国 FTC、欧盟、英国 CMA 和中国监管机构的联合反对下，NVIDIA 宣布放弃收购，向软银支付 12.5 亿美元分手费。

这场失败让 NVIDIA 转向自研 CPU。2023 年推出的 Grace CPU（72 核 ARM 架构服务器 CPU）与 Hopper GPU 组成 **GH200 超级芯片**；2024 年 Blackwell 时代的 **GB200** 则把 1 颗 Grace 和 2 颗 B200 绑在同一块模组上，通过 NVLink-C2C 实现 900 GB/s 的 CPU-GPU 互连，成为超大模型训练的标配形态。

## 从硬件厂商到全栈 AI 公司

到 2026 年的 NVIDIA，已经远不是"只卖显卡"的公司。

**Nemotron 系列**：NVIDIA 自研的大语言模型家族，开源权重，参数规模从几十亿到超 3000 亿不等，主要用于为客户提供可本地部署的高质量基础模型。

**Project GR00T**：2024 年 3 月 GTC 发布的人形机器人基础模型项目，目标是为人形机器人提供类似 GPT 之于对话的通用大脑，已被 Figure、Agility、小鹏等公司接入。

**Omniverse**：基于 USD（Universal Scene Description）的工业数字孪生平台，被宝马、西门子、富士康用于工厂仿真；同时也是机器人训练的合成数据工场。

**DGX Cloud**：把自家的 DGX 超算以云服务形式租给客户，绕过传统云厂商。

**NVIDIA AI Foundations**：为企业定制基础模型的全栈服务。

**Drive Thor**：车载 AI 计算平台，比亚迪、梅赛德斯-奔驰、捷豹路虎的下一代智能汽车已经在用。

**网络业务**：2019 年以 69 亿美元收购 Mellanox，把 InfiniBand 和 Spectrum 以太网收入囊中；2024 年起，网络收入已经超过 100 亿美元，支撑了整个 AI 工厂（AI Factory）的互联。

黄仁勋称这种转变为"AI 工厂"——一座数据中心不再只是一组服务器，而是一台**生产智能的机器**。而 NVIDIA 要做的，是提供这台机器里从芯片、网络、系统、软件到模型的几乎全部组件。

## 首席科学家与工程文化

支撑这一切的，是一支极为专业的工程团队。2009 年加入 NVIDIA 任首席科学家的比尔·达利（Bill Dally）来自斯坦福，是并行计算与片上网络领域的权威。他领导的 NVIDIA Research 实验室长期保持约 300 人规模，负责前瞻性架构研究，从光学互连到稀疏计算、从低精度训练到芯片级硅光子。

黄仁勋本人保持了硅谷罕见的执掌长度——从 1993 年创立至 2026 年，他已经连续担任 CEO 超过 33 年，是财富 500 强中任期最长的创始 CEO 之一。他以高强度工作和扁平化管理著称：据说他直接向 60 多名高管汇报，没有传统意义上的 1-on-1，所有重要决策在邮件群和站会上公开讨论。他常穿的皮夹克、一次次 GTC 上的 keynote、"The more you buy, the more you save"（买得越多省得越多）的经典台词，已经成为 AI 时代的流行文化符号。

## 太史公曰

::: tip 太史公曰
观 NVIDIA 三十三年之兴，其道有三。

其一，**长期主义**。CUDA 自 2006 年始，十五年无问津而黄生不辍；及至 AlexNet 一出，天下乃觉 GPU 为神算之器，NVIDIA 已独据其市。此非一日之功，乃十余载押注之果。

其二，**软硬并举**。世之做芯片者众，或有速度之利，或有能效之优，然未有能成生态者。NVIDIA 之胜，半在 Tensor Core，半在 cuDNN、NCCL、TensorRT 数十个库——护城河非以石筑，而以时与码筑之。

其三，**顺势而为**。从游戏到科学计算，从科学计算到深度学习，从深度学习到大模型，从大模型到具身智能，每一次转折黄生都在前三年已下注。不是预言家，只是准备好的人恰好站在门口。

然富贵之极，必有隐忧。DeepSeek 一役，市值一日蒸发 5890 亿美元，提醒世人：算力不是信仰，效率终会回归；CoWoS 为瓶颈，亦让我们看到再强大的公司，也被一条产线扼住咽喉。**护城河深，但河对岸也从未真正安静。**
:::

## 亲历者说

::: info 征集中
如果你曾在 NVIDIA 工作，或者使用 CUDA 开展过研究、用 GeForce 训练过你的第一个神经网络，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Jensen Huang, "NVIDIA Founder Story: From Denny's to the GPU Revolution," Stanford GSB talk, 2023.
2. Tae Kim, *The Nvidia Way: Jensen Huang and the Making of a Tech Giant*, W. W. Norton, 2024.
3. NVIDIA Corporation, *"NVIDIA Launches the World's First Graphics Processing Unit: GeForce 256,"* Press Release, Aug 31, 1999.
4. Ian Buck, *"GPU Computing with NVIDIA CUDA,"* SIGGRAPH Courses, 2007.
5. Rajat Raina, Anand Madhavan, Andrew Ng, *"Large-scale Deep Unsupervised Learning using Graphics Processors,"* ICML 2009.
6. Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton, *"ImageNet Classification with Deep Convolutional Neural Networks,"* NeurIPS 2012.
7. NVIDIA, *"NVIDIA Announces Financial Results for Fourth Quarter and Fiscal 2025,"* Feb 26, 2025.
8. Al Jazeera, *"Nvidia becomes first US company to reach $4 trillion market cap,"* Jul 9, 2025.
9. CNBC, *"Nvidia sheds almost $600 billion in market cap, biggest one-day loss in U.S. history,"* Jan 27, 2025.
10. Fortune, *"Jensen Huang says investors got it wrong over DeepSeek stock selloff,"* Feb 21, 2025.
11. NVIDIA, *"NVIDIA Blackwell Platform Arrives to Power a New Era of Computing,"* GTC Keynote, Mar 18, 2024.
12. Financial Times, *"Nvidia abandons $66bn Arm takeover bid,"* Feb 8, 2022.
