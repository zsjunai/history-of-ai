# House · OpenAI

> A non-profit lab founded under an oath to "ensure AGI benefits all of humanity"—ten years later, an $850 billion AI empire. It is at once the most spectacular winner of this era and its most irreconcilable contradiction.

## A Non-profit Beginning (2015)

On December 11, 2015, in a San Francisco conference room, a charter of just a few pages was signed. The founders were among the most influential figures Silicon Valley had at that moment—**Sam Altman (1985–)**, then president of Y Combinator; Elon Musk, helmsman of Tesla and SpaceX; Greg Brockman, recently departed CTO of Stripe; and 29-year-old **Ilya Sutskever (1986–)**, who had left Google Brain to join a lab that did not yet exist.

The charter read almost like a vow: **"Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return."**

In a year when DeepMind had already been swallowed by Google and AI research was being quietly enclosed by a handful of tech giants, this sentence rang like a bell of dissent. The founding announcement listed eleven members—besides the four above, Trevor Blackwell, Vicki Cheung, Andrej Karpathy, John Schulman, Durk Kingma, Pamela Vagata, and Wojciech Zaremba. Most were under thirty-five, yet together they held some of the sharpest edges of deep learning and reinforcement learning research of the day.

The initial funding pledge was $1 billion—from Altman, Musk, Brockman, Peter Thiel, Reid Hoffman, Jessica Livingston, Amazon Web Services (AWS), Infosys, and others. The actual sum that arrived was far less than the pledge, but the figure "one billion dollars" alone was enough to make the world turn its head: in 2015, no AI research institution had begun at this scale.

OpenAI's first work was almost academic in spirit—publishing reinforcement learning papers, open-sourcing the Gym simulation environment, racing DeepMind's bots in Dota 2. It felt like a graduate school inside a Mission District warehouse, loose, open, with code attached to almost every result. There was no real business model yet, and no visible commercial ambition.

## Schism and Pivot (2018–2019)

In February 2018, Musk announced his departure from OpenAI's board. The official reason was to avoid conflicts of interest with Tesla's AI projects. Later reporting from multiple sources suggested a more complicated picture: Musk wanted to take over OpenAI directly, was rebuffed by other founders, believed the lab was falling behind Google, and proposed folding it into Tesla. The disagreement was unbridgeable. He left, taking most of his unfulfilled funding pledge with him. At the time it seemed unremarkable, but it planted the seed of the lawsuit Musk would file against OpenAI six years later.

Without his main backer, Altman faced a hard truth: training ever-larger models required ever more compute, and compute cost money. A pure non-profit could not sustain that level of capital demand.

In March 2019, OpenAI announced a structure that seemed self-contradictory—a **capped-profit company**. The original non-profit OpenAI Inc. became the controlling entity, and beneath it sat a subsidiary, OpenAI LP, that could take outside investment and grant equity to employees. Investors' returns were capped (reportedly at 100x principal at first); anything beyond would flow back to the non-profit parent in service of its mission.

Months later, Microsoft announced a $1 billion investment and signed an exclusive Azure cloud partnership. The deal reshaped OpenAI: it now had enterprise-grade compute and was deeply tied to a trillion-dollar tech giant. The banners of "open" and "non-profit" began to fade, while the gears of commercialization began to mesh.

## The GPT Ladder (2018–2022)

If structural reorganization marked OpenAI's commercial turn, the **GPT series** was its technical spine.

The story begins with a young researcher who held no doctorate—**Alec Radford (1991–)**. In June 2018 he was first author on a paper titled *Improving Language Understanding by Generative Pre-Training*, the first to stack Transformer decoders for unsupervised language modeling, then fine-tune on downstream tasks. This was GPT-1. The paper was not striking, but it hinted at a path: **a language model can learn the world first, then learn the task.**

In February 2019, GPT-2 arrived with 1.5 billion parameters. It produced paragraphs fluent enough to be unsettling. OpenAI's blog said it was "concerned about misuse" and **released only the smaller versions, withholding the full weights**. The decision sparked fierce debate: some praised "responsible disclosure"; others mocked it as "fear-mongering as marketing." Half a year later OpenAI rolled out larger versions in stages; the dreaded misuse never materialized, but the word "open-source" began quietly leaving OpenAI's vocabulary.

