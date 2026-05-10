# Treatise · A History of Knowledge Representation

> Is intelligence equivalent to "knowledge plus reasoning"? Seventy years of answers have been written. From the ambition of first-order logic to the pageantry of expert systems, then to the resurrection of knowledge graphs and the renewed interrogation of the LLM age, the symbolist camp has walked a long, winding, and stubborn road.

## Act One: Teaching Machines to "Know" — Logic as the Formal Language of Cognition

The headwaters trace back to the late nineteenth century. The German mathematician Gottlob Frege published *Begriffsschrift* in 1879, systematically establishing first-order logic (FOL) with quantifiers for the first time. His goal was not intelligent machines but an unambiguous foundation for mathematics. Yet that language would later become AI's earliest spiritual ancestor.

In 1959, **John McCarthy (1927–2011)** presented *Programs with Common Sense* at the "Mechanization of Thought Processes" conference in Teddington. He envisioned a program called Advice Taker — accepting facts and rules in first-order logic, and inferring the unknown from the known. McCarthy believed that with enough commonsense axioms and a strong enough reasoning engine, intelligence would naturally emerge. This was symbolic AI in its purest, most ambitious form.

In 1965, J. A. Robinson proved the Resolution Principle, compressing first-order theorem proving into a single rule. A decade later, **Robert Kowalski (1941–)** and **Alain Colmerauer (1941–2017)** turned resolution into engineering, and in Marseille, the first programming language whose code was logic was born — Prolog. Logic was both knowledge and program, the symbolist camp's proudest fusion.

But pure first-order logic soon ran into "reality's impatience." The world is not axiomatized; common sense is full of defaults, exceptions, vagueness, and time. Scholars invented one "non-classical" logic after another: default logic, modal logic, temporal logic, fuzzy logic — each trying to formalize a class of commonsense phenomenon. The end of the road was a sober realization: pure logic at its furthest reach falls far short of a three-year-old.

## Act Two: Networks and Frames — Packaging the World as Structure

Pure logic, however elegant, was clumsy. Psychologists soon noticed: the human brain organizes knowledge more like "a network of concepts" than like rows of formulas.

In 1968, Ross Quillian's doctoral thesis proposed semantic networks: nodes for concepts, edges for relations; a "canary" linked through "is a kind of bird" to "bird," inheriting the property "can fly." This structure became the ancestor of every graph-based knowledge base.

In 1974, **Marvin Minsky (1927–2016)** published *A Framework for Representing Knowledge*, pushing semantic networks to a structured extreme. A frame is a template with "slots," each slot holding either a concrete value or pointing to another frame. The "restaurant" frame carried slots for "waiter, menu, payment," letting the machine understand the omissions and defaults in a story about dining out.

Almost simultaneously, **Roger Schank (1946–2023)** at Yale proposed Scripts, applying frames to event sequences. His famous "restaurant script" listed five canonical scenes — entering, ordering, eating, paying, leaving — letting programs like SAM and FRUMP "read" the omitted steps in a news story.

The contour of human common sense was, for the first time, visible to engineers — layered, inheritable, full of defaults.

The hidden bequest of this period was the concept of the "knowledge level," proposed by Newell in his 1982 AAAI presidential address. Newell distinguished the "symbol level" from the "knowledge level": the former asks how data structures are implemented; the latter asks what knowledge the system actually has. This distinction remains the methodological cornerstone of knowledge engineering — when analyzing an intelligent system, ask first "what does it know," and only then "how does it store it."

## Act Three: The Dynasty of Rules — The Rise and Fall of Expert Systems

If semantic networks were the cognitivists' toys, expert systems were industry's gold mine.

In 1965, **Edward Feigenbaum (1936–)** launched DENDRAL at Stanford, letting the machine infer organic structures from mass-spectrometry data. Chemists' experience was encoded as production (IF–THEN) rules; an inference engine matched and combined them. DENDRAL ran for more than a decade and earned its principal investigator the title "father of expert systems."

From 1972, Stanford's Shortliffe developed MYCIN in his thesis, using around 600 rules to diagnose bacterial infections and recommend antibiotics. MYCIN beat most resident physicians in evaluation, but never went into production — hospitals could not accept the legal risk of "a machine writing prescriptions." This was the first shadow of AI deployment ethics.

What truly ignited industry came in 1980. **John McDermott (1942–)** at Carnegie Mellon developed R1 (later renamed XCON) for DEC, configuring orders for VAX minicomputers. After deployment, XCON reportedly saved DEC about $40 million a year, the most profitable star of the expert-system era. Japan promptly launched its Fifth-Generation Computer project (1982, led by **Kazuhiro Fuchi (1936–2007)**); capital flooded into symbolic AI worldwide.

But the feast ended abruptly in the late 1980s. As rule bases swelled past ten thousand entries, conflicts between rules became unmanageable; maintenance became unbearable; the knowledge acquisition bottleneck — the unwritable tacit experience of domain experts — proved fatal. The 1987 collapse of the Lisp Machines lit the fuse for the second AI winter.

