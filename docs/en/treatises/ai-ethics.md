# Treatise · The Ethics of AI

> When machines begin to make decisions for us — whether to grant a defendant bail, whether a résumé advances to the next round, whether a face belongs to a suspect — ethics ceases to be a philosopher's parlor game and becomes a fate that touches every ordinary person. The eighty-year history of AI ethics is a history of technological exuberance and social conscience repeatedly contending with one another.

## I. The Earliest Unease: From Cybernetics to ELIZA

The ethical alarm bell rang almost before the term "artificial intelligence" was coined.

In 1950, the father of cybernetics, **Norbert Wiener (1894–1964)**, published *The Human Use of Human Beings*. There, for the first time, Wiener systematically asked: when machines grow ever more humanlike, where will society place the dignity of the worker? He observed coldly that automation does not bring liberation on its own — left to market logic, it would more likely bring new concentrations of power and inequality. Posterity has come to regard the book as the founding document of AI ethics.

In 1966, MIT's **Joseph Weizenbaum (1923–2008)** wrote ELIZA — a program that imitated a Rogerian psychotherapist using only pattern matching. What unsettled Weizenbaum for the rest of his life was not the program itself, but the reactions of its users: his secretary insisted he leave the room because she "wanted to speak with ELIZA in private." Psychiatrists proposed deploying ELIZA in clinics.

After a decade of reflection, Weizenbaum published *Computer Power and Human Reason* in 1976, articulating a thesis that has echoed ever since: **there are things a computer might be able to do, but that human beings ought not delegate to it** — judgment, psychotherapy, intimacy. For this stand, Weizenbaum was branded a "traitor" by colleagues such as **John McCarthy (1927–2011)** and **Marvin Minsky (1927–2016)**, and walked the rest of his life on the lonely edge of the AI community.

## II. Algorithmic Bias: Old Wounds Amplified by Data

By the 2010s, machine learning had moved from the laboratory into courtrooms, hiring desks, and credit decisions — and the ethical problem erupted in a way Weizenbaum had not foreseen. The trouble was not that the machine was too humanlike, but that it was too faithfully reproducing the existing injustices of human society.

In May 2016, the investigative outlet ProPublica published *Machine Bias*, alleging that COMPAS — a recidivism risk tool widely used in U.S. courts — was systematically biased against Black defendants: Black defendants were nearly twice as likely as white defendants to be wrongly flagged "high risk," while white defendants were significantly more likely to be wrongly flagged "low risk." Northpointe, the vendor, responded that the algorithm was "statistically fair," but the academic debate that followed lasted years and produced an uncomfortable truth: **multiple mathematical definitions of "fairness" are mutually incompatible and cannot be satisfied simultaneously** (Chouldechova 2017; Kleinberg et al. 2016).

In 2018, Reuters revealed that Amazon's hiring AI — trained on a male-dominated résumé corpus — had learned to downweight terms like "women's chess club" and women's-college affiliations; Amazon quietly retired the system in 2017. That same year, **Fei-Fei Li (1976–)**'s student Joy Buolamwini, working with Timnit Gebru, published *Gender Shades*, testing commercial face-recognition APIs from IBM, Microsoft, and Face++: accuracy on light-skinned men reached 99 percent, but on dark-skinned women fell to roughly 65 percent. A seemingly neutral API had hard-coded the world's color prejudice into a numerical fact.

## III. Surveillance, Privacy, and the Desacralization of the Face

If algorithmic bias is unintended discrimination, facial recognition is surveillance by design.

In early 2020, *The New York Times* exposed Clearview AI — a startup that had scraped more than three billion face images from public social platforms, used them for training, and sold its identification service to hundreds of U.S. police departments. Facebook, Twitter, Google, and YouTube each demanded that scraping cease; between 2022 and 2024, EU data-protection authorities issued cumulative fines exceeding €90 million.

In China, "smart city" face-recognition deployments scaled rapidly after 2017, with the Sharp Eyes and Skynet programs entering public consciousness. In 2019, San Francisco became the first U.S. city to ban municipal use of facial recognition; in the 2024 *AI Act*, the EU classified "real-time remote biometric identification" as either high-risk or prohibited. The same technology, under different political regimes, has been given utterly different boundaries — this is the deepest watershed of AI ethics in the twenty-first century.

