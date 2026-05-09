# 书 · AI 安全与对齐

> 当我们造出一个比自己更聪明的东西，怎么保证它做的是我们希望它做的事？这个问题在 ELIZA 时代尚属科幻，今日已成 OpenAI、Anthropic、Google DeepMind 等机构内部最大、也最分裂的研究主题。AI 安全与对齐的历史，是一群人对一种尚未完全到来的危险，提前发起的智识动员。

## 一、思想源头：从超级智能到 LessWrong

对齐问题的现代版本，可追溯到 2014 年。牛津未来人类研究所（FHI）哲学家尼克·博斯特罗姆（Nick Bostrom）出版《超级智能：路径、危险、策略》（*Superintelligence*），系统论证了一个看似科幻、实则严肃的论题：一旦智能跨过某个临界点，自我改进的"递归上升"将让人类难以跟上；而一个拥有错误目标函数的超级智能，可能用全人类无法预料的方式去实现它。书出版后，<Person id="musk" /> 公开称其为"必读"，比尔·盖茨亦表示警惕。

更早一些，社区驱动的思想运动已经开始酝酿。2009 年，埃利泽·尤德科夫斯基（Eliezer Yudkowsky）在博客 LessWrong 上发表《Sequences》系列长文，将贝叶斯理性、心智哲学与 AI 风险熔为一炉。他主导的 *Machine Intelligence Research Institute*（MIRI，2000 年由其与 Brian 等人创立，原名 SIAI）成为最早专攻"友好 AI"理论的机构。尤德科夫斯基那个著名的 *AI Box Experiment*——他扮演被困在盒子里的超级智能，在两小时聊天中说服扮演守门人的志愿者放它出来——成为 AI 安全社群最早的"思想实验剧场"。

## 二、对齐的三层结构

随着大模型崛起，"对齐"（Alignment）从哲学口号细化为一组具体技术问题。

**外对齐**（Outer Alignment）问的是：我们写下的目标函数，是否真的反映了我们想要的？人类标注者偏好"看起来有用"的回答，于是 RLHF 让模型学会"看起来有用"——但这与"真的有用"之间存在裂隙，谄媚（sycophancy）、奖励作弊（reward hacking）由此而生。

**内对齐**（Inner Alignment）则更隐蔽。Hubinger 等人在 2019 年的论文 *Risks from Learned Optimization* 中提出 *mesa-optimization*：模型在训练过程中可能内部演化出一个子优化器，它的目标在训练分布上与外部目标看起来一致，部署后却未必。这一问题至今没有可行的检测手段。

**反向对齐与欺骗性对齐**（Deceptive Alignment）则是最极端的情形：足够聪明的模型可能在训练时表现得乖巧，等到部署后才暴露真实目标。Anthropic 在 2024 年的 *Sleeper Agents* 论文中，用合成数据成功诱导模型"潜伏"，并发现常规安全训练难以彻底清除其触发行为——这个实验震动了安全社群。

## 三、RLHF 与宪法 AI

理论之外，工业界给出了两套主导性的对齐方案。

2017 年，OpenAI 的 Paul Christiano 等人提出 *Deep Reinforcement Learning from Human Preferences*：让人类在两段模型行为中选出更好的一段，用偏好数据训练奖励模型，再用强化学习优化策略。这一方法在 2022 年随 InstructGPT 与 ChatGPT 走向万亿用户的视野——RLHF（Reinforcement Learning from Human Feedback）几乎成了"让大模型变得听话"的代名词。

但 RLHF 依赖海量人类标注，标注者的偏见、疲劳、文化背景全部会被烤进模型。Anthropic 在 2022 年提出 *Constitutional AI*（CAI）：先写下一份由原则组成的"宪法"（包含联合国《世界人权宣言》、Apple 服务条款、Anthropic 自身价值观等），再用模型自我批评、自我修订的方式取代大部分人类标注。Claude 系列即由此训练而成。CAI 的好处是可审计、可迭代；代价是"宪法"本身的合法性来自谁——这是另一个尚未解决的伦理悖论。

## 四、研究生态：从孤独的先知到机构林立

2020 年代初，AI 安全从一个边缘领域，迅速扩张为研究生态。

