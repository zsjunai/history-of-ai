# 列传 · 辛顿（Geoffrey Hinton）

> 别人在追学界的潮汐，他独自守了一块没人看好的滩涂——四十年后，潮水从他脚下涨起来。

![辛顿（Geoffrey Hinton），2013 年在不列颠哥伦比亚大学讲解深度神经网络](/images/people/hinton.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 一个数学家族的孩子

杰弗里·辛顿（Geoffrey Hinton）1947 年生于英国温布尔登，家族里有一长串令人侧目的名字。他的高曾祖父是逻辑学奠基人之一乔治·布尔（George Boole）——今天每一行代码里的"true / false"都还回响着这位维多利亚时代数学家的名字。他的曾叔祖是 19 世纪发明"超立方体"（tesseract）一词的查尔斯·霍华德·辛顿（Charles Howard Hinton）。他的堂姑琼·辛顿（Joan Hinton）是参与曼哈顿计划的核物理学家，后来到中国饲养奶牛。父亲霍华德·辛顿是研究甲虫的昆虫学家。

在这样一个家族里长大，做学问几乎是默认选项。但杰弗里走的路并不顺。他在剑桥国王学院先读物理，又转哲学，再转心理学，最后才在 1970 年拿到实验心理学（Experimental Psychology）的本科学位。他后来回忆，自己一直困惑于一件事：人脑究竟是怎么工作的？没有任何一个学科能给他答案——物理太抽象，哲学太空泛，心理学只观察行为不解释机制。他干脆决定自己去找。

1972 年，他进入爱丁堡大学读人工智能（Artificial Intelligence）博士，导师朗格特-希金斯（Christopher Longuet-Higgins）几年前刚从分子化学转向神经网络模型。那是符号主义如日中天的年代，整个英国 AI 界几乎没人相信"用神经元那样的小单元去搭建智能"是认真的研究方向。辛顿写论文时，导师劝过他改方向。他没改。1978 年他拿到博士学位，论文题目是《放松算法与约束满足网络》（*Relaxation and Its Role in Vision*）——一篇典型的连接主义（Connectionism）作品。

## 玻尔兹曼机与一个奇怪的赌注

博士之后，辛顿在加州大学圣地亚哥分校做博士后，加入了大卫·鲁梅尔哈特（<Person id="rumelhart" />）领导的"并行分布式处理"（Parallel Distributed Processing, PDP）小组。这是 1980 年代连接主义的精神大本营。他在那里遇到了改变他后半生的合作者：心理学家鲁梅尔哈特、神经科学家特里·谢诺夫斯基（Terry Sejnowski）。

1983 年，辛顿与谢诺夫斯基提出"玻尔兹曼机"（Boltzmann Machine）——一种由随机二值神经元构成、用统计物理的能量函数描述其行为的网络。这是辛顿第一次把热力学语言带进神经网络：网络有"温度"，有"能量"，学习就是降低能量、达到平衡分布。这种把人工神经网络与统计物理打通的视角，四十年后成了他获得诺贝尔物理学奖的直接理由。

1986 年，他与<Person id="rumelhart" />、<Person id="williams_rj" /> 联名在《自然》（*Nature*）上发表《Learning Representations by Back-Propagating Errors》。这篇论文严格说不是首次提出反向传播——<Person id="werbos" /> 1974 年的博士论文已经写出了等价算法，更早的链式法则可以追溯到 1960 年代的控制论。但辛顿这篇论文做了一件谁都没做成的事：它用一组干净利落的实验告诉所有人，反向传播能在多层网络里学会有意义的内部表示。家族关系网络、奇偶校验、对称性识别——一个又一个小问题被攻克。论文写得清晰有力，许多人是从这篇里第一次真正"看见"反向传播是什么。

那时他三十九岁，已是卡内基梅隆大学（Carnegie Mellon University, CMU）教授。但他不喜欢 CMU 的研究经费高度依赖五角大楼的氛围。1987 年，他举家北上，到多伦多大学任教——一个在他看来更安静、不必为军方服务的地方。他后来开玩笑说，自己当时拒绝了"造杀人机器人"的资金，结果四十年后还是要为机器人能不能杀人而担忧。

## 没人来听的课

接下来的十几年，辛顿在多伦多过得并不容易。1990 年代，支持向量机（Support Vector Machine, SVM）兴起，<Person id="vapnik" /> 主导的统计学习理论在工业界与学界一路高歌。神经网络被认为是"黑箱""调参艺术""理论上不严肃"。会议审稿人会因为论文标题出现 "neural network" 直接拒稿；他的学生发表论文时不得不把神经网络改名为别的术语。

辛顿照样开课，照样收学生，照样做"被嘲笑"的研究。他研究受限玻尔兹曼机（Restricted Boltzmann Machine, RBM）、对比散度（Contrastive Divergence, CD）、深度信念网络（Deep Belief Network, DBN）——这些方向在当时几乎只剩他和少数几位同道在做。2003 年，他出任加拿大高等研究院（CIFAR）"神经计算与自适应感知"项目（Neural Computation and Adaptive Perception, NCAP）的负责人，每年约一千万加元的经费，把全球少数还相信神经网络的人——<Person id="lecun" />、<Person id="bengio" />、Andrew Ng 等——召集到加拿大山间小镇定期开会。他们后来戏称那是"反主流者俱乐部"。

辛顿身上还有一个外人很少知道的细节：他自三十多岁起就患有严重的椎间盘问题，长期不能久坐。开会时他常常站着听，写论文时干脆把笔记本电脑放在书架上站着写。他多伦多办公室里有一张专门为站立办公定制的高脚桌。一个被边缘化的学派、一个不能坐的学者，就这样在加拿大的冬天里熬了二十年。

## 2006 与 2012：两次点火

2006 年，辛顿与博士生 Ruslan Salakhutdinov 在《科学》（*Science*）上发表《Reducing the Dimensionality of Data with Neural Networks》，同年他与 Simon Osindero、Yee-Whye Teh 在 *Neural Computation* 发表《A Fast Learning Algorithm for Deep Belief Nets》。这两篇论文提出"逐层预训练 + 微调"，让深层神经网络第一次能被有效训练。深度学习（Deep Learning）这个词，正是从这一时期开始被辛顿与同道有意识地推广——不再叫"connectionism"或"neural networks"，是要刻意避开寒冬留下的偏见。

第一次点火并未立即燎原。真正的临界点在 2012 年。那年夏天，他的两位博士生<Person id="krizhevsky" />和<Person id="sutskever" />用两块 NVIDIA GTX 580 显卡训练了一个八层卷积神经网络——后来被称为 AlexNet。10 月 13 日 ImageNet 挑战赛结果公布：AlexNet 把 top-5 错误率从上一年的 26.2% 拉到 15.3%。一夜之间，整个计算机视觉界改换门庭。2013 年初，辛顿、Sutskever、Krizhevsky 三人成立 DNNresearch 公司，3 月被 Google 以约 4400 万美元买下——一家三个人、没有产品的公司。从那以后，辛顿以"四分之一时间在 Google、四分之三时间在多伦多"的方式继续工作。

他后来说，深度学习的成功并不出乎自己意料："我一直知道它会工作，只是没料到要等三十年。"

## 离开 Google 的那个春天

2023 年 5 月 1 日，辛顿在《纽约时报》宣布从 Google 辞职。理由不是与公司的不和——他多次强调 Google 在 AI 安全上"举止得体"——而是他想"自由地谈论 AI 的危险"。

在此之前，他长期相信数字神经网络与生物大脑只是同一种智能的两种实现，迟早会汇合。但 GPT-4 的出现让他改变了判断：数字智能不仅可能赶上生物智能，还可能快得多——因为它可以无限复制、并行学习、即时同步知识。他在多次访谈中反复说一句话："我现在认为，数字智能终将超越生物智能；我不确定我们能否安全地度过这个过渡。"

很多人不理解一位毕生信徒为何在功成名就之时反水。他的解释很朴素：作为科学家，证据变了，结论就要变。年纪让他不再有职业利害，可以说真话。他七十六岁，再不说就来不及了。

## 诺贝尔奖与一只苹果的回响

2024 年 10 月 8 日，瑞典皇家科学院宣布将该年度诺贝尔物理学奖授予约翰·霍普菲尔德（John Hopfield）和辛顿，"以表彰他们在使用人工神经网络进行机器学习方面的奠基性发现与发明"。辛顿在颁奖电话连线中第一句话是："我完全没有预料到。"现场记者问他得奖最想说什么，他说："我希望我能告诉我的导师 Christopher Longuet-Higgins，他当年劝我别做神经网络。"

这是诺奖第一次正式承认人工神经网络是物理学的一部分。颁奖词里特别提到玻尔兹曼机——那是他与谢诺夫斯基 1983 年的工作。也就是说，让他获奖的不是 2012 年震惊世界的 AlexNet，而是 1980 年代他独自坚持的那条冷板凳路线。

他在斯德哥尔摩的获奖演讲题为《Boltzmann Machines》。台下坐着物理学家、化学家、医生与外交官，许多人并不熟悉他讲的内容。但他从自由能函数讲起，从能量地形讲起，把一个数学家族的孩子四十年的孤独研究，讲成了一段把统计物理与心智研究缝合在一起的故事。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1983 | Hinton & Sejnowski, "Optimal Perceptual Inference" | 玻尔兹曼机的提出，引入统计物理视角 |
| 1986 | Rumelhart, Hinton & Williams, "Learning Representations by Back-Propagating Errors", *Nature* | 让反向传播从被遗忘的算法变成深度学习的引擎 |
| 2006 | Hinton, Osindero & Teh, "A Fast Learning Algorithm for Deep Belief Nets", *Neural Computation* | 提出逐层预训练，点燃深度学习复兴 |
| 2006 | Hinton & Salakhutdinov, "Reducing the Dimensionality of Data with Neural Networks", *Science* | 把神经网络重新带回主流期刊 |
| 2012 | Krizhevsky, Sutskever & Hinton, "ImageNet Classification with Deep Convolutional Neural Networks", *NeurIPS* | AlexNet，深度学习时代的开端 |
| 2015 | Hinton, Vinyals & Dean, "Distilling the Knowledge in a Neural Network" | 知识蒸馏，模型压缩范式之一 |
| 2017 | Sabour, Frosst & Hinton, "Dynamic Routing Between Capsules" | 胶囊网络，对 CNN 局限性的反思之作 |

## 太史公曰

::: tip 太史公曰
深度学习之兴，世人多以为是 GPU 之功、数据之福、Google 之豪掷，皆为外缘。其内因，是辛顿以一身独守一线，在主流嘲笑下做了二十年冷板凳。从 1986 年的反向传播到 2006 年的深度信念网络，再到 2012 年的 AlexNet，三个时间点之间各隔二十年与六年——不是技术的等待，是学者意志的等待。学问之难，不在一时之巧，而在长年之倔。辛顿五十年研究中失败远多于成功，被拒稿、被冷落、被规劝改行，他都没改。等到了七十岁，潮水反过来淹了所有曾经讥笑他的人。然而他得志之后并未自满，反而在 2023 年公开警告自己亲手点燃的火可能烧毁森林。这是一种少见的学者品格：既能耐二十年的寂寞，又能在最得意时保持清醒。布尔留下了逻辑，辛顿留下了学习——一个家族两次为人类思想史立下界碑。看似巧合，其实都是同一种血脉：把"心智"当作可以被精确刻画的对象，敢用一生去试一件别人觉得不靠谱的事。
:::

## 亲历者说

::: info 征集中
如果你曾在 CMU、多伦多大学辛顿组、CIFAR NCAP 项目或 Google Brain 与他共事，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). "Learning Representations by Back-Propagating Errors." *Nature*, 323(6088), 533–536.
2. Ackley, D. H., Hinton, G. E., & Sejnowski, T. J. (1985). "A Learning Algorithm for Boltzmann Machines." *Cognitive Science*, 9(1), 147–169.
3. Hinton, G. E., Osindero, S., & Teh, Y.-W. (2006). "A Fast Learning Algorithm for Deep Belief Nets." *Neural Computation*, 18(7), 1527–1554.
4. Hinton, G. E., & Salakhutdinov, R. R. (2006). "Reducing the Dimensionality of Data with Neural Networks." *Science*, 313(5786), 504–507.
5. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *NeurIPS 2012*.
6. Metz, C. (2021). *Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World*. Dutton.
7. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. MIT Press.
8. Metz, C. (2023, May 1). "The Godfather of A.I. Leaves Google and Warns of Danger Ahead." *The New York Times*.
9. The Royal Swedish Academy of Sciences (2024). "The Nobel Prize in Physics 2024 – Press Release & Scientific Background." https://www.nobelprize.org/prizes/physics/2024/
10. Hinton, G. E. (2024). "Boltzmann Machines." Nobel Lecture, Stockholm.
