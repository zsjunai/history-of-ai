# Biography · John Hopfield

> A physicist walked into the cold palace of neural networks and, with an energy function, called them back from the grave — forty-two years later, the Swedes gave the Nobel Prize for the rescue.

![John Hopfield at the 2024 Nobel Prize in Physics announcement](/images/people/hopfield.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## From Condensed Matter Physics to the Edge of Biology

John Hopfield was born in Chicago in 1933, into a family of physicists — both parents held physics doctorates.

He took his bachelor's degree at Swarthmore College in 1954, his physics PhD at Cornell in 1958 under Albert Overhauser, a researcher in solid-state physics. After the doctorate he held positions at Bell Labs, the University of California at Berkeley, and Princeton.

His earliest research was not in neural networks but in condensed matter physics — he proposed the concept of the *polariton*, the coupling of photons to polarisation waves in crystals, written down as a clean eigenvalue equation; it remains a standard tool in solid-state optics.

By the mid-1970s Hopfield felt the "old questions" of physics were narrowing, while biological systems were filled with open problems "waiting to be physicalised." Around 1980 he moved from Princeton to Caltech and began to work alongside biologists, chemists, and neuroscientists.

This crossing of disciplines, a few years later, would change the direction of artificial intelligence.

## 1982: A Miracle of an Energy Function

In the early 1980s AI was deep in its first winter. **Frank Rosenblatt** had been dead for ten years; the shadow of **Marvin Minsky** and **Seymour Papert**'s *Perceptrons* had not lifted; connectionist papers struggled to find space at major conferences.

It was at this moment that Hopfield published a paper no one expected to change the course of history.

In 1982 the *Proceedings of the National Academy of Sciences* (*PNAS*) carried "Neural Networks and Physical Systems with Emergent Collective Computational Abilities."

The paper restated the neural network in the most familiar tool of statistical physicists — the energy function of a spin glass. Each neuron was treated as a binary spin; each connection between two neurons corresponded to an interaction strength; in any state the whole network had an energy value, and the network's evolution was equivalent to descent along an energy surface.

The model that posterity would call the **Hopfield Network** had a property that looked banal and was, in fact, astonishing: it could function as an *associative memory*. Store a set of patterns as the minima of the energy function; given a corrupted or noisy input, the system slid down the energy surface and converged automatically to the nearest minimum — that is, to the stored memory.

The terror of the idea was that, for the first time, *memory* — a concept of psychology — had been turned into *attractor of a dynamical system* — an object of mathematics.

## The Travelling Salesman, and Connectionism's Counter-attack

In 1985 Hopfield, with David Tank of Bell Labs, extended the Hopfield network to neurons with continuous values and used it to attack the classical NP-hard travelling salesman problem (TSP).

The paper, "'Neural' Computation of Decisions in Optimization Problems," showed that, in simulated time, a neural network could find good approximate solutions to TSP.

Politically, this mattered more than it did technically. Through the symbolic 1980s, neural networks had been attacked as good for "pattern recognition only," not for reasoning or optimisation. Hopfield used a continuous Hopfield network to solve, head-on, the most classical search/optimisation problem in the AI textbook. It was a frontal counterattack from connectionism. From that day forward, "neural networks can compute" was no longer just a slogan.

## Caltech, the CNS Programme, and the Lineage of the Boltzmann Machine

In 1986, with Carver Mead, David Van Essen, and others, Hopfield co-founded at Caltech the **Computation and Neural Systems (CNS)** graduate programme.

It was the world's first formal doctoral programme to span physics, neuroscience, and computer science — engineers and neuroscientists locked into the same building, forced to drink coffee together every day. Most of the seeds of today's neuromorphic computing germinated in that building.

The other underground line from the Hopfield network leads to **Geoffrey Hinton**. Around 1985 Hinton, with **David Rumelhart**, Sejnowski, and others, proposed the *Boltzmann machine* — a Hopfield network with deterministic dynamics replaced by temperature-driven stochastic dynamics, and with hidden units permitted to participate in training.

Hinton has said many times in interviews that his work was "built on Hopfield's energy function." This subterranean stream, from the 1982 physics paper, through the Boltzmann machine and the deep belief network, to the 2012 deep learning revolution, was visible to only a few for a long time.

## 2024: A Late Reply from Sweden

On 8 October 2024 the Royal Swedish Academy of Sciences announced that the Nobel Prize in Physics for that year would be shared by John Hopfield and **Geoffrey Hinton**, "for foundational discoveries and inventions that enable machine learning with artificial neural networks." It was the first time the Physics Nobel had been awarded for work whose principal subject was the neural network. The citation explicitly named the 1982 *PNAS* paper and the energy-function lineage of the Boltzmann machine.

Hopfield was ninety-one. He took the call at his home in Princeton, his first response: "Are you sure you have the right number?" At the press conference that followed, he did not, as new laureates often do, celebrate. Instead he spent long minutes expressing his unease over contemporary deep learning's *consumption of compute* and *environmental cost*, warning his colleagues that technological enthusiasm always conceals the next winter. The man who pulled neural networks out of the cold palace was, in his last years, gently pressing them down — afraid they would burn too hot.

## The Restraint of a Physicist

Hopfield is not a man who enjoys the spotlight. As far back as the 1980s he turned down repeated invitations to commercialise the Hopfield network — Silicon Valley firms had wanted to register hardware companies in his name; he refused them all, with one sentence: the science is not finished, so it should not be sold. He changed institutions four times in his life, each time because "there are better questions to ask there," not because the salary was higher. The doctoral students he advised personally were not many, but among them were Terry Sejnowski, Bart Selman, and Erik Winfree — each of whom would found a school of his own. Their shared memory: at group meetings Hopfield rarely concluded; he asked, again and again, "do you really understand the quantity you are computing?"

His attitude toward the deep learning era differs from both **Yann LeCun**'s plain optimism and **Geoffrey Hinton**'s explicit caution. He looks at it as an old physicist looks at a suddenly fashionable experimental phenomenon: first observe, then restrain, do not take sides. When the Nobel arrived in 2024 he was already ninety-one, still teaching once a week at Princeton — not on Transformers, but on sparse coding in the olfactory system of the brain. That, he believes, is what the next wave of neural networks should be learning.

## Selected Works

| Year | Work | Significance |
|------|------|--------------|
| 1982 | "Neural Networks and Physical Systems with Emergent Collective Computational Abilities," *PNAS*, 79(8) | Proposed the Hopfield network and energy function; founded the associative-memory model |
| 1984 | "Neurons with Graded Response Have Collective Computational Properties Like Those of Two-State Neurons," *PNAS*, 81(10) | Extended the Hopfield network to continuous neurons |
| 1985 | "'Neural' Computation of Decisions in Optimization Problems" (with D. W. Tank), *Biological Cybernetics*, 52(3) | Used a neural network to attack TSP; counter-attack on symbolism |
| 1986 | Co-founded Caltech's Computation and Neural Systems programme | Institutional starting point of interdisciplinary neural computation |
| 2024 | Shared the Nobel Prize in Physics with **Geoffrey Hinton** | Official coronation of neural networks |

## Historian's Note

::: tip Historian's Note
Hopfield is to neural networks what Chen Sheng was to the Qin — the outsider who overturned the mainstream. In 1982 connectionism was banished; symbolism alone held the academy. A physicist who had no business appearing in an AI paper climbed in over the wall with the energy function of a spin glass, and announced to the world: the neural network is not metaphysics — it is statistical mechanics. One energy function loosed two chains: the technical one, that "neural networks cannot stably converge," and the political one, that "neural networks are not accepted as serious mathematics." From this the Boltzmann machine could be born, the deep belief network could appear, and the 2012 ImageNet revolution gained its bloodline upstream. The Nobel Prize in Physics, forty-two years later, did not simply reward an old man. It conceded a fact: when the mainstream disciplines refuse to answer a question, an outsider often answers it with the tools of his own house. Hopfield's story reminds us that the borders of disciplines are never the borders of truth — truth is found only with those who dare to cross.
:::

## Eyewitness Accounts

::: info Call for contributions
If you knew John Hopfield personally or have firsthand sources or recollections, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Hopfield, J. J. (1982). "Neural Networks and Physical Systems with Emergent Collective Computational Abilities." *Proceedings of the National Academy of Sciences*, 79(8), 2554–2558.
2. Hopfield, J. J. (1984). "Neurons with Graded Response Have Collective Computational Properties Like Those of Two-State Neurons." *PNAS*, 81(10), 3088–3092.
3. Hopfield, J. J., & Tank, D. W. (1985). "'Neural' Computation of Decisions in Optimization Problems." *Biological Cybernetics*, 52(3), 141–152.
4. Ackley, D. H., Hinton, G. E., & Sejnowski, T. J. (1985). "A Learning Algorithm for Boltzmann Machines." *Cognitive Science*, 9(1), 147–169.
5. The Royal Swedish Academy of Sciences (2024). "The Nobel Prize in Physics 2024 — Scientific Background." Stockholm: Nobel Committee.
6. Hopfield, J. J. (2014). "Whatever Happened to Cognitive Science?" *Annual Review of Neuroscience*, 37, 1–14.
7. Anderson, J. A., & Rosenfeld, E. (Eds.) (1998). *Talking Nets: An Oral History of Neural Networks*. Cambridge, MA: MIT Press.
8. Sejnowski, T. J. (2018). *The Deep Learning Revolution*. Cambridge, MA: MIT Press.