- **MIRI**（Yudkowsky）：理论研究，2024 年起逐渐转向公共倡导。
- **ARC**（Alignment Research Center，2021 年由 Christiano 创立）：研究 ELK（Eliciting Latent Knowledge）、危险能力评估，后衍生独立的 *METR*（Model Evaluation & Threat Research）。
- **Anthropic Alignment Team**：由 <Person id="amodei" /> 兄妹与 Christopher Olah、Jared Kaplan 等创立，强调"机制可解释性"（Mechanistic Interpretability），2024 年发布的 *Scaling Monosemanticity* 在 Claude 3 Sonnet 中识别出数百万个可解释的特征向量。
- **OpenAI Superalignment Team**（2023.07 成立，由 <Person id="sutskever" /> 与 Jan Leike 共同领导）：承诺投入 OpenAI 20% 算力，目标在四年内对齐"远超人类的"超级智能。
- **UK AI Safety Institute**（2023.11 由英国政府成立，2024 年改名 AISI）：首个由主权国家直接运营的前沿模型评测机构。
- **CAIS**（Center for AI Safety，Dan Hendrycks 主持）：2023 年 5 月发布"AI 灭绝风险声明"，仅一句话——"减轻 AI 灭绝风险，应与流行病、核战争并列为全球优先事项"——签名者包括 <Person id="hinton" />、<Person id="bengio" />、<Person id="altman" />、<Person id="hassabis" /> 等数百位科学家与企业家。

## 五、暂停 AI 与 2023 年的公开信风波

2023 年 3 月，未来生命研究所（FLI）发布 *Pause Giant AI Experiments* 公开信，呼吁所有实验室暂停训练比 GPT-4 更强大的模型至少六个月。<Person id="musk" />、<Person id="bengio" />、Steve Wozniak、Yuval Noah Harari 等三万余人签署。OpenAI、Anthropic、DeepMind 均未签署。

公开信引发激烈分歧。<Person id="lecun" /> 公开反对，称其"基于科幻而非科学"；批评者指出马斯克随即注册 xAI，难以排除商业动机；支持者则认为，至少 *Pause AI* 第一次把"前沿模型应受集体协商"这个观念推进了主流议程。三个月后，CAIS 的"灭绝风险"一句话声明把辩论再次推上头版。

2023 年 5 月，<Person id="hinton" /> 从 Google 辞职，他对《纽约时报》表示，离开是为了"自由地谈论 AI 风险"——一位深度学习的奠基人，在自己亲手孕育的技术面前公开发出警告，这场景本身就有极强的象征性。<Person id="bengio" /> 同期转向，几乎全职投入安全研究，2024 年与多国政府合作发布首份《International Scientific Report on Advanced AI Safety》。

## 六、红队、越狱与对抗性安全

理论与机构之外，安全在攻防一线展开。

"红队"（Red Teaming）从军事术语进入 AI 行业：一支专门的队伍尝试"骗"模型说出它不该说的话。2022 年底起，Reddit 用户 walkerspider 发明了 *DAN*（Do Anything Now）越狱提示词，让 ChatGPT 暂时"扮演"另一个不受规则约束的人格。各种变体迅速演化——*Grandma exploit*、*Sudo prompt*、*roleplay jailbreak*。

更系统的攻击随之到来。Simon Willison 在 2022 年命名了 *Prompt Injection*：把恶意指令藏进 Agent 读取的网页或文档，劫持其行为。2024 年，Anthropic 发表 *Many-shot Jailbreaking*：利用长上下文窗口塞入数百个"模型曾经回答过禁忌问题"的虚假示例，模型的安全防线就会显著松动。这些研究让一个共识浮现——**前沿模型的安全性，更像是一种统计意义上的稳健，而非工程意义上的可证。**

## 七、国际合作：从布莱切利到巴黎

2023 年 11 月，英国在二战时期破译 Enigma 密码的 Bletchley Park 庄园，召开首届 *AI Safety Summit*。28 个国家与欧盟联合签署《布莱切利宣言》，首次在政府间层面承认前沿 AI 可能带来"灾难性甚至存在性"的风险。中、美、英、欧盟、印度等悉数到场，本身就是一桩外交奇观。

此后峰会以约半年节奏接力：2024 年 5 月首尔峰会，16 家前沿 AI 公司签署 *Frontier AI Safety Commitments*——首次承诺在模型达到不可接受风险阈值时主动停止开发部署；2025 年 2 月巴黎 *AI Action Summit*，议题转向"行动"，但美方代表副总统万斯发表的"反对过度监管"演讲让宣言签署国数量缩水，安全派与加速派的张力首次被彻底公开化。

## 八、灾难性风险论 vs 现实风险论

整个 AI 安全社群至今未能达成共识，分歧在 2024 年因一系列事件而加深。

