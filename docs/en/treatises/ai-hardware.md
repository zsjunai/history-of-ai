# Treatise · AI Hardware and Compute

> Without an evolution in hardware, there would have been no deep learning revolution. From CPUs to GPUs to TPUs, from single-card training to hundred-thousand-card super-clusters, from Silicon Valley to China's "East Data, West Compute" plan — compute is the most overlooked, yet the most irreplaceable, variable in AI's progress. Algorithms take the spotlight, but it is the cables, transformers, and server racks buried underground and inside mountain caves that truly set the tempo of the era.

## I. Chip Evolution: From the Bottleneck of Serial Logic to the Liberation of Parallelism

The story begins with an underestimated constraint: the CPU was born to be serial. The Central Processing Unit was designed to execute long chains of instructions as fast as possible — elaborate cache hierarchies, exquisite branch predictors — but its floating-point parallelism is sharply limited. Neural network training demands almost the opposite: massive matrix multiplications, the same operation repeated across heaps of data.

The turning point came from a totally unrelated industry — video games. In the late 1990s, GPUs (Graphics Processing Units) designed by NVIDIA and ATI for rendering 3D graphics naturally embedded hundreds, then thousands, of parallel stream processors. In 2007, an NVIDIA team led by **Jensen Huang (1963–)** released CUDA (Compute Unified Device Architecture), letting developers write general-purpose code for the GPU in a C-like syntax. With one stroke, the GPU went from a graphics card that "only knew how to render" to a cheap supercomputing node for scientific computation.

The first to taste it were machine learning researchers. In 2009, Stanford's **Andrew Ng** team showed at ICML that GPU training was 70× faster than CPU for deep networks. In October 2012, **Alex Krizhevsky** trained AlexNet on two NVIDIA GTX 580s, slashing ImageNet Top-5 error from 26.2% to 16.4%. From that day on, the fates of GPU and deep learning were bound together forever.

In 2016, Google revealed the TPU (Tensor Processing Unit) — an ASIC custom-built for machine learning inference. The first-generation TPU quietly powered AlphaGo's match against Lee Sedol; from generation two onward it took on training as well. By 2024, TPU v5p and v6 (Trillium) were each pushing harder against the triangle of performance/watt/dollar.

NVIDIA remains the largest winner in this game. The 2020 A100 redefined the standard for large-model training; the 2022 H100 introduced the Transformer Engine and FP8 precision, monopolizing the training compute behind GPT-4 and the LLaMA era; the 2024 Blackwell architecture (B200, GB200 NVL72) pushed per-rack compute to 1.4 EFLOPS. NVIDIA's market capitalization first crossed three trillion dollars in June 2024, briefly surpassing Apple and Microsoft to become the world's largest company.

Challengers never rest. Cerebras turns an entire 12-inch wafer into one giant "WSE" chip with four trillion transistors, betting on uninterrupted on-wafer computation. Groq took the other path — abandoning HBM in favor of on-chip SRAM to chase extreme inference latency. AMD released the MI300X in 2023 to face the H100 head-on. Intel's Gaudi line, the UK's Graphcore IPU, and Israel's Habana all fought for niches NVIDIA could not fully serve. Chinese vendors are now in formation: Huawei Ascend 910B/910C, Cambricon's Siyuan, Baidu's Kunlun, and Moore Threads MTT S4000 — locked at a 7 nm node yet ramping up rapidly inside the domestic training market.

## II. Data Centers: From the Cloud to the AI Factory

The shape of the data center is being remade by AI.

For a decade, "the cloud" was a generic resource pool — floors stacked with CPU servers, mostly running websites, databases, and video transcoding. After GPT-3, the giants began constructing buildings dedicated to large-model training. Site selection now turns first on transmission capacity and climate; rack densities have soared from 10 kW to over 100 kW; liquid cooling is replacing air cooling as the new default. In his 2024 GTC keynote, **Huang** coined a new term — the "AI Factory" — treating tokens as finished goods and electricity and GPUs as raw material.

The race entered the prelude to the "million-card era."

- **xAI Colossus** (Memphis, July 2024): the **Elon Musk** team brought a 100,000-H100 training cluster online in 122 days, the fastest large AI cluster ever built. In early 2025 it announced expansion to 200,000 cards, with one million as the target.
- **Microsoft × OpenAI Stargate** (announced January 2025): a four-year, $500 billion build-out for next-generation AI infrastructure, with the first site in Abilene, Texas.
- **Meta's in-house clusters**: in 2024 it disclosed two 24,576-H100 training clusters and announced compute equivalent to 600,000 H100s by year-end.
- **Google**: starting in 2024, the new Hyperion campus pushed TPU v5p clusters to groups of 8,960.

China's "East Data, West Compute" program offers another path — turning the power-rich, climate-friendly western regions (Guizhou, Inner Mongolia, Ningxia, Gansu, Sichuan) into eight national compute hubs, linked to eastern demand through the national backbone. This is a state-level plan: dispatch compute as one would dispatch electricity.

Whoever owns compute owns the agenda of the large-model era — that judgment no longer needs argument.

## III. The Economics of Compute: From Research Project to Arms-Budget

