# 书 · AI 伦理之争

> 当机器开始替人类做出决策——是否给一个被告保释、一份简历是否进入下一轮、一张人脸是否属于嫌疑人——伦理就不再是哲学家书房里的玄思，而是每一个普通人切身相关的命运。AI 伦理的八十年史，是一部技术狂飙与社会良知反复博弈的历史。

## 一、最早的不安：从控制论到 ELIZA

伦理的警钟，几乎在人工智能这个词诞生之前就已被敲响。

1950 年，控制论之父 <Person id="wiener" /> 出版《人有人的用处》（*The Human Use of Human Beings*）。书中，维纳第一次以系统的方式追问：当机器越来越像人，社会该如何安放劳动者的尊严？他冷峻地指出，自动化不会自动带来解放——若放任市场逻辑，它带来的更可能是新的集中与不平等。这本书被后世视为 AI 伦理的开山之作。

1966 年，麻省理工的 <Person id="weizenbaum" /> 写出了 ELIZA——一个用模式匹配模仿罗杰斯学派心理治疗师的程序。让维森鲍姆终生不安的，不是程序本身，而是用户的反应：他的秘书坚持要他离开房间，因为她"想和 ELIZA 单独谈谈"。心理学家提议把 ELIZA 投入临床使用。

十年的反思后，维森鲍姆在 1976 年出版《计算机的力量与人类的理性》（*Computer Power and Human Reason*），明确提出了一个至今仍被反复回响的命题：**有些事，计算机或许做得到，但人类不应让它去做**——比如审判、心理治疗、亲密关系。维森鲍姆因此被同事 <Person id="mccarthy" />、<Person id="minsky" /> 视作"叛徒"，终其一生孤独地行走在 AI 共同体的边缘。

## 二、算法偏见：被数据放大的旧伤疤

进入 2010 年代，机器学习从实验室进入司法、招聘、信贷等高风险领域，伦理问题以一种维森鲍姆未曾预想的方式爆发——不是机器太像人，而是机器太忠实地复刻了人类社会本身的不公。

2016 年 5 月，调查媒体 ProPublica 发布《Machine Bias》报告，指控美国法庭广泛使用的再犯风险评估工具 COMPAS 存在系统性种族偏见：黑人被告被错误标记为"高风险"的比例几乎是白人的两倍，而白人被告被错误标记为"低风险"的比例则显著更高。Northpointe 公司虽抗辩"在统计意义上算法是公平的"，但学界由此爆发出旷日持久的争论——**多种数学定义的"公平"彼此互斥，无法同时满足**（Chouldechova 2017、Kleinberg 等 2016）。

2018 年，路透社披露亚马逊招聘 AI 因训练数据中男性简历占绝对多数，自动给"women's chess club"、女子学院相关词汇降权，亚马逊于 2017 年内部弃用此系统。同年，<Person id="fei-fei-li" /> 的学生 Joy Buolamwini 与 Timnit Gebru 联合发表 *Gender Shades* 研究，对 IBM、微软、Face++ 三家商用人脸识别 API 系统测试：在浅肤色男性上准确率高达 99%，在深肤色女性上则跌至 65% 左右。一个看似中立的 API，把社会的肤色偏见变成了硬编码的数字事实。

## 三、监控、隐私与人脸的去神圣化

如果说算法偏见是无意中的歧视，那么人脸识别则是被有意部署的监控。

2020 年初，《纽约时报》起底 Clearview AI——一家从公开社交平台抓取了超过 30 亿张人脸用于训练，并将识别服务出售给数百家美国警察局的初创公司。马克·扎克伯格、推特、谷歌、YouTube 纷纷发函要求停止抓取，欧盟数据保护机构在 2022—2024 年累计开出超过 9000 万欧元的罚款。

中国语境下，"智慧城市"的人脸识别部署在 2017 年后规模化推开，雪亮工程、天网工程进入公众视野；旧金山在 2019 年成为美国首个禁止市政机构使用人脸识别的城市，欧盟随后在 2024 年 *AI Act* 中将"实时远程生物识别"列为高风险或禁止用途。同一项技术，在不同制度下被赋予了截然不同的边界——这是 AI 伦理在 21 世纪最深的分水岭。

