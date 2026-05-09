# 书 · 自然语言处理简史

> 把人类语言交给机器，是 AI 最古老、最顽固、也最迷人的梦想。它经历了规则派的傲慢、统计派的反叛、深度学习的吞并，直到 LLM 时代，子领域纷纷凋零，地形被彻底重写。

## 第一幕：词典与剧本——规则派的理想国

故事从一份备忘录开始。1949 年，洛克菲勒基金会自然科学部的主任韦弗（Warren Weaver）写下《翻译》（*Translation*）一文，把语言间的转换比作一份密码：俄文不过是英文穿了俄文的外衣。这份不长的备忘录催生了机器翻译这门学科，也定下了规则派的基调——只要找到足够完整的语法和词典，机器就能"懂"语言。

1954 年的 Georgetown-IBM 实验把六十句俄语翻成了英语，记者们激动地预言"三五年内，翻译问题将被彻底解决"。事实是，整整二十年过去，机器翻译仍困在最简单的句子上。1966 年的 ALPAC 报告几乎一刀斩断了美国的机翻经费。

规则派最迷人的两件作品也诞生于这个年代。1966 年，<Person id="weizenbaum" /> 在 MIT 写出 ELIZA——只用几条简单的模式匹配规则，就把"心理治疗师"演得惟妙惟肖。让魏岑鲍姆震惊的不是程序的聪明，而是用户的轻信：连他的秘书都坚持要他离开房间，以便和 ELIZA "私聊"。这个被后世称为"ELIZA 效应"的现象，至今仍在每一个新发布的聊天机器人身上重演。

1971 年，<Person id="winograd" /> 在 MIT 完成 SHRDLU，一个能在虚拟"积木世界"中理解自然语言指令并执行的程序。"把红色方块放在绿色金字塔旁边的盒子上"——SHRDLU 不仅听懂了，还能反问你"哪一个红色方块？"。这是规则派的巅峰，也是它的天花板：一旦走出积木世界，知识获取的瓶颈就让一切努力崩塌。

## 第二幕：开除语言学家——统计 NLP 的反叛

1980 年代末，IBM 沃森研究中心的 <Person id="jelinek" /> 领导着一支语音识别团队。他后来留下一句被无数次引用的名言："每解雇一个语言学家，我们的系统识别率就提升一点。"（"Every time I fire a linguist, the performance of our speech recognizer goes up."）

杰利内克的团队不是反语言学，而是反"先验地写规则"。他们坚信：与其让人类专家枚举语法，不如让机器在足够大的双语语料上数频次。1990 年前后，IBM 提出五个统计机器翻译模型（IBM Model 1–5），把翻译重新表述为"在源语句给定的条件下，找最大概率的目标语句"。同期，n-gram 语言模型、隐马尔可夫模型（HMM）、最大熵模型纷纷登场。语料库统治了一切。

1990 年代后期，宾夕法尼亚大学的 Penn Treebank 给词性标注与句法分析提供了第一个工业级数据集；2002 年的 BLEU 评测指标让机翻有了可比的"成绩单"。统计 NLP 的胜利不是某一篇论文的胜利，而是评测—数据—竞赛这一整套范式的胜利。

但统计模型也有它的盲区。它擅长"数频次"，却无法表达词与词之间的语义距离；它能算出"国王"和"皇帝"在某些语料里常和"统治"共现，却不知道这两个词本身在意思上几乎是同一个概念。语言的几何结构，仍躺在工具箱之外。

## 第三幕：词的几何——Word2Vec 与向量革命

统计模型再聪明，也只是在数共现。"国王"和"皇帝"被当作两个完全无关的符号，机器永远不知道它们的相似。

2013 年初，谷歌的 Mikolov 团队发布了 Word2Vec。他们用一个简单到令人难以置信的单层神经网络，让每个词学到一个稠密向量，使得"国王 − 男人 + 女人 ≈ 王后"这样的代数式真的成立。词义被嵌入到几何里——这一刻，符号被还原成了向量。

一年后，斯坦福的 Pennington 等人发布 GloVe，用全局共现矩阵分解给出另一条路径。词向量很快成为 NLP 工程师的标准武器：信息检索、命名实体识别、情感分析、相似度计算，几乎所有任务都先用预训练词向量打底。

中文 NLP 也借此东风。北大、清华、哈工大、复旦的实验室相继发布中文词向量、中文分词工具（jieba、THULAC、HanLP），把中文这门"分词即任务"的语言带入了向量时代。

