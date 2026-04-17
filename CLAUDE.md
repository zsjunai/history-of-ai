# CLAUDE.md

## 项目概述

AI 史记——一本开源的人工智能历史书籍，以司马迁《史记》五体结构记录 AI 从 1943 年到 2026 年的历史。

- 仓库：https://github.com/zsjunai/history-of-ai
- 在线地址：https://ai.puliot.com/
- 技术栈：VitePress 1.6.4 + Vue 3 + TypeScript
- 许可证：CC-BY-SA 4.0

## 五体结构

| 体例 | 目录 | 数量 | 说明 |
|------|------|------|------|
| 本纪 | `docs/annals/` | 10 | 按时代划分的编年史 |
| 世家 | `docs/houses/` | 31 | 关键机构与实验室 |
| 列传 | `docs/biographies/` | 23 | 关键人物传记 |
| 书 | `docs/treatises/` | 25 | 技术专题 + 国别史 |
| 表 | `docs/timeline/` | 1 | 大事年表 |

## 关键文件

- `docs/.vitepress/config.ts` — VitePress 配置（导航、侧边栏、base 路径）
- `docs/.vitepress/data/timeline.ts` — 时间线共享数据源（首页动画和年表共用）
- `docs/.vitepress/theme/index.ts` — 主题入口（自定义布局、全局组件、导航 tooltip）
- `docs/.vitepress/theme/styles/vars.css` — 颜色变量（light/dark 双主题）
- `docs/.vitepress/theme/styles/custom.css` — 自定义样式
- `docs/.vitepress/theme/components/` — Vue 组件目录

## 自定义组件

| 组件 | 用途 |
|------|------|
| `CustomLayout.vue` | 自定义布局，注入首页各区域组件 |
| `ParticleNetwork.vue` | 首页 hero 粒子神经网络背景动画 |
| `AiRobot.vue` | 首页 hero 右侧 AI 机器人动画（走路/跑步/跳跃/翻跟斗/挥手/待机） |
| `StatsBar.vue` | 首页统计数字栏（数字滚入动画，可点击跳转） |
| `HistoryLoader.vue` | 首页终端风格历史加载动画（打字机效果） |
| `HomeFooter.vue` | 首页底部引言和链接 |
| `TimelinePage.vue` | 大事年表页面（从 timeline.ts 读取数据） |
| `PersonTooltip.vue` | 人物悬浮卡片组件，Markdown 中用 `<Person id="turing" />` 调用，数据源为 `data/people.ts` |

## 常用命令

```bash
npm run docs:dev      # 本地预览
npm run docs:build    # 构建
npm run docs:preview  # 预览构建结果
```

## 写作规范要点

### 真实性（最高优先级）

- **事实准确是一切的基础**：所有人名、年份、事件、数字必须经过核实，不确定时宁可不写也不编造
- **区分事实与传说**：部分 AI 史上的故事（如皮茨写信给罗素的细节）存在多个版本，应采用学术界主流共识，对有争议的细节注明"据传"或给出出处
- **数字必须精确**：真空管数量、论文发表年份、人物年龄等细节容易出错，写入前须交叉验证
- **引用原始文献**：尽量引用一手文献（原始论文、亲历者回忆），而非二手转述

### 语言风格

- **叙事感优先**：像讲故事一样写历史，用具体场景和人物行动推进，避免教科书式的干燥罗列
- **长短句交错**：长句展开背景与因果，短句制造节奏感和判断力，避免通篇长句
- **庄重但不刻板**：整体基调严肃、有文学色彩，允许比喻和画面感，但不追求华丽辞藻
- **细节见真章**：用关键细节（一篇论文、一次会议、一个决定）撑起观点，而非空泛概括

### 格式规范

- 中文为主，关键术语保留英文：`中文（English Term）`
- **人名格式**：
  - 优先使用 `<Person id="turing" />` 组件（行内只显示中文名，悬浮卡片显示英文名、国籍、学科、生卒年、简介）
  - 每篇文章中人物**首次出现**时必须使用 `<Person>` 组件，后续出现只写中文名即可
  - 若人物未收录在 `data/people.ts` 中，先将人物补充到字典中再使用组件；临时可用 `中文名（English Name）` 格式
  - 新增人物到字典时需包含：id、name、englishName、nationality、field、born、died（可选）、bio
- 侧边栏人名只显示中文，括号英文在文章标题中
- 每篇末尾需有 `::: tip 太史公曰` 和 `## 亲历者说` 板块
- 时间线数据统一维护在 `timeline.ts`，不要在 Markdown 中硬编码

## 部署

- GitHub Actions 自动部署到 GitHub Pages
- 配置文件：`.github/workflows/deploy.yml`
- base 路径：`/history-of-ai/`
- 推送到 main 分支自动触发构建

## Git 配置

- 部署方式：GitHub Actions 自动部署
- 推送到 `main` 分支即触发构建

## 注意事项

- 修改导航或侧边栏后运行 `npm run docs:build` 验证
- 新增章节需同时更新 `config.ts` 侧边栏配置
- 新增时间线事件需更新 `timeline.ts`，首页动画和年表自动同步
- 图片需符合版权要求（Public Domain 或 CC 许可），放在 `docs/public/images/`
- GitHub Pages 部署地址带 `/history-of-ai/` 子路径，StatsBar 等组件的链接需包含此前缀
- **篇数同步**：新增或删除文章后，必须同步更新以下所有记录篇数的位置：
  1. `CLAUDE.md` — 五体结构表格
  2. `README.md` — 五体结构表格及合计数
  3. `docs/guide/introduction.md` — 前言中的篇数描述
  4. `docs/index.md` — 首页 features 中的篇数描述
  5. `docs/.vitepress/theme/components/StatsBar.vue` — 统计数字栏的 number 值
