import { defineConfig } from 'vitepress'

// 部署目标：
//   默认（本地开发 / ECS ai.puliot.com）：base=/
//   GitHub Pages：workflow 里指定 VITEPRESS_BASE=/history-of-ai/
const base = process.env.VITEPRESS_BASE ?? '/'
const siteHostname = process.env.VITEPRESS_HOSTNAME ?? 'https://ai.puliot.com/'

export default defineConfig({
  title: 'AI 史记',
  description: '一本开源的人工智能历史书籍，记录 AI 从诞生到现在的关键事件与人物',
  base,
  lastUpdated: true,
  cleanUrls: true,

  // 排除项目内部文档（图片版权清单等），不渲染为页面、不进 sitemap
  srcExclude: ['**/README.md', '**/CREDITS.md', '**/_*.md'],

  sitemap: {
    hostname: siteHostname,
  },

  head: [
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['link', { rel: 'shortcut icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['link', { rel: 'apple-touch-icon', href: `${base}favicon.svg` }],
    ['link', { rel: 'mask-icon', href: `${base}favicon.svg`, color: '#0ea5e9' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Noto+Sans+SC:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap', rel: 'stylesheet' }],

    // SEO Meta
    ['meta', { name: 'keywords', content: 'AI历史,人工智能历史,AI史记,History of AI,AI Timeline,人工智能发展史,深度学习,机器学习,图灵,神经网络,大语言模型,ChatGPT,Transformer,AGI,AI人物传记,Turing,Hinton,OpenAI,DeepMind' }],
    ['meta', { name: 'author', content: 'AI 史记开源社区' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'AI 史记' }],
    ['meta', { property: 'og:title', content: 'AI 史记 — 人工智能的前世今生' }],
    ['meta', { property: 'og:description', content: '一本开源的 AI 历史书籍，以史记五体记录 AI 从 1943 年到 2026 年的关键事件、人物与机构——一场改变人类命运的智能革命。涵盖图灵、辛顿、OpenAI、深度学习、大语言模型等。' }],
    ['meta', { property: 'og:url', content: 'https://ai.puliot.com/' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'AI 史记 — 人工智能的前世今生' }],
    ['meta', { name: 'twitter:description', content: '以史记五体记录 AI 从 1943 到 2026 年的关键事件、人物与机构。开源共建，社区协作。' }],

    // JSON-LD Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI 史记',
      alternateName: 'History of AI',
      url: 'https://ai.puliot.com/',
      description: '一本开源的 AI 历史书籍，以史记五体记录 AI 从 1943 年到 2026 年的关键事件、人物与机构——一场改变人类命运的智能革命。',
      inLanguage: ['zh-CN', 'en'],
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by-sa/4.0/',
      publisher: {
        '@type': 'Organization',
        name: 'AI 史记开源社区',
        url: 'https://github.com/zsjunai/history-of-ai',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ai.puliot.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    })],

    // JSON-LD Book
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'AI 史记',
      alternateName: 'History of AI — Records of Artificial Intelligence',
      url: 'https://ai.puliot.com/',
      inLanguage: ['zh-CN', 'en'],
      about: [
        { '@type': 'Thing', name: 'Artificial Intelligence' },
        { '@type': 'Thing', name: 'History of Computing' },
        { '@type': 'Thing', name: 'Deep Learning' },
        { '@type': 'Thing', name: 'Machine Learning' },
      ],
      genre: ['History', 'Technology', 'Science'],
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by-sa/4.0/',
      copyrightYear: 2026,
    })],
  ],

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '前言', link: '/guide/introduction' },
          { text: '本纪', link: '/annals/01-dawn', activeMatch: '/annals/' },
          { text: '世家', link: '/houses/mit-ai-lab', activeMatch: '/houses/' },
          { text: '列传', link: '/biographies/turing', activeMatch: '/biographies/' },
          { text: '书', link: '/treatises/neural-networks', activeMatch: '/treatises/' },
          { text: '大事年表', link: '/timeline/' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '导读',
              items: [
                { text: '前言', link: '/guide/introduction' },
                { text: '如何贡献', link: '/guide/how-to-contribute' },
              ],
            },
          ],
          '/annals/': [
            {
              text: '本纪',
              items: [
                { text: '黎明期（1943-1956）', link: '/annals/01-dawn' },
                { text: '黄金时代（1956-1973）', link: '/annals/02-golden-age' },
                { text: '第一次寒冬（1973-1980）', link: '/annals/03-first-winter' },
                { text: '专家系统时代（1980-1987）', link: '/annals/04-expert-systems' },
                { text: '第二次寒冬（1987-1993）', link: '/annals/05-second-winter' },
                { text: '统计学习崛起（1993-2006）', link: '/annals/06-statistical-learning' },
                { text: '深度学习前夜（2006-2012）', link: '/annals/07-prelude-to-deep-learning' },
                { text: '视觉革命（2012-2017）', link: '/annals/08-cnn-era' },
                { text: 'Transformer 纪元（2017-2022）', link: '/annals/09-transformer' },
                { text: '生成式 AI 浪潮（2022-2026）', link: '/annals/10-generative-ai' },
              ],
            },
          ],
          '/houses/': [
            {
              text: '世家 · 奠基学术',
              items: [
                { text: 'MIT AI 实验室', link: '/houses/mit-ai-lab' },
                { text: '卡内基梅隆大学', link: '/houses/cmu' },
                { text: '斯坦福 AI 实验室', link: '/houses/stanford-ai-lab' },
                { text: '加州大学伯克利分校 / BAIR', link: '/houses/uc-berkeley' },
                { text: '多伦多大学 / Vector', link: '/houses/toronto-vector' },
                { text: '蒙特利尔学习算法研究所（MILA）', link: '/houses/mila' },
              ],
            },
            {
              text: '世家 · 企业研究院',
              items: [
                { text: '贝尔实验室（Bell Labs）', link: '/houses/bell-labs' },
                { text: 'IBM 研究院', link: '/houses/ibm-research' },
                { text: '微软研究院', link: '/houses/microsoft-research' },
              ],
            },
            {
              text: '世家 · 国家项目',
              items: [
                { text: 'ICOT（日本第五代）', link: '/houses/icot' },
              ],
            },
            {
              text: '世家 · 科技巨头 AI 部门',
              items: [
                { text: 'Google Brain', link: '/houses/google-brain' },
                { text: 'Google DeepMind', link: '/houses/deepmind' },
                { text: 'Meta AI (FAIR)', link: '/houses/meta-ai' },
                { text: '苹果（Apple Intelligence）', link: '/houses/apple-intelligence' },
                { text: '亚马逊（AWS AI / Bedrock）', link: '/houses/amazon-aws-ai' },
              ],
            },
            {
              text: '世家 · AI 基础设施',
              items: [
                { text: '英伟达（NVIDIA）', link: '/houses/nvidia' },
                { text: '台积电（TSMC）', link: '/houses/tsmc' },
                { text: 'Hugging Face', link: '/houses/huggingface' },
              ],
            },
            {
              text: '世家 · 独立 AI 公司',
              items: [
                { text: 'OpenAI', link: '/houses/openai' },
                { text: 'Anthropic', link: '/houses/anthropic' },
                { text: 'xAI', link: '/houses/xai' },
                { text: 'Cohere', link: '/houses/cohere' },
                { text: 'Mistral AI', link: '/houses/mistral-ai' },
              ],
            },
            {
              text: '世家 · 中国机构',
              items: [
                { text: '清华大学 AI', link: '/houses/tsinghua-ai' },
                { text: '百度 AI', link: '/houses/baidu-ai' },
                { text: '阿里达摩院', link: '/houses/alibaba-damo' },
                { text: '字节跳动 / Seed', link: '/houses/bytedance-seed' },
                { text: '智谱 AI（GLM）', link: '/houses/zhipu-ai' },
                { text: 'MiniMax（海螺 / Talkie）', link: '/houses/minimax' },
                { text: '月之暗面（Kimi）', link: '/houses/moonshot-kimi' },
                { text: 'DeepSeek', link: '/houses/deepseek' },
              ],
            },
          ],
          '/biographies/': [
            {
              text: '列传 · 远古先知',
              items: [
                { text: '图灵（Alan Turing）', link: '/biographies/turing' },
                { text: '香农（Claude Shannon）', link: '/biographies/shannon' },
                { text: '维纳（Norbert Wiener）', link: '/biographies/wiener' },
              ],
            },
            {
              text: '列传 · 达特茅斯一代',
              items: [
                { text: '麦卡锡（John McCarthy）', link: '/biographies/mccarthy' },
                { text: '明斯基（Marvin Minsky）', link: '/biographies/minsky' },
                { text: '西蒙（Herbert Simon）', link: '/biographies/herbert-simon' },
                { text: '纽厄尔（Allen Newell）', link: '/biographies/allen-newell' },
              ],
            },
            {
              text: '列传 · 连接主义与因果',
              items: [
                { text: '罗森布拉特（Frank Rosenblatt）', link: '/biographies/rosenblatt' },
                { text: '霍普菲尔德（John Hopfield）', link: '/biographies/hopfield' },
                { text: '珀尔（Judea Pearl）', link: '/biographies/judea-pearl' },
              ],
            },
            {
              text: '列传 · 深度学习开创者',
              items: [
                { text: '辛顿（Geoffrey Hinton）', link: '/biographies/hinton' },
                { text: '杨立昆（Yann LeCun）', link: '/biographies/lecun' },
                { text: '本吉奥（Yoshua Bengio）', link: '/biographies/bengio' },
                { text: '施密德胡贝（Jürgen Schmidhuber）', link: '/biographies/schmidhuber' },
              ],
            },
            {
              text: '列传 · LLM 时代研究者',
              items: [
                { text: '李飞飞（Fei-Fei Li）', link: '/biographies/fei-fei-li' },
                { text: '苏茨克维（Ilya Sutskever）', link: '/biographies/ilya-sutskever' },
                { text: '哈萨比斯（Demis Hassabis）', link: '/biographies/demis-hassabis' },
                { text: '卡帕西（Andrej Karpathy）', link: '/biographies/karpathy' },
              ],
            },
            {
              text: '列传 · 教育与传承',
              items: [
                { text: '吴恩达（Andrew Ng）', link: '/biographies/andrew-ng' },
                { text: '周志华（Zhihua Zhou）', link: '/biographies/zhou-zhihua' },
              ],
            },
            {
              text: '列传 · 产业掌门',
              items: [
                { text: '奥特曼（Sam Altman）', link: '/biographies/sam-altman' },
                { text: '马斯克（Elon Musk）', link: '/biographies/elon-musk' },
                { text: '李开复（Kai-Fu Lee）', link: '/biographies/kai-fu-lee' },
              ],
            },
          ],
          '/treatises/': [
            {
              text: '书 · 技术脉络',
              items: [
                { text: '神经网络发展史', link: '/treatises/neural-networks' },
                { text: '知识表示与推理简史', link: '/treatises/knowledge-representation' },
                { text: '自然语言处理简史', link: '/treatises/nlp' },
                { text: '计算机视觉简史', link: '/treatises/computer-vision' },
                { text: '强化学习简史', link: '/treatises/reinforcement-learning' },
                { text: '大语言模型', link: '/treatises/llm' },
                { text: '世界模型', link: '/treatises/world-models' },
                { text: 'AGI 与 ASI', link: '/treatises/agi-asi' },
              ],
            },
            {
              text: '书 · 基础设施',
              items: [
                { text: 'AI 硬件与算力', link: '/treatises/ai-hardware' },
                { text: 'AI 与开源运动', link: '/treatises/ai-open-source' },
              ],
            },
            {
              text: '书 · 应用领域',
              items: [
                { text: 'AI 与游戏', link: '/treatises/ai-games' },
                { text: 'AI 与生物医疗', link: '/treatises/ai-biology' },
                { text: 'AI 与创意艺术', link: '/treatises/ai-art' },
                { text: '具身智能与机器人', link: '/treatises/embodied-ai' },
                { text: '自动驾驶简史', link: '/treatises/autonomous-driving' },
                { text: 'AI Agent', link: '/treatises/ai-agent' },
              ],
            },
            {
              text: '书 · 社会影响',
              items: [
                { text: 'AI 伦理之争', link: '/treatises/ai-ethics' },
                { text: 'AI 安全与对齐', link: '/treatises/ai-safety' },
                { text: 'AI 政策与监管', link: '/treatises/ai-governance' },
                { text: 'AI 与 Web3', link: '/treatises/ai-web3' },
              ],
            },
            {
              text: '书 · 国别史',
              items: [
                { text: '美国 AI 发展史', link: '/treatises/ai-in-usa' },
                { text: '中国 AI 发展史', link: '/treatises/ai-in-china' },
                { text: '欧洲 AI 发展史', link: '/treatises/ai-in-europe' },
                { text: '加拿大 AI 发展史', link: '/treatises/ai-in-canada' },
                { text: '日本 AI 发展史', link: '/treatises/ai-in-japan' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/zsjunai/history-of-ai/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        footer: {
          message: '基于 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC-BY-SA 4.0</a> 许可发布',
          copyright: 'AI 史记开源社区',
        },
        outline: { label: '目录', level: [2, 3] },
        lastUpdated: { text: '最后更新于' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },

    en: {
      label: 'English',
      lang: 'en-US',
      title: 'History of AI',
      description: 'An open-source book on the history of Artificial Intelligence (1936–2026), structured in the style of Records of the Grand Historian. 90+ chapters, 134 timeline events.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Preface', link: '/en/guide/introduction' },
          { text: 'Annals', link: '/en/annals/01-dawn', activeMatch: '/en/annals/' },
          { text: 'Houses', link: '/en/houses/mit-ai-lab', activeMatch: '/en/houses/' },
          { text: 'Biographies', link: '/en/biographies/turing', activeMatch: '/en/biographies/' },
          { text: 'Treatises', link: '/en/treatises/neural-networks', activeMatch: '/en/treatises/' },
          { text: 'Timeline', link: '/en/timeline/' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Preface', link: '/en/guide/introduction' },
                { text: 'How to Contribute', link: '/en/guide/how-to-contribute' },
              ],
            },
          ],
          '/en/annals/': [
            {
              text: 'Annals',
              items: [
                { text: 'The Dawn (1943-1956)', link: '/en/annals/01-dawn' },
                { text: 'The Golden Age (1956-1973)', link: '/en/annals/02-golden-age' },
                { text: 'The First Winter (1973-1980)', link: '/en/annals/03-first-winter' },
                { text: 'The Era of Expert Systems (1980-1987)', link: '/en/annals/04-expert-systems' },
                { text: 'The Second Winter (1987-1993)', link: '/en/annals/05-second-winter' },
                { text: 'The Rise of Statistical Learning (1993-2006)', link: '/en/annals/06-statistical-learning' },
                { text: 'Prelude to Deep Learning (2006-2012)', link: '/en/annals/07-prelude-to-deep-learning' },
                { text: 'The Vision Revolution (2012-2017)', link: '/en/annals/08-cnn-era' },
                { text: 'The Transformer Era (2017-2022)', link: '/en/annals/09-transformer' },
                { text: 'The Generative AI Wave (2022-2026)', link: '/en/annals/10-generative-ai' },
              ],
            },
          ],
          '/en/houses/': [
            {
              text: 'Houses · Foundational Academia',
              items: [
                { text: 'MIT AI Lab', link: '/en/houses/mit-ai-lab' },
                { text: 'Carnegie Mellon University', link: '/en/houses/cmu' },
                { text: 'Stanford AI Lab', link: '/en/houses/stanford-ai-lab' },
                { text: 'UC Berkeley / BAIR', link: '/en/houses/uc-berkeley' },
                { text: 'University of Toronto / Vector', link: '/en/houses/toronto-vector' },
                { text: 'Mila — Quebec AI Institute', link: '/en/houses/mila' },
              ],
            },
            {
              text: 'Houses · Corporate Research Labs',
              items: [
                { text: 'Bell Labs', link: '/en/houses/bell-labs' },
                { text: 'IBM Research', link: '/en/houses/ibm-research' },
                { text: 'Microsoft Research', link: '/en/houses/microsoft-research' },
              ],
            },
            {
              text: 'Houses · National Programs',
              items: [
                { text: 'ICOT (Japan, Fifth Generation)', link: '/en/houses/icot' },
              ],
            },
            {
              text: 'Houses · AI Divisions of Tech Giants',
              items: [
                { text: 'Google Brain', link: '/en/houses/google-brain' },
                { text: 'Google DeepMind', link: '/en/houses/deepmind' },
                { text: 'Meta AI (FAIR)', link: '/en/houses/meta-ai' },
                { text: 'Apple (Apple Intelligence)', link: '/en/houses/apple-intelligence' },
                { text: 'Amazon (AWS AI / Bedrock)', link: '/en/houses/amazon-aws-ai' },
              ],
            },
            {
              text: 'Houses · AI Infrastructure',
              items: [
                { text: 'NVIDIA', link: '/en/houses/nvidia' },
                { text: 'TSMC', link: '/en/houses/tsmc' },
                { text: 'Hugging Face', link: '/en/houses/huggingface' },
              ],
            },
            {
              text: 'Houses · Independent AI Companies',
              items: [
                { text: 'OpenAI', link: '/en/houses/openai' },
                { text: 'Anthropic', link: '/en/houses/anthropic' },
                { text: 'xAI', link: '/en/houses/xai' },
                { text: 'Cohere', link: '/en/houses/cohere' },
                { text: 'Mistral AI', link: '/en/houses/mistral-ai' },
              ],
            },
            {
              text: 'Houses · Chinese Institutions',
              items: [
                { text: 'Tsinghua University AI', link: '/en/houses/tsinghua-ai' },
                { text: 'Baidu AI', link: '/en/houses/baidu-ai' },
                { text: 'Alibaba DAMO Academy', link: '/en/houses/alibaba-damo' },
                { text: 'ByteDance / Seed', link: '/en/houses/bytedance-seed' },
                { text: 'Zhipu AI (GLM)', link: '/en/houses/zhipu-ai' },
                { text: 'MiniMax (Hailuo / Talkie)', link: '/en/houses/minimax' },
                { text: 'Moonshot AI (Kimi)', link: '/en/houses/moonshot-kimi' },
                { text: 'DeepSeek', link: '/en/houses/deepseek' },
              ],
            },
          ],
          '/en/biographies/': [
            {
              text: 'Biographies · Ancient Prophets',
              items: [
                { text: 'Alan Turing', link: '/en/biographies/turing' },
                { text: 'Claude Shannon', link: '/en/biographies/shannon' },
                { text: 'Norbert Wiener', link: '/en/biographies/wiener' },
              ],
            },
            {
              text: 'Biographies · The Dartmouth Generation',
              items: [
                { text: 'John McCarthy', link: '/en/biographies/mccarthy' },
                { text: 'Marvin Minsky', link: '/en/biographies/minsky' },
                { text: 'Herbert Simon', link: '/en/biographies/herbert-simon' },
                { text: 'Allen Newell', link: '/en/biographies/allen-newell' },
              ],
            },
            {
              text: 'Biographies · Connectionism and Causality',
              items: [
                { text: 'Frank Rosenblatt', link: '/en/biographies/rosenblatt' },
                { text: 'John Hopfield', link: '/en/biographies/hopfield' },
                { text: 'Judea Pearl', link: '/en/biographies/judea-pearl' },
              ],
            },
            {
              text: 'Biographies · Pioneers of Deep Learning',
              items: [
                { text: 'Geoffrey Hinton', link: '/en/biographies/hinton' },
                { text: 'Yann LeCun', link: '/en/biographies/lecun' },
                { text: 'Yoshua Bengio', link: '/en/biographies/bengio' },
                { text: 'Jürgen Schmidhuber', link: '/en/biographies/schmidhuber' },
              ],
            },
            {
              text: 'Biographies · Researchers of the LLM Era',
              items: [
                { text: 'Fei-Fei Li', link: '/en/biographies/fei-fei-li' },
                { text: 'Ilya Sutskever', link: '/en/biographies/ilya-sutskever' },
                { text: 'Demis Hassabis', link: '/en/biographies/demis-hassabis' },
                { text: 'Andrej Karpathy', link: '/en/biographies/karpathy' },
              ],
            },
            {
              text: 'Biographies · Education and Transmission',
              items: [
                { text: 'Andrew Ng', link: '/en/biographies/andrew-ng' },
                { text: 'Zhihua Zhou', link: '/en/biographies/zhou-zhihua' },
              ],
            },
            {
              text: 'Biographies · Industry Leaders',
              items: [
                { text: 'Sam Altman', link: '/en/biographies/sam-altman' },
                { text: 'Elon Musk', link: '/en/biographies/elon-musk' },
                { text: 'Kai-Fu Lee', link: '/en/biographies/kai-fu-lee' },
              ],
            },
          ],
          '/en/treatises/': [
            {
              text: 'Treatises · Technical Lineages',
              items: [
                { text: 'A History of Neural Networks', link: '/en/treatises/neural-networks' },
                { text: 'Knowledge Representation and Reasoning', link: '/en/treatises/knowledge-representation' },
                { text: 'A History of Natural Language Processing', link: '/en/treatises/nlp' },
                { text: 'A History of Computer Vision', link: '/en/treatises/computer-vision' },
                { text: 'A History of Reinforcement Learning', link: '/en/treatises/reinforcement-learning' },
                { text: 'Large Language Models', link: '/en/treatises/llm' },
                { text: 'World Models', link: '/en/treatises/world-models' },
                { text: 'AGI and ASI', link: '/en/treatises/agi-asi' },
              ],
            },
            {
              text: 'Treatises · Infrastructure',
              items: [
                { text: 'AI Hardware and Compute', link: '/en/treatises/ai-hardware' },
                { text: 'AI and the Open-Source Movement', link: '/en/treatises/ai-open-source' },
              ],
            },
            {
              text: 'Treatises · Application Domains',
              items: [
                { text: 'AI and Games', link: '/en/treatises/ai-games' },
                { text: 'AI in Biology and Medicine', link: '/en/treatises/ai-biology' },
                { text: 'AI in the Creative Arts', link: '/en/treatises/ai-art' },
                { text: 'Embodied AI and Robotics', link: '/en/treatises/embodied-ai' },
                { text: 'A History of Autonomous Driving', link: '/en/treatises/autonomous-driving' },
                { text: 'AI Agents', link: '/en/treatises/ai-agent' },
              ],
            },
            {
              text: 'Treatises · Society and Impact',
              items: [
                { text: 'AI Ethics Debates', link: '/en/treatises/ai-ethics' },
                { text: 'AI Safety and Alignment', link: '/en/treatises/ai-safety' },
                { text: 'AI Policy and Regulation', link: '/en/treatises/ai-governance' },
                { text: 'AI and Web3', link: '/en/treatises/ai-web3' },
              ],
            },
            {
              text: 'Treatises · National Histories',
              items: [
                { text: 'AI in the United States', link: '/en/treatises/ai-in-usa' },
                { text: 'AI in China', link: '/en/treatises/ai-in-china' },
                { text: 'AI in Europe', link: '/en/treatises/ai-in-europe' },
                { text: 'AI in Canada', link: '/en/treatises/ai-in-canada' },
                { text: 'AI in Japan', link: '/en/treatises/ai-in-japan' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/zsjunai/history-of-ai/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: 'Released under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC-BY-SA 4.0</a>',
          copyright: 'History of AI Open Source Community',
        },
        outline: { label: 'On this page', level: [2, 3] },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous', next: 'Next' },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zsjunai/history-of-ai' },
    ],
    search: {
      provider: 'local',
    },
  },
})
