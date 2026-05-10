# Biography · Jürgen Schmidhuber

> He really did think of many of the key ideas before most others — and he insisted on telling everyone so, and so the world has kept its distance.

![Jürgen Schmidhuber, AI for Good Global Summit, 2017](/images/people/schmidhuber.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## A Munich Boy and the Stars

**Jürgen Schmidhuber (1963–)** was born in Munich on 17 January 1963. As a youth he was less interested in football and beer than in the cosmos.

He told his brother that when he grew up, he was going to build an artificial intelligence smarter than himself, then have it solve every remaining problem in physics so that he could retire in comfort. The half-joking wish became a footnote to his life's work.

In 1987 he completed his diploma thesis at the Technical University of Munich (TUM), titled *Evolutionary Principles in Self-Referential Learning*. It pursued a question larger than the machine-learning community of the time: could one construct a program that rewrites its own learning algorithm? This obsession with "meta-meta-learning" would run through his work for the next three decades.

## 1991: A Buried Thesis

1991 was a hinge year for Schmidhuber. That year he completed his Habilitation thesis (the German-speaking academy's qualifying work for professorship), the contents of which still astonish today's reader.

He explicitly analysed the vanishing-gradient problem in training recurrent neural networks (RNNs) — the central difficulty that every later deep-learning textbook would treat as a chapter of its own.

He also proposed a "neural sequence chunker," an unsupervised predictor of the next moment that would compress a sequence into a deeper hierarchy — in a sense an early version of what would later be called self-supervised learning.

At the time almost no one read the German manuscript. It lay in archives for many years, until the deep-learning revival sent readers back to it, astonished: he had written these ideas down, after all.

## 1997: LSTM, with Hochreiter

In 1997 Schmidhuber and his doctoral student Sepp Hochreiter published "Long Short-Term Memory" in *Neural Computation*.

The paper fitted the RNN with a memory cell guarded by gates — input, forget, output — letting information flow stably across hundreds, even thousands of time steps without decaying.

LSTM was first met with reviewer indifference. It looked too engineered, too much "cobbled together." Twenty years later, when speech recognition, machine translation, and handwriting recognition were rewritten one after another by deep learning, virtually every recurrent model was a variant of LSTM.

Between 2014 and 2015, Google, Apple, Amazon, and Microsoft deployed LSTMs in search, translation, and voice assistants. Schmidhuber liked to say: "Every time you talk to Siri, every time you query Google Translate, an LSTM is running in the background." By some counts, it is among the most-cited AI papers of the twentieth century.

For most of these years Schmidhuber worked at the Dalle Molle Institute for Artificial Intelligence (IDSIA) in Lugano, Switzerland — a small private institute funded by an Italian benefactor, far from the noise of Silicon Valley, yet the birthplace of LSTM, Highway Networks, and one of the earliest GPU-trained CNNs.

## Priority: Staking Claims Across the Map of Deep Learning

Had the story ended there, Schmidhuber would have been remembered as the father of LSTM, listed alongside **Geoffrey Hinton (1947–)**, **Yann LeCun (1960–)**, and **Yoshua Bengio (1964–)**. But it did not end there.

In 2015, when Hinton, LeCun, and Bengio published the agenda-setting review "Deep Learning" in *Nature*, Schmidhuber immediately posted a sharply worded response on arXiv, contesting it point by point.

He argued that certain early forms of backpropagation, certain forerunners of convolutional networks, and certain early versions of attention had appeared in his own 1990s papers. He listed work that "should have been cited but was not," almost as if filing a scholarly lawsuit.

For the decade that followed, he raised the flag of priority over almost every milestone of deep learning. He held that the core idea of generative adversarial networks (GANs) traced back to his 1990s *Adversarial Curiosity* and *Predictability Minimization*; that the cross-layer connections of ResNet were a special case of his 2015 *Highway Networks*, written with his student Rupesh Srivastava; that the linear attention of certain Transformer variants corresponded to his 1991 *Fast Weight Programmers*.

The community split in its reactions. Some, reading his old papers, conceded that his prescience was real; others held that, although his early work contained related ideas, many crucial engineering leaps separated "having mentioned it" from "having built it and seen the world adopt it."

## The Historian's Note Beyond the Note

The 2018 Turing Award went to Hinton, LeCun, and Bengio, not to Schmidhuber. He has said in many interviews that this was a clear oversight. A self-mocking line of his has spread across the internet: *"the father of deep learning has not won the Turing Award."*

This near-stubborn posture has earned him a verb on social media — "Schmidhubering" — for the act of jumping in when others announce new results to claim that one had done it earlier. There exists a half-joking dossier of screenshots and reactions known as *The Schmidhuber Files*.

## Afterwards: KAUST in the Desert and the Era of Large Models

In 2021, Schmidhuber left his full-time post at IDSIA for King Abdullah University of Science and Technology (KAUST) in Saudi Arabia, where he became director of the newly founded AI Initiative. From the foothills of the Alps to the shores of the Red Sea, he set out to build a new AI hub in the Middle East.

After the era of large language models arrived, his arguments took on a new edition.

He has written repeatedly that the "emergent capabilities" of LLMs are no surprise within his 1990s framework of compression as intelligence; he treats ChatGPT as an engineering integration of LSTM, Transformer, and similar ideas, rather than a paradigm revolution.

The view is not universally accepted, but it is at least a reminder that today's AI did not fall from the sky — every line of code stands on the drafts of several generations.

## Selected Works

| Year | Work | Significance |
|------|------|------|
| 1991 | *Habilitation Thesis*, TU München | Analysed gradient vanishing; proposed the neural sequence chunker (early self-supervised learning) |
| 1992 | "Learning to Control Fast-Weight Memories", *Neural Computation* | Introduced Fast Weight Programmers, a precursor to linear attention |
| 1997 | Hochreiter & Schmidhuber, "Long Short-Term Memory", *Neural Computation* | Introduced LSTM, opening the practical era of RNNs |
| 2015 | Srivastava, Greff & Schmidhuber, "Highway Networks" | Cross-layer gated connections, a precursor to ResNet |
| 2015 | "Deep Learning in Neural Networks: An Overview", *Neural Networks* | An 88-page review with extensive historical citations |

## Historian's Note

::: tip Historian's Note
Schmidhuber is the most restless figure in the history of deep learning. From a small institute beneath the Alps he wrote down the equations that would later remake the world — and then spent thirty years arguing with that world over who first wrote each equation. LSTM is real; the insight into vanishing gradients is real; his fixation on meta-learning and the theory of compression is real. These contributions are sufficient to engrave his name in the chronicle. Yet he chose a path few have taken: not only to create, but to ensure that every creation is recorded under his name. In a small setting such persistence inspires respect; on the great stage it has often been read as overreach. In the *Records of the Grand Historian*, Sima Qian wrote a chapter for the wandering knights, who "kept their word, made their actions follow, fulfilled their promises, and did not cherish their own bodies." Schmidhuber is a knight-errant of the deep-learning age; he defends not friends in the rivers and lakes but every citation he believes belongs to him. Such a stance has kept him at a wall's distance from the "three godfathers"; on each side of the wall there is grievance, and there is truth. Long enough, the chronicle will not be falsified by noise — it will, in time, restore each contribution to its proper place.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have firsthand knowledge of Schmidhuber's work or recollections from those who do, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Hochreiter, S., & Schmidhuber, J. (1997). "Long Short-Term Memory." *Neural Computation*, 9(8), 1735–1780.
2. Schmidhuber, J. (1991). *Habilitation thesis*: "Reinforcement Learning and Subgoal Discovery". Technische Universität München.
3. Schmidhuber, J. (1992). "Learning to Control Fast-Weight Memories: An Alternative to Dynamic Recurrent Networks." *Neural Computation*, 4(1), 131–139.
4. Schmidhuber, J. (2015). "Deep Learning in Neural Networks: An Overview." *Neural Networks*, 61, 85–117.
5. Srivastava, R. K., Greff, K., & Schmidhuber, J. (2015). "Highway Networks." *arXiv:1505.00387*.
6. Schmidhuber, J. (2015). "Critique of Paper by 'Deep Learning Conspiracy' (Nature 521 p 436)." people.idsia.ch/~juergen/deep-learning-conspiracy.html
7. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep Learning." *Nature*, 521, 436–444.
8. Schmidhuber, J. (2022). "Annotated History of Modern AI and Deep Learning." *arXiv:2212.11279*.
9. KAUST AI Initiative announcement (2021). King Abdullah University of Science and Technology.