The cost curve is among the most astonishing of this era.

- GPT-3 (2020): training cost roughly $4.6 million.
- GPT-4 (2023): around $60–100 million.
- By 2024, frontier training runs were repeatedly breaking the $500 million ceiling in public reports.
- Industry estimates for the next generation — GPT-5 / Gemini 3 / Claude 4 — already point at the $1 billion mark per training run.

But training is only the visible tip. Once deployed, inference's marginal cost is amplified across billions of calls. Sam Altman has admitted on multiple occasions that OpenAI's inference spend already exceeds training. NVIDIA's Hopper-generation H100/H200 are no longer training-only chips; many now run on the deployment side. Inference specialists like Groq, SambaNova, Tenstorrent, and Cerebras Inference are betting on this long tail.

The rise of DeepSeek between late 2024 and early 2025 was the first cold shower for the industry. DeepSeek-V3 publicly claimed a training cost of roughly $5.58 million; DeepSeek-R1 used reinforcement learning to reach reasoning ability close to GPT-o1. Those two numbers caused NVIDIA's stock to plunge 17% in one day, vaporizing some $600 billion in market capitalization. The faith that "compute is everything" was challenged for the first time in earnest: sparsity, quantization, Mixture of Experts (MoE), and distillation — the leverage of "soft" techniques — might count for more than another 100,000 H100s.

But this does not mean the compute race is over. In 2025, OpenAI, xAI, and Anthropic each announced more aggressive expansion plans. The plain reading is this: efficiency dividends are immediately reinvested into bigger models — saved compute does not sit idle, it is swallowed into experiments at the next order of magnitude.

## IV. Energy and the Environment: Power Becomes the New Bottleneck

The first to perceive AI's true bottleneck were not the chip foundries but the power utilities.

A 2024 IEA report estimated global data-center electricity use would double from 460 TWh in 2022 to 800–1,000 TWh by 2026 — roughly Japan's annual consumption. Goldman Sachs warned in the same year that the U.S. grid would need to add 47 GW of dedicated data-center power within five years — equivalent to building a major plant in every state.

Power scarcity has revived nuclear energy.

- September 2024: Microsoft signed a 20-year power-purchase agreement with Constellation Energy to restart Three Mile Island Unit 1 — closed since the 1979 accident — renaming it the Crane Clean Energy Center, with all output reserved for Microsoft's AI data centers.
- October 2024: Google contracted Kairos Power for small modular reactor (SMR) electricity, targeting deployment by 2030.
- Amazon acquired a Talen Energy data center co-located with a nuclear plant.
- Helion, the fusion company backed by OpenAI, signed a 2028 supply agreement with Microsoft.

Cooling is also being rewritten. Liquid cooling and immersion cooling have become mandatory above 100 kW per rack. NVIDIA's Blackwell line ships by default with direct-to-chip liquid cooling; legacy air cooling is fading from training data centers.

Sustainable AI is a race between efficiency and scale: when an algorithm becomes twice as efficient, the model is doubled in size — and the carbon footprint keeps climbing. This is one of the most awkward ethical paradoxes of the AI era.

## V. Chip Sanctions and the Geopolitics of Compute

On October 7, 2022, the U.S. Bureau of Industry and Security (BIS) issued new advanced-semiconductor export controls on China, bringing leading-edge AI GPUs (a performance threshold roughly framed around the H100) under restriction for the first time. This was a pivotal night in geopolitical history — AI compute had officially entered the "dual-use" list.

NVIDIA quickly produced China-specific H800 and A800 (with high-speed interconnects throttled). In October 2023, BIS tightened the rules to cover H800, A800, and L40S; NVIDIA released even weaker H20 and L20. December 2024 brought further controls — extending to HBM memory, advanced lithography, and EDA tools, covering nearly the entire AI compute supply chain. In April 2025, the H20 itself was placed under case-by-case review.

China's response unfolded along two tracks.

- **Domestic substitution accelerated**: Huawei's Ascend 910B/910C deployed at scale across DeepSeek, Alibaba, ByteDance, and Baidu; SMIC began mass production at the 7 nm node.
- **Architectural and software innovation**: through MoE, low-precision training, and elastic cross-cluster scheduling, squeezing maximum effective output from every available card. The success of DeepSeek-V3 and R1 marked the first banner result of this approach.

"The compute curtain" is a phrase used more and more often. It refers not just to hardware being cut off, but to the entire software stack, model weights, and talent flow being reorganized along geopolitical lines. The same shift is playing out in different ways across the EU, India, and the Gulf states — every regional power asks the same question: on whom does our AI sovereignty depend?

## VI. Musk's Compute Empire

**Musk** entered the compute race in a way no one else did — not as an AI founder buying compute, but as an industrial capitalist stitching together a full-stack chain.

xAI was founded in July 2023. A year later the Colossus cluster outside Memphis came online, with 100,000 H100s deployed in 122 days, breaking the speed record for any large AI data center. When Grok 3 launched in late 2024, it stood on this very plant. Musk's next milestone is the "million-card cluster," and he is openly competing with OpenAI for the same pools of power and land.

The deeper picture is Musk's cross-company "vertical integration":

