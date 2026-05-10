# Biography · Fei-Fei Li

> She did not invent an algorithm; she built a dataset — and that dataset made the world believe in deep learning for the first time.

![Fei-Fei Li, AI for Good Global Summit, 2017](/images/people/fei-fei-li.jpg){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## Beijing, New Jersey, and a Dry-Cleaning Shop

**Fei-Fei Li (1976–)** was born in Beijing in 1976 and spent her childhood in Chengdu, Sichuan. Her father was an engineer, her mother a high-school teacher; the household was modest and bookish. She read widely from a young age, both classical Chinese literature and Western science fiction.

In 1992, at sixteen, she emigrated to the United States with her parents and settled in Parsippany, New Jersey. Her parents' English was poor, and they used their savings to take over a small dry-cleaning shop. By day she went to high school; after class she worked at the shop, ironing clothes, working the register, keeping the books. She learned English a sentence at a time at the high school and at the shop counter.

But there was always another line drawn through her life. In 1995 she was admitted to Princeton University with distinction to study physics. For four undergraduate years she took the train back to the family's dry cleaner in New Jersey on weekends. She has returned to this period in her memoir again and again — it taught her two things: the boundary-consciousness of an immigrant family, and the conviction that "work is just work."

In 1999 she graduated *summa cum laude* from Princeton. Her senior thesis lay at the intersection of physics and neuroscience. She came to realise that what truly drew her was not the particle but the brain — the machine that lets particles give rise to consciousness.

## A Vision Problem at Caltech

In 2000 she entered the California Institute of Technology to read for a doctorate in electrical engineering, supervised by the computer-vision pioneer Pietro Perona and the neuroscientist Christof Koch — Koch had long collaborated with the Nobel laureate Francis Crick on the neural basis of consciousness. Caltech gave her at once an engineer's tools and a scientist's questioning style.

Her dissertation studied "one-shot learning" — why does a person, on seeing a single photograph, recognise a new object? In the early 2000s vision community this was off the main road; the mainstream worked on hand-crafted features plus classifiers. She believed the heart of the matter lay in data: people learn from few examples because their brains carry a lifetime of visual priors.

She received her PhD in 2005, served briefly as an assistant professor at the University of Illinois Urbana-Champaign, and moved to Princeton in 2007. That year she made a decision that would change the fate of AI.

## ImageNet: A Wager on Ten Million Images

In 2007, sitting in her Princeton office, Li was asking why computer-vision algorithms kept setting new records on academic benchmarks while failing on real-world images. Her answer ran against the consensus: the problem was not the model but the data.

The mainstream dataset of the time, *Caltech-101*, contained 101 categories and 9,000 images. The real world contains tens of thousands of object categories. She decided to build a visual dataset on a scale never attempted before: covering every noun in WordNet, with hundreds to thousands of images per noun — aiming at tens of millions of images and more than twenty thousand categories.

The hardest part was annotation. Hiring professional annotators would have taken decades. In 2008 she noticed Amazon's newly launched crowdsourcing platform, Mechanical Turk, which let one parcel out small tasks to part-time workers around the world. With her PhD student Jia Deng and others she broke image classification into simple "is this an X?" yes/no prompts and dispatched them to tens of thousands of Turkers. Over two years three million images were verified by hand, covering more than five thousand categories. The final release contained roughly fifteen million images and twenty-two thousand categories.

Academia was almost unanimously unimpressed. In 2009 she submitted *ImageNet: A Large-Scale Hierarchical Image Database* to *CVPR*; the response was muted — "what kind of research is this, building a dataset?" She kept going.

In 2010 she co-organised the ImageNet Large Scale Visual Recognition Challenge (ILSVRC), opening to teams worldwide a 1,000-class subset of about 1.2 million images. For the first two years, top-5 error rates of the best algorithms hovered around 26 percent.

Until 2012.

## The Year the World Changed Tracks

In September 2012, Hinton's lab at the University of Toronto submitted a deep convolutional neural network — AlexNet — by **Alex Krizhevsky (1986–)** and **Ilya Sutskever (1986–)**. It cut the top-5 error rate from 26.2 percent to 15.3 percent in a single stroke.

The result shook the entire vision community. Neural networks, dormant for thirty years, had at last left every traditional method behind on the stage of ImageNet's thousand classes and millions of images. The starting gun for the deep-learning revolution went off at ILSVRC 2012.

Li later recalled: it was at that moment she understood that the meaning of ImageNet was not its accuracy score but the wide grassland it had given a horse called "deep learning" to gallop on. Without ImageNet, AlexNet would not have happened; without AlexNet, today's large models might still be waiting for their inflection point.

ILSVRC continued through 2017, by which time the error rate had fallen to 2.3 percent — already below the human ceiling. Through that decade, almost every important vision model — VGG, GoogLeNet, ResNet, SENet — was born on the ImageNet track.

## Stanford, Google, and HAI

In 2009 Li moved from Princeton to Stanford as an assistant professor; from 2012 she directed the Stanford Vision Lab. She raised a generation of students who would later define AI: Jia Deng (now at the University of Michigan), Andrej Karpathy (OpenAI / Tesla), Justin Johnson, and others.

In January 2017 she joined Google as Chief Scientist and head of AI/ML at Google Cloud — her first immersion in the core of industry, leading Google Cloud's AutoML and Vision API. After two years, in September 2018, she returned to Stanford.

In March 2019, with the philosopher John Etchemendy, she co-founded the Stanford Human-Centered AI Institute (HAI). HAI's premise was simple: AI must be human-centred, with technology, policy, and ethics moving together. She testified before Congress, joined the working group on the United States National AI Research Resource (NAIRR), and published in *Nature* on AI governance. She moved from being a computer-vision scholar to a figure on the stage of science policy.

In 2020 she was elected to the U.S. National Academy of Engineering and to the National Academy of Medicine in the same year — a researcher of image classification recognised simultaneously by two of the most demanding institutions in engineering and medicine.

## Spatial Intelligence and World Labs

In 2023 she published her memoir *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI*. The book returns to the dry cleaner in Parsippany, the dark room at Caltech, the night ImageNet went online — weaving a personal story and the history of AI into an immigrant's scientific recollection.

In April 2024 she co-founded **World Labs** with the computer-graphics scholar Ben Mildenhall (the author of NeRF), Christoph Lassner, and Justin Johnson, focusing on **spatial intelligence** — making AI not merely understand "what" is in an image but understand "where" and "what can be done" in three-dimensional space. It is her wager on the next decade: from two-dimensional pixels to three-dimensional worlds, from perception to action.

In September 2024, World Labs raised approximately 230 million US dollars across two rounds, surpassing a one-billion-dollar valuation and becoming one of the youngest unicorns in AI.

## Selected Works

| Year | Work | Significance |
|------|------|------|
| 2003 | "A Bayesian Approach to Unsupervised One-Shot Learning of Object Categories", *ICCV* (with Pietro Perona) | An early framework for one-shot learning |
| 2007 | "Learning Generative Visual Models from Few Training Examples", *CVIU* | Probabilistic generative models for object recognition |
| 2009 | "ImageNet: A Large-Scale Hierarchical Image Database" (with Jia Deng et al.), *CVPR* | The signature dataset of the deep-learning era |
| 2015 | "ImageNet Large Scale Visual Recognition Challenge", *IJCV* (with Deng, Russakovsky et al.) | Five-year retrospective of ILSVRC; defined visual benchmarks |
| 2017 | "Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations", *IJCV* | An early milestone in vision-language alignment |
| 2023 | *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI* | Memoir; a humanist account of the history of AI |

## Historian's Note

::: tip Historian's Note
Fei-Fei Li is not the most prolific paper-writer, nor the inventor of an algorithm. What she did was singularly unglamorous: spend two years organising tens of thousands of strangers to label fifteen million images, one by one. In 2009 no one thought it research; in 2012 everyone understood it was a revolution. The story of deep learning is often told as a story of three men — **Geoffrey Hinton (1947–)**, **Yann LeCun (1960–)**, and **Yoshua Bengio (1964–)** — but without the grassland called ImageNet, the old neural-network horse would have stayed fenced in by small data. She proved a truth long ignored by the algorithmic world: data is not an accessory to the model; data is itself a form of intelligence. From the dry-cleaner counter to the Stanford podium, from images labelled one by one to *Human-Centered AI* and now to World Labs's "spatial intelligence," she has consistently pulled AI back to the human — to the human brain, to human ethics, to the human world.
:::

## Eyewitness Accounts

::: info Call for contributions
If you contributed to ImageNet labelling, took part in ILSVRC, or worked with Fei-Fei Li at Stanford Vision Lab, HAI, or World Labs, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Fei-Fei, L., Fergus, R., & Perona, P. (2003). "A Bayesian approach to unsupervised one-shot learning of object categories." *Proceedings of ICCV*.
2. Deng, J., Dong, W., Socher, R., Li, L.-J., Li, K., & Fei-Fei, L. (2009). "ImageNet: A Large-Scale Hierarchical Image Database." *Proceedings of CVPR*.
3. Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., et al. (2015). "ImageNet Large Scale Visual Recognition Challenge." *International Journal of Computer Vision*, 115(3), 211–252.
4. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *Proceedings of NeurIPS*.
5. Krishna, R., Zhu, Y., Groth, O., et al. (2017). "Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations." *International Journal of Computer Vision*, 123(1), 32–73.
6. Li, Fei-Fei (2023). *The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI*. Flatiron Books.
7. Markoff, J. (2012). "Seeking a Better Way to Find Web Images." *The New York Times*, November 19, 2012.
8. Metz, C. (2024). "Fei-Fei Li Starts a Spatial Intelligence Company, World Labs." *The New York Times*, September 2024.
9. National Academy of Engineering (2020). "Members Elected in 2020." NAE Press Release.
