# 世家 · 贝尔实验室（Bell Labs）

> 二十世纪最伟大的工业研究院。信息论从这里诞生，晶体管在这里被造出来，连卷积网络也是在这里第一次跑通。它代表了一种至今再难重现的研究文化——给最聪明的人最自由的环境，让他们去解决最重要的问题。

## 一、从西街到默里山

1925 年 1 月 1 日，AT&T 与西部电气（Western Electric）共同出资，在纽约西街 463 号正式成立 **贝尔电话实验室**（Bell Telephone Laboratories, Inc.），由 AT&T 工程部和西部电气工程部合并而来。第一任董事长是弗兰克·朱伊特（Frank B. Jewett）。它的诞生有一个清晰的商业逻辑——AT&T 即将拥有美国全境的电话网络，需要一支专门的研究队伍来回答从真空管寿命到长距离传输的所有问题。但贝尔实验室真正出名的，不是它解决了多少电话工程难题，而是它在不到半个世纪里拿下了 9 项诺贝尔奖、5 项图灵奖，奠定了现代信息时代几乎全部的物理与数学基础。

1941 年起，实验室主体逐步迁往新泽西州默里山（Murray Hill），后来又扩展到 Holmdel、Whippany 等几处园区。默里山六号楼那条著名的"无尽长廊"——故意把不同领域的研究者塞进同一条走廊，逼他们在路过时撞见彼此——后来被无数人当作工业研究的范本。

工作机制同样别致：贝尔实验室的研究员一旦受聘，几乎不必为下季度交差。立项无需 KPI，文章发表也不要求"对公司有用"。AT&T 的垄断利润足够每年砸下相当于营收 1% 上下的研究预算，而政府反垄断的隐形约束又逼这家公司必须把研究成果开放许可——从晶体管到 UNIX 早期源码，都被以接近免费的价格授予全球。这种"被迫的慷慨"反而把贝尔实验室的影响力放大了几十倍。

## 二、香农与信息论的诞生

1948 年 7 月与 10 月，《贝尔系统技术杂志》（*Bell System Technical Journal*）连载了一篇题为《通信的数学理论》（*A Mathematical Theory of Communication*）的论文，作者是<Person id="shannon" />——一个三十出头、刚从战时密码学项目转回纯理论的年轻数学家。这篇论文一举奠定了信息论：用比特（bit）度量信息、用熵（entropy）刻画不确定性、用信道容量（channel capacity）确定通信的极限。

香农写作这篇论文时身处贝尔实验室的数学研究部。他的同事约翰·图基（John Tukey）在另一份备忘录里第一次把"binary digit"缩写成了"bit"——这个词后来成了整个数字时代的最小单位。香农 1949 年又写了《保密系统的通信理论》，把同样的框架搬进密码学。许多年后，人们才意识到：这两篇论文之于信息时代，几乎相当于牛顿《原理》之于经典力学。

香农此后在贝尔实验室里造过会下国际象棋的电路（1950 年的 *Programming a Computer for Playing Chess* 是该领域开山之作之一）、写过名为 Theseus 的会走迷宫的机械老鼠、研究过杂耍背后的数学。他 1956 年回到 MIT，但他在 1941 至 1956 这十五年留在贝尔实验室的时间，是这家机构最具决定性的一段。

值得记住的还有几个细节。1948 年同期，贝尔实验室的诺伯特·维纳的同代人理查德·哈明（Richard Hamming）在一次周末加班实验中目睹自己提交的程序被打孔卡读错——他怒而发明纠错码，催生了后来无所不在的汉明码（Hamming code）。1952 年贝尔实验室的物理学家约翰·皮尔斯（John R. Pierce）写下"通信卫星"的可行性论文，并主导了 1962 年首颗主动式通信卫星 Telstar 的研制。半个世纪后，每一台数据中心 GPU 的 PCIe、每一条跨洋光缆的纠错协议，都仍然带着这两份遗产的影子。

## 三、晶体管与计算硬件之源

