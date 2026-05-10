# Annals · The Age of Expert Systems (1980–1987)

> In 1980, a program that helped DEC configure its computers saved the company 25 million dollars a year. The same year, the Japanese government committed about 450 million dollars to launch the Fifth Generation Computer project, vowing to build thinking machines within ten years. Wall Street took notice, venture capital poured in, the stock of Lisp-machine companies soared. AI woke from its winter and threw itself headlong into a wave of commercialization. No one noticed that the foundations of this boom were as fragile as the last.

## I. The Central Question: Knowledge Is Power?

If the creed of the Golden Age was "intelligence is search," the creed of the Age of Expert Systems was "knowledge is power."

The shift came from a pragmatic insight: rather than chase an unattainable general intelligence, encode the knowledge of domain experts into programs and let machines reach expert-level performance in narrow but valuable areas. The standard-bearer of this line was **Edward Feigenbaum (1936–)**, who in 1977 explicitly proposed the concept of "knowledge engineering" — arguing that the bottleneck of AI was not reasoning but knowledge acquisition.

Feigenbaum's claim turned the field around. The Golden Age researcher chased a general inference engine — give it any problem and it would solve it by search and logic. Feigenbaum said: the inference engine can be simple; what matters is the knowledge you pour into it. A system filled with infectious-disease knowledge could diagnose like an infectious-disease physician; a system filled with computer-configuration rules could configure hardware like an engineer.

Philosophically, this was a dimensional retreat — from "build general intelligence" to "simulate specific expertise." Commercially, it was a breakthrough — because for the first time, AI became useful.

## II. R1/XCON: The First AI That Made Money

### A Twenty-Five-Million-Dollar Program

The signature event of the Age of Expert Systems happened in 1980. **John McDermott (1942–)** at Carnegie Mellon University built an expert system called R1 (later renamed XCON) for Digital Equipment Corporation (DEC). R1's job was concrete: configure VAX systems based on customer orders — choose the right components, check compatibility, plan the physical layout.

The task seemed mundane, but its commercial value was startling. Before R1, DEC needed a team of senior engineers to assemble each configuration by hand, a slow and error-prone process. Once R1 went into production, it saved DEC about 25 million dollars a year, with configuration accuracy above 95 percent.

R1/XCON was a watershed for the commercialization of AI. It proved one simple but important thing: AI could make money. The news swept the business world, kicking off an expert-systems gold rush.

### Industry Boom

In the first half of the 1980s, expert systems spread quickly through industry. By the end of the decade, more than two-thirds of the *Fortune* 500 either had deployed expert systems or were developing them. The applications ranged from manufacturing fault diagnosis to financial credit approval, from geological prospecting to military logistics — almost everywhere.

A flock of dedicated AI companies arose. Teknowledge, Intellicorp, Applied Intelligence Systems and others were founded, selling expert-system development tools and consulting services to enterprises. By 1985, the global AI industry was estimated to bring in around one billion dollars a year.

## III. Lisp Machines: A Hardware Carnival

### The Lure of Specialized Silicon

The boom in expert systems pulled along another market: Lisp machines.

LISP was the main development language for expert systems, but running LISP programs efficiently on general-purpose computers was painful — general processors were not optimized for LISP's recursion, garbage collection, and symbol manipulation. That gave rise to a bold idea: why not build a computer dedicated to running LISP?

The MIT AI Lab developed the first Lisp machine prototype. Two companies — Symbolics and LMI (Lisp Machines, Inc.) — spun out of MIT to commercialize the design. Symbolics in 1985 registered the very first ".com" domain in internet history (symbolics.com), a symbol of the AI commercial era. Texas Instruments and Xerox also launched their own Lisp machine product lines.

Lisp machines were priced from fifty thousand to over a hundred thousand dollars — extravagantly expensive for individuals, but acceptable for large enterprises and government labs. At its peak, the Lisp machine market had annual sales in the hundreds of millions.

### A Market Doomed to Die

