# 世家 · Mistral AI

> 三个法国年轻人在巴黎拒绝了硅谷的剧本——他们要用开源权重和欧洲资本，写一部属于旧大陆的大模型史。

## 一、巴黎的反叛

2023 年 4 月 28 日，巴黎第 9 区一间临时租来的办公室里，三个三十岁上下的法国人按下了公司注册按钮。CEO 是亚瑟·门施（Arthur Mensch），30 岁，巴黎综合理工本科、巴黎高师硕士、巴黎萨克雷大学博士、前 DeepMind 巴黎办公室研究员，在《Chinchilla 论文》的合作者名单里能找到他的名字；CTO 纪尧姆·朗普勒（Guillaume Lample）是 LLaMA 论文的第一作者；第三位创始人提莫蒂·拉克鲁瓦（Timothée Lacroix）也来自 Meta FAIR 巴黎，是 LLaMA 的合作者之一。

三人的简历几乎写在同一张纸上：巴黎综合理工（École Polytechnique）出身、Meta FAIR 巴黎或 DeepMind 训练、负责或参与了欧洲大陆最重要的两个开源大模型实验室的核心工作。当 2023 年 2 月 LLaMA 在 Meta 内部以"研究许可"形式发布、随后泄露到 4chan、再迅速点燃整个开源生态的时候，这三个人正坐在 Meta 巴黎办公室里——他们看到了一个事实：**欧洲缺少自己的 OpenAI，但欧洲不缺训练 LLaMA 的人**。

促成三人下定决心离职创业的，是 2023 年初的一连串事件——ChatGPT 用户量在两个月内突破一亿，微软追加 OpenAI 100 亿美元，Google 仓促应战发布 Bard，欧洲在这场最重要的技术转折中几乎完全缺席。门施在事后接受《Le Monde》采访时回忆："我当时想，如果我们不做，欧洲在 AI 这件事上将永远是消费者，不是生产者。" 他和朗普勒在巴黎一家咖啡馆碰面只用了 45 分钟就达成共识：辞职、回欧洲、自筹资金、做开源大模型。

公司成立时的官方使命极简——"让人人可用的开放式前沿 AI"。名字 Mistral 取自法国南部由北向南吹的强劲山地风，象征着从欧洲南端席卷而来的力量。

## 二、四周估值十亿欧

2023 年 6 月 13 日，公司成立刚满四周，Mistral 完成 1.05 亿欧元种子轮融资，估值 2.4 亿欧元——彼时这是欧洲科技史上最大的种子轮。Lightspeed Venture Partners 领投，Xavier Niel（法国电信 Iliad 创始人）、Rodolphe Saadé（CMA CGM 集团董事长）、Eric Schmidt（前 Google CEO）等人跟投。

让欧洲资本如此疯狂的，不只是创始团队的简历。2023 年上半年，欧盟正在审议《AI 法案》（AI Act），法国政府公开表态希望"避免欧洲沦为美国 AI 巨头的数字殖民地"。马克龙（Emmanuel Macron）总统亲自接见 Mensch，把 Mistral 抬到"法国 AI 国家队"的位置。法国数字部长让-诺埃尔·巴罗（Jean-Noël Barrot）甚至在公开场合用"我们的 OpenAI"来形容这家成立不满半年的公司。

更有戏剧性的是融资过程本身。据 *Sifted* 杂志后来披露，门施在 2023 年 5 月只用了不到两周时间就完成了路演——他随身带着一份 PPT，每场会议只讲 30 分钟，重复的核心论点只有两个："我和朗普勒训练过 LLaMA，我们知道怎么做到 GPT-3.5 级别"，"欧洲必须有自己的前沿模型"。Lightspeed 的合伙人 Antoine Moyroud 在尽调中给出的备忘录开头只写了一句话——"This team can build a frontier model. The rest is execution."

Mistral 从诞生之日起，就同时承担着两个角色——一家创业公司，一面欧洲主权 AI 的旗帜。

在融资公告发布的同一周，门施在巴黎一场记者会上回答记者提问时说了句被反复引用的话："我们不需要打败 OpenAI，我们只需要让欧洲不被 OpenAI 决定。" 这句话此后成为 Mistral 公司文化的非官方口号，写在巴黎办公室墙上。

## 三、开源派的旗手

