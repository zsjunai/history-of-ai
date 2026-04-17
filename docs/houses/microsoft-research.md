# 世家 · 微软研究院（Microsoft Research）

> 一家以"让研究自由生长"为信条的企业实验室——它一度是贝尔实验室之后最接近"AT&T 时代"精神的工业研究机构，也在 AI 时代以另一种方式完成了自我重塑。

## 一、盖茨的贝尔实验室梦

1991 年 9 月 17 日，比尔·盖茨与内森·米佛德（Nathan Myhrvold）在华盛顿州雷德蒙德（Redmond）的微软总部签署文件，宣布成立 **Microsoft Research**（微软研究院，MSR）。创始院长是原卡内基梅隆大学计算机科学系主任理查德·拉什德（Richard Rashid）。盖茨对拉什德提出了一个简单的要求："复制一个贝尔实验室。"

那一年，微软已经是个人电脑操作系统的霸主，但还远未进入互联网或 AI 的主流视野。盖茨的判断是：软件产业的下一轮变革需要基础研究——而美国的基础研究机构正在瓦解（AT&T 1984 年拆分后贝尔实验室开始衰落，Xerox PARC 的辉煌也已褪色）。如果微软不自己做，就没有人做。

MSR 的文化深受贝尔实验室影响：研究员自由选题，不对产品负责，以学术论文发表为主要产出指标。这在当时的软件公司里是异类——大多数公司的研究部门都绑定产品路线图。MSR 坚持自由研究的做法后来被验证为正确：从 1990 年代末到 2010 年代，MSR 的论文数在工业研究机构里长期居首。

## 二、MSRA：中国计算机科学的黄埔军校

1998 年 11 月 5 日，MSR 在北京设立亚洲分院——**Microsoft Research Asia**（微软亚洲研究院，MSRA）。首任院长是李开复（Kai-Fu Lee），他当时刚刚离开 SGI 加入微软。继任者包括张亚勤、沈向洋、洪小文、王坚、芮勇、洪小文（多次任职）等——这份名单本身就是 21 世纪初中国科技产业的半部人事史。

MSRA 选址在中关村的希格玛大厦，从清华、北大、中科大、浙大、上交大等顶尖高校招收博士生和年轻研究员。它不是典型的"公司研究部门"——更像一所没有学位的研究型大学。研究员可以用 50% 的时间做基础研究，发表 SIGGRAPH、CVPR、ACL、NeurIPS 论文；另一半时间参与产品转化——Office、Bing、Cortana、必应翻译、小冰都受益于此。

MSRA 培养出来的人，后来遍布中国 AI 产业：

- **何恺明**（ResNet、Mask R-CNN，2024 年任 MIT 教授）
- **孙剑**（2018 年加入旷视 Megvii 任首席科学家，2022 年逝世）
- **汤晓鸥**（2014 年创立商汤科技）
- **王坚**（2008 年加入阿里巴巴，创立阿里云）
- **芮勇**（2017 年加入联想任 CTO）
- **颜水成**（新加坡国立大学教授、前 360 首席科学家）
- **马维英**（前字节跳动 AI Lab 负责人）
- **周明**（前 MSRA NLP 总监、澜舟科技 CEO）
- **李航**（字节跳动 AI Lab）
- **林达华**（港中大教授、上海 AI 实验室）
- **沈向洋**（2020 年离职后任清华高等研究院教授）

业界流传一种说法："半个中国 AI 圈都是 MSRA 毕业的。" 这不是夸张——2010 年代中国几乎所有做深度学习的顶级实验室和公司都有 MSRA 背景的科学家。

## 三、视觉的黄金期：ResNet 的诞生

如果要选 MSRA 对整个 AI 史最大的单项贡献，那一定是 **ResNet**（残差网络）。

