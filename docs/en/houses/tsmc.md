# House · TSMC

> The silent sovereign of the AI era—every chip that has shaken the world is etched, layer by layer, in its fabs. Without its advanced process nodes, today's compute revolution could not have happened.

## Morris Chang and a Gamble at Fifty-Six

February 21, 1987, Hsinchu Science Park, Taiwan. At 56, Morris Chang accepted a brief from the Taiwanese Executive Yuan and founded the "Taiwan Semiconductor Manufacturing Company." At the time, no company in the world made chips only "for someone else"—every semiconductor firm covered the chain from design to fabrication. Chang proposed the opposite: **manufacturing only, no design**.

The decision looked conservative. Chang was born in Ningbo, raised across Shanghai, Hong Kong, and Chongqing. He held a Harvard undergraduate degree, an MIT master's, and a Stanford doctorate, and had risen to senior vice president at Texas Instruments running the global semiconductor business. He returned to Taiwan in 1985 at the invitation of the Industrial Technology Research Institute (ITRI) to plan the island's semiconductor industry. The opportunity he saw: a wave of "fabless" startups that designed but did not fabricate were rising in the United States, and what they lacked was a foundry partner that would not compete with them.

The 1987 first-round investment was about $220 million: Philips put in 27.5%, the Taiwan-government-led Development Fund 48%, and the rest came from local Taiwanese capital. In its first year, TSMC booked roughly $15 million in revenue—negligible by industry standards. Three decades later, it would feed almost the entire AI industry.

## The Triumph of the Foundry Model

The "pure foundry" position TSMC chose became, almost by accident, the starting point of three decades of structural change in global semiconductors.

In the late 1980s and early 1990s, a generation of young American engineers dared to design chips without owning fabs—NVIDIA (1993), Marvell (1995), Broadcom (1991), Qualcomm (1985), MediaTek (1997). All of them needed a foundry they could trust. TSMC's promise was: **"We only manufacture; we will never compete with our customers."** Repeated for thirty years, that line became the trust foundation of the industry.

After 2000 the industry truly went fabless. AMD spun off its fabs as GlobalFoundries in 2008; IBM sold its semiconductor unit to GlobalFoundries in 2014. One by one, the old IDMs (integrated design and manufacturing) abandoned manufacturing and handed orders to TSMC. Apple migrated the iPhone A-series from Samsung to TSMC in 2014, and from the A10 onward TSMC became Apple's exclusive foundry. Each Apple decision became a powerful endorsement: whom the most demanding customer chose stood at the top.

By 2026, TSMC's customer list included NVIDIA, Apple, AMD, Qualcomm, Broadcom, Marvell, MediaTek, Google (TPU), Amazon (Trainium/Graviton), Microsoft (Maia), Tesla (Dojo), Cerebras, Groq—nearly every AI chip rolling off the same line.

## Hegemony at the Leading Node

What TSMC truly built its moat on is unbroken leadership at the **advanced process node**.

The process node is the key index of semiconductor technology—smaller numbers mean more transistors per unit area, lower power, and higher speed. In the late 2010s, Intel's 10nm slipped repeatedly, Samsung's 7nm/5nm struggled with yield, and GlobalFoundries simply gave up 7nm and beyond in 2018. Only TSMC kept marching forward:

- **28nm** (2011): the workhorse for AMD, NVIDIA, and Qualcomm.
- **16nm FinFET** (2015): part of the iPhone 6s A9.
- **10nm** (2017): iPhone 8's A11.
- **7nm** (2018): iPhone XS's A12, AMD Ryzen 3000.
- **5nm** (2020): iPhone 12's A14, Apple M1, NVIDIA H100 (an N4 variant).
- **3nm** (volume production end of 2022): iPhone 15 Pro's A17 Pro, the M3 series, parts of Blackwell packaging.
- **2nm GAAFET** (risk production 2025, volume 2026): iPhone 18 Pro, the next generation of AI chips.

Every node transition demanded new EUV lithography tools, new material formulations, new yield curves. TSMC has invested over $30 billion a year in capex—over $40 billion in 2024–2025—the most aggressive investor in global semiconductors. By 2026, TSMC held over 90% global share at 5nm and below, and was the **only** foundry capable of stable volume production at 3nm.

