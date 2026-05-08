# 世家 · ICOT（新世代计算机技术开发机构）

> 五百四十亿日元、十年国运、一支由日本最聪明的工程师组成的队伍——他们押下重注，要造一台"会思考"的机器；当门关上的那天，世界已悄然走向了另一条路。

## 一、东京 1981：一份惊动世界的宣言

1981 年 10 月 19 日至 22 日，东京。日本通商产业省（MITI，通産省）召开"第五代计算机系统国际会议"（International Conference on Fifth Generation Computer Systems），向全球发布了一份野心惊人的白皮书。

撰稿人是东京大学教授元冈达（Tohru Moto-oka），他主持的"第五代计算机系统调查委员会"自 1979 年起酝酿了三年。报告称，自电子管、晶体管、集成电路、超大规模集成电路（VLSI）以来，计算机已经历四代；下一代——第五代——将不再以速度为唯一指标，而要"能推理、能学习、能与人类自然对话"。

换言之，让计算机走进**知识信息处理**（Knowledge Information Processing，KIPS）的时代。这是日本对未来三十年算力世界的总押注。

通产省给出了配套：十年国家级计划、约 540 亿日元（按当时汇率约 4.5 亿至 8.5 亿美元，常见说法是 4.5 亿美元起步）、由八家电脑厂商（富士通、日立、NEC、东芝、三菱电机、冲电气、松下、夏普）联合派员组队。

世界为之震动。日本汽车与半导体已经把美国压得喘不过气，如今又要在计算机最高端领域弯道超车。

在那个 IBM 主机统治商业计算、DEC VAX 主导科研、Cray 垄断超算的世界里，日本的提议不仅是技术挑战，更是产业结构的颠覆——它要绕开整个美国生态另起一座城。这是 1981 年东京国际会议背后真正的赌局。

## 二、ICOT 的成立与渕一博

1982 年 4 月，**新世代计算机技术开发机构**（Institute for New Generation Computer Technology，简称 ICOT）在东京三田 Mita Kokusai Building 22 楼正式挂牌，成为第五代计划的核心执行机构。

首任所长是 51 岁的<Person id="fuchi" />（Kazuhiro Fuchi），从通产省下属的电子技术综合研究所（ETL，電子技術総合研究所）调来。渕一博是个不寻常的人物——他相信计算机科学需要一支独立、年轻、敢冒险的队伍。

他以"四十岁以下"为原则，从八家公司借调约 40 位青年研究员入驻 ICOT，让他们摆脱母公司层级，自由组队。新人的脑子，旧产业的财力——这是日本"举国体制"在科研上的一次极致实验。

研究方向几乎是一锤定音：押注**逻辑编程**（logic programming）作为下一代计算的语义基础。这条路的源头，是<Person id="kowalski" /> 在 1974 年提出的"逻辑作为编程语言"思想，与<Person id="colmerauer" /> 在马赛大学开发的 **Prolog**。

在渕一博看来，Prolog 让程序更接近"声明式知识"，是机器走向推理与学习的最短路径。彼时美国 AI 主流是 LISP；日本要走另一条道。

## 三、技术蓝图：PIM、KL1 与 PSI

ICOT 把十年拆成三段——前期（1982–1984）打基础、中期（1985–1988）造原型、后期（1989–1992）系统集成。技术核心有三件事。

**第一件，并行推理机**（Parallel Inference Machine，PIM）。ICOT 不要做 LISP 机的复刻，要做一台天生为逻辑推理而生的硬件。它先后开发了 PSI（Personal Sequential Inference Machine，个人顺序推理机）作为开发工作站——PSI-I（1983）、PSI-II（1986）、PSI-III（1990）——再以多机互联走向并行。

PIM 系列原型机最终造出 PIM/m、PIM/p、PIM/c、PIM/k、PIM/i 五种架构，最大规模的 PIM/p 集成了 512 个处理元件，每秒可执行约两亿次逻辑推理（LIPS）。这在 1990 年代初是全球罕见的成就。

