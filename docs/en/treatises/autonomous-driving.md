# Treatise · A Short History of Autonomous Driving

> Autonomous driving was one of AI's earliest commercial "holy grails" — its story is filled with overpromises, technical bottlenecks, fatal accidents, and timetables forever postponed. From a 5-ton Mercedes wagon driving itself at 96 km/h on a Munich highway in 1986, to 150,000 robotaxi rides per week in Phoenix in 2024, this race burned through over $100 billion, gave birth to a new industry, and rewrote the meaning of the word "driving."

## I. The Pioneer Era (1980s–2000s)

The earliest self-driving cars were not in Silicon Valley but in Germany. In 1986, Ernst Dickmanns at the Bundeswehr University Munich modified a 5-ton Mercedes-Benz wagon, the VaMoRs, fitting it with cameras and onboard computers, and let it drive itself on a closed highway at 96 km/h. In 1994, his team's VaMP completed 1,000 km of real-traffic autonomous driving on roads around Paris at speeds up to 130 km/h — the high-water mark of the EU's PROMETHEUS program (1987–1995, €750 million invested). Dickmanns was twenty years ahead of Silicon Valley, but history nearly forgot him.

Across the Atlantic, Carnegie Mellon University's "godfather of robotics" Chuck Thorpe led the Navlab project, which from 1986 produced Navlab 1 through Navlab 11. In July 1995, Navlab 5 made the famous "No Hands Across America" trip — 4,500 km from Pittsburgh to San Diego, with 98.2% of steering done by the system (throttle and brakes still by human). The "brain" was a RALPH neural network with only 768 neurons.

That era's research relied on a few hand-crafted features and primitive sensors, far from mass production. But it planted every later seed.

## II. The DARPA Challenges (2004–2007)

What truly ignited the industry was DARPA. On March 13, 2004, the first DARPA Grand Challenge was held in the Mojave Desert: 240 km of rough terrain, $1 million prize. The result was humiliating — of 15 entrants, the farthest, CMU's Sandstorm, reached 11.78 km before catching on a rock. **A complete rout.**

DARPA raised the prize to $2 million and ran it again in October 2005. This time, Stanford computer-science professor Sebastian Thrun's Stanley team won — a modified VW Touareg covered the 212 km course in 6 hours 54 minutes. Stanley's key innovation was **probabilistic machine learning**: lidar scanned the terrain and the car learned what counted as drivable surface, instead of relying on hand-coded rules. Stanley's victory is treated as the founding moment of machine-learning methods in robotics.

The DARPA Urban Challenge in November 2007 moved the contest from desert into city — at a former Air Force base in Victorville, California, autonomous vehicles had to share roads with human drivers, obey traffic rules, and read signals. CMU's Boss took first; Stanford's Junior was second; Virginia Tech's Odin was third. Boss's leader, Chris Urmson, and Stanley/Junior's Thrun, would soon meet again at a Silicon Valley company called Google.

The three DARPA contests changed everything. They wove the world's best robotics PhDs, engineers, and professors into one network — a network that within a decade would hatch Google Self-Driving Car, Waymo, Cruise, Zoox, Nuro, Aurora, Argo, Pony.ai, and almost every other major player.

## III. Google's Self-Driving Car and Waymo (2009–)

In January 2009, Google co-founder **Larry Page** brought Thrun in from Stanford and launched Project Chauffeur, later renamed Google Self-Driving Car. The first fleet was seven modified Toyota Priuses, each topped with a Velodyne HDL-64 lidar (priced at $75,000 a unit). In October 2010, the front page of *The New York Times* revealed the secret project: Google's cars had driven 220,000 km on California roads with zero accidents.

It was an age of overoptimism. In 2012, Thrun publicly said "self-driving cars will hit the roads in 5 years." That same year California passed SB-1298, allowing autonomous-vehicle testing on public roads. But the project soon found that **95% of the engineering yields 90% of the capability — the last 5% of engineering must yield the remaining 10%**. The long-tail problem was much harder than imagined. Construction zones, temporary detours, police gestures, children running into the street — every corner case demanded special handling.

In December 2016, the project spun out of Google X as Waymo (Way forward in mobility). The new CEO John Krafcik brought a production view from the auto industry. On December 5, 2018, Waymo One launched in suburban Phoenix as the world's first commercial robotaxi service — though early rides still had safety drivers. In October 2020, Waymo started **rider-only** service in Phoenix — a historic first.

