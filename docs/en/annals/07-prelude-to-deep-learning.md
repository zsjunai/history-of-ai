# Annals · The Prelude to Deep Learning (2006–2012)

> In 2006, an Englishman who had quietly held the line on neural-network research at the University of Toronto for almost thirty years published a paper showing that deep networks could be pretrained one layer at a time. The discovery did not change the world by itself — what it changed was the conviction of a small group of people. Three years later, a Chinese-American scientist at Princeton began to lead the labeling of millions of images and built a dataset called ImageNet. Three years after that, a neural network trained on a gaming graphics card crushed every traditional method on that very dataset. The lights of dawn were already lit; most people had simply not yet looked up.

## I. The Central Question: What Can a Deep Network Learn?

The era of statistical learning brought enormous practical success — SVMs winning competitions, Bayesian methods coping with uncertainty, Google building the world's best search engine on statistical methods. But these methods all shared a limit: they relied on **hand-crafted features**.

Take image recognition. To get an SVM to tell whether a photo contains a cat, you first had to convert the raw pixels into meaningful features — edge orientations, color histograms, texture descriptors. The features were designed by human experts using domain knowledge. The SVM only handled the last step: drawing a decision boundary in the space defined by those features.

The problem was that, for tasks of sufficient complexity, humans could not design good enough features. A cat in a photo may be in profile, full-face, curled up, partially occluded, or blurred — what hand-crafted feature set could cover all of these?

The core promise of deep learning was that the machine would **learn the features itself**. Not one layer of features, but many — from low-level edges and textures, through mid-level parts and shapes, up to high-level objects and scenes. Each layer would build a more abstract representation on top of the previous one. This was the meaning of "deep" — not the physical depth of the network but the depth of representational hierarchy.

But before 2006 there was a seemingly insurmountable technical obstacle in the way of deep networks: the **vanishing gradient**. As a network grew deeper, the gradient signal of backpropagation decayed exponentially in passing through layers, so the lower-layer weights could barely be updated. The deeper the network, the harder the training — it looked like a dead knot.

## II. Hinton's Breakthrough: Deep Belief Networks

### Layer-wise Pretraining

In 2006, **Geoffrey Hinton (1947–)** at the University of Toronto published a paper that turned the course of history — "A Fast Learning Algorithm for Deep Belief Nets."

Hinton proposed a clever strategy to bypass the vanishing-gradient problem: **greedy layer-wise pretraining**. Instead of training the entire deep network at once, the network was broken into layers and trained one at a time. First, the lowest layer was trained with unsupervised learning (using a restricted Boltzmann machine, RBM) to learn low-level features of the data; then, with the first layer fixed, the second layer was trained the same way; and so on, layer by layer. After all layers had been pretrained, the entire network was fine-tuned with labeled data.

The effect was striking. Pretraining gave each layer's weights a good starting point, so subsequent backpropagation fine-tuning no longer had to grope from random initialization — and the vanishing-gradient problem was substantially eased.

### Naming "Deep Learning"

Hinton and his collaborators needed a name for this reborn field. "Neural networks" carried too many negative associations after two periods of exile. "Connectionism" sounded more like philosophy than engineering. Hinton picked a new term — "deep learning."

The naming was a strategic choice. "Deep" highlighted the key innovation of multilayer representations (and quietly suggested the limits of "shallow" methods); "learning" connected with the already-accepted field of machine learning. In an age when "AI" was still a dirty word, "deep learning" sounded both technical and fresh, free of historical baggage.

### The Three Standard-Bearers

Hinton was not fighting alone. He, **Yann LeCun (1960–)** at NYU, and **Yoshua Bengio (1964–)** at the University of Montreal had formed a tight alliance through the 2000s — later known as the "three pioneers of deep learning."

The three of them had a brutal time before 2006. LeCun recalled that, in the SVM era, his neural-network papers were routinely rejected by top conferences. Bengio in Montreal was equally lonely — his MILA lab (then called LISA) was one of the few places in the world still doing serious work on neural networks. Hinton in Toronto was carrying the banner more or less alone — from the 1986 backpropagation paper to the 2006 deep belief networks, twenty years passed with almost no mainstream recognition; counting from his Edinburgh PhD in 1978, he had held out for nearly thirty years.

In 2004, Hinton persuaded the Canadian Institute for Advanced Research (CIFAR) to set up a program called Neural Computation and Adaptive Perception (NCAP), bringing the three pioneers and other like-minded researchers under one roof. CIFAR's funding was modest, but the meaning of the program was institutional — at a time when academia had written off neural networks, at least one organization was willing to bet on them.

## III. ImageNet: The Infrastructure of Data

