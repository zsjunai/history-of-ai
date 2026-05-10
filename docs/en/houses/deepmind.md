# House · Google DeepMind

> A small company that started in a London office near King's Cross—first shaking the world of Go with AlphaGo, then rewriting biology with AlphaFold, and finally putting its founder on a Nobel stage. Its story is the sharpest cross-section of the first three decades of twenty-first-century AI.

## London Origins: Three Founders, One Obsession

In September 2010, three young Londoners hung a small sign on an unremarkable office near King's Cross for a company called DeepMind Technologies. Their ambition was wildly out of scale with the office: "Solve intelligence, and then use it to solve everything else."

The leader was **Demis Hassabis (1976–)**. By thirteen he was a chess master candidate; before university he worked at the Bullfrog game studio next to Oxford, contributing to classics like *Theme Hospital*. After completing his computer-science undergraduate degree at Cambridge, he plunged into neuroscience, finishing a PhD at University College London (UCL) on the relationship between the hippocampus and imagination. He never thought of games, brain science, and AI as three separate things—from his teens he believed they were all the same road to "general intelligence."

The other two were old friends and new ones. Shane Legg, a New Zealand–born computer scientist, did his PhD with Jürgen Schmidhuber at Switzerland's IDSIA, on a thesis literally titled *Machine Super Intelligence*. He had met Hassabis at UCL's Gatsby Computational Neuroscience Unit, founded by funding from former Microsoft CTO Nathan Myhrvold and one of the few places in London where brain research and machine learning sat side by side. Mustafa Suleyman, a childhood friend of Hassabis who had dropped out of Oxford's philosophy program, was the operations and policy person, having already worked on a youth-focused project at the London mayor's office.

The three covered "scientific intuition—theoretical depth—organizational capacity." Their first money came from entrepreneur Horváth and Silicon Valley investors: Peter Thiel, **Elon Musk (1971–)**, and Li Ka-shing's Horizons Ventures. By around 2011, DeepMind had only dozens of employees in an old building within walking distance of King's Cross station, with neuroscience papers, checkers boards, and equation-filled whiteboards stacked on the desks.

## The Atari Moment: Deep Reinforcement Learning Is Born

What first pulled the world's eye to DeepMind was not a large model but a batch of 1980s arcade games.

In December 2013, at a NeurIPS workshop, DeepMind posted a nine-page preprint—*Playing Atari with Deep Reinforcement Learning*. The paper stitched a convolutional neural network onto Q-learning, producing a system called DQN (Deep Q-Network). Without any rule book, it took only screen pixels and the score and learned to match or surpass humans on seven Atari games—*Breakout*, *Space Invaders*, *Pong*, and others.

The paper was short, blunt, and forceful. For the first time, "deep learning" and "reinforcement learning"—two long-separated rivers—had truly joined. In February 2015, the extended paper made the cover of *Nature*; DQN's Atari list grew from 7 to 49 games, with 29 at or above professional level. For Google, this was decisive evidence: DeepMind was not a team that only wrote white papers but one that could turn abstract ideas into verifiable achievements.

In January 2014, Google announced its acquisition of DeepMind for about 500 million dollars—Google's largest AI acquisition in Europe at the time. Two unusual conditions were attached: DeepMind would remain independent in London and not be folded into Mountain View; and Google would establish an independent "AI Ethics Board" to oversee uses of the technology. For a four-year-old company barely emerged from anonymity, those terms reflected the founders' stubborn belief in "the London genes" and in long-term thinking.

## AlphaGo Shock: A Citadel of Go Falls

Atari was just the beginning. What put DeepMind in the public eye was a single board game.

Go had long been considered AI's "last fortress." A 19×19 board with a search space of about 10¹⁷⁰—more than the number of atoms in the universe. After Deep Blue cracked chess in 1997, the consensus was that beating top human Go players would take another ten to twenty years.

DeepMind chose precisely that bone. **David Silver (1976–)**, Hassabis's Cambridge classmate, was core to DeepMind's reinforcement-learning research. His team trained a "policy network" on professional game records, used a "value network" to score positions, and stitched the two together with Monte Carlo Tree Search (MCTS)—uniting human experience, the intuition of deep learning, and the precision of search. The system was called AlphaGo.

In October 2015, in a quiet London office, AlphaGo defeated European champion Fan Hui 5–0. In January 2016, *Nature* published the result as a cover paper. Three months later, from March 9 to 15, at the Four Seasons Hotel in Seoul, AlphaGo faced its true exam: a five-game match against the top human professional **Lee Sedol (1983–)**.

More than 200 million people watched online. The result was 4–1. Two moves became legend.