2023 年 9 月 27 日，Mistral 发布了第一个模型 **Mistral 7B**，Apache 2.0 协议，权重完全开源。一份只有几行字的发布公告附带了一个磁力链接（torrent magnet link），让人想起 1990 年代黑客文化的浪漫——团队后来解释说，他们想测试 Hugging Face 之外的极简发布方式。这个磁力链接的发布形式后来被反复引用为"工程师式的优雅"。

Mistral 7B 的成绩单足以让 LLaMA 派人侧目：**在大多数标准基准上超越 Llama 2 13B，部分任务接近 Llama 2 34B**，但参数量只有它们的一半甚至四分之一。架构上引入分组查询注意力（Grouped-Query Attention，GQA）和滑动窗口注意力（Sliding Window Attention，SWA），既快又省——SWA 让 7B 模型用线性内存就能处理 32K 上下文，是当时同尺寸开源模型中第一个做到的。

两个月后的 2023 年 12 月 8 日，团队再扔出一颗炸弹——**Mixtral 8x7B**，第一个被广泛部署的开源混合专家模型（Mixture of Experts，MoE）。8 位专家、每次推理只激活 2 位，总参数 467 亿，活跃参数 129 亿，性能在多项基准上追平甚至超过 GPT-3.5 与 Llama 2 70B。开源 MoE 是此前学术界讨论已久但工业界很少落地的方向（Google 的 Switch Transformer 仅有论文未开源权重），Mixtral 让所有人意识到——**MoE 不只是论文，是产品**。

那一年里，Mistral 一跃成为开源大模型领域的领跑者之一，与 Meta 的 Llama 系列形成"双子星"格局。Hugging Face 的下载榜上，Mistral 7B 衍生模型一度占据前十中的六个位置，社区围绕它做出了 Zephyr、OpenHermes、Dolphin 等数十个微调版本。

值得记下一笔的是 Mistral 在工程上的克制。当时美国大厂的训练动辄使用上万张 H100，Mistral 7B 的训练只用了一个相对小的集群，团队后来披露大约 200–300 张 H100 的等效算力——他们在算法上做了大量优化，把"数据质量 + 架构精简"的收益压榨到极致。这种"小团队、小算力、做大事"的工程风格，让 Mistral 成为 2023 年最具学术清新感的大模型公司之一。

## 四、转向闭源的争议

进入 2024 年，故事开始变得复杂。

2024 年 2 月 26 日，Mistral 发布旗舰闭源模型 **Mistral Large**，仅通过 API 提供，性能对标 GPT-4 并显著领先 Claude 2。同一天，公司宣布与微软达成多年战略合作——Mistral Large 将作为 Azure OpenAI 之外**第二个**登陆 Azure 平台的前沿大模型，微软同时进行了一笔小额股权投资（金额未公开，约千万欧元量级）。

消息一出，欧洲开源社区炸开了锅。一边是创始团队曾在融资公告里反复强调"开源是 Mistral 的灵魂"，一边是与美国云巨头独家合作的闭源旗舰模型；一边是欧盟纳税人通过欧洲投资基金间接持股，一边是欧洲议会议员公开质问"我们是不是养了一家美国公司的代理人"。

Mensch 的回应坦率而务实：开源研究模型 + 闭源商业模型的双轨并行，是公司可持续生存的唯一路径——纯开源养不活 200 人的团队和动辄 8 位数欧元的训练成本。批评者认为这是"开源洗白"（open-washing），支持者则把它视为欧洲 AI 走出"理想主义陷阱"的必要妥协。

但开源这条线没有断。2024 年到 2025 年，Mistral 持续发布开源权重，逐渐建立起一条完整的模型谱系——

| 时间 | 模型 | 参数 | 用途 |
|------|------|------|------|
| 2024.4 | Mixtral 8x22B | 141B（活跃 39B） | 旗舰开源 MoE |
| 2024.5 | Codestral 22B | 22B | 编程专用 |
| 2024.7 | Mathstral 7B / Mistral NeMo 12B | 7B / 12B | 数学 / 通用（与 NVIDIA） |
| 2024.9 | Pixtral 12B | 12B | 多模态视觉 |
| 2024.11 | Pixtral Large | 124B | 多模态旗舰 |
| 2025.1 | Mistral Small 3 | 24B | 高性价比开源 |
| 2025.6 | Magistral Small | 24B | 推理模型 |

