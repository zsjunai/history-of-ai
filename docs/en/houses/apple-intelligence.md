# House · Apple Intelligence

> The world's largest consumer electronics company kept a decade of restraint over AI. That restraint broke at WWDC 2024, when "Apple Intelligence" set out to put a large model in a billion pockets—and wrote, in the same breath, the most complicated chapter Apple has ever staked between delivery and privacy.

## Knowledge Navigator: A Prophecy from 1987

In 1987, under John Sculley, Apple released a five-minute concept video titled **Knowledge Navigator**. In it, a Berkeley professor speaks to a folding tablet—"Find me yesterday's paper on the Amazon rainforest"—and a virtual assistant in a bow tie answers in natural language, surfaces the article, and patches in a video call with a colleague.

That was 1987. Apple had no Mac OS X, no iPhone, no cloud. The video, however, foreshadowed Siri, FaceTime, and the knowledge assistant of thirty years later.

It was Apple's earliest, most romantic statement on AI. For the next two decades it barely spoke of AI; it built products.

It is worth noting that the date set inside the Knowledge Navigator video was September 16, 2011—and the real-world October 2011 was when Apple released Siri. The coincidence has been read both as legend and as evidence of Apple's stubborn loyalty to its long-term vision.

## Siri: Out of SRI, into Apple

The story begins at DARPA, the Department of Defense agency. Starting in 2003, DARPA funded SRI International's **CALO project** (Cognitive Assistant that Learns and Organizes), a five-year effort with around $150 million in funding that aimed to build a learning cognitive assistant.

One CALO output was carved out by three engineers—Adam Cheyer, Tom Gruber, and Dag Kittlaus—into a startup in 2007 called **Siri Inc.** In February 2010 Siri shipped on the App Store; on April 28 of that year, Apple acquired Siri Inc. for a rumored $200 million.

It was among the last major acquisitions Steve Jobs personally approved. Jobs called Kittlaus over three weeks to persuade him to sell. On October 4, 2011—the day before Jobs's death—the **iPhone 4S** keynote unveiled Siri as a system-level voice assistant.

It was the first AI personal assistant built into a mainstream smartphone—five years before Google Assistant, three before Alexa.

But after that point Siri walked off the altar. Original team members left one after another. The three founders eventually built **Viv** (acquired by Samsung in 2016 and evolving into Bixby). Inside Apple, Siri went through repeated reorganizations across teams, and its question-answering long stagnated at "timers and the weather"—the longest debt on Apple's AI ledger.

Postmortems have arrived at the same diagnosis: Apple treated Siri as a feature, not a platform. Speech recognition, intent parsing, and action execution were owned by separate teams without a unified semantic core. A privacy-first engineering culture meant Apple could not aggregate user corpora the way Google or Amazon did. These engineering decisions, which look small in retrospect, left Siri behind on the starting line of the large-model era.

## The Neural Engine and Core ML: Foundations of an On-Device Path

Apple's bet on AI sat not in the cloud, but in silicon.

In September 2017, the **A11 Bionic** shipped with the iPhone X, integrating Apple's first **Neural Engine**—dual core, 600 billion operations per second. Its first public job was Face ID. The same month Apple released the **Core ML** framework, letting developers convert trained models into on-device formats and run inference locally on the iPhone.

The pair laid the foundation for a path utterly different from Google's or Amazon's: **the model runs on the device; data does not leave**.

In 2020 Apple began transitioning to **Apple Silicon**—M1, M2, M3, M4—pushing Neural Engine throughput into tens of trillions of operations per second (the M4 reaches 38 TOPS). By 2023, a MacBook could run a 7-billion-parameter language model locally—a degree of compute decentralization unimaginable a decade prior.

Apple's on-device path also has a hidden advantage: **Unified Memory Architecture**. CPU, GPU, and Neural Engine share the same physical memory pool, so loading and inferring a large model needs no large-weight copies between devices. Real-world inference speeds for large models on Macs have surpassed those of some discrete-GPU workstations. It is a decisive divergence between ARM and x86 in the AI era.

In April 2018, Apple poached Google's AI chief, **John Giannandrea (1965–)**, to be senior vice president of machine learning and AI strategy. Giannandrea came from search and knowledge graphs and had led several efforts at Google that became precursors to Gemini.

His arrival was read as Apple's signal that it would, at last, "do AI seriously"—but for the next six years he barely appeared in public, and Apple kept accumulating in silence.

That silence is Apple's habit: until a product is mature, it would rather be mocked as behind than release a concept video or roadmap. The pressure became severe when ChatGPT detonated the world in late 2022. Apple was the slowest-reacting consumer electronics giant—but also one of the few that still treated "product before demo" as iron law.

