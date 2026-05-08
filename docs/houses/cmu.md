# 世家 · 卡内基梅隆大学（Carnegie Mellon University）

> 与 MIT、斯坦福并立的 AI 三大学府，但 CMU 走的是另一条路：把符号推理、机器人、语音识别、博弈与机器学习一同当作"系统工程"来做。它培养了第一代 AI 大师，孕育了世界上第一只下扑克的超人 AI，也建起了世界上第一个 AI 本科专业。

## 一、Logic Theorist 的诞生

1956 年夏天，达特茅斯会议那两个月里，<Person id="newell" />与<Person id="simon" />和程序员克里夫·肖（Cliff Shaw）已经在 RAND 公司用 IBM 701 跑出了 **Logic Theorist**——人类历史上第一个真正意义上的人工智能程序。它能证明罗素与怀特海《数学原理》第二章中的 38 条定理，其中一条新证明甚至比原书的更优雅。<Person id="mccarthy" />提出"Artificial Intelligence"这个词只比它早几个月；Logic Theorist 是这个词第一次被填上具体血肉。

纽厄尔与西蒙此时身兼 RAND 与卡内基理工学院（1967 年与梅隆学院合并为 CMU）双重身份。1957 年，他们与肖又写出 **GPS**（General Problem Solver）——把"手段-目的分析"（means-ends analysis）形式化为一种通用搜索框架。1972 年两人合著 *Human Problem Solving*，把人类心理学实验数据与符号搜索算法系统对接，奠定了**信息处理心理学**的整套语言。1975 年纽厄尔、西蒙共获图灵奖；1978 年西蒙又因有限理性（bounded rationality）等贡献获诺贝尔经济学奖——一人横跨两个最高奖，AI 史上仅此一例。

CMU 计算机科学系 1965 年正式独立，是全美最早的几个之一。它从一开始就带着纽厄尔与西蒙的烙印：**把认知当作可计算过程**。这种气质后来贯穿了 SOAR 体系结构、ACT-R 认知建构模型、专家系统、棋类博弈一直到当代的强化学习。

值得一记的是 1986 年纽厄尔在哈佛威廉·詹姆斯讲座上提出的 **统一认知理论**（Unified Theories of Cognition），主张人类认知应能由一套统一的计算框架解释。1990 年同名专著出版后，几乎成为 1990 年代认知科学课程的必读。这种"用工程构造来理解心智"的姿态，让 CMU 的 AI 研究始终带有一种 MIT 与斯坦福都不太相同的"认知理论"色彩。

## 二、机器人研究院与自动驾驶之始

1979 年，雷蒙德·库兹韦尔（Raymond Kurzweil）的合作者、机器人学先驱拉吉·雷迪（Raj Reddy）与时任 CMU 校长理查德·赛尔特（Richard Cyert）共同创立 **机器人研究院**（Robotics Institute, RI）——美国第一个专注机器人的研究院。雷迪 1994 年与 Edward Feigenbaum 共获图灵奖，是首位获该奖的亚裔。

1984 年，机器人研究院启动 **Navlab** 项目，把一辆雪佛兰货车改成自动驾驶车。1989 年，雷迪的博士生迪恩·波默卢（Dean Pomerleau）训练出 **ALVINN**（An Autonomous Land Vehicle in a Neural Network）——一个三层神经网络，输入车头摄像头与激光测距仪信号，输出方向盘转角。在 CMU 校园里，这辆 Navlab 1 用 ALVINN 以每小时 5 公里的速度自动行驶。

1995 年 7 月，波默卢与博士生托德·乔切姆（Todd Jochem）开着改装的 Navlab 5（一辆 1990 款 Pontiac Trans Sport 厢式车）从匹兹堡开到圣迭戈，全程 4587 公里中 4506 公里由系统自动转向，最高时速超过 100 公里——史称"**No Hands Across America**"。需要补充的是：这次跨美旅行用的是波默卢 1995 年开发的 RALPH（Rapidly Adapting Lateral Position Handler），是 ALVINN 思路的工程进化版，但仍由神经网络与图像处理结合驱动。这趟路在 2005 年 DARPA 大挑战之前整整十年，就给世人演示了"端到端学习驾驶"的可行性。

机器人研究院今天仍是全球最大的机器人学术机构之一，规模超过六百人，孵化出 Argo AI、Aurora、Aptiv-CMU 等一批自动驾驶公司。2015 年 2 月，Uber 一夜挖走机器人研究院数十名研究者，是 CMU 最被广泛报道的"产业掠夺"事件之一，也成为后续学界讨论"如何让公立资助的人才不被一家公司带走"的典型案例。