## 四、Project Maven 与自主武器

2018 年 3 月，《Gizmodo》披露 Google 正在为美军 Project Maven 项目开发图像识别系统，用于无人机识别地面目标。消息引爆 Google 内部：超过 4000 名员工联名上书 CEO 桑达尔·皮查伊，要求"Google 不应卷入战争生意"，十余位资深工程师辞职抗议。同年 6 月，Google 宣布合同到期后不续约，并发布 *AI Principles*，承诺不开发用于"造成或可能造成总体伤害"的武器或监控系统。

更宏观的辩论发生在联合国层面。自 2014 年起，《特定常规武器公约》（CCW）框架下持续召开"致命性自主武器系统"（LAWS）专家组会议；超过 30 国与逾 250 位 AI 研究者（包括 <Person id="bengio" />、<Person id="russell" /> 等）联署《禁止杀手机器人》倡议；但中美俄等关键军事强国至今未同意具有法律约束力的禁令。**让算法决定何时扣动扳机，这条线该不该跨过去**——这是当代人类未能给出共识的最沉重提问之一。

## 五、训练数据与版权：合理使用的极限

生成式 AI 的爆发把另一个伦理问题推上了法庭：模型可以"学习"全人类的创作，而创作者们却几乎得不到任何回报。

2023 年 1 月，图片代理 Getty Images 在英美两地起诉 Stability AI，指控其未经授权用 Getty 数据库训练 Stable Diffusion，部分生成图甚至残留可辨识的 Getty 水印。同月，三位艺术家提起对 Stability AI、Midjourney、DeviantArt 的集体诉讼。2023 年 12 月，《纽约时报》起诉 OpenAI 与微软，指控 GPT 系列在多次提示下能逐字复现 *NYT* 受版权保护的报道，OpenAI 抗辩"训练属于合理使用"。2024 年起 *Authors Guild* 联合多位作家、Universal Music 联合多家唱片公司，相继加入对 OpenAI、Anthropic 等公司的版权诉讼。

到 2025 年底，多起判决方向不一：美国哥伦比亚特区法院在 *Thomson Reuters v. Ross* 中初步否定了"训练即合理使用"的一般辩护；而部分州法院则倾向于把训练视为"变换性使用"。法律的钟摆仍在剧烈摆动，但有一点已经清晰——把"互联网公开"等同于"可自由训练"的时代，正在结束。

## 六、就业冲击：从弗雷-奥斯本到阿西莫格鲁

工作替代是 AI 伦理最古老、也最切身的议题。2013 年，牛津的 Carl Frey 与 Michael Osborne 发表 *The Future of Employment*，估算 47% 的美国岗位在未来一两个十年内"高度暴露于自动化"。这个数字此后被反复引用、修正、推翻——OECD 2018 年估算降至 14%，世行、麦肯锡各有不同口径。

2024 年诺贝尔经济学奖得主达龙·阿西莫格鲁（Daron Acemoglu）在 *Power and Progress*（2023）与多篇 NBER 论文中提出更冷静的判断：技术不会自动惠及大众，要看制度如何塑造它的方向。**技术是中性的，分配不是**——他把这一立场推向公共舞台，并在 2024 年明确警告生成式 AI 的"过度乐观估值"会导致投资错配。当代劳动伦理的核心追问，已经从"机器会不会抢走工作"转向"谁来主导技术的方向，谁来承担转型的代价"。

## 七、企业伦理委员会的兴衰

2010 年代后期，几乎每家科技巨头都设立了 AI 伦理团队。但这些团队的命运表明，**伦理一旦与商业利益冲突，往往是伦理先出局**。

2020 年 12 月，Google AI 伦理共同负责人 Timnit Gebru 因一篇批评大语言模型环境与社会成本的论文（*Stochastic Parrots*）被 Google 强制离职。两个月后，团队另一位负责人 Margaret Mitchell 也被解雇。事件引发学术界长达数月的抗议，*FAccT 2021* 上多位与会者拒绝接受 Google 资助。2023 年，微软在大裁员中解散了 Responsible AI 团队的核心力量；Meta 的 Responsible AI 也几乎同步重组消失。

