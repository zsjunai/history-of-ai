# Annals · The First Winter (1973–1980)

> In 1973, a British mathematician who had never done a day's work in artificial intelligence wrote a report declaring that AI research had "delivered on none of its major promises." That report set off an academic massacre in Britain — almost every AI project had its funding cut overnight. On the other side of the Atlantic, the United States was less dramatic but no less irreversible in its loss of confidence. Problems once thought "solvable within ten years" now looked as if they had not even been correctly understood. Winter had come.

## I. The Central Question: What Went Wrong with AI?

The optimism of the Golden Age was a hangover, and 1973 was the morning the headache began.

The trouble was not that AI researchers had done something wrong; it was what they had promised. Simon's prediction that "within ten years a computer will be the world's chess champion" did not come true — in fact, the best chess programs of the day could not beat a club-level amateur. Minsky's pledge that AI would be "essentially solved within a generation" looked more and more like a postdated check that would never clear. Machine translation had absorbed millions of dollars and still could not produce usable output.

A deeper problem was emerging: researchers gradually realized that what they faced was not a single hard problem but a whole class of problems they could not even define clearly. Those problems shared a single name: **common sense**.

A three-year-old child knows that water spills out of a tipped cup, that a knocked-over block does not stand back up by itself, and that "I'm so angry I could die" does not mean Mommy is actually about to die. These trivial-seeming pieces of "knowledge" are vast in number, dense in interconnection, and tacit in acquisition — far beyond the reach of any symbolic system that tried to encode them by hand. This is the abyss later called the "common-sense problem." The reason the Golden Age's AI programs could only run in Blocks World was that Blocks World was a place where common sense was not needed.

## II. The Lighthill Report: Verdict and Aftershocks

### A Lethal Document

In 1973, **James Lighthill (1924–1998)** was commissioned by the UK Science Research Council to write an evaluation of the state of artificial-intelligence research. Lighthill was a distinguished applied mathematician and fluid-dynamicist with no research experience in AI — a fact that would become a focal point of dispute. Supporters argued that an outside view would be more objective; critics replied that an outsider should not pass judgment on a field he did not understand.

The conclusions were devastating. Lighthill divided AI research into three categories: A (advanced automation, such as industrial robots), B (building robots, involving perception and motor control), and C (intelligent applications of computers, such as embryonic expert systems). He thought Categories A and C had some value, but Category B — the heartland of AI research — was essentially a failure.

Lighthill's central argument was "combinatorial explosion": as a problem grows, the search space expands exponentially, and the tricks AI programs displayed in restricted environments could not scale to real-world complexity. There was, he argued, an unbridgeable gap between "solving a simplified version of a problem in the lab" and "solving the problem itself in reality."

### The Television Debate

In 1973 the BBC organized a televised debate around the Lighthill Report. Lighthill stood on one side; on the other were the standard-bearers of British AI — Edinburgh's **Donald Michie (1923–2007)** and Richard Gregory — and the visiting John McCarthy.

The atmosphere was combustible. Michie and McCarthy argued fiercely that Lighthill's understanding of AI was superficial, that he was judging a fast-moving field by a static yardstick. Lighthill was unmoved — he wanted to see "results," not "prospects."

The debate had no winner, but its consequences were clear. The UK Science Research Council accepted the report's basic verdict and sharply curtailed AI funding. With the exception of Edinburgh University, where Michie held the line, and the Centre for Cognitive and Computing Sciences (COGS) at the University of Sussex, British AI research shrank dramatically; most institutions closed their AI programs or merged them into other departments.

### The American Contraction

Things were less extreme in the United States, but the trend was the same.

Under the pressure of the Mansfield Amendment (1969), DARPA began to require that the research it funded have a clear connection to a "defense mission." For basic AI research this was a heavy blow — it is hard to explain how a Blocks World program helps national defense. Funding did not go to zero, but DARPA money began to flow toward more "practical" projects — speech recognition, image understanding, and other directions with clear military application.

At the same time, the aftershocks of the 1966 ALPAC report continued to spread — machine-translation research in the United States all but ceased, and would not begin to recover until the 1980s.

## III. Technical Bottlenecks: Hardware, Knowledge, and Frame

Winter was more than a matter of money and morale. It also exposed deep technical bottlenecks.

### The Famine in Compute

The computers of the 1970s were astonishingly weak by today's standards. A typical PDP-10 — the workhorse of AI labs at the time — had about 256K words (around 1 MB) of memory and could perform a few hundred thousand operations per second. That is roughly the compute of a cheap modern wristwatch.

