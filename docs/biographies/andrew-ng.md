# 列传 · 吴恩达（Andrew Ng）

> 他没有发明大模型，却把高墙降成了大众的台阶。

![吴恩达（Andrew Ng），2017 年 WSJ CIO Network 演讲](/images/people/andrew-ng.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 一个少年的三段地图

1976 年，吴恩达（Andrew Ng）出生于英国伦敦。父亲是香港人，母亲来自香港的医生家庭。童年随父母辗转香港、新加坡，最终落脚北美。少年吴恩达坐在新加坡莱佛士书院（Raffles Institution）的教室里，已经显露出对算法与几何的痴迷。

1992 年，他赴美进入卡内基梅隆大学（Carnegie Mellon University, CMU）。CMU 是美国 AI 的圣殿之一——<Person id="newell" />、<Person id="simon" />与<Person id="mccarthy" />共同奠定的传统在此延续。吴恩达本科主修计算机科学、统计学与经济学，1997 年以最优等成绩（Highest Distinction）毕业。随后他北上麻省理工学院（MIT）攻读硕士，1998 年完成关于强化学习的硕士论文。

博士阶段他选择西海岸的加州大学伯克利分校（UC Berkeley），师从<Person id="jordan" />——贝叶斯网络与图模型领域的旗帜性人物。2002 年，他以题为 *Shaping and Policy Search in Reinforcement Learning* 的论文获得博士学位。论文的核心案例是一架自主直升机：他用强化学习让一架无人直升机学会倒飞、翻滚——一段在斯坦福校园上空被反复播放的影像。

那一年他二十六岁，离开伯克利、过湾区、进入斯坦福，从此扎根。

## 斯坦福的讲台

2002 年起，吴恩达任职斯坦福大学计算机科学系，一头扎进机器学习课程 *CS229*。这门课最初只面向研究生，每年百来人。他讲得清楚、板书干净、推导耐心——支持向量机（SVM）、最大似然、EM 算法、概率图模型——他能把最数学的部分讲得像故事。

斯坦福工程学院从 2003 年开始尝试公开课。2008 年，*CS229* 的视频被免费放上 YouTube 与斯坦福工程学院的 *SEE* 平台。世界上第一次，一所顶级大学的机器学习课向全互联网敞开。来自印度、中国、东欧的工程师在凌晨守着进度条，把一堂堂八十分钟的英语讲座写成笔记，再翻译成本国语言。

吴恩达发现，远方的需求远超他的想象。

2011 年秋，他与<Person id="jordan" />的同行——斯坦福概率图模型大师 Daphne Koller——共同启动了一项实验：把斯坦福三门课《机器学习》《数据库》《人工智能》挂上一个简陋的网站，免费、开放、附带作业与评分。报名人数超过十万。一个新词诞生了：MOOC（Massive Open Online Course，大规模开放在线课程）。

2012 年初，两人创办 Coursera。半年内全球注册用户突破百万。教育的边界被重新画过。

## Google Brain 与那只猫

2010 年前后，吴恩达开始把目光投向被冷落多年的神经网络。多伦多大学的<Person id="hinton" />、纽约大学的<Person id="lecun" />、蒙特利尔的<Person id="bengio" />仍在坚持，但工业界鲜有响应。

2009 年，吴恩达与博士生 Rajat Raina 合作发表了 *Large-scale Deep Unsupervised Learning using Graphics Processors*，是最早系统证明 GPU 可大幅加速深度网络训练的工作之一。这篇论文比 AlexNet 早三年，却已经写下了"算力 + 深度网络"的剧本。

2011 年，吴恩达走进 Google X 实验室。他向时任 Google Fellow 的 Jeff Dean、研究员 Greg Corrado 提议：构建一个跨上千台机器、上万 CPU 核的分布式深度学习系统，看看在足够大的算力上，神经网络究竟能学到什么。这个项目内部代号"Google Brain"。

2012 年 6 月，他们公布了实验结果：用一个九层稀疏自编码器（Sparse Autoencoder），在 1000 台机器、16000 个 CPU 核上、训练 1000 万张从 YouTube 视频中随机截取的图片——三天后，网络中一个神经元自动学会了对"猫脸"产生强烈响应。这只无人监督学到的"猫"成了头版新闻。它没有解决智能本身，但它让世界看见：足够大的网络、足够多的数据、足够多的算力，可以从混沌中长出概念。

Google Brain 后来孕育了 TensorFlow、Transformer 与一系列基础设施，并最终在 2023 年与 DeepMind 合并为 Google DeepMind。

## 北京、百度与 Apollo

2014 年 5 月，吴恩达宣布出任百度首席科学家、负责百度研究院。彼时中国互联网巨头第一次大规模押注 AI。他在硅谷桑尼维尔（Sunnyvale）建立百度美国研究院、在北京搭建语音与深度学习团队，主导了"百度大脑"的整体架构。

他主推的两条线影响深远：一是端到端语音识别系统 *Deep Speech*（2014）与 *Deep Speech 2*（2015），用单一深度网络替代传统语音管线；二是自动驾驶平台 Apollo——2017 年百度对外开源整套自动驾驶软件栈。Apollo 的开放策略后来成为中国汽车产业的重要技术底座。

2017 年 3 月，吴恩达从百度离任。他写了一封公开信，标题是 "Opening a new chapter of my work in AI"——他要把下一段时间还给教育与创业。

## 一万种学生

离开百度后，他做了三件事，从不同方向回到同一个主题：让 AI 不再只属于少数人。

第一件，**deeplearning.ai**。2017 年 8 月，他在 Coursera 上线 *Deep Learning Specialization*——五门课、自神经网络基础到序列模型与卷积网络。课程上线一年累计注册超过 25 万人，几年后突破数百万。配套书 *Machine Learning Yearning*（《机器学习训练秘籍》）以小册子形式免费放出，成为新人的口袋书。

第二件，**Landing AI**。2017 年 12 月成立，专注把深度学习带入制造业——视觉缺陷检测、工业质量控制。它瞄准的不是硅谷大厂，而是富士康那样的工厂车间。

第三件，**AI Fund**。2018 年成立的早期基金，专门投资 AI 应用层创业团队。他相信下一波价值不在更大的模型，而在把模型嵌入每一个行业的细处。

2023 年 GPT-4 发布后，他第一时间在 deeplearning.ai 上线短课系列 *ChatGPT Prompt Engineering for Developers*，与<Person id="altman" />领导的 OpenAI 合作。这门免费课程上线两周突破四十万学习者——再一次，他抢在所有人之前把最新的技术下放给大众。

## 教师作为放大器

吴恩达不是 *Attention Is All You Need* 的作者，不是 AlphaGo 的设计师，也不是 GPT 系列的创造者。他在每一次浪潮中都不是发明者。

但任何一个深度学习从业者打开自己的简历，都很可能写着：*我从吴恩达的 CS229/Deep Learning Specialization 入门*。Kaggle 平台 2020 年的从业者调查显示，他的课程长期位居全球数据科学家入门来源前列。中国第一批做大模型的工程师里，许多人是看着他在斯坦福的板书长大的。

他把一门高墙学问变成了大众课程。这件事的杠杆效应——一个老师乘以一千万学生——比任何单篇论文都更深远。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 2002 | *Shaping and Policy Search in Reinforcement Learning*（博士论文） | 强化学习应用于自主直升机 |
| 2009 | "Large-scale Deep Unsupervised Learning using Graphics Processors"（与 Rajat Raina）, *ICML* | 系统论证 GPU 加速深度网络训练 |
| 2011 | 斯坦福 *CS229* 公开课 / Coursera *Machine Learning* | 全球数百万人的机器学习入门 |
| 2012 | "Building High-level Features Using Large Scale Unsupervised Learning"（Google Brain "猫"）, *ICML* | 大规模分布式无监督学习的里程碑 |
| 2014 | *Deep Speech*（与百度团队） | 端到端深度神经网络语音识别 |
| 2017 | *Deep Learning Specialization*（deeplearning.ai） | 全球深度学习的标准入门课 |
| 2018 | *Machine Learning Yearning* | 免费机器学习实战手册 |

## 太史公曰

::: tip 太史公曰
吴恩达不是发明 LLM 的人，也不是写下 *Attention Is All You Need* 那一行的人。他在每一场革命中都是较早的参与者，却很少是站在最高点的发明者。但他做了另一件事——他把一所贵族大学的课，开放给地球另一端凌晨守着进度条的工程师；他把"GPU 训练神经网络"的剧本提前三年写出；他把深度学习的入口从博士论文降到一周可学完的视频；他在百度、在制造业、在创业基金里，反复证明"应用层"才是 AI 真正落地的地方。论文有引用衰减，课程没有。如果说<Person id="hinton" />、<Person id="lecun" />、<Person id="bengio" />三位是深度学习的祖师爷，那么吴恩达是把整座庙宇开放给四海八方信众的住持。一个时代不仅需要发明者，也需要传道者；后者的影响往往更长，因为它通过千万个学生延伸到无数次未来的发明。
:::

## 亲历者说

::: info 征集中
如果你曾上过吴恩达的 *CS229* 或 *Deep Learning Specialization*，或在 Google Brain、百度、Landing AI 与他共事，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Ng, A. Y. (2002). *Shaping and Policy Search in Reinforcement Learning*. Ph.D. Dissertation, UC Berkeley.
2. Raina, R., Madhavan, A., & Ng, A. Y. (2009). "Large-scale Deep Unsupervised Learning using Graphics Processors." *Proceedings of ICML*.
3. Le, Q. V., Ranzato, M., Monga, R., Devin, M., Chen, K., Corrado, G., Dean, J., & Ng, A. Y. (2012). "Building High-level Features Using Large Scale Unsupervised Learning." *Proceedings of ICML*.
4. Hannun, A., Case, C., Casper, J., Catanzaro, B., Diamos, G., Elsen, E., et al. (2014). "Deep Speech: Scaling up End-to-end Speech Recognition." arXiv:1412.5567.
5. Ng, A. (2017). "Opening a new chapter of my work in AI." Personal Letter, March 2017. https://medium.com/@andrewng
6. Ng, A. (2018). *Machine Learning Yearning*. deeplearning.ai. https://www.deeplearning.ai/machine-learning-yearning/
7. Coursera (2012). "Stanford University, Daphne Koller, Andrew Ng Launch Coursera." Press release, April 2012.
8. Markoff, J. (2012). "How Many Computers to Identify a Cat? 16,000." *The New York Times*, June 25, 2012.
9. Metz, C. (2017). "Andrew Ng, AI Pioneer, Leaves Baidu." *Wired*, March 22, 2017.
