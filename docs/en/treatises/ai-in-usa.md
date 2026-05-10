# Treatise · The History of AI in the United States

> The word "AI" was born at a small college in New Hampshire, and seventy years later it is still being rewritten in a few offices in California. From a summer workshop at Dartmouth to the compute arms race of Silicon Valley, from Pentagon research contracts to the OpenAI charter penned in a Manhattan office — the American AI story is a vast network woven by four forces: the university, the military, capital, and immigration. It is not the triumph of any single genius. It is the triumph of a system.

## I. Origins: A Four-Footed Academic Geography (1956–1990)

In the summer of 1956, **John McCarthy (1927–2011)** convened a two-month workshop at Dartmouth College in New Hampshire. Among the ten attendees were **Marvin Minsky (1927–2016)**, **Claude Shannon (1916–2001)**, and **Nathaniel Rochester (1919–2001)**. In the proposal McCarthy drafted, the term "Artificial Intelligence" appeared for the first time as a formal academic concept. From that summer onward, the American AI map unfolded around four academic strongholds.

The Massachusetts Institute of Technology (MIT) saw McCarthy and Minsky co-found the Artificial Intelligence Project in 1959, which later split into the AI Lab — the citadel of the symbolic school. Stanford University was set up in 1962 by McCarthy after he moved south to found SAIL (Stanford AI Lab), focused on robotics and logical reasoning; **Edward Feigenbaum (1936–)** later pushed it into the era of expert systems, with DENDRAL and MYCIN as the symbolists' highest achievements. Carnegie Mellon (CMU), led by **Allen Newell (1927–1992)** and **Herbert Simon (1916–2001)**, took the path from Logic Theorist all the way to its later chess and reasoning programs — the cradle of cognitive science fused with AI. New Jersey's Bell Labs cultivated a different lineage — Shannon's information-theoretic legacy, **Vladimir Vapnik (1936–)** and **Corinna Cortes (1961–)**'s support vector machines, and **Yann LeCun (1960–)**'s 1989 convolutional network for handwritten ZIP code recognition all grew there.

This four-footed configuration remains the skeleton of American academic AI today.

## II. DARPA's Invisible Hand

If universities supplied the heads, the Pentagon supplied the money, the problems, and the patience.

ARPA, established by President Eisenhower in 1958 and later renamed DARPA, listed AI as a priority funding area from the start. In the 1960s, DARPA single-handedly sustained the AI research budgets of MIT, Stanford, and CMU; in the 1970s, it funded the SUR (Speech Understanding Research) program that incubated CMU's Harpy speech recognition system; in the 1980s, the Strategic Computing Initiative invested a billion dollars to bet on the next generation of AI and parallel computing.

The genius of DARPA lay not in picking winners, but in tolerating successive failures. When **James Lighthill (1924–1998)**'s report led to wholesale European cuts in AI funding, DARPA held its line. At the first DARPA Grand Challenge in 2004, every entrant broke down in the Mojave Desert; one year later, at the second Challenge, Stanford's Stanley completed the 212-kilometer course, and Sebastian Thrun was promptly invited to Google to start its self-driving program. The internet (ARPANET), GPS, Siri, autonomous driving — almost every product America regards as a technological signature carries the watermark of an early DARPA contract.

The military spent the taxpayer's money; the most profitable industries it incubated were civilian.

## III. The Internet Era: The Reign of Search and Recommendation (1995–2010)

In the mid-1990s, the World Wide Web pushed American AI's application surface from laboratory to a billion users in a stroke.

In 1998, **Larry Page (1973–)** and **Sergey Brin (1973–)** introduced PageRank in a doctoral working paper at Stanford, modeling page importance as the leading eigenvector of a graph. Google was born and, within a decade, became the largest information-retrieval system in human history. Yahoo, Amazon, and eBay embedded machine learning into every layer of search, recommendation, and fraud detection. **Leo Breiman (1928–2005)**'s random forest, Vapnik and Cortes's SVM, **Judea Pearl (1936–)**'s Bayesian network — the industrialization of these theories occurred almost entirely in Silicon Valley.

The first fortune of the internet era was not a large model but a ranker, a click-through estimator, an ad-auction engine. It trained a generation of "machine learning engineers" who understood data, engineering, and business — talent that would later carry deep learning into industry.

## IV. Deep Learning Meets Silicon Valley (2012–2018)

After ImageNet 2012, **Geoffrey Hinton (1947–)** and his two students **Alex Krizhevsky (1986–)** and **Ilya Sutskever (1986–)** registered a small company in Toronto called DNNresearch. Early the next year, Google bought the three-person company for an undisclosed sum — not for the technology, but for the people. Hinton joined Google Brain part-time, and the team led by Jeff Dean became the headquarters for the industrialization of deep learning.

