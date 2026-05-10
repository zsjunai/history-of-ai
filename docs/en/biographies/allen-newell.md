# Biography · Allen Newell

> Thirty-five years collaborating with Simon, never a public quarrel; with his last breath he finished a unified theory of mind. The light is dim — but without him, this discipline could not stand.

![Allen Newell (right) playing chess with Simon, c. 1958](/images/people/allen-newell.jpg){width=240 style="float:right; margin-left:1em; margin-bottom:1em;"}

## From Physics to RAND

Allen Newell was born in San Francisco in 1927, son of a professor of radiology at Stanford Medical School. He intended to be a physicist; he graduated from Stanford in 1949 and went on to Princeton's mathematics department for graduate study. But he soon found that what really interested him was neither physics nor pure mathematics, but **what a person is doing when he is making a decision**.

In 1950 he left Princeton for the RAND Corporation — an Air Force–funded think tank that gathered the country's leading applied mathematicians and systems analysts. At RAND he studied the decision processes of air-traffic controllers and worked on the simulation of organisational behaviour. He came to believe the brain was no mysterious jelly, but an information-processing system that could be modelled.

In 1952 **Herbert Simon** visited RAND and met Newell for the first time. They spoke of decision modelling and symbol manipulation, and they understood each other immediately. Newell would later recall that his collaboration with Simon was a "rare resonance of the spirit" — in thirty-five years they almost never had a real disagreement.

## Logic Theorist: Christmas Eve, 1955

In the autumn of 1955 Newell, then at RAND, was working on the question of how to write a program that could play chess. The question pushed him toward a deeper one: how to make a machine perform any kind of symbolic reasoning?

Around Christmas, with Simon and the RAND programmer Cliff Shaw, on the JOHNNIAC computer he wrote **Logic Theorist (LT)**. It was the first AI program in history. It could automatically prove the propositional theorems of **Bertrand Russell** and **Alfred North Whitehead**'s *Principia Mathematica* — proving 38 of the 52 in the relevant chapter.

LT introduced two concepts that would rewrite history: **heuristic search** and **list processing**. To realise LT, Newell, Simon, and Shaw together developed IPL — the Information Processing Language — the first programming language to support recursion and dynamic data structures, the direct inspiration for **John McCarthy**'s LISP.

In the summer of 1956 the three carried LT into the Dartmouth Workshop, the gathering later canonised as AI's creation. They were the only group present with a program that actually *ran*.

## GPS: The Ambition for the General

In 1957 the three produced their second program — the **General Problem Solver (GPS)**. LT had been designed for propositional logic. GPS aimed at something wilder: to abstract "solving any problem" into a single framework.

GPS's central method was **means–ends analysis**. Given an initial state and a goal, the program would compare the two, choose, from a pool of available *operators*, the one that most reduced the difference, and recurse. GPS was applied to symbolic integration, geometry problems, the Tower of Hanoi.

GPS was not, of course, truly *general* — it required a human to translate the problem into its state-space language. But as a paradigm, it set the dominant key of symbolic AI for the next thirty years: **search + heuristics + symbolic representation**.

## *Human Problem Solving*: Reading the Brain as a Program

Newell and Simon did not stop at writing programs. They wanted programs to read back into the brain.

Through the 1960s they ran experiments in great number: subjects solving geometry problems, ciphers, chess positions, **thinking aloud** — every word, every pause recorded, then mapped sentence by sentence onto symbol-processing steps. They found that high-level human thought could be fitted, with surprising precision, to a running program.

In 1972 they published the joint *Human Problem Solving*, more than nine hundred pages. The book established the **information-processing paradigm** for cognitive psychology — the mind is not the behaviourist's black box of stimulus and response, but an analysable, modellable, programmable symbolic machine.

## The Physical Symbol System Hypothesis

In 1975 Newell and Simon shared the Turing Award. Their 1976 acceptance address became one of the most-debated essays in AI: "Computer Science as Empirical Inquiry: Symbols and Search."

It put forward the **Physical Symbol System Hypothesis (PSSH)**:

> A physical symbol system has the necessary and sufficient means for general intelligent action.

It is the most rallying — and the most contested — claim in the philosophy of AI. It supplied symbolic AI with metaphysical legitimacy on one side; on the other, it drew endless objection — from John Searle's Chinese Room, to the connectionist counter-attack of the 1990s, to the wholesale bypass of the symbolic line by deep learning after 2010.

Even today, watching large language models learn symbols and continuous vectors in the same breath, the PSSH is like a pile driven into the ground — one can walk around it, but one cannot pretend it is not there.

## SOAR and the Last Programme

Through the 1980s Newell threw himself into something even more ambitious: **SOAR** — State, Operator, And Result — a **unified cognitive architecture** meant to explain, in a single mechanism, the whole of human cognition: perception, problem solving, learning, long-term memory, skill formation.

