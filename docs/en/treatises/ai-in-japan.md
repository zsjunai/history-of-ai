# Treatise · The History of AI in Japan

> The Fifth Generation Computer Project was the most expensive national-scale gamble in AI's history, and its failure pushed Japan into a "lost three decades" AI narrative. Yet Japan's robotics tradition has never broken; in the deep-learning era it has quietly returned to the table through Preferred Networks, Sakana AI, and Sony AI. Demographic pressure from low birth rates, an unusually permissive copyright regime for training data, a deep cultural affinity for robots — three undercurrents support an underestimated AI nation.

## I. Postwar Robotics: From WABOT to ASIMO

Japan's first AI narrative is not algorithmic but embodied.

In 1973, Professor Ichiro Kato's team at Waseda University completed WABOT-1 — the world's first full-size humanoid robot, capable of speaking simple Japanese through an artificial mouth, grasping objects with mechanical hands, and walking slowly on two legs. WABOT-2 (1980) could read sheet music and play an electric organ. Kato came to be revered as "the father of humanoid robotics," and he founded a research paradigm that endures: Japanese AI's central concern is "how to let machines coexist with people," not "how to make machines surpass them."

In 1986, Honda launched a humanoid robot project in a secret laboratory in Kyoto. The first public demonstration of P2 in 1996 stunned everyone present: a 1.82-meter, 210-kilogram robot that could walk on two legs steadily. In 2000, Honda released the smaller ASIMO (Advanced Step in Innovative Mobility), 1.3 meters tall, capable of stair-climbing, face recognition, running, and kicking a soccer ball. ASIMO toured the world for twenty-two years, took the rostrum at the United Nations, was met by President Obama, and formally retired in 2022. Its retirement was not failure — it was a ceremonial moment in which Japan's robotics industry handed the humanoid baton back to academia and a new generation of startups (Boston Dynamics, Figure, Tesla's Optimus).

In industrial robotics, two of the "Big Four" are Japanese — Fanuc (spun off from Fujitsu in 1972) and Yaskawa Electric (founded in 1915). Together with ABB (Switzerland) and KUKA (Germany, acquired by Midea in 2016), they divide the world's industrial-robot market. As of 2024, 38 percent of the world's industrial robots are made in Japan — far higher than any other country. It is a quiet, sturdy advantage.

## II. The Fifth Generation Computer Project: Glory and Failure (1982–1992)

In 1982, Japan's Ministry of International Trade and Industry (MITI, today METI) announced the Fifth Generation Computer Systems Project (FGCS), with **Kazuhiro Fuchi (1936–2007)** appointed director of ICOT (Institute for New Generation Computer Technology). With a ten-year budget of 850 million dollars, the goal was to build the next generation of "knowledge-information processing" computers based on parallel logic programming and symbolic reasoning.

The international panic the project induced exceeded Japan's own expectations. The U.S. Congress quickly passed the National Cooperative Research Act lifting antitrust restrictions; DARPA launched the Strategic Computing Initiative (one billion dollars); the Microelectronics and Computer Technology Corporation (MCC) was born. Britain established the Alvey Programme; the European Communities launched ESPRIT. For a brief moment, the entire West feared Japan was about to repeat its semiconductor coup in AI.

Over the decade, ICOT trained more than three hundred researchers, developed a series of parallel inference machines (PIM/p, PIM/m, Multi-PSI) based on a Prolog-derived language called KL1, and produced thousands of papers. Yet by 1992, the verdict was uncomfortable: hardware did not reach commercial-grade performance, parallel logic programming was cool to industry, and neural networks and statistical machine learning were rising worldwide. In his closing report, Fuchi admitted: "We bet on one paradigm, and the world chose another."

The failure of the Fifth Generation became a watershed of Japanese AI history. On the one hand, it shaped a culture of "state-led, long-term investment"; on the other, it made Japan especially cautious about state-level AI projects for the next two decades — a caution that, ironically, helped Japan miss the early waves of deep learning. (See [*Houses · ICOT*](../houses/icot.md).)

## III. The Lost Three Decades: Missing the Deep Learning Wave

From the late 1990s through the early 2010s, Japanese AI academia and industry passed through their quietest two decades.

The reasons are layered. The "AI winter" narrative left by the Fifth Generation made government and industry shy away from large AI programs; after the bursting of the bubble, Japanese firms turned wholesale toward "cost control"; rigid academic tenure, plus relatively weak English ability, eroded Japan's share of top conference papers. Between 1995 and 2012, Japanese researchers' share at NeurIPS and ICML fell from 8 percent to 2 percent. When ImageNet 2012 ignited deep learning, Japan had almost no industrial research team capable of standing alongside Toronto, NYU, or Google Brain.

A widely repeated phrase in Japan's tech world summed it up: "The world changed; we did not."