In late 2013, LeCun accepted Mark Zuckerberg's invitation to found Facebook AI Research (FAIR). The same year, **Andrew Ng (1976–)** left Stanford and went on to lead Baidu and co-found Coursera. In January 2014, Google acquired London's DeepMind for around six hundred million dollars — three American giants had each enclosed a top-tier deep-learning team.

Apple's entry was quieter. From 2016, **Craig Federighi (1969–)** began systematically introducing Core ML and on-device neural networks at WWDC. In 2018, Apple hired **John Giannandrea (1965–)** — formerly head of Google search and AI — to unify machine learning and Siri. Amazon embedded deep learning into Alexa, recommendations, and AWS GPU instance sales.

By 2018, the five American tech giants had each assembled their own AI labs, proprietary data, and proprietary cloud compute. The vertical-integration flywheel was in place.

## V. OpenAI and the Era of "Startup AI" (2015–2025)

In December 2015, **Sam Altman (1985–)**, **Elon Musk (1971–)**, **Ilya Sutskever**, and eight others announced the founding of OpenAI in a San Francisco hotel, with an initial commitment of one billion dollars. Its charter was nonprofit, open, and explicitly anti-DeepMind-monopoly. Eight years later, all three commitments had largely been reversed — OpenAI had restructured into a capped-profit entity, kept most weights from GPT-2 onward closed, and become the highest-valued AI company in the world by 2023.

In 2021, **Dario Amodei (1983–)** and his sister Daniela left OpenAI with seven safety researchers and founded Anthropic in San Francisco, championing "Constitutional AI" and alignment research; the Claude 3 series, released in 2024, matched GPT-4 across multiple benchmarks for the first time. In July 2023, Musk registered xAI; six months later it released Grok, binding the X platform to a large model.

Several blocks in San Francisco — Mission Bay where OpenAI sits, SoMa where Anthropic sits, and Brooklyn where Hugging Face is partly remote — concentrated the high-water mark of the "startup AI" era inside an area smaller than twenty square kilometers. **Andrej Karpathy (1986–)** observed in a 2024 talk: "For sixty years, AI was an academic movement; for the first time, it is now a startup movement, fully and unambiguously."

## VI. Compute Hegemony: Jensen Huang and the Rise of NVIDIA

Without NVIDIA, there is no American AI as we know it.

Founded in 1993, NVIDIA was, for years, a second-tier graphics-card vendor. In 2006, **Jensen Huang (1963–)** bet on CUDA — a programming interface that liberated the GPU from graphics rendering into general-purpose parallel computing. At the time, it looked like pure speculation. In 2012, when AlexNet trained the ImageNet champion on two GTX 580s, the bet paid off overnight.

For the twelve years that followed, NVIDIA all but monopolized the global AI accelerator market. The 2020 A100, the 2022 H100, the 2024 Blackwell B200 — each generation more tightly bound to the entire industry's training pipelines than the last. The CUDA ecosystem, NVLink interconnect, InfiniBand networking, and the Mellanox acquisition together formed a moat almost impossible to bypass. In June 2024, NVIDIA briefly surpassed Apple and Microsoft to become the world's most valuable public company. Huang's ever-present black leather jacket became the icon of compute supremacy.

## VII. Export Controls and the U.S.–China AI Race

On October 7, 2022, the U.S. Department of Commerce's Bureau of Industry and Security (BIS) issued sweeping new export controls on advanced semiconductors bound for China, putting the A100, H100, and equivalents on a definitive ban list for the first time. In October 2023, the rules were tightened to close the loopholes that had let NVIDIA's China-only A800 and H800 through. In December 2024, a fresh rule pulled HBM (high-bandwidth memory) and certain semiconductor equipment into the regime as well.

This was the first time since the Cold War that the United States had drawn a technological border using "compute" as the unit. It produced DeepSeek's R1 moment, in which a Chinese team squeezed near-H100 performance out of H800s, and it accelerated domestic alternatives — Huawei Ascend, Cambricon, Moore Threads — in China. In Washington's policy circles, the trio of "export controls + alliance controls + investment screening" became known as the "small yard, high fence." The Trump administration, in its second term beginning in 2025, continued and intensified this strategy.

The U.S.–China AI race thus shifted from a contest of technology to a contest of institutions and supply chains.

## VIII. The American Triangle: University, Industry, Capital

