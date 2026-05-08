# 世家 · 多伦多大学 / Vector Institute

> 辛顿在这里独守了二十年的反向传播孤岛，又在这里点燃了 2012 年那场点亮整个世界的篝火——多伦多是深度学习革命真正意义上的"圣城"。

## 一、辛顿北上

1987 年，<Person id="hinton" /> 离开美国卡耐基梅隆大学（CMU）北上加拿大，出任多伦多大学计算机科学系教授。这次迁徙的直接原因带着冷战年代的政治色彩：CMU 的研究经费高度依赖五角大楼，而辛顿不愿让自己的工作被军事项目所牵引。多伦多则承诺学术自由与稳定教职，他便举家而行。

那时距离他与<Person id="rumelhart" />、<Person id="williams_rj" /> 联名发表那篇划时代的反向传播论文（1986）还不到一年。但人们后来才看清这场北上的真正意义：在接下来近二十年里，整个北美的 AI 主流（专家系统、SVM、贝叶斯方法、统计 NLP）都不太把"神经网络"当回事，辛顿所在的多伦多，几乎是这条路线在英语世界里硕果仅存的几个堡垒之一。<Person id="lecun" /> 1987–1988 年在多伦多做博士后，亦师亦友；<Person id="bengio" /> 也曾短期在此驻留。深度学习"加拿大三巨头"的友谊与学术血脉，从此扎根。

## 二、寒冬中的火种

1990 年代，神经网络遭遇第二次寒冬。SVM 的兴起几乎扫清了应用领域的所有竞争对手——会议审稿人甚至会因为论文标题里出现"neural network"而直接拒稿。辛顿的学生 Brendan Frey 后来回忆：那是一段"被排除在主流之外"的岁月，"我们必须把神经网络叫做别的什么名字才能发出论文"。

辛顿在多伦多并未放弃。他持续做受限玻尔兹曼机（RBM）、对比散度（CD）、深度信念网络（DBN）等"被时代误读"的研究。他训练了一批后来塑造整个深度学习领域的学生与博士后：

- **Brendan Frey**（图模型与生物医学 AI，后创办 Deep Genomics）
- **Radford Neal**（贝叶斯神经网络与 MCMC 大家）
- **Yann LeCun**（博士后，1987–1988 年在多伦多）
- **Yee-Whye Teh**（深度学习与贝叶斯非参数）
- **Ilya Sutskever**（后来的 OpenAI 联合创始人 / 首席科学家）
- **Ruslan Salakhutdinov**（后来的 CMU 教授、Apple AI 总监）
- **Alex Krizhevsky**（AlexNet 第一作者）
- **George Dahl**（语音识别突破的合著者，后入 Google Brain）
- **Graham Taylor**（Guelph 大学，Vector Institute 加拿大科学主任）
- **Ian Goodfellow**（短期访问，与 Bengio 关系更深，但 Hinton 是其重要影响者）

2003 年起，辛顿担任加拿大高等研究院（CIFAR）"神经计算与自适应感知"（Neural Computation and Adaptive Perception，NCAP）项目的负责人。这个项目每年资助约 1000 万加元，把全球少数仍坚持神经网络研究的人——包括<Person id="lecun" />、<Person id="bengio" />、Andrew Ng、Yann Dauphin 等——召集到加拿大的山间小镇定期讨论。后来人们普遍认为，是 CIFAR 这块小小的"庇护所"让深度学习的火苗在寒冬里没被吹灭。

## 三、2006：复兴的引信

2006 年 7 月 28 日，《科学》（*Science*）杂志刊出辛顿与 Salakhutdinov 联合署名的论文《Reducing the Dimensionality of Data with Neural Networks》。同年早些时候，辛顿、Simon Osindero、Teh 在 *Neural Computation* 发表《A Fast Learning Algorithm for Deep Belief Nets》——后者提出"逐层预训练 + 微调"的两阶段方法，让深层神经网络第一次能够被有效训练。

这两篇论文今天被普遍视作深度学习复兴的"引信"。它们不只是一次技术突破，更是一次姿态宣告：辛顿用主流期刊的版面告诉世界，神经网络仍然有未来。"deep learning"这个词随后被他与合作者反复使用——不再叫"connectionism"或"neural networks"，是要刻意避开寒冬带来的偏见。

