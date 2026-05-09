# 书 · 具身智能与机器人

> 如果 AI 只存在于屏幕之后，它永远无法真正理解这个世界。具身智能（Embodied AI）的追求是让 AI 拥有身体，在物理世界中感知、行动和学习——这条路从 1966 年斯坦福实验室里那台名为 Shakey 的笨拙小车开始，走过六十年波折，到 2024 年化作硅谷与中国工厂里成群结队的人形机器人，几乎每月都有新型号下线。

## 一、早期机器人（1960s–1990s）

1966 年，<Person id="nilsson" />、<Person id="mccarthy" /> 等人在斯坦福研究所（SRI）的实验室里组装了 Shakey——一台高约 2 米、装着电视摄像头和触觉杆的轮式机器人。它走得很慢、抖得很厉害（"Shakey"由此得名），但意义重大：它是第一个能把感知、世界建模、规划与行动集成在一起的机器人。Shakey 用 STRIPS 算法（Stanford Research Institute Problem Solver）做符号规划——告诉它"把方块推到那个房间"，它能自己拆解出"先走过去、再绕过桌子、再推动"的步骤。这是经典 AI 的胜利。

但 Shakey 也暴露了经典路线的死穴：每一次"推理"要花几分钟，过程中世界已经变了。

二十年后，澳大利亚出生的 MIT 教授罗德尼·布鲁克斯（Rodney Brooks）站出来反叛。1986 年他提出**包容架构**（Subsumption Architecture），主张抛弃符号推理与世界建模，让机器人由许多并行的反应式行为模块直接连接传感器与电机——就像昆虫一样，没有中央"思考"，却能在复杂环境中存活。1990 年的论文《大象不下棋》（Elephants Don't Play Chess）几乎是一篇宣言：智能不必通过国际象棋来体现，能在客厅里走一圈不撞翻东西，已经比当年所有 AI 系统都更接近"智能"。布鲁克斯后来联合创办了 iRobot——Roomba 扫地机器人正是包容架构的最直接后裔，截至 2025 年累计销量已超过 5000 万台。

工业界则走了第三条路。1979 年通用汽车装上了第一台 Unimate 焊接机械臂，1980 年代日本 FANUC、安川电机的工业机器人席卷汽车工厂。它们没有 AI，只有精确的轨迹规划和示教——但这是机器人第一次真正改变全球制造业。

## 二、波士顿动力与运动控制

1992 年，MIT 的马克·雷伯特（Marc Raibert）从著名的 Leg Lab 走出来，创立了波士顿动力（Boston Dynamics）。这个名字将在此后三十年间，成为机器人运动能力的代名词。

2004 年的 BigDog 是一台四足机器人，背负 150 公斤负载在崎岖山地踉跄前行的视频，让全世界第一次看到机器人能像动物一样保持平衡。2013 年的 Atlas（DARPA 资助）开始尝试两足直立行走；2016 年 Atlas 在雪地里行走、被工程师用棍子推倒后自己爬起来的视频在 YouTube 上播放过亿次。2017 年的 Spot 四足机器人开始小批量销售，售价约 7.5 万美元，目前已部署在数千个工业巡检场景——从壳牌的炼油厂到美国国家电网的输电线路检查，再到 SpaceX 星舰发射台。2021 年的 Atlas 跑酷视频里，那台油液压机器人能跨越平台、后空翻落地——这是当时纯运动控制的天花板。

但波士顿动力的商业化始终是个谜。它先后被卖给 Google（2013）、软银（2017），最终归于现代汽车（2020），估值约 11 亿美元。三十年间它造出了世界上最强的机器人腿，却没造出一门赚钱的生意。2024 年 4 月，老款液压 Atlas 退役，新一代电驱动 Atlas 同日发布，关节自由度更大、动作更接近人类——同时也意味着，运动控制的"硬件孤岛"时代结束了，AI 大脑必须接管它。

## 三、深度学习进入机器人（2015–2022）

2015 年前后，深度学习的浪潮开始拍打机器人学的海岸。最早的尝试来自 Google Brain。2016 年，谢尔盖·莱文（Sergey Levine）等人发表"机械臂农场"（Arm Farm）项目：14 台机械臂连续 800 小时自学抓取，用 CNN 直接从摄像头到电机指令做端到端学习——这是端到端机器人学习的第一份大规模证据。

