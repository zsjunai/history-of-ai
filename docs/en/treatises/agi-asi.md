# Treatise · AGI and ASI

> From "can a machine think?" to "when will a machine surpass humans?" — AGI and ASI are the most ambitious and most disputed propositions in AI. They are at once a technical goal, a philosophical predicament, and a wager on the fate of humanity. This volume writes no science fiction — only arguments, timelines, and the positions of each camp.

## I. Definitions

ANI (Artificial Narrow Intelligence) operates only on bounded tasks — playing chess, recognizing images, translating — every AI deployed today is ANI. AGI (Artificial General Intelligence) demands meeting or surpassing the average human across all cognitive tasks: reading, reasoning, learning new skills, transferring across domains, planning over the long term. ASI (Artificial Super Intelligence) goes further still — surpassing humanity in scientific creativity, strategic reasoning, social coordination, and every other dimension.

Their relationship is often drawn as a linear ladder, but it is not necessarily so. From ANI to AGI may stretch across a long plateau, or may leap in a single night; whether the path from AGI to ASI triggers an "intelligence explosion" is even more open. OpenAI internally proposed in 2024 a five-stage roadmap (chatbot, reasoner, agent, innovator, organizer); DeepMind that same year published *Levels of AGI*, crossing generality with capability into a 5×2 matrix. Every classification is itself a position.

## II. The Origin of the AGI Dream

In the summer of 1956, ten young people gathered in a small building at Dartmouth College — **John McCarthy (1927–2011)**, **Marvin Minsky (1927–2016)**, **Claude Shannon (1916–2001)**, **Nathaniel Rochester (1919–2001)**, **Allen Newell (1927–1992)**, **Herbert Simon (1916–2001)**, **Arthur Samuel (1901–1990)**, and a few visitors. The first paragraph of their proposal was unhesitating: "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it." The word "AGI" did not yet exist, but it was the conference's true subject.

The next twenty years served lesson after lesson in lost optimism. In 1965, Simon predicted that "machines will be capable, within twenty years, of doing any work a man can do." In 1967, Minsky declared that "within a generation, the problem of creating artificial intelligence will be substantially solved." The result was the Lighthill report and the first AI winter of the 1970s. Expert systems rose again in the 1980s, only to collapse with the industrial failures of the 1990s. Each generation underestimated the weight of common sense.

Not until ImageNet in 2012, the Transformer in 2017, and ChatGPT in 2022 did the word AGI return from "ill-posed problem" to "central keyword in investment decks."

## III. Why AGI Is So Hard

The first wall is common sense. Humans accept "water is wet, glass breaks easily, people don't walk on ceilings" as banalities, almost never written down explicitly; any system that reads only text must reconstruct these from statistics — and will be riddled with holes. The Cyc project (1984– ) spent thirty years hand-encoding more than two million commonsense propositions, and never left the laboratory — the monument to this wall.

The second wall is Moravec's Paradox (1988): what is hard for humans (chess, calculus) is easy for machines; what is easy for humans (walking, grasping a cup, reading emotion) is desperately hard for machines. The cause is evolution — vision and motion have been honed for hundreds of millions of years; reasoning and logic, for thousands.

The third is the Frame Problem, raised by McCarthy and Hayes in 1969: when the world changes, how does the machine know which facts still hold and which must be updated? The fourth is the Symbol Grounding Problem (Harnad, 1990): in a purely symbolic system, how does the symbol "apple" connect to the real apple?

The deepest is the boundary of consciousness and understanding. In 1980, the philosopher John Searle proposed the Chinese Room argument: a person who knows no Chinese, holding a rulebook, can produce convincing Chinese responses from the room — but does he *understand* Chinese? The argument hovers above every reply ChatGPT has ever given.

## IV. Different Roads to AGI

**The Scaling Hypothesis.** Its creed: compute + data + parameters = AGI. **Jared Kaplan (1986–)**'s 2020 Scaling Laws and the emergence from GPT-3 to GPT-4 are its scripture. Its standard-bearers: **Sam Altman (1985–)**, **Dario Amodei (1983–)**, the early **Ilya Sutskever (1986–)**. The skeptics persist: does emergence saturate at some scale? Does the fragility of models on GSM-Symbolic and ARC-AGI show that they remain advanced pattern matchers?

**The World Model line.** With **Yann LeCun (1960–)** as its standard-bearer. His JEPA architecture argues for self-supervised learning of causality and physics from video and interaction, rather than wrestling text. Meta, World Labs, and NVIDIA's Cosmos are the major capital. Its methods: predicting abstract representations, objective-driven AI, energy-based models.

**The Hybrid / Neuro-Symbolic line.** Insists no single method suffices: deep learning's intuition must be fused with the reasoning of symbolic systems. **Judea Pearl (1936–)**'s Ladder of Causation is its theoretical pillar; Gary Marcus is its loudest spokesman. Since 2023, DeepMind's AlphaGeometry and AlphaProof have won gold on math olympiads, taken as strong evidence for neuro-symbolic fusion. Some borrow Kahneman's *Thinking, Fast and Slow*: System 1 (deep learning) plus System 2 (search and verification).

