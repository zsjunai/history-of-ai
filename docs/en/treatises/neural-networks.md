# Treatise · The Rise and Fall of Neural Networks

> Eighty years of neural networks is not a linear tale of technical progress, but a life-and-death struggle between two intellectual camps. The symbolists believed in logic and rules, treating neural networks as a wrong turn; the connectionists believed in learning from data, treating neural networks as the true road to intelligence. This long war — through humiliations, winters, exiles, and a final reversal — forms the most turbulent chapter in modern artificial intelligence.

## Act One: Prophets and Charlatans (1943–1969)

The overture is quiet but far-reaching. In 1943, the neurophysiologist **Warren McCulloch (1898–1969)** and the mathematical prodigy **Walter Pitts (1923–1969)** published a paper proving an astonishing proposition: the operation of a neuron could be described in terms of mathematical logic. The thing posterity would call the McCulloch–Pitts (MCP) model was crude in the extreme — binary inputs, a weighted sum, an output of one if it crossed a threshold — but for the first time, it built a bridge between biological neurons and mathematical computation.

Six years later, the Canadian psychologist **Donald Hebb (1904–1985)** proposed an intuition-shaped learning rule: neurons that fire together, wire together. This Hebbian learning rule sounded plain, yet it laid the first biological cornerstone for the audacious idea that machines could learn from experience.

Then **Frank Rosenblatt (1928–1971)** stepped onto the stage.

In 1958, this Cornell psychologist invented the perceptron — the first neural network capable of automatically adjusting its own weights from data. The perceptron itself was not complicated: multiple inputs were summed through learnable weights, passed through an activation function, and on every error the weights moved in the direction of less error. What truly ignited the public was an infamous press conference.

In July 1958, the U.S. Navy gave the machine a high-profile demonstration in Washington. Rosenblatt told reporters that the perceptron would one day be able to "walk, talk, see, write, reproduce itself, and be conscious of its existence." *The New York Times* printed his words almost verbatim. The whole academic world buzzed — and frowned.

Across the country at MIT, one man read those reports with a darkening face. His name was **Marvin Minsky (1927–2016)**.

Minsky was the standard-bearer of symbolic AI. To him, the essence of intelligence was logical reasoning, knowledge representation, and rule manipulation — you teach a machine to *think*, you do not let it *learn* from data. Rosenblatt's perceptron, in his eyes, was a beautifully packaged hoax: a toy that could not solve even the simplest logical problems, sold as the key to intelligence itself.

Minsky resolved to write a book and end the farce.

## Act Two: A Book Kills a Discipline (1969–1985)

In 1969, Minsky and his colleague **Seymour Papert (1928–2016)** published *Perceptrons*. The slim volume used rigorous mathematics to expose a fatal flaw of the single-layer perceptron: it could not solve the XOR problem — a simple non-linear classification any beginner of logic could grasp.

Technically, the critique was precise. Single-layer perceptrons could indeed only handle linearly separable problems. But Minsky and Papert did something more subtle: they hinted that multilayer networks were unlikely to overcome these limits either, without rigorous proof. The hint was magnified by the field into a verdict.

Was the book honest scholarly criticism, or a deliberate political strike? Sixty years on, the argument has not died. Sympathizers say Minsky simply pointed out that the emperor had no clothes; detractors note that he and Rosenblatt had been at odds since the Dartmouth Conference of 1956 — symbolists and connectionists were fighting not only for prestige but also for millions of dollars in defense funding. Whatever the motive, the consequence was devastating.

DARPA and the major funding agencies froze neural-network grants almost overnight. Submitting a neural-network paper became excruciating — top journals routinely rejected such work with the verdict that "this direction has been proven a dead end." Researchers fled into symbolic reasoning, expert systems, and formal logic. Neural networks entered a fifteen-year winter.

The connectionists were exiled to the margins. But they did not disappear.

## Act Three: Underground Resistance and the First Revival (1986–1995)

In the deepest cold, a stubborn few kept digging.

In 1982, the physicist **John Hopfield (1933–)** proposed the Hopfield network, recasting neural networks in the language of statistical mechanics and showing they could function as associative memory systems. The paper appeared in the *Proceedings of the National Academy of Sciences* — published by a physicist rather than by a "neural-network researcher," the camouflage of identity helped the idea travel.