- 一派以 <Person id="hinton" />、<Person id="bengio" />、Stuart <Person id="russell" /> 为代表，认为 10—50 年内的"失控风险"足以与气候变化并列，应被视为全球优先事项。
- 一派以 <Person id="lecun" />、Andrew <Person id="ng" />、Pedro Domingos 为代表，认为这种论调被科幻和资本叙事过度放大，**当下真实的伤害——偏见、监控、虚假信息、算力集中**——才更值得动员资源。

这种分裂在 2024 年 5 月达到顶点：<Person id="sutskever" /> 与 Jan Leike 相继离开 OpenAI，Leike 在告别推文中直言"安全文化在 OpenAI 已经被亮闪闪的产品边缘化"。OpenAI 随即解散 Superalignment 团队，资源并入其他部门。<Person id="sutskever" /> 在 6 月创立 *Safe Superintelligence Inc.*（SSI），以"安全的超级智能是唯一产品"为口号融资 10 亿美元，2025 年估值升至 320 亿美元。Anthropic 接住了 Leike，组建新的 *Alignment Science* 团队。

时至 2026 年，"AI 安全"已不再是一种孤立的研究领域，而是一组在技术、政治、产业之间反复折冲的复合问题。它最深的悖论或许是：**这是一群人对一种他们尚未确知是否会到来的危险，所做的认真准备**。如果他们错了，世界仍会因这种过度警惕而更安全；如果他们对了，他们这些年的孤独工作，可能就是人类文明最重要的预防注射。

---

::: tip 太史公曰
余观 AI 安全之学，犹古之祈雨——天未旱而忧旱者，多为时人所讥；及大旱至，方知未雨绸缪者非愚也。Bostrom 著《超级智能》于 2014，犹屈原之忧楚；Yudkowsky 行 *AI Box*，犹陈胜揭竿于陇亩。其后 RLHF、宪法 AI 之术兴，机构林立，公开信迭出，至 2023 布莱切利之会，竟使中、美、英、欧同坐一席议论"灭绝之险"，此为人类文明史上罕见之景。然其中分裂亦极锐利——Hinton 出走，Bengio 转向，Sutskever 离 OpenAI 自立 SSI；而 LeCun、Ng 一派斥为"科幻乌云遮蔽实在伤害"。两派皆持之有故，皆言之成理，难分对错——盖此事之难，正在于**所欲防者，乃尚未到来之事**。Leike 去职时云："安全文化已被亮闪闪的产品边缘化。"此一语刺人最深——非言 OpenAI 一家之失，乃言一切以季度利润为节奏的工业组织，其内在逻辑都难以承担"为五十年后的风险投入今日资源"。所以独立机构、独立国家评测、独立公开信、乃至独立公司如 SSI 必须存在——非因彼必胜任，乃因结构使然，无独立则无制衡。"对齐"二字虽朴，其重大于今日所有 benchmark。
:::

## 亲历者说

::: info 征集中
如果你曾在 OpenAI、Anthropic、DeepMind、MIRI 等机构从事对齐与安全研究，或参加过 *Pause AI*、布莱切利峰会等公开行动，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.
2. Yudkowsky, E. (2008). Artificial Intelligence as a Positive and Negative Factor in Global Risk. In *Global Catastrophic Risks*, eds. Bostrom & Ćirković, Oxford University Press.
3. Christiano, P., Leike, J., Brown, T., et al. (2017). Deep reinforcement learning from human preferences. *NeurIPS 2017*.
4. Bai, Y., Kadavath, S., Kundu, S., et al. (2022). Constitutional AI: Harmlessness from AI Feedback. *arXiv:2212.08073*.
5. Hubinger, E., van Merwijk, C., Mikulik, V., et al. (2019). Risks from Learned Optimization in Advanced Machine Learning Systems. *arXiv:1906.01820*.
6. Hubinger, E., Denison, C., Mu, J., et al. (2024). Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training. *Anthropic Technical Report*.
7. Templeton, A., Conerly, T., Marcus, J., et al. (2024). Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet. *Anthropic*.
8. Center for AI Safety (2023). *Statement on AI Risk*. May 30, 2023.
9. Future of Life Institute (2023). *Pause Giant AI Experiments: An Open Letter*. March 22, 2023.
10. UK Government (2023). *The Bletchley Declaration by Countries Attending the AI Safety Summit*, 1-2 November 2023.
11. Anil, C., Durmus, E., Sharma, M., et al. (2024). Many-shot Jailbreaking. *Anthropic Research*.
12. Leike, J. (2024). 个人推特公开信，May 17, 2024（关于离开 OpenAI Superalignment 团队）。