2015 年 12 月，何恺明、张祥雨、任少卿、孙剑四人的论文《Deep Residual Learning for Image Recognition》发布在 arXiv 上。论文提出了"跳跃连接"（skip connection）—— 让每一层的输入可以直接跨过若干层传到后面，使训练极深的网络（超过 100 层）成为可能。ResNet-152 在 ImageNet 2015 挑战赛上以 3.57% 的 top-5 错误率夺冠，首次超过人类标注者的水平（约 5.1%）。

ResNet 赢得了 CVPR 2016 最佳论文奖。更重要的是，它成为 2016 年之后几乎所有深度网络的基础设施——Transformer 的残差连接、BERT 的预训练、GPT 的每一层、扩散模型的 UNet，无一不借用或改良自 ResNet 的设计。

两年后，2017 年何恺明团队又发表 Mask R-CNN，获得 ICCV 2017 最佳论文奖。他后来离开 MSRA 加入 Facebook AI Research，2024 年转任 MIT 教授——但 ResNet 的根始终在北京中关村。

## 四、语音、NLP 与小冰的时代

除了视觉，MSR/MSRA 在语音识别、自然语言处理、对话系统上也长期领先。

**黄学东**（Xuedong Huang）领导的语音团队 2016 年 10 月宣布：他们的语音识别系统在 Switchboard 数据集上达到 5.9% 的词错率，**首次与人类专业转录员持平**。这是半个世纪语音识别追求"人类水平"的里程碑。

**Turing-NLG**（2020 年 2 月发布）是 MSR 自研的 170 亿参数语言模型，发布时是当时全球最大的 Transformer 模型之一，后被 GPT-3 超越。此后 MSR 与 OpenAI 合作密切，Turing 系列让位于 GPT 系列，但 MSR 内部仍保留相当规模的 NLP 研究。

**小冰**（XiaoIce）—— MSRA 2014 年推出的对话机器人，以情感陪伴为定位，在微博、QQ、微信上积累了数亿用户。她和她更"效率化"的姐妹 **Cortana**（2014）代表了 MSR 在前大语言模型时代对对话 AI 的两种理解：一个做朋友，一个做助理。2020 年小冰团队从 MSRA 分拆独立，成为小冰公司。

## 五、与 OpenAI 的深度绑定

2019 年 7 月 22 日，微软宣布向 OpenAI 投资 10 亿美元，成为其首选云服务提供商。这是 AI 史上最具决定意义的一笔交易之一。

此后几年，这笔投资不断追加。2021 年微软再投 20 亿美元。2023 年 1 月，在 ChatGPT 掀起全球浪潮之后，微软再追加 100 亿美元——累计投资**至少 130 亿美元**。以此为代价，微软拿到了 OpenAI 模型的独家商业授权、GPT 系列全部在 Azure 上训练的独家算力合同、以及 OpenAI 未来一大部分利润的分成。

2023 年 2 月，微软 Bing 接入 GPT-4，推出新版必应（Bing Chat，后更名 Copilot）。3 月 16 日推出 Microsoft 365 Copilot，把 GPT-4 嵌入 Office 全家桶。2023 年 11 月起推出 Copilot 品牌统一战略，从 Windows 到 GitHub 到 Azure，全部贴上 Copilot 标签。

这是 MSR 历史上最特殊的一段——它从"纯研究"变成了"与外部最强研究实验室合作"的混合体。MSR 自己的大模型研究被边缘化，但它的云基础设施、产品整合、企业渠道成为 OpenAI 最重要的放大器。两家公司像一对相互矛盾又彼此依赖的双子星。

## 六、GitHub Copilot 与编程的革命

2021 年 6 月 29 日，GitHub（2018 年被微软收购）发布 Copilot 技术预览版，底层用 OpenAI 的 Codex 模型。这是**第一个大规模落地的 AI 编程助手**，也是后来所有类似产品（Cursor、Cody、Windsurf 等）的鼻祖。

Copilot 把 AI 真正带进程序员的日常：在 VSCode 里每秒补全代码、生成函数、解释错误信息。到 2024 年，微软披露 Copilot 已被超过 100 万付费用户使用，估计辅助生成了全球约 40% 的新增代码行数。Copilot 证明了一件重要的事——AI 不必取代人类，只需成为人类最得力的搭档。

