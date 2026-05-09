# 书 · 欧洲 AI 发展史

> 图灵的故乡，LSTM 的诞生地，全球第一部 AI 法律的制定者——欧洲在 AI 历史中的角色，是先驱的荣耀、错失的遗憾与规则制定者的野心交织在一起的复杂叙事。它有最早的思想，却没有最大的市场；它有最严的规则，却没有最大的公司。但若把 AI 史去掉欧洲那条暗线，许多关键节点将无从解释。

## 一、英国：AI 的思想故乡

故事的源头在剑桥。

1936 年，<Person id="turing" /> 在《On Computable Numbers》中提出图灵机模型，划定了"什么是可计算"的边界。1943 年起，他被秘密派往布莱切利庄园（Bletchley Park），在那座维多利亚式的乡间宅邸里领导 Hut 8 团队，与上千位密码学家、数学家、语言学家一道破解德军 Enigma 与 Lorenz 密码。战后他重返学术界，1950 年发表《计算机器与智能》，提出"模仿游戏"——后人称之为图灵测试，至今仍是大众理解 AI 的第一个思想实验。1954 年图灵服毒自尽，距 ChatGPT 问世还有 68 年；他没能看见自己播下的种子开花，但 AI 这门学科第一次站立起来时，脚下的地基是他铺的。

布莱切利庄园本身也成为一个延续至今的符号。2023 年 11 月，英国政府选择在这里召开首届"全球 AI 安全峰会"（Bletchley Summit），28 国与欧盟共同签署《布莱切利宣言》——七十年之后，它从破译纳粹密码的秘密基地，变成了人类讨论"如何与超人智能共处"的会议室。

英国的另一座学术堡垒是爱丁堡。<Person id="michie" /> 1965 年在爱丁堡建立机器智能与感知系；他的学生 <Person id="kowalski" /> 后来将逻辑编程推向欧洲。但 1973 年的 <Person id="lighthill" /> 报告却几乎扼杀了英国 AI——这份受英国科学研究委员会（SRC）委托的评估报告认为 AI 在通用问题求解上"未达预期"，建议削减经费，由此引发英国第一次 AI 寒冬，后果延续至 1980 年代末。

寒冬之后，英国 AI 的火种由 <Person id="hassabis" /> 重新点燃。这位剑桥计算机系毕业的国际象棋少年与神经科学博士，2010 年在伦敦国王十字车站附近创立 DeepMind，2014 年被 Google 以约 6 亿美元收购——这是欧洲 AI 史上最具象征意义的一次"被买走"，也是英国 AI 此后最大的一笔学术资产。十年后，DeepMind 的 AlphaFold 让 <Person id="hassabis" /> 与 John Jumper 拿下 2024 年诺贝尔化学奖。英国 AI 安全研究所（AISI）2023 年成立于伦敦，是全球第一家专门评估前沿模型风险的国家级机构，其"亲创新"的监管路线与欧盟形成微妙对照。

## 二、欧洲大陆的学术传统

如果说英国是 AI 的思想之源，欧洲大陆则是它的方法之源。

瑞士的 IDSIA（Dalle Molle 人工智能研究所，1988 年成立于卢加诺）是 LSTM 的诞生地。<Person id="schmidhuber" /> 与他的博士生 Sepp Hochreiter 在 1997 年发表长短期记忆网络（LSTM），这一架构后来支撑了 Google Translate、Apple Siri、Amazon Alexa 整整一代产品的语音与翻译核心。<Person id="schmidhuber" /> 性格倔强、长期声称"现代深度学习的几乎所有关键突破我都做过"，他与 <Person id="hinton" />、<Person id="lecun" />、<Person id="bengio" /> 之间的优先权之争是 AI 学术史上著名的一段公案。

苏黎世联邦理工学院（ETH Zürich）与洛桑联邦理工学院（EPFL）是欧洲机器人与计算机视觉的双子塔——ETH 的机器人研究所培养出 ANYmal 四足机器人与一系列无人机团队，EPFL 则在脑机接口、可微编程方向有深厚积累。德国马克斯·普朗克智能系统研究所（MPI-IS，分布在图宾根与斯图加特）是欧洲基础研究的旗舰，因果推断、概率推断、运动控制等方向均在此扎根。

法国的数学传统则为 AI 提供了一种独特的理论质地。INRIA（法国国家信息与自动化研究所）自 1967 年成立以来培养了一大批应用数学背景的 AI 研究者；法国高等师范学校（ENS）、巴黎综合理工学院（École Polytechnique）则贡献了 <Person id="lecun" />（出生于巴黎）、Léon Bottou、Stéphane Mallat 等一代人。今天 Mistral AI 创始团队几乎清一色出自这条法国数学—工程脉络。

