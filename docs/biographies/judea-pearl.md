# 列传 · 珀尔（Judea Pearl）

> 当符号 AI 已死、深度学习未起，他在窄缝里点起一盏理性主义的灯——而当深度学习独大时，他冷冷指出："相关，并不是因果。"

## 从特拉维夫到布鲁克林

1936 年 9 月 4 日，朱迪亚·珀尔（Judea Pearl）生于英属巴勒斯坦托管地的特拉维夫（Tel Aviv），一个犹太家庭。少年时代经历了 1948 年以色列建国战争。1960 年从特拉维夫郊外的以色列理工学院（Technion – Israel Institute of Technology）取得电子工程学士，然后辗转来到美国——先在新泽西州的纽瓦克工程学院（Newark College of Engineering，今 NJIT）读硕士，再到布鲁克林理工学院（Polytechnic Institute of Brooklyn，今 NYU Tandon）读博士，1965 年以一篇关于电磁存储的论文取得电气工程博士学位。

毕业后他在 RCA 实验室、Electronic Memories 等公司做工程师，研究"超导存储"和"全息存储"。这是一段几乎被遗忘的岁月——一个未来要重写人工智能基础的人，最初十年在写电磁场方程。1969 年他加入加州大学洛杉矶分校（UCLA）任教，在那里一待就是半个多世纪，直到今天。

## 启发式搜索：第一次出场

珀尔在 AI 上的第一次重要出场，是 1980 年代初对启发式搜索（heuristic search）的系统化工作。1984 年他出版《启发式：智能搜索策略的计算机问题求解》（*Heuristics: Intelligent Search Strategies for Computer Problem Solving*），把 A* 算法、博弈树剪枝、贝叶斯估计在搜索中的角色统一在一个数学框架下。这本书在 1980 年代的 AI 课堂上是与<Person id="nilsson" />、<Person id="russell" /> 教科书并列的标准参考。

但珀尔自己很快意识到一件事：搜索回答的是"如何走"，而 AI 真正卡住的问题，是"如何在不确定的世界里推理"。

## 贝叶斯网络：1985 年的拐点

1985 年，珀尔发表了一篇短论文《贝叶斯网络》（"Bayesian Networks: A Model of Self-Activated Memory for Evidential Reasoning"），并在 1988 年扩展为奠基性专著《智能系统中的概率推理：合理推断网络》（*Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference*）。

这本砖头一般的书做了一件至今仍未被超越的事：把概率论从教科书的角落，搬进了 AI 的中心舞台。

贝叶斯网络（Bayesian Network）的核心思想其实简单得令人生疑——把变量之间的概率依赖画成一张有向无环图（DAG），节点是变量，边是直接因果或统计依赖，然后用条件概率表（CPT）把整张图量化。给定部分观测，你可以高效地推断其他变量的后验概率。

看起来只是图加概率，但珀尔在书里给出了完整的数学：信念传播（belief propagation）算法、d-separation 准则、因果直觉与概率独立性的桥梁。

这本书的时机也无人能复制。1985 年前后，符号主义正深陷专家系统的失败，连接主义又因为<Person id="rosenblatt" />之死与《感知机》的阴影还没有翻身。AI 领域急需一个新的、严肃的、能落地的数学框架。

贝叶斯网络几乎是一夜之间填补了这个真空——医疗诊断、故障排查、自然语言、机器视觉，纷纷出现"贝叶斯网络方法"的论文。1990 年代初，贝叶斯网络已成为 AI 的标准范式之一。

## 因果阶梯：do-calculus 的诞生

如果故事只到这里，珀尔就只是"贝叶斯派的旗手"。但他做了一件更难的事——继续往前追问：贝叶斯网络里的箭头，到底是相关，还是因果？

2000 年出版的《因果：模型、推理与推断》（*Causality: Models, Reasoning, and Inference*）是珀尔学术生涯的真正巅峰。

在这本书里他系统化了因果推断（causal inference）的数学语言：结构因果模型（Structural Causal Model, SCM）、do-算子（do-operator）、反事实条件（counterfactual）。最重要的发明，是"do-演算"（do-calculus）——一组三条规则的形式系统，可以严格判断"在仅有观测数据时，能否估计某个干预效应"。

这是一件统计学界争论了一个世纪都没解决的事。从弗朗西斯·高尔顿（Francis Galton）和卡尔·皮尔逊（Karl Pearson）起，主流统计学就刻意把"因果"这个词从词汇表里抹掉，只谈"相关"。

1923 年内曼（Neyman）、1974 年鲁宾（Rubin）的潜在结果模型（Potential Outcomes）开了第一道口子，但仍然过度依赖随机化。珀尔用图模型语言重新写了一遍因果论，让"非实验数据下的因果识别"从经验艺术变成了可机械计算的代数。

2011 年，ACM 把图灵奖授予珀尔，"以表彰他通过开发概率与因果推理的演算法对人工智能的根本性贡献"。

## 因果阶梯与对深度学习的批判

