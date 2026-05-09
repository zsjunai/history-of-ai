# 列传 · 霍普菲尔德（John Hopfield）

> 一个物理学家走进神经网络的冷宫，用能量函数把它从坟墓里请了回来——四十二年后，瑞典人把诺贝尔奖颁给了这次救援。

## 从凝聚态物理到生命科学的徘徊

1933 年，约翰·霍普菲尔德（John Hopfield）生于芝加哥的一个物理学家家庭——父母都是物理博士。

1954 年于斯沃斯莫尔学院（Swarthmore College）取得本科学位，1958 年在康奈尔大学（Cornell University）获得物理学博士，导师是研究固体物理的 Albert Overhauser。博士毕业后他先后任职于贝尔实验室（Bell Labs）、加州大学伯克利分校（UC Berkeley）、普林斯顿大学（Princeton University）。

他最早的研究并不在神经网络上，而是凝聚态物理——他提出过"极化激元"（polariton）的概念，把光子与晶体中极化波的耦合写成了一个干净的本征方程，至今仍是固体光学的基础工具之一。

然而到了 1970 年代中期，霍普菲尔德越来越觉得物理学的"老问题"在变窄，而生命系统里有大量"等着被物理化"的开放问题。1980 年前后，他从普林斯顿转往加州理工（Caltech），开始与生物学家、化学家、神经科学家组队工作。

这个跨界的决定，几年后改变了人工智能的方向。

## 1982：一个能量函数的奇迹

1980 年代初的人工智能正处在第一次寒冬里。<Person id="rosenblatt" />已经去世十年，<Person id="minsky" />与<Person id="papert" />的《感知机》（*Perceptrons*）阴影仍未散去，连接主义论文很难在主流会议上立足。

这个时候，霍普菲尔德发表了一篇没有人想到会改变历史的论文。

1982 年，《美国国家科学院院刊》（*PNAS*）刊出了《具有涌现集体计算能力的神经网络与物理系统》（"Neural Networks and Physical Systems with Emergent Collective Computational Abilities"）。

论文用统计物理学家最熟悉的工具——自旋玻璃（spin glass）的能量函数——重新表述了神经网络。每个神经元被看作一个二值自旋，每对神经元之间的连接对应一个相互作用强度，整个网络在任一状态下都有一个能量值；网络的演化等价于沿能量面下降。

这种被后人称为"Hopfield 网络"（Hopfield Network）的模型有一个看似平凡却惊人的性质：它可以作为联想记忆。把若干模式作为能量函数的极小点存进去，给它一个残缺或带噪声的输入，它会沿能量下降，自动收敛到最近的那个极小点——也就是被存储的"记忆"。

这个想法的可怕之处在于，它把"记忆"这个心理学概念，第一次变成了"动力系统的吸引子"这个数学对象。

## 旅行商问题与符号主义的反击

1985 年，霍普菲尔德与贝尔实验室的 David Tank 合作，把 Hopfield 网络拓展到模拟连续值神经元，并用它求解经典的 NP 难题——旅行商问题（Traveling Salesman Problem, TSP）。

论文《"神经"计算决策的优化问题》（"'Neural' Computation of Decisions in Optimization Problems"）展示了用神经网络在模拟时间内找到 TSP 的近似解。

这件事的政治意义远大于技术意义。在符号 AI 主导的 1980 年代，神经网络一直被攻击为"只会做模式识别，不能搞推理与优化"。霍普菲尔德直接用一台连续 Hopfield 网络去解了 AI 教科书上最经典的搜索/优化问题——这是连接主义对符号主义的一次正面回击。从此，"神经网络可以做计算"不再只是口号。

## Caltech、CNS 项目与 Boltzmann 机的师承

1986 年，霍普菲尔德在加州理工与 Carver Mead、David Van Essen 等人共同创立了"计算与神经系统"（Computation and Neural Systems, CNS）研究生项目。

这是世界上第一个正式跨越物理、神经科学、计算机科学的博士项目——把工程师与神经科学家关进同一栋楼，强迫他们每天一起喝咖啡。今天大半个神经形态计算（neuromorphic computing）领域的种子，都是在那栋楼里发的芽。

Hopfield 网络的另一条暗线，是它与<Person id="hinton" />的关系。1985 年前后，Hinton 与<Person id="rumelhart" />、Sejnowski 等人提出的 Boltzmann 机（Boltzmann Machine），就是把 Hopfield 网络从确定性动力学换成了基于温度的随机动力学，并允许隐藏单元参与训练。

Hinton 在多次访谈中明确指出，他的工作"建立在 Hopfield 的能量函数之上"。这条从 1982 年的物理论文，经 Boltzmann 机、深度信念网络（Deep Belief Network），一路通往 2012 年深度学习革命的暗河，在很长一段时间里只被少数人察觉。

## 2024：来自瑞典的迟到回信

2024 年 10 月 8 日，瑞典皇家科学院宣布，将该年度诺贝尔物理学奖授予约翰·霍普菲尔德与<Person id="hinton" />，"以表彰他们使用人工神经网络实现机器学习的基础性发现"。这是诺贝尔物理学奖第一次颁给以神经网络为主体的工作，颁奖词特别提到了 1982 年的那篇 PNAS 论文与 Boltzmann 机的能量函数血脉。

