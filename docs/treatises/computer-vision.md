# 书 · 计算机视觉简史

> 让机器"看见"，曾被认为是 AI 中最简单的任务——1966 年的麻省理工学院甚至把它当作一个暑假项目布置给本科生。半个多世纪过去，这个"暑假项目"才终于交出像样的答卷。

## 第一幕：从猫的视觉皮层到 Marr 的三阶段

视觉的故事不是从计算机开始的，而是从猫的脑子里。

1959 年，哈佛医学院的 Hubel 和 Wiesel 把微电极插入麻醉猫的视觉皮层，发现某些神经元只在视野中出现"特定方向的光条"时才剧烈放电。他们的论文揭示了一个关键事实：视觉皮层是分层的——简单细胞（Simple Cells）只对边缘和方向敏感，复杂细胞（Complex Cells）整合简单细胞的输出，越往后处理的特征越抽象。这一工作让他们获得了 1981 年的诺贝尔生理学或医学奖，也为日后所有"分层视觉模型"埋下了种子。

1982 年，英国神经科学家 David Marr 在身后出版的《Vision》一书中，提出影响深远的三阶段理论：原始草图（Primal Sketch）→ 2.5 维表征（2.5D Sketch）→ 三维模型（3D Model）。Marr 把视觉视为一个从像素到几何的信息处理过程，每一阶段都对应明确的中间表征。这本书成为整整一代计算机视觉研究者的圣经。

但理论的优雅没有立即转化为工程的胜利。从边缘检测（Sobel、Canny）到立体视觉、从光流到结构光，研究者们一砖一瓦地搭着，进展缓慢。

## 第二幕：手工特征的黄金年代——SIFT、HOG、Viola-Jones

1990 年代到 2010 年前后，是手工特征（Hand-crafted Features）统治计算机视觉的二十年。

1999 年，加拿大不列颠哥伦比亚大学的 David Lowe 提出 SIFT（Scale-Invariant Feature Transform），并在 2004 年发表其完整版本。SIFT 能在不同尺度、旋转、光照下提取稳定的关键点描述子，使图像匹配、全景拼接、三维重建获得了第一个工业级的工具。SIFT 论文被引用至今超过六万次，是 CV 历史上最具影响力的论文之一。

2001 年，Viola 和 Jones 在 CVPR 上发表实时人脸检测算法。他们用积分图（Integral Image）加速 Haar 特征计算，再用 AdaBoost 级联分类器，把人脸检测速度推到每秒 15 帧——这是数码相机"自动对焦人脸"功能的起源。

2005 年，法国国家信息与自动化研究所的 Dalal 和 Triggs 提出 HOG（Histograms of Oriented Gradients），把方向梯度直方图与线性 SVM 结合，成为行人检测的标准方案。再加上 SURF、ORB、DPM 等一系列工作，整个 CV 领域形成了一种共识：好的特征工程才是关键，分类器只是配角。

直到 2012 年，这一切被一夜推翻。

回望这二十年，最深的教训不在于"特征工程错了"，而在于"先验设计的天花板远低于人们的想象"。SIFT 优雅、HOG 高效、Viola-Jones 漂亮，但每多一个识别类别、每多一种环境光照，工程师就要重新调一轮参数。手工特征的极限，是人脑能想到的边缘种类的极限。

## 第三幕：AlexNet 与卷积的归来

故事的伏笔早在 1980 年代就埋下了。1980 年，福岛邦彦发表 Neocognitron，把 Hubel-Wiesel 的简单/复杂细胞结构搬入神经网络。1989 年，<Person id="lecun" /> 在贝尔实验室发表 LeNet 系列，用反向传播训练卷积神经网络（CNN），成功识别美国邮政的手写邮编。

但在那个年代，CNN 没有数据，没有算力。LeNet 只能识别 32×32 的灰度图，扩展到自然图像几乎不可能。

转机来自三股力量的汇聚。第一股是数据。2009 年，<Person id="fei-fei-li" /> 团队发布 ImageNet，最终标注超过 1400 万张图像、覆盖 2 万多个类别——这是当时世界上规模最大的视觉数据集。从 2010 年起，ImageNet Large Scale Visual Recognition Challenge（ILSVRC）成为视觉算法的奥林匹克。第二股是算力。NVIDIA 于 2007 年发布 CUDA，让通用 GPU 计算成为可能。第三股是算法：ReLU 激活函数、Dropout 正则化、数据增强。

