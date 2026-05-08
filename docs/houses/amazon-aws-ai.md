# 世家 · 亚马逊（AWS AI / Bedrock）

> 全球最大的云厂商在大模型时代的生存法则——不押注自研顶级模型，而要做所有顶级模型的通用底座；80 亿美元投资 Anthropic，是 AWS 在 2020 年代最重要的一步棋。

## 一、云的底子

要理解 AWS 在 AI 时代的位置，需要先理解它原本就是什么。2006 年 3 月 14 日，亚马逊推出 Simple Storage Service（S3）；同年 8 月 24 日推出 Elastic Compute Cloud（EC2 Beta）。这两件产品合在一起，让"云计算"从概念变成了商品。<Person id="altman" />创业时第一次刷信用卡租的服务器、Anthropic 训练 Claude 用的 H100 集群、Hugging Face Hub 上每一次模型下载——这些事情背后共同的基础设施母体，都可以追溯到 AWS 在西雅图地下机房里那几排早期机器。

AWS 不是 AI 时代才发力的玩家。它是 AI 时代被默默挑选出来的平台。它没有 OpenAI 那样的明星模型，也没有 DeepMind 那样的研究光环，但它有别人都没有的东西：所有人都需要的 GPU 和带宽。

## 二、Alexa 与早期机器学习的尝试

亚马逊真正进入"消费级 AI"是从 2014 年开始的。那一年 11 月，第一代 Echo 智能音箱在亚马逊会员中悄悄发售；它内置的语音助手叫 **Alexa**——以亚历山大图书馆为名。Echo + Alexa 让"对着空气说话让机器干活"第一次从科幻变成日常用品。到 2016 年前后，Alexa 几乎是消费级 AI 的代名词，谷歌 Assistant、苹果 Siri、微软 Cortana 都被它压一头。

工程师贡献给云的那一面，是 2015 年发布的 Amazon Machine Learning（一个面向开发者的托管 ML 服务），以及 2017 年 11 月在 re:Invent 大会上推出的 **Amazon SageMaker**——一站式机器学习平台，从数据标注、特征工程、模型训练、部署、监控全部托管。SageMaker 在 2018 至 2022 年间是企业 ML 工作流最主流的选择之一，也奠定了 AWS"做基础设施而不是做模型"的路径依赖。

但 Alexa 自己并没能跨过深度学习的下一道坎。她的对话仍然停留在指令式问答，没能升级为真正的对话智能体。等到 2022 年 ChatGPT 出现，Alexa 一夜之间显得过时；亚马逊开始把巨额投入转向"如何让 Alexa 接上大模型"，但这是后话。

## 三、与 OpenAI 失之交臂

很少有人提起的一段公案：2015 年 OpenAI 创立之初，AWS 是它早期的算力来源之一。当时几位创始人——奥尔特曼、<Person id="brown" />前后期的伙伴们、<Person id="sutskever" />——还没有形成与某一家云厂商的独家绑定。AWS 提供过一定额度的算力赞助。

转折发生在 2019 年。微软宣布向 OpenAI 投资 10 亿美元，并把 OpenAI 的训练算力独家迁到 Azure 上。从那一刻起，AWS 失去了进入 OpenAI 生态的机会，被迫以"被替代者"的身份退出最重要的 AI 玩家之一的供应链。这是 AWS 后来全力拥抱 Anthropic 的伏笔——它不能让同样的事情再发生一次。

## 四、Bedrock：模型超市的诞生

2023 年 4 月 13 日，AWS 宣布推出 **Amazon Bedrock**，并在当年 9 月 28 日全面可用。Bedrock 的产品定位非常清楚：**不做单一旗舰大模型，做模型聚合的托管 API 平台**。第一批上线的模型供应方包括 Anthropic（Claude）、AI21 Labs（Jurassic）、Stability AI（Stable Diffusion）、Cohere、亚马逊自家的 Titan，随后接入 Meta 的 Llama 2 / Llama 3、Mistral、Mixtral 等。

