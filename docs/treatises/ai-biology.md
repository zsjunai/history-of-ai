# 书 · AI 与生物医疗

> AlphaFold 解决了困扰生物学界五十年的蛋白质折叠问题，获得了诺贝尔化学奖——这是 AI 第一次在基础科学中做出诺奖级贡献。从 MYCIN 在斯坦福的玻璃终端前给细菌感染开抗生素，到 2024 年瑞典皇家科学院将化学奖颁给一个伦敦的计算机实验室，生命科学与人工智能的纠缠，已经走过了半个世纪。

## 一、早期：专家系统与医学诊断

故事从 1972 年的斯坦福开始。爱德华·肖特利夫（Edward Shortliffe）当时还是一名医学博士生，他与导师布坎南（Bruce Buchanan）合作，把传染病专家的诊断知识转化为约 600 条 IF-THEN 规则，写进了一个名叫 MYCIN 的程序。MYCIN 用反向链式推理处理不确定性——每条规则附带一个 0 到 1 之间的"确定性因子"——能够在医生输入血液样本和病史后，给出抗生素建议。1979 年的盲测显示，它推荐的处方在 65% 的病例中获得专家组认可，超过了部分初级医生。

但 MYCIN 从未走进医院。它需要医生坐在 PDP-10 终端前花二十分钟键入答案，没有任何医院 IT 系统能跟它对话；更要命的是法律——一旦诊断出错，谁来承担责任？无人愿意签字。

同一时期，匹兹堡大学的米勒（Jack Myers）领衔开发了 INTERNIST-1，目标更为雄心勃勃：覆盖整个内科。它收录了约 500 种疾病、3500 个症状的关联，但越大的知识库越难维护——每加入一种新疾病，就要重新核对它与其他几百种疾病的相互关系。这就是 <Person id="feigenbaum" /> 后来反复警告的"知识获取瓶颈"（Knowledge Acquisition Bottleneck）。专家系统的辉煌时代里，医疗 AI 的黄金天花板被这个瓶颈牢牢压住。

## 二、医学影像：AI 的第一个临床突破口

转机来自 2012 年 ImageNet 的那一夜。当卷积神经网络开始在自然图像上碾压一切传统方法，一批医学影像研究者立刻意识到：黑白的 X 光、CT、MRI、病理切片，本质上也是图像。

2017 年 1 月，斯坦福皮肤科医生埃斯泰瓦（Andre Esteva）与计算机科学家诺瓦（Sebastian Thrun）在《Nature》上发表了里程碑论文。他们用 12.9 万张皮肤镜照片微调了一个 GoogLeNet，在区分良性痣与恶性黑色素瘤的任务上达到了 21 位认证皮肤科医生的平均水平。同年，Google Health 与印度 Aravind 眼科医院合作，在糖尿病视网膜病变筛查上构建了一套 CNN，灵敏度 97.5%、特异度 93.4%——后来被 FDA 批准的 IDx-DR 系统正是同一思路。

2018 年 4 月 11 日，IDx-DR 成为美国 FDA 历史上批准的**第一款全自动 AI 诊断设备**——医生不在场也可使用，意义非凡。这一天被许多人视为"AI 医生"时代的法律起点。

随后是雪崩般的临床落地。FDA 批准的 AI/ML 医疗设备从 2017 年的几款，增长到 2022 年的 521 款，到 2025 年初已突破 950 款。其中超过 75% 集中在放射科。Aidoc、Viz.ai 等公司的卒中识别软件，把脑出血从 CT 上筛出的时间从平均 60 分钟缩短到 5 分钟以内，挽救了无数神经元。Paige.AI 在 2021 年获得 FDA 批准其前列腺癌病理诊断系统，是首个被 FDA 批准的 AI 病理软件。中国端则有联影智能、推想科技、深睿医疗等公司在新冠疫情期间以肺部 CT 影像 AI 站上风口，三家公司几乎同时获得 NMPA 三类证。