机器人研究院之外，CMU 还在 **机械工程与软体机器人**（Howie Choset 的蛇形机器人、Aaron Steinfeld 的辅助机器人）、**手术机器人**（Takeo Kanade 的医学影像与手术导航）等子方向有长期投入。Kanade 创立的"动态视觉"实验室在 1990 年代发明的 *Lucas-Kanade 光流法* 至今仍是计算机视觉教科书的标配。

## 三、Sphinx 与语音识别

1986 年，雷迪招进一位来自台北、就读于哥伦比亚大学的博士生李开复（Kai-Fu Lee）。两年后，李开复在 CMU 完成博士论文 *Automatic Speech Recognition: The Development of the SPHINX System*——史上第一个**说话人无关（speaker-independent）、连续语音、大词汇量**的实时语音识别系统。Sphinx 用隐马尔可夫模型（HMM）建模声学单元，在 *Resource Management* 1000 词任务上达到前所未有的精度，1988 年震动整个语音识别界。雷迪后来回忆，1986 年时学界普遍认为这种识别"十年内不可能"，李开复用两年把它做成了。

Sphinx 的代码后来开源为 CMU Sphinx 系列（Sphinx-2、Sphinx-3、Sphinx-4、PocketSphinx），影响了之后二十年所有的开源语音识别工具链；李开复 1988 年毕业即加入苹果做 Casper 语音助手项目，再到 SGI、微软中国研究院、Google 中国，2009 年回国创办创新工场。CMU 的语音识别血脉延续至今——詹姆斯·贝克（James K. Baker）、亚历克斯·韦贝尔（Alex Waibel，TDNN 时延神经网络与同传系统的发明者）等人持续推动。

## 四、机器学习作为一门学科

1988 年，CMU 设立全美第一个**博士级**机器学习研究单元——后来发展为机器学习系（Machine Learning Department，2006 年正式成立，全球第一个独立机器学习系）。系主任由汤姆·米切尔（Tom M. Mitchell）担任。

米切尔 1997 年出版的教材 *Machine Learning* 是无数研究生入门的同一本书；他后来主持的 **Read the Web / NELL**（Never-Ending Language Learning, 2010 起）项目让一个程序在没有人工干预的情况下连续多年从网页中学习世界知识，是知识图谱研究的标志性长跑项目。NELL 在 2018 年累计学到超过 9000 万条信念，是预训练语言模型出现之前最大规模的"机器自学知识库"。

CMU 在统计学习、概率图模型、强化学习、因果推断各方向都建起了重镇：迈克尔·乔丹（Michael Jordan）的合作者、Avrim Blum 的同事 Manuel Blum（图灵奖得主）；统计与机器学习交叉的 Larry Wasserman；强化学习教科书第二作者 Andrew Barto 的博士生、第一代深度强化学习推动者 Andrew G. Barto 系列工作的延伸者们；因果推断学派的 Clark Glymour、Peter Spirtes 与 Richard Scheines（TETRAD 工具与 PC 算法）。

## 五、Libratus、Pluribus 与不完全信息博弈

CMU 在博弈 AI 上的传统从未中断。1997 年深蓝击败<Person id="kasparov" />时，CMU 的 Hsu Feng-hsiung（许峰雄）正是深蓝团队核心成员；他在 CMU 完成博士学位时设计的 ChipTest 与 Deep Thought 是深蓝的直系前身。

到 2017 年 1 月，图奥马斯·桑德霍尔姆（Tuomas Sandholm）与博士生诺姆·布朗（Noam Brown）让自己的 **Libratus** 在 Rivers 赌场与四位顶级德州扑克职业选手进行 12 万手单挑无限注德州扑克对战。20 天后，Libratus 以每千手 147 mbb 的优势净胜，全场超过 1.7 万美元筹码差，统计显著性 99.98%。这是 AI 第一次在**不完全信息博弈**中击败顶级人类。

2019 年 6 月至 7 月，桑德霍尔姆与布朗的下一代系统 **Pluribus** 把战场从单挑升级到六人桌——博弈论上更难、空间更大、策略更需要"在线"决策。Pluribus 同样击败 13 位顶级职业玩家，相关论文 *Superhuman AI for Multiplayer Poker* 发表于 *Science*。它还以惊人地小的算力（一台 64 核服务器、不到 150 美元/天的运行成本）取得超人类水平，与同期需要数千 GPU 的其他系统形成鲜明对比。

诺姆·布朗 2020 年加入 Facebook AI Research，2023 年加入 OpenAI，参与 o1 系列推理模型的研发——CFR（反事实后悔最小化）与搜索的思想从扑克桌一路走进了大语言模型。这是 AI 史上一条颇具张力的暗线：扑克 AI 教 LLM 如何"想得更深"。

## 六、教育的旗帜：第一个 AI 本科

