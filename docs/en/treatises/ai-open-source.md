# Treatise · AI and the Open-Source Movement

> From Theano sharing the world's first gradient formulas, to the LLaMA weights leaking onto a forum overnight, to DeepSeek giving its reasoning model away free to the entire internet — open source is not merely a software license. It is the most powerful anti-monopoly tool of the AI era, and a new kind of contest over power, safety, and national borders.

## I. The Era of Academic Open Source (2010–2015)

The revival of deep learning was the purest product of the open-source spirit.

In 2010, **Yoshua Bengio**'s lab at the University of Montreal released Theano — the first widely used framework for symbolic differentiation. It could automatically compile mathematical expressions into CUDA code on the GPU, freeing researchers from hand-writing backpropagation. Theano had fewer than 100,000 lines of code, yet a whole generation of deep-learning researchers began with it. **Ian Goodfellow**, Razvan Pascanu, and David Warde-Farley all wrote foundational papers on top of it.

In 2013, Berkeley's Yangqing Jia released Caffe. Specialized for convolutional networks, its configuration file was the model — turning training from "research code" into "engineers configuring a prototxt." Caffe made the industrial-scale CNN possible for the first time; in the 2014 ImageNet competition, it was already among the most common tools in use.

In the same period, Facebook AI Research rewrote Torch in Lua. Torch was never mainstream, yet it nurtured a top-tier cohort — **Yann LeCun**, Soumith Chintala, and Adam Paszke were all devotees. In 2017 they migrated Torch's soul into Python. That became PyTorch — soon to sweep academia.

Open source at this stage was the natural continuation of academic sharing: papers came with code, models could be reproduced, experiments could be checked. NeurIPS and ICML acceptance rates began to correlate with GitHub star counts — a researcher's influence increasingly measured by open code rather than paper citations.

## II. The Framework Wars (2015–2020)

On November 9, 2015, Google rewrote its internal DistBelief into a new framework called TensorFlow and released it under Apache 2.0 — all at once. This was nearly a dimensional strike on academia: backed by Google Brain, with complete documentation and the strongest distributed training support in the industry. Almost overnight, every industry team was speaking TensorFlow.

But the lead did not last. In September 2016, Facebook AI Research released PyTorch. Its core advantage could be stated in one sentence: a dynamic computational graph. TensorFlow 1.x demanded a static graph defined first and data fed later — a misery to debug; PyTorch let researchers write neural networks like ordinary Python and `print` intermediate tensors at any time.

The research community defected fast. At NeurIPS 2018, PyTorch papers outnumbered TensorFlow papers for the first time; from 2019 onward PyTorch was the dominant force at top AI conferences; in September 2020 Google had to release TensorFlow 2.x, embracing PyTorch-style eager execution. But the inertia was irreversible — research belongs to PyTorch, while production deployment still leaves room for TensorFlow.

The greatest lesson of the framework wars was that developer experience outweighs corporate backing. However large Google may be, no scale could overpower a researcher's relief at being able to "just print a tensor."

Other contenders kept appearing. Amazon backed MXNet (briefly the official AWS framework, later in decline). Baidu released PaddlePaddle, emphasizing Chinese documentation and a domestic ecosystem. Huawei open-sourced MindSpore in 2020 alongside its Ascend chips. In the LLM era, Hugging Face's Transformers library has become the new "framework-level" foundation, the parent from which almost every large-model training run is forked.

## III. The Rise of Model-Sharing Platforms: The Hugging Face Phenomenon

Hugging Face, founded in 2016, began as a chatbot product. The pivot came in 2018 when it released PyTorch implementations of BERT and GPT — quickly adopted by researchers and enterprises alike. That code evolved into the `transformers` library — one of the most-downloaded AI libraries ever, with more than 130,000 GitHub stars by 2024.

Hugging Face's larger ambition was to build "the GitHub of AI." Model Hub allowed anyone to upload and download model weights, Datasets offered open datasets, and Spaces provided free containers for hosting demos. From BERT to LLaMA to Stable Diffusion, almost every authoritative open-source model release defaulted to Hugging Face. As of 2025, the platform hosts over a million models, with millions of monthly active developers.

