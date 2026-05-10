# House · Google Brain

> The Transformer was born here—an in-house corporate research team that wrote the paper that bent the arc of AI history; and its greatest regret is that it could not turn that paper directly into today's ChatGPT.

## The Garage Project: From a Corner of Google X

In 2011, inside Google X, an unassuming project called "Google Brain" was launched jointly by Google's chief architect **Andrew Ng (1976–)** and Google's legendary infrastructure engineer Jeff Dean. Larry Page, then Google CEO, signed off on it: a small team would explore how far "large-scale deep learning" could really go.

Deep learning was not yet mainstream. AlexNet would not light up ImageNet until September 2012. **Geoffrey Hinton (1947–)** in Toronto, **Yoshua Bengio (1964–)** in Montreal, and **Yann LeCun (1960–)** at NYU were still holding the line through the academic winter. But Jeff Dean and Ng saw what others had not: Google had the largest distributed computing infrastructure on Earth, and large-scale neural-network training is precisely the kind of problem that devours such resources.

**On June 26, 2012**, Ng, Jeff Dean, Quoc Le, and others published *Building High-level Features Using Large Scale Unsupervised Learning*. They trained a 9-layer neural network on 10 million YouTube thumbnails using 16,000 CPU cores. The most famous finding: a neuron in the network had, with no human supervision, learned to detect "cat faces." The press quickly dubbed the work "**Google Teaches a Computer to Recognize Cats**" (Google Cat).

It was Google Brain's first sounding from the garage.

## TensorFlow and the Framework Wars

On November 9, 2015, Google Brain announced the open-sourcing of **TensorFlow**—Google's second-generation internal machine-learning system (the first, called DistBelief, had been used inside Brain since 2011).

The release of TensorFlow was a major strategic move. Theano, Torch, and Caffe already existed as academic frameworks, but none had industrial-scale capability. By open-sourcing the in-house tool it had sharpened over years, Google made a gift and a play at once—getting researchers, companies, and educators worldwide used to writing neural networks in a Google-defined API meant putting deep learning's "operating system" in Google's hands.

Between 2015 and 2018, TensorFlow was the dominant framework of the deep-learning world. Google built around it a complete ecosystem: TensorBoard (visualization), TensorFlow Hub (model repository), TensorFlow Serving (deployment), TPUs (custom hardware). By 2017, almost every introductory deep-learning tutorial began its first lesson with TensorFlow.

But after 2018, Facebook's PyTorch began overtaking it in academia. By 2020 the code accompanying papers at most top conferences was, by default, in PyTorch. TensorFlow retreated from "complete dominance" to "industrial deployment"—a significant loss for Google Brain in the framework wars, but not a fatal one, because its truly fatal contribution was still ahead.

## The Birth of the Transformer

On June 12, 2017, a paper appeared on arXiv: **Attention Is All You Need**. All eight authors came from Google Brain and Google Research: **Ashish Vaswani (1986–)** (first author), Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan Gomez (intern), Lukasz Kaiser, and Illia Polosukhin.

The paper proposed the **Transformer**—a sequence model based entirely on attention, with no recurrence and no convolution. Its original purpose was to improve machine translation; the experiments were on WMT English-German and English-French, and the Transformer reached state-of-the-art with shorter training time.

No one (the authors included) anticipated how the paper would change the world. Seven years later, in 2024, nearly every contemporary large model—GPT, Claude, Gemini, LLaMA, Qwen, DeepSeek, Mistral—sat on the Transformer architecture. By 2026, the trillion-dollar market value of the entire generative-AI industry could be traced, almost in full, to those eight authors and those eleven pages.

**But Google itself did not lead this road to its end.** Over the years that followed, the eight authors left Google in succession: Vaswani founded Essential AI; Shazeer founded Character.AI (and returned to Google in 2024); Aidan Gomez founded Cohere; Illia Polosukhin founded NEAR Protocol; Uszkoreit founded Inceptive. Google had nurtured the Transformer but could not keep its inventors.

## BERT: The Triumph of Pretraining and the Lost LLM Race

A year after the Transformer, **Jacob Devlin (1985–)**, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova at Google Brain and Google Research published **BERT** (Bidirectional Encoder Representations from Transformers, October 2018). It was the first systematic attempt to apply the Transformer **encoder** to language understanding tasks—pretrained with masked language modeling, it set new records on 11 NLP benchmarks at once.

BERT defined the "**pretrain plus fine-tune**" paradigm and was widely imitated for years afterward. T5, ELECTRA, ALBERT, and RoBERTa were all extensions of this line.

But Google walked the "**understanding**" road (encoders), while OpenAI walked the "**generation**" road (decoders). When GPT-3 arrived in 2020, the power of scaling laws appeared in earnest, and the situation began to flip. Google Brain had its own large-model research (LaMDA, PaLM, FLAN) but never released a product like ChatGPT.

When ChatGPT came online on November 30, 2022, it shocked Silicon Valley—including Google itself. An internal "Code Red" was issued, halting several projects to concentrate resources. But Google's structural disadvantage was already exposed: a research-publication culture meant papers came out first while product iteration lagged; FAIR and PyTorch had pulled ahead in the research community; OpenAI was much faster at "turning the model into a product."

## The Merger with DeepMind: From Two Lines to One

For a long time, Google had two AI lines: **Google Brain** (in California, emphasizing engineering and scale) and **DeepMind** (acquired in 2014 in London, emphasizing reinforcement learning and AI for science). The two cooperated sometimes and competed more often—two teams attacking the same problem in parallel, two teams publishing separate papers at the same conference.

