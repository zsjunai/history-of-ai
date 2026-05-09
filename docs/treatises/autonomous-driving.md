# 书 · 自动驾驶简史

> 自动驾驶是 AI 最早的商业化"圣杯"之一——它的故事充满了过度承诺、技术瓶颈、致命事故和永远推迟的时间表。从 1986 年慕尼黑高速公路上一辆奔驰旅行车以 96 公里/小时无人驾驶开始，到 2024 年凤凰城街头每周 15 万次 Robotaxi 出行，这条赛道烧掉了超过 1000 亿美元，催生了一个全新的行业，也改写了"驾驶"这个词的定义。

## 一、先驱时代（1980s–2000s）

最早的自动驾驶不在硅谷，而在德国。1986 年，慕尼黑联邦国防军大学的恩斯特·迪克曼斯（Ernst Dickmanns）改装了一辆梅赛德斯-奔驰 5 吨重的旅行车 VaMoRs，装上摄像头与车载计算机，让它在封闭高速公路上以 96 公里/小时自动驾驶。1994 年，迪克曼斯团队的 VaMP 在巴黎周边公路完成了 1000 公里、最高 130 公里/小时的真实交通流自动驾驶——这是欧盟 PROMETHEUS 项目（1987–1995，投资 7.5 亿欧元）的高峰。迪克曼斯比硅谷早了二十年，却被历史几乎遗忘。

大洋彼岸，卡内基梅隆大学（CMU）的"机器人学教父"陶德·坎纳德（Chuck Thorpe）领导的 Navlab 项目从 1986 年起开发了 Navlab 1 至 Navlab 11 一系列实验车。1995 年 7 月，Navlab 5 完成了著名的 "No Hands Across America" 之旅——从匹兹堡开到圣地亚哥共 4500 公里，其中 98.2% 由系统自动转向（油门和刹车仍由人控制）。这台车的"大脑"是一个仅有 768 神经元的 RALPH 神经网络。

那个年代的自动驾驶研究依赖少量手工特征和简陋传感器，离量产遥不可及。但它埋下了所有后来的种子。

## 二、DARPA 挑战赛（2004–2007）

真正点燃产业的是美国国防高级研究计划局（DARPA）。2004 年 3 月 13 日，第一届 DARPA Grand Challenge 在莫哈维沙漠开赛，要求无人车跨越 240 公里崎岖路段，奖金 100 万美元。结果令人难堪——15 辆参赛车里跑得最远的是 CMU 的 Sandstorm，仅完成 11.78 公里就卡在岩石上。**全军覆没**。

DARPA 把奖金提高到 200 万美元，2005 年 10 月再赛。这一次，斯坦福大学计算机科学系教授塞巴斯蒂安·特龙（Sebastian Thrun）率领的 Stanley 队夺冠——一辆改装的大众途锐，212 公里赛道用时 6 小时 54 分。Stanley 的关键创新在于**机器学习的概率方法**：用激光雷达扫描地形并自动学习"什么是可通行路面"，而非依赖工程师手写规则。Stanley 的成功被视为机器学习方法在机器人学中的奠基性胜利。

2007 年 11 月的 DARPA Urban Challenge 把战场从沙漠搬进城市——加州 Victorville 一座废弃空军基地改造成的"小镇"，要求无人车与人工驾驶车辆混行、遵守交规、识别交通信号。CMU 的 Boss 夺冠，第二名是 Stanford 的 Junior，第三名是 Virginia Tech 的 Odin。Boss 的领队克里斯·厄姆森（Chris Urmson）和 Stanley/Junior 的特龙，几年后将一起出现在硅谷一家叫 Google 的公司里。

DARPA 三场比赛改变了一切。它把全球最优秀的机器人学博士、工程师、教授连接成一张网——这张网在十年内将孵化出 Google Self-Driving Car、Waymo、Cruise、Zoox、Nuro、Aurora、Argo、Pony.ai 等几乎所有重要玩家。

