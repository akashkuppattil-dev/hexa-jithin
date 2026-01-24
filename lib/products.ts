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
  { id: "collision-repair", name: "Collision Repair Equipment", icon: "Hammer", description: "Body damage restoration systems" },
  { id: "welding", name: "Welding Machines & Spot Welders", icon: "Zap", description: "Professional welding equipment" },
  { id: "spray-guns", name: "Paint & Spray Guns", icon: "Paintbrush", description: "Professional spray equipment" },
  { id: "lifting", name: "Vehicle Lifts & Hoists", icon: "ArrowUpCircle", description: "Professional lifting equipment" },
  { id: "transmission", name: "Transmission & Engine Service", icon: "Settings2", description: "Transmission jacks & engine service" },
  { id: "pneumatic", name: "Air Systems & Compressors", icon: "Wind", description: "Air-powered equipment" },
  { id: "hydraulic", name: "Hydraulic Equipment", icon: "Wrench", description: "Hydraulic presses and systems" },
  { id: "painting", name: "Paint Curing & Booth Systems", icon: "Sun", description: "Infrared curing booths" },
  { id: "measurement", name: "Precision Measurement Tools", icon: "Ruler", description: "Professional diagnostic tools" },
  { id: "power-tools", name: "Professional Power Tools", icon: "Zap", description: "Bosch & premium power tools" },
  { id: "special-tools", name: "Special Service Tools", icon: "Settings2", description: "Workshop service tools" },
  { id: "nitrogen", name: "Nitrogen Inflation Systems", icon: "Wind", description: "Tire inflation systems" },
  { id: "storage", name: "Tool Storage Solutions", icon: "Sparkles", description: "Professional storage" },
]

export const brands = [
  "LINICH",
  "Blue Point",
  "CAR-O-LINER",
  "SATA",
  "DeVilbiss Refinish",
  "3M",
  "Bosch",
  "Stanley",
  "DeWALT",
  "Fluke",
  "Mitutoyo",
  "PCL-SUMO",
  "Mirka",
  "Menzerna",
  "MaxShine",
  "Total",
  "Generic Pro",
  "Rexter",
  "ProGrip",
  "Gallop",
  "ARO",
  "Black & Decker",
  "Karcher",
  "Chicago Pneumatic",
  "German Polish",
  "Kovax",
  "Force",
  "Taparia",
  "Mr Tools",
]