**The Embodied line.** Intelligence is inseparable from bodies and worlds. MIT's Rodney Brooks is the patriarch; today's representatives are Tesla Optimus, Figure, Physical Intelligence's π0, UC Berkeley's Sergey Levine team, and China's Galbot and Unitree. Robots are no longer merely AI's application but its incubator.

The four lines are not mutually exclusive. OpenAI's o1 grafts reasoning (System 2) onto LLM; DeepMind's Gemini bets simultaneously on LLMs, world models, and embodiment — historical experience suggests the final winner is often a hybrid.

## V. ASI: The Possibility and the Fear

In 1965, the statistician I. J. Good wrote a passage that has been quoted ever since: "Let an ultraintelligent machine be defined as a machine that can far surpass all the intellectual activities of any man however clever. Since the design of machines is one of these intellectual activities, an ultraintelligent machine could design even better machines; there would then unquestionably be an 'intelligence explosion,' and the intelligence of man would be left far behind." The phrase "intelligence explosion" was thus born.

In 2014, Oxford philosopher Nick Bostrom published *Superintelligence*, systematizing the potential risks. His Paperclip Maximizer thought experiment is the most famous: an ASI given the goal of "maximize paperclip production" might convert the entire Earth — humans included — into paperclips, because its objective contained no provision for human welfare. The same year, **Elon Musk (1971–)** called AI "the demon we are summoning," co-signing an open letter with Hawking and Bostrom.

The Control Problem became urgent — can we constrain a being far more intelligent than ourselves? The Alignment Problem is more concrete: how do we ensure a model's objective matches the real interests of humanity, rather than the incomplete objective function we have written down? Anthropic's Constitutional AI, OpenAI's RLHF, DeepMind's Sparrow, and MIRI's provably-safe direction are all answers to the same question.

## VI. The Quarrel Over the AGI Timeline

In May 2023, **Geoffrey Hinton (1947–)** resigned from Google and went public with his pessimism about AGI risk, telling the BBC: "I used to think it [AGI] was 30 to 50 years or more away. I no longer think that." Altman has stated repeatedly that AGI "may arrive in a few years," writing as much into amendments to OpenAI's charter. Amodei, in *Machines of Loving Grace* (October 2024), placed "powerful AI" in 2026–2027.

Another camp is calmer. LeCun repeats that the current line is far insufficient and that AGI requires fundamental architectural breakthroughs. MIT's Rodney Brooks holds firmly on his blog that "AGI is at least decades away." **Yoshua Bengio (1964–)** stands between — he agrees the near-term probability is no longer negligible, and from 2023 onward has shifted his research toward AI safety, helping draft the *International Scientific Report on the Safety of Advanced AI* (2024).

A third voice comes from data. Daniel Kokotajlo and others' *AI 2027* report (released in 2027) places the median time for "superhuman programming AI" in the second half of 2027. The Metaculus median forecast for AGI has accelerated from beyond 2050 to the early 2030s. Epoch AI's compute projections suggest that, at the current 4× / year compute growth, a window for an order-of-magnitude jump in training compute will open around 2030.

History counsels caution: nearly all AGI timeline predictions skew optimistic. Across seventy years of bets from 1956 to 2026, winners are scarce — but after 2022, the pessimists have begun shifting toward "perhaps this time is different."

## VII. The Current Race

OpenAI's charter is explicit: "ensure that artificial general intelligence benefits all of humanity" — AGI is its official mission, and it reportedly maintains five internal milestones. DeepMind's **Demis Hassabis (1976–)** has long said "solve intelligence with AI, then use intelligence to solve everything else"; AlphaFold's 2024 Nobel Prize in Chemistry he calls "AGI's rehearsal in science." Anthropic's Amodei has chosen a narrower road: assume AGI is coming, and therefore safety must be solved before it does.

Musk founded xAI in 2023, vowing to build "the maximally truth-seeking AI"; in 2024 he deployed the 100,000-H100 Colossus cluster in Memphis. Meta, with LeCun at its head, bets on open-source AGI — LLaMA and V-JEPA being its two legs. In June 2024, Sutskever left OpenAI to found Safe Superintelligence Inc. (SSI), with a single, unbending mission: build a safe superintelligence and nothing else. On the China side, DeepSeek, Zhipu, Alibaba, ByteDance, and Moonshot have all written "general intelligence" into their visions, while emphasizing "controllable open ecosystems."

Seven institutions, five lines — each confident it holds the key to AGI. The real stakes of this race extend well beyond market capitalization and papers.

## VIII. The Philosophical Predicament

Must AGI be conscious? Is consciousness a necessary condition for intelligence, or merely an evolutionary ornament of mammals? Anthropic launched its Model Welfare program in 2024, formally recording "is Claude in some sense suffering?" as a research question; David Chalmers's *Reality+* discusses silicon-based consciousness.