## IV. Preferred Networks: From Chainer to Industrial AI

The turning began in 2014.

Daisuke Okanohara and Toru Nishikawa, two PhDs from the University of Tokyo, had founded Preferred Infrastructure (PFI) in 2008, focused on distributed databases and large-scale text processing. In 2014 they spun off the AI team as Preferred Networks (PFN), betting on deep learning and industrial applications.

PFN's most consequential gift to the world was **Chainer** — an open-source deep-learning framework released in 2015 that introduced the "define-by-run" dynamic computation graph. The design was later inherited wholesale by PyTorch and became the de facto standard of modern deep-learning frameworks. In 2019, PFN announced migration to PyTorch, conceding the framework war to Silicon Valley and concentrating on vertical applications.

PFN went on to work with Toyota on autonomous-driving perception, with FANUC on factory smart-arms, and with Mitsubishi Chemical on molecular simulation. In 2018 it released Optuna, an open-source hyperparameter-optimization library still among the most widely used Python tuning tools. In 2024, PFN released the PLaMo (PFN Large Model) series of Japanese-language models and partnered with Japan's Ministry of Health, Labour and Welfare on a medical large model.

PFN is almost a unique Japanese template: technically benchmarked against Silicon Valley, but resolute in staying in Tokyo and serving Japanese manufacturing. It was valued at roughly 3.5 billion dollars in 2024 — the most influential AI startup in Japan.

## V. Academia: Matsuo Lab, Kyoto University, and RIKEN AIP

The signal of Japan's academic recovery is the Matsuo Lab at the University of Tokyo, led by Yutaka Matsuo.

Matsuo earned his doctorate at the University of Tokyo in 2002 and from 2014 began offering deep-learning courses in the engineering faculty, quickly attracting Japan's top science and engineering students. The lab incubated SmartNews, ABEJA, Preferred Computational Chemistry, and others; Matsuo himself became a principal advisor on Japan's national AI strategy from 2023 to 2025. The Japanese press calls "Matsuo Network" the "renaissance hub of Japanese AI."

Kyoto University leans more theoretical. The Hisashi Kashima group and the Hitoshi Matsubara group have long cultivated machine-learning theory and cognitive science.

RIKEN founded its Center for Advanced Intelligence Project (AIP) in 2016, with Masashi Sugiyama (then director of the Institute of Statistical Mathematics) as its inaugural head, focused on mathematical-statistical foundations and trustworthy AI. AIP's collaboration with the Ministry of Education, Culture, Sports, Science and Technology produced "Fugaku" (online 2020, HPL 442 PFlop/s, the TOP500 leader 2020–2022) — the hardware backbone of Japan's sovereign AI.

The National Institute of Advanced Industrial Science and Technology (AIST) hosts AIRC (the AI Research Center), which serves as the academia-industry interface and operates the ABCI supercomputing cluster, opening compute to Japanese firms.

## VI. Corporate Pivots: Toyota TRI, Sony AI, and Fujitsu's Fugaku-LLM

In 2015, Toyota established the Toyota Research Institute (TRI) in Silicon Valley with former DARPA program manager Gill Pratt as CEO, hiring robotics and ML faculty from MIT and Stanford. TRI focuses on autonomous driving and home robotics; in 2024 it demonstrated LBM (Large Behavior Model), enabling robots to learn complex household tasks by watching human demonstrations.

In 2020, Sony established Sony AI, with hubs in Tokyo, the University of Tokyo, New York, Zürich, and Barcelona. Sony bet on three directions: game AI (in collaboration with Sony Interactive Entertainment, Gran Turismo Sophy, published in *Nature* in 2022), imaging AI, and culinary AI.

In May 2024, Fujitsu — together with Tokyo Institute of Technology, Tohoku University, and RIKEN — trained Fugaku-LLM, a 13-billion-parameter Japanese-language model, using Fugaku from scratch. It was Japan's first open-source large model trained on its own national supercomputer, with weights released under the Apache 2.0 license. That same year, NTT released Tsuzumi (a small efficient Japanese model); SoftBank partnered with OpenAI to build the Stargate Japan data center.

The shared characteristic of Japanese big-corporate AI is that it anchors on manufacturing and content; it does not pursue GPT-class general-purpose models, but emphasizes "specialized models adequate to my own business." This is the typical Japanese style — not engaging Silicon Valley head-on, but embedding AI into existing industrial chains.

## VII. The Contemporary Revival Attempt: Sakana AI, Stability AI Japan, and Karakuri

