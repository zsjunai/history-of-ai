# 书 · 强化学习简史

> 一切学习的雏形，都是"试一试，再试一试"。从巴甫洛夫的狗到 AlphaGo 的第三十七手，再到让 GPT 学会礼貌的 RLHF，强化学习是这本史书里最忠于"经验"的一脉。

## 第一幕：行为主义的实验台

强化学习不是计算机的发明，而是行为科学的遗产。

19 世纪末，俄国生理学家巴甫洛夫（Ivan Pavlov）在研究狗的消化时发现：每次喂食前响铃，几次之后，铃声本身就足以让狗分泌唾液。这一"经典条件反射"为"刺激—反应"的可学习性提供了第一份硬数据。

进入 20 世纪，美国心理学家桑代克（Edward Thorndike）提出"效果律"（Law of Effect）：行为若带来满足，则在类似情境下被强化；若带来不适，则被削弱。1930 至 1940 年代，斯金纳（B. F. Skinner）在哈佛搭起著名的"斯金纳箱"，把强化与惩罚做成了一门可量化的学问——按下杠杆得到食物，鸽子很快学会了按杠杆。这是"试错学习"的工程化雏形。

与此同时，神经科学家 <Person id="hebb" /> 在 1949 年的《行为的组织》中提出"同时激发的神经元会加强彼此连接"——为生物层面的学习机制铺下了细胞级注脚。学者们意识到：强化是一种通用的学习原理，跨越生物与机器。

## 第二幕：贝尔曼的递归——最优控制的数学化

把这门学问交给数学的，是贝尔曼（Richard Bellman）。

1957 年，贝尔曼在兰德公司工作期间提出动态规划（Dynamic Programming），并写下流传至今的贝尔曼方程：一个状态的价值等于"当前回报 + 折扣后的下一状态价值"。这一递归式把"如何在序列决策中取得最优"压缩成了一行。控制论意义上的最优控制，从此有了递归求解的范式。

贝尔曼提出"维数灾难"（Curse of Dimensionality）一词时半带戏谑——状态空间一旦成倍扩张，动态规划的计算开销就指数爆炸。这个诅咒，会在六十年后被深度网络以一种意想不到的方式部分破解。

几乎同时，AI 领域诞生了第一个真正"能学"的机器：1959 年，IBM 的 <Person id="samuel" /> 写出了一个能下西洋跳棋（Checkers）的程序，并让它和自己对弈——这是有据可查的第一个使用某种"自我对局"和价值函数学习的程序。塞缪尔的工作领先时代二十年，但当时无人理解其重要性。

值得一提的还有 <Person id="michie" /> 在 1961 年用 304 个火柴盒拼出的 MENACE——一个学会下井字棋的"机械学习器"。每个火柴盒代表一个棋局，盒中珠子的颜色代表下一步的概率；赢则奖励、输则惩罚。MENACE 以最朴素的形式演示了"试错强化"的全部内核，至今仍是教学中最动人的例子。

## 第三幕：Sutton 与 Barto——RL 成为一门学问

强化学习真正成为一门有名字、有教材、有共识的学问，要等到 1980 年代。

Richard Sutton 与 Andrew Barto 自 1970 年代末就在马萨诸塞大学合作，把行为主义、动态规划、神经网络、最优控制糅合为一套统一的形式语言。他们引入了一个简单却强大的工具——时间差分学习（Temporal-Difference Learning, TD）：不必等到一局结束才更新价值，每一步都用"下一步的估计"去校正"当前估计"。TD 同时是动态规划的样本版，也是蒙特卡洛方法的偏差版，介于二者之间，效率惊人。

1989 年，剑桥的 Watkins 在博士论文中提出 Q-Learning：直接学习"在状态 s 下采取动作 a 的长期价值"，无需建模环境本身。Q-Learning 收敛性证明在 1992 年由 Watkins 和 Dayan 给出，从此成为整个 RL 教科书的基石算法。

1998 年，Sutton 与 Barto 出版《Reinforcement Learning: An Introduction》。这本绿色封面的教材至今仍是入门 RL 的不二之选——清晰、严谨、不依赖花哨技巧，把这门学问的内核摆在台面上。

但在 2010 年之前，RL 始终是一门"小数据"的学问。状态空间一旦稍大，表格法就崩溃；函数逼近又常常不收敛。RL 像一个理论优雅、实战羸弱的好学生。

## 第四幕：DQN 与 AlphaGo——深度强化学习的两次惊雷

转折发生在 2013 年。

伦敦一家叫 DeepMind 的小公司向 NIPS 提交了一篇短文：*Playing Atari with Deep Reinforcement Learning*。<Person id="hassabis" /> 团队的 Mnih 等人把 Q-Learning 与卷积网络结合，让一个 DQN 智能体仅凭屏幕像素和分数，在 49 款 Atari 游戏上达到了人类水平甚至超越人类。秘诀有两个：经验回放（Experience Replay）打破样本相关性，目标网络（Target Network）稳定训练。这篇论文 2015 年又发表在《Nature》上。Google 在 2014 年初以约 5 亿美元收购 DeepMind，标志着深度强化学习正式进入大众视野。