## 三、Google 自动驾驶与 Waymo（2009–）

2009 年 1 月，Google 联合创始人 <Person id="page" /> 把特龙从斯坦福挖来，启动 Project Chauffeur——后来更名 Google Self-Driving Car。最初的车队是 7 辆改装丰田普锐斯，挂着 Velodyne HDL-64 激光雷达（每台 7.5 万美元）。2010 年 10 月，《纽约时报》头版披露这个秘密项目：Google 的车已在加州公路上行驶 22 万公里，零事故。

那是一段过度乐观的岁月。2012 年特龙公开表示"自动驾驶汽车将在 5 年内上路"；同年加州通过 SB-1298 法案，允许自动驾驶汽车上公路测试。但项目内部很快发现：**95% 的工程换来 90% 的能力，剩下 5% 工程要换来后 10% 的能力**——长尾问题（long-tail problem）远比想象的难。施工区、临时改道、警察手势、突然冲出的儿童——每一种 corner case 都需要单独处理。

2016 年 12 月，自动驾驶项目从 Google X 独立为 Waymo（Way forward in mobility）。新任 CEO 约翰·克拉夫西克（John Krafcik）从汽车业带来了量产视角。2018 年 12 月 5 日，Waymo One 在凤凰城郊区正式上线，是全球首个商业 Robotaxi 服务，但初期车上仍有安全员。2020 年 10 月，Waymo 在凤凰城启动**完全无人**（rider-only）服务——这是历史性的一刻。

2024 年是 Waymo 的爆发之年。一季度每周 5 万次付费出行，到 2024 年底攀升至每周 17 万次以上，覆盖凤凰城、旧金山、洛杉矶、奥斯汀。Waymo 累计无人公里数突破 5000 万。2025 年初，Waymo 与 Uber 在奥斯汀、迈阿密合作部署，把规模推向数百万级。技术路线则始终是"激光雷达 + 高精地图 + 模块化堆栈"，与 Tesla 形成鲜明对比。

但 Waymo 并非一帆风顺。2024 年它召回过两次软件，2025 年 1 月旧金山一辆 Waymo 撞上了路边的自行车——监管与公众容忍度仍是悬在头顶的问号。

## 四、Tesla 的激进路线

2014 年 10 月，<Person id="musk" /> 在 Model S 上推出 Autopilot——一个基于摄像头、雷达与超声波传感器的 L2 辅助驾驶系统，最初的视觉算法来自以色列 Mobileye 的 EyeQ3 芯片。2016 年特斯拉与 Mobileye 决裂，自研视觉栈，由从 OpenAI 挖来的 <Person id="karpathy" /> 在 2017 年起领导 Autopilot 团队。

卡帕西在 Tesla 的五年（2017–2022）重塑了行业。他把"软件 2.0"理念推向极致：用神经网络替代传统计算机视觉的所有手工模块。2019 年特斯拉自研 FSD 芯片（HW3.0）量产装车；2020 年 10 月开始向部分车主推送 FSD Beta（"Full Self-Driving"，但实为 L2）。Tesla 的训练数据来自全球 700 万辆装有摄像头的车队——这是其他公司无法匹敌的数据规模。

但 Autopilot 也是事故的代名词。2016 年 5 月佛罗里达 Joshua Brown 死于 Model S 撞上拖挂车；2018 年加州 Walter Huang 的 Model X 撞上分流隔离带身亡。截至 2024 年底，NHTSA 调查的 Autopilot 相关致命事故已超过 50 起。"Full Self-Driving"这个产品名本身就被多次起诉为虚假宣传。

2024 年 1 月，Tesla 发布 FSD V12——一个真正的端到端神经网络：从摄像头输入直接输出方向盘和踏板控制信号，抛弃了过去 30 万行 C++ 规则代码。马斯克称之为 "AI does it all"。V12 在城市道路驾驶上的体感连贯性确有跃迁，但安全性数据始终未公开第三方独立验证。2025 年 6 月 Tesla 在奥斯汀启动 Robotaxi 试点（Cybercab 与 Model Y 各一支车队），但车上仍配备远程监控和"安全监督员"——离真正的无人化还有距离。