"arXiv + GitHub + Hugging Face" became modern AI's three-piece kit. The day a paper appears on arXiv, code and weights show up on the other two; within 24 hours someone has reproduced and reported results. This closed loop is the hidden engine of AI's accelerating progress.

Hugging Face itself completed two funding rounds in 2023–2024, with valuation soaring to $4.5 billion. It has trained none of the strongest foundation models, yet plays a more important "infrastructure" role than many foundation-model companies.

## IV. The LLaMA Incident and the Open-Source LLM Movement (2023)

On February 24, 2023, Meta released LLaMA (Large Language Model Meta AI) — pretrained models in four sizes from 7B to 65B. ChatGPT had stormed the world for three months by then, GPT-4 had not yet appeared, and the industry was broadly pessimistic about whether open source could ever reach GPT-class quality. LLaMA's paper came with a non-commercial research license; researchers had to apply to Meta to receive a download link.

But just one week later, on March 3, a 4chan user uploaded a torrent of the full 65B weights, and the entire model spread across BitTorrent. Meta sent take-down letters to a few sites, but it was already irretrievable — the open-source world finally had a model truly close to commercial-grade.

The next three months saw the "Cambrian explosion" of open-source AI.

- March 14: Stanford released Alpaca — 52,000 GPT-3.5-generated instructions fine-tuned on LLaMA 7B, training cost under $600, results stunning.
- March 30: UC Berkeley, CMU, and others jointly released Vicuna — fine-tuned on 70K ShareGPT dialogues, claimed at 90% of ChatGPT.
- From April: WizardLM, Guanaco, Koala flooded out. LoRA and QLoRA made it possible to fine-tune 13B-class models on a single consumer GPU.

Meta turned under pressure. On July 18, 2023, Meta and Microsoft jointly released LLaMA 2 with the first commercial license (free for companies under 700 million MAU) and a complete responsible-use guide. **LeCun** and Mark Zuckerberg co-wrote "open source" into the shareholder letter as Meta's core counter-strategy to OpenAI.

In April and July 2024, LLaMA 3 and 3.1 followed; the flagship 405B variant matched GPT-4 on multiple benchmarks for the first time. LLaMA 3.3 (December 2024) and LLaMA 4 (2025) advanced multimodal and code generation. The gap between open-source models and the closed frontier compressed from 18 months to under six.

## V. The Global Open-Source Ecosystem

### United States

The LLaMA series turned Meta into the de facto standard-bearer of open-source LLMs. In a 2024 open letter, Zuckerberg wrote: "Open source AI is the path forward." It was the most resounding continuation of Silicon Valley's open-source culture in a decade.

France's Mistral AI was founded in April 2023 and raised €105 million within weeks. Its first product, Mistral 7B (September 2023), beat LLaMA 13B with seven billion parameters, proving small models could be extraordinarily efficient. Mistral 8x7B (MoE, December 2023) brought "Mixture of Experts" into the mainstream; 2024 added Mistral Large and Codestral on the closed high-end. Mistral became Europe's first open-source AI vendor of global influence.

### China

From 2023 onward, Chinese internet giants joined open source en masse.

- **Qwen (Alibaba)**: from Qwen 1 to Qwen 2.5 (September 2024) to Qwen 3 (2025), spanning 0.5B to 72B, text and multimodal, long-context and reasoning-specialized. It permanently sits atop Hugging Face's monthly download charts and is one of the world's most-downloaded open Chinese model families.
- **Zhipu AI (Tsinghua-affiliated)**: from open-sourcing ChatGLM-6B in 2023, GLM-4, GLM-4-9B, and GLM-4-Plus form a complete tier — the most widely used in Chinese academia.
- **DeepSeek (founded by Liang Wenfeng (梁文锋))**: 2024's DeepSeek-V2 introduced a streamlined MoE architecture and Multi-Head Latent Attention (MLA), driving inference cost to industry lows. DeepSeek-V3 (December 2024) approached GPT-4o on multiple benchmarks. DeepSeek-R1, released in January 2025, became the first fully open-source RL-based reasoning model, on par with OpenAI o1. NVIDIA's record one-day stock decline on R1's launch day became known as the "DeepSeek moment."
- **Moonshot**: open-sourced Moonlight MoE; its commercial product Kimi is famed for long context.
- **MiniMax**: open-sourced the MiniMax-01 series, focused on multimodal, voice, and long context.
- **Baichuan AI (Wang Xiaochuan)** and **01.AI (founded by Kai-Fu Lee)**: Baichuan and Yi series — early Chinese open-source LLM standard-bearers.
- Plus StepFun, SenseTime's RiRiXin, MiniCPM by ModelBest, and many others.