2018 年，珀尔与 Dana Mackenzie 合著《为什么之书：因果新科学》（*The Book of Why: The New Science of Cause and Effect*）。这本面向大众的书提出了著名的"因果阶梯"（Ladder of Causation）：

1. **观察**（Seeing / Association）—— $P(Y|X)$，回答"看见 X，Y 怎么变？"
2. **干预**（Doing / Intervention）—— $P(Y|do(X))$，回答"如果我强行改 X，Y 会怎么变？"
3. **反事实**（Imagining / Counterfactual）—— $P(Y_{x}|X', Y')$，回答"如果当时不那样做，会发生什么？"

珀尔的判断很尖锐：当下的深度学习——包括所有大语言模型——绝大部分仍困在第一层。他在《纽约时报》《Quanta Magazine》等多次访谈中直言，"现在的 AI 是被美化的曲线拟合"（"glorified curve fitting"）。

这话刺痛了很多人，但他没有改口。在他看来，没有因果模型的智能，无法回答"为什么"，也无法在新的环境中泛化——因为统计相关性是脆弱的，而因果结构是稳定的。

## 私人的伤口与公共的尊严

2002 年 1 月 23 日，珀尔的儿子丹尼尔·珀尔（Daniel Pearl）——《华尔街日报》驻南亚记者——在巴基斯坦卡拉奇（Karachi）被基地组织（Al-Qaeda）相关武装人员绑架，2 月 1 日被残忍杀害。这是珀尔一生最大的伤口。

事件之后，他与妻子鲁丝（Ruth Pearl）创办了"丹尼尔·珀尔基金会"（Daniel Pearl Foundation），用来推动跨宗教、跨民族的对话与新闻自由。

公开场合的珀尔很少把这件事与学术混在一起，但他在《为什么之书》末尾写过这样一句话：人类区别于机器的地方，不在于会不会预测下一步，而在于会不会问"如果当时不那样做……"——这是反事实，是因果阶梯的最高一层，也是哀悼的本质。一个父亲的痛苦，最终在他的数学里得到了回声。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1984 | *Heuristics: Intelligent Search Strategies for Computer Problem Solving* | 启发式搜索的系统化教科书 |
| 1988 | *Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference* | 贝叶斯网络的奠基性专著 |
| 2000 | *Causality: Models, Reasoning, and Inference* | 提出 do-calculus，因果推断的形式化框架 |
| 2009 | *Causality*（第二版） | 把因果推断扩展到完整的工业应用 |
| 2018 | *The Book of Why: The New Science of Cause and Effect*（与 Dana Mackenzie 合著） | 提出因果阶梯，公开批评深度学习的局限 |
| 2011 | ACM 图灵奖 | "因为对人工智能在概率与因果推理上的根本性贡献" |

## 太史公曰

::: tip 太史公曰
珀尔以一张概率图为始，以一组因果代数为终，在符号主义的废墟与连接主义的洪水之间，走出了第三条路。1980 年代的 AI 是两条线的战争——符号派写规则，连接派调权重，谁也说服不了谁；珀尔不站队，只追问一个更老的问题——人在不确定下如何推理？答案居然不是规则，也不是神经元，而是一张概率图。仅此一项，已足以列入世家。但他真正不凡之处在于第二步——明知贝叶斯网络已成主流时，他继续逼问"图上的箭头到底是相关还是因果"，并把因果从哲学里拽到数学里，写成可计算的代数。这一步比第一步更难，也更孤独——因为他要同时挑战传统统计学与火热的深度学习。当世人沉醉于"AI 能预测一切"时，他冷冷一句"相关不是因果"，像一支不肯随风倒的旗帜。一个一生在追问"为什么"的人，最终用数学回答了它——这本身就是最强的因果证明。
:::

## 亲历者说

::: info 征集中
如果你了解珀尔的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Pearl, J. (1985). "Bayesian Networks: A Model of Self-Activated Memory for Evidential Reasoning." *Proceedings of the 7th Conference of the Cognitive Science Society*, UCLA.
2. Pearl, J. (1988). *Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference*. San Mateo, CA: Morgan Kaufmann.
3. Pearl, J. (2000, 2009). *Causality: Models, Reasoning, and Inference*. Cambridge: Cambridge University Press.
4. Pearl, J. (1984). *Heuristics: Intelligent Search Strategies for Computer Problem Solving*. Reading, MA: Addison-Wesley.
5. Pearl, J., & Mackenzie, D. (2018). *The Book of Why: The New Science of Cause and Effect*. New York: Basic Books.
6. ACM (2011). "Judea Pearl — A.M. Turing Award Citation." Association for Computing Machinery.
7. Hartnett, K. (2018). "To Build Truly Intelligent Machines, Teach Them Cause and Effect." *Quanta Magazine*, May 15, 2018.
8. Pearl, R., & Pearl, J. (Eds.) (2004). *I Am Jewish: Personal Reflections Inspired by the Last Words of Daniel Pearl*. Woodstock, VT: Jewish Lights.
