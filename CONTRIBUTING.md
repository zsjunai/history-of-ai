# 贡献指南 Contributing Guide

感谢你对本项目的关注！以下是参与贡献的指南。

## 如何贡献

### 纠错 Corrections

如果你发现事实错误、时间线偏差或其他问题：

1. 打开一个 [Issue](../../issues/new?template=correction.md)，描述错误和正确的信息
2. 或直接提交 Pull Request 修正

### 内容建议 Suggestions

如果你想建议新的内容（人物、事件、专题等）：

1. 打开一个 [Issue](../../issues/new?template=suggestion.md) 描述你的建议
2. 讨论通过后，可以动手撰写

### 直接贡献 Direct Contribution

1. Fork 本仓库
2. 创建你的分支：`git checkout -b feat/your-topic`
3. 撰写或修改内容
4. 提交 Pull Request

## 写作规范

### 语言

- **中文为主**，使用现代白话文
- **关键术语保留英文原文**，首次出现时格式为：`中文（English Term）`
  - 例如：感知机（Perceptron）、反向传播（Backpropagation）
- 人名首次出现时格式为：`中文名 英文全名`
  - 例如：图灵 Alan Turing、辛顿 Geoffrey Hinton

### 引用规范

- 引用论文时注明：作者、标题、年份
  - 例如：Turing, "Computing Machinery and Intelligence", 1950
- 引用事实时尽量附上来源链接
- 对于有争议的说法，注明不同观点

### 文件命名

- 使用小写英文和连字符：`01-dawn.md`、`turing.md`
- 本纪章节以两位数字开头：`01-`、`02-`...

### Markdown 格式

- 使用 `#` 作为文章标题（一级标题）
- 使用 `##` 作为章节标题
- 使用 `###` 作为小节标题
- 关键年份使用 **加粗**
- 论文和书籍名使用 *斜体*

### 章节结构

**本纪（编年史）**模板：

```markdown
# 标题

> 一句话概括这个时代

## 时代背景

## 关键事件

### 事件一（年份）

### 事件二（年份）

## 代表性成果

## 时代总结

## 参考资料
```

**列传（人物传记）**模板：

```markdown
# 人名 英文名

> 一句话评价

## 生平

## 主要贡献

## 代表性工作

## 历史评价

## 参考资料
```

## 行为准则

- 保持客观、中立的历史记录态度
- 对人物评价力求公正，呈现多方观点
- 尊重其他贡献者的工作
- 有争议的内容先在 Issue 中讨论

## 本地开发

```bash
npm install
npm run docs:dev
```

修改后在浏览器中预览确认无误再提交。
