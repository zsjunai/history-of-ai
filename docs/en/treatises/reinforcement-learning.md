# Treatise · A History of Reinforcement Learning

> The earliest form of all learning is "try, and try again." From Pavlov's dog to AlphaGo's thirty-seventh move, and on to the RLHF that taught GPT to be polite, reinforcement learning is the lineage in this book most faithful to *experience*.

## Act One: The Behaviorists' Test Bench

Reinforcement learning is not a computer's invention. It is the inheritance of behavioral science.

In the late nineteenth century, the Russian physiologist Ivan Pavlov, while studying canine digestion, found that ringing a bell before each feeding eventually caused dogs to salivate at the sound alone. This "classical conditioning" provided the first hard data for the learnability of stimulus and response.

Into the twentieth century, the American psychologist Edward Thorndike formulated the Law of Effect: behaviors leading to satisfaction are reinforced in similar contexts; behaviors leading to discomfort are weakened. From the 1930s to the 1940s, B. F. Skinner built his famous Skinner box at Harvard, turning reinforcement and punishment into a quantifiable discipline — press the lever, get the food; the pigeon learns. This is the engineering prototype of trial-and-error learning.

At the same time, **Donald Hebb (1904–1985)** in his 1949 *The Organization of Behavior* proposed that "neurons that fire together, wire together," providing a cellular footnote to learning at the biological level. Scholars realized: reinforcement was a general principle, spanning biology and machinery.

## Act Two: Bellman's Recursion — The Mathematization of Optimal Control

The man who handed this discipline to mathematics was Richard Bellman.

In 1957, while at RAND, Bellman developed dynamic programming and wrote the Bellman equation that endures to this day: the value of a state equals "the immediate reward plus the discounted value of the next state." This recursion compressed "how to act optimally in a sequence of decisions" into a single line. From then on, optimal control had a recursive paradigm.

When Bellman coined the phrase "curse of dimensionality," it was half a joke — once the state space multiplied, dynamic programming's compute exploded exponentially. Sixty years later, this curse would be partially broken in an unexpected way by deep networks.

Almost simultaneously, AI saw its first machine that could truly "learn": in 1959, **Arthur Samuel (1901–1990)** at IBM wrote a program that played checkers and let it play against itself — the first documented program to use a form of self-play and value-function learning. Samuel's work was twenty years ahead of its time, but no one then understood its significance.

Worth noting too is **Donald Michie (1923–2007)**'s 1961 MENACE — a "mechanical learner" of tic-tac-toe assembled from 304 matchboxes. Each box represented a board position; colored beads inside encoded the next-move probabilities; winning gained reward, losing met punishment. MENACE staged the entire core of trial-and-error reinforcement in its purest form, and remains one of the most touching teaching examples to this day.

## Act Three: Sutton and Barto — RL Becomes a Discipline

Reinforcement learning truly became a discipline with a name, a textbook, and a consensus only in the 1980s.

Richard Sutton and Andrew Barto, collaborating at the University of Massachusetts since the late 1970s, fused behaviorism, dynamic programming, neural networks, and optimal control into a unified formal language. They introduced a simple yet powerful tool — temporal-difference learning (TD): instead of waiting for an episode to finish before updating values, every step uses the next step's estimate to correct the current one. TD is at once a sample-based dynamic programming and a low-bias Monte Carlo, and its efficiency between the two is striking.

In 1989, Watkins of Cambridge proposed Q-Learning in his doctoral thesis: directly learn "the long-term value of taking action *a* in state *s*," no environment model required. Watkins and Dayan proved its convergence in 1992, making it the cornerstone algorithm in every RL textbook since.

In 1998, Sutton and Barto published *Reinforcement Learning: An Introduction*. The green-covered textbook remains the unmatched entry to RL — clear, rigorous, free of fashionable tricks, presenting the core of the discipline plainly on the table.

But before 2010, RL was always a "small data" discipline. As soon as the state space grew, tabular methods broke down; function approximation often failed to converge. RL was the brilliant but battle-shy student — theoretically elegant, weak on the field.

## Act Four: DQN and AlphaGo — The Two Thunderclaps of Deep RL

The turn came in 2013.

A small London company called DeepMind submitted a short paper to NIPS: *Playing Atari with Deep Reinforcement Learning*. **Demis Hassabis (1976–)**'s team, with Mnih as first author, fused Q-Learning with convolutional networks; a DQN agent, given only screen pixels and the game score, reached or surpassed human level on 49 Atari games. Two tricks were the key: experience replay broke sample correlation; a target network stabilized training. The work appeared in *Nature* in 2015. Google acquired DeepMind in early 2014 for around half a billion dollars, marking deep reinforcement learning's entry into public view.

