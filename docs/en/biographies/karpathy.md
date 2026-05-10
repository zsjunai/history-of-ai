# Biography · Andrej Karpathy

> First-rate research, first-rate engineering, first-rate teaching — he did each in turn. Then he wrote sixty lines of Python and let a generation finally see what GPT really looks like.

![Andrej Karpathy, OpenAI-era interview still](/images/people/karpathy.png){width=200 style="float:right; margin-left:1em; margin-bottom:1em;"}

## From Bratislava to Toronto

**Andrej Karpathy (1986–)** was born in Bratislava, Slovakia, in 1986. At fifteen he moved with his family to Toronto, Canada.

At the University of Toronto he read for a joint degree in computer science and physics, and stayed for a master's at the same university — which happened to house the laboratory of **Geoffrey Hinton (1947–)**.

Karpathy was never formally Hinton's student, but he and **Ilya Sutskever (1986–)** worked in the same building, and he watched deep neural networks turn from a fringe topic into something that won competitions.

Around 2011 he moved south to Stanford for a doctorate under **Fei-Fei Li (1976–)**. His subject lay at the meeting of computer vision and natural language: teach a neural network to look at an image and write a sentence about it.

His dissertation paper, *Deep Visual-Semantic Alignments for Generating Image Descriptions* (2015), became the canonical work on that line.

## CS231n: The Best Deep-Learning Course on the Internet

From 2015 to 2017 Karpathy helped develop and lectured Stanford's CS231n, *Convolutional Neural Networks for Visual Recognition*.

He did not give the course as a teacher's monologue but as a workshop in which he and his students built networks from scratch: from affine functions to backpropagation, from SGD to Adam, from LeNet to ResNet — every formula accompanied by a NumPy implementation that would actually run.

His lecture notes were translated into dozens of languages; his assignments quietly circulated among graduate students worldwide. Many engineers and researchers active in industry today list "finishing the CS231n notes" as the true beginning of their entry into deep learning.

Beyond his papers, the course was where the world first saw how seriously Karpathy treated teaching — as seriously as research itself.

## 2015: Founding Researcher at OpenAI

At the end of 2015 Karpathy joined the newly founded OpenAI as a founding researcher. The lab was then a small office near Pier 70, desks pushed together, GPUs of every brand on top.

He worked on early lines in reinforcement learning and generative models. On his blog he wrote the widely circulated essay *The Unreasonable Effectiveness of Recurrent Neural Networks* — showing how an ordinary character-level LSTM, after "reading" Shakespeare, could write a passably Shakespearean paragraph, and giving countless readers their first intuitive sense of the magic of sequence models.

## 2017: Tesla and Autopilot

In June 2017, Karpathy left OpenAI to join Tesla as Director of AI and Autopilot Vision.

Musk's mandate to him was clear and severe: rewrite Autopilot's vision system, then a patchwork drawn from third-party suppliers, into a fully Tesla-owned end-to-end neural-network stack.

He stayed five years. He pushed a team of fewer than a hundred to its limits, moving from single-frame recognition to multi-camera "Bird's Eye View" networks, then folding perception, prediction, and planning step by step into single neural networks — *Hydra Net* and *Occupancy Networks*.

In his Tesla AI Day talks at CVPR and elsewhere he popularised the phrase **Software 2.0** — "the future is not coded, it is trained from data."

These five years were the hardest engineering stretch of his life. Every iteration of FSD (Full Self-Driving) carried real safety responsibility on real roads.

In July 2022 Karpathy announced his departure from Tesla. In his farewell post he wrote: "It has been a pleasant journey. Next, I want to focus on the AI work and education I have long loved."

## Back to OpenAI, Then Out Again

In February 2023 Karpathy returned to OpenAI. He took part in research after GPT-4 but stayed only about a year. In February 2024 he left again, saying he wanted to spend more time on "his own projects." The meaning soon became clear: he wanted to take AI education seriously.

## nanoGPT, makemore, and *Let's Build GPT from Scratch*

From 2022 he open-sourced a series of teaching projects: *micrograd* (a backpropagation framework in fewer than 200 lines), *makemore* (a step-by-step character-level generative model from bigram statistics to Transformer), and *nanoGPT* (a trainable GPT in fewer than 600 lines of Python).

