# Annals · The Golden Age (1956–1973)

> In 1957, Simon and Newell predicted: "Within ten years, a digital computer will be the world's chess champion." The next year, McCarthy invented a language that would reshape the history of programming. A few years later, a program impersonating a psychotherapist had secretaries believing they were talking with a real human being. Around the same time, a psychologist built a machine that could learn for itself, only to be sentenced to oblivion by his own peers. These seventeen years were the most spirited in the history of AI — and the seventeen years that planted the most bitter seeds.

## I. The Central Question: How Far Is General Intelligence?

After Dartmouth, the pioneers of AI no longer faced the philosophical question of whether machines could think. They faced an engineering one: "How long until general intelligence?"

Their answers brimmed with an almost reckless optimism. **Herbert Simon (1916–2001)** and **Allen Newell (1927–1992)** predicted in 1957 that "within ten years a digital computer will be the world's chess champion" and "will discover and prove an important new mathematical theorem". **Marvin Minsky (1927–2016)** went further in 1967: "Within a generation … the problem of creating 'artificial intelligence' will substantially be solved."

These predictions were not pulled out of thin air. In the few years after 1956, AI programs had already proven mathematical theorems, played chess, translated (crudely) between languages, and solved algebra problems. Each new result was treated as a milestone on the road to general intelligence. Government money flowed in — the U.S. Defense Advanced Research Projects Agency (DARPA) poured millions into the AI laboratories at MIT, Carnegie Mellon University (CMU), and Stanford with almost no strings attached.

But behind the optimism lurked a fatal cognitive error: researchers equated "the ability to solve a specific problem in a constrained environment" with "approaching general intelligence." They were about to discover that the distance between a blocks-world demo and the real world was far greater than they imagined.

## II. The Golden Years of Symbolism

### McCarthy and LISP

After Dartmouth, **John McCarthy (1927–2011)** did not rest on the laurels of having named the field. He set himself a practical problem: what kind of programming language did AI researchers need?

The mainstream languages at the time — FORTRAN and assembly — were built for numerical computation and machine control, and were extremely awkward for symbolic and logical work. In 1958, McCarthy designed and implemented LISP (LISt Processing) at MIT. Its core data structure was the list; recursion replaced iteration; programs and data were treated as the same kind of thing — a LISP program was itself a data structure that could be modified and executed.

LISP's design was decades ahead of its time. Concepts it introduced — garbage collection, conditional expressions, higher-order functions — would be absorbed into mainstream languages over the following decades. Python's list comprehensions, JavaScript's functional patterns, and even Java's lambda expressions can all be traced back to LISP's gene line. Within AI itself, LISP would dominate for nearly thirty years as the lingua franca of symbolic AI.

McCarthy also proposed in 1958 the idea of an "Advice Taker" — a general program that could accept new knowledge and reason from it. The vision was never fully implemented, but the direction it described — giving machines common sense and the ability to reason logically — defined the central agenda of symbolic AI for the next twenty years.

### Newell and Simon: A General Problem Solver

After the success of Logic Theorist, Newell and Simon were even more convinced of one belief: human problem-solving could be decomposed into a set of general search and reasoning strategies. In 1957 they turned that belief into a program — the General Problem Solver (GPS).

GPS's central idea was "means–ends analysis": compare the current state with the goal state, identify a difference-reducing operation, and recursively decompose the problem into subproblems. The strategy sounded almost trivially simple, yet it could indeed solve problems as varied as the Tower of Hanoi, logical proofs, and simple algebraic transformations.

From this Newell and Simon drew a bold theoretical claim: the essence of intelligence is "search over symbol structures." They named it the **Physical Symbol System Hypothesis** — a system capable of creating, modifying, and operating on symbol structures has the necessary and sufficient means for general intelligent action.

The hypothesis became the creed of the Golden Age. It also planted the deepest controversy of the period: if intelligence really reduced to symbol manipulation, how were we to explain common sense, intuition, and perception — abilities that did not look like "reasoning" at all?

### Minsky and the Microworlds

Minsky chose another path. Rather than try to solve general intelligence in one stroke, he proposed first making machines display intelligent behavior in highly simplified "microworlds," then gradually expanding to richer domains.

