# 书 · AI 与游戏

> 游戏是人工智能最古老、也最残酷的舞台。从 64 格的棋盘到 19 路的围棋，从 Atari 像素到《星际争霸》的指挥中枢，每一款游戏都是为机器精心打造的一座斗兽场。在这里，胜负被简化为一个数字，人类的最高水准被量化为一个对手。机器每攻克一座堡垒，"智能"二字的边界就被向后推一寸。

## 第一幕：棋盘上的童年（1952—1997）

人工智能与游戏的姻缘，几乎与 AI 这门学科本身一样古老。

1952 年，IBM 工程师<Person id="samuel" />在一台 IBM 701 上写下了第一版跳棋程序。机器内存仅有几千字节，但他坚信跳棋是验证机器学习思想的理想沙盘。1959 年，他在《IBM Journal》上发表论文 *Some Studies in Machine Learning Using the Game of Checkers*，首次系统地阐述了"机器学习"（Machine Learning）这一术语——程序通过自我对弈不断更新评估函数，逐步学会识别局面优劣。这是史上第一个会从经验中变强的程序。

跳棋之后，国际象棋成了下一座圣山。从<Person id="shannon" />在 1950 年发表的奠基论文 *Programming a Computer for Playing Chess*，到<Person id="newell" />、<Person id="simon" />与<Person id="shaw" />合作的 NSS 程序，再到 1970 年代各路高校的搜索引擎竞赛，国际象棋几乎成了 AI 实验室的通用基准。

终局发生在 1997 年 5 月 11 日，纽约 Equitable Center 第 35 层。IBM 的深蓝（Deep Blue）在六局比赛中以 3.5 比 2.5 击败了世界冠军<Person id="kasparov" />。深蓝由许峰雄（Hsu Feng-hsiung）领衔的团队打造——他从 1985 年卡内基梅隆大学博士期间的"深思"（Deep Thought）项目开始，将一颗为国际象棋专用的 VLSI 芯片打磨了十多年。1997 年的深蓝搭载 480 块这样的定制芯片，每秒可评估约两亿个局面。卡斯帕罗夫赛后愤怒地指控 IBM 作弊——他无法相信机器能下出第二局那一步看似带有"人类直觉"的弃兵。三十年后回看，那只是暴力搜索的胜利：深蓝并没有"理解"国际象棋，它只是数得比任何人类都更深、更快、更冷静。

一个时代结束了。机器证明了在有限信息、有限规则的封闭博弈里，纯算力可以碾压人类。

## 第二幕：神经网络回到棋盘（2013—2015）

跳棋与国际象棋之后，围棋静静地等待着。19 × 19 的棋盘上有约 10^170 种可能局面，远超宇宙中原子的数量。暴力搜索在这里无能为力。学界普遍认为，要让机器战胜围棋世界冠军，至少还需要十年。

转机来自一个看似不相关的方向——电子游戏。2013 年，DeepMind 在 NIPS Workshop 上发表了一篇短论文 *Playing Atari with Deep Reinforcement Learning*。<Person id="hassabis" />团队提出深度 Q 网络（Deep Q-Network, DQN），第一次让神经网络仅凭屏幕像素与得分反馈，便学会了 49 款 Atari 2600 游戏。打砖块、太空入侵者、Pong——同一个网络架构在多款游戏中达到甚至超越人类水平。这篇论文 2015 年扩充版登上《自然》封面，被视为深度强化学习（Deep Reinforcement Learning）的奠基之作。

DQN 之所以重要，不在于它打败了 Atari，而在于它向世界宣告了一种全新的可能：把卷积神经网络当作"眼睛"，把强化学习当作"行动指南"，机器可以从零开始，在像素中学到策略。

DeepMind 这个名字此前在学术圈仍属小众。2010 年由<Person id="hassabis" />、Shane Legg、Mustafa Suleyman 在伦敦创立，2014 年被 Google 以 4 亿英镑收购。收购前 Atari 演示视频是 DeepMind 打动谷歌的关键素材之一——Larry Page 与<Person id="brin" />在伦敦的 demo 室看着 DQN 自学打砖块时，已经看见了下一个十年的形状。

围棋的攻克者，正在这条路上孕育。

## 第三幕：AlphaGo 之夜（2016 年 3 月）

2015 年 10 月，DeepMind 在伦敦秘密举办了一场比赛：AlphaGo 5 比 0 击败欧洲围棋冠军樊麾（Fan Hui）。这场比赛的论文 2016 年 1 月登上《自然》，<Person id="silver" />为第一作者，<Person id="hassabis" />领衔。AlphaGo 的架构融合了三件武器——策略网络（Policy Network）预测人类高手的下法、价值网络（Value Network）评估当前局面胜率、蒙特卡洛树搜索（MCTS）将两者整合并展开搜索。