In May 2020, the GPT-3 paper appeared with **Tom Brown (1990–)** as first author and **Jared Kaplan (1986–)**, **Dario Amodei (1983–)**, and others among the collaborators. With 175 billion parameters, it was over a hundred times larger than GPT-2. Its title—"Language Models are Few-Shot Learners"—announced a shift in how researchers imagined language models: with no fine-tuning, just a few examples in the prompt, the model could generalize. The phenomenon was named **in-context learning**. Later that year GPT-3 became available to developers via API, OpenAI's first product to generate meaningful revenue.

In early 2022, InstructGPT introduced **Reinforcement Learning from Human Feedback (RLHF)**: human labelers ranked model outputs, and reinforcement learning was applied to align the model. This piece of engineering ground the brilliant but moody parrot of GPT into a willing assistant. It was the real technical prerequisite for ChatGPT.

## The ChatGPT Moment (2022)

On November 30, 2022, Altman posted a brief tweet—OpenAI had launched a conversational AI called **ChatGPT**, built on GPT-3.5. There was no event, no advertising; internally it was framed as a "low-key research preview." Several former employees recall how conservative the company's expectations were. Some bet that user counts would plateau in the tens of thousands within a week.

The result was on another scale entirely: **one million users in five days, one hundred million in two months**—the fastest-spreading consumer product in human history. The previous record holder, TikTok, had taken nine months; Instagram, two and a half years.

ChatGPT's magic was not in any single new technique. The real breakthrough was the form of interaction. An ordinary person needed no API key, no documentation—they opened a browser and held a conversation with a system that could discuss philosophy, write code, edit emails. In that moment, large models stopped being an industry topic and became something everyone could touch in their kitchens, classrooms, and offices.

On March 14, 2023, GPT-4 was released. It supported multimodal input (it could read images) and approached or surpassed human candidates on many professional exams—it scored in the top 10% on the U.S. bar exam. Training cost was estimated at over $100 million; OpenAI never disclosed parameter counts. From this point, "frontier model" entered public discourse, with OpenAI as the absolute pacesetter on that line.

## The Microsoft Entanglement

In January 2023, Microsoft announced an additional investment, reportedly close to $10 billion, with cumulative commitments through the partnership reaching about $13 billion. In return, Microsoft received roughly 27% of OpenAI's economic interest, exclusive Azure compute provisioning, priority commercialization rights to OpenAI's API, and deep model integration across Bing, Copilot, and Office.

It was one of the most structurally complex partnerships in Silicon Valley history. Microsoft held no board seat, but through capital and compute it had a hand on OpenAI's lifeline. OpenAI kept nominal independence yet handed Microsoft the rope of "unbounded compute demand." **Each side could not live without the other, and neither could fully trust the other**—this is the footnote to every chapter that followed.

Through 2024 and 2025 the rope began to loosen. OpenAI's compute appetite outgrew any single cloud's capacity, and Microsoft's own AI strategy required outside model sourcing. In October 2025, the two signed a new agreement: Microsoft's exclusivity on OpenAI compute was lifted, and OpenAI was free to work with other clouds. In exchange, OpenAI committed to roughly $250 billion in future Azure purchases. That same month, OpenAI signed a $38 billion compute deal with Amazon, marking the end of the "Microsoft-only" era.

## The 2023 Boardroom Coup

Around noon Pacific Time on Friday, November 17, 2023, OpenAI's board issued a statement that shook the global tech world: **CEO Sam Altman had been removed from his role**, on the grounds that he was "not consistently candid in his communications with the board." President Brockman resigned the same day. CTO Mira Murati was named interim CEO; two days later she was replaced by former Twitch CEO Emmett Shear.

The story turned vertiginous over the next 72 hours. On November 20, Microsoft announced it had hired Altman and Brockman to lead a new AI research division. The same day, nearly 800 OpenAI employees signed an open letter demanding the board's resignation and Altman's reinstatement, threatening a mass exodus to Microsoft. Among the signatories was **board member Sutskever himself**—who posted publicly on X: "I deeply regret my participation in the board's actions."

