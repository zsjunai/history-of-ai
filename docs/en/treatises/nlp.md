# Treatise · A History of NLP

> To hand human language to a machine is the oldest, most stubborn, and most fascinating dream of AI. It has weathered the arrogance of the rule-makers, the rebellion of the statisticians, the conquest of deep learning, and now — in the LLM era — the silent extinction of subfields and the redrawing of the map.

## Act One: Dictionaries and Scripts — The Rule-Makers' Republic

The story begins with a memo. In 1949, Warren Weaver, director of the Natural Sciences Division at the Rockefeller Foundation, wrote *Translation*, comparing the conversion between languages to deciphering a code: Russian was simply English in a Russian costume. The short memo gave birth to the discipline of machine translation and set the rule-makers' creed — find a sufficiently complete grammar and dictionary, and the machine will "understand."

The 1954 Georgetown–IBM experiment translated sixty Russian sentences into English; reporters proclaimed that "the translation problem will be fully solved in three to five years." Twenty years later, machine translation was still struggling with the simplest sentences. The 1966 ALPAC report cut off most U.S. funding for the field with one stroke.

The era's two most charming products also belong here. In 1966, **Joseph Weizenbaum (1923–2008)** wrote ELIZA at MIT — using a few simple pattern-matching rules to mimic a Rogerian psychotherapist with uncanny conviction. What stunned Weizenbaum was not the program's cleverness but the credulity of its users: even his own secretary insisted he leave the room so she could "speak privately" with ELIZA. The phenomenon, later called the ELIZA effect, repeats itself with every new chatbot to this day.

In 1971, **Terry Winograd (1946–)** completed SHRDLU at MIT — a program that could understand and act on natural-language commands inside a virtual "blocks world." "Put the red block on the box next to the green pyramid" — SHRDLU not only obeyed but could ask back, "which red block?" It was the rule-makers' summit, and also their ceiling: the moment one stepped outside the blocks world, the bottleneck of knowledge acquisition collapsed everything.

## Act Two: Fire the Linguists — The Statistical Revolt

In the late 1980s, **Frederick Jelinek (1932–2010)** led IBM's speech recognition group at the Watson Research Center. He left behind a line quoted ad infinitum: "Every time I fire a linguist, the performance of our speech recognizer goes up."

Jelinek's team was not anti-linguistics, but anti "writing rules a priori." Rather than have human experts enumerate grammars, they trusted the machine to count frequencies on a large enough bilingual corpus. Around 1990, IBM proposed five statistical machine translation models (IBM Model 1–5), reframing translation as "given the source sentence, find the target sentence with maximum probability." In the same era came n-gram language models, hidden Markov models, and maximum-entropy models. The corpus ruled all.

In the late 1990s, the Penn Treebank from the University of Pennsylvania gave part-of-speech tagging and parsing their first industrial-scale dataset. The 2002 BLEU metric gave machine translation a comparable "report card." The triumph of statistical NLP was not the triumph of any single paper, but of the entire paradigm of evaluation, data, and competition.

But statistical models had a blind spot. They were excellent at counting frequencies, but unable to express semantic distance between words. They could compute that *king* and *emperor* often co-occurred with *rule*, yet they had no idea the two words meant nearly the same thing. The geometry of language still lay outside their toolbox.

## Act Three: The Geometry of Words — Word2Vec and the Vector Revolution

However clever a statistical model might be, it was still merely counting co-occurrences. *King* and *emperor* were treated as two unrelated symbols; the machine never knew they were close.

In early 2013, the Mikolov team at Google released Word2Vec. With a single-layer neural network so simple it bordered on the unbelievable, every word was given a dense vector such that the algebraic identity *king − man + woman ≈ queen* truly held. Meaning was embedded into geometry — at that moment, symbols became vectors.

A year later, Pennington and others at Stanford released GloVe, taking the global co-occurrence matrix as another route. Word vectors quickly became the standard weapon of NLP engineers — information retrieval, named entity recognition, sentiment analysis, similarity computation; nearly every task started with pretrained word embeddings.

Chinese NLP rode the same wave. Labs at Peking University, Tsinghua, Harbin Institute of Technology, and Fudan released Chinese word vectors and tokenizers (jieba, THULAC, HanLP), bringing Chinese — a language where "tokenization is itself a task" — into the era of vectors.