Looking back at this decade, what survives is not the products, but a few lessons still relearned today: knowledge is not written; it is extracted. The more rules you have, the higher the maintenance cost. A purely deductive system is never robust — for reality never gives you complete premises.

## Act Four: Description Logics and Ontologies — Drawing a Rigorous Map of the World

The chaos of expert systems forced a reflection: if even "what a concept *is*" cannot be stated clearly, what hope is there for reasoning?

Around 1985, Brachman and Schmolze designed KL-ONE, rebuilding semantic networks on rigorous formal semantics, distinguishing the terminology layer (TBox) from the assertion layer (ABox). Its successors became the description logic (DL) family — fragments between propositional logic and first-order logic with controlled decidability.

The World Wide Web brought this current into the mainstream. In 2001, **Tim Berners-Lee (1955–)** proposed the Semantic Web in *Scientific American*: not just letting humans read web pages, but letting machines read the meaning behind them. RDF (Resource Description Framework) was finalized in 1999, OWL (Web Ontology Language) became a W3C standard in 2004, and its underpinning was the description logic SHOIN(D). The Gene Ontology and SNOMED CT in biomedicine remain infrastructure for clinical information systems to this day.

Ontology, once a philosophical term, had become an engineering discipline.

## Act Five: The Resurrection of Knowledge Graphs — From Cyc to Wikidata

In symbolic AI's golden age, a lonely giant stood. In 1984, Doug Lenat launched Cyc, vowing to hand-encode vast amounts of human common sense. Thirty years on, Cyc is still "incomplete," yet it gestated the deepest understanding of the scale and structure of common sense. Lenat's "failure" is more instructive than many people's success — pure manual encoding of common sense is destined to hit the wall of scale.

The turn came from crowdsourcing and the internet. In 2007, Metaweb released Freebase, recording entities and relations wiki-style. In 2010, Google acquired Metaweb; in May 2012, it formally released the Knowledge Graph, and the panel on the right of search results — people, places, films — became part of daily life. The same year, the Wikimedia Foundation launched Wikidata, extracting facts behind multilingual Wikipedia into a unified entity store; the count climbed toward a billion items.

The phrase "knowledge graph" went from a Google product name to an industry-wide term. Academia and industry released DBpedia, YAGO, Wikidata, ConceptNet — large-scale graphs supporting search, recommendation, question answering, and risk control.

The symbolist camp returned to the stage in an unexpected guise — not as omniscient logic, but as willing data infrastructure.

China's contribution should not be ignored. The OpenKG project from Fudan's GDM Lab, Tsinghua's XLore, Alibaba's "knowledge engine," and Meituan's "knowledge graph brain" — turning multilingual, cross-domain knowledge into queryable structured assets — is one of the most enduring and most underestimated lines in Chinese AI engineering.

## Act Six: The Handshake of Neural and Symbolic

In the deep-learning era, the symbolist camp was briefly treated as a museum exhibit. But new tensions emerged: neural networks were good at perception but poor at reasoning; opaque in their decisions; weak in compositional generalization; prone to factual errors.

Neuro-symbolic AI was born of this tension. In the late 2010s, DeepMind, IBM, and MIT successively published Neural Theorem Prover, Neural Module Network, and Neuro-Symbolic Concept Learner. **Judea Pearl (1936–)** repeatedly insisted: without causal and symbolic structure, machines are merely fitting correlations. Knowledge graph embedding methods such as TransE and ComplEx mapped symbolic relations into vector space, making algebraic identities like "Paris − France + China ≈ Beijing" actually run.

In industry, Google, Meta, Alibaba, and ByteDance embedded knowledge graphs into the foundations of search, recommendation, advertising, and risk control. Healthcare and finance cannot do without symbolic constraints — regulators do not allow a fully black-box diagnosis or credit decision.

A more radical academic step, around 2020, was "differentiable reasoning": encode deductive rules as differentiable computation graphs so symbolic inference can be learned by gradients. The road is still under construction — whether it will become the foundation of the next cognitive architecture, no one yet dares to say.

Engineering has settled into another pragmatic line: use LLMs to extract knowledge graphs, then use knowledge graphs to constrain LLMs. The first answers "graph construction is hard"; the second answers "the model hallucinates." The two are medicine and disease to each other, forming one of the hottest practical paradigms in knowledge engineering since 2024.

## Act Seven: Parametric Knowledge vs. Retrieval Augmentation — The New Question of the LLM Age

In the 2020s, large language models put "knowledge" back in the spotlight, but in a wholly transformed form.

Models like GPT-3, PaLM, and LLaMA compress human text into hundreds of billions or trillions of parameters. Knowledge no longer exists as triples but as distributions of attention weights. This is parametric knowledge. Its strengths: fluent, composable, generative. Its weaknesses: not updatable, prone to hallucination, untraceable.