但落地从来不是一帆风顺。2019 年密歇根大学复盘 Epic 公司部署在 168 家美国医院的脓毒症预警模型，发现真实灵敏度仅 33%——远低于厂商宣传的 76%。问题出在数据漂移：模型用一家医院的电子病历训练，换一家医院就水土不服。这成了医疗 AI 反复出现的教科书案例：训练集上的辉煌数字，到病房里往往大打折扣。

医学影像 AI 的另一道暗礁是"AI 没有让医生更轻松"——多项研究显示，AI 辅助下放射科医生的报告时间反而平均延长 5–8%，原因是医生需要核对 AI 的所有标记。这不是技术问题，是人机协作流程设计问题。

## 三、AI 药物发现：从靶点到临床

制药行业有一条令人绝望的"双十定律"：研发一款新药平均需要 10 年时间、10 亿美元投入，而进入临床的候选药物只有不到 10% 能最终上市。每一次 III 期试验失败都是数十亿美元的灰飞烟灭。AI 进入这个领域，背负着所有人的厚望与怀疑。

最先走出实验室的是英矽智能（Insilico Medicine）。这家由扎沃龙科夫（Alex Zhavoronkov）创立、总部设在香港的公司，构建了一个端到端的 AI 平台 Pharma.AI。2021 年 2 月，他们宣布用 AI 在 18 个月内完成了从靶点发现到临床前候选药物的全过程——传统流程通常需要 4 到 5 年。这款针对特发性肺纤维化（IPF）的小分子药物 INS018_055，在 2023 年进入 II 期临床试验，是首个完全由 AI 发现并设计、且推进到 II 期的药物。

英国的 Exscientia（2024 年被 Recursion 收购）走在更前面。2020 年 1 月，他们与日本住友制药合作开发的 DSP-1181，进入了人体 I 期临床试验，被称为"史上首个 AI 设计的药物候选分子"。可惜 2021 年因疗效不达预期被终止。这是 AI 制药给所有人上的第一课——速度可以加快，但生物学的不确定性不会因此消失。

Recursion Pharmaceuticals 走的是另一条路：高通量细胞影像。他们每周拍摄数百万张细胞图像，用 CNN 提取"形态指纹"，反向推断化合物的作用机制。2023 年他们获得英伟达 5000 万美元投资，并与 Genentech 签下高达 12 亿美元的合作。AbCellera 用机器学习筛选抗体库，与礼来合作开发的新冠中和抗体 bamlanivimab 在 2020 年 11 月获得 FDA 紧急使用授权——从抗原识别到 IND 申报仅 90 天。

中国的玩家也已就位。晶泰科技（XtalPi）以"AI + 自动化机器人实验室"为特色，2024 年在港交所上市；百图生科（BioMap）由百度创始人 <Person id="page" /> 同行的 <Person id="brin" /> 之中国对应者——李彦宏——主导成立，押注大模型与生命科学的交叉。

但 AI 制药的现实正在迅速去泡沫化。截至 2025 年，没有任何一款完全由 AI 设计的药物上市。多家公司在 2024–2025 年遭遇估值大幅回撤，BenevolentAI 股价较高点跌去九成。一个清醒的共识正在形成：AI 不能取代生物学的不确定性，它的价值在于**把成功率从 10% 提升到 20–30%**——这已经足以重塑行业，但远不是当初宣传的"治愈一切"。

## 四、蛋白质结构预测：AI 的诺贝尔时刻

蛋白质折叠问题，被 1972 年诺贝尔化学奖得主安芬森（Christian Anfinsen）正式提出：氨基酸序列已经包含了三维结构的全部信息——但如何从一维序列计算出三维结构，五十年里几乎没人能做到。结构生物学家依赖 X 射线晶体学和冷冻电镜，每一个蛋白质结构都意味着数月乃至数年的实验。

