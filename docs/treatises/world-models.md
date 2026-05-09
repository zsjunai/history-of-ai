# 书 · 世界模型

> <Person id="lecun" /> 说："大语言模型永远不可能达到人类智能，因为它们只学会了语言，没有学会世界。"世界模型是对 LLM 路线最根本的挑战，也是 2024 年以后 AI 研究最尖锐的分水岭。

## 一、什么是世界模型

世界模型（World Model）的核心命题简洁而锋利：智能体不应该只学会预测下一个 token，而应在脑中构建一个对物理世界的内部模拟器（Internal Simulator），用于想象、规划与反事实推理。它学习的不是文本分布，而是因果链与物理律——重力会让物体下落，玻璃会被石头砸碎，水倒进杯子会留在杯子里。

这个直觉首先来自婴儿。心理学家 Spelke 与 Baillargeon 在 1980—1990 年代的实验证明：人类婴儿在掌握语言之前，已经理解物体持久性（Object Permanence）、固体性、连续运动、因果先后。智能始于身体与世界的交互，语言只是后来的副产品。世界模型的支持者据此发问：把秩序反过来——先吃文本、再求理解——真的能造出真智能吗？

## 二、理论源头

世界模型的思想血脉远比深度学习古老。控制论里早有"内部模型"（Internal Model）一说——<Person id="wiener" /> 的反馈控制思想中，调节器必须含有被控对象的简化模型。神经科学里的预测编码（Predictive Coding）则由 Rao 与 Ballard 1999 年在 *Nature Neuroscience* 系统化：大脑不断预测下一秒的感官输入，把预测误差当作学习信号。Karl Friston 后来把它推广为"自由能原理"。

把这套思想搬进深度学习的，是 David Ha 与 <Person id="schmidhuber" />。他们 2018 年的论文 *World Models* 让 agent 在自己生成的"梦境"里学习赛车与躲避——先用变分自编码器压缩观察，再用循环网络预测下一帧潜在表示，最后用一个极简的控制器在想象世界里训练。这是第一次有人在深度学习框架内实现"在脑内做梦再去现实驾驶"。

随后是 Dreamer 系列。<Person id="hassabis" /> 的 DeepMind 在 2020—2023 年间发布 DreamerV1—V3，把世界模型推到 Atari 全部 55 款游戏与 Minecraft 钻石任务的人类水平，证明仅靠想象训练也能学出复杂策略。

最具野心的提案来自 <Person id="lecun" />。2022 年 6 月，他在 *A Path Towards Autonomous Machine Intelligence* 中正式提出 JEPA（Joint Embedding Predictive Architecture）：不在像素空间预测下一帧，而在抽象表示空间预测——丢掉对未来无关的细节，只保留对决策有用的结构。2023 年 6 月发布的 I-JEPA 与 2024 年发布的 V-JEPA、V-JEPA 2 把这套主张落地到了图像与视频。

## 三、杨立昆 vs LLM 路线：核心辩论

2023 年开始，<Person id="lecun" /> 几乎在每一次公开演讲中都在做同一件事——拆 LLM 的台。他的论点稳定而尖锐：自回归 LLM 是"在 token 空间的曲线拟合"，无法处理因果与三维结构；一个十岁孩子十年里看到的视觉信息量，已经超过任何一个被互联网文本喂大的模型。所以无论再加多少层、多少卡，它都到不了人类智能的根。他把这套论调浓缩成一句口号："LLM is an off-ramp on the highway to AGI."

反对者的火力同样猛烈。<Person id="hassabis" /> 与 <Person id="amodei" /> 都不否认世界模型的重要，但坚持 LLM 已经在涌现某种朴素的世界理解——否则 Claude 与 Gemini 不可能解开它从未见过的物理题。<Person id="sutskever" /> 更早就提出："要预测下一个 token，就必须理解产生这个 token 的一切因素。"在他看来，足够好的下一词预测，本身就是一种通用的压缩与建模。

辩论之所以重要，是因为它直接决定下一个十年的钱往哪里去。如果 LeCun 对，OpenAI、Anthropic、字节、月之暗面押在 LLM 上的几十亿美元就只是过渡；如果 Sutskever 对，JEPA、Dreamer、World Labs 们不过是浪漫的支线。2026 年的此刻，没有人能给出最终答案——但每一次新模型发布都在把天平挪动几分。

## 四、视频生成即世界模拟

2024 年 2 月 15 日，OpenAI 发布 Sora。一段 60 秒的视频里，一位身着红裙的女子走在霓虹闪烁的东京街头，倒影、雨水、人群、远景的招牌都自洽得令人窒息。OpenAI 在技术报告里直接称它为 *Video generation models as world simulators*——把视频生成器称作世界模拟器，这是一次刻意的口号宣战。

Sora 究竟算不算世界模型？支持者说：它学到了三维一致性、镜头运动、物体持久性，这正是世界模型的标志。怀疑者翻出反例：玻璃杯落地不碎、椅子穿过地面、生物长出多余的腿。它学到了视觉的统计规律，却仍然没有学到物理。

中国的玩家几乎同步入场。快手可灵（Kling）2024 年 6 月发布，是首个对全球用户开放的高质量视频模型；字节即梦、智谱清影、MiniMax 海螺紧随其后。海外的 Runway Gen-3、Luma Dream Machine、Pika、谷歌 Veo 3（2025）把竞争推到 4K 分辨率与 1 分钟时长。视频生成是不是通往世界模型的正道，业界至今没有共识，但所有玩家都在押。

