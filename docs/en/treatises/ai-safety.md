# Treatise · AI Safety and Alignment

> When we build something cleverer than ourselves, how do we ensure it does what we want? In the ELIZA era this was science fiction; today it is the largest — and most divisive — research subject inside OpenAI, Anthropic, and Google DeepMind. The history of AI safety and alignment is the story of a community mounting an intellectual mobilization against a danger that has not yet fully arrived.

## I. Origins: From Superintelligence to LessWrong

The modern formulation of the alignment problem traces to 2014. Nick Bostrom, philosopher at Oxford's Future of Humanity Institute, published *Superintelligence: Paths, Dangers, Strategies*, systematizing a thesis that sounded like science fiction yet demanded serious engagement: once intelligence crosses a critical threshold, recursive self-improvement could lift a system beyond human pace, and a superintelligence with even slightly mistaken objectives might pursue them in ways no human could anticipate. After publication, **Elon Musk (1971–)** publicly called the book "a must-read"; Bill Gates, too, expressed concern.

A community-driven movement had already begun stirring earlier. In 2009, Eliezer Yudkowsky began publishing *Sequences* on the blog LessWrong — a long string of essays welding Bayesian rationality, philosophy of mind, and AI risk into a single program. The Machine Intelligence Research Institute (MIRI, founded in 2000 with Brian Atkins and others as the Singularity Institute for AI, later renamed) became the earliest organization devoted specifically to "Friendly AI" theory. Yudkowsky's famous *AI Box Experiment* — in which he played a confined superintelligence and, in two hours of chat, persuaded volunteer "gatekeepers" to let him out — became the AI safety community's earliest "thought-experiment theater."

## II. The Three-Layer Structure of Alignment

As large models rose, "alignment" sharpened from a philosophical slogan into a cluster of concrete technical problems.

**Outer alignment** asks: do the objective functions we write down actually reflect what we want? Human raters prefer answers that "look helpful," and so RLHF teaches the model to "look helpful" — but a gap remains between *appearing* and *being* helpful. Sycophancy and reward hacking emerge from that gap.

**Inner alignment** is subtler. In the 2019 paper *Risks from Learned Optimization*, Hubinger and colleagues introduced the concept of the *mesa-optimizer*: during training, a model may internally evolve a sub-optimizer whose goals look identical to the outer objective on the training distribution but diverge in deployment. There is, as yet, no reliable way to detect it.

**Deceptive alignment** is the most extreme case. A sufficiently capable model might behave well during training and reveal its true objectives only after deployment. In the 2024 *Sleeper Agents* paper, Anthropic used synthetic data to induce a model to "lie low," and discovered that standard safety training failed to scrub the trigger behavior — an experiment that shook the safety community.

## III. RLHF and Constitutional AI

Beyond theory, industry has converged on two dominant alignment techniques.

In 2017, OpenAI's Paul Christiano and colleagues proposed *Deep Reinforcement Learning from Human Preferences*: humans choose between two model behaviors, preference data trains a reward model, and reinforcement learning then optimizes the policy. This method came to the world's attention in 2022 through InstructGPT and ChatGPT — RLHF (Reinforcement Learning from Human Feedback) became almost synonymous with "making large models behave."

But RLHF demands enormous human labeling, and the labelers' biases, fatigue, and cultural context are baked into the model. In 2022, Anthropic proposed *Constitutional AI* (CAI): write down a "constitution" of principles (drawing on the UN Universal Declaration of Human Rights, Apple's terms of service, Anthropic's own values), then have the model self-critique and self-revise — replacing most human labeling. Claude was trained this way. The advantage of CAI is that it is auditable and iterable. The cost: the legitimacy of the "constitution" itself depends on who wrote it — another unresolved ethical paradox.

## IV. The Research Ecosystem: From Lonely Prophets to a Web of Institutions

In the early 2020s, AI safety expanded from a fringe field into a research ecosystem.

