# 书 · AI 与创意艺术

> 当机器开始作画、谱曲、写诗、剪辑视频，"创造力是人类最后的堡垒"这句话首次显出脆弱。从 1973 年 Cohen 让计算机执笔到 2022 年扩散模型席卷全球，再到 2024 年视频与音乐生成的全面爆发——艺术与 AI 的关系，正从工具、合作者，逼近一个让所有创作者都心怀警惕的字：替代。

## 第一幕：机器作画的史前时代（1965—2014）

AI 进入艺术领域的时间，比许多人想象的要早得多。

1965 年，德国学者 Frieder Nake 与 Georg Nees 在斯图加特展出了人类历史上第一批由计算机生成的几何抽象作品；同年的纽约 Howard Wise 画廊也举办了一场名为 *Computer-Generated Pictures* 的展览。早期算法艺术（Algorithmic Art）由数学家与工程师主导——他们写下规则，让绘图仪在纸上落笔，作品冷峻、几何、机械。

1973 年，英国艺术家 Harold Cohen 启动了一个改变其后半生的项目：AARON。这是一个用 LISP 写成的程序，能够自主地生成线条、构图、上色。与那些只会执行指令的算法不同，AARON 拥有 Cohen 编写的"绘画知识"：什么是物体、什么是遮挡、什么是构图平衡。AARON 的作品在伦敦 Tate、旧金山 SFMOMA、巴黎蓬皮杜中心展出过，成为博物馆收藏的第一批 AI 作品。Cohen 一直与 AARON 合作直到 2016 年去世——他从未把它视为对手，而是"一位永不疲倦的合作者"。

九十年代后，Karl Sims 在 *Genetic Images*（1993）中让观众选择更"美"的进化方向，由遗传算法繁衍下一代图像；2000 年代后期，Casey Reas 与 Ben Fry 的 Processing 让算法艺术走向开源大众化。但这一阶段的"AI 艺术"仍属于程序员的私语，与主流艺术市场关系若即若离。

变量在等一个引爆点。

## 第二幕：GAN 与第一次拍卖（2014—2018）

2014 年，<Person id="goodfellow" />在蒙特利尔深夜的酒吧里写下了生成对抗网络（Generative Adversarial Networks, GAN）的最初草稿。生成器与判别器互为对手，通过博弈逼近真实数据分布——这个看似简单的设定开启了图像生成的新纪元。

GAN 之后，2015 年 Leon Gatys 等人发表 *A Neural Algorithm of Artistic Style*，论文中那些"用梵高风格重画照片"的样图席卷了社交网络，神经风格迁移（Neural Style Transfer）一夜成名。2017 年起，BigGAN、StyleGAN 让生成图像的清晰度和多样性飙升；StyleGAN 生成的"虚拟人脸"以假乱真，催生了 *thispersondoesnotexist.com* 这样的现象级网站。

真正把"AI 艺术"推向主流的，是 2018 年 10 月 25 日的一场拍卖。法国艺术团体 Obvious 用 GAN 生成了一幅模仿古典肖像风格的作品——*Edmond de Belamy*。佳士得（Christie's）将其列入纽约拍卖会，估价 7,000 至 10,000 美元。最终成交价：432,500 美元，是估价的四十多倍。画作右下角是一个数学公式式的"签名"——GAN 损失函数。

艺术市场第一次为一个由算法生成的图像买单。但争议随之而起：作品所用的代码大量基于 Robbie Barrat 在 GitHub 公开的项目，而 Obvious 团队的实质贡献被广泛质疑。这场拍卖既是 AI 艺术的胜利，也暴露出"作者归属"将成为日后所有讨论的核心。

## 第三幕：扩散模型之夏（2022）

2021 年 1 月，OpenAI 发布 DALL·E。它能根据文本提示生成图像——"一个穿芭蕾舞裙的小白萝卜在遛狗"。这个不太严肃的演示令世界第一次直观感受到"文生图"（Text-to-Image）可以何等具体。

但真正的核爆发生在 2022 年。

