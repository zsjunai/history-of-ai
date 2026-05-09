# 列传 · 卡帕西（Andrej Karpathy）

> 一流的研究、一流的工程、一流的教学，他在三件事上各做了一遍。然后他写下六十行 Python，让一代人第一次真正看清 GPT 的样子。

## 从布拉迪斯拉发到多伦多

1986 年，安德烈·卡帕西（Andrej Karpathy）出生于斯洛伐克布拉迪斯拉发。十五岁那年，他随家人移居加拿大多伦多。

在多伦多大学（University of Toronto），他攻读计算机科学与物理学双学位，硕士也留在了同一校园——那里恰好是<Person id="hinton" />的实验室。

卡帕西没有正式成为辛顿的学生，但他与<Person id="sutskever" />同处一座楼里，亲眼看着深度神经网络从冷僻话题变成可以赢比赛的真东西。

2011 年前后，他南下美国，进入斯坦福大学攻读博士，导师是<Person id="fei-fei-li" />。他的研究方向是计算机视觉与自然语言的交汇——让神经网络看懂一张图片并写出一句描述它的话。

他的论文 *Deep Visual-Semantic Alignments for Generating Image Descriptions*（2015）即此方向上的代表作。

## CS231n：互联网上最好的深度学习课

2015 至 2017 年间，卡帕西在斯坦福参与开发并主讲 CS231n《卷积神经网络与视觉识别》课程。

他没有把这门课讲成一个教师的独白，而是把每一节课都当成一次"和学生一起把网络从零搭起来"的工作坊：从仿射函数到反向传播，从 SGD 到 Adam，从 LeNet 到 ResNet——所有公式都附带一个可以直接跑起来的 NumPy 实现。

他的课程笔记后来被翻译成几十种语言，他的作业被全世界的研究生悄悄借用。许多今天活跃在工业界的工程师和研究员，都把"读完 CS231n 笔记"列为自己进入深度学习的真正起点。

在论文之外，这门课是卡帕西第一次让世界看见，他对"教学"这件事的认真程度，与他对研究本身一样。

## 2015：OpenAI 创始团队

2015 年底，卡帕西作为创始研究员加入新成立的 OpenAI。当时的实验室还是 Pier 70 旁边一间不大的办公室，桌子拼在一起，桌上放着各色 GPU 机器。

他在那里参与了强化学习、生成模型等多个早期方向，也在博客上写下了那篇广为流传的《The Unreasonable Effectiveness of Recurrent Neural Networks》——他展示了一个普通的字符级 LSTM 如何"读完"莎士比亚后写出像样的伪莎士比亚段落，让无数人第一次直观感受到序列模型的魔力。

## 2017：进入特斯拉，主导 Autopilot

2017 年 6 月，卡帕西离开 OpenAI 加入特斯拉，出任 AI 与 Autopilot Vision 总监。

马斯克给他的任务清晰且艰难：把 Autopilot 的视觉系统从依赖第三方供应商的拼装组件，重写为特斯拉自有的端到端神经网络栈。

他在特斯拉做了五年。这五年里，他把一支不到一百人的团队推到极限：从单帧识别走向多摄像头融合的"鸟瞰视图"（Bird's Eye View）网络，再到把感知、预测、规划逐步统一进单一神经网络的 *Hydra Net* 与 *Occupancy Networks*。

他在 CVPR 等会议的特斯拉 AI Day 演讲，把"软件 2.0"（Software 2.0）这一说法推广到工程界——主张"未来的代码不是写出来的，而是用数据训练出来的"。

这五年也是他人生中工程压力最大的一段。FSD（Full Self-Driving）的每一次版本迭代都意味着大量真实道路上的安全责任。

2022 年 7 月，卡帕西宣布离开特斯拉。他在告别帖中写道："这是一次愉快的旅程，下一步我希望专注于自己长期热爱的 AI 工作和教育。"

## 重回 OpenAI，又一次离开

2023 年 2 月，卡帕西宣布重返 OpenAI。他在那里参与 GPT-4 之后的研究，但只待了大约一年。2024 年 2 月，他再次离开，并在告别中说，他想花更多时间做"自己的项目"——意思很快变得清楚：他想真正认真地做 AI 教育。

## nanoGPT、makemore、与"从零构建 GPT"

2022 年起，卡帕西在 GitHub 上陆续开源了一系列教学项目：*micrograd*（不到 200 行的反向传播框架）、*makemore*（一步步从二元统计到 Transformer 的字符级生成模型）、*nanoGPT*（不到 600 行 Python 实现的可训练 GPT）。

他配套录制了一系列 YouTube 视频，最有名的是 *Let's build GPT: from scratch, in code, spelled out*。