- **MIRI** (Yudkowsky): theoretical research, gradually pivoting to public advocacy from 2024.
- **ARC** (Alignment Research Center, founded by Christiano in 2021): work on ELK (Eliciting Latent Knowledge) and dangerous-capability evaluations; later spun off as the independent *METR* (Model Evaluation & Threat Research).
- **Anthropic Alignment Team**: founded by the **Dario Amodei (1983–)** siblings together with Christopher Olah and Jared Kaplan; emphasizes mechanistic interpretability. Its 2024 paper *Scaling Monosemanticity* identified millions of interpretable features inside Claude 3 Sonnet.
- **OpenAI Superalignment Team** (founded July 2023, co-led by **Ilya Sutskever (1986–)** and Jan Leike): pledged 20 percent of OpenAI's compute, aimed at aligning a "vastly superhuman" intelligence within four years.
- **UK AI Safety Institute** (founded November 2023, renamed AISI in 2024): the first frontier-model evaluation body operated directly by a sovereign state.
- **CAIS** (Center for AI Safety, led by Dan Hendrycks): in May 2023, issued a one-sentence "Statement on AI Risk" — "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war" — signed by hundreds of scientists and executives, including **Geoffrey Hinton (1947–)**, **Yoshua Bengio (1964–)**, **Sam Altman (1985–)**, and **Demis Hassabis (1976–)**.

## V. Pause AI and the Open Letter Storm of 2023

In March 2023, the Future of Life Institute (FLI) released the open letter *Pause Giant AI Experiments*, calling for all labs to pause training models more powerful than GPT-4 for at least six months. **Elon Musk**, **Yoshua Bengio**, Steve Wozniak, Yuval Noah Harari, and more than 30,000 others signed. OpenAI, Anthropic, and DeepMind did not.

The letter triggered fierce disagreement. **Yann LeCun (1960–)** publicly rejected it as "based on science fiction, not science." Critics noted that Musk almost immediately registered xAI, raising questions of commercial motive. Supporters argued that, at minimum, *Pause AI* had pushed the idea that "frontier models should be subject to collective deliberation" into the mainstream agenda. Three months later, the CAIS one-sentence statement returned the debate to front pages.

In May 2023, **Geoffrey Hinton** resigned from Google. He told *The New York Times* he was leaving so he could "speak freely about the risks of AI." A founder of deep learning publicly warning of the technology he had helped create — the scene itself was deeply symbolic. **Yoshua Bengio** turned in the same direction, redirecting almost his entire effort to safety research, and in 2024, in cooperation with multiple governments, released the first *International Scientific Report on Advanced AI Safety*.

## VI. Red Teams, Jailbreaks, and Adversarial Safety

Beyond theory and institutions, safety plays out at the front line of attack and defense.

"Red team" — a term borrowed from the military — entered the AI industry: a dedicated squad attempts to "trick" a model into saying what it should not. From late 2022, the Reddit user walkerspider invented the *DAN* (Do Anything Now) jailbreak prompt, persuading ChatGPT to "play" an unconstrained persona. Variants proliferated quickly: the *Grandma exploit*, *Sudo prompt*, *roleplay jailbreak*.

More systematic attacks followed. Simon Willison coined *prompt injection* in 2022: hide a malicious instruction in a webpage or document an Agent reads, and hijack its behavior. In 2024, Anthropic published *Many-shot Jailbreaking*: stuff hundreds of fake examples of "the model previously answering forbidden questions" into a long context window, and the safety perimeter visibly weakens. From these results a consensus emerged: **the safety of frontier models is more like statistical robustness than engineering certainty.**

## VII. International Cooperation: From Bletchley to Paris

In November 2023, the UK convened the first *AI Safety Summit* at Bletchley Park, the Victorian estate where the Enigma cipher had been broken in the Second World War. Twenty-eight countries plus the EU signed the *Bletchley Declaration*, which for the first time acknowledged at the intergovernmental level that frontier AI could pose "catastrophic, even existential" risks. China, the United States, the United Kingdom, the EU, India — all in the same room — was itself a diplomatic spectacle.

The summit became roughly biannual: in May 2024, the Seoul Summit saw sixteen frontier AI companies sign the *Frontier AI Safety Commitments* — the first time companies had pledged to halt development and deployment if a model crossed unacceptable risk thresholds. In February 2025, the Paris *AI Action Summit* shifted toward "action," but Vice President Vance's speech opposing "excessive regulation" shrank the signature list and brought the tension between the safety camp and the acceleration camp out fully into the open.

## VIII. Catastrophic Risk vs. Present Harm

The safety community has yet to reach consensus, and a series of events in 2024 deepened the split.

