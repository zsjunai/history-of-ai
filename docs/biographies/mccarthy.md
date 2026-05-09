# 列传 · 麦卡锡（John McCarthy）

> 他给一个尚不存在的领域取了名字，又用一种至今未老的语言为它立庙，却终生在追一个未到来的"常识机器"。

![麦卡锡（John McCarthy），2006 年摄于斯坦福](/images/people/mccarthy.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 一个名字的发明

1955 年的夏天，约翰·麦卡锡（John McCarthy）二十八岁，在达特茅斯学院（Dartmouth College）数学系任助理教授。他正在写一份资助申请书。

那一年，他与<Person id="minsky" />（哈佛初级研究员）、<Person id="rochester" />（IBM 信息研究主管）、<Person id="shannon" />（贝尔实验室）联名向洛克菲勒基金会（Rockefeller Foundation）递交了一份会议提案：希望在 1956 年夏天，召集十位左右研究者，到达特茅斯学院待两个月，集中讨论"如何让机器使用语言、形成抽象概念、解决目前只有人类能解决的问题"。

提案需要一个名字。麦卡锡后来回忆，他特意避开了"控制论"——那是<Person id="wiener" />的领地，而维纳本人脾气古怪、不易共事。他也避开了"自动机理论"——那个词太狭隘。他想要一个崭新的、不带既有学术派系包袱的名字。他写下了一个组合：**Artificial Intelligence**。

1956 年 6 月到 8 月，达特茅斯人工智能夏季研究计划（Dartmouth Summer Research Project on Artificial Intelligence）举行。来去人员二十余位，远比麦卡锡预想的零散。<Person id="newell" />与<Person id="simon" />从兰德公司带来了"逻辑理论家"（Logic Theorist）程序——已经能证明《数学原理》中的若干定理，是会议上唯一一件能跑的成果。麦卡锡本人在那个夏天没拿出什么具体作品，但他给整个领域取了那个从此再没换过的名字。

那张提案纸今天藏在达特茅斯，被视作 AI 元年的诞生证书。

## LISP：献给思考的语言

1958 年，麦卡锡转入 MIT，与<Person id="minsky" />共同创立 MIT 人工智能项目（MIT AI Project，1963 年扩展为 MIT AI Lab）。同一年，他在 MIT 开始设计一种新的编程语言。

他的动机是：要让计算机做出像人一样的推理，就必须能在程序里**表达和操纵符号表达式**——而不只是数字。当时主流的 FORTRAN 是为科学计算而生，对符号束手无策。

麦卡锡的解决方案极其简洁：把数学家阿隆佐·丘奇（Alonzo Church）的 lambda 演算（λ-calculus）变成一种实际可执行的语言。代码与数据使用同一种结构——括号里的列表（list）。一切是表，函数也是表，程序操作表的方式与操作数据完全一样。这种"代码即数据"的同构（homoiconicity），后来被称作 LISP 最深的美。

1960 年，麦卡锡发表了那篇被无数计算机科学家奉为经典的论文——《符号表达式的递归函数及其机器计算（一）》（"Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"，*Communications of the ACM*）。论文用 LISP 自己定义了 LISP——`eval` 函数仅有半页代码，却完整描述了这门语言的语义。当艾伦·凯（Alan Kay）多年后第一次读到那半页时，他说："那是我读过的、最接近软件领域的麦克斯韦方程组的东西。"

LISP 还顺手发明了若干今天习以为常的概念：垃圾回收（garbage collection，由麦卡锡命名）、条件表达式、递归作为主要控制流、高阶函数。半个多世纪过去，从 Common Lisp、Scheme，到 Clojure、Racket，再到 Emacs Lisp——LISP 谱系仍是活的。MIT、CMU、斯坦福一代代 AI 研究者，最初的"AI"二字几乎都是用 LISP 写出来的。

## "公用计算"——五十年前的云

1960 年代初的麦卡锡，已经在思考另一件不属于他时代的事。当时的计算机是孤岛——一台主机，一群程序员排队提交穿孔卡片，等几个小时才能拿回结果。麦卡锡说：这不行。

他在 MIT 大力推动**时分系统**（time-sharing）：让多个用户同时通过终端共享一台主机的计算资源。麦卡锡 1959 年起草的备忘录《为我们将到的 IBM 709 设计的时分操作程序》（"A Time Sharing Operator Program for Our Projected IBM 709"）在技术细节上推进了这一构想。该思想催生了 MIT 的 CTSS（兼容时分系统）、Multics，并最终通过 Unix 与互联网，成为现代计算的底层范式。

更激进的是 1961 年他在 MIT 百年校庆演讲中说的一句话："如果计算机将来变得我现在所设想的那种，那么计算机有可能像电话和电力一样，作为一种**公共事业**（public utility）来组织。"——这是云计算（cloud computing）思想的最早公开表述，比"云"这个词的流行早了将近半个世纪。今天 AWS、Azure、阿里云的每一台机器，都在不知不觉中替麦卡锡兑现这句预言。

## 常识：他追了一辈子的山

如果说 LISP 是麦卡锡留给世界最完整的礼物，那么"常识"则是他一生未能登顶的山。

1958 年，他写下《具有常识的程序》（"Programs with Common Sense"），提出一个名为"建议接受者"（Advice Taker）的设想：一个用形式逻辑表达世界知识的系统，可以听人类输入新信息（"我现在在家""车在车库里""我想去机场"），自动推导出该做什么（"先走到车库，开车出去……"）。这是符号主义 AI 的灵魂宣言。

为此，麦卡锡接下来五十年大部分精力都投入了**形式化常识推理**（formal common-sense reasoning）。他发明或推动了一系列重要工具：情景演算（situation calculus，1969，与 Patrick Hayes 合著）、绕回逻辑（circumscription，1980，处理"默认假设"的非单调推理）、阐述容忍（elaboration tolerance）。每一项都是逻辑学界的真贡献。但每一项也都未能让机器真的拥有常识。

为什么？因为常识太多、太琐、太互相纠缠。"杯子掉了会碎"、"婴儿不会开车"、"明天的太阳会升起"——这些数十亿条规则，无论多漂亮的形式系统都难以穷尽。1980 年代到 90 年代，符号主义 AI 在常识这堵墙前止步不前；而几十年后真正给机器带来"准常识"的，不是麦卡锡的逻辑，而是大语言模型用万亿 token 的统计相关性硬碰硬碾过去的结果——一种他生前并不看好的路径。

## 斯坦福、奖项与晚年

1962 年，麦卡锡因与<Person id="minsky" />在 MIT AI 实验室方向上的分歧，离开剑桥，前往斯坦福，创立**斯坦福人工智能实验室**（SAIL，Stanford AI Lab）。SAIL 在他主持下成长为西海岸 AI 研究的圣地：早期机器人、计算机视觉、Shakey 机器人项目（合作单位 SRI）、最早的电子棋类对弈系统、远程登录系统的实验，都从这里出来。SAIL 与他的弟子们后来开枝散叶——温斯顿（Patrick Winston）、雷迪（Raj Reddy）、戴维斯（Randall Davis）等，无一不与他这一脉有关。

1971 年，麦卡锡因 LISP、AI 命名与时分系统的贡献，获得**图灵奖**（Turing Award）。1990 年获得国家科学奖章（National Medal of Science），2003 年获得本杰明·富兰克林奖章（Benjamin Franklin Medal）。

他的私生活相对简朴。他喜欢爬山、下棋、读俄语原著小说（他自学了俄文，对苏联科学界保持终生兴趣）。他在斯坦福家中养过几只猫，他给孩子讲数学题用的是 LISP 风格的递归。

他对人工智能的进步持续保持着一种"还不够"的不耐烦——大语言模型尚未到来，深度学习还在 ImageNet 之前的低谷期，他多次公开表示当前的 AI 离真正的智能"差得太远"。在他看来，没有形式化的世界模型，就没有真正能"思考"的机器。

2011 年 10 月 24 日，麦卡锡在斯坦福家中辞世，享年八十四岁，距去世前不久还在整理论文准备一本未完的常识推理专著。他没有等到 GPT 那样的系统出现——也许他若见到，会一边惊叹一边摇头："这并不是我说的那种 'common sense'。"

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1955 | "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence"（与 Minsky、Rochester、Shannon 合署） | 第一次写下 "Artificial Intelligence" 一词 |
| 1959 | "Programs with Common Sense" | 提出 Advice Taker，奠定符号主义 AI 路线 |
| 1960 | "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I" | 定义 LISP，AI 与函数式编程双重源头 |
| 1969 | "Some Philosophical Problems from the Standpoint of Artificial Intelligence"（与 Hayes 合著） | 提出情景演算，形式化时间、动作与因果 |
| 1980 | "Circumscription—A Form of Non-Monotonic Reasoning" | 提出绕回逻辑，处理常识中的默认假设 |

## 太史公曰

::: tip 太史公曰
太史公曰：麦卡锡为新学立名，为新学造器，为新学规劝世人——名曰"人工智能"，器曰 LISP，劝曰"机器当有常识"。立名者必为始祖，造器者必为宗师，劝世者多为殉道。麦卡锡兼此三者于一身，故达特茅斯有他、MIT 有他、斯坦福有他、图灵奖有他、云计算之先声有他。然其一生苦苦追求的"常识机器"，至死未见。今日之大模型以万亿之文堆砌出"准常识"，而麦卡锡之逻辑路线，反在角落。世事之诡异，竟在于：取名者得领域之半壁，路线之争却未必属于他。然取名亦是大事——无名则无家，有家而后有学。麦卡锡之于 AI，犹周公之于礼，纵使后人不复尽用其法，仍不得不入其门、行其道、出其户。
:::

## 亲历者说

::: info 征集中
如果你了解麦卡锡的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. McCarthy, J., Minsky, M., Rochester, N., & Shannon, C. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence."
2. McCarthy, J. (1959). "Programs with Common Sense." In *Proceedings of the Teddington Conference on the Mechanization of Thought Processes*.
3. McCarthy, J. (1960). "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I." *Communications of the ACM*, 3(4), 184–195.
4. McCarthy, J., & Hayes, P. (1969). "Some Philosophical Problems from the Standpoint of Artificial Intelligence." *Machine Intelligence*, 4, 463–502.
5. McCarthy, J. (1980). "Circumscription—A Form of Non-Monotonic Reasoning." *Artificial Intelligence*, 13(1–2), 27–39.
6. Garfinkel, S. (1999). *Architects of the Information Society: Thirty-Five Years of the Laboratory for Computer Science at MIT*. MIT Press.（含麦卡锡 1961 年百年校庆演讲文本）
7. Nilsson, N. J. (2010). *The Quest for Artificial Intelligence: A History of Ideas and Achievements*. Cambridge University Press.
8. Russell, S., & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.
9. Stanford News (2011). "John McCarthy, father of AI and Lisp, dies at 84." Stanford University, October 25, 2011.