Late on November 21, an agreement was reached. Altman returned. A new board was formed, chaired by Salesforce co-CEO Bret Taylor, joined by former Treasury Secretary and Harvard president Larry Summers; from the prior board only Quora CEO Adam D'Angelo remained. Nearly all the directors who had moved against Altman were out.

The crisis lasted only **five days**, and the world came to call it "the OpenAI coup." Multiple accounts trace its root to a split over AI safety—Sutskever and several independent directors worried that Altman's pace of commercialization was too aggressive and his disclosures to the board too thin; employees, investors, and Microsoft stood with Altman. After the dust settled, the voice of AI safety inside OpenAI shrank sharply, and **the rift between the "safety camp" and the "acceleration camp" was exposed to the world**, never truly to heal.

## Diaspora of Core Talent (2024–2025)

The coup did not topple Altman, but it set in motion a slow exodus.

**May 2024**: Sutskever formally left OpenAI. Departing alongside him was Jan Leike, co-lead of the Superalignment team, who wrote bluntly on X: **"Safety culture and processes have taken a backseat to shiny products."** Sutskever soon founded Safe Superintelligence Inc. (SSI) in Israel, focused on "one thing only—safe superintelligence." Leike joined Anthropic, founded by ex-OpenAI colleagues.

**August 2024**: co-founder John Schulman, a leader of OpenAI's reinforcement learning research, left for Anthropic.

**September 25, 2024**: CTO Mira Murati—the public face of the ChatGPT and GPT-4 launches, briefly named interim CEO during the coup—announced her departure. The same day, VP of research Bob McGrew and researcher Barret Zoph also left. Murati went on to found Thinking Machines Lab, briefly the most-watched new startup in Silicon Valley.

Earlier still, in **2021**, Amodei, his sister Daniela, Brown, Kaplan, and over a dozen colleagues had departed together to found Anthropic—a departure later read as the first formal schism along the line of AI safety. Karpathy had also briefly returned to OpenAI in 2017 before leaving again in 2022 to found Eureka Labs.

By the end of 2025, **of the eleven founders named in 2015, only Altman, Brockman, and Zaremba remained at OpenAI**. An institution named for openness had grown unrecognizable in its core team a decade later.

## From Capped Profit to Public Benefit Corporation (2025)

The pressure of commercialization kept rewriting the structure itself. Through 2024 and 2025, OpenAI repeatedly considered abandoning the capped-profit form for a more conventional corporate shape. Opponents included Musk, who in 2024 sued the company alleging betrayal of its founding non-profit pledge, alongside some former employees and AI safety advocates.

The compromise landed on **October 28, 2025**: OpenAI completed its restructuring. The for-profit subsidiary became a **Public Benefit Corporation (PBC)**, renamed **OpenAI Group PBC**. The non-profit parent was renamed **OpenAI Foundation** and retained control of the PBC—including the power to appoint and remove directors and ensure mission alignment. The Foundation held about 26% of the PBC's economic interest; Microsoft held about 27%.

This was not a mere rebranding. PBC structure legally requires a company to balance shareholder returns with a stated public mission, but is no longer constrained by the original profit cap. The market widely read it as the key step paving the way for an eventual IPO.

## OpenAI Today (2025–2026)

By April 2026, OpenAI's numbers no longer occupy the same order of magnitude as five years ago:

- **Valuation**: in March 2026 a new round raised $12.2 billion (with some disclosures showing cumulative commitments at the $122 billion level), at a post-money valuation of **$852 billion**, led by SoftBank, a16z, and T. Rowe Price, with Amazon, NVIDIA, and Microsoft participating.
- **Revenue**: annualized revenue crossed $25 billion in February 2026, still climbing rapidly from $21.4 billion at the end of 2025.
- **Employees**: roughly 7,700, nearly twentyfold the fewer-than-400 staff at ChatGPT's launch in 2022.
- **Cumulative funding**: roughly $180 billion across 12 rounds and 69 investors.

The product line has long since outgrown "GPT + ChatGPT":

