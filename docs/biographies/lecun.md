# 列传 · 杨立昆（Yann LeCun）

> 他在三十年前就让卷积网络读懂了一张银行支票，又在三十年后告诉世人：会读支票的网络远远不是智能。

![杨立昆（Yann LeCun），2018 年法国巴黎综合理工学院](/images/people/lecun.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 巴黎来的工程师

杨立昆（Yann LeCun，"Yann"在布列塔尼语里是"约翰"的意思）1960 年生于巴黎郊外苏瓦西苏蒙莫朗西的一个工程师家庭。父亲是航空工程师，从小让他在地下室拆装电子设备。十岁时他看了库布里克的《2001 太空漫游》，对那台名为 HAL 9000 的人工智能念念不忘——后来他多次说，自己一辈子的研究都是在试图回答那部电影里的问题：机器能不能真的拥有像人一样的智能？

中学时他读到诺姆·乔姆斯基（Noam Chomsky）和让·皮亚杰（Jean Piaget）关于语言与认知的争论，对"智能从哪里来"产生了极大的兴趣。1978 年他考入巴黎高等电工学院（ESIEE Paris）攻读工程学位，毕业论文已经在做神经网络。1983 年读硕士时，他独立重新发现了反向传播算法的雏形——比 1986 年<Person id="hinton" />与<Person id="rumelhart" />那篇著名论文还早三年——只是没有正式发表。这是他与连接主义最初的命运缠绕：在没人告诉他这条路被嘲笑的年代，他自己摸索着走上了同一条路。

1987 年，他在巴黎第六大学（Université Pierre et Marie Curie）完成博士论文《Modèles connexionnistes de l'apprentissage》（连接主义学习模型），导师是模式识别学者 Maurice Milgram。答辩委员会里有<Person id="hinton" />。那是他和辛顿的第一次相遇。当晚两人聊到深夜，辛顿邀他来多伦多做博士后。

## 多伦多的一年与贝尔实验室的十年

1987–1988 年，杨立昆在多伦多大学辛顿组做博士后。在加拿大冰冷的冬天里，他和辛顿在小型卷积结构、权重共享（Weight Sharing）、神经认知机（Neocognitron）的改造上一起讨论。辛顿后来说，杨立昆来时已经是一位"非常成熟的研究者"，他们更像同事而非师徒。

1988 年秋，他加入贝尔实验室（AT&T Bell Labs）的"自适应系统研究部"——那是当时美国最强的工业研究机构之一，<Person id="vapnik" />（支持向量机的发明人）、<Person id="cortes" />（与 Vapnik 合作 SVM）、Léon Bottou（随机梯度下降大家）等都在同一栋楼。他被分配到 Holmdel 园区那栋著名的、由埃罗·沙里宁（Eero Saarinen）设计的镜面玻璃大楼里。研究主管 Larry Jackel 给了他一个极其具体的任务：让计算机学会读手写邮政编码。

这是个看似工程化的任务，背后却是一场理论实践。杨立昆把卷积、权重共享、下采样（subsampling）这三件事组合在一起——后来这就是"卷积神经网络"（Convolutional Neural Network, CNN）的标准结构。1989 年的论文《Backpropagation Applied to Handwritten Zip Code Recognition》是 CNN 第一次作为完整工程系统亮相。它不是模型论文，而是一份详尽的实验报告：从数据采集到训练曲线，从硬件优化到错误分析。这种"把神经网络当工程产品做"的态度，后来成了贝尔实验室乃至整个深度学习工业化的传统。

## 银行里的卷积网络

贝尔实验室的工作没有停在论文。1990 年代初，AT&T 的子公司 NCR 把杨立昆团队开发的卷积网络系统部署进美国各大银行的支票处理流水线。1998 年的论文《Gradient-Based Learning Applied to Document Recognition》是这一时期工作的总结——长达四十六页，是 CNN 教科书式的定型。这篇论文的署名包括 Léon Bottou、<Person id="bengio" />、Patrick Haffner，是早期深度学习圈友谊的一份记录。

到 1990 年代末，全美 10% 到 20% 的银行支票由 LeNet 系统识别。这是深度学习史上第一次真正大规模的工业部署——比 AlexNet 早了整整十几年。然而工业界对此并不张扬，许多业内人甚至不知道每天经手的支票背后是一个神经网络。学界主流则在追逐 SVM、贝叶斯方法、图模型，对 LeNet 视而不见。杨立昆后来回忆，那是他职业生涯中"最孤独的十年"——他知道自己手里有真东西，却被整个学术圈当作工程师而非科学家。

1995 年，AT&T 经历了一次大规模分拆，贝尔实验室元气大伤。1996 年，杨立昆所在的 AT&T Labs Research 又经历重组。2003 年，他离开 AT&T，加入纽约大学（New York University, NYU）库朗数学科学研究所（Courant Institute）。从工业研究到学术教职，是一次职业的转身，也是一次姿态的转身。

## 巴黎人的纽约岁月与 Facebook 的赌注

在 NYU，杨立昆继续做卷积网络、能量模型（Energy-Based Models）、自监督学习的早期探索。他的实验室培养了一批后来塑造视觉与机器人领域的研究者：Pierre Sermanet、Marc'Aurelio Ranzato、Pulkit Agrawal、Soumith Chintala（PyTorch 主要作者之一）、Adam Lerer 等。但他真正再次回到聚光灯下，要等到 2012 年——那一年 AlexNet 横空出世，整个工业界突然意识到，杨立昆十几年前在贝尔实验室搞的那一套，原来是未来。

2013 年 12 月，扎克伯格亲自飞去纽约，请杨立昆为 Facebook 创办一个 AI 实验室。条件很简单："你来做你想做的事，我们出钱。"杨立昆提的条件也很简单：实验室必须是开放研究，论文必须可以公开发表，代码必须可以开源。扎克伯格答应了。**Facebook AI Research（FAIR）** 由此诞生，杨立昆出任首任主任。FAIR 的章程明确写"以学术机构方式运行"——这在硅谷大公司里属于异类。十年里，FAIR 产出了 PyTorch、DETR、SAM（Segment Anything Model）、LLaMA 等一系列基础设施级开源工作，深刻改写了 AI 工程的底色。

2018 年 3 月 27 日，ACM 宣布将该年度图灵奖授予<Person id="bengio" />、<Person id="hinton" />与杨立昆三人。三人在颁奖现场互相拥抱了很久。杨立昆在演讲中特别感谢了贝尔实验室——那个让他在主流冷遇的年代里，仍然能把深度学习"用起来"的地方。

## 与辛顿、本吉奥的分歧

2022 年之后，三巨头的公开姿态开始分流。<Person id="hinton" />与<Person id="bengio" />相继警告大模型可能带来的灾难性风险——失业冲击、虚假信息、超级智能失控。杨立昆站到了几乎对立的另一边。

他的论点很简单：当前的大语言模型并不真正理解世界，它们只是统计文本的关联。"猫和狗都比 LLM 更聪明"——这句他在多次访谈中重复的金句，激怒了不少 AGI 信徒。他认为通往真正智能的路在"世界模型"（World Models）：让机器像孩子一样从感官与行动中学习物理与因果，而不是从万亿 token 的文本里训练一个会接龙的鹦鹉。他领衔提出 JEPA（Joint Embedding Predictive Architecture）作为这条路线的雏形。

杨立昆的另一面，是对开源与开放的近乎宗教式坚持。他多次公开说：把 AI 模型锁进少数几家公司的服务器，比 AI 失控更危险。Meta 在他主导下连续开源了 LLaMA、Code LLaMA、Llama 2、Llama 3 等系列大模型，引发了硅谷其他巨头从震惊到模仿的连锁反应。2023 年他与<Person id="bengio" />等人就"是否应当暂停大模型"在公开辩论中正面交锋——后者签署 *Pause AI* 公开信，他则讥讽这是"中世纪式的恐慌"。

2024 年起，杨立昆与扎克伯格在 AGI 路线上的分歧逐渐公开化。扎克伯格希望 Meta 全力冲刺通用智能，他则坚持当前 LLM 是死胡同。2025 年，他逐步淡出 FAIR 的日常管理，更多以首席 AI 科学家身份发声，并表示要把更多时间投入到他真正相信的方向——开放、世界模型、机器人——的长期研究上。

## 工程师的执拗

杨立昆与<Person id="hinton" />、<Person id="bengio" />三人在性格上的差别，常被旁观者拿来调侃。辛顿是哲学家气质，常在公开演讲里反思人类心智的边界；本吉奥是学者气质，安静地写综述和签宣言；杨立昆是工程师气质，更喜欢推特上的实时辩论、更愿意为一个具体的技术细节与人吵到深夜。

但这种工程师气质恰恰是他最重要的贡献之一。他从一开始就坚持"算法必须能跑、能用、能部署"——LeNet 是这样，FAIR 是这样，开源 LLaMA 也是这样。当其他人争论 AI 的未来时，他在保证 AI 的现在能为更多人所用。开源对他不仅是技术哲学，更是一种公共选择：把决定权留给社区，而不是留给少数 CEO。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1989 | "Backpropagation Applied to Handwritten Zip Code Recognition", *Neural Computation* | 卷积神经网络第一次作为完整系统出现 |
| 1998 | LeCun, Bottou, Bengio, Haffner, "Gradient-Based Learning Applied to Document Recognition", *Proc. IEEE* | LeNet-5，CNN 教科书式定型 |
| 2006 | LeCun et al., "A Tutorial on Energy-Based Learning" | 系统阐述能量模型这一理论框架 |
| 2015 | LeCun, Bengio & Hinton, "Deep Learning", *Nature* | 三巨头联名综述，深度学习领域的旗帜性论文 |
| 2022 | "A Path Towards Autonomous Machine Intelligence" | JEPA 与世界模型路线宣言 |
| 2023 | Touvron et al., *LLaMA: Open and Efficient Foundation Language Models* | Meta 开源大模型系列开端，由 LeCun 主导推动 |

## 太史公曰

::: tip 太史公曰
杨立昆于 AI 史上的位置，可借一组对照看清：辛顿是布道者，本吉奥是学者，杨立昆是工程师——三种气质都成全了深度学习的复兴。但他不只是会写代码的科学家。在 1989 年的贝尔实验室，他证明卷积网络可以读支票；在 2013 年的 Facebook，他证明工业巨头可以容纳学术式实验室；在 2023 年的 Meta，他证明大模型可以彻底开源。这三件事看似不同，骨子里是同一种信念：技术的价值不在论文里，而在它能否被千千万万人真正使用。当辛顿警告 AI 危险、本吉奥起草伦理宣言时，他选择了第三条路——继续相信工程理性，继续把权力下放给开源社区。这不是天真，而是另一种深思熟虑：相比于把 AI 锁进神坛或封印于禁忌，他更担心一个由少数人垄断的智能未来。一个法国工程师在贝尔实验室的钢架结构里学会了"让东西真的工作"，又把这种工程师精神带进了硅谷最大的封闭帝国之一，并把帝国的城墙拆了一块。这块拆下来的砖，今天仍在每一个用得起开源大模型的人手里。
:::

## 亲历者说

::: info 征集中
如果你曾在贝尔实验室、AT&T Labs、NYU 库朗所或 FAIR 与杨立昆共事，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. LeCun, Y., Boser, B., Denker, J. S., et al. (1989). "Backpropagation Applied to Handwritten Zip Code Recognition." *Neural Computation*, 1(4), 541–551.
2. LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). "Gradient-Based Learning Applied to Document Recognition." *Proceedings of the IEEE*, 86(11), 2278–2324.
3. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep Learning." *Nature*, 521(7553), 436–444.
4. LeCun, Y. (2022). "A Path Towards Autonomous Machine Intelligence." Open Review.
5. Touvron, H., Lavril, T., Izacard, G., et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." Meta AI.
6. ACM (2018). "ACM A.M. Turing Award Citation: Yoshua Bengio, Geoffrey Hinton, Yann LeCun." https://amturing.acm.org/
7. Metz, C. (2021). *Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World*. Dutton.
8. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. MIT Press.
9. Lex Fridman Podcast (2019, 2022, 2024). Interviews with Yann LeCun.
10. LeCun, Y. (2023–2025). Public talks and posts on open-source AI, AGI risk, and JEPA.