2009 年，辛顿与他的博士生 George Dahl、Abdel-rahman Mohamed 把深度神经网络应用于语音识别，在 TIMIT 基准上将错误率拉低了一大截。2010 年微软研究院的 Li Deng 邀请辛顿合作，把这项工作搬到工业级数据上——结果正是 2011 年微软语音识别错误率的历史性下降，也是工业界对深度学习态度转向的第一个标志。

## 四、AlexNet 与那个夏天

2012 年的夏天，多伦多大学计算机系一间普通的研究生办公室里，辛顿的两位博士生<Person id="krizhevsky" />和<Person id="sutskever" />正在用两块 NVIDIA GTX 580 显卡训练一个神经网络。模型结构由克里热夫斯基亲手编写 CUDA 核函数，目标是 ImageNet 大规模视觉识别挑战赛（ILSVRC-2012）。

10 月 13 日，结果公布：AlexNet 在 ImageNet 上的 top-5 错误率为 15.3%，比第二名（基于传统计算机视觉特征工程）的 26.2% 低了整整 10.9 个百分点。计算机视觉界一片哗然——这种程度的领先，过去十年里从未有过。

12 月在内华达湖泰霍举行的 NeurIPS 2012 上，辛顿穿着标志性的羊毛背心，三人现场讲解 AlexNet。从那个会场走出来的研究者后来回忆，"会议结束时我们都明白：游戏规则变了"。

2013 年初，辛顿、Sutskever、Krizhevsky 三人成立 DNNresearch 公司。3 月，Google 以约 4400 万美元拍卖收购了这家只有三个人、没有任何产品的公司。辛顿此后以"1/4 时间在 Google、3/4 时间在多伦多"的安排开启了下半段职业生涯。这桩交易也启动了硅谷对深度学习人才的疯狂争夺——脸书随后请来 LeCun，百度高薪挖走吴恩达，DeepMind 被 Google 以 6 亿美元买下。

## 五、Vector Institute 成立

2017 年 3 月 30 日，**Vector Institute for Artificial Intelligence** 在多伦多 MaRS Discovery District 大楼里揭幕。安大略省政府出资 5000 万加元，加拿大联邦政府"泛加拿大 AI 战略"出资 4000 万加元，30 余家创始企业（包括 Google、Nvidia、加拿大五大银行、Shopify、Thomson Reuters、Magna 等）联合捐资 8000 万加元，总规模约 1.7 亿加元。

辛顿出任首席科学顾问；多伦多大学计算机系的 Richard Zemel 任研究主任；滑铁卢大学的 Pascal Poupart、麦克马斯特大学的多位学者参与建制。Vector 不是大学的下属机构，而是一个独立非营利研究院，与多伦多大学、滑铁卢大学、Guelph 大学等高校采取联合任命（cross-appointment）的方式吸纳教职。

Vector 成立的目的，是阻止加拿大培养的 AI 人才整批流向硅谷。Raquel Urtasun（自动驾驶，后创办 Waabi）、Jimmy Ba（Adam 优化器作者之一）、Sanja Fidler（计算机视觉，与 Nvidia 联合任命）、David Duvenaud（贝叶斯深度学习）、Roger Grosse（神经网络优化）等一批中坚力量留在多伦多。截至 2025 年，Vector 已有约 130 位教职研究员、近 1000 名学生与博士后。

值得一提的是，Vector 是加拿大"AI 铁三角"的一极——另两极是<Person id="bengio" /> 主导的蒙特利尔 MILA，以及 Richard Sutton、Michael Bowling 主导的埃德蒙顿 Amii（Alberta Machine Intelligence Institute）。三者在加拿大政府的统一战略下分工协作。

## 六、诺贝尔奖与晚年姿态

2023 年 5 月，辛顿宣布从 Google 辞职。他随后在《纽约时报》、BBC、CBS《60 分钟》等多家媒体上密集发声，警告生成式 AI 可能带来的风险——从虚假信息、就业冲击，一直到他长期持有的那个观点："数字智能终将超越生物智能"。这种态度让他与少数同行（如 Yann LeCun）出现公开分歧，也让他成为"AI 风险派"在学术界最德高望重的代言人。

2024 年 10 月 8 日，瑞典皇家科学院宣布将该年度诺贝尔物理学奖授予 John Hopfield 和 Geoffrey Hinton，"以表彰他们在使用人工神经网络进行机器学习方面的奠基性发现与发明"。辛顿在颁奖电话连线中说：自己"完全没有预料到"。整个 AI 学界则将其视作对深度学习数十年艰难征途的一次正式加冕。

