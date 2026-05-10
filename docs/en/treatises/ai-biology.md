# Treatise · AI and Biomedicine

> AlphaFold cracked a fifty-year puzzle in biology, the protein folding problem, and was honored with the Nobel Prize in Chemistry — the first time AI made a Nobel-grade contribution to fundamental science. From MYCIN, prescribing antibiotics behind a glass terminal at Stanford, to 2024, when the Royal Swedish Academy of Sciences awarded the Chemistry prize to a London computer lab, the entanglement of life science and artificial intelligence has been half a century in the making.

## I. Early Days: Expert Systems and Medical Diagnosis

The story begins at Stanford in 1972. Edward Shortliffe, then a medical doctoral student, working with his advisor Bruce Buchanan, distilled the diagnostic knowledge of infectious-disease experts into roughly 600 IF-THEN rules and put them into a program named MYCIN. MYCIN handled uncertainty through backward-chaining — each rule carried a "certainty factor" between 0 and 1 — and could recommend antibiotics after a physician entered blood samples and history. A 1979 blind test showed its prescriptions matched expert panels in 65% of cases, exceeding some junior physicians.

But MYCIN never entered hospitals. It required a doctor to sit at a PDP-10 for twenty minutes typing answers; no hospital IT system could speak with it; worst of all, the law — if the diagnosis was wrong, who would bear the liability? No one would sign.

In the same period, Jack Myers at the University of Pittsburgh led INTERNIST-1 with a still-grander goal: to cover the whole of internal medicine. It catalogued some 500 diseases and their relations to 3,500 symptoms, but the larger the knowledge base, the harder to maintain — every new disease meant rechecking its relations to hundreds of others. This was the "knowledge-acquisition bottleneck" **Edward Feigenbaum** later warned of repeatedly. In the heyday of expert systems, medical AI's golden ceiling was held down by exactly this bottleneck.

## II. Medical Imaging: AI's First Clinical Beachhead

The turning point came on the night ImageNet 2012 ended. As CNNs began to crush every traditional method on natural images, a wave of medical-imaging researchers immediately saw it: black-and-white X-ray, CT, MRI, pathology — fundamentally, all images.

In January 2017, Stanford dermatologist Andre Esteva and computer scientist Sebastian Thrun published a landmark *Nature* paper. With 129,000 dermoscopy photographs they fine-tuned a GoogLeNet, matching the average level of 21 board-certified dermatologists in distinguishing benign moles from malignant melanoma. The same year, Google Health and India's Aravind Eye Hospital built a CNN for diabetic retinopathy screening — sensitivity 97.5%, specificity 93.4%. The thinking became the FDA-cleared IDx-DR.

On April 11, 2018, IDx-DR became the **first fully autonomous AI diagnostic device ever approved by the FDA** — usable without a physician on site. Many regard that day as the legal beginning of the "AI doctor" era.

What followed was an avalanche of clinical deployments. FDA-cleared AI/ML medical devices grew from a handful in 2017 to 521 by 2022, and over 950 by early 2025; more than 75% are concentrated in radiology. Stroke-detection software from Aidoc and Viz.ai shortened the time to flag intracranial hemorrhage on CT from an average of 60 minutes to under 5 — saving countless neurons. Paige.AI received FDA clearance for its prostate-cancer pathology system in 2021, the first AI pathology software cleared. In China, United Imaging Intelligence, Infervision, and Deepwise rode the COVID wave on lung-CT AI; all three obtained NMPA Class III certification almost simultaneously.

But deployment is never smooth. In 2019, the University of Michigan reviewed Epic's sepsis-prediction model deployed at 168 U.S. hospitals and found real-world sensitivity of just 33% — far below the 76% the vendor claimed. The cause was data drift: a model trained on one hospital's EHR did not transfer to another. This became medical AI's textbook lesson: dazzling numbers on the training set often shrink in the ward.

Another reef of medical-imaging AI is that "AI hasn't made doctors' lives easier." Multiple studies show AI assistance lengthens radiologists' reporting time by 5–8% on average — the doctor must check every AI mark. Not a technical problem; a problem of human-machine workflow design.

## III. AI Drug Discovery: From Target to Clinic

Pharma carries a despairing "double-ten" rule: each new drug needs an average of 10 years and $1 billion, and fewer than 10% of clinical candidates ever launch. Each Phase III failure burns billions. AI entered this field carrying both the world's hopes and its skepticism.

