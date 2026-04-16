# 本纪第八 · 视觉革命（2012—2017）

> 2012 年 9 月 30 日，ImageNet 挑战赛的结果公布：一个名叫 AlexNet 的深度卷积神经网络以 15.3% 的错误率夺冠——比第二名的 26.2% 低了近 11 个百分点。评委反复核对数据，以为出了错。没有出错。这个由两块游戏显卡训练出来的网络，在一夜之间让计算机视觉领域的研究者集体转向。三年后，一个叫 AlphaGo 的程序击败了围棋世界冠军。又过两年，每一家科技巨头的核心业务都在深度学习上重建。这五年，AI 从冰封中彻底复苏，进入了全面爆发。

## 一、核心之争：深度网络为什么突然行了？

AlexNet 的胜利引发了一个比结果本身更重要的问题：为什么是现在？

卷积神经网络（CNN）并不是新发明——杨立昆在 1998 年就发表了 LeNet-5，架构原理几乎相同。反向传播算法是 1986 年的成果。为什么同样的思路在十四年后才展现出碾压性的优势？

答案不在于某个单一的算法突破，而在于三个条件的同时成熟：

- **数据**：ImageNet 提供了 120 万张标注图片——比 1990 年代的训练集大了三个数量级。更多的数据意味着深度网络可以学到更细致的特征，而不会过拟合。
- **算力**：两块 NVIDIA GTX 580 GPU（各 3GB 显存）让 AlexNet 的训练从不可能变成了五六天可以完成的事。没有 GPU，同样的训练在 CPU 上需要几个月。
- **算法的微调**：AlexNet 使用了几个关键的工程技巧——ReLU 激活函数（替代缓慢的 sigmoid）、Dropout 正则化（防止过拟合）、数据增强（随机裁剪和翻转训练图片）。这些技巧没有一个是理论上的大突破，但组合在一起效果显著。

这个"三位一体"的解释后来成为理解深度学习成功的经典框架——也暗示了一个重要的推论：当数据和算力继续指数增长时，深度学习的能力也会继续提升。

## 二、AlexNet：改变一切的八层网络

### 两块显卡和一个博士生

<Person id="krizhevsky" />是<Person id="hinton" />在多伦多大学的博士生。2012 年，他和同学<Person id="sutskever" />在辛顿的指导下，用两块 NVIDIA GTX 580 GPU 训练了一个八层深的卷积神经网络——五个卷积层加三个全连接层，总共约六千万个参数。

AlexNet 在 ILSVRC 2012 上的表现是毁灭性的：15.3% 的 top-5 错误率，而第二名（使用传统特征工程方法）的错误率为 26.2%。这不是"略好一点"的改进——这是一个数量级的差距。在机器学习竞赛中，1-2 个百分点的差距就足以让人兴奋；11 个百分点意味着范式转移。

### 学术界的地震

AlexNet 的论文《ImageNet Classification with Deep Convolutional Neural Networks》在 2012 年 NeurIPS（当时还叫 NIPS）会议上发表后，引发了计算机视觉领域的集体转向。2013 年的 ILSVRC 上，几乎所有前几名的参赛系统都使用了深度卷积神经网络。到 2015 年，微软的 ResNet 以 3.57% 的错误率超越了人类标注者在 ImageNet 上的平均水平（约 5.1%）。

这场地震不限于计算机视觉。语音识别、自然语言处理、药物发现、基因组学——深度学习开始向每一个有大量数据的领域渗透。一个在两年前还被主流学术界边缘化的方法，突然变成了所有人都必须学会的技能。

## 三、网络越来越深

### 从八层到一百五十二层

AlexNet 证明了深度网络的威力，但八层还远远不是极限。此后几年，网络的深度以惊人的速度增长。

2014 年，牛津大学的 VGGNet 用 16-19 层展示了"更深更好"的规律。同年，谷歌的 GoogLeNet（Inception）以 22 层和精巧的"Inception 模块"赢得了 ILSVRC 2014。