Under such hardware, any program that required large-scale search, pattern matching, or learning quickly hit a performance ceiling. The Golden Age's demo programs ran in microworlds in part because of these hardware limits. But researchers did not at first weight this factor heavily — they believed algorithmic improvement could compensate for hardware deficits. The winter showed that, at the time at least, that belief did not hold.

### The Quagmire of Knowledge Representation

The core assumption of symbolic AI was that if you could represent knowledge in the right symbol structure and supply the right inference rules, the machine would behave intelligently. But "right representation" itself was an extraordinarily difficult problem.

Take a simple example: how should a computer understand "John walked into a restaurant; the waiter handed him a menu"? A human reader automatically infers that John is a customer, that the waiter works at the restaurant, that the menu is for ordering food. These "obvious" inferences depend on a large body of background knowledge — about how restaurants operate, about social roles, about commercial transactions. Minsky proposed his "frame" theory in 1974 to capture such background knowledge in structured units. **Roger Schank (1946–2023)** proposed the "script" theory, representing common-sense scenes as preset event sequences.

These theories worked well in small-scale demonstrations, but they all faced the same problem: the scale of common-sense knowledge is bottomless. You can write a "restaurant script," but you also need a "hospital script," a "supermarket script," a "funeral script" — and countless cross-links among them. The labor of knowledge engineering grew exponentially and could never be "finished."

### The Frame Problem

McCarthy and the British computer scientist Patrick Hayes posed in 1969 the "Frame Problem" — a deceptively simple but extremely deep difficulty: when an action occurs, how does the system know which things have changed and which have not?

When you move a cup from the table to the shelf, the cup's position changes, but its color does not, the table's position does not, the room's temperature does not, your name does not. Humans do not need to verify each of these "things that did not change" one by one — they are defaults. For a logical reasoning system, defaults do not exist — either you state explicitly that certain facts remain unchanged (a vast amount of work), or you assume everything is unchanged unless changed (but the conditions of "unless" are themselves a bottomless pit).

The Frame Problem has not been fully solved even today, but its 1970s formulation laid bare a fundamental difficulty in the symbolic AI methodology.

## IV. The Faithful and the Hidden Currents

Winter did not mean all research stopped. Some researchers carried on through funding scarcity and peer indifference, planting seeds of a future revival.

### The Embryos of Expert Systems

**Edward Feigenbaum (1936–)** and his team at Stanford had launched the DENDRAL project as early as 1965 — a program to help chemists analyze mass-spectrometry data. DENDRAL's key insight was that, instead of pursuing general intelligence, you could encode a specific domain expert's knowledge into a program. The thread was not fashionable in the Golden Age, when "general" was the goal — but in winter its practical value began to show.

In 1974, Feigenbaum's group launched MYCIN — an expert system to diagnose blood infections. MYCIN could give diagnostic suggestions and treatment plans from symptoms and lab results, and in a 1979 evaluation it achieved an "acceptable plan" rate of about 65 percent — comparable to or better than most human physicians in the test. MYCIN was never deployed clinically (in part because of legal and ethical concerns), but it proved something important: in a sufficiently narrow domain, "knowledge-intensive" AI systems could reach expert-level performance.

Expert systems would have their golden age in the next era — the 1980s.

### Logic Programming and Prolog

In Europe, **Alain Colmerauer (1941–2017)** at the University of Marseille and **Robert Kowalski (1941–)** at Imperial College London collaborated in 1972 to develop Prolog (Programming in Logic). Prolog embedded logical inference directly into the language: programmers needed only to declare facts and rules, and the system performed reasoning automatically.

Prolog gained wide adoption in the European AI community and would later become the core language of Japan's Fifth Generation Computer Systems project in the 1980s. It represented a different AI programming paradigm from the American LISP tradition, and showed that even at the depth of winter, innovation continued.

### The Whisper of Neural Networks

Although Minsky and Papert's *Perceptrons* had effectively frozen mainstream funding for neural-network research, a few researchers continued to work in the margins. The American Stephen Grossberg developed the mathematical theory of neural networks throughout the 1970s, and the Finn Teuvo Kohonen began his early work on self-organizing maps during this period (the foundational paper would appear in 1982). At the time, almost no one paid attention — but they kept the flame of connectionism alive.

## V. Undercurrents and Foreshadowing

Several threads from these seven years are worth noting.

