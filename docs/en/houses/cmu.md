# House · Carnegie Mellon University

> One of the three great schools of AI, alongside MIT and Stanford—but CMU walked a different path: it treated symbolic reasoning, robotics, speech recognition, game-playing, and machine learning all as facets of a single "systems engineering" discipline. It trained the first generation of AI masters, gave birth to the first superhuman poker AI, and stood up the world's first undergraduate degree in AI.

## The Birth of the Logic Theorist

In the summer of 1956, during the two months of the Dartmouth conference, **Allen Newell (1927–1992)**, **Herbert Simon (1916–2001)**, and the programmer Cliff Shaw had already, on the IBM 701 at RAND, run **Logic Theorist**—the first true artificial-intelligence program in history. It could prove 38 of the theorems from chapter two of Russell and Whitehead's *Principia Mathematica*; one of its new proofs was even more elegant than the original. **John McCarthy (1927–2011)** had coined the term "Artificial Intelligence" only months earlier; Logic Theorist was the first time that phrase was given concrete flesh.

Newell and Simon at the time held joint appointments at RAND and the Carnegie Institute of Technology (which merged with Mellon Institute in 1967 to form CMU). In 1957 the trio wrote **GPS** (General Problem Solver), formalizing "means-ends analysis" into a general search framework. Their 1972 book *Human Problem Solving* married human-psychology experiments to symbolic search algorithms, and laid down the entire vocabulary of **information-processing psychology**. In 1975 Newell and Simon shared the Turing Award; in 1978 Simon also won the Nobel Prize in Economics for his work on bounded rationality—the only person in AI history to hold both supreme honors.

CMU's Department of Computer Science was formally established in 1965, among the earliest in the United States. From the start it bore the imprint of Newell and Simon: **cognition treated as a computable process**. That spirit ran through the SOAR cognitive architecture, the ACT-R cognitive models, expert systems, game-playing, all the way to today's reinforcement learning.

Worth recording is Newell's 1986 William James Lectures at Harvard, where he proposed **Unified Theories of Cognition**, arguing that human cognition should be explainable within a single computational framework. The 1990 book of the same name became near-required reading for cognitive science courses through the 1990s. This stance—"to understand the mind by engineering it"—gave CMU's AI research a distinctive "cognitive theory" flavor that neither MIT nor Stanford quite shared.

## The Robotics Institute and the Origins of Self-Driving

In 1979, robotics pioneer Raj Reddy and CMU president Richard Cyert co-founded the **Robotics Institute** (RI)—the first research institute in the United States dedicated to robotics. Reddy went on to share the Turing Award with Edward Feigenbaum in 1994, the first Asian recipient.

In 1984 the Robotics Institute launched **Navlab**, converting a Chevrolet van into an autonomous vehicle. In 1989 Reddy's PhD student Dean Pomerleau trained **ALVINN** (An Autonomous Land Vehicle in a Neural Network)—a three-layer neural network that took camera and laser-rangefinder input and produced steering angles. On the CMU campus, Navlab 1 with ALVINN drove itself at about five kilometers per hour.

In July 1995, Pomerleau and PhD student Todd Jochem drove a modified Navlab 5 (a 1990 Pontiac Trans Sport van) from Pittsburgh to San Diego: of the 4,587 kilometers, the system steered itself for 4,506 of them, at top speeds above 100 km/h. The trip became famous as "**No Hands Across America**." A footnote: the system used was RALPH (Rapidly Adapting Lateral Position Handler), Pomerleau's 1995 engineering evolution of the ALVINN idea, still driven by neural networks combined with image processing. A full decade before the 2005 DARPA Grand Challenge, this trip had already shown the world the feasibility of "end-to-end learning to drive."

The Robotics Institute remains one of the largest academic robotics organizations on Earth, with more than six hundred members; it has incubated Argo AI, Aurora, Aptiv-CMU, and a string of other autonomous-driving companies. In February 2015, Uber poached dozens of researchers from the Robotics Institute in a single night—one of CMU's most widely reported "industry raids," and a textbook case for the academic debate about how to keep publicly-funded talent from being hauled off by a single firm.

