# House · ICOT (Japan's Fifth Generation)

> Fifty-four billion yen, ten years of national fortune, a team of Japan's brightest engineers—they placed a heavy bet to build a "thinking" machine. By the day the door closed, the world had quietly turned onto a different road.

## Tokyo, 1981: A Manifesto That Shook the World

From October 19 to 22, 1981, the Japanese Ministry of International Trade and Industry (MITI, 通産省) convened the "International Conference on Fifth Generation Computer Systems" in Tokyo and released a stunning white paper to the world.

Its drafter was Tokyo University professor Tohru Moto-oka, who had chaired the "Fifth Generation Computer Systems Investigation Committee" since 1979. The report argued that since vacuum tubes, transistors, integrated circuits, and very-large-scale integration (VLSI), computers had passed through four generations; the next—the fifth—would no longer take speed as its sole metric, but be able to "reason, learn, and converse naturally with humans."

In other words, computers would enter the era of **knowledge information processing (KIPS)**. It was Japan's all-in bet on the next thirty years of compute.

MITI provided the matching commitment: a ten-year national plan, around 54 billion yen (about $450 million to $850 million at the time, with $450 million the most cited starting figure), with personnel seconded from eight computer makers (Fujitsu, Hitachi, NEC, Toshiba, Mitsubishi Electric, Oki, Matsushita, Sharp).

The world was startled. Japanese cars and semiconductors were already pinning America to the wall, and now Japan proposed to leapfrog at the highest end of computing.

In a world ruled by IBM mainframes in commercial computing, DEC VAX in research, and Cray in supercomputing, Japan's proposal was not only a technical challenge but a structural disruption—it would build a city outside the entire American ecosystem. That was the real wager behind the 1981 Tokyo conference.

## The Founding of ICOT and Kazuhiro Fuchi

In April 1982, the **Institute for New Generation Computer Technology (ICOT)** opened in the Mita Kokusai Building, 22nd floor, in Tokyo, as the central executor of the Fifth Generation plan.

Its first director was 51-year-old **Kazuhiro Fuchi (1936–2007)**, who came over from MITI's Electrotechnical Laboratory (ETL, 電子技術総合研究所). Fuchi was an unusual figure—he believed computer science required an independent, young, daring team.

Following the principle of "under forty," he seconded about 40 young researchers from the eight companies into ICOT, freeing them from their parent companies' hierarchies to form new teams. New brains, old industrial money—an extreme experiment in Japan's "national mobilization" approach to science.

The research direction was set with a single hammer blow: bet on **logic programming** as the semantic foundation of next-generation computing. The line traces to **Robert Kowalski (1941–)**'s 1974 idea of "logic as a programming language," and to **Alain Colmerauer (1941–2017)**'s **Prolog** at the Université d'Aix-Marseille.

In Fuchi's view, Prolog brought programs closer to "declarative knowledge"—the shortest path from machine to reasoning and learning. American AI's mainstream then was LISP; Japan would walk another road.

## The Technical Blueprint: PIM, KL1, and PSI

ICOT split the decade into three phases—foundation (1982–1984), prototypes (1985–1988), and system integration (1989–1992). Three things sat at the technical core.

**First, the Parallel Inference Machine (PIM)**. ICOT did not want to clone LISP machines; it wanted a hardware platform born for logical inference. It developed **PSI** (Personal Sequential Inference Machine) as a development workstation—PSI-I (1983), PSI-II (1986), PSI-III (1990)—and from there built parallel architectures by linking multiple machines.

The PIM family eventually produced five architectures: PIM/m, PIM/p, PIM/c, PIM/k, and PIM/i. The largest, PIM/p, integrated 512 processing elements and could execute about two hundred million logical inferences per second (LIPS). In the early 1990s this was a rare feat globally.

**Second, the parallel logic language KL1** (Kernel Language 1). Its theoretical basis was **GHC (Guarded Horn Clauses)**, a 1980s reframing by Japan's Kazunori Ueda that made Prolog parallelizable. KL1 served as both PIM's machine language and the development language for all higher-level applications inside ICOT—meaning the entire stack, from the PIMOS operating system to knowledge-base management, was rewritten in KL1.

**Third, knowledge information processing applications**. ICOT envisioned KIPS supporting natural-language dialogue, theorem proving, expert systems, machine translation, and legal reasoning. Across the decade it produced multiple prototypes: the legal reasoning system HELIC, a protein structure analysis system, a Go-playing program, and a language processing system co-built with the National Institute for Japanese Language and Linguistics.

