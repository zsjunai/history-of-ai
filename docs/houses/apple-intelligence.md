# 世家 · 苹果（Apple Intelligence）

> 全球用户量最大的消费电子公司，对 AI 长达十年的克制在 2024 年 WWDC 被打破——"Apple Intelligence"试图把大模型装进十亿人的口袋，却也在交付与隐私之间，写下苹果史上最复杂的一笔。

## 一、Knowledge Navigator：一个 1987 年的预言

1987 年，约翰·斯卡利（John Sculley）治下的苹果发布了一段五分钟的概念视频，名为 **Knowledge Navigator**。视频里，一位伯克利教授对着一台对开的平板电脑下达指令——"找一下昨天那篇关于亚马孙森林的论文"——平板上一位戴蝴蝶结的虚拟助理用自然语言回答、调出文献、自动接通同事的视频电话。

那是 1987 年。苹果尚无 Mac OS X、无 iPhone、无云。这段视频却预演了三十年后的 Siri、FaceTime、知识助理。

这是苹果对 AI 最早、也最浪漫的一次表态。但接下来的二十年，苹果几乎不谈 AI——它造产品。

值得注意的是，Knowledge Navigator 视频里设定的日期，就是 2011 年 9 月 16 日——而真实世界中的 2011 年 10 月，苹果发布了 Siri。这种巧合既被视作传奇，也被视作苹果对自己长期愿景的某种执念。

## 二、Siri：从 SRI 走出，被苹果买下

故事要从美国国防部下属的 DARPA 说起。2003 年起，DARPA 资助 SRI International 的 **CALO 项目**（Cognitive Assistant that Learns and Organizes），五年投入约 1.5 亿美元，目标是造一个能学习的认知助理。

CALO 的成果之一，被三位工程师 Adam Cheyer、Tom Gruber、Dag Kittlaus 在 2007 年拆出来，注册成一家创业公司——**Siri Inc.**。2010 年 2 月，Siri 在 App Store 上架；两个月后的 4 月 28 日，苹果以约 2 亿美元的传闻价格收购了 Siri Inc.。

这是史蒂夫·乔布斯（Steve Jobs）生前批准的最后几笔重要收购之一。他亲自打电话给 Kittlaus 三周，说服他卖。2011 年 10 月 4 日——乔布斯去世前一日——**iPhone 4S** 发布会上 Siri 作为系统级语音助手亮相。

它是第一款主流智能手机自带的个人 AI 助理，比 Google Assistant 早五年、比 Alexa 早三年。

可惜，自此以后 Siri 走下神坛。原始团队陆续离职，三位创始人最终另起炉灶造了 **Viv**（2016 年被三星收购，演化为 Bixby）。Siri 在苹果内部经历多次重构、跨多个团队，问答能力长期停留在"定时器和天气"——这成了苹果 AI 战略最长的债。

Siri 失速的根本原因，事后被反复复盘：苹果把它当作产品功能，而非平台；语音识别、意图解析、动作执行被切成不同子团队，没有统一的语义中枢；隐私优先的工程文化让它无法像谷歌、亚马逊那样把全网用户语料汇总训练。这些今天看似小事的工程决策，让 Siri 在大模型时代的起跑线已经落后。

## 三、神经引擎与 Core ML：端侧路线的奠基

苹果对 AI 的执念，不在云端，而在芯片。

2017 年 9 月，**A11 Bionic** 随 iPhone X 发布，首次集成 **Neural Engine**（神经网络引擎），双核、每秒 6000 亿次操作。它的第一个公开任务是 Face ID 的人脸识别。同月，苹果发布 **Core ML** 框架，开发者可以把训练好的模型转成端侧格式，在 iPhone 本地推理。

这套组合奠定了苹果与谷歌、亚马逊截然不同的路线：**模型跑在本机，不送数据到云**。

2020 年苹果转向自研 **Apple Silicon**——M1、M2、M3、M4——把 Neural Engine 一路升级到每秒数十万亿次操作（M4 达 38 TOPS）。到 2023 年，一台 MacBook 已经能本地跑 70 亿参数的语言模型，这是十年前不可想象的算力下沉。

苹果的端侧路线还有一道隐性优势：**统一内存架构**（Unified Memory Architecture）。CPU、GPU、Neural Engine 共享同一块物理内存，模型加载与推理时不需要跨设备拷贝大块权重，这让大模型在 Mac 上的实测推理速度甚至超过部分独显工作站。这是 ARM 架构与 x86 架构在 AI 时代的一次决定性分野。

2018 年 4 月，苹果挖来谷歌 AI 主管<Person id="jgiannandrea" />（John Giannandrea），担任高级副总裁，主管机器学习与 AI 战略。詹南德雷亚是搜索与知识图谱出身，在谷歌主导过 Gemini 前身的多项工作。

他的到来，被外界解读为苹果终于要"认真做 AI"——但接下来六年，他几乎不公开露面，苹果继续在沉默中积累。