## 七、GitHub、LinkedIn 与微软 AI 事业部

除了 MSR 和 MSRA 的研究体系，微软内部还有几条平行的 AI 力量：

- **GitHub**（2018 年以 75 亿美元收购，Copilot 的孵化器）
- **LinkedIn**（2016 年 262 亿美元收购，大规模用户行为数据 + 推荐系统研究）
- **Microsoft AI**（2024 年 3 月成立的新事业部，由前 DeepMind 联合创始人 Mustafa Suleyman 领导，负责消费级 AI 产品 Copilot）
- **Azure AI**（云基础设施，托管 OpenAI / Mistral / Hugging Face 等模型）

2024 年微软从 Inflection AI 收编 Suleyman 及其团队，标志着微软在 OpenAI 之外建立独立 AI 能力的决心——因为过度依赖单一合作伙伴的战略风险，在 2023 年 11 月 Altman 被 OpenAI 董事会解雇的那五天里暴露无遗。

## 八、今日的微软研究院

到 2026 年，MSR 在全球有 8 个实验室（雷德蒙德、纽约、剑桥、北京、印度班加罗尔、蒙特利尔、巴西、以色列赫兹利亚），总计约 1000 名研究员。MSRA 北京虽然在 2019 年中美科技摩擦升级后一度传闻调整，但至今仍是微软在全球最重要的研究节点之一。

MSR 的贡献方式与 2015 年之前相比已经不同——不再以"发表最多论文的工业实验室"为目标，而是在 AI 基础设施、安全研究、多模态、Agent、科学 AI（AI for Science）等方向上保持关键投入。纳德拉时代的微软对研究的态度不再是"为研究而研究"，而是"让研究为产品服务"——这是一种文化转向，既让 MSR 失去了一些黄金时代的浪漫，也让它在大模型时代保持了现实的重要性。

::: tip 太史公曰
微软研究院的三十五年，是一次工业研究机构的二次生长。它诞生时就立志做"第二个贝尔实验室"，在 2000 年代以一种罕见的学术自由度存在于一家上市公司内部；后来它又在 AI 大潮中完成了"从自研转向共研"的转型——与 OpenAI 的深度绑定既是战略远见，也是部分承认"我们不可能独自造出 ChatGPT"。MSRA 北京则是一个特例中的特例：一个美国科技巨头在 21 世纪初为中国培养了一整代 AI 人才，这件事在中美关系的今天已经难以复制。历史的偶然与精明共同成就了这家研究院——也让它留给今天的最大遗产，不是一两篇论文，而是一种证明：**工业研究机构可以既赚钱又自由，只要公司真的相信基础研究。**
:::

## 亲历者说

::: info 征集中
如果你曾在微软研究院或 MSRA 工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Microsoft (1991). "Microsoft Research: Inception and Early History."
2. Li, K. F. (2018). *AI Superpowers: China, Silicon Valley, and the New World Order*. Houghton Mifflin Harcourt.
3. He, K., Zhang, X., Ren, S., & Sun, J. (2016). "Deep Residual Learning for Image Recognition." *CVPR 2016*.
4. He, K. et al. (2017). "Mask R-CNN." *ICCV 2017*.
5. Xiong, W. et al. (2017). "The Microsoft 2017 Conversational Speech Recognition System." Microsoft Research Technical Report.
6. Microsoft (2020). "Turing-NLG: A 17-Billion-Parameter Language Model."
7. Microsoft (2023). "Microsoft Extends Partnership with OpenAI."
8. GitHub (2021). "Introducing GitHub Copilot: Your AI Pair Programmer."
9. Microsoft (2024). "Introducing Microsoft AI and Mustafa Suleyman as CEO."
10. Greene, T. (2018). "Inside MSRA: China's AI Talent Factory." *The Next Web*.
11. 张亚勤 (2024). *智能 · 涌现：微软亚洲研究院的故事*. 中信出版集团.
