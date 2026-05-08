# 世家 · MILA 蒙特利尔

> 蒙特利尔学习算法研究所——本吉奥在加拿大法语区独自坚守三十年的实验室，神经语言模型、注意力机制、生成对抗网络这三件深度学习时代的"重器"，都在这里被铸造。

## 一、本吉奥回到蒙特利尔

1993 年，<Person id="bengio" /> 加入蒙特利尔大学（Université de Montréal，UdeM）计算机与运筹学系（DIRO），出任助理教授。这位生于巴黎、长在蒙特利尔的学者，刚刚结束了在 MIT 与贝尔实验室的博士后岁月——后者正是<Person id="lecun" />做出 LeNet 卷积网络的地方。本吉奥对神经网络的信仰，从那段贝尔实验室的合作中延续下来。

回到蒙特利尔后，他建立了一个小小的研究组，最初叫做 **LISA**（Laboratoire d'Informatique des Systèmes Adaptatifs，自适应系统信息学实验室）。这个名字会在二十年里逐渐扩大、迁移、改组，最后演变为今天的 MILA。但在 1990 年代到 2000 年代初，LISA 是寒冬里少数还在认真做神经网络的实验室之一。蒙特利尔大学是一所讲法语的研究型大学，与英语世界的学术中心隔着一层文化距离——这层距离，反倒让 LISA 在主流嘲讽神经网络的年代里得以低调地把工作做下去。

## 二、神经语言模型与早期工作

2003 年，本吉奥与 Réjean Ducharme、Pascal Vincent、Christian Jauvin 在 *Journal of Machine Learning Research* 发表《A Neural Probabilistic Language Model》。这篇论文今天被普遍视作"词向量"（word embedding）思想的源头——在统计 NLP 仍由 n-gram 主导的年代，这篇论文用一个共享的低维分布式表示来同时学习词的语义和语言模型的概率。十年后 Mikolov 提出的 word2vec 几乎是它在工程上的简化版。

LISA 此后陆续做出多项基础工作：Pascal Vincent 等 2008 年提出的去噪自编码器（Denoising Autoencoder）、Hugo Larochelle 等关于深度网络逐层预训练的研究、Aaron Courville 的概率深度模型工作。本吉奥本人 2009 年在 *Foundations and Trends in Machine Learning* 上发表的长篇综述《Learning Deep Architectures for AI》，是当时最系统的深度学习教科书式总结。

到 2010 年前后，LISA 的研究范围已从神经语言模型扩展到表示学习、概率深度网络、图模型与神经网络的结合。本吉奥与<Person id="hinton" />、LeCun 形成了"深度学习加拿大三巨头"的友谊，三人定期在 CIFAR NCAP 项目下面对面交流——这种紧密协作，对 2006 年后深度学习的复兴极其关键。

## 三、GAN 的灵光一闪

2014 年 6 月，蒙特利尔一家不起眼的酒吧里，<Person id="goodfellow" />正在与朋友讨论生成模型的难题。那时他是本吉奥与 Aaron Courville 的博士生，研究方向是概率生成模型。那天晚上他冒出一个想法：让两个神经网络互相对抗——一个生成假样本，一个判别真假，两者博弈直到达到纳什均衡。

回到家里他熬了一夜把代码写出来，跑通了第一个版本。一个月后，他、本吉奥、Courville 等人将论文《Generative Adversarial Nets》投到 NeurIPS 2014。GAN 是 2010 年代生成模型领域最具影响力的工作之一——StyleGAN、CycleGAN、BigGAN 直到后来 Diffusion 模型兴起之前，整个图像生成领域几乎被 GAN 范式所主导。

古德费洛 2016 年与本吉奥、Courville 联合出版的《Deep Learning》（俗称"花书"），成为深度学习时代最具影响力的研究生教材，至 2025 年已被翻译成近 20 种语言，在全球高校广泛采用。这本书的写作过程基本完成于 MILA。

## 四、注意力机制——另一束被低估的光

2014 年 9 月，本吉奥的另一名博士生 Dzmitry Bahdanau 与 Kyunghyun Cho（彼时在蒙特利尔做博士后，后任纽约大学教授）、本吉奥共同发表《Neural Machine Translation by Jointly Learning to Align and Translate》。这篇论文首次在神经机器翻译中引入"对齐 + 翻译"的联合学习机制——后来被简称为"注意力"（attention）。

