# 世家 · 斯坦福人工智能实验室（SAIL）

> 1962 年，麦卡锡从波士顿一路向西，把"人工智能"四个字带到了帕洛阿托。从此 SAIL 就成为 AI 史上最特殊的一个机构——它既是学术殿堂，又是硅谷的近邻；它孕育了专家系统的鼻祖，也启动了 ImageNet 这场让世界天翻地覆的数据工程；它让无数顶级研究者拿到第一份职位，又让他们在毕业一年后开起公司。

## 一、麦卡锡西迁

1962 年，<Person id="mccarthy" />从 MIT 转任斯坦福大学计算机科学副教授。1963 年，他在斯坦福校园西南角靠近 Felt Lake 的一栋木屋里建起 **Stanford Artificial Intelligence Project**——这就是 **SAIL**（Stanford Artificial Intelligence Laboratory）的雏形，1965 年正式得名。

麦卡锡带去的是 LISP 语言、时分系统的思想，以及他从达特茅斯会议起就坚持的"用形式逻辑刻画常识推理"的纲领。SAIL 早期搬到了校外山上一处叫做 D.C. Power Building（后称 The AI Lab）的二层楼里，几十个研究者、研究生与黑客挤在一起，墙上贴着各种手绘的奇怪符号，停车场上长期停着一辆改装的小车——这就是后来著名的 **Stanford Cart**。

D.C. Power Building 时期的 SAIL 培养出 1970 年代一批塑造行业的研究者：拉吉·雷迪后来去 CMU 创建机器人研究院，特里·维诺格拉德留下教书并成为佩奇与布林的导师，汉斯·莫拉维克后来成为认知机器人学派的旗手。麦卡锡本人 2011 年去世前一直保留斯坦福终身教授头衔，是真正意义上"把 AI 这门学科种在西海岸"的人。

值得辨析的一个常见混淆是：**Shakey 机器人不是 SAIL 的工作**——它属于斯坦福研究所（SRI International，1970 年从斯坦福剥离独立），由查尔斯·罗森（Charles Rosen）、尼尔斯·尼尔森（Nils Nilsson）等人领衔。而真正属于 SAIL 的机器人，是 1960 年代由 James Adams 起步、1970 年代由 Hans Moravec 主导的 Stanford Cart。1979 年 Moravec 让 Cart 在户外环境中独立穿越一段堆满椅子的院子，每次移动 1 米要"思考" 10–15 分钟，整段 30 米的路程跑了约 5 小时。这是世界上第一次基于视觉的户外自主导航，Moravec 后来把这一思路一路带到 CMU，成为现代移动机器人的奠基工作之一。

## 二、专家系统的发源地

1965 年起，SAIL 与斯坦福医学院联手开启了 AI 历史上影响最深远的一条副线——**专家系统**。

主角是<Person id="feigenbaum" />。他师从 CMU 的西蒙，1965 年加入斯坦福。在与诺贝尔化学奖得主乔舒亚·莱德伯格（Joshua Lederberg）合作的 **DENDRAL** 项目中，费根鲍姆把化学家关于质谱仪推断分子结构的"启发式知识"明确写进规则库，让程序代替专家做出推论。这是世界上第一个真正在生产环境中跑起来的专家系统，也是"知识工程"（Knowledge Engineering）这一概念的诞生地。1970 年代，他与爱德华·肖特利夫（Edward Shortliffe）等人合作开发 **MYCIN**——一个为医生推荐抗生素治疗方案的诊断专家系统。MYCIN 在盲测中给出的处方建议常优于初级医生，后来虽因责任、伦理与集成成本未进入临床，但它训练出了一代专家系统研究者，并直接启发了 1980 年代日本第五代计算机计划与全球的专家系统产业。

1994 年，费根鲍姆与拉吉·雷迪共获图灵奖，颁奖词专门点名 DENDRAL 与 MYCIN。

