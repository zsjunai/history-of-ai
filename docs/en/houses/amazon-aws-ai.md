# House · Amazon (AWS AI / Bedrock)

> The world's largest cloud provider's survival rule for the AI era—do not bet on building the top model; be the universal foundation under all the top models. The $8 billion investment in Anthropic is AWS's most consequential move of the 2020s.

## The Foundation of the Cloud

To understand AWS's place in the AI era, one must first understand what it already was. On March 14, 2006, Amazon launched Simple Storage Service (S3); on August 24 of that year, it launched the Elastic Compute Cloud (EC2 Beta). Together, the two products turned "cloud computing" from a concept into a commodity. The first servers **Sam Altman (1985–)** rented on a credit card when he started his company; the H100 cluster Anthropic used to train Claude; every model download from Hugging Face Hub—the shared infrastructure mother behind all of it traces back to those early racks in AWS's Seattle basement.

AWS was not a player that ramped only in the AI era. It is the platform the AI era quietly chose. It has no star model like OpenAI's, no research aura like DeepMind's. But it has what no one else does: GPUs and bandwidth that everyone needs.

## Alexa and the Early ML Forays

Amazon truly entered "consumer AI" in 2014. That November, the first Echo smart speaker quietly went on sale to Amazon Prime members. Its built-in voice assistant was named **Alexa**—after the Library of Alexandria. Echo + Alexa took "speak to the air and have the machine do something" out of science fiction and into daily life. By 2016 or so, Alexa was nearly synonymous with consumer AI; Google Assistant, Apple Siri, and Microsoft Cortana were all behind.

The engineers' contribution to the cloud side was Amazon Machine Learning, released in 2015 (a managed ML service for developers), and **Amazon SageMaker** in November 2017 at re:Invent—a one-stop ML platform from data labeling, feature engineering, and training to deployment and monitoring. Between 2018 and 2022, SageMaker was one of the most popular choices for enterprise ML workflows, anchoring AWS's path dependence: build the infrastructure, not the model.

Alexa, however, did not clear the next hurdle of deep learning. Her dialogue stayed at command-style Q&A and never upgraded into a real conversational agent. When ChatGPT appeared in 2022, Alexa looked dated overnight. Amazon began pouring enormous resources into "how to wire Alexa to a large model"—but that is a later chapter.

## The OpenAI Near-Miss

A footnote rarely told: when OpenAI was founded in 2015, AWS was among its early sources of compute. None of the founders—Altman, the partners around **Tom Brown (1990–)**'s era, **Ilya Sutskever (1986–)**—had yet locked in with a single cloud provider. AWS provided some compute as sponsorship.

The pivot came in 2019. Microsoft announced its $1 billion investment in OpenAI and migrated OpenAI's training compute exclusively to Azure. From that moment AWS lost its way into the OpenAI ecosystem and was pushed out of the supply chain of one of the most important AI players, in the role of "the displaced." This is the prelude to AWS's later all-in embrace of Anthropic—it could not let the same thing happen twice.

## Bedrock: A Model Supermarket Is Born

On April 13, 2023, AWS announced **Amazon Bedrock**, made generally available on September 28 of that year. Bedrock's positioning was crisp: **do not build a single flagship large model; aggregate hosted-model APIs**. The first set of model providers included Anthropic (Claude), AI21 Labs (Jurassic), Stability AI (Stable Diffusion), Cohere, and Amazon's own Titan; Meta's Llama 2 / Llama 3, Mistral, Mixtral, and others followed.

If Microsoft's strategy is to "marry OpenAI exclusively" and Google's to "throw everything at Gemini," AWS's strategy is to be **a forever-neutral model supermarket**. Customers switch the underlying model with one line of API on Bedrock, without operating their own GPU clusters. Amazon takes its cut of the compute on the bill.

Bedrock's other half is the way it brings AWS's existing enterprise compliance stack (KMS encryption, VPC isolation, IAM permissions, PrivateLink) to bear on large models. For banks, hospitals, governments, and multinational manufacturers—customers OpenAI's web access cannot reach—Bedrock was the first time they could "compliantly" use a top-tier large model.

## An $8 Billion Bet on Anthropic

AWS's biggest gamble came on September 25, 2023. The two companies jointly announced: Amazon would invest up to **$4 billion** in **Anthropic**; in exchange, Anthropic would adopt AWS as its primary cloud provider, migrating much of Claude's training and large-scale inference onto AWS's Trainium / Inferentia custom-silicon clusters.

In March 2024 the investment was fully drawn. On November 22, 2024, AWS announced an **additional $4 billion**, bringing total commitments to Anthropic to **$8 billion**. Combined with Google's $2 billion, Anthropic moved in two years from a research outfit of about thirty to a heavyweight valued above $60 billion—on the back of an AWS-Google capital duel.

AWS's logic was straightforward: trade capital for the right of "exclusive model availability on Bedrock," and bind Claude training to its own silicon to validate Trainium. **Dario Amodei (1983–)** worked closely with AWS CEO Andy Jassy. Anthropic was happy to gain a backer it did not need to fear "being acquired by"—AWS has consistently emphasized that it takes no board seat and does not steer strategy. That is the lesson AWS drew from Microsoft-OpenAI's tight knot.

## Trainium and Inferentia: A Long-Game Silicon Strategy