## MLX and the Open-Source Turn

In December 2023, Apple's machine-learning research team quietly open-sourced **MLX**—an array computing framework designed natively for Apple Silicon, comparable to PyTorch and JAX. Awni Hannun and others led the work; the code lives on GitHub. MLX lets researchers train and infer large models directly on M-series chips, with zero-copy data flow between GPU, CPU, and Neural Engine through the unified memory architecture.

Around the same time Apple's research papers grew dense: in 2024 it released **OpenELM** (an on-device language model family from 270M to 3B) and **MM1** (a multimodal model up to 30B parameters); after WWDC 2024 it published the **Apple Intelligence Foundation Language Models** technical report, detailing the training, alignment, and evaluation of its on-device 3B model and server-side model. A company famous for secrecy had begun showing some of its hand to the open-source community—though the core weights remained closed.

Apple's open-source restraint is intentional: MLX is a tool, not a model; OpenELM is a research paradigm, not a product. Apple draws the line at "open-source the infrastructure, keep the product"—earning academic goodwill without surrendering core competitiveness. It diverges sharply from Meta's all-open-weights line, and constitutes a distinct posture among large-company open-source strategies.

## WWDC 2024: Apple Intelligence Arrives

June 10, 2024, Cupertino, Apple's headquarters. **Tim Cook (1960–)** opened the WWDC keynote; **Craig Federighi (1969–)** delivered it. Apple formally unveiled **Apple Intelligence**, defining it as "personal intelligence built for you."

The architecture has three layers.

**On-device**: a roughly 3-billion-parameter model running locally on iPhone 15 Pro and above and on M-series iPads and Macs, handling high-frequency tasks like writing suggestions, mail summaries, notification prioritization, Genmoji, and Image Playground.

**Private Cloud Compute**: Apple's purpose-built private cloud, running larger server-side models. Its core asset is not performance but a privacy architecture—Apple says data is "encrypted in transit, ephemeral after use, and unseen by Apple itself," subject to third-party security review of the code. It is the highest bar Apple has set for itself: do AI in the cloud, but promise privacy equivalent to on-device.

**Third-party fallback**: when a request exceeds Apple's models, **Siri can, with user authorization, invoke ChatGPT** (the first partner being OpenAI). Apple has said it will also integrate Google Gemini, and in mainland China has partnered with Baidu (Ernie) and Alibaba (Qwen).

The same keynote introduced system-level writing tools, mail and notification summaries, new Visual Intelligence, a redesigned Siri, and deeply integrated Image Playground and Genmoji. Cook closed by saying, "We don't aim to make the smartest AI; we aim to make the most useful, most respectful AI."

## Partnership and Controversy: A Debate Over the Soul

The OpenAI partnership is one of the most debated strategic choices in Apple's history.

Hours after the keynote, Elon Musk posted on X: "If Apple integrates OpenAI at the operating system level, I will ban all iPhones at my companies. This is an unacceptable security violation." It was hyperbole as usual, but it pointed to a real question: **was Apple outsourcing the soul to a company it did not control?**

Apple's reply was tiered: on-device and Private Cloud Compute capabilities are Apple's own, while invoking ChatGPT requires explicit user approval each time, visible and dismissible. Critics still asked: as Siri increasingly says "let me ask ChatGPT for you," would Apple be losing the right to define what "intelligence" means?

The more concrete challenge was **delivery**. In October 2024, the first phase of Apple Intelligence (writing tools, notification summaries) shipped with iOS 18.1, U.S. English only. December added Image Playground, Genmoji, and ChatGPT integration. But the most-anticipated feature—a "personal Siri" able to read your calendar, mail, and message context across apps—slipped repeatedly.

In March 2025 Apple, unusually, issued a statement acknowledging the delay, pushing the "more personal Siri" to 2026. Bloomberg's Mark Gurman reported that several internal executives believed the existing Siri architecture could not support a large-model rebuild and might require a clean restart. It was Apple's most public AI strategy setback in two decades.

## Apple's AI Worldview

Placed in the broader industry map, Apple is walking **a third path**.

Unlike OpenAI or Anthropic, it is not chasing the strongest model. Unlike Google, it does not treat cloud AI as an extension of search. Unlike Meta, it is not betting on an open-weights ecosystem. Its bet is **the consumer operating system**: when more than a billion active Apple devices upgrade to AI-bearing iOS in unison every year, AI moves from a toy for geeks and developers to a feature ordinary people use every day.

The path has its logic. **On-device inference cost is near zero, privacy is controllable, and scale is built in by default.**

