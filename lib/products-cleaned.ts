export interface Product {
  id: string
  name: string
  sku: string
  category: string
  brand: string
  image: string
  description: string
  specs: Record<string, string>
  hsn: string
  minOrderQty: number
  inStock: boolean
  isOffer?: boolean
  offerBadge?: string
  features?: string[]
  application?: string
  cta?: string
}

export const categories = [
  { id: "collision-repair", name: "Collision Repair Equipment", icon: "🔨", description: "Body damage restoration systems" },
  { id: "welding", name: "Welding Machines & Spot Welders", icon: "🔥", description: "Professional welding equipment" },
  { id: "spray-guns", name: "Paint & Spray Guns", icon: "🎨", description: "Professional spray equipment" },
  { id: "lifting", name: "Vehicle Lifts & Hoists", icon: "🏗️", description: "Professional lifting equipment" },
  { id: "transmission", name: "Transmission & Engine Service", icon: "🚗", description: "Transmission jacks & engine service" },
  { id: "pneumatic", name: "Air Systems & Compressors", icon: "💨", description: "Air-powered equipment" },
  { id: "hydraulic", name: "Hydraulic Equipment", icon: "⚙️", description: "Hydraulic presses and systems" },
  { id: "painting", name: "Paint Curing & Booth Systems", icon: "💡", description: "Infrared curing booths" },
  { id: "measurement", name: "Precision Measurement Tools", icon: "📏", description: "Professional diagnostic tools" },
  { id: "power-tools", name: "Professional Power Tools", icon: "⚡", description: "Bosch & premium power tools" },
  { id: "special-tools", name: "Special Service Tools", icon: "🔩", description: "Workshop service tools" },
  { id: "nitrogen", name: "Nitrogen Inflation Systems", icon: "💨", description: "Tire inflation systems" },
  { id: "storage", name: "Tool Storage Solutions", icon: "📦", description: "Professional storage" },
]

export const brands = [
  "LINICH",
  "Blue Point",
  "CAR-O-LINER",
  "SATA",
  "DeVilbiss",
  "3M",
  "Bosch",
  "Stanley",
  "DeWALT",
  "Fluke",
  "Mitutoyo",
  "PCL",
  "Mirka",
  "Menzerna",
  "MaxShine",
  "Total",
  "Generic Pro",
  "Rexter",
]