2012 年 9 月 30 日，ILSVRC 结果公布。多伦多大学 <Person id="hinton" /> 实验室的 <Person id="krizhevsky" /> 与 <Person id="sutskever" /> 提交了一个名为 AlexNet 的八层 CNN，Top-5 错误率从去年的 26.2% 直接降到 15.3%。会场陷入短暂沉默——所有人都意识到游戏规则变了。

那一天之后，所有手工特征的论文都开始过时。短短几年内，VGG（牛津 2014）、GoogLeNet（谷歌 2014）、ResNet（微软亚研 2015，<Person id="he" />）相继问世。ResNet 用残差连接训练出了 152 层乃至上千层的网络，把 ImageNet 错误率压到 3.57%——已经低于人类标注者的水平。

## 第四幕：检测、分割与"万物分割"

仅做"图里是什么"还不够。视觉真正落地，需要回答"什么在哪里"。

2014 年，加州大学伯克利的 Girshick 等人提出 R-CNN，把候选区域提取与 CNN 分类结合，开启了"两阶段检测"时代。Fast R-CNN（2015）和 Faster R-CNN（2015）相继优化速度，到 2017 年的 Mask R-CNN 已经能同时输出像素级实例分割。

与此同时，Joseph Redmon 在 2016 年发布 YOLO（You Only Look Once）："看一眼就够了"——把检测改写为单阶段回归任务，速度提升一个数量级。YOLO v1 至 v8 在自动驾驶、安防、工业质检中无所不在；Redmon 本人在 2020 年宣布因伦理顾虑退出 CV 研究，至今仍是行业内一个特别的注脚。

分割方向同样精彩。2015 年，Long、Shelhamer、Darrell 提出 Fully Convolutional Network（FCN），把分类网络改造为端到端的像素分类器；几乎同期，弗赖堡大学的 Ronneberger 等人发表 U-Net，用对称的编码-解码结构和跳跃连接，成为医学图像分割的事实标准。U-Net 至今仍是放射科 AI 系统中最常被引用的架构之一——它把"医学影像 + 深度学习"这个组合从论文带进了医院。

2023 年，Meta 发布 Segment Anything Model（SAM）：一个用 11 亿掩码训练的"基础分割模型"，对任意点击、任意框选、任意文字提示都能输出高质量掩码。从这一刻起，分割不再是一个任务，而是一个 API。

短短十年，CV 的工业版图被彻底改写——监控、安防、医疗影像、工业质检、自动驾驶、AR/VR——这些产业里的视觉模块，全部被深度学习一刀切换。曾经是论文实验室里的奇技，如今是手机摄像头里的默认。

中国 CV 公司也借此一役崛起。商汤、旷视、依图、云从——所谓"AI 四小龙"——在人脸识别、安防、自动驾驶感知方向上一度引领产业，并把工程能力推到全球前列。这场盛况里有荣光，也有伦理争议——这是技术影响社会的另一面注脚。

## 第五幕：从识别到生成——GAN 与扩散

2014 年的一个深夜，蒙特利尔大学的 <Person id="goodfellow" /> 在酒吧后回到电脑前，写出了第一份生成对抗网络（GAN）的代码。GAN 让生成器与判别器互为对手——一个造假，一个鉴假——在博弈中共同进步。这个看似简单的想法在接下来五年里几乎统治了图像生成领域：DCGAN、Pix2Pix、CycleGAN、StyleGAN，让"AI 生成的人脸"从模糊到以假乱真。

但 GAN 不稳定、难训练，被一种更优雅的范式接替了。2020 年，加州大学伯克利的 Ho、Jain、Abbeel 发表 DDPM（Denoising Diffusion Probabilistic Models），把生成转化为"逐步去噪"——先把图像加噪到纯高斯噪声，再训练一个网络一步步还原。2021 年的 Improved DDPM、Classifier-Free Guidance、Latent Diffusion 等改进让扩散模型在质量和效率上全面超越 GAN。2022 年，Stable Diffusion 开源，DALL·E 2 与 Midjourney 几乎同期开放公测——AI 绘画的时代由此到来。（这一段历史的产业、艺术与版权之争，详见 *书·AI 与艺术*。）

## 第六幕：Vision Transformer 与多模态

2017 年，Transformer 在 NLP 大获全胜，CV 学者们开始追问：图像能不能也用注意力？