1947 年 12 月 23 日下午，约翰·巴丁（John Bardeen）、沃尔特·布拉顿（Walter Brattain）和威廉·肖克利（William Shockley）在默里山一间地下实验室向上司演示了第一只点接触式晶体管。他们用一片锗晶体、两根金箔触点，做出了能放大信号又比真空管小得多、热得轻得多的器件。三人因此共享 1956 年诺贝尔物理学奖。肖克利随后离职，去加州创办肖克利半导体——他招进来的"叛逆八人组"后来又出走创建了仙童半导体（Fairchild）和英特尔，**硅谷的整条家谱都源出于此**。

晶体管直接催生了集成电路与微处理器，没有它就没有今天每一台 GPU、TPU 和神经网络训练集群。从这条因果链上看，整个机器学习的物质基础是从贝尔实验室那间地下室开始铺起来的。

1969 年，肯·汤普森（Ken Thompson）和丹尼斯·里奇（Dennis Ritchie）在贝尔实验室空闲的 PDP-7 上写出了 UNIX；1972 年，里奇为了把 UNIX 移植到不同硬件，发明了 C 语言。两人 1983 年共获图灵奖。UNIX 与 C 后来成为整个计算机系统的通用语，今天每一台运行机器学习的服务器、每一个 PyTorch 后端的底层实现，几乎都还在沿用 UNIX 的设计哲学。

## 四、语音识别的早期长征

1952 年，贝尔实验室的戴维斯（K. H. Davis）等三人发表 *Audrey* 系统，号称能识别一个特定说话人念出的孤立数字 0–9。这是世界上第一个有据可查的语音识别系统。从此到 1980 年代，连续语音识别（Continuous Speech Recognition）在贝尔实验室一代代换人推进——从模板匹配到动态时间规整（DTW），再到 1980 年代拉里·拉宾纳（Lawrence R. Rabiner）、史蒂芬·莱文森（Stephen Levinson）等人把隐马尔可夫模型（Hidden Markov Model, HMM）推上工业语音识别的主舞台。Rabiner 与 Juang 1993 年合著的 *Fundamentals of Speech Recognition* 成为整整一代研究者的入门书。

虽然 1988 年首个真正大词汇连续语音识别系统 Sphinx 出在 CMU，但 HMM 的成熟过程里，贝尔实验室的工作是绕不过去的源头。Rabiner 1989 年在 *Proceedings of the IEEE* 发表的 *A Tutorial on Hidden Markov Models* 至今仍是 ML 教学里最常被引的"老论文"之一。

更早的 1962 年，贝尔实验室的伊恩·谢恩（H. Dudley）等人甚至在世界博览会上公开演示过电子语音合成系统 Voder 与 Vocoder——它们直接启发了几十年后的语音合成技术，也让"机器开口说话"从科幻变成可见的工程问题。从孤立数字到连续大词汇语音识别，从声码器到 HMM，贝尔实验室半个世纪的语音研究为今天每一个智能音箱、每一台手机助手提供了基础语法。

## 五、LeNet 与连接主义的复兴

1988 年，<Person id="lecun" />从多伦多大学<Person id="hinton" />实验室的博士后岗位转到 AT&T 贝尔实验室霍姆德尔（Holmdel）园区的自适应系统研究部。他的同事包括<Person id="vapnik" />（统计学习理论与 SVM）、<Person id="cortes" />（与 Vapnik 共同发表 *Support-Vector Networks*）、伊夫·勒坎的合作者 Léon Bottou、Yoshua Bengio（短暂博士后）、Patrick Haffner 等。

1989 年，杨立昆在贝尔实验室首次把 **反向传播**（backpropagation）端到端地应用到一个用于识别手写邮政编码的卷积神经网络上。这就是 *LeNet* 的原型——具有局部感受野、权值共享、子采样三大特征的网络结构。同年 12 月发表在 *Neural Computation* 上的论文 *Backpropagation Applied to Handwritten Zip Code Recognition* 是卷积网络作为可训练系统进入现实工业的第一个里程碑。

