# House · Mistral AI

> Three young French founders in Paris turned down Silicon Valley's script. With open weights and European capital, they would write a chapter of the large-model era that belonged to the Old World.

## Rebellion in Paris

April 28, 2023, in a temporary office in Paris's 9th arrondissement, three French men around thirty pressed the button to register a company. The CEO was Arthur Mensch, 30—undergraduate at École Polytechnique, master's at École Normale Supérieure, doctorate at Paris-Saclay, and former DeepMind Paris researcher whose name appears in the credits of the *Chinchilla* paper. The CTO was Guillaume Lample, first author of the LLaMA paper. The third co-founder, Timothée Lacroix, also came from Meta FAIR Paris and was a LLaMA collaborator.

Their CVs read off the same single sheet: École Polytechnique alumni, trained at Meta FAIR Paris or DeepMind, central to or participants in the two most important open-source large-model labs on the European continent. When LLaMA was released to "research" partners inside Meta in February 2023, leaked to 4chan, and ignited the open-source ecosystem, these three were sitting in the Meta Paris office. They saw a fact: **Europe lacks its own OpenAI, but Europe does not lack the people who trained LLaMA**.

What pushed the three to leave was a chain of events in early 2023—ChatGPT MAUs crossing 100 million in two months, Microsoft's additional $10 billion to OpenAI, Google's hasty Bard, and Europe's near-total absence at the most important technical pivot of the decade. Mensch later told *Le Monde*: "I thought, if we don't do this, Europe will forever be a consumer of AI, not a producer." He and Lample met at a Paris café and agreed in 45 minutes: resign, return to Europe, raise capital, build open-source large models.

The official mission at founding is minimal: "frontier AI that is open and accessible to all." The name "Mistral" comes from the strong mountain wind that blows north to south across southern France—a force sweeping from Europe's southern edge.

## A €1 Billion Valuation in Four Weeks

On June 13, 2023, four weeks into existence, Mistral closed a €105 million seed round at a €240 million valuation—the largest seed round in European tech history at the time. Lightspeed Venture Partners led; Xavier Niel (founder of French telecom Iliad), Rodolphe Saadé (chairman of CMA CGM), Eric Schmidt (former Google CEO), and others followed.

The frenzy among European capital was not only about CVs. In early 2023 the EU was reviewing the AI Act, and the French government had publicly stated it wanted to "avoid Europe becoming a digital colony of American AI giants." President Emmanuel Macron met Mensch personally and elevated Mistral into the position of "France's AI national team." French Minister for Digital Affairs Jean-Noël Barrot publicly used "our OpenAI" to describe a company barely six months old.

The fundraising itself was dramatic. According to *Sifted*, Mensch closed his roadshow in under two weeks in May 2023, carrying a slide deck. Each pitch ran 30 minutes. The recurring core arguments were two: "Lample and I trained LLaMA—we know how to reach GPT-3.5 caliber," and "Europe must have its own frontier model." Lightspeed partner Antoine Moyroud's due-diligence memo opens with one sentence: "This team can build a frontier model. The rest is execution."

From its first day, Mistral has worn two hats—a startup and a flag of European AI sovereignty.

In the same week as the announcement, at a Paris press conference, Mensch answered a reporter with a line widely quoted since: "We do not need to beat OpenAI; we only need to ensure that Europe is not decided by OpenAI." The line has since become Mistral's unofficial slogan, written on the wall of its Paris office.

## The Standard-Bearer of Open Source

On September 27, 2023, Mistral released its first model, **Mistral 7B**, under Apache 2.0 with weights fully open. The release post was a few lines of text and a magnetic torrent link—an echo of 1990s hacker romance. The team later said they wanted to test a minimalist release path beyond Hugging Face. The torrent has since been quoted often as "engineerly elegant."

Mistral 7B's report card was strong enough to make the LLaMA camp turn its head: **outperforming Llama 2 13B on most standard benchmarks and approaching Llama 2 34B on some**, at half or even a quarter of their parameter counts. The architecture introduced grouped-query attention (GQA) and sliding window attention (SWA), making it both fast and economical. SWA let a 7B model handle 32K context with linear memory—a first at this size in open-source.

