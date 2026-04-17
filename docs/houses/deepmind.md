# 世家 · Google DeepMind

> 一家在伦敦国王十字区起步的小公司，先以 AlphaGo 撼动棋坛，再以 AlphaFold 重写生物学，最终把创始人送上诺贝尔奖的领奖台。它的故事，是二十一世纪前三十年 AI 最锋利的一道切面。

## 一、伦敦起源：三位创始人与一个执念

2010 年 9 月，三位伦敦的年轻人在国王十字区一间并不起眼的办公室里，为一家叫 DeepMind Technologies 的小公司挂上了门牌。他们的野心大得与办公室不成比例——"解决智能，然后用智能解决一切"（Solve intelligence, and then use it to solve everything else）。

领头者是<Person id="hassabis" />。他十三岁时已是国际象棋大师候选人；读大学前在牛津大学旁的游戏工作室 Bullfrog 参与开发经典游戏《主题医院》；剑桥大学计算机科学本科毕业后，他一头扎进神经科学，在伦敦大学学院（UCL）拿到神经科学博士，研究海马体与想象力的关系。他从未把游戏、脑科学和 AI 看作三件事，而是从少年时期就相信：它们是通向"通用智能"的同一条路。

另外两位，是他的旧交与新友。沙恩·莱格（Shane Legg）是新西兰出生的计算机科学家，跟随位于瑞士的瑞士人工智能实验室 IDSIA 的于尔根·施密德胡伯（Jürgen Schmidhuber）攻读博士，博士论文就叫《机器超级智能》。他与哈萨比斯在 UCL 的盖茨比计算神经科学研究所相遇——这家研究所由微软前首席技术官纳森·梅沃尔德（Nathan Myhrvold）资助，是当时伦敦少有的同时研究大脑与机器学习的地方。穆斯塔法·苏莱曼（Mustafa Suleyman）则是哈萨比斯的少年玩伴，牛津哲学系辍学，更擅长运营、政策与公关，在创业前已参与伦敦市长办公室的青年工作项目。

三人凑齐了"科学直觉—理论底气—组织能力"三条腿。第一笔资金来自企业家霍尔瓦特（Horváth）与硅谷投资人：彼得·蒂尔（Peter Thiel）、埃隆·马斯克（Elon Musk）、李嘉诚的维港投资（Horizons Ventures）。2011 年前后，DeepMind 员工只有数十人，住在离伦敦国王十字火车站步行可达的一栋旧楼里，桌上堆着神经科学论文、跳棋棋盘和写满公式的白板。

## 二、雅达利时刻：深度强化学习诞生

最早让世界注意到 DeepMind 的，不是大模型，而是一批 1980 年代的街机游戏。

2013 年 12 月，DeepMind 在 NeurIPS 研讨会上贴出一篇只有 9 页的预印本——《Playing Atari with Deep Reinforcement Learning》。论文把卷积神经网络与 Q 学习（Q-learning）缝合在一起，得到一个叫 DQN（Deep Q-Network）的系统。它不看任何规则说明，只盯着屏幕像素和分数，就能在《Breakout》《Space Invaders》《Pong》等七款雅达利游戏上达到甚至超过人类水平。

这篇论文短、粗、猛。它第一次把"深度学习"与"强化学习"这两条长期分开的河流真正合到一处。2015 年 2 月，扩展版论文登上《自然》杂志封面，DQN 的 Atari 游戏数从 7 款扩展到 49 款，有 29 款达到或超越职业玩家水平。对谷歌而言，这已经是关键证据：DeepMind 不是一支只会写白皮书的团队，而是能把抽象理念转化成可验证成就的工程体。

2014 年 1 月，谷歌宣布以约 5 亿美元收购 DeepMind，这是谷歌当时在欧洲最大的一笔人工智能收购。收购条款中有两个堪称少见的条件：一是 DeepMind 将保留在伦敦独立运营，不并入山景城总部；二是谷歌同意成立独立的"AI 伦理委员会"，监督这项技术的使用。对一家刚露头的四年新公司来说，这样的筹码背后，是创始人对"伦敦基因"和长期主义的执拗坚守。