但词向量是静态的——"bank"在"银行"和"河岸"两个语境下是同一个向量。突破语境这道墙，要等到下一阶段。

## 第四幕：序列的时间——RNN、LSTM 与 Seq2Seq

语言是序列。1980 年代末，Elman 等人引入循环神经网络（RNN），让神经网络拥有了"记忆"。但简单 RNN 在长序列上几乎无用——梯度要么消失，要么爆炸。

1997 年，<Person id="schmidhuber" /> 与 Hochreiter 在《Neural Computation》上发表 Long Short-Term Memory（LSTM）。三道门——输入门、遗忘门、输出门——让信息可以在时间上长久流动。这篇论文起初被冷落，二十年后却被引用十万次以上，成为深度学习时代被引用最多的论文之一。

2014 年是 NLP 的转折年。谷歌的 <Person id="sutskever" /> 等人发表 Sequence to Sequence Learning with Neural Networks，用一个 LSTM 编码源语句、另一个 LSTM 解码目标语句，端到端地解决机器翻译。同年，蒙特利尔的 Bahdanau、Cho、<Person id="bengio" /> 在《Neural Machine Translation by Jointly Learning to Align and Translate》中引入注意力机制（Attention）：让解码器在每一步都能"回望"源语句的所有位置，自动决定关注哪里。

注意力，这个不起眼的小机制，将在三年后改变一切。

值得记下的是，2014 年同时发生的还有 GRU（Cho 等）的提出和 Word2Vec 的全面流行。这一年，NLP 学界几乎所有方向都在往神经网络迁移——研究者发表论文的标题里，"deep" 一词出现频率三年内翻了十倍。一个学科的语言风格，正在被一种新的范式覆盖。

## 第五幕：Attention Is All You Need——Transformer 的降临

2017 年 6 月，<Person id="vaswani" /> 等八位谷歌大脑研究员发布《Attention Is All You Need》。论文做了一个在当时近乎鲁莽的决定：完全抛弃 RNN 的循环结构，只用注意力。

Transformer 的关键是自注意力（Self-Attention）：一个序列中任意两个 token 之间都建立直接的连接，距离不再是问题。配以多头机制（Multi-Head）、位置编码（Positional Encoding）和残差结构，Transformer 在 WMT 翻译任务上达到了新的 SOTA，训练速度还成倍提升——因为它天然适合 GPU 并行。

那一年，没有人会预料到，这八个名字会因为一篇会议论文集（NIPS 2017）而被反复念诵。这篇论文也是 NLP 史上少有的"标题改命运"的范本：朴素得几乎像玩笑，却精确得让人无法反驳。

Transformer 不是凭空出现的。它继承了 Bahdanau 注意力的思路、ConvS2S 的并行直觉、key-query-value 的检索隐喻；它真正的创新，是把"注意力"从一个辅助模块提升为唯一的计算原语。这种"做减法"的勇气，比"做加法"的复杂度更难。

## 第六幕：预训练的胜利——BERT 与 GPT

Transformer 提供了引擎，预训练范式提供了燃料。

2018 年 6 月，OpenAI 的 <Person id="radford" /> 发布 GPT（Generative Pre-Training）：先在大量文本上做语言模型预训练，再在下游任务上微调。仅四个月后，谷歌的 <Person id="devlin" /> 发布 BERT（Bidirectional Encoder Representations from Transformers）：双向编码、掩码语言模型预训练，在 GLUE 上一举刷新十一项纪录。BERT 论文被引数十万次，成为整个 NLP 工业的新底座。

GPT 走另一条路。2019 年的 GPT-2 因"too dangerous to release"成为话题，2020 年的 GPT-3 把参数推到 1750 亿，并展示了 in-context learning 的雏形——只需给几个例子，模型就能完成新任务。"预训练 + 提示"取代了"为每个任务标数据 + 微调"。

到 2022 年 ChatGPT 发布时，整个学界终于意识到：NLP 不再是一组分散的子任务，而是一个统一的"用语言指挥模型"的接口。

预训练带来的另一个根本变化，是评测与论文写作方式的重塑。过去十年里，每一个 NLP 子领域都有自己的 SOTA 表格；预训练之后，所有任务汇总到 GLUE/SuperGLUE 的一张大表上。一个新模型若想吸引注意力，必须在这张大表上刷掉旧的数字——研究的节奏，被基准（benchmark）牢牢锁住。

## 第七幕：被吞噬的子领域——LLM 时代的新地形

LLM 的崛起带来了一场静默的灭绝事件。

