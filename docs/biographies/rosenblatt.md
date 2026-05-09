# 列传 · 罗森布拉特（Frank Rosenblatt）

> 他造出了第一台会"看"的机器，却没活到机器真正学会看的那一天。

![罗森布拉特（Frank Rosenblatt），约 1950 年](/images/people/rosenblatt.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 一个心理学家闯进了机器世界

1928 年，弗兰克·罗森布拉特（Frank Rosenblatt）生于纽约新罗谢尔（New Rochelle）。他不是数学家，也不是工程师——而是心理学家。

1946 年进入康奈尔大学（Cornell University），1956 年在康奈尔取得社会心理学博士学位，论文题目是关于人格特质的多变量分析。在那个计算机还要按机柜计算面积的年代，一个心理学博士走向硬件神经网络，是一件让所有人都觉得不务正业的事。

但罗森布拉特从一开始想的就是同一件事：人脑是怎么学习的，机器能不能学。

<Person id="mcculloch" />与<Person id="pitts" />在 1943 年发表《神经活动中内在思想的逻辑演算》时，给出了一个数学化的神经元模型，但那只是逻辑门。<Person id="hebb" />在 1949 年的《行为的组织》中提出"细胞共同放电则共同连接"（fire together, wire together），给出了学习的生物学猜想，但只是文字描述。

罗森布拉特要把这两条线缝起来，并且——这是他最特别的地方——真的造出来。

## Mark I：第一台会学习的机器

1957 年夏，康奈尔航空实验室（Cornell Aeronautical Laboratory, CAL）。罗森布拉特先在 IBM 704 上写出了感知机（Perceptron）的仿真程序，那是历史上第一个用代码实现的可学习神经网络。1958 年，他在《心理学评论》（*Psychological Review*）上发表《感知机：大脑中信息存储与组织的概率模型》（"The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain"），论文用一种心理学家特有的语言写成，没有矩阵，没有梯度，只有"刺激—响应—权重调整"的故事。

仿真还不够。1958 年到 1960 年间，CAL 用美国海军研究办公室（Office of Naval Research）的经费，造出了 Mark I Perceptron——一台用专用电路实现的硬件神经网络。

它有一个 20×20 的光电管阵列作为"视网膜"，512 个权重由电动马达驱动的电位器存储，输出连接 8 个分类单元。当一张写有字符的卡片被放在它面前，机器会"看"，犯错时电机嗡嗡转动调整电位器——这是物理意义上的"学习"。Mark I 至今保存在美国史密森尼学会（Smithsonian）。

1958 年 7 月 8 日，海军在华盛顿召开新闻发布会展示感知机。第二天，《纽约时报》（*The New York Times*）头版刊出报道，称感知机"将能够走路、说话、看见、写字、自我复制并意识到自己的存在"。

罗森布拉特本人在采访中说，感知机"未来某天将识别人脸、翻译语言、发出口令"。这些话在 1958 年听起来像科幻——而六十年后，几乎每一句都成了真。但当时的过度宣传，也为日后的反扑埋下了引信。

## 《神经动力学原理》：把感知机写成体系

1962 年，罗森布拉特出版了 700 多页的专著《神经动力学原理》（*Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms*）。这本书系统化了他从 1957 年以来的全部工作：单层感知机、多层感知机、反向耦合网络、随机连接、统计动力学。书里已经讨论了多层结构和误差校正问题——只是当时他还没有找到训练多层网络的有效算法（那要等到 1986 年才由<Person id="rumelhart" />、<Person id="hinton" />、<Person id="williams_rj" />正式公开化）。

罗森布拉特并不孤单。康奈尔团队、斯坦福的 Widrow（提出 Adaline 的 Bernard Widrow）、IBM 的研究者，都在一个被称为"自组织系统"（Self-Organizing Systems）的小社群里相互通信、互相验证。那是一段神经网络的黄金岁月，也是它最热闹的青春期。

## 与明斯基的世纪冲突

罗森布拉特在康奈尔时期的同事中，有一个人后来成为他终生的对手——<Person id="minsky" />。两人都毕业于纽约的同一所高中——布朗克斯科学高中（Bronx High School of Science）。明斯基在 1954 年的博士论文里也研究过神经网络，但很快转向符号主义阵营，并对感知机的炒作越来越不耐烦。

1969 年，明斯基与<Person id="papert" />合著《感知机》（*Perceptrons*）出版。书中用严格的数学证明：单层感知机连最简单的"异或"（XOR）都学不会，并对多层网络的可训练性表达了悲观。

这本书的影响远超学术范围——它直接掐断了美国国防高级研究计划局（DARPA）对连接主义的资助。从 1969 年到 1986 年，神经网络在美国学术界几乎被判了死刑，史称第一次 AI 寒冬中的"连接主义寒冬"。

后来的研究者，比如<Person id="hinton" />，多次在访谈中提及，明斯基的批判有意忽略了多层感知机的潜力，且明斯基本人在私下场合的攻击远比书中更激烈。罗森布拉特生前曾试图回应这些批判，但他在学术政治上不是明斯基的对手——后者更老练、更善于运作经费。

## 切萨皮克湾的最后一次航行

1971 年 7 月 11 日，罗森布拉特 43 岁生日当天。他在马里兰州切萨皮克湾（Chesapeake Bay）出海航船，遭遇事故溺亡。事发经过至今没有完整的官方记录，关于是意外、自杀，还是其他原因，他的同事和传记作者各有说法。

能够确认的事实只有：他没有等到平反，没有等到 1986 年的反向传播，没有等到 2012 年的 ImageNet，没有等到自己当年那句"机器将识别人脸"在每一部手机上成真。

罗森布拉特的兴趣从来不止神经网络。他研究果蝠（fruit bat）的脑神经回路，亲自带学生进山洞捕捉、解剖、记录电信号；他研究记忆的化学转移，曾经做过把训练过的小鼠脑提取液注射给未训练小鼠的实验；他甚至关心天文学和音乐。他是一个典型的、在 20 世纪中叶才有的、不被学科墙隔开的博物学者型科学家。

## 迟到半个世纪的回响

罗森布拉特死后的二十年，"感知机"几乎成了 AI 教科书里的一个负面案例——用来证明"过度宣传如何反噬一个学科"。

直到 1986 年，<Person id="rumelhart" />、<Person id="hinton" />、<Person id="williams_rj" /> 在《自然》杂志上发表反向传播算法（Backpropagation），多层感知机才被证明是可训练的。<Person id="werbos" />其实早在 1974 年的博士论文中已经独立提出了等价的算法，只是当时没有被神经网络社群发现。

换句话说，罗森布拉特在 1962 年留下的多层感知机难题，本来在他生前就有可能被解开。历史的错位，往往以这种方式发生。

2004 年，IEEE 将神经网络领域最高奖之一命名为 "Frank Rosenblatt Award"。康奈尔大学在校园里立了纪念牌。Mark I Perceptron 的实物如今陈列在华盛顿史密森尼美国历史博物馆（Smithsonian National Museum of American History），与早期阿波罗计算机、第一代晶体管放在同一展厅。一个被时代抛弃的人，最终被时代以最隆重的方式接回家。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1958 | "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain", *Psychological Review*, 65(6) | 提出感知机模型与学习规则 |
| 1958–1960 | Mark I Perceptron 硬件机 | 首台真正"会学习"的神经网络硬件 |
| 1962 | *Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms* | 系统化感知机理论，含多层网络的早期讨论 |
| 1967 | "Recent Work on Theoretical Models of Biological Memory", in *Computer and Information Sciences II* | 把神经网络与生物记忆研究串联 |

## 太史公曰

::: tip 太史公曰
罗森布拉特之于人工智能，犹如商鞅之于秦国——为后人开了一条路，自己却倒在路上。他不过是想把一个心理学家的好奇心化作一台真正会学习的机器，并在 1958 年向一个尚未准备好的世界宣告：智能可以从权重中生长出来。但那个世界先把他奉为先知，再把他贬作骗子，最后干脆让他从教科书上消失。从 1969 年《感知机》一书的出版，到 1986 年反向传播的复兴，连接主义被压制了整整十七年，而罗森布拉特死于这十七年的中段——屈死之鬼，立庙不可不大。今日深度学习的每一次梯度下降、每一颗 GPU 上跑的卷积、每一张被识别出的人脸，都流着 1958 年那台 Mark I 的血。一个被时代埋葬的人，最终在算法里得到了重生。
:::

## 亲历者说

::: info 征集中
如果你了解罗森布拉特的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Rosenblatt, F. (1958). "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain." *Psychological Review*, 65(6), 386–408.
2. Rosenblatt, F. (1962). *Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms*. Washington, D.C.: Spartan Books.
3. Minsky, M., & Papert, S. (1969). *Perceptrons: An Introduction to Computational Geometry*. Cambridge, MA: MIT Press.
4. Olazaran, M. (1996). "A Sociological Study of the Official History of the Perceptrons Controversy." *Social Studies of Science*, 26(3), 611–659.
5. Nagy, G. (2014). "Frank Rosenblatt." *IEEE Annals of the History of Computing*, 36(2), 4–7.
6. *The New York Times* (1958-07-08). "New Navy Device Learns by Doing; Psychologist Shows Embryo of Computer Designed to Read and Grow Wiser."
7. Cornell Aeronautical Laboratory (1960). *Mark I Perceptron Operators' Manual*. Buffalo, NY: CAL Report VG-1196-G-1.
8. Anderson, J. A., & Rosenfeld, E. (Eds.) (1998). *Talking Nets: An Oral History of Neural Networks*. Cambridge, MA: MIT Press.
