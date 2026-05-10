# Treatise · A History of Computer Vision

> Teaching machines to *see* was once thought to be the easiest task in AI — in 1966, MIT even assigned it to undergraduates as a summer project. More than half a century later, that "summer project" has finally produced a presentable answer.

## Act One: From the Cat's Visual Cortex to Marr's Three Stages

Vision's story did not begin with computers. It began inside the brain of a cat.

In 1959, Hubel and Wiesel of Harvard Medical School inserted microelectrodes into the visual cortex of an anesthetized cat and discovered that certain neurons fired vigorously only when the visual field contained "an edge of a particular orientation." Their papers revealed a key fact: the visual cortex is hierarchical — simple cells respond only to edges and orientations, complex cells integrate the output of simple cells, and the further along the pathway, the more abstract the features. The work earned them the 1981 Nobel Prize in Physiology or Medicine and planted the seed for every "hierarchical visual model" to come.

In 1982, the British neuroscientist David Marr's posthumously published *Vision* set forth his far-reaching three-stage theory: primal sketch → 2.5D sketch → 3D model. Marr cast vision as an information-processing pipeline from pixels to geometry, with explicit intermediate representations at each stage. The book became the bible of an entire generation of computer-vision researchers.

Yet theoretical elegance did not translate immediately into engineering victory. From edge detection (Sobel, Canny) to stereo vision, from optical flow to structured light, researchers laid one brick at a time, progress slow.

## Act Two: The Golden Age of Hand-Crafted Features — SIFT, HOG, Viola-Jones

From the 1990s to around 2010, hand-crafted features ruled computer vision for two decades.

In 1999, David Lowe at the University of British Columbia proposed SIFT (Scale-Invariant Feature Transform), publishing its complete version in 2004. SIFT could extract stable keypoint descriptors across scale, rotation, and lighting, giving image matching, panorama stitching, and 3D reconstruction their first industrial-grade tool. The SIFT paper has been cited more than sixty thousand times — one of the most influential papers in CV history.

In 2001, Viola and Jones published a real-time face detection algorithm at CVPR. They used the integral image to accelerate Haar feature computation, then cascaded AdaBoost classifiers, pushing face detection to fifteen frames per second — the origin of the "auto-focus on faces" feature in digital cameras.

In 2005, Dalal and Triggs at INRIA proposed HOG (Histograms of Oriented Gradients), pairing it with linear SVM as the standard pedestrian detector. Add SURF, ORB, DPM, and a host of others, and the field arrived at a consensus: good feature engineering was the key, and the classifier was a supporting role.

Then in 2012, all of it was overturned in a single night.

Looking back over those two decades, the deepest lesson is not that "feature engineering was wrong," but that "the ceiling of prior design is far lower than people imagined." SIFT was elegant, HOG efficient, Viola-Jones beautiful — but each new category, each new lighting condition forced engineers to retune. The limit of hand-crafted features was the limit of edges a human brain could imagine.

## Act Three: AlexNet and the Return of Convolution

The seeds had been planted in the 1980s. In 1980, Kunihiko Fukushima published the Neocognitron, transplanting Hubel-Wiesel's simple/complex cell structure into a neural network. In 1989, **Yann LeCun (1960–)** at Bell Labs published the LeNet series, training a convolutional neural network (CNN) with backpropagation to recognize handwritten ZIP codes for the U.S. Postal Service.

But in that era, CNNs had neither data nor compute. LeNet could only read 32×32 grayscale images; scaling to natural images was nearly impossible.

The turn came from the convergence of three forces. First, data. In 2009, **Fei-Fei Li (1976–)** and her team released ImageNet, eventually labeling more than 14 million images across over 20,000 categories — the largest visual dataset of its time. From 2010, the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) became the Olympics of vision algorithms. Second, compute. NVIDIA released CUDA in 2007, making general-purpose GPU computing possible. Third, algorithms: the ReLU activation, Dropout regularization, and data augmentation.

On September 30, 2012, the ILSVRC results were announced. **Alex Krizhevsky (1986–)** and **Ilya Sutskever (1986–)** from **Geoffrey Hinton (1947–)**'s lab at the University of Toronto submitted an eight-layer CNN called AlexNet; the top-5 error rate fell from the previous year's 26.2 percent to 15.3 percent. The room briefly fell silent — everyone realized the rules of the game had changed.

After that day, every paper on hand-crafted features began to age. Within a few years came VGG (Oxford, 2014), GoogLeNet (Google, 2014), and ResNet (Microsoft Research Asia, 2015, **Kaiming He (1984–)**). ResNet used residual connections to train networks of 152, even thousands of layers, pushing the ImageNet error rate down to 3.57 percent — already below human annotators.