这种"不发声"是苹果一贯风格：直到产品成熟前，宁可被嘲笑落后，也不发布概念视频或路线图。这给苹果带来巨大的时间压力——当 ChatGPT 在 2022 年底引爆世界，苹果是消费电子大厂里反应最慢的一个，但也是少数仍把"产品先于演示"奉为铁律的一个。

## 四、MLX 与开源研究的转向

2023 年 12 月，苹果机器学习研究团队悄悄开源了 **MLX**——一个为 Apple Silicon 原生设计的数组计算框架，对标 PyTorch 与 JAX。Awni Hannun 等人主导，代码托管在 GitHub。MLX 让研究者可以直接在 M 系列芯片上训练与推理大模型，统一内存架构让 GPU/CPU/Neural Engine 数据零拷贝。

这之前后，苹果的研究论文也密集起来：2024 年发布 **OpenELM**（端侧语言模型，2.7 亿到 30 亿参数）和 **MM1**（多模态模型，最大 300 亿参数）；2024 年 WWDC 后又发布 **Apple Intelligence Foundation Language Models** 技术报告，详述端侧 30 亿参数模型与服务端模型的训练、对齐与评估流程。这是一家以保密著称的公司，开始向开源社区交底——尽管核心权重并未公开。

苹果开源策略的克制是有意的：MLX 是工具，不是模型；OpenELM 是研究范式，不是商品。它把"基础设施开源、产品保留"当作底线——既换得学术界的善意，又不放出核心竞争力。这与 Meta 的全开放权重路线截然不同，是大公司开源博弈中独特的一种姿态。

## 五、2024 WWDC：Apple Intelligence 登场

2024 年 6 月 10 日，库比蒂诺，苹果总部。WWDC 主题演讲，<Person id="cook" />（Tim Cook）开场，<Person id="federighi" />（Craig Federighi）主讲——苹果正式发布 **Apple Intelligence**，定义为"为你而生的个人智能"（Personal Intelligence）。

整套架构分三层。

**端侧**：约 30 亿参数的小模型，在 iPhone 15 Pro 及以上、配 M 系列芯片的 iPad/Mac 本地运行，处理写作建议、邮件摘要、通知优先级、Genmoji、Image Playground 等高频任务。

**Private Cloud Compute**：苹果自建的私有云，运行更大的服务端模型。它最关键的不是性能，而是隐私架构——苹果声称数据"加密上传、用完即焚、苹果自己看不到"，并接受第三方安全研究员的代码审查。这是苹果给自己设下的最高难度：在云端做 AI，又承诺与端侧同等隐私。

**第三方接入**：处理超出苹果模型能力的复杂请求时，**Siri 会请求用户授权后调用 ChatGPT**（首个合作方为 OpenAI）。后续苹果宣布也将接入 Google Gemini，并在中国大陆与百度（"文心一言"）和阿里巴巴（"通义千问"）合作。

发布会同时推出系统级写作工具、邮件 / 通知摘要、新视觉智能、重构的 Siri、深度集成的 Image Playground 与 Genmoji。库克在结束语中说："我们不是要做最聪明的 AI，而是要做最有用、最尊重你的 AI。"

## 六、合作与争议：一场关于灵魂的争论

Apple Intelligence 与 OpenAI 的合作，是苹果史上最具争议的战略选择之一。

发布会后数小时，埃隆·马斯克（Elon Musk）在 X 平台公开宣称："如果苹果在操作系统层面集成 OpenAI，我会在我的公司里禁用所有 iPhone。这是不可接受的安全侵犯。"虽是一贯的夸张，却点出了真问题：**苹果是否在把"灵魂"外包给一家自己不掌控的公司？**

苹果的回应是分层：端侧与私有云的能力是自家的，调用 ChatGPT 必须用户每次明确授权、可见可关。但批评者依然质疑：当 Siri 越来越频繁地说"我让 ChatGPT 帮你回答"，苹果就在丧失自己定义"智能"的话语权。

更现实的挑战是**交付**。2024 年 10 月，Apple Intelligence 第一阶段功能（写作工具、通知摘要）随 iOS 18.1 推出，仅限美国英语；12 月新增 Image Playground、Genmoji、ChatGPT 集成。但被寄予厚望的"个人化 Siri"——能跨 App 理解你的日程、邮件、消息上下文——一再延期。

2025 年 3 月，苹果罕见地发布声明承认延期，将"更个人化的 Siri"推迟到 2026 年。彭博社记者 Mark Gurman 报道指出，内部多位高管认为现有 Siri 架构难以支撑大模型重构，可能需要彻底另起炉灶。这是苹果二十年来最公开的 AI 战略挫折。

## 七、苹果 AI 的世界观

把 Apple Intelligence 放回更大的产业图里，苹果走的是一条**第三条路**。

它不像 OpenAI、Anthropic 那样追求最强模型；它不像谷歌那样把云端 AI 作为搜索的延伸；它也不像 Meta 那样押注开源权重生态。它的赌注是**消费操作系统**：当全球十几亿台活跃苹果设备每年合一升级到带 AI 的 iOS，AI 就第一次从极客与开发者的玩具，变成了普通人每天用的功能。