- 4 月：OpenAI 发布 DALL·E 2，画质与构图远超前代，迅速成为社交网络的现象级产品。
- 7 月：Midjourney 进入公测，把生成入口放在 Discord 频道。其美学倾向偏向电影感与油画质感，吸引大量插画师、概念设计师；公测半年内即实现盈利。
- 8 月：Stability AI 发布 Stable Diffusion 1.4，基于 Robin Rombach 等人在 CompVis 实验室提出的潜在扩散模型（Latent Diffusion Model），权重与代码全部开源。

Stable Diffusion 的开源是这场革命中最具地震性的事件。任何人下载 4 GB 的权重文件，便可在自家显卡上生成图像。围绕它，HuggingFace、Civitai、AUTOMATIC1111 等社区在数月内构建出一整套微调（DreamBooth、LoRA）、控制（ControlNet, 2023 年 2 月由张吕敏开源）、组合（ComfyUI）的工具栈。"AI 绘画"从一个云端付费服务变成了一种人人可改装的开源生产力。

2022 年 8 月底，美国科罗拉多州博览会美术比赛"数字艺术"组别冠军颁给了 Jason Allen 的作品 *Théâtre D'opéra Spatial*——它由 Midjourney 生成，再经 Photoshop 与 Gigapixel 后期。比赛规则未禁止 AI 生成，但争议席卷艺术界。这是史上第一次由 AI 作品在传统艺术比赛中夺冠。

## 第四幕：从静帧到运动（2023—2024）

图像被攻克之后，下一座山是视频。

2023 年 2 月，Runway 发布 Gen-1，让用户用文本与参考图像驱动视频风格化；同年 6 月推出 Gen-2，正式跨入"文生视频"。但当年大多数 AI 视频仍只是"会动的图像"，分辨率低、角色一致性差、物理常识屡屡崩坏。

转折点在 2024 年 2 月。OpenAI 发布 Sora，对外公开了一系列长达一分钟、有摄影机调度、有人物动作连贯性的样片——东京街头一名穿红衣的女子穿过霓虹光影、樱花在风中飘落。视频生成第一次让人开始相信，长镜头、复杂物理、多角色互动并非遥不可及。Sora 当日并未开放使用，但它定义了 2024 年视频生成的"基准线"。

随后是一连串的追赶：

- 2024 年 6 月：快手发布"可灵"，是中国第一个大规模公开的视频生成模型，其物理一致性与镜头语言一度被认为追平 Sora。
- 2024 年 5 月与 12 月：Google 相继发布 Veo 与 Veo 2；Meta 发布 Movie Gen 系列；Runway 推出 Gen-3 Alpha。
- 2025 年起：可灵 1.6、Sora 2、混元、字节跳动 PixelDance、智谱 CogVideoX——每月都有新模型让"上一代"在数周内贬值。

视频生成的工业化迅速重塑广告、影视预演、社交内容。Coca-Cola 在 2024 年圣诞推出全 AI 生成广告，引发广告界震荡；TikTok 与 Instagram 的内容流中，AI 短视频的份额以肉眼可见的速度上升。

## 第五幕：声音的革命（2023—2024）

文字、图像、视频之后，声音成为下一片战场。

2022 年起，Riffusion 用扩散模型生成谱面图再合成音乐，开了一个先声。2023—2024 年，三家公司站到风口：

- Suno（波士顿，2022 成立）：2023 年 12 月发布 v2，让用户用一句话生成完整带歌词的歌曲；2024 年 3 月 v3 让 30 秒升级到 2 分钟；2024 年 5 月 B 轮融资 1.25 亿美元。
- Udio（伦敦，前 DeepMind 团队）：2024 年 4 月公测，A16z 领投，被业界视为 Suno 的最强劲对手。
- ElevenLabs（伦敦，2022）：在语音克隆和有声书赛道独占鳌头。

但音乐界的反击迅速到来。2024 年 6 月 24 日，美国唱片业协会（RIAA）代表 Sony Music、Universal、Warner 三大巨头同时起诉 Suno 与 Udio，指控其大规模复制有版权的录音用于训练。两家公司在答辩中首次公开承认其训练集"包含从公开互联网获得的录音"，并主张"合理使用"（Fair Use）。诉讼仍在进行，但它将为整个生成式音乐行业划下规则边界。