2015 年，微软亚洲研究院的何恺明（Kaiming He）等人提出了残差网络（ResNet），将深度推到了 152 层——比 AlexNet 深了将近 20 倍。ResNet 的关键创新是"跳跃连接"（Skip Connection）：让每一层的输入可以直接"跳过"若干层传递到后面，使得梯度可以通过这些捷径更顺畅地流动。这个简单的设计彻底解决了深层网络的训练困难，开启了"深度无极限"的时代。

### 批归一化

2015 年，谷歌的<Person id="batchnorm_ioffe" />和克里斯蒂安·塞格迪（Christian Szegedy）提出了批归一化（Batch Normalization）——在每一层的输出上进行标准化处理，使得训练更稳定、收敛更快。批归一化与 ResNet 的跳跃连接一起，构成了现代深度网络的两大基础设施。

## 四、GAN：机器学会了创造

2014 年 6 月的一个晚上，蒙特利尔大学（Université de Montréal）的博士生<Person id="goodfellow" />在一个酒吧与朋友争论生成模型的方法。灵感突然降临：如果让两个神经网络互相博弈会怎样？

古德费洛回到实验室，当晚就实现了他的想法，并写出了生成对抗网络（Generative Adversarial Network，GAN）的第一版代码。GAN 的架构是一场精妙的"伪造与鉴别"游戏：一个"生成器"（Generator）网络试图生成逼真的假数据（如假照片），一个"判别器"（Discriminator）网络试图区分真假。两个网络在对抗中共同进化——生成器越来越会造假，判别器越来越会辨别，直到生成器产出的数据连判别器都分辨不了。

GAN 的意义远超一个新的技术技巧。它标志着 AI 从"识别"走向了"创造"——机器不再只是对输入进行分类，而是开始生成全新的内容。在 2014 年，GAN 生成的图片还很模糊粗糙。但在接下来的几年里，GAN 的图片质量飞速提升，到 2017 年已经能够生成以假乱真的人脸。

辛顿将 GAN 称为"过去十年机器学习中最有趣的想法"。杨立昆更是用了一个生动的比喻："GAN 是蛋糕上的樱桃"——如果说监督学习是蛋糕本身，GAN 代表的无监督和生成式学习则是最诱人的部分。

## 五、AlphaGo：AI 征服围棋

### 不可能完成的任务

国际象棋在 1997 年被深蓝攻克后，围棋一直被视为 AI 的"最后堡垒"。原因很直接：围棋的搜索空间约为 10^170——比宇宙中的原子数量还多。暴力搜索在围棋面前彻底失效，深蓝那种每秒评估两亿个位置的策略毫无意义。

多数 AI 研究者认为，计算机至少还需要十到二十年才能在围棋上击败顶尖人类。

### DeepMind 的赌注

2016 年 1 月，谷歌旗下的 DeepMind 公司在《自然》杂志上发表论文，披露其 AlphaGo 系统早在 2015 年 10 月就已在五番棋中以 5 比 0 击败了欧洲围棋冠军樊麾（Fan Hui）——这已经是爆炸性新闻。但真正的高潮还在后面。

2016 年 3 月 9 日至 15 日，AlphaGo 在韩国首尔与世界围棋冠军<Person id="sedol" />进行了五盘对弈。全球超过两亿人通过网络直播观看。

AlphaGo 的核心是深度强化学习（Deep Reinforcement Learning）——一种将深度神经网络与强化学习结合的方法。<Person id="silver" />领导的团队用了两个网络：一个"策略网络"（Policy Network）通过学习人类职业棋手的棋谱来预测下一步走法，一个"价值网络"（Value Network）来评估当前局面的胜率。然后，AlphaGo 用蒙特卡洛树搜索（Monte Carlo Tree Search）将这两个网络的输出结合起来，在搜索和直觉之间找到平衡。