2024 was Waymo's breakout year. From 50,000 paid rides per week in Q1, the figure rose past 170,000 per week by year-end, covering Phoenix, San Francisco, Los Angeles, and Austin. Waymo crossed 50 million driverless miles. In early 2025, it partnered with Uber in Austin and Miami, pushing the scale into the millions. Its line was ever "lidar + HD maps + modular stack" — sharp contrast to Tesla.

But Waymo is not unscathed. It issued two software recalls in 2024, and in January 2025 a Waymo struck a roadside cyclist in San Francisco — regulator and public tolerance still loom overhead.

## IV. Tesla's Aggressive Path

In October 2014, **Musk** introduced Autopilot on the Model S — a Level-2 driver-assist using cameras, radar, and ultrasonic sensors, with the original vision algorithms from Israel's Mobileye EyeQ3 chip. In 2016, Tesla broke with Mobileye and built its vision stack in-house. From 2017, **Andrej Karpathy**, hired from OpenAI, led the Autopilot team.

Karpathy's five years at Tesla (2017–2022) reshaped the industry. He pushed "Software 2.0" to the extreme — replacing every hand-coded module of traditional computer vision with neural networks. In 2019, Tesla shipped its in-house FSD chip (HW3.0); in October 2020 it began rolling out FSD Beta ("Full Self-Driving" — still Level-2) to select owners. Tesla's training data came from over 7 million camera-equipped cars worldwide — a data scale no rival could match.

But Autopilot was also a byword for accidents. In May 2016, Joshua Brown died when his Model S struck a tractor trailer in Florida; in 2018 Walter Huang's Model X hit a divider in California. By the end of 2024, NHTSA had over 50 Autopilot-related fatal accidents under investigation. The product name "Full Self-Driving" was sued repeatedly as false advertising.

In January 2024, Tesla released FSD V12 — a true end-to-end neural network from camera input straight to steering and pedal commands, scrapping the 300,000 lines of C++ rules that came before. Musk called it "AI does it all." V12 did show a leap in subjective fluidity on city streets, but its safety data have not been independently verified by third parties. In June 2025, Tesla launched a Robotaxi pilot in Austin (Cybercab and Model Y fleets), but with remote monitors and "safety supervisors" still in the cars — a distance from true driverless operation.

## V. Autonomous Driving in China

China's race began almost entirely around Baidu Apollo. In April 2017, Baidu released the Apollo open-source platform — called "the Android of autonomous driving." At Baidu World in November that year, Lu Qi (a Chinese AI veteran of **Kai-Fu Lee**'s generation) announced that Apollo's open codebase exceeded 600,000 lines — China's first systematic appearance in autonomous driving. In May 2021, Baidu's robotaxi service **Apollo Go (Baidu Robotaxi)** ("萝卜快跑") launched in Beijing, Guangzhou, Changsha, and elsewhere. By early 2025, Apollo Go had completed over 10 million rides, covering 15 cities; Wuhan is the world's largest single-city robotaxi operating zone.

L4 startups also emerged in 2016–2018. **Pony.ai** (小马智行), founded in Fremont, California, by James Peng (former Baidu autonomous-driving founding chief) and Tiancheng Lou, holds dual U.S.-China licenses and listed on NASDAQ in November 2024. **WeRide** (文远知行), founded by Tony Han, spans robotaxi, robobus, and robosweeper, listed on NASDAQ in October 2024. **Momenta** (初速度) is famed for "two-legged walking" — progressive L2+ revenue funding long-term L4, with deep partnerships with SAIC, Mercedes-Benz, and Toyota.

The intelligent-driving arms race among new EV makers is the other front. **Xpeng** rolled out XNGP (intelligent driver assist) from 2022, in 2024 achieved nationwide map-free city navigation, and in 2025 rolled out an "end-to-end large model" to its full fleet. **Li Auto** released the AD Max end-to-end stack in 2024. **Nio**'s ET9 is powered by its in-house 5nm Shenji chip. **Huawei ADS** (it does not build cars but powers AITO, AVATR, Luxeed, Stelato) helped AITO M9 cross 10,000 monthly sales, making "map-free city navigation" the standard above RMB 300,000. Most of these stacks now use Transformer end-to-end architectures plus BEV+OCC perception, pushing "advanced intelligent driving" from optional to required.

A distinctive Chinese feature is **vehicle-road collaboration (V2X)**. Xiongan New Area, Jiaxing, and Suzhou Xiangcheng have built large-scale V2X test facilities. In theory, roadside perception removes blind spots and lowers per-vehicle sensor cost — but commercialization is slow because the roadside investment is enormous and the recovery path unclear.

