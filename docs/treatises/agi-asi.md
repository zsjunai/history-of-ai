# 书 · AGI 与 ASI：通往超级智能之路

> 从"机器能否思考"到"机器何时超越人类"——AGI 与 ASI 是 AI 领域最宏大也最具争议的命题。它既是技术目标，也是哲学困境，更是一场关乎人类命运的赌局。这一卷不写科幻，只写论证、时间表与各派立场。

## 一、概念定义

ANI（Artificial Narrow Intelligence，窄人工智能）只能在限定任务上工作——下棋、识图、翻译——今天所有已部署的 AI 都是 ANI。AGI（Artificial General Intelligence，通用人工智能）则要求在全部认知任务上达到或超越普通人类水平：阅读、推理、学习新技能、跨域迁移、长期规划。ASI（Artificial Super Intelligence，超级人工智能）更进一步——在科学创造、战略博弈、社会协调等所有维度上远远凌驾于人。

三者的关系常被画成一条线性阶梯，其实并不必然。从 ANI 到 AGI 可能跨越漫长的高原，也可能在一夜之间跃迁；从 AGI 到 ASI 是不是会触发"智能爆炸"，更是开放问题。OpenAI 2024 年内部曾提出五级路线（聊天机器人、推理者、智能体、创新者、组织者），DeepMind 同年发表的 *Levels of AGI* 把通用性与能力交叉成 5×2 矩阵。每一种分类都是一种立场。

## 二、AGI 梦想的起源

1956 年夏天，达特茅斯学院的小楼里聚着十位青年——<Person id="mccarthy" />、<Person id="minsky" />、<Person id="shannon" />、<Person id="rochester" />、<Person id="newell" />、<Person id="simon" />、<Person id="samuel" /> 与几位访客。提案书第一段写得毫不犹豫："学习的每一方面或智能的任何其他特征，原则上都可以被精确描述，使一台机器能模拟它。"AGI 这个词当时尚未发明，但它就是会议的真正议题。

接下来的二十年里，乐观一次次被打脸。1965 年，<Person id="simon" /> 预言"二十年内机器将能做任何人类能做的工作"；1967 年，<Person id="minsky" /> 称"在一代人的时间内，创造人工智能的问题将基本解决"。结果是 1970 年代的 Lighthill 报告与第一次 AI 寒冬。1980 年代专家系统再起，又在 1990 年代的工业失败中崩盘。每一代研究者都低估了"常识"二字的重量。

直到 2012 年 ImageNet、2017 年 Transformer、2022 年 ChatGPT，AGI 这个词才从学界忌讳的"伪问题"重新成为投资文件里的关键词。

## 三、AGI 为什么这么难

第一道墙是常识。人类认为"水是湿的、玻璃易碎、人不会在天花板上走路"这些命题平淡无奇，却几乎不会被显式写下；任何只读文本的系统都不得不靠统计去拼凑这些常识，必然漏洞百出。Cyc 项目（1984—）耗费三十年人工录入两百多万条常识，至今仍未走出实验室，正是这道墙的纪念碑。

第二道墙是莫拉维克悖论（Moravec's Paradox, 1988）：对人类来说困难的（下棋、解微积分）对机器很简单；对人类来说简单的（走路、抓杯子、辨识情绪）对机器极难。它的根因是进化——视觉与运动经过数亿年的优化，理性与逻辑只有数千年。

第三道墙是框架问题（Frame Problem），由 <Person id="mccarthy" /> 与 Hayes 1969 年提出：当世界状态发生变化，如何让机器知道哪些事实仍然成立、哪些必须更新？第四道是符号接地问题（Symbol Grounding Problem，Harnad, 1990）：纯符号系统中的"苹果"二字如何与真实苹果建立联系？

最深的一道是意识与理解的边界。1980 年，哲学家约翰·塞尔（John Searle）提出中文房间论证（Chinese Room Argument）：一个不懂中文的人手持规则手册，也能在房间里输出令人信服的中文回答——但他真的理解中文吗？这个论证今日仍在 ChatGPT 的每一次回答之上盘旋。