But the business model of Lisp machines rested on a fragile premise: that general-purpose computers would never be fast enough to run LISP efficiently. Moore's law was quietly demolishing that premise. By the mid-to-late 1980s, the performance of general-purpose microprocessors (especially the RISC chips on Sun workstations) had caught up with — or surpassed — that of dedicated Lisp machines, at a fraction of the price.

The collapse of the Lisp-machine market would arrive fast and hard, and become one of the fuses that ignited the second AI winter.

## IV. The Fifth Generation: Japan's Ambition

### A National Effort

In 1981, Japan's Ministry of International Trade and Industry (MITI) formally launched the Fifth Generation Computer Systems (FGCS) project — a ten-year program with about 450 million dollars (around 54 billion yen) of investment.

Its goals were sweeping: develop a brand-new computer architecture, centered on parallel inference machines and the Prolog language, capable of natural-language understanding, knowledge reasoning, and intelligent dialogue. The Japanese government framed the project as a national strategy — just as it had done with semiconductors twenty years earlier, Japan would leapfrog its competitors in AI.

### Global Shockwave

The announcement set off chain reactions around the world.

The American response was nearly panicky. DARPA quickly launched the Strategic Computing Initiative (SCI), pouring around one billion dollars into AI and advanced computing research. Spurred by the Alvey Report, Britain launched the Alvey Programme, committing about 350 million pounds — effectively reversing the Lighthill Report and admitting that the British retreat from AI had been a mistake. Europe also launched the ESPRIT programme.

The Fifth Generation project rekindled governments' enthusiasm for AI. But it also created an investment logic driven by competitive fear rather than scientific assessment — "the Japanese are doing it, we cannot fall behind." That logic poured huge sums into AI research in the short term, but it also pushed expectations even higher.

### The Final Outcome

When the Fifth Generation project ended in 1992, it was widely considered to have failed at its core goals. The parallel inference machines did not reach the projected performance, and the Prolog-based knowledge processing systems did not display anything close to human intelligence. But the project was not without legacy — it advanced research in logic programming, trained a generation of Japanese computer scientists, and, by spurring the American and European reactions, indirectly poured large sums of money into AI research worldwide.

## V. The Knowledge Bottleneck: Cracks Beneath the Boom

In the midst of the expert-systems frenzy, a deep problem was emerging: the **knowledge acquisition bottleneck**.

Building an expert system required "knowledge engineers" to spend months or years interviewing domain experts, translating their knowledge into "if-then" rules, and then debugging and validating the system through endless iterations. The process was slow, expensive, and dependent on the personal skill of the knowledge engineer.

A more fundamental problem was that much expert knowledge is "tacit" — even the experts themselves cannot clearly articulate why they made a given judgment. A senior physician may glance at a patient and reach a tentative diagnosis, but be unable to say what he had used — skin tone? gait? tone of voice? or pattern matching against decades of cases? That intuitive kind of knowledge cannot be translated into IF-THEN rules.

As expert systems were deployed in increasingly complex domains, the knowledge bottleneck became more acute. The systems grew bloated — rule bases of thousands of rules — and at the same time more brittle: the moment a case fell outside the rules, the system either gave a wrong answer or failed entirely. There was no "common sense" to fall back on, no "intuition" to lean on, and no way to learn from mistakes.

Feigenbaum himself recognized the issue. In *The Fifth Generation* (1983), co-authored with Pamela McCorduck, he both cheered the prospects of expert systems and quietly admitted that knowledge acquisition was "one of the hardest problems in AI."

## VI. Undercurrents and Foreshadowing

**First, the success and trap of "narrow AI."** Expert systems proved that AI could create commercial value in narrow domains — something neither the Golden Age nor the winter had achieved. But "narrow" also meant brittle. Each expert system handled only one specific area, could not transfer, could not learn, could not adapt to change. As enterprises found the cost of maintaining and updating these systems climbing, disappointment was inevitable.