接下来的几年，几条技术路线并行推进。**模仿学习**（Imitation Learning）让机器人通过观察人类演示学会动作，DAgger、Behavior Cloning 等算法不断改进；**Sim-to-Real** 让机器人先在 NVIDIA Isaac、Mujoco 等仿真环境训练数百万小时，再迁移到真实机器人——OpenAI 在 2019 年用此法训练机械手 Dactyl，让它单手解魔方，仿真训练量等价于 13000 年人类经验。**深度强化学习**则用于四足运动控制，苏黎世联邦理工（ETH）的 ANYmal 在 2020 年通过 RL 学会了在野外摔倒后自己爬起来，《Science Robotics》封面文章。

但这一时期的机器人学习有一个共同的局限：每个技能都要单独训练，从抓取杯子到开门，每一项都是一个独立模型。机器人没有"通用大脑"。这与同期 NLP 领域 GPT 系列展示的"一个模型干所有事"形成了刺眼的对比。机器人圈开始追问：我们也可以有自己的 GPT 时刻吗？

## 四、大模型 + 机器人：具身智能新范式（2023–）

2022 年 12 月，Google Robotics 发布 RT-1（Robotics Transformer 1）。它把 17 个月里 13 台机器人采集的 13 万条轨迹，编码成视觉+语言+动作的统一序列，由一个 3500 万参数的 Transformer 处理。RT-1 能执行 700+ 种自然语言指令——"把可乐放进抽屉""擦掉桌上的水"——成功率 97%。这是机器人界第一次出现"基础模型"（Foundation Model）的雏形。

但真正的范式跃迁是 2023 年 7 月发布的 RT-2。Google DeepMind 把 PaLI-X 和 PaLM-E 这两个 500 亿+ 参数的视觉-语言模型直接微调成机器人策略，让它输出离散化的动作 token。RT-2 第一次表现出"涌现"——它从未被教过"把灭绝动物递给我"，却能从桌上一堆玩具里挑出恐龙。**视觉-语言-动作模型**（Vision-Language-Action, VLA）这个术语正式诞生。

2023 年 10 月，34 家机构、22 种机器人本体的数据被合并成 Open X-Embodiment 数据集，包含 100 万+ 条演示。基于这个数据集训练的 RT-X，在新机器人上的零样本迁移成功率比单一机器人训练高出 50%——这暗示着机器人也可能拥有自己的"ImageNet 时刻"。

私人公司接力跟进。Physical Intelligence（简称 π）由莱文等人 2024 年在旧金山创立，融资 4 亿美元，估值 24 亿美元。同年 10 月发布 π0：一个跨平台 VLA 模型，能让七种不同机器人完成叠衣服、装咖啡机、收拾餐桌等家务，演示视频中的动作流畅度震惊业界。2025 年 2 月，Figure AI 发布自研的 Helix VLA 模型，宣布与 OpenAI 终止合作，转向独立研发。同月，1X Technologies（OpenAI 投资的挪威/美国公司）公布家用人形机器人 Neo Gamma 在用户家中的实测视频。

字节跳动 Seed 团队也加入战局，2024 年 11 月发布 GR-2——基于视频生成的世界模型驱动机器人；同年又开源了 RoboFlamingo、RoboBrain 等多模态机器人基础模型。Hugging Face 在 2024 年发布开源机器人栈 LeRobot，并推出低成本 SO-100 机械臂，让本科生用 100 美元也能复现 VLA。

NVIDIA 也站上了关键位置。2024 年 3 月 GTC 大会上，<Person id="huang" /> 发布 **Project GR00T**——专为人形机器人设计的基础模型平台，配套 Isaac 仿真生态、Jetson Thor 计算芯片、Osmo 机器人云。2025 年 1 月，他在 CES 主旨演讲中称："机器人正在迎来它的 ChatGPT 时刻。"NVIDIA 把自己定位为整个具身智能赛道的"卖铲人"。

VLA 的意义在于：从"感知—规划—执行"的流水线架构，跨越到端到端统一模型——不再需要工程师手工设计每个技能，一个模型通吃所有任务。这是机器人学走出"每个动作都要单独编程"的诅咒的关键一跃。

## 五、中国具身智能浪潮

2024 年起，中国成为全球具身智能投资最热的地区。仅 2024 年，国内具身智能赛道融资总额超过 130 亿元人民币，半数项目估值在 12 个月内翻倍。