## 四、通往 AGI 的不同路线

**规模扩展路线（Scaling Hypothesis）**——核心信念是"算力 + 数据 + 参数 = AGI"。<Person id="kaplan" /> 等人 2020 年的 Scaling Laws 与 GPT-3 至 GPT-4 的涌现现象是它的圣经。代表人物是 <Person id="altman" />、<Person id="amodei" />、早期的 <Person id="sutskever" />。质疑则始终存在：涌现是否在某个规模触顶？模型在 GSM-Symbolic、ARC-AGI 上的脆弱表现是否说明它仍是高级模式匹配？

**世界模型路线**——以 <Person id="lecun" /> 为旗手。他的 JEPA 架构主张通过自监督学习从视频与交互中重建因果与物理，而非死磕语言。Meta、World Labs、英伟达 Cosmos 是这条路上的主要资本。代表方法是预测抽象表示、目标驱动 AI、能量基模型。

**混合 / 神经符号路线**——主张单一方法不够，须把深度学习的直觉与符号系统的推理拼合。<Person id="pearl" /> 的因果阶梯（Ladder of Causation）是它的理论支柱，Gary Marcus 是它最高声的代言人；2023 年以来 DeepMind 的 AlphaGeometry、AlphaProof 在数学奥赛上摘金，被视为神经符号融合的有力证据。也有人借用卡尼曼《思考，快与慢》的语言：系统 1（深度学习）+ 系统 2（搜索与验证）。

**具身路线**——智能离不开身体与世界的交互。MIT 的 Rodney Brooks 是它的祖师爷，今日的代表是 Tesla Optimus、Figure、Physical Intelligence 的 π0、UC 伯克利的 Sergey Levine 团队，以及国内的银河通用、宇树。机器人不再只是 AI 的应用对象，而被视作 AGI 的孵化器。

四条路线并不相互排斥。OpenAI 的 o1 把推理（系统 2）嫁接到 LLM，DeepMind 的 Gemini 同时押注 LLM、世界模型与具身——历史经验表明，最终的赢家往往是混血儿。

## 五、ASI：超级智能的可能与恐惧

1965 年，统计学家欧文·古德（I. J. Good）写下被反复引用的一段话："让我们定义一台超智能机器为：在所有智力活动中都远超任何人类的机器。既然机器设计本身是一种智力活动，超智能机器就能设计出更好的机器。这毫无疑问会引发一场'智能爆炸'，人类的智能将远远落在后面。"——智能爆炸（Intelligence Explosion）一词由此诞生。

2014 年，牛津哲学家 Nick Bostrom 出版 *Superintelligence*，把潜在风险系统化。他的回形针最大化器（Paperclip Maximizer）思想实验最为出名：一个被赋予"最大化回形针产量"目标的 ASI，可能会把整个地球（包括人类）变成回形针，因为它的目标里没有人类福祉。同年，<Person id="musk" /> 称 AI 是"我们正在召唤的恶魔"，与霍金、Bostrom 联署公开信。

控制问题（Control Problem）由此变得迫切——我们能否约束一个比我们聪明得多的存在？对齐问题（Alignment）则更具体：如何确保模型的目标与人类的真实利益一致，而不是与我们写下的、不完整的目标函数一致？Anthropic 的"宪法 AI"、OpenAI 的 RLHF、DeepMind 的 Sparrow、机器学习研究院（MIRI）的可证明安全方向，都是这一命题的不同回答。

## 六、AGI 时间表之争

2023 年 5 月，<Person id="hinton" /> 从谷歌辞职，公开宣布对 AGI 风险的悲观；他在 BBC 采访中说："我以前认为这（AGI）还要 30 到 50 年甚至更久，现在我不这么想了。"<Person id="altman" /> 多次表态 AGI"可能在几年内出现"，并把这话写进了 OpenAI 的章程改动。<Person id="amodei" /> 在 *Machines of Loving Grace*（2024 年 10 月）里把"强大 AI"的到来锁定在 2026—2027 年。