与此同时，Spotify 在 2025 年承认平台上有数百万首"AI 生成"曲目，部分艺人合谋用 AI 量产歌曲骗取流媒体分成；几大版权管理协会开始要求训练数据透明化与艺人退出权（opt-out）。

## 第六幕：写作辅助与文学边界

ChatGPT 之后，文字创作首先被深度卷入 AI 浪潮——但也最早遭遇反弹。

2023 年 2 月，亚马逊 Kindle Direct Publishing 上 AI 生成的儿童书与小说集泛滥，平台被迫推出 AI 生成内容的强制申报政策。同年起，多家文学杂志（如 Clarkesworld）因 AI 生成投稿暴增而被迫暂停接收外部稿件。

但在专业写作内部，AI 已悄然成为合作者。Sudowrite、NovelCrafter、Plottr 等工具被部分网络小说作者公开使用；2024 年日本芥川奖得主九段理江公开表示，自己的获奖作《东京同情塔》中约 5% 的文本由 ChatGPT 生成。这一表态在文学界激起激烈讨论：合作的边界在哪里？署名是否需要更新？读者是否有"知情权"？

更深层的问题是风格同质化。当大量作者依赖同一个底层模型润色，互联网内容会不会逐步收敛到一种"AI 标准腔"？这是创意写作面临的、与图像和视频截然不同的危险——慢性的、不易察觉的语言贫化。

## 第七幕：艺术家的反击（2023—2025）

技术狂欢的另一面，是艺术家社区前所未有的愤怒。

2023 年初，波兰插画家 Greg Rutkowski 发现自己的名字成为 Stable Diffusion 用户最常用的提示词之一——超过他本人毕生作品总数的图像被生成出来，模仿他的风格署他的名。他的画作被未经许可纳入 LAION-5B 训练集；他公开发表声明，呼吁立法规制。

同年 1 月，三位艺术家（Sarah Andersen、Kelly McKernan、Karla Ortiz）对 Stability AI、Midjourney、DeviantArt 提起集体诉讼；同月，Getty Images 在英美双线起诉 Stability AI，指控其使用了 1200 万张 Getty 图像（带有可识别水印）训练 Stable Diffusion。Getty v. Stability 于 2025 年在英国伦敦高等法院开庭，是图像生成版权第一案。

技术层面，芝加哥大学 Ben Zhao 教授带领团队推出了两件武器：

- Glaze（2023 年 3 月）：在艺术家发布作品前，在像素层面添加肉眼难辨的扰动，使模型学到错误的风格特征。
- Nightshade（2023 年 10 月）：更进一步的"投毒"工具，被它处理过的图像若被纳入训练集，会让模型对相关概念产生系统性偏移。

数十万名艺术家下载使用了 Glaze 与 Nightshade。这是历史上第一次，被技术冲击的群体用技术本身来反击。与此同时，ArtStation 等平台被迫在 2023 年初推出"NoAI"标签，让作者声明禁止其作品被用于训练。

## 第八幕：版权的世纪诉讼

2023 年 12 月 27 日，《纽约时报》起诉 OpenAI 与 Microsoft，指控其未经授权使用百万级 NYT 文章训练 GPT 系列。诉状中附带了数十页的"逐字复述"证据：在特定提示下，GPT-4 几乎一字不差地输出了 NYT 的付费墙文章。这是迄今为止最具影响力的生成式 AI 版权诉讼之一。

2024—2025 年间，更多案件汇成洪流：

- 美国作家协会（Authors Guild）联合多名作家起诉 OpenAI、Meta；
- 《华尔街日报》、《纽约邮报》起诉 Perplexity；
- 多家德国、法国出版商在欧盟数字单一市场指令下追讨权利金；
- 中国"AI 生成图像第一案"在 2023 年 11 月作出判决，北京互联网法院首次认定使用 Stable Diffusion 生成的图像在符合特定条件下享有著作权——但该案的争议远未平息。

