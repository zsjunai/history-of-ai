# Biography · Judea Pearl

> When symbolic AI was dead and deep learning had not yet risen, he lit a rationalist's lamp in the narrow gap; and when deep learning rose to dominance, he answered, coldly: "correlation is not causation."

![Judea Pearl at NeurIPS 2013](/images/people/judea-pearl.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## From Tel Aviv to Brooklyn

Judea Pearl was born on 4 September 1936 in Tel Aviv, then part of the British Mandate of Palestine, into a Jewish family. His youth ran through the war of Israeli independence in 1948. In 1960 he took a bachelor's degree in electrical engineering at the Technion — Israel Institute of Technology — and then made his way to the United States: first a master's at the Newark College of Engineering (now NJIT) in New Jersey, then a doctorate at the Polytechnic Institute of Brooklyn (now NYU Tandon), where in 1965 he received his electrical-engineering PhD with a thesis on electromagnetic memory.

After the doctorate he worked as an engineer at RCA Laboratories and Electronic Memories on superconducting and holographic storage. It was a forgotten decade — a man who would later rewrite the foundations of artificial intelligence spent his first ten years writing equations of electromagnetic fields. In 1969 he joined the University of California at Los Angeles, where he has remained, more than half a century, to this day.

## Heuristic Search: A First Appearance

Pearl's first important appearance in AI was the early-1980s systematisation of *heuristic search*. In 1984 he published *Heuristics: Intelligent Search Strategies for Computer Problem Solving*, unifying A*, game-tree pruning, and the role of Bayesian estimation in search within a single mathematical frame. In the AI classrooms of the 1980s the book stood beside the textbooks of **Nils Nilsson** and **Stuart Russell** as standard reference.

But Pearl himself soon saw something. Search answered the question *how to move*; the question on which AI was actually stuck was *how to reason in an uncertain world*.

## Bayesian Networks: 1985, the Turning Point

In 1985 Pearl published a short paper, "Bayesian Networks: A Model of Self-Activated Memory for Evidential Reasoning," and in 1988 expanded it into the foundational monograph *Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference*.

That brick of a book did something that has not since been surpassed: it dragged probability theory out of a corner of the textbook and onto the centre stage of AI.

The core idea of the **Bayesian network** is simple to the point of suspicion — draw the probabilistic dependencies among variables as a directed acyclic graph (DAG); nodes are variables, edges are direct causal or statistical dependencies; quantify the whole graph with a conditional probability table (CPT). Given partial observations, you can efficiently infer the posterior distributions of the rest.

It looks like nothing more than "graph plus probability." But Pearl's book gave the full mathematics: belief propagation, the d-separation criterion, the bridge between causal intuition and probabilistic independence.

The timing of the book is also irreplaceable. Around 1985 symbolism was sinking into the failure of expert systems, and connectionism, still under the shadow of Rosenblatt's death and *Perceptrons*, had not yet recovered. AI badly needed a new, serious, deployable mathematical frame.

The Bayesian network filled the vacuum almost overnight — papers using "Bayesian network methods" appeared in medical diagnosis, fault detection, natural language processing, and computer vision. By the early 1990s the Bayesian network had become one of the standard paradigms of AI.

## The Causal Ladder: The Birth of *do-calculus*

If the story had stopped there, Pearl would only have been "the standard-bearer of the Bayesian school." But he did the harder thing — he kept asking. The arrows in the Bayesian network: were they correlational, or causal?

The 2000 book *Causality: Models, Reasoning, and Inference* is the true peak of his career.

In it he systematised the mathematical language of *causal inference*: the structural causal model (SCM), the *do*-operator, the counterfactual conditional. Most importantly, he invented **do-calculus** — a formal system of three rules that can rigorously decide, given only observational data, whether some interventional effect is identifiable.

This is something statisticians had been arguing about for a century. From Francis Galton and Karl Pearson onward, mainstream statistics had deliberately deleted the word *cause* from its vocabulary, speaking only of *correlation*.

Neyman in 1923 and Rubin in 1974 had opened a first crack with the potential outcomes framework, but it leaned too heavily on randomisation. Pearl rewrote causal theory in the language of graphs, turning *causal identification from non-experimental data* from an empirical art into a mechanically computable algebra.

In 2011 the ACM awarded Pearl the Turing Award, "for fundamental contributions to artificial intelligence through the development of a calculus for probabilistic and causal reasoning."

## The Causal Ladder, and a Critique of Deep Learning

In 2018 Pearl, with Dana Mackenzie, published *The Book of Why: The New Science of Cause and Effect*. The popular book introduced his famous **Ladder of Causation**:

1. **Seeing / Association** — $P(Y|X)$ — "When I see X, what does Y do?"
2. **Doing / Intervention** — $P(Y|do(X))$ — "If I force X, what does Y do?"
3. **Imagining / Counterfactual** — $P(Y_{x}|X', Y')$ — "If I had not done that, what would have happened?"

Pearl's verdict was sharp: today's deep learning — including all large language models — is mostly stuck on the first rung. In *The New York Times*, in *Quanta Magazine*, in interview after interview, he has called current AI "glorified curve fitting."

The phrase has stung many. He has not retracted it. To him, intelligence without a causal model cannot answer *why*, and cannot generalise across new environments — because statistical correlation is fragile, and causal structure is stable.

## A Private Wound and a Public Dignity

On 23 January 2002, Pearl's son Daniel Pearl, *Wall Street Journal* correspondent for South Asia, was kidnapped in Karachi, Pakistan, by militants connected to al-Qaeda. He was murdered on 1 February. It is the great wound of Pearl's life.

In response, he and his wife Ruth Pearl founded the Daniel Pearl Foundation, devoted to inter-religious, inter-ethnic dialogue and the freedom of the press.

In public Pearl rarely mixed this with his academic work. But near the end of *The Book of Why* he wrote: what distinguishes a human being from a machine is not the ability to predict the next step, but the ability to ask, "if I had not done that…" — that is the counterfactual, the highest rung of the ladder of causation, and the very essence of mourning. A father's grief, in the end, found its echo in his mathematics.

## Selected Works

| Year | Work | Significance |
|------|------|--------------|
| 1984 | *Heuristics: Intelligent Search Strategies for Computer Problem Solving* | Systematised textbook of heuristic search |
| 1988 | *Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference* | Foundational monograph of Bayesian networks |
| 2000 | *Causality: Models, Reasoning, and Inference* | Introduced do-calculus; formal framework of causal inference |
| 2009 | *Causality* (2nd ed.) | Extended causal inference to full industrial application |
| 2018 | *The Book of Why: The New Science of Cause and Effect* (with Dana Mackenzie) | Ladder of causation; public critique of deep learning |
| 2011 | ACM Turing Award | "for fundamental contributions to AI through the development of a calculus for probabilistic and causal reasoning" |

## Historian's Note

::: tip Historian's Note
Pearl began with a single probability graph and ended with a single algebra of cause; in the rubble of symbolism and the flood of connectionism he walked a third road. The AI of the 1980s was a war of two lines — the symbolists writing rules, the connectionists adjusting weights, neither convincing the other. Pearl took no side; he asked the older question — *how does a human reason under uncertainty?* The answer turned out to be neither rules nor neurons but a probability graph. That alone would have placed him in the great houses. But his true distinction lies in the second step. With Bayesian networks already mainstream, he pressed on: are the arrows in the graph correlational, or causal? He pulled cause out of philosophy and into mathematics, written as computable algebra. This step was harder and lonelier than the first — for it forced him to challenge classical statistics and the white-hot enthusiasm of deep learning at once. While the world is intoxicated with "AI predicts everything," he answered, coldly, *correlation is not causation* — a banner that would not bend with the wind. A man who spent his life asking *why* answered the question with mathematics. That is itself the strongest causal proof.
:::

## Eyewitness Accounts

::: info Call for contributions
If you knew Judea Pearl personally or have firsthand sources or recollections, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Pearl, J. (1985). "Bayesian Networks: A Model of Self-Activated Memory for Evidential Reasoning." *Proceedings of the 7th Conference of the Cognitive Science Society*, UCLA.
2. Pearl, J. (1988). *Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference*. San Mateo, CA: Morgan Kaufmann.
3. Pearl, J. (2000, 2009). *Causality: Models, Reasoning, and Inference*. Cambridge: Cambridge University Press.
4. Pearl, J. (1984). *Heuristics: Intelligent Search Strategies for Computer Problem Solving*. Reading, MA: Addison-Wesley.
5. Pearl, J., & Mackenzie, D. (2018). *The Book of Why: The New Science of Cause and Effect*. New York: Basic Books.
6. ACM (2011). "Judea Pearl — A.M. Turing Award Citation." Association for Computing Machinery.
7. Hartnett, K. (2018). "To Build Truly Intelligent Machines, Teach Them Cause and Effect." *Quanta Magazine*, May 15, 2018.
8. Pearl, R., & Pearl, J. (Eds.) (2004). *I Am Jewish: Personal Reflections Inspired by the Last Words of Daniel Pearl*. Woodstock, VT: Jewish Lights.