## IV. Project Maven and Autonomous Weapons

In March 2018, *Gizmodo* revealed that Google was developing image-recognition systems for the U.S. military's Project Maven, used to identify targets from drone footage. The disclosure ignited an internal revolt: more than 4,000 Google employees signed an open letter to CEO Sundar Pichai demanding "Google should not be in the business of war," and more than a dozen senior engineers resigned in protest. That June, Google announced it would not renew the contract and published its *AI Principles*, pledging not to develop weapons or surveillance systems "intended to cause or directly facilitate injury."

The broader debate moved to the United Nations. Since 2014, expert meetings on Lethal Autonomous Weapons Systems (LAWS) have been held under the framework of the Convention on Certain Conventional Weapons (CCW); more than thirty states and over 250 AI researchers — including **Yoshua Bengio (1964–)** and **Bertrand Russell (1872–1970)**'s intellectual heirs — have signed petitions to ban "killer robots." But the major military powers (the U.S., China, Russia) have not agreed to any legally binding prohibition. **Whether to allow an algorithm to decide when to pull the trigger** — this is among the heaviest questions of our age, and one for which humanity has not yet reached consensus.

## V. Training Data and Copyright: The Limits of Fair Use

The eruption of generative AI dragged another ethical question into court: a model can "learn" from all of humankind's creative work, while creators receive virtually nothing in return.

In January 2023, the photo agency Getty Images sued Stability AI in the United States and the United Kingdom, alleging that its database had been used without authorization to train Stable Diffusion — and that some generated images still bore identifiable Getty watermarks. That same month, three artists filed a class action against Stability AI, Midjourney, and DeviantArt. In December 2023, *The New York Times* sued OpenAI and Microsoft, alleging that GPT models, when sufficiently prompted, could reproduce copyrighted *NYT* articles verbatim; OpenAI countered that "training is fair use." From 2024 onward, the Authors Guild and several novelists, along with Universal Music and other labels, joined the wave of copyright suits against OpenAI, Anthropic, and others.

By the end of 2025, court decisions had pulled in different directions: in *Thomson Reuters v. Ross*, the U.S. District Court for the District of Columbia preliminarily rejected the general defense that "training is fair use," while some state courts treated training as "transformative use." The legal pendulum still swings violently, but one thing is now clear — the era when "publicly available on the internet" was treated as synonymous with "free to train on" is ending.

## VI. The Shock to Employment: From Frey-Osborne to Acemoglu

Job displacement is the oldest and most personal of AI ethics' concerns. In 2013, Carl Frey and Michael Osborne of Oxford published *The Future of Employment*, estimating that 47 percent of U.S. jobs were "highly susceptible" to automation over the next decade or two. The number has been cited, revised, and overturned many times — the OECD revised it down to 14 percent in 2018; the World Bank and McKinsey have offered yet other figures.

Daron Acemoglu, the 2024 Nobel laureate in economics, offered a more sober verdict in *Power and Progress* (2023) and a series of NBER papers: technology does not automatically benefit the public — institutions shape its direction. **Technology is neutral; distribution is not.** Acemoglu pushed this stand into public discourse and, in 2024, explicitly warned that "over-optimistic valuations" of generative AI risked massive capital misallocation. The central ethical question of contemporary work has shifted from "will machines take our jobs?" to "who controls the direction of technology, and who bears the cost of the transition?"

## VII. The Rise and Fall of Corporate Ethics Boards

In the late 2010s, nearly every tech giant established an AI ethics team. The fates of these teams reveal a hard truth: **once ethics conflicts with commercial interest, ethics tends to lose first.**

In December 2020, Timnit Gebru, co-lead of Google's AI ethics team, was forced out after refusing to retract a paper (*Stochastic Parrots*) criticizing the environmental and social costs of large language models. Two months later, the team's other lead, Margaret Mitchell, was also fired. The episode triggered months of academic protest; at *FAccT 2021*, multiple attendees refused Google funding. In 2023, Microsoft's mass layoffs gutted the core of its Responsible AI team; Meta's Responsible AI division reorganized into near-disappearance at almost the same moment.

