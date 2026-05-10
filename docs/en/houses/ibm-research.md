# House · IBM Research

> It helped name "artificial intelligence," opened up machine learning, brought statistical methods into language, built Deep Blue to defeat the world chess champion, and stunned the world with Watson on *Jeopardy!*. Big Blue's research arm is the longest single river in industrial AI.

## From the Watson Lab to IBM Research

In 1945, Thomas J. Watson Sr. funded the founding of the **Watson Scientific Computing Laboratory** next to Columbia University. That was the true beginning of IBM's marriage to fundamental research.

In 1956, IBM bought a stretch of forested hills at Yorktown Heights, New York, and commissioned Finnish-American architect Eero Saarinen to design a curved glass-walled research center. In 1961, Thomas J. Watson Jr. formally renamed the research division **IBM Research** and made the newly built **T. J. Watson Research Center** its headquarters.

It was the middle of the Cold War. With the 700-series mainframes, IBM had become synonymous with commercial computing. The Research Division carried a double mandate from the start: to provide technology reserves for the next generation of products, and to produce "Nobel-grade" results in physics, mathematics, and computing theory.

It delivered. Over six decades, IBM Research produced five Nobel laureates and six Turing Award winners, becoming the model of an industrial research institute.

Its bond with AI runs back to IBM's first commercial electronic computer—the IBM 701, used from 1953 both for nuclear-weapons simulation and as the stage on which Samuel wrote the first machine-learning program. Big Blue's interest in "machines that can learn" predates the term "artificial intelligence."

## Rochester, Samuel, and the Naming of "Artificial Intelligence"

In the summer of 1955, **Nathaniel Rochester (1919–2001)**, then designing IBM's 701 mainframe, signed, with **John McCarthy (1927–2011)**, **Marvin Minsky (1927–2016)**, and **Claude Shannon (1916–2001)**, the famous proposal—*A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence*. Rochester represented IBM and was the only one of the four signatories from industry.

The 1956 Dartmouth meeting nailed the phrase "Artificial Intelligence" into history; IBM was the only industrial player in the room. From that starting line, IBM did not yield its place for the next seventy years.

Around that same summer, in IBM's Poughkeepsie lab, **Arthur Samuel (1901–1990)** wrote, on the IBM 701, the first program that could learn from experience. Samuel had the program play itself, recorded the win/loss weights of each move, and gradually adjusted its evaluation function.

In 1959 he published in *IBM Journal* the paper *Some Studies in Machine Learning Using the Game of Checkers*, which gave the first clear definition of "machine learning"—a phrase that would later become the name of an entire discipline. In 1962 his program defeated Robert Nealey, the Connecticut state checkers champion: one of the earliest records of machine beating human master.

Samuel's work has another, often-forgotten contribution: the alpha-beta pruning idea he designed became the foundation of all later game-tree search—from early chess programs to Deep Blue, all the way to AlphaGo's search framework. AI's "game-playing road" started on that IBM 701.

## The Triumph of the Statistical Language School

In 1972, the Czech-American engineer **Frederick Jelinek (1932–2010)** moved from Cornell to the IBM T. J. Watson Research Center to head speech recognition and natural language research. The mainstream still believed in Chomsky's generative grammar—language was a matter of rules. Jelinek did not. He insisted on processing speech with hidden Markov models and statistical methods. Let the data speak.

The much-quoted line was born here: **"Every time I fire a linguist, the performance of the speech recognizer goes up."** It was sarcasm and manifesto at once.

In the 1980s, Jelinek's group was the first to apply statistical language models to speech recognition at scale, laying down the paradigm that would shape NLP for the next thirty years. BERT and GPT, by lineage, all trace back to this branch at IBM.

Then came machine translation. Peter F. Brown, Stephen and Vincent Della Pietra, and Robert Mercer (later the soul of the hedge fund Renaissance Technologies) published, between 1988 and 1993, the **IBM Model 1–5** series of papers.

They jettisoned linguistic rules, trained statistical alignment models on the bilingual proceedings of the Canadian Parliament, and treated translation as a "noisy channel" problem. That was the starting point of statistical machine translation (SMT), unseated only twenty years later by neural machine translation. The worldview—**data driving language**—was set there.

It is worth noting that Mercer and Brown both later left IBM for Renaissance Technologies, where they brought statistical-modeling thinking to Wall Street and built Medallion Fund, the most profitable quantitative fund in financial history. The deep affinity between AI and finance has its roots, in part, at IBM Yorktown in the 1990s.

## Deep Blue: A Match of the Century

In 1985, Hsu Feng-hsiung, then a Taiwanese PhD student at CMU, built the first dedicated chess chip, ChipTest, under his advisor's direction. In 1989 he and his colleagues Murray Campbell and Thomas Anantharaman were recruited by IBM to the Watson Research Center, where the project was renamed **Deep Thought** and then evolved into **Deep Blue**.

In February 1996, Philadelphia: Deep Blue won the first game against the reigning world champion **Garry Kasparov (1963–)**, but Kasparov steadied himself and took the match 4–2. The rematch a year later rewrote history.