**第二件，并行逻辑语言 KL1**（Kernel Language 1）。它的理论基础是 1980 年代由日本人上田和夫（Kazunori Ueda）提出的 **GHC**（Guarded Horn Clauses，守卫霍恩子句），一种把 Prolog 改造成可并行执行的语义。KL1 既是 PIM 的机器语言，也是 ICOT 内部所有上层应用的开发语言——这意味着整套软件栈，从操作系统 PIMOS 到知识库管理，都要用 KL1 写一遍。

**第三件，知识信息处理应用**。ICOT 设想 KIPS 能做自然语言对话、定理证明、专家系统、机器翻译、法律推理。十年间它确实造出多个原型：法律推理系统 HELIC、蛋白质结构分析系统、围棋对弈程序，以及与日本国立国语研究所合作的语言处理系统。

这套蓝图最大的赌博，是相信**知识可以用一阶逻辑写下来**——只要语言够好、机器够快，机器就能像人一样推理。这是一份属于哥德尔、丘奇、罗素以来逻辑学派的绝唱。也正是这份绝唱，让 ICOT 几乎与 1980 年代末崛起的概率方法、神经网络方法完全擦肩。

## 四、世界的回响：一场"AI 冷战"

ICOT 之所以载入史册，不止因为它自己做了什么，更因为它**逼出了别人**。

1982 年报告刚一发布，美国陷入"日本恐慌"。1983 年，DARPA 启动 **Strategic Computing Initiative**（战略计算倡议），十年投入 10 亿美元，押注 AI 与并行计算。同年美国微电子与计算机技术联合体（**MCC**，Microelectronics and Computer Technology Corporation）在德州奥斯汀成立，由前海军上将 Bobby Inman 主持，二十余家美国公司联合出资抗衡日本。

<Person id="feigenbaum" /> 与帕梅拉·麦考达克（Pamela McCorduck）合著《第五代》（*The Fifth Generation*，1983），书中疾呼："我们正在输掉一场新的工业战争。"

英国 1983 年启动 **Alvey Programme**，五年投入 3.5 亿英镑，部分回应是为反驳 1973 年莱特希尔报告对 AI 的悲观结论。欧洲共同体 1984 年启动 **ESPRIT** 计划，IT 与 AI 一并纳入。一时间，全球各大经济体都在喊"AI 国家工程"。

**这是 AI 史上第一次冷战式的国际竞赛，由日本一国点燃。**

讽刺的是，日本一开始就邀请世界各国共享研究成果——ICOT 的会议每年公开召开、研究报告免费发放、源代码后期全部开源。但西方各国的回应是建立各自的封闭体系。日本以为是发起一场学术运动，结果点燃了一场国家工业战争。这是 1980 年代东西方科技博弈的一个缩影。

## 五、1992：当门关上的那天

1992 年 6 月，ICOT 召开第二届第五代计算机国际会议，公开总结成果。1993 年计划正式结束，部分研究转入后续的"实数计算"（Real World Computing）项目。

技术上，ICOT 完成了相当多目标：PIM 系列硬件成功运行、KL1 编译器成熟、PIMOS 操作系统可用、超过 1 亿行 KL1 代码被沉淀下来、培养了一批顶级研究者。最后一批 PIM 机被无偿赠送给世界各地高校，软件以 ICOT Free Software License 开源。

但用最初的尺度衡量——能推理、能学习、能自然对话的"会思考机器"——计划失败了。商业化几乎为零。计算机产业并未"换代"。失败的原因，事后看来，是路线问题。

**一是押错赛道**。ICOT 把全部赌注押在逻辑推理上，恰好错过了 1980 年代末连接主义的复兴（<Person id="rumelhart" />、<Person id="hinton" />、<Person id="williams_rj" /> 1986 年的反向传播论文）和 1990 年代统计学习的崛起（<Person id="vapnik" />、<Person id="breiman" /> 等）。当 ICOT 还在精雕 KL1 时，IBM 沃森研究中心已经在用统计模型做机器翻译，CMU 已经在用 HMM 做语音识别。

