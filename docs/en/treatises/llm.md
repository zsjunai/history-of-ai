# Treatise · Large Language Models

> From GPT-1 with 117 million parameters to GPT-4 at the trillion-parameter scale, large language models have, in less than six years, moved from a laboratory curiosity to a universal productive force. This is the most violent paradigm revolution in AI's history, and the first time science, industry, and power have all bet at the same table.

## I. Prelude: The Evolution of Language Models

The starting point is far older than ChatGPT. As early as 1948, **Claude Shannon (1916–2001)** had used n-grams in *A Mathematical Theory of Communication* to describe statistical regularities of English letters — language modeling's earliest form was, in fact, an entropy calculator. For half a century, n-grams, riding the Markov assumption, propped up machine translation and speech recognition, but were ultimately confined by data sparsity and short-context myopia.

The turn came in 2003. **Yoshua Bengio (1964–)**, in *A Neural Probabilistic Language Model*, embedded a neural network into language modeling for the first time: each word mapped to a low-dimensional dense vector, then a feedforward network predicted the next word. The paper went unnoticed at the time, but it laid the foundation of "distributed representations" for every language model to come. A decade later, the Mikolov team at Google published Word2Vec (2013), placing the algebraic identity *king − man + woman ≈ queen* into *Nature* and every textbook. In early 2018, AllenAI's ELMo squeezed context into word vectors — the same word *bank* now had different representations in different sentences.

The stage was set. It awaited a new architecture to walk on.

## II. The Birth of the Transformer

In June 2017, **Ashish Vaswani (1986–)** and seven colleagues posted *Attention Is All You Need* on arXiv. The paper made what then seemed an almost reckless decision: discard RNN and CNN entirely, model arbitrary-distance dependencies with self-attention alone. It was naturally suited to GPU parallelism, several times faster to train than LSTM.

The Transformer soon split into three lineages. The encoder line gave birth to BERT (Google, 2018) — bidirectional masked pretraining sweeping eleven GLUE benchmarks. The decoder line was picked up by OpenAI to become the spine of GPT. The encoder–decoder line evolved into T5 (Google, 2019), unifying every NLP task as "text to text." Three branches diverged from one river, only to flow back together quietly in the multimodal large models of 2023.

## III. Scaling Laws and Emergence

GPT-1 (June 2018) had only 117 million parameters; the title — *Improving Language Understanding by Generative Pre-Training* — was almost casual. Its contribution was not performance but a proof: "first unsupervised pretraining, then supervised fine-tuning" was a viable road.

A year later, GPT-2 pushed the count to 1.5 billion. OpenAI cited "risk of misuse" and, unprecedented for the field, released the weights in stages. Half the academy was furious, the other half fascinated — the first time a large model made headlines for being "too strong."

The true singularity was GPT-3. In May 2020, OpenAI announced the 175-billion-parameter monster and demonstrated few-shot learning: given three to five examples, the model imitated the format, extended the code, translated the languages. The same year, **Jared Kaplan (1986–)** and others published *Scaling Laws for Neural Language Models*, drawing the power-law relationship between performance, parameters, data, and compute as a single, extrapolatable graph. From then on, "make the model bigger" was no longer a gamble but engineering.

The story soon corrected itself. In 2022, DeepMind trained Chinchilla (70B parameters, 1.4T tokens) and beat Gopher (280B parameters, 300B tokens), proposing the celebrated Chinchilla scaling: under fixed compute, parameters and data should grow proportionately. Every training report thereafter had to answer the same question — is your data enough?

More fascinating still are emergent abilities. Wei and others in 2022 systematically catalogued some twenty or thirty capabilities: past a scale threshold, multi-step arithmetic, chain-of-thought reasoning, and instruction following all leapt from near-zero to usable — as if quantitative change had finally produced qualitative change.

## IV. The ChatGPT Moment

In early 2022, OpenAI used reinforcement learning from human feedback (RLHF) to tune GPT-3.5 into InstructGPT, teaching the model to "behave" for the first time. **Tom Brown (1990–)** and colleagues reported in their paper that a 1.3-billion-parameter InstructGPT beat the original 175-billion-parameter GPT-3 in user preference — alignment's value was quantitatively proven for the first time.

