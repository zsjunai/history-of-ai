# 列传 · 西蒙（Herbert A. Simon）

> 一个人横跨图灵奖与诺贝尔经济学奖，他把"如何思考"这件事，从哲学的云端拉到了可计算的桌面上。

## 一个不安分的政治学博士

1943 年，二十七岁的赫伯特·西蒙（Herbert A. Simon）在芝加哥大学拿到博士学位。他的专业是政治学，论文题目却是《行政行为》（*Administrative Behavior*）——研究人在组织中如何做决策。他注意到一件被古典经济学忽视了的事：真实的人，根本不是教科书上那个"理性经济人"。人没有那么多时间，没有那么多算力，也没有那么多耐心。人能做的，是在有限的信息和有限的认知容量下，找一个"够好"的答案，而不是"最优"的答案。

他给这种现象起了两个后来名扬天下的名字：**有限理性**（Bounded Rationality）和**满意化**（Satisficing，satisfy 与 suffice 的合成词）。这个洞见看起来朴素，却撼动了整个社会科学的地基。三十多年后，正是这个想法，让他在 1978 年拿到了诺贝尔经济学奖。

但在 1943 年，他还远未走到那一步。他只是带着一种不安分的好奇，从政治学走向组织行为，再走向心理学，再走向计算机——他要弄清楚，人脑到底是怎么算的。

## 卡内基的合伙人

1949 年，西蒙加入卡内基理工学院（Carnegie Institute of Technology，后来的卡内基梅隆大学，CMU），帮助筹建工业管理研究生院（GSIA）。在这里，他遇见了改变他一生的合作伙伴——<Person id="newell" />。两人首次相识于 1952 年的兰德公司（RAND）。一个比西蒙小十一岁的年轻人，谈起信息处理时眼里有光。西蒙后来回忆："我们当场就知道，我们会一起工作很长时间。"

事实上他们一起工作了整整四十年，几乎从未公开争吵过。这在学术界是罕见的。

## 逻辑理论家：第一个 AI 程序

1955 年圣诞节前后，西蒙和纽厄尔，加上兰德的程序员肖（Cliff Shaw），写出了一段震惊世界的代码。1956 年初，这个程序在兰德公司的 JOHNNIAC 计算机上运行，它的名字叫**逻辑理论家**（Logic Theorist, LT）。

LT 能做什么？它能证明数学定理。具体来说，是<Person id="russell" />和<Person id="whitehead" />合著的《数学原理》（*Principia Mathematica*）第二章里的命题逻辑定理。LT 自动证明了 52 条中的 38 条，其中一条的证明比罗素本人给出的还要简洁优雅。西蒙把这个结果寄给罗素，罗素回信表示，他"很高兴知道这本拖了我们十年的烂书，原来可以用这种方式继续下去"。

LT 不是穷举，它使用启发式搜索（Heuristic Search）：在一个巨大的可能性树中，靠经验性的"选择规则"剪枝，跳过明显走不通的路。这是 AI 的第一个真正意义上的程序，也是认知科学（Cognitive Science）的第一个工作模型。1956 年夏天，西蒙和纽厄尔带着 LT 来到达特茅斯，向<Person id="mccarthy" />、<Person id="minsky" />等人展示——他们是那场会议上唯一带着可运行程序到场的人。

也是在 1956 年初的一节课上，西蒙对学生说出了那句被反复引用的话："圣诞节假期里，我们发明了一台会思考的机器。"

## GPS 与"二十年内"

1957 年，西蒙、纽厄尔、肖三人写出了 **GPS（General Problem Solver，通用问题求解器）**。LT 是为定理证明而生的专家程序，GPS 则试图把"求解任何问题"这件事抽象出来：先定义当前状态和目标状态，再用"手段—目的分析"（Means–Ends Analysis）一步步缩小两者之间的差距。这是 AI 历史上第一次明确提出"通用"问题求解的野心。

也就是在这种乐观的氛围中，西蒙在 1957 年说出了那句日后无数次被引用、也被嘲笑的预言：

> "在二十年之内，机器将能够做任何人类能做的工作。"

二十年后，1977 年，机器还做不到。四十年后也做不到。直到 2020 年代之后，这句话才以一种他完全没有预见到的方式（大语言模型，而非 GPS 这条路）变得不那么离谱。但在 1957 年说出这句话，已经足够使他被列为"AI 过度乐观派"的代表。

公允地说，西蒙这种乐观源于一种深信：人脑不过是一台**物理符号系统**（Physical Symbol System），而符号系统的规律是可以被机器复刻的。这条命题，他和纽厄尔在 1976 年的图灵奖演讲中正式写成"物理符号系统假设"——AI 哲学最具争议、也最具号召力的一条命题。

## *Human Problem Solving*