export const products: Product[] = [
  // ========================
  // COLLISION REPAIR EQUIPMENT
  // ========================
  {
    id: "1",
    name: "Blue-Point Multifunction Dent Pulling Machine",
    sku: "BP-MDP",
    category: "collision-repair",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Professional multifunction dent pulling solution specifically designed for straightening low-thickness car body panels. Ideal for bonnets, doors, and roof panels.",
    specs: {
      "Input Voltage": "220V / 380V",
      "Rated Power": "11.5 kVA",
      "Metal Thickness": "0.8 – 1.2 mm",
      "Weight": "~23 kg",
      "Welding Time": "0 – 99 seconds"
    },
    features: [
      "Designed for dent pulling and straightening low-thickness panels",
      "Suitable for bonnet, doors, roof panels, and wings",
      "Time-controlled welding (0–99 seconds)",
      "Recovers small dents with minimal metal distortion",
      "Preserves original panel rigidity",
      "Improves workshop efficiency"
    ],
    application: "Professional body shops and lightweight panel repair",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "2",
    name: "LINICH 3100 Automatic Dent Puller",
    sku: "LIN-3100",
    category: "collision-repair",
    brand: "LINICH",
    image: "/placeholder.svg",
    description: "Automatic and manual triggering dent pulling machine featuring German-made thyristor PCB for extreme precision and professional body repair.",
    specs: {
      "Input": "220–230V AC",
      "Max Welding Current": "3000A",
      "Output Power": "11 kVA",
      "Protection Class": "IP21"
    },
    features: [
      "Automatic and manual triggering modes",
      "German-made thyristor PCB",
      "Washer & long washer welding",
      "Wiggle wire welding",
      "Triple washer pulling & Panel shrinking",
      "Secondary gun included"
    ],
    application: "Collision repair, panel beating, structural repair",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "3",
    name: "LINICH Spot LCR-70",
    sku: "LIN-LCR70",
    category: "welding",
    brand: "LINICH",
    image: "/placeholder.svg",
    description: "Combined spot welder and dent puller with temperature-controlled air-cooling and spring balancer for production-grade welding.",
    specs: {
      "Input Voltage": "400V AC",
      "Max Current": "13.5 kA",
      "Output": "47.3 kVA",
      "Operating Pressure": "6 bar"
    },
    features: [
      "Can be used as spot welder and dent puller",
      "User-friendly control panel",
      "Temperature-controlled air-cooled system",
      "Spring balancer for effective working",
      "Manual triggering",
      "Dual modes: Single Spot & Dual Spot"
    ],
    application: "Production body shops, structural welding",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "4",
    name: "10-Ton Body Frame Straightener",
    sku: "BFS-10T",
    category: "collision-repair",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Heavy-duty chassis straightening system with a powerful 10-ton hydraulic pump and swinging tower for precise frame alignment.",
    specs: {
      "Cylinder": "10-ton oil cylinder",
      "Pump": "10-ton hydraulic pump",
      "Tower Movement": "Left & Right movement"
    },
    features: [
      "10-ton oil cylinder",
      "10-ton hydraulic pump",
      "Pinch clamp support",
      "Swinging tower (left & right movement)",
      "Designed for frame alignment"
    ],
    application: "Chassis repair, frame alignment, structural straightening",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "5",
    name: "10-Ton Body Puller Kit",
    sku: "BPK-10T",
    category: "collision-repair",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Complete hydraulic body pulling solution for collision repair, including pump, cylinder, and various pulling attachments.",
    specs: {
      "Pump": "Hydraulic oil pump",
      "Cylinder": "Hydraulic cylinder"
    },
    features: [
      "Hydraulic oil pump",
      "Hydraulic cylinder",
      "Pulling chains and attachments",
      "Used for collision repair"
    ],
    application: "Collision repair, panel pulling, structural work",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "6",
    name: "Blue-Point Inverter MIG Welder – 160A",
    sku: "BP-MIG160",
    category: "welding",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Compact inverter welding machine featuring IGBT technology and digital display for precise MIG and MMA welding.",
    specs: {
      "Current": "160A",
      "Technology": "IGBT Inverter",
      "Features": "Digital display"
    },
    features: [
      "MIG welding",
      "MMA welding",
      "IGBT inverter technology",
      "Digital display",
      "Integrated gas cylinder mount"
    ],
    application: "Automotive fabrication, light structural welding",
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
    name: "CAR-O-LINER MIG/MAG Welding Machine (CM250)",
    sku: "CAR-CM250",
    category: "welding",
    brand: "CAR-O-LINER",
    image: "/placeholder.svg",
    description: "Heavy-duty automotive welding machine with 250A capacity and optimized inductor for spatter-free, high-quality results.",
    specs: {
      "Welding Capacity": "250A",
      "Voltage Adjustment": "10-step",
      "Inductor": "Optimized, spatter-free"
    },
    features: [
      "250A welding capacity",
      "Wire speed control on torch",
      "10-step voltage adjustment",
      "Spot, Stitch & Continuous welding",
      "Spatter-free optimized inductor"
    ],
    application: "Premium body shops, structural fabrication",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "8",
    name: "AUTOMIG MW 250 Welding Machine",
    sku: "AUTO-MW250",
    category: "welding",
    brand: "LINICH",
    image: "/placeholder.svg",
    description: "Three-phase MIG/MAG welder with step-regulated output and optimized inductor for spatter-free welding.",
    specs: {
      "Phase": "3 Phase",
      "Output": "Step-regulated",
      "Inductor": "Optimized"
    },
    features: [
      "Step-regulated output",
      "Optimized inductor",
      "Energy-saving operation",
      "Service-friendly design",
      "Removable wheels & built-in gas cylinder stand"
    ],
    application: "Industrial welding, production workshops",
    cta: "Enquire Now",
    hsn: "8515",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "9",
    name: "Blue-Point Plasma Cutter – 45A",
    sku: "BP-PC45",
    category: "welding",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Precision plasma cutting machine with 45A capacity and smart fault-code display.",
    specs: {
      "Cutting Capacity": "Up to 25 mm",
      "Current": "45A"
    },
    features: [
      "Cutting capacity up to 25 mm",
      "Smart fault-code display",
      "Grid cutting without restarting arc",
      "Preset air-pressure control"
    ],
    application: "Metal fabrication, dismantling, structural work",
    cta: "Enquire Now",
    hsn: "8468",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "10",
    name: "Dual-Function Brake Lathe",
    sku: "BL-DF",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Professional brake servicing tool capable of both on-car and off-car rotor resurfacing.",
    specs: {
      "Operation": "On / Off car",
      "Suitability": "Cars and light trucks"
    },
    features: [
      "Dual operation (on/off car)",
      "Accurate rotor resurfacing",
      "Suitable for cars and light trucks",
      "Fast one-cut service"
    ],
    application: "Brake service centers, multi-brand workshops",
    cta: "Enquire Now",
    hsn: "8458",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "11",
    name: "Hydraulic Coil Spring Compressor",
    sku: "HCSC-PRO",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Vertical hydraulic operation spring compressor with heavy-duty frame and safety cage.",
    specs: {
      "Operation": "Hydraulic vertical",
      "Safety": "Safety cage"
    },
    features: [
      "Hydraulic vertical operation",
      "Heavy-duty frame",
      "Safety cage protection"
    ],
    application: "Suspension service, spring replacement",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "12",
    name: "Transmission Jack – 0.5 Ton",
    sku: "TJ-05T",
    category: "transmission",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Compact 0.5-ton transmission lifting tool with dual pump for quick lifting.",
    specs: {
      "Capacity": "0.5 Ton",
      "Lifting": "Dual pump"
    },
    features: [
      "Dual pump for quick lifting",
      "Large foot pedal",
      "Swivel wheels",
      "Safety pressure valve"
    ],
    application: "Transmission service, light vehicle repairs",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "13",
    name: "Transmission Jack – 1 Ton",
    sku: "TJ-1T",
    category: "transmission",
    brand: "LINICH",
    image: "/placeholder.svg",
    description: "Heavy-duty 1-ton transmission jack with stable base and hydraulic operation.",
    specs: {
      "Capacity": "1 Ton",
      "Base": "Stable tripod"
    },
    features: [
      "Hydraulic operation",
      "Stable tripod base",
      "Swivel wheels"
    ],
    application: "Heavy transmission service, truck repairs",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },

  {
    id: "14",
    name: "Chain Lever Block – 1.5 Ton",
    sku: "CLB-15T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Manual lifting device with alloy steel load chain and forged safety hooks.",
    specs: {
      "Capacity": "1.5 Ton",
      "Chain Material": "Alloy steel"
    },
    features: [
      "Alloy steel load chain",
      "Forged safety hooks"
    ],
    application: "General workshop lifting, engine positioning",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "15",
    name: "Chain Lever Block – 3 Ton",
    sku: "CLB-3T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Heavy-duty manual lifting block with overload protection and industrial-grade chain.",
    specs: {
      "Capacity": "3 Ton",
      "Chain": "Industrial-grade"
    },
    features: [
      "Industrial-grade chain",
      "Overload protection",
      "Safety hook with latch"
    ],
    application: "Heavy industrial lifting, structural assembly",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "16",
    name: "Engine Crane – 2 Ton",
    sku: "EC-2T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Heavy-duty engine crane with foldable steel frame and smooth hydraulic operation.",
    specs: {
      "Capacity": "2 Ton",
      "Frame": "Foldable steel"
    },
    features: [
      "Foldable steel frame",
      "Smooth hydraulic operation"
    ],
    application: "Engine rebuilding, major repairs",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "17",
    name: "Engine Crane – 3 Ton",
    sku: "EC-3T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "High-capacity engine crane for heavy lifting with maximum stability.",
    specs: {
      "Capacity": "3 Ton"
    },
    features: [
      "Heavy-duty lifting",
      "Stable hydraulic operation"
    ],
    application: "Heavy component lifting, truck engine service",
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
    name: "Engine Stand – 450 Kg",
    sku: "ES-450",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "360-degree rotating engine stand for safe engine mounting and easy rebuilding access.",
    specs: {
      "Capacity": "450 kg",
      "Rotation": "360 degree"
    },
    features: [
      "450kg capacity",
      "360-degree rotation",
      "Lockable wheels"
    ],
    application: "Engine rebuilding, service centers",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "19",
    name: "4-Ton Hydraulic Two-Post Lift",
    sku: "H2PL-4T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Professional hydraulic two-post lift with 4-ton capacity and safety locking mechanism.",
    specs: {
      "Capacity": "4 Ton",
      "Mechanism": "Hydraulic"
    },
    features: [
      "4-ton lifting capacity",
      "Safety locking mechanism",
      "Dual hydraulic cylinders"
    ],
    application: "General vehicle service, underbody repairs",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "20",
    name: "Wheel Dolly",
    sku: "WD-900",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Heavy-duty wheel dolly for easy maneuvering of vehicles in tight workshop spaces.",
    specs: {
      "Capacity": "900 lbs per dolly"
    },
    features: [
      "Smooth-rolling casters",
      "Heavy-duty steel construction"
    ],
    application: "Vehicle showrooms, workshop maneuvers",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 2,
    inStock: true,
  },
  {
    id: "21",
    name: "Floor Jack – 5 Ton",
    sku: "FJ-5T",
    category: "lifting",
    brand: "LINICH",
    image: "/placeholder.svg",
    description: "Industrial-grade hydraulic floor jack with 5-ton capacity and quick-lift pump.",
    specs: {
      "Capacity": "5 Ton",
      "Pump": "Dual pump"
    },
    features: [
      "5-ton capacity",
      "Dual pump quick lift",
      "Safety bypass valve"
    ],
    application: "Heavy vehicle maintenance, truck service",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "22",
    name: "Axle Stand – 3 Ton",
    sku: "AS-3T",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Ratchet-type axle stands for secure vehicle support during service.",
    specs: {
      "Capacity": "3 Ton (Pair)"
    },
    features: [
      "Ratchet adjustment",
      "Wide base for stability",
      "Ductile iron rack"
    ],
    application: "Vehicle maintenance support",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "23",
    name: "Engine Support Beam",
    sku: "ESB-500",
    category: "lifting",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Adjustable engine support beam for holding engines in place during transmission removal.",
    specs: {
      "Capacity": "500 kg",
      "Width": "Adjustable"
    },
    features: [
      "500kg capacity",
      "Adjustable width",
      "Protective rubber feet"
    ],
    application: "Transmission service, engine mount replacement",
    cta: "Enquire Now",
    hsn: "8425",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "24",
    name: "Car Creeper",
    sku: "CC-PRO",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Ergonomic low-profile car creeper for comfortable under-car work.",
    specs: {
      "Length": "40 inch",
      "Casters": "6 swivel"
    },
    features: [
      "Padded headrest",
      "Oil-resistant surface",
      "Heavy-duty swivel casters"
    ],
    application: "Under-vehicle inspection and repair",
    cta: "Enquire Now",
    hsn: "9403",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "25",
    name: "Oil Drainer",
    sku: "OD-80",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Pneumatic oil drainer with 80L capacity and telescopic tray.",
    specs: {
      "Capacity": "80 Liters",
      "Type": "Pneumatic discharge"
    },
    features: [
      "80L tank",
      "Pneumatic discharge",
      "Telescopic tray height adjustment"
    ],
    application: "Oil change services",
    cta: "Enquire Now",
    hsn: "8413",
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
    id: "26",
    name: "Oil Dispenser",
    sku: "OD-PRO",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Multi-purpose oil dispenser with flexible spout and volume markings.",
    specs: {
      "Capacity": "Varied options"
    },
    features: [
      "Flexible spout",
      "Volume markings",
      "Durable construction"
    ],
    application: "Fluid top-ups, workshop service",
    cta: "Enquire Now",
    hsn: "8413",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "27",
    name: "Brake Oil Bleeder",
    sku: "BOB-PNEU",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Pneumatic brake fluid bleeder for efficient one-person operation.",
    specs: {
      "Type": "Pneumatic",
      "Operation": "One-person"
    },
    features: [
      "One-person operation",
      "Compressed air driven",
      "Quick connect fittings"
    ],
    application: "Brake system maintenance",
    cta: "Enquire Now",
    hsn: "8413",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "28",
    name: "Pneumatic Grease Pump",
    sku: "PGP-50",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "High-pressure pneumatic grease pump for industrial lubrication tasks.",
    specs: {
      "Ratio": "50:1",
      "Pressure": "High pressure"
    },
    features: [
      "50:1 pressure ratio",
      "Smooth delivery",
      "Industrial-grade hose"
    ],
    application: "Heavy machinery lubrication, vehicle chassis service",
    cta: "Enquire Now",
    hsn: "8413",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "29",
    name: "Manual Grease Pump",
    sku: "MGP-PRO",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Hand-operated grease pump for precision lubrication.",
    specs: {
      "Operation": "Manual lever"
    },
    features: [
      "Manual lever operation",
      "Durable steel tank",
      "Portable design"
    ],
    application: "On-site lubrication, general workshop use",
    cta: "Enquire Now",
    hsn: "8413",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "30",
    name: "Gear Oil Pump",
    sku: "GOP-MAN",
    category: "special-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Manual pump specifically designed for efficient gear oil transfer.",
    specs: {
      "Type": "Manual transfer"
    },
    features: [
      "Specific for gear oil",
      "Anti-drip nozzle",
      "Easy-grip handle"
    ],
    application: "Gearbox and differential service",
    cta: "Enquire Now",
    hsn: "8413",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "31",
    name: "Fuel Injector Cleaning Machine (Spark Plug Tester)",
    sku: "FICM-PRO",
    category: "measurement",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Professional fuel injector cleaning and testing machine with integrated spark plug tester.",
    specs: {
      "Functions": "Clean & Test",
      "Combined": "Spark plug tester"
    },
    features: [
      "Ultrasonic cleaning",
      "Simulated engine testing",
      "Built-in spark plug tester"
    ],
    application: "Fuel system diagnostics, tune-ups",
    cta: "Enquire Now",
    hsn: "8424",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "32",
    name: "Brake Fluid Tester",
    sku: "BFT-DIG",
    category: "measurement",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Digital tester for determining the moisture content of brake fluid.",
    specs: {
      "Display": "LED indicators"
    },
    features: [
      "Quick moisture detection",
      "LED status indicators",
      "Compact pen-style"
    ],
    application: "Brake safety checks, routine maintenance",
    cta: "Enquire Now",
    hsn: "9027",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "33",
    name: "Spark Plug Tester",
    sku: "SPT-DUAL",
    category: "measurement",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Dual-hole spark plug tester for comparing spark performance.",
    specs: {
      "Holes": "Dual",
      "Frequency": "Adjustable"
    },
    features: [
      "Dual hole comparison",
      "Adjustable spark frequency",
      "Protective cover"
    ],
    application: "Ignition system diagnostics",
    cta: "Enquire Now",
    hsn: "9030",
    minOrderQty: 1,
    inStock: true,
  },

  // ========================
  // MEASUREMENT & DIAGNOSTICS
  // ========================
  {
    id: "34",
    name: "Blue-Point Digital Tech Angle Torque Wrench (½”)",
    sku: "BP-TW12",
    category: "measurement",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "High-precision digital torque wrench with angle measurement and vibrating handle alert.",
    specs: {
      "Drive Size": "1/2 inch",
      "Features": "Angle measurement"
    },
    features: [
      "Digital display",
      "Angle measurement capability",
      "Vibrating handle alert",
      "Backlit LCD"
    ],
    application: "Engine assembly, structural bolting",
    cta: "Enquire Now",
    hsn: "8204",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "35",
    name: "Blue-Point Digital Tech Angle Torque Wrench (⅜”)",
    sku: "BP-TW38",
    category: "measurement",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Compact digital torque wrench with tech-angle functionality for precision tightening.",
    specs: {
      "Drive Size": "3/8 inch"
    },
    features: [
      "Tech-angle functionality",
      "Highly accurate",
      "Memory storage"
    ],
    application: "Transmission work, internal engine components",
    cta: "Enquire Now",
    hsn: "8204",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "36",
    name: "Blue-Point Digital Tech Angle Torque Wrench (¼”)",
    sku: "BP-TW14",
    category: "measurement",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Small-drive digital torque wrench for delicate components requiring exact torque and angle.",
    specs: {
      "Drive Size": "1/4 inch"
    },
    features: [
      "Precision low torque",
      "Angle measurement",
      "Audible signal"
    ],
    application: "Dashboard assembly, sensors, electronics",
    cta: "Enquire Now",
    hsn: "8204",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "37",
    name: "Hand Tool Set (Metric) – 142 Pieces",
    sku: "HTS-142M",
    category: "hand-tools",
    brand: "Generic Pro",
    image: "/placeholder.svg",
    description: "Comprehensive 142-piece metric hand tool set in a durable carry case.",
    specs: {
      "Count": "142 Pieces",
      "Type": "Metric"
    },
    features: [
      "Wide range of sockets and wrenches",
      "Chrome vanadium steel",
      "Heavy-duty carry case"
    ],
    application: "General mechanical repairs, mobile service",
    cta: "Enquire Now",
    hsn: "8206",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "38",
    name: "Blue-Point 10 mm T-Handle Wrench",
    sku: "BP-TH10",
    category: "hand-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Long-reach 10mm T-handle wrench for fast spinning and high leverage.",
    specs: {
      "Size": "10 mm",
      "Type": "T-Handle"
    },
    features: [
      "Ergonomic handle",
      "Deep socket design",
      "Chrome finish"
    ],
    application: "Fastener removal, motorcycle service",
    cta: "Enquire Now",
    hsn: "8204",
    minOrderQty: 5,
    inStock: true,
  },
  {
    id: "39",
    name: "Blue-Point General Duty Tool Set – 100 Pieces",
    sku: "BP-GTS100",
    category: "hand-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Versatile 100-piece tool set covering common workshop tasks.",
    specs: {
      "Count": "100 Pieces"
    },
    features: [
      "Essential sockets and bits",
      "Durable storage tray",
      "Snap-on quality standards"
    ],
    application: "Light maintenance, apprentice kits",
    cta: "Enquire Now",
    hsn: "8206",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "40",
    name: "Blue-Point Metric / SAE Deep Socket Set",
    sku: "BP-DSS-MS",
    category: "hand-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Full set of metric and SAE deep sockets for recessed fasteners.",
    specs: {
      "Profiles": "Metric & SAE",
      "Type": "Deep socket"
    },
    features: [
      "Deep well for long bolts",
      "High-torque 6-point design",
      "Easy-read markings"
    ],
    application: "Suspension work, long-threaded bolts",
    cta: "Enquire Now",
    hsn: "8204",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "41",
    name: "Blue-Point General Purpose Service Set – 150 Pieces",
    sku: "BP-GSS150",
    category: "hand-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Extensive 150-piece tool set for multi-purpose automotive service.",
    specs: {
      "Count": "150 Pieces"
    },
    features: [
      "Large selection of 1/4\" and 1/2\" tools",
      "Impact-resistant case",
      "Professional grade"
    ],
    application: "Full workshop service, dealership maintenance",
    cta: "Enquire Now",
    hsn: "8206",
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
    hsn: "8509",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "43",
    name: "Blue-Point Air Impact Wrench (¾”)",
    sku: "BP-AIW34",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Heavy-duty 3/4 inch air impact wrench for truck and industrial applications.",
    specs: {
      "Drive Size": "3/4 inch",
      "Type": "Pneumatic"
    },
    features: [
      "High torque output",
      "Durable housing",
      "Twin hammer mechanism"
    ],
    application: "Truck service, heavy machinery",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "44",
    name: "Blue-Point Air Impact Wrench (1”)",
    sku: "BP-AIW1",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Ultra-heavy-duty 1 inch air impact wrench for the most demanding bolting tasks.",
    specs: {
      "Drive Size": "1 inch",
      "Type": "Pneumatic"
    },
    features: [
      "Maximum torque performance",
      "Side handle for control",
      "Industrial grade"
    ],
    application: "Commercial vehicle service, bridge construction",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "45",
    name: "Blue-Point Cordless Impact Wrench (½”)",
    sku: "BP-CIW12",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "High-torque 1/2 inch cordless impact wrench with brushless motor and 18V battery.",
    specs: {
      "Drive Size": "1/2 inch",
      "Voltage": "18V"
    },
    features: [
      "Brushless motor",
      "Ergonomic grip",
      "LED work light"
    ],
    application: "Mobile service, rapid fastener removal",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "46",
    name: "Blue-Point Cordless Impact Wrench (14.4 V)",
    sku: "BP-CIW14",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Compact and powerful 14.4 V cordless impact wrench for tight spaces.",
    specs: {
      "Voltage": "14.4V"
    },
    features: [
      "Compact size",
      "Lightweight",
      "Fast charging"
    ],
    application: "Engine bay work, under-dash repairs",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "47",
    name: "Blue-Point Cordless Tool Set (14.4 V)",
    sku: "BP-CTS14",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Multi-tool cordless set including impact wrench, drill, and light.",
    specs: {
      "Voltage": "14.4V"
    },
    features: [
      "Unified battery platform",
      "Comprehensive starter kit",
      "Includes carry bag"
    ],
    application: "Professional mobile technicians, home workshops",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "48",
    name: "Blue-Point Cordless Drill (14.4 V)",
    sku: "BP-CD14",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Versatile 14.4 V cordless drill with variable speed and clutch settings.",
    specs: {
      "Voltage": "14.4V",
      "Type": "Drill/Driver"
    },
    features: [
      "Variable speed trigger",
      "Keyless chuck",
      "Multiple torque settings"
    ],
    application: "Drilling and driving in various materials",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "49",
    name: "Blue-Point Angle Grinder (4.5”)",
    sku: "BP-AG45",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Compact 4.5 inch angle grinder for cutting and grinding applications.",
    specs: {
      "Disc Size": "4.5 inch"
    },
    features: [
      "Slim body design",
      "Spindle lock",
      "Adjustable guard"
    ],
    application: "Body work, metal fabrication",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "50",
    name: "Blue-Point Belt Sander",
    sku: "BP-BS",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Professional pneumatic belt sander for surface leveling and finishing.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "Adjustable sanding arm",
      "Fast belt change",
      "Speed control"
    ],
    application: "Surface preparation, spot weld removal",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "51",
    name: "Blue-Point Orbital Sander",
    sku: "BP-OS",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Random orbital pneumatic sander for swirl-free finishing.",
    specs: {
      "Type": "Pneumatic",
      "Orbit": "Standard"
    },
    features: [
      "Low vibration",
      "Dust collection ready",
      "Ergonomic palm grip"
    ],
    application: "Paint preparation, woodworking",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "52",
    name: "Blue-Point Heat Gun",
    sku: "BP-HG",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Dual-temperature heat gun for drying, thawing, and shrinking.",
    specs: {
      "Settings": "Dual temperature"
    },
    features: [
      "Quick heat-up",
      "Built-in stand",
      "Impact-resistant housing"
    ],
    application: "Heat shrink, paint removal, plastic bending",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "53",
    name: "Blue-Point Jigsaw",
    sku: "BP-JS",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Pneumatic jigsaw for precision curved cuts in metal and plastic.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "Adjustable speed",
      "Blower function",
      "Tool-less blade change"
    ],
    application: "Panel cutting, custom fabrication",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "54",
    name: "Blue-Point Reciprocating Saw",
    sku: "BP-RS",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Heavy-duty pneumatic reciprocating saw for demolition and rough cutting.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "High stroke rate",
      "Anti-vibration handle",
      "Safety switch"
    ],
    application: "Exhaust work, frame cutting",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "55",
    name: "Blue-Point Circular Saw",
    sku: "BP-CS",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Compact pneumatic circular saw for straight cuts in thin materials.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "Guided base",
      "Safety guard",
      "Precise cutting"
    ],
    application: "Body panel trimming, sheet metal work",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "56",
    name: "Blue-Point Air Drill (⅜”)",
    sku: "BP-AD38",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Versatile 3/8 inch pneumatic drill with variable speed trigger.",
    specs: {
      "Chuck Size": "3/8 inch",
      "Type": "Pneumatic"
    },
    features: [
      "Variable speed trigger",
      "Keyless chuck",
      "Lightweight aluminum housing"
    ],
    application: "General drilling, thin metal work",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "57",
    name: "Blue-Point Air Drill (½”)",
    sku: "BP-AD12",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "High-torque 1/2 inch air drill for larger bit sizes and heavy drilling.",
    specs: {
      "Chuck Size": "1/2 inch",
      "Type": "Pneumatic"
    },
    features: [
      "Side handle for stability",
      "Reversible motor",
      "Heavy-duty chuck"
    ],
    application: "Frame drilling, industrial maintenance",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "58",
    name: "Blue-Point Reversible Straight Air Drill (⅜”)",
    sku: "BP-RSAD38",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Straight-body reversible air drill for vertical or overhead drilling.",
    specs: {
      "Form Factor": "Straight",
      "Type": "Pneumatic"
    },
    features: [
      "Reversible direction",
      "Low profile",
      "Rear exhaust"
    ],
    application: "Aircraft maintenance, sheet metal work",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "59",
    name: "Blue-Point Air Die Grinder (Straight)",
    sku: "BP-ADG-S",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "High-speed straight air die grinder for precision grinding and deburring.",
    specs: {
      "RPM": "25,000",
      "Collet Size": "1/4 inch"
    },
    features: [
      "25,000 RPM high speed",
      "Compact design",
      "Safety lever trigger"
    ],
    application: "Precision metalwork, mold making",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "60",
    name: "Blue-Point Air Die Grinder (Angle)",
    sku: "BP-ADG-A",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "90-degree angle air die grinder for accessing tight areas.",
    specs: {
      "Angle": "90 degree",
      "RPM": "20,000"
    },
    features: [
      "90-degree head",
      "Rear exhaust to clear workspace",
      "Precision collet"
    ],
    application: "Porting engine components, deburring in tight spaces",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "61",
    name: "Blue-Point Air Nibbler",
    sku: "BP-AN",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Pneumatic nibbler for cutting sheet metal without distorting edges.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "Cuts without distortion",
      "High stroke rate",
      "Replaceable punch and die"
    ],
    application: "Automotive body panels, fabrication",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "62",
    name: "Blue-Point Air Shear",
    sku: "BP-AS",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Pneumatic shears for fast and clean straight cuts in sheet metal.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "Clean edge finishing",
      "Pistol grip for control",
      "High-grade steel blades"
    ],
    application: "Ductwork, HVAC, body shop fabrication",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "63",
    name: "Blue-Point Air Punch & Flange Tool",
    sku: "BP-APFT",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Dual-purpose pneumatic tool for punching holes and creating flanges for welding.",
    specs: {
      "Dual Function": "Punch & Flange"
    },
    features: [
      "Precision punching",
      "Consistent offset flanging",
      "Swivel head for versatility"
    ],
    application: "Auto body repair, lap joint preparation",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "64",
    name: "Blue-Point Air Metal Saw",
    sku: "BP-AMS",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Compact pneumatic saw for intricate cuts in metal and fiberglass.",
    specs: {
      "Type": "Pneumatic",
      "Strokes": "Low vibration"
    },
    features: [
      "Adjustable blade guard",
      "Includes spare blades",
      "Low vibration handle"
    ],
    application: "Body shop trimming, custom fabrication",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "65",
    name: "Blue-Point Air Scraper",
    sku: "BP-ASCR",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Pneumatic scraper for removing gaskets, glue, and residue efficiently.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "Rapid scraping action",
      "Ergonomic handle",
      "Interchangeable blades"
    ],
    application: "Gasket removal, undercoating stripping",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "66",
    name: "Blue-Point Air File",
    sku: "BP-AF",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "High-speed reciprocating air file for smoothing and shaping metal.",
    specs: {
      "Type": "Pneumatic"
    },
    features: [
      "Adjustable speed control",
      "Includes set of files",
      "Rubber grip for comfort"
    ],
    application: "Metal smoothing, reaching into crevices",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "67",
    name: "Blue-Point Air Vacuum/Blow Gun",
    sku: "BP-AVBG",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Dual-purpose pneumatic tool that acts as both a vacuum and a blow gun.",
    specs: {
      "Function": "Vacuum & Blow"
    },
    features: [
      "Includes various nozzles",
      "Dust bag included",
      "Easy switch between modes"
    ],
    application: "Workshop cleanup, computer cleaning",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 1,
    inStock: true,
  },
  {
    id: "68",
    name: "Blue-Point Air Blow Gun (Standard)",
    sku: "BP-ABG-S",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Essential workshop air blow gun for cleaning parts and blowing off dust.",
    specs: {
      "Type": "Standard trigger"
    },
    features: [
      "Precision nozzle",
      "Hanging hook",
      "Durable body"
    ],
    application: "Part cleaning, workspace maintenance",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 2,
    inStock: true,
  },
  {
    id: "69",
    name: "Blue-Point Air Blow Gun (Long Nozzle)",
    sku: "BP-ABG-L",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Air blow gun with an extended nozzle for reaching into deep or narrow areas.",
    specs: {
      "Nozzle Length": "Long"
    },
    features: [
      "Extended reach nozzle",
      "Powerful airflow",
      "Ergonomic trigger"
    ],
    application: "Cleaning engines, radiators, and deep cavities",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 2,
    inStock: true,
  },
  {
    id: "70",
    name: "Blue-Point Air Blow Gun (High Flow)",
    sku: "BP-ABG-HF",
    category: "power-tools",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "High-volume air blow gun for heavy-duty cleaning and drying tasks.",
    specs: {
      "Flow Type": "High flow"
    },
    features: [
      "Increased air volume",
      "Safety nozzle design",
      "Heavy-duty construction"
    ],
    application: "Rapid drying, large area cleaning",
    cta: "Enquire Now",
    hsn: "8467",
    minOrderQty: 2,
    inStock: true,
  },
  {
    id: "71",
    name: "Blue-Point Inflator Gauge",
    sku: "BP-IG",
    category: "measurement",
    brand: "Blue Point",
    image: "/placeholder.svg",
    description: "Professional tire inflator with integrated pressure gauge and flexible hose.",
    specs: {
      "Display": "Analog",
      "Range": "0-160 PSI"
    },
    features: [
      "Dual-head chuck",
      "Flexible hose",
      "Bleed valve"
    ],
    application: "Tire service, maintenance",
    cta: "Enquire Now",
    hsn: "9030",
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
