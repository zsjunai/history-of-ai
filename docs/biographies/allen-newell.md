# 列传 · 纽厄尔（Allen Newell）

> 他与西蒙合作三十五年从未公开争吵，他用最后一口气讲完一套统一的心智理论。光芒不耀，但 AI 这门学问没有他就站不起来。

![纽厄尔（Allen Newell，右）与西蒙下棋，约 1958 年](/images/people/allen-newell.jpg){width=240 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 从物理学到 RAND

艾伦·纽厄尔（Allen Newell）1927 年生于旧金山，父亲是斯坦福医学院的放射学教授。他本想做物理学家，1949 年从斯坦福大学（Stanford University）毕业，又到普林斯顿（Princeton）数学系读研。但他很快发现，自己更感兴趣的不是物理或纯数学，而是**人在做决策时究竟在做什么**。

1950 年，他离开普林斯顿，加入兰德公司（RAND Corporation）——一家受美国空军资助、聚集了顶尖应用数学家与系统分析师的智库。在 RAND，他研究空中交通指挥员的决策过程，参与组织行为模拟。他开始相信：人脑不是一团神秘的果冻，而是一种可以被建模的信息处理系统。

1952 年，<Person id="simon" />到访 RAND，与纽厄尔首次相遇。两人聊起决策建模与符号操作，一拍即合。后来纽厄尔在回忆中写道：他与西蒙的合作是一种"罕见的精神共振"，三十五年间几乎没有真正的分歧。

## 逻辑理论家：1955 年圣诞前夜

1955 年秋，纽厄尔正在 RAND 研究"如何编写一个会下国际象棋的程序"。这个想法把他推向了一个更根本的问题：怎么让机器进行任何形式的符号推理？

那年圣诞节前后，他与西蒙、加上 RAND 的程序员肖（Cliff Shaw），在 JOHNNIAC 计算机上写出了**逻辑理论家**（Logic Theorist, LT）。这是历史上第一个 AI 程序——它能自动证明<Person id="russell" />与<Person id="whitehead" />《数学原理》中的命题逻辑定理，最终证明了 52 条中的 38 条。

LT 引入了两个改写历史的概念：**启发式搜索**（Heuristic Search）和**列表处理**（List Processing）。为了实现 LT，纽厄尔、西蒙、肖共同开发了 IPL（Information Processing Language）——史上第一种支持递归与动态数据结构的编程语言，是后来<Person id="mccarthy" /> Lisp 的直接灵感。

1956 年夏天，三人带着 LT 走进达特茅斯会议（Dartmouth Conference）。在那场被后人奉为 AI 创世纪的聚会上，他们是唯一带着一台**真正能跑**的程序到场的小组。

## GPS：通用问题求解的野心

1957 年，三人合作的第二个程序问世——**通用问题求解器**（General Problem Solver, GPS）。LT 是为命题逻辑定制的，GPS 想做更狂的事：把"求解任何问题"这件事抽象成一个统一框架。

GPS 的核心算法是**手段—目的分析**（Means–Ends Analysis）。给一个起始状态、一个目标状态，程序自动比较两者的差异，再从可用的"算子"中挑出能缩小差异的那一个，递归求解。GPS 后来被用于符号积分、几何题、河内塔（Tower of Hanoi）等多类问题。

GPS 当然不是真正的"通用"——它依赖人类预先把问题翻译成它能理解的状态空间。但作为一种思想范式，它定义了符号主义 AI 此后三十年的主旋律：**搜索 + 启发式 + 符号表示**。

## *Human Problem Solving*：把人脑当成程序来读

纽厄尔与西蒙没有止步于写程序。他们想用程序回头解释人脑。

1960 年代，他们做了大量心理学实验：让被试在解几何题、密码题、棋局时**出声思考**（think-aloud protocol），录下每一句话、每一次停顿，再把这些"口头协议"逐句对应到符号操作的步骤。他们发现，人类的高级思维过程，可以被惊人精确地拟合成一段程序。

1972 年，两人合著的《人类问题求解》（*Human Problem Solving*）出版。这本九百多页的巨著为认知心理学（Cognitive Psychology）确立了**信息处理**的研究范式——心智不是行为主义所说的"刺激—反应"黑盒，而是一台可分析、可建模、可程序化的符号机器。

## 物理符号系统假设

1975 年，纽厄尔与西蒙共同获得图灵奖。1976 年，他们用图灵奖演讲提交了一篇日后被反复辩论的雄文——《作为经验探究的计算机科学》（"Computer Science as Empirical Inquiry: Symbols and Search"）。

文章提出**物理符号系统假设**（Physical Symbol System Hypothesis, PSSH）：

> 一个物理符号系统拥有产生通用智能行为的必要且充分的手段。

这是 AI 哲学史上最具号召力、也最具争议的一条命题。它一边为符号主义提供了形而上学的合法性，一边引来了无穷无尽的反对——从约翰·塞尔（John Searle）的"中文屋"思想实验，到 1990 年代连接主义的反扑，再到 2010 年代之后深度学习对符号路线的全面绕行。

但即便今天，当我们看着大语言模型一边学符号、一边学连续向量时，PSSH 仍然像一根钉在地里的桩——你可以绕着它走，却很难假装它不存在。

## SOAR 与最后的纲领

进入 1980 年代，纽厄尔把全部精力投入到一个雄心更大的工程：**SOAR**（State, Operator, And Result）——一个统一的认知体系结构（Unified Cognitive Architecture），目标是用一套机制解释人类全部的认知活动：感知、问题求解、学习、长期记忆、技能形成。

SOAR 的核心是"chunking"——一种把求解过的子问题压缩为可调用单元的学习机制。这一思想与西蒙关于象棋大师"棋形模板"的研究遥相呼应。SOAR 不是某一类问题的解器，它是一套**关于如何造出心智本身**的规范。

1987 年，纽厄尔在哈佛主讲了 William James 系列讲座——心理学界的最高荣誉之一。1990 年，讲稿整理成书：《认知的统一理论》（*Unified Theories of Cognition*）。这本书是他一生思考的总集——他在书中明确说，这是"我学术生涯的最后一项重要工作"。

那时他已罹癌。他用最后的岁月，几乎不停歇地讲完、写完了这本书。1992 年 7 月 19 日，纽厄尔在匹兹堡去世，享年六十五岁。距离《Unified Theories of Cognition》出版只过了不到两年。

## 双子星

纽厄尔与西蒙的合作，在科学史上几乎找不到第二例。三十五年间，两人共同开创了三件大事：人工智能、认知心理学的信息处理范式、决策过程的计算模型。他们的论文常常署名 Newell & Simon 或 Simon & Newell——次序据说由抛硬币决定。

西蒙后来在自传里写道："艾伦比我年轻十一岁，但他是我学到最多的同事。我们之间的争论，从来都是关于事实，从不关于谁说了算。"

在外人看来，西蒙更耀眼——他后来拿了诺贝尔经济学奖，写自传，做演讲，桃李天下。纽厄尔则更像一位深藏的合伙人，把心思都用在体系构建上。但每一个真正了解 CMU、了解 AI 史的人都知道：纽厄尔之于这门学问，就像张良之于汉室——出谋献策，统揽全局，光芒不耀，但不可缺。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1956 | Logic Theorist（与 Simon, Shaw） | 历史上第一个 AI 程序 |
| 1957 | GPS（与 Simon, Shaw） | 通用问题求解的奠基尝试 |
| 1958 | IPL（与 Simon, Shaw） | 第一种列表处理语言，Lisp 的直接前身 |
| 1972 | *Human Problem Solving*（与 Simon） | 信息处理认知心理学的经典文本 |
| 1976 | "Computer Science as Empirical Inquiry"（与 Simon） | 提出物理符号系统假设 |
| 1990 | *Unified Theories of Cognition* | SOAR 体系，统一认知架构的纲领 |

## 太史公曰

::: tip 太史公曰
纽厄尔之于 AI，犹张良之于汉——不立战阵之上，却定庙堂之计。他与西蒙合作三十五年，写出了 AI 的第一个程序，铸就了认知科学的信息处理范式，提出了物理符号系统假设——这条命题至今仍在被学界辩论。世人多记得西蒙的双冠桂冠，少有人记得每一项工作的署名都有 Newell。这不是命运不公，而是他从来不在乎这件事。他在乎的是：能否用一套统一的体系，解释心智的全部？为此，他把生命的最后岁月用来讲完《Unified Theories of Cognition》——一个学者用尽气力交出的纲领，像古之大儒在病榻上口授未竟之书。今天的深度学习正在绕开符号主义，但 SOAR 提出的问题——"心智是否需要一个统一的架构"——仍未被回答。AI 终究还会回到他的问题上来。
:::

## 亲历者说

::: info 征集中
如果你了解纽厄尔的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Newell, A., Shaw, J. C., & Simon, H. A. (1957). "Empirical Explorations of the Logic Theory Machine: A Case Study in Heuristic." *Proceedings of the Western Joint Computer Conference*, 218–230.
2. Newell, A., & Simon, H. A. (1961). "GPS, A Program That Simulates Human Thought." In *Lernende Automaten*, Munich: Oldenbourg.
3. Newell, A., & Simon, H. A. (1972). *Human Problem Solving*. Englewood Cliffs, NJ: Prentice-Hall.
4. Newell, A., & Simon, H. A. (1976). "Computer Science as Empirical Inquiry: Symbols and Search." *Communications of the ACM*, 19(3), 113–126.
5. Newell, A. (1990). *Unified Theories of Cognition*. Cambridge, MA: Harvard University Press.
6. Laird, J. E., Newell, A., & Rosenbloom, P. S. (1987). "SOAR: An Architecture for General Intelligence." *Artificial Intelligence*, 33(1), 1–64.
7. Simon, H. A. (1991). *Models of My Life*. New York: Basic Books.
8. Laird, J. E., & Rosenbloom, P. S. (1992). "In Pursuit of Mind: The Research of Allen Newell." *AI Magazine*, 13(4), 17–45.
9. McCorduck, P. (2004). *Machines Who Think* (2nd ed.). Natick, MA: A K Peters.
