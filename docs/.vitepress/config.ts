import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 史记',
  description: '一本开源的人工智能历史书籍，记录 AI 从诞生到现在的关键事件与人物',
  base: '/history-of-ai/',
  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://zsjunai.github.io/history-of-ai/',
  },

  head: [
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
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
    ['meta', { property: 'og:url', content: 'https://zsjunai.github.io/history-of-ai/' }],
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
      url: 'https://zsjunai.github.io/history-of-ai/',
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
        target: 'https://zsjunai.github.io/history-of-ai/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    })],

    // JSON-LD Book
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'AI 史记',
      alternateName: 'History of AI — Records of Artificial Intelligence',
      url: 'https://zsjunai.github.io/history-of-ai/',
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
              text: '列传 · 奠基者',
              items: [
                { text: '图灵（Alan Turing）', link: '/biographies/turing' },
                { text: '香农（Claude Shannon）', link: '/biographies/shannon' },
                { text: '维纳（Norbert Wiener）', link: '/biographies/wiener' },
                { text: '麦卡锡（John McCarthy）', link: '/biographies/mccarthy' },
                { text: '明斯基（Marvin Minsky）', link: '/biographies/minsky' },
                { text: '西蒙（Herbert Simon）', link: '/biographies/herbert-simon' },
                { text: '纽厄尔（Allen Newell）', link: '/biographies/allen-newell' },
                { text: '罗森布拉特（Frank Rosenblatt）', link: '/biographies/rosenblatt' },
                { text: '珀尔（Judea Pearl）', link: '/biographies/judea-pearl' },
              ],
            },
            {
              text: '列传 · 深度学习先驱',
              items: [
                { text: '霍普菲尔德（John Hopfield）', link: '/biographies/hopfield' },
                { text: '辛顿（Geoffrey Hinton）', link: '/biographies/hinton' },
                { text: '施密德胡贝（Jürgen Schmidhuber）', link: '/biographies/schmidhuber' },
                { text: '杨立昆（Yann LeCun）', link: '/biographies/lecun' },
                { text: '本吉奥（Yoshua Bengio）', link: '/biographies/bengio' },
              ],
            },
            {
              text: '列传 · 当代风云',
              items: [
                { text: '李飞飞（Fei-Fei Li）', link: '/biographies/fei-fei-li' },
                { text: '吴恩达（Andrew Ng）', link: '/biographies/andrew-ng' },
                { text: '苏茨克维（Ilya Sutskever）', link: '/biographies/ilya-sutskever' },
                { text: '哈萨比斯（Demis Hassabis）', link: '/biographies/demis-hassabis' },
                { text: '奥特曼（Sam Altman）', link: '/biographies/sam-altman' },
                { text: '卡帕西（Andrej Karpathy）', link: '/biographies/karpathy' },
                { text: '马斯克（Elon Musk）', link: '/biographies/elon-musk' },
              ],
            },
            {
              text: '列传 · 中国人物',
              items: [
                { text: '李开复（Kai-Fu Lee）', link: '/biographies/kai-fu-lee' },
                { text: '周志华', link: '/biographies/zhou-zhihua' },
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
      description: 'An open-source book on the history of Artificial Intelligence',
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
              ],
            },
          ],
          '/en/biographies/': [
            {
              text: 'Biographies',
              items: [
                { text: 'Alan Turing', link: '/en/biographies/turing' },
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
