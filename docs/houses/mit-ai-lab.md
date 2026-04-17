# 世家 · MIT AI 实验室

> 人工智能作为一门学科在这里被命名、被研究、被推广；它也在这里数次跌倒、数次站起。

## 一、Project MAC 的起源

1963 年 7 月，美国国防部高级研究计划局（ARPA，后改名 DARPA）批准了一笔 220 万美元的资助，给麻省理工学院（Massachusetts Institute of Technology，MIT）启动一个代号为 **Project MAC** 的研究项目。MAC 的含义有多种解读——"Mathematics and Computation"、"Machine-Aided Cognition"、"Multiple Access Computer"——每一种都反映了这个项目的野心：把数学、计算、认知、共享计算机融为一体。项目主任是罗伯特·法诺（Robert Fano），但真正改变这个项目走向的，是两位年轻人——<Person id="mccarthy" />和<Person id="minsky" />。

麦卡锡 1958 年从达特茅斯来到 MIT，把他发明的 LISP 带到了这里。明斯基与麦卡锡同一年抵达，1959 年两人共同成立 MIT 的"人工智能项目"（AI Group），成为 Project MAC 下的一个核心分支。1963 年 LISP 机器的硬件开发也是在这里起步。

麦卡锡 1962 年离开 MIT 转往斯坦福，创立 SAIL；但他留下的 LISP、时分系统（time-sharing）思想和关于"可推理机器"（Advice Taker）的构想，让 MIT AI 项目从一开始就以"符号推理 + 时分共享 + 通用智能"为核心议程。

## 二、从 AI 项目到 AI 实验室

1970 年，AI 项目正式从 Project MAC 中独立出来，成为 **MIT AI Laboratory**（AI 实验室），明斯基任所长。那一年是人工智能作为独立学科的全盛期——明斯基的学生、合作者和访客里走出了后来塑造整个领域的众多名字：<Person id="winograd" />（SHRDLU）、<Person id="weizenbaum" />（ELIZA）、<Person id="papert" />（Logo 语言）、帕特里克·温斯顿（Patrick Winston）、杰拉尔德·萨斯曼（Gerald Sussman）、哈尔·艾贝尔森（Hal Abelson）、卡尔·休伊特（Carl Hewitt）、理查德·斯托曼（Richard Stallman）。

实验室位于 MIT 的 Tech Square 9 楼。这栋楼后来被神化为"AI 的麦加"——进出的每个人都在研究当时最前沿的问题。屋顶上挂着"世界上第一台手臂"（由明斯基设计的机械臂）；地下室有早期的 LISP 机器；走廊里随处可见黑客写的"Jargon File"俚语和各种纸条。

## 三、符号主义的堡垒

1970 年代的 MIT AI 实验室是"符号主义 AI"黄金时代的中心。它相信智能可以还原为对符号结构的搜索与操作——这与斯坦福的 SAIL 遥相呼应，共同主导了整个 AI 方向二十年。

**SHRDLU**（1971）是这条路线最耀眼的演示。维诺格拉德的博士论文，一个能在"积木世界"里理解英文指令、规划动作、回答问题、甚至讨论自己"为什么这么做"的程序。"把那个蓝色积木放到红色积木上面。" SHRDLU 回答："好的。" 一整代 AI 研究者看过这段对话的录像后都相信通用 AI 近在咫尺。

**ELIZA**（1966）是另一个神话。维森鲍姆只用了几百行代码，写出一个扮演罗杰斯派心理治疗师的程序，靠模式匹配和模板替换对话。没想到秘书们认真地把 ELIZA 当作咨询师，在深夜对着它倾诉。维森鲍姆从此成为 AI 最早的批评者之一，1976 年出版《Computer Power and Human Reason》，反省技术能做什么与应该做什么的边界。

**Logo 语言**（1967，帕珀特主导）把 AI 思想带入教育：一只小乌龟听从程序命令在屏幕上画图，让儿童理解几何与递归。Logo 背后的建构主义（Constructionism）理念影响了几十年后 Scratch 和创客运动。