整个 1990 年代，杨立昆团队不断把这条路线推向产品。1993 年起，AT&T 与 NCR 把这套手写体识别技术装进银行支票阅读机；到 1990 年代末，全美约 10–20% 的支票由 LeNet 后代系统读取。1998 年，杨立昆、Bottou、Bengio 与 Haffner 联名发表 *Gradient-Based Learning Applied to Document Recognition*，正式定型 **LeNet-5**——这篇 46 页长文成为深度学习史上最被反复引用的论文之一。

同样在 1990 年代中期，Vapnik 与 Cortes 在贝尔实验室提出 **支持向量机**（Support Vector Machines），1995 年的 *Support-Vector Networks* 一文奠定其理论框架。SVM 在随后 15 年里几乎压制了神经网络。这是机器学习史上一段意味深长的并置：同一栋楼里的两组人，一组在做后来要等到 2012 年才被世界看见的卷积网络，另一组在做即将统治学界十几年的核方法。两条路最后都成为今天的标准武器。

Vapnik 与<Person id="chervonenkis" />合作的 VC 维度（VC dimension）以及统计学习理论（Statistical Learning Theory），也是在他从苏联移居贝尔实验室期间被系统地推向英语世界。这套理论后来与 PAC 学习一起，构成了现代机器学习"为什么能泛化"的理论基础——它给深度学习时代的众多经验法则（泛化界、容量控制、正则化）提供了仍然在被引用的语言。

## 六、拆分、重组与黄金时代的落幕

贝尔实验室的衰落与美国电信业的解体几乎同步。1984 年 1 月 1 日，根据反垄断和解，AT&T 被强制拆分为长途公司与七家"小贝尔"（Baby Bells），实验室主体仍归 AT&T。1996 年朗讯（Lucent Technologies）从 AT&T 拆分出来时，贝尔实验室随之划入朗讯。研究经费开始由市场而非垄断利润供给。

2000 年互联网泡沫破裂，朗讯营收大幅下滑，研究经费连年腰斩。2002 年又爆出物理学家 Jan Hendrik Schön 的造假丑闻——他在分子电子学方向连发数十篇 *Science*、*Nature* 论文，最终被同行复现失败彻底揭穿。这桩丑闻是贝尔实验室声誉史上最沉重的一击，也成为科研伦理课上的反面教材。AT&T 自己保留的那部分（AT&T Labs）也大幅缩编。

2002 年起，AT&T Labs 的 NLP 与统计学习团队开始向学界回流。Michael Collins、Fernando Pereira、David Yarowsky、Yann LeCun 等人陆续转往哥伦比亚、宾州大学、约翰霍普金斯、纽约大学。如果说 1990 年代中后期的贝尔实验室是统计 NLP 与机器学习最密集的人才池，那么这一波出走则把这种密度均匀地洒进了整个北美的高校体系。

2006 年朗讯被法国阿尔卡特（Alcatel）合并为阿尔卡特-朗讯；2016 年阿尔卡特-朗讯整体并入诺基亚（Nokia）。今天的 **诺基亚贝尔实验室**（Nokia Bell Labs）依然在默里山运作，6G、光网络、量子计算仍是研究方向，但规模与黄金时代不可同日而语。杨立昆 2003 年离开后任教纽约大学，2013 年加入 Facebook（Meta）创办 FAIR；Vapnik、Cortes 等人也陆续转往学界与谷歌。

## 七、作为机构的贝尔实验室

回头看，贝尔实验室留给 AI 的并不是某一个具体的算法或数据集，而是一整套**研究基础设施**——

**它给出了信息时代的语法**。比特、信道、熵、容量，这些来自香农论文的概念，是今天每一个机器学习模型计算损失、评估压缩、定义优化目标时仍在使用的基本词汇。

**它造出了 AI 的物质载体**。从晶体管到 UNIX 到 C，从光纤到数字交换机，今天我们训练大模型所依赖的硬件与系统软件，几乎都能追溯到贝尔实验室某条走廊里某个下午。

