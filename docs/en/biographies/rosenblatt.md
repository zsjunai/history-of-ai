# Biography · Frank Rosenblatt

> He built the first machine that could "see" — and did not live to see the day machines truly learned to see.

![Frank Rosenblatt, c. 1950](/images/people/rosenblatt.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## A Psychologist Walks Into a World of Machines

Frank Rosenblatt was born in 1928 in New Rochelle, New York. He was not a mathematician, nor an engineer — he was a psychologist.

He entered Cornell University in 1946 and in 1956 took a doctorate there in social psychology, with a dissertation on multivariate analysis of personality traits. In an age when computers still required filing-cabinet measurements of floor space, the sight of a psychology PhD walking toward hardware neural networks struck everyone as unbecoming.

But Rosenblatt had been thinking, from the start, of a single thing: how does the brain learn, and can machines learn too?

When **Warren McCulloch** and **Walter Pitts** published *A Logical Calculus of the Ideas Immanent in Nervous Activity* in 1943, they had given a mathematical model of the neuron — but it was only a logic gate. **Donald Hebb**, in *The Organization of Behavior* (1949), proposed his famous "fire together, wire together" principle — but only as a verbal biological conjecture.

Rosenblatt set out to stitch the two lines together — and, what was most particular about him, to actually *build* the thing.

## Mark I: The First Learning Machine

The summer of 1957, the Cornell Aeronautical Laboratory (CAL). Rosenblatt first wrote a software simulation of the Perceptron on an IBM 704 — the first piece of code in history to implement a learning neural network. In 1958 he published, in *Psychological Review*, "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain." The paper was written in the language of a psychologist — no matrices, no gradients, only the story of stimulus, response, and weight adjustment.

A simulation was not enough. Between 1958 and 1960, with funding from the Office of Naval Research, CAL built the **Mark I Perceptron** — a neural network realised in dedicated hardware.

It had a 20×20 array of photocells as its "retina," 512 weights stored in motor-driven potentiometers, and 8 classification units at its output. When a card with a written character was placed before it, the machine "saw"; when it erred, the motors hummed and turned, adjusting the potentiometers. This was learning in the most literal physical sense. Mark I survives today in the Smithsonian.

On 8 July 1958, the Navy held a press conference in Washington to display the perceptron. The next day *The New York Times* ran a front-page story declaring the perceptron would one day "be able to walk, talk, see, write, reproduce itself and be conscious of its existence."

Rosenblatt himself told reporters that the perceptron would one day "recognise faces, translate languages, give voice commands." In 1958 these sentences sounded like science fiction. Sixty years later, almost all of them came true. But the over-promotion of the moment also lit the fuse for what came next.

## *Principles of Neurodynamics*: Putting the Perceptron Into Theory

In 1962 Rosenblatt published the 700-page monograph *Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms*. It systematised everything he had been doing since 1957: single-layer perceptrons, multi-layer perceptrons, back-coupled networks, random connections, statistical dynamics. The book already discussed multi-layer architectures and error correction — only no one yet knew an effective algorithm for training them. (That would have to wait until 1986, when **David Rumelhart**, **Geoffrey Hinton**, and **Ronald Williams** brought it to public attention.)

Rosenblatt was not alone. The Cornell group, Bernard Widrow at Stanford (with his Adaline), researchers at IBM — all corresponded inside a small community known as "self-organising systems." Those were the golden years of neural networks, the most hopeful summer of their youth.

## A Conflict for the Century, with Minsky

Among Rosenblatt's contemporaries was the man who would become his lifelong adversary — **Marvin Minsky**. They had attended the same New York high school, the Bronx High School of Science. Minsky's 1954 doctoral dissertation had also concerned neural networks, but he had quickly turned to the symbolic camp and grew increasingly impatient with the perceptron's hype.

In 1969 Minsky and **Seymour Papert** published *Perceptrons*. With strict mathematics they proved that a single-layer perceptron could not learn even the simplest XOR — the function that distinguishes whether two inputs differ — and they cast pessimism on the trainability of multi-layer networks.

The book's effect was greater than its scope. It cut DARPA funding to connectionism. From 1969 to 1986 neural networks were nearly sentenced to death in American academia — what is sometimes called, within the larger first AI winter, the connectionist winter. Later researchers, such as **Geoffrey Hinton**, repeatedly noted in interviews that Minsky's critique had pointedly ignored the potential of multi-layer networks, and that his attacks in private had been still fiercer than the book. Rosenblatt tried during his lifetime to answer the criticism, but in academic politics he was no match for Minsky — older, more skilled at running funding.

## A Last Voyage on Chesapeake Bay

On 11 July 1971, Rosenblatt's forty-third birthday, he went sailing on Chesapeake Bay in Maryland. There was an accident. He drowned. No complete official record of the events survives. Whether it was accident, suicide, or something else is disputed by his colleagues and biographers.

What can be said is that he did not live to see his vindication. He did not see the 1986 backpropagation paper, did not see the 2012 ImageNet revolution, did not see his 1958 promise — *the machine will recognise faces* — come true on every phone in every pocket.

Rosenblatt's interests had never been limited to neural networks. He studied the neural circuits of fruit bats, leading students into caves himself to capture and dissect them, recording electrical signals; he studied the chemical transfer of memory, performing experiments in which extracts from the brains of trained mice were injected into untrained ones; he cared about astronomy and music. He was the kind of unwalled, mid-twentieth-century natural philosopher whose interests were not divided by the partitions of the disciplines.

## An Echo Half a Century Late

For the twenty years after his death, *the Perceptron* almost became a cautionary footnote in AI textbooks — a case study in how over-promotion devours a discipline.

Only in 1986, when **David Rumelhart**, **Geoffrey Hinton**, and **Ronald Williams** published the backpropagation algorithm in *Nature*, did the multi-layer perceptron become trainable. **Paul Werbos** had already, in his 1974 doctoral thesis, given an equivalent algorithm independently — only the neural-network community had not noticed.

In other words, the multi-layer perceptron problem Rosenblatt had left in 1962 might well have been solved within his lifetime. The dislocations of history happen this way.

In 2004 the IEEE named one of the highest awards in neural network research the *Frank Rosenblatt Award*. Cornell raised a memorial plaque on its campus. The Mark I Perceptron itself is now displayed in the Smithsonian National Museum of American History, in the same hall as the early Apollo computer and the first transistor. A man cast aside by his time was, in the end, brought home in the most ceremonial way his time knew.

## Selected Works

| Year | Work | Significance |
|------|------|--------------|
| 1958 | "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain," *Psychological Review*, 65(6) | Proposed the perceptron model and learning rule |
| 1958–1960 | Mark I Perceptron hardware | First real "learning" neural network in hardware |
| 1962 | *Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms* | Systematised perceptron theory; included early discussion of multi-layer networks |
| 1967 | "Recent Work on Theoretical Models of Biological Memory," in *Computer and Information Sciences II* | Linked neural networks to research on biological memory |

## Historian's Note

::: tip Historian's Note
Rosenblatt is to artificial intelligence what Shang Yang was to the state of Qin — he opened a road for those who came after, and fell upon it himself. He had only wanted to turn a psychologist's curiosity into a machine that could truly learn, and to declare in 1958, to a world that was not yet ready, that intelligence could grow out of weights. That world first crowned him as prophet, then condemned him as charlatan, and at last simply erased him from the textbook. From the publication of *Perceptrons* in 1969 to the renaissance of backpropagation in 1986, connectionism was suppressed for seventeen full years; Rosenblatt died in the middle of those seventeen years — a wronged ghost deserves a great shrine. Every gradient descent of every deep learning model today, every convolution running on every GPU, every face that gets recognised, carries the blood of that 1958 Mark I. A man buried by his time has, in the algorithms, been resurrected.
:::

## Eyewitness Accounts

::: info Call for contributions
If you knew Frank Rosenblatt personally or have firsthand sources or recollections, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Rosenblatt, F. (1958). "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain." *Psychological Review*, 65(6), 386–408.
2. Rosenblatt, F. (1962). *Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms*. Washington, D.C.: Spartan Books.
3. Minsky, M., & Papert, S. (1969). *Perceptrons: An Introduction to Computational Geometry*. Cambridge, MA: MIT Press.
4. Olazaran, M. (1996). "A Sociological Study of the Official History of the Perceptrons Controversy." *Social Studies of Science*, 26(3), 611–659.
5. Nagy, G. (2014). "Frank Rosenblatt." *IEEE Annals of the History of Computing*, 36(2), 4–7.
6. *The New York Times* (1958-07-08). "New Navy Device Learns by Doing; Psychologist Shows Embryo of Computer Designed to Read and Grow Wiser."
7. Cornell Aeronautical Laboratory (1960). *Mark I Perceptron Operators' Manual*. Buffalo, NY: CAL Report VG-1196-G-1.
8. Anderson, J. A., & Rosenfeld, E. (Eds.) (1998). *Talking Nets: An Oral History of Neural Networks*. Cambridge, MA: MIT Press.