樊麾局之后，外界仍存怀疑。围棋职业九段们普遍认为，AlphaGo 距离顶级棋手仍有差距。

2016 年 3 月 9 日，首尔四季酒店。AlphaGo 与韩国九段<Person id="sedol" />的五局对决开始。第二局第 37 手，AlphaGo 在第五线点了一手"肩冲"，转播间的解说短暂失语——这一步在职业棋手的训练中几乎不会被考虑，胜率直觉判断为劣着。但棋局推演下去，所有人才意识到这是天外飞仙般的妙手。围棋世界陷入震惊：机器不仅在算棋，它似乎在"理解"棋。

最终比分 4 比 1，AlphaGo 取胜。李世石赢下的那一局——第四局第 78 手"神之一手"——后来成为人类对抗机器历史上的悲壮符号。一年后，AlphaGo Master 在网络上 60 连胜中外顶尖棋手；2017 年 5 月，AlphaGo 在乌镇 3 比 0 击败世界第一柯洁，赛后柯洁掩面流泪。DeepMind 随即宣布 AlphaGo 退役。

紧接着登场的是 AlphaGo Zero（2017 年 10 月）——它完全抛弃人类棋谱，仅靠自我对弈，从随机权重出发，72 小时即超越战胜李世石的版本。再之后是 AlphaZero（2017 年 12 月），同一套算法用 4 小时学会国际象棋、2 小时学会日本将棋，全部碾压顶级专用引擎。2019 年 12 月的 MuZero 更进一步，连游戏规则都不需要预先告知，仅凭交互即可学会下棋与玩 Atari。

围棋这块横亘在 AI 面前两千年的巨石，三年内被劈成了碎片。这场胜利对人类围棋本身亦有反向馈赠：柯洁、井山裕太、申真谞等顶级棋手公开承认，AlphaGo 改变了他们对开局与定式的理解。AI 的"妙手"被职业棋谱悄悄吸收，整个围棋世界的水准在此后五年被推上了新台阶。

## 第四幕：实时战略与不完全信息（2017—2019）

棋类已破，AI 把目光转向了一个更复杂的领域：实时战略游戏（RTS）。

《星际争霸 II》的难度远超围棋——动作空间近乎连续、信息部分可见、需要长时间的战略规划。2019 年 1 月，DeepMind 发布 AlphaStar。它先用人类对局做模仿学习，再通过"联盟训练"（League Training）让多个智能体相互博弈、互为对手。当年 12 月，AlphaStar 在 Battle.net 上以匿名身份达到欧洲服务器排名前 0.2% 的宗师级别。

OpenAI 则把战场押在了《Dota 2》。2017 年的 SoloMid 1v1 项目击败顶级选手 Dendi 之后，OpenAI Five 在 2018 年 The International 8 上首次公开亮相，2019 年 4 月在公开赛中击败世界冠军战队 OG，比分 2 比 0。这一结果让游戏 AI 真正走出了实验室——OpenAI 团队透露，OpenAI Five 在训练中累计经历了相当于 4.5 万年的游戏时间。

更深刻的突破发生在扑克桌上。扑克是不完全信息博弈：你看不到对手的手牌，对方的下注本身就是策略的一部分。2017 年 1 月，卡内基梅隆大学 Tuomas Sandholm 与<Person id="brown" />的 Libratus 在匹兹堡 Rivers Casino 与四名顶级德州扑克职业选手鏖战二十天，累计十二万局，最终赢下约 176 万美元筹码。2019 年 7 月，他们的 Pluribus 进一步攻克了六人桌德扑——这是博弈论上最难的多人不完全信息场景之一，论文以 *Superhuman AI for multiplayer poker* 为题登上《Science》。

至此，"棋类——电竞——扑克"的三连击告诉世界：完全信息、不完全信息、长程规划，AI 都能跨过。Meta AI 在 2022 年发布的 CICERO 进一步把战火烧到了《Diplomacy》——一个混合自然语言谈判与战略决策的游戏。CICERO 在线匿名比赛中跻身人类玩家前 10%，并能用自然语言与人类盟友谈判结盟、背叛、瓜分领地。语言、谈判、欺骗——这些过去被视为"人类专属"的社交技能，第一次被纳入 AI 的能力清单。

## 第五幕：游戏世界变成训练场

游戏对 AI 的意义，不止于"打败人类"。

更深层的角色，是把游戏变成训练通用智能的廉价沙盒。OpenAI Gym（2016）、DeepMind Lab（2016）、Unity ML-Agents（2018）、ProcGen Benchmark（2019）——一系列开源平台让强化学习的研究门槛大幅降低。Atari 100k 这样的小样本基准，倒逼研究者去关心样本效率而非纯算力。