最终比分是 4 比 1。AlphaGo 输掉的第四盘成为了围棋历史上最著名的对局之一——李世石在第 78 手下出了一步被称为"神之一手"的妙棋，让 AlphaGo 的价值网络出现了短暂的"崩溃"。这一盘证明了人类的创造力仍然可以在局部超越机器——尽管最终的系列赛结果已经无法挽回。

### 超越人类经验

2017 年 10 月，DeepMind 发表了 AlphaGo Zero——一个完全不使用人类棋谱、纯粹通过自我对弈学习的版本。AlphaGo Zero 从零开始，仅用三天的训练就超越了击败李世石的 AlphaGo 版本，40 天后达到了超越一切已知围棋 AI 和人类棋手的水平。

AlphaGo Zero 的意义远超围棋。它证明了一个惊人的可能性：在规则明确的领域，AI 不仅可以从人类经验中学习，还可以**超越人类经验的边界**——发现人类从未想到过的策略。这个发现对 AI 的哲学含义是深远的：机器不再只是人类知识的复制者，它开始成为知识的创造者。

## 六、科技巨头的 AI 军备竞赛

### 人才争夺战

AlexNet 的成功引发了科技巨头对 AI 人才的疯狂争夺。

2013 年，辛顿和他的两名学生（克里热夫斯基和苏茨克维）创立了一家名为 DNNresearch 的小公司，随即被谷歌收购——据报道收购价约为 4400 万美元。辛顿此后以兼职身份加入谷歌大脑（Google Brain），同时保留多伦多大学的教职。

2013 年，杨立昆加入 Facebook（现 Meta），担任新成立的 AI 研究实验室（FAIR）负责人。本吉奥没有加入任何公司，而是将蒙特利尔打造成了全球深度学习的重镇——他的 MILA 实验室吸引了大量人才和投资。

<Person id="hassabis" />的 DeepMind 在 2014 年被谷歌以约 5 亿美元收购。百度在 2014 年聘请吴恩达领导其硅谷 AI 实验室。微软、亚马逊、苹果也纷纷组建或扩大自己的 AI 研究团队。

一场前所未有的 AI 人才争夺战拉开了帷幕——顶尖的深度学习博士刚毕业就能拿到数百万美元的年薪，教授们纷纷在学术界和产业界之间游走。

### 开源框架：民主化的工具

科技巨头之间的竞争也推动了深度学习工具的开源化。

2015 年 11 月，谷歌开源了 TensorFlow——一个灵活的深度学习框架。2016 年，Facebook 开源了 PyTorch（基于 Torch 和 Caffe2）。这两个框架迅速成为深度学习的"双寡头"，大幅降低了深度学习的门槛——你不再需要从头编写 GPU 矩阵运算的代码，只需要用几十行 Python 就能定义、训练和部署一个深度网络。

开源框架的普及加速了深度学习的扩散。到 2017 年，深度学习已经从少数实验室的尖端研究变成了每一个计算机科学学生的必修课。

## 七、暗流与伏笔

**第一，注意力机制正在酝酿。** 2014 年，本吉奥团队提出了注意力机制（Attention Mechanism）用于机器翻译。2015 年，注意力机制被应用于图像描述生成。这些工作当时看起来只是技术改进，但它们正在为 2017 年的 Transformer 架构铺路——那将是一场比 AlexNet 更彻底的范式转移。

**第二，RNN 和 LSTM 的局限已经显现。** 对于序列数据（如文本和语音），循环神经网络（RNN）和长短期记忆网络（LSTM）在 2012-2016 年间是主流选择。但它们的串行计算特性使得训练速度缓慢，难以充分利用 GPU 的并行能力。一种能够并行处理序列的新架构正在被需要。

**第三，AI 伦理的讨论开始萌芽。** 随着深度学习应用的扩散，偏见、公平性和隐私问题开始受到关注。2016 年，ProPublica 发表调查报道，揭示美国司法系统使用的犯罪风险评估算法 COMPAS 对黑人存在系统性偏见。AI 不再只是技术问题——它开始成为社会问题。