## 五、中国自动驾驶

中国自动驾驶赛道的开局，几乎完全围绕百度 Apollo 展开。2017 年 4 月，百度发布 Apollo 开源平台，被称为"自动驾驶的安卓"。同年 11 月百度世界大会上，<Person id="kai-fu-lee" /> 同代的中国 AI 大佬陆奇宣布 Apollo 开源代码超过 60 万行——这是中国自动驾驶第一次系统性出场。2021 年 5 月，百度旗下 Robotaxi 服务**萝卜快跑**（Apollo Go）在北京、广州、长沙等地落地。截至 2025 年初，萝卜快跑累计完成订单超 1000 万次，覆盖 15 座城市，武汉是全球目前 Robotaxi 单城最大运营区域。

L4 创业军团也在 2016–2018 年集体出场。**小马智行**（Pony.ai）由原百度自动驾驶事业部创始人彭军、楼天城在加州弗里蒙特创立，拥有中美双牌照，2024 年 11 月在纳斯达克上市；**文远知行**（WeRide）由韩旭创立，业务覆盖 Robotaxi、Robobus、Robosweeper（清扫）多形态，2024 年 10 月纳斯达克上市；**Momenta**（初速度）以"两条腿走路"著称——量产 L2+ 渐进收入支撑 L4 长期投入，与上汽、奔驰、丰田深度合作。

新势力的智能驾驶军备竞赛是另一条主线。**小鹏汽车** 2022 年起推出 XNGP（智能辅助驾驶系统），2024 年实现"全国都能开"的无图城市领航，2025 年提出"端到端大模型"全量推送；**理想汽车** 2024 年发布 AD Max 端到端方案；**蔚来** ET9 加持自研 5nm 神玑芯片；**华为 ADS**（不造车，赋能问界、阿维塔、智界、享界）凭借问界 M9 月销破 1 万辆，把"无图城市领航"打成 30 万元以上 SUV 的标配。这些方案大多基于 Transformer 端到端架构 + BEV+OCC 感知，已经把"高阶智驾"从可选项推成了必选项。

中国路线的独特之处是**车路协同**（V2X）。雄安新区、嘉兴、苏州相城等地建设了大规模 V2X 路测设施。理论上，路侧感知能消除盲区、降低单车传感器成本——但商业化进展缓慢，原因是路侧设施投入巨大且回收路径不清。

值得记一笔的还有大疆车载（Livox 激光雷达 + 卓驭智驾平台）和地平线（征程系列芯片，2024 年 10 月港交所上市）——这两家公司分别代表中国在传感器与车载 AI 芯片两端的本土化突破。地平线的征程 5 与征程 6 已搭载于理想、比亚迪、奇瑞等品牌，年出货量百万级。

## 六、技术路线之争

**激光雷达 vs 纯视觉。** Waymo、Cruise、Zoox 全栈采用激光雷达；Tesla 一以贯之坚持纯视觉，连毫米波雷达也在 2021 年被砍掉。2024 年中国市场则进入"消费级激光雷达"时代——禾赛、速腾聚创、华为把激光雷达单价从 7.5 万美元降到 200 美元以内，几乎所有中国 30 万级新势力都把激光雷达列为标配。这场争论 2025 年仍未收场。

**高精地图 vs 无图方案。** 早期所有 L4 都依赖 RTK 级精度的高精地图；但维护成本高、城市更新频繁。2023 年起小鹏、华为、理想纷纷推出"无图智驾"，依靠车端实时建图与端到端模型。Waymo 至今坚持高精地图——它的护城河之一。

**规则引擎 vs 端到端学习。** Tesla FSD V12 与小鹏 XNGP 的最新版本均已切入"完全端到端"——一个神经网络从像素到方向盘。Waymo 等则采用模块化堆栈，认为端到端缺乏可解释性、不利于调试与监管。2024–2025 年的趋势明显倒向端到端，但两条路线的工程平衡仍在演化。