**First, the very concept of "AI winter."** This was the first boom-and-bust cycle in AI history. It established a pattern that would replay again and again: overpromising → failure to deliver → collapse of confidence → flight of funding → marginalization. The damage was not only financial; the deterrent effect on young researchers was severe — a generation was warned away from AI, leaving a talent gap.

**Second, the parting of "narrow" and "general."** The winter taught some researchers a pragmatic lesson: rather than chase a far-off general intelligence, solve real, bounded, valuable problems. Feigenbaum's expert systems were the fruit of that turn. The shift would shine in the next era — but it also brought a new risk: a too-narrow system would, in time, trigger a different kind of disappointment.

**Third, hardware was waiting.** The compute of the 1970s could not support most of AI's ambitions. But Moore's law was quietly running — every two years or so the number of transistors on a chip doubled. By the early 1980s, computers were already an order of magnitude faster than at the beginning of winter. Improving hardware was preparing the material base for the next revival.

**Fourth, winter is not death.** Even with funding cut and public enthusiasm gone, AI research never stopped completely. Expert systems matured quietly in laboratories, Prolog took root in Europe, and theories of knowledge representation deepened in adversity. By the time Japan announced the Fifth Generation Computer Systems project in 1981, a new boom was already gathering force.

## VI. Timeline

| Year | Event | Key Figures |
|------|-------|-------------|
| 1969 | Mansfield Amendment requires DARPA funding to have defense relevance | — |
| 1972 | Prolog language born | Colmerauer, Kowalski |
| 1973 | Lighthill Report published; UK sharply cuts AI funding | Lighthill |
| 1973 | BBC televised debate on the Lighthill Report | Lighthill, Michie, McCarthy |
| 1974 | MYCIN expert system project launched | Feigenbaum |
| 1974 | Minsky proposes "frame" theory | Minsky |
| 1975 | DARPA funding contracts further, shifts toward applied projects like speech recognition | — |
| 1976 | Weizenbaum publishes *Computer Power and Human Reason* | Weizenbaum |
| 1977 | Feigenbaum proposes the concept of "knowledge engineering" | Feigenbaum |
| 1979 | Stanford launches the Knowledge Systems Laboratory (KSL) | Feigenbaum |

---

::: tip Historian's Note
The cruelty of winter is not the drying up of money but the freezing of a generation's imagination. When a field is publicly declared a "failure," the first to leave are not the mediocre but those who would have been most creative — talked out of it by mentors and peers urging them toward "more promising things." That loss of talent cannot be repaired by any amount of funding. And yet winter has its gifts. It clears out the bubble and leaves only those who truly love the field. It forces researchers down from the clouds to the ground, asking "what can AI actually do?" instead of "what should AI be able to do?" Feigenbaum's expert systems, Colmerauer's Prolog, Grossberg's lonely watch over neural networks at the edge — these embers from winter would burn brighter in the next spring. History keeps proving the same thing: winter is never the end, only the dividing line.
:::

## Eyewitness Accounts

::: info Call for contributions
If you witnessed or have firsthand recollections of this period, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. Lighthill, J. (1973). "Artificial Intelligence: A General Survey." In *Artificial Intelligence: A Paper Symposium*. Science Research Council.
2. Minsky, M. (1974). "A Framework for Representing Knowledge." MIT AI Memo 306.
3. Schank, R. C., & Abelson, R. P. (1977). *Scripts, Plans, Goals, and Understanding*. Lawrence Erlbaum Associates.
4. McCarthy, J., & Hayes, P. J. (1969). "Some Philosophical Problems from the Standpoint of Artificial Intelligence." *Machine Intelligence*, 4, 463–502.
5. Shortliffe, E. H. (1976). *Computer-Based Medical Consultations: MYCIN*. Elsevier.
6. Colmerauer, A., & Roussel, P. (1993). "The Birth of Prolog." In *History of Programming Languages II*, ACM Press.
7. Kohonen, T. (1982). "Self-Organized Formation of Topologically Correct Feature Maps." *Biological Cybernetics*, 43, 59–69.
8. Weizenbaum, J. (1976). *Computer Power and Human Reason: From Judgment to Calculation*. W.H. Freeman.
9. Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. Basic Books.
10. Nilsson, N. J. (2009). *The Quest for Artificial Intelligence*. Cambridge University Press.
11. Fleck, J. (1982). "Development and Establishment in Artificial Intelligence." In *Scientific Establishments and Hierarchies*, ed. Elias, Martins & Whitley. Reidel.