What remained, more often than not, was a compliance-oriented legal apparatus, not an ethics review with the power to "say no" to a product. After her departure, Gebru founded DAIR (Distributed AI Research Institute), which — together with AlgorithmWatch, the AI Now Institute, and other independent bodies — has become the most credible counterweight to the corporate ethics narrative.

## VIII. Institutionalizing the Ethics Framework

Outrage and statements were not the end of the story. Beginning in 2018, an academic and institutional framework took shape.

The ACM founded *FAccT* (Fairness, Accountability, and Transparency) in 2018, which quickly became the flagship venue for algorithmic-fairness research; the AI Now Institute (NYU, 2017) issued annual reports tracking the social effects of algorithmic power; AlgorithmWatch (Berlin) audited public-sector algorithm deployments across Europe. On the legislative front, the EU's 2024 *AI Liability Directive* proposal redistributed the evidentiary burden in AI-caused harms, while the *AI Act* — which entered into force in 2024 — wrote bias audits, explainability, and human oversight for "high-risk AI" into binding law.

Ethics moved from an appeal into a set of audit standards, a compliance file, a judicial remedy. That is progress — and a new danger. **When ethics is fully institutionalized, it can be reduced to a "process," losing the original force that compels us to stop and ask whether we should be doing this at all.**

---

::: tip Historian's Note
I have observed eighty years of disputes over AI ethics, and the current runs like a great river. At its source stand the prophets — Wiener and Weizenbaum — walking alone and crying out, dismissed by their age as quixotic. Midstream, algorithmic bias, expanding surveillance, autonomous weapons, and copyright entanglements muddy the waters. Downstream, EU legislation, corporate self-regulation, and academic auditing each raise their own dikes; yet the torrent of the river has not slowed. The expulsion of Gebru from Google deserves the closest attention — she was cast out not for incompetence but for honesty. The "ethics boards" of great corporations can tolerate words that cost nothing; they cannot tolerate ethics that obstructs the product. What they cannot tolerate is precisely what is most precious in ethics. Weizenbaum often said in old age: "Some things, machines may be able to do; but humans should not let them." The phrase is plain, but it weighs nine cauldrons. AI ethics today does not lack tools; nor does it lack regulations. What it lacks is a single conviction — **at the end of every "we can," there must remain a red line marked "we should not."** Those who keep this conviction are doing ethics. Those who lose it — no matter the volume of their writings or the rows of their compliance checklists — have only decorated the gate.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on algorithmic-fairness research, served on a corporate AI ethics board, or experienced injustice from automated decisions, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Wiener, N. (1950). *The Human Use of Human Beings: Cybernetics and Society*. Houghton Mifflin.
2. Weizenbaum, J. (1976). *Computer Power and Human Reason: From Judgment to Calculation*. W. H. Freeman.
3. Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). Machine Bias. *ProPublica*, May 23, 2016.
4. Buolamwini, J., & Gebru, T. (2018). Gender Shades: Intersectional accuracy disparities in commercial gender classification. *Proceedings of FAT* 2018*, 81, 77-91.
5. Chouldechova, A. (2017). Fair prediction with disparate impact: A study of bias in recidivism prediction instruments. *Big Data*, 5(2), 153-163.
6. Hill, K. (2020). The secretive company that might end privacy as we know it. *The New York Times*, January 18, 2020.
7. Conger, K., Fausset, R., & Kovaleski, S. F. (2019). San Francisco Bans Facial Recognition Technology. *The New York Times*, May 14, 2019.
8. Shane, S., & Wakabayashi, D. (2018). 'The Business of War': Google Employees Protest Work for the Pentagon. *The New York Times*, April 4, 2018.
9. Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? *Proceedings of FAccT '21*, 610-623.
10. Frey, C. B., & Osborne, M. A. (2017). The future of employment: How susceptible are jobs to computerisation? *Technological Forecasting and Social Change*, 114, 254-280.
11. Acemoglu, D., & Johnson, S. (2023). *Power and Progress: Our Thousand-Year Struggle Over Technology and Prosperity*. PublicAffairs.
12. *The New York Times Company v. Microsoft Corporation, OpenAI, Inc., et al.*, Case 1:23-cv-11195 (S.D.N.Y., Dec 27, 2023).