Two months later, on December 8, 2023, the team dropped another bomb—**Mixtral 8x7B**, the first widely deployed open-source mixture-of-experts (MoE) model. Eight experts, two activated per inference, 46.7 billion total parameters with 12.9 billion active, performance matching or surpassing GPT-3.5 and Llama 2 70B on multiple benchmarks. Open-source MoE had been long discussed in academia and rarely landed in industry (Google's Switch Transformer existed only as paper). Mixtral made everyone realize: **MoE is not just a paper; it is a product**.

In that year Mistral leapt into the lead of open-source large models, forming a "twin star" alongside Meta's Llama family. On Hugging Face downloads, Mistral 7B derivatives at one point occupied six of the top ten slots; the community produced dozens of fine-tunes—Zephyr, OpenHermes, Dolphin, and more.

It is worth noting Mistral's engineering restraint. When the U.S. majors trained on tens of thousands of H100s, Mistral trained its 7B on a relatively small cluster—the team later disclosed roughly 200–300 H100-equivalent. They squeezed the dividends of "data quality plus architectural simplicity" to the limit. This "small team, small compute, big result" style made Mistral one of the most academically refreshing large-model companies of 2023.

## The Closed-Source Pivot and the Debate

Through 2024 the story grew more complicated.

On February 26, 2024, Mistral released its closed-source flagship **Mistral Large**, available only via API, performance comparable to GPT-4 and well ahead of Claude 2. The same day, the company announced a multi-year strategic partnership with Microsoft—Mistral Large would be the **second** frontier model on Azure beyond Azure OpenAI, with Microsoft taking a small equity stake (undisclosed, in the tens of millions of euros).

Europe's open-source community erupted. On one side, the founders had emphasized in the funding announcement that "open source is Mistral's soul." On the other, here was a closed-source flagship in exclusive partnership with an American cloud giant. On one side, EU taxpayers held an indirect stake through the European Investment Fund. On the other, MEPs publicly asked, "Are we raising a proxy for an American company?"

Mensch's reply was candid and pragmatic: a dual track of open research models and closed commercial models is the only sustainable path. Pure open-source cannot feed a 200-person team and training runs in the eight-figure euro range. Critics called it "open-washing." Supporters saw it as the necessary compromise that lets European AI escape the trap of pure ideology.

But the open-source line did not break. Through 2024 and 2025, Mistral kept releasing open weights, building a complete model family:

| Date | Model | Parameters | Use |
|------|------|------|------|
| 2024.4 | Mixtral 8x22B | 141B (39B active) | Flagship open-source MoE |
| 2024.5 | Codestral 22B | 22B | Coding |
| 2024.7 | Mathstral 7B / Mistral NeMo 12B | 7B / 12B | Math / general (with NVIDIA) |
| 2024.9 | Pixtral 12B | 12B | Multimodal vision |
| 2024.11 | Pixtral Large | 124B | Multimodal flagship |
| 2025.1 | Mistral Small 3 | 24B | Cost-efficient open-source |
| 2025.6 | Magistral Small | 24B | Reasoning model |

On the closed API side: Mistral Medium / Large / Large 2 (flagship), Mistral Saba (Arabic and South Asian languages), and Ministral 3B / 8B (on-device). The "frontier closed-source plus open-source mainstay" pairing serves enterprise paying customers and sustains the open-source community—the latter being Mistral's core differentiator against OpenAI and Anthropic.

The hybrid of **Apache 2.0** and **Mistral Research License** also became, after 2024, a paradigm for open-source large-model licensing. The former, free of additional terms, suits industrial deployment; the latter, requiring permission for commercial use, protects the core models. When other companies (Alibaba's Qwen, Google's Gemma) later released open models, their license design borrowed substantially from Mistral's dual-track approach.

## Le Chat and Productization

Models alone are not enough; Europe needed its own "ChatGPT."

In February 2024, Mistral launched its consumer product **Le Chat**—a French pun, "the cat" and "the chat." Free, web-based, search-enabled, aimed at francophone and continental European users. On February 6, 2025, Le Chat shipped on iOS and Android, and at a launch attended by President Macron the company announced "1,100 tokens per second response speed"—powered by Cerebras wafer-scale AI chips (WSE-3), 5–10x faster than GPU inference.

After the launch, Le Chat briefly topped the French App Store overall chart, with over a million downloads in two days. It was the first time Europe had an in-house large-model consumer product that could go arm-to-arm with ChatGPT, Claude, and Gemini. Beyond consumer, Mistral also offers **La Plateforme** (developer API platform) and **Mistral AI for Enterprise** (private deployment), the latter aimed at large enterprise customers like BNP Paribas, AXA, and SNCF, with "data does not leave Europe" as the headline pitch.

By the end of 2025, Le Chat MAUs surpassed 15 million, mostly from Europe and francophone Africa. Mistral also signed contracts with the French Ministry of Defense and the European Commission—markets OpenAI cannot reach due to U.S. ITAR export controls.

In France in 2025, bus stops, airport billboards, and metro ad slots carried Mistral and Le Chat posters—the first time in European history an AI company has advertised in public space like a consumer brand.

In the enterprise market, Mistral's pitch is more than technology. GDPR, the AI Act, and European data sovereignty—rules American majors saw as "friction"—became natural moats for Mistral. Many French, German, and Nordic enterprises' compliance teams accept only "model and data inside the EU" solutions, and Mistral is one of the few frontier large-model providers that fully meets that bar.

## From €1 Billion to €100+ Billion

| Date | Round | Amount | Valuation | Lead |
|------|------|------|------|------|
| June 2023 | Seed | €105M | €240M | Lightspeed |
| December 2023 | Series A | €385M | ~€2B | Andreessen Horowitz |
| June 2024 | Series B | €600M | ~€6B | General Catalyst |
| November 2025 | Series C | €1.7B | €11.7B | ASML (11% stake) |

Series C lead ASML—the Dutch lithography giant, the jewel of European tech—choosing to invest in an AI company was read by European media as "European industrial chain self-redemption." The €11.7 billion valuation puts Mistral in the global AI top tier, behind only OpenAI, Anthropic, xAI, and a few Chinese leaders. By the end of 2025, headcount was around 400, with annualized revenue in the hundreds of millions of euros.

Behind these numbers is a key fact: Mistral's capital sources differ sharply from OpenAI's and Anthropic's. The latter rely largely on U.S. cloud giants (Microsoft, Amazon, Google) trading "compute for equity"; Mistral's investors are mostly European industrial and strategic capital (ASML, CMA CGM, Iliad, the European Investment Bank). The structure may cap the upside on valuation, but it scores high on strategic independence.

## Europe, the U.S., and China: A Tripod

By early 2026, the global frontier large-model map has roughly settled:

- **U.S. camp**: OpenAI, Anthropic, Google DeepMind, xAI, Meta FAIR.
- **China camp**: DeepSeek, Alibaba's Tongyi Qianwen, ByteDance's Doubao, Zhipu GLM, Moonshot.
- **Europe camp**: Mistral holds the frontier pole almost single-handedly.

Mistral's existence has turned the EU's "AI sovereignty" from a slogan into a company with real compute, real models, and real users. It may not win—its training compute is still a fraction of the U.S. leaders, and Europe's capital depth cannot support OpenAI-class trillion-dollar valuations—but for the first time Europe has chips to bring to the large-model table. France's 2024 "Paris AI Action Summit" placed Mistral on a level with OpenAI and Anthropic.

On talent, Mistral is also reverse-magnetizing European researchers lost to the U.S.—Stanislas Polu (formerly OpenAI), Devendra Chaplot, Sophia Yang, and others have joined, sometimes giving up multiples of their Silicon Valley pay. France's "Choose France" tech-talent visa, paired with Mistral, has pushed return migration to its highest point since 2010.

Challenges remain. In the second half of 2025, rapid progress from Llama and DeepSeek pushed Mistral off the absolute top of open-source rankings; the company also experienced its first significant personnel changes—chief scientist Lample took a brief leave and returned, and some early engineers left to start their own companies. Mensch has expressed a similar judgment in many forums: Mistral's next phase is "not competing with OpenAI on size, but bringing AI into use together with Europe."

If 2023's Mistral was a flag chasing Silicon Valley, 2026's Mistral has become an ecosystem—around it, fine-tunes, inference engines (vLLM defaults to Mistral architecture support), European cloud providers (OVHcloud, Scaleway), and vertical landing partners constitute the first AI tech stack truly "in Europe, for Europe."

::: tip Historian's Note
Mistral is to European AI what Shang Yang was to Qin—on a small territory, in a few years, with two or three talents and one bet, carving out a road in the gap between two great powers. The art lies in "neither fully open nor fully closed": open source feeds reputation, gathers community, raises a flag; closed source feeds capital, keeps the company alive, secures survival. Such pragmatism is rare in European tech history—Europe has too often killed projects in pursuit of pure ideology. Mistral knows how to keep micro-tuning between the ideal and the real. Its limits are equally clear: a narrow European market, expensive compute, talent siphoned by the U.S.; Mensch's small team alone cannot truly take OpenAI head-on. But it has at least proved one thing: in an era of GPU oligopoly and open-source flood, a thirty-person startup can reach a hundred-billion valuation in three years—provided the founders hold the keys to LLaMA and Chinchilla. Mistral is Europe's love letter to the AI era, and its declaration of war.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Mistral AI or in its open-source community, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Jiang, A. Q., Sablayrolles, A., Mensch, A., et al. (2023). "Mistral 7B." *arXiv:2310.06825*.
2. Jiang, A. Q., et al. (2024). "Mixtral of Experts." *arXiv:2401.04088*.
3. Touvron, H., Lavril, T., Izacard, G., et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." *arXiv:2302.13971*.
4. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). "Training Compute-Optimal Large Language Models" (Chinchilla). *arXiv:2203.15556*.
5. Mistral AI. (2023, September 27). "Announcing Mistral 7B." Official blog post.
6. Mistral AI. (2024, February 26). "Au Large." Official announcement of Mistral Large and Microsoft partnership.
7. Reuters. (2023, June 13). "France's Mistral AI raises 105 million euros in record seed round."
8. Bloomberg. (2024, June 11). "Mistral AI Valued at $6.2 Billion in New Funding Round."
9. Financial Times. (2025, November 18). "ASML leads €1.7bn investment in Mistral AI at €11.7bn valuation."
10. The Verge. (2025, February 6). "Mistral's Le Chat hits #1 in French App Store after Macron-attended launch."
11. Politico Europe. (2024, March). "Inside Mistral's controversial pivot from open source."
12. European Commission. (2024). *AI Act final text*. Official Journal of the European Union.