The biggest gamble in this blueprint was the belief that **knowledge could be written in first-order logic**—that with sufficient language and speed, the machine would reason like a human. It was a swan song of the logical school running back through Gödel, Church, and Russell. Precisely because of that swan song, ICOT brushed past the late-1980s rise of probabilistic methods and neural networks.

## The World Responds: An "AI Cold War"

ICOT entered history not only for what it did, but for what it **forced others to do**.

In 1982, immediately after the report, the United States was gripped by "Japan panic." In 1983, DARPA launched the **Strategic Computing Initiative**, a ten-year, $1 billion bet on AI and parallel computing. In the same year, the Microelectronics and Computer Technology Corporation (**MCC**) was founded in Austin, led by former Admiral Bobby Inman, with two dozen U.S. companies pooling money to counter Japan.

**Edward Feigenbaum (1936–)** and Pamela McCorduck co-authored *The Fifth Generation* (1983), warning, "We are losing a new industrial war."

The UK launched the **Alvey Programme** in 1983, with £350 million over five years, partly as a rebuttal to the 1973 Lighthill Report's pessimism on AI. The European Community launched **ESPRIT** in 1984, lumping IT and AI together. For a moment, every major economy chanted "national AI engineering."

**It was the first Cold-War-style international race in AI history—lit by a single nation, Japan.**

The irony: Japan had invited the world to share the research from the start—ICOT's conferences were public each year, reports were free, and source code was eventually open-sourced. The West responded by building closed counterparts. Japan thought it was kindling an academic movement; it had instead lit a national industrial war. It is a vignette of 1980s East–West technology rivalry.

## 1992: The Day the Door Closed

In June 1992, ICOT held the second International Conference on Fifth Generation Computer Systems and publicly summarized its outcomes. The plan formally ended in 1993, with some research transferred into the follow-up "Real World Computing" project.

Technically, ICOT met many goals: the PIM family ran successfully, the KL1 compiler matured, the PIMOS operating system was usable, more than a hundred million lines of KL1 code were deposited, and a generation of top researchers was trained. The last batch of PIM machines was donated to universities worldwide; the software was open-sourced under the ICOT Free Software License.

But measured against the original yardstick—a "thinking machine" that could reason, learn, and converse naturally—the plan failed. Commercialization was nearly nil. The computing industry did not "change generation." The reasons, in retrospect, were about path.

**First, the wrong track.** ICOT bet everything on logical inference and missed the late-1980s connectionist revival (the 1986 backpropagation paper by **David Rumelhart (1942–2011)**, **Geoffrey Hinton (1947–)**, and **Ronald Williams (1948–)**) and the 1990s rise of statistical learning (**Vladimir Vapnik (1936–)**, **Leo Breiman (1928–2005)**). While ICOT was polishing KL1, IBM Watson was already doing statistical machine translation, and CMU was using HMMs for speech recognition.

This is not hindsight. By the mid-1980s the signs of a connectionist revival were visible, but ICOT's internal architecture left no room for a route change. Once over five hundred people, five hardware architectures, and tens of millions of lines of KL1 code were locked into the Prolog paradigm, the cost of turning exceeded the cost of starting over.

**Second, general-purpose computers were too fast.** When ICOT began, the Intel 80286 was new; by 1992 the Pentium was on its way; Sun and SGI workstations evolved at high speed within the LISP/C ecosystem. The price-performance edge of dedicated inference hardware was eaten by general-purpose CPUs and compiler advances—the same script that killed LISP machines, only on a more spectacular Japanese stage.

**Third, the expert-systems bubble burst.** The LISP-machine market collapsed in 1987; the second AI winter swept the world from 1988 to 1993. Knowledge engineering's commercial promises could not be cashed. ICOT stood on the receding wave and could not be saved by more spending.

In hindsight, the 1981 direction was not foolish—it was the academic mainstream's consensus then. The error was to spend a decade without turning.

## Legacy and Lessons

ICOT did not become the staircase to a Japanese rise in computing; it became a monument to Japan's golden age of AI.