但真正震撼世界的，是 2016 年 3 月的首尔。

AlphaGo 与韩国棋手 <Person id="sedol" /> 进行了五番棋。第二局第 37 手，AlphaGo 在右上角下了一步"非人类"的棋——许多职业棋手当场惊呼"这是 AI 的失误"。几小时后，他们意识到这是几十年来从未被发现的妙手。这一幕被永久写入棋史。<Person id="silver" /> 主导的 AlphaGo 把蒙特卡洛树搜索（MCTS）与策略/价值双网络结合，用 3000 万局自我对弈训练，最终以 4:1 战胜世界冠军。

2017 年的 AlphaZero 走得更远：彻底丢弃人类棋谱，仅凭规则与自我对弈，在围棋、国际象棋、将棋三盘上同时达到超人水平。Sutton 后来在《The Bitter Lesson》中点破：能够规模化的搜索与学习，最终战胜了一切手工知识。这是深度强化学习留给整个 AI 界的一个寒冷而深刻的教训。

值得一提的是 2020 年的 MuZero：它甚至不需要规则，仅靠观测和奖励就能学习棋类与 Atari。这意味着 RL 已经具备了"在未知环境中自己建模"的能力——离一个真正能"探索未知世界"的智能体，又近了一步。

## 第五幕：策略梯度家族——从 A3C 到 PPO

DQN 适合离散动作，但机器人控制需要连续动作。RL 的另一条主线——策略梯度（Policy Gradient）——在这一时期繁荣起来。

2014 年的 DDPG 把 DQN 思路移植到连续动作。2015 年 Schulman 等人提出 TRPO（Trust Region Policy Optimization），引入约束保证策略每次更新不至于太"激进"。2017 年同一作者改写出 PPO（Proximal Policy Optimization）——用 clip 技巧近似 TRPO，工程实现简洁、稳定、强大，迅速成为工业界事实标准。

2016 年 Mnih 等人提出 A3C（Asynchronous Advantage Actor-Critic），让多线程并行采样训练，把训练速度推上一个台阶。2018 年 Haarnoja 等人提出 SAC（Soft Actor-Critic），引入最大熵框架，在机器人控制基准上表现尤为突出。

到 2020 年前后，PPO + 大规模分布式训练已经成为多数游戏 AI 与机器人项目的默认套路。RL 终于走出了"理论优雅、工程脆弱"的尴尬。

值得记下的细节是：PPO 的论文只有八页，超参数表简短得近乎敷衍——但它真正能跑起来。整个 RL 工程界这才意识到，比"理论上更优"更重要的，是"工程上更稳"。

## 第六幕：模拟与现实——从 OpenAI Five 到魔方机械手

2018 年起，RL 开始攻克真正复杂的开放环境。

2018 年 6 月，OpenAI Five 在 5v5 模式下击败业余 Dota 2 战队；2019 年 4 月，进化版本击败了世界冠军 OG。系统在数万 CPU 与数百 GPU 上运行了相当于人类几百年的对局时间。同年，DeepMind 的 AlphaStar 在《星际争霸 II》中达到了 Grandmaster 段位。这两项工作把 RL 从"玩 Atari"推到了"玩职业电竞"，复杂度提升了几个数量级。

更难的是把 RL 搬到真实世界。2019 年，OpenAI 的机器手 Dactyl 在模拟中训练后，单手解开了一个魔方。它不是机械系统胜出——它是 RL + Domain Randomization 把仿真到现实的鸿沟填上的关键一步。

机器人、自动驾驶、芯片布线、化学反应优化，RL 的足迹开始遍布工业。Google 的 AutoML、DeepMind 的 AlphaChip、推荐系统中的 contextual bandits、再到推荐排序里的 Off-Policy Evaluation——RL 的工程化落地比许多人想象的更深也更早。

2022 年 DeepMind 的 AlphaTensor 发现了更高效的矩阵乘法算法，2023 年 AlphaDev 找到了比人类几十年标准更快的排序与哈希实现——RL 不再只是控制器，而是在向"算法发现"这一更上游的位置进军。

## 第七幕：让模型听话——RLHF 的奇迹

2017 年，OpenAI 的 Christiano 等人发表《Deep Reinforcement Learning from Human Preferences》：让人类从两段视频中选择更好的那段，用人类偏好训练一个奖励模型，再用 RL 优化策略。这个看似细节的工作，五年后改变了整个 AI 工业。

2022 年初，OpenAI 发布 InstructGPT 论文。他们把 RLHF（Reinforcement Learning from Human Feedback）三步法标准化：先做监督微调（SFT），再训练奖励模型（RM），最后用 PPO 优化策略。结果惊人——一个 13 亿参数的 InstructGPT，在用户评测中胜过了 1750 亿参数的原始 GPT-3。