**它孕育了深度学习的第一次工业化**。LeNet 不是 1989 年最聪明的算法——它在很长一段时间里也并非主流——但它是第一个被部署进真实产品、读过几亿张支票、跑了十几年的卷积网络。2012 年 AlexNet 引爆的"深度学习革命"在结构上几乎就是 LeNet 的放大版。

**它也是工业研究黄金模式的挽歌**。在垄断利润与冷战科研需求双重托举下，贝尔实验室得以让最聪明的人花最多年做最不功利的事。这种模式在今天的 OpenAI、DeepMind、FAIR 那里部分被复刻，却再也无法以同样的方式集中在一栋楼里。

**它还是一种治理样本**。"反垄断"这个看上去与科研无关的法律工具，却把贝尔实验室成果以低门槛对外授权——这种制度设计直接催生了仙童、英特尔等无数衍生公司，也让晶体管、UNIX、C 这些"国家级公共资产"得以在全球扩散。今天讨论 AI 模型开源、算力垄断、训练数据公共化时，贝尔实验室的这段历史仍是一块绕不开的镜子。

::: tip 太史公曰
贝尔实验室之于人工智能，犹齐之稷下学宫，秦之咸阳学府。它不专攻 AI，却为 AI 备下整副骨架——香农以一篇论文造出"信息"二字的度量衡，巴丁、布拉顿、肖克利在地下室里点燃了硅基文明的第一只火，汤普森、里奇用 C 与 UNIX 给后来一切计算系统铺好底层，而杨立昆、瓦普尼克与同事们则在霍姆德尔写下了机器学习两条主路的早期蓝图。贝尔实验室教会世人一件事：基础研究若给足时间与自由，回报常以数十年计；而一旦垄断红利散去、季度财报登场，这种回报机制便难以为继。它是工业研究的巅峰，也是工业研究的最后挽歌。今天每一家自称"研究院"的科技公司，心中都还住着一个默里山。
:::

## 亲历者说

::: info 征集中
如果你曾在贝尔实验室、AT&T Labs、朗讯或诺基亚贝尔实验室工作或访问，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Shannon, C. E. (1948). "A Mathematical Theory of Communication." *Bell System Technical Journal*, 27(3): 379–423; 27(4): 623–656.
2. Shannon, C. E. (1950). "Programming a Computer for Playing Chess." *Philosophical Magazine*, 41(314): 256–275.
3. Bardeen, J., & Brattain, W. H. (1948). "The Transistor, A Semi-Conductor Triode." *Physical Review*, 74(2): 230–231.
4. Davis, K. H., Biddulph, R., & Balashek, S. (1952). "Automatic Recognition of Spoken Digits." *Journal of the Acoustical Society of America*, 24(6): 637–642.
5. Rabiner, L. R. (1989). "A Tutorial on Hidden Markov Models and Selected Applications in Speech Recognition." *Proceedings of the IEEE*, 77(2): 257–286.
6. LeCun, Y., Boser, B., Denker, J. S., Henderson, D., Howard, R. E., Hubbard, W., & Jackel, L. D. (1989). "Backpropagation Applied to Handwritten Zip Code Recognition." *Neural Computation*, 1(4): 541–551.
7. Cortes, C., & Vapnik, V. (1995). "Support-Vector Networks." *Machine Learning*, 20(3): 273–297.
8. LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). "Gradient-Based Learning Applied to Document Recognition." *Proceedings of the IEEE*, 86(11): 2278–2324.
9. Gertner, J. (2012). *The Idea Factory: Bell Labs and the Great Age of American Innovation*. Penguin Press.
10. Riordan, M., & Hoddeson, L. (1997). *Crystal Fire: The Birth of the Information Age*. W. W. Norton.
11. Ritchie, D. M. (1984). "The Evolution of the Unix Time-Sharing System." *AT&T Bell Laboratories Technical Journal*, 63(8): 1577–1593.
12. Nokia Bell Labs Annual Reports (2017–2025).
