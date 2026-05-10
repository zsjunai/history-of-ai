# Treatise · Embodied AI and Robotics

> If AI exists only behind the screen, it can never truly understand the world. The pursuit of embodied AI is to give the machine a body — to perceive, act, and learn in the physical world. The road begins in 1966, with a clumsy little wheeled cart called Shakey in a Stanford lab, and runs through sixty years of detours, until in 2024 it materializes as fleets of humanoid robots rolling off Silicon Valley and Chinese factory lines, with a new model launched almost every month.

## I. Early Robots (1960s–1990s)

In 1966, **Nils Nilsson**, **John McCarthy**, and others assembled Shakey at the Stanford Research Institute (SRI) — a wheeled robot about two meters tall, fitted with a TV camera and tactile rod. It walked slowly, shook badly (hence "Shakey"), but mattered enormously: it was the first robot to integrate perception, world modeling, planning, and action. Shakey planned with STRIPS (Stanford Research Institute Problem Solver) — told to "push the block to the other room," it could decompose the problem into "first walk over, then go around the table, then push." A victory of classical AI.

But Shakey also exposed the deadly flaw of the classical line: every "reasoning" step took minutes, and by then the world had changed.

Twenty years later, MIT professor Rodney Brooks (born in Australia) led the rebellion. In 1986 he proposed the **Subsumption Architecture**, advocating the abandonment of symbolic reasoning and world modeling. A robot was to be made of many parallel reactive behavior modules connecting sensors and motors directly — like an insect, with no central "thought," yet able to survive in complex environments. His 1990 paper *Elephants Don't Play Chess* read like a manifesto: intelligence need not show itself in chess; circling a living room without knocking things over already exceeded every AI system of the time. Brooks co-founded iRobot — the Roomba is the most direct descendant of subsumption architecture, with cumulative sales topping 50 million units by 2025.

Industry took a third path. In 1979 General Motors installed the first Unimate welding arm; in the 1980s Japan's FANUC and Yaskawa swept the auto plants. They had no AI, only precise trajectory planning and teaching — but it was the first time robots truly changed global manufacturing.

## II. Boston Dynamics and Motion Control

In 1992, MIT's Marc Raibert left the famous Leg Lab and founded Boston Dynamics. The name would, for the next thirty years, stand for the height of robot motion.

The 2004 BigDog, a quadruped carrying a 150 kg load on rough terrain, gave the world its first sight of a robot maintaining balance like an animal. The 2013 Atlas (DARPA-funded) attempted bipedal upright walking; in 2016, the video of Atlas walking on snow and rising again after engineers shoved it with a stick passed a hundred million views on YouTube. The Spot quadruped (2017) entered small-volume sale at about $75,000 and is now deployed in thousands of industrial inspection scenarios — from Shell refineries to U.S. national-grid line checks to SpaceX's Starship pad. Atlas's 2021 parkour video, in which the hydraulic robot leapt platforms and back-flipped to landing, was the ceiling of pure motion control of its time.

But Boston Dynamics's commercial fate has been an enigma. It was sold to Google (2013), SoftBank (2017), and finally to Hyundai (2020) at a valuation of about $1.1 billion. In thirty years it built the world's strongest robot legs, but never a profitable business. In April 2024 the legacy hydraulic Atlas retired and a new electric Atlas was launched on the same day, with greater joint freedom and more human-like motion — and the era of motion-control's "hardware island" was over. The AI brain had to take over.

## III. Deep Learning Enters Robotics (2015–2022)

Around 2015, the deep-learning wave broke against the shore of robotics. The earliest attempts came from Google Brain. In 2016, Sergey Levine and colleagues published the "Arm Farm" project: 14 robotic arms self-trained on grasping for 800 hours, with end-to-end CNN learning from camera to motor commands — the first large-scale evidence of end-to-end robotic learning.

In the years that followed, several technical lines advanced in parallel. **Imitation learning** taught robots through human demonstration with algorithms like DAgger and Behavior Cloning. **Sim-to-Real** trained robots for millions of hours in simulators such as NVIDIA Isaac and Mujoco before transfer — OpenAI used this to train Dactyl in 2019, solving a Rubik's Cube one-handed, with simulation equivalent to 13,000 years of human experience. **Deep reinforcement learning** powered quadruped control: ETH Zurich's ANYmal in 2020 learned to recover from falls in the wild via RL, on the cover of *Science Robotics*.