CASP（Critical Assessment of Structure Prediction）是这个领域的奥林匹克。每两年一届，组织者发布一批已实验测定但未公开的蛋白质序列，参赛队伍提交预测，与真实结构对比打分（GDT_TS，满分 100）。2018 年 CASP13，DeepMind 的 AlphaFold 1 以 GDT_TS 平均 58.9 拿下第一，惊动了整个领域。

但真正的地震是 2020 年 11 月 30 日。

CASP14 结果公布：AlphaFold 2 在最难的 free modeling 类别上中位 GDT_TS 达到 92.4——高到组织者莫尔特（John Moult）当场宣布："In some sense the problem is solved."（在某种意义上，这个问题被解决了。）<Person id="hassabis" /> 与一线技术负责人江珀（John Jumper）走进了媒体的视野。AlphaFold 2 的核心是 Evoformer 模块——它把多序列比对（MSA）信息和成对残基关系交替更新，再接一个等变结构模块直接输出原子坐标，端到端训练。

2021 年 7 月，DeepMind 把代码与论文同时发表在《Nature》。两周后，AlphaFold Protein Structure Database 上线，包含人类蛋白质组的 98.5%——超过 23000 个人类蛋白质结构。一年后，扩展到 2 亿+ 蛋白质结构，覆盖几乎所有已知物种。截至 2025 年，超过 300 万研究者使用过这个数据库，论文引用突破 4 万次。

2024 年 5 月，AlphaFold 3 发布，能预测蛋白质与 DNA、RNA、小分子配体甚至离子的复合物结构——直接对准药物发现的核心场景。同年 10 月 9 日，瑞典皇家科学院宣布 2024 年诺贝尔化学奖授予三人：戴维·贝克（David Baker，因蛋白质设计 Rosetta），以及哈萨比斯与江珀（因 AlphaFold）。这是 AI 第一次以核心贡献者身份获得自然科学领域的诺贝尔奖。

哈萨比斯（<Person id="hassabis" />）领奖时只说了一句让生物学家久久难忘的话："我们花了四年时间，让计算机做到了三十亿年进化的可读注释。"

值得记一笔的还有 Meta 的 ESMFold：2022 年 11 月发布，用一个 150 亿参数的蛋白质语言模型直接从单序列预测结构，速度比 AlphaFold 快 60 倍，精度略低但对宏基因组数据的覆盖更广，公布了 6 亿+ 微生物蛋白质结构。同期，谷歌 X 孵化的 **Isomorphic Labs**（2021 年 11 月成立，哈萨比斯任 CEO）专注 AI 药物发现，2024 年起与诺华、礼来签下数十亿美元合作——AlphaFold 的科学胜利正在被快速兑现为商业资产。

## 五、基因组学与精准医疗

基因组的语言比蛋白质更长——人类基因组有 30 亿碱基对，其中只有 1–2% 编码蛋白质，剩下的"非编码区"曾被视为垃圾，如今正被 AI 重新解读。

Google Brain 在 2017 年发布了 DeepVariant，用 CNN 把测序数据转化为图像，再做变异调用（variant calling），在 PrecisionFDA 比赛中击败了沿用十多年的 GATK，至今仍是行业基准。Illumina 的 SpliceAI 用深度学习预测剪接位点变异，已被多家临床实验室采用。

2025 年 6 月，DeepMind 又落下一子：AlphaGenome 发布。它能从最多 100 万碱基对的 DNA 序列输入，预测多种细胞类型中的基因表达、剪接、染色质开放性、转录因子结合等数十种特征——继 AlphaFold 之后，DeepMind 在生命科学的第二次重大押注。它的现实意义在于：90% 以上的疾病关联变异位于非编码区，过去几乎无法解读，而 AlphaGenome 让"垃圾 DNA"变得可计算。

