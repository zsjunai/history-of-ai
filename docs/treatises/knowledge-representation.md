# 书 · 知识表示与推理简史

> 智能是否等价于"知识 + 推理"？这一问题的答卷写了七十年。从一阶逻辑的雄心，到专家系统的浮华，再到知识图谱的复活与大模型时代的再追问，符号阵营走过了一条曲折而执拗的长路。

## 第一幕：让机器"懂事"——逻辑作为认知的形式语言

故事的源头可以追溯到 19 世纪末。德国数学家弗雷格（Gottlob Frege）于 1879 年发表《概念文字》（*Begriffsschrift*），第一次系统地建立起带量词的一阶逻辑（First-Order Logic, FOL）。他的目标并非智能机器，而是为数学奠定无歧义的语言基础。但这套语言后来成了人工智能最早的精神祖先。

1959 年，<Person id="mccarthy" /> 在英国 Teddington 的"思维过程机械化"会议上提交了《具有常识的程序》（*Programs with Common Sense*）。论文中，他设想了一个名为 Advice Taker 的程序——它接受用一阶逻辑表达的事实与规则，从已知出发推导未知。麦卡锡相信，只要给机器足够多的"常识公理"，再配以足够强的推理引擎，智能便能自然涌现。这是符号主义最纯粹也最大胆的纲领。

1965 年，鲁滨逊（J. A. Robinson）证明了归结原理（Resolution Principle），把一阶逻辑的定理证明压缩到了一条规则之内。十年后，<Person id="kowalski" /> 与 <Person id="colmerauer" /> 把归结法工程化，在马赛大学诞生了 Prolog——历史上第一门以逻辑为程序的编程语言。逻辑既是知识，也是程序，这是符号派最得意的融合。

但纯一阶逻辑很快遇到了"现实的不耐烦"。世界不是公理化的，常识里充满默认、例外、模糊与时序。学者们开始发明各种"非经典"逻辑：默认逻辑（Default Logic）、模态逻辑、时态逻辑、模糊逻辑——每一种都试图为某一类常识现象提供形式化处理。这条路的终点是一个清醒的认识：纯逻辑能走到的最远，远不及人类一个三岁小孩。

## 第二幕：网络与框架——把世界打包成"结构"

纯逻辑虽优雅，却笨重。心理学家很快意识到，人脑组织知识的方式更像"概念之间的网络"，而非一行行公式。

1968 年，奎利安（Ross Quillian）在博士论文中提出语义网络（Semantic Networks）：节点表示概念，边表示关系，"金丝雀"通过"是一种鸟"连接到"鸟"，从而继承"会飞"这一属性。这种结构后来成了所有图谱式知识库的祖先。

1974 年，<Person id="minsky" /> 发表《表示知识的框架》（*A Framework for Representing Knowledge*），把语义网络推到结构化的极致。框架（Frame）是带有"槽（slot）"的模板，每个槽既可以填具体值，也可以指向另一个框架。"餐厅"框架自带"服务员、菜单、付账"等槽位，机器据此理解一段就餐故事中的省略与默认。

几乎同时，耶鲁大学的 <Person id="schank" /> 提出脚本理论（Scripts），把框架应用于事件序列。他著名的"餐厅脚本"列出了进店、点菜、用餐、付款、离开五个标准场景，使得 SAM、FRUMP 等程序能从一段新闻中"读懂"省略的步骤。

人类常识第一次被工程师们看见了它的轮廓——分层的、可继承的、充满默认值的。

这一阶段的隐藏遗产是"知识层"（Knowledge Level）这一概念，由 1982 年的 Newell 在 AAAI 主席演讲中提出。Newell 区分了"符号层"与"知识层"：前者关心数据结构如何实现，后者关心系统拥有的知识本身是什么。这一分层至今仍是知识工程的方法论基石——它告诉我们，分析一个智能系统时，要先问"它知道什么"，再问"它怎么存"。

## 第三幕：规则的王朝——专家系统的兴衰

如果说语义网络是认知主义者的玩具，那么专家系统就是工业界的金矿。

1965 年，<Person id="feigenbaum" /> 在斯坦福启动了 DENDRAL 项目，让机器根据质谱数据推断有机化合物结构。它把化学家的经验编码为产生式规则（IF-THEN），让推理引擎匹配和组合。DENDRAL 工作了十几年，被誉为"专家系统之父"。

1972 年起，斯坦福的 Shortliffe 在博士论文中开发了 MYCIN，用约 600 条规则诊断细菌感染并推荐抗生素。MYCIN 在评测中胜过了大多数住院医师，但它从未上线——医院无法接受"机器开处方"的法律风险，这是 AI 落地伦理的第一道阴影。

真正点燃产业的是 1980 年。卡内基梅隆的 <Person id="mcdermott" /> 为 DEC 公司开发了 R1（后更名为 XCON），用于配置 VAX 小型机的订单。XCON 上线后据称每年为 DEC 节省约 4000 万美元，成为专家系统时代最赚钱的明星。日本随即推出第五代计算机计划（1982，<Person id="fuchi" /> 主持），全球资本涌入符号 AI。