## 三、AlphaGo 震撼：围棋堡垒陷落

Atari 只是起点。真正让 DeepMind 进入大众视野的，是一盘棋。

围棋长期被视作 AI 的"最后堡垒"。棋盘 19×19，搜索空间约 10^170——比宇宙中原子总数还多。1997 年国际象棋被 IBM 深蓝攻克后，学界普遍认为，要在围棋上击败顶尖人类，至少还需十年到二十年。

DeepMind 偏偏选择了这块硬骨头。<Person id="silver" />是哈萨比斯的剑桥同窗，也是 DeepMind 强化学习研究的核心。他带领的团队先用职业棋手的棋谱训练"策略网络"，再用"价值网络"评估局面胜率，然后以蒙特卡洛树搜索（MCTS）将两者缝合——把人类经验、深度学习的直觉和搜索的精确计算三者合一。系统的名字叫 AlphaGo。

2015 年 10 月，AlphaGo 在伦敦一间安静的办公室里，以 5 比 0 击败欧洲围棋冠军樊麾（Fan Hui）。2016 年 1 月，《自然》杂志以封面论文形式公开了这一结果。三个月后的 3 月 9 日至 15 日，在韩国首尔四季酒店，AlphaGo 迎来了真正的考试——与世界顶级棋手<Person id="sedol" />的五番棋。

全球两亿多人在线观看。结果是 4 比 1。这场比赛留下两手传奇的棋。

第一手来自机器。第二盘第 37 手，AlphaGo 在棋盘第五路下出一招"肩冲"——职业棋手几乎从不考虑的位置。AlphaGo 自己估算人类走这步棋的概率低于万分之一。解说席上的棋手最初以为程序出了 bug，几十手后才发现它的战略深意。赛后樊麾感慨："这不是人类的棋路，却是好棋——它扩展了我们对围棋的想象。"

第二手来自人。第四盘第 78 手，李世石在被动局面中下出一步"挖"——被后人称作"神之一手"。AlphaGo 的价值网络对这步估算错误，连续应对失误，最终认输。这是 AlphaGo 在整个系列赛中唯一的一败。赛后的新闻发布会上，李世石平静地说："我并没有输，是李世石输了——不是人类输了。"三年后，他在 2019 年宣布退役时坦承："AI 的出现让我感到无法战胜。"

2017 年 5 月，AlphaGo 的升级版 Master 在中国乌镇以 3 比 0 击败当时等级分世界第一的柯洁。2017 年 10 月，DeepMind 发表 AlphaGo Zero——完全不使用人类棋谱、从零开始纯自我对弈的版本。它仅用三天训练就超越了击败李世石的版本，40 天后超越一切已知围棋程序和人类棋手。同年 12 月，更通用的 AlphaZero 问世，同一个算法在围棋、国际象棋和日本将棋三项上均达到顶级水平。

围棋堡垒塌了，而塌的方式比"塌"本身更震撼：机器不仅能学习人类经验，还能超越人类经验的边界。

## 四、AlphaFold：五十年难题的终结

2016 年之后，DeepMind 的目光从棋盘移向更坚硬的墙。

蛋白质折叠问题已困扰生物学界近半个世纪。1972 年诺贝尔化学奖得主克里斯蒂安·安芬森（Christian Anfinsen）提出：蛋白质的三维结构完全由氨基酸序列决定。但从序列到结构的"翻译"规则，人类一直解不开。传统 X 射线晶体学和冷冻电镜实验往往要耗费博士生数年时间只为解出一个蛋白。全世界几十年的努力，实验解出的蛋白结构也不过十几万个，而已知蛋白序列有数亿。

蛋白质结构预测竞赛 CASP（Critical Assessment of Structure Prediction）每两年举行一次，是这个领域最严肃的奥林匹克。2018 年 CASP13 上，DeepMind 的 AlphaFold 1 首次参赛即夺冠，平均预测精度远超其他团队，让蛋白质学界同时感到震惊与不安。