On November 30, OpenAI casually wrapped a chat interface around it and shipped it as ChatGPT. **Sam Altman (1985–)** tweeted that night: "today we launched ChatGPT." Five days later it had crossed a million users; in two months, a hundred million — eclipsing every growth curve in consumer internet history. It was not the strongest model — GPT-4 was already in private testing — but it turned a model into a product: free, frictionless, conversational.

The chain reaction was overwhelming. Microsoft put another $10 billion into OpenAI early the next year; Google sounded an internal "code red"; ByteDance, Baidu, Alibaba, and Tencent announced large-model strategies in nearly the same week; regulators realized for the first time that they were already late.

## V. GPT-4 and Multimodality

On March 14, 2023, GPT-4 was released. It scored in the 90th percentile on the Uniform Bar Exam, above 700 on SAT math, and natively supported image input for the first time. OpenAI did not disclose parameter count or architecture; industry inferred a roughly 1.8-trillion-parameter mixture-of-experts (MoE).

Competitors followed close behind. Anthropic, founded by **Dario Amodei (1983–)** (former research VP at OpenAI), released the Claude 3 trio (Haiku/Sonnet/Opus) in March 2024, marketing a 200K context window and "constitutional AI" alignment. Google folded the PaLM line into the Gemini brand, releasing Gemini 1.0 in December 2023 and the natively multimodal, 1M-token-context Gemini 1.5 Pro in February 2024. In May 2024, OpenAI released GPT-4o — the "o" stood for omni; text, image, and audio handled end-to-end inside a single network, voice latency dropping to 232 ms, near a real conversation.

## VI. The Breakthrough in Reasoning

In early 2022, Wei and colleagues at Google proposed chain-of-thought (CoT): adding "let's think step by step" to a prompt produced multiplicative gains on math and commonsense benchmarks. The discovery made clear that a model's capability is shaped not only by parameters but by how computation is organized at inference time.

In September 2024, OpenAI released o1 (codename Strawberry), pairing reinforcement learning with long-chain CoT, scoring 83 percent on AIME math competitions versus GPT-4o's 13 percent. It opened a new paradigm of "test-time compute": no longer relying on pretraining alone, but letting the model think for seconds to minutes before answering.

A more violent shock came from Hangzhou. On January 20, 2025, DeepSeek released R1, eliciting reasoning capability on par with o1 from pure reinforcement learning, at a reported training cost of just $5.57 million, with weights released under MIT license. R1 topped the U.S. App Store within a week of release; NVIDIA shed nearly $600 billion in market capitalization in a single day — Wall Street, for the first time, doubted the script of "compute is the moat."

## VII. The Global Race

**United States.** OpenAI took commercialization as a spear, turning ChatGPT into a consumer-grade entry point; Anthropic took safety as a shield, with Claude as the favorite for coding and the enterprise; Google's Gemini bet on the integration of search and Workspace; **Hugo Touvron (1995–)** and others' open-source LLaMA series (2023) pushed "open source equals ecosystem" to the limit, with LLaMA 3.1 (July 2024) approaching closed-source flagships; xAI's Grok carved its niche on the live corpus of X.

**China.** Baidu's Ernie Bot launched first domestically in March 2023; Alibaba's Qwen became the most active force in open source, with Qwen2.5 and Qwen3 series accumulating over a hundred million downloads on Hugging Face; Zhipu's ChatGLM grew out of Tsinghua, plowing the academic and government markets; DeepSeek wrote the textbook on "small team plus efficient compute" with V3 and R1; Moonshot's Kimi pushed the context window to 2 million Chinese characters, specializing in long documents; MiniMax built its niche in voice and multimodality; ByteDance's Doubao rode TikTok traffic to overtake competitors, with monthly active users approaching ChatGPT by 2025.

**Europe.** France's Mistral, founded by former Meta and DeepMind researchers, carries the European flag with elegant open-source models like 7B and Mixtral 8x7B.

## VIII. Limits and Critiques

