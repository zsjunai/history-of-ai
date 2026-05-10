# Treatise · AI Policy and Regulation

> A technology develops for seventy years before it is systematically regulated — this is rare in industrial history. When ChatGPT carried AI from research papers into a billion phones, governments around the world realized at almost the same moment: **if we do not legislate now, the rules will be written quietly by a handful of American companies.** This chapter records that belated, fractured, still-violently-swinging global race to regulate.

## I. The Regulatory Vacuum: Three Decades of Faith in "General-Purpose Computational Freedom"

In 1996, John Perry Barlow stood in Davos and proclaimed, in *A Declaration of the Independence of Cyberspace*: "**You have no sovereignty where we gather.**" From then until the late 2010s, "the internet should be free from regulation" was treated as something close to consensus in Silicon Valley and Washington alike — Section 230 of the U.S. Communications Decency Act (1996) shielded platforms from liability for user content; the EU's E-Commerce Directive (2000) followed the same logic.

This faith in "general-purpose computational freedom" extended naturally to AI: a neural network was, after all, just code — running PyTorch was no different in kind from running Excel. So when deep learning erupted in the 2010s, almost no country had a dedicated AI law. Only after recommendation algorithms repeatedly produced controversies in elections, hiring, and credit did regulation begin to catch up — at least a decade late.

## II. The EU AI Act: The First Comprehensive Legislation

Europe chose to "legislate first, then iterate." In April 2021, the European Commission released its proposal for the *AI Act*, establishing a risk-tiered regulatory framework:

- **Unacceptable risk**: social scoring, real-time facial recognition in public spaces (with narrow law-enforcement exceptions), subliminal manipulation — banned outright;
- **High risk**: education assessment, hiring, credit, critical infrastructure, justice, migration — subject to strict compliance, documentation, and oversight;
- **Limited risk**: chatbots and the like — must disclose to users that they are interacting with AI;
- **Minimal risk**: game AI, spam filters — essentially unregulated.

ChatGPT's late-2022 debut exposed the gap: the original proposal had no specific provisions for "general-purpose AI" (GPAI). After more than a year of negotiation, the European Parliament reached a provisional agreement in December 2023; Parliament approved the text in March 2024, the Council adopted it in May, and it formally entered into force in August. The GPAI provisions impose additional obligations (systemic-risk evaluation, adversarial testing, cybersecurity reporting) on models trained with more than 10²⁵ FLOPs of compute. GPT-4, Claude 3.5, Gemini, and nearly every frontier model fall under it.

The cost of the European model is that many U.S. firms have chosen to delay launching new models in the EU first (Meta and Apple Intelligence both postponed in 2024) — and the debate over the "Brussels Effect" versus a "European tech island" began in earnest.

## III. The American Path: Executive Orders and Political Pendulums

The United States chose a nearly opposite path — primarily executive orders, voluntary commitments, and industry self-regulation, with legislation stalled in Congress.

On October 30, 2023, President Biden signed *Executive Order 14110: Safe, Secure, and Trustworthy AI* — the most systematic federal-level rule on AI in U.S. history. Its core provisions: any model trained with more than 10²⁶ FLOPs of compute (or 10²³ for biological models) must report to the Department of Commerce and undergo *red team* testing; NIST would set AI safety testing standards; each agency would appoint a *Chief AI Officer*; AI talent would be prioritized for immigration. The order was not legislation, but for two years it became the de facto guideline for federal agencies.

