# 世家 · Meta AI (FAIR)

> 科技巨头中最坚定的开源 AI 倡导者——它的首席 AI 科学家公开唱衰大语言模型路线，但它却通过开源 LLaMA 重塑了全球大模型竞争格局。

## 一、FAIR 的诞生：学术派的企业实验室

2013 年 12 月 9 日，当时还叫 Facebook 的社交巨头在 NeurIPS 会议上正式宣布：成立 **Facebook AI Research**（FAIR），由<Person id="lecun" />出任首任负责人。

扎克伯格（Mark Zuckerberg）亲自拍板这个任命——那年 Facebook 刚 IPO，公司财务压力不小，但在 AI 的判断上他是坚定的。杨立昆的条件很明确：FAIR 必须是学术实验室，不是产品团队；研究员要以论文发表为主要产出指标；核心研究必须开源。扎克伯格答应了。杨立昆保留纽约大学（NYU）教授兼职——FAIR 在纽约和帕洛阿尔托两地同时设立办公室。

这是一个重要的时间点：比 DeepMind 被谷歌收购晚半年，比 Google Brain 成立晚两年，比 OpenAI 的成立早两年。FAIR 从一开始就定位为与学界对话、参与最前沿研究的机构，而不是 Facebook 产品线的附庸。

## 二、PyTorch：开源的第一次胜利

2016 年 1 月，FAIR 公开了一个新的深度学习框架——**PyTorch**。它脱胎自 Lua 版的 Torch，但完全用 Python 重写，强调"动态计算图"和"Pythonic"接口。

对比 Google 2015 年开源的 TensorFlow，PyTorch 的用户体验更接近科研工作者的思维方式——写起来像普通 Python，调试像普通 Python，出错信息像普通 Python。2017-2018 年，PyTorch 在学术界迅速超越 TensorFlow；2019-2020 年，大多数顶级会议的论文代码默认用 PyTorch；到 2022 年，PyTorch 已经在产业界也取代了 TensorFlow 成为事实标准。

2022 年，PyTorch 的治理权移交给 Linux 基金会旗下的 PyTorch Foundation，Meta 保持最大贡献者地位。这一步让 PyTorch 从"Meta 的框架"变成"全行业的框架"，也是 Meta 在开源路线上的一次重要示范。

## 三、研究成就：从 Dense Embedding 到 Segment Anything

FAIR 的十年研究贡献覆盖深度学习几乎所有分支。

**计算机视觉**：ResNeXt（2016）、Mask R-CNN 的扩展（与 Google 的何恺明等合作）、DINO（2021，自监督视觉）、**Segment Anything (SAM)**（2023，图像分割通用模型，开源权重和数据集）。

**自监督学习**：杨立昆长期倡导的方向。BYOL、MoCo、DINO、I-JEPA（2023）等工作都出自 FAIR 或与 FAIR 合作。

**强化学习**：OpenAI Five 之前的 Dota 2 研究、Hanabi 合作游戏、围棋开源模型 OpenGo。

**机器翻译**：No Language Left Behind（2022，200 语言互译模型）、SeamlessM4T（2023，语音-文本全模态翻译）。

**具身智能**：Habitat（仿真平台）、Ego4D（第一人称视频数据集，2022）——为 AR/VR 和机器人积累基础。

这十年间，FAIR 的研究员遍及全球 AI 顶会，在 NeurIPS、ICML、CVPR、ACL 上连年高产。

## 四、LLaMA：一次意外的开源革命

2023 年 2 月 24 日，Meta 发布 **LLaMA**（Large Language Model Meta AI）——一组 7B、13B、33B、65B 参数的大语言模型。论文第一作者是年轻的法国研究员<Person id="touvron" />（Hugo Touvron）。

Meta 最初的意图是"非商用学术许可"——只给申请的研究者分发权重。但几周内，LLaMA 的完整权重被"泄露"到 4chan 和 BitTorrent。Meta 起初尴尬，后来干脆转身拥抱开源。