**"框架理论"**（1974，明斯基）、**Cyc 计划**的早期构想（1970s 末）、**常识推理**的第一次系统尝试——所有这些努力都指向同一个目标：让机器拥有人类式的理解。

然而到 1970 年代末，积木世界的边界开始显现。SHRDLU 无法走出积木，ELIZA 不懂它在说什么，常识知识的规模是无底洞。1973 年莱特希尔报告在英国引发第一次 AI 寒冬，MIT 虽然没有被资金潮退得那么惨，但"符号 AI 的黄金时代"的光环开始褪色。

## 四、黑客文化与自由软件的摇篮

MIT AI 实验室的另一重身份，是计算机黑客文化的发源地。

史蒂芬·利维（Steven Levy）1984 年出版的《Hackers: Heroes of the Computer Revolution》开篇就写 MIT AI 实验室的黑客伦理：信息应该自由、反对权威、用编程改变世界。Richard Greenblatt 和 Bill Gosper（数学家与编程大师）被视为"第一代黑客"的代表人物。

理查德·斯托曼 1971 年进入 AI 实验室工作。他目睹 1970 年代末到 1980 年代初的一幕幕——Symbolics 和 LMI 两家公司从 AI 实验室分裂出去商业化 LISP 机器，带走了大部分核心工程师，让共享文化崩塌。斯托曼决心不让这种事再发生。1983 年他宣布启动 **GNU 项目**，1984 年辞去 MIT 职位专职开发 GNU 系统，1985 年成立自由软件基金会（FSF）。整个自由软件运动——以及它后来衍生的开源运动——都可以追溯到 AI 实验室 9 楼那个拒绝向商业妥协的程序员。

SICP（*Structure and Interpretation of Computer Programs*）——艾贝尔森与萨斯曼 1985 年出版、以 Scheme 语言为基础的编程教材——也诞生于此。这本书成为 MIT 6.001 课程的经典教材，塑造了三十年计算机科学本科生的编程思维。

## 五、合并为 CSAIL 的新时代

2003 年 7 月，AI 实验室与 1963 年成立的计算机科学实验室（LCS，Laboratory for Computer Science）正式合并为 **CSAIL**（Computer Science and Artificial Intelligence Laboratory，计算机科学与人工智能实验室）。首任主任是澳大利亚出身的机器人学者罗德尼·布鲁克斯（Rodney Brooks）。

合并本身标志着一个时代的结束：AI 不再是一个自成一格的分支，而是计算机科学的内在组成部分。合并后的 CSAIL 规模巨大——超过 100 位教授、900 多名研究人员、遍及网络、算法、计算生物、机器人、HCI 等所有计算机科学分支。

当代 CSAIL 的 AI 力量依然顶级：**Regina Barzilay**（NLP 与医疗 AI，2017 年罹患乳腺癌后专注 AI 在早期癌症检测上的应用）、**Josh Tenenbaum**（计算认知科学，用贝叶斯方法建模人类学习）、**Tomaso Poggio**（McGovern 脑科学研究所联合主任，类脑计算与学习理论）、**Daniela Rus**（2012 年起任 CSAIL 主任，软体机器人与分布式机器人系统）、**Dina Katabi**（无线感知与健康监测）、**Antonio Torralba**（计算机视觉）、**Max Tegmark**（AI 安全与物理学交叉）。

Tim Berners-Lee 爵士在 CSAIL 的 DIG 组长期从事 Web 架构与分布式数据（Solid）的研究；他虽然更常与 W3C 联系在一起，但也算是 CSAIL 的编制成员之一。

## 六、与 AI 寒冬、复兴的关系

MIT AI 实验室是两次 AI 寒冬的亲历者，但也是每次复兴的关键火种。

1973 年莱特希尔报告批评 AI 的组合爆炸问题，美国 DARPA 随后收紧资助——但 MIT 的"Mansfield 修正案"豁免部分让它保留了相当规模的 AI 研究。1987 年 LISP 机器市场崩溃，Symbolics 走向破产，MIT AI 实验室受到直接冲击，但基础研究没有停下。

