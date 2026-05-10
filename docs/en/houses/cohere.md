# House · Cohere

> A large-model company founded in Toronto by one of the co-authors of the Transformer paper—uninterested in consumer hits, focused on enterprise APIs and private deployments. The exemplar of the "pragmatist" line in the large-model era.

## Out of the Transformer Paper

On June 12, 2017, Google Brain published *Attention Is All You Need*. The paper carries eight authors; the last name on the list reads **Aidan N. Gomez**.

Aidan Gomez was barely in his twenties then, a University of Toronto undergraduate working as an intern at Google Brain. He took part in the implementation work for the Transformer paper and so became one of the youngest "original witnesses" of that technical revolution. Co-author Niki Parmar later put it: "Aidan codes extremely fast—the kind of person you give an idea to and the next day he hands you a working implementation."

Gomez's advisor at Toronto was **Geoffrey Hinton (1947–)**. By 2017, Hinton had shifted much of his attention to "capsule networks," but he remained the spiritual pole of the Toronto AI scene. In that environment Gomez completed a double academic lineage—Transformer author plus Hinton school.

In 2019 Gomez returned to Toronto and co-founded **Cohere** with his undergraduate classmate Ivan Zhang and Hinton-lineage alumnus Nick Frosst. None of them were yet thirty. None of them came out of North America's AI inner circle and wanted to head to Silicon Valley to join the next ChatGPT. They wanted something else: **to make Transformer—the weapon—a tool an enterprise could actually use**.

## Differentiated Positioning

From 2019 to 2022, the dominant AI startup script was "build a consumer-facing AI app"—OpenAI shipped ChatGPT, Anthropic shipped Claude, Inflection shipped Pi, Character.AI shipped role-play. Press attention, unicorn valuations, user-data flywheels—all concentrated on the consumer side.

Cohere refused that road. From day one the company emphasized three things internally:

First, **no consumer products**. No app, no chat UI, no influencer marketing.

Second, **enterprise only**. Customers in banking, insurance, law, healthcare, retail, telecom—industries with money, with data, sensitive to compliance, unable to use OpenAI's web-direct service.

Third, **support private deployment**. Model weights downloadable, runnable inside the customer's own VPC, on-prem data center, even at edge nodes—a sharp contrast to OpenAI's "must call cloud API" architecture.

This playbook felt unsexy from 2020 to 2022, but with the post-2023 large-model boom it began to show its value. Every finance, healthcare, and government customer was asking, "Can we self-host GPT-4?" and OpenAI's answer was always "no." Cohere's answer was, "That is exactly what we do."

## Three Product Lines: Embed, Command, Rerank

Cohere's product matrix runs along the **Retrieval-Augmented Generation (RAG)** front.

**The Embed series**—text embedding models that map any text into high-dimensional vectors. Through 2022–2024, with vector databases (Pinecone, Weaviate, Milvus, pgvector) on the rise, Cohere Embed v2 / v3 became among the most consistently high-quality commercial embedding models. Embed v3, released in 2024, has held the top tier on the multilingual MTEB benchmark for an extended period.

**The Command series**—generative language models, Cohere's flagship. Command launched in early 2023; **Command R** in March 2024; **Command R+** in April 2024 with 104 billion parameters, native RAG citations, and support for ten major business languages. The Command R series is distinctive in one respect: **the weights are open-sourced under a non-commercial research license**, downloadable on Hugging Face Hub. It opens a middle path between the closed-source camp (GPT, Claude, Gemini) and the fully open-source camp (Llama, Mistral).

**Rerank API**—a retrieval-results reranking model that, paired with Embed, lifts the precision of RAG pipelines to production-grade. Rerank is Cohere's hidden ace—many customers run their main model on GPT-4 or Claude, but use Cohere Rerank in retrieval.

Together, the trio gives Cohere a distinct moat in the most important enterprise AI use case: RAG.

## Cohere For AI and the Aya Multilingual Models

In 2022, Cohere founded an independent non-profit research arm, **Cohere For AI** (C4AI), led by former Google Brain researcher Sara Hooker. C4AI's positioning is "open research and inclusive recruitment"—it deliberately includes researchers from Africa, Latin America, Southeast Asia, and Eastern Europe, against AI research's concentration in a small US-Toronto-London circle.

On February 13, 2024, C4AI released **Aya**—a multilingual large model covering **101 languages**. The Aya project mobilized over 3,000 contributors across 119 countries, the largest open-source multilingual alignment dataset collaboration to date. **Aya 23** (deeply optimized for 23 major languages) and **Aya Expanse** (released in 2024, 23 languages, performance approaching Llama 3) followed.

Aya's significance is more than technical. It signals to the industry: **large models should not serve only the English-speaking world**. The voice rang especially clear from Toronto, one of the most multilingual English cities in the world.

## A $5.5 Billion Valuation and an Enterprise Network

Capital markets took time to recognize Cohere's value. In September 2021, Cohere closed a $40 million Series A led by Index Ventures. In February 2022, a $125 million Series B led by Tiger Global at a $2.2 billion valuation. On July 22, 2024, Cohere announced its **Series C of $500 million** at a **$5.5 billion** valuation—the lead group reads like a strategic mosaic of the large-model era:

- **NVIDIA**—compute partner, deep collaboration on NIM inference;
- **Oracle**—embedding Cohere models into Oracle Cloud Infrastructure and NetSuite;
- **Salesforce Ventures**—plugging Cohere into the world's largest enterprise CRM;
- **Cisco**—integrating Cohere into Webex and enterprise networking;
- **Inovia Capital, PSP Investments** (a Canadian public pension fund)—political backing from domestic Canadian capital;
- **AMD, Fujitsu**—hardware and an entry to the Japanese market.

The subtext is clear: none of them want their AI strategy fully dependent on OpenAI or Anthropic, and each needs a "neutral, privately deployable, enterprise-accountable" LLM provider. Cohere fills the slot.

## The Industrial Face of Canadian AI

If MILA (the lab around **Yoshua Bengio (1964–)**) is the academic heart of Canadian AI, and if the University of Toronto and the Vector Institute around **Geoffrey Hinton (1947–)** are its intellectual headwater, then Cohere is **Canadian AI's industrial sample**.

The Canadian government understood this. In April 2024, the federal government announced a CA$2.4 billion "Canadian Sovereign AI Compute Strategy," much of it directly relevant to Cohere—supporting domestic AI compute deployment so that critical-industry data does not leave the country. In May 2024, public pension funds PSP and CDPQ jointly invested in Cohere as the capital arm of that national strategy.

Gomez has also become a public face for Canadian AI. He has spoken at Ottawa, Davos, and Bletchley Park (the 2023 AI Safety Summit) on behalf of Canadian enterprise—forming a clear "Canadian pragmatist" contrast with OpenAI's Altman, Anthropic's Amodei, and xAI's Musk.

## The Wisdom of Not Fighting OpenAI Head-On

By 2026, Cohere has no half-billion ChatGPT MAUs, no Claude-style coding SOTA halo, no Gemini-class multimodal-benchmark resources. In public discourse, it is not in the "first tier" of large models.

But open its customer list and you find a different story: Oracle Cloud's NL2SQL, Salesforce Einstein, Notion's enterprise search, Fujitsu's Japanese government clients, localized deployments across EU member states, the compliance AIs at Canada's Big Five banks (RBC, TD, BMO, Scotiabank, CIBC). It is **a map you only see in the B2B world**.

Gomez has explained his logic in many interviews: in this large-model war, rather than burn capital on consumer-side SOTA against OpenAI and Anthropic, **do what they cannot or will not**—private deployment, strict compliance, deep verticalization, multilingual support, embedding into customers' existing workflows. It is a textbook asymmetric play—do not contest the strongest at his strongest, but build a base in his blind spots.

By early 2026, Cohere's valuation still sits at the $5.5 billion mark (well below OpenAI's $300 billion+ and Anthropic's $60 billion+), but its cash-flow health, customer renewal, and gross-margin structure rank among the most stable of all large-model companies. Another kind of victory—not the highest-valued, but the longest-lived.

::: tip Historian's Note
Large-model entrepreneurship was never a single road. While OpenAI took the spotlight, three young people in Toronto chose to walk into the dark—building enterprise APIs, private deployments, and RAG retrieval that nobody tweeted about. Eight years on, they have not become the protagonists of the era, but their models quietly run in Canada's Big Five compliance systems, in Oracle customer databases, in the government systems Fujitsu provides Japan. It is a "Canadian-style" victory—no fanfare but foundations; no celebrities but customers; no valuations but cash flow. The story of the AI era will not be written entirely by OpenAI; the chapter Cohere is writing belongs to "another way of living." It proves that even in the deep-learning era, a middle path remains—one that lets a mid-sized company live well.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Cohere, Cohere For AI, or in the Toronto AI ecosystem, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). "Attention Is All You Need." *NeurIPS 2017*.
2. Cohere. (2024, March 11). "Command R: Retrieval Augmented Generation at Production Scale." Cohere Blog.
3. Cohere. (2024, April 4). "Introducing Command R+: A Scalable LLM Built for Business." Cohere Blog.
4. Cohere For AI. (2024, February 13). "Aya: An Open Science Initiative to Accelerate Multilingual AI Progress." Cohere For AI.
5. Cohere For AI. (2024, October 24). "Aya Expanse: Connecting Our World." Cohere For AI Blog.
6. Cohere. (2024, July 22). "Cohere Raises $500M Series C at $5.5B Valuation." Press Release.
7. Government of Canada. (2024, April). "Canadian Sovereign AI Compute Strategy." Innovation, Science and Economic Development Canada.
8. Gomez, A. (2023). Bletchley Park AI Safety Summit Statement. UK Government Transcript.
9. Hooker, S. (2023). "The Hardware Lottery." *Communications of the ACM*, 64(12).
10. Forbes. (2024). "How Cohere Quietly Became the Enterprise LLM Pick." Cover Story.
11. The Globe and Mail. (2024). "Inside Canada's Most Important AI Company." Business Section.
