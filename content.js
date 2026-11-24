/* Content for the three language versions. Same structure, same facts, same letter codes. */
window.CONTENT = {};

/* ============================== ENGLISH ============================== */
CONTENT.en = {
  meta: {
    title: "Selected Investment Opportunities",
    description: "Introductory investment discussion: selected opportunities in AI & digital infrastructure and healthcare & life sciences."
  },
  ui: {
    nav: { overview: "Overview", ai: "AI & Digital", hc: "Healthcare", next: "Next steps" },
    company: "Company",
    priority: "Priority",
    whatItDoes: "What it does",
    whyInvest: "Why invest",
    stage: "Current development & financial stage",
    exit: "Monetization & exit path",
    gcc: "GCC strategic angle",
    verify: "To verify before investment",
    visibility: "Visibility",
    levels: { near: "Near-term", medium: "Medium-term", long: "Long-term", tbd: "To be determined" },
    menu: "Menu",
    top: "Back to start",
    deck: { prev: "Previous", next: "Next", contents: "Contents", close: "Close", hint: "Use ← → keys, swipe, or the arrows below to turn pages", draft: "Discussion draft", thesis: "Overview", economics: "Unit economics", terms: "Stage & exit", cover: "Cover" },
    econTitle: "Reference unit economics — one 8-GPU B200 server, per month (US$)",
    econCols: ["Capacity sell-through", "Revenue R", "Compute cost C", "Operating surplus P = R − C"],
    econNote: "Sponsor model: average of three open-weight models at 50% of official list price, zero cache, 30-day month. Not a budget or a return forecast. Surplus P is shared between compute owner (x) and operator (y) by contract, after the owner recovers C.",
    chainTitle: "What actually drives cash flow",
    chain: ["Installed GPUs", "Billable sell-through", "Contracted demand", "Token price & cache mix", "Revenue R", "− Power, ops & financing", "Surplus shared"],
    pending: "Pending information"
  },
  cover: {
    kicker: "Introductory investment discussion · November 2026",
    title: "Selected Investment Opportunities",
    sub: "Seven opportunities across two sectors — AI & digital infrastructure, and healthcare & life sciences — for GCC investors, strategic partners and family offices.",
    note: "Confidential · For discussion only · Not an offer of securities",
    cta: "View the overview"
  },
  overview: {
    kicker: "Executive overview",
    title: "Two sectors, seven opportunities, one discussion order",
    lead: "Presentation order reflects a preferred discussion sequence, not a ranking of expected returns.",
    cols: ["#", "Opportunity", "Sector", "Core investment thesis", "Current stage", "Monetization / exit visibility"],
    rows: [
      ["1", "A", "AI Compute Infrastructure", "Turns installed B200/B300 GPU capacity into billable inference revenue under a cost-recovery and profit-share model", "Operating proposal; B200 benchmarks tested; no contracted customers disclosed", ["near", "conditional on contracted demand"]],
      ["2", "B", "Data Center Cooling", "Liquid-cooling units and integrated systems for high-density AI racks; 8,000+ units delivered", "Commercial; product and project sales, incl. overseas data-center references", ["near", ""]],
      ["3", "C", "Cell Therapy", "Randomized pivotal data in late-line melanoma with a lighter treatment regimen", "Marketing application under priority review (China); lung cancer at Phase II stage", ["medium", ""]],
      ["4", "D", "Animal Health", "Injectable, potentially reversible feline contraceptive vaccine candidate", "China registration review; U.S. INAD status; no meaningful revenue", ["medium", ""]],
      ["5", "E", "Radiotherapy Equipment", "Compact single-room proton therapy that fits a standard radiotherapy vault", "Commercial; ~RMB 0.7bn 2025 revenue (mgmt); profit targeted 2027", ["medium", ""]],
      ["6", "F", "Medical Devices", "Scaled three-franchise MedTech platform with revenue and profit", "Commercial; ~RMB 2bn revenue, ~RMB 0.3bn profit (mgmt)", ["near", ""]],
      ["7", "G", "Life Science Tools", "Picks-and-shovels purification tools for exosomes and nanoparticles", "Commercial; ~RMB 100m revenue (mgmt); 500+ customers", ["near", ""]],
      ["—", "H", "Pending information", "Identity, business scope and source documents not yet confirmed — no claims made", "—", ["tbd", ""]]
    ],
    foot: "Visibility describes how close each business is to monetization or a realization event on the evidence supplied. It is not a forecast of returns or of exit timing. “mgmt” = management statement, unaudited."
  },
  sectors: {
    ai: {
      kicker: "Sector A",
      title: "AI & Digital Infrastructure",
      lead: "Value is moving from owning GPUs to producing billable compute — and to the physical systems that keep dense racks running.",
      points: [
        ["Utilization is the investment", "A GPU only earns when it is sold. Contracted demand, token pricing, power cost and depreciation decide payback — not theoretical peak output."],
        ["Density forces liquid cooling", "Current rack-scale GPU systems draw well above 100 kW per rack (public vendor specifications), beyond practical air-cooling limits."],
        ["Why the Gulf", "Power, capital and national AI ambitions are in place; operating know-how and high-density cooling are the bottlenecks these two opportunities address."]
      ],
      members: "Company A operates the compute · Company B cools it"
    },
    hc: {
      kicker: "Sector B",
      title: "Healthcare & Life Sciences",
      lead: "Five businesses spread across the maturity curve — from regulatory catalysts to revenue-generating platforms.",
      points: [
        ["Diversified risk stages", "Pre-revenue assets with near regulatory catalysts (C, D) sit alongside commercial businesses with revenue (E, F, G)."],
        ["Clear catalysts", "Approval decisions (C, D), a path to profitability (E), scale and margins (F), and customer adoption (G)."],
        ["Why the Gulf", "Hospital procurement, local registration, regional manufacturing and licensing give GCC partners a strategic role beyond capital."]
      ],
      maturity: { left: "Regulatory catalyst", right: "Commercial scale", order: ["D", "C", "G", "E", "F"] },
      members: "Companies C · D · E · F · G"
    }
  },
  companies: [
    {
      code: "A", prio: 1, sectorKey: "ai", sector: "AI Compute Infrastructure",
      headline: "GPU capacity run as a token-producing operating business — not a hardware bet.",
      what: "The operator designs, commissions and runs an inference “production line” on a compute center’s B200/B300 GPUs, sells access to leading open-weight AI models by API, and meters every call. The compute owner keeps ownership and control of the GPUs; monthly revenue first reimburses an agreed compute cost, and the remaining surplus is split by contract.",
      stats: [["US$36.9k–76.3k", "Reference monthly surplus per 8-GPU server at 50–80% sell-through, before split (sponsor model)"], ["+32%", "Total throughput vs official reference configuration on 8×B200 (sponsor test, one model family)"]],
      why: [
        ["More billable output per GPU", "Sponsor tests on 8×B200 show +32–36% total throughput against an official reference configuration, and ~5.7× faster per-request generation at comparable per-GPU throughput on another model. More sellable tokens per GPU-hour is the core economic lever."],
        ["Transparent unit economics", "Each 8-GPU server carries ~US$28,800 per month of compute cost (US$5 per GPU-hour accounting rate × 720 hours). At 50–80% sell-through, reference revenue is US$65.7k–105.1k and surplus US$36.9k–76.3k per month."],
        ["Aligned, asset-light structure", "Cost recovery first, then profit share. Routing, metering, billing and monthly revenue, cost and profit-share reports are reconcilable. GPU ownership is not transferred; the sponsor states export-control compliance, which needs an independent legal opinion."]
      ],
      extra: "econ",
      stage: [
        ["Technology", "Operating software stack and benchmarks on B200; B300 not yet tested"],
        ["Customers", "No contracted customers or offtake disclosed — the revenue table is a pricing reference, not a budget"],
        ["Financials", "No historical revenue, capex or payback data supplied"],
        ["Sensitivities", "Sell-through (billable vs theoretical output), token prices, cache-hit mix (a ~90% cached-input scenario is not modelled and could lower revenue), power, operations, GPU depreciation"]
      ],
      exit: { level: "near", qual: "conditional", text: "Value is realized as monthly operating cash flow from the profit share once paying demand is contracted. Joint operation beats plain leasing only if the owner’s share exceeds lease income minus compute cost (x·P > L − C), to be tested on live data. No equity exit route is defined." },
      gcc: "Gulf owners of B200/B300 capacity could pilot one cluster under a revenue-share contract, measured on real billable output, before scaling.",
      verify: "Signed customer demand; live sell-through and cache mix; GPU capex and payback; export-control legal opinion; B300 results."
    },
    {
      code: "B", prio: 2, sectorKey: "ai", sector: "Data Center Cooling",
      headline: "Liquid cooling for the rack-density step-change in AI data centers.",
      what: "Designs and manufactures liquid-cooling systems — coolant distribution units (CDUs), primary-side pump stations, piping, liquid-cooled racks and cold-aisle integration — and delivers turnkey liquid-cooled computing rooms. Revenue comes from equipment and project sales to data-center builders and operators, alongside an established power-electronics cooling business.",
      stats: [["8,000+", "Units delivered across China, North America, Southeast Asia, the Middle East and India"], ["2.5 MW", "Largest single CDU capacity in the product range"]],
      why: [
        ["Rides the density curve", "AI racks are moving past 100 kW, where direct-to-chip liquid cooling becomes a prerequisite. The company sells into that bottleneck rather than into GPU price cycles."],
        ["Full stack, plant room to rack", "Range spans 60 kW in-rack, 500 kW in-row and 2.5 MW centralized CDUs plus 125 kW–2.5 MW pump stations — single-vendor delivery with factory-assembled, cabinet-level modules that cut on-site work."],
        ["Delivered overseas references", "Data-center projects include a 2.5 MW liquid-cooled computing integration and a UL-certified pump station in the U.S., and a 300 m³ pump station in Singapore. 70+ patents; core team designing liquid cooling for 10+ years."]
      ],
      stage: [
        ["Company", "Founded 2020; team in two-phase/liquid cooling since 2014; data-center segment entered 2022"],
        ["Commercial", "~1,500 units produced in 2024; output value above RMB 70m (2024, all segments, company figure)"],
        ["Capacity", "2,000+ units per year of batch-customized manufacturing; 1–5 year warranty options"],
        ["Demonstrated vs proposed", "Cabinet-level modular and turnkey room delivery are demonstrated. Containerized systems and Gulf assembly/R&D are proposed, not yet evidenced"],
        ["Not supplied", "Segment revenue, margins, backlog, funding history and valuation"]
      ],
      exit: { level: "near", qual: "", text: "Monetization is already through product and project sales; growth depends on winning AI data-center projects. The equity entry point and exit route are to be determined — no financing round or valuation was supplied." },
      gcc: "A local assembly, service and spare-parts hub for Gulf AI data centers; standard specifications cover −25 to 40 °C ambient, so heat-rejection design must be validated for Gulf summer peaks above 45 °C.",
      verify: "Audited revenue by segment; data-center backlog and customers; high-ambient performance; containerized product readiness."
    },
    {
      code: "C", prio: 3, sectorKey: "hc", sector: "Cell Therapy",
      headline: "Randomized pivotal data in late-line melanoma, with a lighter treatment regimen.",
      what: "Develops tumor-infiltrating lymphocyte (TIL) therapy: a patient’s own tumor-reactive immune cells are expanded and re-infused. The lead program treats advanced melanoma after anti-PD-1 therapy, with lung cancer and combination programs behind it. The model is per-course product sales after approval, plus potential licensing.",
      stats: [["42% vs 6.1%", "Objective response rate vs control, randomized pivotal Phase II, post-PD-1 melanoma (company data)"], ["0.43", "Progression-free survival hazard ratio (company data)"]],
      why: [
        ["Evidence where options are few", "The pivotal Phase II in anti-PD-1-treated advanced melanoma met its primary endpoint; October 2026 extended follow-up reported 44.0% vs 8.2% response. This is indication-specific and cannot be extrapolated to all solid tumors."],
        ["A potentially lighter regimen", "The U.S.-approved TIL therapy (Iovance’s Amtagvi, accelerated approval 2024) uses lymphodepleting chemotherapy before infusion and IL-2 afterwards, with significant inpatient and toxicity management. Company C aims to avoid intensive lymphodepletion and IL-2, which may lower toxicity, care intensity and total cost — care-setting data must confirm this; not every patient of either regimen falls at the extremes."],
        ["Affordability and pipeline depth", "Indicative ~RMB 700k per course in China (management). U.S. all-in treatment cost is cited above US$1m, but product price and full treatment cost are not directly comparable. Pipeline covers lung cancer, adjuvant and combination programs."]
      ],
      stage: [
        ["Regulatory", "Melanoma marketing application accepted in China and under priority review — not yet approved"],
        ["Clinical", "Lung cancer is a separate Phase II-stage program; exact status to be reconciled"],
        ["Manufacturing", "Commercial-scale GMP facility (company statement)"],
        ["Financing", "RMB 600m+ raised; latest recorded post-money RMB 2.137bn. Management cited ~RMB 4bn for the current round — unreconciled"],
        ["Listed comparator", "Iovance: ~US$3.1bn market cap (24 Nov 2026); 2026 revenue guidance US$410–420m, including a non-TIL product"]
      ],
      exit: { level: "medium", qual: "", text: "First product revenue depends on approval timing. Potential realization routes are licensing/BD, trade sale, or a Hong Kong or A-share IPO — no verified timetable." },
      gcc: "Regional licensing or partnership with Gulf oncology centers, covering product registration and cell-therapy treatment capability.",
      verify: "Regulatory file and review status; response durability and safety; lymphodepletion intensity and real care cost; current round terms."
    },
    {
      code: "D", prio: 4, sectorKey: "hc", sector: "Animal Health",
      headline: "From surgical spaying to a single injection — a potential world-first candidate.",
      what: "Develops a feline contraceptive vaccine candidate intended to provide around one year or longer of contraception from an injection, plus long-acting feline and canine contraception and other companion-animal biologics — six programs in total. The intended model is per-dose sales through veterinary clinics, plus international licensing.",
      stats: [["6", "Companion-animal programs; lead feline contraceptive in registration review"], ["~US$5bn", "Illustrative long-term feline and canine contraception market (not validated)"]],
      why: [
        ["Category creation", "Today’s answer is irreversible surgery with anesthesia and recovery. An injection could offer time-limited contraception and preserve future breeding if reversibility is proven. Contraception, estrus suppression, duration and fertility recovery are separate claims, each needing its own evidence."],
        ["Wider service channel", "An injection can be given in smaller clinics without operating theatres, widening distribution and supporting per-dose and repeat-dose economics."],
        ["Licensing optionality", "China registration plus U.S. INAD status open a path to international partners; discussions with multinational animal-health companies are reported, with no terms yet."]
      ],
      stage: [
        ["Regulatory", "China registration review and U.S. INAD status — neither is marketing authorization. Veterinary GMP manufacturing compliance is separate from product approval"],
        ["Clinical", "Duration, reversibility and safety data to be verified"],
        ["Revenue", "No meaningful product revenue"],
        ["Financing", "Series A extension (May 2025) at ~RMB 687m post-money — historical, not current pricing"],
        ["Facilities", "6,000 m² pilot and manufacturing footprint"]
      ],
      exit: { level: "medium", qual: "", text: "Revenue starts only on approval. Value could be realized through territorial licensing/BD, trade sale or IPO; none is agreed." },
      gcc: "Registration and distribution through Gulf veterinary networks once approved; humane companion-animal population programs could be assessed later.",
      verify: "Registration filing and review stage; GMP certificate; efficacy duration and reversibility data; adverse events; licensing terms."
    },
    {
      code: "E", prio: 5, sectorKey: "hc", sector: "Radiotherapy Equipment",
      headline: "Proton therapy that fits into a standard radiotherapy vault.",
      what: "Designs, manufactures and services compact single-room proton therapy systems, sold to hospitals at an indicative ~RMB 200m per unit, alongside a photon radiotherapy line. U.S.-origin technology with a U.S.–China operating base.",
      stats: [[">50%", "Share of U.S. compact single-room proton systems in clinical operation (May 2026, company data)"], ["~111 m²", "Standard vault size the most compact model fits (≈1,200 sq ft)"]],
      why: [
        ["Adopted by a top-tier institution", "A leading U.S. academic medical center treated its first patient on the most compact model in June 2026. A leading U.S. research university collaborated on early magnet R&D — a research partner, not a treatment-site customer."],
        ["Capital efficiency for hospitals", "Fitting an existing radiotherapy vault instead of a multi-storey proton center lowers space, construction and capital barriers — potentially widening the hospital customer base."],
        ["Established niche position", "30+ hospitals, 14,000+ patients treated; approvals in the U.S., Europe, Canada and Taiwan; 400+ patents and US$750m+ cumulative R&D (company data). Leadership claims apply to the compact single-room segment only."]
      ],
      stage: [
        ["Revenue", "~RMB 700m in 2025 (mgmt); 2026E RMB 1.0–1.1bn (management vs company materials)"],
        ["Geography", "65–70% of revenue from overseas"],
        ["Units", "~4–5 systems sold in 2025; ~11 targeted for 2026. Contract, installation, acceptance and cash collection are separate milestones"],
        ["Profitability", "Modest 2026 loss; profit expected from 2027 (management expectation)"],
        ["Valuation", "~RMB 7bn indicative, unverified"]
      ],
      exit: { level: "medium", qual: "", text: "Product revenue already flows; the investment case turns on reaching profitability in 2027E and scaling unit deliveries. IPO or strategic sale are possible routes; none is scheduled." },
      gcc: "Regional proton treatment-center partnerships, hospital procurement, and local assembly and service capacity.",
      verify: "Installed base and acceptance certificates; backlog and receivables; total center cost; ownership and enterprise value; scope of any local manufacturing."
    },
    {
      code: "F", prio: 6, sectorKey: "hc", sector: "Medical Devices",
      headline: "A scaled, profitable, multi-franchise MedTech platform.",
      what: "Develops, manufactures and sells devices across three franchises — minimally invasive surgery (staplers, energy devices), vascular intervention (neuro and cardiovascular) and structural heart (transcatheter valves) — to hospitals mainly in China, with growing international sales.",
      stats: [["~RMB 2bn", "Revenue (2026, company materials)"], ["~RMB 0.3bn", "Annual profit (management, unaudited)"]],
      why: [
        ["Diversified revenue base", "Three franchises covering ~4,000, ~2,600 and ~300 hospitals respectively, each with a dedicated sales team (200 / 120 / 100) — a platform, not a single-product bet."],
        ["Leading domestic positions", "Ranked among China’s largest domestic surgical franchises, #2 domestic structural heart and top-3 domestic neurovascular (company rankings, to be verified by category)."],
        ["Two-way global partnerships", "Brings overseas vascular innovation into China and licenses technology out — a global structural-heart leader acquired certain ex-China rights in 2024. Sales presence in five regions, including the Middle East and Africa."]
      ],
      stage: [
        ["Revenue", "~RMB 2.0–2.1bn; franchise split ~RMB 0.8–0.9bn / 0.6bn / 0.3bn (sum 1.7–1.8bn — gap to be reconciled)"],
        ["Overseas", "~RMB 400m (~20%, company materials) vs ~30% (management) — to be reconciled"],
        ["Profit", "~RMB 300m (management, unaudited)"],
        ["Valuation", "~US$1.8bn current indicative; a prior round reportedly at ~US$2.0bn (pre/post-money unconfirmed)"],
        ["Shareholders", "Backed by leading Asian private-equity, sovereign and global growth investors"]
      ],
      exit: { level: "near", qual: "", text: "Revenue and profit already exist. Realization could come through an IPO, secondary sale or trade sale; there is no timetable." },
      gcc: "Hospital procurement, product registration and distribution in the Gulf, regional manufacturing, or a jointly sponsored MedTech platform.",
      verify: "Audited accounts and segment margins; legal holding structure; overseas mix; terms and preferences of the last round."
    },
    {
      code: "G", prio: 7, sectorKey: "hc", sector: "Life Science Tools",
      headline: "Picks and shovels for the exosome and nanoparticle economy.",
      what: "Makes automated, membrane-based instruments, industrial purification systems and materials that separate and purify nanoscale biologics — extracellular vesicles (exosomes), lipid nanoparticles and viruses. Customers are research labs, biopharma, diagnostics and regenerative-medicine developers. The model is equipment sales plus potentially recurring membranes and consumables.",
      stats: [["500+", "Customers worldwide (management data)"], ["~50%", "Overseas revenue share, up from ~20%"]],
      why: [
        ["Exposure without single-brand risk", "Sells enabling tools to many downstream developers instead of depending on one exosome product’s clinical or cosmetic success. It is not a finished cosmetic brand."],
        ["High-throughput, multichannel platform", "Automated membrane process from bench to industrial scale, aiming to ease throughput and workflow limits of ultracentrifugation and tangential-flow filtration — head-to-head benchmarks still needed."],
        ["Global traction", "Revenue grew from ~RMB 20m to ~RMB 100m (~103% CAGR over four years, management data) across the Americas, Asia and Europe. Management says a global bioprocess-equipment leader bought its instruments — an unverified statement, not an endorsement."]
      ],
      stage: [
        ["Revenue", "~RMB 100m (management); equipment vs consumables split not supplied"],
        ["Products", "Research instruments, industrial purification systems and biomaterials; one system in development"],
        ["Valuation", "~RMB 1bn indicative, unverified"]
      ],
      exit: { level: "near", qual: "", text: "Revenue comes from instrument and consumable sales today. Equity entry terms and the exit route are to be determined." },
      gcc: "Research institutes, translational-medicine centers and contract manufacturers in the Gulf, supported by regional technical service and consumables supply.",
      verify: "Recurring consumables revenue; customer purchase evidence; benchmark data against ultracentrifugation and TFF; IP ownership; latest round terms."
    }
  ],
  closing: {
    kicker: "Next steps",
    title: "Selected collaboration models",
    models: [
      ["Co-investment", "Minority growth or pre-IPO equity alongside existing investors, sized per opportunity."],
      ["Operating pilots", "A revenue-share compute pilot (A) or a liquid-cooling deployment (B) measured on real data before scaling."],
      ["Licensing & distribution", "Regional rights for therapies, devices and tools (C, D, F, G) through Gulf hospitals, clinics and laboratories."],
      ["Localization", "Assembly, service and spare-parts capability in the Gulf (B, E, F)."]
    ],
    stepsTitle: "Proposed process",
    steps: ["Indicate opportunities of interest", "Confidentiality agreement and data access", "Management meetings and focused diligence on flagged items", "Structure, terms and governance"],
    notice: "Important notice: This material is a confidential, introductory summary for discussion with qualified recipients. It is not an offer or solicitation to buy or sell any security, and not investment, legal or tax advice. Information is derived from company and management materials and has not been independently verified; figures marked as management statements or estimates are unaudited, and forward-looking statements may not materialize. Company identities are withheld and will be disclosed only under confidentiality. Private investments are illiquid and may result in loss of capital."
  }
};

