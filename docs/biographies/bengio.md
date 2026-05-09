# 列传 · 本吉奥（Yoshua Bengio）

> 他奠定了大语言模型脚下的两块基石，又在大语言模型如日中天时，转身去研究如何不让它毁掉我们。

## 蒙特利尔的法语少年

约书亚·本吉奥（Yoshua Bengio）1964 年生于巴黎，但他真正的故乡是蒙特利尔。父母是塞法迪犹太裔知识分子，从摩洛哥移居法国，又在 1970 年代初带着两个儿子越过大西洋落脚魁北克。法语是家里的母语，反主流文化是父母的精神底色——他们关心民权、社会公义、教育平等，给两个孩子取了希伯来文圣经里的名字：约书亚（Yoshua）和山缪（Samy）。山缪即本吉奥的弟弟 Samy Bengio，后来也成为机器学习领域的著名学者，先后任职 Google Brain 和 Apple AI/ML 研究主管。

少年本吉奥并不是天生的"神童"。他自述少年时期对数学并不特别热衷，反而沉迷于科幻小说——艾萨克·阿西莫夫（Isaac Asimov）的《机器人系列》《基地》、亚瑟·克拉克（Arthur C. Clarke）的《2001 太空漫游》在他书架上摆了整整一排。让他真正心动的，是这些故事里关于"机器能不能真的思考"的追问。在他后来的自述里，他说自己读阿西莫夫的"机器人三定律"时心里在想：要写出这样的定律，得先理解智能本身。

1986 年，他在麦吉尔大学（McGill University）读硕士。那一年，他在图书馆里读到刚刚发表的《Learning Representations by Back-Propagating Errors》——<Person id="rumelhart" />、<Person id="hinton" />、<Person id="williams_rj" /> 那篇划时代论文。他后来说："我读完几乎不能呼吸——就是它了。" 那是他人生中第一次相信，机器或许真的可以学会思考。

## 从麦吉尔到 MIT 与贝尔实验室

本吉奥 1991 年在麦吉尔获得博士学位，论文方向是把神经网络与隐马尔可夫模型（Hidden Markov Model, HMM）结合起来处理语音识别。这是当时少有的、试图用神经网络挑战统计方法主导的语音领域的尝试之一。

博士之后，他先去 MIT 做博士后，跟随后来在概率图模型领域享有盛名的<Person id="jordan" />（Michael I. Jordan）。在剑桥的两年里，他开始系统接触贝叶斯方法、图模型与概率推断。这段经历让他成为三巨头中数学色彩最浓的一位——他不只信任神经网络的"工程直觉"，还希望理解它在概率论意义上是什么。

1992 年，他转到新泽西的 AT&T 贝尔实验室，加入<Person id="lecun" />团队。两人合作之深远超后人想象——本吉奥与杨立昆、Léon Bottou、Patrick Haffner 一起，参与了 1998 年那篇定义 CNN 的经典论文《Gradient-Based Learning Applied to Document Recognition》。许多人因此后来才明白，三巨头并不只是相遇于颁奖典礼，他们的友谊与合作在三十年前就已经在贝尔实验室的同一栋大楼里开始了。

## 回到蒙特利尔，建立 LISA

1993 年，本吉奥回到蒙特利尔大学（Université de Montréal）任助理教授，并建立了一个小小的研究组：**LISA**（Laboratoire d'Informatique des Systèmes Adaptatifs，自适应系统信息学实验室）。这个名字会在二十年里逐渐扩大、迁移、改组，最后演变为今天的 MILA。但在 1990 年代到 2000 年代初，LISA 是寒冬里少数还在认真做神经网络的实验室之一。

蒙特利尔大学是一所讲法语的研究型大学，与英语世界的学术中心隔着一层文化距离——这层距离反倒成了一种保护。当英语学界主流嘲笑"神经网络已死"的时候，蒙特利尔的法语期刊审稿人对本吉奥的工作并不那么挑剔；当美国大公司以高薪挖人的时候，本吉奥的家庭和文化根基让他更愿意留在加拿大。三十年里，他几乎从未真正离开蒙特利尔——这一点连<Person id="hinton" />和<Person id="lecun" />都没做到。

## 词向量：让机器读懂"国王 - 男人 + 女人 = 王后"

2000 年，本吉奥在 NeurIPS（当时还叫 NIPS）发表了《A Neural Probabilistic Language Model》的早期版本，2003 年在 *Journal of Machine Learning Research*（JMLR）上发表了完整论文。合著者 Réjean Ducharme、Pascal Vincent、Christian Jauvin 都是他在 LISA 的早期学生。

这篇论文今天被普遍视作"词向量"（word embedding）思想的源头。它做了一件当时统计 NLP 主流不敢做的事：不再把每个词当作离散符号去做 n-gram 概率统计，而是给每个词学习一个共享的低维稠密向量，让语义相近的词在向量空间里彼此靠近。本吉奥论文里的图表展示了一个惊人的事实——网络自己学出了"语义空间"的几何结构。十年后 Mikolov 提出的 word2vec 几乎是它在工程上的简化版。今天每一个大语言模型（Large Language Model, LLM）的输入嵌入层，都是这条思想血脉的直接后裔。

