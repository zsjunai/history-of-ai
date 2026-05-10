# Annals · The Dawn (1943–1956)

> A runaway boy reads Russell's *Principia Mathematica* in a public library and writes to its author to dispute its logic. A few years later, the same boy co-authors a paper with a neurophysiologist proving that the brain can be translated into mathematics. Thirteen years after that, a small band of mathematicians, engineers, and psychologists gather at an Ivy League college in Hanover, New Hampshire, and give the cause they share a name: artificial intelligence. From 1943 to 1956 — these thirteen years are where everything begins.

## I. The Central Question: Can Machines Think?

Everything that happened between 1943 and 1956 can be reduced to different ways of answering one question: "Can machines think?"

The question sounds quaint today, but at the middle of the twentieth century it was a bomb dropped into the intellectual world. Humanity had just emerged from two world wars, and those wars had created urgent demands for radar, code-breaking, and ballistic computation, pushing mathematics, logic, and engineering into an unprecedented intersection. Electronic computers had stepped from blueprint into reality — ENIAC, EDVAC, and the Manchester Mark I lit up their vacuum tubes one after another. The moment a machine could execute an arbitrary sequence of instructions, a haunting thought became inevitable: if a machine can compute anything that is computable, then is "thinking" a kind of computation?

Around this question, at least four camps formed. They started from different premises, used different methods, and did not always understand one another — but the sparks each of them lit would, in the summer of 1956 at Dartmouth, converge into a single fire.

## II. The Logicians: Thought as a Dance of Symbols

### Turing and the Imitation Game

The British mathematician **Alan Turing (1912–1954)** had already proved something profound back in 1936. With his now-famous Turing machine model, he showed that there exists a universal machine capable of simulating the computation of any other machine. At the time this looked like an internal matter for logic, but Turing himself harbored larger ambitions.

In 1950, Turing published in the philosophy journal *Mind* a paper that was destined to change history — "Computing Machinery and Intelligence". Strikingly, this paper on machine intelligence began not with mathematical definitions but with a Victorian parlor game.

Turing described an "Imitation Game": through written exchanges, an interrogator tries to tell apart the two parties in another room — one human, one machine — without seeing them. If the machine can persistently fool the interrogator, on what grounds can we deny that it is "thinking"?

The design was elegant. Turing knew that the word "thinking" was a swamp in itself — philosophers could quarrel over its definition for centuries to no avail. So he sidestepped definitions and proposed an operational test instead. He did not ask "Is the machine truly thinking?", only "Is the machine's behavior indistinguishable from that of a thinker?".

The latter half of the paper was bolder still. Turing took apart, one by one, nine arguments against the possibility of machine thought — from the theological claim that only humans possess souls, to the mathematical objection drawn from Gödel's incompleteness theorems, to the consciousness argument that a machine "merely simulates without truly understanding". He dissected them with cool, sharp prose, like a surgeon working through old prejudices.

Turing even ventured a prediction: by the end of the twentieth century, a computer with about a billion bits of storage would be able to fool a human interrogator about 30 percent of the time in a five-minute conversation. The exact numbers may have been off, but the conviction behind them was clear — machine intelligence is not a question of "whether possible," only of "when."

### Church and the Boundary of Computation

Turing was not fighting alone. The American mathematician **Alonzo Church (1903–1995)** developed lambda calculus along an independent path during nearly the same period, characterizing the boundary of "computability" from another direction. The Church–Turing thesis asserts that anything that can be intuitively "effectively computed" can be computed by a Turing machine — or, equivalently, by lambda calculus. The thesis has never been rigorously proved, but it has also never been refuted. It quietly provided a philosophical foundation for AI: if thinking is some kind of information processing, and all information processing can be simulated by a Turing machine, then in principle a machine can think.

## III. The Neuroscientists: The Brain as a Computer

### A Wandering Boy and the Neuron Model

No retelling of the story of **Walter Pitts (1923–1969)** can do it justice.