/* ============================== 简体中文 ============================== */
CONTENT.zh = {
  meta: {
    title: "精选投资机会",
    description: "初步投资交流：人工智能与数字基础设施、医疗健康与生命科学领域的精选投资机会。"
  },
  ui: {
    nav: { overview: "概览", ai: "AI与数字基建", hc: "医疗健康", next: "下一步" },
    company: "公司",
    priority: "优先级",
    whatItDoes: "业务简介",
    whyInvest: "投资亮点",
    stage: "当前发展与财务阶段",
    exit: "变现与退出路径",
    gcc: "海湾地区（GCC）合作角度",
    verify: "投资前待核实",
    visibility: "可见度",
    levels: { near: "近期", medium: "中期", long: "长期", tbd: "待定" },
    menu: "目录",
    top: "回到首页",
    deck: { prev: "上一页", next: "下一页", contents: "目录", close: "关闭", hint: "使用 ← → 键、左右滑动或下方箭头翻页", draft: "讨论稿", thesis: "概要", economics: "单位经济", terms: "阶段与退出", cover: "封面" },
    econTitle: "参考单位经济 —— 一台8卡B200服务器，每月（美元）",
    econCols: ["产能销售率", "收入 R", "算力成本 C", "经营余额 P = R − C"],
    econNote: "项目方模型：三款开源权重模型按官方目录价五折的算术平均，不含缓存，按30天计。并非预算或收益预测。算力方先回收成本C，余额P按合同由算力方（x）与运营方（y）分配。",
    chainTitle: "真正决定现金流的因素",
    chain: ["已装机GPU", "可计费销售率", "已签约需求", "Token价格与缓存比例", "收入 R", "− 电力、运维与融资成本", "余额分润"],
    pending: "信息待补充"
  },
  cover: {
    kicker: "初步投资交流 · 2026年11月",
    title: "精选投资机会",
    sub: "横跨两大领域的七个投资机会 —— 人工智能与数字基础设施、医疗健康与生命科学 —— 面向海湾地区投资者、战略合作伙伴及家族办公室。",
    note: "保密 · 仅供交流讨论 · 不构成证券要约",
    cta: "查看概览"
  },
  overview: {
    kicker: "执行概览",
    title: "两大领域、七个机会、一个讨论顺序",
    lead: "展示顺序为建议的讨论次序，并非对预期回报的排名。",
    cols: ["#", "机会", "领域", "核心投资逻辑", "当前阶段", "变现 / 退出可见度"],
    rows: [
      ["1", "A", "AI算力基础设施", "以“成本回收 + 利润分成”模式，将已装机的B200/B300算力转化为可计费的推理收入", "运营方案阶段；已完成B200实测；未披露已签约客户", ["near", "取决于签约需求"]],
      ["2", "B", "数据中心液冷", "面向高密度AI机柜的液冷设备与整体系统；累计交付8,000台/套以上", "已商业化；产品与项目销售，含海外数据中心案例", ["near", ""]],
      ["3", "C", "细胞治疗", "后线黑色素瘤的随机关键性数据，治疗方案更温和", "上市申请在中国优先审评中；肺癌处于II期阶段", ["medium", ""]],
      ["4", "D", "动物保健", "注射式、潜在可逆的猫用避孕疫苗候选产品", "中国注册审评中；美国INAD状态；尚无实质收入", ["medium", ""]],
      ["5", "E", "放疗设备", "可装入标准放疗机房的紧凑型单室质子治疗系统", "已商业化；2025年收入约7亿元人民币（管理层）；目标2027年盈利", ["medium", ""]],
      ["6", "F", "医疗器械", "已具规模、三大产品线、有收入有利润的医疗器械平台", "已商业化；收入约20亿元、利润约3亿元人民币（管理层）", ["near", ""]],
      ["7", "G", "生命科学工具", "外泌体及纳米颗粒分离纯化的“卖铲人”工具", "已商业化；收入约1亿元人民币（管理层）；500+客户", ["near", ""]],
      ["—", "H", "信息待补充", "公司身份、业务范围及资料尚未确认 —— 暂不作任何陈述", "—", ["tbd", ""]]
    ],
    foot: "可见度反映根据现有资料判断的各业务距离变现或价值实现事件的远近，并非回报或退出时间的预测。“管理层”指管理层口述，未经审计。"
  },
  sectors: {
    ai: {
      kicker: "领域 A",
      title: "人工智能与数字基础设施",
      lead: "价值正在从“拥有GPU”转向“生产可计费的算力”，以及让高密度机柜持续运转的物理系统。",
      points: [
        ["利用率才是投资本身", "GPU只有卖出去才产生收益。回收期取决于签约需求、Token定价、电力成本和折旧，而不是理论峰值产能。"],
        ["高密度迫使液冷", "当前机柜级GPU系统单柜功率远超100千瓦（厂商公开规格），已超出风冷的实际极限。"],
        ["为何是海湾地区", "电力、资本和国家AI战略已经具备；运营能力与高密度散热是瓶颈，这正是这两个机会所解决的问题。"]
      ],
      members: "公司 A 负责算力运营 · 公司 B 负责散热"
    },
    hc: {
      kicker: "领域 B",
      title: "医疗健康与生命科学",
      lead: "五家企业分布在成熟度曲线的不同位置 —— 从监管催化剂到已产生收入的平台。",
      points: [
        ["风险阶段分散", "临近监管节点的未盈利资产（C、D）与已有收入的商业化企业（E、F、G）并存。"],
        ["催化剂清晰", "审批结果（C、D）、盈利路径（E）、规模与利润率（F）以及客户采用（G）。"],
        ["为何是海湾地区", "医院采购、本地注册、区域制造和授权许可，使海湾合作方在资本之外发挥战略作用。"]
      ],
      maturity: { left: "监管催化", right: "商业化规模", order: ["D", "C", "G", "E", "F"] },
      members: "公司 C · D · E · F · G"
    }
  },
  companies: [
    {
      code: "A", prio: 1, sectorKey: "ai", sector: "AI算力基础设施",
      headline: "把GPU算力当作生产Token的经营性业务来运营，而不是押注硬件。",
      what: "运营方在算力中心的B200/B300 GPU上设计、投产并运营推理“产线”，通过API对外销售主流开源权重AI模型的调用服务，并对每一次调用计量。算力方保留GPU的所有权和控制权；每月收入先返还约定的算力成本，剩余余额按合同分配。",
      stats: [["3.69万–7.63万美元", "每台8卡服务器在50%–80%销售率下的参考月余额（分润前，项目方模型）"], ["+32%", "8×B200上相对官方参考配置的总吞吐提升（项目方实测，单一模型系列）"]],
      why: [
        ["每张GPU可计费产出更高", "项目方在8×B200上的实测显示，总吞吐比官方参考配置高32%–36%；另一款模型在相近单卡吞吐下，单请求生成速度约快5.7倍。每GPU小时可销售的Token越多，经济性越好。"],
        ["单位经济透明", "每台8卡服务器每月算力成本约28,800美元（按每卡时5美元核算 × 720小时）。在50%–80%销售率下，参考收入为6.57万–10.51万美元，余额为3.69万–7.63万美元/月。"],
        ["利益一致、轻资产结构", "先回收成本，再分配利润。路由、计量、计费及月度收入、成本和分润报表均可对账。不转移GPU所有权；项目方称符合出口管制要求，须取得独立法律意见。"]
      ],
      extra: "econ",
      stage: [
        ["技术", "运营软件系统及B200实测已完成；B300尚未实测"],
        ["客户", "未披露已签约客户或包销协议 —— 收入表仅为价格参考，并非预算"],
        ["财务", "未提供历史收入、资本开支或回收期数据"],
        ["敏感因素", "销售率（可计费产出与理论产出之差）、Token价格、缓存命中比例（约90%缓存输入的情景未纳入测算，可能降低收入）、电力、运维、GPU折旧"]
      ],
      exit: { level: "near", qual: "有条件", text: "在签订付费需求后，价值以利润分成的月度经营现金流实现。只有当算力方分成高于租赁收入减算力成本（x·P > L − C）时，联合运营才优于单纯出租，须以实际运营数据检验。尚未设定股权退出路径。" },
      gcc: "拥有B200/B300算力的海湾业主，可先以收入分成合同试点一个集群，以真实可计费产出衡量后再扩大规模。",
      verify: "已签约的客户需求；实际销售率与缓存比例；GPU资本开支与回收期；出口管制法律意见；B300实测结果。"
    },
    {
      code: "B", prio: 2, sectorKey: "ai", sector: "数据中心液冷",
      headline: "为AI数据中心机柜功率密度的跃升提供液冷方案。",
      what: "设计和制造液冷系统 —— 冷却液分配单元（CDU）、一次侧泵站、管路、液冷机柜及冷通道集成 —— 并交付整体液冷算力机房。收入来自向数据中心建设方和运营方销售设备与项目，同时拥有成熟的电力电子液冷业务。",
      stats: [["8,000+", "累计交付台/套，覆盖中国、北美、东南亚、中东和印度"], ["2.5 MW", "产品线中单台CDU的最大散热能力"]],
      why: [
        ["顺应功率密度曲线", "AI机柜功率正越过100千瓦，此时冷板式液冷成为必要条件。公司卖的是这一瓶颈环节，而不受GPU价格周期左右。"],
        ["从机房到机柜的全栈产品", "产品覆盖60千瓦机架式、500千瓦列间式、2.5兆瓦集中式CDU，以及125千瓦–2.5兆瓦泵站 —— 单一供应商交付，工厂预装的柜级模块减少现场施工。"],
        ["已交付的海外案例", "数据中心项目包括美国2.5兆瓦液冷算力集成项目、美国UL认证泵站，以及新加坡300立方米泵站。拥有70余项专利；核心团队液冷设计经验超过10年。"]
      ],
      stage: [
        ["公司", "2020年成立；团队自2014年起从事两相/液冷；2022年进入数据中心领域"],
        ["商业化", "2024年生产约1,500台；产值超过7,000万元人民币（2024年，全部业务，公司口径）"],
        ["产能", "年产2,000台以上的批量定制化制造；质保1–5年可选"],
        ["已验证 vs 规划中", "柜级模块化与整体机房交付已有案例。集装箱式系统及海湾地区组装/研发为规划，尚无证据"],
        ["未提供", "分业务收入、毛利率、在手订单、融资历史和估值"]
      ],
      exit: { level: "near", qual: "", text: "已通过产品和项目销售实现变现；增长取决于赢得AI数据中心项目。股权进入时点和退出路径待定 —— 未提供融资轮次或估值。" },
      gcc: "可作为海湾AI数据中心的本地组装、服务和备件中心；标准规格适用环境温度为−25至40°C，散热设计须针对海湾夏季超过45°C的峰值进行验证。",
      verify: "经审计的分业务收入；数据中心在手订单与客户；高温环境性能；集装箱式产品成熟度。"
    },
    {
      code: "C", prio: 3, sectorKey: "hc", sector: "细胞治疗",
      headline: "后线黑色素瘤的随机关键性数据，配合更温和的治疗方案。",
      what: "开发肿瘤浸润淋巴细胞（TIL）疗法：扩增患者自身识别肿瘤的免疫细胞后回输。核心项目针对抗PD-1治疗后的晚期黑色素瘤，肺癌及联合治疗项目紧随其后。商业模式为获批后按疗程销售产品，并可能进行对外授权。",
      stats: [["42% vs 6.1%", "客观缓解率对比对照组，随机关键性II期，PD-1经治黑色素瘤（公司数据）"], ["0.43", "无进展生存期风险比（公司数据）"]],
      why: [
        ["在治疗选择稀缺处取得证据", "PD-1经治晚期黑色素瘤的关键性II期研究达到主要终点；2026年10月延长随访报告缓解率为44.0%对8.2%。该证据仅限此适应症，不能外推至所有实体瘤。"],
        ["潜在更温和的方案", "美国已获批的TIL疗法（Iovance的Amtagvi，2024年加速批准）在回输前使用清淋化疗、回输后使用IL-2，住院与毒性管理要求较高。公司C旨在避免高强度清淋和IL-2，可能降低毒性、护理强度和总费用 —— 须以治疗场景数据证实；并非两种方案的每位患者都处于极端情形。"],
        ["可负担性与管线深度", "中国单疗程指示价约70万元人民币（管理层）。美国综合治疗费用据称超过100万美元，但产品价格与全部治疗费用不能直接比较。管线涵盖肺癌、辅助治疗及联合治疗项目。"]
      ],
      stage: [
        ["监管", "黑色素瘤上市申请已在中国获受理并进入优先审评 —— 尚未获批"],
        ["临床", "肺癌为独立的II期阶段项目；具体状态待核对"],
        ["生产", "具备商业化规模的GMP设施（公司表述）"],
        ["融资", "累计融资超过6亿元人民币；最新记录投后估值21.37亿元人民币。管理层称本轮约40亿元人民币 —— 尚未核对一致"],
        ["上市可比公司", "Iovance：市值约31亿美元（2026年11月24日）；2026年收入指引4.10亿–4.20亿美元，包含非TIL产品"]
      ],
      exit: { level: "medium", qual: "", text: "首个产品收入取决于审批时间。可能的价值实现途径包括授权/BD、并购，或香港、A股上市 —— 尚无经核实的时间表。" },
      gcc: "与海湾肿瘤中心开展区域授权或合作，涵盖产品注册和细胞治疗能力建设。",
      verify: "监管申报文件及审评状态；缓解持续时间与安全性；清淋强度与实际治疗费用；本轮融资条款。"
    },
    {
      code: "D", prio: 4, sectorKey: "hc", sector: "动物保健",
      headline: "从外科绝育到一次注射 —— 潜在的全球首创候选产品。",
      what: "开发猫用避孕疫苗候选产品，目标是通过一次注射实现约一年或更长的避孕效果；另有长效猫用、犬用避孕及其他伴侣动物生物制品 —— 共六个项目。计划采用经兽医诊所按针销售，并开展国际授权的模式。",
      stats: [["6", "个伴侣动物项目；核心猫用避孕产品处于注册审评阶段"], ["约50亿美元", "示意性的猫犬避孕长期市场规模（未经验证）"]],
      why: [
        ["开创新品类", "现有方案是需麻醉和恢复期的不可逆手术。注射方式可能提供有时限的避孕，若可逆性得到证实，还可保留日后繁育的选择。避孕、抑制发情、持续时间和生育力恢复是不同的主张，各自需要证据。"],
        ["拓宽服务渠道", "注射可在没有手术室的小型诊所完成，拓宽分销渠道，并支撑按针收费和重复注射的经济模式。"],
        ["授权选择权", "中国注册加美国INAD状态，为国际合作打开通道；据称正与跨国动物保健企业洽谈，尚无条款。"]
      ],
      stage: [
        ["监管", "中国注册审评及美国INAD状态 —— 均不等于上市许可。兽药GMP生产合规与产品批准是两回事"],
        ["临床", "持续时间、可逆性和安全性数据待核实"],
        ["收入", "尚无实质产品收入"],
        ["融资", "A轮扩展轮（2025年5月）投后估值约6.87亿元人民币 —— 为历史定价，非当前价格"],
        ["设施", "6,000平方米中试及生产场地"]
      ],
      exit: { level: "medium", qual: "", text: "获批后才开始产生收入。价值可能通过区域授权/BD、并购或上市实现；目前均未达成。" },
      gcc: "获批后经海湾兽医网络注册和分销；之后可评估人道的伴侣动物数量管理项目。",
      verify: "注册申报及审评阶段；GMP证书；有效持续时间与可逆性数据；不良反应；授权条款。"
    },
    {
      code: "E", prio: 5, sectorKey: "hc", sector: "放疗设备",
      headline: "可装入标准放疗机房的质子治疗系统。",
      what: "设计、制造并服务紧凑型单室质子治疗系统，向医院销售，指示性单价约2亿元人民币，同时拥有光子放疗产品线。技术源自美国，在美中两地运营。",
      stats: [[">50%", "美国已投入临床运营的紧凑型单室质子系统市场份额（2026年5月，公司数据）"], ["约111 m²", "最紧凑型号可装入的标准机房面积（约1,200平方英尺）"]],
      why: [
        ["获顶级机构采用", "一家美国领先的学术医疗中心于2026年6月使用最紧凑型号治疗了首位患者。一所美国顶尖研究型大学曾参与早期磁体研发 —— 是研究合作方，而非治疗端客户。"],
        ["提升医院资本效率", "装入现有放疗机房，而不必建设多层质子中心，降低空间、土建和资本门槛 —— 有望扩大医院客户群。"],
        ["细分领域地位稳固", "30余家医院，累计治疗14,000余名患者；获美国、欧洲、加拿大及中国台湾地区批准；400余项专利，累计研发投入超过7.5亿美元（公司数据）。领先地位仅限紧凑型单室细分市场。"]
      ],
      stage: [
        ["收入", "2025年约7亿元人民币（管理层）；2026年预计10亿–11亿元人民币（管理层与公司资料口径不同）"],
        ["地域", "65%–70%收入来自海外"],
        ["台数", "2025年销售约4–5台；2026年目标约11台。签约、安装、验收和回款是不同节点"],
        ["盈利", "2026年小幅亏损；预计2027年起盈利（管理层预期）"],
        ["估值", "指示性约70亿元人民币，未经核实"]
      ],
      exit: { level: "medium", qual: "", text: "已有产品收入；投资逻辑取决于2027年预期实现盈利及交付台数增长。上市或战略出售为可能途径，均无时间表。" },
      gcc: "区域质子治疗中心合作、医院采购，以及本地组装和服务能力。",
      verify: "装机量与验收证书；在手订单与应收账款；中心总造价；股权与企业价值；本地制造范围。"
    },
    {
      code: "F", prio: 6, sectorKey: "hc", sector: "医疗器械",
      headline: "已具规模、盈利、多产品线的医疗器械平台。",
      what: "在三大产品线开发、制造并销售器械 —— 微创外科（吻合器、能量器械）、血管介入（神经及心血管）和结构性心脏病（经导管瓣膜）—— 主要面向中国医院，国际销售持续增长。",
      stats: [["约20亿元人民币", "收入（2026年，公司资料）"], ["约3亿元人民币", "年利润（管理层，未经审计）"]],
      why: [
        ["收入基础多元", "三大产品线分别覆盖约4,000、2,600和300家医院，各有专属销售团队（200 / 120 / 100人）—— 是平台，而非单一产品押注。"],
        ["国内领先地位", "位列中国最大的国产外科产品线之一、国产结构性心脏病第二、国产神经介入前三（公司口径，需按品类核实）。"],
        ["双向全球合作", "将海外血管介入创新引入中国，同时对外授权技术 —— 一家全球结构性心脏病龙头于2024年收购了部分中国以外权益。销售覆盖包括中东和非洲在内的五大区域。"]
      ],
      stage: [
        ["收入", "约20亿–21亿元人民币；三大线约8–9亿 / 6亿 / 3亿元人民币（合计17–18亿元 —— 差额待核对）"],
        ["海外", "约4亿元人民币（约20%，公司资料）对比约30%（管理层）—— 待核对"],
        ["利润", "约3亿元人民币（管理层，未经审计）"],
        ["估值", "当前指示性约18亿美元；上一轮据称约20亿美元（投前/投后未确认）"],
        ["股东", "由亚洲领先的私募股权、主权及全球成长型投资者支持"]
      ],
      exit: { level: "near", qual: "", text: "已有收入和利润。可通过上市、老股转让或并购实现价值；无时间表。" },
      gcc: "海湾地区的医院采购、产品注册与分销、区域制造，或共同发起医疗器械平台。",
      verify: "经审计财务及分线毛利率；法律控股架构；海外收入占比；上一轮条款与优先权。"
    },
    {
      code: "G", prio: 7, sectorKey: "hc", sector: "生命科学工具",
      headline: "外泌体与纳米颗粒经济中的“卖铲人”。",
      what: "生产基于膜技术的自动化仪器、工业化纯化系统和材料，用于分离纯化纳米级生物颗粒 —— 细胞外囊泡（外泌体）、脂质纳米颗粒和病毒。客户为科研实验室、生物制药、诊断和再生医学企业。商业模式为设备销售，加上可能的膜材料与耗材复购。",
      stats: [["500+", "全球客户（管理层数据）"], ["约50%", "海外收入占比，由约20%提升"]],
      why: [
        ["分享行业增长，不押注单一品牌", "向众多下游开发者销售关键工具，而不依赖某一款外泌体产品的临床或医美成败。公司并非医美终端品牌。"],
        ["高通量、多通道平台", "从实验室到工业规模的自动化膜工艺，旨在缓解超速离心和切向流过滤（TFF）的通量与流程限制 —— 仍需同条件对比数据。"],
        ["全球化进展", "收入由约2,000万元增至约1亿元人民币（四年复合增长约103%，管理层数据），覆盖美洲、亚洲和欧洲。管理层称一家全球生物工艺设备龙头采购了其仪器 —— 属未经核实的表述，不代表背书。"]
      ],
      stage: [
        ["收入", "约1亿元人民币（管理层）；未提供设备与耗材拆分"],
        ["产品", "科研仪器、工业纯化系统和生物材料；一款系统在研"],
        ["估值", "指示性约10亿元人民币，未经核实"]
      ],
      exit: { level: "near", qual: "", text: "目前收入来自仪器和耗材销售。股权进入条款与退出路径待定。" },
      gcc: "面向海湾地区的科研院所、转化医学中心和合同生产企业，辅以区域技术服务和耗材供应。",
      verify: "耗材复购收入；客户采购凭证；与超速离心和TFF的对比数据；知识产权归属；最新一轮条款。"
    }
  ],
  closing: {
    kicker: "下一步",
    title: "可选合作模式",
    models: [
      ["联合投资", "与现有投资人共同进行少数股权成长期或Pre-IPO投资，按项目确定规模。"],
      ["运营试点", "收入分成的算力试点（A）或液冷部署（B），以真实数据验证后再扩大。"],
      ["授权与分销", "通过海湾医院、诊所和实验室获取疗法、器械与工具的区域权益（C、D、F、G）。"],
      ["本地化", "在海湾地区建立组装、服务和备件能力（B、E、F）。"]
    ],
    stepsTitle: "建议流程",
    steps: ["确定感兴趣的机会", "签署保密协议并获取资料", "管理层会谈及针对标注事项的重点尽调", "交易结构、条款与治理"],
    notice: "重要提示：本材料为保密的初步摘要，仅供与合格对象讨论之用。本材料不构成买卖任何证券的要约或招揽，亦不构成投资、法律或税务建议。信息来源于公司及管理层资料，未经独立核实；标注为管理层口述或预测的数据未经审计，前瞻性陈述可能无法实现。公司身份暂不披露，仅在保密前提下提供。私募投资流动性低，可能导致本金损失。"
  }
};