1972 年，西蒙与纽厄尔合著的《人类问题求解》（*Human Problem Solving*）出版。这是一本厚达九百页的巨著，用大量的心理学实验数据——尤其是国际象棋选手、密码学家、几何题求解者的"出声思考"（think-aloud protocol）记录——来论证一件事：人在解题时，所做的，本质上就是一种符号操作；这种操作可以被精确描述为一个程序。

这本书是认知心理学（Cognitive Psychology）从行为主义阴影下走出来的关键文本之一。它把"心智"重新变成了一个可以被科学研究的对象——不是通过哲学思辨，而是通过把它实现为一台可运行的程序。

## 双冠：图灵奖与诺贝尔经济学奖

1975 年，西蒙与纽厄尔共同获得图灵奖（Turing Award），表彰他们"在人工智能、人类认知心理学以及表处理（list processing）方面的基础性贡献"。

1978 年，西蒙单独获得诺贝尔经济学奖，表彰他"在经济组织内部决策过程方面的开创性研究"。颁奖词特别提到了"有限理性"和"满意化"。

至此，他成为人类历史上极少数同时拿过图灵奖与诺贝尔奖的人。AI 史上，仅此一人。

晚年的西蒙仍未停下。他参与了 SOAR 体系结构的研发——这是纽厄尔主导的认知统一理论的工程实现，也是符号主义 AI 后期最雄心的尝试。他还把"专家"这个概念量化：他与同事的研究表明，国际象棋大师之所以成为大师，是因为他们的长期记忆中存储了大约五万到十万个"棋形模板"（chunks）——这是十年专注训练的结果。这个发现，后来被埃里克森（K. Anders Ericsson）发展为"刻意练习"理论，再被科普作家写成畅销书，传遍全世界。

2001 年 2 月 9 日，西蒙在匹兹堡去世，享年八十四岁。他留下的著作目录，长得像一个研究院。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1947 | *Administrative Behavior* | 提出有限理性概念，重塑组织决策研究 |
| 1956 | Logic Theorist（与 Newell, Shaw） | 历史上第一个 AI 程序 |
| 1957 | GPS（与 Newell, Shaw） | 第一个尝试"通用问题求解"的程序 |
| 1969 | *The Sciences of the Artificial* | 设计科学与复杂系统的奠基之作 |
| 1972 | *Human Problem Solving*（与 Newell） | 用符号处理重新定义认知心理学 |
| 1976 | "Computer Science as Empirical Inquiry"（与 Newell） | 提出物理符号系统假设 |

## 太史公曰

::: tip 太史公曰
西蒙之奇，在于他从未把自己关进任何一个学科。他从政治学出发，路过组织行为、心理学、经济学，最终落脚在计算机科学；又从计算机科学反向出击，把"思考"这件事变成可运行的程序，再把这套程序的逻辑送回经济学，告诉古典经济学家：你们假想中那个无所不知的"理性人"，从未存在过。他一人横跨图灵奖与诺贝尔经济学奖，AI 史绝无仅有。然而他也是过度乐观预言的代表——"二十年之内机器能做任何人类的工作"，这句话被引用了七十年仍未兑现，却又在他完全没料到的方向上正在逼近。AI 史上有一种悖论："AI 从不来"也"AI 已到处"，西蒙正是这悖论的化身。他想做的是搭一座桥，让认知、经济、计算彼此相通；今天看，这座桥已经把整个文明都拉了过去。
:::

## 亲历者说

::: info 征集中
如果你了解西蒙的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Simon, H. A. (1947). *Administrative Behavior: A Study of Decision-Making Processes in Administrative Organization*. New York: Macmillan.
2. Newell, A., Shaw, J. C., & Simon, H. A. (1957). "Empirical Explorations of the Logic Theory Machine." *Proceedings of the Western Joint Computer Conference*, 218–230.
3. Newell, A., & Simon, H. A. (1972). *Human Problem Solving*. Englewood Cliffs, NJ: Prentice-Hall.
4. Newell, A., & Simon, H. A. (1976). "Computer Science as Empirical Inquiry: Symbols and Search." *Communications of the ACM*, 19(3), 113–126.
5. Simon, H. A. (1969). *The Sciences of the Artificial*. Cambridge, MA: MIT Press.
6. Simon, H. A. (1991). *Models of My Life*. New York: Basic Books.（自传）
7. Royal Swedish Academy of Sciences (1978). *Press Release: The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 1978*.
8. Crowther-Heyck, H. (2005). *Herbert A. Simon: The Bounds of Reason in Modern America*. Baltimore: Johns Hopkins University Press.
9. Augier, M., & March, J. G. (Eds.) (2004). *Models of a Man: Essays in Memory of Herbert A. Simon*. Cambridge, MA: MIT Press.