2023 年 7 月 18 日，**LLaMA 2** 发布——允许商业使用，权重公开下载。这是 AI 史上第一个由大厂正式开源的"GPT-3/4 级别"大模型，瞬间引爆全球开源社区。接下来几个月里，Vicuna、Alpaca、Koala、Guanaco、WizardLM……数百个基于 LLaMA 微调的模型涌现，Hugging Face 下载排行榜前十里有七个基于 LLaMA。

这一波开源潮对产业的冲击无法夸大：

- **中国大模型**：智谱 ChatGLM、阿里通义千问（Qwen）、百川、深度求索——几乎所有中国大模型都在架构上参考了 LLaMA
- **欧洲大模型**：Mistral AI 的创始团队大多来自 LLaMA 项目；Mistral 7B、Mixtral 都是 LLaMA 风格架构的延续
- **开源工具链**：llama.cpp、Ollama、LM Studio、vLLM、llama-index——整个"本地部署大模型"的工具生态以 LLaMA 为参照系搭建起来

此后 **LLaMA 3**（2024 年 4 月，8B/70B）、**LLaMA 3.1**（2024 年 7 月，405B 参数，第一个开源的 GPT-4 级别基础模型）、**LLaMA 3.2**（2024 年 9 月，多模态 + 小模型）、**LLaMA 4**（2025 年 4 月，原生多模态 MoE 架构）陆续发布，每一代都保持开源。

2024 年 Meta 披露 LLaMA 系列累计下载超过 3.5 亿次，成为史上下载量最大的开源 AI 模型家族。

## 五、扎克伯格的豪赌：1000 亿美元投向 AI

Meta 在 2024-2025 年的 AI 投入达到惊人规模。

2024 年扎克伯格披露，Meta 当年计划拥有 **35 万张 H100 等效 GPU**，资本开支约 380 亿美元。2025 年这一数字进一步攀升到 600-650 亿美元——几乎是 Meta 2020 年全公司营收的规模。

2025 年 6 月，扎克伯格宣布成立 **Meta Superintelligence Labs (MSL)**，并挖走前 Scale AI CEO Alexandr Wang 担任首席 AI 官。随后 Meta 投入超过 140 亿美元获得 Scale AI 约 49% 股份，把 Scale 的数据标注能力纳入自身体系。同期 Meta 以巨额薪酬（传闻多人年薪过亿美元）从 OpenAI、Anthropic、Google 挖来至少 15 位顶级研究员，包括前 OpenAI 研究总监 Jakub Pachocki、多位 GPT-4/5 核心作者。

这是 AI 史上最激进的人才争夺战。扎克伯格在员工信里写道："通用人工智能即将到来，我们没有时间输。"

## 六、杨立昆的反叛

然而 Meta 内部存在一个耐人寻味的分裂：它的首席 AI 科学家杨立昆，公开且反复地唱衰当下主流的 LLM 路线。

杨立昆的核心观点是：

- 纯粹的自回归大语言模型永远无法达到真正的 AGI——它们缺乏世界模型、规划能力、持久记忆
- 真正的通用智能需要"**世界模型**"（World Model）——能理解物理、因果、长期规划的架构
- 他提出的 **JEPA**（Joint-Embedding Predictive Architecture，联合嵌入预测架构）是他认为更有前景的方向
- "LLM 是通向 AGI 路上的一个出口匝道（off-ramp），不是通向 AGI 本身的高速公路"

他在 Twitter/X、播客、学术演讲里不断重复这些观点，公开与 OpenAI、Anthropic、xAI 的研究哲学对峙——尽管他自己所在的公司 Meta 在开源 LLaMA 大语言模型。

2024 年下半年起，杨立昆在 FAIR 内部的影响力据报道有所下降。2025 年随着 Superintelligence Labs 的成立、Alexandr Wang 上任 CAO，FAIR 的部分核心研究重心移至 MSL；杨立昆自身更多专注于 JEPA 系列和世界模型研究。这种"首席科学家公开反对公司主流路线"的局面，在 AI 圈内几乎没有先例。