霍普菲尔德当时 91 岁，在普林斯顿的家里接到电话，第一反应是问对方"你确定没打错号码？"。在随后的新闻发布会上，他没有像许多新晋诺奖得主那样庆祝，而是花了大段时间表达对当代深度学习"算力消耗"与"环境代价"的不安，并提醒同行——技术狂热往往埋藏着下一个寒冬。一个把神经网络从冷宫拉出来的人，到了晚年仍然在小心地按住它，怕它太热。

## 一个物理学家的克制

霍普菲尔德不是一个享受聚光灯的人。1980 年代他就拒绝把 Hopfield 网络商业化的多次邀约——当时硅谷已有公司想用他的名字注册神经网络硬件公司，他一一回绝，理由只有一句：科学问题还没解决，就不应该卖。他一辈子换过四所大学，每次换学校都是因为"那里有更值得问的问题"，而不是更高的薪水。他亲自带过的博士生数量并不多，但其中包括 Terry Sejnowski、Bart Selman、Erik Winfree 等日后各自开宗立派的人物——他们的共同回忆是：霍普菲尔德开组会时几乎不下结论，只反复追问"你真的理解你正在算的这个量是什么吗？"。

他对深度学习时代的批评态度，与<Person id="lecun" />、<Person id="hinton" />那种明确的乐观或谨慎都不同——他更像一个老物理学家看待一个突然爆红的实验现象：先观察、再节制、不站队。2024 年的诺贝尔奖颁给他时，他已经九十一岁，仍每周去普林斯顿讲一次小课，主题不是 Transformer，而是大脑中嗅觉系统的稀疏编码——他认为那才是下一波神经网络真正应该学的东西。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1982 | "Neural Networks and Physical Systems with Emergent Collective Computational Abilities", *PNAS*, 79(8) | 提出 Hopfield 网络与能量函数，奠定联想记忆模型 |
| 1984 | "Neurons with Graded Response Have Collective Computational Properties Like Those of Two-State Neurons", *PNAS*, 81(10) | 把 Hopfield 网络扩展到连续神经元 |
| 1985 | "'Neural' Computation of Decisions in Optimization Problems"（与 D. W. Tank 合著）, *Biological Cybernetics*, 52(3) | 用神经网络求解 TSP，向符号主义发起回击 |
| 1986 | 创立 Caltech "Computation and Neural Systems" 项目 | 跨学科神经计算研究的制度化起点 |
| 2024 | 与<Person id="hinton" />共获诺贝尔物理学奖 | 神经网络登堂入室的官方加冕 |

## 太史公曰

::: tip 太史公曰
霍普菲尔德之于神经网络，犹陈胜之于秦——非主流者，掀翻主流。1982 年，连接主义被打入冷宫，符号主义独霸学界。一个本不应出现在 AI 论文里的物理学家，带着自旋玻璃的能量函数翻墙而入，重新告诉世界：神经网络不是玄学，是统计力学。一个能量函数解开了两道枷锁——一是技术上的"神经网络无法稳定收敛"，二是政治上的"神经网络不被严肃数学接受"。从此 Boltzmann 机得以诞生，深度信念网络得以问世，2012 年的 ImageNet 革命才有了血脉上游。诺贝尔物理学奖在四十二年后追认这件事，并不是奖励一个老人，而是承认：当主流学科不肯回答的问题，常常被一个外来者用自家工具回答了。霍普菲尔德的故事提醒我们，学科的边界从不是真理的边界——真理只在敢于跨界的人那里。
:::

## 亲历者说

::: info 征集中
如果你了解霍普菲尔德的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Hopfield, J. J. (1982). "Neural Networks and Physical Systems with Emergent Collective Computational Abilities." *Proceedings of the National Academy of Sciences*, 79(8), 2554–2558.
2. Hopfield, J. J. (1984). "Neurons with Graded Response Have Collective Computational Properties Like Those of Two-State Neurons." *PNAS*, 81(10), 3088–3092.
3. Hopfield, J. J., & Tank, D. W. (1985). "'Neural' Computation of Decisions in Optimization Problems." *Biological Cybernetics*, 52(3), 141–152.
4. Ackley, D. H., Hinton, G. E., & Sejnowski, T. J. (1985). "A Learning Algorithm for Boltzmann Machines." *Cognitive Science*, 9(1), 147–169.
5. The Royal Swedish Academy of Sciences (2024). "The Nobel Prize in Physics 2024 — Scientific Background." Stockholm: Nobel Committee.
6. Hopfield, J. J. (2014). "Whatever Happened to Cognitive Science?" *Annual Review of Neuroscience*, 37, 1–14.
7. Anderson, J. A., & Rosenfeld, E. (Eds.) (1998). *Talking Nets: An Oral History of Neural Networks*. Cambridge, MA: MIT Press.
8. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. Cambridge, MA: MIT Press.