On May 11, 1997, on the 35th floor of the Equitable Center in New York: in the sixth game, after only 19 moves, Kasparov tipped over his king and resigned. For the first time in human history, a reigning world chess champion had lost to a machine under tournament time controls. Deep Blue could evaluate two hundred million positions per second; behind it stood thirty IBM RS/6000 SP processors and 480 custom VLSI chips.

It was not a pure victory of AI; it was, more than anything, the apex of search, pruning, and custom hardware engineering. But it convinced the world that **machines were entering the territory of human intellect**. After the rematch IBM's market capitalization rose by billions; Kasparov spent the rest of his career protesting, studying, and finally accepting the turn of the times.

Hsu later recalled that the team barely slept the night before the rematch, patching the opening book and middle-game evaluation. Deep Blue's victory was an engineer's victory—built line by line, chip by chip, opening by opening. It was the high point of the "hardware plus search" road, and its farewell. For more than a decade afterward, advances in chess programs came mainly from software; hardware never again took the lead.

## Watson and the Glory of *Jeopardy!*

In 2007, IBM Research launched the **DeepQA** project, led by David Ferrucci, with the goal of building a machine that could beat human champions on the U.S. quiz show *Jeopardy!*. The show requires contestants to infer answers from cryptic clues spanning puns, metaphor, history, and pop culture—closer than chess to "open-domain intelligence."