## CoWoS: The Hidden Bottleneck of the AI Era

The compute appetite of large-model training drew out another of TSMC's decisive advantages—**advanced packaging**.

CoWoS (Chip-on-Wafer-on-Substrate) is a 2.5D/3D packaging technology TSMC has developed since 2011. The core idea: place a compute die (such as a GPU) and HBM high-bandwidth memory dies side by side on a silicon interposer, connected by ultra-high-density microbumps with bandwidth in the multiple-TB/s range. Without CoWoS, no matter how strong the GPU, memory bandwidth would choke it.

NVIDIA's A100, H100, B100, and B200 all use CoWoS packaging. AMD's MI300, Google's TPU v4/v5/v6, AWS Trainium2, Tesla Dojo, Cerebras WSE—nearly every AI accelerator depends on it.

The problem is **capacity**. CoWoS is an extremely complex process; TSMC must build dedicated facilities and equip them, and ramping takes time. In 2023–2024 the largest AI-chip delivery bottleneck was not TSMC's N4/N5 front-end capacity, but CoWoS back-end packaging. Tens of thousands of wafers per month became the most contested resource among AI compute firms—Jensen Huang flew personally to meet Morris Chang and C.C. Wei to negotiate allocation. TSMC announced in 2024 it would expand CoWoS to 80,000–90,000 wafers per month by 2026, and raised the target again in December 2025. **Whoever could secure CoWoS capacity could buy a ticket to the large-model race.**

## At the Eye of a Geopolitical Storm

TSMC was born at the end of the Cold War, glorified in the golden age of globalization, but the 2020s pushed it to the center of a geopolitical storm.

In May 2020, the U.S. Commerce Department extended export controls on Huawei to "any chip made with U.S. equipment or software." TSMC was forced to halt foundry work for Huawei, and Huawei's Kirin chips ceased production. It was the first time TSMC had been compelled by geopolitics to sever a major customer.

In August 2022, the U.S. CHIPS and Science Act was signed, providing $52 billion in subsidies to onshore semiconductor manufacturing. TSMC accelerated its global footprint:

- **Phoenix, Arizona, U.S.**: Phase 1 began volume production at N4 in 2024; Phase 2 at N3 has slipped to 2027–2028; Phase 3 at N2 is planned before 2030; total commitment over $65 billion.
- **Kumamoto, Japan**: Phase 1 ramped up in February 2024 (22/28nm and 12/16nm), serving primarily Sony, Toyota, and Rohm; Phase 2 was announced in October 2024.
- **Dresden, Germany**: Phase 1 began construction in August 2024, serving European automotive customers.

But however far the overseas fabs spread, **the most advanced nodes are still produced only in Taiwan**—Taiwan's "silicon shield." So long as the leading node's roots remain on the island, the United States has a motive to protect cross-Strait stability. As one company, TSMC has become a pivotal piece on the most sensitive geopolitical board of the twenty-first century.

In December 2024, after Trump returned to the White House, he repeatedly stated that "Taiwan stole the U.S. chip industry," and threatened tariffs on Taiwanese chips. In 2025, TSMC announced an additional $100 billion U.S. investment at the White House—an act the industry read widely as a finely calibrated political defense.

## Symbiosis with NVIDIA

If NVIDIA is the king of the AI era, TSMC is the king's blacksmith.

Huang has said many times in public, "Without TSMC, there is no NVIDIA." The two have been customer and supplier since 1995. By 2024–2025, NVIDIA had become one of TSMC's largest single customers (alternating with Apple at the top), and the entirety of NVIDIA's data-center GPU line was made at TSMC.

The relationship is one of deep trust. NVIDIA dared to bet on CoWoS-L (a larger interposer) and high-speed copper NVLink interconnects in Blackwell because it believed TSMC could push yields to volume production. TSMC has been willing to reserve capacity for NVIDIA and to co-develop the next process generation, because NVIDIA's orders are large and steady.

