export interface TimelineEvent {
  year: string
  event: string
  link?: string
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
      { year: '1943', event: '麦卡洛克（McCulloch）与皮茨（Pitts）发表神经元数学模型，首次证明大脑活动可以用数学描述', link: '/annals/01-dawn' },
      { year: '1948', event: '维纳（Wiener）出版《控制论》，提出机器与生物共享反馈机制的洞察', link: '/biographies/wiener' },
      { year: '1949', event: '赫布（Hebb）提出赫布学习规则——"一起激发的神经元连接在一起"', link: '/annals/01-dawn' },
      { year: '1950', event: '图灵（Turing）发表《计算机器与智能》，提出"模仿游戏"（图灵测试）', link: '/biographies/turing' },
      { year: '1951', event: '明斯基（Minsky）与埃德蒙兹（Edmonds）建造 SNARC——人类历史上第一台神经网络硬件', link: '/biographies/minsky' },
      { year: '1952', event: '塞缪尔（Samuel）在 IBM 开发跳棋程序，开创机器学习的先河', link: '/houses/ibm-research' },
      { year: '1955', event: '纽厄尔（Newell）与西蒙（Simon）创建 Logic Theorist，首个能自动证明数学定理的 AI 程序', link: '/biographies/herbert-simon' },
      { year: '1956', event: 'Dartmouth 会议召开，麦卡锡（McCarthy）正式命名"人工智能"，AI 作为学科诞生', link: '/annals/01-dawn' },
    ],
  },
  {
    name: '黄金时代',
    period: '1956-1973',
    link: '/annals/02-golden-age',
    events: [
      { year: '1958', event: '麦卡锡（McCarthy）发明 LISP 语言，成为 AI 研究的标准工具；罗森布拉特（Rosenblatt）发明感知机，引发全球轰动', link: '/biographies/mccarthy' },
      { year: '1965', event: '费根鲍姆（Feigenbaum）在斯坦福开发 DENDRAL，首个成功的专家系统', link: '/annals/02-golden-age' },
      { year: '1966', event: '维森鲍姆（Weizenbaum）创建 ELIZA 聊天程序，用户竟然对一个程序产生了感情', link: '/annals/02-golden-age' },
      { year: '1969', event: '明斯基（Minsky）与派珀特（Papert）出版《感知机》，数学证明单层网络的局限性，神经网络陷入寒冬', link: '/treatises/neural-networks' },
    ],
  },
  {
    name: '第一次寒冬',
    period: '1973-1980',
    link: '/annals/03-first-winter',
    events: [
      { year: '1973', event: 'Lighthill 报告发表，严厉批评 AI 研究未能兑现承诺，英国率先大幅削减资金', link: '/annals/03-first-winter' },
      { year: '1974', event: 'AI 研究资金在英美两国大幅缩水，大批研究者被迫转向其他领域', link: '/annals/03-first-winter' },
    ],
  },
  {
    name: '专家系统时代',
    period: '1980-1987',
    link: '/annals/04-expert-systems',
    events: [
      { year: '1980', event: 'XCON/R1 专家系统在 DEC 投入使用，每年节省 4000 万美元，证明 AI 的商业价值', link: '/annals/04-expert-systems' },
      { year: '1981', event: '日本启动第五代计算机计划，投资 8.5 亿美元，引发美欧恐慌与跟风', link: '/treatises/ai-in-japan' },
      { year: '1986', event: '鲁梅尔哈特（Rumelhart）、辛顿（Hinton）、威廉姆斯（Williams）在《自然》上发表反向传播算法，多层神经网络终于可以训练', link: '/biographies/hinton' },
    ],
  },
  {
    name: '第二次寒冬',
    period: '1987-1993',
    link: '/annals/05-second-winter',
    events: [
      { year: '1987', event: 'LISP 机器市场崩溃，专用 AI 硬件公司纷纷倒闭，专家系统泡沫破裂', link: '/annals/05-second-winter' },
      { year: '1992', event: '日本第五代计算机计划宣告失败，未能实现任何预定目标', link: '/treatises/ai-in-japan' },
    ],
  },
  {
    name: '静默前行',
    period: '1993-2012',
    link: '/annals/06-quiet-progress',
    events: [
      { year: '1997', event: 'IBM Deep Blue 击败国际象棋世界冠军卡斯帕罗夫（Kasparov），全球震动，登上各大报纸头版', link: '/treatises/ai-games' },
      { year: '2006', event: '辛顿（Hinton）提出深度信念网络，证明深层神经网络可以有效训练，深度学习复兴的号角', link: '/biographies/hinton' },
      { year: '2009', event: '李飞飞（Fei-Fei Li）团队发布 ImageNet 数据集，1400 万张手工标注图片，为深度学习革命埋下种子', link: '/biographies/fei-fei-li' },
      { year: '2011', event: 'IBM Watson 在 Jeopardy! 中击败人类冠军；苹果发布 Siri，AI 走进大众消费者生活', link: '/houses/ibm-research' },
    ],
  },
  {
    name: '深度学习革命',
    period: '2012-2017',
    link: '/annals/07-deep-learning',
    events: [
      { year: '2012', event: 'AlexNet 赢得 ImageNet 竞赛，错误率骤降 10 个百分点，人们以为是 bug——深度学习革命爆发', link: '/annals/07-deep-learning' },
      { year: '2014', event: '古德费洛（Goodfellow）在蒙特利尔一个酒吧的灵感中发明生成对抗网络（GAN），开创生成式 AI', link: '/houses/mila' },
      { year: '2015', event: 'ResNet 突破 100 层深度网络；Google 开源 TensorFlow，深度学习工具民主化', link: '/treatises/ai-open-source' },
      { year: '2016', event: 'AlphaGo 以 4:1 击败围棋世界冠军李世石（Lee Sedol），AI 攻克人类最复杂的棋类游戏', link: '/houses/deepmind' },
    ],
  },
  {
    name: 'Transformer 纪元',
    period: '2017-2022',
    link: '/annals/08-transformer',
    events: [
      { year: '2017', event: '八位 Google 研究员发表"Attention Is All You Need"，Transformer 架构诞生，改变一切', link: '/houses/google-brain' },
      { year: '2018', event: 'Google 发布 BERT，双向预训练成为 NLP 标配；OpenAI 发布 GPT-1，生成式预训练路线开启', link: '/treatises/llm' },
      { year: '2019', event: 'OpenAI 发布 GPT-2（15 亿参数），以"太危险"为由延迟公开，引发开源与安全之争', link: '/treatises/llm' },
      { year: '2020', event: 'GPT-3 发布（1750 亿参数），展现惊人的少样本学习能力；AlphaFold 2 解决蛋白质折叠问题', link: '/treatises/ai-biology' },
      { year: '2021', event: 'GitHub Copilot 发布，AI 开始帮程序员写代码；DALL-E 发布，AI 学会了画画', link: '/treatises/ai-agent' },
      { year: '2022', event: 'ChatGPT 发布（11月30日），两个月用户破亿，成为史上增长最快的消费级应用', link: '/houses/openai' },
    ],
  },
  {
    name: '生成式 AI 浪潮',
    period: '2022-2026',
    link: '/annals/09-generative-ai',
    events: [
      { year: '2023', event: 'GPT-4 发布，多模态能力震撼业界；Meta 开源 LLaMA 引爆开源大模型运动；辛顿（Hinton）离开 Google 公开警告 AI 风险', link: '/treatises/ai-open-source' },
      { year: '2024', event: 'OpenAI 发布 Sora 视频生成模型；Anthropic 发布 Claude 3；辛顿（Hinton）获诺贝尔物理学奖，哈萨比斯（Hassabis）获诺贝尔化学奖——AI 研究者首次获诺奖', link: '/treatises/ai-art' },
      { year: '2025', event: 'DeepSeek-R1 以极低成本实现顶尖推理能力，震动全球；GPT-5 发布；AI Agent 生态蓬勃发展', link: '/treatises/llm' },
      { year: '2026', event: 'AI 深度融入医疗、教育、制造等各行各业，全球 AI 治理加速推进，72 个国家出台 AI 政策', link: '/treatises/ai-governance' },
    ],
  },
]

/** 所有事件的扁平列表 */
export const allEvents: TimelineEvent[] = timeline.flatMap((era) => era.events)
