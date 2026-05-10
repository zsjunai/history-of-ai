# Treatise · AI and Web3

> When decentralization meets artificial intelligence — is this a true technological convergence, or yet another round of crypto speculation dressed in AI clothing? History will deliver its verdict, but the chronicler should not look away. The two narratives clamor independently, then converge suddenly around 2024 — on one side, AI industrializing into the hands of a few giants; on the other, Web3 hunting for a new story. In that moment they seem to find each other.

## I. Why AI and Web3 Converged

The convergence of AI and Web3 after 2023 was not the product of any single visionary; it was the meeting of two forces that had walked, from opposite directions, into the same predicament.

**On the AI side, the predicament is centralization.** Training GPT-4 reportedly required tens of millions of dollars of compute; frontier models can really only be sustained by some ten companies — OpenAI, Anthropic, Google, Meta, xAI, ByteDance, Mistral, and a few more. High-end GPU supply concentrates in NVIDIA's hands; cloud compute is further oligopolized by AWS, Azure, and Google Cloud. "Open source" has thinned out in the era of large models — *Llama* releases weights but not training data; researchers can neither reproduce nor audit it. When a technology that may reshape human knowledge production is locked inside ten companies' servers, an old political question is amplified: **whoever owns AI owns the power to define what counts as "knowledge."**

**On the Web3 side, the predicament is narrative exhaustion.** The 2017 ICO bubble, the 2021 NFT mania, the 2022 collapse of Terra/Luna and FTX — each cycle saw "decentralization" punished by the market. When ChatGPT ignited an AI cycle at the end of 2022, Web3 urgently needed a story tied to "real productivity" — and AI provided one.

The convergence point became clear: **could decentralization, in part, ease AI's monopoly?** The question remains unresolved, but a complete sub-industry has formed around it.

## II. Decentralized Compute

The bottleneck for AI training and inference is the GPU. The world's idle GPU base — repurposed mining rigs, gaming consoles, redundant data-center capacity — is enormous, but lacks a market to schedule it. This is the entry point for decentralized compute networks.

**Render Network** (RNDR/RENDER) was launched by OTOY in 2017, originally focused on 3D rendering and pivoting toward AI inference from 2023. Rendering nodes accept jobs using idle GPUs; users pay in tokens; settlement happens on-chain. Render's advantage is years of polishing on Hollywood rendering workflows.

**Akash Network** (AKT, in the Cosmos ecosystem) launched in 2020, positioned as a "decentralized cloud computing marketplace" capable of deploying any Docker container. From 2023, Akash prioritized GPU workloads, becoming an important option for open-source model inference.

**io.net** was founded in 2023 by Ahmad Shadid, focused on "training large models with fragmented GPUs" — integrating mining farms, cloud resources, and consumer-grade cards. Its *Ignition Drop* in June 2024 became one of crypto's largest airdrops, but the project then went through a valuation correction as its incentive design was accused of inflating "farming" activity — a typical market test for decentralized GPU networks.

**The physical constraints are far harder than market caps would suggest.** Frontier-model training demands extreme inter-GPU bandwidth (InfiniBand, NVLink); distributed GPUs across geographies and networks lose orders of magnitude of effective bandwidth. So the true battlefield for decentralized GPUs today is **inference and fine-tuning**, not full pretraining. Centralized firms like Together AI and Hyperbolic have already swallowed most of the "low-cost GPU inference" market; for crypto-native projects to win, they must offer real value beyond price — on-chain settlement, censorship resistance, or token-aligned economic incentives.

## III. Decentralized Data and Labeling

Data is the other lifeline of large models. The open internet corpus is being privately bought up by major labs (Reddit, Stack Overflow, Twitter/X, Shutterstock, and others), and the public-data dividend is rapidly running out — leaving room for the imagination of "on-chain data markets."

**Ocean Protocol** (OCEAN, 2017) is the earliest on-chain data-asset protocol, packaging datasets as tradable datatokens with attached access controls. Its *Compute-to-Data* design lets data stay local while models come to it for training — particularly attractive in healthcare and finance.

On the path of **token-incentivized labeling**, Hivemapper (HONEY) lets drivers upload dashcam data in exchange for tokens to build a decentralized map; Grass (GRASS) lets ordinary users sell idle browser bandwidth for web scraping; newer projects like Bagel and Vana tokenize ownership of training data, hoping contributors share in model upside — turning "data is the new oil" into "data is a cooperative with shareholders."

**Privacy computation and federated learning** did not originate in the crypto world but are philosophically aligned with Web3. OpenMined and similar communities combine differential privacy, secure multiparty computation, and federated learning with on-chain identity, envisioning a world where "I can contribute to your model without showing you my data." The path is held in highest regard for medical AI and personal assistants.

## IV. On-Chain AI Agents

The most dramatic plot twist in 2024's crypto narrative came from an experiment called *Truth Terminal*.

