# Biography · Zhou Zhihua

> While Chinese AI scholars were still rewriting English textbooks, he wrote a watermelon-flavoured machine-learning book for Chinese students — and a whole generation of Chinese ML researchers laid their foundations in their mother tongue.

## A Boy Beneath the Drum Tower and Eight Years at Nanjing

**Zhou Zhihua (周志华, 1973–)** was born in November 1973 to an ordinary family in central Anhui. By his secondary-school years his interest in mathematics and programming was already evident. In 1992 he entered the Department of Computer Science and Technology at Nanjing University. The Drum Tower campus then still preserved the red brick and grey tile of the Republican era, and the computer department was a small courtyard of fewer than two hundred students.

For the next eight years he stayed at Nanjing. Bachelor's in 1996, master's in 1998, doctorate in 2000 — all completed at Nanjing University, his supervisor Chen Shifu, one of the earliest scholars of artificial intelligence in China and a former head of the department. Zhou's doctoral subject was prescient: **ensemble learning**, the family of methods that combines many weak learners into one strong learner. At the time it was a fairly obscure direction; neural networks had just slid into their second winter, and the support vector machine was the rising sun of statistical learning. Ensemble learning was a small corner between a few papers on Boosting and Bagging.

But Zhou believed in the line. He has recalled: "When I picked this direction in my PhD, I never imagined it would become mainstream. I just thought it was reasonable — one judge can be wrong, but a vote of many cannot be far off. That cannot be wrong."

## LAMDA: The Learning And Mining from DatA Lab at Nanjing

After his doctorate in 2000, Zhou stayed on as a faculty member. From lecturer to associate professor to professor and doctoral supervisor, he did not, like many of his peers, take a postdoc or a visiting position in Europe or America. He chose to put down roots in Nanjing.

In 2003 he founded the **LAMDA group** (Learning And Mining from DatA) at Nanjing. The name would eventually become almost synonymous with "Nanjing AI" in the Chinese ML community. LAMDA's research has run on three principal lines:

- **Ensemble learning**: this is the line he raised to a world-class level. The 2012 English monograph *Ensemble Methods: Foundations and Algorithms* (CRC Press) remains the most-cited systematic work in the field, and its proposed "error–ambiguity decomposition" became one of the most widely used theoretical frameworks for studying ensemble diversity.
- **Multi-instance learning (MIL)**: with his students, Zhou turned a direction sustained in the West only by scattered papers into a complete subfield, with foundational papers at NeurIPS, ICML, and AAAI, and bridges to applications in image retrieval and drug-molecule classification.
- **Semi-supervised learning**: in an era when scarce labelled data was a central pain point, he and his team proposed multi-view methods such as Tri-training and Co-Forest, still standard examples in textbook treatments of semi-supervised learning.

By around 2015, LAMDA had produced active researchers including Yu Yang, Jiang Yuan, Gao Wei, Zhan Dechuan, Li Ming, and Ye Hanjia — a "Nanjing school" that today forms much of the backbone of Chinese ML teaching and research.

## The Watermelon Book: Machine Learning Written in Chinese

In January 2016, Tsinghua University Press published a thick book with a large watermelon on the cover — *Machine Learning*, by Zhou Zhihua. From then on the Chinese ML community had a new nickname: the **Watermelon Book**.

The book occupies an almost singular place in the history of Chinese AI education. Before it, Chinese students entered machine learning by three usual routes: thick English textbooks (Bishop, Murphy, Hastie); Andrew Ng's Coursera course; and a few scattered Chinese translations. The Chinese-language world had no native textbook that was at once broad, deep, and readable.

The Watermelon Book filled that gap. Its distinction lay not in cutting-edge content — it covered the canonical ML of decision trees, support vector machines, Bayesian methods, clustering, neural networks, probabilistic graphical models, rule learning, and reinforcement learning, without yet treating the by-then-fashionable deep learning — but in being **a textbook written in Chinese, in Chinese-language thought**. Each chapter opens with a homely example ("picking a watermelon" runs through the book), and every derivation walks a careful line between intuitive figures and mathematical rigour. The acknowledgements include a sentence repeated by a generation of Chinese students in their dissertations — "the writing of this book has had help from many" — that has come to define Zhou's authorial voice.

