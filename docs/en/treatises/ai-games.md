# Treatise · AI and Games

> Games are AI's oldest, and most unforgiving, stage. From the 64 squares of the chessboard to the 19 lines of Go, from Atari pixels to the command center of *StarCraft*, every game has been a coliseum carefully built for the machine. Here, victory is reduced to a number, and the highest level of human skill is quantified into a single opponent. Each fortress the machine breaches pushes the boundary of "intelligence" one inch further back.

## Act I: Childhood on the Chessboard (1952–1997)

The marriage of artificial intelligence and games is almost as old as the discipline itself.

In 1952, IBM engineer **Arthur Samuel (1901–1990)** wrote the first version of his checkers program on an IBM 701. The machine had only a few thousand bytes of memory, but Samuel was convinced checkers was the perfect sandbox for testing machine-learning ideas. In 1959 he published *Some Studies in Machine Learning Using the Game of Checkers* in the *IBM Journal*, the first systematic articulation of "machine learning" — a program that updated its evaluation function through self-play, gradually learning to recognize good positions from bad. It was the first program in history that grew stronger from experience.

After checkers, chess became the next sacred mountain. From **Claude Shannon**'s 1950 founding paper *Programming a Computer for Playing Chess*, through the NSS program of **Allen Newell**, **Herbert Simon**, and **Cliff Shaw**, to the chess-engine contests at universities throughout the 1970s, chess became the universal benchmark of AI labs.

The end came on May 11, 1997, on the 35th floor of New York's Equitable Center. IBM's Deep Blue defeated the world champion **Garry Kasparov** 3.5 to 2.5 in a six-game match. Deep Blue was the work of a team led by Hsu Feng-hsiung (许峰雄) — beginning with his PhD-era "Deep Thought" project at Carnegie Mellon in 1985, he had honed a custom VLSI chip dedicated to chess for more than a decade. The 1997 Deep Blue carried 480 such chips and could evaluate roughly 200 million positions per second. Kasparov accused IBM of cheating after the match — he could not believe a machine had played the second game's apparently "intuitive" pawn sacrifice. Thirty years on it looks like the simple victory of brute-force search: Deep Blue did not "understand" chess, it merely counted deeper, faster, and colder than any human.

An era ended. The machine had proved that, in closed games of finite information and finite rules, raw compute could grind down humans.

## Act II: Neural Networks Return to the Board (2013–2015)

After checkers and chess, Go waited quietly. There are roughly 10^170 possible positions on the 19×19 board, far exceeding the atoms in the universe. Brute-force search was useless here. The consensus held that beating the human Go champion would take at least another decade.

The turn came from a seemingly unrelated direction — video games. In 2013, DeepMind published a short paper at the NIPS Workshop, *Playing Atari with Deep Reinforcement Learning*. The team led by **Demis Hassabis** introduced the Deep Q-Network (DQN), the first system that learned to play 49 Atari 2600 games using only screen pixels and score feedback. Breakout, Space Invaders, Pong — the same architecture matched or exceeded human level on many titles. The expanded version, on the cover of *Nature* in 2015, is regarded as the founding work of deep reinforcement learning.

DQN mattered not because it beat Atari, but because it announced a new possibility: with a convolutional network as "eyes" and reinforcement learning as "instruction," a machine could learn strategy from pixels with no prior knowledge.

DeepMind, then little known outside academic circles, had been founded in London in 2010 by **Hassabis**, Shane Legg, and Mustafa Suleyman, and was acquired by Google for £400 million in 2014. The Atari demo videos were a key part of what won Google over — Larry Page and **Sergey Brin** watched DQN teach itself Breakout in DeepMind's London demo room, and they had already glimpsed the shape of the next decade.

The conqueror of Go was already taking form along this path.

## Act III: The Night of AlphaGo (March 2016)

In October 2015, DeepMind held a secret match in London: AlphaGo defeated European champion Fan Hui (樊麾) 5–0. The paper appeared on the cover of *Nature* in January 2016, with **David Silver** as first author and **Hassabis** leading. AlphaGo combined three weapons — a policy network predicting strong-player moves, a value network evaluating winning probability, and Monte Carlo Tree Search (MCTS) to integrate them.