如果说微软的策略是"独家娶 OpenAI"，谷歌的策略是"全力打 Gemini"，那 AWS 的策略就是——**做一个永远中立的模型超市**。客户在 Bedrock 上一行 API 切换底层模型，不必自己运维 GPU 集群；亚马逊则赚下这张账单中的算力分成。

Bedrock 的另一面，是它把 AWS 已有的企业级合规体系（KMS 加密、VPC 网络隔离、IAM 权限、PrivateLink）全部接进了大模型。对银行、医院、政府、跨国制造业这些 OpenAI Web 直连不能进的客户来说，Bedrock 是它们第一次能"合规地"使用顶级大模型。

## 五、80 亿美元押注 Anthropic

AWS 的最大手笔出现在 2023 年 9 月 25 日。当天双方共同宣布：亚马逊将向 **Anthropic** 投资最多 **40 亿美元**，作为交换，Anthropic 将 AWS 作为其主要云供应方，把 Claude 系列模型部分训练和大规模推理迁移到 AWS 的 Trainium / Inferentia 自研芯片集群上。

2024 年 3 月，这笔投资全部到账。同年 11 月 22 日，AWS 又宣布**追加 40 亿美元**，把对 Anthropic 的累计投资抬高到 **80 亿美元**。再加上谷歌的 20 亿美元，Anthropic 在两年里从一家三十多人的研究公司变成估值过 600 亿美元的巨头，背后是 AWS 与谷歌的资本战。

AWS 的算盘很直接：以资本换"模型独家上 Bedrock"的权利，以及把 Claude 训练绑到自研芯片上以推动 Trainium 落地。<Person id="amodei" />与 AWS CEO <Person id="brown" />的合作伙伴 Andy Jassy 走得很近，Anthropic 也乐意获得一个不需要担心"被收购"的金主——AWS 始终强调自己只做投资人，不要董事席位，不主导战略方向。这是 AWS 从微软-OpenAI 的紧密绑定中学到的教训。

## 六、Trainium 与 Inferentia：自研芯片的长线棋

光有钱还不够。2018 年 AWS 推出第一代自研推理芯片 **Inferentia**；2020 年 12 月发布 **Trainium**（训练芯片），随后是 2023 年的 Trainium2、2024 年的 Trainium3 路线图。这条产品线由 Annapurna Labs 团队主导——AWS 2015 年收购的以色列芯片公司，是云厂商自研芯片浪潮的开端。

战略意图直白：**降低对英伟达 GPU 的依赖**。2024 年 H100 一卡难求、英伟达毛利率超过 70% 的格局下，云厂商如果不能自研芯片，就等于把利润全部交给老黄。<Person id="huang" />和 AWS 的关系一直是"既合作又防备"——AWS 既是英伟达最大客户之一，也是英伟达最强的潜在替代者。

Anthropic 的 Claude 部分训练落到 Trainium2 集群上，是这条战略最关键的一次落地。从 2024 年下半年开始，AWS 公开宣布将与 Anthropic 共建 **Project Rainier**——一个由数十万颗 Trainium2 芯片组成的超算集群，专门服务 Claude 训练。如果 Project Rainier 成功，AWS 就能在最关键的"前沿模型训练算力"这一战中，建立起独立于英伟达的备选供应链。

## 七、Q、Nova、Agent：把模型嵌进企业工作流

2023 年 11 月 re:Invent 大会，AWS 推出 **Amazon Q**——面向企业开发者和业务用户的 AI 助手，覆盖代码（Q Developer，原 CodeWhisperer）、商业智能（Q Business）、客服（Q in Connect）。Q 的定位与微软 Copilot 相似，但走的是 B 端深度合规路线。

2024 年 12 月 re:Invent，AWS 又发布自研基础模型家族 **Amazon Nova**：Micro、Lite、Pro、Premier 四个尺寸的语言模型，外加 Nova Canvas（图像）、Nova Reel（视频）。Nova 不是冲着 SOTA 去的——它的目标是为成本敏感的企业客户提供一个"够用就好、价格便宜、合规无忧"的兜底选项。

