export type EventType =
  | 'paper'      // 论文 / 理论突破
  | 'product'    // 产品 / 模型发布
  | 'company'    // 公司 / 机构成立
  | 'policy'     // 法规 / 政策 / 报告
  | 'person'     // 人物事件（任职、离职、奖项等）
  | 'event'      // 一般事件（会议、比赛、收购等）
  | 'milestone'  // 里程碑（章节级转折点）

export type EventImportance = 'milestone' | 'major' | 'minor'

export interface TimelineEvent {
  year: string
  /** 月份 1–12，可选 */
  month?: number
  event: string
  link?: string
  /** 事件类型，决定图标 */
  type?: EventType
  /** 重要程度，决定字号与醒目程度 */
  importance?: EventImportance
}

export interface TimelineEra {
  name: string
  period: string
  link: string
  events: TimelineEvent[]
}

export const timeline: TimelineEra[] = [
  {
    name: '黎明期',
    period: '1943-1956',
    link: '/annals/01-dawn',
    events: [
      { year: '1936', event: '图灵（Turing）发表《论可计算数》，提出图灵机模型，奠定可计算理论与现代计算机的数学基础', link: '/biographies/turing', type: 'paper', importance: 'major' },
      { year: '1943', event: '麦卡洛克（McCulloch）与皮茨（Pitts）发表神经元数学模型，首次证明大脑活动可以用数学描述', link: '/treatises/neural-networks', type: 'paper', importance: 'major' },
      { year: '1948', event: '维纳（Wiener）出版《控制论》，提出机器与生物共享反馈机制的洞察', link: '/biographies/wiener', type: 'paper', importance: 'major' },
      { year: '1949', event: '赫布（Hebb）出版《行为的组织》，提出赫布学习规则——"一起激发的神经元连接在一起"', link: '/annals/01-dawn', type: 'paper', importance: 'major' },
      { year: '1950', event: '图灵（Turing）发表《计算机器与智能》，提出"模仿游戏"（图灵测试）', link: '/biographies/turing', type: 'paper', importance: 'major' },
      { year: '1950', event: '香农（Shannon）发表《为下棋编程》，开创计算机博弈研究', link: '/biographies/shannon', type: 'paper', importance: 'minor' },
      { year: '1951', event: '明斯基（Minsky）与埃德蒙兹（Edmonds）建造 SNARC——人类历史上第一台神经网络硬件', link: '/biographies/minsky', type: 'milestone', importance: 'major' },
      { year: '1952', event: '塞缪尔（Samuel）在 IBM 开发跳棋程序，开创机器学习的先河', link: '/houses/ibm-research', type: 'product', importance: 'major' },
      { year: '1955', event: '纽厄尔（Newell）、西蒙（Simon）与肖（Shaw）创建 Logic Theorist，首个能自动证明数学定理的 AI 程序', link: '/biographies/herbert-simon', type: 'product', importance: 'major' },
      { year: '1956', month: 8, event: 'Dartmouth 会议召开，麦卡锡（McCarthy）正式命名"人工智能"，AI 作为学科诞生', link: '/annals/01-dawn', type: 'milestone', importance: 'milestone' },
    ],
  },
  {
    name: '黄金时代',
    period: '1956-1973',
    link: '/annals/02-golden-age',
    events: [
      { year: '1957', event: '罗森布拉特（Rosenblatt）发明感知机（Perceptron），引发全球轰动，被誉为可学习的人工大脑', link: '/biographies/rosenblatt', type: 'milestone', importance: 'milestone' },
      { year: '1958', event: '麦卡锡（McCarthy）发明 LISP 语言，成为 AI 研究的标准工具', link: '/biographies/mccarthy', type: 'paper', importance: 'major' },
      { year: '1959', event: '维德罗（Widrow）与霍夫（Hoff）提出 ADALINE 与 LMS 算法，把感知机思想推向工程实践', link: '/treatises/neural-networks', type: 'paper', importance: 'minor' },
      { year: '1959', event: '麦卡锡与明斯基在 MIT 共同创立 AI Group，后发展为 MIT AI Lab', link: '/houses/mit-ai-lab', type: 'company', importance: 'major' },
      { year: '1962', event: '塞缪尔（Samuel）的跳棋程序击败业余高手，"机器学习"概念广为人知', link: '/houses/ibm-research', type: 'event', importance: 'minor' },
      { year: '1963', event: '麦卡锡离开 MIT，创立斯坦福 AI 实验室（SAIL），美国 AI 形成东西两大阵营', link: '/houses/stanford-ai-lab', type: 'company', importance: 'major' },
      { year: '1965', event: '费根鲍姆（Feigenbaum）在斯坦福开发 DENDRAL，首个成功的专家系统', link: '/annals/02-golden-age', type: 'product', importance: 'major' },
      { year: '1966', event: '维森鲍姆（Weizenbaum）创建 ELIZA 聊天程序，用户竟然对一个程序产生了感情', link: '/annals/02-golden-age', type: 'product', importance: 'major' },
      { year: '1966', event: 'ALPAC 报告发表，质疑机器翻译可行性，美国机器翻译研究资金大幅削减', link: '/treatises/nlp', type: 'policy', importance: 'major' },
      { year: '1969', event: '明斯基（Minsky）与派珀特（Papert）出版《感知机》，数学证明单层网络的局限性，神经网络陷入寒冬', link: '/treatises/neural-networks', type: 'paper', importance: 'milestone' },
      { year: '1972', event: '科尔默劳尔（Colmerauer）等在马赛开发 Prolog 语言，逻辑编程成为欧洲 AI 的旗帜', link: '/treatises/knowledge-representation', type: 'product', importance: 'minor' },
      { year: '1972', event: '维诺格拉德（Winograd）的 SHRDLU 在 MIT 完成，能用自然语言操作积木世界', link: '/treatises/nlp', type: 'product', importance: 'minor' },
    ],
  },
  {
    name: '第一次寒冬',
    period: '1973-1980',
    link: '/annals/03-first-winter',
    events: [
      { year: '1973', event: 'Lighthill 报告发表，严厉批评 AI 研究未能兑现承诺，英国率先大幅削减资金', link: '/annals/03-first-winter', type: 'policy', importance: 'milestone' },
      { year: '1974', event: 'DARPA 削减 AI 项目预算，"AI 寒冬"在美国正式蔓延，大批研究者转向其他领域', link: '/annals/03-first-winter', type: 'policy', importance: 'major' },
      { year: '1975', event: '明斯基（Minsky）发表《知识表示的框架》，把"框架（Frame）"引入认知建模', link: '/treatises/knowledge-representation', type: 'paper', importance: 'minor' },
      { year: '1976', event: '维森鲍姆（Weizenbaum）出版《计算机能力与人类理性》，系统反思 AI 的伦理边界', link: '/treatises/ai-ethics', type: 'paper', importance: 'minor' },
      { year: '1979', event: '汉斯·莫拉维克（Moravec）的 Stanford Cart 首次在户外自主导航穿越障碍', link: '/treatises/embodied-ai', type: 'product', importance: 'minor' },
      { year: '1979', event: '卡内基梅隆大学成立机器人研究所（Robotics Institute），全美第一所机器人专业研究院', link: '/houses/cmu', type: 'company', importance: 'major' },
    ],
  },
  {
    name: '专家系统时代',
    period: '1980-1987',
    link: '/annals/04-expert-systems',
    events: [
      { year: '1980', event: 'XCON/R1 专家系统在 DEC 投入使用，每年节省 4000 万美元，证明 AI 的商业价值', link: '/annals/04-expert-systems', type: 'product', importance: 'milestone' },
      { year: '1981', event: '日本启动第五代计算机计划，投资 8.5 亿美元，引发美欧恐慌与跟风', link: '/treatises/ai-in-japan', type: 'policy', importance: 'major' },
      { year: '1982', event: '霍普菲尔德（Hopfield）发表 Hopfield 网络论文，把统计物理引入神经网络，重启联结主义研究', link: '/biographies/hopfield', type: 'paper', importance: 'major' },
      { year: '1982', event: '日本设立国际新一代计算机技术研究所（ICOT），统筹第五代计划', link: '/houses/icot', type: 'company', importance: 'major' },
      { year: '1984', event: '勒纳特（Lenat）在 MCC 启动 Cyc 项目，试图把人类常识全部编入机器', link: '/treatises/knowledge-representation', type: 'product', importance: 'minor' },
      { year: '1985', event: '辛顿（Hinton）与塞诺夫斯基（Sejnowski）提出玻尔兹曼机，把概率推断引入神经网络', link: '/biographies/hinton', type: 'paper', importance: 'minor' },
      { year: '1986', event: '鲁梅尔哈特（Rumelhart）、辛顿（Hinton）、威廉姆斯（Williams）在《自然》上发表反向传播算法，多层神经网络终于可以训练', link: '/biographies/hinton', type: 'paper', importance: 'milestone' },
      { year: '1986', event: '塞诺夫斯基与罗森伯格的 NETtalk 学会朗读英文，被称为联结主义的经典演示', link: '/treatises/neural-networks', type: 'product', importance: 'minor' },
      { year: '1986', event: 'Pearl 出版《启发式：智能搜索策略》，奠定贝叶斯网络与因果推理基础', link: '/biographies/judea-pearl', type: 'paper', importance: 'minor' },
      { year: '1987', event: 'AAAI 春季会议聚焦专家系统局限，行业进入清算期', link: '/annals/04-expert-systems', type: 'event', importance: 'minor' },
    ],
  },
  {
    name: '第二次寒冬',
    period: '1987-1993',
    link: '/annals/05-second-winter',
    events: [
      { year: '1987', event: 'LISP 机器市场崩溃，专用 AI 硬件公司纷纷倒闭，专家系统泡沫破裂', link: '/annals/05-second-winter', type: 'event', importance: 'milestone' },
      { year: '1989', event: '勒坤（LeCun）在贝尔实验室构建 LeNet 卷积网络，首次将反向传播应用于手写数字识别', link: '/biographies/lecun', type: 'paper', importance: 'major' },
      { year: '1989', event: '沃特金斯（Watkins）在剑桥提出 Q-Learning，奠定现代强化学习基础', link: '/treatises/reinforcement-learning', type: 'paper', importance: 'major' },
      { year: '1990', event: '埃尔曼（Elman）提出简单循环网络（SRN），把时间维度引入神经网络', link: '/treatises/neural-networks', type: 'paper', importance: 'minor' },
      { year: '1992', event: '日本第五代计算机计划宣告失败，未能实现任何预定目标', link: '/treatises/ai-in-japan', type: 'policy', importance: 'major' },
      { year: '1993', event: 'IEEE Spectrum 称 AI 进入"第二次寒冬"，研究者纷纷改用"机器学习"等更低调的标签', link: '/annals/05-second-winter', type: 'event', importance: 'minor' },
    ],
  },
  {
    name: '统计学习崛起',
    period: '1993-2006',
    link: '/annals/06-statistical-learning',
    events: [
      { year: '1995', event: '科廷斯（Cortes）与万普尼克（Vapnik）发表支持向量机（SVM）论文，统计学习理论迎来高峰', link: '/annals/06-statistical-learning', type: 'paper', importance: 'major' },
      { year: '1995', event: '布雷曼（Breiman）发表 Bagging 论文，集成学习思想成型', link: '/annals/06-statistical-learning', type: 'paper', importance: 'minor' },
      { year: '1997', event: '霍赫赖特（Hochreiter）与施密德胡贝尔（Schmidhuber）发表 LSTM，长短期记忆网络解决梯度消失难题', link: '/biographies/schmidhuber', type: 'paper', importance: 'milestone' },
      { year: '1997', month: 5, event: 'IBM Deep Blue 击败国际象棋世界冠军卡斯帕罗夫（Kasparov），全球震动，登上各大报纸头版', link: '/treatises/ai-games', type: 'event', importance: 'major' },
      { year: '1998', event: '勒坤等发表 LeNet-5 论文，奠定现代卷积神经网络范式', link: '/biographies/lecun', type: 'paper', importance: 'major' },
      { year: '1998', event: '佩奇（Page）与布林（Brin）创立 Google，PageRank 把图算法推上互联网舞台', link: '/treatises/ai-in-usa', type: 'company', importance: 'major' },
      { year: '1999', event: 'NVIDIA 发布 GeForce 256，首次提出"GPU"概念，为后来的深度学习算力革命埋下伏笔', link: '/houses/nvidia', type: 'product', importance: 'major' },
      { year: '2000', event: 'Pearl 出版《因果论》，把因果推断重新带回主流研究议程', link: '/biographies/judea-pearl', type: 'paper', importance: 'minor' },
      { year: '2001', event: '布雷曼（Breiman）发表随机森林论文，集成学习成为工业界主力算法', link: '/annals/06-statistical-learning', type: 'paper', importance: 'minor' },
      { year: '2002', event: 'iRobot 推出 Roomba 扫地机器人，首款真正进入家庭的服务机器人', link: '/treatises/embodied-ai', type: 'product', importance: 'minor' },
      { year: '2004', event: 'DARPA Grand Challenge 首届无人车挑战在莫哈韦沙漠举行，全部参赛车辆中途故障', link: '/treatises/autonomous-driving', type: 'event', importance: 'minor' },
      { year: '2005', event: 'Stanford 团队的 Stanley 在 DARPA Grand Challenge 完赛夺冠，自动驾驶进入工程化阶段', link: '/treatises/autonomous-driving', type: 'event', importance: 'major' },
      { year: '2006', event: '辛顿（Hinton）与萨拉赫丁诺夫提出深度信念网络，"deep learning" 一词正式进入主流', link: '/biographies/hinton', type: 'paper', importance: 'milestone' },
      { year: '2006', event: '吴恩达（Ng）加入斯坦福，开启大规模 GPU 训练神经网络的探索', link: '/biographies/andrew-ng', type: 'person', importance: 'minor' },
      { year: '2006', event: 'Geoffrey Hinton 在多伦多大学带队推动神经网络复兴，后催生向量研究院', link: '/houses/toronto-vector', type: 'company', importance: 'minor' },
    ],
  },
  {
    name: '深度学习前夜',
    period: '2006-2012',
    link: '/annals/07-prelude-to-deep-learning',
    events: [
      { year: '2007', event: '英伟达发布 CUDA，把 GPU 通用计算工具化，为深度学习铺路', link: '/houses/nvidia', type: 'product', importance: 'major' },
      { year: '2009', event: '李飞飞（Fei-Fei Li）团队发布 ImageNet 数据集，1400 万张手工标注图片，为深度学习革命埋下种子', link: '/biographies/fei-fei-li', type: 'paper', importance: 'milestone' },
      { year: '2009', event: '吴恩达（Ng）与 Raina 发表《Large-scale Deep Unsupervised Learning Using GPUs》，证明 GPU 训练神经网络的巨大优势', link: '/biographies/andrew-ng', type: 'paper', importance: 'major' },
      { year: '2010', event: '微软发布 Kinect，将深度感知与人体姿态识别带入消费市场', link: '/houses/microsoft-research', type: 'product', importance: 'minor' },
      { year: '2011', month: 2, event: 'IBM Watson 在 Jeopardy! 中击败人类冠军，认知计算概念进入大众视野', link: '/houses/ibm-research', type: 'event', importance: 'major' },
      { year: '2011', month: 10, event: '苹果发布 Siri，AI 走进数亿人的口袋', link: '/houses/apple-intelligence', type: 'product', importance: 'major' },
      { year: '2011', event: '吴恩达与 Daphne Koller 共同创立 Coursera，把斯坦福机器学习课带向全球', link: '/biographies/andrew-ng', type: 'company', importance: 'minor' },
      { year: '2011', event: 'Google Brain 项目在 X 实验室秘密启动，由吴恩达与 Jeff Dean 牵头', link: '/houses/google-brain', type: 'company', importance: 'major' },
      { year: '2012', month: 6, event: 'Google Brain 团队用 16,000 个 CPU 核心训练神经网络，自动从 YouTube 视频中识别出"猫"', link: '/houses/google-brain', type: 'event', importance: 'major' },
      { year: '2012', event: '蒙特利尔大学的 Yoshua Bengio 等推动 MILA 实验室扩张，深度学习"加拿大三巨头"格局成型', link: '/houses/mila', type: 'company', importance: 'minor' },
    ],
  },
  {
    name: '视觉革命',
    period: '2012-2017',
    link: '/annals/08-cnn-era',
    events: [
      { year: '2012', month: 9, event: 'AlexNet 赢得 ImageNet 竞赛，错误率骤降 10 个百分点，深度学习革命爆发', link: '/annals/08-cnn-era', type: 'milestone', importance: 'milestone' },
      { year: '2013', event: 'Mikolov 等在 Google 发表 Word2Vec 论文，词向量成为 NLP 标准工具', link: '/treatises/nlp', type: 'paper', importance: 'major' },
      { year: '2013', event: 'DeepMind 发表《Playing Atari with Deep Reinforcement Learning》，Deep Q-Network 让 AI 学会打游戏', link: '/houses/deepmind', type: 'paper', importance: 'major' },
      { year: '2014', month: 1, event: 'Google 以约 6 亿美元收购 DeepMind，全球科技巨头 AI 收购竞赛拉开帷幕', link: '/houses/deepmind', type: 'event', importance: 'major' },
      { year: '2014', event: '苏茨克维（Sutskever）等发表 Seq2Seq 论文，用编解码器结构统一翻译与生成任务', link: '/biographies/ilya-sutskever', type: 'paper', importance: 'major' },
      { year: '2014', event: 'Bahdanau 等首次把注意力机制（Attention）引入神经机器翻译', link: '/treatises/nlp', type: 'paper', importance: 'major' },
      { year: '2014', event: '古德费洛（Goodfellow）在蒙特利尔的酒吧灵感中发明生成对抗网络（GAN），开创生成式 AI', link: '/houses/mila', type: 'paper', importance: 'major' },
      { year: '2014', event: '百度成立深度学习研究院（IDL），吴恩达出任首席科学家，中国互联网巨头入场', link: '/houses/baidu-ai', type: 'company', importance: 'minor' },
      { year: '2015', month: 11, event: 'Google 开源 TensorFlow，深度学习工具民主化', link: '/treatises/ai-open-source', type: 'product', importance: 'major' },
      { year: '2015', event: '何恺明等发表 ResNet，残差连接突破百层深度，刷新 ImageNet 与 COCO 纪录', link: '/annals/08-cnn-era', type: 'paper', importance: 'major' },
      { year: '2015', month: 12, event: 'OpenAI 在旧金山宣告成立，马斯克与奥特曼承诺 10 亿美元，对抗"AI 被巨头垄断"', link: '/houses/openai', type: 'company', importance: 'major' },
      { year: '2016', month: 3, event: 'AlphaGo 以 4:1 击败围棋世界冠军李世石（Lee Sedol），AI 攻克人类最复杂的棋类游戏', link: '/houses/deepmind', type: 'event', importance: 'milestone' },
      { year: '2016', event: 'Facebook AI Research 开源 PyTorch，动态图风格迅速征服研究社区', link: '/houses/meta-ai', type: 'product', importance: 'major' },
      { year: '2017', event: 'DeepMind 发布 AlphaZero，仅凭自我对弈在围棋、国际象棋、将棋上全面超越人类', link: '/houses/deepmind', type: 'paper', importance: 'major' },
      { year: '2017', event: '中国国务院印发《新一代人工智能发展规划》，明确 2030 年成为 AI 创新中心目标', link: '/treatises/ai-in-china', type: 'policy', importance: 'major' },
    ],
  },
  {
    name: 'Transformer 纪元',
    period: '2017-2022',
    link: '/annals/09-transformer',
    events: [
      { year: '2017', month: 6, event: '八位 Google 研究员发表《Attention Is All You Need》，Transformer 架构诞生，改变一切', link: '/houses/google-brain', type: 'paper', importance: 'milestone' },
      { year: '2018', month: 6, event: 'OpenAI 发布 GPT-1，提出"生成式预训练 + 微调"路线', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2018', month: 10, event: 'Google 发布 BERT，双向预训练横扫 11 项 NLP 基准', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2018', event: 'ACM 将图灵奖授予辛顿（Hinton）、本吉奥（Bengio）、勒坤（LeCun），表彰深度学习贡献', link: '/biographies/hinton', type: 'person', importance: 'major' },
      { year: '2019', month: 2, event: 'OpenAI 发布 GPT-2（15 亿参数），以"太危险"为由延迟公开，引发开源与安全之争', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2019', event: '智谱 AI 在清华大学 KEG 实验室基础上成立，中国大模型创业潮启动', link: '/houses/zhipu-ai', type: 'company', importance: 'major' },
      { year: '2019', event: 'Cohere 在多伦多成立，把 Transformer 商业化推向企业市场', link: '/houses/cohere', type: 'company', importance: 'minor' },
      { year: '2019', month: 7, event: '微软向 OpenAI 投资 10 亿美元，并签署 Azure 独家算力协议', link: '/houses/openai', type: 'event', importance: 'major' },
      { year: '2020', month: 5, event: 'OpenAI 发布 GPT-3（1750 亿参数），少样本学习展示出"近似涌现"的能力', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2020', event: 'DeepMind 在 CASP14 用 AlphaFold 2 解决蛋白质折叠问题，被誉为"50 年来最大突破"', link: '/treatises/ai-biology', type: 'event', importance: 'major' },
      { year: '2020', event: 'Hugging Face 完成 B 轮融资，Transformers 库成为开源社区事实标准', link: '/houses/huggingface', type: 'company', importance: 'minor' },
      { year: '2021', month: 1, event: 'OpenAI 发布 DALL·E，文本到图像生成首次进入大众视野', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2021', month: 6, event: 'GitHub 推出 Copilot 预览，AI 开始正式协助程序员写代码', link: '/treatises/ai-agent', type: 'product', importance: 'major' },
      { year: '2021', event: '前 OpenAI 研究员 Dario 与 Daniela Amodei 等创立 Anthropic，把 AI 安全作为公司使命', link: '/houses/anthropic', type: 'company', importance: 'major' },
      { year: '2021', event: 'Inflection、Character.AI 等新 AI 创业潮涌现，"AI native"创业范式成型', link: '/annals/09-transformer', type: 'company', importance: 'minor' },
      { year: '2022', event: 'DeepMind 发布 AlphaCode，能在编程竞赛中达到中等水平选手成绩', link: '/treatises/ai-agent', type: 'product', importance: 'minor' },
      { year: '2022', month: 7, event: 'Midjourney 公开测试，扩散模型把 AI 绘画推向社交平台', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2022', month: 8, event: 'Stability AI 开源 Stable Diffusion，扩散模型生态全面爆发', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2022', month: 11, event: 'Anthropic 内部首次推出 Claude 早期版本，开启 Constitutional AI 路线', link: '/houses/anthropic', type: 'product', importance: 'minor' },
      { year: '2022', month: 11, event: 'ChatGPT 发布（11月30日），两个月用户破亿，成为史上增长最快的消费级应用', link: '/houses/openai', type: 'milestone', importance: 'milestone' },
    ],
  },
  {
    name: '生成式 AI 浪潮',
    period: '2022-2026',
    link: '/annals/10-generative-ai',
    events: [
      { year: '2023', month: 2, event: '微软发布 Bing Chat（基于 GPT-4），与 Google 展开搜索保卫战', link: '/houses/microsoft-research', type: 'product', importance: 'major' },
      { year: '2023', month: 2, event: 'Meta 发布 LLaMA，权重通过申请方式开放，引爆开源大模型运动', link: '/houses/meta-ai', type: 'product', importance: 'major' },
      { year: '2023', month: 3, event: 'OpenAI 发布 GPT-4，多模态能力震撼业界', link: '/houses/openai', type: 'product', importance: 'major' },
      { year: '2023', month: 3, event: 'Anthropic 发布 Claude 1，主打长上下文与安全可控', link: '/houses/anthropic', type: 'product', importance: 'major' },
      { year: '2023', month: 4, event: '马斯克在 X.AI Corp 名下注册公司，xAI 雏形浮现', link: '/houses/xai', type: 'company', importance: 'minor' },
      { year: '2023', month: 5, event: '辛顿（Hinton）从 Google 离职，公开警告通用 AI 的风险', link: '/biographies/hinton', type: 'person', importance: 'major' },
      { year: '2023', month: 5, event: '法国 Mistral AI 成立，欧洲开源大模型旗手', link: '/houses/mistral-ai', type: 'company', importance: 'major' },
      { year: '2023', month: 7, event: 'Meta 发布 LLaMA 2，免费商用许可让开源大模型真正走入企业', link: '/houses/meta-ai', type: 'product', importance: 'major' },
      { year: '2023', month: 7, event: 'xAI 正式成立，马斯克启动与 OpenAI、Anthropic 的三方竞争', link: '/houses/xai', type: 'company', importance: 'major' },
      { year: '2023', month: 7, event: 'Anthropic 发布 Claude 2，100K 上下文成为核心卖点', link: '/houses/anthropic', type: 'product', importance: 'minor' },
      { year: '2023', month: 10, event: '美国总统拜登签署 EO 14110 行政令，把前沿模型纳入国家安全监管', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2023', month: 11, event: 'OpenAI 董事会突然解雇奥特曼（Altman），五天后在员工与投资人压力下回归', link: '/houses/openai', type: 'event', importance: 'major' },
      { year: '2023', event: '中国一线科技公司接连发布通义千问、文心一言、混元等大模型，"百模大战"开启', link: '/treatises/ai-in-china', type: 'product', importance: 'minor' },
      { year: '2024', month: 2, event: 'OpenAI 发布 Sora 视频生成模型，把扩散模型与 Transformer 推向时间维度', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2024', month: 3, event: 'Anthropic 发布 Claude 3 系列，Opus 在多项基准上超越 GPT-4', link: '/houses/anthropic', type: 'product', importance: 'major' },
      { year: '2024', month: 5, event: 'OpenAI 发布 GPT-4o，原生多模态、低延迟语音交互', link: '/houses/openai', type: 'product', importance: 'major' },
      { year: '2024', month: 6, event: '欧盟正式通过《人工智能法案》（EU AI Act），全球首部综合性 AI 法律落地', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2024', month: 9, event: 'OpenAI 发布 o1 系列推理模型，"Test-time Compute"路线浮出水面', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2024', month: 10, event: '辛顿（Hinton）获诺贝尔物理学奖，哈萨比斯（Hassabis）与 Jumper 获诺贝尔化学奖——AI 研究者首次双线获诺奖', link: '/treatises/ai-biology', type: 'person', importance: 'milestone' },
      { year: '2024', event: '英伟达成为全球市值最高的公司之一，AI 算力需求重塑半导体格局', link: '/houses/nvidia', type: 'event', importance: 'major' },
      { year: '2025', month: 1, event: 'DeepSeek 发布 R1 推理模型，以极低成本接近 o1 水平，引爆全球开源讨论', link: '/houses/deepseek', type: 'product', importance: 'milestone' },
      { year: '2025', month: 1, event: '特朗普签署行政令撤销拜登的 EO 14110，美国 AI 治理路线转向加速主义', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2025', month: 1, event: '美、日、阿联酋等宣布 Stargate 计划，规划 5000 亿美元级 AI 算力基础设施', link: '/treatises/ai-hardware', type: 'policy', importance: 'major' },
      { year: '2025', month: 3, event: 'Manus、Operator 等通用 Agent 产品上线，"AI 员工"概念走向商业化', link: '/treatises/ai-agent', type: 'product', importance: 'major' },
      { year: '2025', month: 3, event: 'xAI 收购 X（前 Twitter），构建"模型+社交+数据"一体化平台', link: '/houses/xai', type: 'event', importance: 'major' },
      { year: '2025', event: 'OpenAI 发布 GPT-5，推理、工具调用与多模态能力进一步统一', link: '/houses/openai', type: 'product', importance: 'major' },
      { year: '2025', event: 'Anthropic 发布 Claude 4 系列，Agent 与编码场景成为旗舰能力', link: '/houses/anthropic', type: 'product', importance: 'major' },
      { year: '2025', event: 'Cursor、Devin、Codex CLI 等 AI 编码工具进入主流开发流程', link: '/treatises/ai-agent', type: 'product', importance: 'minor' },
      { year: '2026', event: '全球已有 70 余个国家和地区出台 AI 治理框架，AI 安全与产业政策深度交织', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2026', event: 'AI 深度融入医疗、教育、制造、科研等行业，具身智能与 AI for Science 成为新主战场', link: '/treatises/embodied-ai', type: 'event', importance: 'major' },
    ],
  },
]

/** 所有事件的扁平列表 */
export const allEvents: TimelineEvent[] = timeline.flatMap((era) => era.events)
