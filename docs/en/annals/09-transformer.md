# Annals · The Transformer Era (2017–2022)

> In June 2017, eight Google researchers submitted a paper with a title of just five words: "Attention Is All You Need." They could not have known, then, that the paper would beget a trillion-dollar industry, change the daily lives of hundreds of millions of people, and ignite fierce arguments over the future of human civilization. It all began with a simple idea: drop recurrence, use only attention.

## I. The Central Question: What Is the Right Way to Model Sequences?

Before 2017, the mainstream methods for processing sequence data — text, speech, time series — were recurrent neural networks (RNNs) and their variant, long short-term memory (LSTM). RNNs processed sequence elements one by one — read the first word, update an internal state, read the second word, update again — like a person reading a book character by character.

This serial style had two serious problems. First, **slow speed**: because elements had to be processed in order, RNNs could not exploit the GPU's parallelism. Second, **difficulty with long-range dependencies**: in a long sentence, information from earlier was diluted as it passed through many steps, and the network had trouble remembering distant context. LSTMs eased the second problem with intricate "gating" mechanisms, but could not resolve it.

Transformer's revolutionary stroke was to abandon recurrence entirely and use a **self-attention mechanism** to process the whole sequence at once. Each word could "see" every other word directly, and decide which to attend to based on their pairwise relevance — no matter how far apart. Long-range dependencies and parallelism both fell out of the same idea.

## II. Attention Is All You Need

### Eight Authors

In June 2017, **Ashish Vaswani (1986–)** and seven other Google researchers posted "Attention Is All You Need" on arXiv. The paper proposed the Transformer — a sequence-to-sequence model based entirely on attention.

The core of the Transformer was **multi-head self-attention**: for each position in the input sequence, compute "attention weights" — relevance scores — between it and all other positions, then weight-and-sum the representations of all positions. "Multi-head" meant several independent attention computations running in parallel, each able to capture a different kind of dependency (syntactic, semantic, positional).

The paper's experimental setting was machine translation. Transformer set new state-of-the-art results on English-to-German and English-to-French, and trained an order of magnitude faster than RNN-based models. But the impact reached far beyond translation — Transformer offered a general, efficient, and scalable framework for sequence modeling, and was quickly applied to nearly every AI task involving sequences.

### A Striking Fact

None of the eight authors stayed at Google. They went on to start AI companies or join other organizations — Vaswani co-founded Essential AI; Noam Shazeer co-founded Character.AI (and later returned to Google). The birthplace of Transformer could not hold its creators, but Transformer itself stayed everywhere.

## III. BERT and GPT: Two Forking Paths

After Transformer's appearance, the AI community split rapidly into two paths — two different philosophies of "how to use Transformer."

### BERT: The Path of Understanding

In October 2018, **Jacob Devlin (1985–)** and others at Google published BERT (Bidirectional Encoder Representations from Transformers). BERT's central idea was **bidirectional pretraining**: on huge volumes of text, randomly mask some words (a masked language model), and let the model predict the masked words from context. Because prediction had access to context on both left and right, BERT learned genuinely "bidirectional" language representations.

BERT swept eleven NLP benchmarks, shocking the NLP community. It established a new paradigm — "pretrain and fine-tune": first pretrain a general language model on massive unlabeled text, then fine-tune on a specific task (sentiment analysis, question answering, named-entity recognition) with a small amount of labeled data. The paradigm dropped the barrier to NLP tasks dramatically — you no longer needed to train a model from scratch for every task.

### GPT: The Path of Generation

Around the same time, OpenAI's **Alec Radford (1991–)** took a different path. In June 2018 he published GPT-1 (Generative Pre-trained Transformer) — using only the **decoder** half of a Transformer to do unidirectional language modeling: given the preceding words, predict the next.

GPT-1 had only 117 million parameters, and was not particularly attention-grabbing at the time. But OpenAI was convinced that scale was the key. In February 2019 came GPT-2 — 1.5 billion parameters, more than ten times the size of GPT-1. OpenAI declined to release the model weights for safety reasons, prompting the AI community's first large-scale debate about open-source and risk. GPT-2 could generate coherent long-form text — read carefully there were still logical holes, but the fluency was unsettling.

### The Depth of the Split