Born in Detroit in 1923 into a poor family, Pitts suffered abuse from his father and bullying on the streets in his early years. As a teenager he ran away from home and took refuge in the library of the University of Chicago. He never formally enrolled, but among those bookshelves he taught himself mathematical logic, Latin, and Greek. According to one account, at fifteen he read *Principia Mathematica* by **Bertrand Russell (1872–1970)** and **Alfred North Whitehead (1861–1947)**, took issue with its logic, and wrote to Russell. The exact contents and aftermath of that correspondence exist in several versions — some say Russell wrote back inviting him to Cambridge, others that he was merely encouraged to audit lectures in Chicago. Whatever the details, one thing is certain: this teenager without any formal credential was already in contact with the cutting edge of mathematical logic.

Pitts stayed in Chicago, and there he met the man who would change his fate — the neurophysiologist **Warren McCulloch (1898–1969)**. McCulloch was twenty-five years older than Pitts, a singular figure who combined the temperament of a poet with the rigor of a scientist, obsessed with one question: how does the brain produce thought?

In 1943, this unlikely pair published "A Logical Calculus of the Ideas Immanent in Nervous Activity". Pitts was twenty years old, a wandering boy with no academic standing. The depth and originality of the paper were astonishing.

Their core idea was that a single neuron could be modeled as a simple logical gate — receiving multiple binary inputs (excitatory or inhibitory), and "firing" when the weighted sum of those inputs crossed a threshold. The model was extreme in its simplicity; real neurons are far more than two-state switches. But that simplification was its strength. McCulloch and Pitts proved that a network of such simple neurons could in principle compute any computable function — in other words, a neural network and a Turing machine were equivalent in computational power.

The significance of the paper went far beyond neuroscience. For the first time, it built a mathematical bridge between "brain" and "logic," hinting at a bold possibility: perhaps the secret of thought lies not in the biochemistry of neurons but in the pattern of their connections. If so, then any system with the same connection pattern — built of carbon-based neurons or silicon-based circuits — should be able to "think."

### Hebb: A Law for Learning

If McCulloch and Pitts described the "hardware" of the brain, how does the brain "program" itself?

In 1949, the Canadian psychologist **Donald Hebb (1904–1985)** offered an elegant answer in *The Organization of Behavior*. He proposed a learning principle: when two neurons fire together repeatedly, the synaptic connection between them is strengthened. Later writers compressed it into a slogan — "Neurons that fire together wire together."

The revolutionary aspect of Hebb's rule was that it offered a learning mechanism that required no external "designer." The network is not tuned by hand; rather, through repeated experience it adjusts its connection weights automatically. The idea directly inspired the perceptron and almost every connectionist learning algorithm that followed. In a sense, the backpropagation algorithm of deep learning seventy years later can still be regarded as a refined descendant of Hebb's intuition.

## IV. The Engineers: Make It Run

### Wiener and Cybernetics

If the logicians asked "What is thought?" and the neuroscientists asked "How does the brain work?", the engineers asked a more direct question: "Can we build it?"

The American mathematician **Norbert Wiener (1894–1964)** was among the earliest to answer. During the Second World War, Wiener studied anti-aircraft fire control — how could an automatic gun track a fast-moving enemy plane? He realized that the heart of this engineering problem was strikingly similar to motion control in biology: both relied on **feedback** — systems continuously comparing actual output with the desired target, and correcting the deviation.

In 1948, Wiener wrote up these insights in *Cybernetics: Or Control and Communication in the Animal and the Machine*. The book's ambition was to establish a unified framework for understanding all purposeful behavior in organisms and machines. Wiener's central thesis was that the essence of intelligent behavior lies not in whether it occurs in carbon or silicon, but in the patterns of feedback and regulation in information.

Cybernetics quickly became a sweeping interdisciplinary movement, drawing physiologists, psychologists, anthropologists, and mathematicians into a shared conversation. The Macy Conferences (1946–1953) became its salon, where scholars from different fields argued passionately about feedback, self-organization, and the nature of consciousness. Cybernetics provided one critical premise for the AI to come: intelligence is not the property of biology — it is a pattern of information processing that can be realized on different substrates.

