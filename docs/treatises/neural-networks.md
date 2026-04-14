# 书 · 神经网络兴衰录

> 神经网络八十年史，非技术演进之线性叙事，实乃两大思想阵营之生死角力。符号主义者（Symbolists）信奉逻辑与规则，视神经网络为歧途；联结主义者（Connectionists）坚信从数据中学习，视神经网络为通往智能的正道。这场旷日持久的战争，历经羞辱、寒冬、放逐与最终的翻盘，构成了现代人工智能最跌宕起伏的篇章。

## 第一幕：先知与骗子（1943—1969）

故事的序曲平静而深远。1943 年，神经生理学家麦卡洛克（Warren McCulloch）与数学天才皮茨（Walter Pitts）发表论文，证明了一个惊人的命题：神经元的运作可以用数学逻辑来描述。这个被后世称为 MCP 模型的东西极其简陋——接收二值输入，加权求和，超过阈值就输出 1——但它第一次在生物神经与数学计算之间架起了桥梁。

六年后，加拿大心理学家赫布（Donald Hebb）提出了一条直觉式的学习法则：同时激发的神经元会加强彼此的连接（Neurons that fire together, wire together）。这条赫布学习规则（Hebbian Learning）听起来朴素，却为"机器可以从经验中学习"这个大胆设想提供了第一块生物学基石。

然后，弗兰克·罗森布拉特（Frank Rosenblatt）登场了。

1958 年，这位康奈尔大学的心理学家发明了感知机（Perceptron）——第一个能从数据中自动调整权重的神经网络。感知机本身并不复杂：多个输入经过可学习的权重加权求和，通过激活函数产生输出；犯错时，朝着减小误差的方向调整权重。真正引爆舆论的，是那场臭名昭著的新闻发布会。

1958 年 7 月，美国海军在华盛顿高调展示了这台机器。罗森布拉特对着记者侃侃而谈，声称感知机将能够"行走、说话、观看、书写、自我复制，并意识到自己的存在"。《纽约时报》几乎原文照登。整个学术界为之沸腾——也为之侧目。

在大洋彼岸的麻省理工学院，一个人读到了这些报道，眉头紧锁。他的名字叫马文·明斯基（Marvin Minsky）。

明斯基是符号主义人工智能（Symbolic AI）的旗手。在他看来，智能的本质是逻辑推理、知识表示和规则操作——你需要教会机器"思考"，而不是让它从数据中"学习"。罗森布拉特的感知机在他眼里不过是一场精心包装的骗局：一个连最简单的逻辑问题都解决不了的玩具，被吹嘘成了通往智能的钥匙。

明斯基决定写一本书来终结这场闹剧。

## 第二幕：一本书杀死一个学科（1969—1985）

1969 年，明斯基与同事佩珀特（Seymour Papert）出版了《感知机》（*Perceptrons*）。这本薄薄的书以严谨的数学证明指出了单层感知机的致命缺陷：它无法解决异或问题（XOR Problem）——一个任何逻辑初学者都能理解的简单非线性分类任务。

从纯技术角度看，这个批评是精确的。单层感知机确实只能处理线性可分的问题。但明斯基和佩珀特做了一件微妙的事：他们暗示多层网络同样不太可能克服这些局限，却没有给出严格证明。这个暗示被学术界放大成了一个判决。

这本书究竟是诚实的学术批评，还是一次蓄意的政治打击？六十年后，争论仍未平息。支持明斯基的人认为，他不过是指出了皇帝没穿衣服；反对者则指出，明斯基与罗森布拉特早在达特茅斯会议（Dartmouth Conference, 1956）时期就已势同水火——符号派和联结派争夺的不仅是学术声望，更是数以百万计的国防研究经费。无论动机如何，结果是毁灭性的。

美国国防高级研究计划局（DARPA）和各主要资助机构几乎一夜之间冻结了神经网络的研究经费。发表神经网络论文变得极其困难——顶级期刊的审稿人会直接以"这个方向已经被证明是死路"为由拒稿。研究者们纷纷改弦更张，转向符号推理、专家系统和形式逻辑。神经网络进入了长达十五年的寒冬。

联结主义者被放逐到了学术界的边缘。但他们并没有消失。

## 第三幕：地下抵抗与第一次复兴（1986—1995）

在寒冬最深处，少数人固执地继续挖掘。

1982 年，物理学家霍普菲尔德（John Hopfield）提出了霍普菲尔德网络（Hopfield Network），用统计力学的语言重新诠释了神经网络，证明它可以作为联想记忆系统工作。这篇论文发表在《美国国家科学院院刊》上，因为作者是物理学家而非"神经网络研究者"——身份的伪装反而帮助了思想的传播。

