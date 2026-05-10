# House · NVIDIA

> A company that began making graphics cards for gamers, which became—almost by accident—the bedrock of the entire AI era. Without its GPUs and CUDA, there would have been no deep learning revolution; and from a crowded field of Silicon Valley chip startups, it emerged in 2025 as the first company in human history with a market capitalization exceeding $4 trillion.

## Three Men in a Denny's

April 1993, Denny's, the 24-hour diner chain in east San Jose, California. Thirty-year-old **Jensen Huang (1963–)**, 34-year-old Chris Malachowsky, and 32-year-old Curtis Priem sat among coffee cups and bacon, debating a wager—personal computers were about to need a dedicated chip for 3D graphics, and the CPU of the day could not keep up.

The three came from different backgrounds. Huang had emigrated from Taiwan at age nine, held an electrical engineering BS from Oregon State and an MS from Stanford, and had designed chips at AMD and LSI Logic. Malachowsky came from Sun Microsystems, a hardware engineering specialist. Priem had designed graphics chips at IBM and Sun and was regarded as a brilliant architect. They pooled $40,000 in seed money. The company name was assembled from Latin *invidia* (envy) and the "NV" (next version) prefix they used in early file names: NVIDIA.

The first years were rough. The 1995 NV1, which tried to combine graphics, audio, and gamepad control, bet on the wrong technical path (quadratic surface rendering rather than the triangles that became the standard) and nearly bankrupted the company. Huang has retold those days many times: with only thirty days of cash on hand, he gathered his remaining staff and said—"either we change direction completely, or we go home."

The company survived. The 1997 RIVA 128 and 1998 RIVA TNT series gave NVIDIA a foothold in the 3D gaming card market against the then-dominant 3dfx Interactive. NVIDIA went public on NASDAQ in January 1999. That August, it shipped a product that would change its destiny—the GeForce 256.

## The Birth of the GPU: From Frame to Parallel

In its launch ad for the GeForce 256, NVIDIA used a new term for the first time: "the world's first GPU." The acronym—Graphics Processing Unit—was defined in that moment: a programmable chip capable of processing at least ten million polygons per second, with hardware-accelerated transform and lighting (T&L) on board. It offloaded 3D math from the CPU entirely, letting personal computers run games like *Quake III* and *Half-Life* smoothly for the first time.

In 2000 NVIDIA acquired its bankrupt rival 3dfx for $70 million, absorbing most of its engineers and taking sole command of the PC gaming graphics market. The 2001 GeForce 3 introduced programmable shaders—small programs the developer could write to tell the GPU how to handle each pixel and vertex.

This step looked merely like prettier graphics, but at the hardware level it laid the groundwork for the entire AI era to come: the GPU was no longer a fixed-function "drawing chip," but **a programmable processor with hundreds of parallel computing units**. Sharp-eyed academics caught the scent quickly. Around 2003, researchers at Stanford, North Carolina, and elsewhere began running matrix multiplications and fluid simulations on pixel shaders—a "misuse" of the graphics pipeline that came to be known as GPGPU (General-Purpose computing on GPU). It was, however, painful to write: scientific computation had to be disguised as a texture map.

Huang saw the opening.

## CUDA: A Long Bet Wall Street Mocked

In 2004 NVIDIA hired Ian Buck, a freshly minted Stanford PhD whose thesis described **Brook**—a streaming language that let GPUs be programmed like parallel processors. The project he led at NVIDIA was eventually named **CUDA** (Compute Unified Device Architecture).

Released in November 2006 with the GeForce 8800 GTX, CUDA 1.0 let ordinary developers write general-purpose programs for the GPU in something close to C. It was an enormous bet: NVIDIA carved out die area in the GeForce 8 series for control logic, schedulers, and shared memory not used by graphics; opened CUDA's SDK for free; and committed thousands of engineers to the drivers and libraries.

Wall Street did not buy it. The graphics business itself ran on thin margins, and burning hundreds of millions a year on a platform "scientists might use someday" struck many analysts as Huang's pet obsession. From the 2008 financial crisis through 2012, NVIDIA's stock languished in the single digits to the teens, with market cap rarely above $10 billion.

But university labs and national supercomputing centers got moving. Oak Ridge National Laboratory, Switzerland's CSCS, the Tokyo Institute of Technology built supercomputers around Tesla GPUs. CUDA rewrote molecular dynamics, seismic simulation, and financial pricing one field at a time. Most importantly, a marginal community of neural-network researchers also took notice.