2018 年 5 月，CMU 计算机学院（School of Computer Science, SCS）宣布秋季开始招收**美国第一个人工智能本科专业**（B.S. in Artificial Intelligence）。课程设计跨数学、统计、计算机系统、伦理学，强调理论与系统工程并重。学生限额每年三十多人，2020 年首批毕业生拿到学位。这一步在产业界与学界都引起反响——它把"AI 不只是计算机科学一个分支，而是值得独立培养的体系"这一信号公开化。

CMU 计算机学院的整体格局在过去三十年保持非凡稳定。**CS Rankings** 综合 AI、ML、NLP、CV、机器人等子领域的论文数据，CMU 长期排名全球第一或并列第一。SCS 由六个独立单位组成：计算机科学系、机器人研究院、语言技术研究院（LTI）、机器学习系、人机交互研究院（HCII）、计算生物学系——这个把语言技术、机器学习与机器人放在同一栋楼里的结构本身，就是一种制度化的跨学科。

## 七、人才输出与未来

CMU 是 AI 领域规模最大的人才输送系统之一。从博士校友里随便挑一组名字，就足以拼出半部当代 AI 史：李开复（创新工场）、<Person id="ng" />（Coursera、Google Brain，曾在 CMU 做博士后）、<Person id="russell" /> 的合作者多人、<Person id="silver" />（DeepMind AlphaGo 主要作者，CMU 博士后训练）、Ruslan Salakhutdinov（深度学习先驱，CMU 教授兼苹果首任 AI 研究主管）、Sebastian Thrun（CMU 副教授到斯坦福，再到 Google 自动驾驶）、Andrew Moore（CMU SCS 院长后任 Google Cloud AI 负责人）。

近年 CMU 把重心进一步压向 **AI 系统与负责任 AI**：CMU AI（cmu.edu/ai）作为统一品牌打通各学院；2023 年起的 *Block Center for Technology and Society* 把社会影响纳入研究议程；机器学习系与 LTI 合开的大模型课程把研究生送进 Anthropic、OpenAI、Google DeepMind 的核心研发岗。

::: tip 太史公曰
卡内基梅隆之于人工智能，犹楚之屈宋、汉之太学。它不靠地利取胜——匹兹堡冬天的雪与铁锈带的萧条无可抵御，也不靠资本扎堆——离硅谷整整一个大陆。然而它靠的是一种近乎执拗的工程学品格：纽厄尔与西蒙写下第一个推理程序，雷迪建起世界第一个机器人研究院，李开复与 Sphinx 让机器第一次听懂任意人的话，米切尔写出第一本面向所有人的机器学习教材，桑德霍尔姆与布朗教 AI 学会扑克桌上的诈唬，最后又把人工智能本身列为一门可以从大一开始读起的本科专业。CMU 不追风口，但每隔几年就把一种新的"系统"做出来给世人看——它告诉后人：AI 不是一个算法，而是工程、认知、心理、博弈、机器人、语言交织在一起的复合系统。一所内陆理工的 AI 远征，从匹兹堡走到了世界的中心。
:::

## 亲历者说

::: info 征集中
如果你曾在 CMU 计算机学院、机器人研究院、语言技术研究院或机器学习系学习或工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Newell, A., Shaw, J. C., & Simon, H. A. (1957). "Empirical Explorations of the Logic Theory Machine: A Case Study in Heuristic." *Proceedings of the Western Joint Computer Conference*, 218–230.
2. Newell, A., & Simon, H. A. (1972). *Human Problem Solving*. Prentice-Hall.
3. Lee, K.-F. (1988). *Automatic Speech Recognition: The Development of the SPHINX System*. Kluwer Academic Publishers.
4. Pomerleau, D. A. (1989). "ALVINN: An Autonomous Land Vehicle in a Neural Network." In *Advances in Neural Information Processing Systems 1* (NIPS '88), 305–313.
5. Mitchell, T. M. (1997). *Machine Learning*. McGraw-Hill.
6. Mitchell, T., Cohen, W., et al. (2018). "Never-Ending Learning." *Communications of the ACM*, 61(5): 103–115.
7. Brown, N., & Sandholm, T. (2018). "Superhuman AI for Heads-up No-Limit Poker: Libratus Beats Top Professionals." *Science*, 359(6374): 418–424.
8. Brown, N., & Sandholm, T. (2019). "Superhuman AI for Multiplayer Poker." *Science*, 365(6456): 885–890.
9. Carnegie Mellon University. (2018). "Carnegie Mellon Launches Undergraduate Degree in Artificial Intelligence." CMU News, May 10, 2018.
10. Pomerleau, D., & Jochem, T. (1996). "Rapidly Adapting Machine Vision for Automated Vehicle Steering." *IEEE Expert*, 11(2): 19–27.
11. Reddy, R. (1996). "The Challenge of Artificial Intelligence." *IEEE Computer*, 29(10): 86–98.
12. Shapiro, S. C. (Ed.). (1992). *Encyclopedia of Artificial Intelligence* (2nd ed.). John Wiley & Sons.