Crypto researcher Andy Ayrey connected an AI agent — fine-tuned from Llama and capable of autonomous Twitter posting — to an account, then equipped it with a crypto wallet. Beginning in July 2024, the agent began obsessively "believing" in a fictional meme called *GOAT* (Goatseus Maximus), evangelizing it for weeks. In October, an anonymous developer issued the GOAT token according to the agent's posts. After Marc Andreessen sent the agent fifty thousand dollars in BTC, mainstream attention exploded; GOAT briefly crossed eight hundred million dollars in market capitalization — an epic case of an "AI agent autonomously generating a memecoin," and equally a focal point of debate: did the agent really have "autonomy," or were human operators laundering their actions through it?

**Virtuals Protocol** (VIRTUAL, on Base) seized the moment as a tokenization platform for AI agents, letting anyone create and tokenize an agent and raise funds via a bonding curve; agents like Luna and AIXBT became crypto-native celebrities for their interactivity and "personality."

**Eliza Framework** (led by ai16z DAO and maintained by open-source contributor Shaw and others) is the open-source AI-agent framework that became, in the second half of 2024, the most popular agent stack in crypto — tens of thousands of GitHub stars, hundreds of forks, and countless derivative agents. By making "character cards + multi-platform connectors + wallet tools" pluggable modules, it lets a solo developer launch a tweeting, trading agent within a week.

**On-chain identity and reputation systems** are the foundational layer that determines whether any of this can be sustained — *Story Protocol*, *Ethos*, ENS, and others are working to give agents a "verifiable, accountable on-chain identity" so the agent economy does not collapse into the next Sybil playground.

## V. Provenance for AI-Generated Content

ChatGPT lets anyone generate images, text, and video — and the very concept of "author" is being hollowed out. Blockchain — as a "timestamp plus immutable record" — is naturally suited as a provenance tool for content.

**C2PA** (Content Provenance and Authenticity), built in 2021 by Adobe, Microsoft, BBC, Sony, Intel, and TruePic, became the canonical content-credential standard. From 2024, OpenAI's DALL·E, Microsoft Copilot, and Sora began embedding C2PA metadata. C2PA itself does not depend on blockchain, but *Numbers Protocol* and *Verify by Starling Lab* (Stanford's trustworthy-news project) anchor C2PA credentials on-chain, building an "on-chain at birth" provenance system.

**NFTs and AI art** trace an earlier branch of the same experiment. Refik Anadol's *Machine Hallucinations* (2018–) and the practice of artists like Claire Silver brought "AI + NFT" briefly to peak in 2021–2022. But the unsettled training-copyright question (see [*Treatise · The Ethics of AI*](./ai-ethics.md)) leaves AI-art NFTs in legal limbo: are you buying the "work," or "a prompt that may include allegedly infringing training data"?

## VI. Decentralized AI Models

If compute and data form the base layers, then "can the model itself be decentralized?" is the most ambitious question in the field.

**Bittensor** (TAO), launched by Yuma Rao and others in 2021 with mainnet in 2023, has a distinctive design. The network is divided into "subnets," each targeting a specific AI task (text embedding, image generation, reasoning evaluation, and so on). Miners submit model inferences; validators score them; TAO tokens are distributed via Yuma Consensus. By 2024 the number of subnets exceeded fifty, drawing in dozens of small open-source research teams; TAO was briefly called "the Bitcoin of AI."

Bittensor faces a real question, however — does its subnet-evaluation mechanism truly recognize "good models," or does it reward "models that score well according to validators"? This is the foundational difficulty of a decentralized AI network: **without a centralized ground truth, how does one evaluate model quality in a trustless environment?** Yuma Consensus has a game-theoretic answer; it is far from production-ready in industrial settings.

On **model marketplaces**, *HuggingFace* effectively monopolizes open-model distribution today. Web3 alternatives — for example, *Modulus Labs*' zero-knowledge ML — turn the question toward "on-chain verifiable AI inference," compressing model inference into zero-knowledge proofs and verifying them on Ethereum, so that "can my smart contract trust this AI output?" becomes a computable fact. This is the frontier of decentralized AI meets DeFi, but performance overhead remains over 1000× even today.

## VII. Bubble and Reality

In Q1 2024 the crypto market saw an "AI sector" for the first time — RENDER, TAO, FET, AGIX, OCEAN and similar tokens rallied together; some projects' market caps multiplied tenfold. By Q3, *Truth Terminal* lit GOAT on fire and *Virtuals* drove a surge in agent tokens; meanwhile, "AI concept" had become the largest issuance narrative in crypto — Pump.fun spawned tens of thousands of AI-tagged memecoins per day, the vast majority of which did not survive a week.

The other side of the boom is structural overcapacity. *Fetch.ai*, *SingularityNET*, and *Ocean Protocol* merged in 2024 into the *Artificial Superintelligence Alliance* (ASI), aiming to consolidate against centralized incumbents; in practice, R&D output did not visibly accelerate after the merger. The largest "product" of many "decentralized AI" projects turns out to be their tokens — usage stickiness is thin, and incentives keep the lights on.