同年 11 月 30 日，ChatGPT 上线。让"它听话"的关键魔法，正是 RLHF。强化学习以一种最不可预料的方式，成了 LLM 时代的核心技术之一——不是用来玩游戏的，而是用来修炼大模型礼貌、有用、无害的。

之后的 DPO（2023）、KTO、IPO 等方法尝试简化 RLHF 流程；Anthropic 的 Constitutional AI（2022）则尝试让模型从"宪法"中自我对齐，把人类反馈降到最少。但底层的思路一脉相承：用偏好数据塑造行为，用 RL 把偏好压进权重。

## 第八幕：推理模型时代——RL 的复兴

2024 年 9 月，OpenAI 发布 o1。它不是一个更大的 GPT，而是一个被强化学习训练成"先思考再回答"的模型。在数学、编程、科学推理基准上，o1 把前沿一举推高几十个百分点。背后的关键是：用 RL 优化"思维链"，让模型学会自我反思与试错。

2025 年初，DeepSeek 发布 R1，并把训练细节大胆开源。R1 的核心是"纯 RL + 规则可验证奖励"——不需要海量人类偏好数据，只要题目有答案，就能让模型在 RL 中自己学会推理。这条路线让推理模型的训练成本骤降，迅速点燃了一场全球开源复现潮。

强化学习曾被誉为"AGI 之路"，又被深度学习抢了风头，再被 LLM 边缘化，如今又以"推理"之名站回中心。这个学科的命运，仿佛它自己研究的智能体——在试错中反复跌倒，又在合适的奖励信号下重新崛起。

## 未竟之问

RL 的核心难题至今未尽解：奖励函数怎么设？人类偏好真的能被一个标量奖励压缩吗？为什么纯 RL 训练经常不稳定？仿真到现实的鸿沟如何彻底跨越？当推理模型在 RL 中学会自我反思，它学到的是"思考"，还是"模仿思考的样子"？

强化学习的故事还没写完，因为关于"学习"本身的故事，从来都没写完。

---

::: tip 太史公曰
余观强化学习之百年，盖一脉"试错"哲学之延伸耳。巴甫洛夫之犬、桑代克之猫、斯金纳之鸽，皆以行为换刺激，与今之 agent 无异。贝尔曼一方程，立动态规划之骨；Sutton 与 Barto 一书，定 RL 一脉之名。然此学之难，难在两处——一曰"维数灾难"，状态既多则计算崩；二曰"奖励之模糊"，世间万事，岂皆能以一标量度之？深度学习入主，DQN 一出，Atari 之战告捷；AlphaGo 三十七手震惊棋坛，AlphaZero 自学成神，Sutton 以"苦涩之教训"收笔——能扩展之学习与搜索，胜过一切人类先验。然 RL 之名，曾几欲被 LLM 所掩；不料 RLHF 一出，让大模型学会礼貌，竟成 ChatGPT 之灵魂；及至 o1、R1 起，推理之火由 RL 重燃，方知此学未死。盖学习者，万物之根本——生物以神经回路记之，机器以梯度更新之，二者殊途而同归。后世若问 RL 之最终归宿？答曰：当奖励能精确刻画"善"，当智能体能在真实世界中如人一般试错而不致命，方为始也。
:::

## 亲历者说

::: info 征集中
如果你参与过 DQN/AlphaGo 系列、机器人 RL、RLHF 数据标注或推理模型训练，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Bellman, R. (1957). *Dynamic Programming*. Princeton University Press.
2. Samuel, A. L. (1959). Some studies in machine learning using the game of checkers. *IBM Journal of Research and Development*, 3(3), 210-229.
3. Sutton, R. S. (1988). Learning to predict by the methods of temporal differences. *Machine Learning*, 3(1), 9-44.
4. Watkins, C. J. C. H., & Dayan, P. (1992). Q-learning. *Machine Learning*, 8(3-4), 279-292.
5. Sutton, R. S., & Barto, A. G. (1998). *Reinforcement Learning: An Introduction*. MIT Press.
6. Mnih, V., Kavukcuoglu, K., Silver, D., et al. (2015). Human-level control through deep reinforcement learning. *Nature*, 518(7540), 529-533.
7. Silver, D., Huang, A., Maddison, C. J., et al. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature*, 529(7587), 484-489.
8. Silver, D., Schrittwieser, J., Simonyan, K., et al. (2017). Mastering the game of Go without human knowledge. *Nature*, 550(7676), 354-359.
9. Schulman, J., Wolski, F., Dhariwal, P., Radford, A., & Klimov, O. (2017). Proximal policy optimization algorithms. *arXiv preprint arXiv:1707.06347*.
10. Christiano, P., Leike, J., Brown, T., et al. (2017). Deep reinforcement learning from human preferences. *Advances in Neural Information Processing Systems*, 30.
11. Ouyang, L., Wu, J., Jiang, X., et al. (2022). Training language models to follow instructions with human feedback. *Advances in Neural Information Processing Systems*, 35.
12. DeepSeek-AI. (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