### Fei-Fei Li's Vision

If Hinton solved "how to train a deep network," **Fei-Fei Li (1976–)** solved a more basic problem: "what data shall we train on?"

In 2006, Li, then teaching at the University of Illinois Urbana–Champaign, conceived a bold idea. After moving to Princeton in 2007, she formally launched the project: build a large-scale image dataset that covered the whole visual world humans care about. She called it ImageNet.

The idea was considered crazy at the time. The computer-vision community was used to evaluating algorithms on small datasets of hundreds to a few thousand images — Caltech-101 (about 9,000) was already considered "big." Li's target was **fourteen million images** across more than 20,000 categories, each labeled by hand. At the time, that scale looked not just unnecessary but impossible to deliver.

Li's stroke of genius was finding a scalable annotation method: using Amazon's Mechanical Turk crowdsourcing platform to hire annotators worldwide at very low cost. Three years of work produced ImageNet's first release in 2009 (initially containing several million images and several thousand categories), and it kept growing — eventually to about 14 million images and over 21,000 categories.

### The ImageNet Large-Scale Visual Recognition Challenge

In 2010, Li and her colleagues founded the ImageNet Large-Scale Visual Recognition Challenge (ILSVRC), an annual competition in which systems classified images into 1,000 categories using about 1.2 million training images. The competition gave computer vision a clear, fair, quantitative benchmark — much like chess in the Deep Blue era, a "yardstick of intelligence."

The 2010 and 2011 ILSVRC winners both used traditional feature engineering (such as SIFT + Fisher Vector + SVM), with error rates in the 25–28 percent range. No one foresaw what was about to happen in 2012.

## IV. GPUs: Gaming Cards Become AI Engines

### From Pixels to Matrices

The other piece of the deep-learning puzzle was compute. Training a deep network required performing matrix multiplications and gradient computations over enormous data, again and again — exactly what Graphics Processing Units (GPUs) were good at.

GPUs had originally been designed for game rendering — turning 3-D models into pixels on a screen took huge numbers of parallel floating-point operations. AI researchers had noticed this parallel power early on, but before 2006 GPU programming had been excruciating — you had to disguise your computation as graphical operations in the rendering pipeline.

In late 2006, NVIDIA announced its CUDA (Compute Unified Device Architecture) platform, formally released in 2007. For the first time it allowed developers to write general-purpose GPU programs in a C-like language. NVIDIA's CEO **Jensen Huang (1963–)** made a decision that would prove enormously prescient: stop treating the GPU only as gaming hardware and turn it into a general-purpose parallel computing platform.

CUDA lowered the barrier to GPU programming and pulled in a wave of AI researchers willing to train neural networks on GPUs. In 2009, Stanford's **Andrew Ng (1976–)** and his students published an important experimental result: training deep networks on a GPU was about 70 times faster than on a CPU. That meant training that had once taken weeks could be finished in hours — the compute bottleneck had cracked open.

## V. Watson and Siri: AI Returns to Public View

### IBM Watson

In February 2011, IBM's Watson system defeated two legendary champions — Ken Jennings and Brad Rutter — on the American TV quiz show *Jeopardy!*.

Watson was the opposite of Deep Blue. Deep Blue used brute-force search to attack a closed problem with explicit rules; Watson had to understand puns, metaphors, and cultural references in natural language and retrieve answers from open-domain knowledge bases. Its tech stack was a complex hybrid — information retrieval, natural-language processing, machine learning, and knowledge graphs all woven together.

Watson's victory was an important moment for AI's return to public attention. It showed that AI could compete not only on board games but on tasks requiring "common sense" and language understanding — even though Watson's "understanding" was still statistical rather than truly semantic.

### Siri

In October of the same year, Apple launched Siri on the iPhone 4S — the first voice assistant widely used by mainstream consumers. Siri's technical roots traced to the CALO project at SRI International, funded by DARPA.

By today's standards, Siri's accuracy was unimpressive, but its significance was in **product**ization — for the first time, ordinary people interacted with an "AI" every day. Speech recognition, natural-language understanding, dialogue management — technologies that had been argued over in academic papers for decades — had finally become tools in everyone's pocket.

Watson and Siri together accomplished one thing: they took "AI" from a pejorative back to a positive in public discourse. That created a favorable atmosphere for the deep-learning wave that was about to break.

## VI. Undercurrents and Foreshadowing

**First, three forces were converging.** The deep-learning explosion required three conditions to mature simultaneously: algorithms (deep belief networks, improvements to backpropagation), data (ImageNet, internet-scale datasets), and compute (GPU + CUDA). By 2012, the three were available together for the first time. It was no coincidence; it was the meeting point of technical lines that had been developing independently for decades.