The exemplar of this strategy was MIT's "Blocks World" — a virtual environment with a handful of colored blocks and a robotic arm. The machine had to understand natural-language instructions like "put the red block on top of the blue one" and plan how to act on them. In 1971, Minsky's student **Terry Winograd (1946–)** showcased the SHRDLU system, which displayed remarkable natural-language understanding inside the Blocks World — answering questions about the position of blocks, executing complex move commands, and even resolving pronoun references.

In the short term, the microworld strategy produced dazzling results. But it also bred a dangerous illusion: programs that worked beautifully in Blocks World made it seem that natural-language understanding had been "essentially solved." The truth was that Blocks World worked precisely because of its closed nature — limited vocabulary, simple physics, no ambiguity. Once you stepped out of that carefully built greenhouse, the same techniques could not move an inch.

## III. The Illusion of Conversation

In 1966, MIT professor **Joseph Weizenbaum (1923–2008)** released a program named ELIZA. ELIZA imitated a Rogerian therapist using simple pattern matching and templated substitution. When a user typed, "I've been feeling sad lately," ELIZA would reply, "Can you tell me why you feel sad?" — essentially turning the user's words back into a question.

ELIZA's code was extremely simple — there was no real "understanding" of language, only a few dozen pattern-matching rules. But what happened next caught Weizenbaum off guard, and shook him deeply.

His own secretary, while using ELIZA, asked Weizenbaum to leave the room so she could speak with the program "in private." Some psychiatrists earnestly proposed using ELIZA in clinical therapy. People projected real emotion and trust onto a simple text-matching program — even though Weizenbaum had openly explained from the start that it was just a parlor trick.

The phenomenon came to be known as the "ELIZA effect": humans are predisposed to read into a machine's output far more "understanding" and "intelligence" than the machine actually has.

Weizenbaum was deeply troubled by the discovery. He turned from one of AI's most enthusiastic advocates into one of its sharpest critics. In 1976 he published *Computer Power and Human Reason*, warning that some human activities — like the empathy required in psychotherapy — should not be delegated to machines, even if it became technically feasible. Inside AI circles the book was treated as betrayal; half a century later, when ChatGPT was being used by millions for emotional companionship and mental-health counseling, Weizenbaum's warnings looked sharper than ever.

## IV. The Perceptron Affair

### Rosenblatt's Machine

While the symbolists were busy proving theorems and building microworlds, another lineage was quietly advancing.

In 1957, the American psychologist **Frank Rosenblatt (1928–1971)** at Cornell University proposed the "perceptron" model and, the following year, realized it on a custom hardware platform called Mark I. The perceptron was essentially a learnable version of the McCulloch–Pitts neuron — it received inputs (for instance, the pixels of a simple image), computed a weighted sum through adjustable connection weights, and output a classification. The crucial point was that those weights were not set by hand but adjusted automatically through a learning algorithm working from training examples.

In 1958, the U.S. Office of Naval Research (ONR) held a press conference for the perceptron. *The New York Times* enthused that the perceptron was "the embryo of an electronic computer that [the Navy] expects will be able to walk, talk, see, write, reproduce itself and be conscious of its existence." Rosenblatt himself was optimistic, but his academic papers were far more cautious than the headlines. The bubble that the press created, however, was hard to take back.

### Minsky and Papert's "Verdict"

The high-profile arrival of the perceptron alarmed the symbolist camp. Minsky was no stranger to neural networks — he had built SNARC in 1951 — but by the 1960s he had moved fully to the symbolist line, and grew increasingly impatient with what he saw as the perceptron camp's overselling.

In 1969, Minsky and the South African–American mathematician **Seymour Papert (1928–2016)** published *Perceptrons*. The book used rigorous mathematics to point out a fundamental limitation of single-layer perceptrons: they could not compute even a function as simple as XOR — given two binary inputs, output true if and only if exactly one of them is true.

Mathematically, the conclusion was correct. The trouble was that its influence reached far beyond the mathematics. Minsky and Papert hinted in the book — though they did not strictly prove it — that multilayer networks might be unable to overcome these limits either. The hint was widely read by the AI community as a final verdict that "neural networks are a dead end."

The damage was devastating. Funding flowed out of neural-network research and into symbolic AI. Young researchers were warned away from the "refuted" line. Rosenblatt himself drowned in a boating accident in Chesapeake Bay on July 11, 1971 — his forty-third birthday — never living to see his work vindicated.