On January 20, 2025, Donald Trump signed an order on his first day in office rescinding EO 14110, declaring it "stifled innovation." Three days later he issued *EO 14179: Removing Barriers to American Leadership in AI*, calling for an *AI Action Plan* within 180 days. The *AI Action Plan*, released in July 2025, advocated an "accelerationist" line — loosening federal oversight, fast-tracking data-center permits, and pre-empting "over-regulation" at the state level (such as California's SB 1047) through federal supremacy. Two administrations, in the span of two years, almost completely reversed the direction of AI regulation. **This is the extreme expression of regulatory volatility under the U.S. system.**

State-level regulation has fragmented. California's *SB 1047* (vetoed by Governor Newsom in September 2024); the *Colorado AI Act* (signed in May 2024, effective 2026); New York City's *Local Law 144* on automated hiring audits (2023, effective); and dozens of other laws now operate in parallel — a contemporary echo of the long state-to-federal struggle over nineteenth-century railroad regulation.

## IV. The Chinese Path: Sector-Specific, Fast Cadence, Strong Enforcement

China has followed a third model — rapid, sector-specific legislation, with a dedicated regulation for almost every AI application area.

- March 2022: the *Provisions on the Administration of Algorithmic Recommendations for Internet Information Services* enter into force, establishing an algorithm-filing regime that holds platforms accountable for their recommendation mechanisms.
- December 2022: the *Provisions on the Administration of Deep Synthesis Internet Information Services* (effective January 2023) impose, for the first time, conspicuous-labeling and filing requirements on "deep synthesis" content (including deepfakes and AI-generated outputs).
- July 2023: the Cyberspace Administration of China (CAC), together with six other ministries (NDRC, Ministry of Education, Ministry of Science and Technology, and others), issued the *Interim Measures for the Administration of Generative Artificial Intelligence Services* (effective August 2023) — the world's first national legislation specifically for generative AI.
- 2024–2025: the *Measures for the Identification of AI-Generated and Synthetic Content* (effective September 2025) require mandatory marking of AI-generated content, including both visible watermarks and embedded metadata.
- From 2025 onward, drafts of an *Artificial Intelligence Law* repeatedly entered the legislative agenda, aiming to consolidate the patchwork of ministerial regulations.

The signature features of the Chinese model are **top-down, densely iterated, and strong on enforcement — only months from regulation to deployment**. The cost: regulation tilts toward "content compliance" and "value alignment," giving relatively less weight to algorithmic discrimination, data provenance, training-copyright, and individual remedies — areas treated more as industrial guidance than user redress.

## V. Export Controls: Chips and the Geopolitics of AI

Regulation is not only domestic; it is also a tool of national security. On October 7, 2022, the U.S. Department of Commerce's Bureau of Industry and Security (BIS) issued export controls on advanced AI chips bound for China — banning the export of NVIDIA A100, H100, and equivalent GPUs. It was the largest single-country control imposed on a civilian technology since the Cold War.

The October 2023 update lowered the performance thresholds further, closing the loopholes that had allowed NVIDIA's China-only A800 and H800. On January 13, 2025, in the final week of the Biden administration, the *AI Diffusion Rule* (Framework for AI Diffusion) divided the world into three tiers, each with its own compute quota. Silicon Valley pushed back publicly: NVIDIA, Microsoft, and Oracle all opposed the rule. On May 13, 2025, the Trump administration formally rescinded the Diffusion Rule, citing "harm to U.S. industry and alienation of allies," while keeping the core controls on China.

The export war accelerated the maturation of China's domestic supply chain — Huawei Ascend, Cambricon, Enflame, Moore Threads all moved into the front rank — and produced a "compute spillover" toward Southeast Asia and the Middle East (notably the UAE's G42 and Saudi Arabia's HUMAIN), making them new AI compute hubs. **The side effects of regulation sometimes outlast the regulation itself.**

## VI. Industry Self-Regulation: The Frontier Model Forum and the Seoul Commitments

In the gap left by absent government regulation, the frontier companies organized themselves.

In July 2023, **Sam Altman**'s OpenAI, **Dario Amodei**'s Anthropic, Google, and Microsoft jointly launched the *Frontier Model Forum* (FMF), pledging to coordinate on frontier AI safety research, share best practices, and engage public policy. That same month, the seven leading U.S. AI companies signed the *Voluntary AI Commitments* at the White House — eight pledges on red-teaming, model watermarking, and vulnerability disclosure.

At the Seoul AI Summit in May 2024, the signatory base widened to sixteen frontier AI firms worldwide (including China's Zhipu, the UAE's G42, and Samsung) through the *Seoul Frontier AI Safety Commitments*: each company would publish a "frontier safety strategy," define "unacceptable risk thresholds," and pledge to halt deployment if those thresholds were reached. This was the first international commitment in industry history to "voluntary self-restriction."

But the limits of self-regulation are no less obvious — the FMF has no binding force, no enforcement mechanism, and its members hold the dual power to define both "what is safe" and "what is frontier." **Self-regulation can only be a complement to regulation, never a substitute.**

## VII. International Governance: the UN and the G7

In October 2023, UN Secretary-General António Guterres convened the High-level Advisory Body on AI (HLAB-AI), composed of 39 experts from 33 countries. In 2024, it released its final report, *Governing AI for Humanity*, recommending that the UN establish an *International Scientific Panel on AI* (modeled after the IPCC) and a *Global AI Capacity Development Network*. In September 2024, the UN General Assembly adopted the *Global Digital Compact*, bringing AI governance into the shared agenda of sovereign states for the first time.

In a parallel track, the G7 launched the *Hiroshima AI Process* at its May 2023 summit, releasing in October that year an "International Code of Conduct" — the first G7-framework guidance for AI developers. In May 2024, this was upgraded to the *Hiroshima AI Process Friends Group*, joined by India, Brazil, Singapore, and roughly fifty other countries plus the EU.

The Bletchley–Seoul–Paris series (see [*Treatise · AI Safety and Alignment*](./ai-safety.md)), running in parallel with the UN, the G7, and the OECD's 2019 *AI Principles*, forms the "multipolar" architecture of AI governance in the 2020s. **No single forum can command the world, but together they form a loose, global net.**

## VIII. Side Effects: Arbitrage, Light Touch, and Sandboxes

Once regulation actually lands, it creates its own opposing force — regulatory arbitrage.

California's *SB 1047* is the most dramatic case. The bill required frontier models with training costs above one hundred million dollars to implement kill switches, third-party audits, and clear liability allocation. **Geoffrey Hinton**, **Yoshua Bengio**, and Elon Musk supported it; **Yann LeCun**, **Andrew Ng**, a16z, Meta, and OpenAI opposed it. On September 29, 2024, Governor Newsom vetoed the bill on the grounds that it was "not based on actual model capabilities and might choke the open-source ecosystem." The veto was hailed by accelerationists as a major victory and lamented by safetyists as a major setback — the same bill, two opposing readings.

The United Kingdom chose a sharply different path. Its 2023 *AI Regulation White Paper* explicitly rejected dedicated legislation, asking existing regulators (CMA, ICO, Ofcom, etc.) to act under their current mandates — labeled the "pro-innovation, light-touch" approach. From 2024, while AISI evaluated frontier models, the UK held back on legislation, drawing many U.S. AI companies to set up European headquarters in London — a sharp contrast with Brussels.

Singapore developed a "regulatory sandbox" model: the *AI Verify Foundation* (2023) provides testing tools and certification, with companies opting in voluntarily and the government observing. Japan took a similar "soft law" line and amended Article 30-4 of its Copyright Act to permit "non-enjoyment" use of copyrighted works for AI training — making Japan the developer-friendliest jurisdiction for training-data compliance.

## Open Questions

By 2026, AI regulation worldwide had moved from "none" to "many" — OECD data tracks more than seventy countries and over a thousand policy initiatives. **But many is not the same as one.** Europe weighs rights heavily, the U.S. swings between safety and acceleration, China focuses on enforcement and content, the UK and Singapore bet on light touch, and many developing nations have not yet begun. Each jurisdiction has answered differently the question of whether AI should be regulated as a "dangerous good," as "infrastructure," or as a "knowledge product."

The deeper question is this: **can regulation actually keep pace with technology?** OpenAI took roughly a year to train GPT-4, while the *AI Act* took three years from proposal to entry into force; EO 14110 took fifteen months from signing to repeal. When legislation moves in years and technology moves in months, **all regulation is chasing an accelerating target.**

---

::: tip Historian's Note
I have observed a decade of global AI regulation as one observes the Warring States preceding Qin and Han — the EU governs by law, the Americas by executive order, China by sectoral rule, Britain by reserve, Singapore by sandbox. Each holds to its own method, each refuses to yield, and yet behind every method lies one shared question: **who shall define the boundaries of this technological revolution?** The most striking irony is that the same Executive Order 14110, signed by Biden in 2023, was rescinded by Trump in 2025; the same *AI Diffusion Rule*, issued in January 2025 and rescinded in May, lasted but fifteen months. Such reversals testify to the structural instability of AI regulation under democratic systems — not because regulators are foolish, but because the political effects of AI have become so deeply entangled with industrial policy, geopolitical rivalry, and ideology that every transfer of power triggers a reset. China's pace is fast and its enforcement firm, but at a different price — speed traded for thoroughness, unity for plurality. The veto of SB 1047 was emblematic — both the safety camp and the acceleration camp claimed reason was on their side. The deeper question may be: **when a technology moves ten times faster than legislation, is regulation destined to be little more than after-the-fact patching?** The Brussels Effect, the Washington pendulum, Beijing's iteration, London's caution — these are different responses to the same dilemma. What will, in the end, contribute to the governance of twenty-first-century AI may not be the legislation of any single country, but the gradual mutual calibration of these experiences across international fora — the United Nations, the G7, and the Bletchley–Seoul–Paris sequence. The difficulty of regulation has never been in writing the rule; it is in keeping the rule abreast of the age.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have participated in the EU AI Act, U.S. AI executive orders, China's generative AI rules, the Bletchley Summit, or other policy processes, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. European Parliament & Council (2024). *Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act)*. Official Journal of the European Union, July 12, 2024.
2. The White House (2023). *Executive Order 14110: Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence*. October 30, 2023.
3. The White House (2025). *Executive Order 14179: Removing Barriers to American Leadership in Artificial Intelligence*. January 23, 2025.
4. The White House (2025). *America's AI Action Plan*. July 23, 2025.
5. Cyberspace Administration of China (2023). *Interim Measures for the Administration of Generative Artificial Intelligence Services*. Issued July 13, 2023; effective August 15, 2023.
6. Cyberspace Administration of China (2025). *Measures for the Identification of AI-Generated and Synthetic Content*. Issued March 14, 2025; effective September 1, 2025.
7. U.S. Bureau of Industry and Security (2022, 2023, 2025). Export Administration Regulations on Advanced Computing and Semiconductor Manufacturing Items, October 2022, October 2023, January 2025 (Diffusion Rule), May 2025 (rescission).
8. UK Government (2023). *The Bletchley Declaration by Countries Attending the AI Safety Summit*, November 1-2, 2023.
9. Frontier Model Forum (2023). Founding announcement and statement of purpose, July 26, 2023.
10. Republic of Korea & UK (2024). *Seoul Frontier AI Safety Commitments*, May 21-22, 2024.
11. United Nations High-Level Advisory Body on AI (2024). *Governing AI for Humanity: Final Report*. United Nations.
12. California State Legislature (2024). *SB-1047: Safe and Secure Innovation for Frontier Artificial Intelligence Models Act* and Governor Newsom's veto message, September 29, 2024.
