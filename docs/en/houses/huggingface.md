# House · Hugging Face

> A startup that began making chatbots for teenagers, which became—almost by accident—the de facto standard of global open-source AI. The single command `pip install transformers` is the most-typed AI incantation of the past eight years.

## Three Frenchmen in New York

The story begins in New York in 2016. Three Frenchmen—Clément Delangue, Julien Chaumond, and Thomas Wolf—registered a company in a small Manhattan office, naming it **Hugging Face**, with a smiling, teary-eyed hugging emoji as its logo. Delangue had graduated from HEC Paris and worked at eBay; Chaumond was the technical co-founder, an experienced startup engineer; Wolf held a PhD in physics and was teaching himself NLP.

The first product was an entertainment chatbot app for teenagers—on iPhone, you could trade memes and gossip with a slightly snarky, slightly cute virtual friend. It was not a world-changer; it was the kind of "ship and see" experiment that fits Y Combinator culture. It got hundreds of thousands of App Store downloads, far short of a hit.

If the story had stopped there, Hugging Face would have been one of the late-2010s' many quietly vanished chatbot startups. But two things happened in 2018 that flipped its fate.

## The BERT Moment

On October 11, 2018, Google released the BERT paper. **Jacob Devlin (1985–)** and his team showed the power of "bidirectional pre-training plus task fine-tuning," resetting nearly every standard NLP benchmark to a new high overnight. The whole NLP community realized: pre-trained language models were the future.

Google then open-sourced BERT's TensorFlow implementation. The PyTorch community had no usable port for a while. Wolf and engineer Lysandre Debut, who had been porting BERT internally for the chatbot, open-sourced their PyTorch version on GitHub under the unassuming name **pytorch-pretrained-BERT**.

It was released in November 2018. Within a week NLP researchers were starring, forking, and citing the repo at a frantic pace. Wolf and his colleagues realized—the "small thing" they had done in passing was worth far more than the chatbot product. Through 2019 the team poured nearly all energy into expanding pytorch-pretrained-BERT into a general library covering **multiple models** (GPT-2, XLNet, RoBERTa, DistilBERT, etc.) and **multiple frameworks** (PyTorch and TensorFlow, with JAX added later). When it hit 1.0, the library was renamed `transformers`.

That was the real beginning of Hugging Face.

## The Triumph of the Transformers Library

From 2019 to 2021 the `transformers` library rapidly became NLP's de facto standard. Three reasons stand out.

**Unified API.** Whether BERT, GPT, T5, or ALBERT, all use the same `from_pretrained()` / `tokenizer()` / `model()` calls. It pulled researchers and engineers out of the swamp of "every model has its own code, every codebase its own conventions."

**Framework-agnostic.** The same model can be switched between PyTorch, TensorFlow, and JAX with one line, letting teams use the framework they prefer.

**Pythonic, well-documented, and student-friendly.** The HF team's investment in documentation, tutorials, and notebooks was unmatched among open-source libraries of the period. Any undergraduate could run her first BERT fine-tuning experiment in an afternoon.

By the end of 2020, nearly every NLP paper at top venues (ACL, EMNLP, NAACL) shipped open-source code based on `transformers`. Monthly downloads crossed 100 million in 2024.

Around `transformers` Hugging Face built **Datasets** (a unified dataset interface), **Tokenizers** (high-speed tokenizers in Rust), **Accelerate** (a simplifier for distributed training), **PEFT** (parameter-efficient fine-tuning, including LoRA), and **TRL** (RL and RLHF tooling). Together they cover the full NLP engineering pipeline from data prep through training, fine-tuning, alignment, and deployment.

## The Hub: GitHub for the AI Era

From 2020, Hugging Face launched the **Model Hub**—an open platform where anyone can upload, download, and version-control AI model weights, positioned squarely as "GitHub for code, but for models." The Hub's defining choices were **open by default, Git LFS storage, community comments and demos**.

It exploded the moment it went live:

- Crossed 10,000 models in early 2021.
- Stable Diffusion went viral on the Hub in the second half of 2022; community fine-tunes appeared by the week.
- In 2023, after Meta released Llama 2, the Hub became its official distribution channel.
- By early 2026, the Hub hosts over **1.5 million models, 250,000 datasets, and 500,000 Space demos**.

The Hub's other pillar is **Spaces**: with no setup, users can wrap models into web demos using Gradio or Streamlit, letting anyone try them in a browser. The bridge between researchers who write papers and PMs who use models no longer crosses an engineering chasm.

"The GitHub of AI"—by 2023 the moniker had become the industry's consensus.

## BigScience and BLOOM

If OpenAI walked the path of "closed source plus commercial API," Hugging Face was nearly its philosophical opposite. The contrast peaked in **BigScience**.

In mid-2021, Hugging Face initiated BigScience—an open scientific collaboration with over a thousand researchers worldwide, using France's GENCI Jean Zay supercomputer. The goal: openly train a multilingual large model at GPT-3 scale.