同期推出的 **Bedrock Agents** 与 **Bedrock Knowledge Bases** 把大模型能力打包成"开箱即用的 RAG + 工具调用"，让企业客户不再需要自己拼装 LangChain、向量库、检索逻辑。这一系列产品共同构成了 AWS 在大模型时代的产品矩阵：上层是 Q 与 Bedrock Agents，中层是 Bedrock 模型市场，底层是 Trainium / Inferentia + EC2 GPU。

## 八、Andy Jassy 时代的策略

2021 年 7 月，杰夫·贝索斯（Jeff Bezos）卸任亚马逊 CEO，由 AWS 创始人 **Andy Jassy** 接任。Jassy 是 AWS 从 2003 年那个"小灵感"长成全球云霸主的总操盘手，他对云生意的理解极为深刻：**这是一门长期的、靠规模与多样性取胜的生意，不需要做明星产品，需要做无聊但不可替代的基础设施**。

这一思路体现在 AWS 对 AI 的态度上——不与 OpenAI、Google、Anthropic 在前沿模型上正面竞争，专心做"所有人都跑在我上面"的底座。截至 2026 年，AWS 在全球云市场份额仍居首位（约 30%）；Bedrock 已成为 OpenAI API 之外企业大模型 API 的最主要替代选择；Anthropic 依靠 AWS 的算力快速成长为 OpenAI 最有力的挑战者。

如果说微软-OpenAI 是 AI 时代的"魏"，谷歌-DeepMind 是"蜀"，那 AWS-Anthropic 就是"吴"——三足鼎立的第三极，在闭源派系中走出了一条"中立平台 + 资本伙伴"的路。这条路是否最终胜出还未可知，但 AWS 确实已经把自己稳稳地嵌进了未来十年大模型基础设施的底层。

::: tip 太史公曰
AWS 是 AI 时代最不像 AI 公司的 AI 巨头。它没有写出过 Transformer，没有训练过 GPT，甚至没有一款让普通人记得住名字的模型。但每一个明星 AI 产品的背后，都或多或少要烧 AWS 的电、用 AWS 的盘、租 AWS 的卡。这是它的卑微，也是它的霸气——在风口最猛的地方做风。八十亿美元押注 Anthropic 不是赌博，而是 AWS 对自己定位的最大一次确认：它不是要赢得明星模型，而是要保证下一代明星模型必须长在它身上。这是一家真正读懂"基础设施是权力"这件事的公司。
:::

## 亲历者说

::: info 征集中
如果你曾在 AWS AI、SageMaker、Bedrock 或 Annapurna Labs 团队工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Amazon Web Services. (2023, April 13). "Announcing New Tools for Building with Generative AI on AWS." AWS Blog.
2. Amazon Web Services. (2023, September 28). "Amazon Bedrock Is Now Generally Available." AWS News Blog.
3. Anthropic & Amazon. (2023, September 25). "Expanding Access to Safer AI with Amazon." Anthropic Blog.
4. Anthropic & Amazon. (2024, November 22). "Anthropic and AWS Deepen Strategic Collaboration." Anthropic Blog.
5. Amazon Web Services. (2024, December 3). "Introducing Amazon Nova Foundation Models." re:Invent 2024 Announcement.
6. Amazon Web Services. (2017, November 29). "Amazon SageMaker." re:Invent 2017 Keynote.
7. Stone, B. (2021). *Amazon Unbound: Jeff Bezos and the Invention of a Global Empire*. Simon & Schuster.
8. The Information. (2024). "Inside Amazon's $8 Billion Bet on Anthropic." (Multiple reports.)
9. Vogels, W. (2006). "A Word from the CTO on the Launch of Amazon S3." All Things Distributed Blog.
10. AWS re:Invent Keynote Archive (2014–2024).
11. SemiAnalysis. (2024). "Trainium2 and AWS's Custom Silicon Strategy."