斯坦福启发式编程项目（Stanford Heuristic Programming Project，HPP）在 1970 年代孵化的不止 DENDRAL 与 MYCIN——还有 PROSPECTOR（用于矿产勘探，1980 年帮助探明华盛顿州一处钼矿）、TEIRESIAS（专家系统的解释与维护工具）等。HPP 是世界上第一个真正意义上把"AI 服务于具体专业领域"作为系统工程来组织的实验室。

## 三、维诺格拉德、奈尔逊与符号主义群像

1973 年，<Person id="winograd" />从 MIT 来到斯坦福任教。他的博士论文 SHRDLU 是符号主义 AI 的巅峰之一；但来到斯坦福后，他的注意力反而更多转向**人机交互**与**计算的社会基础**——1986 年与费尔南多·弗洛雷斯（Fernando Flores）合著 *Understanding Computers and Cognition*，对纯符号主义路线提出深刻反思，影响了一代 HCI 研究者，也间接启发了他后来的学生<Person id="brin" />与<Person id="page" />创办谷歌时强调"用户视角"的产品哲学。

尼尔斯·尼尔森（Nils Nilsson）从 SRI 转入斯坦福任 SAIL 主任（1985–1990 年间），写就了影响深远的 *Artificial Intelligence: A New Synthesis*（1998）与 *The Quest for Artificial Intelligence*（2009）。<Person id="russell" />虽然主要在伯克利，但与斯坦福始终保持密切合作；他与彼得·诺维格（Peter Norvig，1990 年代曾任 SAIL 副研究员，后任 Google 研究总监）合著的 *Artificial Intelligence: A Modern Approach* 1995 年第一版，已成为全球 AI 教学的标准教材，第四版于 2020 年推出。

## 四、Stanley、ImageNet 与一次方法论转向

进入 21 世纪，SAIL 的中心议题从符号推理一步步迁向**统计学习与大规模数据**。

2005 年 10 月 8 日，DARPA Grand Challenge 在内华达州沙漠举行第二届。塞巴斯蒂安·特龙（Sebastian Thrun，时任 SAIL 主任）领衔的 Stanford Racing Team 把一辆改装的大众途锐命名为 **Stanley**，搭载五个激光雷达、一台彩色相机、GPS 与 IMU，用机器学习方法在线分类前方地形。Stanley 以 6 小时 53 分跑完 212 公里赛道，赢得 200 万美元奖金。这是自动驾驶史的分水岭——它证明了**学习驱动的自主系统**可以在开放环境里靠谱运行。特龙不久后被谷歌请去主导 Google Self-Driving Car（即后来的 Waymo），并与人共同创办 Udacity（2011）。

2007 年，<Person id="fei-fei-li" />从普林斯顿转到斯坦福任助理教授，进入 SAIL。她启动了一项被许多同行劝阻的工程——**ImageNet**：以 WordNet 的语义层级为骨架，标注一千万张以上的图片。她和学生贾扬清、邓嘉等人通过亚马逊 Mechanical Turk 雇佣全球数万名标注员；2009 年 ImageNet 数据集首次发布，2010 年第一届 ImageNet Large Scale Visual Recognition Challenge（ILSVRC）开赛。2012 年 9 月，多伦多大学的<Person id="hinton" />、<Person id="krizhevsky" />与<Person id="sutskever" />提交的 **AlexNet** 在 ILSVRC-2012 上把 Top-5 错误率从 26.2% 一下打到 15.3%。这一夜被普遍视作"深度学习革命"的引爆点——而它的火药桶，是李飞飞在 SAIL 准备了五年的 ImageNet。

## 五、机器学习与 NLP 的当代重镇

2002 年，<Person id="ng" />从伯克利毕业后入职斯坦福。他在 SAIL 主导机器学习与机器人方向，2010 年起兼任 Google Brain 的联合创始人之一（与杰夫·迪恩、Greg Corrado 一起），用 1.6 万核 CPU 训练出第一个能在没有标签的情况下从 YouTube 视频里"自发认出猫"的深度网络（2012）。2011 年秋，吴恩达把他的斯坦福 *CS229: Machine Learning* 课程搬上网，吸引十万人注册——这是 MOOC 时代真正意义上的开端，也是他与达芙妮·科勒（Daphne Koller，斯坦福概率图模型大师）共同创办 Coursera（2012）的直接缘起。

