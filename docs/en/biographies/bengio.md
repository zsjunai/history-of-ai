# Biography · Yoshua Bengio

> He laid two of the foundation stones beneath today's large language models, then turned away at the height of their triumph to study how to keep them from destroying us.

![Yoshua Bengio, 2019](/images/people/bengio.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## The French-Speaking Boy of Montreal

**Yoshua Bengio (1964–)** was born in Paris, but his real home is Montreal. His parents were Sephardic Jewish intellectuals who had moved from Morocco to France, and then in the early 1970s carried two sons across the Atlantic to settle in Quebec. French was the language of the household; counter-culture was the colour of his parents' world. They cared about civil rights, social justice, and equal access to education, and they gave their sons names from the Hebrew Bible: Yoshua and Samy. Samy, his younger brother, would also become a well-known machine-learning researcher, working for years at Google Brain and later as a director of AI/ML research at Apple.

Bengio was no born prodigy. He has said that as a boy he was not especially drawn to mathematics, but rather to science fiction — Isaac Asimov's *Robot* and *Foundation* series and Arthur C. Clarke's *2001: A Space Odyssey* lined a shelf of his bookcase. What moved him was the question pulsing inside those stories: can a machine actually think? In his own telling, when he read the Three Laws of Robotics he had thought: to write such laws, one must first understand intelligence itself.

In 1986, as a master's student at McGill University, he stumbled on the just-published "Learning Representations by Back-Propagating Errors" by Rumelhart, **Geoffrey Hinton (1947–)**, and Ronald Williams in a library copy. He later said: "I read it and could hardly breathe. This was it." It was the first time in his life he believed that a machine might really learn to think.

## From McGill to MIT to Bell Labs

Bengio received his doctorate from McGill in 1991 with a thesis combining neural networks with hidden Markov models for speech recognition — at the time one of the rare attempts to challenge the dominance of statistical methods in speech with neural nets.

After his PhD he spent two years as a postdoc at MIT under **Michael I. Jordan (1956–)**, who would soon become a towering figure in probabilistic graphical models. In Cambridge he immersed himself in Bayesian methods, graphical models, and probabilistic inference. The experience left him the most mathematically inclined of the three "godfathers": he trusted not only the engineering intuition of neural networks but also wanted to understand them in the language of probability.

In 1992 he moved to AT&T Bell Labs in New Jersey and joined **Yann LeCun (1960–)**'s team. Their collaboration ran deeper than is widely remembered. Bengio worked alongside LeCun, Léon Bottou, and Patrick Haffner on the 1998 paper that defined the convolutional neural network — *Gradient-Based Learning Applied to Document Recognition*. Many would only later realise that the three "godfathers" did not first meet on an awards stage; their friendship and collaboration had begun thirty years earlier in the same building at Bell Labs.

## Back to Montreal, Founding LISA

In 1993 Bengio returned to the Université de Montréal as an assistant professor and built a small research group: **LISA** (Laboratoire d'Informatique des Systèmes Adaptatifs). Over twenty years, this name would expand, migrate, and reorganise itself into what is today MILA. But in the 1990s and early 2000s, LISA was one of the few labs in the world still doing serious neural-network research through the long winter.

The Université de Montréal is a French-speaking research university, separated by a layer of culture from the English-speaking centres of the field — and that distance turned out to be a kind of protection. When the English-speaking mainstream proclaimed that neural networks were dead, the reviewers of French-language journals were less hostile to Bengio's work; when American giants offered to lure researchers away with high salaries, his family and cultural roots kept him in Canada. For thirty years he scarcely left Montreal — a continuity that not even Hinton or LeCun could match.

## Word Vectors: Teaching Machines That "King – Man + Woman = Queen"

In 2000, Bengio published an early version at NeurIPS (then NIPS) of "A Neural Probabilistic Language Model"; the full paper appeared in *JMLR* in 2003, with co-authors Réjean Ducharme, Pascal Vincent and Christian Jauvin — all early students at LISA.

Today the paper is widely regarded as the source of word embeddings. It did something the statistical NLP mainstream of the time would not dare: instead of treating each word as a discrete symbol fed into n-gram statistics, it learned a shared, low-dimensional dense vector for every word, so that semantically related words came to lie close together in vector space. Bengio's plots showed an astonishing fact — the network had discovered, on its own, the geometric structure of a "semantic space." Ten years later Mikolov's word2vec would essentially be its engineering simplification. The input embedding layer of every modern large language model is a direct descendant of this lineage.

The 2003 paper did not catch fire at the time. NLP venues largely brushed it off as "too slow to train, not practical." Bengio kept at it for five or six more years, adding stones — representation learning, denoising autoencoders (with Pascal Vincent), and the textbook-style review *Learning Deep Architectures for AI* (2009). These works gradually made him the spokesperson for the theoretical wing of deep learning.

## Attention: Another Underrated Light

In September 2014, Bengio's PhD student Dzmitry Bahdanau, his postdoc Kyunghyun Cho (later professor at NYU), and Bengio jointly published "Neural Machine Translation by Jointly Learning to Align and Translate." The paper introduced into neural machine translation a joint mechanism of "alignment plus translation," soon abbreviated to **attention**.

Machine translation at the time was stuck on an old problem: a recurrent encoder squeezed an entire source sentence into a single fixed vector, and a decoder unfolded that vector into the target sentence. The longer the sentence, the more information was lost. Bahdanau and Bengio's solution was to let the decoder, when generating each target word, "softly align" back to certain positions in the source sentence. This deceptively simple step produced an immediately visible jump in translation quality.

Three years later, **Ashish Vaswani (1986–)** and his colleagues at Google proposed the Transformer and crowned attention; five years after that, ChatGPT made the word familiar to every household. What few remember is that the line begins in that 2014 Montreal paper on machine translation. Bengio has said many times that, of his own career, this is the work he believes is most underrated.

## GAN, the "Flower Book," and the Turing Award

Another event in 2014 took place in his lab: his PhD student **Ian Goodfellow (1985–)** proposed Generative Adversarial Networks (GANs). The story has been told many times — an argument in a Montreal pub, a night of frantic coding at home, a working prototype the next morning. GANs would dominate generative modelling through the 2010s. The 2016 textbook *Deep Learning*, co-authored by Bengio, Goodfellow, and Aaron Courville (nicknamed the "Flower Book" in Chinese), became the most translated and most widely adopted graduate textbook of the deep-learning era.

On 27 March 2018, the ACM announced that the Turing Award would go jointly to Bengio, Hinton, and LeCun. At the ceremony three months later, the three saluted each other on stage. Bengio's lecture was unmistakably different. He spoke of no technical detail and no commercial milestone; he spoke of where deep learning should go — of causal inference, of System 2 cognition, of the ethics of machines. Many took it as gracious filler. Only later did they realise it was the trailer for the second act of his life.

## The Turn: From Founder to Whistle-Blower

After 2018 his research focus shifted visibly. On one side, he pushed harder on causal inference, world models, and compositional generalisation, arguing that today's deep learning is only "System 1" — fast, perceptual, pattern-matching — while real intelligence will require slow thought, reasoning, and causality. He calls this line "System 2 Deep Learning." On the other side, he poured energy into AI ethics and social impact.

In December 2018, with colleagues from Toronto, Montreal, and Europe, he led the publication of the **Montreal Declaration for a Responsible Development of Artificial Intelligence**. Built around ten principles — well-being, autonomy, privacy, solidarity, democracy, equity, responsibility, sustainability, among others — the declaration became one of the most cited normative documents in the AI-ethics literature.

In March 2023 he co-signed with Stuart Russell, Elon Musk, and others the open letter *Pause Giant AI Experiments*, calling for a six-month moratorium on training models larger than GPT-4. In May, when **Geoffrey Hinton (1947–)** resigned from Google to warn publicly of AI risks, Bengio joined him in transforming from founding scientist of deep learning into one of the most credible whistle-blowers on AI risk. The same year he joined the UK AI Safety Institute, helping to set up the world's first official AI-safety bodies.

In May 2024 he was appointed chair of the **International Scientific Report on the Safety of Advanced AI** — a report commissioned jointly by thirty countries, the OECD, the European Union, and the United Nations, often described as "the IPCC report for AI." First released in 2024 with a full version in 2025, it has become one of the most authoritative references for governments drafting AI policy. A scientist who had spent thirty years making neural networks practical and mainstream is now applying the same patience to making "how to live safely with AI" a mainstream concern.

## A Scholar's Temperament

Samy Bengio, his younger brother, is also a well-known machine-learning researcher. He worked for years at Google Brain, and resigned in 2021 in protest over Google's dismissal of Timnit Gebru, later joining Apple as a director of AI/ML research. The brothers have made different career choices but share a temperament drawn from their parents — a habit of thinking about intellectual work and social responsibility together.

Among the three "godfathers," Bengio has the quietest temperament. He does not appear, like Hinton, on BBC and *60 Minutes*, nor does he, like LeCun, debate critics on Twitter at all hours. He prefers to sign open letters one by one, draft reports one by one, supervise PhD students year by year. Under thirty years of his cultivation, MILA grew from a group of five or six into one of the largest academic deep-learning research centres in the world; he himself has remained a professor rather than taking a directorship. He has said he prefers to be called a researcher rather than an administrator.

## Selected Works

| Year | Work | Significance |
|------|------|------|
| 1994 | Bengio, Simard & Frasconi, "Learning Long-Term Dependencies with Gradient Descent is Difficult" | Identified RNN gradient vanishing; led to LSTM and beyond |
| 2003 | Bengio, Ducharme, Vincent & Jauvin, "A Neural Probabilistic Language Model", *JMLR* | Source of neural language modelling and word embeddings |
| 2009 | "Learning Deep Architectures for AI", *Foundations and Trends in ML* | The first systematic review of deep learning |
| 2014 | Goodfellow, Pouget-Abadie, Mirza, Xu, Warde-Farley, Ozair, Courville & Bengio, "Generative Adversarial Nets", *NeurIPS* | GANs; the dominant generative paradigm of the 2010s |
| 2015 | Bahdanau, Cho & Bengio, "Neural Machine Translation by Jointly Learning to Align and Translate", *ICLR* | First appearance of the attention mechanism |
| 2016 | Goodfellow, Bengio & Courville, *Deep Learning* (MIT Press) | The most widely adopted graduate textbook in deep learning |
| 2024 | *International Scientific Report on the Safety of Advanced AI* | The "IPCC of AI," commissioned by thirty nations |

## Historian's Note

::: tip Historian's Note
What Bengio is to deep learning, the farmer is to the field. He is no orator; he does not seek the spotlight; yet for thirty years he has tilled a piece of ground called Montreal. The first seed he planted was the word vector, the second the attention mechanism. From these two seeds the entire forest of large language models has grown, sustaining the compute factories of Silicon Valley and beyond. When that forest began to shadow the sky and people scrambled to fell its timber for profit, he set down his plough and turned to become a forester — chairing the *International Scientific Report on the Safety of Advanced AI*, drafting the *Montreal Declaration*, signing open letters that called for a pause. He has not turned from victor into prophet of doom; he has always been a scholar — one who treats the responsibility of research as part of research itself. Of the three godfathers, Hinton is the philosopher, LeCun the engineer, Bengio the scholar; and the scholar's temperament is the rarest, for it requires restraint at the hour of triumph, voice in the silences, and the willingness, even as the world fights for the spoils of a technology, to ask what that technology will mean for the next thirty years. What Montreal has given the history of AI is not only GAN, attention, and the *Flower Book*, but this stance: doing research while continuously examining research itself. It may be the household tradition that twenty-first-century AI most needs.
:::

## Eyewitness Accounts

::: info Call for contributions
If you worked with Bengio at LISA, MILA, Element AI, Bell Labs, or Jordan's MIT group, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Bengio, Y., Simard, P., & Frasconi, P. (1994). "Learning Long-Term Dependencies with Gradient Descent is Difficult." *IEEE Transactions on Neural Networks*, 5(2), 157–166.
2. Bengio, Y., Ducharme, R., Vincent, P., & Jauvin, C. (2003). "A Neural Probabilistic Language Model." *JMLR*, 3, 1137–1155.
3. Bengio, Y. (2009). "Learning Deep Architectures for AI." *Foundations and Trends in Machine Learning*, 2(1), 1–127.
4. Goodfellow, I., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., & Bengio, Y. (2014). "Generative Adversarial Nets." *NeurIPS 2014*.
5. Bahdanau, D., Cho, K., & Bengio, Y. (2015). "Neural Machine Translation by Jointly Learning to Align and Translate." *ICLR 2015* (arXiv:1409.0473, 2014).
6. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
7. ACM (2018). "ACM A.M. Turing Award Citation: Yoshua Bengio, Geoffrey Hinton, Yann LeCun." https://amturing.acm.org/
8. *Montreal Declaration for Responsible Development of Artificial Intelligence* (2018). https://www.montrealdeclaration-responsibleai.com/
9. Bengio, Y. et al. (2023). "Pause Giant AI Experiments: An Open Letter." Future of Life Institute.
10. Bengio, Y. (Chair) (2024–2025). *International Scientific Report on the Safety of Advanced AI*. UK Department for Science, Innovation and Technology.
11. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. MIT Press.