这条路有它的合理性。**端侧推理成本接近零、隐私可控、规模天然就大。**

它也有它的代价：模型迭代速度受制于硬件周期；前沿能力始终落后第三方半步到一步；当用户期待与 ChatGPT、Gemini 同水平的对话能力时，苹果端侧模型只能勉强跟上。

到 2025 年下半年，库比蒂诺继续在三件事上加码：自研云端大模型（替代对外部模型的依赖）、更深入的开发者 API（让所有 App 都能用 Apple Intelligence）、机器人与可穿戴设备的端侧多模态。詹南德雷亚仍在台前沉默，库克与费德里吉则反复强调："AI 是一段长征，不是一次冲刺。"

## 八、隐私即架构：Private Cloud Compute 的工程豪赌

Private Cloud Compute（PCC）是 Apple Intelligence 最具工程野心的部分，也是苹果 AI 战略最容易被低估的地方。

传统云 AI 的隐私模型是"信任服务方"——用户必须相信 OpenAI、谷歌不会窥探请求内容。苹果不接受这套。PCC 的目标是**用密码学和硬件证明，让数据连苹果自己都看不到**。

它的关键设计有三：用户设备只把请求发给可被远程证明的"已签名 PCC 节点"；PCC 节点不持久化任何用户数据，运行结束后状态归零；苹果发布 PCC 节点的固件镜像与源码片段，邀请独立安全研究员审核——若发现节点上跑的不是公开镜像，整个信任链立即作废。

这是工业界第一次尝试把"机密计算"（confidential computing）做到消费级 AI 服务里。代价不小：硬件用专门的 Apple Silicon 服务器、网络层带证明（attestation）、调度系统重写——同等性能的成本远高于普通云推理。

但这是苹果给自己的差异化定位。在大模型已经无差别廉价化的世界里，**它要让"隐私"变成商品**。这条路若走通，苹果会在 toC AI 领域立下一道别人短期内难以跨越的护城河；若走不通，则会成为又一个昂贵但缺乏说服力的市场术语。一切，仍在写。

发布会后，独立安全研究员 Matthew Green、Bruce Schneier 等先后撰文评估 PCC 设计，普遍承认其威胁模型是迄今为止云 AI 最严谨的——尽管"苹果自己看不到"是否绝对成立，仍待长期审计验证。这本身已是 AI 行业一种少见的进步：让最大的玩家之一，公开把自己绑在隐私义务上。

::: tip 太史公曰
苹果之于人工智能，犹汉之文景——不争一时之锋芒，而图百年之根基。它最早演练 Knowledge Navigator，最早在主流手机内置语音助理，最早把 Neural Engine 嫁给消费芯片，却在大模型时代最迟开口。当 OpenAI 与谷歌争天下，苹果选了"端侧 + 私有云"的窄路：慢、保守、被嘲笑落后，但每一步都把数十亿用户的隐私与日常生活当作约束条件。这条路对错未定。Apple Intelligence 的延期已是苹果史上少有的公开挫折，OpenAI 集成又让灵魂归属之争始终悬而未决。然而当 AI 真正从云端走入口袋的那一天，仍要看苹果如何把这件事做成"普通人不察而日用之"——若做成了，便是 AI 民主化的最后一块拼图；若做不成，便是一段昂贵的、关于谨慎之极限的教训。
:::

## 亲历者说

::: info 征集中
如果你曾在苹果机器学习、Siri 或 Apple Intelligence 团队工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Apple Inc. (1987). "Knowledge Navigator." Concept Video, Apple Computer.
2. Markoff, J. (2010). "Apple Buys a Start-Up for Its Voice Technology." *The New York Times*, April 28, 2010.
3. Bosker, B. (2013). "SIRI RISING: The Inside Story of Siri's Origins—And Why She Could Overshadow the iPhone." *HuffPost*, January 22, 2013.
4. Apple Inc. (2017). "Core ML and Vision: Machine Learning in iOS 11." Apple Developer Documentation.
5. Hannun, A. et al. (2023). "MLX: An Array Framework for Apple Silicon." Apple Machine Learning Research, GitHub.
6. Mehta, S. et al. (2024). "OpenELM: An Efficient Language Model Family with Open Training and Inference Framework." arXiv:2404.14619.
7. McKinzie, B. et al. (2024). "MM1: Methods, Analysis & Insights from Multimodal LLM Pre-training." arXiv:2403.09611.
8. Gunter, T. et al. (2024). "Apple Intelligence Foundation Language Models." Apple Machine Learning Research, Technical Report.
9. Apple Inc. (2024). "Private Cloud Compute: A New Frontier for AI Privacy in the Cloud." Apple Security Research Blog, June 10, 2024.
10. Federighi, C. (2024). "Introducing Apple Intelligence." WWDC 2024 Keynote, June 10, 2024.
11. Gurman, M. (2025). "Apple Delays More Personalized Siri AI Features to 2026." *Bloomberg News*, March 7, 2025.
12. Patel, N. (2024). "Elon Musk Threatens to Ban Apple Devices Over OpenAI Partnership." *The Verge*, June 10, 2024.