闭源 API 一侧则有 Mistral Medium / Large / Large 2（旗舰）、Mistral Saba（阿拉伯语与南亚语言专版）、Ministral 3B / 8B（端侧）。这种"前沿闭源 + 开源中坚"的搭配，让 Mistral 既能服务企业付费客户，也能持续维系开源社区——后者是它差异化竞争 OpenAI 与 Anthropic 的核心武器。

**Apache 2.0** 与 **Mistral Research License** 的混搭，也成为 2024 年后开源大模型许可的一种范式。前者无附加条款适合工业落地，后者要求商用须申请许可适合保护核心模型——其他公司（如阿里 Qwen、谷歌 Gemma）后来发布开源模型时，许可条款的设计很大程度上参考了 Mistral 的双轨思路。

## 五、Le Chat 与产品化

光有模型不够，欧洲需要自己的"ChatGPT"。

2024 年 2 月，Mistral 推出消费级产品 **Le Chat**——名字玩了个法文双关，"Le Chat"既是定冠词加聊天，也是"那只猫"。免费、网页版、自带搜索功能，定位法语世界与欧洲大陆用户。2025 年 2 月 6 日，Le Chat 推出 iOS 与 Android 应用，并在马克龙总统亲自出席的一场发布会上宣布"每秒 1100 token 的响应速度"——这个数字背后是 Cerebras 提供的晶圆级 AI 芯片（WSE-3）支持，相比 GPU 推理速度快 5–10 倍。

发布会后，Le Chat 一度冲上法国 App Store 总榜第一，下载量在两天内突破 100 万。这是欧洲第一次出现一款能在民用市场与 ChatGPT、Claude、Gemini 直接掰手腕的本土大模型产品。除了消费版本，Mistral 同时推出 **La Plateforme**（开发者 API 平台）与 **Mistral AI for Enterprise**（私有部署方案），后者直接面向法国巴黎银行（BNP Paribas）、AXA 安盛、SNCF 法国铁路等大型企业客户，把"数据不出欧洲"作为核心卖点。

到 2025 年底，Le Chat 月活用户突破 1500 万，绝大部分来自欧洲与法语非洲。与此同时，Mistral 还获得了法国国防部、欧盟委员会等政府客户的合同——这是 OpenAI 因美国 ITAR 出口管制而进不去的市场。

2025 年的法国，公交车站、机场广告牌、地铁广告位都贴着 Mistral 与 Le Chat 的海报——这是欧洲历史上第一次有 AI 公司像消费品牌一样在公共空间投放广告。

在企业市场，Mistral 的卖点也不止是技术。GDPR、AI Act、欧洲数据主权这些原本被美国大厂视为"摩擦"的法规，反而成了 Mistral 招揽欧洲企业客户的天然护城河——很多法国、德国、北欧大型企业的合规部门只接受"模型与数据都在欧盟境内"的方案，而 Mistral 是少数能彻底满足这条要求的前沿大模型供应商。

## 六、十亿到百亿的资本路径

| 时间 | 轮次 | 金额 | 估值 | 领投 |
|------|------|------|------|------|
| 2023 年 6 月 | 种子轮 | 1.05 亿欧元 | 2.4 亿欧元 | Lightspeed |
| 2023 年 12 月 | A 轮 | 3.85 亿欧元 | 约 20 亿欧元 | Andreessen Horowitz |
| 2024 年 6 月 | B 轮 | 6 亿欧元 | 约 60 亿欧元 | General Catalyst |
| 2025 年 11 月 | C 轮 | 17 亿欧元 | 117 亿欧元 | ASML（持股 11%） |

C 轮的领投方 ASML——荷兰光刻机巨头，欧洲科技皇冠上的明珠——选择投资一家 AI 公司，被欧洲媒体解读为"欧洲产业链的自我救赎"。117 亿欧元的估值让 Mistral 跻身全球 AI 第一梯队，仅次于 OpenAI、Anthropic、xAI 与中国头部几家。截至 2025 年底，员工规模约 400 人，年化收入达数亿欧元量级。

这套数字暗藏了一个关键事实：Mistral 的资本来源结构与 OpenAI、Anthropic 截然不同——后两者主要依赖美国大型云厂商（微软、Amazon、Google）的"算力换股权"模式，而 Mistral 的投资方更多是欧洲产业资本与战略资本（ASML、CMA CGM、Iliad、欧洲投资银行）。这种结构在估值上限上吃亏，但在战略独立性上得分。

## 七、欧洲、美国、中国的三足

到 2026 年初，全球前沿大模型的版图已大致定型——