## Act Four: Detection, Segmentation, and "Segment Anything"

Knowing "what is in the image" was not enough. For vision to truly land, it had to answer "what is *where*."

In 2014, Girshick and colleagues at UC Berkeley proposed R-CNN, combining region proposals with CNN classification and opening the era of "two-stage detection." Fast R-CNN (2015) and Faster R-CNN (2015) optimized speed; by 2017, Mask R-CNN could output pixel-level instance segmentation simultaneously.

Meanwhile, Joseph Redmon released YOLO (You Only Look Once) in 2016 — a single-stage regression for detection that pushed speed up an order of magnitude. YOLO v1 through v8 are everywhere in autonomous driving, security, and industrial inspection; Redmon himself withdrew from CV research in 2020 over ethical concerns, an unusual footnote in the field.

Segmentation matured in parallel. In 2015, Long, Shelhamer, and Darrell proposed the Fully Convolutional Network (FCN), recasting a classification network as an end-to-end pixel classifier. Almost simultaneously, Ronneberger and colleagues at Freiburg published U-Net, whose symmetric encoder–decoder with skip connections became the de facto standard in medical image segmentation. U-Net remains one of the most-cited architectures in radiology AI to this day — it brought "medical imaging plus deep learning" out of the paper and into the hospital.

In 2023, Meta released the Segment Anything Model (SAM): a "foundation model for segmentation" trained on 1.1 billion masks, capable of producing high-quality masks for any click, box, or text prompt. From that moment, segmentation was no longer a task — it was an API.

Within ten years, the industrial map of CV had been redrawn — surveillance, security, medical imaging, industrial inspection, autonomous driving, AR/VR — every vision module in these industries was switched, in one stroke, to deep learning. What had been a curiosity in the lab became the default in your phone's camera.

China's CV companies rose with this wave. SenseTime, Megvii, Yitu, CloudWalk — the so-called "AI Four Tigers" — once led the industry in face recognition, security, and autonomous-driving perception, pushing engineering capability to the global front. The story has both glory and ethical controversy — that, too, is a footnote on technology's social impact.

## Act Five: From Recognition to Generation — GAN and Diffusion

One night in 2014, **Ian Goodfellow (1985–)** of the Université de Montréal returned to his computer after an argument in a bar and wrote the first generative adversarial network (GAN) code that night. GAN pitted generator against discriminator — one forging, one detecting — both improving in mutual contest. The seemingly simple idea would dominate image generation for the next five years: DCGAN, Pix2Pix, CycleGAN, StyleGAN, taking "AI-generated faces" from blurry to indistinguishable from photographs.

But GANs were unstable, hard to train, and were displaced by a more elegant paradigm. In 2020, Ho, Jain, and Abbeel at UC Berkeley published DDPM (Denoising Diffusion Probabilistic Models), reframing generation as "step-by-step denoising" — adding noise to an image until it became pure Gaussian, then training a network to reverse the process step by step. Improved DDPM, Classifier-Free Guidance, and Latent Diffusion soon made diffusion models surpass GANs in quality and efficiency. In 2022, Stable Diffusion was open-sourced; DALL·E 2 and Midjourney opened public beta nearly simultaneously — the era of AI image generation had arrived. (For the industrial, artistic, and copyright disputes around this history, see *Treatise · AI and Art*.)

## Act Six: Vision Transformer and Multimodality

After Transformer triumphed in NLP in 2017, CV scholars asked: could images, too, be handled by attention?

In October 2020, Dosovitskiy and colleagues at Google released ViT (Vision Transformer): split an image into 16×16 patches, treat them as tokens, and feed a pure Transformer. The result was stunning — under large-scale pretraining, ViT surpassed ResNet on ImageNet. CNN's twenty-year reign was challenged in earnest for the first time.

A deeper change was multimodality. In early 2021, Radford and colleagues at OpenAI released CLIP: trained on 400 million image-text pairs with contrastive learning, it aligned text and images in a shared vector space. CLIP made "find an image with a sentence" and "find text with an image" engineering trivialities for the first time. The same year, Meta released DINO, showing that self-supervision on ViT could learn astonishing semantic representations.

From 2023 onward, multimodal large models — LLaVA, Flamingo, GPT-4V, Gemini, Claude 3 — plugged vision into LLMs as one eye. Vision and language are no longer two fields, but two ports of the same model.

China's leading teams produced standout work in this wave. BAAI's Eva series, SenseTime's InternImage / InternVL, Alibaba's Qwen-VL, and Shanghai AI Lab's InternLM-XComposer connected the Chinese-language world fully to the multimodal frontier — no longer "replicate and translate" but contributing new results in step with the global community.