It also has its costs: model iteration is bound to hardware cycles; frontier capability lags third parties by half a step or more; when users expect dialogue capability on par with ChatGPT or Gemini, Apple's on-device model can barely keep up.

Through the second half of 2025, Cupertino doubled down on three fronts: building its own server-side large models (to reduce reliance on outside models), broader developer APIs (so every app can call Apple Intelligence), and on-device multimodal for robotics and wearables. Giannandrea remained quiet on stage; Cook and Federighi repeated, "AI is a long march, not a sprint."

## Privacy as Architecture: The Engineering Wager of Private Cloud Compute

Private Cloud Compute (PCC) is the most ambitious engineering piece of Apple Intelligence, and the easiest place to underestimate Apple's AI strategy.

The classical privacy model of cloud AI is "trust the provider"—the user must believe OpenAI or Google will not peek at requests. Apple does not accept that. PCC's goal is to **prove, with cryptography and hardware, that even Apple itself cannot see the data**.

Three design pillars: the user device sends requests only to remotely-attestable, signed PCC nodes; PCC nodes persist no user data and reset to zero after the session ends; Apple publishes firmware images and source code excerpts of PCC nodes for independent security researchers to audit—if a node is found running anything other than the public image, the trust chain collapses.

It is the industry's first attempt to bring "confidential computing" to a consumer-grade AI service. The cost is real: dedicated Apple Silicon servers, network-layer attestation, and rewritten scheduling—all far more expensive than ordinary cloud inference at the same performance.

But this is Apple's chosen differentiation. In a world where large models are commoditizing, **Apple wants to make "privacy" itself the product**. If the path holds, Apple builds a moat in consumer AI that competitors will not cross soon. If it does not, it becomes another expensive marketing term short on conviction. The story is still being written.

After the keynote, independent security researchers like Matthew Green and Bruce Schneier wrote evaluations of the PCC design and broadly acknowledged its threat model as the most rigorous yet seen in cloud AI—though whether "Apple cannot see" holds absolutely awaits long-term audits. That this debate is happening at all is rare progress: one of the largest players binding itself in public to a privacy obligation.

::: tip Historian's Note
Apple's relation to AI resembles the Han dynasty under Wen and Jing—not contesting the moment, but laying the foundations of a century. It rehearsed Knowledge Navigator earliest, was first to put a voice assistant into a mainstream phone, first to wed the Neural Engine to consumer silicon—yet was the latest to speak in the large-model era. While OpenAI and Google fought for the world, Apple chose the narrow path of "on-device + private cloud": slow, conservative, mocked as behind, but treating the privacy and daily life of billions as binding constraints at every step. Whether that path is right is undecided. The Apple Intelligence delay is one of Apple's rare public setbacks; the OpenAI integration leaves the question of "where the soul lives" unresolved. Yet on the day AI truly moves from cloud to pocket, the deciding factor will be whether Apple can render this thing as something "ordinary people use without noticing." If it succeeds, it is the last piece of AI's democratization; if not, it is an expensive lesson in the limits of caution.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on Apple machine learning, Siri, or Apple Intelligence, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Apple Inc. (1987). "Knowledge Navigator." Concept Video, Apple Computer.
2. Markoff, J. (2010). "Apple Buys a Start-Up for Its Voice Technology." *The New York Times*, April 28, 2010.
3. Bosker, B. (2013). "SIRI RISING: The Inside Story of Siri's Origins—And Why She Could Overshadow the iPhone." *HuffPost*, January 22, 2013.
4. Apple Inc. (2017). "Core ML and Vision: Machine Learning in iOS 11." Apple Developer Documentation.
5. Hannun, A. et al. (2023). "MLX: An Array Framework for Apple Silicon." Apple Machine Learning Research, GitHub.
6. Mehta, S. et al. (2024). "OpenELM: An Efficient Language Model Family with Open Training and Inference Framework." arXiv:2404.14619.
7. McKinzie, B. et al. (2024). "MM1: Methods, Analysis & Insights from Multimodal LLM Pre-training." arXiv:2403.09611.
8. Gunter, T. et al. (2024). "Apple Intelligence Foundation Language Models." Apple Machine Learning Research, Technical Report.
9. Apple Inc. (2024). "Private Cloud Compute: A New Frontier for AI Privacy in the Cloud." Apple Security Research Blog, June 10, 2024.
10. Federighi, C. (2024). "Introducing Apple Intelligence." WWDC 2024 Keynote, June 10, 2024.
11. Gurman, M. (2025). "Apple Delays More Personalized Siri AI Features to 2026." *Bloomberg News*, March 7, 2025.
12. Patel, N. (2024). "Elon Musk Threatens to Ban Apple Devices Over OpenAI Partnership." *The Verge*, June 10, 2024.