After the Fan Hui match, doubt remained. Most professional 9-dans believed AlphaGo still lagged behind the world's best.

On March 9, 2016, at the Four Seasons Hotel in Seoul, AlphaGo began its five-game match against Korean 9-dan **Lee Sedol**. In the second game, on move 37, AlphaGo played a fifth-line shoulder-hit. The commentary booth fell briefly silent — such a move would scarcely be considered in professional training, instinct judging it inferior. But as the game unfolded, every observer realized it was a stroke from beyond. The Go world was stunned: the machine was not merely calculating, it seemed to *understand*.

AlphaGo won the match 4–1. The single game Lee Sedol won — Game 4, his "divine move 78" — became the symbolic last stand of humanity against the machine. A year later, AlphaGo Master won 60 straight against top professionals online; in May 2017, AlphaGo defeated world No. 1 Ke Jie 3–0 in Wuzhen, after which Ke Jie wept with his face in his hands. DeepMind announced AlphaGo's retirement.

Then came AlphaGo Zero (October 2017) — abandoning all human game records, learning purely through self-play from random weights, surpassing the version that beat Lee Sedol in 72 hours. AlphaZero followed in December 2017 — the same algorithm mastering chess in 4 hours and shogi in 2, crushing top specialized engines. MuZero (December 2019) went one step further, learning chess and Atari without even being told the rules, only from interaction.

The two-thousand-year-old boulder of Go was shattered by AI within three years. The victory paid back to human Go as well — Ke Jie, Iyama Yuta, and Shin Jin-seo have all said publicly that AlphaGo changed their understanding of openings and shapes. The "divine moves" of AI quietly soaked into professional play, and over the following five years the entire Go world stepped onto a new plateau.

## Act IV: Real-Time Strategy and Imperfect Information (2017–2019)

Board games conquered, AI turned to a more complex domain: real-time strategy.

*StarCraft II* was harder than Go — an almost continuous action space, partial observability, the need for long-horizon strategy. In January 2019, DeepMind announced AlphaStar. It first imitated human play, then improved through "League Training" in which many agents fought each other. By December that year, AlphaStar had reached Grandmaster on Battle.net, top 0.2% on the European servers, playing anonymously.

OpenAI staked its battle on *Dota 2*. After defeating top player Dendi in a 1v1 SoloMid in 2017, OpenAI Five made its public debut at The International 8 in 2018, and in April 2019 beat the world champions OG 2–0 in a public match. The game-AI field had truly stepped out of the lab — OpenAI revealed that OpenAI Five had accumulated game time equivalent to 45,000 years during training.

A deeper breakthrough came at the poker table. Poker is imperfect-information: you cannot see opponents' hands, and their bets are themselves part of the strategy. In January 2017, Tuomas Sandholm and **Tom Brown (Noam Brown)** of Carnegie Mellon ran their Libratus over twenty days at Pittsburgh's Rivers Casino against four top heads-up no-limit pros, playing 120,000 hands and ending up roughly $1.76 million ahead in chips. In July 2019, their Pluribus conquered six-player Texas Hold'em — one of the hardest multi-player imperfect-information settings in game theory — and was published in *Science* under the title *Superhuman AI for multiplayer poker*.

So went the trifecta: "boards — esports — poker" told the world that perfect information, imperfect information, and long-horizon planning could all be crossed. Meta AI's CICERO (2022) extended the war into *Diplomacy*, a game blending natural-language negotiation with strategic decisions. CICERO ranked in the top 10% of human players in anonymous online matches, negotiating alliances, betrayals, and territorial divisions in fluent English. Language, negotiation, deception — skills once thought purely human — entered the AI capability list for the first time.

## Act V: The Game World Becomes a Training Ground

Games matter to AI for more than "beating humans."

Their deeper role is to be a cheap sandbox for general intelligence. OpenAI Gym (2016), DeepMind Lab (2016), Unity ML-Agents (2018), and ProcGen Benchmark (2019) — a series of open platforms drove the entry barrier of reinforcement learning much lower. Small-data benchmarks like Atari 100k forced researchers to care about sample efficiency rather than raw compute.