宇树科技（Unitree Robotics）在杭州，由 90 后王兴兴创立，原本以四足机器人 Go1、Go2 闻名。2024 年 5 月发布人形机器人 H1（身高 1.8 米，售价 9 万美元），8 月推出 G1（1.27 米，售价 1.6 万美元起）——后者直接把人形机器人价格打进消费级区间，B 站上 G1 跳舞、跑步、扎马步的视频播放过亿。2025 年 1 月，宇树 H1 在央视春晚舞台上跳秧歌，让人形机器人第一次进入中国大众视野。

智元机器人（Agibot）由前华为"天才少年"稚晖君（彭志辉）2023 年创立，背靠百度、上海国资、高瓴。2024 年 8 月发布远征 A2 人形机器人，宣称量产价 20 万元人民币以内；2025 年 1 月公布"启元"大模型与百万条机器人数据集 AgiBot World 开源。

其余玩家几乎排成一队：优必选（UBTECH）2023 年 12 月在港交所上市，成为"中国人形机器人第一股"，Walker 系列已进入比亚迪、富士康工厂；小米 CyberOne（2022）与 CyberDog 系列定位科技玩具；傅利叶智能（Fourier Intelligence）的 GR-1、GR-2 主攻医疗康复；银河通用（Galbot）由北大教授王鹤创立，主打商超场景；星动纪元（Robot Era）孵化自清华，2025 年发布人形 Star1。

中国具身智能的特点是供应链优势——电机、减速器、控制器、电池绝大部分能在长三角和珠三角 200 公里内闭环采购，这让中国厂商把整机成本拉到了硅谷难以企及的水平。Tesla 的 Optimus 还在喊 2 万美元目标，宇树 G1 已经在京东上挂出 9.9 万元起售。

政策面也在重压加码。2023 年 11 月工信部发布《人形机器人创新发展指导意见》，明确 2025 年初步建立创新体系、2027 年综合实力达国际先进水平。北京、上海、深圳、杭州相继挂牌国家级人形机器人创新中心。2024 年 4 月北京"国家地方共建具身智能机器人创新中心"揭牌，由智元机器人、银河通用等公司共同参与。这是一场国家级的产业军备竞赛。

## 六、人形机器人之争

为什么是人形？答案朴素得近乎浪费想象力——人类的工厂、办公室、家庭都为人类身体设计：门把手在 90 厘米高度、楼梯踏步 17 厘米、椅子坐高 45 厘米。人形机器人是适配存量物理环境成本最低的方案。

<Person id="musk" /> 在 2021 年特斯拉 AI Day 上首次公布 Optimus 计划，2022 年 9 月推出第一代原型机 Bumble C 时，机器人是被工程师推着上台的。但到 2024 年 10 月的 "We, Robot" 发布会，Optimus Gen 2 已经能调酒、发糖果、与观众聊天（虽然事后承认有部分远程操控）。马斯克喊出 2 万-3 万美元的目标售价、年产 10 亿台的口号——后者依然过于科幻，但前者已被中国厂商证明可行。

Figure AI 是硅谷另一颗明星。CEO 布雷特·阿德科克（Brett Adcock）此前已成功创办了城市空中交通公司 Archer。Figure 在 2024 年 2 月获得包括微软、OpenAI、英伟达、贝佐斯在内的 6.75 亿美元 B 轮融资，估值 26 亿美元；2025 年 2 月新一轮融资估值跃升至 395 亿美元。Figure 02（2024 年 8 月发布）已部署在宝马南卡罗来纳州工厂，从事车身金属件搬运。

Apptronik 来自得州奥斯汀，与梅赛德斯-奔驰、GXO Logistics 合作部署 Apollo 人形机器人；1X 的 Neo Gamma 锁定家用市场；挪威 Halodi、加拿大 Sanctuary AI、瑞士 ANYbotics 各占一席。

但争议从未停歇。一派认为人形是终极形态，另一派质疑：搬箱子需要双腿吗？分拣零件需要五指吗？专用机械臂、AGV、夹爪在工业场景的 ROI 早已被验证，人形机器人需要回答的是——它何时能在某个具体场景里把单位经济模型跑通。截至 2025 年，没有任何一家人形机器人公司公开过盈利数据。

**为什么不是人形也能赢？** Agility Robotics 的 Digit（双足搬运机器人）2024 年起在 GXO Logistics 仓库部署，采用人形腿+机器臂混合设计；亚马逊仓库则部署了大量轮式 + 双臂的 Stretch、Sequoia——它们没有"脸"，但承担了人形机器人尚不能完成的真实搬运任务。专用形态在 2025 年仍是工业界的现实选择。

## 七、开放问题