The first to step out of the lab was Insilico Medicine. Founded by Alex Zhavoronkov and headquartered in Hong Kong, the company built an end-to-end platform called Pharma.AI. In February 2021 it announced that AI had taken a candidate from target discovery to preclinical readiness in 18 months — a process traditionally requiring four to five years. The small molecule INS018_055, targeting idiopathic pulmonary fibrosis (IPF), entered Phase II trials in 2023 — the first drug fully discovered and designed by AI to reach Phase II.

UK-based Exscientia (acquired by Recursion in 2024) was even further ahead. In January 2020, in collaboration with Japan's Sumitomo Pharma, DSP-1181 entered first-in-human Phase I trials, called "the first AI-designed drug candidate ever." It was terminated in 2021 for lack of efficacy. AI pharma's first lesson to all: speed can be raised, but biology's uncertainty does not vanish for it.

Recursion Pharmaceuticals took another path: high-throughput cell imaging. Each week it captured millions of cell images, used CNNs to extract "morphological fingerprints," and reverse-inferred mechanisms. In 2023 it received a $50 million investment from NVIDIA and signed a $1.2 billion deal with Genentech. AbCellera screened antibody libraries with machine learning; bamlanivimab, a COVID neutralizing antibody co-developed with Eli Lilly, received FDA emergency-use authorization in November 2020 — only 90 days from antigen identification to IND.

Chinese players took position. XtalPi's signature is "AI plus automated robotic labs"; it listed in Hong Kong in 2024. BioMap (founded with leadership from Robin Li, Baidu's founder) bets on the intersection of large models and life science.

But AI pharma's reality is rapidly de-bubbling. As of 2025, no fully AI-designed drug has reached the market. Several companies took heavy valuation hits in 2024–2025; BenevolentAI's stock fell 90% from its peak. A sober consensus is forming: AI cannot remove biological uncertainty, but it can **raise success from 10% to 20–30%** — already enough to remake the industry, far from the original promise of "curing all."

## IV. Protein Structure Prediction: AI's Nobel Moment

The protein folding problem was formally posed by 1972 Nobel laureate Christian Anfinsen: the amino-acid sequence already contains all the information of the three-dimensional structure — but for fifty years, no one could compute the three-dimensional structure from the one-dimensional sequence. Structural biologists relied on X-ray crystallography and cryo-EM; each structure meant months or years of work.

CASP (Critical Assessment of Structure Prediction) is the field's Olympics. Every two years organizers release sequences whose structures have been experimentally determined but kept secret; teams submit predictions and are scored against truth (GDT_TS, full mark 100). At CASP13 (2018), DeepMind's AlphaFold 1 won first place with a mean GDT_TS of 58.9, shaking the field.

But the real earthquake came on November 30, 2020.

CASP14 results were released: AlphaFold 2 reached a median GDT_TS of 92.4 in the hardest free-modeling category — so high that organizer John Moult declared on the spot, "In some sense the problem is solved." **Hassabis** and front-line technical lead John Jumper stepped into the spotlight. AlphaFold 2's heart was the Evoformer — alternating updates on multiple sequence alignment (MSA) information and pairwise residue relations, followed by an equivariant structural module that emitted atomic coordinates end-to-end.

In July 2021, DeepMind published code and paper in *Nature*. Two weeks later, the AlphaFold Protein Structure Database went live, covering 98.5% of the human proteome — over 23,000 human structures. A year on, it expanded to 200 million+ structures across nearly every known species. By 2025, more than three million researchers had used it, with citations passing 40,000.

In May 2024, AlphaFold 3 was released, predicting complexes of proteins with DNA, RNA, small-molecule ligands, and even ions — aimed straight at drug discovery. On October 9 the same year, the Royal Swedish Academy of Sciences announced the Nobel Prize in Chemistry to David Baker (for protein design through Rosetta) and to **Hassabis** and Jumper (for AlphaFold). It was the first time AI had received a Nobel in the natural sciences as a core contributor.

When **Hassabis** received the prize, he said only one line that biologists will not soon forget: "We took four years to give the computer a readable annotation of three billion years of evolution."