On April 20, 2023, Sundar Pichai announced: **Google Brain and DeepMind would merge into Google DeepMind**, with Demis Hassabis as CEO and Jeff Dean as Google's Chief Scientist for AI research across the company. It was Google's most direct response to ChatGPT—concentrate resources, unify command, and push Gemini at full force.

Google Brain ended as an independent brand. But its legacy—TensorFlow, Transformer, BERT, Word2Vec, Seq2Seq, neural machine translation (GNMT), TPUs—had been written into the underlying protocols of the AI age.

## A Diaspora of Talent

Another piece of Google Brain's historical importance: it was the largest talent conveyor of the AI era.

The list of those who left to start companies or join competitors is striking:

- **OpenAI's early ranks were heavily drawn from Brain**, even though **Sam Altman (1985–)** himself had not been there: **Ilya Sutskever** (joined Brain after the 2012 AlexNet, recruited by OpenAI in 2015 as co-founder and chief scientist).
- **Dario Amodei**: joined Brain in 2016, then OpenAI; founded Anthropic in 2021.
- **Jan Leike**: former Brain researcher, later head of alignment at OpenAI; joined Anthropic in 2024.
- **Andrej Karpathy**: a 2015 Google Brain intern; later OpenAI co-founder, Tesla AI director, OpenAI again, then left in 2024.
- **Sam McCandlish, Tom Brown**: GPT-3 core authors with early ties to Brain; both went to Anthropic.
- **Andrew Ng**: left Brain in 2014 to become chief scientist of Baidu.
- **Transformer's eight authors**: five founded their own companies; one went to Character.AI; one returned to Google.
- **Noam Shazeer**: founded Character.AI; in August 2024, Google paid 2.7 billion dollars to bring Character.AI back, with Shazeer himself rejoining Google DeepMind.

Critics will say: Google had the most elite AI talent pool in history and could not keep them at the critical moment. Defenders will say: precisely because Google Brain trained and released these people, today's AI industry is as vibrant as it is. Both are true.

## Hardware: The TPU as a Secret Weapon

Google Brain has another, often overlooked, contribution—**TPU** (Tensor Processing Unit).

Around 2013, Google realized internally that the compute demand of deep learning was growing far faster than Moore's Law and could not be sustained on CPUs or GPUs. With Google Brain's support, Norm Jouppi and others kicked off the TPU project. The first generation, TPUv1, was deployed internally in 2015 for inference; TPUv2 (2017) added training; TPUv3 (2018) introduced liquid-cooled large clusters; TPUv4, TPUv5, and TPUv6 (Trillium) followed in succession.

TPUs make Google one of the very few large players in Silicon Valley with a "compute infrastructure" entirely independent of NVIDIA. Gemini was trained on TPU clusters—a unique structural advantage Google retains in its competition with OpenAI and Anthropic.

## Today: The Echo of Google Brain

By 2026, the name "Google Brain" is no longer in active use. Its researchers have either merged into Google DeepMind or left Google. But its spirit lives in every corner of AI:

- The Transformer is in **every** contemporary large model.
- TensorFlow is on **every** edge device deployed in production.
- BERT's "pretrain plus fine-tune" remains the foundation of NLP.
- Jeff Dean continues as Google's Chief Scientist, the soul of the company's AI strategy.
- Andrew Ng continues to teach tens of millions on Coursera and DeepLearning.AI.
- The new and old companies of those eight Transformer authors form half of the AI industry.

As an independent unit it is gone; as a culture and methodology it is everywhere.

::: tip Historian's Note
Google Brain is the AI era's most brilliant and most heart-rending in-house lab. It invented the Transformer, then watched OpenAI build the ChatGPT empire on the same architecture; it nurtured nearly every core researcher of today's AI giants and could not keep them; the academic openness it insisted on benefited the whole industry, while leaving its own commercial pace forever a step behind. **One of AI history's most painful lessons is that inventing something and using something well are two different things.** Google Brain's fate proves that even with the strongest research team, the largest compute, and the earliest breakthrough, you do not necessarily win the next war. But the foundation it laid for AI is irreplaceable—if AGI ever comes, we will return to those eleven pages of June 12, 2017, and to a name called "Attention."
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Google Brain, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Le, Q. V. et al. (2012). "Building High-level Features Using Large Scale Unsupervised Learning." *ICML 2012*.
2. Mikolov, T. et al. (2013). "Efficient Estimation of Word Representations in Vector Space." (Word2Vec)
3. Sutskever, I., Vinyals, O., & Le, Q. V. (2014). "Sequence to Sequence Learning with Neural Networks." *NeurIPS 2014*.
4. Vaswani, A. et al. (2017). "Attention Is All You Need." *NeurIPS 2017*.
5. Devlin, J. et al. (2019). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." *NAACL 2019*.
6. Abadi, M. et al. (2016). "TensorFlow: A System for Large-Scale Machine Learning." *OSDI 2016*.
7. Jouppi, N. P. et al. (2017). "In-Datacenter Performance Analysis of a Tensor Processing Unit." *ISCA 2017*.
8. Pichai, S. (2023). "Google DeepMind: A New Era of AI Research." Google blog, April 2023.
9. Metz, C. (2023). "How Google Plans to Challenge ChatGPT with Gemini." *The New York Times*.
10. Levy, S. (2024). "The Great Talent Diaspora: How Google Brain Seeded Silicon Valley AI."