精准医疗在临床端也已悄然成型。Foundation Medicine 的 FoundationOne CDx 是 FDA 批准的全面基因组测序伴随诊断，用 AI 把肿瘤基因谱与靶向药物匹配；Tempus Labs 在 2024 年纳斯达克上市时，已经积累了 700 万患者的多模态临床+基因组数据。CRISPR 领域，DeepCRISPR、CRISPOR 等模型用于 sgRNA 设计与脱靶预测，把基因编辑从"试错"变成"计算"。

英国 Genomics England 的 10 万基因组计划（2018 年完成）与"我们所有人"（All of Us，美国 NIH 主导，2024 年突破 75 万参与者）则在为下一代医学 AI 提供燃料——多组学数据规模一旦突破百万级，AI 才真正有可能从相关性走向因果性。

## 六、大语言模型进入生命科学

2019 年起，研究者把 NLP 的范式搬到生物序列上。Meta 的 ESM 系列（Evolutionary Scale Modeling）把 2.5 亿条蛋白质序列当成"语言"做掩码语言模型预训练。2023 年的 ESM-2（150 亿参数）已经成为蛋白质工程的通用底座，被广泛用于变异效应预测、突变亲和力预测、蛋白质设计。

DNA/RNA 也加入了这场盛宴。Arc Institute 与 NVIDIA 合作的 Evo（2024）和 Evo 2（2025），训练数据覆盖整个生命之树，参数量 70 亿到 400 亿——不仅能"读"基因组，还能从零生成有功能的细菌基因组片段。InstaDeep（被 BioNTech 收购）的 Nucleotide Transformer 系列把基因组语言模型推向了 25 亿参数。

医学 LLM 同样狂飙。Google Health 的 Med-PaLM（2022）首次在美国医师执照考试 MedQA 上突破 67% 准确率，Med-PaLM 2（2023）跃升到 86.5%，达到专家级。同期微软的 BioGPT、Epic 与 Microsoft 联合开发的 DAX Copilot 把临床文档生成铺进了全美数百家医院。2024 年，Memorial Sloan Kettering 的 PathChat（病理 GPT）在《Nature》上发表，能直接对话解读病理切片。OpenAI 与哈佛医学院合作的 GPT-4 临床问答研究显示，模型答案在 78% 的复杂病例中达到主治医师水平。

但医学 LLM 的"幻觉"始终是悬在头顶的剑。2023 年研究显示，GPT-4 在医学文献引用任务中的虚构率高达 28%——它能写出格式完美的引用，但论文根本不存在。临床场景对错误的容忍度趋近于零，这让医学 LLM 至今难以单独承担诊疗任务，更多扮演"辅助文档+鉴别诊断助手"的角色。

医学 LLM 也在加速进入临床工作流。Abridge、Nuance DAX、Suki 等公司构建的"环境式 AI"（Ambient AI）能在医生与病人对话时实时听写、自动生成结构化病历，2024 年部署到全美超过 5000 家诊所与医院。这也许是医疗 AI 第一次以"减负"而非"替代"的方式被医生主动接纳。

## 七、伦理与监管挑战

医疗 AI 是 AI 伦理最凶险的战场。2019 年 Obermeyer 等人在《Science》上揭露：美国一款被 2 亿人使用的健康风险评分算法，对黑人患者系统性低估病情严重程度——因为模型用"医疗支出"作为"健康需求"的代理变量，而黑人因结构性歧视长期支出较少。修正后，被识别为高风险的黑人患者比例从 17.7% 上升到 46.5%。这是数据偏见在医疗 AI 中的经典案例。

监管也在艰难追赶。2021 年 FDA 发布《AI/ML-Based Software as a Medical Device Action Plan》，2023 年提出 PCCP（Predetermined Change Control Plan）——首次允许 AI 模型在上市后持续学习更新，同时受监管约束。欧盟《AI Act》2024 年通过，把医疗 AI 列为"高风险"类别，要求强制风险评估、透明度披露与人类监督。中国 NMPA 在 2022 年发布了医疗器械 AI 指导原则，截至 2025 年已批准超过 100 款国产 AI 医疗设备，主要集中在影像。