## A Fated Encounter with Deep Learning

In 2009, **Andrew Ng (1976–)** of Stanford and his student Rajat Raina published *Large-scale Deep Unsupervised Learning using Graphics Processors*, training a deep belief network with hundreds of millions of parameters on two GeForce GTX 280s—**roughly 70 times faster than the CPU clusters of the day**. It was the first serious use of GPUs to train large-scale neural networks.

Three years later, in September 2012, **Geoffrey Hinton (1947–)**'s team at the University of Toronto shook the entire computer-vision world. **Alex Krizhevsky (1986–)** and Ilya Sutskever (later **Sutskever** of OpenAI) trained an eight-layer convolutional network—AlexNet—on **two GeForce GTX 580 gaming cards**, slashing the ImageNet error rate from the second-place 26.2% to 15.3%. The training code was Krizhevsky's hand-written cuda-convnet, line after line of CUDA C++ matrix multiplies.

In that moment, every researcher in vision, speech, and NLP understood the same fact: the future of algorithms ran on GPUs. And the only company in the world selling GPUs that could run deep learning was one.

## From Tesla to Blackwell: A Compute Ladder

After AlexNet, NVIDIA's data-center GPU line followed an almost arithmetic acceleration, each generation named after a physicist or astronomer:

- **Kepler** (2012): K20, K40—contemporaries of AlexNet, the first generation truly optimized for scientific computing.
- **Maxwell** (2014): a major lift in energy efficiency.
- **Pascal** (2016): the P100 introduced NVLink high-speed interconnect and half-precision (FP16) arithmetic, designed for deep learning.
- **Volta** (2017): the V100 first added Tensor Cores, hardware acceleration for matrix multiplies, and became the workhorse for early large models like GPT-2.
- **Ampere** (2020): the A100 extended Tensor Cores to TF32 and BF16 and lifted single-card memory from 40 GB to 80 GB, the absolute lead in the GPT-3 era.
- **Hopper** (2022): the H100 introduced the Transformer Engine, doubling training speed via FP8, the platform of choice for GPT-4, Claude, Gemini, and a generation of flagship models.
- **Blackwell** (2024): B100/B200 packaged two dies via 10 TB/s interconnect into one GPU, with single-chip AI compute 2.5x H100. The GB200 NVL72 rack tied 72 B200s together with copper NVLink into a single "virtual super-GPU."
- **Rubin** (2026): the next-generation architecture Huang announced at GTC, named for astronomer Vera Rubin, entering production in 2026.

Each generation arrived two to three years apart, while compute leapt by nearly an order of magnitude—a curve that has left Moore's Law behind. The industry calls it "Huang's Law."

## CUDA's Moat

The hardware is only the visible half. NVIDIA's truly fathomless asset is the software stack.

**cuDNN** (the deep neural network library) wraps convolutions, RNNs, and attention; **NCCL** handles collective communication across cards and machines; **TensorRT** compiles trained models into highly tuned inference engines; the **Triton Inference Server** manages deployment; **Megatron-LM** provides the parallel framework for training trillion-parameter models; **NeMo** customizes LLM training; **RAPIDS** lets data scientists run pandas and scikit-learn on GPUs.

The strength of this ecosystem lies in **time**. Nearly two decades of continuous investment from CUDA 1.0 in 2007 through 2026 have accumulated tens of thousands of open-source projects, millions of developers, and curricula at thousands of universities. PyTorch's primitives map almost one-to-one onto cuDNN calls; the same is true for TensorFlow, JAX, and MLX. Even as AMD's ROCm and Intel's OneAPI catch up at the hardware layer, replicating the software stack would still take a decade.

Competitors—Cerebras, Graphcore, SambaNova—have all tried to start over. None has shaken the CUDA ecosystem. By 2025, every AI paper published worldwide assumed by default that its code could be `pip install`ed and run on an NVIDIA GPU. That is the moat.

## The Large-Model Era: Cards Become Hard Currency

In November 2022, OpenAI launched ChatGPT. Within two months, every tech giant on Earth understood: whoever held more H100s could train bigger, better models.

