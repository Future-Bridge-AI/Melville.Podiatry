export interface Service {
  slug: string
  title: string
  shortDesc: string
  icon: string
  conditions: string[]
  description: string[]
  whatToExpect: string[]
}

export const services: Service[] = [
  {
    slug: 'general-care',
    title: 'General Podiatry & Nail Care',
    shortDesc: 'Routine foot health maintenance for patients of all ages, including nail care, corn and callus removal.',
    icon: 'foot',
    conditions: ['Corns & calluses', 'Thickened or fungal nails', 'Cracked heels', 'Warts (verrucae)', "Athlete's foot"],
    description: [
      'Routine podiatry care is the foundation of long-term foot health. Douglas provides thorough assessments and hands-on treatment for a broad range of everyday foot concerns.',
      "Whether you're dealing with painful corns, troublesome toenails, or simply want to keep your feet in good shape, regular podiatry care makes a real difference to your comfort and mobility.",
    ],
    whatToExpect: [
      'A thorough assessment of your feet and lower limbs',
      'Gentle removal of corns, calluses, or problem nail tissue',
      'Personalised advice on home foot care and hygiene',
      'Referral or follow-up plan if further treatment is needed',
    ],
  },
  {
    slug: 'orthotics',
    title: 'Custom Orthotics',
    shortDesc: 'Precision-fitted insoles designed to correct biomechanical issues and relieve pain throughout the lower limb.',
    icon: 'orthotics',
    conditions: ['Flat feet (over-pronation)', 'High arches', 'Heel & arch pain', 'Knee, hip or back pain', 'Sports injuries'],
    description: [
      "Custom orthotics are specially made insoles prescribed to address the way your foot functions and distribute pressure more evenly across your foot. Unlike off-the-shelf insoles, they're designed specifically for your feet.",
      'Douglas uses thorough biomechanical assessment and gait analysis to design orthotics that correct the root cause of your pain — not just mask the symptoms.',
    ],
    whatToExpect: [
      'Full biomechanical and gait assessment',
      'Detailed foot measurements',
      'Prescription of custom-made orthotics',
      'Fitting and adjustment to ensure comfort and effectiveness',
    ],
  },
  {
    slug: 'heel-pain',
    title: 'Heel Pain Treatment',
    shortDesc: 'Evidence-based treatment for plantar fasciitis, heel spurs, and Achilles tendon problems.',
    icon: 'heel',
    conditions: ['Plantar fasciitis', 'Heel spurs', 'Achilles tendinopathy', 'Fat pad syndrome', "Sever's disease (children)"],
    description: [
      "Heel pain is one of the most common foot complaints Douglas treats. It can range from a dull ache first thing in the morning to sharp, debilitating pain with every step — and it doesn't have to be something you simply put up with.",
      'Most heel pain responds very well to podiatric treatment. Douglas will identify the underlying cause and tailor a treatment plan designed to get you back on your feet.',
    ],
    whatToExpect: [
      'Assessment to identify the precise cause of your heel pain',
      'Treatment may include strapping, orthotics, stretching programs, and footwear advice',
      'Activity modification guidance to manage load during recovery',
      'Referral for imaging if required',
    ],
  },
  {
    slug: 'diabetic-care',
    title: 'Diabetic Foot Care',
    shortDesc: 'Specialised high-risk foot assessments and ongoing preventive care for patients with diabetes.',
    icon: 'heart',
    conditions: ['Diabetic neuropathy', 'Circulation problems', 'Foot ulcers & wound care', 'Pressure areas', 'High-risk foot assessments'],
    description: [
      'Diabetes affects the feet in ways that can become serious if not caught early. Reduced sensation and circulation mean minor injuries can turn into significant complications quickly — making regular podiatry care essential.',
      'Douglas provides thorough diabetic foot assessments to detect early warning signs, reduce complication risk, and help you protect your feet for the long term.',
    ],
    whatToExpect: [
      'Comprehensive vascular and neurological foot assessment',
      'Skin, nail, and soft tissue care to prevent complications',
      'Footwear assessment and advice',
      'Personalised management plan and patient education',
    ],
  },
  {
    slug: 'ingrown-toenail',
    title: 'Ingrown Toenail Treatment',
    shortDesc: 'Conservative and surgical options for ingrown toenails, including permanent nail correction procedures.',
    icon: 'nail',
    conditions: ['Ingrown toenails', 'Infected nail edges', 'Recurring ingrown toenails', 'Nail deformities'],
    description: [
      "An ingrown toenail occurs when the edge of a nail grows into the surrounding skin, causing pain, swelling and sometimes infection. Left untreated, it can significantly impact your daily life.",
      'Douglas offers both conservative management and, where needed, a simple surgical procedure (partial nail avulsion) to permanently prevent the nail from regrowing into the skin.',
    ],
    whatToExpect: [
      'Assessment to determine severity and the most appropriate treatment',
      'Conservative treatment where suitable',
      'Surgical option: partial nail avulsion performed under local anaesthetic',
      'Clear aftercare instructions and follow-up support',
    ],
  },
  {
    slug: 'childrens',
    title: "Children's Podiatry",
    shortDesc: "Specialist assessment and treatment for children's growing feet and lower limb conditions.",
    icon: 'child',
    conditions: ['Flat feet', 'In-toeing / out-toeing', 'Growing pains', "Sever's disease", 'Toe walking'],
    description: [
      "Children's feet are still developing, which means foot problems identified early can often be fully resolved. Douglas has experience assessing paediatric foot and gait conditions, and explains concerns clearly to both children and their parents.",
      "Many childhood foot conditions resolve naturally with age, but some benefit from early intervention. An assessment provides a clear picture of whether — and what — treatment is needed.",
    ],
    whatToExpect: [
      'Child-friendly assessment of foot structure and walking pattern',
      'Clear explanation of findings for both child and parent',
      'Treatment options discussed: orthotics, exercises, footwear advice',
      'Monitoring plan for conditions likely to resolve naturally',
    ],
  },
]
