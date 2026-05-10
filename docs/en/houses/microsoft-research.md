# House · Microsoft Research

> A corporate laboratory built on the creed of "letting research grow freely"—it was, for a while, the industrial research institution closest to the spirit of the AT&T era after Bell Labs, and in the AI age it has, in another way, completed its own reinvention.

## Gates's Bell Labs Dream

On September 17, 1991, Bill Gates and Nathan Myhrvold signed papers at Microsoft's headquarters in Redmond, Washington, to found **Microsoft Research** (MSR). The first director was Richard Rashid, formerly chair of computer science at Carnegie Mellon. Gates gave Rashid one simple instruction: "Replicate Bell Labs."

That year, Microsoft was already the king of personal-computer operating systems but was still far from the mainstream of the internet or AI. Gates's bet was that the next round of change in software would require basic research—and that America's basic-research institutions were collapsing (Bell Labs had begun to decline after the 1984 AT&T breakup; Xerox PARC's glory had already faded). If Microsoft did not do it, no one would.

MSR's culture drew deeply on Bell Labs: researchers chose their own problems, were not on the hook for products, and were measured primarily by academic publications. That was unusual for a software company at the time—most companies' research arms were tied to product roadmaps. MSR's commitment to free research turned out to be right: from the late 1990s through the mid-2010s, MSR's publication count was at the top of any industrial research organization.

## MSRA: The Whampoa Academy of Chinese Computer Science

On November 5, 1998, MSR opened its Asia branch in Beijing—**Microsoft Research Asia (MSRA)**. The first director was Kai-Fu Lee, fresh from leaving SGI for Microsoft. His successors included Ya-Qin Zhang, Harry Shum, Hsiao-Wuen Hon, Wang Jian, Yong Rui, and Hon again (multiple terms)—the list itself reads like half the personnel history of early-21st-century Chinese tech.

MSRA was located in the Sigma Center in Zhongguancun, Beijing, and recruited PhD students and young researchers from Tsinghua, Peking University, USTC, Zhejiang University, Shanghai Jiao Tong, and other top schools. It was not a typical "company research department"; it was more like a research university without degrees. Researchers spent about half their time on basic research, publishing at SIGGRAPH, CVPR, ACL, and NeurIPS; the other half on product transformations—Office, Bing, Cortana, Bing Translate, and XiaoIce all benefited.

MSRA alumni later spread across China's AI industry:

- **Kaiming He** (ResNet, Mask R-CNN; MIT professor in 2024)
- **Sun Jian** (joined Megvii in 2018 as chief scientist; passed away in 2022)
- **Tang Xiaoou** (founded SenseTime in 2014)
- **Wang Jian** (joined Alibaba in 2008; founder of Alibaba Cloud)
- **Yong Rui** (CTO of Lenovo from 2017)
- **Yan Shuicheng** (NUS professor; former chief scientist of 360)
- **Ma Weiying** (former head of ByteDance AI Lab)
- **Zhou Ming** (former NLP director at MSRA; CEO of Lanzhou Tech)
- **Li Hang** (ByteDance AI Lab)
- **Lin Dahua** (Chinese University of Hong Kong; Shanghai AI Lab)
- **Harry Shum** (after leaving in 2020, professor at Tsinghua's Institute for Advanced Study)

A saying circulates in the field: "Half of China's AI scene graduated from MSRA." It is no exaggeration—through the 2010s, almost every top deep-learning lab and company in China had MSRA-trained scientists.

## A Golden Age of Vision: The Birth of ResNet

If a single contribution from MSRA had to stand for its impact on AI history, it would be **ResNet** (the residual network).

In December 2015, Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Sun Jian published, on arXiv, *Deep Residual Learning for Image Recognition*. The paper proposed "skip connections"—letting the input of one layer pass directly across several layers to the next, making it possible to train networks far deeper than 100 layers. ResNet-152 won ImageNet 2015 with a top-5 error rate of 3.57%, surpassing the human annotator level (about 5.1%) for the first time.

ResNet won the CVPR 2016 Best Paper Award. More importantly, it became the basic infrastructure of nearly every deep network after 2016—the residual connections of Transformers, the pre-training of BERT, every layer of GPT, the U-Net of diffusion models all borrow or adapt from ResNet's design.

Two years later, in 2017, He's team published Mask R-CNN, which won the ICCV 2017 Best Paper Award. He later left MSRA for Facebook AI Research and in 2024 became a professor at MIT—but ResNet's roots remain in Zhongguancun, Beijing.

## Speech, NLP, and the XiaoIce Era

Beyond vision, MSR/MSRA led for years in speech recognition, natural language processing, and conversational AI.

The speech team led by **Xuedong Huang** announced in October 2016 that its speech-recognition system had reached a 5.9% word error rate on the Switchboard dataset—**matching, for the first time, professional human transcribers**. It was a half-century milestone in pursuit of human-level speech recognition.

**Turing-NLG** (released February 2020) was MSR's own 17-billion-parameter language model, one of the largest Transformers in the world at release, later eclipsed by GPT-3. After that, MSR moved into close partnership with OpenAI; the Turing series gave way to GPT, but MSR kept a sizable internal NLP research presence.

**XiaoIce** (released by MSRA in 2014) was a conversational chatbot positioned around emotional companionship. On Weibo, QQ, and WeChat, she accumulated hundreds of millions of users. She and her more "efficiency-oriented" sister **Cortana** (2014) represented MSR's two pre-LLM understandings of conversational AI: one a friend, one an assistant. In 2020 the XiaoIce team was spun off from MSRA into the standalone XiaoIce Corporation.

## A Deep Bond with OpenAI

On July 22, 2019, Microsoft announced a 1-billion-dollar investment in OpenAI and became its preferred cloud provider. It was one of the most consequential deals in AI history.

Over the following years, the investment was repeatedly increased. Microsoft put in another 2 billion dollars in 2021. In January 2023, after ChatGPT's worldwide wave, Microsoft added 10 billion more—**a cumulative investment of at least 13 billion dollars**. In return, Microsoft secured exclusive commercial license to OpenAI's models, the exclusive contract to train all of GPT on Azure, and a substantial share of OpenAI's future profits.

In February 2023, Microsoft connected Bing to GPT-4 and launched the new Bing (Bing Chat, later renamed Copilot). On March 16, Microsoft 365 Copilot embedded GPT-4 across the Office suite. From November 2023, the Copilot brand became a unifying label across Windows, GitHub, and Azure.

It is the most peculiar period in MSR's history. It went from "pure research" to a "hybrid that partners with the strongest external research lab." MSR's own large-model research was sidelined, but its cloud infrastructure, product integration, and enterprise channels became OpenAI's most important amplifier. The two companies have since lived as a pair of contradictory yet interdependent twin stars.

## GitHub Copilot and the Coding Revolution

On June 29, 2021, GitHub (which Microsoft had acquired in 2018) released the technical preview of Copilot, powered by OpenAI's Codex. It was **the first AI coding assistant to land at scale**, and the ancestor of every later product in the genre (Cursor, Cody, Windsurf, and so on).

Copilot brought AI directly into a programmer's daily flow: in VSCode it completes code in real time, generates functions, and explains errors. By 2024 Microsoft disclosed that Copilot had more than a million paying users and was estimated to be assisting on roughly 40% of new code globally. Copilot proved something important: AI does not have to replace humans; it just has to become humanity's best partner.

## GitHub, LinkedIn, and Microsoft AI

Beyond MSR and MSRA, several parallel AI forces operate inside Microsoft:

- **GitHub** (acquired in 2018 for 7.5 billion dollars; the incubator of Copilot)
- **LinkedIn** (acquired in 2016 for 26.2 billion; large-scale user-behavior data and recommendation research)
- **Microsoft AI** (a new business unit founded in March 2024 under former DeepMind co-founder Mustafa Suleyman to lead consumer AI products like Copilot)
- **Azure AI** (cloud infrastructure hosting OpenAI / Mistral / Hugging Face and other models)

In 2024 Microsoft brought in Suleyman and his team from Inflection AI, signaling its determination to build independent AI capability beyond OpenAI—because the strategic risk of over-dependence on a single partner had been exposed during the five days in November 2023 when Altman was fired by the OpenAI board.

## Microsoft Research Today

By 2026, MSR runs eight labs around the world (Redmond, New York, Cambridge, Beijing, Bangalore, Montreal, Brazil, Herzliya), with about a thousand researchers in total. MSRA Beijing, despite occasional rumors of restructuring after U.S.-China tech tensions sharpened in 2019, remains one of Microsoft's most important research nodes globally.

MSR's mode of contribution is no longer what it was before 2015. It no longer aims to be "the industrial lab with the most papers"; instead, it makes key investments in AI infrastructure, safety research, multimodality, agents, and AI for Science. The Nadella-era Microsoft no longer treats research as "research for research's sake"; it asks "research that serves the product"—a cultural turn that has cost MSR some of its golden-age romance and kept it pragmatically central in the large-model era.

::: tip Historian's Note
Microsoft Research's thirty-five years are a second growth of an industrial research organization. It was founded as "another Bell Labs" and lived through the 2000s with a rare degree of academic freedom inside a publicly traded company; in the AI wave it then completed its turn from "doing it ourselves" to "doing it together." The deep bond with OpenAI is at once strategic foresight and a partial admission that "we cannot build ChatGPT alone." MSRA Beijing is a special case among special cases: an American tech giant that, in the early years of the twenty-first century, trained an entire generation of AI talent for China—something hardly reproducible in today's geopolitics. Historical accident and corporate shrewdness together built this institute. Its largest legacy is not a paper or two but a proof: **an industrial research organization can be both profitable and free, as long as the company truly believes in basic research.**
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at Microsoft Research or MSRA, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Microsoft (1991). "Microsoft Research: Inception and Early History."
2. Lee, K. F. (2018). *AI Superpowers: China, Silicon Valley, and the New World Order*. Houghton Mifflin Harcourt.
3. He, K., Zhang, X., Ren, S., & Sun, J. (2016). "Deep Residual Learning for Image Recognition." *CVPR 2016*.
4. He, K. et al. (2017). "Mask R-CNN." *ICCV 2017*.
5. Xiong, W. et al. (2017). "The Microsoft 2017 Conversational Speech Recognition System." Microsoft Research Technical Report.
6. Microsoft (2020). "Turing-NLG: A 17-Billion-Parameter Language Model."
7. Microsoft (2023). "Microsoft Extends Partnership with OpenAI."
8. GitHub (2021). "Introducing GitHub Copilot: Your AI Pair Programmer."
9. Microsoft (2024). "Introducing Microsoft AI and Mustafa Suleyman as CEO."
10. Greene, T. (2018). "Inside MSRA: China's AI Talent Factory." *The Next Web*.
11. Zhang, Y.-Q. (2024). *Intelligence · Emergence: The Story of Microsoft Research Asia* [智能·涌现：微软亚洲研究院的故事]. CITIC Press.
