中文 | [English](README.en.md)

# AI 史记 | History of AI

> 一本开源的人工智能历史书籍，以《史记》五体记录 AI 从 1943 年到 2026 年的关键事件、人物与机构。
>
> An open-source book on the history of Artificial Intelligence, structured in the style of *Records of the Grand Historian* (Shiji), chronicling 83 years of key events, figures, and institutions.

## 在线阅读 Read Online

🔗 **https://zsjunai.github.io/history-of-ai/**

## 项目规模

| 体例 | 数量 | 说明 |
|------|------|------|
| 本纪 | 10 篇 | 编年史，按时代记录 AI 发展的核心辩论与转折 |
| 世家 | 31 篇 | 机构史，从 MIT AI 实验室、OpenAI 到 DeepSeek，覆盖美、加、中、日、欧 |
| 列传 | 23 篇 | 人物传记，从图灵、香农到辛顿、奥特曼 |
| 书 | 25 篇 | 技术专题 + 国别史，覆盖神经网络到 AGI |
| 表 | 1 篇 | 大事年表，AI 83 年关键事件一览 |
| **合计** | **90 篇** | |

## 五体结构

### 本纪 Annals

以思想冲突为主线的九篇编年史：

| # | 篇名 | 时期 |
|---|------|------|
| 1 | 黎明期 | 1943-1956 |
| 2 | 黄金时代 | 1956-1973 |
| 3 | 第一次寒冬 | 1973-1980 |
| 4 | 专家系统时代 | 1980-1987 |
| 5 | 第二次寒冬 | 1987-1993 |
| 6 | 静默前行 | 1993-2012 |
| 7 | 深度学习革命 | 2012-2017 |
| 8 | Transformer 纪元 | 2017-2022 |
| 9 | 生成式 AI 浪潮 | 2022-2026 |

### 世家 Houses

塑造 AI 历史的 31 家关键机构，分七类：

**奠基学术**：MIT AI 实验室 · 卡内基梅隆大学（CMU） · 斯坦福 AI 实验室 · 加州大学伯克利分校 / BAIR · 多伦多大学 / Vector · 蒙特利尔学习算法研究所（MILA）

**企业研究院**：贝尔实验室（Bell Labs） · IBM 研究院 · 微软研究院

**国家项目**：ICOT（日本第五代）

**科技巨头 AI 部门**：Google Brain · Google DeepMind · Meta AI (FAIR) · 苹果（Apple Intelligence） · 亚马逊（AWS AI / Bedrock）

**AI 基础设施**：英伟达（NVIDIA） · 台积电（TSMC） · Hugging Face

**独立 AI 公司**：OpenAI · Anthropic · xAI · Cohere · Mistral AI

**中国机构**：清华大学 AI · 百度 AI · 阿里达摩院 · 字节跳动 / Seed · 智谱 AI · MiniMax · 月之暗面（Kimi） · DeepSeek

### 列传 Biographies

23 位关键人物，按时代分组：

**奠基者**：图灵 · 香农 · 维纳 · 麦卡锡 · 明斯基 · 西蒙 · 纽厄尔 · 罗森布拉特 · 珀尔

**深度学习先驱**：霍普菲尔德 · 辛顿 · 施密德胡贝 · 杨立昆 · 本吉奥

**当代风云**：李飞飞 · 吴恩达 · 苏茨克维 · 哈萨比斯 · 奥特曼 · 卡帕西 · 马斯克

**中国人物**：李开复 · 周志华

### 书 Treatises

25 篇专题论述，分为六组：

**技术脉络**：神经网络 · 知识表示与推理 · NLP · 计算机视觉 · 强化学习 · 大语言模型 · 世界模型 · AGI 与 ASI

**基础设施**：AI 硬件与算力 · AI 与开源运动

**应用领域**：AI 与游戏 · AI 与生物医疗 · AI 与创意艺术 · 具身智能与机器人 · 自动驾驶 · AI Agent

**社会影响**：AI 伦理 · AI 安全与对齐 · AI 政策与监管 · AI 与 Web3

**国别史**：美国 · 中国 · 欧洲 · 加拿大 · 日本

### 表 Timeline

从 1943 到 2026 的 AI 大事年表，每条事件可跳转到对应章节。

## 特色

- 📜 **史记体例**：本纪/世家/列传/书/表五体，多维度记录 AI 历史
- 💬 **太史公曰**：每篇末尾的作者主观短评，不假装客观
- 🎙️ **亲历者说**：每篇预留社区口述史板块，邀请亲历者贡献
- 🔗 **开源协作**：GitHub 协作，Issue 纠错，PR 贡献
- 🌐 **中英双语**：中文为主，关键术语保留英文原文

## 技术栈

- [VitePress](https://vitepress.dev/) 静态站点生成
- 自定义科技风主题（青蓝 + 紫色渐变）
- 粒子神经网络背景动画
- 历史加载终端动画（打字机效果）
- AI 机器人互动动画
- GitHub Actions 自动部署 GitHub Pages
- 共享时间线数据源（`timeline.ts`）

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/zsjunai/history-of-ai.git
cd history-of-ai

# 安装依赖
npm install

# 启动本地预览（支持热更新）
npm run docs:dev

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 参与贡献

我们欢迎所有形式的贡献：

| 贡献方式 | 说明 |
|----------|------|
| 🐛 **纠错** | 发现事实错误？提交 [Issue](https://github.com/zsjunai/history-of-ai/issues/new?template=correction.md) |
| 💡 **建议** | 想添加新内容？提交 [Issue](https://github.com/zsjunai/history-of-ai/issues/new?template=suggestion.md) |
| ✍️ **撰写** | 认领占位章节，撰写完整内容 |
| 🖼️ **图片** | 补充人物照片和历史事件图片（需符合版权要求） |
| 🎙️ **口述史** | 如果你是 AI 领域的亲历者，欢迎在"亲历者说"板块分享 |
| 🌍 **翻译** | 将内容翻译为其他语言 |

详见 [贡献指南](CONTRIBUTING.md)。

## 许可证

本书内容基于 [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 许可发布。

你可以自由分享和改编，但需注明出处并以相同方式共享。

## 联系方式

如有任何问题、建议或合作意向，欢迎联系：

- 邮箱：987835330@qq.com
- GitHub：[@zsjunai](https://github.com/zsjunai)

---

**AI 史记开源社区** · [在线阅读](https://zsjunai.github.io/history-of-ai/) · [参与贡献](CONTRIBUTING.md) · [提交 Issue](https://github.com/zsjunai/history-of-ai/issues)