## 七、开源作为战略武器

为什么扎克伯格如此坚定地开源？

他 2024 年 7 月的一篇公开信《Open Source AI Is the Path Forward》给出了系统回答：

- **防御垄断**：如果开源 AI 做不到最前沿，Meta 未来的社交产品将被迫依赖竞争对手（OpenAI、Google）提供的 API
- **生态倍增**：开源让全球开发者一起改进模型，相当于"免费雇佣数万名研究员"
- **成本反而更低**：Meta 的实际需求是为数十亿社交用户提供 AI 能力，用自己的开源模型在自己的数据中心上部署，比调 OpenAI API 便宜一个量级
- **历史类比**：Linux 之于操作系统、PyTorch 之于框架——开源最终赢得技术基础设施的战争

这套论证让 Meta 在 2023-2026 年间成为开源 AI 的旗手，也让它和 OpenAI 的闭源路线形成了整个行业最鲜明的对照。

## 八、今日的 Meta AI

到 2026 年春，Meta 的 AI 体系由几部分组成：

- **FAIR**：基础研究，杨立昆任 Chief AI Scientist，继续 JEPA、世界模型等前沿研究
- **GenAI / Meta Superintelligence Labs**：应用导向，Alexandr Wang 任 CAO，负责 LLaMA 后续版本、Meta AI 助手产品、多模态
- **Reality Labs AI**：为 AR/VR/智能眼镜服务的 AI
- **Applied AI Research**：推荐系统、广告 AI、内容审核

Meta AI 助手（嵌入 WhatsApp、Instagram、Facebook、Messenger）据 2025 年数据已有超过 6 亿月活用户——规模上仅次于 ChatGPT。雷朋 Meta 智能眼镜（Ray-Ban Meta）内置 AI，成为消费级 AI 硬件的代表作之一。LLaMA 4 系列持续迭代，仍保持开源发布。

::: tip 太史公曰
Meta 的 AI 之路最具张力：公司战略坚定押注开源和算力，首席 AI 科学家却公开反对主流技术路线。这种看似矛盾的结构，其实恰恰反映了 Meta 的真实态度——**对路径不确定，但对开源确定**。它不赌某一条技术路线必胜，而是把"我们必须赢得开源基础设施的位置"作为底线。LLaMA 的开源让整个行业受益，也让 Meta 自己从"AI 时代落后者"的批评中翻身。杨立昆式的反叛看似是组织裂缝，实则是冗余——让一家公司同时押注 LLM 主流与非 LLM 异端。扎克伯格可能并不完全同意杨立昆，但他允许杨立昆继续说——因为在 AI 最不确定的十年里，**允许内部异见本身就是一种战略资产**。
:::

## 亲历者说

::: info 征集中
如果你曾在 FAIR、Meta GenAI 或 Superintelligence Labs 工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Meta (2013). "Facebook AI Research Launch." Press release.
2. Paszke, A. et al. (2019). "PyTorch: An Imperative Style, High-Performance Deep Learning Library." *NeurIPS 2019*.
3. Touvron, H. et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv:2302.13971.
4. Touvron, H. et al. (2023). "Llama 2: Open Foundation and Fine-Tuned Chat Models." arXiv:2307.09288.
5. Meta (2024). "The Llama 3 Herd of Models." arXiv:2407.21783.
6. Kirillov, A. et al. (2023). "Segment Anything." *ICCV 2023*.
7. LeCun, Y. (2022). "A Path Towards Autonomous Machine Intelligence." OpenReview.
8. Zuckerberg, M. (2024). "Open Source AI Is the Path Forward." Meta blog.
9. Isaacson, W. (2023). *Elon Musk*.（部分描述 Meta AI 相关事件）
10. The Verge (2025). "Inside Meta's $14 Billion Scale AI Acquisition."