From 2023 onward, the H100 became hard currency. OpenAI, Microsoft, Google, Meta, Anthropic, xAI, ByteDance, Alibaba, and Baidu placed orders that stretched two years out. A single H100 sold on the secondary market for over $40,000; rack-scale DGX H100 systems were chartered onto airplanes. Like petroleum at the dawn of the twentieth century, the chip became a strategic resource.

This frenzy showed up directly in the financials. NVIDIA's **fiscal year 2025** (ending January 2025, reflecting calendar 2024) booked **$130.5 billion in revenue, up 114% year-over-year**, with the data-center segment contributing about $115 billion—roughly an eightfold increase over fiscal 2023's $15 billion. Q4 of FY25 alone produced $35.6 billion in data-center revenue, up 93% year-over-year.

The market-cap curve was even steeper: about $150 billion in early 2020; $730 billion at the end of 2021; the first $1 trillion in June 2023; $2 trillion in February 2024, briefly surpassing Microsoft and Apple in June to become the world's most valuable company at $3 trillion; **the first $4 trillion company in human history in July 2025**; touching $5 trillion briefly in October 2025. By April 2026, NVIDIA's market cap stabilized at roughly $4.8 trillion, the most valuable enterprise in the world.

## The DeepSeek Shock and the CoWoS Bottleneck

Yet the myth has cracks.

From **2024**, the real bottleneck for AI chips globally ceased to be the GPU itself; it became TSMC's **CoWoS** (Chip-on-Wafer-on-Substrate) advanced packaging capacity. Both H100 and B200 require CoWoS to stack HBM high-bandwidth memory with the compute die. Worldwide CoWoS capacity hovered around 30,000 wafers per month, almost monopolized by NVIDIA, and became the hidden metronome for every AI delivery schedule.

The bigger blow came on **January 27, 2025**. The Chinese company DeepSeek released its R1 reasoning model, claiming it had been trained for roughly $6 million on about 2,000 H800s (the China-export version of the H100), at GPT-4 caliber. The day the news broke, NVIDIA's stock dropped **17%** in one session, erasing about **$589 billion in market cap—the largest single-day market-cap loss in U.S. history**. Wall Street asked seriously, for the first time: if models can be trained more efficiently, do we still need this many GPUs?

Huang's reply at GTC weeks later was direct: "Reasoning models need *more* compute, not less—because they think before they answer." The facts agreed. In the months after DeepSeek, B200 orders kept rising, the entire Blackwell line was sold out through **mid-2026**, with reported backlog above 3.6 million units.

## The Failed Arm Bid and a Reshaped Ambition

Before the large-model storm, NVIDIA had attempted to redraw the semiconductor map with a single mega-deal.

In September 2020, NVIDIA announced a $40 billion cash-and-stock acquisition of Arm, the British chip-design company whose CPU cores license to nearly every smartphone in the world—the largest deal in semiconductor history. The bid drew sweeping antitrust concern: Arm had been a neutral licensor to all comers (Apple, Qualcomm, Huawei included); would NVIDIA, as owner, favor itself? In February 2022, after combined opposition from the U.S. FTC, the European Commission, the UK CMA, and Chinese regulators, NVIDIA abandoned the deal and paid a $1.25 billion break fee to SoftBank.

The failure pushed NVIDIA toward designing its own CPU. The Grace CPU (a 72-core ARM-architecture server CPU) shipped in 2023, paired with Hopper as the **GH200 superchip**; the **GB200** of the Blackwell era binds one Grace and two B200s onto the same module, with NVLink-C2C providing 900 GB/s CPU-GPU interconnect—the standard form factor for training the largest models.

## From Hardware Vendor to Full-Stack AI Company

The NVIDIA of 2026 is far more than "a graphics card company."

**Nemotron family**: NVIDIA's open-weight LLM family, ranging from a few billion to over 300 billion parameters, intended to give customers high-quality base models they can deploy locally.

**Project GR00T**: a foundation-model project for humanoid robots announced at GTC March 2024, aiming to give humanoids a general brain on the order of what GPT was for dialogue. Figure, Agility, and Xpeng have integrated it.

**Omniverse**: a USD (Universal Scene Description)-based digital-twin platform for industry, used for factory simulation by BMW, Siemens, and Foxconn, and as a synthetic-data factory for robot training.

**DGX Cloud**: rents NVIDIA's own DGX supercomputers as a cloud service, bypassing the traditional cloud providers.

**NVIDIA AI Foundations**: full-stack services for enterprises customizing foundation models.