From February 14 to 16, 2011, IBM brought the machine, named **Watson**, to a three-day match against Ken Jennings (the show's largest career-money winner) and Brad Rutter (its longest-running streak holder). Watson ran on 90 Power 750 servers, 2,880 processor cores, and 16 TB of memory, performing 80 trillion operations per second.

Its core architecture was a parallel pipeline: parse a *Jeopardy!* clue into multiple candidate meanings; query Wikipedia, IMDB, and other local structured sources for evidence in parallel; and rank candidate answers with machine-learning models—all within six seconds, faster than a human pressing the buzzer. The system had digested some 200 million pages of text, the largest open-domain question-answering system at that moment in 2011.

After three games, Watson took 77,000 dollars; Jennings 24,000; Rutter 21,000. On the last clue, Jennings wrote in the margin a line that became internet meme history: **"I, for one, welcome our new computer overlords."**

IBM was the night's winner; AI made the front page of mainstream media. It was one of the rarest "everyone's moments" in AI history—about 35 million Americans watched a machine defeat the two strongest brains on the show.

## Watson Health: The Failure and the Reckoning

After the victory, IBM pushed Watson out as a brand into industry. In 2014 it founded the **Watson Group** and bet heavily on health care—cancer diagnosis, genomics, drug matching—partnering with the University of Texas MD Anderson Cancer Center, Memorial Sloan Kettering, and other top institutions. Big Blue's slogan was: "Watson will be the cognitive assistant for doctors."

Reality was harsh. Beginning in 2017, hospital after hospital cancelled the contracts. The MD Anderson partnership cost more than 62 million dollars and never reached the clinic. In 2018 internal documents leaked to STAT News revealed that Watson had given "unsafe and incorrect" treatment recommendations.

The problems lay in many places: clinical data is sparse, training samples were heavily synthetic, medical knowledge is far more structured than *Jeopardy!*, and clinician workflows are hard to embed an outside AI into. A system that could win a game show was nowhere near enough to challenge a real oncology clinic.

In January 2022, IBM sold the Watson Health assets to private-equity firm Francisco Partners for about 1 billion dollars—far less than the cumulative investment and acquisition costs. It is one of AI commercialization's most expensive lessons: **the intelligence in a demo is not the intelligence in production**.

The fall of Watson Health left IBM unusually cautious about pairing "AI plus vertical industry." Through the 2020s its work in financial fraud detection, supply-chain optimization, and compliance audit returned to the territory IBM truly knows—enterprise infrastructure. Build tools, not replacements for professionals. That restraint was bought with very expensive tuition.

## Stalling and Pivoting in the Deep-Learning Era

When the ImageNet moment of 2012 arrived, IBM was not in the room. The deep-learning revolution was carried, in relays, by Google, Meta (then Facebook), OpenAI, and NVIDIA; IBM had neither a GPU platform nor large-scale consumer-facing data. Watson's line of "knowledge engineering plus shallow NLP" was precisely what deep learning displaced wholesale in the second half of the 2010s.

But IBM Research did not stand still. Its turn focused on three places.

**First, the MIT–IBM Watson AI Lab.** In 2017 IBM committed 240 million dollars to a ten-year partnership with MIT on next-generation AI algorithms, trustworthy AI, and industrial applications—a model of industry–top-academia alliance.

**Second, AI accelerator hardware.** In 2021 IBM released the **Telum** processor, integrating an AI inference engine into the mainframe for financial fraud detection; in 2022 it released the **AIU** (Artificial Intelligence Unit), a chip designed for deep-learning inference; in 2023 the **NorthPole** brain-inspired chip co-developed with Samsung appeared in *Science*—a single chip running ResNet-50 with energy efficiency 25 times that of a GPU.

**Third, quantum computing.** In 2019 IBM released IBM Q System One; in 2023 it announced the 1,121-qubit Condor, betting on a post-Moore frontier of compute. The intersection of AI and quantum is one of IBM's long-term wagers.

What unites these three is that they all run on a "decade" timescale, and none is expected to be a near-term revenue driver. In a Silicon Valley chasing quarterly earnings and valuation multiples in the 2020s, IBM still holds to the long-cycle research-institute model—the place where it most resembles Bell Labs and least resembles its contemporary competitors.

In 2024 IBM also open-sourced the **Granite** family of foundation models, positioning them as "enterprise-grade, auditable, compliance-first," aligned with the open-weight ecosystem. It is no longer chasing large-model SOTA; it is returning to the position it knows best: marrying AI to the critical systems of enterprises, banks, and governments.

## A Research Institute as an Institution

Returning to the institution itself: IBM Research is special because it is a "medieval monastery" of academic freedom kept alive by a commercial company.

It runs twelve labs around the world—Yorktown Heights, Zurich, Haifa, Bangalore, Tokyo, Beijing, Nairobi. Each carries a distinct profile: Yorktown leans toward algorithms and systems; Zurich has produced two Nobels in physics (the scanning tunneling microscope in 1986, high-temperature superconductivity in 1987); Haifa is strong in cryptography and optimization; Tokyo digs deep in materials and hardware.

That parallelism across geographies and disciplines lets IBM Research keep "research continuity" through the ups and downs of its main product lines. The failure of Watson Health did not break the institute, because there was still quantum, still semiconductors, still AI accelerators. That is the bedrock that lets a hundred-year-old company survive successive industry transitions.

Rarer still is the right IBM gives its researchers: a long, unbroken stretch to follow a single problem—even when commercialization is not yet possible, as long as the technical judgment holds, there is room to continue. That degree of freedom is now extremely rare in large companies; only a few—IBM, the Bell Labs heritage, and Google DeepMind—still carry pieces of that flame.

For that reason IBM Research has bequeathed not just point breakthroughs but a **paradigm for how an industrial research institute should be run**: long-cycle investment, cross-disciplinary hiring, distance from product divisions while keeping dialogue open. As Bell Labs, Xerox PARC, and Microsoft Research have, in turn, declined or transformed, IBM Research still operates inside the curving glass walls of Yorktown Heights, continuing along the line Saarinen drew in 1956.

::: tip Historian's Note
IBM Research is to artificial intelligence what Xiao He was to the Han—not the bravest in battle, but the one who set the laws for those who followed. It was at Dartmouth, built the first machine-learning program, the first statistical language model, the first chess machine to beat a world champion, the first computer to win on a quiz show. Each "first" pushed AI a step further into industry. But by the deep-learning era, it had lost the lead—wrong bet on Watson Health, missed GPUs, missed Transformer. Big Blue is no longer the runner ahead, but it is still running. Today's IBM marries AI to the mainframe, to quantum, to enterprise compliance—doing the things others will not, the things that are hardest to replace. In the chapters of AI history that bear the words "industrial AI," IBM is the very first stroke.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at IBM Research, the Watson Group, or the MIT–IBM Watson AI Lab, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Samuel, A. L. (1959). "Some Studies in Machine Learning Using the Game of Checkers." *IBM Journal of Research and Development*, 3(3): 210–229.
2. McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence."
3. Brown, P. F., Della Pietra, S. A., Della Pietra, V. J., & Mercer, R. L. (1993). "The Mathematics of Statistical Machine Translation: Parameter Estimation." *Computational Linguistics*, 19(2): 263–311.
4. Jelinek, F. (1997). *Statistical Methods for Speech Recognition*. MIT Press.
5. Hsu, F.-h. (2002). *Behind Deep Blue: Building the Computer that Defeated the World Chess Champion*. Princeton University Press.
6. Campbell, M., Hoane, A. J., & Hsu, F.-h. (2002). "Deep Blue." *Artificial Intelligence*, 134(1–2): 57–83.
7. Ferrucci, D. et al. (2010). "Building Watson: An Overview of the DeepQA Project." *AI Magazine*, 31(3): 59–79.
8. Strickland, E. (2019). "How IBM Watson Overpromised and Underdelivered on AI Health Care." *IEEE Spectrum*, April 2019.
9. Ross, C., & Swetlitz, I. (2018). "IBM's Watson Supercomputer Recommended 'Unsafe and Incorrect' Cancer Treatments." *STAT News*, July 2018.
10. IBM Research (2021). "IBM Telum Processor: Designed for AI on Z." IBM Newsroom.
11. Modha, D. S. et al. (2023). "Neural Inference at the Frontier of Energy, Space, and Time." *Science*, 382(6668): 329–335.
12. IBM (2024). "Granite Foundation Models Technical Report." arXiv:2405.04324.