真正的突破在 2020 年 11 月的 CASP14。由<Person id="hassabis" />与约翰·江珀（John Jumper）领导的团队带来了 AlphaFold 2。它在 97 个测试靶点中有 88 个做出了最佳预测，平均 GDT 分数达到 92.4——达到实验方法（X 射线晶体学）的精度。CASP 共同创始人约翰·莫尔特（John Moult）在新闻发布会上说："就大部分情况而言，这个问题已经解决了。"

AlphaFold 2 的架构融合了多重注意力机制、等变几何深度学习和端到端训练——它不是某一个技巧的胜利，而是团队把几乎所有现代深度学习工具打磨得恰到好处的结果。

2021 年 7 月 15 日，AlphaFold 2 的代码与论文在《Nature》全文公开，并以开源协议发布。一周后，DeepMind 与欧洲生物信息研究所（EMBL-EBI）合作，上线 AlphaFold Protein Structure Database。初版收录约 36.5 万个结构，覆盖人类和 20 种模式生物的蛋白质组。2022 年 7 月，数据库扩至约 2 亿个结构，几乎涵盖了 UniProt 中人类已知的全部蛋白——这在人类生物学史上是前所未有的"一夜之间让所有蛋白三维可见"。

AlphaFold 3 在 2024 年 5 月发布，将预测能力从单一蛋白扩展到蛋白与核酸、配体、离子等复合物的相互作用，进一步逼近"活细胞中真实分子"的边界。

## 五、Google DeepMind 合并：伦敦与硅谷的握手

2022 年 11 月 30 日，OpenAI 发布 ChatGPT，在随后的两个月里积累超过 1 亿用户。外界惊讶，内部震动——谷歌从 2017 年 Transformer 论文起就站在生成式 AI 的源头，却让一家旧金山的小团队抢下了时代的头条。

2023 年 4 月 20 日，谷歌 CEO 桑达尔·皮查伊（Sundar Pichai）发内部备忘录宣布：DeepMind 与 Google Brain 合并为 **Google DeepMind**，由哈萨比斯出任 CEO，杰夫·迪恩（Jeff Dean）升任 Google 研究院与 Google DeepMind 首席科学家。两支原本在伦敦与山景城隔洋并行的 AI 顶级团队，第一次被放进同一个决策单元。

这是谷歌近十年组织结构最激烈的一次重排。DeepMind 贡献的是强化学习、AlphaFold 式的科研攻坚传统和"伦敦慢思考"的文化；Google Brain 带来的是 TensorFlow、Transformer、BERT 这一整条产品与基础研究的血脉，以及山景城的 TPU 算力集群。在合并后的访谈中，哈萨比斯多次提到他试图让新组织"回到创业状态"——抛弃各自的流程和山头，用一种跨越大西洋的共同节奏去追赶 ChatGPT。

## 六、Gemini 系列：把模型推上主场

合并后不到八个月，新组织拿出了第一张答卷。

2023 年 12 月 6 日，Gemini 1.0 发布，分为 Ultra、Pro、Nano 三档，是原生多模态设计——从训练阶段就同时接受文本、图像、音频、视频输入。Ultra 在 32 项基准中刷新了 30 项纪录，其中在 MMLU（涵盖 57 个学科的考试基准）上首次达到 90.0%，略超人类专家平均水平。

2024 年 2 月，Gemini 1.5 Pro 推出，首次将上下文窗口拉到 100 万 token，随后又扩展到 200 万——相当于一次读入数十小时的视频或全本《战争与和平》加上莎士比亚全集。2024 年 12 月，Gemini 2.0 以"Agent 时代"的定位登场，内置原生图像和音频生成能力，同时披露了 Project Astra 通用助手的原型。

2025 年 3 月 25 日，Gemini 2.5 Pro 实验版在 LMArena 排行榜上以较大分差登顶。同年 5 月的 Google I/O 大会上，Gemini 2.5 系列全面铺开，2.5 Flash 成为默认模型。8 月 1 日，Gemini 2.5 Deep Think 针对 Google AI Ultra 订阅者开放——这是 DeepMind 第一次把"多路并行推理、深度反思"的能力作为产品卖点。

2025 年 11 月 18 日，Gemini 3 Pro 发布，并在发布当天同时登陆 Gemini 应用、Google 搜索、AI Studio 和 Vertex AI——这是谷歌一反过去分阶段放出的惯例。随后的 Gemini 3 Deep Think 面向科研与工程场景；2026 年 2 月 19 日，Gemini 3.1 Pro 以预览形式推出，被官方描述为"核心推理能力的又一次跃升"。