Hallucination is the chief disease — models confidently fabricate non-existent papers, statutes, and people, and the more fluent the output, the harder it is to detect. Reasoning is similarly fragile: rename the variables in a math problem and accuracy may drop. Apple's GSM-Symbolic study in 2024 showed that mainstream LLM "reasoning" remains, in large part, pattern matching.

Data copyright erupted between 2023 and 2025. *The New York Times* sued OpenAI and Microsoft; Getty Images sued Stability AI; writers, artists, and programmers joined the litigation phalanx. The EU's *AI Act* and China's *Interim Measures for the Management of Generative AI Services* came into force nearly the same week. Energy is no less alarming: training a GPT-4-class model consumes the electricity of a small city for several months.

The sharpest critique comes from **Yann LeCun (1960–)**. He insists that LLMs are "auto-regressive curve-fitters in token space," unable to understand the physical world, and will never reach human intelligence. **Yoshua Bengio (1964–)** and **Geoffrey Hinton (1947–)** have moved the other way: in 2023 they began publicly warning that LLM progress had outpaced their twenty-year-old expectations and could carry runaway risk within a decade. Are LLMs the highway to AGI or an elegant dead end? It is the most expensive open question of 2026.

## IX. The Application Ecosystem

The model is only the substrate; what truly transforms the world is the layer above. GitHub Copilot (2021) lets half of new code emerge from autocompletion; Cursor and Anthropic's Claude Code (2025) re-invent the IDE as a "pair-programming workstation." Perplexity and SearchGPT rewrite search engines into conversational answer machines; RAG (Retrieval-Augmented Generation) plugs LLMs into corporate knowledge bases as the standard answer for compliance and timeliness.

A more radical direction is the agent. From AutoGPT's toy experiments, to Anthropic defining the Model Context Protocol (MCP) in 2024, OpenAI's Operator and Google's Project Mariner in 2025, models are evolving from "conversational assistants" into digital workers that autonomously call tools, browse the web, and operate software. Customer service, legal, healthcare, education, recruiting, investment research — almost every white-collar trade is being re-shuffled.

---

::: tip Historian's Note
Surveying the rise of large language models, one finds no precedent for such speed. From GPT-1 to GPT-4, parameters multiplied by a thousand in five years, market capitalization by trillions. The momentum lay in the convergence of three things: the architecture of the Transformer, the compute of NVIDIA, the data of the World Wide Web. Yet scale is not a sacred talisman — Chinchilla taught us that data and parameters must rise together; R1 showed that open source and algorithm can humble the budgets of the closed. ChatGPT shocked the world not because it was the strongest model, but because it was the simplest product — billions of investment defeated by a single chat box. America, China, and Europe each hold a corner; closed source and open, reasoning and intuition, alignment and laissez-faire — none has settled. Posterity should remember this clause: every assertion that "we have hit the ceiling" has, within two years, been overturned by a new line of research.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on the development, productization, or deployment of large models, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Bengio, Y., Ducharme, R., Vincent, P., & Jauvin, C. (2003). A neural probabilistic language model. *Journal of Machine Learning Research*, 3, 1137-1155.
2. Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. *arXiv preprint arXiv:1301.3781*.
3. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
4. Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *Proceedings of NAACL-HLT*, 4171-4186.
5. Radford, A., Wu, J., Child, R., et al. (2019). Language models are unsupervised multitask learners. *OpenAI Technical Report*.
6. Brown, T., Mann, B., Ryder, N., et al. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, 33.
7. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). Scaling laws for neural language models. *arXiv preprint arXiv:2001.08361*.
8. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). Training compute-optimal large language models (Chinchilla). *arXiv preprint arXiv:2203.15556*.
9. Ouyang, L., Wu, J., Jiang, X., et al. (2022). Training language models to follow instructions with human feedback (InstructGPT). *Advances in Neural Information Processing Systems*, 35.
10. Wei, J., Wang, X., Schuurmans, D., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. *Advances in Neural Information Processing Systems*, 35.
11. OpenAI. (2023). GPT-4 technical report. *arXiv preprint arXiv:2303.08774*.
12. DeepSeek-AI. (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