## 五、游戏与虚拟世界中的世界模型

如果说 Sora 想用视频骗过人眼，那么另一条路线则更彻底——直接生成一个可玩的世界。

2024 年 8 月，谷歌发布 GameNGen：用扩散模型在 TPU 上以每秒 20 帧实时生成 *Doom* 的画面，玩家的键鼠输入直接驱动图像演化。游戏不再是被渲染出来的，而是被预测出来的。同年 2 月，DeepMind 发布 Genie，从无标注的游戏视频中学出"可控潜在动作"，能让用户在一张随手画的图里走来走去；2024 年 12 月升级到 Genie 2，可生成 3D 一致、可玩 1 分钟的世界。

英伟达则把这条线推向工业。2025 年 1 月 CES，<Person id="huang" /> 发布 Cosmos——面向物理 AI 的世界基础模型平台，主打机器人与自动驾驶的合成数据训练。同年 2026 年初，<Person id="fei-fei-li" /> 创立的 World Labs 公开首个生成式 3D 世界模型 demo，单张图片可生成可探索的 3D 场景；她在采访中提出"空间智能"（Spatial Intelligence）作为世界模型的核心命题。

游戏与虚拟世界天然提供因果闭环——动作下去，世界变化回来——这恰恰是文本语料缺失的那块拼图。

## 六、世界模型与 AGI

把世界模型放在 AGI 路线图上，<Person id="lecun" /> 给出的答案最系统：感知模块从原始输入提取表征，世界模型预测未来，actor 选择动作，cost 模块定义目标，configurator 在所有这些之上做协调——他称之为"目标驱动 AI"（Objective-Driven AI）。这套架构里没有 LLM 的位置，最多只是一个文本接口。

世界模型也是具身智能（Embodied AI）的理论靠山。Tesla Optimus、Figure 02、Physical Intelligence 的 π0、宇树 G1 与 H1，都需要一个内在世界模拟器来做几秒钟的"想象 rollout"，否则强化学习的样本复杂度会让真机训练破产。<Person id="musk" /> 押注的端到端自驾 FSD v12—v13，本质上也是把驾驶视频压缩成一个隐式的世界模型。

但开放问题依然刺眼：我们如何评估一个模型是否"真的"理解了世界？反事实推理？长时序一致性？还是看它能否被一个三岁小孩的物理直觉打败？2025 年 Meta 推出的 IntPhys 2、PhysBench 等基准给出了部分答案，却远远不够。世界模型究竟是 AGI 的最后一公里，还是又一条迷人却漫长的弯路——这一卷的结局，要留给下一卷历史书去写。

---

::: tip 太史公曰
观夫世界模型之争，实乃二十世纪控制论与二十一世纪联结主义之再相逢。LeCun 立帜于先，言 LLM 不知世界、不通因果，须以 JEPA 重铸根基；Sutskever、Hassabis、Amodei 应之曰：极致预测即理解，参数足时世界自现。Sora 一出，举世惊呼世界模拟器已至；细看玻璃不碎、足生其六，又疑其名实不副。Ha 与 Schmidhuber 早在 2018 年已让 agent 在梦境中驾车，今 Genie 与 Cosmos 续其志，World Labs 张其旗。然评估之尺度未立，因果之深浅难量。后之学者，当记一事：每一次"它已经懂了"的断言，都该用一个三岁孩童的常识去检验——而每一次"它永远不会懂"的断言，也都该被下一篇论文打脸的可能性所提醒。
:::

## 亲历者说

::: info 征集中
如果你参与过世界模型、视频生成、具身智能或相关研究，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Rao, R. P., & Ballard, D. H. (1999). Predictive coding in the visual cortex: A functional interpretation of some extra-classical receptive-field effects. *Nature Neuroscience*, 2(1), 79-87.
2. Ha, D., & Schmidhuber, J. (2018). World models. *arXiv preprint arXiv:1803.10122*.
3. Hafner, D., Pasukonis, J., Ba, J., & Lillicrap, T. (2023). Mastering diverse domains through world models (DreamerV3). *arXiv preprint arXiv:2301.04104*.
4. LeCun, Y. (2022). A path towards autonomous machine intelligence. *Open Review*.
5. Assran, M., Duval, Q., Misra, I., et al. (2023). Self-supervised learning from images with a joint-embedding predictive architecture (I-JEPA). *CVPR 2023*.
6. Bardes, A., Garrido, Q., Ponce, J., et al. (2024). V-JEPA: Latent video prediction for visual representation learning. *arXiv preprint arXiv:2404.08471*.
7. OpenAI. (2024). Video generation models as world simulators (Sora technical report). OpenAI.
8. Valevski, D., Leviathan, Y., Arar, M., & Fruchter, S. (2024). Diffusion models are real-time game engines (GameNGen). *arXiv preprint arXiv:2408.14837*.
9. Bruce, J., Dennis, M., Edwards, A., et al. (2024). Genie: Generative interactive environments. *ICML 2024*.
10. NVIDIA. (2025). Cosmos: World foundation models for physical AI. NVIDIA Technical Report.
11. Spelke, E. S. (1990). Principles of object perception. *Cognitive Science*, 14(1), 29-56.
12. Garrido, Q., Ballas, N., Assran, M., et al. (2025). V-JEPA 2: Self-supervised video models for understanding and prediction. *Meta AI Research*.