**L2+ 渐进式 vs L4 一步到位。** Tesla、小鹏代表前者——靠卖车获得现金流和数据，逐步向上演进；Waymo、Cruise 代表后者——直接做无人 Robotaxi。2023 年 10 月 Cruise 在旧金山因事故被吊销牌照、2024 年 12 月通用汽车宣布解散 Cruise，这是 L4 路线最惨重的一击。但 Waymo 同期的成功又证明这条路并未死。

## 七、自动驾驶的困境与反思

自动驾驶最深的诅咒，是被业内称为"最后 1% 的问题"——长尾场景的无穷性。99% 的城市路况都是结构化的，但路上偶尔会有：被风吹起的塑料袋、骑着自行车搬一面镜子的工人、装扮成圣诞老人指挥交通的志愿者、交警手势与红绿灯冲突时怎么办？这些 corner case 的总量近乎无穷，每一个都可能是事故的导火索。

致命事故是这个行业最沉重的章节。2018 年 3 月 18 日，Uber 自动驾驶测试车在亚利桑那州坦佩市以 64 公里/小时撞死推自行车横穿马路的 Elaine Herzberg——这是全球首例自动驾驶撞死行人案。Uber 此后退出自动驾驶研发。2023 年 10 月 2 日，Cruise 在旧金山的一辆 Robotaxi 把一名已经被撞倒的行人拖行了 6 米——并非主因事故，但 Cruise 隐瞒细节、最终被吊销牌照。Tesla Autopilot 与 FSD 的事故则数以百计，NHTSA 至今未结案。

过度承诺是另一项普遍病症。2016 年特斯拉宣布"年底实现完全自动驾驶纽约到洛杉矶"——至今未兑现；2017 年通用 Cruise 称"2019 年量产无人出租车"——直到 2024 年解散都未实现；几乎每家公司的时间表都至少推迟 3–5 年。

监管在追赶中博弈。美国 NHTSA 在 2021 年发布 Standing General Order，要求所有 L2+ 厂商上报严重事故；加州 DMV 拥有吊销牌照的权力，已对 Cruise、Pony.ai 多次出手；中国 2024 年实施《智能网联汽车准入和上路通行试点工作通知》，把 L3 商业化纳入正式法规框架；欧盟 ALKS（自动车道保持系统）法规于 2022 年生效，奔驰 Drive Pilot 成为全球首个商用 L3。

## 八、当下与未来

站在 2025 年 5 月，自动驾驶赛道正在迎来真正的拐点。

**Robotaxi 商业化破冰。** Waymo 周订单 17 万、萝卜快跑累计 1000 万，已经证明无人出行在限定区域可以稳定运营。下一关是单位经济模型——Waymo 估算每辆车每天成本约 250 美元（车 + 远程操作 + 充电），订单收入需要日均 250 美元以上才能盈亏平衡。2025 年内有望首次实现单车盈利。

**自动卡车的死亡谷。** 图森未来（TuSimple）2023 年退市退出美国市场；Embark 2023 年解散；Aurora 在 2024 年 4 月在德州 I-45 启动无人卡车商业运营，是目前唯一仍在前进的玩家。中国嬴彻科技（Inceptio）走 L2+ 商用化路线，已与申通、中通合作。

**端到端大模型还是答案吗？** Tesla FSD V12 给出了肯定答案，但 Waymo 用模块化方法依然跑得最远。2025 年的共识可能是：端到端是趋势，但需要"可解释 + 可调试 + 可干预"的混合架构。

**世界模型的崛起。** Wayve（伦敦，2017 创立）2023 年发布的 GAIA-1、2024 年的 GAIA-2 把驾驶建模为"视频生成 + 动作预测"问题，被视为下一代自动驾驶的可能架构；NVIDIA 在 2025 年 1 月 CES 发布 Cosmos——专为驾驶与机器人训练的世界基础模型平台。世界模型可能成为继 BEV、端到端之后的第三代自动驾驶范式。