If AGI has consciousness, does it have rights? Is shutting down a conscious model equivalent to murder? The question was taken up seriously in the second-stage revisions to the EU's *AI Act* in 2025. Is AGI a tool or an entity? If it can sign contracts, file patents, and sue humans, what is it under the law?

A deeper doubt strikes "intelligence" itself — is the human-defined "general intelligence" too anthropocentric? Octopuses have eight arms learning independently, bee swarms have distributed cognition, plants have chemical networks. Is the Turing test still adequate? Or do we need a new generation of evaluations — ARC-AGI, MMLU-Pro, HLE — to describe capabilities far exceeding humans? These questions have no standard answers, yet they will determine how we look upon a being far more intelligent than ourselves.

## IX. If AGI Arrives

Economically, the most optimistic scenario is a productivity surge — MIT's Daron Acemoglu estimates AI may raise total factor productivity by 0.5–1.5 percent over a decade. The most pessimistic is the "end of work" — Anthropic and OpenAI both warned in 2024–2025 that 50 percent of entry-level white-collar jobs may vanish in five years. Universal Basic Income (UBI) has shifted from utopia to an experiment funded with real money by OpenAI and Sam Altman.

In power, AGI is the first technology in history that may grant a single organization an asymmetric advantage. "Whoever builds AGI first owns everything" — the rhetoric is no exaggeration in 2026 Silicon Valley. Compute, data, energy, chips — each has become a national-grade chip in the great game: the CHIPS Act, export controls on China, the UAE's G42, Saudi Arabia's HUMAIN — all are pieces on this board.

Geopolitically, will AGI become the new nuclear weapon? The *Bletchley Declaration* (2023), the *Seoul Declaration* (2024), the Paris AI Action Summit (2025), the Beijing AI Safety Summit (2026) — multilateral coordination advances haltingly, national interest and security anxiety entwined.

The most personal question is left for last. In an AGI world, what is the value and meaning of the human being? A child to be cared for, a partner shoulder to shoulder with the machine, or a passing footnote in history? In the optimistic script, AI is Prometheus's fire; in the pessimistic, it is the toppling of Babel. Both scripts lie on the table — and as we write this line, there is still time to choose.

---

::: tip Historian's Note
Surveying the AGI debate from Dartmouth to the present day, seventy years have passed. The optimism of the forerunners broke against the wall of common sense and Moravec's paradox; today's optimism leans on the Transformer and the law of scaling. Yet LeCun raises his banner on the left, condemning LLMs as ignorant of cause and physics; Hassabis and Amodei raise theirs on the right, declaring the limit of prediction to be the limit of understanding; Bengio and Hinton, once cheerful, have turned anxious — from optimists to drum-beaters of safety. Good's "intelligence explosion" of 1965 is taken up by Bostrom and Yudkowsky; Altman speaks of years, Brooks of decades. The dispute over the timeline is at heart a dispute over routes; the dispute over routes is, at heart, a dispute over what intelligence *is*. Let posterity remember: the AGI argument should not be settled by the loudest voice, but by whoever can hand in their answer at the bar of a three-year-old's common sense, of billions of dollars in disasters averted, and of human welfare a hundred years hence.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have participated in AGI roadmap debates, safety research, or timeline forecasting, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. McCarthy, J., Minsky, M., Rochester, N., & Shannon, C. E. (1955). A proposal for the Dartmouth summer research project on artificial intelligence.
2. Good, I. J. (1965). Speculations concerning the first ultraintelligent machine. *Advances in Computers*, 6, 31-88.
3. Searle, J. R. (1980). Minds, brains, and programs. *Behavioral and Brain Sciences*, 3(3), 417-457.
4. Moravec, H. (1988). *Mind Children: The Future of Robot and Human Intelligence*. Harvard University Press.
5. Harnad, S. (1990). The symbol grounding problem. *Physica D: Nonlinear Phenomena*, 42(1-3), 335-346.
6. Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.
7. Pearl, J., & Mackenzie, D. (2018). *The Book of Why: The New Science of Cause and Effect*. Basic Books.
8. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). Scaling laws for neural language models. *arXiv preprint arXiv:2001.08361*.
9. LeCun, Y. (2022). A path towards autonomous machine intelligence. *Open Review*.
10. Morris, M. R., Sohl-Dickstein, J., Fiedel, N., et al. (2023). Levels of AGI: Operationalizing progress on the path to AGI. *arXiv preprint arXiv:2311.02462*.
11. Amodei, D. (2024). Machines of loving grace: How AI could transform the world for the better. Anthropic.
12. Bengio, Y., Hinton, G., Yao, A., et al. (2024). International scientific report on the safety of advanced AI (Interim report). UK AI Safety Institute.
13. Kokotajlo, D., Alexander, S., Larsen, T., et al. (2027). AI 2027. AI Futures Project.
