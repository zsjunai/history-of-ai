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
  /** 英文事件描述（可选；缺失时英文版 fallback 到 event） */
  event_en?: string
  link?: string
  /** 事件类型，决定图标 */
  type?: EventType
  /** 重要程度，决定字号与醒目程度 */
  importance?: EventImportance
}

export interface TimelineEra {
  name: string
  /** 英文时代名（可选） */
  name_en?: string
  period: string
  link: string
  events: TimelineEvent[]
}

export const timeline: TimelineEra[] = [
  {
    name: '黎明期',
    name_en: 'The Dawn',
    period: '1943-1956',
    link: '/annals/01-dawn',
    events: [
      { year: '1936', event: '图灵（Turing）发表《论可计算数》，提出图灵机模型，奠定可计算理论与现代计算机的数学基础', event_en: 'Turing publishes *On Computable Numbers*, introducing the Turing machine and laying the mathematical foundation for computability and modern computing.', link: '/biographies/turing', type: 'paper', importance: 'major' },
      { year: '1943', event: '麦卡洛克（McCulloch）与皮茨（Pitts）发表神经元数学模型，首次证明大脑活动可以用数学描述', event_en: 'McCulloch and Pitts publish the first mathematical model of neurons, showing that brain activity can be described in mathematical terms.', link: '/treatises/neural-networks', type: 'paper', importance: 'major' },
      { year: '1948', event: '维纳（Wiener）出版《控制论》，提出机器与生物共享反馈机制的洞察', event_en: 'Wiener publishes *Cybernetics*, arguing that machines and living organisms share common feedback mechanisms.', link: '/biographies/wiener', type: 'paper', importance: 'major' },
      { year: '1949', event: '赫布（Hebb）出版《行为的组织》，提出赫布学习规则——"一起激发的神经元连接在一起"', event_en: 'Hebb publishes *The Organization of Behavior*, formulating Hebbian learning: "neurons that fire together, wire together."', link: '/annals/01-dawn', type: 'paper', importance: 'major' },
      { year: '1950', event: '图灵（Turing）发表《计算机器与智能》，提出"模仿游戏"（图灵测试）', event_en: 'Turing publishes *Computing Machinery and Intelligence*, proposing the "imitation game" (the Turing test).', link: '/biographies/turing', type: 'paper', importance: 'major' },
      { year: '1950', event: '香农（Shannon）发表《为下棋编程》，开创计算机博弈研究', event_en: 'Shannon publishes *Programming a Computer for Playing Chess*, opening the field of computer game-playing research.', link: '/biographies/shannon', type: 'paper', importance: 'minor' },
      { year: '1951', event: '明斯基（Minsky）与埃德蒙兹（Edmonds）建造 SNARC——人类历史上第一台神经网络硬件', event_en: 'Minsky and Edmonds build SNARC, the first hardware neural network in history.', link: '/biographies/minsky', type: 'milestone', importance: 'major' },
      { year: '1952', event: '塞缪尔（Samuel）在 IBM 开发跳棋程序，开创机器学习的先河', event_en: 'Samuel develops a checkers-playing program at IBM, pioneering the field of machine learning.', link: '/houses/ibm-research', type: 'product', importance: 'major' },
      { year: '1955', event: '纽厄尔（Newell）、西蒙（Simon）与肖（Shaw）创建 Logic Theorist，首个能自动证明数学定理的 AI 程序', event_en: 'Newell, Simon, and Shaw build Logic Theorist, the first AI program able to prove mathematical theorems automatically.', link: '/biographies/herbert-simon', type: 'product', importance: 'major' },
      { year: '1956', month: 8, event: 'Dartmouth 会议召开，麦卡锡（McCarthy）正式命名"人工智能"，AI 作为学科诞生', event_en: 'The Dartmouth workshop convenes; McCarthy coins the term "artificial intelligence," giving birth to AI as a discipline.', link: '/annals/01-dawn', type: 'milestone', importance: 'milestone' },
    ],
  },
  {
    name: '黄金时代',
    name_en: 'The Golden Age',
    period: '1956-1973',
    link: '/annals/02-golden-age',
    events: [
      { year: '1957', event: '罗森布拉特（Rosenblatt）发明感知机（Perceptron），引发全球轰动，被誉为可学习的人工大脑', event_en: 'Rosenblatt invents the Perceptron, hailed worldwide as a learnable artificial brain.', link: '/biographies/rosenblatt', type: 'milestone', importance: 'milestone' },
      { year: '1958', event: '麦卡锡（McCarthy）发明 LISP 语言，成为 AI 研究的标准工具', event_en: 'McCarthy invents the LISP programming language, which becomes the standard tool of AI research.', link: '/biographies/mccarthy', type: 'paper', importance: 'major' },
      { year: '1959', event: '维德罗（Widrow）与霍夫（Hoff）提出 ADALINE 与 LMS 算法，把感知机思想推向工程实践', event_en: 'Widrow and Hoff propose ADALINE and the LMS algorithm, carrying perceptron ideas into engineering practice.', link: '/treatises/neural-networks', type: 'paper', importance: 'minor' },
      { year: '1959', event: '麦卡锡与明斯基在 MIT 共同创立 AI Group，后发展为 MIT AI Lab', event_en: 'McCarthy and Minsky co-found the AI Group at MIT, which later grows into the MIT AI Lab.', link: '/houses/mit-ai-lab', type: 'company', importance: 'major' },
      { year: '1962', event: '塞缪尔（Samuel）的跳棋程序击败业余高手，"机器学习"概念广为人知', event_en: 'Samuel\'s checkers program defeats a strong amateur, popularizing the concept of "machine learning."', link: '/houses/ibm-research', type: 'event', importance: 'minor' },
      { year: '1963', event: '麦卡锡离开 MIT，创立斯坦福 AI 实验室（SAIL），美国 AI 形成东西两大阵营', event_en: 'McCarthy leaves MIT to found the Stanford AI Lab (SAIL), splitting U.S. AI research into East and West Coast camps.', link: '/houses/stanford-ai-lab', type: 'company', importance: 'major' },
      { year: '1965', event: '费根鲍姆（Feigenbaum）在斯坦福开发 DENDRAL，首个成功的专家系统', event_en: 'Feigenbaum develops DENDRAL at Stanford, the first successful expert system.', link: '/annals/02-golden-age', type: 'product', importance: 'major' },
      { year: '1966', event: '维森鲍姆（Weizenbaum）创建 ELIZA 聊天程序，用户竟然对一个程序产生了感情', event_en: 'Weizenbaum creates the ELIZA chatbot; users astonishingly form emotional attachments to a mere program.', link: '/annals/02-golden-age', type: 'product', importance: 'major' },
      { year: '1966', event: 'ALPAC 报告发表，质疑机器翻译可行性，美国机器翻译研究资金大幅削减', event_en: 'The ALPAC report questions the feasibility of machine translation, leading to deep cuts in U.S. MT funding.', link: '/treatises/nlp', type: 'policy', importance: 'major' },
      { year: '1969', event: '明斯基（Minsky）与派珀特（Papert）出版《感知机》，数学证明单层网络的局限性，神经网络陷入寒冬', event_en: 'Minsky and Papert publish *Perceptrons*, mathematically proving the limits of single-layer networks and pushing neural networks into a deep freeze.', link: '/treatises/neural-networks', type: 'paper', importance: 'milestone' },
      { year: '1972', event: '科尔默劳尔（Colmerauer）等在马赛开发 Prolog 语言，逻辑编程成为欧洲 AI 的旗帜', event_en: 'Colmerauer and colleagues develop Prolog in Marseille, making logic programming the standard-bearer of European AI.', link: '/treatises/knowledge-representation', type: 'product', importance: 'minor' },
      { year: '1972', event: '维诺格拉德（Winograd）的 SHRDLU 在 MIT 完成，能用自然语言操作积木世界', event_en: 'Winograd completes SHRDLU at MIT, manipulating a blocks world through natural-language commands.', link: '/treatises/nlp', type: 'product', importance: 'minor' },
    ],
  },
  {
    name: '第一次寒冬',
    name_en: 'The First Winter',
    period: '1973-1980',
    link: '/annals/03-first-winter',
    events: [
      { year: '1973', event: 'Lighthill 报告发表，严厉批评 AI 研究未能兑现承诺，英国率先大幅削减资金', event_en: 'The Lighthill Report sharply criticizes AI for failing to deliver on its promises, and the UK becomes the first to slash funding.', link: '/annals/03-first-winter', type: 'policy', importance: 'milestone' },
      { year: '1974', event: 'DARPA 削减 AI 项目预算，"AI 寒冬"在美国正式蔓延，大批研究者转向其他领域', event_en: 'DARPA cuts AI project budgets, spreading the "AI winter" across the U.S. and pushing many researchers into other fields.', link: '/annals/03-first-winter', type: 'policy', importance: 'major' },
      { year: '1975', event: '明斯基（Minsky）发表《知识表示的框架》，把"框架（Frame）"引入认知建模', event_en: 'Minsky publishes *A Framework for Representing Knowledge*, introducing "frames" into cognitive modeling.', link: '/treatises/knowledge-representation', type: 'paper', importance: 'minor' },
      { year: '1976', event: '维森鲍姆（Weizenbaum）出版《计算机能力与人类理性》，系统反思 AI 的伦理边界', event_en: 'Weizenbaum publishes *Computer Power and Human Reason*, a systematic reflection on the ethical limits of AI.', link: '/treatises/ai-ethics', type: 'paper', importance: 'minor' },
      { year: '1979', event: '汉斯·莫拉维克（Moravec）的 Stanford Cart 首次在户外自主导航穿越障碍', event_en: 'Hans Moravec\'s Stanford Cart performs the first autonomous outdoor obstacle-avoidance navigation.', link: '/treatises/embodied-ai', type: 'product', importance: 'minor' },
      { year: '1979', event: '卡内基梅隆大学成立机器人研究所（Robotics Institute），全美第一所机器人专业研究院', event_en: 'Carnegie Mellon establishes the Robotics Institute, the first dedicated robotics research institute in the United States.', link: '/houses/cmu', type: 'company', importance: 'major' },
    ],
  },
  {
    name: '专家系统时代',
    name_en: 'The Expert Systems Era',
    period: '1980-1987',
    link: '/annals/04-expert-systems',
    events: [
      { year: '1980', event: 'XCON/R1 专家系统在 DEC 投入使用，每年节省 4000 万美元，证明 AI 的商业价值', event_en: 'The XCON/R1 expert system goes into production at DEC, saving roughly $40 million a year and proving AI\'s commercial value.', link: '/annals/04-expert-systems', type: 'product', importance: 'milestone' },
      { year: '1981', event: '日本启动第五代计算机计划，投资 8.5 亿美元，引发美欧恐慌与跟风', event_en: 'Japan launches the Fifth Generation Computer project with $850 million in funding, triggering alarm and imitation in the U.S. and Europe.', link: '/treatises/ai-in-japan', type: 'policy', importance: 'major' },
      { year: '1982', event: '霍普菲尔德（Hopfield）发表 Hopfield 网络论文，把统计物理引入神经网络，重启联结主义研究', event_en: 'Hopfield publishes his paper on Hopfield networks, bringing statistical physics into neural networks and reigniting connectionist research.', link: '/biographies/hopfield', type: 'paper', importance: 'major' },
      { year: '1982', event: '日本设立国际新一代计算机技术研究所（ICOT），统筹第五代计划', event_en: 'Japan establishes the Institute for New Generation Computer Technology (ICOT) to coordinate the Fifth Generation project.', link: '/houses/icot', type: 'company', importance: 'major' },
      { year: '1984', event: '勒纳特（Lenat）在 MCC 启动 Cyc 项目，试图把人类常识全部编入机器', event_en: 'Lenat launches the Cyc project at MCC, an audacious attempt to encode all of human common sense into a machine.', link: '/treatises/knowledge-representation', type: 'product', importance: 'minor' },
      { year: '1985', event: '辛顿（Hinton）与塞诺夫斯基（Sejnowski）提出玻尔兹曼机，把概率推断引入神经网络', event_en: 'Hinton and Sejnowski propose the Boltzmann machine, introducing probabilistic inference into neural networks.', link: '/biographies/hinton', type: 'paper', importance: 'minor' },
      { year: '1986', event: '鲁梅尔哈特（Rumelhart）、辛顿（Hinton）、威廉姆斯（Williams）在《自然》上发表反向传播算法，多层神经网络终于可以训练', event_en: 'Rumelhart, Hinton, and Williams publish the backpropagation algorithm in *Nature*, finally making multilayer neural networks trainable.', link: '/biographies/hinton', type: 'paper', importance: 'milestone' },
      { year: '1986', event: '塞诺夫斯基与罗森伯格的 NETtalk 学会朗读英文，被称为联结主义的经典演示', event_en: 'Sejnowski and Rosenberg\'s NETtalk learns to read English aloud, becoming a classic demonstration of connectionism.', link: '/treatises/neural-networks', type: 'product', importance: 'minor' },
      { year: '1986', event: 'Pearl 出版《启发式：智能搜索策略》，奠定贝叶斯网络与因果推理基础', event_en: 'Pearl publishes *Heuristics: Intelligent Search Strategies*, laying the groundwork for Bayesian networks and causal reasoning.', link: '/biographies/judea-pearl', type: 'paper', importance: 'minor' },
      { year: '1987', event: 'AAAI 春季会议聚焦专家系统局限，行业进入清算期', event_en: 'The AAAI Spring Symposium focuses on the limits of expert systems, marking the start of an industry-wide reckoning.', link: '/annals/04-expert-systems', type: 'event', importance: 'minor' },
    ],
  },
  {
    name: '第二次寒冬',
    name_en: 'The Second Winter',
    period: '1987-1993',
    link: '/annals/05-second-winter',
    events: [
      { year: '1987', event: 'LISP 机器市场崩溃，专用 AI 硬件公司纷纷倒闭，专家系统泡沫破裂', event_en: 'The Lisp machine market collapses; specialized AI hardware companies fold one after another and the expert-system bubble bursts.', link: '/annals/05-second-winter', type: 'event', importance: 'milestone' },
      { year: '1989', event: '勒坤（LeCun）在贝尔实验室构建 LeNet 卷积网络，首次将反向传播应用于手写数字识别', event_en: 'LeCun builds the LeNet convolutional network at Bell Labs, applying backpropagation to handwritten digit recognition for the first time.', link: '/biographies/lecun', type: 'paper', importance: 'major' },
      { year: '1989', event: '沃特金斯（Watkins）在剑桥提出 Q-Learning，奠定现代强化学习基础', event_en: 'Watkins proposes Q-Learning at Cambridge, laying the foundation for modern reinforcement learning.', link: '/treatises/reinforcement-learning', type: 'paper', importance: 'major' },
      { year: '1990', event: '埃尔曼（Elman）提出简单循环网络（SRN），把时间维度引入神经网络', event_en: 'Elman proposes the Simple Recurrent Network (SRN), bringing the time dimension into neural networks.', link: '/treatises/neural-networks', type: 'paper', importance: 'minor' },
      { year: '1992', event: '日本第五代计算机计划宣告失败，未能实现任何预定目标', event_en: 'Japan officially declares its Fifth Generation Computer project a failure, having met none of its original goals.', link: '/treatises/ai-in-japan', type: 'policy', importance: 'major' },
      { year: '1993', event: 'IEEE Spectrum 称 AI 进入"第二次寒冬"，研究者纷纷改用"机器学习"等更低调的标签', event_en: '*IEEE Spectrum* declares AI to be in its "second winter," and researchers retreat behind quieter labels such as "machine learning."', link: '/annals/05-second-winter', type: 'event', importance: 'minor' },
    ],
  },
  {
    name: '统计学习崛起',
    name_en: 'The Rise of Statistical Learning',
    period: '1993-2006',
    link: '/annals/06-statistical-learning',
    events: [
      { year: '1995', event: '科廷斯（Cortes）与万普尼克（Vapnik）发表支持向量机（SVM）论文，统计学习理论迎来高峰', event_en: 'Cortes and Vapnik publish their paper on support vector machines (SVMs), bringing statistical learning theory to its peak.', link: '/annals/06-statistical-learning', type: 'paper', importance: 'major' },
      { year: '1995', event: '布雷曼（Breiman）发表 Bagging 论文，集成学习思想成型', event_en: 'Breiman publishes his paper on Bagging, crystallizing the idea of ensemble learning.', link: '/annals/06-statistical-learning', type: 'paper', importance: 'minor' },
      { year: '1997', event: '霍赫赖特（Hochreiter）与施密德胡贝尔（Schmidhuber）发表 LSTM，长短期记忆网络解决梯度消失难题', event_en: 'Hochreiter and Schmidhuber publish LSTM, a long short-term memory network that solves the vanishing-gradient problem.', link: '/biographies/schmidhuber', type: 'paper', importance: 'milestone' },
      { year: '1997', month: 5, event: 'IBM Deep Blue 击败国际象棋世界冠军卡斯帕罗夫（Kasparov），全球震动，登上各大报纸头版', event_en: 'IBM\'s Deep Blue defeats world chess champion Kasparov, shocking the world and dominating front pages.', link: '/treatises/ai-games', type: 'event', importance: 'major' },
      { year: '1998', event: '勒坤等发表 LeNet-5 论文，奠定现代卷积神经网络范式', event_en: 'LeCun and colleagues publish LeNet-5, establishing the template for the modern convolutional neural network.', link: '/biographies/lecun', type: 'paper', importance: 'major' },
      { year: '1998', event: '佩奇（Page）与布林（Brin）创立 Google，PageRank 把图算法推上互联网舞台', event_en: 'Page and Brin found Google, with PageRank bringing graph algorithms onto the center stage of the internet.', link: '/treatises/ai-in-usa', type: 'company', importance: 'major' },
      { year: '1999', event: 'NVIDIA 发布 GeForce 256，首次提出"GPU"概念，为后来的深度学习算力革命埋下伏笔', event_en: 'NVIDIA releases the GeForce 256 and coins the term "GPU," planting the seed for the later deep-learning compute revolution.', link: '/houses/nvidia', type: 'product', importance: 'major' },
      { year: '2000', event: 'Pearl 出版《因果论》，把因果推断重新带回主流研究议程', event_en: 'Pearl publishes *Causality*, putting causal inference back on the mainstream research agenda.', link: '/biographies/judea-pearl', type: 'paper', importance: 'minor' },
      { year: '2001', event: '布雷曼（Breiman）发表随机森林论文，集成学习成为工业界主力算法', event_en: 'Breiman publishes his Random Forests paper, turning ensemble learning into the workhorse algorithm of industry.', link: '/annals/06-statistical-learning', type: 'paper', importance: 'minor' },
      { year: '2002', event: 'iRobot 推出 Roomba 扫地机器人，首款真正进入家庭的服务机器人', event_en: 'iRobot launches the Roomba vacuum, the first service robot to genuinely enter the home.', link: '/treatises/embodied-ai', type: 'product', importance: 'minor' },
      { year: '2004', event: 'DARPA Grand Challenge 首届无人车挑战在莫哈韦沙漠举行，全部参赛车辆中途故障', event_en: 'The first DARPA Grand Challenge for autonomous vehicles is held in the Mojave Desert; every entrant fails to finish.', link: '/treatises/autonomous-driving', type: 'event', importance: 'minor' },
      { year: '2005', event: 'Stanford 团队的 Stanley 在 DARPA Grand Challenge 完赛夺冠，自动驾驶进入工程化阶段', event_en: 'Stanford\'s Stanley wins the DARPA Grand Challenge, ushering autonomous driving into an engineering era.', link: '/treatises/autonomous-driving', type: 'event', importance: 'major' },
      { year: '2006', event: '辛顿（Hinton）与萨拉赫丁诺夫提出深度信念网络，"deep learning" 一词正式进入主流', event_en: 'Hinton and Salakhutdinov propose deep belief networks, bringing the term "deep learning" into the mainstream.', link: '/biographies/hinton', type: 'paper', importance: 'milestone' },
      { year: '2006', event: '吴恩达（Ng）加入斯坦福，开启大规模 GPU 训练神经网络的探索', event_en: 'Andrew Ng joins Stanford and begins exploring large-scale neural network training on GPUs.', link: '/biographies/andrew-ng', type: 'person', importance: 'minor' },
      { year: '2006', event: 'Geoffrey Hinton 在多伦多大学带队推动神经网络复兴，后催生向量研究院', event_en: 'Geoffrey Hinton leads the neural network revival at the University of Toronto, work that later spawns the Vector Institute.', link: '/houses/toronto-vector', type: 'company', importance: 'minor' },
    ],
  },
  {
    name: '深度学习前夜',
    name_en: 'The Eve of Deep Learning',
    period: '2006-2012',
    link: '/annals/07-prelude-to-deep-learning',
    events: [
      { year: '2007', event: '英伟达发布 CUDA，把 GPU 通用计算工具化，为深度学习铺路', event_en: 'NVIDIA releases CUDA, turning GPUs into a general-purpose computing platform and paving the way for deep learning.', link: '/houses/nvidia', type: 'product', importance: 'major' },
      { year: '2009', event: '李飞飞（Fei-Fei Li）团队发布 ImageNet 数据集，1400 万张手工标注图片，为深度学习革命埋下种子', event_en: 'Fei-Fei Li\'s team releases the ImageNet dataset, with 14 million hand-labeled images planting the seeds of the deep-learning revolution.', link: '/biographies/fei-fei-li', type: 'paper', importance: 'milestone' },
      { year: '2009', event: '吴恩达（Ng）与 Raina 发表《Large-scale Deep Unsupervised Learning Using GPUs》，证明 GPU 训练神经网络的巨大优势', event_en: 'Andrew Ng and Raina publish *Large-scale Deep Unsupervised Learning Using GPUs*, demonstrating the huge advantage of GPU-based neural network training.', link: '/biographies/andrew-ng', type: 'paper', importance: 'major' },
      { year: '2010', event: '微软发布 Kinect，将深度感知与人体姿态识别带入消费市场', event_en: 'Microsoft releases the Kinect, bringing depth sensing and human pose recognition to the consumer market.', link: '/houses/microsoft-research', type: 'product', importance: 'minor' },
      { year: '2011', month: 2, event: 'IBM Watson 在 Jeopardy! 中击败人类冠军，认知计算概念进入大众视野', event_en: 'IBM Watson beats the human champions on *Jeopardy!*, bringing the idea of cognitive computing into public view.', link: '/houses/ibm-research', type: 'event', importance: 'major' },
      { year: '2011', month: 10, event: '苹果发布 Siri，AI 走进数亿人的口袋', event_en: 'Apple launches Siri, putting AI into the pockets of hundreds of millions of users.', link: '/houses/apple-intelligence', type: 'product', importance: 'major' },
      { year: '2011', event: '吴恩达与 Daphne Koller 共同创立 Coursera，把斯坦福机器学习课带向全球', event_en: 'Andrew Ng and Daphne Koller co-found Coursera, taking Stanford\'s machine learning class to a global audience.', link: '/biographies/andrew-ng', type: 'company', importance: 'minor' },
      { year: '2011', event: 'Google Brain 项目在 X 实验室秘密启动，由吴恩达与 Jeff Dean 牵头', event_en: 'The Google Brain project quietly launches inside Google X under Andrew Ng and Jeff Dean.', link: '/houses/google-brain', type: 'company', importance: 'major' },
      { year: '2012', month: 6, event: 'Google Brain 团队用 16,000 个 CPU 核心训练神经网络，自动从 YouTube 视频中识别出"猫"', event_en: 'Google Brain trains a neural network on 16,000 CPU cores that learns to recognize "cats" from YouTube videos on its own.', link: '/houses/google-brain', type: 'event', importance: 'major' },
      { year: '2012', event: '蒙特利尔大学的 Yoshua Bengio 等推动 MILA 实验室扩张，深度学习"加拿大三巨头"格局成型', event_en: 'Yoshua Bengio and colleagues expand MILA at the University of Montreal, completing the Canadian "deep learning trinity."', link: '/houses/mila', type: 'company', importance: 'minor' },
    ],
  },
  {
    name: '视觉革命',
    name_en: 'The Vision Revolution',
    period: '2012-2017',
    link: '/annals/08-cnn-era',
    events: [
      { year: '2012', month: 9, event: 'AlexNet 赢得 ImageNet 竞赛，错误率骤降 10 个百分点，深度学习革命爆发', event_en: 'AlexNet wins the ImageNet competition by slashing error rates by 10 percentage points, igniting the deep-learning revolution.', link: '/annals/08-cnn-era', type: 'milestone', importance: 'milestone' },
      { year: '2013', event: 'Mikolov 等在 Google 发表 Word2Vec 论文，词向量成为 NLP 标准工具', event_en: 'Mikolov and colleagues at Google publish Word2Vec, making word embeddings a standard NLP tool.', link: '/treatises/nlp', type: 'paper', importance: 'major' },
      { year: '2013', event: 'DeepMind 发表《Playing Atari with Deep Reinforcement Learning》，Deep Q-Network 让 AI 学会打游戏', event_en: 'DeepMind publishes *Playing Atari with Deep Reinforcement Learning*, with Deep Q-Networks teaching AI to play video games.', link: '/houses/deepmind', type: 'paper', importance: 'major' },
      { year: '2014', month: 1, event: 'Google 以约 6 亿美元收购 DeepMind，全球科技巨头 AI 收购竞赛拉开帷幕', event_en: 'Google acquires DeepMind for around $600 million, kicking off a global AI acquisition race among tech giants.', link: '/houses/deepmind', type: 'event', importance: 'major' },
      { year: '2014', event: '苏茨克维（Sutskever）等发表 Seq2Seq 论文，用编解码器结构统一翻译与生成任务', event_en: 'Sutskever and colleagues publish the Seq2Seq paper, unifying translation and generation tasks under an encoder-decoder architecture.', link: '/biographies/ilya-sutskever', type: 'paper', importance: 'major' },
      { year: '2014', event: 'Bahdanau 等首次把注意力机制（Attention）引入神经机器翻译', event_en: 'Bahdanau and colleagues introduce the attention mechanism into neural machine translation for the first time.', link: '/treatises/nlp', type: 'paper', importance: 'major' },
      { year: '2014', event: '古德费洛（Goodfellow）在蒙特利尔的酒吧灵感中发明生成对抗网络（GAN），开创生成式 AI', event_en: 'Goodfellow, in a flash of inspiration at a Montreal bar, invents Generative Adversarial Networks (GANs), opening the era of generative AI.', link: '/houses/mila', type: 'paper', importance: 'major' },
      { year: '2014', event: '百度成立深度学习研究院（IDL），吴恩达出任首席科学家，中国互联网巨头入场', event_en: 'Baidu founds its Institute of Deep Learning (IDL) with Andrew Ng as Chief Scientist, marking China\'s tech giants entering the AI arena.', link: '/houses/baidu-ai', type: 'company', importance: 'minor' },
      { year: '2015', month: 11, event: 'Google 开源 TensorFlow，深度学习工具民主化', event_en: 'Google open-sources TensorFlow, democratizing deep learning tooling.', link: '/treatises/ai-open-source', type: 'product', importance: 'major' },
      { year: '2015', event: '何恺明等发表 ResNet，残差连接突破百层深度，刷新 ImageNet 与 COCO 纪录', event_en: 'Kaiming He (何恺明) and colleagues publish ResNet; residual connections push networks past 100 layers and set new records on ImageNet and COCO.', link: '/annals/08-cnn-era', type: 'paper', importance: 'major' },
      { year: '2015', month: 12, event: 'OpenAI 在旧金山宣告成立，马斯克与奥特曼承诺 10 亿美元，对抗"AI 被巨头垄断"', event_en: 'OpenAI is announced in San Francisco; Musk and Altman pledge $1 billion to counter "AI being monopolized by tech giants."', link: '/houses/openai', type: 'company', importance: 'major' },
      { year: '2016', month: 3, event: 'AlphaGo 以 4:1 击败围棋世界冠军李世石（Lee Sedol），AI 攻克人类最复杂的棋类游戏', event_en: 'AlphaGo defeats world Go champion Lee Sedol 4–1, conquering humanity\'s most complex board game.', link: '/houses/deepmind', type: 'event', importance: 'milestone' },
      { year: '2016', event: 'Facebook AI Research 开源 PyTorch，动态图风格迅速征服研究社区', event_en: 'Facebook AI Research open-sources PyTorch, whose dynamic-graph style quickly wins over the research community.', link: '/houses/meta-ai', type: 'product', importance: 'major' },
      { year: '2017', event: 'DeepMind 发布 AlphaZero，仅凭自我对弈在围棋、国际象棋、将棋上全面超越人类', event_en: 'DeepMind releases AlphaZero, surpassing humans at Go, chess, and shogi through self-play alone.', link: '/houses/deepmind', type: 'paper', importance: 'major' },
      { year: '2017', event: '中国国务院印发《新一代人工智能发展规划》，明确 2030 年成为 AI 创新中心目标', event_en: 'China\'s State Council issues the *New Generation AI Development Plan*, setting the goal of becoming the world\'s AI innovation hub by 2030.', link: '/treatises/ai-in-china', type: 'policy', importance: 'major' },
    ],
  },
  {
    name: 'Transformer 纪元',
    name_en: 'The Transformer Era',
    period: '2017-2022',
    link: '/annals/09-transformer',
    events: [
      { year: '2017', month: 6, event: '八位 Google 研究员发表《Attention Is All You Need》，Transformer 架构诞生，改变一切', event_en: 'Eight Google researchers publish *Attention Is All You Need*; the Transformer architecture is born and changes everything.', link: '/houses/google-brain', type: 'paper', importance: 'milestone' },
      { year: '2018', month: 6, event: 'OpenAI 发布 GPT-1，提出"生成式预训练 + 微调"路线', event_en: 'OpenAI releases GPT-1, proposing the "generative pre-training plus fine-tuning" recipe.', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2018', month: 10, event: 'Google 发布 BERT，双向预训练横扫 11 项 NLP 基准', event_en: 'Google releases BERT; bidirectional pre-training sweeps 11 NLP benchmarks.', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2018', event: 'ACM 将图灵奖授予辛顿（Hinton）、本吉奥（Bengio）、勒坤（LeCun），表彰深度学习贡献', event_en: 'The ACM awards the Turing Award to Hinton, Bengio, and LeCun for their contributions to deep learning.', link: '/biographies/hinton', type: 'person', importance: 'major' },
      { year: '2019', month: 2, event: 'OpenAI 发布 GPT-2（15 亿参数），以"太危险"为由延迟公开，引发开源与安全之争', event_en: 'OpenAI announces GPT-2 (1.5B parameters) but delays the full release as "too dangerous," sparking the open-source vs. safety debate.', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2019', event: '智谱 AI 在清华大学 KEG 实验室基础上成立，中国大模型创业潮启动', event_en: 'Zhipu AI is founded out of Tsinghua University\'s KEG lab, kicking off China\'s LLM startup wave.', link: '/houses/zhipu-ai', type: 'company', importance: 'major' },
      { year: '2019', event: 'Cohere 在多伦多成立，把 Transformer 商业化推向企业市场', event_en: 'Cohere is founded in Toronto, taking Transformer-based commercialization into the enterprise market.', link: '/houses/cohere', type: 'company', importance: 'minor' },
      { year: '2019', month: 7, event: '微软向 OpenAI 投资 10 亿美元，并签署 Azure 独家算力协议', event_en: 'Microsoft invests $1 billion in OpenAI and signs an exclusive Azure compute partnership.', link: '/houses/openai', type: 'event', importance: 'major' },
      { year: '2020', month: 5, event: 'OpenAI 发布 GPT-3（1750 亿参数），少样本学习展示出"近似涌现"的能力', event_en: 'OpenAI releases GPT-3 (175B parameters); few-shot learning shows what looks like emergent capability.', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2020', event: 'DeepMind 在 CASP14 用 AlphaFold 2 解决蛋白质折叠问题，被誉为"50 年来最大突破"', event_en: 'DeepMind\'s AlphaFold 2 solves the protein-folding problem at CASP14, hailed as "the biggest breakthrough in 50 years."', link: '/treatises/ai-biology', type: 'event', importance: 'major' },
      { year: '2020', event: 'Hugging Face 完成 B 轮融资，Transformers 库成为开源社区事实标准', event_en: 'Hugging Face closes a Series B; the Transformers library becomes the de facto open-source standard.', link: '/houses/huggingface', type: 'company', importance: 'minor' },
      { year: '2021', month: 1, event: 'OpenAI 发布 DALL·E，文本到图像生成首次进入大众视野', event_en: 'OpenAI launches DALL·E, putting text-to-image generation in the public eye for the first time.', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2021', month: 6, event: 'GitHub 推出 Copilot 预览，AI 开始正式协助程序员写代码', event_en: 'GitHub launches the Copilot preview, formally putting AI to work as a coding assistant for developers.', link: '/treatises/ai-agent', type: 'product', importance: 'major' },
      { year: '2021', event: '前 OpenAI 研究员 Dario 与 Daniela Amodei 等创立 Anthropic，把 AI 安全作为公司使命', event_en: 'Former OpenAI researchers Dario and Daniela Amodei co-found Anthropic, making AI safety the company\'s core mission.', link: '/houses/anthropic', type: 'company', importance: 'major' },
      { year: '2021', event: 'Inflection、Character.AI 等新 AI 创业潮涌现，"AI native"创业范式成型', event_en: 'Inflection, Character.AI and a wave of new AI startups emerge, crystallizing the "AI native" startup paradigm.', link: '/annals/09-transformer', type: 'company', importance: 'minor' },
      { year: '2022', event: 'DeepMind 发布 AlphaCode，能在编程竞赛中达到中等水平选手成绩', event_en: 'DeepMind releases AlphaCode, performing at the level of an average competitive programmer.', link: '/treatises/ai-agent', type: 'product', importance: 'minor' },
      { year: '2022', month: 7, event: 'Midjourney 公开测试，扩散模型把 AI 绘画推向社交平台', event_en: 'Midjourney enters public beta; diffusion models push AI art onto social platforms.', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2022', month: 8, event: 'Stability AI 开源 Stable Diffusion，扩散模型生态全面爆发', event_en: 'Stability AI open-sources Stable Diffusion, blowing open the entire diffusion-model ecosystem.', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2022', month: 11, event: 'Anthropic 内部首次推出 Claude 早期版本，开启 Constitutional AI 路线', event_en: 'Anthropic internally rolls out the first version of Claude, opening the Constitutional AI line of work.', link: '/houses/anthropic', type: 'product', importance: 'minor' },
      { year: '2022', month: 11, event: 'ChatGPT 发布（11月30日），两个月用户破亿，成为史上增长最快的消费级应用', event_en: 'ChatGPT launches on November 30; reaching 100 million users in two months, it becomes the fastest-growing consumer app in history.', link: '/houses/openai', type: 'milestone', importance: 'milestone' },
    ],
  },
  {
    name: '生成式 AI 浪潮',
    name_en: 'The Generative AI Wave',
    period: '2022-2026',
    link: '/annals/10-generative-ai',
    events: [
      { year: '2023', month: 2, event: '微软发布 Bing Chat（基于 GPT-4），与 Google 展开搜索保卫战', event_en: 'Microsoft launches Bing Chat (powered by GPT-4), opening a search war with Google.', link: '/houses/microsoft-research', type: 'product', importance: 'major' },
      { year: '2023', month: 2, event: 'Meta 发布 LLaMA，权重通过申请方式开放，引爆开源大模型运动', event_en: 'Meta releases LLaMA with weights available on request, igniting the open-source LLM movement.', link: '/houses/meta-ai', type: 'product', importance: 'major' },
      { year: '2023', month: 3, event: 'OpenAI 发布 GPT-4，多模态能力震撼业界', event_en: 'OpenAI releases GPT-4, whose multimodal capabilities stun the industry.', link: '/houses/openai', type: 'product', importance: 'major' },
      { year: '2023', month: 3, event: 'Anthropic 发布 Claude 1，主打长上下文与安全可控', event_en: 'Anthropic releases Claude 1, emphasizing long context and safe, steerable behavior.', link: '/houses/anthropic', type: 'product', importance: 'major' },
      { year: '2023', month: 4, event: '马斯克在 X.AI Corp 名下注册公司，xAI 雏形浮现', event_en: 'Musk registers a company under the name X.AI Corp, the embryonic form of xAI.', link: '/houses/xai', type: 'company', importance: 'minor' },
      { year: '2023', month: 5, event: '辛顿（Hinton）从 Google 离职，公开警告通用 AI 的风险', event_en: 'Hinton resigns from Google and publicly warns of the risks of general AI.', link: '/biographies/hinton', type: 'person', importance: 'major' },
      { year: '2023', month: 5, event: '法国 Mistral AI 成立，欧洲开源大模型旗手', event_en: 'France\'s Mistral AI is founded, becoming Europe\'s standard-bearer for open-source large language models.', link: '/houses/mistral-ai', type: 'company', importance: 'major' },
      { year: '2023', month: 7, event: 'Meta 发布 LLaMA 2，免费商用许可让开源大模型真正走入企业', event_en: 'Meta releases LLaMA 2 under a free commercial license, finally bringing open-source LLMs into the enterprise.', link: '/houses/meta-ai', type: 'product', importance: 'major' },
      { year: '2023', month: 7, event: 'xAI 正式成立，马斯克启动与 OpenAI、Anthropic 的三方竞争', event_en: 'xAI is officially founded, with Musk launching a three-way race against OpenAI and Anthropic.', link: '/houses/xai', type: 'company', importance: 'major' },
      { year: '2023', month: 7, event: 'Anthropic 发布 Claude 2，100K 上下文成为核心卖点', event_en: 'Anthropic releases Claude 2, with a 100K-token context window as its headline feature.', link: '/houses/anthropic', type: 'product', importance: 'minor' },
      { year: '2023', month: 10, event: '美国总统拜登签署 EO 14110 行政令，把前沿模型纳入国家安全监管', event_en: 'U.S. President Biden signs Executive Order 14110, bringing frontier models under national-security oversight.', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2023', month: 11, event: 'OpenAI 董事会突然解雇奥特曼（Altman），五天后在员工与投资人压力下回归', event_en: 'OpenAI\'s board abruptly fires Altman; he returns five days later under pressure from staff and investors.', link: '/houses/openai', type: 'event', importance: 'major' },
      { year: '2023', event: '中国一线科技公司接连发布通义千问、文心一言、混元等大模型，"百模大战"开启', event_en: 'China\'s top tech firms release Qwen, ERNIE Bot, Hunyuan and other LLMs in quick succession, opening the "battle of a hundred models."', link: '/treatises/ai-in-china', type: 'product', importance: 'minor' },
      { year: '2024', month: 2, event: 'OpenAI 发布 Sora 视频生成模型，把扩散模型与 Transformer 推向时间维度', event_en: 'OpenAI releases the Sora video model, extending diffusion models and Transformers into the time dimension.', link: '/treatises/ai-art', type: 'product', importance: 'major' },
      { year: '2024', month: 3, event: 'Anthropic 发布 Claude 3 系列，Opus 在多项基准上超越 GPT-4', event_en: 'Anthropic releases the Claude 3 family; Opus surpasses GPT-4 on several benchmarks.', link: '/houses/anthropic', type: 'product', importance: 'major' },
      { year: '2024', month: 5, event: 'OpenAI 发布 GPT-4o，原生多模态、低延迟语音交互', event_en: 'OpenAI releases GPT-4o with native multimodality and low-latency voice interaction.', link: '/houses/openai', type: 'product', importance: 'major' },
      { year: '2024', month: 6, event: '欧盟正式通过《人工智能法案》（EU AI Act），全球首部综合性 AI 法律落地', event_en: 'The European Union formally adopts the AI Act, the world\'s first comprehensive AI law.', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2024', month: 9, event: 'OpenAI 发布 o1 系列推理模型，"Test-time Compute"路线浮出水面', event_en: 'OpenAI releases the o1 family of reasoning models, surfacing the "test-time compute" research direction.', link: '/treatises/llm', type: 'product', importance: 'major' },
      { year: '2024', month: 10, event: '辛顿（Hinton）获诺贝尔物理学奖，哈萨比斯（Hassabis）与 Jumper 获诺贝尔化学奖——AI 研究者首次双线获诺奖', event_en: 'Hinton wins the Nobel Prize in Physics while Hassabis and Jumper win the Nobel in Chemistry — the first time AI researchers take Nobels on two fronts in the same year.', link: '/treatises/ai-biology', type: 'person', importance: 'milestone' },
      { year: '2024', event: '英伟达成为全球市值最高的公司之一，AI 算力需求重塑半导体格局', event_en: 'NVIDIA becomes one of the world\'s most valuable companies as AI compute demand reshapes the semiconductor landscape.', link: '/houses/nvidia', type: 'event', importance: 'major' },
      { year: '2025', month: 1, event: 'DeepSeek 发布 R1 推理模型，以极低成本接近 o1 水平，引爆全球开源讨论', event_en: 'DeepSeek releases the R1 reasoning model, approaching o1-level performance at a fraction of the cost and igniting a global open-source debate.', link: '/houses/deepseek', type: 'product', importance: 'milestone' },
      { year: '2025', month: 1, event: '特朗普签署行政令撤销拜登的 EO 14110，美国 AI 治理路线转向加速主义', event_en: 'Trump signs an executive order revoking Biden\'s EO 14110, pivoting U.S. AI governance toward an accelerationist stance.', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2025', month: 1, event: '美、日、阿联酋等宣布 Stargate 计划，规划 5000 亿美元级 AI 算力基础设施', event_en: 'The U.S., Japan, the UAE and partners announce the Stargate project, planning AI compute infrastructure on the $500 billion scale.', link: '/treatises/ai-hardware', type: 'policy', importance: 'major' },
      { year: '2025', month: 3, event: 'Manus、Operator 等通用 Agent 产品上线，"AI 员工"概念走向商业化', event_en: 'General-purpose agent products such as Manus and Operator go live, taking the "AI employee" concept into commercial use.', link: '/treatises/ai-agent', type: 'product', importance: 'major' },
      { year: '2025', month: 3, event: 'xAI 收购 X（前 Twitter），构建"模型+社交+数据"一体化平台', event_en: 'xAI acquires X (formerly Twitter), building an integrated "model + social + data" platform.', link: '/houses/xai', type: 'event', importance: 'major' },
      { year: '2025', event: 'OpenAI 发布 GPT-5，推理、工具调用与多模态能力进一步统一', event_en: 'OpenAI releases GPT-5, further unifying reasoning, tool use, and multimodal capabilities.', link: '/houses/openai', type: 'product', importance: 'major' },
      { year: '2025', event: 'Anthropic 发布 Claude 4 系列，Agent 与编码场景成为旗舰能力', event_en: 'Anthropic releases the Claude 4 family, with agentic and coding workflows becoming its flagship capabilities.', link: '/houses/anthropic', type: 'product', importance: 'major' },
      { year: '2025', event: 'Cursor、Devin、Codex CLI 等 AI 编码工具进入主流开发流程', event_en: 'AI coding tools such as Cursor, Devin, and the Codex CLI enter mainstream developer workflows.', link: '/treatises/ai-agent', type: 'product', importance: 'minor' },
      { year: '2026', event: '全球已有 70 余个国家和地区出台 AI 治理框架，AI 安全与产业政策深度交织', event_en: 'More than 70 countries and regions worldwide have enacted AI governance frameworks, with AI safety and industrial policy deeply intertwined.', link: '/treatises/ai-governance', type: 'policy', importance: 'major' },
      { year: '2026', event: 'AI 深度融入医疗、教育、制造、科研等行业，具身智能与 AI for Science 成为新主战场', event_en: 'AI is deeply embedded in healthcare, education, manufacturing, and research, with embodied intelligence and AI for Science emerging as the new main battlegrounds.', link: '/treatises/embodied-ai', type: 'event', importance: 'major' },
    ],
  },
]

/** 所有事件的扁平列表 */
export const allEvents: TimelineEvent[] = timeline.flatMap((era) => era.events)