The first came from the machine. Move 37 of game two—AlphaGo played a "shoulder hit" on the fifth line, a position professionals almost never consider. AlphaGo itself estimated the probability of a human playing this move at less than one in ten thousand. Commentators first thought the program had a bug; only dozens of moves later did the strategic depth become clear. After the match, Fan Hui said: "It is not a human's move, but it is a good move—it expanded our imagination of Go."

The second came from the human. Move 78 of game four—Lee Sedol, in a losing position, played a "wedge" later called "the divine move." AlphaGo's value network mis-evaluated, missed the response, and lost. It was AlphaGo's only loss of the series. At the press conference, Lee said quietly: "I did not lose; Lee Sedol lost—not humanity." Three years later, when he announced his retirement in 2019, he confessed: "The arrival of AI made me feel I could not win."

In May 2017, the upgraded AlphaGo Master beat Ke Jie, then world number one, 3–0 in Wuzhen, China. In October 2017 DeepMind released AlphaGo Zero—a version trained from scratch through pure self-play with no human game records. In just three days it surpassed the version that had beaten Lee Sedol; in 40 days it had passed every known Go program and human player. In December the same year, the more general AlphaZero appeared—the same algorithm reaching top level in Go, chess, and shogi.

The fortress of Go had fallen, and the manner of falling was even more astonishing than the fall itself: the machine could not only learn from human experience but step beyond its boundaries.

## AlphaFold: The End of a Half-Century Problem

After 2016, DeepMind's gaze shifted from the board to a much harder wall.

The protein-folding problem had haunted biology for nearly half a century. The 1972 Nobel laureate in chemistry Christian Anfinsen proposed that a protein's three-dimensional structure is determined entirely by its amino-acid sequence. But the rules of "translation" from sequence to structure had eluded humanity. Traditional X-ray crystallography and cryo-electron microscopy often took a doctoral student years to solve a single protein. After decades of global effort, only on the order of a hundred thousand protein structures had been solved experimentally—against hundreds of millions of known sequences.

The Critical Assessment of Structure Prediction (CASP), held biennially, is the most serious Olympics of the field. At CASP13 in 2018, DeepMind's AlphaFold 1 entered for the first time and won, with a mean prediction accuracy far ahead of every other team, leaving the protein community both stunned and uneasy.

The true breakthrough came at CASP14 in November 2020. The team led by **Demis Hassabis (1976–)** and John Jumper brought AlphaFold 2. On 88 of 97 test targets it produced the best prediction; the average GDT score reached 92.4—matching experimental methods like X-ray crystallography. CASP co-founder John Moult told the press conference: "For most cases, the problem is solved."

AlphaFold 2's architecture combined multiple attention mechanisms, equivariant geometric deep learning, and end-to-end training. It was not the victory of any single trick but of a team that had polished nearly all of modern deep learning's tools to their finest edge.

On July 15, 2021, AlphaFold 2's code and full paper were released open-source in *Nature*. A week later, DeepMind partnered with the European Bioinformatics Institute (EMBL-EBI) to launch the AlphaFold Protein Structure Database. The first version held about 365,000 structures, covering the proteomes of humans and 20 model organisms. By July 2022, the database had grown to about 200 million structures, covering nearly every known protein in UniProt—an unprecedented event in human biology, "every protein in the world made three-dimensionally visible overnight."

AlphaFold 3, released in May 2024, extended prediction from single proteins to interactions of proteins with nucleic acids, ligands, and ions, drawing closer to the boundary of "real molecules in living cells."

## The Google DeepMind Merger: London Shakes Hands with Silicon Valley

On November 30, 2022, OpenAI released ChatGPT, gaining over 100 million users in two months. The world was startled; Google was shaken—from the 2017 Transformer paper, Google had stood at the source of generative AI, but a small San Francisco team had stolen the era's headline.

On April 20, 2023, Google CEO Sundar Pichai sent the internal memo: DeepMind and Google Brain would merge into **Google DeepMind**, with Hassabis as CEO and Jeff Dean elevated to Chief Scientist for Google Research and Google DeepMind. For the first time, two top AI teams that had operated in parallel across the Atlantic were placed inside a single decision-making unit.

It was the most aggressive organizational realignment Google had made in a decade. DeepMind brought reinforcement learning, the AlphaFold-style scientific-attack tradition, and a "London slow-thinking" culture; Google Brain brought the entire bloodline of TensorFlow, Transformer, and BERT—both product and basic-research lineage—and the TPU clusters of Mountain View. In post-merger interviews, Hassabis said repeatedly that he was trying to bring the new organization "back to a startup state"—shedding the silos and procedures of each side, and racing ChatGPT in a single trans-Atlantic rhythm.

