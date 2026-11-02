export const careContact = {
  phone: "028 9600 5679",
  phoneHref: "tel:02896005679",
  whatsapp: "https://wa.me/447592401175",
  whatsappDisplay: "07592 401175",
  email: "info@inoteegroup.com",
  address: "6 Castle Street, Antrim, BT41 4JE",
};

export const careServices = [
  { slug: "personal-care", inquiryType: "Personal care", title: "A helping hand, every day", label: "Personal care", icon: "heart", description: "Respectful support with washing, dressing and the routines that help you feel yourself." },
  { slug: "dementia-care", inquiryType: "Dementia care", title: "Familiar routines. Gentle reassurance.", label: "Dementia care", icon: "flower", description: "Practical help and a reassuring presence for people living with dementia and their families." },
  { slug: "post-hospital-recovery-care", inquiryType: "Post-hospital recovery care", title: "A supported return home", label: "After hospital care", icon: "home", description: "Help with meals, mobility and daily routines while you settle back in after a hospital stay." },
  { slug: "companionship-care", inquiryType: "Companionship care", title: "Good company makes a difference", label: "Companionship", icon: "chat", description: "Conversation, shared interests and a little more connection in everyday life." },
  { slug: "overnight-care", inquiryType: "Overnight care", title: "Reassurance through the night", label: "Overnight care", icon: "moon", description: "Night-time support for comfort, practical needs and greater peace of mind." },
  { slug: "live-in-care", inquiryType: "Live-in care", title: "More support, in your own home", label: "Live-in care", icon: "leaf", description: "Consistent help with everyday life when more regular care and continuity are needed." },
  { slug: "elderly-care", inquiryType: "Elderly care", title: "Keep living life your way", label: "Elderly care", icon: "sun", description: "Everyday support shaped around independence, comfort and the things that matter to you." },
  { slug: "disability-support", inquiryType: "Disability support", title: "Support shaped around you", label: "Disability support", icon: "people", description: "Person-led practical help at home and with day-to-day routines, with independence in mind." },
] as const;

export const careAreas = ["Antrim", "Belfast", "Lisburn", "Newtownabbey", "Carrickfergus", "Bangor", "Holywood"];

export const careQuestions = [
  { question: "I’m not sure what care we need. Where do I start?", answer: "Start with a conversation. Tell us what is becoming difficult at home and what matters to your family. We can talk through the care options and help you decide on the next step." },
  { question: "Can you help when someone is leaving hospital?", answer: "We can discuss support with meals, washing, dressing, mobility, medication prompts and reassurance after discharge. Availability depends on the support needed, timing and location, so please contact us to discuss your plans." },
  { question: "How much does home care cost?", answer: "The cost depends on the care needed, where you live and how often you need support. Speak to us about your situation and we will explain the options and costs before you decide." },
  { question: "Do you cover my area?", answer: "We support families across Antrim, Belfast, Lisburn, Newtownabbey, Carrickfergus, Bangor, Holywood and surrounding parts of Northern Ireland. Share your postcode so we can discuss local availability." },
];

