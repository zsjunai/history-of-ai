# Annals · The Second Winter (1987–1993)

> In 1987, Apple released the Macintosh II at less than ten thousand dollars; running general software it was already approaching the speed of a hundred-thousand-dollar Lisp machine. That same year, Symbolics's order book began a cliff-edge fall. Two years later, DARPA's Strategic Computing Initiative quietly retreated. Three years after that, Japan's Fifth Generation project closed in silence. AI entered its second winter — and this time the cold was not only inside academia but throughout an entire industry.

## I. The Central Question: What Went Wrong with Expert Systems?

The first winter was the offspring of disappointed expectations — academia had promised too much and delivered too little. The second winter was different: it was the bursting of a commercial bubble.

Expert systems had been the brightest commercial star of AI. R1/XCON saved DEC 25 million dollars a year, and hundreds of companies rushed to deploy them. But around 1987, problems began to surface in earnest:

- **Maintenance costs spiraled.** In a system with thousands of rules, every new rule could conflict with existing ones. The larger the rule base, the harder the maintenance, until the cost of maintenance crossed a threshold and exceeded the value the system delivered.
- **The knowledge acquisition bottleneck remained.** Knowledge engineers extracting knowledge from experts was still slow, expensive, and unreliable. Experts' tacit knowledge could not be fully encoded.
- **Brittleness.** Expert systems handled only what their rules covered. Inputs outside the rules made them either fall silent or give absurd answers — and they did not know that they did not know. There was no graceful degradation, only cliff-edge failure.
- **No learning.** Expert systems did not improve from mistakes. Every fix needed manual intervention — finding the bad rule, understanding the error, editing by hand. The system never got better on its own.

These were not flaws of individual systems but structural problems with the entire paradigm. When CTOs began to grasp this, their enthusiasm for AI cooled fast.

## II. The Collapse of the Lisp Machine

### Moore's Law's Revenge

The collapse of the Lisp-machine market was the most dramatic event of the second winter.

In the early 1980s, Symbolics, LMI, and Texas Instruments sold Lisp machines for between fifty thousand and a hundred and fifty thousand dollars apiece, providing AI researchers and enterprises with the best platform for running LISP programs. But their business rested on an implicit assumption: that general-purpose computers would never run LISP efficiently.

Moore's law shredded that assumption. By 1987, general-purpose UNIX workstations from Sun Microsystems and others were performing well enough to run LISP smoothly, at a fraction of the price of dedicated Lisp machines. At the same time, C and later C++ became the mainstream of software development — and enterprises were no longer willing to buy dedicated hardware for a language popular only inside the AI community.

Symbolics was the largest domino to fall. The company that had registered the first ".com" domain on the internet saw its orders shrink fast in the late 1980s and slid toward bankruptcy in the early 1990s. LMI fell earlier. Texas Instruments exited the market. The whole Lisp-machine industry essentially vanished from the map within a few years.

### Chain Reaction

The market collapse mattered far beyond its own scale. It was a signal — a signal that "AI was finished." When investors saw a once-hot AI hardware market evaporate within a few years, their conclusion was not "Lisp machines are obsolete" but "AI is obsolete." That sentiment spread from Lisp machines through the entire AI industry — expert systems, AI consultancies, AI research labs.

Between 1987 and 1993, the global AI industry shrank dramatically. Many AI startups — Teknowledge, Intellicorp, Applied Intelligence Systems — either collapsed or quietly transformed into ordinary software companies, with the word "AI" silently removed from their product names.

## III. The End of the Grand Plans

### Coda for the Fifth Generation

Japan's Fifth Generation Computer project formally ended between 1992 and 1993 (the final evaluation report was released in March 1993).

Over ten years the project had absorbed roughly 450 million dollars (about 54 billion yen), mobilized hundreds of researchers, and produced large amounts of parallel-inference hardware and Prolog-derivative languages. But the final results fell far short of the original ambitions — neither natural-language understanding nor anything close to human reasoning was delivered.

The failure had multiple roots. The deepest was that the project bet on the wrong technical line. Its core assumption — that "logical reasoning + massive parallelism" would lead to intelligence — was already under serious question by the late 1980s. The difficulty of knowledge representation, the bottomless well of common-sense reasoning, the awkwardness of logical methods in handling uncertainty and ambiguity — these were problems already exposed in the first winter, and improved hardware had not made them go away.

