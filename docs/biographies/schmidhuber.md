# 列传 · 施密德胡贝（Jürgen Schmidhuber）

> 他真的早于多数人想到了那些关键的想法，但他坚持告诉所有人这件事，于是世界与他保持了距离。

![施密德胡贝（Jürgen Schmidhuber），2017 年 AI for Good 全球峰会](/images/people/schmidhuber.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## 慕尼黑少年的星辰大海

1963 年 1 月 17 日，于尔根·施密德胡贝（Jürgen Schmidhuber）出生于慕尼黑。少年时代，他迷恋的不是足球与啤酒，而是宇宙。

他向哥哥宣称，自己长大后要建造一台比自己更聪明的人工智能，让它去解决物理学剩下的所有问题，自己则可以舒服地退休。这个略带玩笑意味的愿望，后来成了他一生工作的注脚。

1987 年，他在慕尼黑工业大学（TUM）完成毕业论文，题目就叫《为元学习而进化的元程序》（Evolutionary Principles in Self-Referential Learning），追问的是一个比当时机器学习社区更大的问题：能否构造一个会改写自己学习算法的程序？这种"元元学习"的执念，会贯穿他此后三十多年的研究。

## 1991：被埋藏的论文

1991 年是施密德胡贝学术生涯的关键之年。这一年他完成了 *Habilitation thesis*（德语区教授资格论文），其中的内容今天读来仍然惊人。

他明确分析了循环神经网络（Recurrent Neural Network, RNN）训练中的梯度消失（Vanishing Gradient）问题——这是日后所有深度学习教材都会讲的核心难题。

他还提出用一个"神经历史压缩器"（Neural Sequence Chunker）以无监督方式预测下一时刻的输入，从而将序列压缩到更深的层级——某种意义上，这是后来"自监督学习"（Self-Supervised Learning）的早期版本。

当时几乎没有人读懂这份德语论文。它躺在档案里许多年，直到深度学习再度兴起，人们才回头惊叹：这些想法，他真的写在那里。

## 1997：与霍赫赖特的 LSTM

1997 年，施密德胡贝与他的博士生 Sepp Hochreiter（霍赫赖特）在《Neural Computation》上发表了《Long Short-Term Memory》。

这篇论文给 RNN 装上了一种带"门"（gate）的记忆单元——输入门、遗忘门、输出门——让信息可以在时间步之间稳定地流过几百甚至几千步而不衰减。

LSTM 在投稿时一度被审稿人冷落。它太工程化、太"看起来像凑出来的"。然而二十年后，当语音识别、机器翻译、手写识别等任务一个接一个被深度学习重写时，几乎所有的循环模型都是 LSTM 的变体。

2014–2015 年间，谷歌、苹果、亚马逊、微软先后将 LSTM 部署到搜索、翻译、语音助手中——施密德胡贝喜欢说："你每说一句 Siri，每查一次 Google 翻译，背后都有一个 LSTM 在运转。"按部分统计口径，LSTM 是 20 世纪被引用最多的 AI 论文之一。

施密德胡贝长期在瑞士卢加诺的 Dalle Molle 人工智能研究所（IDSIA）工作。这是一个由意大利富商捐资设立的私立小所，远离硅谷的喧嚣，却培养出了 LSTM、Highway Networks、最早的 GPU CNN 等一系列硬通货成果。

## 优先权：剑指深度学习的版图

如果故事到此结束，施密德胡贝会被记作"LSTM 之父"，与<Person id="hinton" />、<Person id="lecun" />、<Person id="bengio" />并列。但故事没有到此结束。

2015 年，<Person id="hinton" />、<Person id="lecun" />、<Person id="bengio" />在《Nature》上发表了那篇定调式的综述《Deep Learning》。施密德胡贝立刻在 arXiv 上贴出一篇措辞激烈的回应，逐条质疑。

他认为反向传播（Backpropagation）的某些早期形式、卷积网络的某些前身、注意力机制（Attention）的早期形式——都在他的 1990 年代论文中出现过。他罗列了《Deep Learning》一文中"应当被引用却没有被引用"的工作，几乎像在打一场学术官司。

此后十年，他几乎在每一个深度学习的里程碑上都举旗主张优先权：他认为生成对抗网络（GAN）的核心思想，可追溯到他 1990 年代的 *Adversarial Curiosity* 与 *Predictability Minimization*；他认为 ResNet 的"跨层连接"，是他与博士生 Rupesh Srivastava 在 2015 年 *Highway Networks* 中提出的特例；他认为 Transformer 中的"线性注意力"，对应他 1991 年的 *Fast Weight Programmers*。

学界对这些主张反应分裂。有人详读他的旧论文，承认其中确有惊人的预见性；也有人认为，他的早期工作虽含相关思想，但与今天的实现之间隔着许多关键的工程化跃迁，"提到过"与"做出来并被世界采用"是两件不同的事。

## 太史公曰之外的太史公曰

2018 年图灵奖（Turing Award）颁给了<Person id="hinton" />、<Person id="lecun" />、<Person id="bengio" />，未授施密德胡贝。他在多次访谈中直言不讳，认为这是一次明显的疏漏。一句被他反复使用的自嘲，后来在网络上广为流传：*"the father of deep learning has not won the Turing Award."*（"深度学习之父没有得到图灵奖。"）

这种近乎执拗的姿态，让他在社交媒体上常被同行称为"Schmidhubering"——一个被造出来的动词，专指"在别人发表新成果时跳出来声称自己更早做过"。深度学习社区的恩怨史中，专门有一组流传的截图与回复，被半戏谑地命名为 *The Schmidhuber Files*。

## 后来：沙漠中的 KAUST 与大模型时代

2021 年，施密德胡贝离开 IDSIA 的全职岗位，前往沙特阿拉伯阿卜杜拉国王科技大学（KAUST），出任新成立的 AI 倡议（AI Initiative）主任。从阿尔卑斯山脚到红海之滨，他试图在中东建立一个新的 AI 重镇。

大模型（Large Language Model, LLM）时代到来后，他的主张有了新的版本。

他多次撰文指出，所谓"涌现能力"（emergent capability）在他 1990 年代关于"压缩即智能"（compression as intelligence）的理论框架下并不令人意外；他把 ChatGPT 视为 LSTM、Transformer 等思想的工程集成，而非范式革命。

这些观点未必都被广泛接受，但它们至少提醒人们：今日的 AI 并非凭空降临，每一行代码背后都站着几代人的草稿。

## 代表性著作

| 年份 | 作品 | 意义 |
|------|------|------|
| 1991 | *Habilitation Thesis*, TU München | 分析梯度消失，提出神经历史压缩器（早期自监督） |
| 1992 | "Learning to Control Fast-Weight Memories", *Neural Computation* | 提出 Fast Weight Programmers，被视为线性注意力前身 |
| 1997 | Hochreiter & Schmidhuber, "Long Short-Term Memory", *Neural Computation* | 提出 LSTM，开启 RNN 实用化时代 |
| 2015 | Srivastava, Greff & Schmidhuber, "Highway Networks" | 跨层门控连接，被视为 ResNet 思想前身 |
| 2015 | "Deep Learning in Neural Networks: An Overview", *Neural Networks* | 长达 88 页的深度学习综述，含大量历史溯源 |

## 太史公曰

::: tip 太史公曰
施密德胡贝是深度学习史上最不安分的人。他在阿尔卑斯山脚的小所里写下了那些日后改变世界的方程，却用了三十年与世界争论那些方程究竟是谁先写下的。LSTM 是真实的，梯度消失的洞察是真实的，他对元学习与压缩理论的执念也是真实的——这些贡献足以让他名留青史。然而他选择了一条少有人走的路：不仅创造，还要确保每一次创造都被正确地记下他的名字。这种执拗在小情境下令人敬佩，在大舞台上则常被视作越界。司马迁在《史记》中为游侠立传，称他们"言必信，行必果，已诺必诚，不爱其躯"——施密德胡贝是深度学习时代的一种游侠：他护卫的不是江湖朋友，而是一份份被他认为应当属于他的引用。这种姿态让他与"三巨头"始终隔着一道墙，墙的两边都有委屈，也都有真实。技术史不会因为热闹而失真——它会在足够长的时间之后，把每一份贡献摆回它应当的位置。
:::

## 亲历者说

::: info 征集中
如果你了解施密德胡贝的第一手资料或相关回忆，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Hochreiter, S., & Schmidhuber, J. (1997). "Long Short-Term Memory." *Neural Computation*, 9(8), 1735–1780.
2. Schmidhuber, J. (1991). *Habilitation thesis*: "Reinforcement Learning and Subgoal Discovery". Technische Universität München.
3. Schmidhuber, J. (1992). "Learning to Control Fast-Weight Memories: An Alternative to Dynamic Recurrent Networks." *Neural Computation*, 4(1), 131–139.
4. Schmidhuber, J. (2015). "Deep Learning in Neural Networks: An Overview." *Neural Networks*, 61, 85–117.
5. Srivastava, R. K., Greff, K., & Schmidhuber, J. (2015). "Highway Networks." *arXiv:1505.00387*.
6. Schmidhuber, J. (2015). "Critique of Paper by 'Deep Learning Conspiracy' (Nature 521 p 436)." people.idsia.ch/~juergen/deep-learning-conspiracy.html
7. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep Learning." *Nature*, 521, 436–444.
8. Schmidhuber, J. (2022). "Annotated History of Modern AI and Deep Learning." *arXiv:2212.11279*.
9. KAUST AI Initiative announcement (2021). King Abdullah University of Science and Technology.