export const products: Product[] = [
  // ========================
  // COLLISION REPAIR EQUIPMENT
  // ========================
  {
    id: "1",
    name: "LINICH 3100 Auto Puller",
    sku: "LIN-3100",
    category: "collision-repair",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Professional automatic dent pulling machine for precision body panel repair. Features dual triggering modes for controlled dent removal with minimal metal distortion.",
    specs: {
      "Input Voltage": "220-230V AC",
      "Max Welding Output": "11 KVA",
      "Max Welding Current": "3000A",
      "Protection Rating": "IP21",
      Weight: "29 kg",
    },
    features: [
      "Dual manual and automatic triggering modes",
      "German thyristor technology for precision",
      "Max welding current 3000A",
      "Complete accessory kit",
      "Minimal metal distortion",
    ],
    application: "Collision repair workshops, body shops, authorized service centers",
    cta: "Enquire Now",
    hsn: "8508",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "2",
    name: "LINICH Spot Welder LCR-70",
    sku: "LIN-LCR70",
    category: "welding",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Heavy-duty dual-purpose spot welder and dent puller with spring balancer and temperature-controlled cooling system for production environments.",
    specs: {
      "Input Voltage": "400V AC, 50Hz",
      "Max Output Current": "13,500 A",
      "Output Voltage": "7V (no-load), 3V (load)",
      "Protection Class": "IP22",
      Weight: "146 kg",
    },
    features: [
      "Dual spot welding & dent pulling",
      "Spring balancer for ease of use",
      "Temperature-controlled air-cooled system",
      "Industrial-grade construction",
      "High output current 13,500A",
    ],
    application: "Body shop production, collision repair centers, high-volume welding",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "3",
    name: "CAR-O-LINER CTR-9 Inverter Spot Welder",
    sku: "CAR-CTR9",
    category: "welding",
    brand: "CAR-O-LINER",
    image: "/placeholder.svg",
    description:
      "Lightweight inverter spot welder with ergonomic design and CANBUS communication for precision collision repair operations.",
    specs: {
      Technology: "Inverter-based",
      Handle: "Ergonomic swivel",
      Communication: "CANBUS precision control",
      "Energy Consumption": "Optimized",
      Design: "Compact, lightweight",
    },
    features: [
      "Inverter-based technology",
      "Lightweight transformer gun",
      "Ergonomic swivel handle",
      "Advanced CANBUS precision",
      "Fast welding cycles",
    ],
    application: "Collision repair centers, body shops, structural welding",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "4",
    name: "CAR-O-LINER CRX Spot Welder",
    sku: "CAR-CRX",
    category: "welding",
    brand: "CAR-O-LINER",
    image: "/placeholder.svg",
    description:
      "Inverter-based spot welder with ultra-lightweight and compact design for modern collision repair centers with space constraints.",
    specs: {
      Technology: "Inverter-based",
      Weight: "Ultra-lightweight",
      Design: "Compact",
      Mobility: "High",
      "Power Consumption": "Reduced",
    },
    features: [
      "Inverter-based technology",
      "Compact form factor",
      "Lightweight design",
      "High mobility",
      "Stable welding performance",
    ],
    application: "Space-constrained collision centers, portable body shop operations",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // WELDING MACHINES
  // ========================
  {
    id: "5",
    name: "Blue Point Inverter MIG Welder 160A",
    sku: "BP-MIG160",
    category: "welding",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description:
      "Dual-function MIG & MMA welding machine with IGBT inverter technology for professional fabrication and repair work.",
    specs: {
      "Input Voltage": "230V ±15%",
      "Output Current": "Up to 160A",
      "Duty Cycle": "40%",
      "Wire Diameter": "0.8 – 1.2 mm",
      Technology: "IGBT Inverter",
    },
    features: [
      "MIG & MMA dual functionality",
      "IGBT inverter technology",
      "Stable arc performance",
      "Professional-grade construction",
      "Multiple wire diameter support",
    ],
    application: "Automotive fabrication, collision repair, general workshop welding",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "6",
    name: "AutoMIG MW-250 3-Phase MIG Welder",
    sku: "AUTO-250XL",
    category: "welding",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "High-performance MIG/MAG welding machine with optimized inductor for spatter-free welding in industrial workshop settings.",
    specs: {
      Phase: "3 Phase",
      "Main Voltage": "440V 50/60Hz",
      "Output Current": "60-250 AMPS",
      "Max Welding": "6 KVA",
      "Wire Size": "0.8-1.2 mm",
    },
    features: [
      "3-phase power efficiency",
      "60-250A output range",
      "Optimized inductor for low spatter",
      "Stable arc performance",
      "Heavy-duty industrial construction",
    ],
    application: "High-volume welding, fabrication shops, industrial repairs",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // VEHICLE LIFTS & HOISTS
  // ========================
  {
    id: "7",
    name: "4-Ton Hydraulic Two-Post Lift",
    sku: "HTL-4T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Heavy-duty hydraulic two-post lift with symmetric/asymmetric arms for professional vehicle service and repair operations.",
    specs: {
      Capacity: "4,000 kg",
      "Max Height": "1,900 mm",
      "Symmetric Arms": "Wide opening",
      Motor: "2.2 kW",
      Power: "380V / 3 Phase",
    },
    features: [
      "4-ton lifting capacity",
      "Symmetric/asymmetric arm options",
      "Wide door opening",
      "Safety-certified design",
      "Smooth hydraulic operation",
    ],
    application: "Professional workshops, service centers, fleet maintenance",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "8",
    name: "5-Ton Floor Jack",
    sku: "FJ-5T",
    category: "lifting",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Professional hydraulic floor jack with quick-release mechanism and dual pump system for rapid vehicle lifting.",
    specs: {
      Capacity: "5 Tons",
      "Dual Pump": "Quick lifting",
      Wheels: "Swivel casters",
      Height: "Standard range",
      Material: "Steel with PU protection",
    },
    features: [
      "5-ton capacity",
      "Quick-release mechanism",
      "Dual pump for speed",
      "Swivel caster wheels",
      "Safety relief valve",
    ],
    application: "Vehicle maintenance, tire service, workshop operations",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "9",
    name: "Engine Crane 0.5 Ton",
    sku: "EC-500",
    category: "lifting",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Compact folding engine crane for light-duty engine lifting and positioning operations.",
    specs: {
      Capacity: "0.5-0.6 Ton",
      "Min Height": "1200 mm",
      "Max Height": "1795 mm",
      Weight: "41 kg",
      Design: "Foldable",
    },
    features: [
      "0.5-0.6 ton capacity",
      "Compact folding design",
      "Lightweight and portable",
      "Easy to store",
      "Professional-grade",
    ],
    application: "Small workshops, engine service operations, mobile repairs",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "10",
    name: "Engine Crane 2 Ton",
    sku: "EC-2T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Heavy-duty engine crane for lifting and positioning engines during complex service and overhaul operations.",
    specs: {
      Capacity: "2 Ton",
      Frame: "Reinforced steel",
      "Max Height": "2.3 m",
      Control: "Smooth hydraulic",
      Mobility: "Heavy-duty casters",
    },
    features: [
      "2-ton capacity",
      "Reinforced steel frame",
      "Smooth hydraulic control",
      "Heavy-duty casters",
      "Stable support",
    ],
    application: "Engine rebuilding, transmission service, major overhauls",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "11",
    name: "Engine Stand 450kg",
    sku: "ES-450",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Rotating engine stand for safe engine mounting and 360° rotation during rebuilding and overhaul operations.",
    specs: {
      Capacity: "450 kg",
      Rotation: "360°",
      Head: "Adjustable",
      Wheels: "4 heavy-duty casters",
      Construction: "Steel frame",
    },
    features: [
      "450kg capacity",
      "360-degree rotation",
      "Adjustable head",
      "Stable caster wheels",
      "Workshop-grade construction",
    ],
    application: "Engine rebuilding, overhaul work, precision assembly",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // TRANSMISSION & ENGINE SERVICE
  // ========================
  {
    id: "12",
    name: "Transmission Jack 0.5 Ton",
    sku: "TJ-500K",
    category: "transmission",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Hydraulic transmission jack with low-profile design for safe transmission removal and installation operations.",
    specs: {
      Capacity: "500 kg",
      "Min Height": "85 cm",
      "Max Height": "175 cm",
      Base: "Wide stable",
      Adjustment: "Smooth hydraulic",
    },
    features: [
      "500kg capacity",
      "Low-profile design",
      "Adjustable saddle",
      "Wide stable base",
      "Safety valve",
    ],
    application: "Transmission service, smaller vehicle repairs",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "13",
    name: "Transmission Jack 1 Ton",
    sku: "TJ-1T",
    category: "transmission",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Hydraulic transmission jack with adjustable saddle for safe controlled transmission removal and installation.",
    specs: {
      Capacity: "1 Ton",
      "Min Height": "860 mm",
      "Max Height": "1835 mm",
      Weight: "90 kg",
      Saddle: "Adjustable",
    },
    features: [
      "1-ton capacity",
      "Adjustable height: 860-1835mm",
      "Adjustable saddle",
      "Safety valve integrated",
      "Smooth hydraulic operation",
    ],
    application: "Transmission service, mid-size vehicle repairs",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "14",
    name: "Transmission Jack 2 Ton",
    sku: "TJ-2T",
    category: "transmission",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Heavy-duty transmission jack with stabilizing base for demanding transmission service on larger vehicles.",
    specs: {
      Capacity: "2 Ton",
      "Min Height": "1580 mm",
      "Max Width": "1040 mm",
      Weight: "74 kg",
      Base: "Stabilizing",
    },
    features: [
      "2-ton capacity",
      "Wide stabilizing base",
      "Professional-grade hydraulics",
      "Precision control",
      "Heavy-duty construction",
    ],
    application: "Heavy-duty transmission service, large vehicle repairs, fleet maintenance",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // HYDRAULIC EQUIPMENT
  // ========================
  {
    id: "15",
    name: "Hydraulic Press 20 Ton",
    sku: "HP-20T",
    category: "hydraulic",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Precision 20-ton hydraulic press for bearing removal, component pressing, and metal working operations.",
    specs: {
      Capacity: "20 Ton",
      "Working Range": "0-955 mm",
      Stroke: "154 mm",
      "Bed Width": "550 mm",
      Operation: "Smooth hydraulic",
    },
    features: [
      "20-ton capacity",
      "Precision-engineered",
      "Wide working range",
      "Smooth operation",
      "Industrial steel bed",
    ],
    application: "Bearing work, component pressing, metal fabrication",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "16",
    name: "Hydraulic Press 30 Ton",
    sku: "HP-30T",
    category: "hydraulic",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Heavy-duty 30-ton hydraulic press engineered for demanding pressing, bending, and straightening operations.",
    specs: {
      Capacity: "30 Ton",
      "Working Range": "0-1050 mm",
      Stroke: "162 mm",
      "Bed Width": "460 mm",
      Precision: "Industrial-grade",
    },
    features: [
      "30-ton capacity",
      "Professional precision",
      "Extended working range",
      "Controlled operation",
      "Heavy-duty construction",
    ],
    application: "Heavy metal pressing, bearing operations, complex fabrication",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "17",
    name: "Hydraulic Press 50 Ton",
    sku: "HP-50T",
    category: "hydraulic",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Industrial-grade 50-ton hydraulic press for high-force pressing, bending, and straightening of metal components.",
    specs: {
      Capacity: "50 Ton",
      "Pressure Output": "Maximum",
      "Working Range": "Adjustable",
      Structure: "Welded steel",
      Reliability: "Industrial-grade",
    },
    features: [
      "50-ton capacity",
      "Maximum pressure output",
      "Fully adjustable",
      "Robust welded structure",
      "Reliable performance",
    ],
    application: "High-force metalwork, straightening, industrial pressing",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // SPRAY GUNS & PAINTING
  // ========================
  {
    id: "18",
    name: "SATAjet 1000 IC Paint Spray Gun",
    sku: "SATA-1000IC",
    category: "spray-guns",
    brand: "SATA",
    image: "/placeholder.svg",
    description:
      "Premium German-engineered HVLP spray gun for solvent and water-based automotive coatings with superior atomization.",
    specs: {
      Type: "HVLP",
      "Nozzle Design": "Precision system",
      "Transfer Efficiency": "High",
      Material: "Professional construction",
      Origin: "Germany",
    },
    features: [
      "Precision air distribution",
      "High transfer efficiency",
      "Optimized nozzle",
      "Ergonomic and balanced",
      "Professional finish quality",
    ],
    application: "High-end automotive refinishing, custom paint work",
    cta: "Enquire Now",
    hsn: "7311",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "19",
    name: "DeVilbiss DV1 Basecoat Spray Gun",
    sku: "DVB-DV1",
    category: "spray-guns",
    brand: "DeVilbiss",
    image: "/placeholder.svg",
    description:
      "Professional basecoat spray gun with exceptional atomization and control for modern automotive coatings.",
    specs: {
      Body: "Lightweight balanced",
      "Material Transfer": "High efficiency",
      Overspray: "Minimal",
      Coating: "Modern automotive",
      Performance: "Consistent",
    },
    features: [
      "Lightweight balanced design",
      "Exceptional atomization",
      "Minimal overspray",
      "Modern coating compatible",
      "Professional application",
    ],
    application: "Automotive basecoat application, professional refinishing",
    cta: "Enquire Now",
    hsn: "7311",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "20",
    name: "DeVilbiss ProLite Spray Gun",
    sku: "DVB-PROLITE",
    category: "spray-guns",
    brand: "DeVilbiss",
    image: "/placeholder.svg",
    description:
      "Professional spray gun with forged aluminum body for maximum atomization efficiency and long service life.",
    specs: {
      Body: "Forged aluminum",
      "Fluid Nozzle": "Stainless steel",
      "Spray Pattern": "Excellent consistency",
      "Service Life": "Extended",
      Applications: "Demanding paint environments",
    },
    features: [
      "Forged aluminum body",
      "Stainless steel nozzle",
      "Consistent spray pattern",
      "Extended service life",
      "Demanding environment rated",
    ],
    application: "Professional paint finishing, high-demand refinishing",
    cta: "Enquire Now",
    hsn: "7311",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "21",
    name: "3M Performance Spray Gun",
    sku: "3M-SG",
    category: "spray-guns",
    brand: "3M",
    image: "/placeholder.svg",
    description:
      "Professional automotive spray gun with precision fluid delivery for consistent high-quality paint application.",
    specs: {
      Type: "HVLP compatible",
      Nozzle: "Precision",
      "Fluid Capacity": "Standard cup",
      "Spray Pattern": "Adjustable",
      Finish: "Professional quality",
    },
    features: [
      "HVLP compatible design",
      "Precision nozzle",
      "Adjustable spray pattern",
      "Ergonomic design",
      "Professional finish",
    ],
    application: "Automotive painting, professional refinishing",
    cta: "Enquire Now",
    hsn: "7311",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "22",
    name: "Rexter Paint Gun Professional",
    sku: "REX-PG",
    category: "spray-guns",
    brand: "Rexter",
    image: "/placeholder.svg",
    description: "Heavy-duty pressure feed paint sprayer for professional automotive finishing.",
    specs: {
      Type: "Pressure feed",
      Nozzle: "Precision engineered",
      "Fluid Capacity": "1-liter cup",
      "Spray Pattern": "Adjustable width",
      Grade: "Professional",
    },
    features: [
      "Pressure feed system",
      "Precision nozzle",
      "1-liter capacity",
      "Adjustable spray",
      "Professional grade",
    ],
    application: "Professional automotive finishing, production work",
    cta: "Enquire Now",
    hsn: "7311",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // PAINT CURING & BOOTH SYSTEMS
  // ========================
  {
    id: "23",
    name: "Infrared Paint Booth 3000W",
    sku: "IPB-3000",
    category: "painting",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Professional infrared curing booth with adjustable heat and automatic distance sensing for accelerated paint drying.",
    specs: {
      Power: "3000W",
      "Power Supply": "1Ph 230V",
      "Height Adjust": "0.2-2.1 m",
      "Temperature": "40-80°C",
      "Timer": "0.1-30 min",
    },
    features: [
      "3000W infrared power",
      "Adjustable height",
      "Temperature range 40-80°C",
      "Auto distance sensor",
      "Electronic timer",
    ],
    application: "Automotive paint booths, professional paint curing, refinishing",
    cta: "Enquire Now",
    hsn: "8516",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "24",
    name: "Infrared Heat Gun Professional",
    sku: "IRCL-PRO",
    category: "painting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Industrial infrared curing system with adjustable temperature and automatic overload protection for paint acceleration.",
    specs: {
      Power: "3000W",
      "Temperature Range": "40-80°C",
      "Timer Control": "Electronic",
      "Height": "Adjustable 0.2-2.1m",
      Lamps: "Halogen",
    },
    features: [
      "3000W power output",
      "40-80°C temperature range",
      "Electronic timer",
      "Adjustable height",
      "Overload protection",
    ],
    application: "Paint curing, automotive finishing, refinishing booths",
    cta: "Enquire Now",
    hsn: "8516",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // PNEUMATIC & AIR SYSTEMS
  // ========================
  {
    id: "25",
    name: "LINICH Air Compressor 30L",
    sku: "AC-30L",
    category: "pneumatic",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Professional 30L air compressor with 1200W motor for workshop pneumatic tool and spray operations.",
    specs: {
      Capacity: "30 Liters",
      Power: "1200W",
      "Air Flow": "53 L/min",
      Functions: "Dry/Wet",
      Weight: "14.1 kg",
    },
    features: [
      "30L capacity",
      "1200W motor",
      "53 L/min airflow",
      "Dry/wet functionality",
      "Portable design",
    ],
    application: "Workshop pneumatic operations, small paint booths",
    cta: "Enquire Now",
    hsn: "8414",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "26",
    name: "LINICH Air Compressor 80L",
    sku: "LIN-80L",
    category: "pneumatic",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Heavy-duty 80L industrial air compressor with dual functionality for continuous workshop and paint booth operations.",
    specs: {
      Capacity: "80 Liters",
      Power: "3000W",
      "Air Flow": "106 L/min",
      Functions: "Dry/Wet",
      "Cooling Mode": "Recycled",
    },
    features: [
      "80L tank capacity",
      "3000W motor",
      "106 L/min airflow",
      "Dry/wet functionality",
      "Efficient cooling",
    ],
    application: "Automotive workshops, continuous paint booth operations",
    cta: "Enquire Now",
    hsn: "8414",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "27",
    name: "Air Compressor 50L Tank",
    sku: "AC-50L",
    category: "pneumatic",
    brand: "Total",
    image: "/placeholder.svg",
    description:
      "Oil-free air compressor with 50L tank for workshop pneumatic tools and spray painting equipment.",
    specs: {
      Tank: "50L",
      Power: "2HP",
      Pressure: "8 bar",
      "Air Flow": "200 L/min",
      Type: "Oil-free",
    },
    features: [
      "50L tank",
      "Oil-free operation",
      "2HP motor",
      "8 bar pressure",
      "200 L/min flow",
    ],
    application: "Workshop operations, pneumatic tools, paint equipment",
    cta: "Enquire Now",
    hsn: "8414",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "28",
    name: "Vacuum Cleaner for Workshops",
    sku: "VC-IND",
    category: "pneumatic",
    brand: "LINICH",
    image: "/placeholder.svg",
    description:
      "Industrial dry/wet vacuum cleaner for workshop cleaning and paint booth dust extraction.",
    specs: {
      Power: "3000W",
      Capacity: "High performance",
      Functions: "Dry/Wet",
      Tank: "Heavy-duty",
      Filtration: "Efficient",
    },
    features: [
      "3000W motor",
      "Dry and wet capability",
      "High-performance suction",
      "Industrial tank",
      "Efficient filtration",
    ],
    application: "Workshop cleaning, paint booth maintenance, debris removal",
    cta: "Enquire Now",
    hsn: "8408",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // NITROGEN INFLATION SYSTEMS
  // ========================
  {
    id: "29",
    name: "PCL SUMO Nitrogen Generator",
    sku: "PCL-N2",
    category: "nitrogen",
    brand: "PCL",
    image: "/placeholder.svg",
    description:
      "Mobile PSA nitrogen generation system for tire inflation with preset pressure control and 4-tire simultaneous inflation.",
    specs: {
      Technology: "PSA",
      Capacity: "High purity N2",
      Features: "Preset pressure, 4-tire inflate, Air/N2 selector",
      Mobility: "Mobile design",
      Applications: "Forecourt, workshop, fleet",
    },
    features: [
      "PSA nitrogen generation",
      "Simultaneous 4-tire inflation",
      "Preset pressure control",
      "Air/nitrogen selector",
      "Mobile design",
    ],
    application: "Professional tire inflation, fleet maintenance, workshop operations",
    cta: "Enquire Now",
    hsn: "8414",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "30",
    name: "ACCURA Compact D60 Digital Inflator",
    sku: "ACCURA-D60",
    category: "nitrogen",
    brand: "ACCURA",
    image: "/placeholder.svg",
    description:
      "Compact digital tire inflator with precision pressure accuracy for professional tire inflation and diagnostics.",
    specs: {
      Display: "Digital LCD",
      Accuracy: "High precision",
      Design: "Compact and durable",
      Features: "Professional grade",
      Applications: "Tire inflation",
    },
    features: [
      "Digital display",
      "Precision accuracy",
      "Compact design",
      "Durable construction",
      "Professional grade",
    ],
    application: "Professional tire inflation, pressure diagnostics",
    cta: "Enquire Now",
    hsn: "8414",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "31",
    name: "ACCURA QUBE Digital Inflator",
    sku: "ACCURA-QUBE",
    category: "nitrogen",
    brand: "ACCURA",
    image: "/placeholder.svg",
    description:
      "Advanced touchscreen digital inflator for modern tire inflation requirements with ultra-high precision.",
    specs: {
      Display: "Touchscreen digital",
      Accuracy: "Ultra-high precision",
      Operation: "User-friendly",
      Design: "Compact and robust",
      Technology: "Advanced",
    },
    features: [
      "Touchscreen display",
      "Ultra-high precision",
      "User-friendly operation",
      "Robust construction",
      "Advanced technology",
    ],
    application: "Professional tire inflation, fleet management, precision diagnostics",
    cta: "Enquire Now",
    hsn: "8414",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // SPECIAL SERVICE TOOLS
  // ========================
  {
    id: "32",
    name: "Bearing Puller Set",
    sku: "BP-SET",
    category: "special-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description:
      "Professional 6-piece bearing puller set with sizes from 75mm to 300mm for precision bearing extraction.",
    specs: {
      Pieces: "6",
      Range: "75mm to 300mm",
      Material: "Hardened steel",
      Design: "Precision engineered",
    },
    features: [
      "6-piece set",
      "75-300mm range",
      "Hardened steel",
      "Precise design",
      "Professional quality",
    ],
    application: "Bearing removal, shaft extraction, precision mechanical work",
    cta: "Enquire Now",
    hsn: "8205",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "33",
    name: "Spring Compressor Hydraulic",
    sku: "HCSC-PRO",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Hydraulic coil spring compressor for safe compression during suspension repair and replacement operations.",
    specs: {
      "Spring Locking": "Secure",
      "Hydraulic Control": "Heavy-duty",
      Construction: "Workshop-grade",
      Safety: "Professional rated",
      Type: "Coil spring",
    },
    features: [
      "Secure locking",
      "Heavy-duty hydraulic",
      "Workshop-grade",
      "Safety-certified",
      "Reliable operation",
    ],
    application: "Suspension service, spring replacement, suspension work",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // MEASUREMENT & DIAGNOSTICS
  // ========================
  {
    id: "34",
    name: "Fluke Digital Multimeter",
    sku: "FM-175",
    category: "measurement",
    brand: "Fluke",
    image: "/placeholder.svg",
    description:
      "Professional digital multimeter for electrical diagnostics with industry-standard accuracy for vehicle electrical systems.",
    specs: {
      Display: "Digital LCD",
      Functions: "Voltage, Current, Resistance, Temperature",
      Accuracy: "High precision",
      Rating: "CAT III",
    },
    features: [
      "CAT III rated",
      "Auto-ranging",
      "Backlit display",
      "Multiple functions",
      "Professional accuracy",
    ],
    application: "Electrical diagnostics, wiring troubleshooting, system testing",
    cta: "Enquire Now",
    hsn: "9030",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "35",
    name: "Mitutoyo Micrometer 25mm",
    sku: "MM-25",
    category: "measurement",
    brand: "Mitutoyo",
    image: "/placeholder.svg",
    description:
      "Precision micrometer for accurate measurements up to 25mm for engine work and component inspection.",
    specs: {
      Range: "0-25mm",
      Accuracy: "±0.01mm",
      Material: "Chrome plated steel",
      Construction: "Precision engineered",
    },
    features: [
      "0-25mm range",
      "±0.01mm accuracy",
      "Chrome plated",
      "Easy reading",
      "Professional precision",
    ],
    application: "Engine work, bore measurement, precision inspection",
    cta: "Enquire Now",
    hsn: "9031",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "36",
    name: "Vernier Caliper Mitutoyo",
    sku: "VC-MIT",
    category: "measurement",
    brand: "Mitutoyo",
    image: "/placeholder.svg",
    description:
      "Precision stainless steel vernier caliper for external and internal measurements in mechanical work.",
    specs: {
      Range: "0-150mm",
      Accuracy: "±0.05mm",
      Material: "Stainless steel",
      Features: "Easy reading, Professional grade",
    },
    features: [
      "0-150mm range",
      "±0.05mm accuracy",
      "Stainless steel",
      "Easy to read",
      "Professional grade",
    ],
    application: "Measurement work, mechanical inspection, precision checking",
    cta: "Enquire Now",
    hsn: "9031",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "37",
    name: "Digital Tyre Pressure Gauge",
    sku: "TPG-DIG",
    category: "measurement",
    brand: "PCL",
    image: "/placeholder.svg",
    description:
      "Precision digital tire pressure gauge with backlit LCD display for accurate tire inflation diagnostics.",
    specs: {
      Display: "Digital LCD",
      Range: "0-150 PSI",
      Accuracy: "±1%",
      Features: "Auto-off, Backlit, Fast reading",
    },
    features: [
      "Digital LCD",
      "0-150 PSI range",
      "±1% accuracy",
      "Auto-off feature",
      "Backlit display",
    ],
    application: "Tire pressure measurement, fleet maintenance, diagnostics",
    cta: "Enquire Now",
    hsn: "9030",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // PROFESSIONAL POWER TOOLS
  // ========================
  {
    id: "38",
    name: "Bosch Angle Grinder GWS 800",
    sku: "BOSCH-GWS800",
    category: "power-tools",
    brand: "Bosch",
    image: "/placeholder.svg",
    description:
      "800W professional angle grinder with 100mm disc for cutting and grinding metal in automotive work.",
    specs: {
      Power: "800W",
      "Disc Diameter": "100mm",
      RPM: "11,000",
      Weight: "1.8kg",
      Safety: "Includes guard",
    },
    features: [
      "800W power",
      "100mm disc",
      "11,000 RPM",
      "Safety guard",
      "Comfortable grip",
    ],
    application: "Metal cutting, grinding, surface finishing",
    cta: "Enquire Now",
    hsn: "8463",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "39",
    name: "Bosch Rotary Drill GBS 600",
    sku: "BOSCH-GBS600",
    category: "power-tools",
    brand: "Bosch",
    image: "/placeholder.svg",
    description:
      "Professional rotary drill engineered for heavy-duty drilling operations in automotive workshops.",
    specs: {
      Power: "Professional grade",
      "Chuck Type": "Heavy-duty keyed",
      Performance: "High torque",
      Applications: "Heavy-duty drilling",
    },
    features: [
      "Professional grade",
      "Heavy-duty chuck",
      "High torque",
      "Industrial quality",
      "Reliable performance",
    ],
    application: "Heavy-duty drilling, professional workshop use",
    cta: "Enquire Now",
    hsn: "8463",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "40",
    name: "Bosch Heat Gun GHG 180",
    sku: "BOSCH-GHG180",
    category: "power-tools",
    brand: "Bosch",
    image: "/placeholder.svg",
    description:
      "Professional heat gun with variable temperature control for paint stripping and component heating operations.",
    specs: {
      Power: "Professional grade",
      Temperature: "Variable control",
      Applications: "Paint stripping, component heating",
      Quality: "Industrial-grade",
    },
    features: [
      "Variable temperature",
      "Professional grade",
      "Consistent output",
      "Industrial quality",
      "Efficient heating",
    ],
    application: "Paint stripping, component heating, surface preparation",
    cta: "Enquire Now",
    hsn: "8463",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "41",
    name: "DeWALT Angle Grinder 800W",
    sku: "DW-AG800",
    category: "power-tools",
    brand: "DeWALT",
    image: "/placeholder.svg",
    description:
      "Professional 100mm angle grinder with variable speed control for cutting and grinding operations.",
    specs: {
      Power: "800W",
      "Disc Diameter": "100mm",
      "No-load Speed": "11,000 rpm",
      Control: "Variable speed",
    },
    features: [
      "800W power",
      "100mm disc",
      "Variable speed",
      "11,000 RPM",
      "Safety guard",
    ],
    application: "Metal cutting, grinding, surface finishing",
    cta: "Enquire Now",
    hsn: "8463",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // FINISHING & SURFACE TREATMENT
  // ========================
  {
    id: "42",
    name: "Mirka Orbital Sander",
    sku: "MIRKA-SAND",
    category: "power-tools",
    brand: "Mirka",
    image: "/placeholder.svg",
    description:
      "Professional orbital sander with dust-free sanding technology for automotive surface preparation and finishing.",
    specs: {
      "Sanding Plate": "150mm",
      Power: "1250W",
      Speed: "750-3000 rpm",
      "Dust Collection": "Advanced",
      Design: "Ergonomic",
    },
    features: [
      "Dust-free technology",
      "150mm sanding plate",
      "1250W motor",
      "Variable speed",
      "Ergonomic design",
    ],
    application: "Surface preparation, finishing, automated sanding",
    cta: "Enquire Now",
    hsn: "8463",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "43",
    name: "Menzerna Polishing Compounds",
    sku: "MENZERNA-POLISH",
    category: "power-tools",
    brand: "Menzerna",
    image: "/placeholder.svg",
    description:
      "Professional polishing compounds with multiple cutting and polishing stages for high-gloss automotive finish.",
    specs: {
      Finish: "High-gloss",
      "Cutting Stages": "Multiple",
      "Polishing Stages": "Multiple",
      Volume: "1000ml",
      "UV Protection": "Yes",
    },
    features: [
      "Professional formulation",
      "Multiple stages",
      "High-gloss finish",
      "UV protection",
      "Minimal swirl marks",
    ],
    application: "Professional detailing, paint finishing, final coating",
    cta: "Enquire Now",
    hsn: "3405",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "44",
    name: "MaxShine Cordless Polisher",
    sku: "MAX-POLISH",
    category: "power-tools",
    brand: "MaxShine",
    image: "/placeholder.svg",
    description:
      "Cordless orbital polisher with variable speed and LED work light for professional vehicle finishing and detailing.",
    specs: {
      Speed: "600-3000 RPM",
      "Pad Size": "5 inch",
      Battery: "36V Lithium",
      "Runtime": "2 hours",
      Weight: "2.5kg",
    },
    features: [
      "Variable speed",
      "Cordless operation",
      "LED work light",
      "Long runtime",
      "Lightweight",
    ],
    application: "Vehicle detailing, paint finishing, professional polishing",
    cta: "Enquire Now",
    hsn: "8509",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // TOOL STORAGE
  // ========================
  {
    id: "45",
    name: "Tool Storage Chest Heavy Duty",
    sku: "TSC-HD",
    category: "storage",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Professional-grade tool chest with multiple drawers and secure key locking for workshop organization.",
    specs: {
      Material: "Steel",
      Drawers: "7",
      "Locking System": "Key Lock",
      "Load Capacity": "500kg",
      Dimensions: "1200×600×800mm",
    },
    features: [
      "7 drawers",
      "Steel construction",
      "Secure locking",
      "500kg capacity",
      "Professional organization",
    ],
    application: "Workshop tool storage, professional organization",
    cta: "Enquire Now",
    hsn: "7326",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "46",
    name: "Tool Box Storage Portable",
    sku: "TB-PORT",
    category: "storage",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description:
      "Portable tool box with ergonomic handle and compartments for on-site workshop organization.",
    specs: {
      Material: "Plastic reinforced",
      Handle: "Ergonomic",
      Compartments: "Multiple",
      Waterproof: "Yes",
      Size: "Medium",
    },
    features: [
      "Portable design",
      "Ergonomic handle",
      "Waterproof",
      "Multiple compartments",
      "Durable construction",
    ],
    application: "On-site storage, portable organization, field work",
    cta: "Enquire Now",
    hsn: "3924",
    minOrderQty: 1,
    inStock: true,
  },
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId)
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter((p) => p.brand === brand)
}

export function getTopProducts(count = 10): Product[] {
  return products.slice(0, count)
}

export function getOfferProducts(): Product[] {
  return products.filter((p) => p.isOffer)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.brand.toLowerCase().includes(lowercaseQuery) ||
      p.sku.toLowerCase().includes(lowercaseQuery),
  )
}
