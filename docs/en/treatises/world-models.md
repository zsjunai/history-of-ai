# Treatise · World Models

> **Yann LeCun (1960–)** says: "Large language models will never reach human intelligence, because they have only learned language, not the world." World models are the most fundamental challenge to the LLM line, and the sharpest watershed in AI research after 2024.

## I. What Is a World Model

The thesis of a world model is concise and sharp: an agent should not merely learn to predict the next token, but should construct in its own mind an internal simulator of the physical world for imagination, planning, and counterfactual reasoning. What it learns is not the distribution of text, but causal chains and physical law — gravity drops things, glass shatters under stone, water poured into a cup stays in the cup.

The intuition begins with infants. The psychologists Spelke and Baillargeon, through experiments in the 1980s and 1990s, showed that human infants — before mastering language — already understand object permanence, solidity, continuous motion, and causal precedence. Intelligence begins with the body's interaction with the world; language is a later byproduct. Proponents of world models push the question: invert that order — feed the model text first, then ask for understanding — and can true intelligence be built?

## II. Theoretical Headwaters

The lineage of world models runs far older than deep learning. Cybernetics already had the "internal model" — in **Norbert Wiener (1894–1964)**'s feedback control, the regulator must contain a simplified model of the controlled object. Predictive coding in neuroscience was systematized by Rao and Ballard in *Nature Neuroscience* (1999): the brain ceaselessly predicts the next instant of sensory input and uses prediction error as the learning signal. Karl Friston later generalized it to the Free Energy Principle.

The first to bring this thinking into deep learning were David Ha and **Jürgen Schmidhuber (1963–)**. Their 2018 paper *World Models* let an agent learn racing and dodging inside its own generated "dream" — a variational autoencoder compressing observations, a recurrent network predicting the next latent state, and a minimal controller trained inside the imagined world. It was the first time, within deep learning, that an agent dreamed in its head and then drove in reality.

Then came the Dreamer series. **Demis Hassabis (1976–)**'s DeepMind released Dreamer V1 through V3 from 2020 to 2023, pushing world models to human-level on all 55 Atari games and on Minecraft's diamond task — proof that complex policies could be learned from imagination alone.

The most ambitious proposal came from **Yann LeCun (1960–)**. In June 2022, his *A Path Towards Autonomous Machine Intelligence* formally proposed JEPA (Joint Embedding Predictive Architecture): predict not in pixel space but in an abstract representation space — discard details irrelevant to the future, retain only the structure useful for decisions. I-JEPA in June 2023 and V-JEPA / V-JEPA 2 in 2024 brought the doctrine down to images and video.

## III. LeCun vs. the LLM Line: The Core Debate

From 2023, **Yann LeCun (1960–)** has been doing one thing in nearly every public talk — dismantling LLMs. His argument is steady and sharp: autoregressive LLMs are "curve-fitters in token space," unable to handle causality or three-dimensional structure; the visual data a ten-year-old child has seen exceeds what any internet-text-fed model has ever ingested. So no matter how many layers or cards you add, it will not reach the root of human intelligence. He has compressed the line into a slogan: "LLM is an off-ramp on the highway to AGI."

The opposing fire is just as fierce. Hassabis and **Dario Amodei (1983–)** do not deny the importance of world models, but insist that LLMs already display a primitive emergent understanding of the world — Claude and Gemini could not otherwise solve physics problems they had never seen. **Ilya Sutskever (1986–)** put it earlier: "to predict the next token, you must understand everything that produces that token." A sufficiently good next-word predictor is, in his view, a general-purpose compressor and modeler.

The debate matters because it determines where the next decade's money flows. If LeCun is right, the tens of billions OpenAI, Anthropic, ByteDance, and Moonshot have bet on LLMs are merely transitional; if Sutskever is right, JEPA, Dreamer, and World Labs are romantic side roads. As of 2026, no one can give a final answer — but every new model release shifts the scale a little.

## IV. Video Generation as World Simulation

On February 15, 2024, OpenAI released Sora. In a sixty-second clip, a woman in a red dress walks through neon-lit Tokyo streets; reflections, rain, the crowd, distant signage — all consistent to the point of disorientation. OpenAI's technical report titled it *Video generation models as world simulators* — naming the video generator a world simulator was a deliberate slogan, a deliberate provocation.

Was Sora a world model? Supporters: it had learned 3D consistency, camera motion, object permanence — the very signatures of a world model. Skeptics produced counterexamples: glass that does not break on impact, chairs passing through floors, creatures growing extra limbs. It had learned the statistics of vision but had not yet learned physics.

China's players entered almost simultaneously. Kuaishou's Kling, released in June 2024, was the first high-quality video model open to global users. ByteDance's Jimeng, Zhipu's Qingying, and MiniMax's Hailuo followed. Overseas, Runway Gen-3, Luma Dream Machine, Pika, and Google Veo 3 (2025) pushed the contest to 4K and one-minute durations. Whether video generation is the true road to a world model, the field has yet to agree — but every player is betting on it.