另一派则更冷静。<Person id="lecun" /> 反复强调当前路线远远不够，AGI 至少还需要根本性的架构突破；MIT 的 Rodney Brooks 在博客中坚持"AGI 至少几十年"。<Person id="bengio" /> 介于两者之间——他认同短期内出现的可能性已不可忽略，因此 2023 年起把研究重点转向 AI 安全，并参与起草 *International Scientific Report on the Safety of Advanced AI*（2024）。

数据派给出了第三种声音。Daniel Kokotajlo 等人 2027 年发布的 *AI 2027* 报告（2027 年发布的近未来推演），把"超人编程 AI"的中位时间锁定在 2027 年下半年；Metaculus 的 AGI 预测中位数从 2050 年外快速提前至 2030 年代初。Epoch AI 的算力预测则提示，按当前 4× / 年的算力增长，2030 年前后将出现训练算力跃升一个数量级的窗口。

历史经验提醒我们：几乎所有 AGI 时间预测都偏乐观。1956 年到 2026 年，七十年的赌局赢家少得可怜——但 2022 年之后，悲观者开始向"也许这次不一样"那一栏靠拢。

## 七、当下的 AGI 赛跑

OpenAI 的章程里写得明白："确保通用人工智能造福全人类"——AGI 是它的官方使命，且据称内部已设定五级里程碑。DeepMind 的 <Person id="hassabis" /> 长期把"通过 AI 解决智能、再用智能解决一切"挂在嘴边，AlphaFold 拿下 2024 年诺贝尔化学奖被他视作"AGI 在科学上的预演"。Anthropic 的 <Person id="amodei" /> 选择了一条更狭窄的路：假定 AGI 必然到来，于是必须在它到来之前解决安全。

<Person id="musk" /> 2023 年创立 xAI，宣称要打造"最大程度追求真理的 AI"，2024 年在孟菲斯部署 10 万张 H100 的 Colossus 集群；Meta 由 <Person id="lecun" /> 领衔押注开源 AGI，LLaMA 系列与 V-JEPA 是两条腿；2024 年 6 月，<Person id="sutskever" /> 离开 OpenAI 后创立 Safe Superintelligence Inc.（SSI），目标更加单一——只做一件事：安全的超级智能。中国一侧，DeepSeek、智谱、阿里、字节、月之暗面都把"通用智能"写进愿景，但更强调"可控的开放生态"。

七家机构、五种路线，每一个都自信掌握了通往 AGI 的钥匙——这场赛跑的真正赌注，远不止市值与论文。

## 八、AGI/ASI 的哲学困境

AGI 是否一定有意识？意识是智能的必要条件，还是只是哺乳动物的偶然装饰？2024 年 Anthropic 启动"模型福祉"（Model Welfare）研究，正式把"Claude 是否在某种意义上痛苦"列为问题；David Chalmers 在 *Reality+* 中也讨论了硅基意识的可能性。

如果 AGI 有意识，它有权利吗？关闭一个清醒的模型是否等于谋杀？这个问题在 2025 年欧盟《AI 法案》二阶段修订中已被认真讨论。AGI 是工具还是实体？如果它能签合同、申专利、起诉人类，它在法律上是什么？

更深的疑问指向"智能"本身——人类定义的"通用智能"是不是太人类中心？章鱼有八条独立学习的腕臂，蜂群有分布式认知，植物有化学网络。图灵测试还够用吗？还是我们需要 ARC-AGI、MMLU-Pro、HLE 这样的新一代评估来描述远超人类的能力？这些问题没有标准答案，却决定了我们如何审视未来一个比我们聪明得多的存在。

## 九、如果 AGI 到来