The technical legacy is real: parallel computing took root in Japan; Ueda's GHC ideas flowed into Concurrent Prolog, Erlang, Oz, and the broader concurrent-language tradition; ICOT-trained researchers spread across Japan's top universities and companies and became the backbone of computer science in the Heisei era. The open-sourced ICOT Free Software was used by global researchers for many years through the 1990s.

But the deeper lesson is about **the limits of national engineering**. Top-down, single-route, heavyweight-budget programs work when the route is right (as in contemporaneous VLSI). Once the route is wrong, the larger the body, the harder it is to turn. ICOT made almost no major direction adjustment over a decade, because the entire organization, hardware, language, and applications were welded to the Prolog paradigm.

The longer-term cost is that Japan missed the deep-learning era. After 2012, AI's center moved to the U.S. and China; Japan has yet to return to the top tier in large models, big data, or big compute. When people ask today why Japan fell behind in AI, part of the answer leads back to the 1981 Tokyo conference—the boldest bet, and the deepest wrong turn.

## Fuchi Looks Back

After the plan ended in 1992, Fuchi reflected: "We may not have arrived at the destination, but we made the world believe that thinking machines were worth pursuing." He passed away in 2007, age 71. The Information Processing Society of Japan established the "Fuchi Award" in his honor—the father of ICOT.

The old ICOT site has long since changed hands. Yet whenever later researchers reread the 1981 white paper, they are still moved by its ambition—in an age without internet, without GPUs, without big data, a group of Tokyo engineers dared to mobilize national resources to face Turing's question of "can machines think?"

They answered with the wrong path, but the question was asked seriously. It was a rare romance—a great industrial nation putting itself on the line for AI, with no expectation of return. It deserves to be remembered.

## Beyond ICOT: A Forgotten Parallel Branch

What many people do not know is that ICOT's engineering capability in parallel computing led the world for a meaningful stretch.

Each PIM/p processing element carried 1.5 MB of cache and an independent FPU; nodes communicated over a multi-stage interconnect built in-house at 256 MB/s; peak performance reached about one million LIPS—a rare non-American parallel-machine benchmark in the early 1990s. The contemporary American CM-5 (Connection Machine) took the data-parallel route for numerical computing; PIM was designed for symbolic inference. The two had almost no overlapping applications.

PIMOS is an underrated achievement—a parallel operating system written entirely in KL1, supporting task scheduling, garbage collection, and distributed I/O, all on the concurrent semantics of guarded Horn clauses. Even today it is an outlier; in a Unix-dominant era, it proved the possibility of "another kind of operating system."

Among ICOT's most memorable applications at the 1992 demos: legal reasoning over constitutional text; bidirectional translation of about 20,000 English-Japanese terms; sequence alignment over 2 million bases of protein. Each was among the largest of its kind that year. The technology did not fail; the world simply switched racetracks.

ICOT also dispatched researchers around the world—Robert Kowalski visited Tokyo many times; researchers at Imperial College London collaborated with ICOT for years. It was one of the most important hubs connecting East Asian and Western AI in the 1980s. That soft-power layer has not been fully inherited by any later Japanese national plan.

Even more worth remembering are the people ICOT trained—Kazunori Ueda became a leading figure in computer science at the University of Tokyo; Koichi Furukawa pushed knowledge graphs and ontology research in Japan; Hideyuki Nakajima, Katsumi Nitta, Katsumi Inoue, and others form the backbone of Heisei-era Japanese AI academia. Whether a national plan succeeds in the long run is measured not in ten-year reports but in whether those people are still working three decades on. On that measure, ICOT won.

::: tip Historian's Note
ICOT is to AI what Xiang Yu was to the Chu-Han contention—mighty in strength, towering in spirit, yet defeated by tides not in favor. Japan staked a single nation's resources on a decade and built a coherent technology stack of its own, shaking the great powers in form, but ultimately losing to trend—logical inference overtaken by statistical learning, dedicated hardware reversed by general-purpose CPUs, central planning broken by distributed innovation. Its failure was not for lack of intelligence but for the wrong road; not for lack of craft but for the unlucky times. Yet ICOT's gift was not entirely cautionary: it lit national AI plans across the West, trained a generation of Japanese computer scientists, and showed the world that the East dared to answer Turing's question. If a future state should ever build another grand national project at the technological frontier, let it read ICOT once, and read it again—national power can accelerate the right road but cannot redeem the wrong one. Only continual recalibration of direction is the wise way.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked at ICOT, ETL, or on Fifth Generation–related projects, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

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
