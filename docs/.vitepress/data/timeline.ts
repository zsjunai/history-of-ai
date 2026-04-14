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
      { year: '1943', event: '麦卡洛克与皮茨提出神经元数学模型', link: '/annals/01-dawn' },
      { year: '1948', event: '维纳出版《控制论》', link: '/biographies/wiener' },
      { year: '1949', event: '赫布提出赫布学习规则', link: '/annals/01-dawn' },
      { year: '1950', event: '图灵发表《计算机器与智能》，提出图灵测试', link: '/biographies/turing' },
      { year: '1951', event: '明斯基与埃德蒙兹建造 SNARC，首个神经网络硬件', link: '/biographies/minsky' },
      { year: '1952', event: '塞缪尔开发跳棋程序', link: '/houses/ibm-research' },
      { year: '1955', event: '纽厄尔与西蒙创建 Logic Theorist', link: '/biographies/herbert-simon' },
      { year: '1956', event: 'Dartmouth 会议，"人工智能"一词诞生', link: '/annals/01-dawn' },
    ],
  },
  {
    name: '黄金时代',
    period: '1956-1973',
    link: '/annals/02-golden-age',
    events: [
      { year: '1958', event: '麦卡锡发明 LISP；罗森布拉特发明感知机', link: '/biographies/mccarthy' },
      { year: '1965', event: '费根鲍姆开发 DENDRAL 专家系统', link: '/annals/02-golden-age' },
      { year: '1966', event: '维森鲍姆创建 ELIZA 聊天程序', link: '/annals/02-golden-age' },
      { year: '1969', event: '明斯基与派珀特出版《感知机》', link: '/treatises/neural-networks' },
    ],
  },
  {
    name: '第一次寒冬',
    period: '1973-1980',
    link: '/annals/03-first-winter',
    events: [
      { year: '1973', event: 'Lighthill 报告严厉批评 AI 研究', link: '/annals/03-first-winter' },
      { year: '1974', event: '英国大幅削减 AI 研究资金', link: '/annals/03-first-winter' },
    ],
  },
  {
    name: '专家系统时代',
    period: '1980-1987',
    link: '/annals/04-expert-systems',
    events: [
      { year: '1980', event: 'XCON/R1 专家系统在 DEC 投入使用', link: '/annals/04-expert-systems' },
      { year: '1981', event: '日本启动第五代计算机计划', link: '/treatises/ai-in-japan' },
      { year: '1986', event: '鲁梅尔哈特、辛顿、威廉姆斯发表反向传播论文', link: '/biographies/hinton' },
    ],
  },
  {
    name: '第二次寒冬',
    period: '1987-1993',
    link: '/annals/05-second-winter',
    events: [
      { year: '1987', event: 'LISP 机器市场崩溃', link: '/annals/05-second-winter' },
      { year: '1992', event: '日本第五代计算机计划宣告失败', link: '/treatises/ai-in-japan' },
    ],
  },
  {
    name: '静默前行',
    period: '1993-2012',
    link: '/annals/06-quiet-progress',
    events: [
      { year: '1997', event: 'IBM Deep Blue 击败国际象棋世界冠军卡斯帕罗夫', link: '/treatises/ai-games' },
      { year: '2006', event: '辛顿提出深度信念网络，深度学习复兴', link: '/biographies/hinton' },
      { year: '2009', event: '李飞飞等发布 ImageNet 数据集', link: '/biographies/fei-fei-li' },
      { year: '2011', event: 'IBM Watson 在 Jeopardy! 中获胜；Siri 发布', link: '/houses/ibm-research' },
    ],
  },
  {
    name: '深度学习革命',
    period: '2012-2017',
    link: '/annals/07-deep-learning',
    events: [
      { year: '2012', event: 'AlexNet 赢得 ImageNet 竞赛，深度学习爆发', link: '/annals/07-deep-learning' },
      { year: '2014', event: '古德费洛提出生成对抗网络（GAN）', link: '/houses/mila' },
      { year: '2015', event: 'ResNet 突破 100 层；TensorFlow 开源', link: '/treatises/ai-open-source' },
      { year: '2016', event: 'AlphaGo 击败李世石', link: '/houses/deepmind' },
    ],
  },
  {
    name: 'Transformer 纪元',
    period: '2017-2022',
    link: '/annals/08-transformer',
    events: [
      { year: '2017', event: '"Attention Is All You Need" 发表，Transformer 诞生', link: '/houses/google-brain' },
      { year: '2018', event: 'BERT 发布；GPT-1 发布', link: '/treatises/llm' },
      { year: '2019', event: 'GPT-2 发布', link: '/treatises/llm' },
      { year: '2020', event: 'GPT-3 发布（1750 亿参数）；AlphaFold 2 解决蛋白质折叠', link: '/treatises/ai-biology' },
      { year: '2021', event: 'GitHub Copilot 发布；DALL-E 发布', link: '/treatises/ai-agent' },
      { year: '2022', event: 'ChatGPT 发布（11月30日），两个月内用户破亿', link: '/houses/openai' },
    ],
  },
  {
    name: '生成式 AI 浪潮',
    period: '2022-2026',
    link: '/annals/09-generative-ai',
    events: [
      { year: '2023', event: 'GPT-4 发布；开源大模型 LLaMA 发布；辛顿离开 Google 警告 AI 风险', link: '/treatises/ai-open-source' },
      { year: '2024', event: 'Sora 视频生成模型发布；Claude 3 发布；辛顿获诺贝尔物理学奖；哈萨比斯获诺贝尔化学奖', link: '/treatises/ai-art' },
      { year: '2025', event: 'DeepSeek-R1 震动全球；GPT-5 发布；AI Agent 生态蓬勃发展', link: '/treatises/llm' },
      { year: '2026', event: 'AI 深度融入各行各业，全球 AI 治理加速推进', link: '/treatises/ai-governance' },
    ],
  },
]

/** 所有事件的扁平列表 */
export const allEvents: TimelineEvent[] = timeline.flatMap((era) => era.events)
