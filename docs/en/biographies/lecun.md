# Biography · Yann LeCun

> Thirty years ago he taught a convolutional network to read a bank cheque; thirty years later he told the world that a network that reads cheques is nowhere near intelligent.

![Yann LeCun, École Polytechnique, Paris, 2018](/images/people/lecun.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## The Engineer from Paris

**Yann LeCun (1960–)** — "Yann" is the Breton form of "John" — was born outside Paris, in Soisy-sous-Montmorency, into the household of an aerospace engineer. His father had him taking apart electronics in the basement from a young age. At ten he saw Kubrick's *2001: A Space Odyssey*, and the AI named HAL 9000 fixed itself in his mind. He has said many times that his entire research life is one long answer to the question that film posed: can a machine truly possess intelligence like a human's?

In secondary school he read the debates between Noam Chomsky and Jean Piaget on language and cognition, and grew fascinated with the question of where intelligence comes from. In 1978 he entered ESIEE Paris (École Supérieure d'Ingénieurs en Électrotechnique et Électronique) for an engineering degree; his graduation thesis was already on neural networks. As a master's student in 1983 he independently rediscovered an early form of the backpropagation algorithm — three years before the famous 1986 paper of Hinton and Rumelhart — though he did not formally publish it. This was his first entanglement with connectionism: in an era when no one had yet told him that this path was a laughing matter, he had walked onto it of his own accord.

In 1987 he completed his doctoral thesis, *Modèles connexionnistes de l'apprentissage*, at Université Pierre et Marie Curie (Paris VI), under the pattern-recognition scholar Maurice Milgram. On the examining committee sat **Geoffrey Hinton (1947–)**. That was their first meeting. They talked late into the night, and Hinton invited him to Toronto as a postdoc.

## A Year in Toronto, a Decade at Bell Labs

From 1987 to 1988, LeCun was a postdoc in Hinton's group at the University of Toronto. Through a Canadian winter the two discussed small convolutional structures, weight sharing, and modifications of Kunihiko Fukushima's Neocognitron. Hinton later said that LeCun arrived already a "very mature researcher"; they were more like colleagues than master and pupil.

In the autumn of 1988 he joined the Adaptive Systems Research department at AT&T Bell Labs — then one of the strongest industrial research institutions in the United States. Vladimir Vapnik (the inventor of the support vector machine), Corinna Cortes (his SVM collaborator), and Léon Bottou (a master of stochastic gradient descent) all worked in the same building. LeCun was assigned to the famous mirrored-glass tower at Holmdel designed by Eero Saarinen. His department head, Larry Jackel, gave him a brutally specific task: teach a computer to read handwritten ZIP codes.

The task looked engineering-bound but concealed a theoretical experiment. LeCun combined three ideas — convolution, weight sharing, and subsampling — into the standard structure of what would become the convolutional neural network (CNN). His 1989 paper, "Backpropagation Applied to Handwritten Zip Code Recognition," was the first appearance of a CNN as a complete engineering system. It was not a model paper but a meticulous experimental report: from data collection to training curves, from hardware optimisation to error analysis. The attitude of treating a neural network as a piece of engineered product became part of the Bell Labs tradition, and later of deep learning's whole industrial culture.

## The Convolutional Network in the Bank

The work did not end with the paper. By the early 1990s, AT&T's subsidiary NCR had deployed LeCun's team's convolutional system into the cheque-processing pipelines of major American banks. The 1998 paper "Gradient-Based Learning Applied to Document Recognition" was the canonical statement of this era's work — forty-six pages, the textbook codification of CNNs. The author list included Léon Bottou, **Yoshua Bengio (1964–)**, and Patrick Haffner — a record of the early friendships of the deep-learning circle.

By the late 1990s, between ten and twenty per cent of all cheques in the United States were being read by LeNet. It was the first truly large-scale industrial deployment in deep-learning history — more than a decade before AlexNet. Industry made little of it; many practitioners did not realise that a neural network sat behind the cheques they processed each day. The academic mainstream chased SVMs, Bayesian methods, graphical models, and looked past LeNet entirely. LeCun later called it the loneliest decade of his career: he knew he was holding something real, yet the academic world treated him as an engineer rather than a scientist.

In 1995 AT&T was broken up, and Bell Labs was severely weakened. In 1996 his AT&T Labs Research unit was reorganised again. In 2003 he left AT&T altogether, joining the Courant Institute of Mathematical Sciences at New York University. The move from industrial research to a university chair was both a change of post and a change of stance.

## A Parisian's New York Years and a Facebook Wager

At NYU, LeCun continued his work on convolutional networks, energy-based models, and early forms of self-supervised learning. His lab raised a generation that would shape vision and robotics: Pierre Sermanet, Marc'Aurelio Ranzato, Pulkit Agrawal, Soumith Chintala (a principal author of PyTorch), Adam Lerer, and others. But the spotlight only returned to him in 2012, when AlexNet erupted onto the scene and industry suddenly realised that what LeCun had built at Bell Labs more than a decade earlier had become the future.

In December 2013, Mark Zuckerberg flew personally to New York to ask LeCun to start an AI lab for Facebook. The pitch was simple: "You do what you want to do; we pay." LeCun's conditions were equally simple: it had to be open research, papers had to be publishable, code had to be open-sourced. Zuckerberg agreed. **Facebook AI Research (FAIR)** was founded, with LeCun as its first director. The charter explicitly stated that FAIR would operate "as an academic institution" — a heretical posture for a Silicon Valley giant. Over the next decade FAIR produced PyTorch, DETR, the Segment Anything Model (SAM), LLaMA and other infrastructure-grade open-source projects, profoundly rewriting the texture of AI engineering.

On 27 March 2018, the ACM announced that the Turing Award would go jointly to **Yoshua Bengio (1964–)**, **Geoffrey Hinton (1947–)** and Yann LeCun. The three embraced for a long time on stage. In his lecture LeCun thanked Bell Labs in particular — the place that, in years when the mainstream had no time for him, had still let him put deep learning to work.

## Differences with Hinton and Bengio

After 2022 the public postures of the trio began to diverge. Hinton and Bengio in turn warned of catastrophic risks from large models — labour displacement, disinformation, runaway superintelligence. LeCun stood almost on the opposite side.

His argument is plain: today's large language models do not truly understand the world; they are statistical correlators of text. "Cats and dogs are smarter than LLMs" — a line he repeats in interviews — has infuriated many AGI believers. He thinks the path to real intelligence runs through "world models": let machines learn physics and causality from sensors and actions the way children do, instead of training a parrot of tokens on a trillion words of text. He has championed JEPA (Joint Embedding Predictive Architecture) as an early sketch of that path.

LeCun's other face is an almost religious commitment to openness. He has said publicly, more than once, that locking AI inside the servers of a few companies is more dangerous than AI itself running out of control. Under his lead, Meta open-sourced LLaMA, Code LLaMA, Llama 2, and Llama 3 in succession, triggering a chain reaction in Silicon Valley from shock to imitation. In 2023 he clashed openly with Bengio and others over whether to pause large-model training; the latter signed the *Pause AI* open letter, which LeCun mocked as "medieval panic."

From 2024 onward, his disagreement with Zuckerberg over the AGI roadmap became increasingly public. Zuckerberg wanted Meta to sprint flat-out toward general intelligence; LeCun insisted that today's LLMs are a dead end. In 2025 he gradually withdrew from FAIR's day-to-day management, speaking more often as Chief AI Scientist, and announced that he would devote more time to long-term research on the directions he truly believed in: openness, world models, and robotics.

## An Engineer's Stubbornness

The differences in temperament between LeCun, Hinton, and Bengio are an old subject of joking comparison. Hinton has the air of a philosopher, often reflecting in public talks on the boundaries of the human mind; Bengio has the air of a scholar, quietly drafting reviews and signing manifestos; LeCun has the air of an engineer, more at home in real-time arguments on Twitter, more willing to fight a colleague to midnight over a single technical detail.

This engineer's temperament has been one of his most important contributions. From the beginning he insisted that "an algorithm must run, must work, must ship": LeNet was that, FAIR was that, the open-sourced LLaMA was that. While others argued about the future of AI, he made certain that AI in the present could be used by more people. For him, open-source is not only a technical philosophy but a public choice — leave the decision to the community rather than to a few CEOs.

## Selected Works

| Year | Work | Significance |
|------|------|------|
| 1989 | "Backpropagation Applied to Handwritten Zip Code Recognition", *Neural Computation* | First appearance of a CNN as a complete system |
| 1998 | LeCun, Bottou, Bengio, Haffner, "Gradient-Based Learning Applied to Document Recognition", *Proc. IEEE* | LeNet-5; the textbook canonisation of CNNs |
| 2006 | LeCun et al., "A Tutorial on Energy-Based Learning" | Systematic exposition of the energy-based framework |
| 2015 | LeCun, Bengio & Hinton, "Deep Learning", *Nature* | The trio's joint review; the field's flagship paper |
| 2022 | "A Path Towards Autonomous Machine Intelligence" | The JEPA / world-model manifesto |
| 2023 | Touvron et al., *LLaMA: Open and Efficient Foundation Language Models* | The opening of Meta's open-source LLM series, championed by LeCun |

## Historian's Note

::: tip Historian's Note
LeCun's place in the history of AI is best seen in a contrast: Hinton is a preacher, Bengio is a scholar, LeCun is an engineer — three temperaments that together carried deep learning back to life. Yet he is no mere coder of papers. At Bell Labs in 1989 he proved a convolutional network could read a cheque; at Facebook in 2013 he proved an industrial behemoth could shelter an academic lab; at Meta in 2023 he proved a frontier model could be opened to the world. Three feats, seemingly unrelated, share a single conviction: the value of a technology lies not in the paper but in whether millions of people can put it to use. When Hinton warned of AI's dangers and Bengio drafted ethical declarations, he chose a third path — to keep faith with engineering reason and to push power outward to the open-source community. This is not naivety but another kind of long deliberation: he fears a future in which intelligence is hoarded by the few more than he fears intelligence itself. A French engineer learned at Bell Labs to "make the thing actually work," carried that engineering spirit into one of Silicon Valley's most closed empires, and tore a brick out of its wall. That brick is still in the hands of every person who today can run an open-source large model.
:::

## Eyewitness Accounts

::: info Call for contributions
If you worked with LeCun at Bell Labs, AT&T Labs, the NYU Courant Institute, or FAIR, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. LeCun, Y., Boser, B., Denker, J. S., et al. (1989). "Backpropagation Applied to Handwritten Zip Code Recognition." *Neural Computation*, 1(4), 541–551.
2. LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). "Gradient-Based Learning Applied to Document Recognition." *Proceedings of the IEEE*, 86(11), 2278–2324.
3. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep Learning." *Nature*, 521(7553), 436–444.
4. LeCun, Y. (2022). "A Path Towards Autonomous Machine Intelligence." Open Review.
5. Touvron, H., Lavril, T., Izacard, G., et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." Meta AI.
6. ACM (2018). "ACM A.M. Turing Award Citation: Yoshua Bengio, Geoffrey Hinton, Yann LeCun." https://amturing.acm.org/
7. Metz, C. (2021). *Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World*. Dutton.
8. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. MIT Press.
9. Lex Fridman Podcast (2019, 2022, 2024). Interviews with Yann LeCun.
10. LeCun, Y. (2023–2025). Public talks and posts on open-source AI, AGI risk, and JEPA.