2012 年深度学习革命到来时，MIT AI 实验室的主流研究范式已经从符号 AI 转向了统计学习、贝叶斯方法、深度学习。Tenenbaum、Poggio、Torralba 等人的工作迅速接入这一波浪潮；2016 年后 CSAIL 成立了多个深度学习与强化学习的中心。

但 MIT 并不追求"出一家 OpenAI"——它的定位始终是学术研究的源头。当代最前沿的几次突破——Transformer、RLHF、Chain-of-Thought、AlphaFold——都不是 MIT 的工作，但几乎所有这些工作的作者都读过 SICP、用过 MIT 的教材、引过 MIT 的论文、或有某种程度的学术血缘。

## 七、作为机构的 MIT AI

回到最初的问题：MIT AI 实验室为什么重要？

**它是一个命名者**。1955 年麦卡锡起草达特茅斯提案时提出了"Artificial Intelligence"这个词；1959 年他在 MIT 把这个词转化为一个实验室；1970 年这个实验室独立，让"人工智能"真正有了它自己的制度化身。

**它是一个方法论母体**。符号 AI 的几乎所有核心概念——知识表示、搜索、规划、学习、自然语言理解——都在这里被首次尝试。后来的每一代 AI 研究者都要与 MIT 的这些工作对话，或是继承，或是反驳。

**它是一个人才输送带**。从温斯顿到斯托曼，从布鲁克斯到 Rus，从 Tenenbaum 的学生到 Barzilay 的博士生，MIT AI 实验室在 60 年里输出了几代塑造世界的工程师、教授和创业者。

**它也是一个警示**。当明斯基和帕珀特 1969 年用《感知机》暗中判决神经网络是死路一条时，他们几乎一手冻结了连接主义 20 年。这个失误来自 MIT，对 MIT 来说是历史的包袱，也是对后来者的教训。

到 2026 年，MIT AI Lab 作为独立建制已不存在，但 CSAIL 继续在 Cambridge 的 Stata Center 大楼里运作。来到这栋楼的每一个年轻研究者，多少都能感受到从 Tech Square 9 楼一路传下来的那份执念——让机器思考，并且让这件事值得。

::: tip 太史公曰
MIT AI 实验室之于人工智能，犹周之岐山、汉之丰沛。它不是最大的实验室，也不是最富的实验室，但它是**第一个**——第一个命名它的实验室、第一个系统研究它的实验室、第一个把它写进教科书的实验室。这份"第一"带来了巨大的荣耀，也带来了沉重的包袱：符号主义的黄金时代在这里绽放，也在这里过度自信；感知机的批判在这里打响，也在这里冻结了一条本可以更早开花的路。到了深度学习时代，它不再是新突破的主要产地，但它仍是源头——每一代新的 AI 研究者都要来这里朝圣一次，不是为了最前沿的算法，而是为了看看最初的那些问题是怎么被问出来的。问题比答案更长久，这是 MIT AI 留给今天的最大遗产。
:::

## 亲历者说

::: info 征集中
如果你曾在 MIT AI 实验室或 CSAIL 工作学习，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence."
2. Winograd, T. (1972). "Understanding Natural Language." *Cognitive Psychology*, 3(1), 1–191.
3. Weizenbaum, J. (1966). "ELIZA—A Computer Program for the Study of Natural Language Communication." *Communications of the ACM*, 9(1).
4. Minsky, M. L., & Papert, S. A. (1969). *Perceptrons*. MIT Press.
5. Levy, S. (1984). *Hackers: Heroes of the Computer Revolution*. Anchor Press/Doubleday.
6. Abelson, H., Sussman, G. J., & Sussman, J. (1985). *Structure and Interpretation of Computer Programs*. MIT Press.
7. Stallman, R. (2002). *Free Software, Free Society: Selected Essays of Richard M. Stallman*. FSF.
8. Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. Basic Books.
9. MIT CSAIL Annual Reports (2003-2025).
10. Rus, D. (2015). "The Future of Robotics." *Scientific American*.
