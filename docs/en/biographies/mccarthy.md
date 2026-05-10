# Biography · John McCarthy

> He gave a name to a field that did not yet exist, built it a temple in a language that has not yet aged, and chased to the end of his days a "common-sense machine" that never came.

![John McCarthy at Stanford, 2006](/images/people/mccarthy.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## The Invention of a Name

The summer of 1955. John McCarthy, twenty-eight, was an assistant professor of mathematics at Dartmouth College. He was drafting a grant proposal.

That year he and **Marvin Minsky** (a junior fellow at Harvard), **Nathaniel Rochester** (head of information research at IBM), and **Claude Shannon** (Bell Labs) jointly submitted a request to the Rockefeller Foundation: in the summer of 1956 they would gather some ten researchers at Dartmouth College for two months to discuss "how to make machines use language, form abstractions and concepts, and solve kinds of problems now reserved for humans."

The proposal needed a title. McCarthy later recalled how deliberately he had avoided "cybernetics" — that was **Norbert Wiener**'s territory, and Wiener was difficult. He also avoided "automata theory" — the term was too narrow. He wanted something fresh, free of the baggage of existing schools. He wrote two words: **Artificial Intelligence**.

From June to August 1956, the Dartmouth Summer Research Project on Artificial Intelligence convened. Some twenty-odd people came and went, more loosely than McCarthy had hoped. **Allen Newell** and **Herbert Simon** brought from RAND their Logic Theorist program — already capable of proving propositions from the *Principia Mathematica*, the only working result anyone had to show. McCarthy himself produced no concrete artefact that summer. But he had given the field the name it would never change.

That single sheet of proposal, kept today at Dartmouth, is regarded as the birth certificate of AI's year zero.

## LISP: A Language Made for Thought

In 1958 McCarthy moved to MIT, and with **Marvin Minsky** founded the MIT Artificial Intelligence Project (in 1963 expanded into the MIT AI Lab). In the same year he began designing a new programming language.

His motive was direct. To make a computer reason as a human does, one must be able to **express and manipulate symbolic expressions** — not only numbers. FORTRAN, then dominant, was built for scientific calculation; symbols were beyond it.

McCarthy's solution was almost terse. He took Alonzo Church's lambda calculus and turned it into a directly executable language. Code and data shared a single structure — the parenthesised list. Everything was a list; functions were lists; programs operated on lists exactly as they operated on data. This "code is data" homoiconicity was later called the deepest beauty of LISP.

In 1960 McCarthy published the paper that generations of computer scientists have treated as scripture — "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I" in *Communications of the ACM*. The paper defined LISP in LISP itself: the `eval` function, half a page of code, fully described the language's semantics. Years later, when Alan Kay first read those half-page lines, he said: "That was the closest thing I had ever seen to Maxwell's equations of software."

LISP also invented in passing several concepts now taken for granted — garbage collection (named by McCarthy), conditional expressions, recursion as the principal control flow, higher-order functions. More than half a century later, from Common Lisp and Scheme to Clojure, Racket, and Emacs Lisp, the LISP lineage lives on. Generations of AI researchers at MIT, CMU, and Stanford wrote their first lines of "AI" in LISP.

## Public Computing — The Cloud, Half a Century Early

McCarthy in the early 1960s was already thinking of something not of his time. Computers then were islands: one mainframe, a queue of programmers handing in punch cards, hours of waiting for a printout. McCarthy said: this will not do.

At MIT he pushed hard for **time-sharing** — multiple users, multiple terminals, sharing one mainframe at once. His 1959 memorandum, "A Time-Sharing Operator Program for Our Projected IBM 709," fleshed out the technical vision. The idea begat MIT's CTSS (Compatible Time-Sharing System), then Multics, and through Unix and the Internet it became the substrate of modern computing.

More radical still was a sentence from his 1961 speech at MIT's centenary: "If computers of the kind I have advocated become the computers of the future, then computing may someday be organised as a public utility, just as the telephone system is a public utility." This is the earliest public statement of what would become *cloud computing*, half a century before the word *cloud* came into vogue. Every machine on AWS, Azure, and Alibaba Cloud today, knowingly or not, is fulfilling McCarthy's prophecy.

## Common Sense: The Mountain He Climbed All His Life

If LISP was McCarthy's most complete gift to the world, "common sense" was the mountain he never reached the summit of.

In 1958 he wrote "Programs with Common Sense," proposing a system he called the *Advice Taker*: a program that would represent world knowledge in formal logic, accept new information from a human ("I am at home," "the car is in the garage," "I want to go to the airport"), and automatically deduce what to do ("first walk to the garage, drive out…"). It was the founding manifesto of symbolic AI.

For this, McCarthy spent the next fifty years on **formal common-sense reasoning**. He invented or championed a series of important tools — situation calculus (1969, with Patrick Hayes); circumscription (1980, for non-monotonic reasoning under default assumptions); elaboration tolerance. Each was a real contribution to logic. None made a machine truly possess common sense.

Why? Because common sense is too large, too trivial, too entangled with itself. "A cup falls and breaks." "A baby cannot drive a car." "The sun will rise tomorrow." Billions of such rules; no formal system, however elegant, can exhaust them. From the 1980s into the 1990s symbolic AI froze before this wall. Decades later, the thing that gave machines a kind of "quasi-common-sense" was not McCarthy's logic but large language models, brute-forcing their way through trillions of tokens of statistical correlation — a path he, in his lifetime, did not believe in.

## Stanford, Honours, Late Years

In 1962, after disagreements with **Marvin Minsky** about the direction of the MIT AI Lab, McCarthy left Cambridge for Stanford and founded the **Stanford Artificial Intelligence Laboratory (SAIL)**. Under his stewardship SAIL grew into the West Coast's holy ground of AI research: early robotics, computer vision, the Shakey robot project (in collaboration with SRI), the earliest computer chess systems, experiments in remote login. SAIL and his pupils branched widely — Patrick Winston, Raj Reddy, Randall Davis — all rooted in his line.

In 1971 McCarthy received the **Turing Award** for his contributions to LISP, the naming of AI, and time-sharing. The 1990 National Medal of Science and the 2003 Benjamin Franklin Medal followed.

His personal life was simple. He liked to climb mountains, play chess, read Russian novels in the original (he taught himself Russian and kept a lifelong interest in Soviet science). He kept several cats at his Stanford home. He taught his children mathematics in the recursive style of LISP.

He held, throughout, a kind of impatient "not enough yet" toward AI's progress. The era of large language models had not arrived; deep learning was still in its pre-ImageNet trough. He said again and again, in public, that current AI was "still very far" from real intelligence. To him, without a formal world model there could be no truly thinking machine.

On 24 October 2011, McCarthy died at his Stanford home, eighty-four years old. Until shortly before his death he had been organising notes for an unfinished book on common-sense reasoning. He did not live to see GPT-style systems — and one suspects, had he, he would have shaken his head while marvelling: "This is not the *common sense* I meant."

## Selected Works

| Year | Work | Significance |
|------|------|--------------|
| 1955 | "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence" (with Minsky, Rochester, Shannon) | First written use of the term "Artificial Intelligence" |
| 1959 | "Programs with Common Sense" | Proposed the Advice Taker; founding text of symbolic AI |
| 1960 | "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I" | Defined LISP; twin source of AI and functional programming |
| 1969 | "Some Philosophical Problems from the Standpoint of Artificial Intelligence" (with Hayes) | Introduced situation calculus; formalisation of time, action, and causation |
| 1980 | "Circumscription — A Form of Non-Monotonic Reasoning" | Circumscription as a treatment of default assumptions |

## Historian's Note

::: tip Historian's Note
McCarthy gave the new learning a name, built it a tool, and preached its mission to the world — the name was *artificial intelligence*, the tool was LISP, the sermon was that *machines must have common sense*. Whoever names a discipline founds it; whoever forges its tool teaches it; whoever preaches its end usually pays for it. McCarthy was all three at once: at Dartmouth, at MIT, at Stanford, in the Turing Award, in the early echo of cloud computing — he is everywhere. And yet the *common-sense machine* he chased to the end of his days never came. Today's large models pile a kind of *quasi-common-sense* out of trillions of tokens, while McCarthy's logical line lies in a corner. The strange justice of history is this: the namer wins the territory, the path-fight may not be his. But naming is no small matter — without a name, no home; only after a home, a school. McCarthy is to AI what the Duke of Zhou was to the rites: even those who no longer use his methods cannot avoid entering by his door, walking his road, leaving by his gate.
:::

## Eyewitness Accounts

::: info Call for contributions
If you knew John McCarthy personally or have firsthand sources or recollections, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. McCarthy, J., Minsky, M., Rochester, N., & Shannon, C. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence."
2. McCarthy, J. (1959). "Programs with Common Sense." In *Proceedings of the Teddington Conference on the Mechanization of Thought Processes*.
3. McCarthy, J. (1960). "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I." *Communications of the ACM*, 3(4), 184–195.
4. McCarthy, J., & Hayes, P. (1969). "Some Philosophical Problems from the Standpoint of Artificial Intelligence." *Machine Intelligence*, 4, 463–502.
5. McCarthy, J. (1980). "Circumscription — A Form of Non-Monotonic Reasoning." *Artificial Intelligence*, 13(1–2), 27–39.
6. Garfinkel, S. (1999). *Architects of the Information Society: Thirty-Five Years of the Laboratory for Computer Science at MIT*. MIT Press. (Includes the text of McCarthy's 1961 centenary address.)
7. Nilsson, N. J. (2010). *The Quest for Artificial Intelligence: A History of Ideas and Achievements*. Cambridge University Press.
8. Russell, S., & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach* (4th ed.). Pearson.
9. Stanford News (2011). "John McCarthy, father of AI and Lisp, dies at 84." Stanford University, October 25, 2011.