**Second, learning was still ignored.** The knowledge in expert systems came from manual encoding rather than from data. That meant the systems could only know what humans had explicitly told them — no more, no less. In an era when data was beginning to explode, this methodological limit would only become more conspicuous.

**Third, hardware was accelerating.** The 1980s were a decade of rapid microprocessor improvement. General-purpose workstations caught up and overtook Lisp machines, foreshadowing the collapse of that market — and opening space for more compute-intensive methods (such as the neural networks that would come later).

**Fourth, connectionism was reawakening.** In 1986, **Geoffrey Hinton (1947–)**, **David Rumelhart (1942–2011)** and **Ronald Williams (1948–)** published the modern formulation of the backpropagation algorithm, showing that multilayer neural networks could be effectively trained. The paper rekindled hope in connectionism — although it would take more than two decades, until GPUs and big data matured, before that hope was fully realized.

## VII. Timeline

| Year | Event | Key Figures |
|------|-------|-------------|
| 1980 | R1/XCON expert system goes live at DEC, saving 25 million USD a year | McDermott |
| 1981 | Japan announces the Fifth Generation Computer project; about 450 million USD committed | — |
| 1982 | DARPA launches the Strategic Computing Initiative (SCI) | — |
| 1983 | UK launches the Alvey Programme | — |
| 1983 | Feigenbaum and McCorduck publish *The Fifth Generation* | Feigenbaum |
| 1985 | Symbolics registers the first .com domain on the internet | — |
| 1985 | Global AI industry revenue around 1 billion USD a year | — |
| 1986 | Backpropagation paper published; multilayer networks can be effectively trained | Hinton, Rumelhart, Williams |
| Late 1980s | Over two-thirds of the Fortune 500 adopt or develop expert systems | — |
| 1987 | General-purpose workstations surpass Lisp machines; the Lisp-machine market begins to collapse | — |

---

::: tip Historian's Note
The Age of Expert Systems is the most commercial chapter in AI's history. It proved a thing the Golden Age and the winter had not: AI could make money. The 25 million dollars R1 saved DEC each year was more persuasive than any academic paper. But there is a chasm between "able to make money" and "having understood intelligence." What expert systems earned was the sweat of knowledge engineers — they ferried human knowledge into machines one rule at a time, and maintained and updated it one rule at a time. That is not learning, that is hauling. When the cost of hauling exceeded the gain, the bubble burst. The deeper lesson: the AI industry of the 1980s repeated the mistake of the Golden Age — using short-term success to extrapolate long-term prospects. R1 could configure computers, but that did not mean expert systems could solve everything, just as GPS could solve the Tower of Hanoi but not produce general intelligence. The pendulum of history was about to swing again to the other extreme.
:::

## Eyewitness Accounts

::: info Call for contributions
If you witnessed or have firsthand recollections of this period, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. McDermott, J. (1982). "R1: A Rule-Based Configurer of Computer Systems." *Artificial Intelligence*, 19(1), 39–88.
2. Feigenbaum, E. A., & McCorduck, P. (1983). *The Fifth Generation: Artificial Intelligence and Japan's Computer Challenge to the World*. Addison-Wesley.
3. Feigenbaum, E. A. (1977). "The Art of Artificial Intelligence: Themes and Case Studies of Knowledge Engineering." *Proceedings of IJCAI-77*.
4. Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). "Learning representations by back-propagating errors." *Nature*, 323, 533–536.
5. Shortliffe, E. H. (1976). *Computer-Based Medical Consultations: MYCIN*. Elsevier.
6. Moto-oka, T. (1982). *Fifth Generation Computer Systems*. North-Holland.
7. Alvey Committee (1982). *A Programme for Advanced Information Technology: The Report of the Alvey Committee*. HMSO.
8. Buchanan, B. G., & Shortliffe, E. H. (1984). *Rule-Based Expert Systems: The MYCIN Experiments of the Stanford Heuristic Programming Project*. Addison-Wesley.
9. Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. Basic Books.
10. Nilsson, N. J. (2009). *The Quest for Artificial Intelligence*. Cambridge University Press.