这是注意力机制在深度学习中的标志性首次登场。三年后，Vaswani 等在 Google 提出 Transformer，把"注意力"推上王座；又过五年，ChatGPT 让全世界都听过这个词。但很多人不知道，这条线的起点正是 2014 年蒙特利尔那篇为机器翻译写的论文。本吉奥后来在多个场合说，他对自己研究路径里"最被低估的工作"的判断，就是这一篇。

蒙特利尔在 2010 年代中期还做出了一系列影响后续深度学习走向的关键工作：Junyoung Chung 等关于 GRU 的实证研究、Bahdanau 与 Cho 的 RNN 编码器–解码器架构、Vincent Dumoulin 在生成模型与风格迁移上的研究、Aaron Courville 关于多模态深度学习的探索。这一切都让蒙特利尔在 2015 年前后被普遍认作"深度学习三大重镇"之一（与多伦多、Google Brain/DeepMind 并列）。

## 五、MILA 正式成立与产业化

LISA 在 2010 年代中期已经显得太小。2017 年，蒙特利尔大学、麦吉尔大学（McGill）、HEC Montréal 与蒙特利尔工程学院（Polytechnique Montréal）联合，将本吉奥主导的 LISA 与其他相关组整合，正式成立 **MILA**（Montreal Institute for Learning Algorithms / Institut québécois d'intelligence artificielle）。MILA 是一个独立非营利研究院，本吉奥任科学主任。

加拿大联邦政府"泛加拿大 AI 战略"对 MILA、Vector、Amii 三家研究院总计资助 1.25 亿加元，魁北克省政府额外加码。MILA 由此进入大规模扩张阶段：截至 2024 年，MILA 拥有 130 多位教授、超过 1300 名学生与研究人员，是全球规模最大的学术深度学习研究中心之一。

围绕 MILA，蒙特利尔形成了密集的 AI 创业生态：本吉奥本人 2017 年与他人联合创办 **Element AI**，2020 年被 ServiceNow 以约 2.3 亿美元收购；Hugo Larochelle 长期在 Google Brain Montreal 任职，是 MILA 与 Google 关系的关键纽带；Aaron Courville、Pascal Vincent 等多人保持着学术与产业双重身份。Microsoft、Google、Meta、ServiceNow、Samsung 等多家科技巨头都在 MILA 周边设立了研究分支。

## 六、图灵奖与伦理转向

2018 年 3 月 27 日，ACM 宣布将该年度图灵奖授予 Yoshua Bengio、Geoffrey Hinton、Yann LeCun 三人，"以表彰他们使深度神经网络成为计算关键组件的概念与工程突破"。这是计算机科学界对深度学习的最高认可。

得奖之后，本吉奥的研究方向出现了一个明显的转向。一方面，他在因果推断、System 2 深度学习、世界模型等更基础的方向上发力，主张当前的深度学习只是"System 1"——快速、感知性、模式匹配——而真正的智能还需要慢思考、推理、因果。另一方面，他开始投入大量精力于 AI 伦理与社会影响。

2018 年 12 月，本吉奥牵头与多伦多、蒙特利尔、欧洲多位学者发布《**Montreal Declaration for Responsible Development of Artificial Intelligence**》（蒙特利尔宣言）。这份宣言以"人本福祉、自治、隐私、团结、民主、公平、责任、可持续"等十大原则为核心，成为 AI 伦理领域被引用最多的纲领性文件之一。

2023 年起，本吉奥与<Person id="hinton" />、Stuart Russell 等共同签署多份关于"暂停大型 AI 实验"的公开信。他与辛顿一道，从单纯的深度学习奠基人转型为 AI 风险议题最具公信力的吹哨人。MILA 也因此成为加拿大 AI 安全与负责任 AI 研究的核心阵地之一。

## 七、作为机构的 MILA