## The Gemini Series: Pushing the Model to the Main Stage

Within eight months of the merger, the new organization delivered its first answer.

On December 6, 2023, Gemini 1.0 was released, in three tiers—Ultra, Pro, Nano. It was natively multimodal, taking text, image, audio, and video as inputs from training. Ultra broke records on 30 of 32 benchmarks; on MMLU (a 57-subject exam-style benchmark) it reached 90.0% for the first time, slightly above the human-expert average.

In February 2024, Gemini 1.5 Pro launched with a 1-million-token context window, later extended to 2 million—enough to read in tens of hours of video, or *War and Peace* together with Shakespeare's complete works. In December 2024, Gemini 2.0 entered the "agent era," with native image and audio generation built in, alongside the prototype of Project Astra, a general-purpose assistant.

On March 25, 2025, an experimental version of Gemini 2.5 Pro topped the LMArena leaderboard by a significant margin. At Google I/O that May, the Gemini 2.5 family rolled out across the line, with 2.5 Flash as the default model. On August 1, Gemini 2.5 Deep Think opened to Google AI Ultra subscribers—the first time DeepMind made "multi-path parallel reasoning and deep reflection" a paid product feature.

On November 18, 2025, Gemini 3 Pro launched and arrived the same day across the Gemini app, Google Search, AI Studio, and Vertex AI—a break from Google's previous staged-release habit. Gemini 3 Deep Think followed for research and engineering use; on February 19, 2026, Gemini 3.1 Pro arrived as a preview, described officially as "another leap in core reasoning capability."

From December 2023 to February 2026, in less than 27 months, Gemini went from 1.0 to 3.1—the clearest demonstration of post-merger combat readiness for Google DeepMind.

## The Nobel Moment

At about noon on October 9, 2024 (Stockholm time), the Royal Swedish Academy of Sciences announced: the 2024 Nobel Prize in Chemistry would be awarded to three scientists. David Baker of the University of Washington received half the prize for "computational protein design"; the other half went to **Demis Hassabis** and **John Jumper**, for "AI prediction of protein structure." The total prize was 11 million Swedish kronor.

It was the first time in Nobel history that a prize was awarded for what was essentially "software engineering plus deep learning"; the first time, too, that a CEO of an AI company stood on the Nobel stage. More symbolically, the day before—October 8—**Geoffrey Hinton (1947–)** had just shared the 2024 Nobel Prize in Physics for the foundational work on neural networks. Within two days, deep learning was written from "the academic alternative" into the Nobel canon.

At the Stockholm ceremony, Hassabis, in a tailored white tie, spoke evenly about science and risk. He said the medal "belongs to the entire AlphaFold team," to DeepMind's fourteen-year commitment to "solving intelligence," and to a longer-term faith that AI should be "a tool to accelerate scientific discovery, not an idol that replaces science."

## People in Motion, and a Culture

DeepMind's story is also a story of who comes and who goes.

Co-founder Mustafa Suleyman left DeepMind temporarily in 2019 amid criticism of his management style; in 2020 he moved to a Google policy role; in 2022 he left Google to found Inflection AI; in March 2024 he and his team joined Microsoft as a unit, with Suleyman as CEO of Microsoft AI. After his departure, only Hassabis and Legg remained from the founders.

Chief Technology Officer Koray Kavukcuoglu, who joined in 2012, has long managed engineering; from 2024 he has been Chief AI Architect at Google DeepMind, one of the technical leaders of the Gemini line. AlphaFold's chief scientist **John Jumper** stayed at DeepMind to lead protein research after the Nobel. **Ian Goodfellow (1985–)**, after stints at Google and Apple, returned to DeepMind and is deeply involved in Gemini work.

After the merger, Google DeepMind's full-time headcount is estimated in the thousands, with research offices in London King's Cross, Mountain View, Zurich, Montreal, Tokyo, and Singapore. A substantial fraction of staff still hold backgrounds in neuroscience or physics—preserving Hassabis's earliest "neuroscience-inspired AI" gene: see the brain as an engineerable learning system, see AI as a discipline that can give back to neuroscience.

DeepMind has an unwritten code: "publish important papers, benefit all of humanity." The AlphaFold database is fully and freely open; the AlphaGo papers are public. By contrast, OpenAI moved toward closed-source after GPT-4, while DeepMind continues to release a great deal of its work as papers and open source—the substrate of a "research-first company."

## Timeline

