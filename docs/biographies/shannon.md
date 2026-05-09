# 列传 · 香农（Claude Shannon）

> 他用一篇硕士论文重塑了电路，又用一篇论文创造了一个时代——信息时代。

![香农（Claude Shannon），Oberwolfach 数学研究所留影](/images/people/shannon.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 一篇硕士论文

1937 年的剑桥（Cambridge, Massachusetts），麻省理工学院（MIT）。一个二十一岁的青年正在写他的硕士论文。他叫克劳德·埃尔伍德·香农（Claude Elwood Shannon），来自密歇根州（Michigan）一个小镇盖洛德（Gaylord），父亲是法官，母亲是中学校长。他在密歇根大学（University of Michigan）读了两个本科——电气工程与数学。后来他自己说：这两门学科的结合，决定了他一生的方向。

那一年，香农作为 MIT 微分分析仪（Differential Analyzer）的操作员，每天与一台由继电器与机械齿轮构成的庞然大物打交道。这台机器是当时世界上最先进的模拟计算设备之一，由万尼瓦尔·布什（Vannevar Bush）主导建造。香农盯着它密密麻麻的开关电路，忽然意识到一件事：这些"开"与"关"，与十九世纪英国数学家乔治·布尔（George Boole）发明的二值代数，竟是同一回事。

他写下了硕士论文《继电器与开关电路的符号分析》（"A Symbolic Analysis of Relay and Switching Circuits"，1937 年提交，1938 年发表）。论文里的核心洞见极其简单：任何由继电器与开关组成的电路，都可以用布尔代数描述；反过来，任何布尔表达式，都可以转化为电路。"与"是串联，"或"是并联，"非"是反向继电器。复杂电路的分析与化简，从此不再依赖工程师的直觉，而成为一道道代数题。

这并非微不足道的形式游戏。在那之前，电路工程师面对一个继电器网络，往往只能凭经验试错：能不能让灯泡按某种顺序亮起？需要多少零件？香农的代数让这一切变得可推导。设计可被证明，错误可被定位，规模可被扩展。

哈佛科学家霍华德·加德纳（Howard Gardner）后来评价：这是"二十世纪最重要、也可能是最著名的硕士论文"。它把数字电路的设计从一门艺术变成了一门科学。今天每一颗芯片上的逻辑门——亿万级别的"与或非"——都遵循着这个二十一岁青年写下的那套规则。

## 贝尔实验室与战时的密码

1940 年，香农在 MIT 拿到数学博士，论文研究的是用代数描述孟德尔遗传——又一次跨界。次年他加入贝尔实验室（Bell Labs），从此在这家二十世纪最伟大的工业研究机构工作了十五年。

二战期间，贝尔实验室是美国密码学的核心阵地之一。香农的官方任务是研究火控系统与加密通信。他曾参与 SIGSALY——盟军最高级别的语音加密系统，丘吉尔与罗斯福通话所用的那一套——的安全性分析。1943 年初，<Person id="turing" />作为英国密码学使节短暂访美，与香农在贝尔实验室的自助餐厅多次共进午餐。两人不被允许讨论各自正在做的密码工作，便聊起了机器与心智、聊起了计算的本质。多年以后，香农回忆这些对话时说，他记得最清楚的，是图灵关于"机器最终能否思考"的反复追问。

战争留给香农的，不仅是与同时代最伟大头脑的相遇，还有一份机密的内部备忘录《密码学的数学理论》。这份 1945 年完成的报告在 1949 年解密发表，题为《保密系统的通信理论》（"Communication Theory of Secrecy Systems"）。它第一次为现代密码学奠定了数学基础——把"完美保密"定义为密文与明文统计独立，并证明只有"一次一密"（One-Time Pad）能达到这一标准。从那以后，密码学不再是工匠的手艺，而是一门可证明、可量化的科学。

## 一篇论文创造一个时代

战后，香农回到平静的研究生活。他一直在思考一个问题：信息究竟是什么？通信究竟在传递什么？

1948 年 7 月与 10 月，《贝尔系统技术杂志》（*Bell System Technical Journal*）连载了一篇论文——《通信的数学理论》（"A Mathematical Theory of Communication"）。署名只有香农一个。这篇论文做了几件前所未有的事。

它定义了"信息"。在香农之前，"信息"是一个含糊的日常词汇。香农说：信息是不确定性的减少。一个事件越是出乎意料，它携带的信息就越多。他借用了热力学的概念，把信息量命名为"熵"（entropy），并给出了精确的数学表达：H = −Σ p_i log p_i。

它定义了"比特"（bit）。这个由香农的同事约翰·图基（John W. Tukey）提议、由香农正式写入论文的词，从此成为数字世界的基本单位。一个二进制选择，一比特。今天人类每年产生的数据以 zettabyte 计——而 zetta 不过是 bit 之上的一连串千倍。

它给出了信道容量定理（Channel Capacity Theorem）。任何噪声信道都有一个上限 C；只要传输速率不超过 C，理论上就能以任意小的错误率传输信息。这个结论在当时几乎反直觉——工程师们一向相信噪声会让传输错误随数据量累积。香农证明：错不会累积，只要你编码得足够聪明。今天的 5G、Wi-Fi、深空探测、SSD 纠错码，全部站在这条定理之上。

一年之后，这篇论文与沃伦·韦弗（Warren Weaver）写的导言合订成书《通信的数学理论》（*The Mathematical Theory of Communication*，1949），香农成了"信息论之父"。他时年三十二岁。

## 会下棋的机器与会走迷宫的鼠

香农并不是一个只会写论文的理论家。他的家是一座小型机械动物园——独轮车、杂耍球、火焰喷射喇叭、写着字母倒着读的 THROBAC 罗马数字计算器。MIT 的同事们记得，下班后常能看到他骑着独轮车、同时抛接三只球，沿着走廊滑过去。

1950 年，他在《哲学杂志》（*Philosophical Magazine*）发表《为下棋编程》（"Programming a Computer for Playing Chess"）——计算机国际象棋研究的开山之作。他在论文中区分了两种搜索策略："A 型"穷举所有走法、"B 型"只考察少数有前途的走法，并给出了一套基础评估函数。后来三十年的所有计算机棋类程序——直到 IBM 深蓝（Deep Blue）——基本都是这两种策略的精细化。

同年，香农造出了一只名叫"忒修斯"（Theseus）的机械老鼠。这只磁性铜鼠在金属迷宫中走来走去，第二次走时就能记住路径，直接抵达终点。迷宫的"记忆"其实藏在老鼠下方那块电磁继电器板里——又是他熟悉的开关电路。

这是有据可查的、世界上最早的机器学习实物演示之一。香农在演示视频里一脸顽童的笑——他始终相信，重要的思想应该能被一只老鼠表演出来。

## 沉默的晚年

1956 年香农回到 MIT 任教，1978 年退休。他还参与过早期的人工智能研究——1956 年的达特茅斯会议（Dartmouth Workshop）四位主要发起人中，他是唯一一位前辈级人物，年纪比<Person id="mccarthy" />、<Person id="minsky" />都大十岁左右。

但他始终对 AI 这个领域的高调宣言保持距离。麦卡锡曾试图说服他全身心投入 AI，他拒绝了——他说这个领域"还没有数学"。

他更感兴趣的，是用数学解释一切可被解释之物——包括如何在股票市场里下注（他研究过凯利公式（Kelly criterion），并据传在投资上极为成功）、如何在杂耍中保持平衡（1980 年代他写过《杂耍的科学理论》）。

晚年，香农罹患阿尔茨海默病。他亲手缔造的信息时代正在加速到来——互联网、移动通信、深度学习——而他自己的记忆却在一比特一比特地丢失。2001 年 2 月 24 日，他在马萨诸塞州一家护理院去世，享年八十四岁。妻子贝蒂·香农（Betty Shannon）后来说：他知道自己创造了一些重要的东西，但他从来不觉得自己应该被人崇拜。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1937 | "A Symbolic Analysis of Relay and Switching Circuits"（硕士论文） | 用布尔代数为数字电路奠定理论基础 |
| 1948 | "A Mathematical Theory of Communication", *Bell System Tech. J.* | 创立信息论，定义比特、熵、信道容量 |
| 1949 | "Communication Theory of Secrecy Systems", *Bell System Tech. J.* | 为现代密码学建立数学基础 |
| 1950 | "Programming a Computer for Playing Chess", *Phil. Mag.* | 计算机博弈研究的开山之作 |
| 1950s | Theseus（机械鼠） | 世界上最早的机器学习实物演示之一 |

## 太史公曰

::: tip 太史公曰
太史公曰：香农以二十一岁之龄，一篇硕士论文使电路成为代数；三十二岁，一篇通信论文使信息成为数学。今日云海之内，一字一影一音一码，皆以"比特"为度——而"比特"二字，乃是他与图基在贝尔实验室的午后随口议定。古人云"立言"为不朽，香农立的，是连"言"本身都要先过他一关的言。比之图灵之苦、维纳之孤，香农幸甚——他活得长，活得自在，活到亲手造出的世界铺天盖地袭来；却也悲——一个一生与"信息"为伴的人，晚年却被遗忘症一点点抹去自己。冥冥之中，仿佛宇宙也想知道：一个名字从一颗大脑中熵增散去，需要多少比特。
:::

## 亲历者说

::: info 征集中
如果你了解香农的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Shannon, C. E. (1938). "A Symbolic Analysis of Relay and Switching Circuits." *Transactions of the AIEE*, 57(12), 713–723.
2. Shannon, C. E. (1948). "A Mathematical Theory of Communication." *Bell System Technical Journal*, 27(3), 379–423; 27(4), 623–656.
3. Shannon, C. E. (1949). "Communication Theory of Secrecy Systems." *Bell System Technical Journal*, 28(4), 656–715.
4. Shannon, C. E. (1950). "Programming a Computer for Playing Chess." *Philosophical Magazine*, 41(314), 256–275.
5. Shannon, C. E., & Weaver, W. (1949). *The Mathematical Theory of Communication*. Urbana: University of Illinois Press.
6. Soni, Jimmy & Goodman, Rob (2017). *A Mind at Play: How Claude Shannon Invented the Information Age*. New York: Simon & Schuster.
7. Gleick, James (2011). *The Information: A History, a Theory, a Flood*. New York: Pantheon.
8. Hodges, Andrew (1983). *Alan Turing: The Enigma*. London: Burnett Books.（其中记述了图灵 1943 年访美与香农的会面）