**Robotaxi 何时遍及全球？** 高盛 2024 年预测全球 Robotaxi 市场 2030 年达 250 亿美元、2035 年 1000 亿美元。但这背后的前提是法规、保险、社会接受度全部到位——历史一再证明，这些往往比技术更慢。

---

::: tip 太史公曰
余观自动驾驶四十年，如观一场巨型实验：人类倾全力以神经网络与摄像头取代百年来手与脚的协调。其浪潮三起三落。1980 年代迪克曼斯于德国高速一鸣，世人不知；2005 年 Stanley 出沙漠，特龙惊艳硅谷；2012 年 Google 谓"五年自驾普及"，言之凿凿；2018 年 Uber 撞死 Herzberg，全行业震惊；2023 年 Cruise 大败，2024 年 Waymo 重起。每一次"明年量产"的承诺，每一次跳票之后，都有数十亿美元的灰飞烟灭。然而站在 2025 年看，凤凰城的 Waymo、武汉的萝卜快跑，确实让无人车变成了日常。其教训有三：其一，最后 1% 的问题永远比预想难十倍——莫信任何"明年实现"；其二，路线之争不能纯靠技术辩论决出胜负，必须靠商业化数据说话——L4 直冲与 L2+ 渐进各有伤亡；其三，安全是一条非线性函数，从 99% 到 99.99% 的工程量，可能比从 0 到 99% 还要大。**真正的赢家不是技术最先进者，而是耐心最长、口袋最深、动作最稳者。** 中国与美国的双中心格局已成，未来十年自动驾驶的故事将在这两个市场之间交替书写。
:::

## 亲历者说

::: info 征集中
如果你参与过 Stanley、Waymo、Cruise、Tesla Autopilot/FSD、百度 Apollo、小马智行、文远知行、华为 ADS、小鹏 XNGP、Momenta 等自动驾驶项目，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Dickmanns, E. D. (2002). The development of machine vision for road vehicles in the last decade. *IEEE Intelligent Vehicles Symposium*, 268-281.
2. Thorpe, C., Hebert, M., Kanade, T., & Shafer, S. (1991). Toward autonomous driving: The CMU Navlab. *IEEE Expert*, 6(4), 31-42.
3. Thrun, S., Montemerlo, M., Dahlkamp, H., et al. (2006). Stanley: The robot that won the DARPA Grand Challenge. *Journal of Field Robotics*, 23(9), 661-692.
4. Urmson, C., Anhalt, J., Bagnell, D., et al. (2008). Autonomous driving in urban environments: Boss and the Urban Challenge. *Journal of Field Robotics*, 25(8), 425-466.
5. Bojarski, M., Del Testa, D., Dworakowski, D., et al. (2016). End to end learning for self-driving cars. *arXiv preprint arXiv:1604.07316*.
6. National Transportation Safety Board (2019). Highway Accident Report HAR-19/03: Collision between vehicle controlled by developmental automated driving system and pedestrian, Tempe, Arizona, March 18, 2018.
7. Waymo (2024). Waymo safety report and operational metrics. *Waymo Public Safety Report*, December 2024.
8. Karpathy, A. (2021). Tesla AI Day 2021 — Vision Stack and FSD Architecture. Tesla, August 19, 2021.
9. California Department of Motor Vehicles (2023). Order of Suspension issued to Cruise LLC. October 24, 2023.
10. Goldman Sachs Research (2024). Robotaxis: The road to commercialization. Equity Research Report, October 2024.
11. 百度 Apollo（2024）. *萝卜快跑公开运营报告*. 百度智能驾驶事业群.
12. NHTSA (2024). Standing General Order on Crash Reporting for Levels 2-5 Automated Driving Systems — Annual Summary. National Highway Traffic Safety Administration.