最深的争议是责任归属。当 AI 给出的诊断错误导致患者死亡，是开发者的责任、医院的责任，还是"按按钮"的医生的责任？2024 年宾夕法尼亚州一起判例显示：法院倾向于把责任归于"使用者医生未尽审查义务"——这意味着 AI 即便诊断准确率再高，最终签字的仍必须是人。这或许是医疗 AI 与无人驾驶最大的不同——医院从一开始就不打算让医生离开方向盘。

---

::: tip 太史公曰
余观人工智能与生命科学之交融，半个世纪而方成大业。MYCIN 之时，机器仅能背诵规则，规则之外茫然无措；至 AlphaFold 之时，机器自数据中悟出蛋白折叠之道，竟先人之所未先，得诺奖之尊荣。此非偶然，盖生命之奥秘本在数据之中——基因之序列、蛋白之构象、细胞之影像，皆数据也。深度学习之兴，恰逢测序成本千倍之降、显微影像万倍之增，二者相遇，遂有今日之盛。然 AI 制药十年烧钱百亿，至今未见一药上市，足见生物学之复杂远超图像识别——细胞会变异，机体会反弹，临床试验中那 90% 的失败率不是算法可以擦除的天堑。哈萨比斯之伟，不在其用了多少 GPU，而在他三十年前便选定了"用 AI 解决生物学根本问题"这条路，并在 AlphaGo 之后，把整个 DeepMind 押在了 AlphaFold 上。这种押注的勇气，远比任何技术突破都罕见。医学 AI 之未来不在替代医生，而在分担那些医生本不该耗费的时间——读片、写病历、查文献、挑分子——把医生还给病人，把科学家还给问题本身。
:::

## 亲历者说

::: info 征集中
如果你参与过 AlphaFold、医学影像 AI、AI 制药或生物大语言模型的研究与产业实践，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Shortliffe, E. H., & Buchanan, B. G. (1975). A model of inexact reasoning in medicine. *Mathematical Biosciences*, 23(3-4), 351-379.
2. Esteva, A., Kuprel, B., Novoa, R. A., et al. (2017). Dermatologist-level classification of skin cancer with deep neural networks. *Nature*, 542(7639), 115-118.
3. Gulshan, V., Peng, L., Coram, M., et al. (2016). Development and validation of a deep learning algorithm for detection of diabetic retinopathy in retinal fundus photographs. *JAMA*, 316(22), 2402-2410.
4. Jumper, J., Evans, R., Pritzel, A., et al. (2021). Highly accurate protein structure prediction with AlphaFold. *Nature*, 596(7873), 583-589.
5. Abramson, J., Adler, J., Dunger, J., et al. (2024). Accurate structure prediction of biomolecular interactions with AlphaFold 3. *Nature*, 630(8016), 493-500.
6. Lin, Z., Akin, H., Rao, R., et al. (2023). Evolutionary-scale prediction of atomic-level protein structure with a language model. *Science*, 379(6637), 1123-1130.
7. Ren, F., Aliper, A., Chen, J., et al. (2024). A small-molecule TNIK inhibitor targets fibrosis in preclinical and clinical models. *Nature Biotechnology*, doi:10.1038/s41587-024-02143-0.
8. Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, 366(6464), 447-453.
9. Singhal, K., Azizi, S., Tu, T., et al. (2023). Large language models encode clinical knowledge. *Nature*, 620(7972), 172-180.
10. Poplin, R., Chang, P. C., Alexander, D., et al. (2018). A universal SNP and small-indel variant caller using deep neural networks. *Nature Biotechnology*, 36(10), 983-987.
11. Avsec, Ž., Latysheva, N., Cheng, J., et al. (2025). AlphaGenome: predicting variant effects across the genome. *DeepMind Technical Report*, June 2025.
12. The Royal Swedish Academy of Sciences (2024). The Nobel Prize in Chemistry 2024 — Press Release. Stockholm, October 9, 2024.
