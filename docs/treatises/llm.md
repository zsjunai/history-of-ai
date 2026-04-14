# 书 · 大语言模型

> 从 GPT-1 的 1.17 亿参数到 GPT-4 的万亿级参数，大语言模型在五年内从实验室的好奇心变成了改变世界的力量。这是 AI 历史上最快的范式革命。

::: warning 待完善
本章节尚待撰写，欢迎[参与贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 大纲

### 一、前传：语言模型的演进

- n-gram 语言模型：用统计方法预测下一个词
- 神经网络语言模型：本吉奥（Yoshua Bengio）的开创性工作（2003）
- Word2Vec（2013）：词向量革命，"国王 - 男人 + 女人 = 女王"
- ELMo（2018）：上下文相关的词表示

### 二、Transformer 的诞生

- "Attention Is All You Need"（2017）：八位 Google 研究员的论文
- 自注意力机制（Self-Attention）：为什么它比 RNN/LSTM 更好
- 编码器-解码器架构的分裂：
  - 编码器路线 → BERT（Google, 2018）
  - 解码器路线 → GPT（OpenAI, 2018）
  - 编码器-解码器路线 → T5（Google, 2019）

### 三、规模定律与涌现

- GPT-1（2018）：1.17 亿参数，证明生成式预训练可行
- GPT-2（2019）：15 亿参数，OpenAI 以"太危险"为由延迟发布
- GPT-3（2020）：1750 亿参数，少样本学习（Few-Shot Learning）震惊学界
- 规模定律（Scaling Laws）：Kaplan 等人的发现——更大的模型 + 更多的数据 = 更好的性能
- 涌现能力（Emergent Abilities）：模型达到一定规模后突然出现的能力
- Chinchilla 定律（2022）：DeepMind 证明数据量同样重要，不只是模型大

### 四、ChatGPT 时刻

- InstructGPT（2022）：用 RLHF 让模型学会"听话"
- ChatGPT（2022.11.30）：产品化的突破，两个月破亿用户
- 为什么 ChatGPT 成功了：不是最强的模型，而是最好的产品体验
- ChatGPT 引发的全球连锁反应：投资暴增、人才争夺、监管恐慌

### 五、GPT-4 与多模态

- GPT-4（2023.3）：多模态能力，看图说话
- 从语言模型到多模态模型：文本、图像、音频、视频的统一
- GPT-4V、GPT-4o：越来越像"全能"的 AI 助手
- Claude 3（2024）：Anthropic 的竞争，长上下文能力
- Gemini（Google）：从 PaLM 到 Gemini 的整合

### 六、推理能力的突破

- 思维链（Chain-of-Thought, CoT）提示：让模型"一步步思考"
- OpenAI o1（2024）：推理时计算（Test-Time Compute），用更多推理时间换更好结果
- DeepSeek-R1（2025）：用强化学习训练推理能力，成本远低于 o1
- 推理 vs 直觉：LLM 真的在"思考"还是在模拟思考的模式？

### 七、全球大模型竞赛

#### 美国
- OpenAI：GPT 系列，商业化最成功
- Anthropic：Claude 系列，安全优先
- Google：Gemini 系列，搜索 + AI 整合
- Meta：LLaMA 系列，开源路线

#### 中国
- 百度文心一言：中国最早发布的大模型产品
- 阿里通义千问：开源最积极的中国大模型
- 智谱 ChatGLM：清华系，学术界广泛使用
- DeepSeek：低成本高性能，R1 模型全球震动
- 月之暗面 Kimi：长上下文能力突出
- MiniMax：多模态和语音交互
- 字节跳动豆包：用户规模增长最快

#### 欧洲
- Mistral（法国）：小团队高效率的典范

### 八、LLM 的局限与批评

- 幻觉（Hallucination）：自信地编造事实
- 推理的脆弱性：换个说法就可能出错
- 数据污染：训练数据的版权争议
- 能耗与环境成本
- 杨立昆的批评："LLM 永远无法达到人类智能"
- LLM 是通往 AGI 的路还是歧途？

### 九、LLM 的应用生态

- AI 编程助手：GitHub Copilot、Cursor、Claude Code
- AI 搜索：Perplexity、SearchGPT
- AI Agent：从对话到自主行动
- RAG（检索增强生成）：让 LLM 接入外部知识
- 企业级应用：客服、文档处理、代码审查

## 参考资料

待补充
