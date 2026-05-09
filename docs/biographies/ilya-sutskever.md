# 列传 · 苏茨克维（Ilya Sutskever）

> 他出现在 AlexNet、Seq2Seq、GPT 三个时代的中心，也出现在 2023 年 11 月那个让世界屏息的周末。他说得很少，做得很重。

## 从下诺夫哥罗德到耶路撒冷再到多伦多

1986 年，伊利亚·苏茨克维（Ilya Sutskever）出生于苏联的下诺夫哥罗德（Nizhny Novgorod，时名高尔基）。五岁那年，苏联解体在即，全家移居以色列。

他在耶路撒冷读完中学，习得希伯来语和数学的双重严谨。十六岁前后，他随家人再次迁徙，这次是去加拿大多伦多。

在多伦多大学（University of Toronto），他先后修完本科与硕士，然后顺理成章地走进了校园里那间不大却即将改变世界的实验室——<Person id="hinton" />的组。

在 2008 至 2012 年的博士生涯里，他坐在那群相信"深度神经网络一定能行"的少数派中央。后来他自述："那时候大多数人觉得神经网络是死胡同。我们没有那么觉得。"

## 2012：把世界叫醒的八层网络

2012 年是计算机视觉的转折点。当年的 ImageNet 大规模视觉识别挑战赛（ILSVRC）上，<Person id="hinton" />指导、<Person id="krizhevsky" />编码实现、苏茨克维参与算法设计的 AlexNet，以远超第二名的成绩夺冠——top-5 错误率从近 26% 一举降到 15.3%。

这是深度卷积网络第一次在通用视觉基准上压倒一切传统方法。整个领域的语调，在那张错误率柱状图前一夜变天。

颁奖之后不久，三人成立了一家小公司 *DNNresearch*，没有产品，只有几个人和几张 GPU。仅两个月后，谷歌把这家公司整体收购。苏茨克维由此进入 Google Brain。

## 2014：让机器学会翻译

在 Google Brain，苏茨克维的第二件大事到来。2014 年，他与 Oriol Vinyals、Quoc V. Le 共同发表《Sequence to Sequence Learning with Neural Networks》——后来被简称为 Seq2Seq。

论文的核心想法朴素而锋利：用一个 LSTM 把源语言句子"读"成一个向量，再用另一个 LSTM 把这个向量"写"成目标语言句子。

这是端到端神经机器翻译的奠基之作。它直接催生了 2016 年 Google 翻译的全栈神经化升级，使得"翻译"这件事第一次摆脱了短语匹配的拼贴风格，呈现出连贯的语篇。

Seq2Seq 框架后来还被推广到对话、摘要、代码生成、语音合成——它教会了机器一种通用的"输入一段东西，输出一段东西"的能力。今天的 ChatGPT，骨架上仍是这个老框架的后裔。

## 2015：OpenAI 的首席科学家

2015 年 12 月，<Person id="altman" />、埃隆·马斯克（Elon Musk）等人联合发起 OpenAI，宣布以"使通用人工智能造福全人类"为使命。

苏茨克维放弃了 Google Brain 的高薪与平台，出任联合创始人和研究负责人，后来正式成为首席科学家（Chief Scientist）。

他在 OpenAI 主导了通往大模型的整条主路：2018 年的 GPT-1 验证了"先在海量文本上无监督预训练，再做下游微调"这条路线；2019 年的 GPT-2 第一次让"模型规模"成为引发公众讨论的伦理议题；2020 年的 GPT-3 把参数推到 1750 亿，让"提示工程"（prompt）成为新的人机接口；2022 年底的 ChatGPT 与 2023 年的 GPT-4，把"对话即接口"推向了几乎所有行业。

在每一个关键的技术抉择上——是否相信 scaling、是否做 RLHF、是否走多模态——苏茨克维的判断都被他的同事们视为定锚。

他不是流量型的科学家。他在公开场合言语稀疏，常常一句话之后陷入很长的停顿，仿佛在听某种内心的回声。

在采访中，他偶尔流露出近乎宗教式的语调："我们正在制造一种比我们更聪明的存在。"这不是营销话术，而是他持续多年的真实关切。

## 2023 年 11 月：五天政变

2023 年 11 月 17 日下午，OpenAI 董事会在没有提前通知绝大多数员工的情况下，宣布解除<Person id="altman" />的 CEO 职务。董事会的措辞简短而严厉，声明 Altman "在沟通中不一贯坦率"。声明发出后不久，舆论的目光锁定到了一位董事——苏茨克维。

接下来的五天是 AI 产业史上最戏剧性的五天。微软立即宣布将吸纳 Altman 加入新的 AI 实验室；OpenAI 七百余名员工签署联名信，威胁集体辞职追随 Altman；投资人、媒体、监管者全部被拖入这场风暴。