**第四，规模定律的轮廓初现。** AlexNet 到 ResNet 的演进暗示了一个规律：更大的网络、更多的数据、更强的算力，几乎总是带来更好的性能。这个规律后来被 OpenAI 在 2020 年正式表述为"规模定律"（Scaling Laws），成为大语言模型时代的理论基础。

## 八、年表

| 年份 | 事件 | 关键人物 |
|------|------|---------|
| 2012 | AlexNet 以 15.3% 错误率赢得 ILSVRC，比第二名低约 11 个百分点 | <Person id="krizhevsky" />、<Person id="sutskever" />、<Person id="hinton" /> |
| 2013 | DNNresearch 被谷歌收购，辛顿加入谷歌大脑 | <Person id="hinton" /> |
| 2013 | 杨立昆加入 Facebook，担任 FAIR 负责人 | <Person id="lecun" /> |
| 2014 | DeepMind 被谷歌以约 5 亿美元收购 | <Person id="hassabis" /> |
| 2014 | 古德费洛提出生成对抗网络（GAN） | <Person id="goodfellow" /> |
| 2014 | 本吉奥团队提出注意力机制用于机器翻译 | <Person id="bengio" /> |
| 2015 | ResNet 提出跳跃连接，网络深度突破百层 | 何恺明（Kaiming He） |
| 2015 | 批归一化提出，加速深度网络训练 | <Person id="batchnorm_ioffe" /> |
| 2015 | 谷歌开源 TensorFlow | — |
| 2016 | AlphaGo 以 4:1 击败围棋世界冠军李世石 | <Person id="silver" />、<Person id="sedol" /> |
| 2017 | AlphaGo Zero 发布，完全通过自我对弈超越人类 | <Person id="silver" />、<Person id="hassabis" /> |

---

::: tip 太史公曰
视觉革命的五年是 AI 七十年历史中变化最快的五年。2012 年初，"深度学习"还是一个只在少数实验室里被认真对待的边缘方向；2017 年底，它已经成为整个 AI 领域的默认范式。这场革命的核心不是某个算法的发明——卷积网络是 1990 年代的产物，反向传播更是 1980 年代的——而是算法、数据和算力三条线在一个时间点上的汇合。但技术条件的成熟只解释了"为什么可能"，不解释"为什么发生"。发生的原因在于人——在于辛顿三十年的坚守、李飞飞建设 ImageNet 的远见、克里热夫斯基对 GPU 编程的熟练、哈萨比斯将深度学习与强化学习结合的想象力。AlphaGo 击败李世石的那一刻，不仅是机器的胜利，也是一代被冷落的研究者的平反。但历史很快会证明，视觉革命只是序幕。真正的主角——语言——还在后台等待登场。
:::

## 亲历者说

::: info 征集中
如果你了解这段历史的第一手资料或亲历者回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

---

## 参考资料

1. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *NeurIPS 2012*.
2. He, K., Zhang, X., Ren, S., & Sun, J. (2016). "Deep Residual Learning for Image Recognition." *CVPR 2016*.
3. Ioffe, S., & Szegedy, C. (2015). "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift." *ICML 2015*.
4. Goodfellow, I. J. et al. (2014). "Generative Adversarial Nets." *NeurIPS 2014*.
5. Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks and tree search." *Nature*, 529, 484–489.
6. Silver, D. et al. (2017). "Mastering the game of Go without human knowledge." *Nature*, 550, 354–359.
7. Simonyan, K., & Zisserman, A. (2015). "Very Deep Convolutional Networks for Large-Scale Image Recognition." *ICLR 2015*.
8. Szegedy, C. et al. (2015). "Going Deeper with Convolutions." *CVPR 2015*.
9. Bahdanau, D., Cho, K., & Bengio, Y. (2015). "Neural Machine Translation by Jointly Learning to Align and Translate." *ICLR 2015*.
10. Abadi, M. et al. (2016). "TensorFlow: A System for Large-Scale Machine Learning." *OSDI 2016*.
11. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep Learning." *Nature*, 521, 436–444.