But word vectors were static — *bank* on a riverbank shared the same vector with *bank* on Wall Street. To break the wall of context, the field had to wait for the next stage.

## Act Four: The Time of Sequences — RNN, LSTM, and Seq2Seq

Language is sequence. In the late 1980s, Elman and others introduced the recurrent neural network (RNN), giving neural networks "memory." But simple RNNs were nearly useless on long sequences — the gradient either vanished or exploded.

In 1997, **Jürgen Schmidhuber (1963–)** and Sepp Hochreiter published the long short-term memory (LSTM) network in *Neural Computation*. Three gates — input, forget, output — allowed information to flow across time. The paper was initially ignored, only to be cited more than a hundred thousand times two decades later, becoming one of the most-cited papers of the deep-learning era.

2014 was the watershed year. **Ilya Sutskever (1986–)** and colleagues at Google published *Sequence to Sequence Learning with Neural Networks*, encoding the source sentence with one LSTM and decoding the target with another to solve translation end-to-end. The same year, Bahdanau, Cho, and **Yoshua Bengio (1964–)** in Montreal introduced the attention mechanism in *Neural Machine Translation by Jointly Learning to Align and Translate*: the decoder, at each step, could "look back" at every position of the source sentence and decide where to attend.

Attention — that unassuming little mechanism — would change everything three years later.

It is worth noting that 2014 also saw the proposal of GRU (Cho et al.) and the full popularization of Word2Vec. Nearly every direction in NLP was migrating to neural networks; the frequency of the word "deep" in paper titles increased tenfold within three years. The language of an entire discipline was being overwritten by a new paradigm.

## Act Five: Attention Is All You Need — The Coming of Transformer

In June 2017, **Ashish Vaswani (1986–)** and seven co-authors at Google Brain published *Attention Is All You Need*. The paper made what then seemed an almost reckless decision: discard the recurrent structure of RNNs entirely, and rely on attention alone.

The Transformer's key was self-attention: every two tokens in a sequence had a direct connection, distance no longer a problem. With multi-head attention, positional encoding, and residual connections, the Transformer reached a new state of the art on the WMT translation benchmark, while training several times faster — its design was natively suited to GPU parallelism.

That year, no one would have predicted that those eight names would be intoned again and again over a single conference paper (NIPS 2017). The paper is also one of the rare cases in NLP history where the title made the destiny: plain to the point of jest, yet so precise no one could refute it.

The Transformer did not come from nowhere. It inherited Bahdanau's attention, the parallel intuition of ConvS2S, and the key–query–value retrieval metaphor; its real innovation was promoting attention from an auxiliary module to the sole computational primitive. The courage to subtract is harder than the complexity of addition.

## Act Six: The Triumph of Pretraining — BERT and GPT

The Transformer provided the engine; the pretraining paradigm provided the fuel.

In June 2018, **Alec Radford (1991–)** at OpenAI released GPT (Generative Pre-Training): pretrain a language model on vast text, then fine-tune for downstream tasks. Just four months later, **Jacob Devlin (1985–)** at Google released BERT (Bidirectional Encoder Representations from Transformers): bidirectional encoding, masked language model pretraining, eleven new records on GLUE in one stroke. The BERT paper has been cited hundreds of thousands of times and became the new bedrock of the entire NLP industry.

GPT took another road. GPT-2 (2019) became a topic of conversation as "too dangerous to release"; GPT-3 (2020) pushed the parameter count to 175 billion and unveiled the embryo of in-context learning — given a few examples, the model could complete a new task. "Pretrain plus prompt" replaced "label data per task plus fine-tune."

By the time ChatGPT launched in 2022, the field finally realized that NLP was no longer a constellation of disjoint subtasks but a unified interface — "command the model with language."

Pretraining brought another fundamental change: the rewriting of evaluation and the form of papers. For a decade, every NLP subfield had its own SOTA table. After pretraining, every task aggregated onto the single grand table of GLUE / SuperGLUE. To attract attention, a new model had to topple the previous numbers there. The rhythm of research was locked, irreversibly, to the benchmark.

## Act Seven: The Devoured Subfields — The New Geography of the LLM Era

The rise of LLMs brought a quiet extinction event.

For a decade, NLP was a flourishing constellation of city-states: tokenization, POS tagging, parsing, NER, coreference resolution, relation extraction, summarization, dialogue, machine translation. Each had its own conferences, datasets, and journals. After LLMs arrived, the borders between these states began to dissolve. A halfway-decent GPT-4-class model could do NER, summarization, and translation zero-shot — and often better than purpose-trained models.