But this period had a common limit: every skill was trained separately. Picking up a cup or opening a door — each was a separate model. Robots had no "general brain." This contrasted painfully with NLP's GPT line, where one model did everything. The robotics community began to ask: when is *our* GPT moment?

## IV. Large Models + Robots: The New Embodied-AI Paradigm (2023–)

In December 2022, Google Robotics released RT-1 (Robotics Transformer 1). It encoded 130,000 trajectories collected from 13 robots over 17 months into a unified vision-language-action sequence, processed by a 35-million-parameter Transformer. RT-1 executed 700+ natural-language commands — "put the Coke in the drawer," "wipe the water off the table" — at 97% success. It was the first prototype "foundation model" for robotics.

But the real paradigm jump came with RT-2, released in July 2023. Google DeepMind fine-tuned PaLI-X and PaLM-E — both 50-billion+ parameter vision-language models — directly into robot policies, outputting discrete action tokens. RT-2 showed "emergence" for the first time — never taught to "hand me an extinct animal," it picked the dinosaur out of a pile of toys. The term **Vision-Language-Action (VLA) model** was born.

In October 2023, data from 34 institutions and 22 robot embodiments were merged into the Open X-Embodiment dataset, with over a million demonstrations. RT-X trained on it raised zero-shot transfer to new robots by 50% over single-robot training — hinting that robotics, too, might have its "ImageNet moment."

Private companies took the baton. Physical Intelligence (π) was founded by Levine and others in San Francisco in 2024, raised $400 million at a $2.4 billion valuation. In October that year it released π0: a cross-platform VLA that let seven different robots fold laundry, load coffee makers, and clear tables, demonstrating fluid motion that stunned the field. In February 2025, Figure AI released its in-house Helix VLA, ended its partnership with OpenAI, and went independent. The same month, 1X Technologies (Norwegian/American, OpenAI-backed) released real-world video of its Neo Gamma humanoid robot inside users' homes.

ByteDance's Seed team joined the race, releasing GR-2 in November 2024 — a video-generation-driven world model controlling robots — and open-sourcing RoboFlamingo, RoboBrain, and other multimodal foundation models. Hugging Face released the open-source robot stack LeRobot in 2024 and the low-cost SO-100 arm, letting undergraduates reproduce VLA for $100.

NVIDIA also took a key seat. At GTC March 2024, **Huang** announced **Project GR00T** — a foundation-model platform for humanoid robots, paired with Isaac simulation, Jetson Thor compute, and the Osmo robot cloud. At CES January 2025 he declared, "Robotics is having its ChatGPT moment." NVIDIA positioned itself as the "shovel seller" for the entire embodied AI race.

The significance of VLA: from a "perceive — plan — execute" pipeline to an end-to-end unified model — engineers no longer hand-design every skill; one model serves all tasks. This is the key leap out of robotics' curse of "every motion must be programmed separately."

## V. China's Embodied-AI Wave

From 2024, China became the world's hottest destination for embodied-AI investment. In 2024 alone, total funding for the sector exceeded RMB 13 billion, with valuations of half the projects doubling within twelve months.

**Unitree Robotics** is in Hangzhou, founded by Wang Xingxing (王兴兴), a 90s-born entrepreneur, originally famous for the Go1/Go2 quadrupeds. In May 2024 it released the H1 humanoid (1.8 m tall, $90,000); in August it launched the G1 (1.27 m, starting at $16,000), driving humanoids into consumer territory. Videos of G1 dancing, running, and assuming horse stance racked up over a hundred million views on Bilibili. In January 2025, the Unitree H1 danced yangko on the CCTV Spring Festival Gala, putting humanoids before the Chinese mass audience for the first time.