China became one of the densest open-source markets globally — driven by policy support, internet-giant investment, dense start-up activity, and national compute infrastructure.

### Other Regions

- **TII Falcon (UAE)**: 2023's Falcon 40B and 180B placed the Middle East on the open-source AI map.
- **Stability AI (UK)**: beyond Stable Diffusion it released the StableLM series, but went through severe financial turmoil from 2024.
- **Sakana AI (Japan, founded by ex-Google researcher David Ha)**: in 2024 proposed unique paths such as "evolutionary merging," advocating an open-source-plus-academic ethos.

## VI. Open Source vs. Closed Source

It is a debate without a winner — yet every side stands on solid ground.

Zuckerberg's stance is the most flag-bearing: open source is the default; open source prevents a few companies from monopolizing AI, accelerates research, accelerates industry, accelerates safety. Meta positions LLaMA as "the Linux of the AI era" — foundation models should become public infrastructure like operating systems.

**Sam Altman** and OpenAI have moved in the opposite direction. OpenAI has not released model weights since GPT-3; Altman has said in many interviews that "the most cutting-edge models should not be open-sourced — the risks are too high." OpenAI's pivot triggered an enormous irony: a non-profit founded by **Musk** and **Altman** in 2015 with the slogan "for the benefit of all humanity" and "Open" in its name has become one of the most resolute defenders of closed source. **Musk**'s 2024 lawsuit against OpenAI is bound up with this drift.

Anthropic walks a middle path: publishing extensive research, responsibly disclosing select benchmarks, but not releasing weights. **Dario Amodei** argues that open-sourcing frontier models could irreversibly worsen misuse risk, but rejects fully closed-box opacity.

After resigning from Google in 2023, **Geoffrey Hinton** publicly warned that the most powerful open models might be "impossible to take back" — once weights leak, terrorists and hostile states could weaponize them. The warning resonated in policy circles: the UK's *AI Safety Institute* and the U.S. *AI Safety Institute* added "evaluation of frontier open models" to their agendas in 2024.

## VII. The License Dispute: What Counts as "Truly Open"?

LLaMA forced an old question to the surface — does it really count as "open source"?

The Open Source Initiative (OSI) maintains ten criteria; the most critical is non-discrimination against users or fields of use. LLaMA 2's license forbids companies above 700 million MAU from using it, which violates non-discrimination as OSI defines it. In 2024, OSI's *Open Source AI Definition v1.0* further required that model weights, training code, and training-data information all be public — by that bar, LLaMA, Qwen, and DeepSeek qualify only as "open weight," not truly "open source."

A more complex pattern is what some call "open washing": companies trumpet open source while their fine print restricts commercial use, forbids benchmarking, or demands "Provided by X" attribution. Stable Diffusion's CreativeML license, LLaMA's acceptable-use policy, and parts of Mistral's research license have all been criticized this way.

The business model is another knot. If models are free, where does revenue come from? Reality offers many answers:

- Free base model, paid closed-source variant and bespoke services (mixed strategies of Mistral, Zhipu, Qwen, etc.).
- Cloud services built around open source (Hugging Face, Together AI, Fireworks AI, Anyscale).
- Enterprise model hosting and fine-tuning (Databricks, Snowflake).
- Parent companies monetizing AI dividends through other businesses — cloud, ads, e-commerce (Meta, Alibaba, Tencent).

Open source is no longer a non-profit utopia — it is a competitive strategy.

## VIII. Open Source as Geopolitical Strategy

Place open source back on the geopolitical chessboard, and the picture changes immediately.

**The American view**: open source is the means of setting global technology standards. If the world develops on LLaMA and PyTorch, Silicon Valley owns the de facto standard of the AI era. This is the precise continuation of the past 30 years of internet hegemony — Linux, Apache, TCP/IP. Meta and Zuckerberg's "open-sourcism" is the modern version of that strategy.

