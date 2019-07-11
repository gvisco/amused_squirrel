// thanks to https://github.com/dariusk
var adjs = [ 
      "Aristotelian",
      "Arthurian",
      "Bohemian",
      "Brethren",
      "Mosaic",
      "Oceanic",
      "Proctor",
      "Terran",
      "Tudor",
      "Abroad",
      "Absorbing",
      "Abstract",
      "Academic",
      "Accelerated",
      "Accented",
      "Accountant",
      "Acquainted",
      "Acute",
      "Addicting",
      "Addictive",
      "Adjustable",
      "Admired",
      "Adult",
      "Adverse",
      "Advised",
      "Aerosol",
      "Afraid",
      "Aggravated",
      "Aggressive",
      "Agreeable",
      "Alienate",
      "Aligned",
      "All-round",
      "Alleged",
      "Almond",
      "Alright",
      "Altruistic",
      "Ambient",
      "Ambivalent",
      "Amiable",
      "Amino",
      "Amorphous",
      "Amused",
      "Anatomical",
      "Ancestral",
      "Angelic",
      "Angrier",
      "Answerable",
      "Antiquarian",
      "Antiretroviral",
      "Appellate",
      "Applicable",
      "Apportioned",
      "Approachable",
      "Appropriated",
      "Archer",
      "Aroused",
      "Arrested",
      "Assertive",
      "Assigned",
      "Athletic",
      "Atrocious",
      "Attained",
      "Authoritarian",
      "Autobiographical",
      "Avaricious",
      "Avocado",
      "Awake",
      "Awsome",
      "Backstage",
      "Backwoods",
      "Balding",
      "Bandaged",
      "Banded",
      "Banned",
      "Barreled",
      "Battle",
      "Beaten",
      "Begotten",
      "Beguiled",
      "Bellied",
      "Belted",
      "Beneficent",
      "Besieged",
      "Betting",
      "Big-money",
      "Biggest",
      "Biochemical",
      "Bipolar",
      "Blackened",
      "Blame",
      "Blessed",
      "Blindfolded",
      "Bloat",
      "Blocked",
      "Blooded",
      "Blue-collar",
      "Blushing",
      "Boastful",
      "Bolder",
      "Bolstered",
      "Bonnie",
      "Bored",
      "Boundary",
      "Bounded",
      "Bounding",
      "Branched",
      "Brawling",
      "Brazen",
      "Breeding",
      "Bridged",
      "Brimming",
      "Brimstone",
      "Broadest",
      "Broiled",
      "Broker",
      "Bronze",
      "Bruising",
      "Buffy",
      "Bullied",
      "Bungling",
      "Burial",
      "Buttery",
      "Candied",
      "Canonical",
      "Cantankerous",
      "Cardinal",
      "Carefree",
      "Caretaker",
      "Casual",
      "Cathartic",
      "Causal",
      "Chapel",
      "Characterized",
      "Charcoal",
      "Cheeky",
      "Cherished",
      "Chipotle",
      "Chirping",
      "Chivalrous",
      "Circumstantial",
      "Civic",
      "Civil",
      "Civilised",
      "Clanking",
      "Clapping",
      "Claptrap",
      "Classless",
      "Cleansed",
      "Cleric",
      "Cloistered",
      "Codified",
      "Colloquial",
      "Colour",
      "Combat",
      "Combined",
      "Comely",
      "Commissioned",
      "Commonplace",
      "Commuter",
      "Commuting",
      "Comparable",
      "Complementary",
      "Compromising",
      "Conceding",
      "Concentrated",
      "Conceptual",
      "Conditioned",
      "Confederate",
      "Confident",
      "Confidential",
      "Confining",
      "Confuse",
      "Congressional",
      "Consequential",
      "Conservative",
      "Constituent",
      "Contaminated",
      "Contemporaneous",
      "Contraceptive",
      "Convertible",
      "Convex",
      "Cooked",
      "Coronary",
      "Corporatist",
      "Correlated",
      "Corroborated",
      "Cosmic",
      "Cover",
      "Crash",
      "Crypto",
      "Culminate",
      "Cushioned",
      "Dandy",
      "Dashing",
      "Dazzled",
      "Decreased",
      "Decrepit",
      "Dedicated",
      "Defaced",
      "Defective",
      "Defenseless",
      "Deluded",
      "Deodorant",
      "Departed",
      "Depress",
      "Designing",
      "Despairing",
      "Destitute",
      "Detective",
      "Determined",
      "Devastating",
      "Deviant",
      "Devilish",
      "Devoted",
      "Diagonal",
      "Dictated",
      "Didactic",
      "Differentiated",
      "Diffused",
      "Dirtier",
      "Disabling",
      "Disconnected",
      "Discovered",
      "Disdainful",
      "Diseased",
      "Disfigured",
      "Disheartened",
      "Disheveled",
      "Disillusioned",
      "Disparate",
      "Dissident",
      "Doable",
      "Doctrinal",
      "Doing",
      "Dotted",
      "Double-blind",
      "Downbeat",
      "Dozen",
      "Draining",
      "Draught",
      "Dread",
      "Dried",
      "Dropped",
      "Dulled",
      "Duplicate",
      "Eaten",
      "Echoing",
      "Economical",
      "Elaborated",
      "Elastic",
      "Elective",
      "Electoral",
      "Elven",
      "Embryo",
      "Emerald",
      "Emergency",
      "Emissary",
      "Emotional",
      "Employed",
      "Enamel",
      "Encased",
      "Encrusted",
      "Endangered",
      "Engraved",
      "Engrossing",
      "Enlarged",
      "Enlisted",
      "Enlivened",
      "Ensconced",
      "Entangled",
      "Enthralling",
      "Entire",
      "Envious",
      "Eradicated",
      "Eroded",
      "Esoteric",
      "Essential",
      "Evaporated",
      "Ever-present",
      "Evergreen",
      "Everlasting",
      "Exacting",
      "Exasperated",
      "Excess",
      "Exciting",
      "Executable",
      "Existent",
      "Exonerated",
      "Exorbitant",
      "Exponential",
      "Export",
      "Extraordinary",
      "Exultant",
      "Exulting",
      "Facsimile",
      "Fading",
      "Fainter",
      "Faith-based",
      "Fallacious",
      "Faltering",
      "Famous",
      "Fancier",
      "Fast-growing",
      "Fated",
      "Favourable",
      "Fearless",
      "Feathered",
      "Fellow",
      "Fermented",
      "Ferocious",
      "Fiddling",
      "Filling",
      "Firmer",
      "Fitted",
      "Flammable",
      "Flawed",
      "Fledgling",
      "Fleshy",
      "Flexible",
      "Flickering",
      "Floral",
      "Flowering",
      "Flowing",
      "Foggy",
      "Folic",
      "Foolhardy",
      "Foolish",
      "Footy",
      "Forehand",
      "Forked",
      "Formative",
      "Formulaic",
      "Foul-mouthed",
      "Fractional",
      "Fragrant",
      "Fraudulent",
      "Freakish",
      "Freckled",
      "Freelance",
      "Freight",
      "Fresh",
      "Fretted",
      "Frugal",
      "Fulfilling",
      "Fuming",
      "Funded",
      "Funny",
      "Garbled",
      "Gathered",
      "Geologic",
      "Geometric",
      "Gibberish",
      "Gilded",
      "Ginger",
      "Glare",
      "Glaring",
      "Gleaming",
      "Glorified",
      "Glorious",
      "Goalless",
      "Gold-plated",
      "Goody",
      "Grammatical",
      "Grande",
      "Grateful",
      "Gratuitous",
      "Graven",
      "Greener",
      "Grinding",
      "Grizzly",
      "Groaning",
      "Grudging",
      "Guaranteed",
      "Gusty",
      "Half-breed",
      "Hand-held",
      "Handheld",
      "Hands-off",
      "Hard-pressed",
      "Harlot",
      "Healing",
      "Healthier",
      "Healthiest",
      "Heart",
      "Heart-shaped",
      "Heathen",
      "Hedonistic",
      "Heralded",
      "Herbal",
      "High-density",
      "High-performance",
      "High-res",
      "High-yield",
      "Hissy",
      "Hitless",
      "Holiness",
      "Homesick",
      "Honorable",
      "Hooded",
      "Hopeless",
      "Horrendous",
      "Horrible",
      "Hot-button",
      "Huddled",
      "Human",
      "Humbling",
      "Humid",
      "Humiliating",
      "Hypnotized",
      "Idealistic",
      "Idiosyncratic",
      "Ignited",
      "Illustrated",
      "Illustrative",
      "Imitated",
      "Immense",
      "Immersive",
      "Immigrant",
      "Immoral",
      "Impassive",
      "Impressionable",
      "Improbable",
      "Impulsive",
      "In-between",
      "In-flight",
      "Inattentive",
      "Inbound",
      "Inbounds",
      "Incalculable",
      "Incomprehensible",
      "Indefatigable",
      "Indigo",
      "Indiscriminate",
      "Indomitable",
      "Inert",
      "Inflate",
      "Inform",
      "Inheriting",
      "Injured",
      "Injurious",
      "Inking",
      "Inoffensive",
      "Insane",
      "Insensible",
      "Insidious",
      "Insincere",
      "Insistent",
      "Insolent",
      "Insufferable",
      "Intemperate",
      "Interdependent",
      "Interesting",
      "Interfering",
      "Intern",
      "Interpreted",
      "Intersecting",
      "Intolerable",
      "Intolerant",
      "Intuitive",
      "Irresolute",
      "Irritate",
      "Jealous",
      "Jerking",
      "Joining",
      "Joint",
      "Journalistic",
      "Joyful",
      "Keyed",
      "Knowing",
      "Lacklustre",
      "Laden",
      "Lagging",
      "Lamented",
      "Laughable",
      "Layered",
      "Leather",
      "Leathern",
      "Leery",
      "Left-footed",
      "Legible",
      "Leisure",
      "Lessening",
      "Liberating",
      "Life-size",
      "Lifted",
      "Lightest",
      "Limitless",
      "Listening",
      "Literary",
      "Liver",
      "Livid",
      "Lobster",
      "Locked",
      "Long-held",
      "Long-lasting",
      "Long-running",
      "Long-suffering",
      "Loudest",
      "Loveliest",
      "Low-budget",
      "Low-carb",
      "Lowering",
      "Lucid",
      "Luckless",
      "Lusty",
      "Luxurious",
      "Magazine",
      "Maniac",
      "Manmade",
      "Maroon",
      "Mastered",
      "Mated",
      "Material",
      "Materialistic",
      "Meaningful",
      "Measuring",
      "Mediaeval",
      "Medical",
      "Meditated",
      "Medley",
      "Melodic",
      "Memorable",
      "Memorial",
      "Metabolic",
      "Metallic",
      "Metallurgical",
      "Metering",
      "Midair",
      "Midterm",
      "Midway",
      "Mighty",
      "Migrating",
      "Mind-blowing",
      "Mind-boggling",
      "Minor",
      "Mirrored",
      "Misguided",
      "Misshapen",
      "Mitigated",
      "Mixed",
      "Modernized",
      "Molecular",
      "Monarch",
      "Monastic",
      "Morbid",
      "Motley",
      "Motorized",
      "Mounted",
      "Multi-million",
      "Multidisciplinary",
      "Muscled",
      "Muscular",
      "Muted",
      "Mysterious",
      "Mythic",
      "Nail-biting",
      "Natural",
      "Nauseous",
      "Negative",
      "Networked",
      "Neurological",
      "Neutered",
      "Newest",
      "Night",
      "Nitrous",
      "No-fly",
      "Noncommercial",
      "Nonsense",
      "North",
      "Nuanced",
      "Nuclear"
      "Occurring",
      "Offensive",
      "Oldest",
      "Oncoming",
      "One-eyed",
      "One-year",
      "Onstage",
      "Onward",
      "Opaque",
      "Open-ended",
      "Operating",
      "Opportunist",
      "Opposing",
      "Opt-in",
      "Ordinate",
      "Outdone",
      "Outlaw",
      "Outsized",
      "Overboard",
      "Overheated",
      "Oversize",
      "Overworked",
      "Oyster",
      "Paced",
      "Panting",
      "Paralyzed",
      "Paramount",
      "Parental",
      "Parted",
      "Partisan",
      "Passive",
      "Pastel",
      "Patriot",
      "Peacekeeping",
      "Pedestrian",
      "Peevish",
      "Penal",
      "Penned",
      "Pensive",
      "Perceptual",
      "Perky",
      "Permissible",
      "Permissive"
      "Pernicious",
      "Perpetuate",
      "Perplexed",
      "Pervasive",
      "Petrochemical",
      "Philosophical",
      "Picturesque",
      "Pillaged",
      "Piped",
      "Piquant",
      "Pitching",
      "Plausible",
      "Pliable",
      "Plumb",
      "Politician",
      "Polygamous",
      "Poorest",
      "Poor",
      "Portmanteau",
      "Posed",
      "Positive",
      "Possible",
      "Postpartum",
      "Prank",
      "Pre-emptive",
      "Precocious",
      "Predicted",
      "Premium",
      "Preparatory",
      "Prerequisite",
      "Presbyterian",
      "Prescient",
      "Preserved",
      "Presidential",
      "Pressed",
      "Pressurized",
      "Presumed",
      "Prewar",
      "Priced",
      "Pricier",
      "Primal",
      "Primer",
      "Primetime",
      "Printed",
      "Private",
      "Problem",
      "Procedural",
      "Process",
      "Prodigious",
      "Professional",
      "Programmed",
      "Progressive",
      "Prolific",
      "Promising",
      "Promulgated",
      "Pronged",
      "Proportionate",
      "Protracted",
      "Pulled",
      "Pulsed",
      "Purgatory",
      "Quick",
      "Rapid-fire",
      "Raunchy",
      "Razed",
      "Reactive",
      "Readable",
      "Realizing",
      "Recognised",
      "Recovering",
      "Recurrent",
      "Recycled",
      "Redeemable",
      "Reflecting",
      "Regal",
      "Registering",
      "Reliable",
      "Reminiscent",
      "Remorseless",
      "Removable",
      "Renewable",
      "Repeating",
      "Repellent",
      "Reserve",
      "Resigned",
      "Respectful",
      "Rested",
      "Restrict",
      "Resultant",
      "Retaliatory",
      "Retiring",
      "Revelatory",
      "Reverend",
      "Reversing",
      "Revolving",
      "Ridiculous",
      "Right-hand",
      "Ringed",
      "Risque",
      "Robust",
      "Roomful",
      "Rotating",
      "Roused",
      "Rubber",
      "Run-down",
      "Running",
      "Runtime",
      "Rustling",
      "Safest",
      "Salient",
      "Sanctioned",
      "Saute",
      "Saved",
      "Scandalized",
      "Scarlet",
      "Scattering",
      "Sceptical",
      "Scheming",
      "Scoundrel",
      "Scratched",
      "Scratchy",
      "Scrolled",
      "Seated",
      "Second-best",
      "Segregated",
      "Self-taught",
      "Semiautomatic",
      "Senior",
      "Sensed",
      "Sentient",
      "Sexier",
      "Shadowy",
      "Shaken",
      "Shaker",
      "Shameless",
      "Shaped",
      "Shiny",
      "Shipped",
      "Shivering",
      "Shoestring",
      "Short",
      "Short-lived",
      "Signed",
      "Simplest",
      "Simplistic",
      "Sizable",
      "Skeleton",
      "Skinny",
      "Skirting",
      "Skyrocketed",
      "Slamming",
      "Slanting",
      "Slapstick",
      "Sleek",
      "Sleepless",
      "Sleepy",
      "Slender",
      "Slimmer",
      "Smacking",
      "Smokeless",
      "Smothered",
      "Smouldering",
      "Snuff",
      "Socialized",
      "Solid-state",
      "Sometime",
      "Sought",
      "Spanking",
      "Sparing",
      "Spattered",
      "Specialized",
      "Specific",
      "Speedy",
      "Spherical",
      "Spiky",
      "Spineless",
      "Sprung",
      "Squint",
      "Stainless",
      "Standing",
      "Starlight",
      "Startled",
      "Stately",
      "Statewide",
      "Stereoscopic",
      "Sticky",
      "Stimulant",
      "Stinky",
      "Stoked",
      "Stolen",
      "Storied",
      "Strained",
      "Strapping",
      "Strengthened",
      "Stubborn",
      "Stylized",
      "Suave",
      "Subjective",
      "Subjugated",
      "Subordinate",
      "Succeeding",
      "Suffering",
      "Summary",
      "Sunset",
      "Sunshine",
      "Supernatural",
      "Supervisory",
      "Supply-side",
      "Surrogate",
      "Suspended",
      "Suspenseful",
      "Swarthy",
      "Sweating",
      "Sweeping",
      "Swinging",
      "Swooning",
      "Sympathize",
      "Synchronized",
      "Synonymous",
      "Synthetic",
      "Tailed",
      "Tallest",
      "Tangible",
      "Tanked",
      "Tarry",
      "Technical",
      "Tectonic",
      "Telepathic",
      "Tenderest",
      "Territorial",
      "Testimonial",
      "Theistic",
      "Thicker",
      "Threatening",
      "Tight-lipped",
      "Timed",
      "Timely",
      "Timid",
      "Torrent",
      "Totalled",
      "Tougher",
      "Traditional",
      "Transformed",
      "Trapped",
      "Traveled",
      "Traverse",
      "Treated",
      "Trial",
      "Trunk",
      "Trusting",
      "Trying",
      "Twisted",
      "Two-lane",
      "Tyrannical",
      "Unaided",
      "Unassisted",
      "Unassuming",
      "Unattractive",
      "Uncapped",
      "Uncomfortable",
      "Uncontrolled",
      "Uncooked",
      "Uncooperative",
      "Underground",
      "Undersea",
      "Undisturbed",
      "Unearthly",
      "Uneasy",
      "Unequal",
      "Unfazed",
      "Unfinished",
      "Unforeseen",
      "Unforgivable",
      "Unidentified",
      "Unimaginative",
      "Uninspired",
      "Unintended",
      "Uninvited",
      "Universal",
      "Unmasked",
      "Unorthodox",
      "Unparalleled",
      "Unpleasant",
      "Unprincipled",
      "Unread",
      "Unreasonable",
      "Unregulated",
      "Unreliable",
      "Unremitting",
      "Unsafe",
      "Unsanitary",
      "Unsealed",
      "Unsuccessful",
      "Unsupervised",
      "Untimely",
      "Unwary",
      "Unwrapped",
      "Uppity",
      "Upstart",
      "Useless",
      "Utter",
      "Valiant",
      "Valid",
      "Valued",
      "Vanilla",
      "Vaulting",
      "Vaunted",
      "Veering",
      "Vegetative",
      "Vented",
      "Verbal",
      "Verifying",
      "Veritable",
      "Versed",
      "Vinyl",
      "Virgin",
      "Visceral",
      "Visual",
      "Voluptuous",
      "Walk-on",
      "Wanton",
      "Warlike",
      "Washed",
      "Waterproof",
      "Waved",
      "Weakest",
      "Well-bred",
      "Well-chosen",
      "Well-informed",
      "Wetting",
      "Wheeled",
      "Whirlwind",
      "Widen",
      "Widening",
      "Willful",
      "Willing",
      "Winnable",
      "Winningest",
      "Wireless",
      "Wistful",
      "Woeful",
      "Wooded",
      "Woodland",
      "Wordless",
      "Workable",
      "Worldly",
      "Worldwide",
      "Worst-case",
      "Worsted",
      "Worthless"]