**Drive Thor**: an in-vehicle AI compute platform; BYD, Mercedes-Benz, and Jaguar Land Rover's next-generation smart cars run on it.

**Networking**: the 2019 acquisition of Mellanox for $6.9 billion brought InfiniBand and Spectrum Ethernet under one roof. Networking revenue crossed $10 billion in 2024, undergirding the interconnect of the entire AI Factory.

Huang calls this transformation the "AI Factory"—a data center is no longer just a stack of servers, but **a machine that produces intelligence**. NVIDIA's job is to provide nearly every component of that machine: chip, network, system, software, and model.

## A Chief Scientist and an Engineering Culture

Behind it all stands an exceptionally professional engineering team. Bill Dally, who joined as chief scientist in 2009, came from Stanford and is an authority in parallel computing and on-chip networks. NVIDIA Research, the lab he runs, holds steady at about 300 people working on forward-looking architecture—from optical interconnects to sparse computing, from low-precision training to chip-scale silicon photonics.

Huang's tenure is unusual in Silicon Valley. From the 1993 founding through 2026, he has served as CEO for over 33 years, one of the longest-running founder-CEOs of any Fortune 500 company. He is known for a high-intensity work ethic and a flat structure: he reportedly has more than sixty direct reports and conducts no traditional one-on-ones; major decisions are debated openly in email threads and stand-ups. His leather jacket, the GTC keynotes, the line "The more you buy, the more you save"—they have all become pop-culture symbols of the AI era.

## Historian's Note

::: tip Historian's Note
Watching NVIDIA's thirty-three years, three principles stand out.

**First, the long view.** From 2006 onward, CUDA went fifteen years without a buyer, and Huang did not stop. Once AlexNet appeared and the world realized the GPU was the engine of computation, NVIDIA already owned the market. This was no day's work, but the harvest of more than a decade of bet.

**Second, hardware and software together.** Many companies build chips. Some win on speed, some on efficiency. None have built an ecosystem. NVIDIA's victory rests half in Tensor Cores and half in cuDNN, NCCL, TensorRT, and dozens of other libraries. Its moat is built not of stone but of time and code.

**Third, riding the current.** From games to scientific computing, from scientific computing to deep learning, from deep learning to large models, from large models to embodied intelligence—at every turn, Huang had placed the bet three years before. He is no oracle; he is simply someone who was prepared and happened to be at the door.

But at every height there is a shadow. The DeepSeek episode erased $589 billion in market cap in a single day, reminding the world: compute is not a creed, and efficiency always returns. CoWoS as bottleneck shows that even the strongest company can be choked at the throat by a single production line. **The moat is deep; but the far bank has never truly been quiet.**
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at NVIDIA, used CUDA in your research, or trained your first neural network on a GeForce, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Jensen Huang, "NVIDIA Founder Story: From Denny's to the GPU Revolution," Stanford GSB talk, 2023.
2. Tae Kim, *The Nvidia Way: Jensen Huang and the Making of a Tech Giant*, W. W. Norton, 2024.
3. NVIDIA Corporation, *"NVIDIA Launches the World's First Graphics Processing Unit: GeForce 256,"* Press Release, Aug 31, 1999.
4. Ian Buck, *"GPU Computing with NVIDIA CUDA,"* SIGGRAPH Courses, 2007.
5. Rajat Raina, Anand Madhavan, Andrew Ng, *"Large-scale Deep Unsupervised Learning using Graphics Processors,"* ICML 2009.
6. Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton, *"ImageNet Classification with Deep Convolutional Neural Networks,"* NeurIPS 2012.
7. NVIDIA, *"NVIDIA Announces Financial Results for Fourth Quarter and Fiscal 2025,"* Feb 26, 2025.
8. Al Jazeera, *"Nvidia becomes first US company to reach $4 trillion market cap,"* Jul 9, 2025.
9. CNBC, *"Nvidia sheds almost $600 billion in market cap, biggest one-day loss in U.S. history,"* Jan 27, 2025.
10. Fortune, *"Jensen Huang says investors got it wrong over DeepSeek stock selloff,"* Feb 21, 2025.
11. NVIDIA, *"NVIDIA Blackwell Platform Arrives to Power a New Era of Computing,"* GTC Keynote, Mar 18, 2024.
12. Financial Times, *"Nvidia abandons $66bn Arm takeover bid,"* Feb 8, 2022.