But the world was truly shaken in March 2016, in Seoul.

AlphaGo played a five-game match against the Korean professional **Lee Sedol (1983–)**. In the second game, AlphaGo's thirty-seventh move in the upper right was a "non-human" play — many professionals at first cried out it was an AI blunder. Hours later, they realized it was a brilliancy that had eluded centuries of human study. The moment was permanently inscribed into the annals of Go. **David Silver (1976–)** led the AlphaGo team in combining Monte Carlo Tree Search (MCTS) with policy and value networks, training on thirty million self-play games, finally defeating the world champion 4–1.

AlphaZero in 2017 went further: discarding human game records entirely, learning only from the rules and self-play, it reached superhuman level in Go, chess, and shogi at the same time. Sutton later put it bluntly in *The Bitter Lesson*: scalable search and learning ultimately defeat all hand-crafted knowledge. This is the cold and profound lesson deep RL left to all of AI.

Worth noting is MuZero in 2020: it did not even need the rules, learning chess and Atari from observations and rewards alone. RL had acquired the ability to "model an unknown environment by itself" — one step closer to a true agent that can explore the unknown.

## Act Five: The Policy Gradient Family — From A3C to PPO

DQN suited discrete actions, but robotic control demands continuous ones. RL's other main line — policy gradients — flourished in this era.

DDPG (2014) ported DQN ideas into the continuous regime. In 2015, Schulman and colleagues proposed TRPO (Trust Region Policy Optimization), constraining each policy update to avoid being "too aggressive." In 2017, the same authors rewrote it as PPO (Proximal Policy Optimization) — using a clipping trick to approximate TRPO; simple in implementation, stable, and powerful, it quickly became the de facto industrial standard.

In 2016, Mnih and others proposed A3C (Asynchronous Advantage Actor-Critic), parallelizing sampling across many threads and lifting training speed to a new level. In 2018, Haarnoja and others proposed SAC (Soft Actor-Critic), introducing a maximum-entropy framework that excelled on robotic-control benchmarks.

By around 2020, PPO plus large-scale distributed training had become the default for most game AI and robotics projects. RL had finally walked out of "theoretically elegant, engineering-fragile."

A telling detail: the PPO paper is only eight pages, with a hyperparameter table almost dismissively short — but it actually runs. The RL engineering community came to realize that "engineering-stable" mattered more than "theoretically optimal."

## Act Six: Sim and Real — From OpenAI Five to the Rubik's-Cube Hand

From 2018 onward, RL began to tackle truly complex open environments.

In June 2018, OpenAI Five defeated amateur Dota 2 teams in five-on-five matches; in April 2019, an evolved version defeated world champions OG. The system ran on tens of thousands of CPUs and hundreds of GPUs for the equivalent of several centuries of human play. The same year, DeepMind's AlphaStar reached Grandmaster level in *StarCraft II*. These two pieces of work pushed RL from "playing Atari" to "playing professional eSports," several orders of magnitude harder.

Harder still was bringing RL into the real world. In 2019, OpenAI's Dactyl, a robotic hand trained in simulation, solved a Rubik's Cube one-handed in reality. It was no triumph of mechanism — it was RL plus Domain Randomization filling the sim-to-real gap.

Robotics, autonomous driving, chip floorplanning, chemical reaction optimization — RL began to leave footprints everywhere in industry. Google's AutoML, DeepMind's AlphaChip, contextual bandits in recommendation, off-policy evaluation in ranking — RL's industrial deployment runs deeper and earlier than many realize.

DeepMind's AlphaTensor (2022) discovered more efficient matrix multiplication algorithms; AlphaDev (2023) found sorting and hashing implementations faster than the human-engineered standards of decades — RL is no longer just a controller. It is moving upstream to "algorithm discovery."

## Act Seven: Making Models Behave — The Miracle of RLHF

In 2017, Christiano and others at OpenAI published *Deep Reinforcement Learning from Human Preferences*: ask humans to choose the better of two video segments, train a reward model from those preferences, and optimize the policy with RL. This seemingly modest piece of work would, five years later, transform the entire AI industry.

In early 2022, OpenAI released the InstructGPT paper, standardizing the three-step RLHF pipeline: supervised fine-tuning (SFT), then reward modeling (RM), then policy optimization with PPO. The result was striking — a 1.3-billion-parameter InstructGPT outperformed the 175-billion-parameter original GPT-3 in user evaluations.

On November 30 of that year, ChatGPT went online. The magic that made it "behave" was RLHF. Reinforcement learning, in the most unexpected way, became a core technology of the LLM era — not for playing games, but for cultivating a large model's politeness, helpfulness, and harmlessness.