History would later prove Minsky and Papert's pessimism about multilayer networks wrong. In 1986, Hinton and others showed that the backpropagation algorithm could effectively train multilayer networks, and XOR and even more complex problems became solvable. But for nearly twenty years before that, neural-network research was driven into the cold.

The episode remains one of the most contested events in AI's history. Some hold that Minsky was defending scientific rigor; others, that he was using academic competition to strangle a rival research line. The truth probably lies somewhere in between — but whatever the motive, the consequence is clear: the spark of connectionism was nearly snuffed out at the end of the Golden Age and not reignited for two decades.

## V. Robots Step Out of the Lab

### Shakey: The First Autonomous Robot

Beyond the disputes between symbolic reasoning and neural networks, some researchers tried to answer a more direct question: could a machine act autonomously in the physical world?

In 1966, the Stanford Research Institute (SRI International) launched the Shakey project, led by **Nils Nilsson (1933–2019)**. Shakey was a wheeled robot equipped with a camera, bump sensors, and wireless communication, controlled remotely by a room-sized computer. It could perceive objects in its environment, plan a course of action, and execute it — pushing boxes, crossing rooms, avoiding obstacles.

Shakey's most important technical legacy was the algorithms it produced: A* search (proposed by Nilsson and colleagues in 1968) and the STRIPS planning system. A* remains the standard algorithm for path planning, used everywhere from game AI to satellite navigation. STRIPS defined the basic framework of automated planning, an influence that persists today.

But Shakey itself was not impressive in operation. Completing a single task in a simple environment took hours of computation, and any small surprise — a shift in lighting, a slightly misplaced object — could leave it confused. Shakey embodied a core tension of the Golden Age: the underlying algorithms might be deep and durable, but the system as a whole was orders of magnitude away from being practical.

## VI. The Money Flood and Overpromising

The prosperity of the Golden Age depended heavily on a generous funding climate. The United States in the 1960s was at the height of the Cold War, and DARPA (then ARPA) committed money to AI research with breathtaking generosity — without asking for specific research plans or deliverables. The MIT AI Lab, the CMU computer science department, and the Stanford AI Lab all flourished under this "blank-check" support.

Generous funding, however, also bred generous promises. Toward the end of the 1960s, when funders began to demand visible results, AI researchers found themselves in an awkward position: their programs ran beautifully in Blocks World but were helpless against the complexity of the real world; machine translation projects had consumed millions of dollars yet produced output that was painfully comic.

In 1966, the Automatic Language Processing Advisory Committee (ALPAC) under the U.S. National Academy of Sciences released a report that was severely negative about machine translation, leading directly to a sharp cut in U.S. government funding for the field. That was the first signal.

The more lethal blow came from the other side of the Atlantic. In 1973, the British mathematician **James Lighthill (1924–1998)**, commissioned by the UK Science Research Council, wrote an evaluation of the state of AI research. The Lighthill Report did not mince words: AI's central problem — combinatorial explosion — meant that successes in restricted environments could not be scaled to the real world; AI research had not delivered on its promises and did not warrant continued large-scale support.

The Lighthill Report set off a chain reaction in Britain. Apart from limited research preserved at Edinburgh and Sussex, the country effectively ended its AI funding. The United States did not make so dramatic a cut, but DARPA also tightened the purse strings — demanding more specific project goals and clearer prospects for application.

The curtain of the Golden Age was falling.

## VII. Undercurrents and Foreshadowing

Several threads from these seventeen years are worth marking.

**First, the triumph and cost of symbolism.** The Golden Age belonged to symbolic AI — McCarthy's LISP, Newell and Simon's GPS, Minsky's microworlds. The line achieved impressive results on constrained problems, but it also formed an increasingly closed paradigm: intelligence is symbol manipulation, learning is unimportant, statistics are inelegant. Minsky and Papert's "verdict" on perceptrons pushed the paradigm to its extreme — not only is symbolic AI right, but neural networks are wrong. That exclusivity would eventually backfire.

**Second, the conflation of "narrow" and "general."** The greatest cognitive error of the era was equating success in a specific domain with progress toward general intelligence. GPS could solve the Tower of Hanoi but did not understand the physical world; SHRDLU could move blocks but did not understand language; ELIZA could move people to tears but had no empathy. The conflation misled the public and funders, but also the researchers themselves.