真正的转折来自 1986 年。大卫·鲁梅尔哈特（David Rumelhart）、杰弗里·辛顿（Geoffrey Hinton）和罗纳德·威廉姆斯（Ronald Williams）在《自然》杂志上发表了反向传播算法（Backpropagation）的系统阐述。算法的思路优雅得令人屏息：让信号前向流过多层网络得到输出，计算输出与正确答案的误差，再将误差反向逐层回传，用链式法则（Chain Rule）精确计算每个权重对总误差的贡献，最后沿梯度下降（Gradient Descent）的方向调整权重。

反向传播一举击碎了明斯基的诅咒。多层网络不仅可以被训练，而且可以轻松解决异或问题——以及远比异或复杂的非线性模式识别任务。杨立昆（Yann LeCun）很快将反向传播应用于卷积神经网络（Convolutional Neural Network, CNN），在 1989 年成功实现了手写邮政编码识别。这是深度学习在真实世界中最早的商业化成功之一。

联结主义者似乎赢了。但胜利是短暂的。

## 第四幕：再次被埋葬（1995—2006）

1990 年代中期，神经网络再次跌入低谷，而这一次的对手更加强大。

问题出在实践层面。当时的计算硬件远不足以支撑深层网络的训练。层数一多，梯度消失（Vanishing Gradient）问题就如影随形——误差信号在反向传播过程中逐层衰减到几乎为零，底层权重纹丝不动。训练过程缓慢、脆弱、结果不可复现。

与此同时，一种理论优美的新方法横空出世：支持向量机（Support Vector Machine, SVM）。SVM 由瓦普尼克（Vladimir Vapnik）等人发展完善，基于凸优化理论，保证能找到全局最优解，在小数据集上表现惊人。相比之下，神经网络像一个脾气古怪的黑箱——没有收敛保证，没有理论优雅性，训练结果取决于随机初始化的运气。

整个机器学习学界倒向了 SVM。在 NeurIPS（当时还叫 NIPS）等顶级会议上，提交神经网络论文几乎等同于学术自杀。联结主义者再次被边缘化。

辛顿后来回忆这段岁月时说过一句话，成为了这场战争中最动人的注脚："我一直坚持做下去，因为我相信大脑就是在做类似的事情。"（"I kept doing it because I believed the brain was doing something like this."）

他不是在做一个有前途的研究方向。他是在捍卫一个信念。

## 第五幕：异端的胜利（2006—2017）

2006 年，辛顿提出了深度置信网络（Deep Belief Network, DBN）和逐层预训练（Layer-wise Pre-training）策略：先用无监督学习逐层初始化权重，再用反向传播微调。这个方法绕过了梯度消失的难题，第一次证明了训练真正"深"的网络是可行的。辛顿给这个方向起了一个新名字——深度学习（Deep Learning）。

但学术界的反应是冷淡的。大多数人把它当作联结主义者的又一次垂死挣扎。

然后，2012 年 10 月，ImageNet 大规模视觉识别挑战赛（ILSVRC）的结果公布了。

辛顿的学生亚历克斯·克里热夫斯基（Alex Krizhevsky）提交了一个名为 AlexNet 的深度卷积神经网络。当结果显示在大屏幕上时，会场陷入了短暂的沉默：Top-5 错误率从上一年最佳的 26.2% 骤降至 16.4%，领先第二名超过十个百分点。这个降幅如此之大，以至于不少与会者的第一反应是——数据搞错了。

数据没有搞错。AlexNet 的背后是三股力量的历史性汇聚：GPU 提供了前所未有的并行计算能力，互联网时代积累了海量标注数据（ImageNet 本身包含超过 1400 万张图像），而 ReLU 激活函数和 Dropout 正则化等算法创新有效缓解了训练中的技术障碍。

那一天之后，世界变了。从学术会议到工业实验室，所有人都开始谈论深度学习。卷积神经网络横扫计算机视觉——图像分类、目标检测、语义分割、人脸识别。循环神经网络（RNN）及其改进版本 LSTM 则攻占了序列处理领域——机器翻译、语音识别、文本生成。

那些在寒冬中被嘲笑的异端，突然成了先知。

## 第六幕：注意力改变一切（2017—至今）

2017 年，谷歌的八位研究员发表了一篇论文。标题只有五个单词：*Attention Is All You Need*。

这篇论文提出了 Transformer 架构。它做了一个在当时看来近乎鲁莽的决定：完全抛弃 RNN 的循环结构，转而完全依赖自注意力机制（Self-Attention）。自注意力允许序列中的每个元素同时"看到"所有其他元素，直接建模任意距离的依赖关系，不必像 RNN 那样一步步传递信息。更关键的是，这种结构天然适合并行计算——训练速度可以成倍提升。