On July 12, 2022, BigScience released **BLOOM**: 176 billion parameters, 46 natural and 13 programming languages, weights fully open-sourced, training data public, license under the Responsible AI License (RAIL). BLOOM was not the strongest model of its time, but it proved one thing—**the community could train a flagship-class large model in a non-commercial way**. The proof itself carried enormous political weight.

In April 2023, Hugging Face released **HuggingChat**—an open-source counterpart to ChatGPT, wrapping LLaMA, Falcon, Zephyr, Mistral, and others into a chat interface. HuggingChat has always trailed closed-source SOTA by one or two notches, but it represented an alternative path that did not bow to OpenAI.

## A $4.5 Billion Valuation and Ecosystem Expansion

On August 24, 2023, Hugging Face closed its **Series D at $235 million**, with a valuation of **$4.5 billion**. The investor list was a who's-who of the large-model era: Google, Amazon, NVIDIA, AMD, Salesforce, Sound Ventures, IBM, Intel, and Qualcomm joined together. That every giant came in is a configuration that arises only around an "industry infrastructure" company—it means none of them dared let Hugging Face tip toward a rival.

The product line continued to deepen across the next two years:

- **2023**: released the Zephyr open-source aligned models; together with LlamaIndex and LangChain became the standard trio for open-source LLM application stacks.
- **2024**: Llama 3 launched on the Hub day-one with monthly downloads in the hundreds of millions; introduced the **SmolLM** small-model family (135M, 360M, 1.7B), proving small models had real on-device value.
- **November 2024**: monthly active Hub users surpassed 5 million.
- **2025**: partnered with NVIDIA on NIM inference services, with AWS on Inferentia deployments, with Apple and Huawei on on-device SDKs.
- **2025**: launched the open-source robotics project **LeRobot** on the Hub, expanding into embodied intelligence.

## The Greatest Common Divisor of Open-Source AI

Back to the original question: what makes Hugging Face this important?

The answer is that it chose the right **identity**. OpenAI chose "build the strongest model"; Anthropic chose "build the safest"; Google chose "build the largest compute base"; Meta chose "open weights to build ecosystem"—and Hugging Face chose the least sexy but most enduring path: **be the neutral infrastructure for all of these routes**.

It does not train flagship models, but every flagship lands on its Hub. It does not run a closed-source API, but every closed-source API's developers first learn Transformers in its library. It picks no fight with any giant, but no giant can do without it. This is the classic infrastructure dividend of the open-source AI era—position matters more than capability, neutrality is rarer than power.

The most important thing the three French founders—Delangue, Chaumond, Wolf—happened to do right was to switch from "we will build a product" to "we will build an ecosystem." That switch took courage; it meant giving up the chance at "star app" status to do work that would never make headlines but could not be replaced. In hindsight, it was one of the boldest and smartest pivots of the late 2010s.

::: tip Historian's Note
Hugging Face is the biggest winner of the open-source AI era, but its way of winning differs from anything most people imagined. It did not train the strongest model, did not ship the most explosive product, did not pick the loudest fights. It did the least conspicuous, most irreplaceable thing—standardize, platformize, and decentralize the toolbox of the AI craft. Every AI engineer's onboarding installs its library, every open-source model is uploaded to its Hub, every paper's open-source code rests on its API. This is the oldest victory pattern of the digital age: do not be the storm's center; be the harbor where every ship in the storm must dock. In eight years, three Frenchmen built that harbor from a small office in New York into the global hub of open-source AI—a rare non-American AI story outside Silicon Valley.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Hugging Face, contributed to libraries like Transformers, or uploaded a model to the Hub, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Wolf, T., et al. (2020). "Transformers: State-of-the-Art Natural Language Processing." *Proceedings of EMNLP 2020 System Demonstrations*.
2. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." *arXiv:1810.04805*.
3. BigScience Workshop. (2022). "BLOOM: A 176B-Parameter Open-Access Multilingual Language Model." *arXiv:2211.05100*.
4. Hugging Face. (2023, August 24). "Hugging Face Raises $235M Series D." Press Release.
5. Delangue, C. (2020). "From Chatbot to NLP Powerhouse: The Hugging Face Story." *Hugging Face Blog*.
6. Wolf, T. (2019). "🤗 Transformers: The Story Behind the Library." *Medium*.
7. Hugging Face. *transformers* GitHub Repository (https://github.com/huggingface/transformers).
8. Stable Diffusion Public Release. (2022, August). Stability AI / Hugging Face Blog.
9. Meta AI. (2023). "Llama 2: Open Foundation and Fine-Tuned Chat Models." *Meta AI Research*.
10. Hugging Face Hub Statistics Dashboard (2024–2026).
11. The New York Times. (2024). "How Hugging Face Became the GitHub of AI." Technology Section.