立法层面，欧盟 *AI Act* 于 2024 年 8 月生效，首次要求通用 AI 模型披露训练数据摘要。美国 2024 年起多个州的 *NO FAKES Act*、*ELVIS Act* 等针对 AI 克隆名人声音与肖像的法律陆续推进。

技术、法律、艺术家、平台、巨头——五方角力之下，"AI 与创意"的关系正被重新书写。它不再只是一个美学问题，而是关于劳动、产权、文化记忆的根本议题。机器并未取代艺术家，但它已经永久改变了艺术家的处境。

---

::: tip 太史公曰
余观艺术与 AI 之相遇，自 Cohen 写 AARON 至今已逾半世纪。前四十年，AI 是艺术家书房里的一支奇笔，写程序作画乃极少数人之私语。后十年，扩散模型与大模型横空出世，机器作画、机器谱曲、机器写小说，皆从实验室走入街市。Edmond de Belamy 一锤拍卖、Sora 一段东京街景、Suno 一首五分钟流行曲——震惊世人的从来不是技术上限，而是平民化速度。然狂欢之下，亦有暗流：插画家发现自己半生风格被三个英文单词召唤、配音演员发现自己声音被克隆为他人台词、出版社发现训练集中藏着自家全部档案。Glaze 与 Nightshade 之类的"反 AI"技术应运而生——这是历史上第一次，被冲击者用自己的智慧对抗洪流。Getty v. Stability、《纽约时报》v. OpenAI、RIAA v. Suno，三场跨国诉讼将塑造未来十年的创作秩序。机器是否会"创作"？这是哲学问题，留给后世辩论。眼前更紧迫的，是机器在何种条件下"借鉴"才不构成掠夺，是创作者在何种合约下与机器协作才不至沦为零件。AI 不会让创意死去，但它已让"作者"二字的定义，比文艺复兴以来任何一次都更加摇晃。
:::

## 亲历者说

::: info 征集中
如果你是被 AI 影响的艺术家、音乐人、作家、设计师，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)分享你的经历。
:::

## 参考资料

1. McCorduck, P. (1991). *AARON's Code: Meta-Art, Artificial Intelligence, and the Work of Harold Cohen*. W. H. Freeman.
2. Goodfellow, I., Pouget-Abadie, J., Mirza, M., et al. (2014). Generative adversarial nets. *Advances in Neural Information Processing Systems*, 27.
3. Gatys, L. A., Ecker, A. S., & Bethge, M. (2016). Image style transfer using convolutional neural networks. *Proceedings of CVPR 2016*, 2414-2423.
4. Christie's (2018). *Is artificial intelligence set to become art's next medium?* (Edmond de Belamy auction record).
5. Ramesh, A., Pavlov, M., Goh, G., et al. (2021). Zero-shot text-to-image generation (DALL·E). *Proceedings of ICML 2021*.
6. Rombach, R., Blattmann, A., Lorenz, D., et al. (2022). High-resolution image synthesis with latent diffusion models. *Proceedings of CVPR 2022*, 10684-10695.
7. Roose, K. (2022, September 2). An A.I.-generated picture won an art prize. Artists aren't happy. *The New York Times*.
8. Shan, S., Cryan, J., Wenger, E., et al. (2023). Glaze: Protecting artists from style mimicry by text-to-image models. *Proceedings of USENIX Security 2023*.
9. Shan, S., Ding, W., Passananti, J., et al. (2023). Prompt-specific poisoning attacks on text-to-image generative models (Nightshade). *arXiv preprint arXiv:2310.13828*.
10. *The New York Times Company v. Microsoft Corporation, OpenAI, et al.* (2023, December 27). U.S. District Court, Southern District of New York, Case No. 1:23-cv-11195.
11. *Andersen et al. v. Stability AI Ltd. et al.* (2023, January 13). U.S. District Court, Northern District of California.
12. *Getty Images v. Stability AI* (2023, filed). High Court of Justice (UK) and U.S. District Court, District of Delaware.
13. RIAA (2024, June 24). Major music companies sue Suno and Udio for copyright infringement.
14. OpenAI (2024, February 15). Sora: Creating video from text. *OpenAI Research Blog*.