但盛宴在 1980 年代末戛然而止。规则库膨胀到上万条后，相互冲突、维护困难、知识获取瓶颈（Knowledge Acquisition Bottleneck）变得无法忍受——领域专家的隐性经验，永远写不完。1987 年的 Lisp Machines 崩盘成了第二次 AI 寒冬的导火索。

回望专家系统这十年，留下来的并非那些产品本身，而是几条至今仍被反复体会的教训：知识不是写出来的，是抽取出来的；规则越多，维护成本越高；纯演绎的系统永远做不到鲁棒——因为现实从不给你完整前提。

## 第四幕：描述逻辑与本体——给世界画一张严谨的图

专家系统的混乱让一群学者反思：如果连"概念是什么"都没说清楚，又怎么谈推理？

1985 年前后，Brachman 和 Schmolze 设计了 KL-ONE 系统，把语义网络重新建立在严格的形式语义之上，区分"术语层（TBox）"与"事实层（ABox）"。它的后继者们形成了描述逻辑（Description Logic, DL）家族——一组介于命题逻辑与一阶逻辑之间、可判定性可控的子集。

万维网把这股力量带进了主流。2001 年，<Person id="berners-lee" /> 在《科学美国人》上提出语义网（Semantic Web）的设想：不仅让人读网页，也让机器读网页背后的含义。RDF（资源描述框架）于 1999 年定稿，OWL（Web Ontology Language）于 2004 年成为 W3C 标准，其底层正是描述逻辑 SHOIN(D)。生物医学领域的 Gene Ontology、SNOMED CT 至今仍是支撑临床信息系统的基础设施。

本体论（Ontology）从哲学术语变成了一门工程学科。

## 第五幕：知识图谱的复活——从 Cyc 到 Wikidata

在符号 AI 的黄金时代里，有一个孤独的巨人。1984 年，Doug Lenat 启动 Cyc 项目，立志手工录入海量人类常识。三十多年过去，Cyc 仍未"完工"，但它孕育了对常识规模与结构的最深理解。Lenat 的失败比许多人的成功更有教益——纯人工编纂常识，注定撞上规模的墙。

转机来自众包与互联网。2007 年，Metaweb 公司发布 Freebase，用维基式协作录入实体与关系。2010 年谷歌收购 Metaweb，并在 2012 年 5 月正式发布 Knowledge Graph，搜索结果右侧的人物、地点、电影信息卡从此成为日常风景。同年，维基媒体基金会启动 Wikidata，把多语种维基百科背后的事实抽取为统一的实体库；条目规模一路逼近亿级。

知识图谱（Knowledge Graph）一词由此从谷歌一家公司的产品名，演变为整个行业的通用术语。学术与工业界相继发布 DBpedia、YAGO、Wikidata、ConceptNet 等大规模图谱，支撑搜索、推荐、问答、风控。

符号派以一种意想不到的方式回到了舞台——不再以"全知逻辑"自居，而是甘心做数据基础设施。

中国学界的贡献也不容忽视。复旦大学 GDM 实验室的 OpenKG、清华大学的 XLore、阿里的"知识引擎"、美团的"知识图谱大脑"——把多语言、跨领域的知识整理为可查询的结构化资产，是中国 AI 工程界最持久、最被低估的一条线。

## 第六幕：神经与符号的握手

进入深度学习时代，符号派一度被视为博物馆陈列。但新的张力很快浮现：神经网络擅长感知却拙于推理，难以解释决策、不擅长组合泛化、记忆事实易出错。

神经-符号融合（Neuro-Symbolic AI）应运而生。2010 年代中后期，DeepMind、IBM、MIT 等机构相继发表 Neural Theorem Prover、Neural Module Network、Neuro-Symbolic Concept Learner 等工作；<Person id="pearl" /> 反复强调，没有因果与符号结构，机器只是在做相关性拟合。知识图谱嵌入方法 TransE、ComplEx 等把符号关系映射到向量空间，让"巴黎−法国 + 中国 ≈ 北京"这类代数式真的能跑出来。

在工业界，谷歌、Meta、阿里、字节相继把知识图谱嵌入搜索、推荐、广告、风控的底层；医疗与金融领域更是离不开符号约束——监管不允许一个完全黑箱的诊断或授信。

学术上更激进的一步是 2020 年前后兴起的"可微分推理"思潮：把演绎规则编码为可导计算图，让符号推理也能受梯度驱动而被学习。这条路至今仍在开拓——它是否会成为下一代认知架构的底盘，没人敢下定论。

工程界还摸索出另一条务实路线：用 LLM 抽取知识图谱，再用知识图谱约束 LLM。前者解决"图谱构建难"，后者解决"模型幻觉重"。两者互为药与病，构成了 2024 年以来知识工程最热的实践范式之一。

## 第七幕：参数化知识 vs 检索增强——LLM 时代的新追问

2020 年代，大语言模型让"知识"再次成为焦点，但形式彻底变了。