- **GPT-5** (released August 7, 2025) uses a "unified system + real-time routing" design, automatically switching between a standard model and a deep reasoning model (GPT-5 thinking) based on problem complexity. It set new records on multiple benchmarks—94.6% on AIME 2025 mathematics without tools, and 74.9% on SWE-bench Verified for code.
- **The o-series reasoning models**: o1 went GA and o3 was previewed in December 2024; o3/o4-mini launched in April 2025; o3-pro arrived in June 2025. The line trades think-time for accuracy, opening another product quadrant.
- **Sora 2** (September 30, 2025) pushed video generation from "stunning clip" to "sustained creation," released alongside a standalone iOS app.
- **SearchGPT / ChatGPT Search**: rolled in across 2024, taking direct aim at Google's core search market.
- **Agent, Canvas, Voice, Deep Research**: a dense series of new capabilities for enterprises and developers shipped in 2025.

A research lab once known mainly for papers and open-source code is now a commercial leviathan with the world's largest AI consumer product, the priciest frontier models, and the most aggressive funding cadence in tech.

---

::: tip Historian's Note

**OpenAI's decade is a parable about original intent and scale.**

It was born under a vow to be "unconstrained by a need to generate financial return" and ten years later stood at the IPO gate with an $852 billion valuation. It was named for openness, yet its model weights are now almost entirely closed. Its chief scientist had been the firmest member of the acceleration camp, and in the end left in the name of "safety first" to found a company devoted only to superintelligence. Each turn seemed forced by reality—compute costs money, money requires investors, investors require returns, returns require commercialization, and commercialization requires more models, faster cycles, fewer constraints.

But to write this history merely as "ideals defeated by capital" would be to miss its true weight. ChatGPT did move AI from the lab to every ordinary person's screen; each leap from GPT-4 to GPT-5, o3, and Sora 2 has genuinely advanced the cognitive tools available to humanity. OpenAI's complexity lies precisely in this: it is **at once the origin of a faith, the scene of a betrayal, and the peak of a capability**—the three coexist and cannot be separated.

The historian's task is not to judge it as good or evil, but to record its contradiction faithfully: a research institute founded to save humanity has grown into one of the most expensive companies humanity has ever built. Future readers should see both its glow and its unanswered questions—**when "benefiting all of humanity" must be redeemed at an $852 billion valuation, where exactly are we headed?**

:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at OpenAI, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. OpenAI (2015). "Introducing OpenAI." OpenAI Blog, December 11, 2015.
2. OpenAI (2019). "OpenAI LP." OpenAI Blog, March 11, 2019. (Official statement on the capped-profit structure.)
3. Radford, A. et al. (2018). "Improving Language Understanding by Generative Pre-Training." OpenAI Technical Report.
4. Radford, A. et al. (2019). "Language Models are Unsupervised Multitask Learners." OpenAI Technical Report. (GPT-2 paper.)
5. Brown, T. et al. (2020). "Language Models are Few-Shot Learners." arXiv:2005.14165. (GPT-3 paper.)
6. Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." arXiv:2203.02155. (InstructGPT / RLHF.)
7. OpenAI (2022). "Introducing ChatGPT." OpenAI Blog, November 30, 2022.
8. OpenAI (2023). "GPT-4 Technical Report." arXiv:2303.08774.
9. Wikipedia. "Removal of Sam Altman from OpenAI." (Composite timeline and primary sources for the November 2023 events.)
10. OpenAI (2025). "Introducing GPT-5." OpenAI Blog, August 7, 2025.
11. OpenAI (2025). "Sora 2 is here." OpenAI Blog, September 30, 2025.
12. OpenAI (2025). "Evolving OpenAI's Structure." OpenAI Blog, October 28, 2025. (PBC transition.)
13. Microsoft & OpenAI (2025). "The next chapter of the Microsoft–OpenAI partnership." Microsoft Blog, October 28, 2025.
14. OpenAI (2026). "OpenAI raises $122 billion to accelerate the next phase of AI." OpenAI Blog, March 31, 2026.
15. Hao, K. (2023–2025). *The Atlantic* OpenAI investigative series (multiple).
16. Metz, C. (2021). *Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World*. Dutton.