**AgiBot (智元机器人)** was founded in 2023 by Peng Zhihui (彭志辉, "Zhihui Jun"), a former Huawei "Genius Youth," backed by Baidu, Shanghai SOE capital, and Hillhouse. In August 2024 it released the Yuanzheng A2 humanoid, claiming a mass-production price below RMB 200,000; in January 2025 it announced the "Qiyuan" foundation model and open-sourced the AgiBot World dataset of one million robot trajectories.

The rest stand in line: **UBTECH** listed on the Hong Kong Exchange in December 2023 as "China's first humanoid robot stock," with the Walker series already entering BYD and Foxconn factories. Xiaomi's CyberOne (2022) and CyberDog series sit in tech-toy positions. **Fourier Intelligence**'s GR-1 and GR-2 target medical rehabilitation; **Galbot** (founded by Peking University professor Wang He) aims at retail; **Robot Era**, incubated at Tsinghua, released the humanoid Star1 in 2025.

China's distinguishing strength is supply chain — motors, gearboxes, controllers, and batteries are mostly sourceable within 200 km in the Yangtze River Delta and Pearl River Delta, driving full-system cost lower than Silicon Valley can match. Tesla still pitches Optimus at $20,000; Unitree G1 already lists for RMB 99,000 on JD.com.

Policy adds heavy weight. In November 2023 the Ministry of Industry and Information Technology issued the *Guiding Opinions on Innovative Development of Humanoid Robotics*, targeting an initial innovation system by 2025 and international parity by 2027. Beijing, Shanghai, Shenzhen, and Hangzhou successively unveiled national humanoid-robot innovation centers. In April 2024, Beijing's "National-Local Co-Built Embodied Intelligence Robotics Innovation Center" was inaugurated, with AgiBot and Galbot among participants. This is a national-level industrial arms race.

## VI. The Humanoid Argument

Why humanoid? The plain answer almost insults the imagination: human factories, offices, and homes are designed for human bodies — door handles at 90 cm, stair risers at 17 cm, chair seats at 45 cm. Humanoids are the cheapest fit for the existing built environment.

**Musk** first revealed the Optimus plan at Tesla AI Day 2021. In September 2022, when the first prototype Bumble C debuted, engineers had to push it onto the stage. By the "We, Robot" event in October 2024, Optimus Gen 2 could mix drinks, hand out candy, and chat with the audience (with later admissions of partial teleoperation). Musk shouted out a target price of $20,000–$30,000 and a goal of one billion units a year — the latter still science fiction, the former already proved viable by Chinese makers.

Figure AI is another Silicon Valley star. CEO Brett Adcock had earlier founded the urban air mobility company Archer. In February 2024, Figure raised a $675 million Series B led by Microsoft, OpenAI, NVIDIA, and Bezos, at a $2.6 billion valuation; a new round in February 2025 lifted valuation to $39.5 billion. Figure 02 (released August 2024) was deployed at BMW's South Carolina factory for body-in-white metal handling.

Apptronik, from Austin, partners with Mercedes-Benz and GXO Logistics to deploy the Apollo humanoid; 1X's Neo Gamma targets the home; Norway's Halodi, Canada's Sanctuary AI, and Switzerland's ANYbotics each hold a piece.

But the dispute never ends. One camp sees humanoid as the final form; another asks: do you need two legs to carry a box? Five fingers to sort parts? Specialized arms, AGVs, and grippers have proven their ROI in industrial settings; humanoids must answer when, in some specific scenario, the unit economics actually close. As of 2025, no humanoid company has publicly disclosed profitability.

**Why non-humanoid can also win.** Agility Robotics's Digit (a bipedal warehouse robot) has been deployed by GXO Logistics from 2024, with humanoid legs plus robotic arms; Amazon warehouses run large fleets of wheeled, dual-arm Stretch and Sequoia — they have no "face," but handle real freight tasks humanoid robots cannot yet manage. In 2025, specialized form remains industry's pragmatic choice.

## VII. Open Problems

Embodied AI is in its "GPT-2 moment" — capabilities astonishing, usability far from ChatGPT-grade. Many open questions sit in front.

**Are world models necessary?** **Yann LeCun** has long argued robots need predictive world models; some see DeepMind's Genie, Sora, and other video-generation models as the embryo — does a model that generates controllable video already possess "mental simulation"? The dispute continues.