The split between BERT and GPT was more than a difference in technical choice; it reflected different bets on the future of AI. The BERT camp held that "understanding" was central — first learn to understand language, then apply to downstream tasks. The GPT camp held that "generation is understanding" — if a model can keep predicting the next word, it must have, in some sense, understood the structure and meaning of language.

History would side with GPT — not because BERT's idea was wrong, but because GPT's path was easier to scale. "Predict the next word" is an extremely simple training target, can use almost unlimited internet text, and is naturally suited to autoregressive generation.

## IV. GPT-3: The Brutal Aesthetics of Scale

### 175 Billion Parameters

In May 2020, OpenAI published the GPT-3 paper — **Tom Brown (1990–)** et al.'s "Language Models are Few-Shot Learners." GPT-3 had 175 billion parameters; its training corpus contained about 500 billion tokens (after filtering), and after weighted sampling the model actually saw roughly 300 billion tokens during training; training cost was estimated at over 4 million dollars.

GPT-3 displayed a startling capability: **few-shot learning**. You did not need to fine-tune the model. You only had to give it a few examples in the prompt, and it would "understand" the task and execute it — translation, summarization, question answering, programming, writing poetry, even arithmetic. No prior model had shown this.

### Emergent Capabilities

GPT-3's abilities sparked discussion of "emergence." Many capabilities did not exist at all at the GPT-2 scale but appeared abruptly at GPT-3 scale — as if the model had crossed some "scale threshold" and acquired a qualitative change.

The emergence phenomenon was partly explained by **Jared Kaplan (1986–)** et al.'s 2020 paper on Scaling Laws for Neural Language Models: model performance, parameter count, data volume, and compute were related by predictable power laws. Larger models, more data, longer training almost always brought better performance — and within the range of scales studied so far, the relationship had not shown signs of saturation.

The Scaling Laws gave a concise, deep guideline: **keep scaling**. That guideline would define the leitmotif of AI for the next several years.

## V. Multimodality: AI Learns to See, Draw, and Code

### DALL·E and Image Generation

In January 2021, OpenAI released DALL·E — a model that could generate images from text. Type "a corgi in a spacesuit dancing on the moon," and it would draw it. The name fused Salvador Dalí and WALL-E, suggesting the meeting of art and technology.

Behind DALL·E was an extension of the Transformer architecture — text and images encoded into discrete token sequences, then generated autoregressively. DALL·E 2, released in April 2022, used diffusion models — a method that generates images by progressively removing noise — and image quality leapt forward.

Around the same time, Stability AI's Stable Diffusion (open-sourced in August 2022) and Midjourney also launched. AI image generation moved from the laboratory into the daily toolkits of millions.

### GitHub Copilot and Code Generation

In June 2021, GitHub and OpenAI jointly launched Copilot — an AI programming assistant based on the GPT variant Codex. Copilot completed code based on comments, function names, and context, sometimes generating entire functions.

Copilot's significance went beyond technology — it was the first time AI had penetrated the daily workflow of professional knowledge workers at scale. Programmers found themselves co-writing code with an AI "pair partner" every day. It pointed to a new mode of human–machine collaboration — not AI replacing humans but AI amplifying their productivity.

## VI. AlphaFold: AI Solves a Half-Century Biology Problem

In November 2020, the DeepMind team led by **Demis Hassabis (1976–)** announced that AlphaFold 2 had achieved a breakthrough in the protein-structure prediction competition CASP14 — its precision approached experimental measurement. In July 2021 AlphaFold 2's paper was published in *Nature*, and DeepMind released predicted structures for more than 360,000 proteins; by 2022 the number had grown to over 200 million — covering nearly every known protein.

The protein-folding problem — predicting a three-dimensional structure from an amino-acid sequence — had vexed biologists for more than fifty years. Traditional experimental methods (X-ray crystallography, cryo-electron microscopy) take months or years; AlphaFold could give a high-precision prediction in minutes.

AlphaFold was AI's most persuasive triumph in basic science. It was not beating humans at games but helping humans understand life itself. Hassabis received the Nobel Prize in Chemistry in 2024 for the work.

## VII. Undercurrents and Foreshadowing

**First, the prelude to ChatGPT.** GPT-3's few-shot learning and the instruction-tuning techniques of InstructGPT (January 2022) had already prepared the ground for a "conversational AI" product. The release of ChatGPT in November 2022 would turn all that accumulation into a global phenomenon — but that belongs to the next chapter.