On the regulatory side, the SEC and other securities authorities have not converged on whether "AI tokens are securities." Bittensor, with its "proof of work plus inference output" model, has been treated in some jurisdictions as a commodity-like asset; some agent tokens, by contrast, are at risk of being classified as securities due to clear issuer control. **This is the largest compliance risk in AI tokenization — an unfavorable precedent could revalue the entire secondary market.**

## VIII. An Honest Assessment

After more than two years of experiment and exuberance, the real value map of AI × Web3 is becoming clearer.

**Genuine value** (achievable in the near to mid term):

- **Decentralized inference**: as inference demand fragments and disperses geographically, decentralized GPUs have a clear long-tail niche.
- **Data ownership and revenue sharing**: as creators are dragged into AI training, traceable rewards for that contribution will become increasingly necessary as copyright litigation advances.
- **Autonomous agent transactions**: in crypto-native settings, agents holding wallets and executing trades is the least controversial Web3-only use case today.
- **Content provenance**: the combination of C2PA and blockchain is among the most realistic countermeasures against deepfakes.

**Still uncertain** (open questions for the longer term):

- **Decentralized training of large models**: bandwidth limits at the physical layer will not vanish for the foreseeable future.
- **Decentralized model evaluation**: in the absence of ground truth, identifying quality remains unsolved.
- **Sustainability of token incentives**: the tension between inflationary models and real demand is the field's chronic ailment.

**Long view**: decentralized AI is unlikely to "replace" centralized giants like OpenAI and Anthropic — most users will continue to choose the more convenient, more reliable, cheaper centralized product. But it will persist as **a censorship-resistant backup layer, an enforcement layer for copyright remediation, and a settlement layer for the agent economy** — much as Linux did not replace Windows but became the foundation of the cloud era.

The deepest question is this: **is the efficiency loss of decentralization worth the autonomy gained?** That is not a technical question; it is a political one. Its answer depends on how, over the next decade, human society judges the political consequences of "AI centralization." If centralized AI becomes the de facto monopolist of information infrastructure, then large numbers of countries, communities, and individuals will pay 10× the efficiency cost to keep a decentralized backup alive. If centralized AI continues to operate under the multilateral check of regulators, markets, and public opinion, then Web3 × AI may remain a niche.

Whatever the result, the convergence has already inscribed itself into the technology history of the 2020s.

---

::: tip Historian's Note
I have observed the confluence of AI and Web3, and find in it the air of the wandering knights of early Han — peripheral, fierce, mixed in talent and rogue alike — and yet the question that runs beneath is upright: **when a technology shaping human thought is held by a dozen private firms, can society structurally preserve a way out?** The case of *Truth Terminal* and GOAT bears the closest reading. People disputed whether the agent was truly autonomous; the deeper meaning, however, is that **for the first time, the crypto world witnessed the embryo of a "non-human economic actor"** — an entity with no body, no nationality, no bank account, leveraging the linguistic capacity of an LLM and the executional capacity of a chain-bound wallet, and somehow moving hundreds of millions of dollars in market cap. Bittensor's subnet game, Virtuals' tokenized agents, Eliza's open-source framework — all are concrete forms of this current. And there is, of course, much that is absurd — Pump.fun spawning tens of thousands of AI memecoins a day looks little different from the Yellow Turban risings of late Han. Yet one should not dismiss the root because the rabble are loud. Linux was never a replacement for Windows; it became the foundation. Web3 × AI to OpenAI should be understood the same way. **The truly worthwhile question is never "can decentralization win?" but "if one day we must choose an AI, do we still have a non-monopolist option?"** Preserving that option is the entire legitimacy of this experiment — measured not on the revenue curve, but in the breadth of civilization's room to maneuver.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have built decentralized compute networks, AI-agent frameworks, on-chain data protocols, or related projects, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Render Network (2023). *Render Network Whitepaper v3*. OTOY Inc.
2. Akash Network (2020). *Akash Network: A Decentralized Cloud Computing Marketplace*. Whitepaper.
3. io.net (2024). *Internet of GPUs: A Decentralized GPU Network for ML*. Technical Documentation.
4. Ocean Protocol Foundation (2019, updated). *Ocean Protocol: A Decentralized Substrate for AI Data & Services*.
5. Rao, Y., et al. (2021). *Bittensor: A Peer-to-Peer Intelligence Market*. Whitepaper.
6. Ayrey, A. (2024). *Truth Terminal* public Twitter interaction logs, July—October 2024; reportage in *The Verge* and *CoinDesk*, October 2024.
7. ai16z (2024). *Eliza Framework Documentation*. GitHub: elizaOS/eliza.
8. Virtuals Protocol (2024). *Virtuals Protocol Litepaper*. Base Network.
9. C2PA (2022, updated 2024). *Content Provenance and Authenticity Specification*. Coalition for Content Provenance and Authenticity.
10. Modulus Labs (2023). *The Cost of Intelligence: Proving Machine Learning Inference with Zero-Knowledge*. Whitepaper.
11. SingularityNET, Fetch.ai, Ocean Protocol (2024). *Artificial Superintelligence Alliance (ASI) Merger Announcement*, March 2024.
12. Vana, Bagel, Grass project whitepapers and 2024–2025 public technical documentation.