DPO (2023), KTO, and IPO have since simplified the RLHF pipeline; Anthropic's Constitutional AI (2022) attempts to make models self-align from a "constitution," reducing human feedback to the minimum. But the underlying idea is consistent: shape behavior with preference data, press preferences into weights with RL.

## Act Eight: The Era of Reasoning Models — RL's Renaissance

In September 2024, OpenAI released o1. It is not a larger GPT but a model trained by reinforcement learning to "think before answering." On math, programming, and scientific reasoning benchmarks, o1 leapt ahead of the frontier by tens of percentage points. The key was: use RL to optimize the chain of thought, teaching the model to reflect and self-correct.

In early 2025, DeepSeek released R1 and boldly open-sourced the training details. R1's core was "pure RL plus rule-verifiable rewards" — no need for vast troves of human preferences; if a problem has a verifiable answer, the model can learn to reason in RL by itself. This route slashed the cost of training reasoning models and instantly ignited a global open-source replication wave.

Reinforcement learning was once hailed as "the road to AGI," then eclipsed by deep learning, then sidelined by LLMs — now it stands again at center stage in the name of reasoning. The discipline's fate resembles the agents it studies: falling repeatedly through trial and error, rising again under the right reward signal.

## Open Questions

The core puzzles of RL remain unsolved. How does one design a reward function? Can human preference truly be compressed into a scalar reward? Why is pure RL training so often unstable? How is the sim-to-real gap to be closed for good? When a reasoning model learns to "reflect" in RL, has it learned to *think*, or only to imitate the appearance of thinking?

The story of reinforcement learning is unfinished, because the story of *learning itself* has never been finished.

---

::: tip Historian's Note
A century of reinforcement learning is, at root, the extension of one philosophy: trial and error. Pavlov's dog, Thorndike's cat, Skinner's pigeon — each exchanged behavior for stimulus, no different in kind from today's agents. Bellman's single equation gave dynamic programming its skeleton; Sutton and Barto's book named the discipline. Yet two difficulties have always plagued it: the curse of dimensionality, by which growing states crashed computation; and the murkiness of reward, for not all things in the world can be measured by a single scalar. With deep learning's ascendance, DQN won the Atari war; AlphaGo's thirty-seventh move shocked the Go world; AlphaZero learned itself into godhood. Sutton's Bitter Lesson sealed it: scalable learning and search beat all hand-crafted priors. Then the LLM tide nearly buried RL — until RLHF emerged and taught the great models to be polite, becoming the soul of ChatGPT. With o1 and R1, the fire of reasoning was relit by RL, and we knew the discipline had not died. For learning is the root of all things — biology stores it in neural circuits, machines update it by gradients; the two arrive by different paths at the same place. When will RL truly come of age? When reward can faithfully render *good*; when an agent can fail in the real world the way a person fails — without dying — only then does the journey begin.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on the DQN/AlphaGo line, robotic RL, RLHF data annotation, or reasoning-model training, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Bellman, R. (1957). *Dynamic Programming*. Princeton University Press.
2. Samuel, A. L. (1959). Some studies in machine learning using the game of checkers. *IBM Journal of Research and Development*, 3(3), 210-229.
3. Sutton, R. S. (1988). Learning to predict by the methods of temporal differences. *Machine Learning*, 3(1), 9-44.
4. Watkins, C. J. C. H., & Dayan, P. (1992). Q-learning. *Machine Learning*, 8(3-4), 279-292.
5. Sutton, R. S., & Barto, A. G. (1998). *Reinforcement Learning: An Introduction*. MIT Press.
6. Mnih, V., Kavukcuoglu, K., Silver, D., et al. (2015). Human-level control through deep reinforcement learning. *Nature*, 518(7540), 529-533.
7. Silver, D., Huang, A., Maddison, C. J., et al. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature*, 529(7587), 484-489.
8. Silver, D., Schrittwieser, J., Simonyan, K., et al. (2017). Mastering the game of Go without human knowledge. *Nature*, 550(7676), 354-359.
9. Schulman, J., Wolski, F., Dhariwal, P., Radford, A., & Klimov, O. (2017). Proximal policy optimization algorithms. *arXiv preprint arXiv:1707.06347*.
10. Christiano, P., Leike, J., Brown, T., et al. (2017). Deep reinforcement learning from human preferences. *Advances in Neural Information Processing Systems*, 30.
11. Ouyang, L., Wu, J., Jiang, X., et al. (2022). Training language models to follow instructions with human feedback. *Advances in Neural Information Processing Systems*, 35.
12. DeepSeek-AI. (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