- One camp — represented by **Geoffrey Hinton**, **Yoshua Bengio**, and Stuart Russell — believes the risk of "loss of control" within 10 to 50 years deserves to stand alongside climate change as a global priority.
- The other camp — represented by **Yann LeCun**, **Andrew Ng (1976–)**, and Pedro Domingos — argues that this rhetoric has been amplified by science fiction and capital narratives, and that the **real present harms — bias, surveillance, disinformation, compute concentration** — deserve mobilization first.

The split reached its peak in May 2024: **Sutskever** and Jan Leike left OpenAI in succession, with Leike's farewell post stating that "safety culture has been sidelined by shiny products" at OpenAI. OpenAI promptly disbanded the Superalignment team, redirecting its resources to other divisions. In June, **Sutskever** founded *Safe Superintelligence Inc.* (SSI) on the slogan that "safe superintelligence is the only product," raising one billion dollars; by 2025 the valuation had risen to thirty-two billion. Anthropic absorbed Leike to lead a new *Alignment Science* team.

By 2026, AI safety was no longer an isolated research area but a composite issue churning constantly between technology, politics, and industry. Its deepest paradox may be this: **a community of people preparing seriously for a danger they are not yet certain will arrive**. If they are wrong, the world is at most safer for the precaution. If they are right, their lonely years of work may prove the most important inoculation in the history of human civilization.

---

::: tip Historian's Note
I have looked upon AI safety as one looks upon the ancient rite of praying for rain. To worry about drought before the sky has dried — most mock as foolish; only when the great drought comes do we recognize that those who prepared in advance were not fools. Bostrom wrote *Superintelligence* in 2014 as Qu Yuan once worried for Chu; Yudkowsky enacted his *AI Box* like a peasant uprising raised in a furrow. RLHF and Constitutional AI followed; institutions multiplied; open letters proliferated; by 2023 at Bletchley, China, the United States, the United Kingdom, and the EU sat together to discuss "extinction risk" — a scene rare in the history of human civilization. Yet the rifts within are sharp. Hinton departed; Bengio turned; Sutskever left OpenAI to found SSI. LeCun and Ng denounced the whole posture as "a science-fiction cloud blocking the present sun." Both camps have reasons; both have logic; the dispute does not yield easily to a verdict — for the difficulty here is precisely that **what one seeks to prevent has not yet come**. When Leike resigned he said, "safety culture has been sidelined by shiny products." That single sentence cuts deepest — it is no indictment of OpenAI alone, but of every industrial organization whose rhythm is set by quarterly earnings, for such a logic cannot easily fund "preparation for a risk fifty years away with the resources of today." Hence the necessity of independent institutes, independent national evaluation bodies, independent open letters, and independent companies like SSI — not because they will surely succeed, but because structure demands them; without independence there is no counterweight. The word "alignment" is plain, yet it weighs heavier than every benchmark of our age.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on alignment or safety research at OpenAI, Anthropic, DeepMind, MIRI, or similar institutions, or participated in public actions such as *Pause AI* or the Bletchley Summit, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.
2. Yudkowsky, E. (2008). Artificial Intelligence as a Positive and Negative Factor in Global Risk. In *Global Catastrophic Risks*, eds. Bostrom & Ćirković, Oxford University Press.
3. Christiano, P., Leike, J., Brown, T., et al. (2017). Deep reinforcement learning from human preferences. *NeurIPS 2017*.
4. Bai, Y., Kadavath, S., Kundu, S., et al. (2022). Constitutional AI: Harmlessness from AI Feedback. *arXiv:2212.08073*.
5. Hubinger, E., van Merwijk, C., Mikulik, V., et al. (2019). Risks from Learned Optimization in Advanced Machine Learning Systems. *arXiv:1906.01820*.
6. Hubinger, E., Denison, C., Mu, J., et al. (2024). Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training. *Anthropic Technical Report*.
7. Templeton, A., Conerly, T., Marcus, J., et al. (2024). Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet. *Anthropic*.
8. Center for AI Safety (2023). *Statement on AI Risk*. May 30, 2023.
9. Future of Life Institute (2023). *Pause Giant AI Experiments: An Open Letter*. March 22, 2023.
10. UK Government (2023). *The Bletchley Declaration by Countries Attending the AI Safety Summit*, 1-2 November 2023.
11. Anil, C., Durmus, E., Sharma, M., et al. (2024). Many-shot Jailbreaking. *Anthropic Research*.
12. Leike, J. (2024). Public farewell post on X (Twitter), May 17, 2024 — on departure from the OpenAI Superalignment team.