- **美国阵营**：OpenAI、Anthropic、Google DeepMind、xAI、Meta FAIR；
- **中国阵营**：DeepSeek、阿里通义千问、字节豆包、智谱 GLM、月之暗面；
- **欧洲阵营**：Mistral 几乎以一己之力撑起前沿一极。

Mistral 的存在让欧盟的"AI 主权"从口号变成了一家有真实算力、真实模型、真实用户的公司。它不一定能赢——它的训练算力规模仍然只有美国头部的几分之一，欧洲的资本市场深度也撑不起 OpenAI 那种千亿美元估值——但它让欧洲第一次拥有了在大模型时代讨价还价的筹码。法国政府在 2024 年宣布的"巴黎 AI 行动峰会"（AI Action Summit），把 Mistral 摆到了与 OpenAI、Anthropic 平起平坐的位置。

人才上，Mistral 也在反向虹吸欧洲流失到美国的研究者——Stanislas Polu（前 OpenAI）、Devendra Chaplot、Sophia Yang 等陆续加盟，部分员工甚至放弃了硅谷数倍的薪资。法国政府配合推出的"Choose France"科技人才签证，把回流潮推到了 2010 年以来的高点。

挑战仍然存在。2025 年下半年，Llama 与 DeepSeek 的快速进步让 Mistral 在开源排行榜上不再是绝对头部；同时，公司内部也经历了第一次重要人事变动——首席科学家 Lample 短暂请假后回归，部分早期工程师离职创业。门施在多个公开场合表达了类似的判断：Mistral 的下一阶段，"不是和 OpenAI 比谁更大，而是和欧洲一起把 AI 用起来"。

如果说 2023 年的 Mistral 是一面要"追赶硅谷"的旗帜，那么 2026 年的 Mistral 已经成为一种生态——围绕它的微调模型、推理引擎（如 vLLM 默认支持 Mistral 架构）、欧洲云服务商（OVHcloud、Scaleway）、行业落地伙伴，构成了第一个真正意义上"在欧洲、为欧洲"的 AI 技术栈。

::: tip 太史公曰
Mistral 之于欧洲 AI，犹商鞅之于秦国——以一隅之地、数年之功，凭三两人才与一笔孤注，竟在两强夹缝中辟出一条路。其妙处在于"不全开源、不全闭源"的双轨：开源养声誉、聚社区、立旗帜；闭源养资本、活公司、博生存。这种务实在欧洲科技史上罕见——欧洲过去太多项目死于追求纯粹理念，Mistral 却懂得在理想与现实之间不断微调。它的局限同样明显：欧洲市场窄、算力贵、人才被美国持续抽血，单凭门施一队人很难真正与 OpenAI 正面对决。但它至少证明了一件事：在 GPU 寡头与开源洪流并行的时代，一家三十人起步的公司也可以三年估值过百亿，前提是创始人手里握着 LLaMA 与 Chinchilla 的密钥。Mistral 是欧洲送给 AI 时代的一封情书，也是一封战书。
:::

## 亲历者说

::: info 征集中
如果你曾在 Mistral AI 工作或参与其开源社区，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Jiang, A. Q., Sablayrolles, A., Mensch, A., et al. (2023). "Mistral 7B." *arXiv:2310.06825*.
2. Jiang, A. Q., et al. (2024). "Mixtral of Experts." *arXiv:2401.04088*.
3. Touvron, H., Lavril, T., Izacard, G., et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." *arXiv:2302.13971*.
4. Hoffmann, J., Borgeaud, S., Mensch, A., et al. (2022). "Training Compute-Optimal Large Language Models" (Chinchilla). *arXiv:2203.15556*.
5. Mistral AI. (2023, September 27). "Announcing Mistral 7B." Official blog post.
6. Mistral AI. (2024, February 26). "Au Large." Official announcement of Mistral Large and Microsoft partnership.
7. Reuters. (2023, June 13). "France's Mistral AI raises 105 million euros in record seed round."
8. Bloomberg. (2024, June 11). "Mistral AI Valued at $6.2 Billion in New Funding Round."
9. Financial Times. (2025, November 18). "ASML leads €1.7bn investment in Mistral AI at €11.7bn valuation."
10. The Verge. (2025, February 6). "Mistral's Le Chat hits #1 in French App Store after Macron-attended launch."
11. Politico Europe. (2024, March). "Inside Mistral's controversial pivot from open source."
12. European Commission. (2024). *AI Act final text*. Official Journal of the European Union.