**The Chinese view**: open source is a shortcut to closing the gap, but also a dependency on the U.S. software stack. LLaMA was once the de facto base of countless "Chinese LLMs"; nearly all PyTorch training runs on NVIDIA CUDA. After the chip sanctions, Chinese open source extended into "self-controllable" territory — Qwen, DeepSeek, GLM made their full training code and papers public; DeepSeek-V3 and R1 disclosed training details to a degree that any team could reproduce them. This is "reverse open source" — radiating one's own strength outward to win the recognition and dependence of global developers.

The chip sanctions gave software open source new meaning in China: when hardware is locked, software must be more open and more efficient. An interesting loop has begun — closed-source frontier models from America + open-source pursuers from China + global developers borrowing from both.

The future is already branching: will open-source AI become "public infrastructure" or "a weapon in an arms race"? The answer may not be either-or, but both at once. Linux is both public infrastructure and the Defense Department's preferred operating system. LLaMA, Qwen, and DeepSeek are destined to be the same.

---

::: tip Historian's Note
Looking back across fifteen years of AI open source, one is struck by its likeness to flowing water — bearing ships, capable also of overturning them. In the days of Theano and Caffe, open source was the unquestioned ethic of academic sharing. In the duel of TensorFlow and PyTorch, it became the strategic fortress of industrial giants. With the overnight leak of LLaMA, it grew into a blade able to shake GPT's hegemony. Zuckerberg declared "open source is the path forward," Altman replied "the frontier must not be open," Hinton warned "weights cannot be recalled" — three men, three reasons, three fears. The fight over open AI is, on the surface, a quarrel over license clauses, but at its core a redistribution of power: once a model is opened, the agenda shifts from a few companies to millions of developers. Yet this democratization is not entirely benign — nuclear weapons cannot be democratized, biological weapons cannot, can powerful AI? A question that seemed science fiction a decade ago now sits on every regulator's desk. China's collective open sourcing was less generosity than geopolitical inevitability — when hardware is locked, software must open; the suppressed must trade sharing for allies. DeepSeek's tremor on Wall Street showed that small budgets can rattle great structures. Open source is to AI what movable type was to the Renaissance — not a technical detail, but a reshaping of power. A decade hence, this debate will look only to have begun.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have contributed to AI open-source frameworks, models, or communities, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Bergstra, J., Breuleux, O., Bastien, F., et al. (2010). Theano: A CPU and GPU math compiler in Python. *Proceedings of SciPy 2010*.
2. Jia, Y., Shelhamer, E., Donahue, J., et al. (2014). Caffe: Convolutional architecture for fast feature embedding. *Proceedings of ACM Multimedia*, 675-678.
3. Abadi, M., Barham, P., Chen, J., et al. (2016). TensorFlow: A system for large-scale machine learning. *Proceedings of OSDI 2016*, 265-283.
4. Paszke, A., Gross, S., Massa, F., et al. (2019). PyTorch: An imperative style, high-performance deep learning library. *Advances in Neural Information Processing Systems*, 32.
5. Wolf, T., Debut, L., Sanh, V., et al. (2020). Transformers: State-of-the-art natural language processing. *Proceedings of EMNLP 2020 (System Demonstrations)*, 38-45.
6. Touvron, H., Lavril, T., Izacard, G., et al. (2023). LLaMA: Open and efficient foundation language models. *arXiv preprint arXiv:2302.13971*.
7. Touvron, H., Martin, L., Stone, K., et al. (2023). Llama 2: Open foundation and fine-tuned chat models. *arXiv preprint arXiv:2307.09288*.
8. Meta AI (2024, July 23). *The Llama 3 Herd of Models*. arXiv:2407.21783.
9. Jiang, A. Q., Sablayrolles, A., Mensch, A., et al. (2023). Mistral 7B. *arXiv preprint arXiv:2310.06825*.
10. Bai, J., Bai, S., Chu, Y., et al. (2023). Qwen technical report. *arXiv preprint arXiv:2309.16609*.
11. DeepSeek-AI (2024). DeepSeek-V3 technical report. *arXiv preprint arXiv:2412.19437*.
12. DeepSeek-AI (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
13. Open Source Initiative (2024, October 28). *The Open Source AI Definition – 1.0*.
14. Zuckerberg, M. (2024, July 23). Open source AI is the path forward. *Meta Newsroom*.