**Second, the academic power structure was about to flip.** In 2006–2012, the AI academic world was still dominated by SVMs, kernel methods, and probabilistic graphical models. Reviewers at top conferences (NeurIPS, ICML) were largely skeptical of neural networks. Hinton, LeCun, and Bengio were "outsiders" in this ecosystem. AlexNet's victory in 2012 would flip the structure entirely — from then on, researchers who did not do deep learning would be the minority.

**Third, industry was ready.** By the early 2010s, Google, Facebook (now Meta), Microsoft, Baidu and other tech giants had accumulated huge volumes of user data and had the compute infrastructure to train large models. They needed only a method that could exploit those resources effectively — and deep learning was that method.

**Fourth, a competition was about to change everything.** In September 2012, two of Hinton's students — **Alex Krizhevsky (1986–)** and **Ilya Sutskever (1986–)** — would submit a deep convolutional neural network called AlexNet to the ImageNet challenge. Its error rate would be more than 10 percentage points lower than the runner-up — a gap so large that the judges initially thought there was an error in the data. In that moment, deep learning crossed from prelude into dawn.

## VII. Timeline

| Year | Event | Key Figures |
|------|-------|-------------|
| 2004 | Hinton persuades CIFAR to set up a program for neural computation | Hinton |
| 2006 | Hinton publishes the deep belief network paper; "deep learning" begins to return | Hinton |
| 2007 | NVIDIA formally releases the CUDA platform; general-purpose GPU computing becomes feasible | Huang |
| 2007 | The ImageNet project is formally launched at Princeton | Li |
| 2009 | The ImageNet dataset is first released | Li |
| 2009 | Ng's team shows that GPUs train neural networks about 70 times faster than CPUs | Ng |
| 2010 | The first ImageNet Large-Scale Visual Recognition Challenge (ILSVRC) is held | Li |
| 2011 | IBM Watson defeats human champions on *Jeopardy!* | — |
| 2011 | Apple launches Siri, the first mainstream consumer voice assistant | — |
| 2012 | AlexNet wins ILSVRC by a wide margin; the deep-learning revolution begins | Hinton, Sutskever |

---

::: tip Historian's Note
The story of the prelude to deep learning is the story of a few people standing against the mainstream. Hinton kept the watch in Toronto for thirty years, LeCun ploughed his own furrow in New York, Bengio quietly accumulated work in Montreal — they did not hold on because they had seen the precise future, but because they refused to accept the verdict that "neural networks are dead." Fei-Fei Li, when everyone else thought a few thousand images were enough, insisted on labeling fourteen million. Jensen Huang, when everyone else thought GPUs were just gaming hardware, turned CUDA into a general-purpose computing platform. None of these choices looked rational at the time — grants were hard to win, papers were hard to publish, peers were dismissive. In hindsight, those very "irrational" persistences had been laying in all the ammunition for the explosion of 2012. History never rewards the followers. It rewards the ones who keep planting trees in the winter.
:::

## Eyewitness Accounts

::: info Call for contributions
If you witnessed or have firsthand recollections of this period, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

---

## References

1. Hinton, G. E., Osindero, S., & Teh, Y. W. (2006). "A Fast Learning Algorithm for Deep Belief Nets." *Neural Computation*, 18(7), 1527–1554.
2. Deng, J., Dong, W., Socher, R., Li, L., Li, K., & Fei-Fei, L. (2009). "ImageNet: A Large-Scale Hierarchical Image Database." *CVPR 2009*.
3. Raina, R., Madhavan, A., & Ng, A. Y. (2009). "Large-scale Deep Unsupervised Learning using Graphics Processors." *ICML 2009*.
4. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *NeurIPS 2012*.
5. Ferrucci, D. et al. (2010). "Building Watson: An Overview of the DeepQA Project." *AI Magazine*, 31(3), 59–79.
6. Nickolls, J., Buck, I., Garland, M., & Skadron, K. (2008). "Scalable Parallel Programming with CUDA." *ACM Queue*, 6(2), 40–53.
7. LeCun, Y., Bengio, Y., & Hinton, G. (2015). "Deep Learning." *Nature*, 521, 436–444.
8. Russakovsky, O. et al. (2015). "ImageNet Large Scale Visual Recognition Challenge." *IJCV*, 115(3), 211–252.
9. Bengio, Y. (2009). "Learning Deep Architectures for AI." *Foundations and Trends in Machine Learning*, 2(1), 1–127.
10. Nilsson, N. J. (2009). *The Quest for Artificial Intelligence*. Cambridge University Press.