He recorded a YouTube series to accompany them, the most famous of which is *Let's build GPT: from scratch, in code, spelled out*.

In the video, he sits before a blank Jupyter notebook and types code one line at a time: first self-attention, then a Transformer block, then training a small model that can extend Shakespeare — the whole process under two hours.

The video has been watched more than ten million times and is recommended by professors at nearly every top university as supplementary material. Students write in the comments: "I watched it three times. The first time, I finally understood what attention is."

In the noise of large models, he has done the contrary work: keep the models small, keep the code short, make every step plain.

## 2024: Eureka Labs

On 16 July 2024, Karpathy announced **Eureka Labs**, an "AI-native school." The first course, *LLM101n*, was designed as a complete undergraduate-level course on building a ChatGPT-like system from scratch, to be offered both in person and as open materials. Eureka Labs's official line: "With AI, every student can have a great teacher beside them at every moment of learning."

He has also, almost casually, contributed several aphorisms repeatedly quoted in this age — "Software 2.0," "context length is the new RAM," and, in a 2025 tweet of his own coinage, *vibe coding*, describing a new style of "coding by feel and letting the AI fill the rest." The phrase was picked up within months by *The New York Times*, *Bloomberg*, and countless programmer blogs.

## Selected Works

| Year | Work | Significance |
|------|------|------|
| 2015 | "Deep Visual-Semantic Alignments for Generating Image Descriptions", *CVPR* | Early end-to-end model bridging vision and language |
| 2015 | "The Unreasonable Effectiveness of Recurrent Neural Networks", personal blog | Gave the public an intuitive feel for sequence models |
| 2015–2017 | Stanford CS231n course and notes | Among the most influential introductory deep-learning courses worldwide |
| 2017 | "Software 2.0", Medium | Proposed the engineering paradigm of "data instead of code" |
| 2022– | nanoGPT / makemore / micrograd open-source projects | Made GPT and neural networks legible through minimal implementation |
| 2023 | YouTube *Let's build GPT: from scratch, in code, spelled out* | Reset the standard of large-model exposition for tens of millions of viewers |

## Historian's Note

::: tip Historian's Note
Karpathy is one of those rare figures of this age who can move seamlessly between three identities — researcher, engineer, teacher. At Stanford he produced widely cited papers on vision and language; at Tesla he carried, on the front line, an FSD neural-network stack on which lives depended; on YouTube, in sixty lines of Python, he let countless people see GPT for the first time. Any one of these would have made a career; he made three, and never lost his patience along the way. In the noise of the large-model era, many chose to make their models bigger, their demos louder, their valuations higher; he chose to make the code shorter, the variable names clearer, the intent of every line plain. With an almost artisanal restraint, he reminds us that no matter how grand a model, it is at bottom something one can open, read, and type out by hand. His turn to education is no retreat but a longer-term investment: he believes that if a generation of young people can train their own GPTs on their own laptops, the field's fate will not be locked inside a few large companies. Sima Qian wrote that one passes on "the man, not the name." Karpathy's name will of course be remembered, but what he truly wishes to pass on is the capacity to build with one's own hands.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have firsthand recollections of Karpathy or related sources, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Karpathy, A., & Fei-Fei, L. (2015). "Deep Visual-Semantic Alignments for Generating Image Descriptions." *CVPR 2015*.
2. Karpathy, A. (2015). "The Unreasonable Effectiveness of Recurrent Neural Networks." karpathy.github.io
3. Stanford University. CS231n: *Convolutional Neural Networks for Visual Recognition*. Course notes (2015–2017). cs231n.stanford.edu
4. Karpathy, A. (2017). "Software 2.0." Medium, medium.com/@karpathy
5. Karpathy, A. (2022–). *nanoGPT*, *makemore*, *micrograd* repositories. github.com/karpathy
6. Karpathy, A. (2023). *Let's build GPT: from scratch, in code, spelled out.* YouTube.
7. Tesla AI Day (2021, 2022). Talks delivered by Andrej Karpathy on Autopilot vision stack and Software 2.0.
8. Karpathy, A. (2022, July 13). Personal announcement on departure from Tesla.
9. Karpathy, A. (2024, February). Personal announcement on second departure from OpenAI.
10. Eureka Labs (2024, July 16). Founding announcement, eurekalabs.ai.