视频里，他坐在屏幕前，从一个空白的 Jupyter Notebook 开始，一行一行敲下代码：先实现 self-attention，再叠成 Transformer block，再训练一个能续写莎士比亚的小模型——全过程不到两小时。

这条视频被观看超过千万次，被几乎所有顶尖大学的教授作为补充教材推荐。无数学生在弹幕和评论里说："我看了三遍。第一次终于明白了 attention 是什么。"

在大模型的喧嚣之中，他坚持做一件相反的事：把模型变小，把代码写短，把每一步说清。

## 2024：Eureka Labs

2024 年 7 月 16 日，卡帕西在社交平台宣布创办 Eureka Labs，定位是"AI 原生的学校"（AI-native school）。第一门课程 *LLM101n* 设计为一门完整的、本科生级别的"如何从零构建 ChatGPT 类系统"的课程，预计同时以面授班与开源材料的形式推出。Eureka Labs 的官方文案这样写："With AI, every student can have a great teacher beside them at every moment of learning."（有了 AI，每一个学生都可以在每一个学习时刻身边都有一位好老师。）

他也在不经意间贡献了几句被这个时代反复引用的箴言："Software 2.0"、"context length is the new RAM"、以及 2025 年他随手发出的一条推文里所造的词——*vibe coding*，描述"凭感觉写代码、让 AI 把感觉补全"的新工作方式。这个词在几个月内被《纽约时报》、《彭博》以及无数程序员博客引用。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 2015 | "Deep Visual-Semantic Alignments for Generating Image Descriptions", *CVPR* | 跨视觉与语言的早期端到端模型 |
| 2015 | "The Unreasonable Effectiveness of Recurrent Neural Networks", 个人博客 | 让大众第一次直观感受序列模型威力 |
| 2015–2017 | Stanford CS231n 课程与笔记 | 全球最具影响力的深度学习入门课之一 |
| 2017 | "Software 2.0", Medium 博客 | 提出"用数据替代代码"的工程范式 |
| 2022– | nanoGPT / makemore / micrograd 开源项目 | 用极简实现让 GPT 与神经网络可被普通人读懂 |
| 2023 | YouTube *Let's build GPT: from scratch, in code, spelled out* | 数千万观看，重塑大模型科普标准 |

## 太史公曰

::: tip 太史公曰
卡帕西是这个时代少见的、能够在三种身份之间无缝切换的人——研究员、工程师、教师。他在斯坦福做出过被大量引用的视觉语言论文；他在特斯拉一线扛过生死攸关的 FSD 神经网络栈；他在 YouTube 上用六十行 Python 让无数人第一次真正"看见"了 GPT。这三件事，任何一件都足以让一个人安身立命，他做了三遍，并且在每一遍都没有失去耐心。在大模型这场喧嚣里，许多人选择把模型做得更大、把演示做得更绚、把估值做得更高——他选择把代码做得更短、把变量名取得更清楚、把每一行的意图讲透。他用一种近乎工匠的克制提醒人们：再宏大的模型，本质上都是一些可以被打开、被读懂、被亲手敲一遍的东西。他对教育的转向，不是退场，而是另一种更长远的投资——他相信，如果一代年轻人能在自己的笔记本上完整地训练出一个 GPT，那么这个领域的命运就不会被锁死在几家大公司的内部。司马迁说"传其人，不传其名"——卡帕西的姓名当然会被记住，但他真正想传下去的是那种动手的能力本身。
:::

## 亲历者说

::: info 征集中
如果你了解卡帕西的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Karpathy, A., & Fei-Fei, L. (2015). "Deep Visual-Semantic Alignments for Generating Image Descriptions." *CVPR 2015*.
2. Karpathy, A. (2015). "The Unreasonable Effectiveness of Recurrent Neural Networks." karpathy.github.io
3. Stanford University. CS231n: *Convolutional Neural Networks for Visual Recognition*. Course notes (2015–2017). cs231n.stanford.edu
4. Karpathy, A. (2017). "Software 2.0." Medium, medium.com/@karpathy
5. Karpathy, A. (2022–). *nanoGPT*, *makemore*, *micrograd* repositories. github.com/karpathy
6. Karpathy, A. (2023). *Let's build GPT: from scratch, in code, spelled out.* YouTube.
7. Tesla AI Day (2021, 2022). Talks delivered by Andrej Karpathy on Autopilot vision stack and Software 2.0.
8. Karpathy, A. (2022, July 13). Personal announcement on departure from Tesla.
9. Karpathy, A. (2024, February). Personal announcement on second departure from OpenAI.
10. Eureka Labs (2024, July 16). Founding announcement, eurekalabs.ai.