自然语言处理方向上，克里斯托弗·曼宁（Christopher D. Manning）从 1999 年起执教斯坦福，与丹·尤拉夫斯基（Dan Jurafsky）合著的 NLP 教材成为入门标准；他的实验室（Stanford NLP Group）出品了 GloVe 词向量（2014，与 Jeffrey Pennington、Richard Socher 合作）、Stanford Parser、CoreNLP、再到 2018 年后的大规模语言模型与基础模型研究。2017 年起，曼宁的博士生与博士后里不断走出当代核心 NLP 研究者，包括<Person id="radford" /> 的早期合作者、Hugging Face 的科学家与多位 OpenAI 研究员。

梁佩西（Percy Liang）2012 年加入斯坦福任助理教授，专注**问答、可解释性、语义解析**与基础模型评测。2021 年，梁佩西与曼宁、李飞飞、Chris Ré 等共同推动成立 **Center for Research on Foundation Models**（CRFM），并发表了具有标志性的 *On the Opportunities and Risks of Foundation Models*——是"基础模型"这个术语的正式提出。CRFM 主导的 **HELM**（Holistic Evaluation of Language Models）评测体系，至今仍是开源大模型对比时被反复引用的基准之一。

斯坦福同时是 **强化学习与机器人** 的重镇。Andrew Ng 早期带过的博士生 Pieter Abbeel（伯克利后续）、Adam Coates，再到后来 Chelsea Finn（元学习与机器人学习）、Dorsa Sadigh（人机协同）、Jeannette Bohg（机器人感知）——一连串名字共同把 SAIL 带进了"具身智能"的时代。

## 六、HAI 与硅谷化的双面

2019 年 3 月，李飞飞与哲学家约翰·埃切门迪（John Etchemendy）共同发起 **Stanford Institute for Human-Centered Artificial Intelligence**（HAI，斯坦福以人为本人工智能研究院）。HAI 是斯坦福把 AI 与人文、社会科学、医学、政策正式整合到同一研究机构的尝试，它发布的年度 *AI Index Report* 已成为全球 AI 状况最常被引用的数据源。

斯坦福与硅谷的近邻关系是 SAIL 这座实验室与其他 AI 重镇最大的不同。1998 年布林、佩奇带着 Backrub 算法走出博士项目创办 Google；2009 年特龙带着 Stanley 走进 Google；2012 年吴恩达带着 MOOC 与 Google Brain 同时启动 Coursera；2015 年前后，OpenAI 创始人中的格雷格·布罗克曼（Greg Brockman）与<Person id="altman" />都与斯坦福生态密切相关；2023 年图卡尔（Aidan Gomez）的 Cohere、奥利尔（Mira Murati）后来创办的 Thinking Machines、安德森-霍洛维茨支持的几乎所有 AI 创业，都能在 SAIL 的师生名单上找到节点。这种"上午写完论文、下午注册公司"的氛围，让 SAIL 成为了一个特殊的混合体——既是世界顶级学术机构，也是硅谷创业的人才上游。

正因如此，SAIL 也最早遭遇"教授奔向工业"的人才流失。2010 年代后期，多位斯坦福大牌教授兼任或全职加入谷歌、Meta、英伟达、苹果、OpenAI——这既是斯坦福基因的延续，也是当代 AI 学术与工业失衡的缩影。

## 七、作为机构的 SAIL

回到这家实验室的本意。

**SAIL 是西海岸 AI 的种子**。在它成立之前，AI 的中心是马萨诸塞州；在它成立之后，整个研究网络变成了双中心。麦卡锡的 LISP、费根鲍姆的专家系统、尼尔森的搜索算法奠定了符号 AI 的西部分支。