In 2023, DeepMind's DreamerV3 learned to "collect a diamond" in *Minecraft* from scratch, without curriculum learning — a task long considered RL's holy grail. In February 2024 DeepMind released Genie, a "foundation world model" trained on unlabeled internet video that could turn a still image into an action-controllable 2D game environment. Genie was no longer an AI that "plays games" but an AI that *generates* games. GameNGen the same year showed real-time *Doom* simulation through diffusion: the neural network had replaced the game engine itself.

The relationship between games and AI is reversing. Once researchers used games as AI's testing ground; now games are becoming AI's canvas.

## Act VI: The Soul of the NPC (2023–2026)

After ChatGPT, in-game non-player characters got a second life.

The traditional NPC was a finite-state machine: a player triggered a switch, the NPC delivered a recorded line; designers wrote every branch of plot by hand. Inworld AI (founded 2021) embedded LLMs into the NPC's "soul," giving characters persistent memory, personality, and emotion. Character.AI let tens of millions of users converse daily with fictional figures in the browser; in 2024 its founders rejoined Google DeepMind, with the company valued in the billions.

At GDC 2024, Ubisoft demonstrated its NEO NPC prototype: players could speak with NPCs in natural language, the responses generated by an LLM in real time but kept within strict character bounds. Nvidia's ACE platform offered an end-to-end "NPC backend" from speech recognition to facial animation, with inference latency squeezed to about 100 ms — the physical floor for "natural" conversation.

In research, Stanford's Joon Sung Park and colleagues in 2023 published the *Generative Agents* experiment, in which 25 LLM-driven townspeople spontaneously organized birthday parties and remembered each other across days. It is widely seen as the research prototype of "open-world NPCs."

But LLM-driven NPCs introduce new problems: hallucination, breaking character, content moderation. An NPC that "improvises freely" might say something on stream that suffocates the publisher. How to make an LLM both "alive" and "obedient" became the hottest engineering question of game AI in 2025–2026.

## Act VII: Generative Game Content (PCG's New Spring)

Procedural Content Generation (PCG) is not new. *Minecraft* and *No Man's Sky* long ago used algorithms to generate endless worlds. But generative AI has changed PCG qualitatively.

Maps, levels, plots, characters, textures, sound effects — every link once polished by hand by artists or designers is now being entered by AI tools. The 2024–2025 trends include:

- **Characters and motion**: Tencent and miHoYo demonstrated diffusion-model generation of character art with riggable skeletons and motion sequences.
- **Levels**: MIT and Riot Games collaborated on LLM-assisted level design.
- **Live worlds**: DeepMind's Genie 2 (December 2024) generated interactive 3D worlds from a single image, lasting up to a minute.
- **Gameplay loops**: early experiments let LLMs dynamically generate quests and dialogue at runtime.

The industry split into camps. Optimists believe AI will let solo developers craft AAA worlds; skeptics fear PCG will turn games into endless content streams from which players cannot escape, trapped inside an algorithmically fed echo chamber.

## Act VIII: Copyright, Employment, and Resistance

On July 26, 2024, the U.S. SAG-AFTRA struck against ten video-game companies (including Activision Blizzard, EA, and Disney Interactive). One core issue was AI replacing voice actors. The strike continued into mid-2025 and forced many studios to add protective language: "AI training or cloning requires explicit licensing." Japan's voice-actor union also formed an anti-AI alliance the same year.

Earlier, in 2023, Ubisoft, SEGA, and Take-Two faced internal and external scrutiny for using generative AI tools — where did training data come from, who bears the infringement risk, where will the displaced artists and level designers go?

In late 2024, several listed game companies named "generative AI penetration rate" a key KPI on investor calls. Meanwhile, the indie community called for "no-AI" labels and players began boycotting AI-suspected content in Steam reviews. The industry stands at an awkward crossroads: cost pressure pushes it toward AI, public sentiment and cultural conservatism pull it back to handcraft.

Games were once the purest stage of AI. Today they are becoming the first real battleground for how AI and humans will live together.