Worth noting too is Meta's ESMFold: released November 2022, using a 15-billion-parameter protein language model to predict structure from a single sequence — 60× faster than AlphaFold, slightly less accurate, but with broader coverage of metagenomic data; it released over 600 million microbial protein structures. In parallel, **Isomorphic Labs** (incubated by Google X, founded November 2021, with **Hassabis** as CEO) focuses on AI drug discovery, signing multi-billion-dollar deals with Novartis and Eli Lilly from 2024 — AlphaFold's scientific victory rapidly converted to commercial assets.

## V. Genomics and Precision Medicine

Genomic language is longer than protein language — three billion base pairs in the human genome, only 1–2% coding for proteins, the rest "non-coding" once dismissed as junk and now being re-read by AI.

In 2017, Google Brain released DeepVariant, turning sequencing data into images and using a CNN for variant calling, beating the decade-old GATK in the PrecisionFDA contest and remaining a benchmark today. Illumina's SpliceAI uses deep learning to predict splice-site variants, adopted by many clinical labs.

In June 2025, DeepMind moved another piece: AlphaGenome. From inputs of up to 1,000,000 base pairs of DNA, it predicts gene expression, splicing, chromatin accessibility, transcription-factor binding, and dozens of other features across many cell types. It is DeepMind's second major bet in life science after AlphaFold. The practical significance: more than 90% of disease-associated variants lie in non-coding regions, once nearly impossible to interpret; AlphaGenome turns "junk DNA" into something computable.

Precision medicine is also taking shape clinically. Foundation Medicine's FoundationOne CDx is an FDA-approved comprehensive genomic sequencing companion diagnostic, using AI to match tumor genomic profiles to targeted drugs. Tempus Labs, listed on NASDAQ in 2024, had accumulated multimodal clinical-plus-genomic data on 7 million patients. In CRISPR, models such as DeepCRISPR and CRISPOR design sgRNA and predict off-targets, turning gene editing from "trial-and-error" into "computation."

The UK's Genomics England 100,000 Genomes Project (completed 2018) and the U.S. NIH-led "All of Us" (over 750,000 participants by 2024) feed the next-generation medical AI — only when multi-omics data exceed the million scale can AI realistically move from correlation toward causation.

## VI. Large Language Models Enter Life Science

From 2019, researchers carried NLP's paradigm into biological sequences. Meta's ESM (Evolutionary Scale Modeling) treated 250 million protein sequences as a "language," pretraining a masked language model. ESM-2 (2023, 15 billion parameters) is now a general substrate for protein engineering — variant-effect prediction, mutation affinity prediction, and protein design.

DNA and RNA joined the feast. The Arc Institute's collaboration with NVIDIA produced Evo (2024) and Evo 2 (2025), trained on data spanning the tree of life with 7 to 40 billion parameters — not only "reading" genomes but generating functional bacterial-genome fragments from scratch. InstaDeep (acquired by BioNTech) pushed its Nucleotide Transformer line to 2.5 billion parameters.

Medical LLMs surged too. Google Health's Med-PaLM (2022) first crossed 67% on the U.S. medical-licensing MedQA; Med-PaLM 2 (2023) leapt to 86.5% — expert level. Microsoft's BioGPT and Epic's joint DAX Copilot brought clinical-document generation to hundreds of U.S. hospitals. In 2024, Memorial Sloan Kettering's PathChat (a pathology GPT) was published in *Nature*, capable of conversational reading of pathology slides. OpenAI's collaboration with Harvard Medical School showed GPT-4 reaching attending-physician level in 78% of complex case answers.

But "hallucination" hangs as a sword over medical LLMs. A 2023 study found GPT-4 fabricated 28% of its medical citations — perfectly formatted, but the papers did not exist. The clinical tolerance for error trends to zero, leaving medical LLMs unable to bear diagnostic responsibility alone. They serve as "documentation plus differential-diagnosis assistants."

Medical LLMs are entering clinical workflow in another guise. "Ambient AI" from Abridge, Nuance DAX, and Suki listens during doctor-patient conversation and auto-generates structured notes, deployed to over 5,000 clinics and hospitals across the U.S. in 2024. Perhaps the first time medical AI was actively welcomed by doctors — as relief, not replacement.

## VII. Ethical and Regulatory Challenges

Medical AI is the most dangerous battleground of AI ethics. In a 2019 *Science* paper, Obermeyer et al. revealed that a U.S. health-risk algorithm used by 200 million people systematically underestimated severity for Black patients — because the model used "medical spending" as a proxy for "medical need," and Black patients had historically spent less due to structural discrimination. After correction, the share of Black patients flagged high-risk rose from 17.7% to 46.5%. A textbook case of data bias in medical AI.