The themes at ACL, EMNLP, and NAACL drifted dramatically within two years. Papers titled "how to gain one point on task X" plummeted; papers titled "how to make LLMs more reliable / controllable / interpretable" exploded. Evaluation was rewritten too: HELM, MMLU, BIG-bench, AGIEval replaced GLUE / SuperGLUE. Prompt engineering, in-context learning, chain-of-thought, tool use, agents — words almost no one uttered five years ago — now dominate the research agenda.

Not all subfields drowned. Low-resource languages, morphologically rich languages, spoken dialogue, multimodal language, interpretability, and safety alignment have all been given new meaning by LLMs. NLP has not died; it has become a discipline about "large models plus language."

Chinese NLP, swept by the same wave, completed its transition from "translating and chasing" to "self-supplying": Tsinghua's GLM, BAAI's Aquila, Alibaba's Qwen, DeepSeek, Moonshot's Kimi, 01.AI's Yi, and Baichuan — these names mark the first time the Chinese-speaking world has had the standing to engage the Anglophone one in the LLM era as an equal.

## Open Questions

LLMs have reshaped NLP without ending it. We still do not know: do models truly *understand*, or are they merely tabulating co-occurrence? Do the ancient categories of semantics, syntax, and pragmatics still find their counterparts inside large models? Will low-resource languages be further marginalized, or liberated by transfer learning? When a model confidently "translates" a passage that is fluent yet wrong, can we design an evaluation as trustworthy as BLEU but far deeper?

Seventy years on, the machine seems at last "able to speak" — yet the serious inquiry into what it means for it to *understand* has only just begun.

---

::: tip Historian's Note
Surveying seventy years of natural language processing, one observes three changes of master. In the beginning, the rule-makers held the citadel of grammar — ELIZA and SHRDLU, clever yet small. Then the statisticians rose from the corpus, with Jelinek's "fire a linguist" as their banner; data triumphed over priors, and BLEU replaced human judgment. Finally, deep learning ascended: word vectors first turned symbols into geometry, LSTM gave sequences memory, and with the Transformer, every mountain bowed. The paper of eight authors bore a title as plain as a child's words, yet its consequences were like a mountain collapsing into the sea. BERT and GPT followed; pretraining became the new orthodoxy. Today's LLMs swallow the old city-states like the ocean receiving rivers — tokenization, syntax, summarization, translation — all reduced to byproducts of a single thought inside a large model. Yet language's depths run further. The model is fluent without knowing meaning, confident yet prone to hallucinate. Posterity must face one question: what does it actually mean to "understand language"? Until that is answered, even a trillion parameters will leave us with a vast statistical parrot. Let the scholar remember: when a discipline is devoured, it is not the end but a forced ascent. The true golden age of NLP may only just be beginning.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on statistical MT, word vectors, Transformer-era NLP, or LLM engineering practice, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Weaver, W. (1949). *Translation*. Memorandum, Rockefeller Foundation.
2. Weizenbaum, J. (1966). ELIZA—a computer program for the study of natural language communication between man and machine. *Communications of the ACM*, 9(1), 36-45.
3. Winograd, T. (1972). Understanding natural language. *Cognitive Psychology*, 3(1), 1-191.
4. Brown, P. F., Della Pietra, V. J., Della Pietra, S. A., & Mercer, R. L. (1993). The mathematics of statistical machine translation. *Computational Linguistics*, 19(2), 263-311.
5. Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. *Neural Computation*, 9(8), 1735-1780.
6. Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. *arXiv preprint arXiv:1301.3781*.
7. Pennington, J., Socher, R., & Manning, C. D. (2014). GloVe: Global vectors for word representation. *EMNLP 2014*, 1532-1543.
8. Sutskever, I., Vinyals, O., & Le, Q. V. (2014). Sequence to sequence learning with neural networks. *Advances in Neural Information Processing Systems*, 27.
9. Bahdanau, D., Cho, K., & Bengio, Y. (2015). Neural machine translation by jointly learning to align and translate. *ICLR 2015*.
10. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
11. Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *NAACL-HLT*, 4171-4186.
12. Brown, T. B., Mann, B., Ryder, N., et al. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, 33.