## V. World Models in Games and Virtual Worlds

If Sora wished to fool the human eye with video, another line went further — generate a *playable* world directly.

In August 2024, Google released GameNGen: a diffusion model running at 20 fps on TPUs, generating *Doom* in real time, with the player's keyboard and mouse inputs driving image evolution directly. The game was no longer rendered — it was predicted. In February of the same year, DeepMind released Genie, learning "controllable latent actions" from unlabeled gameplay video, allowing users to walk around inside a freely sketched picture. By December 2024, Genie 2 generated 3D-consistent, one-minute playable worlds.

NVIDIA pushed the line industrially. At CES in January 2025, **Jensen Huang (1963–)** unveiled Cosmos — a world-foundation-model platform for physical AI, aimed at synthetic data training for robotics and autonomous driving. By early 2026, **Fei-Fei Li (1976–)**'s World Labs publicly demoed its first generative 3D world model, producing explorable 3D scenes from a single image; in interviews she proposed "spatial intelligence" as the core thesis of world models.

Games and virtual worlds naturally provide a causal closed loop — action goes out, world comes back — exactly the missing piece in text corpora.

## VI. World Models and AGI

Placed on the AGI roadmap, LeCun gives the most systematic answer: a perception module extracts representations from raw input, the world model predicts the future, the actor selects actions, the cost module defines goals, and a configurator coordinates everything above — what he calls "objective-driven AI." There is no slot for an LLM in this architecture, at most a textual interface.

World models are also the theoretical backbone of embodied AI. Tesla Optimus, Figure 02, Physical Intelligence's π0, Unitree's G1 and H1 — each requires an internal world simulator to "imagine" rollouts of a few seconds, lest the sample complexity of reinforcement learning bankrupt training on real machines. **Elon Musk (1971–)**'s end-to-end driving FSD v12–v13 are, at root, video compressed into an implicit world model.

Yet open questions glare. How do we evaluate whether a model "really" understands the world? Counterfactual reasoning? Long-horizon consistency? Or whether a three-year-old's physical intuition can defeat it? Meta's IntPhys 2 and PhysBench, released in 2025, give partial answers but are far from sufficient. Are world models the last mile to AGI, or another seductive but lengthy detour — the conclusion of this volume must be left to the next.

---

::: tip Historian's Note
Observing the dispute over world models, one sees the reunion of twentieth-century cybernetics and twenty-first-century connectionism. LeCun raised his banner first, declaring that LLMs know not the world and have no causality, demanding JEPA as a new foundation; Sutskever, Hassabis, and Amodei replied: extreme prediction *is* understanding — when parameters suffice, the world will appear. Sora arrived, and the world cried out that the simulator had come — only to find glass that would not break and creatures with six legs, and to wonder whether the name fit the substance. Ha and Schmidhuber, in 2018, had already let agents drive in dreams; today Genie and Cosmos extend their ambition, and World Labs unfurls its banner. Yet the yardstick of evaluation is unfinished, and the depth of causality unmeasured. Let the scholar remember one thing: every claim that "the model has now understood" should be tested against a three-year-old's common sense — and every claim that "the model will never understand" should remain open to the rebuttal of the next paper.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on world models, video generation, embodied AI, or related research, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Rao, R. P., & Ballard, D. H. (1999). Predictive coding in the visual cortex: A functional interpretation of some extra-classical receptive-field effects. *Nature Neuroscience*, 2(1), 79-87.
2. Ha, D., & Schmidhuber, J. (2018). World models. *arXiv preprint arXiv:1803.10122*.
3. Hafner, D., Pasukonis, J., Ba, J., & Lillicrap, T. (2023). Mastering diverse domains through world models (DreamerV3). *arXiv preprint arXiv:2301.04104*.
4. LeCun, Y. (2022). A path towards autonomous machine intelligence. *Open Review*.
5. Assran, M., Duval, Q., Misra, I., et al. (2023). Self-supervised learning from images with a joint-embedding predictive architecture (I-JEPA). *CVPR 2023*.
6. Bardes, A., Garrido, Q., Ponce, J., et al. (2024). V-JEPA: Latent video prediction for visual representation learning. *arXiv preprint arXiv:2404.08471*.
7. OpenAI. (2024). Video generation models as world simulators (Sora technical report). OpenAI.
8. Valevski, D., Leviathan, Y., Arar, M., & Fruchter, S. (2024). Diffusion models are real-time game engines (GameNGen). *arXiv preprint arXiv:2408.14837*.
9. Bruce, J., Dennis, M., Edwards, A., et al. (2024). Genie: Generative interactive environments. *ICML 2024*.
10. NVIDIA. (2025). Cosmos: World foundation models for physical AI. NVIDIA Technical Report.
11. Spelke, E. S. (1990). Principles of object perception. *Cognitive Science*, 14(1), 29-56.
12. Garrido, Q., Ballas, N., Assran, M., et al. (2025). V-JEPA 2: Self-supervised video models for understanding and prediction. *Meta AI Research*.