CERN（欧洲核子研究中心）虽然不直接做 AI，却是世界上处理大规模科学数据最久的机构之一——LHC 实验的事件触发与重建，使它成为机器学习方法在物理学落地的最早战场，并培养了一批熟悉超大规模分布式计算的工程师，他们中不少人最终流向 DeepMind、Mistral 与各家欧洲云厂商。

## 三、欧洲 AI 创业：在巨人间隙中起跑

欧洲创业生态长期被"小而散"标签困扰，但 AI 大模型时代却出现了一批令人瞩目的玩家。

法国巴黎的 Mistral AI 是最具代表性的一家。2023 年 4 月由前 Meta 与 Google DeepMind 研究员 Arthur Mensch、Guillaume Lample、Timothée Lacroix 创立，仅四周时间就以 PPT 完成 1.13 亿美元种子轮——欧洲风投史上最大的种子轮之一。其 Mistral 7B、Mixtral 8x7B、Mistral Large、Mistral Medium 系列以"开源 + 高效率"在 2024—2025 年迅速成为欧洲主权 AI 的旗帜。2024 年与法国政府、微软分别达成战略合作，估值在 2025 年突破 60 亿欧元。

伦敦的 Stability AI 是 Stable Diffusion（2022 年 8 月开源）背后的公司，它把高质量文生图模型第一次完全交到普通人手里，开启了 AI 艺术的开源浪潮。然而 2024 年起，Stability 经历了 CEO 离任、版权官司（Getty Images 诉讼）与现金流危机，2025 年由詹姆斯·卡梅隆等人组成的新董事会接管。

德国海德堡的 Aleph Alpha 是欧洲"主权 AI"的最早尝试者，2019 年创立，主张数据本地化、可审计、可解释。2023 年获 5 亿美元 B 轮融资，但在 2024 年面对开源大模型的冲击逐步转向企业 RAG 与政府服务市场。

伦敦的 Synthesia（2017 年创立）则代表了欧洲生成式 AI 的另一面——AI 数字人视频生成。其在企业培训与多语言营销视频领域的占有率远超北美同行，2024 年估值突破 26 亿美元。芬兰的 Silo AI（2024 年被 AMD 以 6.65 亿美元收购）与意大利的 iGenius、瑞典的 Sana Labs，则共同构成了欧洲第二梯队的 AI 生态。

## 四、欧盟 AI 法案：布鲁塞尔效应再现

2024 年 8 月 1 日，欧盟《人工智能法案》（AI Act）正式生效，是世界上第一部全面 AI 立法。

它把 AI 系统按风险分为四级：不可接受风险（如社会评分、潜意识操纵——一律禁止）、高风险（生物识别、关键基础设施、教育、就业等——须接受合规评估）、有限风险（聊天机器人——须披露 AI 身份）、最低风险（垃圾邮件过滤——无强制要求）。对通用 AI 模型（GPAI），法案另设技术文档、版权合规与系统性风险评估三项义务；浮点运算量超过 10^25 FLOPs 的模型被推定为系统性风险模型，需额外报告与对抗测试。

法案分阶段生效：2025 年 2 月起禁止性条款落地；2025 年 8 月 GPAI 义务生效；2026 年 8 月高风险条款全面适用。配套的《AI 责任指令》与《产品责任指令》也已修订，使受害者举证负担前移到平台。

布鲁塞尔效应（Brussels Effect）由此再次显形——为符合欧盟规则，OpenAI、Anthropic、Google 不得不在全球版本中保留欧盟特性；中国厂商进入欧盟市场也必须遵守相同标准。规则成为欧洲手中最有力的非技术武器。

## 五、欧洲超算与主权 AI 基础设施

意识到算力是新石油后，欧洲在 2018 年启动 EuroHPC 联合企业（European High Performance Computing Joint Undertaking），由欧盟与各成员国共同出资建造一批顶级超算。

法国 Jean Zay（位于巴黎南郊 IDRIS 数据中心，2019 年上线，2024 年扩容至 125.9 PFlop/s）是法国学术界训练大模型的主战场，BLOOM 多语言大模型即在此训练完成。芬兰 LUMI（位于卡亚尼，2022 年上线，HPL 性能 379.7 PFlop/s）一度是欧洲最强超算，被 100% 水电与北欧寒冷气候支撑。意大利 Leonardo（位于博洛尼亚，2022 年 11 月上线，238 PFlop/s）由 Cineca 运营，是 Mistral、Eurollm 等模型的训练基地之一。西班牙巴塞罗那超算中心（BSC）的 Marenostrum 5（2024 年 1 月上线，HPL 性能 175 PFlop/s）以基于风能与太阳能的可持续电力闻名。

2024 年起，欧盟又启动 AI Factories 计划，在 13 个成员国部署"AI 工厂"——把超算与初创企业、研究机构直接对接。Mistral、Aleph Alpha、Silo AI 等公司均是早期受益者。这是欧洲第一次在算力层面试图脱离对美国 GPU 云厂商的单边依赖。

