# 贡献指南 Contributing Guide

感谢你对 AI 史记项目的关注！以下是参与贡献的完整指南。

## 如何贡献

### 纠错

发现事实错误、时间线偏差或其他问题：

1. 提交 [纠错 Issue](https://github.com/zsjunai/history-of-ai/issues/new?template=correction.md)
2. 或直接提交 Pull Request 修正

### 内容建议

想建议新的人物、事件、机构或专题：

1. 提交 [建议 Issue](https://github.com/zsjunai/history-of-ai/issues/new?template=suggestion.md)
2. 讨论通过后认领撰写

### 认领章节

目前大量章节处于"待完善"状态，欢迎认领撰写：

1. 在对应 Issue 中留言认领（避免重复工作）
2. Fork 仓库，创建分支撰写
3. 完成后提交 Pull Request

### 亲历者说

如果你是 AI 领域的亲历者（参加过重要会议、在关键机构工作过、与书中人物共事过），欢迎在对应章节的"亲历者说"板块贡献第一手回忆。

---

## 开发流程

### 环境准备

```bash
# 克隆仓库
git clone https://github.com/zsjunai/history-of-ai.git
cd history-of-ai

# 安装依赖
npm install

# 启动本地预览（支持热更新）
npm run docs:dev

# 构建验证
npm run docs:build
```

### 分支规范

| 分支 | 用途 |
|------|------|
| `main` | 主分支，保持可部署状态 |
| `feat/xxx` | 新增内容（如 `feat/biography-hinton`） |
| `fix/xxx` | 修正错误（如 `fix/timeline-date`） |
| `docs/xxx` | 文档改进（如 `docs/readme-update`） |
| `style/xxx` | 样式调整 |

### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
<type>: <description>

<optional body>
```

| type | 说明 | 示例 |
|------|------|------|
| `feat` | 新增内容或功能 | `feat: 撰写列传·辛顿完整内容` |
| `fix` | 修正错误 | `fix: 修正 AlphaGo 击败李世石年份` |
| `docs` | 文档改进 | `docs: 更新 README 项目规模数据` |
| `style` | 样式调整 | `style: 调整首页卡片间距` |
| `refactor` | 重构 | `refactor: 重构时间线数据结构` |
| `chore` | 杂务 | `chore: 更新依赖版本` |

### Pull Request 流程

1. 确保本地 `npm run docs:build` 构建通过
2. 确保内容符合下方的写作规范
3. PR 标题使用提交规范格式
4. PR 描述中说明改动内容和原因
5. 如涉及事实性内容，附上参考来源

---

## 写作规范

### 语言

- **中文为主**，使用现代白话文
- **关键术语保留英文原文**，首次出现时格式为：`中文（English Term）`
  - 例如：感知机（Perceptron）、反向传播（Backpropagation）
- **人名中文优先**，首次出现时格式为：`中文名（English Full Name）`
  - 例如：图灵（Alan Turing）、辛顿（Geoffrey Hinton）
- **有通用中文译名的一律用中文**，不使用纯英文人名
  - 正确：奥特曼（Sam Altman）
  - 错误：Sam Altman

### 引用规范

- 引用论文格式：作者, "标题", 年份
  - 例如：Turing, "Computing Machinery and Intelligence", 1950
- 引用事实时尽量附上来源链接
- 对于有争议的说法，注明不同观点
- 所有章节末尾应有"参考资料"部分

### 文件命名

- 使用小写英文和连字符
- 本纪：`01-dawn.md`、`02-golden-age.md`（两位数字前缀）
- 世家：`openai.md`、`mit-ai-lab.md`
- 列传：`turing.md`、`fei-fei-li.md`
- 书：`neural-networks.md`、`ai-hardware.md`

### 章节标题格式

| 体例 | 标题格式 | 示例 |
|------|---------|------|
| 本纪 | `# 本纪第X · 篇名（时期）` | `# 本纪第一 · 黎明期（1943—1956）` |
| 世家 | `# 世家 · 机构名` | `# 世家 · OpenAI` |
| 列传 | `# 列传 · 中文名（英文名）` | `# 列传 · 图灵（Alan Turing）` |
| 书 | `# 书 · 篇名` | `# 书 · 神经网络兴衰录` |

### Markdown 格式

- `#` 一级标题（文章标题，每篇仅一个）
- `##` 二级标题（章节）
- `###` 三级标题（小节）
- **加粗** 用于关键年份和重要术语
- *斜体* 用于论文和书籍名
- 引用块 `>` 用于章节开头的一句话概括

### 章节必备结构

每篇完整章节应包含以下部分：

```markdown
# 标题

> 一句话概括（引用块）

正文内容...

::: tip 太史公曰
作者的主观评论和感悟。
:::

## 亲历者说

::: info 征集中
如果你了解相关第一手资料，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

- 来源 1
- 来源 2
```

### 各体例模板

**本纪（编年史）**：

```markdown
# 本纪第X · 篇名（时期）

> 一句话概括这个时代

## 核心之争

## 关键事件

### 事件一（年份）

### 事件二（年份）

## 代表性成果

::: tip 太史公曰
评论...
:::

## 亲历者说
...

## 参考资料
```

**列传（人物传记）**：

```markdown
# 列传 · 中文名（English Name）

> 一句话评价

## 生平

## 主要贡献

## 代表性工作

## 历史评价

::: tip 太史公曰
评论...
:::

## 亲历者说
...

## 参考资料
```

**世家（机构史）**：

```markdown
# 世家 · 机构名

> 一句话概括

## 大纲

## 关键人物

::: tip 太史公曰
评论...
:::

## 亲历者说
...

## 参考资料
```

---

## 图片规范

### 版权要求

所有图片必须满足以下条件之一：

- **公共领域（Public Domain）**
- **Creative Commons 许可**（CC0、CC-BY、CC-BY-SA）
- **官方媒体素材**

### 图片目录

```
docs/public/images/
├── people/      # 人物照片
├── events/      # 历史事件
└── companies/   # 机构 logo
```

### 命名规则

- 小写英文 + 连字符：`turing.jpg`、`dartmouth-conference.jpg`
- 建议尺寸：宽度 600-800px
- 格式：JPG 或 PNG

### 提交图片时

- 在 PR 中注明每张图片的来源和许可证
- 更新 `docs/public/images/README.md` 中的图片清单

---

## 数据规范

### 时间线数据

所有时间线事件统一维护在 `docs/.vitepress/data/timeline.ts` 中，首页动画和大事年表页面共用此数据源。

添加新事件时需提供：
- `year`：年份（字符串）
- `event`：事件描述（中文）
- `link`：关联页面路径（可选）

### 配置文件

- 侧边栏导航：`docs/.vitepress/config.ts`
- 主题样式：`docs/.vitepress/theme/styles/`
- 组件：`docs/.vitepress/theme/components/`

修改配置后务必运行 `npm run docs:build` 验证构建通过。

---

## 行为准则

- 保持客观、中立的历史记录态度
- 对人物评价力求公正，呈现多方观点
- 尊重其他贡献者的工作
- 有争议的内容先在 Issue 中讨论
- 不发表人身攻击或歧视性言论
- 不提交虚假或未经验证的信息

---

## 贡献者许可协议（CLA）

通过向本项目提交 Pull Request，你同意以下条款：

1. **你拥有所提交内容的版权**，或已获得必要的授权
2. **你授予项目维护者永久的、全球性的、免费的、不可撤销的许可**，允许其以任何形式使用、复制、修改和分发你提交的内容，包括但不限于：
   - 在本开源项目中以 CC-BY-SA 4.0 许可发布
   - 以纸质书、电子书或其他商业形式出版
   - 翻译为其他语言
3. **你保留你所提交内容的版权**，你仍可以自由使用自己的内容
4. **你理解你的贡献将以 CC-BY-SA 4.0 许可公开**，任何人都可以在遵守该许可的前提下使用

简单来说：你的贡献仍然是你的，但你同意项目可以以任何形式使用它（包括未来可能的商业出版）。你会在出版物中获得署名致谢。

如果你不同意以上条款，请不要提交 Pull Request。你仍然可以通过 Issue 提供建议和纠错，这不受 CLA 约束。

---

## 联系方式

- 邮箱：987835330@qq.com
- GitHub：[@zsjunai](https://github.com/zsjunai)
- Issue：[提交问题](https://github.com/zsjunai/history-of-ai/issues)