/* ============================== العربية ============================== */
CONTENT.ar = {
  meta: {
    title: "فرص استثمارية مختارة",
    description: "نقاش استثماري تمهيدي: فرص مختارة في الذكاء الاصطناعي والبنية التحتية الرقمية، والرعاية الصحية وعلوم الحياة."
  },
  ui: {
    nav: { overview: "نظرة عامة", ai: "البنية الرقمية", hc: "الرعاية الصحية", next: "الخطوات التالية" },
    company: "الشركة",
    priority: "الأولوية",
    whatItDoes: "ماذا تفعل الشركة",
    whyInvest: "لماذا الاستثمار",
    stage: "مرحلة التطوير والوضع المالي الحالي",
    exit: "مسار تحقيق الإيرادات والتخارج",
    gcc: "البُعد الاستراتيجي الخليجي",
    verify: "للتحقق قبل الاستثمار",
    visibility: "وضوح الرؤية",
    levels: { near: "قريب الأجل", medium: "متوسط الأجل", long: "طويل الأجل", tbd: "يُحدَّد لاحقاً" },
    menu: "القائمة",
    top: "العودة إلى البداية",
    deck: { prev: "السابق", next: "التالي", contents: "المحتويات", close: "إغلاق", hint: "استخدم مفاتيح الأسهم أو اسحب أو الأسهم أدناه للتنقل بين الصفحات", draft: "مسودة للنقاش", thesis: "نظرة عامة", economics: "اقتصاديات الوحدة", terms: "المرحلة والتخارج", cover: "الغلاف" },
    econTitle: "اقتصاديات الوحدة المرجعية — خادم واحد بثماني وحدات B200، شهرياً (دولار أمريكي)",
    econCols: ["نسبة بيع الطاقة", "الإيرادات R", "تكلفة الحوسبة C", "الفائض التشغيلي P = R − C"],
    econNote: "نموذج الجهة الراعية: متوسط ثلاثة نماذج مفتوحة الأوزان بنصف سعر القائمة الرسمي، دون تخزين مؤقت، لشهر من 30 يوماً. ليس موازنة ولا توقعاً للعائد. يُقسَّم الفائض P تعاقدياً بين مالك الحوسبة (x) والمشغّل (y) بعد استرداد المالك للتكلفة C.",
    chainTitle: "ما الذي يحدد التدفق النقدي فعلاً",
    chain: ["وحدات GPU المركّبة", "نسبة البيع القابلة للفوترة", "الطلب المتعاقد عليه", "سعر الرمز ونسبة التخزين المؤقت", "الإيرادات R", "− الطاقة والتشغيل والتمويل", "تقاسم الفائض"],
    pending: "معلومات قيد الاستكمال"
  },
  cover: {
    kicker: "نقاش استثماري تمهيدي · نوفمبر 2026",
    title: "فرص استثمارية مختارة",
    sub: "سبع فرص في قطاعين — الذكاء الاصطناعي والبنية التحتية الرقمية، والرعاية الصحية وعلوم الحياة — موجّهة إلى المستثمرين والشركاء الاستراتيجيين والمكاتب العائلية في دول مجلس التعاون الخليجي.",
    note: "سري · للنقاش فقط · لا يُعدّ عرضاً للأوراق المالية",
    cta: "عرض النظرة العامة"
  },
  overview: {
    kicker: "الملخص التنفيذي",
    title: "قطاعان، سبع فرص، وترتيب واحد للنقاش",
    lead: "يعكس ترتيب العرض تسلسل النقاش المفضّل، وليس تصنيفاً للعوائد المتوقعة.",
    cols: ["#", "الفرصة", "القطاع", "أطروحة الاستثمار الأساسية", "المرحلة الحالية", "وضوح تحقيق الإيرادات / التخارج"],
    rows: [
      ["1", "A", "البنية التحتية للحوسبة بالذكاء الاصطناعي", "تحويل طاقة وحدات B200/B300 المركّبة إلى إيرادات استدلال قابلة للفوترة وفق نموذج استرداد التكلفة وتقاسم الأرباح", "مقترح تشغيلي؛ اختبارات أداء على B200؛ لم يُفصح عن عملاء متعاقدين", ["near", "مشروط بالطلب المتعاقد عليه"]],
      ["2", "B", "تبريد مراكز البيانات", "وحدات وأنظمة تبريد سائل متكاملة لخزائن الذكاء الاصطناعي عالية الكثافة؛ أكثر من 8,000 وحدة مُسلَّمة", "تجارية؛ مبيعات منتجات ومشاريع، بما فيها مراجع لمراكز بيانات خارج الصين", ["near", ""]],
      ["3", "C", "العلاج الخلوي", "بيانات محورية عشوائية في الورم الميلانيني بمراحله المتأخرة مع نظام علاجي أخف", "طلب تسويق قيد المراجعة ذات الأولوية (الصين)؛ سرطان الرئة في المرحلة الثانية", ["medium", ""]],
      ["4", "D", "صحة الحيوان", "لقاح مرشّح لمنع حمل القطط بالحقن، يُحتمل أن يكون قابلاً للعكس", "مراجعة التسجيل في الصين؛ وضع INAD في الولايات المتحدة؛ لا إيرادات تُذكر", ["medium", ""]],
      ["5", "E", "معدات العلاج الإشعاعي", "علاج بالبروتونات مدمج بغرفة واحدة يتسع في قبو علاج إشعاعي قياسي", "تجارية؛ إيرادات 2025 نحو 0.7 مليار يوان (الإدارة)؛ الربحية مستهدفة في 2027", ["medium", ""]],
      ["6", "F", "الأجهزة الطبية", "منصة أجهزة طبية واسعة النطاق بثلاثة خطوط أعمال، ذات إيرادات وأرباح", "تجارية؛ إيرادات نحو 2 مليار يوان وأرباح نحو 0.3 مليار يوان (الإدارة)", ["near", ""]],
      ["7", "G", "أدوات علوم الحياة", "أدوات تنقية للإكسوسومات والجسيمات النانوية بمنطق «بائع المعاول»", "تجارية؛ إيرادات نحو 100 مليون يوان (الإدارة)؛ أكثر من 500 عميل", ["near", ""]],
      ["—", "H", "معلومات قيد الاستكمال", "لم تُؤكَّد هوية الشركة ونطاق أعمالها ووثائقها بعد — لا تُقدَّم أي ادعاءات", "—", ["tbd", ""]]
    ],
    foot: "يصف وضوح الرؤية مدى قرب كل شركة من تحقيق الإيرادات أو من حدث لتحقيق القيمة بناءً على الأدلة المقدّمة، وليس توقعاً للعوائد أو لتوقيت التخارج. «الإدارة» تعني تصريحاً من الإدارة غير مدقّق."
  },
  sectors: {
    ai: {
      kicker: "القطاع A",
      title: "الذكاء الاصطناعي والبنية التحتية الرقمية",
      lead: "تنتقل القيمة من امتلاك وحدات GPU إلى إنتاج حوسبة قابلة للفوترة — وإلى الأنظمة المادية التي تُبقي الخزائن عالية الكثافة قيد التشغيل.",
      points: [
        ["الاستخدام هو جوهر الاستثمار", "لا تحقق وحدة GPU عائداً إلا إذا بيعت طاقتها. الطلب المتعاقد عليه وتسعير الرموز وتكلفة الطاقة والإهلاك هي ما يحدد فترة الاسترداد، لا الطاقة القصوى النظرية."],
        ["الكثافة تفرض التبريد السائل", "تستهلك أنظمة GPU الحالية على مستوى الخزانة أكثر من 100 كيلوواط لكل خزانة (مواصفات الموردين المعلنة)، وهو ما يتجاوز الحدود العملية للتبريد بالهواء."],
        ["لماذا الخليج", "الطاقة ورأس المال والطموحات الوطنية في الذكاء الاصطناعي متوفرة؛ أما الخبرة التشغيلية والتبريد عالي الكثافة فهما عنق الزجاجة الذي تعالجه هاتان الفرصتان."]
      ],
      members: "الشركة A تشغّل الحوسبة · الشركة B تبرّدها"
    },
    hc: {
      kicker: "القطاع B",
      title: "الرعاية الصحية وعلوم الحياة",
      lead: "خمس شركات موزعة على منحنى النضج — من محفزات تنظيمية إلى منصات تحقق إيرادات.",
      points: [
        ["تنويع مراحل المخاطر", "أصول لم تحقق إيرادات بعد وتقترب من محطات تنظيمية (C وD) إلى جانب شركات تجارية ذات إيرادات (E وF وG)."],
        ["محفزات واضحة", "قرارات الموافقة (C وD)، ومسار الربحية (E)، والحجم والهوامش (F)، وتبنّي العملاء (G)."],
        ["لماذا الخليج", "المشتريات الاستشفائية والتسجيل المحلي والتصنيع الإقليمي والترخيص تمنح الشركاء الخليجيين دوراً استراتيجياً يتجاوز رأس المال."]
      ],
      maturity: { left: "محفّز تنظيمي", right: "نطاق تجاري", order: ["D", "C", "G", "E", "F"] },
      members: "الشركات C · D · E · F · G"
    }
  },
  companies: [
    {
      code: "A", prio: 1, sectorKey: "ai", sector: "البنية التحتية للحوسبة بالذكاء الاصطناعي",
      headline: "طاقة GPU تُدار كعمل تشغيلي ينتج الرموز — لا رهاناً على الأجهزة.",
      what: "يصمّم المشغّل «خط إنتاج» للاستدلال ويشغّله على وحدات B200/B300 في مركز حوسبة، ويبيع الوصول إلى نماذج ذكاء اصطناعي رائدة مفتوحة الأوزان عبر واجهة برمجة التطبيقات، ويقيس كل استدعاء. يحتفظ مالك الحوسبة بملكية وحدات GPU والسيطرة عليها؛ وتُستخدم الإيرادات الشهرية أولاً لاسترداد تكلفة حوسبة متفق عليها، ثم يُقسَّم الفائض وفق العقد.",
      stats: [["<span dir=\"ltr\">US$36.9k–76.3k</span>", "الفائض الشهري المرجعي لكل خادم بثماني وحدات عند نسبة بيع 50–80%، قبل التقاسم (نموذج الجهة الراعية)"], ["<span dir=\"ltr\">+32%</span>", "زيادة الإنتاجية الكلية مقارنة بالإعداد المرجعي الرسمي على 8×B200 (اختبار الجهة الراعية، عائلة نماذج واحدة)"]],
      why: [
        ["إنتاج قابل للفوترة أعلى لكل وحدة GPU", "تُظهر اختبارات الجهة الراعية على 8×B200 زيادة في الإنتاجية الكلية بنسبة 32–36% مقارنة بإعداد مرجعي رسمي، وتوليداً أسرع بنحو 5.7 مرات لكل طلب عند إنتاجية مماثلة لكل وحدة على نموذج آخر. كلما زادت الرموز القابلة للبيع لكل ساعة GPU تحسّنت الاقتصاديات."],
        ["اقتصاديات وحدة شفافة", "يتحمّل كل خادم بثماني وحدات تكلفة حوسبة تقارب 28,800 دولار شهرياً (سعر محاسبي 5 دولارات لكل ساعة GPU × 720 ساعة). عند نسبة بيع 50–80% تبلغ الإيرادات المرجعية 65.7–105.1 ألف دولار والفائض 36.9–76.3 ألف دولار شهرياً."],
        ["هيكل متوائم وخفيف الأصول", "استرداد التكلفة أولاً ثم تقاسم الأرباح. التوجيه والقياس والفوترة وتقارير الإيرادات والتكاليف وتقاسم الأرباح الشهرية قابلة للمطابقة. لا تُنقل ملكية وحدات GPU؛ وتؤكد الجهة الراعية الامتثال لضوابط التصدير، وهو ما يتطلب رأياً قانونياً مستقلاً."]
      ],
      extra: "econ",
      stage: [
        ["التقنية", "منظومة برمجيات تشغيلية واختبارات أداء على B200؛ لم تُختبر B300 بعد"],
        ["العملاء", "لم يُفصح عن عملاء متعاقدين أو اتفاقيات شراء — جدول الإيرادات مرجع تسعيري وليس موازنة"],
        ["البيانات المالية", "لم تُقدَّم إيرادات تاريخية أو نفقات رأسمالية أو بيانات فترة الاسترداد"],
        ["عوامل الحساسية", "نسبة البيع (الإنتاج القابل للفوترة مقابل النظري)، وأسعار الرموز، ونسبة التخزين المؤقت (سيناريو إدخال مخزّن بنحو 90% غير مُدرج وقد يخفض الإيرادات)، والطاقة، والتشغيل، وإهلاك وحدات GPU"]
      ],
      exit: { level: "near", qual: "مشروط", text: "تتحقق القيمة كتدفق نقدي تشغيلي شهري من حصة الأرباح بمجرد التعاقد على طلب مدفوع. يتفوق التشغيل المشترك على التأجير البسيط فقط إذا تجاوزت حصة المالك دخل الإيجار مطروحاً منه تكلفة الحوسبة (<span dir=\"ltr\">x·P > L − C</span>)، ويجب اختبار ذلك ببيانات تشغيل فعلية. لم يُحدَّد مسار تخارج من حقوق الملكية." },
      gcc: "يمكن لمالكي طاقة B200/B300 في الخليج تجربة مجموعة واحدة بموجب عقد لتقاسم الإيرادات، تُقاس بالإنتاج الفعلي القابل للفوترة، قبل التوسع.",
      verify: "طلب عملاء موقّع؛ نسبة البيع الفعلية ونسبة التخزين المؤقت؛ النفقات الرأسمالية لوحدات GPU وفترة الاسترداد؛ رأي قانوني بشأن ضوابط التصدير؛ نتائج B300."
    },
    {
      code: "B", prio: 2, sectorKey: "ai", sector: "تبريد مراكز البيانات",
      headline: "تبريد سائل لمواكبة القفزة في كثافة خزائن مراكز بيانات الذكاء الاصطناعي.",
      what: "تصمّم الشركة وتصنّع أنظمة التبريد السائل — وحدات توزيع سائل التبريد (CDU) ومحطات الضخ الأولية والأنابيب والخزائن المبرّدة بالسائل ودمج الممرات الباردة — وتسلّم غرف حوسبة متكاملة مبرّدة بالسائل. تأتي الإيرادات من مبيعات المعدات والمشاريع لمطوري ومشغلي مراكز البيانات، إلى جانب نشاط راسخ في تبريد إلكترونيات القدرة.",
      stats: [["8,000+", "وحدة مُسلَّمة في الصين وأمريكا الشمالية وجنوب شرق آسيا والشرق الأوسط والهند"], ["<span dir=\"ltr\">2.5 MW</span>", "أكبر سعة لوحدة CDU واحدة في مجموعة المنتجات"]],
      why: [
        ["مواكبة منحنى الكثافة", "تتجاوز خزائن الذكاء الاصطناعي 100 كيلوواط، حيث يصبح التبريد السائل المباشر للرقاقة شرطاً أساسياً. تبيع الشركة في عنق الزجاجة هذا بدلاً من التعرض لدورات أسعار وحدات GPU."],
        ["منظومة كاملة من غرفة المعدات إلى الخزانة", "تشمل المجموعة وحدات CDU بسعة 60 كيلوواط داخل الخزانة و500 كيلوواط ضمن الصف و2.5 ميغاواط مركزية، إضافة إلى محطات ضخ من 125 كيلوواط إلى 2.5 ميغاواط — تسليم من مورد واحد بوحدات مجمّعة في المصنع تقلل الأعمال في الموقع."],
        ["مراجع مُسلَّمة خارج الصين", "تشمل مشاريع مراكز البيانات دمج حوسبة مبرّدة بالسائل بقدرة 2.5 ميغاواط ومحطة ضخ حاصلة على شهادة UL في الولايات المتحدة، ومحطة ضخ بسعة 300 متر مكعب في سنغافورة. أكثر من 70 براءة اختراع؛ وفريق أساسي يصمم التبريد السائل منذ أكثر من 10 سنوات."]
      ],
      stage: [
        ["الشركة", "تأسست عام 2020؛ يعمل الفريق في التبريد ثنائي الطور/السائل منذ 2014؛ دخلت قطاع مراكز البيانات عام 2022"],
        ["الوضع التجاري", "إنتاج نحو 1,500 وحدة في 2024؛ قيمة إنتاج تتجاوز 70 مليون يوان (2024، جميع القطاعات، رقم الشركة)"],
        ["الطاقة الإنتاجية", "أكثر من 2,000 وحدة سنوياً بتصنيع مخصّص على دفعات؛ ضمان من سنة إلى 5 سنوات"],
        ["ما تحقق مقابل ما هو مقترح", "التسليم المعياري على مستوى الخزانة والغرف المتكاملة مُثبت. الأنظمة في حاويات والتجميع/البحث والتطوير في الخليج مقترحة ولم تُثبت بعد"],
        ["غير مقدَّم", "الإيرادات حسب القطاع، والهوامش، والطلبات المتراكمة، وتاريخ التمويل، والتقييم"]
      ],
      exit: { level: "near", qual: "", text: "يتحقق الدخل بالفعل من مبيعات المنتجات والمشاريع؛ ويعتمد النمو على الفوز بمشاريع مراكز بيانات الذكاء الاصطناعي. نقطة الدخول في رأس المال ومسار التخارج يُحدَّدان لاحقاً — لم تُقدَّم جولة تمويل أو تقييم." },
      gcc: "مركز محلي للتجميع والخدمة وقطع الغيار لمراكز بيانات الذكاء الاصطناعي في الخليج؛ تغطي المواصفات القياسية حرارة محيطة من −25 إلى 40 درجة مئوية، لذا يجب التحقق من تصميم طرد الحرارة لذروات الصيف الخليجي التي تتجاوز 45 درجة.",
      verify: "إيرادات مدققة حسب القطاع؛ الطلبات المتراكمة وعملاء مراكز البيانات؛ الأداء في درجات الحرارة المرتفعة؛ جاهزية المنتجات في حاويات."
    },
    {
      code: "C", prio: 3, sectorKey: "hc", sector: "العلاج الخلوي",
      headline: "بيانات محورية عشوائية في الورم الميلانيني المتقدم، مع نظام علاجي أخف.",
      what: "تطوّر الشركة علاجاً بالخلايا اللمفاوية المرتشحة في الورم (TIL): تُكثَّر خلايا المريض المناعية المتفاعلة مع الورم ثم يُعاد حقنها. يستهدف البرنامج الرئيسي الورم الميلانيني المتقدم بعد علاج مضاد PD-1، وتليه برامج لسرطان الرئة وعلاجات مركّبة. يقوم النموذج على بيع المنتج لكل دورة علاجية بعد الموافقة، مع إمكانية الترخيص.",
      stats: [["<span dir=\"ltr\">42% vs 6.1%</span>", "معدل الاستجابة الموضوعية مقابل المجموعة الضابطة، المرحلة الثانية المحورية العشوائية، ميلانوما بعد PD-1 (بيانات الشركة)"], ["0.43", "نسبة الخطر للبقاء دون تقدّم المرض (بيانات الشركة)"]],
      why: [
        ["أدلة حيث الخيارات قليلة", "حققت الدراسة المحورية من المرحلة الثانية في الورم الميلانيني المتقدم المعالج بمضاد PD-1 نقطتها النهائية الأساسية؛ وأفادت المتابعة الممتدة في أكتوبر 2026 باستجابة 44.0% مقابل 8.2%. هذه الأدلة خاصة بهذا الاستطباب ولا يمكن تعميمها على جميع الأورام الصلبة."],
        ["نظام علاجي قد يكون أخف", "يستخدم علاج TIL المعتمد في الولايات المتحدة (Amtagvi من Iovance، موافقة معجّلة 2024) علاجاً كيميائياً لاستنفاد اللمفاويات قبل الحقن وIL-2 بعده، مع متطلبات كبيرة للإقامة في المستشفى وإدارة السمية. تهدف الشركة C إلى تجنب الاستنفاد المكثف وIL-2، ما قد يخفض السمية وكثافة الرعاية والتكلفة الإجمالية — ويجب تأكيد ذلك ببيانات بيئة الرعاية؛ ولا يقع كل مرضى أي من النظامين في الحالات القصوى."],
        ["القدرة على تحمّل التكلفة وعمق خط التطوير", "سعر استرشادي يقارب 700 ألف يوان لكل دورة في الصين (الإدارة). يُذكر أن التكلفة الشاملة للعلاج في الولايات المتحدة تتجاوز مليون دولار، لكن سعر المنتج وتكلفة العلاج الكاملة غير قابلين للمقارنة المباشرة. يشمل خط التطوير سرطان الرئة والعلاج المساعد والبرامج المركّبة."]
      ],
      stage: [
        ["الوضع التنظيمي", "قُبل طلب تسويق علاج الورم الميلانيني في الصين وهو قيد المراجعة ذات الأولوية — لم تتم الموافقة بعد"],
        ["الوضع السريري", "سرطان الرئة برنامج منفصل في المرحلة الثانية؛ يجب مطابقة وضعه الدقيق"],
        ["التصنيع", "منشأة GMP بنطاق تجاري (تصريح الشركة)"],
        ["التمويل", "جُمع أكثر من 600 مليون يوان؛ آخر تقييم مسجل بعد التمويل 2.137 مليار يوان. ذكرت الإدارة نحو 4 مليارات يوان للجولة الحالية — غير مُطابَق"],
        ["المقارن المدرج", "Iovance: قيمة سوقية نحو 3.1 مليار دولار (24 نوفمبر 2026)؛ توجيه إيرادات 2026 بين 410 و420 مليون دولار، بما في ذلك منتج غير TIL"]
      ],
      exit: { level: "medium", qual: "", text: "تعتمد أول إيرادات للمنتج على توقيت الموافقة. تشمل مسارات تحقيق القيمة المحتملة الترخيص/تطوير الأعمال، أو البيع الاستراتيجي، أو الإدراج في هونغ كونغ أو سوق الأسهم A — دون جدول زمني موثّق." },
      gcc: "ترخيص إقليمي أو شراكة مع مراكز الأورام الخليجية، تشمل تسجيل المنتج وبناء قدرات العلاج الخلوي.",
      verify: "ملف الطلب التنظيمي ووضع المراجعة؛ استدامة الاستجابة والسلامة؛ شدة استنفاد اللمفاويات وتكلفة الرعاية الفعلية؛ شروط الجولة الحالية."
    },
    {
      code: "D", prio: 4, sectorKey: "hc", sector: "صحة الحيوان",
      headline: "من التعقيم الجراحي إلى حقنة واحدة — منتج مرشّح قد يكون الأول عالمياً.",
      what: "تطوّر الشركة لقاحاً مرشّحاً لمنع الحمل لدى القطط يهدف إلى توفير منع حمل لنحو سنة أو أكثر بحقنة واحدة، إضافة إلى منع الحمل طويل المفعول للقطط والكلاب ومنتجات بيولوجية أخرى للحيوانات الأليفة — ستة برامج إجمالاً. النموذج المزمع هو البيع لكل جرعة عبر العيادات البيطرية، إلى جانب الترخيص الدولي.",
      stats: [["6", "برامج للحيوانات الأليفة؛ لقاح منع حمل القطط الرئيسي قيد مراجعة التسجيل"], ["<span dir=\"ltr\">~US$5bn</span>", "حجم سوق استرشادي طويل الأجل لمنع حمل القطط والكلاب (غير مُتحقَّق منه)"]],
      why: [
        ["إنشاء فئة جديدة", "الحل الحالي هو جراحة غير قابلة للعكس تتطلب تخديراً وفترة تعافٍ. قد توفر الحقنة منع حمل محدود المدة وتحافظ على إمكانية التكاثر مستقبلاً إذا ثبتت قابلية العكس. منع الحمل وكبح الشبق والمدة واستعادة الخصوبة ادعاءات منفصلة يحتاج كل منها إلى أدلة."],
        ["قناة خدمة أوسع", "يمكن إعطاء الحقنة في عيادات أصغر لا تملك غرف عمليات، ما يوسّع التوزيع ويدعم اقتصاديات البيع لكل جرعة وتكرار الجرعات."],
        ["خيارات الترخيص", "يفتح التسجيل في الصين ووضع INAD في الولايات المتحدة الطريق أمام شركاء دوليين؛ وتفيد التقارير بمحادثات مع شركات متعددة الجنسيات لصحة الحيوان، دون شروط بعد."]
      ],
      stage: [
        ["الوضع التنظيمي", "مراجعة التسجيل في الصين ووضع INAD في الولايات المتحدة — لا يُعد أي منهما ترخيصاً بالتسويق. امتثال التصنيع البيطري لمعايير GMP منفصل عن الموافقة على المنتج"],
        ["الوضع السريري", "بيانات المدة وقابلية العكس والسلامة قيد التحقق"],
        ["الإيرادات", "لا إيرادات منتجات تُذكر"],
        ["التمويل", "تمديد الجولة A (مايو 2025) بتقييم بعد التمويل يقارب 687 مليون يوان — تسعير تاريخي وليس حالياً"],
        ["المنشآت", "مساحة تجريبية وتصنيعية تبلغ 6,000 متر مربع"]
      ],
      exit: { level: "medium", qual: "", text: "لا تبدأ الإيرادات إلا بعد الموافقة. يمكن تحقيق القيمة عبر الترخيص الإقليمي/تطوير الأعمال أو البيع الاستراتيجي أو الطرح العام؛ ولم يُتفق على أي منها." },
      gcc: "التسجيل والتوزيع عبر الشبكات البيطرية الخليجية بعد الموافقة؛ ويمكن لاحقاً تقييم برامج إنسانية لإدارة أعداد الحيوانات الأليفة.",
      verify: "ملف التسجيل ومرحلة المراجعة؛ شهادة GMP؛ بيانات مدة الفعالية وقابلية العكس؛ الآثار الجانبية؛ شروط الترخيص."
    },
    {
      code: "E", prio: 5, sectorKey: "hc", sector: "معدات العلاج الإشعاعي",
      headline: "علاج بالبروتونات يتسع في قبو علاج إشعاعي قياسي.",
      what: "تصمّم الشركة وتصنّع وتخدم أنظمة علاج بالبروتونات مدمجة بغرفة واحدة، تُباع للمستشفيات بسعر استرشادي يقارب 200 مليون يوان للوحدة، إلى جانب خط للعلاج الإشعاعي بالفوتونات. تقنية أمريكية المنشأ مع قاعدة تشغيل في الولايات المتحدة والصين.",
      stats: [["<span dir=\"ltr\">>50%</span>", "حصة أنظمة البروتون المدمجة بغرفة واحدة العاملة سريرياً في الولايات المتحدة (مايو 2026، بيانات الشركة)"], ["<span dir=\"ltr\">~111 m²</span>", "مساحة القبو القياسي الذي يتسع للطراز الأكثر إدماجاً (نحو 1,200 قدم مربع)"]],
      why: [
        ["تبنٍّ من مؤسسة من الصف الأول", "عالج مركز طبي أكاديمي أمريكي رائد أول مريض له على الطراز الأكثر إدماجاً في يونيو 2026. وتعاونت جامعة بحثية أمريكية رائدة في البحث والتطوير المبكر للمغناطيس — بصفتها شريكاً بحثياً لا عميلاً لموقع علاج."],
        ["كفاءة رأسمالية للمستشفيات", "إن الاتساع في قبو علاج إشعاعي قائم بدلاً من مركز بروتون متعدد الطوابق يخفض حواجز المساحة والإنشاء ورأس المال — ما قد يوسّع قاعدة عملاء المستشفيات."],
        ["مكانة راسخة في شريحة متخصصة", "أكثر من 30 مستشفى وأكثر من 14,000 مريض عولجوا؛ موافقات في الولايات المتحدة وأوروبا وكندا وتايوان؛ أكثر من 400 براءة اختراع واستثمار تراكمي في البحث والتطوير يتجاوز 750 مليون دولار (بيانات الشركة). تقتصر ادعاءات الريادة على شريحة الأنظمة المدمجة بغرفة واحدة."]
      ],
      stage: [
        ["الإيرادات", "نحو 700 مليون يوان في 2025 (الإدارة)؛ تقديرات 2026 بين 1.0 و1.1 مليار يوان (اختلاف بين الإدارة ومواد الشركة)"],
        ["التوزيع الجغرافي", "65–70% من الإيرادات من خارج الصين"],
        ["الوحدات", "بيع نحو 4–5 أنظمة في 2025؛ ونحو 11 مستهدفة لعام 2026. التعاقد والتركيب والقبول والتحصيل النقدي محطات منفصلة"],
        ["الربحية", "خسارة طفيفة في 2026؛ أرباح متوقعة اعتباراً من 2027 (توقعات الإدارة)"],
        ["التقييم", "نحو 7 مليارات يوان استرشادياً، غير مُتحقَّق منه"]
      ],
      exit: { level: "medium", qual: "", text: "إيرادات المنتجات قائمة بالفعل؛ وتتوقف أطروحة الاستثمار على بلوغ الربحية في 2027 (تقديري) وزيادة تسليم الوحدات. الطرح العام أو البيع الاستراتيجي مساران محتملان؛ ولا يوجد جدول زمني لأي منهما." },
      gcc: "شراكات لمراكز علاج بالبروتونات إقليمية، ومشتريات المستشفيات، وقدرات محلية للتجميع والخدمة.",
      verify: "القاعدة المركّبة وشهادات القبول؛ الطلبات المتراكمة والذمم المدينة؛ التكلفة الكلية للمركز؛ الملكية وقيمة المنشأة؛ نطاق أي تصنيع محلي."
    },
    {
      code: "F", prio: 6, sectorKey: "hc", sector: "الأجهزة الطبية",
      headline: "منصة أجهزة طبية واسعة النطاق ومربحة ومتعددة خطوط الأعمال.",
      what: "تطوّر الشركة وتصنّع وتبيع أجهزة عبر ثلاثة خطوط أعمال — الجراحة طفيفة التوغل (الدبّاسات وأجهزة الطاقة)، والتدخل الوعائي (العصبي والقلبي الوعائي)، وأمراض القلب البنيوية (الصمامات عبر القسطرة) — للمستشفيات في الصين أساساً، مع مبيعات دولية متنامية.",
      stats: [["<span dir=\"ltr\">~RMB 2bn</span>", "الإيرادات (2026، مواد الشركة)"], ["<span dir=\"ltr\">~RMB 0.3bn</span>", "الأرباح السنوية (الإدارة، غير مدققة)"]],
      why: [
        ["قاعدة إيرادات متنوعة", "ثلاثة خطوط أعمال تغطي نحو 4,000 و2,600 و300 مستشفى على التوالي، لكل منها فريق مبيعات مخصص (200 / 120 / 100) — منصة متكاملة لا رهان على منتج واحد."],
        ["مراكز محلية رائدة", "من بين أكبر خطوط الجراحة المحلية في الصين، والثانية محلياً في القلب البنيوي، وضمن أكبر ثلاث محلياً في التدخل العصبي الوعائي (تصنيفات الشركة، تتطلب تحققاً حسب الفئة)."],
        ["شراكات عالمية في الاتجاهين", "تُدخل ابتكارات وعائية من الخارج إلى الصين وترخّص تقنياتها للخارج — إذ استحوذت شركة عالمية رائدة في القلب البنيوي على حقوق معينة خارج الصين في 2024. حضور بيعي في خمس مناطق، منها الشرق الأوسط وأفريقيا."]
      ],
      stage: [
        ["الإيرادات", "نحو 2.0–2.1 مليار يوان؛ التوزيع حسب الخطوط نحو 0.8–0.9 / 0.6 / 0.3 مليار يوان (المجموع 1.7–1.8 مليار — الفارق قيد المطابقة)"],
        ["خارج الصين", "نحو 400 مليون يوان (نحو 20%، مواد الشركة) مقابل نحو 30% (الإدارة) — قيد المطابقة"],
        ["الأرباح", "نحو 300 مليون يوان (الإدارة، غير مدققة)"],
        ["التقييم", "نحو 1.8 مليار دولار حالياً استرشادياً؛ وجولة سابقة يُقال إنها بنحو 2.0 مليار دولار (قبل/بعد التمويل غير مؤكد)"],
        ["المساهمون", "مدعومة من مستثمرين آسيويين رائدين في الملكية الخاصة ومستثمرين سياديين ومستثمري نمو عالميين"]
      ],
      exit: { level: "near", qual: "", text: "الإيرادات والأرباح قائمة. يمكن تحقيق القيمة عبر طرح عام أو بيع ثانوي أو بيع استراتيجي؛ ولا يوجد جدول زمني." },
      gcc: "مشتريات المستشفيات وتسجيل المنتجات وتوزيعها في الخليج، أو التصنيع الإقليمي، أو منصة أجهزة طبية مشتركة الرعاية.",
      verify: "الحسابات المدققة وهوامش كل خط؛ الهيكل القانوني القابض؛ نسبة الإيرادات الخارجية؛ شروط الجولة الأخيرة وامتيازاتها."
    },
    {
      code: "G", prio: 7, sectorKey: "hc", sector: "أدوات علوم الحياة",
      headline: "«بائع المعاول» في اقتصاد الإكسوسومات والجسيمات النانوية.",
      what: "تصنع الشركة أجهزة آلية قائمة على الأغشية وأنظمة تنقية صناعية ومواد لفصل وتنقية المواد البيولوجية النانوية — الحويصلات خارج الخلوية (الإكسوسومات) والجسيمات النانوية الدهنية والفيروسات. عملاؤها مختبرات بحثية وشركات أدوية حيوية وتشخيص وطب تجديدي. يقوم النموذج على بيع المعدات إضافة إلى أغشية ومستهلكات قد تتكرر مشترياتها.",
      stats: [["500+", "عميل حول العالم (بيانات الإدارة)"], ["<span dir=\"ltr\">~50%</span>", "حصة الإيرادات من خارج الصين، ارتفاعاً من نحو 20%"]],
      why: [
        ["انكشاف على القطاع دون مخاطر علامة واحدة", "تبيع أدوات تمكينية لعدد كبير من المطورين بدلاً من الاعتماد على نجاح سريري أو تجميلي لمنتج إكسوسوم واحد. الشركة ليست علامة تجميلية نهائية."],
        ["منصة عالية الإنتاجية متعددة القنوات", "عملية أغشية آلية من المختبر إلى النطاق الصناعي، تهدف إلى تخفيف قيود الإنتاجية وسير العمل في الطرد المركزي الفائق والترشيح بالتدفق المماسي — ولا تزال المقارنات المباشرة مطلوبة."],
        ["زخم عالمي", "نمت الإيرادات من نحو 20 مليون يوان إلى نحو 100 مليون يوان (معدل نمو سنوي مركب نحو 103% على أربع سنوات، بيانات الإدارة) في الأمريكتين وآسيا وأوروبا. تقول الإدارة إن شركة عالمية رائدة في معدات المعالجة الحيوية اشترت أجهزتها — وهو تصريح غير مُتحقَّق منه وليس تزكية."]
      ],
      stage: [
        ["الإيرادات", "نحو 100 مليون يوان (الإدارة)؛ لم يُقدَّم تقسيم بين المعدات والمستهلكات"],
        ["المنتجات", "أجهزة بحثية وأنظمة تنقية صناعية ومواد حيوية؛ ونظام واحد قيد التطوير"],
        ["التقييم", "نحو 1 مليار يوان استرشادياً، غير مُتحقَّق منه"]
      ],
      exit: { level: "near", qual: "", text: "تأتي الإيرادات اليوم من مبيعات الأجهزة والمستهلكات. شروط الدخول في رأس المال ومسار التخارج يُحدَّدان لاحقاً." },
      gcc: "معاهد البحث ومراكز الطب الانتقالي ومصنّعو العقود في الخليج، مدعومة بخدمة فنية إقليمية وإمداد المستهلكات.",
      verify: "إيرادات المستهلكات المتكررة؛ أدلة شراء العملاء؛ بيانات المقارنة مع الطرد المركزي الفائق والترشيح بالتدفق المماسي؛ ملكية الملكية الفكرية؛ شروط أحدث جولة."
    }
  ],
  closing: {
    kicker: "الخطوات التالية",
    title: "نماذج تعاون مختارة",
    models: [
      ["الاستثمار المشترك", "حصص أقلية في مرحلة النمو أو ما قبل الطرح العام إلى جانب المستثمرين الحاليين، بحجم يناسب كل فرصة."],
      ["مشاريع تشغيلية تجريبية", "تجربة حوسبة بتقاسم الإيرادات (A) أو نشر للتبريد السائل (B) تُقاس ببيانات فعلية قبل التوسع."],
      ["الترخيص والتوزيع", "حقوق إقليمية للعلاجات والأجهزة والأدوات (C وD وF وG) عبر المستشفيات والعيادات والمختبرات الخليجية."],
      ["التوطين", "قدرات التجميع والخدمة وقطع الغيار في الخليج (B وE وF)."]
    ],
    stepsTitle: "المسار المقترح",
    steps: ["تحديد الفرص محل الاهتمام", "اتفاقية سرية والوصول إلى البيانات", "لقاءات مع الإدارة وعناية واجبة تركّز على النقاط المحددة", "الهيكلة والشروط والحوكمة"],
    notice: "إشعار مهم: هذه المادة ملخص تمهيدي سري للنقاش مع متلقين مؤهلين. وهي لا تشكّل عرضاً أو دعوة لشراء أو بيع أي أوراق مالية، ولا تُعد مشورة استثمارية أو قانونية أو ضريبية. المعلومات مستمدة من مواد الشركات وإداراتها ولم يُتحقق منها بشكل مستقل؛ والأرقام الموصوفة بأنها تصريحات أو تقديرات للإدارة غير مدققة، وقد لا تتحقق البيانات المستقبلية. هويات الشركات محجوبة ولن يُفصح عنها إلا بموجب اتفاقية سرية. الاستثمارات الخاصة غير سائلة وقد تؤدي إلى خسارة رأس المال."
  }
};

/* Figures shared by all languages (Company A reference unit economics, sponsor model) */
window.ECON_ROWS = [
  ["50%", "65,689", "28,800", "36,889"],
  ["60%", "78,827", "28,800", "50,027"],
  ["70%", "91,965", "28,800", "63,165"],
  ["80%", "105,103", "28,800", "76,303"]
];