### Shannon: Measuring Information

If Wiener answered "How does intelligent behavior arise?", **Claude Shannon (1916–2001)** answered a more fundamental question: "What is information?"

In 1948, Shannon at Bell Labs published "A Mathematical Theory of Communication", founding information theory in a single stroke. He gave a precise definition of the "bit" and proved that information could be quantified, compressed, and transmitted without loss. The paper's immediate goal was to address transmission efficiency over telephone lines, but its impact spilled far beyond communication engineering.

For the AI about to be born, information theory provided two crucial conceptual tools. The first was the concept of **entropy** — uncertainty could be precisely measured, and learning was, in essence, the reduction of uncertainty. This insight would later become the mathematical basis for loss functions, cross-entropy, and decision trees in machine learning. The second was the idea of **encoding** — the complex world could be compressed into compact symbolic representations, and good representations made information processing far more efficient. Seventy years later, "representation learning" in deep learning is still answering the same question: how to find the best encoding for data.

Shannon's interest in machine intelligence was no less keen. As early as 1950 he published "Programming a Computer for Playing Chess", systematically setting out the ideas of search trees and evaluation functions — a framework that would become the standard paradigm of game-playing AI, all the way down to Deep Blue's defeat of Kasparov in 1997. He also built an electronic mouse named "Theseus" that learned to navigate a maze using relays — though its mechanism differed from the SNARC neural-network machine **Marvin Minsky (1927–2016)** would soon construct, the two together carried the same signal: machines could not only compute, they could also "adapt."

### Von Neumann: From Theory to Silicon

If Turing defined "what is computable," the Hungarian-American mathematician **John von Neumann (1903–1957)** defined "how to compute it." Von Neumann's 1945 EDVAC report set out the architecture of the stored-program computer — programs and data held in the same memory, both able to be read and modified. That architecture lives on; nearly every modern computer is a "von Neumann machine."

But von Neumann's interest reached far beyond building a calculator. In his later years he became deeply absorbed by the analogy between brain and computer, leaving behind the unfinished *The Computer and the Brain* (published posthumously in 1958). In that thin volume, he carefully compared digital computers with nervous systems: computers are fast but serial, the brain is slow but massively parallel; computers use precise digital representations, the brain uses crude statistical encodings. Von Neumann was clear-eyed about the gap — the computers of his day could not simulate a brain — but he was convinced that some deep relationship between the two systems must exist.

### Minsky and SNARC

In 1951, the twenty-four-year-old Princeton graduate student Minsky and his classmate **Dean Edmonds (1924–2009)** did something that looked, on the surface, slightly mad: with about three hundred vacuum tubes, potentiometers, and a heap of war-surplus parts, they cobbled together the world's first hardware neural-network computer — SNARC (Stochastic Neural Analog Reinforcement Calculator).

SNARC simulated a network of forty neurons and could learn to find its way through a virtual maze. By today's standards its performance was negligible, but its symbolic significance was huge: McCulloch and Pitts's mathematics and Hebb's learning rule had at last walked off the page and into the physical world. Neural networks were no longer just a beautiful theory but something that could be plugged in, switched on, and made to truly "learn."

### Samuel: A Program That Surpasses Its Creator

In 1952, the IBM engineer **Arthur Samuel (1901–1990)** developed a program that played checkers. The revolutionary thing about it was not that it played chess-like games — that had been done before — but that it improved itself. Samuel did not try to enumerate all possible moves; instead, he let the program accumulate experience by playing against itself, continually adjusting its evaluation function.

In time, the program played better than Samuel himself. It was an unsettling result: the creator had been surpassed by his creation. Samuel later gave the method a name — "machine learning." The term entered the vocabulary of computer science from that moment on, and more than half a century later it would become the central engine of the entire field of AI.

## V. Dartmouth: A Naming Rite

### A Bold Proposal

By 1955, "Can machines think?" was no longer just a philosopher's pastime. Logicians had proved the universality of computation, neuroscientists had built mathematical models of the brain, engineers had constructed machines that could learn. But these efforts were scattered across mathematics, psychology, neuroscience, and electrical engineering, with no shared banner.