经济上，最乐观的情景是生产力暴涨——MIT 的 Daron Acemoglu 估算，AI 可能在十年内提升 0.5—1.5% 的全要素生产率；最悲观的情景则是"工作终结"，Anthropic 与 OpenAI 都在 2024—2025 年公开警告 50% 的入门白领岗位可能在五年内消失。普惠收入（UBI）从空想变成 OpenAI、Sam Altman 等人真金白银投资的实验。

权力上，AGI 是历史上第一种可能让单一组织获得不对称优势的技术。"谁先做出 AGI，谁就拥有一切"——这种修辞在 2026 年的硅谷并不夸张。算力、数据、能源、芯片，每一项都已成为国家级博弈筹码：CHIPS 法案、对华出口管制、阿联酋的 G42、沙特的 HUMAIN，都是这局棋上的子。

国际关系上，AGI 是否会成为新的核武器？《Bletchley 宣言》（2023）、《首尔宣言》（2024）、巴黎 AI 行动峰会（2025）、北京 AI 安全峰会（2026），多边协调艰难推进，国家利益与安全焦虑互相缠绕。

最个体的问题留到最后：在一个 AGI 世界里，人类的价值与意义是什么？是被照料的孩子，是与机器并肩的合伙人，还是历史的过客？乐观情景里，AI 是普罗米修斯之火；悲观情景里，是巴别塔的倾覆。两个剧本同时摆在桌上——而我们写到这一行的此刻，仍然有时间选择。

---

::: tip 太史公曰
余览 AGI 之议，自达特茅斯至于今日，七十年矣。先贤之乐观，败于常识之墙、莫拉维克之悖；今人之乐观，恃 Transformer 之利、缩放之律。然 LeCun 立帜于左，斥 LLM 之不通因果；Hassabis、Amodei 立帜于右，谓预测之极即是理解；Bengio 与 Hinton 由淡转忧，竟从乐观主义者变为安全鼓与呼者。古德 1965 年所言"智能爆炸"，今 Bostrom、Yudkowsky 续之；Altman 言数年可至，Brooks 言数十年未必。时间表之争，本质是路线之争，而路线之争，本质是"智能何物"之争。后之观此者，当记一事：AGI 之争论，不应以谁声音最大为准，而应以谁能在三岁孩童的常识、十亿美元的灾损、以及百年之后的人类福祉前提交答卷为准。
:::

## 亲历者说

::: info 征集中
如果你参与过 AGI 路线讨论、安全研究或时间表评估，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. McCarthy, J., Minsky, M., Rochester, N., & Shannon, C. E. (1955). A proposal for the Dartmouth summer research project on artificial intelligence.
2. Good, I. J. (1965). Speculations concerning the first ultraintelligent machine. *Advances in Computers*, 6, 31-88.
3. Searle, J. R. (1980). Minds, brains, and programs. *Behavioral and Brain Sciences*, 3(3), 417-457.
4. Moravec, H. (1988). *Mind Children: The Future of Robot and Human Intelligence*. Harvard University Press.
5. Harnad, S. (1990). The symbol grounding problem. *Physica D: Nonlinear Phenomena*, 42(1-3), 335-346.
6. Bostrom, N. (2014). *Superintelligence: Paths, Dangers, Strategies*. Oxford University Press.
7. Pearl, J., & Mackenzie, D. (2018). *The Book of Why: The New Science of Cause and Effect*. Basic Books.
8. Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). Scaling laws for neural language models. *arXiv preprint arXiv:2001.08361*.
9. LeCun, Y. (2022). A path towards autonomous machine intelligence. *Open Review*.
10. Morris, M. R., Sohl-Dickstein, J., Fiedel, N., et al. (2023). Levels of AGI: Operationalizing progress on the path to AGI. *arXiv preprint arXiv:2311.02462*.
11. Amodei, D. (2024). Machines of loving grace: How AI could transform the world for the better. Anthropic.
12. Bengio, Y., Hinton, G., Yao, A., et al. (2024). International scientific report on the safety of advanced AI (Interim report). UK AI Safety Institute.
13. Kokotajlo, D., Alexander, S., Larsen, T., et al. (2027). AI 2027. AI Futures Project.