The real turn came in 1986. **David Rumelhart (1942–2011)**, **Geoffrey Hinton (1947–)**, and **Ronald Williams (1948–)** published in *Nature* a systematic exposition of backpropagation. The algorithm was breathtakingly elegant: feed a signal forward through layers, compute the error against the correct answer, then propagate that error backward layer by layer, using the chain rule to compute the precise contribution of each weight to the total error, and finally adjust the weights along the direction of gradient descent.

Backpropagation shattered Minsky's curse. Multilayer networks could not only be trained, they could comfortably solve XOR — and tasks of nonlinear pattern recognition far beyond it. **Yann LeCun (1960–)** soon applied backpropagation to a convolutional neural network (CNN), achieving handwritten ZIP-code recognition in 1989. It was one of the earliest commercial successes of deep learning in the real world.

The connectionists seemed to have won. The victory was brief.

## Act Four: Buried Again (1995–2006)

In the mid-1990s, neural networks fell once more, and this time the rival was stronger.

The trouble was practical. The hardware of the day was nowhere near enough to train deep networks. As layers piled up, the vanishing gradient problem followed like a shadow — the error signal decayed almost to zero on its way back through the layers, and the bottom weights barely moved. Training was slow, fragile, and irreproducible.

Meanwhile a new method, theoretically gorgeous, burst onto the stage: the support vector machine (SVM). Developed by Vladimir Vapnik and others, SVM rested on convex optimization, was guaranteed to find a global optimum, and performed astonishingly well on small datasets. By contrast, neural networks looked like a moody black box — no convergence guarantees, no theoretical elegance, results that hung on the luck of random initialization.

The whole machine-learning community tilted toward SVM. At top venues such as NeurIPS (then NIPS), submitting a neural-network paper was nearly academic suicide. The connectionists were marginalized once again.

Looking back at those years, Hinton said one line that became the most moving annotation of the war: "I kept doing it because I believed the brain was doing something like this."

He was not pursuing a promising research direction. He was defending a conviction.

## Act Five: Triumph of the Heretics (2006–2017)

In 2006, Hinton proposed deep belief networks (DBN) and a layer-wise pre-training strategy: initialize the weights layer by layer with unsupervised learning, then fine-tune with backpropagation. The trick sidestepped the vanishing gradient and demonstrated for the first time that genuinely deep networks could be trained. Hinton gave the direction a new name — deep learning.

Academia's reaction was lukewarm. Most treated it as another dying gasp of the connectionists.

Then, in October 2012, the results of the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) were announced.

Hinton's student **Alex Krizhevsky (1986–)** had submitted a deep convolutional network called AlexNet. When the numbers appeared on the big screen, the room fell briefly silent: the top-5 error rate had plunged from the previous year's best of 26.2 percent to 16.4 percent, more than ten percentage points ahead of the runner-up. The drop was so large that many in the audience first assumed the data was wrong.

The data was not wrong. Behind AlexNet stood a historical convergence of three forces: GPUs delivered unprecedented parallel compute; the internet era had piled up massive labeled data (ImageNet itself contained more than 14 million images); and algorithmic innovations such as the ReLU activation and Dropout regularization eased the technical headaches of training.

After that day, the world was different. From academic conferences to industrial labs, everyone was talking about deep learning. CNNs swept computer vision — image classification, object detection, semantic segmentation, face recognition. Recurrent neural networks (RNN) and their improved cousin LSTM took over sequence processing — machine translation, speech recognition, text generation.

The heretics ridiculed in the winter were suddenly prophets.

## Act Six: Attention Changes Everything (2017–Present)

In 2017, eight researchers at Google published a paper. Its title was just five words: *Attention Is All You Need*.

The paper proposed the Transformer architecture. It made what then seemed a reckless decision: discard RNN's recurrent structure entirely, and rely solely on self-attention. Self-attention let every element in a sequence "see" every other element at once, modeling dependencies of arbitrary distance directly without the step-by-step relay of an RNN. More crucially, the architecture was naturally suited to parallel computation — training speed could rise by orders of magnitude.

None of the eight authors were academic celebrities. The title was plain, almost flippant. But those five words changed everything.