If American AI's strength can be summarized in a single sentence, it is this: a tightly coupled triangle of universities, industry, and capital.

Stanford, MIT, CMU, Berkeley, the University of Washington, Princeton, Cornell, and NYU — these eight schools supply the great majority of top doctoral talent. Google, Meta, Microsoft, Apple, Amazon, NVIDIA, OpenAI, and Anthropic provide industrial-scale compute and data. On Sand Hill Road, Sequoia, Andreessen Horowitz, and Founders Fund, joined by growth funds like Tiger Global and Coatue, push research outputs to public-market valuations within three to five years.

The friction in talent flow between the three vertices is almost zero: a Stanford PhD can join OpenAI on graduation, leave three years later to start a company with an a16z-led seed round, and be acquired by Google in five. Europe, Japan, and China have not yet fully replicated this velocity.

## IX. Venture Capital: From Sand Hill Road to a16z

American AI continually turns "research" into "product" because of a uniquely American capital pipeline.

Sequoia Capital (founded 1972) and Kleiner Perkins (KPCB) defined the Silicon Valley venture model; a16z (Andreessen Horowitz, founded 2009) turned "software is eating the world" into a generation of founders' creed. In the 2023–2025 AI wave, OpenAI alone has raised more than sixty billion dollars cumulatively, with its valuation touching five hundred billion in October 2025; Anthropic was valued at one hundred eighty-three billion; xAI at roughly two hundred billion. These numbers, in any non-American market, would be almost unthinkable.

Notably, the principal capital providers in the era of large-model AI are no longer traditional VCs but cloud providers themselves: Microsoft has bet on OpenAI, Amazon and Google have jointly bet on Anthropic, Oracle and NVIDIA have bet on compute contractors. Investment has become "compute traded for equity"; capital and compute are merging into a single commodity.

## X. An Unresolved Question

In 2026, the American AI advantage remains conspicuous, but the cracks have begun to show: compute concentration is too high, model transparency declines year by year, military use and unemployment anxieties rise simultaneously, copyright lawsuits arrive in waves (*The New York Times v. OpenAI*, *Getty Images v. Stability AI*, and others are still on the docket), congressional legislation is sluggish, and state laws — like California's SB 1047 — keep oscillating between veto and reintroduction.

In a single sentence: American AI still leads, but it must answer an old question — when a technology both transforms a nation and threatens it, who is to balance whom?

---

::: tip Historian's Note
I have looked upon seventy years of American AI and admire the depth of its institutions more than the brilliance of its individuals. At the Dartmouth meeting of ten, McCarthy did no more than coin a new term — but he did so at the confluence of three great currents: Cold War defense funding, the immigration dividend, and the computing revolution. The university dared to spend public money on apparently useless research; DARPA dared to bet for twenty years on directions with no visible return; Silicon Valley dared to wager pension funds on a company two years from any revenue. None of this is the deed of one person; it is the harvest of one system. Neural networks were buried several times in America, and several times disinterred there. Minsky stifled them in 1969; Hinton, naturalized in Toronto, brought them back in 2012; OpenAI began nonprofit and turned to capped-profit. Technology rises and falls in no straight line; institutional resilience is the deeper root. Yet today's America is not without its troubles. Compute is held by five firms; valuations cluster in the Bay Area; legislation drowns in argument; the line between military and civilian use blurs by the year. Rome once ruled the Mediterranean by openness, and lost the world by closure. If American AI hopes to extend its glory, the right question is not "how to win?" but "how not to repeat the path of the neural-network winters?" — never let the consensus of a single moment strangle the next heretic to be ridiculed.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on AI research or in industry in the United States, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. McCarthy, J., Minsky, M., Rochester, N., & Shannon, C. (1955). *A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence*.
2. Roland, A., & Shiman, P. (2002). *Strategic Computing: DARPA and the Quest for Machine Intelligence, 1983–1993*. MIT Press.
3. Brin, S., & Page, L. (1998). The anatomy of a large-scale hypertextual web search engine. *Computer Networks and ISDN Systems*, 30(1-7), 107-117.
4. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *NeurIPS*.
5. OpenAI. (2015). *OpenAI Charter*. openai.com/charter.
6. U.S. Department of Commerce, Bureau of Industry and Security. (2022, Oct 7). *Implementation of Additional Export Controls: Certain Advanced Computing and Semiconductor Manufacturing Items*.
7. Anthropic. (2024). *The Claude 3 Model Family: Opus, Sonnet, Haiku*. Anthropic Technical Report.
8. Stanford HAI. (2025). *Artificial Intelligence Index Report 2025*.