辛顿的晚年姿态——既是诺奖得主，又是 AI 风险的吹哨人——在某种意义上完整了多伦多这条线索：从 1980 年代被边缘化的连接主义信徒，到 2010 年代深度学习革命的总设计师，再到 2020 年代对自己工作可能后果的公开反思。多伦多大学也因此成为 AI 史上极少有的"一城一师"传奇——一所大学、一个人、一条主线，撑起了一整段全球技术史。

## 七、作为机构的多伦多 AI

回到机构本身：今天的多伦多大学计算机系 + Vector Institute 共同组成了一个少见的双轨结构——多伦多大学贡献长期的本科生、研究生培养与基础研究；Vector 贡献跨机构的博士后、产业合作与算力基础设施。两者在 King's College Circle 与 MaRS 之间隔街相望，物理距离不到 500 米。

学生谱系上，多伦多继续输送顶级 AI 人才：除已成名的 Sutskever、Krizhevsky、Salakhutdinov 之外，近年还有 Nitish Srivastava（Dropout 第一作者，Apple）、Mohammad Norouzi（Google Brain，扩散模型重要贡献者）、Tijmen Tieleman（RMSprop 提出者）、Jamie Kiros（skip-thought vectors）、Aidan Gomez（Cohere 联合创始人 CEO）、Ivan Zhang（Cohere 联合创始人）等。Cohere 这家由多伦多学生于 2019 年创办的大模型公司，2024 年估值已超过 50 亿美元，是 Vector 周边创业生态最显著的一例。

到 2026 年，多伦多以一所中等规模公立大学的体量，对 AI 史的贡献已与 MIT、斯坦福、CMU 比肩。这不是预算或规模的胜利，而是一种学术品位的胜利：押注一个被冷落的方向，等它二十年开花。

::: tip 太史公曰
多伦多 AI 的故事，是一个人和一个城市互相成全的故事。辛顿 1987 年北上时，已是 39 岁的中年学者，被排挤在主流之外；多伦多接纳了他，给了他二十年学术自由——而他用 2012 年的 AlexNet、2024 年的诺贝尔物理学奖，让这座城市永远写进了 AI 史。这里面有一个朴素却屡屡被忽略的道理：真正的科学突破往往不是"短平快"的项目，而是一个研究者带着两三个学生、在没人看好的路上走二十年。今日各国政府、大公司争相成立"AI 中心"、"AI 研究院"，预算动辄百亿；但能否复制多伦多模式，关键不在钱，而在于是否还允许某个研究者在主流嘲笑下安心做二十年冷板凳。多伦多给世界的礼物，不只是 AlexNet 与 Vector Institute，更是这种"长线下注"的学术耐心。
:::

## 亲历者说

::: info 征集中
如果你曾在多伦多大学 AI 组、CIFAR NCAP 项目或 Vector Institute 学习工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Hinton, G. E., Osindero, S., & Teh, Y.-W. (2006). "A Fast Learning Algorithm for Deep Belief Nets." *Neural Computation*, 18(7), 1527–1554.
2. Hinton, G. E., & Salakhutdinov, R. R. (2006). "Reducing the Dimensionality of Data with Neural Networks." *Science*, 313(5786), 504–507.
3. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *NeurIPS 2012*.
4. Hinton, G. E., Deng, L., Yu, D., et al. (2012). "Deep Neural Networks for Acoustic Modeling in Speech Recognition." *IEEE Signal Processing Magazine*, 29(6).
5. Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). "Learning Representations by Back-Propagating Errors." *Nature*, 323(6088), 533–536.
6. CIFAR. *Pan-Canadian Artificial Intelligence Strategy* and NCAP Program Reports (2004–2017).
7. Vector Institute. *Annual Reports 2017–2024*. https://vectorinstitute.ai/
8. The Royal Swedish Academy of Sciences (2024). "The Nobel Prize in Physics 2024 – Press Release." https://www.nobelprize.org/prizes/physics/2024/press-release/
9. Metz, C. (2021). *Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World*. Dutton.
10. Markoff, J. (2013, March 12). "Google Adds to Its Menagerie of Machines." *The New York Times*.
11. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. MIT Press.
12. Hinton, G. E. (2023, May 1). Interviews with *The New York Times* and *BBC* on leaving Google.