八位作者中，没有一个是学术界的超级明星。论文的标题平淡无奇，甚至有些随意。但这五个单词改变了一切。

2018 年，谷歌推出 BERT（Bidirectional Encoder Representations from Transformers），横扫自然语言处理（NLP）的几乎所有基准测试。同年，OpenAI 发布了 GPT 系列的第一代。此后 GPT-2、GPT-3、GPT-4 相继问世，参数规模从亿级攀升至万亿级。研究者发现了令人着迷的缩放定律（Scaling Laws）：模型性能随参数量、数据量和计算量的增长呈现可预测的提升。更诡异的是涌现能力（Emergent Abilities）——当模型跨过某个规模门槛后，会突然展现出小模型完全不具备的推理、编程和多步规划能力，仿佛量变确实引起了质变。

Transformer 的统治力远超 NLP。视觉 Transformer（ViT）证明了图像也可以用同样的架构处理；多模态大模型将文本、图像、音频、视频统一在同一个框架之下。站在 2026 年回望，Transformer 已经不仅仅是一个模型架构——它是这个时代人工智能的通用语言。

## 未竟之问

联结主义者赢了。但胜利者也面对着深渊。

深度学习的理论基础至今仍不完善——我们知道它有效，却无法完整解释为什么有效。万亿参数网络的可解释性（Interpretability）仍是一个开放问题：当模型做出一个决策时，我们能否真正理解其内部发生了什么？训练一个大模型消耗的能源令人咋舌，可持续性问题日益紧迫。最根本的追问是对齐问题（Alignment）：当这些模型变得越来越强大，我们如何确保它们的目标与人类的利益一致？

符号主义并未完全消亡。神经符号整合（Neuro-Symbolic AI）正在成为新的研究前沿，试图将联结主义的学习能力与符号主义的推理能力融合。六十年的战争，或许最终不是以一方消灭另一方告终，而是以融合收场。

但这个故事最深刻的教训不在技术本身。

---

::: tip 太史公曰
余观神经网络八十年兴衰，感慨良深。罗森布拉特之感知机，生于狂热，死于权威一纸判词。明斯基之《感知机》，技术上无可指摘，政治上却杀人于无形——一个正确的局部批评，被放大为对整个方向的死刑宣判。此后十五年寒冬，多少才智之士被迫改弦更张，多少本可提前十年实现的突破被延误搁置。辛顿、杨立昆、本吉奥（Yoshua Bengio）三人在学术界的荒野中坚守二十年，不是因为手握必胜的证据，而是因为一个朴素的信念：大脑确实在做类似的事情。科学史一再证明，范式转换（Paradigm Shift）最猛烈的阻力往往不来自无知，而来自上一代范式的成功者。建制派掌握资源、话语权和评审权，他们的反对不是出于恶意，而是出于对自身世界观的真诚捍卫——但这种真诚的捍卫，恰恰是进步最顽固的敌人。ImageNet 2012 之所以震撼，不仅因为错误率骤降十个百分点，更因为它用不可辩驳的事实粉碎了一个维持了四十年的"共识"。历史的教训是：当所有人都认为一条路走不通时，最值得追问的问题恰恰是——他们的证据真的充分吗？
:::

## 亲历者说

::: info 征集中
如果你参与过神经网络研究，或了解相关第一手资料，欢迎[提交贡献](https://github.com/T-7788/history-of-ai)。
:::

## 参考资料

1. McCulloch, W. S., & Pitts, W. (1943). A logical calculus of the ideas immanent in nervous activity. *Bulletin of Mathematical Biophysics*, 5(4), 115-133.
2. Hebb, D. O. (1949). *The Organization of Behavior*. Wiley.
3. Rosenblatt, F. (1958). The perceptron: A probabilistic model for information storage and organization in the brain. *Psychological Review*, 65(6), 386-408.
4. Minsky, M., & Papert, S. (1969). *Perceptrons: An Introduction to Computational Geometry*. MIT Press.
5. Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. *Nature*, 323(6088), 533-536.
6. Hopfield, J. J. (1982). Neural networks and physical systems with emergent collective computational abilities. *Proceedings of the National Academy of Sciences*, 79(8), 2554-2558.
7. LeCun, Y., Boser, B., Denker, J. S., et al. (1989). Backpropagation applied to handwritten zip code recognition. *Neural Computation*, 1(4), 541-551.
8. Hinton, G. E., Osindero, S., & Teh, Y. W. (2006). A fast learning algorithm for deep belief nets. *Neural Computation*, 18(7), 1527-1554.
9. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Advances in Neural Information Processing Systems*, 25.
10. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
11. Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *Proceedings of NAACL-HLT*, 4171-4186.
12. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). Scaling laws for neural language models. *arXiv preprint arXiv:2001.08361*.