到 2026 年，MILA 在全球 AI 版图上的位置非常独特：它是少数仍以"实验室"自我定位、而非"产业研发机构"的顶级 AI 中心；它产出的研究在被引数和影响力上长期与 Google DeepMind、FAIR 同台；它与英语世界主流的资本叙事保持着一定距离，更愿意把法语世界的人本传统、欧洲的伦理传统带进 AI 讨论。

学生谱系上，MILA 输出了一长串塑造当代 AI 的研究者：<Person id="goodfellow" />（GAN，曾任 Apple、DeepMind）、Bahdanau（注意力机制，Element AI / ServiceNow）、Cho（NYU，神经机器翻译）、Larochelle（Google Brain Montreal）、Pascal Vincent（Meta FAIR）、David Krueger（剑桥，AI 安全）、Yann Dauphin（Meta）、Sherjil Ozair（DeepMind）、Caglar Gulcehre（DeepMind）、Yoshua Bengio 的弟弟 Samy Bengio（Apple AI/ML 研究主管）等。

蒙特利尔的故事和多伦多的故事互为镜像：多伦多有辛顿，蒙特利尔有本吉奥；多伦多孵化了 AlexNet 与 Cohere，蒙特利尔孵化了 GAN 与 Element AI；多伦多在 Vector Institute 集结火力，蒙特利尔在 MILA 完成同样的整合。两座城市加上埃德蒙顿的 Amii，撑起了"加拿大 AI 铁三角"。这是一国之力以"长线扶持冷板凳学派"取得世界级回报的样本。

::: tip 太史公曰
MILA 之于 AI，是一种"小国寡民、深耕一艺"的范本。蒙特利尔不是世界级的金融中心，魁北克的 GDP 只占加拿大不到 20%，但本吉奥与他的同事们用三十年时间，把这里变成了与硅谷、剑桥、北京并列的深度学习高地。它的秘诀在两点：第一，押注被主流嘲笑的方向并耐心等待——1990 年代神经语言模型几乎无人问津，2014 年的注意力机制被埋没在机器翻译的小圈子里，今天它们却是大模型的两块基石。第二，不以学术成功为终点——本吉奥得了图灵奖之后转身去写蒙特利尔宣言，用学术权威为社会议题背书。一所实验室能在最强盛时仍保有反思与节制，这种品格放在任何时代都难得。蒙特利尔留给 AI 的，不只是 GAN 和注意力，还有一种"做研究的同时审视研究"的姿态——这或许是 21 世纪 AI 最需要的家训。
:::

## 亲历者说

::: info 征集中
如果你曾在 LISA、MILA、Element AI 或蒙特利尔大学 AI 相关组学习、工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Bengio, Y., Ducharme, R., Vincent, P., & Jauvin, C. (2003). "A Neural Probabilistic Language Model." *JMLR*, 3, 1137–1155.
2. Bengio, Y. (2009). "Learning Deep Architectures for AI." *Foundations and Trends in Machine Learning*, 2(1), 1–127.
3. Vincent, P., Larochelle, H., Bengio, Y., & Manzagol, P.-A. (2008). "Extracting and Composing Robust Features with Denoising Autoencoders." *ICML 2008*.
4. Goodfellow, I., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., & Bengio, Y. (2014). "Generative Adversarial Nets." *NeurIPS 2014*.
5. Bahdanau, D., Cho, K., & Bengio, Y. (2015). "Neural Machine Translation by Jointly Learning to Align and Translate." *ICLR 2015* (arXiv:1409.0473, 2014).
6. Cho, K., van Merriënboer, B., Gulcehre, C., Bahdanau, D., Bougares, F., Schwenk, H., & Bengio, Y. (2014). "Learning Phrase Representations Using RNN Encoder–Decoder for Statistical Machine Translation." *EMNLP 2014*.
7. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
8. ACM (2018). "ACM A.M. Turing Award Citation: Yoshua Bengio, Geoffrey Hinton, Yann LeCun." https://amturing.acm.org/
9. *Montreal Declaration for Responsible Development of Artificial Intelligence* (2018). https://www.montrealdeclaration-responsibleai.com/
10. MILA. *Annual Reports 2017–2024*. https://mila.quebec/
11. CIFAR. *Pan-Canadian Artificial Intelligence Strategy*. https://cifar.ca/
12. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. MIT Press.