The American mathematician **John McCarthy (1927–2011)** decided to change that. The young scholar, then teaching at Dartmouth College, persuaded Minsky, IBM's **Nathaniel Rochester (1919–2001)**, and the founder of information theory, Shannon, to put their names on a proposal to the Rockefeller Foundation requesting funds for a two-month summer workshop.

The wording of that proposal is one of the most self-confident declarations in the history of academia:

> The study is to proceed on the basis of the conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it. An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans, and improve themselves.

McCarthy used a brand-new term to name the field — "artificial intelligence." The naming itself was a political act. Wiener's "cybernetics" was already famous, and Shannon's "information theory" had its own house. McCarthy later explained that he had deliberately avoided those existing frames; he did not want this new field to be a vassal of any other. He wanted a fresh banner, an independent identity.

The Rockefeller Foundation approved the proposal but with funding far below what had been requested — only seventy-five hundred dollars. The original "two-month workshop" had to be sharply pared back.

### The Summer of 1956

On June 18, 1956, the Dartmouth conference opened. McCarthy had hoped participants would stay the full two months for in-depth discussion. Reality was far less tidy. Most invitees came for only a week or two, sometimes only a few days. About a dozen researchers in total came and went, with very little overlap when everyone was actually in the same room.

And yet, in that loose, improvised, modest gathering, something genuinely remarkable happened.

The American computer scientist **Allen Newell (1927–1992)** and the American political-scientist-turned-cognitive-scientist **Herbert Simon (1916–2001)** brought along the "Logic Theorist," developed jointly with the programmer **Cliff Shaw (1922–1991)**. The program could automatically prove theorems from the *Principia Mathematica* of Whitehead and Russell — it succeeded on 38 of the 52 theorems in Chapter 2, and some of its proofs were even more elegant than those in the book.

The Logic Theorist created a sensation at Dartmouth. Simon later recalled telling his students just before Christmas in 1955: "Over Christmas, Allen Newell and I invented a thinking machine." It might have sounded like bravado, but Logic Theorist had in fact done what was previously thought to be the exclusive province of humans — creative mathematical reasoning. It came to be regarded as the first true AI program in the history of the field.

But the meaning of the Dartmouth conference reached beyond the demonstration of any single program. It accomplished something more fundamental: **it gathered researchers scattered across disciplines into a self-aware community, and gave that community a name, a program, and a core group of founders.** From that point on, whether you worked on neural networks or symbolic reasoning, whether your background was mathematics or psychology, you could say, "I do artificial intelligence."

## VI. Undercurrents and Foreshadowing

Looking back over these thirteen years, several undercurrents are worth noticing, because they will resurface again and again over the decades to come.

**First, the split of two metaphors.** The McCulloch–Pitts model and Hebb's rule treated the brain as a network of simple units, with intelligence emerging from patterns of connection; the Logic Theorist treated thought as the manipulation of symbols, with intelligence arising from inference and search. At Dartmouth, the two paths coexisted in harmony — Minsky, who studied neural networks, sat in the same room as Newell and Simon, who studied symbolic reasoning. But that harmony would be brief. "The brain is a network" and "the mind is a program" — these two metaphors would compete fiercely over the decades to come, alternately dominating the direction of AI research.

**Second, the underrating of learning.** From Hebb's rule to Samuel's checkers program, the pioneers of the dawn had already brushed up against a profound insight: real intelligence is not designed but learned. But after 1956 the glory of symbolism was about to arrive, and the paradigm of "hand-coded knowledge" would become the mainstream while "let the machine learn from data" was pushed to the margins. It would take more than half a century before the rise of deep learning would finally vindicate the neglected path.

**Third, the seed of optimism.** The Dartmouth participants left campus with an almost naive optimism. They believed that building a truly intelligent machine was a matter of one or two decades. The optimism was not entirely groundless — in just thirteen years they had shown that machines could learn, reason, and surpass their creators. But they badly underestimated the depth of the problem. This cycle of optimism and disillusionment would become a recurring leitmotif in the history of AI.