| Year | Event |
|------|------|
| 2010 | Hassabis, Legg, and Suleyman found DeepMind in London |
| 2013 | DQN preprint at NeurIPS workshop; Atari games beaten |
| 2014 | Acquired by Google for ~500 million dollars; London independence preserved |
| 2015 | DQN paper makes the *Nature* cover, covering 49 Atari games |
| 2015-10 | AlphaGo defeats European champion Fan Hui 5–0 |
| 2016-03 | AlphaGo defeats Lee Sedol 4–1 in Seoul; moves 37 and 78 enter history |
| 2017-10 | AlphaGo Zero: pure self-play surpasses all human game records |
| 2017-12 | AlphaZero: one algorithm masters Go, chess, and shogi |
| 2018 | AlphaFold 1 wins CASP13 on first entry |
| 2020-11 | AlphaFold 2 reaches experimental accuracy at CASP14, GDT 92.4 |
| 2021-07 | AlphaFold 2 paper and code open-sourced; structure database goes live |
| 2022-07 | Database expands to about 200 million structures |
| 2023-04 | DeepMind merges with Google Brain into Google DeepMind, Hassabis as CEO |
| 2023-12 | Gemini 1.0 released; MMLU first crosses 90% |
| 2024-02 | Gemini 1.5 Pro reaches 1-million-token context |
| 2024-05 | AlphaFold 3 extends to protein–nucleic-acid and ligand interactions |
| 2024-10 | Hassabis and Jumper share the Nobel Prize in Chemistry for AlphaFold |
| 2024-12 | Gemini 2.0 launches in the "agent era" |
| 2025-03 | Gemini 2.5 Pro tops LMArena |
| 2025-08 | Gemini 2.5 Deep Think opens to Google AI Ultra subscribers |
| 2025-11 | Gemini 3 Pro launches across all platforms on the same day |
| 2026-02 | Gemini 3.1 Pro arrives as a preview |

---

::: tip Historian's Note
DeepMind began in a corner of London; in its prime its name moved through the wide world. From 2010 onward, in the brief span of fourteen years, it broke the citadel of Go with AlphaGo, opened the gate of life with AlphaFold, and finally took its place on the Nobel stage. Few have, within a single generation, crossed the three battlefields of board games, proteins, and language. Three sources made that possible. First, slow thinking—from Atari to Gemini, the goal "solve intelligence" never followed the wind nor chased short profit. Second, confluence—it merged the streams of neuroscience, reinforcement learning, and deep learning into one channel and refused dogmatic factions. Third, openness—the AlphaFold database is wholly public, the papers and code are released for the world; science treated as a public good. Yet whether, after merging with Google Brain, it can preserve the independence of London's air, and whether its competition with OpenAI and Anthropic can keep its scientific color, remain to be seen. The road to "solving intelligence" is still long; DeepMind has only walked half of it.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at DeepMind, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. Mnih, V. et al. (2013). "Playing Atari with Deep Reinforcement Learning." *NeurIPS Deep Learning Workshop*.
2. Mnih, V. et al. (2015). "Human-level Control through Deep Reinforcement Learning." *Nature*, 518: 529–533.
3. Silver, D. et al. (2016). "Mastering the Game of Go with Deep Neural Networks and Tree Search." *Nature*, 529: 484–489.
4. Silver, D. et al. (2017). "Mastering the Game of Go without Human Knowledge." *Nature*, 550: 354–359.
5. Silver, D. et al. (2018). "A General Reinforcement Learning Algorithm that Masters Chess, Shogi, and Go through Self-Play." *Science*, 362: 1140–1144.
6. Jumper, J. et al. (2021). "Highly Accurate Protein Structure Prediction with AlphaFold." *Nature*, 596: 583–589.
7. Tunyasuvunakool, K. et al. (2021). "Highly Accurate Protein Structure Prediction for the Human Proteome." *Nature*, 596: 590–596.
8. Abramson, J. et al. (2024). "Accurate Structure Prediction of Biomolecular Interactions with AlphaFold 3." *Nature*, 630: 493–500.
9. Google (2023-04-20). "Announcing Google DeepMind." *deepmind.google/blog*.
10. Google DeepMind (2023-12-06). "Introducing Gemini: Our Largest and Most Capable AI Model." *blog.google*.
11. Google DeepMind (2024-10-09). "Demis Hassabis & John Jumper Awarded Nobel Prize in Chemistry." *deepmind.google/blog*.
12. The Royal Swedish Academy of Sciences (2024-10-09). "The Nobel Prize in Chemistry 2024 — Press Release." *nobelprize.org*.
13. Google (2025-11-18). "Gemini 3: Introducing the Latest Gemini AI Model from Google." *blog.google*.