In July 2023, former Google Brain Tokyo researchers David Ha and Llion Jones (one of the eight authors of *Attention Is All You Need*) founded **Sakana AI** in Tokyo — *sakana* meaning "fish," symbolizing "swarm intelligence." Sakana proposes "evolutionary algorithms plus model merging" as an alternative to ever-larger single-model paths; in January 2024 it released Evolutionary Model Merge, a model-merging automation method widely reproduced on Hugging Face. In September 2024 it closed a 200-million-dollar Series A at a valuation of about 1.5 billion dollars — Japan's first AI unicorn. The Japanese government that year designated Sakana a "key technology of economic security."

**Stability AI Japan** opened a Tokyo office in 2023 and released Japanese Stable Diffusion and Japanese InstructBLIP. **Rakuten Group** released the Rakuten AI 7B series in 2024. **Karakuri** (founded 2016) focuses on customer-service dialogue and Japanese-language alignment. **ELYZA** (founded 2018 by Matsuo Lab alumni; KDDI took a controlling stake in 2024) is a leading player in Japanese-language large models.

These companies, taken together, still cannot match the leaders of Silicon Valley or China, but they restore "Japanese AI" as a living ecosystem with companies, products, and a financing rhythm.

## VIII. Culture, Regulation, and Demographic Imperative

Japan also has a unique moat: Article 30-4 of its Copyright Act.

This provision, amended and effective in 2018, allows the processing of copyrighted works for "non-enjoyment" purposes such as machine learning, without authorization. It has made Japan one of the developed world's most lenient regimes for AI training data, and many Western firms now build training-data pipelines in Japan. From 2024 to 2025, however, as generative AI applications spread, domestic illustrators have protested vigorously; the Agency for Cultural Affairs has held hearings repeatedly, and whether to introduce "style protection" provisions remains under negotiation.

The demographic factor pushes AI and robotics to the level of national policy. By 2024, Japanese aged 65 and older accounted for more than 29 percent of the population; manufacturing, elder care, convenience stores, and taxi services all face severe labor shortages. From 2023, the Japanese government has explicitly listed "AI plus robotics" as a core policy tool to address low birth rates, with hundreds of billions of yen in fresh annual budget. Kyocera's care robots, Lawson's automated cashiers, Fujitsu's factory-vision inspection — each lacks ChatGPT's headline glamour, but each answers a demand that reality has forced into the open.

The Japanese AI story is one of missed opportunity and pursuit, modesty and pragmatism. It dislikes the rhetoric of "the singularity"; it prefers a plain question — can this machine help an eighty-year-old take a safe bath?

---

::: tip Historian's Note
I have observed fifty years of Japanese AI, and the most striking feature is not its losses but its quiet gains. The Fifth Generation Computer Project, ten years and 850 million dollars; **Fuchi** bet on one paradigm while the world chose another — later generations cite this as a textbook case of national-scale research gambling gone wrong. Yet that failure did not exhaust Japan's robotics tradition: WABOT walked first; ASIMO followed; Fanuc and Yaskawa quietly fed the world's factories. When deep learning rose, Japan missed a decade — only PFN carried a single thread; only Matsuo's school stood up late; and only with Sakana's founding did the recovery become visible. Yet the path of Japan's revival differs from both America's and China's. It does not contend at the front line of general-purpose large models; it anchors on manufacturing, on care, on content, embedding AI into every link of the industrial chain. The permissive copyright law, the demographic imperative, the cultural affinity for robots — three undercurrents jointly support an AI nation that has been seriously underestimated. Sima Qian wrote: "Many begin well; few finish well." Japan's AI began well in 1973 with WABOT and almost ended at the close of ICOT in 1992. Today the kitchen fires are restarted; whether it will finish well depends on whether Japan can hold to the tradition of "machines serving humans" rather than chasing others to build a god that "replaces humans."
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on AI research or robotics in Japan, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Kato, I. (1973). Development of WABOT-1. *Biomechanism*, 2, 173-214.
2. Furukawa, K., & Fuchi, K. (1986). Knowledge information processing in Japan. *AI Magazine*, 7(3), 14-21.
3. Pollack, A. (1992, June 5). Fifth Generation became Japan's lost generation. *The New York Times*.
4. Tokui, S., Oono, K., Hido, S., & Clayton, J. (2015). Chainer: A next-generation open source framework for deep learning. *NeurIPS Workshop*.
5. Akiba, T., et al. (2019). Optuna: A next-generation hyperparameter optimization framework. *KDD*.
6. RIKEN AIP. (2024). *Annual Report 2024*. Tokyo.
7. Wurman, P. R., et al. (2022). Outracing champion Gran Turismo drivers with deep reinforcement learning. *Nature*, 602, 223-228.
8. Sakana AI. (2024). *Evolutionary Optimization of Model Merging Recipes*. arXiv:2403.13187.
9. Copyright Act of Japan, Article 30-4 (Use for Information Analysis). Amended 2018. [in Japanese: 著作権法第 30 条の 4]