具身智能仍在它的"GPT-2 时刻"——能力惊艳，但远未到 ChatGPT 级别的可用性。摆在面前的开放问题很多。

**世界模型是否必要？** Yann LeCun 长期主张机器人需要预测物理世界的世界模型；DeepMind 的 Genie、Sora 等视频生成模型被一些人视为雏形——能生成可控视频的模型，是否就具备了"心智模拟"？争议持续至今。

**Sim-to-Real 的鸿沟。** 仿真器永远无法完全复现真实物理——摩擦、形变、流体、电池电压波动。当前主流路线是大规模真实数据采集（特斯拉的"千人遥操作工厂"、智元的 AgiBot World），但成本高昂。

**安全。** 当 80 公斤的人形机器人进入家庭，软件 bug 不再是闪退而是物理伤害。ISO 13482 标准（个人护理机器人）尚不足以覆盖通用人形机器人，新的安全规范正在 IEEE、ISO 多方推进。

**通用机器人何时到来？** 莱文 2024 年估计需要 10 年，<Person id="huang" /> 在 GTC 2025 上称 5 年内人形机器人将进入主流工厂——估计跨度之大本身就是这个领域不确定性的注脚。

---

::: tip 太史公曰
余观具身智能六十年，方知**身体是智能最后的考场**。Shakey 笨拙而推理，深蓝精算而无身，AlphaGo 神算而不能动其一子——皆为离身之智。布鲁克斯三十年前疾呼"大象不下棋"，世人以为狂言；今日 VLA 模型涌现，方知大象之智确在身体而非棋局。机器人之难不在算法，在物理：摩擦不可计算、形变不可枚举、电池不可作弊。波士顿动力造腿三十年，至 Atlas 跑酷而商业不成；OpenAI 解魔方一台手，至今未成产品。何也？因机器人之进步不能像 GPT 一般靠堆参数——它必须每一步都通过现实的检验。然 2024 年起，VLA 成、Optimus 出、宇树 G1 跳秧歌于春晚，势已成形。中国占供应链之利，硅谷握模型之先，二者并进，未来五年必见高下。最深之教训在此：智能从来不是符号或网络的独白，而是身体与世界的对话。当 AI 终于走下屏幕、迈入物理空间，人类才真正开始与一种"他者"共处。这不只是工程奇迹，是文明级别的转折。
:::

## 亲历者说

::: info 征集中
如果你参与过 Boston Dynamics、Google Robotics、宇树、智元、Figure、1X、Physical Intelligence 等具身智能项目，或在仿真、强化学习、VLA 模型上有第一手经验，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Nilsson, N. J. (1984). Shakey the Robot. *SRI Technical Note 323*, Stanford Research Institute.
2. Brooks, R. A. (1990). Elephants don't play chess. *Robotics and Autonomous Systems*, 6(1-2), 3-15.
3. Levine, S., Pastor, P., Krizhevsky, A., et al. (2018). Learning hand-eye coordination for robotic grasping with deep learning and large-scale data collection. *International Journal of Robotics Research*, 37(4-5), 421-436.
4. OpenAI, Andrychowicz, M., Baker, B., et al. (2020). Solving Rubik's Cube with a robot hand. *arXiv preprint arXiv:1910.07113*.
5. Brohan, A., Brown, N., Carbajal, J., et al. (2022). RT-1: Robotics Transformer for real-world control at scale. *arXiv preprint arXiv:2212.06817*.
6. Brohan, A., Brown, N., Carbajal, J., et al. (2023). RT-2: Vision-language-action models transfer web knowledge to robotic control. *arXiv preprint arXiv:2307.15818*.
7. Open X-Embodiment Collaboration, Padalkar, A., Pooley, A., et al. (2024). Open X-Embodiment: Robotic learning datasets and RT-X models. *ICRA 2024*.
8. Black, K., Brown, N., Driess, D., et al. (2024). π0: A vision-language-action flow model for general robot control. *Physical Intelligence Technical Report*, October 2024.
9. Lee, J., Hwangbo, J., Wellhausen, L., et al. (2020). Learning quadrupedal locomotion over challenging terrain. *Science Robotics*, 5(47), eabc5986.
10. Figure AI (2025). Helix: A vision-language-action model for general humanoid control. *Figure AI Technical Blog*, February 2025.
11. AgiBot, Inc. (2025). AgiBot World: A million-trajectory dataset for embodied intelligence. Open release, January 2025.
12. Boston Dynamics (2024). The next generation of Atlas. Press release, April 17, 2024.