**SAIL 是大数据时代的第一个推手**。当 2000 年代多数实验室还在调参更聪明的算法时，李飞飞与同事们押上五年时间堆出 ImageNet；这件事的判断力，让深度学习革命有了点燃的燃料。

**SAIL 是 AI 与产业最短的桥**。从 Google 到 Coursera 到 Waymo 到 OpenAI，斯坦福校园 800 米外的沙丘路（Sand Hill Road）就是世界 AI 风险投资最密集的一公里。这条短路既是斯坦福 AI 持续繁荣的引擎，也是斯坦福 AI 不断流失的原因。

**SAIL 是教育的最大输出端**。从吴恩达的 CS229 到 Karpathy 的 CS231n，再到曼宁的 CS224N，斯坦福的核心 AI 课全部公开上网，长年累月免费哺育全球研究者。

::: tip 太史公曰
斯坦福之于人工智能，犹楚之云梦，唐之长安。它不是 AI 的诞生地——那一份荣耀属于达特茅斯与 MIT；它也不是 AI 唯一的庙堂——CMU、伯克利、多伦多、DeepMind 各有山头。然而它有一种别处难以复刻的位置感：东接学术，西临硅谷，南通医学院，北承文理学院。麦卡锡西迁，是把一种思想从东岸带到了一片更宽阔的土壤；费根鲍姆与莱德伯格的合作，让 AI 第一次走入医院；李飞飞的 ImageNet，让数据成为新世纪的算法燃料；吴恩达的公开课，把 AI 教育推向了全世界；HAI 与基础模型中心，又把 AI 重新拉回到人文与公共政策的视野里。SAIL 的特色从不是某一项技术上的孤峰，而是一种持续重组的能力——每隔十年，它都能找到一种新的方式，让"人工智能"这件事与时代重新对话。
:::

## 亲历者说

::: info 征集中
如果你曾在斯坦福 AI 实验室、HAI、CRFM 或斯坦福 NLP 组工作或学习，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. McCarthy, J. (1963). "A Basis for a Mathematical Theory of Computation." In *Computer Programming and Formal Systems*, North-Holland, 33–70.
2. Buchanan, B. G., & Feigenbaum, E. A. (1978). "DENDRAL and Meta-DENDRAL: Their Applications Dimension." *Artificial Intelligence*, 11(1–2): 5–24.
3. Shortliffe, E. H. (1976). *Computer-Based Medical Consultations: MYCIN*. Elsevier.
4. Moravec, H. (1983). "The Stanford Cart and the CMU Rover." *Proceedings of the IEEE*, 71(7): 872–884.
5. Winograd, T., & Flores, F. (1986). *Understanding Computers and Cognition: A New Foundation for Design*. Ablex.
6. Russell, S. J., & Norvig, P. (1995, 2020). *Artificial Intelligence: A Modern Approach* (1st & 4th eds.). Prentice Hall / Pearson.
7. Thrun, S., et al. (2006). "Stanley: The Robot That Won the DARPA Grand Challenge." *Journal of Field Robotics*, 23(9): 661–692.
8. Deng, J., Dong, W., Socher, R., Li, L.-J., Li, K., & Fei-Fei, L. (2009). "ImageNet: A Large-Scale Hierarchical Image Database." *Proceedings of CVPR 2009*.
9. Russakovsky, O., Deng, J., et al. (2015). "ImageNet Large Scale Visual Recognition Challenge." *International Journal of Computer Vision*, 115(3): 211–252.
10. Bommasani, R., Hudson, D. A., Adeli, E., Altman, R., Arora, S., et al. (2021). "On the Opportunities and Risks of Foundation Models." Stanford CRFM, arXiv:2108.07258.
11. Stanford HAI. (2018–2025). *AI Index Annual Report*.
12. Nilsson, N. J. (2009). *The Quest for Artificial Intelligence: A History of Ideas and Achievements*. Cambridge University Press.
