# 列传 · 李飞飞（Fei-Fei Li）

> 她没有发明算法，却造了一个数据集——那个数据集让世界第一次相信深度学习。

![李飞飞（Fei-Fei Li），2017 年 AI for Good 全球峰会](/images/people/fei-fei-li.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 北京、新泽西与一间干洗店

1976 年，李飞飞（<Person id="fei-fei-li" />）出生于北京，在四川成都度过童年。父亲是工程师，母亲是中学教师，家境普通而书香。她从小爱读书，少年时期已熟读中国古典与西方科幻。

1992 年，十六岁的她随父母移民美国，落脚新泽西州帕西帕尼（Parsippany, New Jersey）。父母英语不熟，攒下积蓄盘下了一间干洗店。白天她去高中上课，放学后到店里熨衣服、收银、记账。她的英语是在美国高中和干洗店的柜台上一句一句练出来的。

但她的心里始终有另一条线。1995 年，她以优异成绩被普林斯顿大学录取，主修物理学。本科四年，每个周末她从普林斯顿坐火车回新泽西的干洗店帮工。这段经历后来在她的自传中被反复提及——它教会她两件事：移民家庭的边界感，与"工作就是工作"的扎实。

1999 年，她以最优等成绩从普林斯顿毕业。本科毕业论文研究的是物理与神经科学的交叉。她意识到自己真正被吸引的，不是粒子，而是大脑——那台让粒子产生意识的机器。

## 加州理工的视觉问题

2000 年，她进入加州理工学院（Caltech），攻读电气工程博士，师从计算机视觉的开拓者 Pietro Perona 与神经科学家 Christof Koch——后者长期与诺贝尔奖得主弗朗西斯·克里克（Francis Crick）合作研究意识的神经基础。Caltech 的训练让她同时拿到工程师的工具与科学家的提问方式。

她的博士论文研究"单样本学习"（One-shot Learning）——人为什么看一张照片就能识别一个新物体？这个问题在 2000 年代初的视觉社区不算主流，主流是手工特征加分类器。她坚信问题的关键在数据：人之所以能少样本学习，是因为大脑里早已积累了一生的视觉先验。

2005 年她拿到博士学位，先去 UIUC 任助理教授，2007 年转到普林斯顿。这一年，她做了一个改变 AI 命运的决定。

## ImageNet：一千万张图片的赌博

2007 年，李飞飞坐在普林斯顿办公室里思考一个问题：为什么计算机视觉算法在学术 benchmark 上不断刷新指标，却在真实世界的图像面前频频失效？她的答案与同行相反——问题不在模型，在数据。

当时主流数据集 *Caltech-101* 只有 101 类、9000 张图片。而真实世界的物体类别成千上万。她决定建一个前所未有的视觉数据集：覆盖 WordNet 词典中的所有名词，每个名词配数百到上千张图片——目标是上千万张图片、两万多个类别。

最大的挑战是标注。雇专业标注员算下来需要数十年。2008 年，她注意到亚马逊推出的众包平台 Amazon Mechanical Turk——它允许把微小任务分发给全球的兼职工人。她和博士生邓嘉（Jia Deng）等团队成员把图像分类任务拆成"这张图是不是 X"的简单问答，分发给上万名 Turker。两年时间，三百万张图片被人工核验，覆盖五千多个类别。最终发布版本含约 1500 万张图片、22000 个类别。

学界几乎一边倒地不看好。2009 年她带着 *ImageNet: A Large-Scale Hierarchical Image Database* 投到 *CVPR*，反响平淡——"建一个数据集算什么研究"。她坚持下去。

2010 年，她联合主办 ImageNet Large Scale Visual Recognition Challenge（ILSVRC），把 1000 类、约 120 万张图片的子集开放给全球团队竞赛。前两届，最优算法的 top-5 错误率徘徊在 26% 上下。

直到 2012 年。

## 那一年，世界换了轨道

2012 年 9 月，多伦多大学<Person id="hinton" />实验室的<Person id="krizhevsky" />与<Person id="sutskever" />提交了一个深度卷积神经网络——AlexNet。它把 top-5 错误率从 26.2% 一脚踩到 15.3%。

这个结果震动了整个视觉社区。三十年来不温不火的神经网络，借由 ImageNet 这个 1000 类百万张图的舞台，第一次把传统方法甩在身后。深度学习革命的发令枪在 ILSVRC 2012 打响。

李飞飞后来回忆：那一刻她意识到，ImageNet 真正的意义不是它的算法分数，而是它给了一台叫"深度学习"的机器一片足够大的草原去奔跑。没有 ImageNet，AlexNet 不会发生；没有 AlexNet，今天的所有大模型可能仍在等待自己的拐点。

ILSVRC 一直办到 2017 年，错误率降至 2.3%，已超过人类水平。这个十年间，几乎所有重要的视觉模型——VGG、GoogLeNet、ResNet、SENet——都是在 ImageNet 这条赛道上出生的。

## 斯坦福、谷歌、HAI

2009 年，李飞飞从普林斯顿转到斯坦福任助理教授。2012 年起担任 *Stanford Vision Lab* 主任。她培养出一批后来定义 AI 的学生：邓嘉（Jia Deng，现密歇根大学）、Andrej Karpathy（OpenAI / Tesla）、Justin Johnson 等。

2017 年 1 月，她加入谷歌出任 Google Cloud 首席科学家、AI/ML 负责人。这是她第一次进入工业界核心，主导谷歌云的 AutoML 与 Vision API。两年后，2018 年 9 月她回到斯坦福。

2019 年 3 月，她与哲学家 John Etchemendy 共同创办斯坦福 *Human-Centered AI Institute*（HAI）。HAI 的提案非常清晰：AI 必须以人为中心，技术、政策、伦理三者并行。她在国会作证、加入美国国家 AI 研究资源（National AI Research Resource, NAIRR）工作组、在 *Nature* 发表关于 AI 治理的文章。她从一位计算机视觉学者走到了科技政策的舞台。

2020 年她当选美国国家工程院（National Academy of Engineering）院士；同年当选美国国家医学院（National Academy of Medicine）院士——一个研究图像分类的人，被两个最严肃的工程与医学机构同时承认。

## 空间智能与 World Labs

2023 年，她出版自传 *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI*（中译《我看到的世界》）。书中她回到帕西帕尼那间干洗店、回到加州理工的暗室、回到 ImageNet 上线那晚——把个人故事与 AI 史交织成一部移民版的科学回忆录。

2024 年 4 月，她联合计算机图形学家 Ben Mildenhall（NeRF 作者）、Christoph Lassner、Justin Johnson 创办 World Labs，专注"空间智能"（Spatial Intelligence）——让 AI 不只看懂图片中的"是什么"，更要理解三维世界的"在哪里、能怎样"。这是她给下一个十年的赌注：从二维像素到三维世界，从感知到行动。

2024 年 9 月，World Labs 完成两轮融资共约 2.3 亿美元，估值突破 10 亿美元，成为 AI 领域最年轻的独角兽之一。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 2003 | "A Bayesian approach to unsupervised one-shot learning of object categories", *ICCV*（与 Pietro Perona） | 单样本学习的早期框架 |
| 2007 | "Learning Generative Visual Models from Few Training Examples", *CVIU* | 物体识别的概率生成模型 |
| 2009 | "ImageNet: A Large-Scale Hierarchical Image Database"（与邓嘉等）, *CVPR* | 深度学习时代的标志性数据集 |
| 2015 | "ImageNet Large Scale Visual Recognition Challenge", *IJCV*（与邓嘉、Russakovsky 等） | ILSVRC 五年回顾，定义视觉评测标准 |
| 2017 | "Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations", *IJCV* | 图像与语言对齐的早期里程碑 |
| 2023 | *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI* | 自传，AI 史的人本视角 |

## 太史公曰

::: tip 太史公曰
李飞飞不是写最多论文的人，也不是发明算法的人。她做的是一件极不"性感"的事——花两年时间，组织上万名陌生人，把一千五百万张图片一张一张地打上标签。在 2009 年，没有人觉得这是研究；在 2012 年，所有人都明白这是革命。深度学习的故事常被讲成<Person id="hinton" />、<Person id="lecun" />、<Person id="bengio" />三位的故事；但若没有那片叫 ImageNet 的草原，神经网络这匹老马仍会被困在小数据的栅栏里。她证明了一件被算法世界长期忽略的真相：**数据不是模型的附属品，数据本身就是一种智力的形式**。从干洗店柜台到斯坦福讲台，从一张张人工标注的图片到 *Human-Centered AI*，再到 World Labs 的"空间智能"，她始终把 AI 拉回到人——人的大脑、人的伦理、人的世界。
:::

## 亲历者说

::: info 征集中
如果你曾参与 ImageNet 标注、ILSVRC 比赛，或在斯坦福 Vision Lab、HAI、World Labs 与李飞飞共事，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Fei-Fei, L., Fergus, R., & Perona, P. (2003). "A Bayesian approach to unsupervised one-shot learning of object categories." *Proceedings of ICCV*.
2. Deng, J., Dong, W., Socher, R., Li, L.-J., Li, K., & Fei-Fei, L. (2009). "ImageNet: A Large-Scale Hierarchical Image Database." *Proceedings of CVPR*.
3. Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., et al. (2015). "ImageNet Large Scale Visual Recognition Challenge." *International Journal of Computer Vision*, 115(3), 211–252.
4. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *Proceedings of NeurIPS*.
5. Krishna, R., Zhu, Y., Groth, O., et al. (2017). "Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations." *International Journal of Computer Vision*, 123(1), 32–73.
6. Li, Fei-Fei (2023). *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI*. Flatiron Books.
7. Markoff, J. (2012). "Seeking a Better Way to Find Web Images." *The New York Times*, November 19, 2012.
8. Metz, C. (2024). "Fei-Fei Li Starts a Spatial Intelligence Company, World Labs." *The New York Times*, September 2024.
9. National Academy of Engineering (2020). "Members Elected in 2020." NAE Press Release.