但 2003 年这篇论文当时并没有"火"。论文被一些 NLP 会议以"训练太慢、不实用"为由冷处理。本吉奥继续做了五六年，慢慢添砖加瓦——表示学习（Representation Learning）、去噪自编码器（Denoising Autoencoder, 与 Pascal Vincent 合作）、深度学习教科书式综述《Learning Deep Architectures for AI》（2009）。这些工作让他逐步成为深度学习理论方向的代言人。

## 注意力机制：另一束被低估的光

2014 年 9 月，本吉奥的博士生 Dzmitry Bahdanau 与彼时在蒙特利尔做博士后的 Kyunghyun Cho（后任纽约大学教授）和本吉奥共同发表《Neural Machine Translation by Jointly Learning to Align and Translate》。这篇论文为神经机器翻译引入了"对齐 + 翻译"的联合学习机制——后来被简称为"注意力"（Attention）。

那时的机器翻译被卡在一个老问题上：传统 RNN 编码器把整句源语言压成一个固定向量，再让解码器把它展开成目标语言。句子越长，信息丢失越严重。Bahdanau 与本吉奥的方案是：让解码器在生成每一个目标词时，回过头去"软对齐"到源句的某些位置。这看似简单的一步，给神经机器翻译性能带来了肉眼可见的飞跃。

三年后，<Person id="vaswani" /> 等在 Google 提出 Transformer，把"注意力"推上王座；又过五年，ChatGPT 让全世界都听过这个词。但很多人不知道，这条线的起点正是 2014 年蒙特利尔那篇为机器翻译写的论文。本吉奥后来在多个场合说，他对自己研究路径里"最被低估的工作"的判断，就是这一篇。

## GAN、花书、图灵奖

2014 年还有一件事发生在他的实验室里——他的博士生<Person id="goodfellow" />提出了生成对抗网络（Generative Adversarial Networks, GAN）。那个故事已被多次讲述：蒙特利尔一家不起眼的酒吧里的争论、回家后的通宵编码、第二天跑通的第一版。GAN 后来成为 2010 年代生成模型的主导范式。本吉奥与 Goodfellow、Aaron Courville 在 2016 年合著的《Deep Learning》（俗称"花书"）是深度学习时代被译成最多语言、覆盖最广高校的研究生教材。

2018 年 3 月 27 日，ACM 宣布将该年度图灵奖授予本吉奥、<Person id="hinton" />与<Person id="lecun" /> 三人。颁奖典礼在三个月后举行，三人在台上互相致意。本吉奥的演讲风格与另两位明显不同——他没有讲技术细节，没有讲商业化，他讲的是"深度学习要走向何处"——讲到了因果推断（Causal Inference）、System 2 认知、机器伦理。许多人当时以为这是客套。后来才发现，这是他下半场剧本的预告。

## 转身：从奠基者到吹哨人

2018 年之后，本吉奥的研究重心明显发生了一次转向。一方面，他在因果推断、世界模型、组合泛化等更基础的方向上发力，主张当前的深度学习只是"System 1"——快速、感知性、模式匹配——而真正的智能还需要慢思考、推理、因果。这条路线被他称为"System 2 Deep Learning"。另一方面，他开始投入大量精力于 AI 伦理与社会影响。

2018 年 12 月，他牵头与多伦多、蒙特利尔、欧洲多位学者发布《**Montreal Declaration for Responsible Development of Artificial Intelligence**》（蒙特利尔宣言）。这份宣言以"人本福祉、自治、隐私、团结、民主、公平、责任、可持续"等十大原则为核心，成为 AI 伦理领域被引用最多的纲领性文件之一。

2023 年 3 月，他与 Stuart Russell、Elon Musk 等共同签署 *Pause Giant AI Experiments* 公开信，呼吁暂停训练比 GPT-4 更大的模型至少六个月。同年 5 月，<Person id="hinton" />从 Google 辞职公开警告 AI 风险，本吉奥与他一道，从单纯的深度学习奠基人转型为 AI 风险议题最具公信力的吹哨人。同年，他加入英国 AI Safety Institute，参与全球第一批官方 AI 安全机构的筹建。

2024 年 5 月，本吉奥被任命为《**International Scientific Report on the Safety of Advanced AI**》的主席——这份报告由 30 个国家与 OECD、欧盟、联合国共同委托撰写，被称为"AI 领域的 IPCC 报告"。报告在 2024 年首次发布、2025 年发布完整版，成为各国政府制定 AI 政策的最权威参考之一。一位曾用 30 年时间把神经网络变成"实用主流"的科学家，正以同样的耐心，把"如何安全地与 AI 共处"变成新的主流议题。