## Act Seven: From Seeing to Acting — The Sprouts of Embodied Vision

The last act is still being written.

The next stop for visual intelligence is embodiment. A robot needs not merely to "recognize a cup," but to "see the cup — judge its weight — plan the grasp — close the loop on errors." Since 2023, DeepMind's RT-2, the Open X-Embodiment dataset, the Tesla Optimus visual system, and the autonomous-driving stacks of Tesla and Waymo have been coupling perception more tightly to control.

A more radical direction is called world models. In 2024, OpenAI's Sora used video as the medium and showed early hints of "the model understanding the physical world." LeCun's JEPA series, which he has championed for years, attempts to build planable, reasonable visual world models through predictive representation learning. Vision's ultimate questions — to understand a span of time, a piece of space, a chain of cause and effect — are only just starting to be confronted seriously.

In parallel, neural rendering has emerged. NeRF (2020) synthesized continuous 3D scenes from a set of photographs; 3D Gaussian Splatting (2023) used millions of Gaussian ellipsoids to render photorealistic frames in real time. The boundary of visual intelligence is expanding from "recognizing existing images" to "generating explorable 3D worlds."

## Open Questions

Walking up to 2026, two problems remain unsolved in vision. First, generalization: a model that scores 99 percent on ImageNet may collapse on a red-clay road in East Africa under a stormy night. Second, causality: the model can describe "the cup is on the table" but cannot reliably answer "what happens to the cup if I bump the table?" Seeing is still some distance from truly *seeing-and-understanding*.

---

::: tip Historian's Note
Surveying half a century of computer vision, one once thought "seeing" easier than "thinking" — only to learn, on closer look, that the order is reversed. Hubel and Wiesel entered the cat's brain and uncovered the layered visual cortex; Marr drew his three-stage blueprint. Yet for thirty years afterwards, engineers built walls of hand-crafted features — SIFT, HOG, Viola-Jones each held the field for a few years. Then the 2012 ImageNet contest abolished the old laws in one stroke. AlexNet's victory was no single hero's deed: Fei-Fei Li forged the sea, Jensen Huang forged the blade, Hinton and his student wielded the sword. Three forces converged and the great change came. Thereafter ResNet crossed a thousand layers without collapse, YOLO summoned objects with one glance, GAN and diffusion taught machines not only to recognize but to create. ViT shook the twenty-year orthodoxy of CNN; CLIP and SAM connected vision with language and with all things. For vision was never a solitary discipline — it is the brain's window onto the world, naturally bound to language, to action, to memory. Today vision and LLM have already merged, and the machine's "seeing" is in transition to "understanding." Yet recognition is not understanding, description is not causality; between sight and cognition, mountains still rise. When will computer vision come to rest? The answer: when a machine can take an unfamiliar video and tell from it a real *story*, only then has it begun.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have participated in ImageNet annotation, the AlexNet/ResNet line of work, autonomous-driving vision stacks, or multimodal large model development, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Hubel, D. H., & Wiesel, T. N. (1962). Receptive fields, binocular interaction and functional architecture in the cat's visual cortex. *Journal of Physiology*, 160(1), 106-154.
2. Marr, D. (1982). *Vision: A Computational Investigation into the Human Representation and Processing of Visual Information*. W. H. Freeman.
3. Lowe, D. G. (2004). Distinctive image features from scale-invariant keypoints. *International Journal of Computer Vision*, 60(2), 91-110.
4. Viola, P., & Jones, M. (2001). Rapid object detection using a boosted cascade of simple features. *CVPR 2001*, 511-518.
5. Dalal, N., & Triggs, B. (2005). Histograms of oriented gradients for human detection. *CVPR 2005*, 886-893.
6. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *Advances in Neural Information Processing Systems*, 25.
7. He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition. *CVPR 2016*, 770-778.
8. Girshick, R., Donahue, J., Darrell, T., & Malik, J. (2014). Rich feature hierarchies for accurate object detection and semantic segmentation. *CVPR 2014*, 580-587.
9. Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional networks for biomedical image segmentation. *MICCAI 2015*, 234-241.
10. Goodfellow, I., Pouget-Abadie, J., Mirza, M., et al. (2014). Generative adversarial nets. *Advances in Neural Information Processing Systems*, 27.
11. Dosovitskiy, A., Beyer, L., Kolesnikov, A., et al. (2021). An image is worth 16x16 words: Transformers for image recognition at scale. *ICLR 2021*.
12. Radford, A., Kim, J. W., Hallacy, C., et al. (2021). Learning transferable visual models from natural language supervision. *ICML 2021*.