2023 年，DeepMind 的 DreamerV3 在 Minecraft 中无需课程学习，从零开始学会了"采集钻石"这一在过去被视为强化学习圣杯的任务。2024 年 2 月，DeepMind 进一步发布 Genie——一个从无标注互联网视频中训练出来的"基础世界模型"（Foundation World Model），能够把一张静态图像转化为可由动作控制的 2D 游戏环境。Genie 不再只是"玩游戏"的 AI，而是一个会"生成游戏"的 AI。同年的 GameNGen 则展示了用扩散模型实时模拟《Doom》的可能：神经网络代替了游戏引擎本身。

游戏与 AI 的关系正在反转。过去，研究者把游戏当作 AI 的考场；今天，游戏正在变成 AI 的画布。

## 第六幕：NPC 的灵魂（2023—2026）

ChatGPT 之后，游戏内的非玩家角色（NPC）迎来了第二次生命。

传统 NPC 是有限状态机：玩家踩到触发器，NPC 念出预录的台词；剧情分支由设计师手工编排，每一句对白都有人写。Inworld AI（2021 年成立）把大语言模型嵌入 NPC 的"灵魂"中，让角色拥有持久记忆、性格设定与情感反应。Character.AI 则让数千万用户在浏览器里与"虚构人物"日复一日地聊天，2024 年其创始人重新加入 Google DeepMind，公司估值数十亿美元。

2024 年 GDC 上，育碧（Ubisoft）展示了其 NEO NPC 原型：玩家可以用自然语言与 NPC 对话，NPC 的回答由 LLM 实时生成，但被严格限制在角色背景之内。Nvidia 的 ACE 平台则提供了一整套从语音识别到面部动画的"NPC 后端"，并把推理延迟压到 100 毫秒级别——这是让对话感"自然"的物理底线。

研究层面，斯坦福大学 Joon Sung Park 等人在 2023 年的"生成式智能体"（Generative Agents）实验中，让 25 个 LLM 驱动的小镇居民在虚拟环境里自发地组织生日派对、跨日记忆彼此关系。这一实验被广泛认为是"开放世界 NPC"的研究原型。

但 LLM 驱动 NPC 也带来了新问题：幻觉、出戏、内容审核。一个会"自由发挥"的 NPC，可能在直播中说出令厂商窒息的台词。如何让 LLM 既"活"又"听话"，成为 2025—2026 年游戏 AI 最热门的工程课题。

## 第七幕：生成式游戏内容（PCG 的新春天）

程序化生成（Procedural Content Generation, PCG）并不是新词。《我的世界》（Minecraft）、《无人深空》（No Man's Sky）早已用算法生成出无穷的星球与地形。但生成式 AI 给 PCG 带来了质变。

地图、关卡、剧情、角色、贴图、音效——每一个原本需要美术或策划手工打磨的环节，都开始有 AI 工具介入。2024—2025 年的趋势是：

- 角色与动作：腾讯、米哈游公开演示用扩散模型生成可绑定骨架的角色立绘与动作序列。
- 关卡：MIT 与 Riot Games 合作的研究展示了基于 LLM 的关卡设计辅助。
- 实时世界：DeepMind 的 Genie 2（2024 年 12 月）从一张图像即可生成可交互三维世界，时长达一分钟。
- 玩法循环：早期实验者尝试让 LLM 在游戏运行时动态生成任务与对白。

业界由此分裂为两派。乐观派认为，AI 让独立开发者也能造出 3A 级别的世界；怀疑派则担心，PCG 会让游戏沦为永远不会"完成"的内容流，玩家被困在一个由算法无穷喂养的回音壁里。

## 第八幕：版权、就业与抵抗

2024 年 7 月 26 日，美国 SAG-AFTRA 工会对十家电子游戏公司（包括动视暴雪、艺电、迪士尼互动）发起罢工，核心议题之一就是 AI 对配音演员的替代。罢工持续到 2025 年中仍未完全解决，许多游戏公司被迫调整声优合同条款，加入"明确许可方可用 AI 训练或克隆"的保护性语言。日本声优工会也在同年组建了反 AI 联盟。

更早一些，2023 年育碧、SEGA、Take-Two 等公司因在内部使用生成式 AI 工具被员工与外界质询：训练数据从哪儿来？侵权风险谁承担？被替代的美术、关卡设计师将何去何从？

2024 年下半年，多家上市游戏公司在投资者电话会议中将"生成式 AI 应用率"作为关键 KPI；与此同时，独立游戏开发者社区却在呼吁"零 AI"标签，玩家也开始用 Steam 评论抵制疑似 AI 生成的内容。游戏业站在一个尴尬的十字路口：成本压力推动它拥抱 AI，舆论与文化保守主义又将它拉回手工的时代。