## VII. Timeline

| Year | Event | Key Figures |
|------|-------|-------------|
| 1936 | Turing machine published; Church independently proposes lambda calculus | Turing, Church |
| 1943 | Logical model of the neuron published; neural networks shown computationally equivalent to Turing machines | McCulloch, Pitts |
| 1946–53 | Macy Conferences on cybernetics; cross-disciplinary discussion of feedback, self-organization, and consciousness | Wiener et al. |
| 1948 | *Cybernetics* published, establishing a unified framework for behavior in organisms and machines | Wiener |
| 1948 | "A Mathematical Theory of Communication" founds information theory and defines the "bit" | Shannon |
| 1949 | Hebb's rule: "Neurons that fire together wire together" | Hebb |
| 1950 | "Computing Machinery and Intelligence" proposes the Turing test | Turing |
| 1950 | "Programming a Computer for Playing Chess" lays out the framework for game-playing AI | Shannon |
| 1951 | SNARC — the world's first hardware neural-network computer | Minsky, Edmonds |
| 1952 | Self-learning checkers program; the term "machine learning" is coined | Samuel |
| 1955 | Logic Theorist born; automatic proofs of theorems from *Principia Mathematica* | Newell, Simon, Shaw |
| 1955 | Dartmouth proposal submitted; the term "artificial intelligence" used for the first time | McCarthy, Minsky, Shannon, Rochester |
| 1956 | Dartmouth conference convened; AI is born as an independent discipline | McCarthy, Minsky, Shannon, Rochester |

---

::: tip Historian's Note
What is most moving about the dawn is not what the pioneers got right, but that they dared to ask. "Can machines think?" — at the time, the question was dismissed by most serious scholars as absurd, denounced by theologians as blasphemy, and treated by the public as science fiction. But Turing dared to ask, McCulloch and Pitts dared to answer with mathematics, Wiener dared to approach it through engineering, and McCarthy dared to give it a name and an institutional home. They did not contribute to an existing field; they created one out of thin air. That demanded not only intellectual gift but a kind of reckless courage. The light of the dawn moves us not because it illuminated answers, but because it illuminated the questions themselves. Seventy years on, we still walk along the few paths these pioneers traced — only the road has turned out far longer than they imagined.
:::

## Eyewitness Accounts

::: info Call for contributions
If you witnessed or have firsthand recollections of this period, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. McCulloch, W. S., & Pitts, W. (1943). "A Logical Calculus of the Ideas Immanent in Nervous Activity." *Bulletin of Mathematical Biophysics*, 5(4), 115–133.
2. Wiener, N. (1948). *Cybernetics: Or Control and Communication in the Animal and the Machine*. MIT Press.
3. Hebb, D. O. (1949). *The Organization of Behavior: A Neuropsychological Theory*. Wiley.
4. Turing, A. M. (1950). "Computing Machinery and Intelligence." *Mind*, 59(236), 433–460.
5. Shannon, C. E. (1948). "A Mathematical Theory of Communication." *Bell System Technical Journal*, 27(3), 379–423.
6. Samuel, A. L. (1959). "Some Studies in Machine Learning Using the Game of Checkers." *IBM Journal of Research and Development*, 3(3), 210–229.
7. Newell, A., & Simon, H. A. (1956). "The Logic Theory Machine: A Complex Information Processing System." *IRE Transactions on Information Theory*, 2(3), 61–79.
8. McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence."
9. von Neumann, J. (1958). *The Computer and the Brain*. Yale University Press.
10. Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. Basic Books.
11. Nilsson, N. J. (2009). *The Quest for Artificial Intelligence: A History of Ideas and Achievements*. Cambridge University Press.
12. Soni, J., & Goodman, R. (2017). *A Mind at Play: How Claude Shannon Invented the Information Age*. Simon & Schuster.
13. Abraham, T. H. (2002). "(Physio)logical circuits: The intellectual origins of the McCulloch-Pitts neural networks." *Journal of the History of the Behavioral Sciences*, 38(1), 3–25.