## Coda: Does Winning Games Equal General Intelligence?

A final question for the history of ideas.

Whenever AI conquers a game, prophecies of AGI surge in the press. Researchers themselves are more cautious. Games are well-defined environments — closed rules, quantifiable goals, fully or partially observable states. The real world is the opposite: goals are murky, rules change, opponents may not be rational. AlphaZero will not wash dishes, AlphaStar cannot soothe an angry player, and OpenAI Five was never expected to play chess.

Game-AI's victories prove that "outperforming humans in restricted environments" is an achievable engineering goal, but they do not automatically resolve general intelligence. The distinction was sharpened after large language models took the stage in 2024 — LLM behavior in open-ended language tasks looks closer to "general" than AlphaZero's perfection in Go. As AI's first arena, games have largely fulfilled their historical mission. The next stage will be murkier, more complex, closer to human life: the real world.

---

::: tip Historian's Note
Eighty years of entanglement between AI and games show two things at once: they have grown together, and they have mirrored one another. Samuel's checkers program coined the very name of "machine learning"; Deep Blue's defeat of Kasparov proved that brute search could grind down human intuition; AlphaGo's move 37 in game two showed the world that neural networks could glimpse, in the eastern art of Go, what no human had seen. Games made fitting touchstones for AI: clear rules, quantifiable goals, billions of repeatable games — qualities the real world rarely affords. Yet victory contains a trap. He who never loses on the Go board may not buy groceries on the street; he who commands armies in *StarCraft* may not soothe an angry player. The boundaries of intelligence reach far past the binary of win and loss. Today generative AI strikes back at the games industry — voice actors strike, indie developers resist, giants list "AI penetration" as a KPI — all the inevitable spillage of technology onto ethics and employment. Games were AI's earliest stage, and they will remain its most direct experiment in how machines and humans should divide labor and live together. Victory is plain to see; the right measure is hard to find — that is the deeper riddle, harder than any single game.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on the research, development, or play of game AI, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Samuel, A. L. (1959). Some studies in machine learning using the game of checkers. *IBM Journal of Research and Development*, 3(3), 210-229.
2. Campbell, M., Hoane, A. J., & Hsu, F. H. (2002). Deep Blue. *Artificial Intelligence*, 134(1-2), 57-83.
3. Mnih, V., Kavukcuoglu, K., Silver, D., et al. (2015). Human-level control through deep reinforcement learning. *Nature*, 518(7540), 529-533.
4. Silver, D., Huang, A., Maddison, C. J., et al. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature*, 529(7587), 484-489.
5. Silver, D., Schrittwieser, J., Simonyan, K., et al. (2017). Mastering the game of Go without human knowledge. *Nature*, 550(7676), 354-359.
6. Silver, D., Hubert, T., Schrittwieser, J., et al. (2018). A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play. *Science*, 362(6419), 1140-1144.
7. Schrittwieser, J., Antonoglou, I., Hubert, T., et al. (2020). Mastering Atari, Go, chess and shogi by planning with a learned model. *Nature*, 588(7839), 604-609.
8. Vinyals, O., Babuschkin, I., Czarnecki, W. M., et al. (2019). Grandmaster level in StarCraft II using multi-agent reinforcement learning. *Nature*, 575(7782), 350-354.
9. Berner, C., Brockman, G., Chan, B., et al. (2019). Dota 2 with large scale deep reinforcement learning. *arXiv preprint arXiv:1912.06680*.
10. Brown, N., & Sandholm, T. (2018). Superhuman AI for heads-up no-limit poker: Libratus beats top professionals. *Science*, 359(6374), 418-424.
11. Brown, N., & Sandholm, T. (2019). Superhuman AI for multiplayer poker. *Science*, 365(6456), 885-890.
12. Bruce, J., Dennis, M. D., Edwards, A., et al. (2024). Genie: Generative Interactive Environments. *Proceedings of ICML 2024*.
13. Hafner, D., Pasukonis, J., Ba, J., & Lillicrap, T. (2023). Mastering diverse domains through world models (DreamerV3). *arXiv preprint arXiv:2301.04104*.