Regulation chases hard. In 2021 the FDA published the *AI/ML-Based Software as a Medical Device Action Plan*; in 2023 it proposed the PCCP (Predetermined Change Control Plan) — for the first time allowing AI models to keep learning post-market under regulatory oversight. The EU *AI Act* (2024) classifies medical AI as "high-risk," requiring mandatory risk assessment, transparency disclosure, and human oversight. China's NMPA published medical-device AI guidelines in 2022; by 2025 it had cleared more than 100 domestic AI medical devices, mostly imaging.

The deepest dispute is liability. When an AI's wrong diagnosis kills a patient, is it the developer's fault, the hospital's, or the doctor's who "pushed the button"? A 2024 Pennsylvania ruling tilted toward "the using physician failed in their duty of review" — meaning that however accurate the AI, the human must still sign. This may be the deepest difference from autonomous driving: the hospital never intended to let the doctor leave the wheel.

---

::: tip Historian's Note
The fusion of artificial intelligence and life science took half a century to come of age. In MYCIN's day the machine could only recite rules and was helpless beyond them; by AlphaFold's day the machine read the laws of folding from data, glimpsed what no human had glimpsed first, and earned the dignity of the Nobel. This is no accident: the secrets of life lie in data — gene sequence, protein conformation, cell image, all are data. The rise of deep learning met a thousandfold drop in sequencing cost and a ten-thousandfold rise in microscopic imaging; the meeting birthed the present age. Yet a decade and a hundred billion dollars of AI pharma have not yet brought a single drug to market — proof that biology's complexity exceeds image recognition by far. Cells mutate, bodies rebound, the 90% failure of clinical trials cannot be erased by algorithm. Hassabis's greatness lies less in his GPUs than in his having chosen, thirty years ago, the road of "using AI to solve biology's fundamental problems," and after AlphaGo betting all of DeepMind on AlphaFold. That courage of commitment is rarer than any technical breakthrough. The future of medical AI is not to replace doctors, but to take from them the time they should never have spent — reading films, writing notes, hunting literature, picking molecules — returning doctors to patients, and scientists to the questions themselves.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on AlphaFold, medical-imaging AI, AI drug discovery, or biological large language models — in research or industry — please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Shortliffe, E. H., & Buchanan, B. G. (1975). A model of inexact reasoning in medicine. *Mathematical Biosciences*, 23(3-4), 351-379.
2. Esteva, A., Kuprel, B., Novoa, R. A., et al. (2017). Dermatologist-level classification of skin cancer with deep neural networks. *Nature*, 542(7639), 115-118.
3. Gulshan, V., Peng, L., Coram, M., et al. (2016). Development and validation of a deep learning algorithm for detection of diabetic retinopathy in retinal fundus photographs. *JAMA*, 316(22), 2402-2410.
4. Jumper, J., Evans, R., Pritzel, A., et al. (2021). Highly accurate protein structure prediction with AlphaFold. *Nature*, 596(7873), 583-589.
5. Abramson, J., Adler, J., Dunger, J., et al. (2024). Accurate structure prediction of biomolecular interactions with AlphaFold 3. *Nature*, 630(8016), 493-500.
6. Lin, Z., Akin, H., Rao, R., et al. (2023). Evolutionary-scale prediction of atomic-level protein structure with a language model. *Science*, 379(6637), 1123-1130.
7. Ren, F., Aliper, A., Chen, J., et al. (2024). A small-molecule TNIK inhibitor targets fibrosis in preclinical and clinical models. *Nature Biotechnology*, doi:10.1038/s41587-024-02143-0.
8. Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, 366(6464), 447-453.
9. Singhal, K., Azizi, S., Tu, T., et al. (2023). Large language models encode clinical knowledge. *Nature*, 620(7972), 172-180.
10. Poplin, R., Chang, P. C., Alexander, D., et al. (2018). A universal SNP and small-indel variant caller using deep neural networks. *Nature Biotechnology*, 36(10), 983-987.
11. Avsec, Ž., Latysheva, N., Cheng, J., et al. (2025). AlphaGenome: predicting variant effects across the genome. *DeepMind Technical Report*, June 2025.
12. The Royal Swedish Academy of Sciences (2024). The Nobel Prize in Chemistry 2024 — Press Release. Stockholm, October 9, 2024.