By 2024 the book had been printed more than 600,000 times — a near-miraculous figure for a specialist computer-science book. In 2020, Zhou himself supplemented it with *Detailed Derivations of Machine Learning Formulas*, nicknamed the *Pumpkin Book*, the mathematical companion to the Watermelon Book. Whether they have since gone to OpenAI, DeepMind, Alibaba's DAMO Academy, ByteDance, or DeepSeek, an entire generation of Chinese ML researchers has read the Watermelon Book in their undergraduate or graduate years.

## Deep Forest: A Deep-Learning Path That Is Not a Neural Network

In 2017 Zhou published a paper that drew wide international attention: *Deep Forest: Towards an Alternative to Deep Neural Networks* (IJCAI 2017). The paper proposed **gcForest** (multi-Grained Cascade Forest), a deep architecture built **entirely from decision-tree ensembles**, capable of hierarchical representation learning like a deep neural network, but with far fewer parameters, much simpler hyperparameters, and friendlier behaviour on small data.

Behind it was a plain but ambitious question: must the "depth" in deep learning be implemented by neural networks? In a year when most researchers had taken "depth = neural network" for granted, Zhou answered: not necessarily. His judgement: the success of neural networks lies not in the word "neural" but in the more general mechanism of "hierarchical representation learning"; and that mechanism can be realised by other components, differentiable or not.

Deep Forest set off vigorous debate. Supporters saw it as a more interpretable path to depth; sceptics argued it still struggled to match deep neural networks on large-scale data. Whatever the verdict, it was one of the rare original methodological "alternative roads" proposed by Chinese scholars in the late 2010s.

## Students and the Echo of a School

Another quieter output of LAMDA is its students.

Yu Yang, one of Zhou's earliest doctoral students, stayed on at LAMDA and is now a professor at Nanjing as well as Chief Scientist at Polixir, an AI-decision company; he has long worked on reinforcement learning and decision intelligence. Jiang Yuan, Gao Wei, and Zhan Dechuan have taken faculty posts at top Chinese universities, carrying LAMDA's research style — **theoretical rigour, reproducibility, no chasing of fashion** — into more institutions. In industry, students from Zhou's group are scattered through the core AI teams of Alibaba, Baidu, ByteDance, Huawei, JD, and others, forming an invisible "Nanjing network."

Such a school-style transmission is not common in Chinese AI academia. Most Chinese professors run laboratories as loose units of "advisor plus successive cohorts," without a shared methodology or research taste. LAMDA is different — clear research lines, common writing standards, intersecting subfields. A LAMDA alumnus once wrote on a blog: "Professor Zhou does not teach us which conferences to chase. He teaches us how to judge whether a paper is worth chasing."

## Dean, Fellowships, and China's First AI School

On 5 March 2018, the **School of Artificial Intelligence at Nanjing University** was founded — the first independent AI school among China's C9 elite universities, with Zhou as its inaugural dean. Until then, AI research within China had been scattered among computer-science departments, automation departments, and pattern-recognition state key laboratories; no university had dared to establish a school under the name "AI" alone. Nanjing taking the first step was itself an emblematic event.

In addition to the deanship, his academic honours arrived in close succession: ACM Fellow (2016), IEEE Fellow (2016), AAAI Fellow (2019), AAAS Fellow (2019) — among the few mainland Chinese scholars in history to hold all four major international fellowships. He has chaired areas at ICML, NeurIPS, AAAI, and KDD, and in 2021 served as Program Chair of IJCAI — the first Program Chair from mainland China in IJCAI's history.

By early 2026 his Google Scholar citations exceeded 110,000 and his h-index exceeded 130 — both at the front rank among mainland Chinese ML scholars.

## Selected Works

