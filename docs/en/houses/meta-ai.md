# House · Meta AI (FAIR)

> The most committed open-source advocate among the tech giants. Its chief AI scientist publicly disparages the large-language-model paradigm, and yet by open-sourcing LLaMA the company has reshaped the global landscape of large-model competition.

## The Birth of FAIR: An Academic Lab Inside a Company

On December 9, 2013, at NeurIPS, the social-network giant then still called Facebook formally announced the founding of **Facebook AI Research** (FAIR), with **Yann LeCun (1960–)** as its first head.

Mark Zuckerberg made the call himself. Facebook had just IPO'd, and the financial pressure on the company was real, but on AI Zuckerberg was unwavering. LeCun's terms were explicit: FAIR had to be an academic laboratory, not a product team; researchers' primary output would be papers; core research would be open-sourced. Zuckerberg agreed. LeCun retained his joint appointment at NYU, and FAIR opened offices in New York and Palo Alto simultaneously.

The timing matters. FAIR was founded six months after Google bought DeepMind, two years after Google Brain, and two years before OpenAI. From the start, FAIR was positioned as an institution that talked to the academic community and worked at the frontier, not as a satellite of Facebook's product line.

## PyTorch: The First Open-Source Victory

In January 2016, FAIR released a new deep-learning framework: **PyTorch**. It was descended from the Lua-based Torch but rewritten entirely in Python, emphasizing "dynamic computation graphs" and a "Pythonic" interface.

Compared to Google's TensorFlow, open-sourced in 2015, PyTorch was closer to how researchers actually thought—writing it felt like ordinary Python, debugging it felt like ordinary Python, and the error messages looked like ordinary Python. In 2017–2018 it overtook TensorFlow rapidly in academia; by 2019–2020, the code accompanying papers at most top conferences defaulted to PyTorch; by 2022, PyTorch had displaced TensorFlow as the de facto industry standard.

In 2022, governance of PyTorch was transferred to the PyTorch Foundation under the Linux Foundation, with Meta remaining the largest contributor. That step turned PyTorch from "Meta's framework" into "the industry's framework"—a key demonstration of Meta's open-source playbook.

## Research Achievements: From Dense Embeddings to Segment Anything

FAIR's contributions over a decade span almost every branch of deep learning.