2020 年 10 月，谷歌的 Dosovitskiy 等人发布 ViT（Vision Transformer）：把图像切成 16×16 的小块（patch），当作 token 输入纯 Transformer。结果让人震惊——在大数据预训练下，ViT 在 ImageNet 上反超 ResNet。CNN 的二十年统治第一次被严肃挑战。

更深远的变化是多模态。2021 年初，OpenAI 的 Radford 等人发布 CLIP：用 4 亿图文对训练一个对比学习模型，让文字和图像在同一向量空间里对齐。CLIP 第一次让"用一句话搜图"和"用一张图搜文字"在工程上变得平凡。同年 Meta 发布 DINO，证明自监督也能在 ViT 上学到惊人的语义表征。

2023 年起，LLaVA、Flamingo、GPT-4V、Gemini、Claude 3 等多模态大模型把视觉作为 LLM 的一只眼睛接入。视觉与语言不再是两个领域，而是同一个模型的两个端口。

国内一线团队也在这一波中拿出代表作。智源 Eva 系列、商汤 InternImage / InternVL、阿里 Qwen-VL、上海 AI Lab 的 InternLM-XComposer，从大规模预训练数据到模型权重，把中文世界第一次完整地接入了多模态前沿——不再只是"复现 + 翻译"，而是与全球同时贡献新结果。

## 第七幕：从看见到行动——具身视觉的萌芽

最后一幕仍在书写。

视觉智能的下一站，是具身（Embodied）。机器人需要的不只是"识别物体"，而是"看到杯子—判断重量—规划抓取—闭环纠错"。2023 年起，DeepMind 的 RT-2、Open X-Embodiment 数据集、Tesla Optimus 的视觉系统、特斯拉与 Waymo 的自动驾驶视觉栈，都在把感知与控制更紧密地耦合。

更激进的方向叫世界模型（World Models）。2024 年 OpenAI 的 Sora 以视频为媒介，展示了"模型理解物理世界"的初步迹象。<Person id="lecun" /> 多年来力推的 JEPA 系列，则尝试用预测式表征学习构建可规划、可推理的视觉世界模型。视觉的终极问题——理解一段时间、一处空间、一连串因果——才刚刚开始被严肃面对。

与此并行的是神经渲染（Neural Rendering）。NeRF（2020）让一组照片合成出连续的三维场景；3D Gaussian Splatting（2023）则用百万级高斯椭球实时渲染照片级真实感画面。视觉智能的边界，正从"识别已有图像"扩展到"生成可探索的三维世界"。

## 未竟之问

视觉走到 2026 年，有两个问题仍未解决。其一是泛化：在 ImageNet 上 99% 的模型，扔到东非的红土路与暴雨夜里，仍可能彻底失效。其二是因果：模型能描述"杯子在桌子上"，却仍无法可靠回答"如果我撞到桌子，杯子会怎样"。看见，离真正的"看懂"还有相当一段路。

---

::: tip 太史公曰
余观计算机视觉之半世纪，初以为"看"易于"想"，及至深入，方知一切倒置。Hubel 与 Wiesel 入猫脑而知视皮层之分层；Marr 立三阶段而画视觉之蓝图；然此后三十年，工程师以手工特征筑墙而进，SIFT、HOG、Viola-Jones 各领数年风骚，至 2012 年 ImageNet 一役，旧法皆废。AlexNet 之胜，非一人之功——李飞飞为之造海，黄仁勋为之铸刀，Hinton 师徒执剑而出，三力相会，方有大变。其后 ResNet 越千层而不溃，YOLO 一瞥而万物现，GAN 与扩散一脉相承使机器从识到造。ViT 一出，CNN 二十年正统受撼；CLIP 与 SAM 出，视觉之边界与语言、与万物相通。盖视觉者，原非孤学——它是大脑通向世界的窗口，自然要与语言、行动、记忆相连。今视觉与 LLM 已然合流，机器之"看见"，正向"看懂"过渡。然识别非理解，描述非因果，看见与认知之间，仍隔着千山万水。后世若问 CV 何时止步？答曰：当机器能在一段陌生视频中讲出一个真正的"故事"，方为始也。
:::

## 亲历者说

::: info 征集中
如果你参与过 ImageNet 标注、AlexNet/ResNet 系列工作、自动驾驶视觉栈或多模态大模型开发，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

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