To compensate, in 2020 Lewis and colleagues at Meta proposed Retrieval-Augmented Generation (RAG): before generating, retrieve external documents and concatenate them into the context. RAG re-externalizes knowledge — the parametric model handles language, while external stores (vector databases, knowledge graphs, search engines) handle facts. From 2023, RAG has been the default architecture for enterprise LLM applications.

A more radical direction is tool use and agents: have the model invoke calculators, search, SQL, and knowledge-graph APIs during reasoning. OpenAI's Function Calling (2023), Anthropic's MCP (2024), and the agent frameworks of every major player are all doing the same thing — re-attaching the symbolic world to the neural one in the form of tools.

Knowledge representation has been thoroughly rewritten: it no longer aspires to "fully formalize the world." It now answers a more pragmatic question — on the new cognitive substrate of large models, in what form should facts and rules live, so that they are both efficiently accessed and reliably checked?

In the past year or two, knowledge graphs have been re-examined as a complement to RAG. Pure vector search is prone to "semantically close, factually wrong"; knowledge graphs are good at "precise but sparse." Microsoft's GraphRAG (2024) and similar work mix graph and vector retrieval, materially reducing hallucination on multi-hop questions and entity-dense scenarios. The handshake of symbol and vector is being completed quietly, at the very last mile of enterprise deployment.

## Open Questions

Seventy years on, neither symbolists nor connectionists seem to have won — nor lost. Several fundamental questions remain unanswered. Can common sense be enumerated? Can causality be learned from correlation? Should memory live in parameters, in vector stores, or in structured graphs? When an LLM solemnly fabricates, by what means do we falsify its claims?

The answer of the next decade may lie in neither route, but in the seam between them — some hybrid that can both learn and reason, both speak the language and know the world.

---

::: tip Historian's Note
Surveying seventy years of knowledge representation, one sees a tug-of-war between formalization and experience. McCarthy's ambition — to enclose all things in first-order logic — was vast in vision and vast in obstacle. Cyc spent thirty years entering common sense by hand and could not approach an infant's mind, showing that the limit of formalization lies not in tools but in the inenumerability of common sense itself. At the height of expert systems, DEC saved $40 million a year, and the world believed symbolism would unify all. But as rules grew, contradictions grew with them; the bottleneck of knowledge acquisition broke the spine. Neural networks, learning their way through, broke them like water breaks stone. Yet neural networks excel at perception and falter at reasoning, fluent yet prone to error — and so RAG arose, tool use arose, and knowledge graphs returned. For intelligence is never one side defeating another; it is the perpetual work of incorporating the other's strengths. Today's large models, with external knowledge and inner causal constraints, already begin to be a hybrid of symbol and connection. If a true thinking machine ever comes, it will carry the strengths of both. Let the scholar remember: every announcement of a paradigm's death is, more often than not, the prelude to its return in new clothing.
:::

## Eyewitness Accounts

::: info Call for contributions
If you have worked on expert systems, knowledge graphs, or neuro-symbolic research, or have witnessed the deployment of RAG in industry, please [contribute on GitHub](https://github.com/zsjunai/history-of-ai).
:::

## References

1. McCarthy, J. (1959). Programs with common sense. *Proceedings of the Teddington Conference on the Mechanization of Thought Processes*, 75-91.
2. Robinson, J. A. (1965). A machine-oriented logic based on the resolution principle. *Journal of the ACM*, 12(1), 23-41.
3. Quillian, M. R. (1968). Semantic memory. In M. Minsky (Ed.), *Semantic Information Processing* (pp. 227-270). MIT Press.
4. Minsky, M. (1974). *A framework for representing knowledge*. MIT-AI Laboratory Memo 306.
5. Schank, R. C., & Abelson, R. P. (1977). *Scripts, Plans, Goals, and Understanding*. Lawrence Erlbaum.
6. Buchanan, B. G., & Feigenbaum, E. A. (1978). DENDRAL and Meta-DENDRAL: Their applications dimension. *Artificial Intelligence*, 11(1-2), 5-24.
7. Shortliffe, E. H. (1976). *Computer-Based Medical Consultations: MYCIN*. Elsevier.
8. Brachman, R. J., & Schmolze, J. G. (1985). An overview of the KL-ONE knowledge representation system. *Cognitive Science*, 9(2), 171-216.
9. Lenat, D. B. (1995). CYC: A large-scale investment in knowledge infrastructure. *Communications of the ACM*, 38(11), 33-38.
10. Berners-Lee, T., Hendler, J., & Lassila, O. (2001). The Semantic Web. *Scientific American*, 284(5), 34-43.
11. Bollacker, K., Evans, C., Paritosh, P., et al. (2008). Freebase: A collaboratively created graph database for structuring human knowledge. *SIGMOD '08*, 1247-1250.
12. Lewis, P., Perez, E., Piktus, A., et al. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *Advances in Neural Information Processing Systems*, 33.