Worth noting are DJI's automotive arm (Livox lidar plus Zhuoyu intelligent-driving platform) and Horizon Robotics (Journey series chips, listed in Hong Kong in October 2024) — they represent China's domestic breakthrough at the sensor and on-vehicle AI-chip ends. Horizon's Journey 5 and 6 have shipped in Li Auto, BYD, and Chery vehicles, with annual volumes in the millions.

## VI. The Technical Disputes

**Lidar vs. pure vision.** Waymo, Cruise, and Zoox went all-in on lidar; Tesla has held to pure vision throughout, even cutting millimeter-wave radar in 2021. The Chinese market entered the "consumer lidar" era in 2024 — Hesai, RoboSense, and Huawei drove unit prices from $75,000 down below $200, and almost every Chinese new-energy vehicle above RMB 300,000 lists lidar as standard. The argument is unsettled in 2025.

**HD maps vs. map-free.** Early L4 stacks all relied on RTK-grade HD maps, but maintenance costs were high and cities change. From 2023, Xpeng, Huawei, and Li Auto rolled out "map-free intelligent driving" using on-vehicle real-time mapping and end-to-end models. Waymo still keeps HD maps as part of its moat.

**Rule-based vs. end-to-end learning.** Tesla FSD V12 and the latest Xpeng XNGP have moved to "fully end-to-end" — a single network from pixels to steering. Waymo and others retain modular stacks, arguing end-to-end lacks interpretability and is hard to debug or regulate. The 2024–2025 trend tilts clearly toward end-to-end, but the engineering balance keeps evolving.

**Progressive L2+ vs. L4 leap.** Tesla and Xpeng represent the former — selling cars to fund cash flow and data, ascending step by step. Waymo and Cruise represent the latter — going straight to driverless robotaxis. In October 2023, Cruise was suspended in San Francisco after an accident; in December 2024, GM dissolved Cruise — the heaviest blow yet to the L4 path. But Waymo's parallel success showed the path was not dead.

## VII. The Industry's Trials and Reflections

Autonomous driving's deepest curse is what the industry calls "the last 1% problem" — the infinite long tail. 99% of urban driving is structured, but on the road there will be: a plastic bag flying in the wind, a cyclist carrying a mirror, a volunteer dressed as Santa Claus directing traffic, a police gesture conflicting with the lights. The total number of such corner cases is nearly infinite, and any one might be the spark of an accident.

Fatal accidents are the heaviest chapter. On March 18, 2018, an Uber test vehicle killed Elaine Herzberg as she pushed a bicycle across the road in Tempe, Arizona, at 64 km/h — the world's first pedestrian killed by an autonomous car. Uber exited self-driving R&D thereafter. On October 2, 2023, a Cruise robotaxi in San Francisco dragged a pedestrian who had already been struck by another car for six meters — it was not the primary cause, but Cruise concealed details and was suspended. Tesla's Autopilot/FSD accidents number in the hundreds; NHTSA has not yet closed the case.

Overpromise is another universal disease. In 2016 Tesla announced a "fully autonomous New York to LA by year-end" — never delivered. In 2017 GM's Cruise said "mass-produced robotaxi by 2019" — undelivered through dissolution in 2024. Almost every company's timeline slipped 3–5 years.

Regulators race to keep up. NHTSA's 2021 Standing General Order required all L2+ makers to report serious accidents. California DMV holds revocation power and has acted against Cruise and Pony.ai. China's 2024 *Notice on Pilot Work for Intelligent Connected Vehicles' Market Entry and Public-Road Operation* placed L3 commercialization in a formal regulatory frame. The EU's ALKS (Automated Lane Keeping Systems) regulation took effect in 2022, with Mercedes Drive Pilot becoming the world's first commercial L3.

## VIII. Today and Tomorrow

Standing in May 2025, autonomous driving is at a real inflection.

**Robotaxi commercialization breaks the ice.** Waymo's 170,000 weekly orders and Apollo Go's 10 million cumulative prove driverless mobility can run reliably in defined zones. The next gate is unit economics — Waymo estimates roughly $250 per vehicle per day (vehicle, remote operations, charging); revenue must exceed $250 daily to break even. 2025 may bring the first per-vehicle profit.