In 2018, Google released BERT (Bidirectional Encoder Representations from Transformers), sweeping nearly every NLP benchmark. The same year, OpenAI shipped the first GPT. GPT-2, GPT-3, and GPT-4 followed, with parameter counts climbing from hundreds of millions to over a trillion. Researchers discovered the seductive scaling laws: model performance improved as a predictable power-law function of parameters, data, and compute. Stranger still were the emergent capabilities — past a certain scale threshold, models suddenly displayed reasoning, programming, and multi-step planning that smaller models entirely lacked, as if quantitative change had finally triggered a qualitative one.

The Transformer's reach exceeded NLP. The Vision Transformer (ViT) showed that images, too, could be processed by the same architecture; multimodal large models unified text, images, audio, and video under one framework. Looking back from 2026, the Transformer is no longer merely an architecture — it is the lingua franca of artificial intelligence in this era.

## Open Questions

The connectionists won. But the victors face an abyss.

The theoretical foundations of deep learning remain incomplete — we know it works without being able to explain fully *why*. The interpretability of trillion-parameter networks is still open: when a model makes a decision, can we truly understand what is happening inside? The energy bill for training a frontier model is staggering, and sustainability is a pressing concern. The deepest question of all is alignment: as these models grow more capable, how do we ensure their goals remain consonant with human interests?

Symbolism is not dead. Neuro-symbolic AI is becoming a new frontier, attempting to fuse the connectionist gift for learning with the symbolist gift for reasoning. Six decades of war may end not in extermination but in synthesis.

The deepest lesson of this story, however, lies beyond the technical.

---

::: tip Historian's Note
Surveying eighty years of neural networks, one feels the weight of recurrence. Rosenblatt's perceptron was born in fervor and killed by a single edict from authority. Minsky's *Perceptrons* was technically unimpeachable, yet politically lethal — a correct local critique, magnified into a death sentence on an entire direction. The fifteen-year winter that followed forced countless gifted minds to abandon their work, and delayed by a decade or more breakthroughs that might otherwise have arrived sooner. Hinton, LeCun, and **Yoshua Bengio (1964–)** held their ground in the academic wilderness for twenty years, not because they possessed the proof of victory, but because of one plain conviction: the brain must be doing something like this. The history of science teaches the same lesson again and again — paradigm shifts are most fiercely resisted not by ignorance, but by the successful practitioners of the previous paradigm. The establishment commands the resources, the rostrum, and the review committees; their opposition is not malice but a sincere defense of their worldview — and this sincerity is the most stubborn enemy of progress. ImageNet 2012 was shocking not only for the ten-point drop in error rate, but because it broke a four-decade consensus with facts that could not be disputed. The lesson of history is this: when everyone believes a road leads nowhere, the question worth asking is whether the evidence for that belief is truly sufficient.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on neural networks or witnessed key events in their history, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. McCulloch, W. S., & Pitts, W. (1943). A logical calculus of the ideas immanent in nervous activity. *Bulletin of Mathematical Biophysics*, 5(4), 115-133.
2. Hebb, D. O. (1949). *The Organization of Behavior*. Wiley.
3. Rosenblatt, F. (1958). The perceptron: A probabilistic model for information storage and organization in the brain. *Psychological Review*, 65(6), 386-408.
4. Minsky, M., & Papert, S. (1969). *Perceptrons: An Introduction to Computational Geometry*. MIT Press.
5. Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. *Nature*, 323(6088), 533-536.
6. Hopfield, J. J. (1982). Neural networks and physical systems with emergent collective computational abilities. *Proceedings of the National Academy of Sciences*, 79(8), 2554-2558.
7. LeCun, Y., Boser, B., Denker, J. S., et al. (1989). Backpropagation applied to handwritten zip code recognition. *Neural Computation*, 1(4), 541-551.
8. Hinton, G. E., Osindero, S., & Teh, Y. W. (2006). A fast learning algorithm for deep belief nets. *Neural Computation*, 18(7), 1527-1554.
9. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Advances in Neural Information Processing Systems*, 25.
10. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
11. Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *Proceedings of NAACL-HLT*, 4171-4186.
12. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). Scaling laws for neural language models. *arXiv preprint arXiv:2001.08361*.