Beyond the Robotics Institute, CMU has invested for decades in **mechanical engineering and soft robotics** (Howie Choset's snake robots, Aaron Steinfeld's assistive robots) and **surgical robotics** (Takeo Kanade's medical imaging and surgical navigation). The Lucas-Kanade optical-flow method, invented in Kanade's "Dynamic Vision" lab in the 1990s, is still standard fare in computer-vision textbooks.

## Sphinx and Speech Recognition

In 1986, Reddy admitted a young PhD student from Taipei, then enrolled at Columbia: Kai-Fu Lee. Two years later, Lee finished his dissertation, *Automatic Speech Recognition: The Development of the SPHINX System*—the first **speaker-independent, continuous-speech, large-vocabulary** real-time speech recognizer in history. Sphinx used hidden Markov models (HMMs) for acoustic modeling, and on the *Resource Management* 1000-word task achieved unprecedented accuracy. In 1988 it stunned the speech-recognition community. Reddy later recalled that in 1986 the field had widely believed such recognition was "impossible within ten years"; Lee made it real in two.

Sphinx's code was later open-sourced as the CMU Sphinx series (Sphinx-2, 3, 4, PocketSphinx) and shaped two decades of open-source speech-recognition tooling. Lee graduated in 1988 and joined Apple to work on the Casper voice-assistant project, then went on to SGI, Microsoft Research Asia, Google China, and in 2009 returned to China to found Sinovation Ventures. CMU's speech-recognition lineage continues today—through James K. Baker, Alex Waibel (inventor of the time-delay neural network and of simultaneous-translation systems), and many others.

## Machine Learning as a Discipline

In 1988 CMU established the first **doctoral-level** machine-learning research unit in the United States—which grew into the Machine Learning Department, formally founded in 2006 as the world's first standalone ML department. Tom M. Mitchell took the chair.

Mitchell's 1997 textbook *Machine Learning* was the first ML book read by countless graduate students. The **Read the Web / NELL** project (Never-Ending Language Learning, 2010 onward) that he directed had a program continuously learning world knowledge from web pages, with no human intervention, for years on end—a landmark long-distance run in knowledge-graph research. By 2018 NELL had accumulated more than 90 million beliefs, the largest "machine self-taught knowledge base" before pretrained language models.

CMU built strongholds in statistical learning, probabilistic graphical models, reinforcement learning, and causal inference: Manuel Blum (Turing laureate); Larry Wasserman, working at the seam of statistics and machine learning; the inheritors of Andrew G. Barto's reinforcement-learning lineage; Clark Glymour, Peter Spirtes, and Richard Scheines of the causal-inference school (TETRAD and the PC algorithm).

## Libratus, Pluribus, and Imperfect-Information Games

CMU's tradition in game-playing AI has never been broken. When Deep Blue defeated **Garry Kasparov (1963–)** in 1997, CMU's Hsu Feng-hsiung was a core member of the Deep Blue team; ChipTest and Deep Thought, which he designed for his CMU dissertation, were Deep Blue's direct ancestors.

In January 2017, Tuomas Sandholm and his PhD student Noam Brown brought **Libratus** to the Rivers Casino, where it played 120,000 hands of heads-up no-limit Texas hold'em poker against four top professionals. After 20 days, Libratus came out ahead by 147 mbb per thousand hands, a margin of more than 17,000 dollars in chips, with statistical significance of 99.98%. It was the first time AI had defeated top humans at an **imperfect-information game**.

Between June and July 2019, Sandholm and Brown's next-generation system **Pluribus** moved the contest from heads-up to a six-player table—harder game-theoretically, larger in space, and more demanding in real-time decision-making. Pluribus too defeated 13 top professionals; the paper *Superhuman AI for Multiplayer Poker* appeared in *Science*. Astonishingly, it ran on a single 64-core server at less than 150 dollars a day, in stark contrast to other systems of the time that needed thousands of GPUs.

Noam Brown joined Facebook AI Research in 2020 and OpenAI in 2023, where he worked on the o1 series of reasoning models—Counterfactual Regret Minimization (CFR) and search ideas walked from the poker table into large language models. There is a quiet, charged thread running through AI history here: poker AI taught LLMs how to "think more deeply."

## A Banner for Education: The First AI Major

In May 2018, CMU's School of Computer Science (SCS) announced that, beginning that fall, it would admit students into **the first undergraduate degree in artificial intelligence in the United States** (B.S. in Artificial Intelligence). The curriculum spans mathematics, statistics, computer systems, and ethics, with equal weight on theory and systems engineering. The cohort is capped at around thirty students per year; the first class graduated in 2020. Industry and academia took note: the move publicly signaled that "AI is not merely one branch of computer science but a discipline worthy of its own training pipeline."

The overall structure of CMU's School of Computer Science has been remarkably stable for the past three decades. According to **CS Rankings**, which aggregates publication data across AI, ML, NLP, CV, and robotics, CMU has long held the world's number-one or co-top position. SCS comprises six independent units: the Computer Science Department, the Robotics Institute, the Language Technologies Institute (LTI), the Machine Learning Department, the Human-Computer Interaction Institute (HCII), and the Computational Biology Department. Putting language technology, machine learning, and robotics under one roof is itself a form of institutionalized interdisciplinarity.

## Talent Pipeline and the Future

CMU is one of the largest talent pipelines in the AI world. Pick any handful of names from its doctoral alumni and you can compose half of contemporary AI history: Kai-Fu Lee (Sinovation Ventures); **Andrew Ng (1976–)** (Coursera, Google Brain; postdoc at CMU); many of **Stuart Russell (1962–)**'s collaborators; **David Silver (1976–)** (lead author on AlphaGo, postdoctoral training at CMU); Ruslan Salakhutdinov (deep-learning pioneer, CMU professor and Apple's first head of AI research); Sebastian Thrun (CMU associate professor before Stanford and Google's self-driving project); Andrew Moore (former dean of CMU SCS and head of Google Cloud AI).

In recent years CMU has shifted weight further toward **AI systems and responsible AI**: CMU AI (cmu.edu/ai) unifies the schools under one banner; the Block Center for Technology and Society (founded 2018, expanded 2023) explicitly brings social impact into the research agenda; the joint large-model courses run by the Machine Learning Department and LTI have funneled graduates into core research roles at Anthropic, OpenAI, and Google DeepMind.

::: tip Historian's Note
Carnegie Mellon is to artificial intelligence what Qu and Song were to Chu, or what the Imperial Academy was to Han. It does not win by location—Pittsburgh's snow and the rust-belt's gloom are no match for sunlit Silicon Valley—and it does not win by capital, sitting an entire continent away from the venture funds. What it wins by is a near-stubborn engineering character: Newell and Simon wrote the first reasoning program; Reddy built the world's first robotics institute; Kai-Fu Lee and Sphinx let machines understand any speaker for the first time; Mitchell wrote the first machine-learning textbook for everyone; Sandholm and Brown taught AI to bluff at the poker table; and finally CMU listed AI itself as a major one could pick up at age eighteen. CMU does not chase trends, but every few years it builds a new "system" and shows it to the world. It tells us that AI is not a single algorithm but a composite—engineering, cognition, psychology, game theory, robotics, and language all braided together. From this inland polytechnic, an AI expedition has walked from Pittsburgh to the center of the world.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked or studied at CMU's School of Computer Science, the Robotics Institute, the Language Technologies Institute, or the Machine Learning Department, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Newell, A., Shaw, J. C., & Simon, H. A. (1957). "Empirical Explorations of the Logic Theory Machine: A Case Study in Heuristic." *Proceedings of the Western Joint Computer Conference*, 218–230.
2. Newell, A., & Simon, H. A. (1972). *Human Problem Solving*. Prentice-Hall.
3. Lee, K.-F. (1988). *Automatic Speech Recognition: The Development of the SPHINX System*. Kluwer Academic Publishers.
4. Pomerleau, D. A. (1989). "ALVINN: An Autonomous Land Vehicle in a Neural Network." In *Advances in Neural Information Processing Systems 1* (NIPS '88), 305–313.
5. Mitchell, T. M. (1997). *Machine Learning*. McGraw-Hill.
6. Mitchell, T., Cohen, W., et al. (2018). "Never-Ending Learning." *Communications of the ACM*, 61(5): 103–115.
7. Brown, N., & Sandholm, T. (2018). "Superhuman AI for Heads-up No-Limit Poker: Libratus Beats Top Professionals." *Science*, 359(6374): 418–424.
8. Brown, N., & Sandholm, T. (2019). "Superhuman AI for Multiplayer Poker." *Science*, 365(6456): 885–890.
9. Carnegie Mellon University (2018). "Carnegie Mellon Launches Undergraduate Degree in Artificial Intelligence." CMU News, May 10, 2018.
10. Pomerleau, D., & Jochem, T. (1996). "Rapidly Adapting Machine Vision for Automated Vehicle Steering." *IEEE Expert*, 11(2): 19–27.
11. Reddy, R. (1996). "The Challenge of Artificial Intelligence." *IEEE Computer*, 29(10): 86–98.
12. Shapiro, S. C. (Ed.) (1992). *Encyclopedia of Artificial Intelligence* (2nd ed.). John Wiley & Sons.