export type CareServiceSlug = typeof careServices[number]["slug"];
export const careServiceDetails: Record<CareServiceSlug, { headline: string; intro: string; support: string[]; note: string; image: string }> = {
  "personal-care": { headline: "Everyday care. Personal to you.", intro: "A little help with personal routines can make a real difference to comfort and confidence. We’ll talk about support that respects your privacy, your pace and the way you like things done.", support: ["Help with washing, dressing and personal hygiene", "Support with everyday mobility and getting comfortable", "Practical help with familiar morning and evening routines", "A care plan shaped around personal preferences"], note: "Tell us which parts of the day feel more difficult and what you would like to keep doing independently.", image: "care-personal" },
  "dementia-care": { headline: "Familiar routines. A reassuring presence.", intro: "When someone you love is living with dementia, familiar surroundings and a steadier routine can matter more than ever. Talk to us about practical support at home and reassurance for your family.", support: ["Support with familiar daily routines", "Help with personal care, meals and practical tasks", "Companionship and reassurance at home", "Communication with family about the agreed support"], note: "Share the routines, preferences and everyday comforts that help your loved one feel at ease.", image: "care-shared-activities" },
  "post-hospital-recovery-care": { headline: "Back home. With a helping hand.", intro: "Coming home from hospital can bring relief and a lot of questions. We can discuss practical help while you settle back in, with support shaped around discharge plans and everyday needs.", support: ["Help with washing, dressing and getting comfortable", "Meal preparation and medication prompts", "Practical help with mobility and daily routines", "Reassurance, companionship and family communication"], note: "If discharge is approaching, tell us the expected date, location and support needed so we can discuss availability.", image: "care-practical-support" },
  "companionship-care": { headline: "A little company. A brighter day.", intro: "A conversation, a shared interest or someone to spend time with can make everyday life feel more connected. Companionship care offers company and practical reassurance in familiar surroundings.", support: ["Conversation and regular company", "Time for shared interests and familiar activities", "Support with everyday routines", "Reassurance and a point of contact for family"], note: "Tell us about the person behind the care: their interests, favourite activities and the kind of company they enjoy.", image: "care-tea-together" },
  "overnight-care": { headline: "A calmer night. More peace of mind.", intro: "Nights can feel different when someone needs a little more support. We’ll discuss practical night-time care that fits your situation and the reassurance your family is looking for.", support: ["Reassurance and practical help during the night", "Support with night-time mobility", "Help with comfort and personal routines", "Planning around the level of overnight support needed"], note: "Let us know what tends to happen overnight and how often help is needed, so we can talk through the right options.", image: "care-mobility" },
  "live-in-care": { headline: "More support. Still your home.", intro: "When occasional visits are no longer enough, live-in care may offer a way to have more consistent support in the place you know. Talk to us about routines, continuity and your care needs.", support: ["More consistent support with everyday routines", "Help with meals, personal care and practical tasks", "Companionship in familiar surroundings", "Care planning around ongoing support needs"], note: "We’ll discuss what support is needed, the practical arrangements at home and local availability before any plan is agreed.", image: "care-companionship" },
  "elderly-care": { headline: "Your everyday. A little more supported.", intro: "Getting older shouldn’t mean letting go of the things that make life feel like yours. Explore practical care at home that supports comfort, confidence and familiar routines.", support: ["Help with meals and everyday tasks", "Respectful support with personal care", "Medication prompts and routine help", "Companionship and reassurance for family"], note: "Start with the things you want to keep enjoying and the practical tasks where a little help would make life easier.", image: "care-tea-together" },
  "disability-support": { headline: "Your choices. Your kind of support.", intro: "Good support starts with the person, their goals and the way they want to live. Talk to us about practical help at home that respects your choices and independence.", support: ["Person-led help with everyday routines", "Practical support at home", "Support around appointments and daily activities", "Planning that reflects individual preferences"], note: "Tell us what independence looks like for you and where practical support could help.", image: "care-practical-support" },
};


export const carePhotos: Record<string, { alt: string; width: number; height: number; position: string }> = {
  "care-mobility": { alt: "A care worker offering a helping hand to an older woman", width: 1400, height: 933, position: "59% 50%" },
  "care-companionship": { alt: "A care worker sharing a creative activity with an older couple", width: 1400, height: 990, position: "50% 45%" },
  "care-personal": { alt: "A woman gently helping an older man with his hair", width: 1400, height: 933, position: "77% 44%" },
  "care-practical-support": { alt: "A woman offering practical support to an older man seated by a window", width: 1400, height: 933, position: "38% 45%" },
  "care-tea-together": { alt: "An older woman enjoying a cup of tea in company", width: 1400, height: 933, position: "35% 43%" },
  "care-shared-activities": { alt: "A care worker spending time with older women during a knitting activity", width: 1400, height: 990, position: "50% 36%" },
};