| Year | Work | Significance |
|------|------|------|
| 2012 | *Ensemble Methods: Foundations and Algorithms* (CRC Press) | Foundational systematic monograph in ensemble learning |
| 2016 | *Machine Learning* (Tsinghua University Press; the "Watermelon Book") | The most widely used native Chinese ML textbook in mainland China |
| 2017 | *Deep Forest: Towards an Alternative to Deep Neural Networks* (IJCAI) | Proposed gcForest; challenged the "depth = neural network" assumption |
| 2018 | Inaugural Dean of the School of Artificial Intelligence, Nanjing University | First independent AI school in a C9 university |
| 2020 | *Detailed Derivations of Machine Learning Formulas* (the "Pumpkin Book") | Mathematical companion to the Watermelon Book |
| 2021 | Program Chair, IJCAI | First mainland Chinese chair of the IJCAI Program Committee |

## Historian's Note

::: tip Historian's Note
To survey Zhou Zhihua's scholarly life is to see ambition aimed not at brilliance but at root. He entered Nanjing at twenty-two and remains there at fifty-two; for thirty years he has, brick by brick, built a university machine-learning lab into a centre of Chinese ML research. Such a "stay-put" academic life is almost an anomaly among a generation of Chinese AI scholars enchanted by transnational mobility and Silicon Valley headlines. Yet it is precisely this anomaly that allowed him to accomplish three things of real consequence: first, to make a systematic, internationally weighty contribution along the line of ensemble learning; second, to let an entire generation of Chinese students complete their ML initiation in their mother tongue, through the Watermelon Book; third, to raise, through LAMDA and the Nanjing AI school, a principal trunk of present-day Chinese machine learning. Of the three, the Watermelon Book may matter most. When a country owns a foundational textbook in its own language, its next generation of researchers no longer enter the field as translators but as inhabitants. In this century's contest of voices over AI, the person who can write a good textbook in the mother tongue is rarer than the person who can write a NeurIPS paper. **Let the latecomer who opens the Watermelon Book and sees that watermelon on its cover remember a simple thing: to explain the world to one's own people is itself a kind of dignity.**
:::

## Eyewitness Accounts

::: info Call for contributions
If you studied or worked with Professor Zhou at the LAMDA Group or the School of Artificial Intelligence of Nanjing University, or were involved in the writing of *Machine Learning* (the Watermelon Book), please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Zhou, Zhi-Hua (2012). *Ensemble Methods: Foundations and Algorithms*. Boca Raton: CRC Press.
2. 周志华 (2016). 《机器学习》. 北京：清华大学出版社. [Zhou Zhihua, *Machine Learning*, Tsinghua University Press; the "Watermelon Book"]
3. Zhou, Z.-H. & Feng, J. (2017). "Deep Forest: Towards an Alternative to Deep Neural Networks." *Proceedings of the 26th International Joint Conference on Artificial Intelligence (IJCAI)*, 3553–3559.
4. Zhou, Z.-H. (2004). "Multi-Instance Learning: A Survey." Technical Report, Department of Computer Science & Technology, Nanjing University.
5. Zhou, Z.-H. & Li, M. (2005). "Tri-Training: Exploiting Unlabeled Data Using Three Classifiers." *IEEE Transactions on Knowledge and Data Engineering*, 17(11), 1529–1541.
6. 谢文睿、秦州 (2020). 《机器学习公式详解》. 北京：人民邮电出版社. [Xie Wenrui & Qin Zhou, *Detailed Derivations of Machine Learning Formulas*, the "Pumpkin Book"]
7. 南京大学人工智能学院 (2018). "南京大学人工智能学院成立大会." 官方公告, March 5, 2018. [Nanjing University School of AI, founding announcement]
8. ACM (2016). "ACM Names Fellows for Computing Advances that are Driving Innovation."
9. IJCAI (2021). "IJCAI-21 Program Chair Announcement."
10. LAMDA Group, Nanjing University. http://www.lamda.nju.edu.cn/