Money alone is not enough. In 2018 AWS launched its first custom inference chip, **Inferentia**; in December 2020 the **Trainium** training chip; followed by Trainium2 in 2023 and a Trainium3 roadmap in 2024. The line is led by the Annapurna Labs team—the Israeli chip company AWS acquired in 2015, the seed of the cloud providers' wave of in-house silicon.

The strategic intent is plain: **reduce dependence on NVIDIA GPUs**. With H100s scarce in 2024 and NVIDIA's gross margin above 70%, any cloud provider that does not own its silicon hands the entire margin to Jensen. **Jensen Huang (1963–)**'s relationship with AWS has always been "cooperate but defend": AWS is one of NVIDIA's largest customers and one of its strongest potential substitutes.

The migration of part of Anthropic's Claude training to Trainium2 clusters was the most important practical landing of this strategy. From the second half of 2024, AWS announced **Project Rainier**—a joint supercluster of hundreds of thousands of Trainium2 chips dedicated to Claude training. If Project Rainier succeeds, AWS will, in the most important "frontier-model training compute" battle, build an alternative supply chain independent of NVIDIA.

## Q, Nova, Agent: Embedding Models in Enterprise Workflows

At the November 2023 re:Invent, AWS rolled out **Amazon Q**—an AI assistant for enterprise developers and business users covering code (Q Developer, formerly CodeWhisperer), business intelligence (Q Business), and customer service (Q in Connect). Q's positioning resembles Microsoft Copilot, but it walks a deeper compliance path on the B2B side.

At re:Invent in December 2024, AWS announced **Amazon Nova**, its in-house foundation-model family: Micro, Lite, Pro, and Premier in language, plus Nova Canvas (image) and Nova Reel (video). Nova is not aimed at SOTA. It targets cost-sensitive enterprise customers that want a "good-enough, cheap, compliant" backstop.

In the same wave, **Bedrock Agents** and **Bedrock Knowledge Bases** package large-model capability as out-of-the-box "RAG plus tool use," sparing enterprise customers from assembling LangChain, vector stores, and retrieval logic themselves. Together these products form AWS's matrix in the large-model era: Q and Bedrock Agents at the top, Bedrock model marketplace in the middle, Trainium / Inferentia and EC2 GPUs at the base.

## The Andy Jassy Era

In July 2021, Jeff Bezos stepped down as Amazon CEO and was succeeded by AWS founder **Andy Jassy**. Jassy was the architect who took AWS from a "small idea" in 2003 to global cloud dominance, and his understanding of the cloud business is unusually deep: **a long-game business that wins on scale and variety, not on star products—boring but irreplaceable infrastructure**.

This thinking shows in AWS's approach to AI: do not compete head-on with OpenAI, Google, or Anthropic at the frontier; build the substrate "everyone else runs on." As of 2026, AWS holds the largest share of global cloud (about 30%); Bedrock has become the principal alternative to the OpenAI API for enterprise large-model APIs; Anthropic, on AWS compute, has grown into OpenAI's strongest challenger.

If Microsoft–OpenAI is the AI era's "Wei" and Google–DeepMind its "Shu," then AWS–Anthropic is the "Wu"—the third pillar of a triangular standoff, taking the closed-source side along a "neutral platform plus capital partner" route. Whether that route prevails is undecided, but AWS has fastened itself firmly to the bottom layer of the next decade's large-model infrastructure.

::: tip Historian's Note
AWS is the AI giant that least resembles an AI company. It did not write Transformer, did not train a GPT, has no model whose name an ordinary person remembers. But every star AI product, in some measure, must burn AWS's electricity, write to AWS's disks, rent AWS's cards. That is its humility and its dominion—building wind in the windiest place. The $8 billion Anthropic bet is not gambling but the strongest confirmation of who AWS is: it does not need to win the star model; it needs the next generation of star models to grow on top of it. This is a company that truly understands "infrastructure is power."
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at AWS AI, SageMaker, Bedrock, or Annapurna Labs, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Amazon Web Services. (2023, April 13). "Announcing New Tools for Building with Generative AI on AWS." AWS Blog.
2. Amazon Web Services. (2023, September 28). "Amazon Bedrock Is Now Generally Available." AWS News Blog.
3. Anthropic & Amazon. (2023, September 25). "Expanding Access to Safer AI with Amazon." Anthropic Blog.
4. Anthropic & Amazon. (2024, November 22). "Anthropic and AWS Deepen Strategic Collaboration." Anthropic Blog.
5. Amazon Web Services. (2024, December 3). "Introducing Amazon Nova Foundation Models." re:Invent 2024 Announcement.
6. Amazon Web Services. (2017, November 29). "Amazon SageMaker." re:Invent 2017 Keynote.
7. Stone, B. (2021). *Amazon Unbound: Jeff Bezos and the Invention of a Global Empire*. Simon & Schuster.
8. The Information. (2024). "Inside Amazon's $8 Billion Bet on Anthropic." (Multiple reports.)
9. Vogels, W. (2006). "A Word from the CTO on the Launch of Amazon S3." All Things Distributed Blog.
10. AWS re:Invent Keynote Archive (2014–2024).
11. SemiAnalysis. (2024). "Trainium2 and AWS's Custom Silicon Strategy."