## 学者气质

本吉奥的弟弟 Samy Bengio 也是知名机器学习研究者，曾长期任职 Google Brain，2021 年因抗议 Google 解雇 Timnit Gebru 而辞职，后任 Apple AI/ML 研究主管。两兄弟在职业选择上各异其趣，却共享一种来自父母的家族气质——把智识工作与社会责任连在一起想。

三巨头里，本吉奥是性格最安静的那位。他不像辛顿那样常出现在 BBC 与《60 分钟》节目，也不像杨立昆那样在推特上日夜与人辩论。他更习惯一封一封地签署公开信、一份一份地撰写报告、一年一年地培养博士生。MILA 在他三十年的耕耘下从五六个人的小组成长为全球规模最大的学术深度学习研究中心之一，他本人却一直保留着教授而非院长的头衔。他说他更愿意被称作研究者，而不是管理者。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1994 | Bengio, Simard & Frasconi, "Learning Long-Term Dependencies with Gradient Descent is Difficult" | 揭示 RNN 的梯度消失问题，催生 LSTM 等改进 |
| 2003 | Bengio, Ducharme, Vincent & Jauvin, "A Neural Probabilistic Language Model", *JMLR* | 神经语言模型与词向量思想的源头 |
| 2009 | "Learning Deep Architectures for AI", *Foundations and Trends in ML* | 深度学习首部系统综述 |
| 2014 | Goodfellow, Pouget-Abadie, Mirza, Xu, Warde-Farley, Ozair, Courville & Bengio, "Generative Adversarial Nets", *NeurIPS* | GAN，2010 年代生成模型主流范式 |
| 2015 | Bahdanau, Cho & Bengio, "Neural Machine Translation by Jointly Learning to Align and Translate", *ICLR* | 注意力机制首次登场 |
| 2016 | Goodfellow, Bengio & Courville, *Deep Learning* (MIT Press) | 全球高校最广泛采用的深度学习研究生教材 |
| 2024 | *International Scientific Report on the Safety of Advanced AI* | 全球 30 国共同委托，AI 安全的"IPCC 报告" |

## 太史公曰

::: tip 太史公曰
本吉奥之于深度学习，犹如农人之于田。他不擅辞令，不爱聚光，却在一块叫蒙特利尔的土地上耕了三十年。词向量是他播下的第一粒种子，注意力机制是第二粒。这两粒种子今天长成了大语言模型整片森林，养活了硅谷与全世界的算力工厂。然而当森林开始遮蔽天空、当人们争相砍伐它的木材去发财，他却放下了犁，转身去做森林管理员——主持《国际人工智能安全科学报告》、起草《蒙特利尔宣言》、签署暂停大模型公开信。他不是从胜利者变成警示者，而是始终是学者：把研究的责任和研究本身看作同一件事。三巨头里，辛顿是哲学家、杨立昆是工程师、本吉奥是学者；学者气质最难——它要求一个人在最得意时仍保持节制，在最寂静时仍坚持发声，在世界争抢一项技术的红利时仍愿意去想这项技术对未来三十年意味着什么。蒙特利尔留给 AI 史的，不只是 GAN、注意力与花书，还有这种"做研究的同时审视研究"的姿态。这或许是 21 世纪 AI 最需要的家训。
:::

## 亲历者说

::: info 征集中
如果你曾在 LISA、MILA、Element AI、贝尔实验室或 MIT Jordan 组与本吉奥共事，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Bengio, Y., Simard, P., & Frasconi, P. (1994). "Learning Long-Term Dependencies with Gradient Descent is Difficult." *IEEE Transactions on Neural Networks*, 5(2), 157–166.
2. Bengio, Y., Ducharme, R., Vincent, P., & Jauvin, C. (2003). "A Neural Probabilistic Language Model." *JMLR*, 3, 1137–1155.
3. Bengio, Y. (2009). "Learning Deep Architectures for AI." *Foundations and Trends in Machine Learning*, 2(1), 1–127.
4. Goodfellow, I., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., & Bengio, Y. (2014). "Generative Adversarial Nets." *NeurIPS 2014*.
5. Bahdanau, D., Cho, K., & Bengio, Y. (2015). "Neural Machine Translation by Jointly Learning to Align and Translate." *ICLR 2015* (arXiv:1409.0473, 2014).
6. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
7. ACM (2018). "ACM A.M. Turing Award Citation: Yoshua Bengio, Geoffrey Hinton, Yann LeCun." https://amturing.acm.org/
8. *Montreal Declaration for Responsible Development of Artificial Intelligence* (2018). https://www.montrealdeclaration-responsibleai.com/
9. Bengio, Y. et al. (2023). "Pause Giant AI Experiments: An Open Letter." Future of Life Institute.
10. Bengio, Y. (Chair) (2024–2025). *International Scientific Report on the Safety of Advanced AI*. UK Department for Science, Innovation and Technology.
11. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. MIT Press.