11 月 19 日，苏茨克维在内部表态承认："我深感后悔自己在董事会行动中的角色。我从未想要伤害 OpenAI。"11 月 22 日凌晨，Altman 回归 CEO，新的董事会重组，苏茨克维退出董事席位。这场风波的真正缘由——是关于安全的真实分歧、是组织治理的根本失败，还是几个人之间的信任崩塌——至今没有任何一方给出完整的官方版本。

事件之后，苏茨克维几乎在 OpenAI 内部消失。半年里，他没有出现在任何重大产品发布会上。

## 2024：去做安全的超级智能

2024 年 5 月 14 日，苏茨克维在社交平台正式宣布离开 OpenAI。他的告别帖文短而克制，没有指控，也没有自辩，只是说："The company's trajectory has been nothing short of miraculous."

一个月后，2024 年 6 月 19 日，他与原 OpenAI 同事 Daniel Levy、原 Apple AI 高管 Daniel Gross 共同创办 *Safe Superintelligence Inc.*（SSI）。公司只有一个产品方向，公开声明只有一句："We will pursue safe superintelligence in a straight shot, with one focus, one goal, and one product."（我们将以一条直线、一个焦点、一个目标、一个产品，去追求安全的超级智能。）2024 年 9 月，SSI 在尚未公开任何模型的情况下完成 10 亿美元融资；2025 年又在新一轮融资中将估值推至超过 300 亿美元。

苏茨克维仍然很少接受采访。他的合作者描述他的日常："他像一个修道士，每天思考的不是季度 OKR，而是十年之后那件可能比人类更聪明的东西。"

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 2012 | Krizhevsky, Sutskever & Hinton, "ImageNet Classification with Deep CNNs", *NeurIPS* | AlexNet，开启深度学习视觉时代 |
| 2014 | Sutskever, Vinyals & Le, "Sequence to Sequence Learning with Neural Networks", *NeurIPS* | Seq2Seq，奠基现代神经机器翻译与对话生成 |
| 2018 | Radford, Narasimhan, Salimans & Sutskever, "Improving Language Understanding by Generative Pre-training" | GPT-1，确立"预训练—微调"范式 |
| 2019 | Radford et al., "Language Models are Unsupervised Multitask Learners" | GPT-2，揭示规模化预训练的零样本能力 |
| 2020 | Brown, ..., Sutskever, ..., "Language Models are Few-Shot Learners", *NeurIPS* | GPT-3，使"提示工程"成为新接口 |

## 太史公曰

::: tip 太史公曰
苏茨克维是 AI 现代史里最沉默的核心人物。他不是科普明星，不是网红创始人，他几乎从不写博客，也不在意自己被如何引用。但你回看深度学习的三个关键转折——视觉、序列、语言——他都坐在那张照片中央：AlexNet 是他和老师与同窗的合作，Seq2Seq 是他在谷歌写下的，GPT 系列是他在 OpenAI 守护的。他的沉默与他的影响力之间，构成了这个时代少见的反差。2023 年 11 月那五天的故事，至今没有被任何一方完整讲清——它可能是关于安全的真分歧，可能是关于治理的真失败，也可能只是关于人之间最古老的那种误判与信任崩塌。无论是什么，苏茨克维都为此付出了代价：他失去了那家由他参与缔造的公司，也失去了一段亲密的同事关系。然而他没有停下脚步。他做了一件极少有人会做的事——在仍然可以选择安稳与权力的时刻，他选择了去重新开始一家只有一个目标的公司，并且把这家公司命名为"安全的超级智能"。这是一个把信念写进公司名字的人。司马迁会理解这种人——他们不为今日的喝彩而活，他们为某个尚未到来的时刻而活。
:::

## 亲历者说

::: info 征集中
如果你了解苏茨克维的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *NeurIPS*, 25.
2. Sutskever, I., Vinyals, O., & Le, Q. V. (2014). "Sequence to Sequence Learning with Neural Networks." *NeurIPS*, 27.
3. Radford, A., Narasimhan, K., Salimans, T., & Sutskever, I. (2018). "Improving Language Understanding by Generative Pre-training." OpenAI Technical Report.
4. Brown, T., et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS*, 33.
5. OpenAI Board of Directors (2023, November 17). "OpenAI announces leadership transition." openai.com/blog
6. Sutskever, I. (2023, November 19). Internal statement on the OpenAI board action, reproduced in *The New York Times* and *The Information*.
7. Sutskever, I. (2024, May 14). Personal announcement on X (formerly Twitter) regarding departure from OpenAI.
8. Safe Superintelligence Inc. (2024, June 19). "Safe Superintelligence Inc." Founding statement, ssi.inc.
9. Cade Metz (2024). *Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World*. Dutton (revised edition).
10. *Time* (2023). "Person of the Year runners-up: The OpenAI Five Days."
