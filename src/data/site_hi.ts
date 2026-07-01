import type { FamilyMember, WeddingEvent } from "./site";

export const SHLOKA = {
  sanskrit: "मंगलम् भगवान विष्णुः, मंगलम् गरुड़ध्वजः।\nमंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः॥",
  meaning: "सर्वोच्च भगवान विष्णु को मंगल, जिनका ध्वज गरुड़ है उनको मंगल। जिनके नेत्र कमल के समान हैं उनको मंगल, हरि को मंगल।",
};

export const COUPLE = {
  groom: {
    name: "समरजीत गुप्ता",
    fullName: "समरजीत गुप्ता",
    parents: "साहबलाल गुप्ता और बेफई देवी गुप्ता के सुपुत्र",
    image: "/sarvesh-profile.jpg",
    bio: "एक विचारशील और दयालु आत्मा, समरजीत हर रिश्ते में स्थिरता और खुशी लाते हैं।",
  },
  bride: {
    name: "अनुराधे गुप्ता",
    fullName: "अनुराधे गुप्ता",
    parents: "गुप्ता परिवार की सुपुत्री",
    image: "/sneha-profile.jpg",
    bio: "कृपा और गर्मजोशी से भरपूर, अनुराधे की मुस्कान हर कमरे को रोशन कर देती है।",
  },
  heroImage: "/hero-image.jpg",
  weddingDate: "5 दिसंबर, 2026",
  weddingDateISO: "2026-12-05T10:00:00+05:30",
  venue: {
    name: "जल्द आ रहा है",
    address: "सोनीसा, उत्तर प्रदेश",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113926.33644026601!2d82.4967!3d25.7533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzExLjkiTiA4MsKwMzMnMjAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directions: "https://maps.google.com/?q=Sonisa,+Uttar+Pradesh",
  },
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: "ganesh-puja",
    name: "गणेश पूजा",
    date: "2 दिसंबर, 2026",
    venue: COUPLE.venue.name,
    description: "विघ्नहर्ता भगवान गणेश का आशीर्वाद लेकर हमारी शादी के उत्सव की शुरुआत।",
    icon: "🙏",
    category: "pre-wedding",
  },
  {
    id: "haldi",
    name: "हल्दी",
    date: "3 दिसंबर, 2026",
    venue: COUPLE.venue.name,
    description: "पारंपरिक हल्दी समारोह, जहाँ दूल्हा और दुल्हन को उनके परिवारों द्वारा हल्दी लगाई जाती है।",
    icon: "🌼",
    category: "pre-wedding",
  },
  {
    id: "mehendi",
    name: "मेहंदी",
    date: "4 दिसंबर, 2026",
    venue: COUPLE.venue.name,
    description: "संगीत और नृत्य के साथ दुल्हन और उसके परिवार के हाथों पर सुंदर मेहंदी लगाने का समारोह।",
    icon: "🎨",
    category: "pre-wedding",
  },
  {
    id: "sangeet",
    name: "संगीत",
    date: "4 दिसंबर, 2026",
    venue: COUPLE.venue.name,
    description: "नृत्य, संगीत और दो परिवारों के मिलन का उत्सव मनाने वाली एक संगीतमय शाम।",
    icon: "🎵",
    category: "pre-wedding",
  },
  {
    id: "wedding",
    name: "विवाह समारोह",
    date: "5 दिसंबर, 2026",
    venue: COUPLE.venue.name,
    description: "पवित्र विवाह समारोह जिसमें सात फेरे शामिल हैं, जहाँ हम हमेशा के लिए एक हो जाएंगे।",
    icon: "💍",
    category: "wedding",
  },
];

export const FAMILY_MEMBERS: FamilyMember[] = [
  { name: "साहबलाल गुप्ता", relation: "दूल्हे के पिता", side: "groom" },
  { name: "बेफई देवी गुप्ता", relation: "दूल्हे की माता", side: "groom" },
  { name: "संतोष गुप्ता", relation: "दूल्हे का भाई", side: "groom" },
  { name: "सरवन गुप्ता", relation: "दूल्हे का भाई", side: "groom" },
  { name: "संजीत गुप्ता", relation: "दूल्हे का भाई", side: "groom" },
  { name: "सुजीत गुप्ता", relation: "दूल्हे का भाई", side: "groom" },
];

export const GUEST_WISHES = [
  {
    name: "राहुल और प्रिया",
    message: "आपको जीवन भर प्यार और खुशी की शुभकामनाएं। आपकी एक साथ यात्रा आनंद और शांति से भरी हो!",
  },
  {
    name: "शर्मा परिवार",
    message: "सुंदर जोड़े को बधाई। भगवान आपके जीवन को अपार प्रेम और समृद्धि से भर दें।",
  },
  {
    name: "अमित कुमार",
    message: "शादी के दिन का बहुत-बहुत इंतजार है! आप दोनों को आपके नए जीवन की शुरुआत पर शुभकामनाएं।",
  },
  {
    name: "स्नेहा रेड्डी",
    message: "शादी की बहुत-बहुत बधाई! आपका प्यार हर गुजरते दिन के साथ और मजबूत होता जाए।",
  },
];

export const NAV_LINKS = [
  { label: "होम", href: "#home" },
  { label: "जोड़ा", href: "#couple" },
  { label: "कार्यक्रम", href: "#events" },
  { label: "परिवार", href: "#family" },
  { label: "स्थान", href: "#venue" },
  { label: "शुभकामनाएं", href: "#wishes" },
];