Yet the Fifth Generation was not entirely without harvest. It advanced research in parallel computing, trained a generation of Japanese computer scientists, and Prolog left a lasting mark on the logic-programming community. More importantly, its grand narrative had spurred competitive American and European investment, indirectly pouring large sums of money into global AI research.

### The Ebb of the Strategic Computing Initiative

The U.S. Strategic Computing Initiative (SCI) under DARPA also began to shrink in the late 1980s. The initial plan had committed about a billion dollars to the development of autonomous vehicles, intelligent flight assistants, and battlefield management systems. It had funded some valuable basic research — including CMU's Navlab autonomous-driving project — but its core goals were similarly unmet.

In 1987, Jack Schwarz, the new head of DARPA's Information Processing Techniques Office (IPTO), drastically cut AI research funding and redirected money toward more "practical" areas. This time, even DARPA — AI's most loyal patron — had run out of patience.

### The End of the Alvey Programme

The British Alvey Programme was not renewed when it ended in 1990. The project had committed about 350 million pounds and produced some advances in knowledge engineering and human–computer interaction, but failed to nurture a competitive British AI industry. British AI research returned to the trough that had followed the Lighthill Report.

## IV. Embers in the Winter

### The Revival of Connectionism

The second winter was a disaster for symbolic AI but, paradoxically, the opposite for the other line — connectionism / neural networks.

In 1986, **Geoffrey Hinton (1947–)**, **David Rumelhart (1942–2011)**, and **Ronald Williams (1948–)** published in *Nature* "Learning representations by back-propagating errors." The paper proved what Minsky and Papert had implied was impossible in 1969: that multilayer neural networks could be effectively trained by the backpropagation algorithm, overcoming the limits of single-layer perceptrons.

The core idea of backpropagation was to send the error at the output layer backward through the network, layer by layer, adjusting each connection's weight so that the network's output gradually approached the desired value. The idea itself was not entirely new — **Paul Werbos (1947–)** had proposed something similar in his 1974 PhD thesis — but Hinton's 1986 paper demonstrated its effectiveness on real problems with clean experiments and drew wide attention.

Even so, the hardware of the late 1980s could not support training large neural networks. Backpropagation worked nicely on small networks, but training got slow as networks deepened, and was easily trapped by the "vanishing gradient" problem — weights in the lower layers were almost impossible to update. That difficulty would have to wait more than two decades, until Hinton's deep belief networks and the maturation of GPU compute, to be overcome.

### The Quiet Rise of Statistical Methods

Meanwhile, a completely different paradigm was quietly rising at the edge of AI: methods based on statistics and probability.

Speech recognition was the first to turn. From the late 1970s through the 1980s, **Frederick Jelinek (1932–2010)** and his team at IBM achieved persistent breakthroughs in speech recognition with hidden Markov models (HMMs) — not by understanding the "meaning" of speech but by counting the patterns in vast quantities of speech data. Jelinek had a famous half-joke: "Every time I fire a linguist, the performance of the speech recognition system goes up." The line was sharp, but it captured a paradigm shift exactly: from "let machines understand the rules" to "let machines learn regularities from data."

Natural-language processing was undergoing a similar transformation. Statistical approaches to part-of-speech tagging, parsing, and information retrieval began to displace hand-crafted grammar rules. They were less "elegant" than symbolic methods, but they were more robust, more scalable, and more able to benefit from the steadily growing volume of data.

This shift from "knowledge-driven" to "data-driven" was only an undercurrent in the second winter. But it would become the mainstream in the next era — the quiet years of advance — and ultimately, in the deep-learning revolution, would change everything.

### The Birth of the World Wide Web

In 1989, **Tim Berners-Lee (1955–)** invented the World Wide Web at CERN. In 1991 the first web page went live. The event seemed at the time to have no connection with AI — but it was about to release the largest data flood in human history. Twenty years later, that very data would feed deep-learning algorithms.

## V. Undercurrents and Foreshadowing