## 六、欧洲学派的当代影响：被低估的"幕后输出"

欧洲在 AI 头部公司榜单上几乎缺席，但在"输出关键人物"上却长期顺差。

<Person id="lecun" /> 出生于巴黎、毕业于巴黎第六大学，是法国 AI 学派的代表人物，今日担任 Meta 首席 AI 科学家、纽约大学教授；<Person id="hinton" /> 在英国剑桥读书、爱丁堡读博，1987 年才移居北美；<Person id="bengio" /> 在巴黎完成博士后才赴蒙特利尔执教。深度学习三巨头的青年期教育，全部完成于欧洲。

ELLIS Society（欧洲学习与智能系统实验室）2018 年成立于伦敦，由 Bernhard Schölkopf、Nuria Oliver、Sepp Hochreiter 等人发起，意在建立一个"留住欧洲 AI 人才"的学术联盟。它并未成功阻止顶尖博士前往北美，但它至少把欧洲剩余的研究力量组织成一个可见的网络。<Person id="schmidhuber" /> 主导的 IDSIA、ETH 的机器人系、EPFL 的脑机接口、Tübingen AI Center、Aalto University 的 ML 系——这些点状灯火合在一起，仍然是欧洲 AI 学术不可忽视的底色。

## 七、欧洲的困境与未竟之问

欧洲拥有世界上最聪明的一些 AI 头脑，却一次又一次把最大的公司送给了别人。DeepMind 被 Google 收购，Mobileye 被 Intel 收购（2017，153 亿美元），ARM 被软银收购（2016）又险被英伟达收购（2020—2022），Synthesia 与 Stability 也长期面临北美资本的换手压力。

原因是结构性的：欧洲风投规模长期不足美国一半，公开股票市场缺乏针对科技股的深度池；GDPR 对数据训练施加了严格约束，使欧洲在数据规模上先输一程；多语言、多司法管辖区的市场分散使初创公司必须在第一天就国际化，反而丢掉了本土护城河；学界与产业之间的人才流动远不如美国通畅。

更深的悖论在监管自身。欧盟一方面是世界上 AI 治理的引路人，另一方面又被本国创业者批评"用规则把自己关在门外"。Mistral 创始人 Mensch 在 2024 年接受《金融时报》采访时直言，AI Act 的合规成本"让欧洲创业者跟美国与中国玩家不在同一条起跑线"。

欧洲 AI 的未竟之问，是它能否找到一种属于自己的路径——既不重演硅谷式的"赢者通吃"，也不退化为"美国软件 + 欧洲监管"的单调二分；让规则成为创新的护栏而不是绊脚石。这道题没有标准答案，但它正是 2026 年欧洲 AI 故事真正的主线。

---

::: tip 太史公曰
余观欧洲 AI 八十年，悲喜交加。喜者，思想之源不绝——图灵立其志，<Person id="schmidhuber" /> 守其学，<Person id="lecun" />、<Person id="hinton" />、<Person id="bengio" /> 皆在此长成栋梁；悲者，资本与市场不相辅，DeepMind 被买、Mobileye 被买、ARM 几度易主，欧洲为他人作嫁衣裳已成宿命。然欧盟亦有其独到之处：以法立规、以规御技，《AI 法案》虽被本土创业者诟病，却已让全球大模型公司在产品文档里写满"为符合 EU 规定特此调整"——此即布鲁塞尔效应。司马迁曰"以铜为镜可以正衣冠"，欧洲之于美中，恰是一面规则之镜。然镜中能照他人，自身却难独立。Mistral 之兴方显勃勃生气，Jean Zay 与 LUMI 之超算亦在补课，主权 AI 之论亦渐成共识。后世若问欧洲 AI 何以再起，恐非一公司一法令之功，而需重建"思想—资本—市场"三角之循环。否则，规则虽精，终不过是观众的口哨。
:::

## 亲历者说

::: info 征集中
如果你曾在欧洲参与 AI 研究、创业或政策制定，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Turing, A. M. (1950). Computing machinery and intelligence. *Mind*, 59(236), 433-460.
2. Lighthill, J. (1973). *Artificial Intelligence: A General Survey*. SRC Report.
3. Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. *Neural Computation*, 9(8), 1735-1780.
4. European Parliament & Council. (2024). *Regulation (EU) 2024/1689 (Artificial Intelligence Act)*.
5. UK AI Safety Institute. (2023). *Bletchley Declaration*. AI Safety Summit, Bletchley Park.
6. EuroHPC JU. (2024). *EuroHPC Annual Report 2024*. Luxembourg.
7. Mensch, A. et al. (2023). *Mistral 7B Technical Report*. arXiv:2310.06825.
8. ELLIS Society. (2024). *European Laboratory for Learning and Intelligent Systems Annual Report*.