In 2024, Huang attended TSMC's company sports day in person; in 2025, C.C. Wei appeared on stage at NVIDIA's GTC. The signal these moments sent was stronger than any contract: the two companies have bound their fates together.

## Succession: From Morris Chang to C.C. Wei

TSMC's transition after its founder's retirement is a rare success story in the industry.

Morris Chang first handed the reins to Rick Tsai in 2005, returned in 2009 in response to the financial crisis, and from 2013 implemented a "dual CEO" structure with C.C. Wei and Mark Liu running operations and strategy respectively. In 2018, at age 87, Chang formally retired, with Liu becoming chairman and Wei becoming CEO. In June 2024 Liu stepped down, and Wei took on both chairman and CEO roles, becoming TSMC's next-generation steward.

Other legendary figures held this company forward technologically: **Shang-yi Chiang**, the most respected technical elder after Morris Chang, who joined as VP of R&D in 1997 and led TSMC from 0.25 micron to 16nm; **Liang Mong-song**, Chiang's protégé, whose 2011 jump to Samsung set TSMC back briefly, who later moved again to SMIC and became the key figure in mainland China's 14/7nm progress. These names string together thirty years of the diaspora of the world's leading-edge process technology.

## TSMC Today

By spring 2026, TSMC's market capitalization stays between $900 billion and $1.2 trillion—one of the most valuable companies in Asia and the second-largest semiconductor company globally (after NVIDIA). Full-year 2025 revenue was around $90 billion, with capex above $45 billion. Global headcount is roughly 80,000.

It continues to expand 2nm-and-below R&D and production in Hsinchu, Tainan, and Kaohsiung; pushes overseas nodes in Arizona, Kumamoto, and Dresden; and keeps raising the process barrier on CoWoS, SoIC (3D stacking), and other advanced packaging.

TSMC manufactures none of its own chips. It only turns other companies' AI dreams into silicon. In 2026, when AI has truly become a new utility, this "foundry-only" company controls the final exit through which all of humanity's compute ambitions must pass.

::: tip Historian's Note
The world speaks of AI's flourishing and looks to algorithms and data, not knowing that its true foundation lies in cleanrooms in Hsinchu and Tainan. At 56, Morris Chang founded the foundry model—a thorough rebellion against thirty years of vertical integration in semiconductors; every step the company has taken since has been the historical reward of that rebellion. **It does not make chips; it makes the ability of others to make chips**—a position that renders it both invisible and irreplaceable. AlexNet, Transformer, GPT, AlphaFold, Claude, Gemini—every world-changing algorithm has at last become real, running silicon along TSMC's lines. Yet glory is also a curse: TSMC sits between two great powers, the focal point of the most sensitive geopolitical risk of the twenty-first century. A company in Hsinchu, Taiwan, somehow bears the weight of humanity's compute civilization—the accident and necessity of history meet here.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at TSMC or participated in foundry and packaging projects for AI chips, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Chang, M. (2020). *Morris Chang's Autobiography (Vols. 1–2)*. Taipei: CommonWealth Publishing. [in Chinese]
2. Miller, C. (2022). *Chip War: The Fight for the World's Most Critical Technology*. Scribner.
3. TSMC Annual Reports (2020–2025).
4. Huang, J. (2023). "A Fireside Chat with Morris Chang." Stanford ECS.
5. Wang, H. (2024). "The CoWoS Bottleneck: Why AI Chip Supply is Bottlenecked by Packaging." *SemiAnalysis*.
6. The Economist (2023). "Why TSMC Is the Most Important Company in the World."
7. Reuters (2025). "TSMC to Expand Arizona Investment by $100B After Trump Pressure."
8. Bloomberg (2024). "Inside TSMC's 2nm Push: The Race Against Samsung and Intel."
9. Huang, C.-Y. (2021). *Silicon Island Risk and Opportunity: Semiconductors and Geopolitics*. Taipei: Dachun. [in Chinese]
10. DigiTimes Research (2024). "Advanced Packaging Capacity Forecast 2024–2026."
11. CSIS (2024). "The Geopolitics of Advanced Semiconductors."