- **Compute**: xAI Colossus plus surplus GPUs absorbed from Tesla.
- **Chips**: Tesla Dojo (the D1 chip, specialized for autonomous-driving video training).
- **Data**: millions of Tesla vehicles worldwide, the Optimus robot fleet, and the live social stream of X (formerly Twitter).
- **Network**: Starlink, providing low-latency global backbone, unifying "edge AI + autonomous driving + robotics" under one constellation.
- **Endpoints**: Tesla Cybercab, Optimus, Neuralink.

Whether this succeeds is another matter. But the template is being quietly studied by other giants — when **Huang** spoke at GTC 2024 about NVIDIA's "full-stack vision," the underlying logic was hardly different from Musk's.

## VII. The Future: At the Edge of Physical Law

Transistors have approached the 1 nm physical wall. Moore's Law, in its pure-silicon version, is sputtering out. Where does the next compute dividend come from?

- **Quantum computing**: Google declared "quantum supremacy" in 2019 and unveiled the Willow quantum chip in December 2024; IBM, Origin Quantum, and China's Jiuzhang series have shown speed-ups on small tasks. But for general deep-learning training, quantum advantage remains conjectural.
- **Photonic computing**: Lightmatter, Lightelligence, and PsiQuantum perform matrix multiplication on optical waveguides at a fraction of electronic energy. In 2024, Lightmatter announced a $400 million Series D at a $4.4 billion valuation.
- **Neuromorphic chips**: Intel Loihi 2 and IBM NorthPole simulate biological neurons through spiking neural networks, targeting ultra-low-power inference.
- **In-memory computing**: Mythic, SambaNova, and the RRAM arrays of Tsinghua's Wu Huaqiang group perform matrix multiplication directly in memory cells, bypassing the von Neumann bottleneck (named for **John von Neumann**).
- **Chiplets and 3D stacking**: as monolithic silicon hits its limits, advanced packaging (CoWoS, SoIC) connects many small dies into "super-chips" — the new Moore's Law.

The ultimate question points back to physics itself: how many floating-point operations can be performed per unit of energy? Landauer's limit gives the hard ceiling. Until we approach it, every generation of hardware breakthrough — GPU, TPU, photonic, or quantum — serves the same goal: freeing AI training and inference from the shackles of energy and the grid.

The compute race is, in the end, an energy race.

---

::: tip Historian's Note
Surveying eighty years of AI compute, one perceives its movement as a great river — distant springs, converging tributaries, and finally a torrent rushing to the sea. The serial computation of the CPU age was the trickle of mountain streams; the parallel architecture of the GPU was the swell of an ocean tide; and today's hundred-thousand-card clusters are the wide rivers of empire, with electricity for water and silicon for sails. NVIDIA's overnight ascent to the global summit was no accident: Huang's foresight bet on the CUDA ecosystem two decades ago, when "AI" was not yet a name though parallelism was already a reality. Google's TPU has its own ambitions; xAI's Colossus, raised in 122 days, attests to the giants' obsession with compute. Yet DeepSeek's tremor proved that compute is not omnipotent — algorithmic efficiency and software innovation can still cut a path when hardware is locked. Chip sanctions, "East Data, West Compute," the nuclear revival, the dawn of quantum — these seemingly unrelated headlines share a common root: compute has become a weapon of state, as critical as oil and the power grid. Future AI competition will be half algorithm and half energy, half chip and half diplomacy. Compute is power — no longer a slogan, but the hardest reality of this age.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on AI chip design, data-center construction, or compute scheduling, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Raina, R., Madhavan, A., & Ng, A. Y. (2009). Large-scale deep unsupervised learning using graphics processors. *Proceedings of ICML 2009*, 873-880.
2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Advances in Neural Information Processing Systems*, 25.
3. Jouppi, N. P., Young, C., Patil, N., et al. (2017). In-datacenter performance analysis of a tensor processing unit. *Proceedings of ISCA 2017*, 1-12.
4. NVIDIA (2022). *NVIDIA H100 Tensor Core GPU Architecture White Paper*.
5. NVIDIA (2024). *NVIDIA Blackwell Architecture Technical Brief*.
6. Sevilla, J., Heim, L., Ho, A., et al. (2022). Compute trends across three eras of machine learning. *Proceedings of IJCNN 2022*.
7. Patterson, D., Gonzalez, J., Le, Q., et al. (2021). Carbon emissions and large neural network training. *arXiv preprint arXiv:2104.10350*.
8. International Energy Agency (2024). *Electricity 2024: Analysis and forecast to 2026*.
9. U.S. Department of Commerce, Bureau of Industry and Security (2022, October 7). Implementation of additional export controls: Certain advanced computing and semiconductor manufacturing items. *Federal Register*, 87 FR 62186.
10. DeepSeek-AI (2024). DeepSeek-V3 technical report. *arXiv preprint arXiv:2412.19437*.
11. DeepSeek-AI (2025). DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning. *arXiv preprint arXiv:2501.12948*.
12. Microsoft & Constellation Energy (2024, September 20). *Joint announcement: Three Mile Island Unit 1 restart agreement*.