**First, "AI" became a dirty word.** The most lasting damage of the second winter was not the loss of money but the stigma attached to the term itself. Throughout the 1990s, many researchers who were in fact doing AI deliberately avoided the label. Speech recognition was called "statistical signal processing," computer vision was called "pattern recognition," planning systems were called "operations research" — substantively the same, just packaged in names that would not scare off funders or collaborators. The renaming itself was a measure of how deep the winter had run.

**Second, the shared lesson of two winters.** The first winter came from academia's overpromising; the second came from industry's overinvestment. But the root cause was the same: an overestimation of current capabilities and an underestimation of the depth of the problem. The lesson has been verified again and again in AI history — even in the large-language-model era of the 2020s, the same debate ("How far is AGI?") still goes on.

**Third, winter screened out directions.** Symbolic AI and expert systems took fatal damage in this winter and never returned to their peak. Statistical methods, neural networks, and the data-driven paradigm gathered strength quietly. In a sense, the second winter completed a kind of natural selection — clearing out the dominant paradigm and making room for a new one.

**Fourth, the infrastructure was being put in place.** Moore's law continued to run, the internet was expanding, digital data was exploding. By the early 1990s, the three pillars that would support the next AI revival — compute, data, and algorithms — were each accelerating along their own track. They had simply not yet been put together.

## VI. Timeline

| Year | Event | Key Figures |
|------|-------|-------------|
| Late 1970s–1980s | Jelinek's team makes sustained breakthroughs in speech recognition with HMMs | Jelinek |
| 1986 | Backpropagation paper published in *Nature* | Hinton, Rumelhart, Williams |
| 1987 | General workstations surpass Lisp machines; Lisp-machine orders begin to slide | — |
| 1987 | AI industry revenue contracts; many AI startups collapse or pivot | — |
| 1987 | DARPA IPTO's new head sharply cuts AI funding | Jack Schwarz |
| 1989 | Berners-Lee invents the World Wide Web | Berners-Lee |
| 1990 | UK Alvey Programme ends without renewal | — |
| Early 1990s | Symbolics slides into bankruptcy; the Lisp-machine era ends | — |
| 1992 | Japan's Fifth Generation project ends without meeting its core goals | — |
| 1993 | The term "AI" is widely avoided in industry and academia | — |

---

::: tip Historian's Note
The second winter hurt more than the first, because what was lost this time was not only academic reputation but real money. Investors discovered that what they had bought was not "thinking machines" but a heap of expensive, hard-to-maintain IF-THEN statements that could not move once they stepped outside their rules. On the wreckage of the Lisp machines was written one plain truth: dedicated hardware can never outrun the exponential growth of general-purpose compute. And yet, in the deepest part of winter, the most valuable clues were also being assembled. Hinton's 1986 backpropagation, Jelinek's statistical methods in speech recognition, and the first webpage Berners-Lee typed out in a CERN lab — these three apparently unrelated events were stockpiling the ammunition for a revolution twenty years away. History sometimes needs two winters to teach a field the same lesson: it was not that the direction of reasoning was wrong, nor that the direction of learning was wrong; it was that neither one alone could go all the way.
:::

## Eyewitness Accounts

::: info Call for contributions
If you witnessed or have firsthand recollections of this period, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). "Learning representations by back-propagating errors." *Nature*, 323, 533–536.
2. Werbos, P. J. (1974). *Beyond Regression: New Tools for Prediction and Analysis in the Behavioral Sciences*. PhD thesis, Harvard University.
3. Jelinek, F. (1976). "Continuous Speech Recognition by Statistical Methods." *Proceedings of the IEEE*, 64(4), 532–556.
4. Moto-oka, T. (1982). *Fifth Generation Computer Systems*. North-Holland.
5. Shapiro, E. (1983). "The Fifth Generation Project — A Trip Report." *Communications of the ACM*, 26(9), 637–641.
6. Berners-Lee, T. (1989). "Information Management: A Proposal." CERN Internal Document.
7. Hendler, J. (2008). "Avoiding Another AI Winter." *IEEE Intelligent Systems*, 23(2), 2–4.
8. Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. Basic Books.
9. Nilsson, N. J. (2009). *The Quest for Artificial Intelligence*. Cambridge University Press.
10. Haugeland, J. (1985). *Artificial Intelligence: The Very Idea*. MIT Press.