**Second, AI safety debates intensified.** As model capabilities grew, so did concerns. **Sam Altman (1985–)** repeatedly suggested in public that AI could pose "existential risks." **Ilya Sutskever (1986–)** turned more and more of his attention inside OpenAI to alignment problems. **Dario Amodei (1983–)** left OpenAI in 2021 and founded Anthropic, focused on safety. AI safety moved from a fringe topic to a central one the industry could no longer ignore.

**Third, the prelude to the open-source-vs-closed-source war.** The deferred release of GPT-2 had ignited a debate; with GPT-3 it grew sharper — OpenAI provided only API access and did not release weights. The closed strategy prompted strong dissatisfaction in academia and the open-source community, and laid the groundwork for Meta's later open LLaMA line.

**Fourth, hardware arms race accelerated.** NVIDIA's A100 GPU (2020) and later H100 (2022) became the standard hardware for training large models. Google developed TPUs (Tensor Processing Units). AI chips went from a niche to the hottest segment of the tech industry. NVIDIA's market cap soared from around 300 billion dollars in 2020.

## VIII. Timeline

| Year | Event | Key Figures |
|------|-------|-------------|
| 2017 | "Attention Is All You Need" published; Transformer architecture born | Vaswani et al. (eight authors) |
| 2018 | GPT-1 released (117 million parameters) | Radford |
| 2018 | BERT released; bidirectional pretraining sets new state of the art on 11 NLP benchmarks | Devlin |
| 2019 | GPT-2 released (1.5 billion parameters); OpenAI delays release citing risk | Radford |
| 2020 | GPT-3 released (175 billion parameters); demonstrates few-shot learning | Brown |
| 2020 | Scaling Laws paper published; reveals power-law relationship between performance and scale | Kaplan |
| 2020 | AlphaFold 2 breakthrough at CASP14 | Hassabis |
| 2021 | DALL·E released; AI learns to generate images from text | Aditya Ramesh et al. |
| 2021 | GitHub Copilot released; AI programming assistant enters developer workflow | — |
| 2021 | Amodei leaves OpenAI and founds Anthropic | Amodei |
| 2022 | Stable Diffusion open-sourced; AI image generation becomes widely accessible | — |
| 2022 | InstructGPT published; RLHF (reinforcement learning from human feedback) improves dialogue | Altman, Sutskever |

---

::: tip Historian's Note
The five years of the Transformer era are the years in which artificial intelligence went from "useful tool" to "force that cannot be ignored." A paper title — "Attention is all you need" — was, in retrospect, both a technical declaration and a prophecy. Transformer's self-attention does a deceptively simple thing: it lets every element in a sequence speak directly to every other. That simple design released enormous energy — it let language models scale without limit, and made scale itself a direct route to capability. GPT-3's emergent abilities startled even its creators — how did a "predict the next word" model learn to translate, code, reason? No one had a complete answer, but everyone could feel the ground shifting. When AlphaFold solved a problem that had defeated biologists for half a century at the molecular level, AI finally moved beyond boards and benchmarks and touched the deepest layer of human curiosity — understanding life itself. And all of this was still only an overture.
:::

## Eyewitness Accounts

::: info Call for contributions
If you witnessed or have firsthand recollections of this period, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. Vaswani, A. et al. (2017). "Attention Is All You Need." *NeurIPS 2017*.
2. Devlin, J. et al. (2019). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." *NAACL 2019*.
3. Radford, A. et al. (2018). "Improving Language Understanding by Generative Pre-Training." OpenAI Technical Report.
4. Radford, A. et al. (2019). "Language Models are Unsupervised Multitask Learners." OpenAI Technical Report.
5. Brown, T. et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS 2020*.
6. Kaplan, J. et al. (2020). "Scaling Laws for Neural Language Models." arXiv:2001.08361.
7. Jumper, J. et al. (2021). "Highly accurate protein structure prediction with AlphaFold." *Nature*, 596, 583–589.
8. Ramesh, A. et al. (2021). "Zero-Shot Text-to-Image Generation." *ICML 2021*.
9. Chen, M. et al. (2021). "Evaluating Large Language Models Trained on Code." arXiv:2107.03374.
10. Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS 2022*.