这不是事后诸葛亮——1980 年代中期，连接主义复兴的迹象已经出现，但 ICOT 的内部架构没有为路线切换留出余地。一旦五百多人的团队、五种硬件架构、上亿行 KL1 代码全部锁定在 Prolog 范式里，调头的成本就高过另起炉灶。

**二是通用计算机太快**。ICOT 启动那年，Intel 80286 刚出；到 1992 年 Pentium 已经在路上；Sun、SGI 工作站在 LISP/C 生态里高速演进。专用推理硬件的性价比优势被通用 CPU + 编译器优化迅速吞没——这是 LISP 机消亡的同样剧本，只不过日本版更壮观。

**三是专家系统泡沫破裂**。1987 年 LISP 机市场崩溃，1988–1993 年第二次 AI 寒冬席卷全球，知识工程的商业承诺无法兑现。ICOT 站在了浪潮回落的那一面，再多投入也救不回。

事后看，1981 年的方向选择并非愚蠢——那是当时学界的主流共识。错的是十年没有拐弯。

## 六、遗产与教训

ICOT 没有成为日本计算机崛起的台阶，反成了日本 AI 黄金时代的纪念碑。

技术遗产是真实的：并行计算研究在日本扎根；上田和夫的 GHC 思想流入到 Concurrent Prolog、Erlang、Oz 等并发语言的源流；ICOT 培养的研究者后来散布日本各大高校与企业，是平成时代日本计算机科学的中坚。开源的 ICOT Free Software 在 1990 年代被全球研究者使用了很多年。

但更深的教训是关于**国家工程的边界**。自上而下、单一路线、重型预算的模式，在路线正确时（如同期的 VLSI 工程）可以奏效；一旦押错方向，体量越大转身越难。ICOT 十年里几乎没有重大方向调整，因为整个组织、硬件、语言、应用都焊死在 Prolog 范式上。

更长远的代价是日本错过了深度学习时代。2012 年之后，AI 的中心是美国与中国，日本至今未能在大模型、大数据、大算力上重新站上第一梯队。当人们今天追问"日本为何在 AI 上落后"时，答案的一部分要回到 1981 年东京那场轰动世界的发布会——一次最大胆的押注，也是最深远的迷途。

## 七、渕一博的回望

1992 年计划结束后，渕一博回忆道："我们也许没有到达终点，但我们让世界相信，思考的机器是值得追求的。"他于 2007 年去世，享年 71 岁。日本信息处理学会设立了"渕一博奖"以纪念这位 ICOT 之父。

ICOT 的旧址早已物是人非。然而每当后来的研究者重读 1981 年那份白皮书，仍会被它的雄心打动——在那个尚无互联网、无 GPU、无大数据的年代，一群东京的工程师，敢于以举国之力，正面回答"机器能否思考"这个图灵留下的问题。

他们答错了路径，但问题问得郑重。这是一个产业大国在 AI 上少有的、不计回报的浪漫——值得后人记得。

## 八、ICOT 之外：一段被遗忘的并行支线

很多人不知道的是，ICOT 在并行计算硬件上的工程能力，相当一段时间领先世界。

PIM/p 架构每个处理元件配置 1.5MB 高速缓存与独立浮点单元，节点间通过自研的 256MB/s 多级互连网络通信，整机峰值约 100 万 LIPS——这是 1990 年代初少有的非美国并行机标杆。同期美国的 CM-5（Connection Machine）走的是数据并行路线，针对数值计算；PIM 则是为符号推理设计，两者几乎没有重叠的应用场景。

PIMOS 操作系统更是一个被低估的成就——一个完全用 KL1 写成的并行操作系统，支持任务调度、垃圾回收、分布式 I/O，全部基于守卫霍恩子句的并发语义。今天看来仍是异类，但在那个 Unix 一统天下的时代，它证明了"另一种操作系统"的可能性。