GPT-3、PaLM、LLaMA 这些模型把人类文本压缩进数百亿乃至万亿参数中，知识不再以三元组存在，而是以注意力权重的分布存在。这就是参数化知识（Parametric Knowledge）。它的优点是流畅、可组合、可生成；缺点是不可更新、易幻觉、不可追溯。

为弥补这一缺陷，2020 年 Meta 的 Lewis 等人提出 Retrieval-Augmented Generation（RAG）：让模型在生成前先检索外部文档，把检索到的内容拼入上下文。RAG 把"知识"重新外置——参数模型负责语言能力，外部库（向量数据库、知识图谱、搜索引擎）负责事实。从 2023 年起，RAG 几乎成为企业级 LLM 应用的默认架构。

更激进的方向叫做工具调用（Tool Use）与代理（Agent）：让模型在推理过程中调用计算器、搜索、SQL、知识图谱 API。OpenAI 的 Function Calling（2023）、Anthropic 的 MCP（2024）、各家的 Agent 框架，本质上都是在做同一件事——把符号世界以工具的形态接回神经世界。

知识表示这门学科的形态被彻底改写：它不再追求"完整地形式化整个世界"，而是回答一个更务实的问题——在大模型这个新的认知基底上，事实与规则应当以怎样的形态存在，才能既被高效访问，又能被可靠校验。

近一两年，知识图谱被重新审视为 RAG 的补充。纯向量检索容易"语义近而事实错"，知识图谱则擅长"精确而稀疏"。GraphRAG（微软 2024）等工作把图谱与向量库混合检索，在多跳问答与实体关系密集的场景中显著降低幻觉率。符号与向量的握手，正在企业落地的最末端悄悄完成。

## 未竟之问

七十年走下来，符号派与联结派似乎都没赢，也都没输。我们仍未回答几个根本问题：常识能否被穷举？因果是否可以从相关性中学得？记忆该放在参数里、向量库里、还是结构化图谱里？当 LLM 一本正经地胡说八道时，我们靠什么来"证伪"？

或许下一个十年的答案不在两条路线之中的任何一条，而在它们之间的缝隙里——某种既能学习又能推理、既懂语言又懂世界的混合体。

---

::: tip 太史公曰
余观知识表示之七十年，恍若一部"形式化"与"经验化"的拉锯。麦卡锡之雄心，欲以一阶逻辑笼天下事——其志大矣，其阻亦大矣。Cyc 三十年录入常识，所积皆人手所书，终不能及人脑万一，可知形式化之极限不在工具，而在"常识本身的不可枚举"。专家系统鼎盛之日，DEC 一年省四千万美元，举世以为符号派将一统江山；然规则既增，矛盾随之，知识获取之瓶颈终断其脊。神经网络以学习破之，恰如水之破石。然神经者，长于感知而拙于推理，长于流畅而拙于校核——故 RAG 起、工具调用起、知识图谱归来。盖智能之事，从来不是一边打倒另一边，而是不断地把对方的优点纳入自身。今之大模型，外接知识库，内含因果约束，已隐然为符号与联结之合体。后世若有真正能"思考"之机器，必兼此二者之长。学者当记：每一次"范式之死"的宣告，往往都是它换皮归来的前奏。
:::

## 亲历者说

::: info 征集中
如果你参与过专家系统、知识图谱或神经-符号研究，或亲历过 RAG 在产业界的落地，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. McCarthy, J. (1959). Programs with common sense. *Proceedings of the Teddington Conference on the Mechanization of Thought Processes*, 75-91.
2. Robinson, J. A. (1965). A machine-oriented logic based on the resolution principle. *Journal of the ACM*, 12(1), 23-41.
3. Quillian, M. R. (1968). Semantic memory. In M. Minsky (Ed.), *Semantic Information Processing* (pp. 227-270). MIT Press.
4. Minsky, M. (1974). *A framework for representing knowledge*. MIT-AI Laboratory Memo 306.
5. Schank, R. C., & Abelson, R. P. (1977). *Scripts, Plans, Goals, and Understanding*. Lawrence Erlbaum.
6. Buchanan, B. G., & Feigenbaum, E. A. (1978). DENDRAL and Meta-DENDRAL: Their applications dimension. *Artificial Intelligence*, 11(1-2), 5-24.
7. Shortliffe, E. H. (1976). *Computer-Based Medical Consultations: MYCIN*. Elsevier.
8. Brachman, R. J., & Schmolze, J. G. (1985). An overview of the KL-ONE knowledge representation system. *Cognitive Science*, 9(2), 171-216.
9. Lenat, D. B. (1995). CYC: A large-scale investment in knowledge infrastructure. *Communications of the ACM*, 38(11), 33-38.
10. Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. *Scientific American*, 284(5), 34-43.
11. Bollacker, K., Evans, C., Paritosh, P., et al. (2008). Freebase: A collaboratively created graph database for structuring human knowledge. *SIGMOD '08*, 1247-1250.
12. Lewis, P., Perez, E., Piktus, A., et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *Advances in Neural Information Processing Systems*, 33.