过去十年里，NLP 是一片繁荣的城邦：分词、词性标注、句法分析、命名实体识别、共指消解、关系抽取、文本摘要、对话系统、机器翻译……每个城邦都有自己的会议、数据集、专门期刊。LLM 来了之后，许多城邦的边界开始溶解。一个稍微像样的 GPT-4 级模型，零样本就能做 NER、做摘要、做翻译，而且常常比专门训练的模型还好。

ACL、EMNLP、NAACL 等顶会的论文主题在两年内剧烈漂移。"如何在 X 任务上提一个点"的论文急剧减少，"如何让 LLM 更可靠 / 更可控 / 更可解释"的论文激增。评测也被重写：HELM、MMLU、BIG-bench、AGIEval 取代了 GLUE / SuperGLUE。Prompt engineering、in-context learning、chain-of-thought、tool use、agent——这些词在五年前几乎没人提起，如今统治了整个研究议程。

并不是所有子领域都被淹没。低资源语言、形态丰富语言、口语对话、多模态语言、可解释性、安全对齐——这些方向反而因为 LLM 而被赋予了新的意义。NLP 没有死，它只是变成了一门关于"大模型 + 语言"的学科。

中文 NLP 在这一波浪潮中也完成了从"翻译跟跑"到"自主供给"的跨越：清华 GLM、智源 Aquila、阿里 Qwen、深度求索 DeepSeek、月之暗面 Kimi、零一万物 Yi、百川 Baichuan——这些名字代表着中文世界第一次在大模型时代有了与英语世界对话的底气。

## 未竟之问

LLM 重塑了 NLP，却没有终结它。我们仍不知道：模型究竟是在"理解"还是在"统计共现"？语义、句法、语用这些古老的语言学概念，是否还能在大模型内部找到对应？低资源语言会被进一步边缘化，还是会在迁移学习中被解放？当模型自信地"翻译"出一段流畅但错误的文字时，我们能否设计出一种和"BLEU"一样可信、却比它深刻得多的新评测？

七十年的路走到这里，机器仿佛"会说话"了，但"懂语言"才刚刚开始被严肃追问。

---

::: tip 太史公曰
余观自然语言处理七十年，三易其主。其始也，规则派据语法以为城——ELIZA、SHRDLU 之辈，巧而不大；其继也，统计派起于语料，杰利内克以"开除一个语言学家"为旗，数据胜于先验，BLEU 取代了人工判读；其终也，深度学习入主，词向量先化符号为几何，LSTM 让序列有了记忆，至 Transformer 一出，群山尽伏。八位作者之论文，标题平淡若童言，而其后果却如山崩海啸——BERT、GPT 相继而起，预训练成了新道统。今之 LLM，吞噬旧城邦如海纳百川——分词、句法、摘要、翻译，皆化为大模型一念之间的副产品。然语言之奥，岂止于此？模型流畅而不解其义，自信而易致幻。后世必须直面一问：所谓"懂语言"，到底是什么？此问不解，纵参数过万亿，仍是巨大的统计鹦鹉。学者宜知：一门学科被吞噬，不是终结，而是被迫升维。NLP 真正的黄金时代，或许才刚刚开始。
:::

## 亲历者说

::: info 征集中
如果你参与过统计 MT、词向量、Transformer 或大模型时代的 NLP 工程实践，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Weaver, W. (1949). *Translation*. Memorandum, Rockefeller Foundation.
2. Weizenbaum, J. (1966). ELIZA—a computer program for the study of natural language communication between man and machine. *Communications of the ACM*, 9(1), 36-45.
3. Winograd, T. (1972). Understanding natural language. *Cognitive Psychology*, 3(1), 1-191.
4. Brown, P. F., Della Pietra, V. J., Della Pietra, S. A., & Mercer, R. L. (1993). The mathematics of statistical machine translation. *Computational Linguistics*, 19(2), 263-311.
5. Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. *Neural Computation*, 9(8), 1735-1780.
6. Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. *arXiv preprint arXiv:1301.3781*.
7. Pennington, J., Socher, R., & Manning, C. D. (2014). GloVe: Global vectors for word representation. *EMNLP 2014*, 1532-1543.
8. Sutskever, I., Vinyals, O., & Le, Q. V. (2014). Sequence to sequence learning with neural networks. *Advances in Neural Information Processing Systems*, 27.
9. Bahdanau, D., Cho, K., & Bengio, Y. (2015). Neural machine translation by jointly learning to align and translate. *ICLR 2015*.
10. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
11. Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *NAACL-HLT*, 4171-4186.
12. Brown, T. B., Mann, B., Ryder, N., et al. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, 33.