ICOT 在 1992 年的最终演示里，PIM 跑过的几个最深印象的应用：基于宪法条文的法律推理、约 2 万个英日术语的双向翻译、对 200 万碱基的蛋白质序列对齐——每一项在当年都是同类系统中最大规模的之一。技术上它没有失败，是世界换了赛道。

ICOT 还派出研究员遍访世界——Robert Kowalski 多次访问东京，伦敦帝国理工学院的研究者长期与 ICOT 合作。它是 1980 年代连接东亚 AI 学界与西方学界的最重要枢纽之一。这部分软实力，至今没有被任何后续的日本国家计划完全继承。

更值得记下的，是 ICOT 培养出来的人——上田和夫后来成为东京大学计算机科学的领军人物；古川康一推动了知识图谱与本体研究在日本的发展；中岛秀之、新田克己、井上克巳等一批研究者构成了平成时代日本 AI 学术的中坚。一个国家计划能否真正成功，看的不是十年报告，而是三十年后这些人还在不在做事。这一点，ICOT 算是赢了。

::: tip 太史公曰
ICOT 之于人工智能，犹楚汉之际之项羽——力拔山兮气盖世，然时不利兮骓不逝。日本以一国之力押下十年豪赌，技术上自成一家，气势上震动列强，却终究输给了趋势——逻辑推理被统计学习赶超，专用硬件被通用 CPU 反扑，集中规划被分布创新击溃。其失非智不及，而是路不对；其败非工不精，而是天时不与。然而 ICOT 留下的并非全然是教训：它点燃了西方各国的 AI 国家计划，培养了一代日本计算机学者，让世界看到东方也敢于回答图灵之问。后人若再设国之大工程于科技前沿，当读 ICOT 一遍，再读一遍——盖一国之力可以加速正确的路，却挽救不了错误的路；唯持续校准方向，方为智者。
:::

## 亲历者说

::: info 征集中
如果你曾在 ICOT、ETL 或第五代计算机相关项目工作，欢迎[提交贡献](https://github.com/zsjunai/history-of-ai)。
:::

## 参考资料

1. Moto-oka, T. (Ed.). (1982). *Fifth Generation Computer Systems: Proceedings of the International Conference on Fifth Generation Computer Systems*. North-Holland.
2. Feigenbaum, E. A., & McCorduck, P. (1983). *The Fifth Generation: Artificial Intelligence and Japan's Computer Challenge to the World*. Addison-Wesley.
3. Fuchi, K. (1984). "Revisiting Original Philosophy of Fifth Generation Computer Systems Project." *Proceedings of the International Conference on FGCS 1984*.
4. Ueda, K. (1986). "Guarded Horn Clauses." Doctoral Dissertation, University of Tokyo; ICOT Technical Report TR-103.
5. Shapiro, E. (1989). "The Family of Concurrent Logic Programming Languages." *ACM Computing Surveys*, 21(3), 413–510.
6. Uchida, S., & Fuchi, K. (1992). *Proceedings of the FGCS '92 Workshop on Evaluation of ICOT Project*. ICOT.
7. Pollack, A. (1992). "'Fifth Generation' Became Japan's Lost Generation." *The New York Times*, June 5, 1992.
8. Sergot, M. (1993). "The Japanese Fifth Generation Computer Project: A Postmortem." *AI Communications*, 6(2).
9. Furukawa, K. (2000). "The Fifth Generation Project: Personal Perspectives." *Communications of the ACM*, 43(3), 48–54.
10. Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. Basic Books, Chapter 9.
11. Odagiri, H., Nakamura, Y., & Shibuya, M. (1997). "Research Consortia as a Vehicle for Basic Research: The Case of a Fifth Generation Computer Project in Japan." *Research Policy*, 26(2), 191–207.