**Computer vision**: ResNeXt (2016), the extensions of Mask R-CNN (with Google's Kaiming He and others), DINO (2021, self-supervised vision), and **Segment Anything (SAM)** (2023, a general-purpose image-segmentation model with open weights and dataset).

**Self-supervised learning**: a direction LeCun has long championed. BYOL, MoCo, DINO, and I-JEPA (2023) all came from FAIR or with FAIR collaboration.

**Reinforcement learning**: pre-OpenAI Five Dota 2 research, the Hanabi cooperative game, and the open-source Go model OpenGo.

**Machine translation**: No Language Left Behind (2022, a 200-language translation model) and SeamlessM4T (2023, a full-modality speech-text translation model).

**Embodied intelligence**: Habitat (a simulation platform) and Ego4D (a first-person video dataset, 2022)—building the foundations for AR/VR and robotics.

Across these years, FAIR researchers populated the world's top AI venues with prolific output at NeurIPS, ICML, CVPR, and ACL.

## LLaMA: An Accidental Open-Source Revolution

On February 24, 2023, Meta released **LLaMA** (Large Language Model Meta AI)—a family of 7B, 13B, 33B, and 65B parameter language models. The first author of the paper was the young French researcher **Hugo Touvron (1995–)**.

Meta's original intent was a "non-commercial academic license"—weights distributed only to researchers who applied. Within weeks, the full LLaMA weights were "leaked" to 4chan and BitTorrent. After an awkward initial response, Meta turned and embraced open source.

On July 18, 2023, **LLaMA 2** was released—commercial use permitted, weights freely downloadable. It was the first "GPT-3/4-class" large model formally open-sourced by a major company in AI history, and it instantly ignited the global open-source community. In the months that followed, hundreds of LLaMA-fine-tuned models appeared—Vicuna, Alpaca, Koala, Guanaco, WizardLM. Seven of the top ten downloads on Hugging Face were LLaMA-based.

The shock to the industry from this open-source wave is hard to overstate:

- **Chinese large models**: Zhipu's ChatGLM, Alibaba's Qwen, Baichuan, DeepSeek—nearly every Chinese large model drew architectural inspiration from LLaMA.
- **European large models**: most of Mistral AI's founding team came from the LLaMA project; Mistral 7B and Mixtral are continuations of LLaMA-style architecture.
- **Open-source toolchain**: llama.cpp, Ollama, LM Studio, vLLM, llama-index—the entire "run a large model locally" ecosystem grew up against LLaMA as a reference frame.

Subsequently, **LLaMA 3** (April 2024, 8B/70B), **LLaMA 3.1** (July 2024, 405B parameters; the first open-source GPT-4-class base model), **LLaMA 3.2** (September 2024, multimodal plus small models), and **LLaMA 4** (April 2025, native multimodal MoE architecture) followed in succession, each generation kept open.

In 2024 Meta disclosed that the LLaMA series had been downloaded more than 350 million times—the largest-downloaded family of open-source AI models in history.

## Zuckerberg's Big Bet: 100 Billion Dollars on AI

Meta's AI spending in 2024–2025 reached staggering proportions.

In 2024, Zuckerberg disclosed that Meta planned to operate the equivalent of **350,000 H100 GPUs** that year, with capital expenditure around 38 billion dollars. In 2025 the number climbed further, to 60–65 billion dollars—nearly the entire revenue of Meta in 2020.

In June 2025, Zuckerberg announced the founding of **Meta Superintelligence Labs (MSL)**, recruiting former Scale AI CEO Alexandr Wang as Chief AI Officer. Meta then invested over 14 billion dollars to acquire about 49% of Scale AI, folding Scale's data-annotation capacity into Meta. At the same time, Meta poached at least 15 top researchers from OpenAI, Anthropic, and Google with extraordinary compensation (rumors of multiple individuals on contracts exceeding 100 million dollars per year), including former OpenAI research director Jakub Pachocki and several core authors of GPT-4/5.

It was the most aggressive talent war in AI history. In a letter to staff, Zuckerberg wrote: "AGI is coming, and we do not have time to lose."

## Yann LeCun's Insurgency

A revealing fissure runs through Meta: its Chief AI Scientist, LeCun, has, openly and repeatedly, disparaged today's mainstream LLM line.

LeCun's core arguments:

- Pure autoregressive large language models can never reach true AGI—they lack a world model, planning capability, and persistent memory.
- True general intelligence requires a **world model**—an architecture that grasps physics, causation, and long-horizon planning.
- His proposed **JEPA** (Joint-Embedding Predictive Architecture) is, in his view, a more promising direction.
- "The LLM is an off-ramp on the road to AGI, not the highway."

He repeats these views on Twitter/X, on podcasts, and in academic talks, in public confrontation with the research philosophies of OpenAI, Anthropic, and xAI—even as his own company, Meta, open-sources LLaMA-style large language models.

In the second half of 2024, LeCun's influence inside FAIR is reported to have diminished. With the founding of Superintelligence Labs and Wang's appointment in 2025, the center of gravity of FAIR's core research has shifted to MSL; LeCun himself is more focused on JEPA and world models. A "chief scientist publicly opposing the company's main line" is almost unprecedented in the AI industry.

## Open Source as a Strategic Weapon

Why is Zuckerberg so committed to open source?

His July 2024 open letter, *Open Source AI Is the Path Forward*, gave a systematic answer:

- **Defense against monopoly**: if open-source AI cannot stay at the frontier, Meta's future social products will be forced to depend on competitors' (OpenAI's, Google's) APIs.
- **Multiplier effect**: open source lets developers around the world improve the model—"hiring tens of thousands of researchers for free."
- **Lower cost in practice**: Meta's actual need is to provide AI for billions of social-media users; deploying its own open-source model in its own data centers is an order of magnitude cheaper than calling OpenAI's API.
- **Historical analogy**: Linux to operating systems, PyTorch to frameworks—open source eventually wins the war for technological infrastructure.

This argument made Meta the standard-bearer of open-source AI from 2023 to 2026, and produced the industry's sharpest contrast with OpenAI's closed-source road.

## Meta AI Today

By spring 2026, Meta's AI organization has several pieces:

- **FAIR**: basic research, with LeCun as Chief AI Scientist, continuing JEPA, world models, and other frontier work.
- **GenAI / Meta Superintelligence Labs**: application-oriented, Wang as CAO, leading the next LLaMA versions, Meta AI assistant products, and multimodality.
- **Reality Labs AI**: AI for AR/VR and smart glasses.
- **Applied AI Research**: recommendation systems, ad AI, content moderation.

Meta AI Assistant, embedded across WhatsApp, Instagram, Facebook, and Messenger, had more than 600 million monthly active users by 2025—second only to ChatGPT. Ray-Ban Meta smart glasses, with built-in AI, became one of the icons of consumer-grade AI hardware. The LLaMA 4 family continues to iterate, and remains open-source.

::: tip Historian's Note
Meta's AI road carries the most tension of any major lab: the company is firmly committed to open source and compute, while its Chief AI Scientist publicly opposes the dominant technical line. The contradiction is, in fact, the truth of Meta's posture—**uncertain about the path, certain about openness**. It does not bet that any single technical road must win; it sets as its floor that "we must own the position of open-source infrastructure." LLaMA's open-sourcing benefits the industry and turned Meta around from the criticism of being "an AI laggard." LeCun's insurgency looks like an organizational fracture; in fact it is a redundancy, letting one company hedge across the LLM mainstream and a non-LLM heresy at once. Zuckerberg may not fully agree with LeCun, but he lets LeCun keep speaking—because in the most uncertain decade of AI, **allowing internal dissent is itself a strategic asset**.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at FAIR, Meta GenAI, or Superintelligence Labs, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Meta (2013). "Facebook AI Research Launch." Press release.
2. Paszke, A. et al. (2019). "PyTorch: An Imperative Style, High-Performance Deep Learning Library." *NeurIPS 2019*.
3. Touvron, H. et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv:2302.13971.
4. Touvron, H. et al. (2023). "Llama 2: Open Foundation and Fine-Tuned Chat Models." arXiv:2307.09288.
5. Meta (2024). "The Llama 3 Herd of Models." arXiv:2407.21783.
6. Kirillov, A. et al. (2023). "Segment Anything." *ICCV 2023*.
7. LeCun, Y. (2022). "A Path Towards Autonomous Machine Intelligence." OpenReview.
8. Zuckerberg, M. (2024). "Open Source AI Is the Path Forward." Meta blog.
9. Isaacson, W. (2023). *Elon Musk* (sections describing Meta AI events).
10. The Verge (2025). "Inside Meta's $14 Billion Scale AI Acquisition."