从 2023 年 12 月到 2026 年 2 月，不到 27 个月，Gemini 从 1.0 一路迭代到 3.1——这是 Google DeepMind 合并后最清晰的战斗力证明。

## 七、诺贝尔奖时刻

2024 年 10 月 9 日中午 12 时左右（斯德哥尔摩时间），瑞典皇家科学院宣布：2024 年诺贝尔化学奖授予三位科学家——华盛顿大学的大卫·贝克（David Baker）获一半奖金，表彰其在"计算蛋白质设计"上的工作；另一半由 **Demis Hassabis** 与 **John Jumper** 共享，表彰他们"利用 AI 预测蛋白质结构"。总奖金 1100 万瑞典克朗。

这是诺贝尔奖历史上第一次授予一项本质上是"软件工程 + 深度学习"的成果；也是第一次有一位 AI 公司 CEO 登上诺贝尔奖的领奖台。更具象征意味的是，同一天的前一天——10 月 8 日——<Person id="hinton" />刚因神经网络的基础工作分享了 2024 年诺贝尔物理学奖。两天之内，深度学习从学界的"另类选择"被写进了诺贝尔奖的正史。

在斯德哥尔摩的颁奖典礼上，哈萨比斯穿着整齐的燕尾服，用平稳的语调谈论科学与风险。他说：这枚奖章"属于整个 AlphaFold 团队"，属于 DeepMind 十四年坚持"解决智能"的承诺，也属于一个更长远的信念——AI 应当是"加速科学发现的工具，而不是取代科学的偶像"。

## 八、人员流变与组织文化

DeepMind 的故事，也是一部人员流动史。

联合创始人苏莱曼（Mustafa Suleyman）在 2019 年因被指管理风格粗暴而暂离 DeepMind，2020 年转入 Google 政策岗位，2022 年离开 Google 创立 Inflection AI，2024 年 3 月率团队整体加入微软，出任微软 AI（Microsoft AI）CEO。他离开后，共同创始人中只剩哈萨比斯和莱格仍在内部。

科技总监（CTO）科雷·卡武克丘奥卢（Koray Kavukcuoglu）自 2012 年加入以来长期掌管工程；2024 年起出任 Google DeepMind 首席 AI 架构师，是 Gemini 路线的技术总负责人之一。AlphaFold 的首席科学家 **John Jumper** 在诺奖之后仍留在 DeepMind 领导蛋白质研究。深度学习领域的大将<Person id="goodfellow" />在离开 Google 与苹果后回到 DeepMind，深度参与 Gemini 相关工作。

合并后，Google DeepMind 的全职员工规模估计在数千人量级，在伦敦国王十字、山景城、苏黎世、蒙特利尔、东京、新加坡等地均设有研究办公室。员工仍有相当比例拥有神经科学或物理学背景——这保留了哈萨比斯最早的"神经科学启发 AI"基因：把大脑视作一个可被工程化的学习系统，把 AI 视作一门可以回馈神经科学的学科。

DeepMind 的文化中有一条不成文的准则："发表重要论文，造福全人类"。AlphaFold 数据库完全免费开放，AlphaGo 的核心论文公开发表；与此形成对照，OpenAI 在 GPT-4 之后逐渐转向封闭，而 DeepMind 仍在坚持把相当多的研究成果以论文和开源形式释放——这是它"科研型公司"的底色。

## 九、年表