**Third, the prescience of the critics.** Weizenbaum's warnings, the Lighthill Report, and the ALPAC review were treated by AI insiders as the ignorance of outsiders or the attacks of enemies. History showed they had touched on real problems — AI researchers had underrated the depth of common sense, overstated the universality of symbolic methods, and lacked an effective answer to combinatorial explosion.

**Fourth, the seeds of winter were already planted.** When promises could not be met, funding began to retreat, and criticism grew loud, a crisis of confidence was inevitable. The Lighthill Report of 1973 is usually taken as the end of the Golden Age and the beginning of the first AI winter.

## VIII. Timeline

| Year | Event | Key Figures |
|------|-------|-------------|
| 1957 | General Problem Solver (GPS) born | Newell, Simon |
| 1957 | Perceptron model proposed | Rosenblatt |
| 1958 | LISP born; "Advice Taker" proposed | McCarthy |
| 1958 | Mark I perceptron hardware demonstrated; Navy press conference | Rosenblatt |
| 1959 | McCarthy and Minsky co-found the MIT AI Lab | McCarthy, Minsky |
| 1963 | DARPA funds the MIT AI Lab on a large scale | — |
| 1965 | DENDRAL expert system project launched | Feigenbaum |
| 1966 | ELIZA chatbot released | Weizenbaum |
| 1966 | ALPAC report rejects the prospects of machine translation | — |
| 1966 | Shakey robot project launched | Nilsson |
| 1968 | A* search algorithm proposed | Nilsson et al. |
| 1969 | *Perceptrons* published, proving the mathematical limits of single-layer perceptrons | Minsky, Papert |
| 1971 | Winograd completes SHRDLU Blocks World system (PhD thesis) | Winograd |
| 1971 | Rosenblatt drowns in a boating accident on his 43rd birthday | Rosenblatt |
| 1973 | Lighthill Report published; UK sharply cuts AI funding | Lighthill |

---

::: tip Historian's Note
The tragedy of the Golden Age was not that researchers got things wrong, but that they took "getting a little right" for "almost done." Pushing a block in a microworld and understanding a sentence in the real world are not separated by a difference of degree but by a difference of kind. The symbolists saw the logical, inferential side of intelligence and overlooked the abyss of perception, intuition, and common sense. Worse still, when another path — the neural network — tried to approach that abyss from a different direction, it was sentenced in the name of mathematics by its own peers. Perhaps the greatest lesson the Golden Age leaves to its successors is this: in science, the line between rigorous criticism and wrongful suppression is often a hair's breadth wide.
:::

## Eyewitness Accounts

::: info Call for contributions
If you witnessed or have firsthand recollections of this period, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. McCarthy, J. (1960). "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I." *Communications of the ACM*, 3(4), 184–195.
2. Newell, A., & Simon, H. A. (1961). "GPS, A Program that Simulates Human Thought." In *Computers and Thought*, ed. Feigenbaum & Feldman.
3. Rosenblatt, F. (1958). "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain." *Psychological Review*, 65(6), 386–408.
4. Minsky, M. L., & Papert, S. A. (1969). *Perceptrons: An Introduction to Computational Geometry*. MIT Press.
5. Weizenbaum, J. (1966). "ELIZA—A Computer Program for the Study of Natural Language Communication between Man and Machine." *Communications of the ACM*, 9(1), 36–45.
6. Weizenbaum, J. (1976). *Computer Power and Human Reason: From Judgment to Calculation*. W.H. Freeman.
7. Winograd, T. (1972). "Understanding Natural Language." *Cognitive Psychology*, 3(1), 1–191.
8. Nilsson, N. J. (1984). *Shakey the Robot*. SRI International, Technical Note 323.
9. Lighthill, J. (1973). "Artificial Intelligence: A General Survey." In *Artificial Intelligence: A Paper Symposium*. Science Research Council.
10. ALPAC (1966). *Languages and Machines: Computers in Translation and Linguistics*. National Academy of Sciences.
11. Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. Basic Books.
12. Nilsson, N. J. (2009). *The Quest for Artificial Intelligence*. Cambridge University Press.