游戏曾是 AI 最纯粹的舞台。如今，它正在变成 AI 与人类如何共处的第一个真实战场。

## 尾声：游戏胜利能否等于通用智能？

最后一个问题留给思想史。

每当 AI 攻克一款游戏，"通用人工智能（AGI）"的预言便会在媒体上飞涨一轮。但研究者内部的认识更为审慎。游戏是被定义良好的环境：规则封闭、目标可量化、状态完全或部分可观察。现实世界与之相反——目标模糊、规则随时变化、对手未必理性。AlphaZero 不会洗碗，AlphaStar 不懂安抚一个生气的玩家，OpenAI Five 在 Dota 之外从未被指望会下棋。

游戏 AI 的胜利，证明了"在受限环境中超越人类"是可达成的工程目标，但并未自动解开通用智能的难题。这一区分在 2024 年大语言模型登场后被进一步放大——LLM 在开放语言任务上的表现，反而比 AlphaZero 在围棋上的表现更接近"通用"。游戏作为 AI 的最初战场已经基本完成它的历史使命；下一个考验的舞台，是更模糊、更复杂、与人类生活贴得更近的现实世界。

---

::: tip 太史公曰
余观 AI 与游戏八十年因缘，叹其相辅相成，又互为镜鉴。塞缪尔之跳棋程序，开"机器学习"之名；深蓝之于卡斯帕罗夫，证暴力搜索可摧人类直觉；AlphaGo 之第二局第 37 手，则使举世明白：神经网络已能在围棋这等"东方艺术"上窥见人之未见。游戏之所以为 AI 试金石，因其规则清晰、目标可量化、对局可万亿次重复——此皆现实世界之所稀缺。然胜局亦藏陷阱：能在围棋上不败者，未必能在街市上买菜；能在《星际》上指挥千军者，未必懂得安抚一名愤怒的玩家。智能之边界，远不止于胜负二字。今日生成式 AI 反向冲击游戏产业，配音演员罢工、独立开发者抵制、巨头将"AI 渗透率"列为 KPI，皆是技术外溢于伦理与就业之必然。游戏自最早一日便是 AI 之舞台，今后亦将是 AI 与人类如何分工、如何共生的最直接实验场。胜负易见，分寸难拿——此后之难题，胜过任何一盘棋局。
:::

## 亲历者说

::: info 征集中
如果你参与过游戏 AI 的研究、开发或对局，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Samuel, A. L. (1959). Some studies in machine learning using the game of checkers. *IBM Journal of Research and Development*, 3(3), 210-229.
2. Campbell, M., Hoane, A. J., & Hsu, F. H. (2002). Deep Blue. *Artificial Intelligence*, 134(1-2), 57-83.
3. Mnih, V., Kavukcuoglu, K., Silver, D., et al. (2015). Human-level control through deep reinforcement learning. *Nature*, 518(7540), 529-533.
4. Silver, D., Huang, A., Maddison, C. J., et al. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature*, 529(7587), 484-489.
5. Silver, D., Schrittwieser, J., Simonyan, K., et al. (2017). Mastering the game of Go without human knowledge. *Nature*, 550(7676), 354-359.
6. Silver, D., Hubert, T., Schrittwieser, J., et al. (2018). A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play. *Science*, 362(6419), 1140-1144.
7. Schrittwieser, J., Antonoglou, I., Hubert, T., et al. (2020). Mastering Atari, Go, chess and shogi by planning with a learned model. *Nature*, 588(7839), 604-609.
8. Vinyals, O., Babuschkin, I., Czarnecki, W. M., et al. (2019). Grandmaster level in StarCraft II using multi-agent reinforcement learning. *Nature*, 575(7782), 350-354.
9. Berner, C., Brockman, G., Chan, B., et al. (2019). Dota 2 with large scale deep reinforcement learning. *arXiv preprint arXiv:1912.06680*.
10. Brown, N., & Sandholm, T. (2018). Superhuman AI for heads-up no-limit poker: Libratus beats top professionals. *Science*, 359(6374), 418-424.
11. Brown, N., & Sandholm, T. (2019). Superhuman AI for multiplayer poker. *Science*, 365(6456), 885-890.
12. Bruce, J., Dennis, M. D., Edwards, A., et al. (2024). Genie: Generative Interactive Environments. *Proceedings of ICML 2024*.
13. Hafner, D., Pasukonis, J., Ba, J., & Lillicrap, T. (2023). Mastering diverse domains through world models (DreamerV3). *arXiv preprint arXiv:2301.04104*.