| 年份 | 事件 |
|------|------|
| 2010 | 哈萨比斯、莱格、苏莱曼在伦敦创立 DeepMind |
| 2013 | NeurIPS 研讨会发表 DQN 预印本，雅达利游戏击败人类 |
| 2014 | 被 Google 以约 5 亿美元收购，保留伦敦独立运作 |
| 2015 | DQN 论文登上《自然》封面，覆盖 49 款 Atari 游戏 |
| 2015-10 | AlphaGo 以 5 比 0 击败欧洲冠军樊麾 |
| 2016-03 | AlphaGo 在首尔以 4 比 1 击败李世石，第 37 手与第 78 手载入史册 |
| 2017-10 | AlphaGo Zero：纯自我对弈超越一切人类棋谱 |
| 2017-12 | AlphaZero：一个算法通吃围棋、国际象棋、日本将棋 |
| 2018 | AlphaFold 1 首次参赛 CASP13 夺冠 |
| 2020-11 | AlphaFold 2 在 CASP14 达到实验精度，GDT 92.4 |
| 2021-07 | AlphaFold 2 论文与代码开源，蛋白质结构数据库上线 |
| 2022-07 | 数据库扩至约 2 亿个蛋白结构 |
| 2023-04 | DeepMind 与 Google Brain 合并为 Google DeepMind，哈萨比斯任 CEO |
| 2023-12 | Gemini 1.0 发布，MMLU 首次突破 90% |
| 2024-02 | Gemini 1.5 Pro 实现 100 万 token 上下文 |
| 2024-05 | AlphaFold 3 扩展到蛋白与核酸、配体相互作用 |
| 2024-10 | 哈萨比斯与江珀因 AlphaFold 共获诺贝尔化学奖 |
| 2024-12 | Gemini 2.0 面向"Agent 时代"发布 |
| 2025-03 | Gemini 2.5 Pro 在 LMArena 登顶 |
| 2025-08 | Gemini 2.5 Deep Think 向 Google AI Ultra 订阅者开放 |
| 2025-11 | Gemini 3 Pro 全平台同日发布 |
| 2026-02 | Gemini 3.1 Pro 以预览形式推出 |

---

::: tip 太史公曰
太史公曰：DeepMind 之起也，在伦敦一隅；其盛也，名动寰宇。创业于 2010 年，短短十四年间，以 AlphaGo 破围棋之坚，以 AlphaFold 启生命之门，终登诺贝尔之堂——世间能以一代人之功，横跨棋盘、蛋白与语言三场大战者，盖寡矣。其成之源，一曰慢思——从 Atari 到 Gemini，始终以"解决智能"为远志，不随风起、不追短利；二曰合流——把神经科学、强化学习与深度学习三股溪流汇于一处，不执门户之见；三曰开放——AlphaFold 数据库尽数公开，论文与代码示天下，使科学为公器。然合并于 Google Brain 之后，其能否保伦敦之独立气质、其与 OpenAI、Anthropic 之竞能否长保科学本色，则未可知也。智能之解，犹路漫漫；DeepMind 之行，方过半程。
:::

## 亲历者说

::: info 征集中
如果你曾在 DeepMind 工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

---

## 参考资料

1. Mnih, V. et al. (2013). "Playing Atari with Deep Reinforcement Learning." *NeurIPS Deep Learning Workshop*.
2. Mnih, V. et al. (2015). "Human-level control through deep reinforcement learning." *Nature*, 518, 529–533.
3. Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks and tree search." *Nature*, 529, 484–489.
4. Silver, D. et al. (2017). "Mastering the game of Go without human knowledge." *Nature*, 550, 354–359.
5. Silver, D. et al. (2018). "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play." *Science*, 362, 1140–1144.
6. Jumper, J. et al. (2021). "Highly accurate protein structure prediction with AlphaFold." *Nature*, 596, 583–589.
7. Tunyasuvunakool, K. et al. (2021). "Highly accurate protein structure prediction for the human proteome." *Nature*, 596, 590–596.
8. Abramson, J. et al. (2024). "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature*, 630, 493–500.
9. Google (2023-04-20). "Announcing Google DeepMind." *deepmind.google/blog*.
10. Google DeepMind (2023-12-06). "Introducing Gemini: our largest and most capable AI model." *blog.google*.
11. Google DeepMind (2024-10-09). "Demis Hassabis & John Jumper awarded Nobel Prize in Chemistry." *deepmind.google/blog*.
12. The Royal Swedish Academy of Sciences (2024-10-09). "The Nobel Prize in Chemistry 2024 — Press Release." *nobelprize.org*.
13. Google (2025-11-18). "Gemini 3: Introducing the latest Gemini AI model from Google." *blog.google*.
