export type Card = {
  number?: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export type Slide =
  | { type: "title"; title: string; subtitle: string; kicker: string; image: string; speakerNotes: string }
  | { type: "portraits"; title: string; prompt: string; cards: Card[]; closing: string; speakerNotes: string }
  | { type: "threeGoal"; title: string; cards: Card[]; speakerNotes: string }
  | { type: "overview"; title: string; cards: Card[]; speakerNotes: string }
  | { type: "divider"; part: string; title: string; subtitle: string; image?: string; speakerNotes: string }
  | { type: "split"; title: string; imageLeft: string; imageRight: string; bullets: string[]; speakerNotes: string }
  | { type: "story"; title: string; body: string; image: string; callout?: string; speakerNotes: string }
  | { type: "symbol"; title: string; body: string; callout: string; image: string; speakerNotes: string }
  | { type: "cards3"; title: string; cards: Card[]; bottomLine?: string; speakerNotes: string }
  | { type: "cards4"; title: string; cards: Card[]; bottomLine?: string; speakerNotes: string }
  | { type: "scorecard"; title: string; headline: string; body: string; image: string; speakerNotes: string }
  | { type: "nextStep"; title: string; body: string; items: { title: string; body: string }[]; image: string; speakerNotes: string }
  | { type: "qa"; title: string; body: string; image: string; speakerNotes: string };

export const imageBriefs: Record<string, string> = {
  "home-golden-hour": "Charming single-story home at golden hour — warm light on trim, tidy front yard, no people.",
  "latina-thoughtful": "Tight portrait crop — solo Latina woman looking thoughtful. No desk, no papers.",
  "black-man-uncertain": "Tight portrait crop — solo Black man looking uncertain. No desk, no papers.",
  "white-woman-overwhelmed": "Tight portrait crop — solo white woman looking overwhelmed. No desk, no papers.",
  "different-couple-excited": "Young couple, different from the final couple, exchanging an excited glance. No desks, no papers.",
  "agent-pointing": "Female agent pointing toward a home or option just off-frame while buyer leans in — clarity.",
  "solo-man-keys": "Solo man holding keys, big grin — confidence.",
  "open-front-door": "Open front door with sunlight spilling in, no one in frame — control.",
  "woman-laptop-research": "Solo woman at laptop — research. This is one of the few laptop scenes.",
  "team-outside": "Diverse group of three, agent plus couple, chatting outside a listing — team.",
  "handshake": "Two professionals shaking hands across a table — negotiation.",
  "for-sale-buyer": "Exterior of a FOR SALE home, buyer on sidewalk looking up — search.",
  "roof-inspector": "Inspector on a roof checking flashing — inspection.",
  "brick-bungalow": "Modest brick bungalow with a tidy porch. Warm, accessible feel.",
  "coffee-table-guidance": "Solo male agent leaning across a coffee table pointing to one notepad page, not a formal desk.",
  "caroline-porch": "Solo woman standing on her front porch, arms crossed, beaming. Modest home behind her.",
  "single-key-table": "Overhead detail shot: single house key on simple wooden table. Clean, symbolic.",
  "quiet-street": "Wide exterior shot of a quiet suburban street with homes on both sides.",
  "one-contract-page": "Female agent and buyer side-by-side reviewing one contract page — the only paperwork-heavy image.",
  "chess-strategy": "Chess piece close-up or hands shaking — strategy.",
  "calculator-coins": "Calculator and a small stack of coins — financial concept.",
  "relieved-buyer": "Solo buyer, different from earlier slides, relieved and happy — saved money. No documents.",
  "price-reduced-sign": "PRICE REDUCED yard sign close-up.",
  "price-reduced-ranch": "Ranch-style home with PRICE REDUCED sign on lawn.",
  "buyer-driveway": "Buyer walking up driveway toward an open front door during a showing.",
  "neighborhood-walk": "Ground-level neighborhood walk shot — warm and personal.",
  "front-porch-chairs": "Peaceful front porch with two chairs and potted plant. No people.",
  "urban-rowhomes": "Urban row houses.",
  "suburban-culdesac": "Suburban cul-de-sac.",
  "townhome-condo": "Townhome or condo building with nice landscaping.",
  "doorbell-detail": "Architectural detail — doorbell, porch railing, or window trim. No people.",
  "electrical-panel": "Inspector crouching at electrical panel, flashlight out.",
  "roof-flashing": "Inspector on roof checking flashing.",
  "under-sink": "Under-sink plumbing inspection close-up.",
  "crawlspace": "Inspector with clipboard in crawl space or basement.",
  "agent-listing-outside": "Female real estate agent outdoors in front of a listing.",
  "loan-officer": "Male loan officer at desk, one document visible.",
  "inspector-roofline": "Inspector on roofline.",
  "closing-hands": "Title/closing — hands over closing documents at a table.",
  "buyer-keys-grin": "Solo buyer holding keys up to camera with huge grin — finish-line moment.",
  "couple-front-door": "Couple standing in front of new home's front door, one holds keys, both smiling.",
  "living-room": "Wide welcoming living room — cozy couch, natural light, no people."
};

export const slides: Slide[] = [
  { type: "title", title: "First-Time Home Buying", subtitle: "The Buyer’s Confidence Blueprint", kicker: "5 Things Worth Knowing Before You Buy", image: "home-golden-hour", speakerNotes: "Thanks for being here tonight. Buying your first home can feel like there are a hundred moving parts. Tonight is about giving you a clear picture of how those parts fit together and how to make them work in your favor." },
  { type: "portraits", title: "How are you feeling?", prompt: "CHAT: What one word describes how you feel about buying a home right now?", cards: [{ title: "Thoughtful", image: "latina-thoughtful" }, { title: "Uncertain", image: "black-man-uncertain" }, { title: "Overwhelmed", image: "white-woman-overwhelmed" }, { title: "Excited, but cautious", image: "different-couple-excited" }], closing: "Wherever you are right now, you’re not alone — and you can buy with more clarity.", speakerNotes: "Ask for one word in the chat. Read a few responses. Reassure them that uncertainty is normal before they have the information." },
  { type: "threeGoal", title: "Tonight’s Goal", cards: [{ title: "Clarity", subtitle: "Know what matters most.", image: "agent-pointing" }, { title: "Confidence", subtitle: "Make decisions with clarity.", image: "solo-man-keys" }, { title: "Control", subtitle: "Stay in charge of your future.", image: "open-front-door" }], speakerNotes: "The goal tonight is clarity, confidence, and control. We want buyers to understand the process well enough to make smart decisions." },
  { type: "overview", title: "5 Things Worth Knowing Before You Buy", cards: [{ number: "01", title: "Know how much cash you need", image: "woman-laptop-research" }, { number: "02", title: "Build the right team early", image: "team-outside" }, { number: "03", title: "Know what’s negotiable", image: "handshake" }, { number: "04", title: "Know where buyer leverage lies", image: "for-sale-buyer" }, { number: "05", title: "Use inspections to protect yourself", image: "roof-inspector" }], speakerNotes: "These are five things worth knowing before you buy. This is not about mistakes or pressure. It is about having information most buyers do not get laid out clearly." },
  { type: "divider", part: "Part 1", title: "Know How Much Cash You Need", subtitle: "Start with what is actually possible.", image: "quiet-street", speakerNotes: "Transition into down payment assumptions and cash needed." },
  { type: "split", title: "Making Homeownership More Accessible", imageLeft: "brick-bungalow", imageRight: "coffee-table-guidance", bullets: ["Real options, not one-size-fits-all.", "Programs, down payment help, and flexible solutions may reduce upfront costs.", "The first step is looking instead of assuming."], speakerNotes: "Down payment assistance can come in different forms. Not everyone qualifies for the same thing, but far more people qualify than expect to." },
  { type: "story", title: "Caroline’s Story", body: "With the right strategy and a smart plan, Caroline turned uncertainty into a front door she loves.", image: "caroline-porch", callout: "So can you.", speakerNotes: "Caroline had great income and solid credit but assumed buying was not realistic because of cash. When she looked at her options, she qualified for assistance." },
  { type: "symbol", title: "What This Means for You", body: "The first move is not about qualifying. It is about not ruling yourself out before you ever look at your options.", callout: "You hold the key.", image: "single-key-table", speakerNotes: "You may need far less cash than you think. The only way to know is to look." },
  { type: "divider", part: "Part 2", title: "Build the Right Team Early", subtitle: "You do not have to figure this out alone.", image: "quiet-street", speakerNotes: "Transition into why the right team should be involved early." },
  { type: "cards4", title: "The Team That Protects Buyers", cards: [{ title: "Real Estate Agent", subtitle: "Your advocate.", image: "agent-listing-outside" }, { title: "Loan Officer", subtitle: "Your financing expert.", image: "loan-officer" }, { title: "Home Inspector", subtitle: "Your eyes on the details.", image: "inspector-roofline" }, { title: "Title & Closing", subtitle: "Your path to ownership.", image: "closing-hands" }], bottomLine: "Different roles. One mission: protect your interests at every step.", speakerNotes: "Each role exists to reduce risk in a specific area. Some buyers already have people they trust; others are still building that team." },
  { type: "divider", part: "Part 3", title: "Know What’s Negotiable", subtitle: "Closing costs, buydowns, and terms may have more room than you think.", image: "price-reduced-sign", speakerNotes: "Transition into negotiable terms." },
  { type: "cards3", title: "Where Buyers Find Leverage", cards: [{ title: "Strong Terms", subtitle: "Better offers and protection.", image: "one-contract-page" }, { title: "Strategic Moves", subtitle: "Gain advantage at the table.", image: "chess-strategy" }, { title: "Financial Wins", subtitle: "Lower costs. Better outcomes.", image: "calculator-coins" }], bottomLine: "Paperwork matters here — but strategy is the real point.", speakerNotes: "Depending on the home and the market, buyers can often negotiate seller-paid closing costs, buydowns, and certain contract terms." },
  { type: "symbol", title: "What This Means for You", body: "Knowing what is negotiable before you start can keep real money in your pocket.", callout: "You win with better questions.", image: "relieved-buyer", speakerNotes: "Knowing what is negotiable early usually translates into tangible savings." },
  { type: "divider", part: "Part 4", title: "Know Where Buyer Leverage Lies", subtitle: "Opportunity often shows up where other buyers are not looking.", image: "price-reduced-sign", speakerNotes: "Transition into market strategy." },
  { type: "cards3", title: "Strategic Buying", cards: [{ title: "Find the Right Opportunity", subtitle: "Look for value others miss.", image: "price-reduced-ranch" }, { title: "Move with Purpose", subtitle: "Tour strategically and be ready.", image: "buyer-driveway" }, { title: "Build a Brighter Future", subtitle: "Opportunity is everywhere for prepared buyers.", image: "neighborhood-walk" }], bottomLine: "Opportunity is everywhere for the prepared buyer.", speakerNotes: "Strategic buyers look at homes that have been on the market longer or have had price reductions." },
  { type: "symbol", title: "What This Means for You", body: "The smartest purchase is not always the one getting the most attention.", callout: "Your future starts here.", image: "front-porch-chairs", speakerNotes: "Patience is one of the most powerful tools a buyer has." },
  { type: "cards3", title: "Why This Works in Every Market", cards: [{ title: "Urban", subtitle: "Different market.", image: "urban-rowhomes" }, { title: "Suburban", subtitle: "Same strategy.", image: "suburban-culdesac" }, { title: "Townhome / Condo", subtitle: "Same opportunity.", image: "townhome-condo" }], bottomLine: "Different markets. Same opportunity.", speakerNotes: "The details change by market, but buyer behavior is consistent." },
  { type: "divider", part: "Part 5", title: "Use Inspections to Protect Yourself", subtitle: "Information gives you options before you fully commit.", image: "doorbell-detail", speakerNotes: "Transition into inspections." },
  { type: "cards4", title: "How Inspections Protect You", cards: [{ title: "Electrical", subtitle: "Check systems.", image: "electrical-panel" }, { title: "Roof & Exterior", subtitle: "Spot issues early.", image: "roof-flashing" }, { title: "Plumbing", subtitle: "Dig deeper.", image: "under-sink" }, { title: "Structural", subtitle: "Peace of mind.", image: "crawlspace" }], bottomLine: "See the issues. Plan ahead. Protect your investment.", speakerNotes: "Inspections give you information. Information gives you leverage. Leverage protects you." },
  { type: "scorecard", title: "Buyer Confidence Scorecard", headline: "You’re informed. You’re prepared. You’re ready.", body: "Where are you right now — ready, almost, or still building?", image: "buyer-keys-grin", speakerNotes: "Take a second and check in. Ready, almost, and still building are all useful places to be after tonight." },
  { type: "nextStep", title: "Your Next Step", body: "You don’t have to figure it all out alone. The next step is a short planning conversation — no obligation, no pressure, just clarity.", items: [{ title: "Let’s Talk", body: "Share your goals and ask anything." }, { title: "Make a Plan", body: "Build a path that fits your numbers." }, { title: "Move Forward", body: "With clarity at every step." }], image: "couple-front-door", speakerNotes: "The next step after tonight is a short conversation to look at actual numbers and options." },
  { type: "qa", title: "Q&A", body: "Let’s answer your questions and move you forward.", image: "living-room", speakerNotes: "Open it up for questions. There are no bad questions." }
];
