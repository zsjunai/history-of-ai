# 列传 · 明斯基（Marvin Minsky）

> 他要把心智拆解成无数个小机器，最终却用一本书冻结了另一条通向心智的路。

![明斯基（Marvin Minsky），2012 年](/images/people/minsky.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 一台不会思考的神经网络

1951 年的普林斯顿（Princeton），一个二十四岁的研究生与同学埃德蒙兹（Dean Edmonds）一起，把三千个真空管、四十个 B-24 轰炸机的废旧自动驾驶仪和大量电缆装进一个房间。这台机器叫 SNARC（Stochastic Neural Analog Reinforcement Calculator），是历史上第一台用硬件模拟神经网络学习过程的装置。它能模拟一只老鼠在迷宫中寻路：跑对了，正确突触的权重被强化；跑错了，权重被削弱。

这位研究生叫马文·明斯基（Marvin Minsky）。SNARC 后来成为他的博士论文。它不是一台会思考的机器，但它第一次把"学习"这件事从生物的神秘领域，拉进了工程师的车间。年轻的明斯基相信：心智不是奇迹，而是一种可以被复制的过程。

明斯基出生于 1927 年的纽约，父亲是一位眼科外科医生。他在哈佛读本科时主修数学，同时在生理学实验室与音乐厅之间游走——他终生热爱钢琴，也终生痴迷大脑的神经回路。这种横跨工程与生物的双重训练，将贯穿他此后六十年的研究生涯。

讽刺的是，十八年后，正是这同一个明斯基，将亲手把神经网络的火苗按进灰烬。

## 达特茅斯之夏

1956 年夏天，新罕布什尔州达特茅斯学院（Dartmouth College）的一栋小楼里，<Person id="mccarthy" />、<Person id="shannon" />、<Person id="rochester" />和明斯基召集了十位学者，开了两个月会。这就是日后被称作"AI 的诞生之地"的达特茅斯会议（Dartmouth Conference）。

明斯基那年二十九岁。他在会议上没有提交什么石破天惊的论文，但他是房间里那个最相信"心智可以被造出来"的人。他的乐观近乎宗教式的——他坚信几代人之内，机器就能拥有人类水平的智能。这种乐观贯穿了他后来六十年的学术生涯，也贯穿了 AI 这个学科起伏的所有春秋。

会后，明斯基和麦卡锡一起前往麻省理工学院（MIT）。1959 年，两人共建了 MIT 人工智能项目（MIT AI Project），后来演化为 MIT 人工智能实验室（MIT AI Lab）——AI 史上最重要的一座道场。

## *Perceptrons*：一本书冻结二十年

1957 年，<Person id="rosenblatt" />在康奈尔造出了"感知器"（Perceptron）。这是一台能学习的电子机器，被《纽约时报》誉为"将能行走、说话、看见、写作、自我复制的电子计算机的胚胎"。罗森布拉特高调宣传，明斯基冷眼旁观——两人本是布朗克斯科学高中（Bronx High School of Science）的同窗。

1969 年，明斯基与<Person id="papert" />合著的《感知器》（*Perceptrons: An Introduction to Computational Geometry*）出版。这是一本严密的数学专著，证明了单层感知器的根本局限：它甚至无法解决简单的"异或"（XOR）问题——即判断两个输入是否不同。两位作者在书中暗示，多层网络可能也无济于事。

这本书的影响力远超它的本意。神经网络的研究经费迅速枯竭，连接主义（Connectionism）路线在英美几近停摆，整个领域沉寂了将近二十年。直到 1986 年，<Person id="rumelhart" />、<Person id="hinton" />、<Person id="williams_rj" />等人在《自然》杂志上发表反向传播（Backpropagation）论文，这条路才重新苏醒——而那时罗森布拉特已经因游艇事故去世十五年。

明斯基本人后来辩解说，他从未否认多层网络的潜力，只是当时无人知道如何训练它们。但历史不接受这种辩解。在很多连接主义者的回忆里，*Perceptrons* 是一本"杀死了一代研究"的书。这是明斯基的"原罪"，也是 AI 史上最有名的一次方向之争。

## 框架：一个关于知识表示的提案

明斯基的另一面，是符号主义阵营中最深刻的思想者之一。1974 年，他在 MIT 备忘录《表示知识的框架》（"A Framework for Representing Knowledge"）中提出"框架理论"（Frame Theory）：人类不是用一条条孤立的命题来理解世界，而是用一种结构化的"模板"——比如"生日聚会"这个框架，里面预设了蛋糕、礼物、蜡烛、寿星、唱歌这些槽位（slot）和它们的默认值。当我们走进一个新房间，是这些已有的框架在帮助我们瞬间理解眼前的一切。

框架理论后来深刻影响了知识表示（Knowledge Representation）、语义网络（Semantic Network）、面向对象编程（Object-Oriented Programming）的早期设计。<Person id="schank" />的脚本理论（Script Theory）是它的近亲。今天的本体论工程（Ontology Engineering）、知识图谱（Knowledge Graph）的祖谱里，都有这本备忘录的影子。

## 心智社会论

1985 年，明斯基出版了《心智社会》（*The Society of Mind*）。书中提出一个激进的观点：心智没有中心，没有总指挥，没有一个"我"。心智是由无数个简单的、笨拙的"代理人"（agents）组成的社会——每一个 agent 只会做一件极小的事，比如"识别一个边缘""握住一个杯子""避免碰撞"。智能从这些 agent 之间的合作、竞争与切换中涌现。

这本书写成了一种奇怪的形式：每页只讲一个想法，像箴言录，又像一本写给孩子的哲学书。它没有提供严格的算法，却给出了一种关于心智的整体图像。多智能体系统（Multi-Agent System）、行为主义机器人学（Behavior-based Robotics）的研究者都从中汲取过灵感。

2006 年，他又出版了《情感机器》（*The Emotion Machine*），把情感也纳入这套 agent 模型——情感不是理性的反面，而是大脑切换思维方式的一种机制。

## 库布里克的顾问，与最后的阴影

明斯基的影响远不止学界。1968 年，斯坦利·库布里克（Stanley Kubrick）拍摄《2001：太空漫游》（*2001: A Space Odyssey*）时，专程聘请明斯基担任 AI 顾问。电影中那台名为 HAL 9000 的人工智能，吸收了明斯基对机器智能的诸多设想——也吸收了他对人造心智可能失控的隐忧。

他培养的学生群星璀璨：温斯顿（Patrick Winston）后来掌管 MIT AI 实验室；维诺格拉德（Terry Winograd）写出 SHRDLU；尚克（Roger Schank）开创剧本理论；休伊特（Carl Hewitt）发明 Actor 模型；斯托曼（Richard Stallman）后来掀起自由软件运动。MIT AI Lab 在他和麦卡锡之后，几乎养成了半部 AI 史。

1969 年，明斯基获得图灵奖。这是给一位四十二岁奠基者的全部嘉勉。

但荣誉之外，晚年的明斯基也留下了无法抹去的阴影。2019 年，《纽约时报》等媒体在调查爱泼斯坦（Jeffrey Epstein）案时披露：明斯基曾多次造访爱泼斯坦的私人岛屿，且有受害者证词指控涉及他。明斯基已于 2016 年去世，无法回应。他的家人否认指控，但 MIT 媒体实验室随后被卷入相关捐款丑闻，主任伊藤穰一（Joi Ito）辞职。一位 AI 元老的晚年，就这样以一种令人难堪的方式留在了历史档案里。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1951 | SNARC（与 Edmonds） | 第一台模拟神经网络学习的硬件装置 |
| 1961 | "Steps Toward Artificial Intelligence", *Proc. IRE* | 早期 AI 路线图，影响整整一代研究者 |
| 1969 | *Perceptrons*（与 Papert） | 揭示单层感知器局限，间接冻结连接主义近 20 年 |
| 1974 | "A Framework for Representing Knowledge"（MIT AI Memo 306） | 提出框架理论，奠基知识表示 |
| 1985 | *The Society of Mind* | 多代理人心智模型，影响多智能体研究 |
| 2006 | *The Emotion Machine* | 把情感纳入 agent 框架的认知理论 |

## 太史公曰

::: tip 太史公曰
明斯基既是 AI 的奠基者之一，也是连接主义寒冬的判官。他用 SNARC 点燃过神经网络的第一缕火，又用 *Perceptrons* 把它按进灰烬；他用框架与 agent 拼出符号主义最精致的版图，却没能在他活着的时候看到这条路被深度学习全面绕开。他一生想理解心智，于是把心智拆成无数个小机器；可他也用一本书，把另一条通向心智的路堵了二十年。学术之争，本是常事，但 *Perceptrons* 的影响之深、代价之大，使他在功业之外也背上了不易卸下的责任。至于晚年的爱泼斯坦阴影，则属另一重道德账目——天才并不豁免于人世的污浊。心智社会里没有总指挥，AI 史上同样没有完人。
:::

## 亲历者说

::: info 征集中
如果你了解明斯基的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Minsky, M. (1954). *Theory of Neural-Analog Reinforcement Systems and its Application to the Brain-Model Problem*. Ph.D. dissertation, Princeton University.
2. Minsky, M. (1961). "Steps Toward Artificial Intelligence." *Proceedings of the IRE*, 49(1), 8–30.
3. Minsky, M., & Papert, S. (1969). *Perceptrons: An Introduction to Computational Geometry*. MIT Press.
4. Minsky, M. (1974). "A Framework for Representing Knowledge." MIT AI Laboratory Memo 306.
5. Minsky, M. (1985). *The Society of Mind*. New York: Simon & Schuster.
6. Minsky, M. (2006). *The Emotion Machine: Commonsense Thinking, Artificial Intelligence, and the Future of the Human Mind*. New York: Simon & Schuster.
7. McCorduck, P. (2004). *Machines Who Think* (2nd ed.). Natick, MA: A K Peters.
8. Olazaran, M. (1996). "A Sociological Study of the Official History of the Perceptrons Controversy." *Social Studies of Science*, 26(3), 611–659.
9. Markoff, J. (2016). "Marvin Minsky, Pioneer in Artificial Intelligence, Dies at 88." *The New York Times*, January 25, 2016.
10. Aldhous, P., et al. (2019–2020). Reporting on Jeffrey Epstein and MIT Media Lab. *The New York Times* / *The New Yorker*.