留下来的，更多是合规导向的法务架构，而非真正能"对产品说不"的伦理审查。Gebru 出走后创立 DAIR（Distributed AI Research Institute），与 AlgorithmWatch、AI Now Institute 等独立机构一道，构成了今天学术社群对企业伦理叙事最有力的制衡。

## 八、伦理框架的制度化

伦理没有止步于愤怒和声明。从 2018 年起，一套学术与制度框架逐步成形。

ACM 在 2018 年正式创立 *FAccT*（Fairness, Accountability, and Transparency）会议，迅速成为算法公平性领域的旗舰；AI Now Institute（NYU，2017）发布年度报告，追踪算法权力的社会效应；AlgorithmWatch（柏林）持续审计欧洲公共部门的算法应用。在立法层面，欧盟 2024 年《AI Liability Directive》提案确立了 AI 致害的举证责任分担机制，2024 年正式生效的《AI Act》则把"高风险 AI"的偏见审计、可解释性、人工监督写入法律。

伦理从一种诉求，变成了一套审计标准、一份合规文件、一项司法救济。这是进步，也是新的危险——**当伦理被完全制度化，它就有可能被技术化地"走流程"，丧失最初那种逼人停下来追问"是否应该做"的力量。**

---

::: tip 太史公曰
余观 AI 伦理八十年之争，其势如江河——上游有维纳、维森鲍姆诸先知，独行而呼，世人多目为迂阔；中流则算法之偏见、监控之扩张、武器之自主、版权之纠葛，纷然并起，江水浊矣；下游欧盟立法、企业自律、学界审计，各筑堤坝，然江水之激，未尝稍息。Gebru 之逐于 Google，最堪玩味——彼非以无能见弃，乃以诚而见弃也。盖巨企之"伦理委员会"，能容务虚之言，不能容掣肘之实；其所不能容者，恰恰是伦理本身最珍贵之物。维森鲍姆晚年常言："非凡之事，机器或能为之，人不应使其为之。"此语朴素，而九鼎不易。今日之 AI 伦理，技术上不缺工具，制度上不缺条文，所匮者乃此一念——**在所有"可以做"的尽头，仍有一道"不应做"的红线**。守此一念者，是为伦理；忘此一念者，纵然著作等身、合规万行，亦不过装点门面而已。
:::

## 亲历者说

::: info 征集中
如果你曾参与算法公平性研究、企业 AI 伦理委员会，或经历过算法决策带来的不公，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Wiener, N. (1950). *The Human Use of Human Beings: Cybernetics and Society*. Houghton Mifflin.
2. Weizenbaum, J. (1976). *Computer Power and Human Reason: From Judgment to Calculation*. W. H. Freeman.
3. Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). Machine Bias. *ProPublica*, May 23, 2016.
4. Buolamwini, J., & Gebru, T. (2018). Gender Shades: Intersectional accuracy disparities in commercial gender classification. *Proceedings of FAT* 2018*, 81, 77-91.
5. Chouldechova, A. (2017). Fair prediction with disparate impact: A study of bias in recidivism prediction instruments. *Big Data*, 5(2), 153-163.
6. Hill, K. (2020). The secretive company that might end privacy as we know it. *The New York Times*, January 18, 2020.
7. Conger, K., Fausset, R., & Kovaleski, S. F. (2019). San Francisco Bans Facial Recognition Technology. *The New York Times*, May 14, 2019.
8. Shane, S., & Wakabayashi, D. (2018). 'The Business of War': Google Employees Protest Work for the Pentagon. *The New York Times*, April 4, 2018.
9. Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? *Proceedings of FAccT '21*, 610-623.
10. Frey, C. B., & Osborne, M. A. (2017). The future of employment: How susceptible are jobs to computerisation? *Technological Forecasting and Social Change*, 114, 254-280.
11. Acemoglu, D., & Johnson, S. (2023). *Power and Progress: Our Thousand-Year Struggle Over Technology and Prosperity*. PublicAffairs.
12. *The New York Times Company v. Microsoft Corporation, OpenAI, Inc., et al.*, Case 1:23-cv-11195 (S.D.N.Y., Dec 27, 2023).