SOAR's centre was *chunking* — a learning mechanism that compressed solved subproblems into reusable units, echoing Simon's research on chess masters' position-pattern chunks. SOAR was not a problem solver of one kind; it was a programme for **how to build mind itself**.

In 1987 Newell delivered the William James Lectures at Harvard — psychology's highest honour. In 1990 the lectures became a book: *Unified Theories of Cognition*. It was the synthesis of his life. He wrote, in the book itself, that this was "the last major work of my career."

By then he was ill with cancer. He used his final years to finish, almost without rest, the lectures and the book. He died in Pittsburgh on 19 July 1992, aged sixty-five — fewer than two years after *Unified Theories of Cognition* appeared.

## The Twin Stars

The collaboration of Newell and Simon is almost without precedent in the history of science. In thirty-five years they jointly opened three great fields: artificial intelligence, the information-processing paradigm in cognitive psychology, and the computational modelling of decision. Their papers were sometimes signed *Newell & Simon*, sometimes *Simon & Newell* — the order, by legend, decided by a coin flip.

Simon wrote in his autobiography: "Allen was eleven years younger than I, but the colleague from whom I learned the most. Our arguments were always about facts, never about who was in charge."

To outsiders, Simon was the more dazzling — he later won the Nobel Prize in Economics, wrote autobiographies, gave public lectures, raised many students. Newell was more like the quiet partner, putting his strength into building the architecture. But anyone who knows CMU, who knows the history of AI, knows: Newell is to this discipline what Zhang Liang was to the Han dynasty — the strategist behind the throne, the planner of the campaign, the dim light without which nothing else stands.

## Selected Works

| Year | Work | Significance |
|------|------|--------------|
| 1956 | Logic Theorist (with Simon, Shaw) | First AI program in history |
| 1957 | GPS (with Simon, Shaw) | First attempt at general problem solving |
| 1958 | IPL (with Simon, Shaw) | First list-processing language; direct precursor of Lisp |
| 1972 | *Human Problem Solving* (with Simon) | Founding text of information-processing cognitive psychology |
| 1976 | "Computer Science as Empirical Inquiry" (with Simon) | Physical Symbol System Hypothesis |
| 1990 | *Unified Theories of Cognition* | The SOAR programme; manifesto of unified cognitive architecture |

## Historian's Note

::: tip Historian's Note
Newell is to AI what Zhang Liang was to the Han dynasty — never on the front line, always at the council. With Simon, in thirty-five years of collaboration, he wrote the first AI program, forged the information-processing paradigm of cognitive science, and stated the Physical Symbol System Hypothesis — a claim still under debate. The world remembers Simon's double crown; few remember that almost every name on the joint papers has Newell on it. This is not the injustice of fortune, but his own indifference to it. What he cared about was a deeper question: could one architecture explain the whole of mind? For this he spent his last years writing *Unified Theories of Cognition* — the manifesto of a scholar handing over, at the end of his strength, a complete programme; like one of the great Confucians of old, dictating an unfinished book from the sickbed. Deep learning today is bypassing the symbolic line. But the question SOAR posed — *does the mind require a unified architecture?* — remains unanswered. AI will, in the end, return to his question.
:::

## Eyewitness Accounts

::: info Call for contributions
If you knew Allen Newell personally or have firsthand sources or recollections, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Newell, A., Shaw, J. C., & Simon, H. A. (1957). "Empirical Explorations of the Logic Theory Machine: A Case Study in Heuristic." *Proceedings of the Western Joint Computer Conference*, 218–230.
2. Newell, A., & Simon, H. A. (1961). "GPS, A Program That Simulates Human Thought." In *Lernende Automaten*. Munich: Oldenbourg.
3. Newell, A., & Simon, H. A. (1972). *Human Problem Solving*. Englewood Cliffs, NJ: Prentice-Hall.
4. Newell, A., & Simon, H. A. (1976). "Computer Science as Empirical Inquiry: Symbols and Search." *Communications of the ACM*, 19(3), 113–126.
5. Newell, A. (1990). *Unified Theories of Cognition*. Cambridge, MA: Harvard University Press.
6. Laird, J. E., Newell, A., & Rosenbloom, P. S. (1987). "SOAR: An Architecture for General Intelligence." *Artificial Intelligence*, 33(1), 1–64.
7. Simon, H. A. (1991). *Models of My Life*. New York: Basic Books.
8. Laird, J. E., & Rosenbloom, P. S. (1992). "In Pursuit of Mind: The Research of Allen Newell." *AI Magazine*, 13(4), 17–45.
9. McCorduck, P. (2004). *Machines Who Think* (2nd ed.). Natick, MA: A K Peters.