**The Sim-to-Real gap.** Simulators will never fully reproduce real physics — friction, deformation, fluids, battery voltage. The mainline path now is large-scale real-world data collection (Tesla's "thousand teleoperators factory," AgiBot's AgiBot World), but it is expensive.

**Safety.** When an 80 kg humanoid enters the home, software bugs are no longer crashes — they are physical injury. ISO 13482 (personal-care robots) cannot fully cover general humanoids; new safety norms are advancing through IEEE and ISO.

**When does a general robot arrive?** Levine in 2024 estimated ten years; **Huang** at GTC 2025 said humanoids would enter mainstream factories within five — the spread itself is a footnote on the field's uncertainty.

---

::: tip Historian's Note
After sixty years, embodied AI has taught us this: **the body is intelligence's last examination room**. Shakey reasoned but stumbled; Deep Blue calculated without a body; AlphaGo's strokes were divine but could not move a single stone — all disembodied minds. Brooks cried "elephants don't play chess" thirty years ago and was thought a wild man; today, with VLA models emerging, we see the elephant's intelligence does live in the body, not on the board. The difficulty of robotics is not in the algorithm but in physics: friction cannot be calculated, deformation cannot be enumerated, batteries cannot cheat. Boston Dynamics built legs for thirty years, and Atlas runs parkour while the business does not run; OpenAI solved Rubik's Cube one-handed and never made a product. Why? Because robotics cannot rise like GPT by stacking parameters — every step must clear the bar of reality. Yet from 2024, VLA matures, Optimus walks, Unitree G1 dances yangko at the Spring Festival Gala — the form has taken shape. China holds the supply chain; Silicon Valley holds the model frontier; the two advance side by side, and the next five years will decide. The deepest lesson: intelligence has never been a solitary monologue of symbols or networks, but a dialogue between body and world. When AI finally steps off the screen and into physical space, humanity truly begins to live with an "other." This is not just an engineering miracle; it is a turning point at the level of civilization.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on Boston Dynamics, Google Robotics, Unitree, AgiBot, Figure, 1X, Physical Intelligence, or other embodied-AI projects — or have first-hand experience in simulation, reinforcement learning, or VLA models — please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Nilsson, N. J. (1984). Shakey the Robot. *SRI Technical Note 323*, Stanford Research Institute.
2. Brooks, R. A. (1990). Elephants don't play chess. *Robotics and Autonomous Systems*, 6(1-2), 3-15.
3. Levine, S., Pastor, P., Krizhevsky, A., et al. (2018). Learning hand-eye coordination for robotic grasping with deep learning and large-scale data collection. *International Journal of Robotics Research*, 37(4-5), 421-436.
4. OpenAI, Andrychowicz, M., Baker, B., et al. (2020). Solving Rubik's Cube with a robot hand. *arXiv preprint arXiv:1910.07113*.
5. Brohan, A., Brown, N., Carbajal, J., et al. (2022). RT-1: Robotics Transformer for real-world control at scale. *arXiv preprint arXiv:2212.06817*.
6. Brohan, A., Brown, N., Carbajal, J., et al. (2023). RT-2: Vision-language-action models transfer web knowledge to robotic control. *arXiv preprint arXiv:2307.15818*.
7. Open X-Embodiment Collaboration, Padalkar, A., Pooley, A., et al. (2024). Open X-Embodiment: Robotic learning datasets and RT-X models. *ICRA 2024*.
8. Black, K., Brown, N., Driess, D., et al. (2024). π0: A vision-language-action flow model for general robot control. *Physical Intelligence Technical Report*, October 2024.
9. Lee, J., Hwangbo, J., Wellhausen, L., et al. (2020). Learning quadrupedal locomotion over challenging terrain. *Science Robotics*, 5(47), eabc5986.
10. Figure AI (2025). Helix: A vision-language-action model for general humanoid control. *Figure AI Technical Blog*, February 2025.
11. AgiBot, Inc. (2025). AgiBot World: A million-trajectory dataset for embodied intelligence. Open release, January 2025.
12. Boston Dynamics (2024). The next generation of Atlas. Press release, April 17, 2024.