**The death valley of self-driving trucks.** TuSimple delisted and exited the U.S. market in 2023. Embark dissolved in 2023. Aurora launched commercial driverless trucking on Texas's I-45 in April 2024 — the only player still moving. China's Inceptio Technology takes an L2+ commercial path, partnering with STO Express and ZTO.

**Is end-to-end the answer?** Tesla FSD V12 says yes; Waymo's modular system has run further than anyone. The 2025 consensus may be: end-to-end is the trend, but it requires a hybrid architecture that is "interpretable + debuggable + interruptible."

**The rise of world models.** Wayve (London, founded 2017) released GAIA-1 in 2023 and GAIA-2 in 2024, framing driving as "video generation + action prediction" — seen as a possible architecture for the next-generation autonomy. NVIDIA released Cosmos at CES January 2025 — a world-foundation-model platform for driving and robotics. World models may become the third paradigm of autonomous driving after BEV and end-to-end.

**When will robotaxis spread globally?** Goldman Sachs in 2024 forecast global robotaxi market at $25 billion by 2030 and $100 billion by 2035. The premise is that regulation, insurance, and social acceptance all align — history shows these often move slower than technology.

---

::: tip Historian's Note
Forty years of autonomous driving look like a great experiment: humanity pours its whole strength into letting neural networks and cameras replace the century-old coordination of hand and foot. The wave has risen and fallen three times. In the 1980s Dickmanns flashed on a German highway, and the world did not know him. In 2005 Stanley emerged from the desert and stunned Silicon Valley. In 2012 Google said "five years to ubiquity," with full conviction. In 2018 Uber killed Herzberg, and the industry was shaken. In 2023 Cruise collapsed; in 2024 Waymo rose again. Behind every "production by next year" promise and every slip lay tens of billions in ash. Yet in 2025, Waymo in Phoenix and Apollo Go in Wuhan have made driverless cars part of daily life. Three lessons follow. First: the last 1% is always ten times harder than expected — trust no "next year." Second: the line dispute cannot be settled by debate alone, only by commercial data — straight-to-L4 and progressive-L2+ have each lost lives. Third: safety is a non-linear function — the engineering from 99% to 99.99% may exceed all the work from 0 to 99%. **The real winner is not the most technically advanced, but the most patient, deepest pocketed, and most stable in motion.** A two-center pattern between China and the United States has formed; the next decade of this story will be written between the two markets.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on Stanley, Waymo, Cruise, Tesla Autopilot/FSD, Baidu Apollo, Pony.ai, WeRide, Huawei ADS, Xpeng XNGP, Momenta, or other autonomous-driving projects, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. Dickmanns, E. D. (2002). The development of machine vision for road vehicles in the last decade. *IEEE Intelligent Vehicles Symposium*, 268-281.
2. Thorpe, C., Hebert, M., Kanade, T., & Shafer, S. (1991). Toward autonomous driving: The CMU Navlab. *IEEE Expert*, 6(4), 31-42.
3. Thrun, S., Montemerlo, M., Dahlkamp, H., et al. (2006). Stanley: The robot that won the DARPA Grand Challenge. *Journal of Field Robotics*, 23(9), 661-692.
4. Urmson, C., Anhalt, J., Bagnell, D., et al. (2008). Autonomous driving in urban environments: Boss and the Urban Challenge. *Journal of Field Robotics*, 25(8), 425-466.
5. Bojarski, M., Del Testa, D., Dworakowski, D., et al. (2016). End to end learning for self-driving cars. *arXiv preprint arXiv:1604.07316*.
6. National Transportation Safety Board (2019). Highway Accident Report HAR-19/03: Collision between vehicle controlled by developmental automated driving system and pedestrian, Tempe, Arizona, March 18, 2018.
7. Waymo (2024). Waymo safety report and operational metrics. *Waymo Public Safety Report*, December 2024.
8. Karpathy, A. (2021). Tesla AI Day 2021 — Vision Stack and FSD Architecture. Tesla, August 19, 2021.
9. California Department of Motor Vehicles (2023). Order of Suspension issued to Cruise LLC. October 24, 2023.
10. Goldman Sachs Research (2024). Robotaxis: The road to commercialization. Equity Research Report, October 2024.
11. Baidu Apollo (2024). *萝卜快跑公开运营报告* [Apollo Go Public Operations Report]. Baidu Intelligent Driving Group.
12. NHTSA (2024). Standing General Order on Crash Reporting for Levels 2-5 Automated Driving Systems — Annual Summary. National Highway Traffic Safety Administration.
