export const COUPLE = {
  groom: {
    name: "Samarjeet",
    fullName: "Samarjeet Kumar",
    parents: "Mr. & Mrs. Rajesh Kumar",
    bio: "A passionate dreamer with a heart full of love. Samarjeet believes that the greatest adventures begin with the person you choose to walk beside.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
  },
  bride: {
    name: "Anuradha",
    fullName: "Anuradha Sharma",
    parents: "Mr. & Mrs. Ramesh Sharma",
    bio: "Graceful, kind, and radiant — Anuradha brings light wherever she goes. Her smile is the melody that Samarjeet's heart dances to.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
  },
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
  weddingDate: "November 28, 2026",
  weddingDateISO: "2026-11-28T10:00:00",
  venue: {
    name: "The Royal Heritage Banquet",
    address: "123 Wedding Lane, Jaipur, Rajasthan 302001, India",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.894847382!2d75.7872709!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjgiTiA3NcKwNDcnMTQuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directions: "https://maps.google.com/?q=Jaipur+Rajasthan",
  },
};

export const SHLOKA = {
  sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
  transliteration:
    "Vakratunda Mahakaya Suryakoti Samaprabha | Nirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada ||",
  meaning: "O Lord Ganesha, with your curved trunk and mighty form, remove all obstacles from our path.",
};

export const LOVE_STORY = [
  {
    year: "2019",
    title: "First Meeting",
    description:
      "Their paths crossed at a mutual friend's gathering in Delhi. A simple conversation over chai sparked something magical.",
  },
  {
    year: "2020",
    title: "Growing Closer",
    description:
      "Through late-night calls and shared dreams, friendship blossomed into something deeper during the pandemic lockdown.",
  },
  {
    year: "2022",
    title: "The Proposal",
    description:
      "Under a starlit sky at Nahargarh Fort, Samarjeet got down on one knee. Anuradha said yes with tears of joy.",
  },
  {
    year: "2024",
    title: "Roka Ceremony",
    description:
      "Families came together to bless the union. Traditional rituals marked the beginning of their journey to forever.",
  },
  {
    year: "2026",
    title: "The Wedding",
    description:
      "Two souls, one sacred bond — celebrating love with family, tradition, and the blessings of the divine.",
  },
];

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: string;
  category: "pre-wedding" | "wedding" | "post-wedding";
}

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: "ganesh-puja",
    name: "Ganesh Puja",
    date: "Nov 25, 2026",
    time: "9:00 AM",
    venue: "Sharma Residence",
    description: "Seeking Lord Ganesha's blessings to remove all obstacles from the wedding celebrations.",
    icon: "🙏",
    category: "pre-wedding",
  },
  {
    id: "roka",
    name: "Roka",
    date: "Nov 25, 2026",
    time: "11:00 AM",
    venue: "Sharma Residence",
    description: "Formal announcement and blessing of the union by both families.",
    icon: "💍",
    category: "pre-wedding",
  },
  {
    id: "haldi",
    name: "Haldi",
    date: "Nov 26, 2026",
    time: "10:00 AM",
    venue: "Kumar Residence",
    description: "Turmeric ceremony for blessings, purification, and glowing skin before the wedding.",
    icon: "🌼",
    category: "pre-wedding",
  },
  {
    id: "mehendi",
    name: "Mehendi",
    date: "Nov 26, 2026",
    time: "4:00 PM",
    venue: "Royal Heritage Lawn",
    description: "Intricate henna designs adorning the bride's hands with music and celebration.",
    icon: "🎨",
    category: "pre-wedding",
  },
  {
    id: "sangeet",
    name: "Sangeet",
    date: "Nov 27, 2026",
    time: "7:00 PM",
    venue: "Royal Heritage Ballroom",
    description: "An evening of dance, music, and performances by both families.",
    icon: "🎵",
    category: "pre-wedding",
  },
  {
    id: "mata-ki-chowki",
    name: "Mata Ki Chowki",
    date: "Nov 27, 2026",
    time: "8:00 PM",
    venue: "Royal Heritage Temple",
    description: "Devotional prayers and bhajans seeking divine blessings for the couple.",
    icon: "🪔",
    category: "pre-wedding",
  },
  {
    id: "baraat",
    name: "Baraat",
    date: "Nov 28, 2026",
    time: "6:00 PM",
    venue: "Royal Heritage Entrance",
    description: "The groom's grand procession with dhol, band, and dancing family members.",
    icon: "🐴",
    category: "wedding",
  },
  {
    id: "milni",
    name: "Milni",
    date: "Nov 28, 2026",
    time: "7:00 PM",
    venue: "Royal Heritage Entrance",
    description: "Warm welcome and introduction of both families with garlands and hugs.",
    icon: "🤝",
    category: "wedding",
  },
  {
    id: "jaimala",
    name: "Jaimala",
    date: "Nov 28, 2026",
    time: "7:30 PM",
    venue: "Royal Heritage Mandap",
    description: "Exchange of floral garlands symbolizing acceptance and love.",
    icon: "💐",
    category: "wedding",
  },
  {
    id: "pheras",
    name: "Pheras",
    date: "Nov 28, 2026",
    time: "8:30 PM",
    venue: "Royal Heritage Mandap",
    description: "Seven sacred rounds around the holy fire, binding two souls in matrimony.",
    icon: "🔥",
    category: "wedding",
  },
  {
    id: "sindoor",
    name: "Sindoor",
    date: "Nov 28, 2026",
    time: "9:30 PM",
    venue: "Royal Heritage Mandap",
    description: "The groom applies sindoor, marking the sacred union of marriage.",
    icon: "❤️",
    category: "wedding",
  },
  {
    id: "vidaai",
    name: "Vidaai",
    date: "Nov 29, 2026",
    time: "11:00 AM",
    venue: "Royal Heritage",
    description: "Emotional farewell as the bride leaves her parental home for a new beginning.",
    icon: "🥺",
    category: "post-wedding",
  },
  {
    id: "reception",
    name: "Reception",
    date: "Nov 29, 2026",
    time: "7:00 PM",
    venue: "Royal Heritage Grand Hall",
    description: "Grand celebration with dinner, dancing, and blessings from all guests.",
    icon: "🥂",
    category: "post-wedding",
  },
];

export const FAMILY_MEMBERS = [
  { name: "Mr. Rajesh Kumar", relation: "Groom's Father", side: "groom" as const },
  { name: "Mrs. Sunita Kumar", relation: "Groom's Mother", side: "groom" as const },
  { name: "Mr. Ramesh Sharma", relation: "Bride's Father", side: "bride" as const },
  { name: "Mrs. Priya Sharma", relation: "Bride's Mother", side: "bride" as const },
  { name: "Rahul Kumar", relation: "Groom's Brother", side: "groom" as const },
  { name: "Neha Sharma", relation: "Bride's Sister", side: "bride" as const },
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop", alt: "Couple portrait" },
  { src: "https://images.unsplash.com/photo-1465495976277-038e775e8f39?w=600&h=400&fit=crop", alt: "Wedding rings" },
  { src: "https://images.unsplash.com/photo-1522673607210-0c2d9b0a0438?w=600&h=600&fit=crop", alt: "Mehendi ceremony" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af8348860?w=600&h=800&fit=crop", alt: "Indian wedding decor" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop", alt: "Wedding celebration" },
  { src: "https://images.unsplash.com/photo-1583939003609-ef788a820c61?w=600&h=600&fit=crop", alt: "Floral decorations" },
  { src: "https://images.unsplash.com/photo-1529636798458-921d7b6c4c2e?w=600&h=800&fit=crop", alt: "Couple together" },
  { src: "https://images.unsplash.com/photo-1591604466377-1a63d39d1109?w=600&h=400&fit=crop", alt: "Mandap setup" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=600&fit=crop", alt: "Traditional attire" },
];

export const GUEST_WISHES = [
  { name: "Priya & Amit", message: "Wishing you both a lifetime of love and happiness! 🎉" },
  { name: "The Mehta Family", message: "May your marriage be filled with joy, laughter, and endless blessings." },
  { name: "Rohit Singh", message: "So happy for you both! Can't wait to celebrate with you. 💕" },
  { name: "Ananya Gupta", message: "Two beautiful souls becoming one. Blessings always!" },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#couple", label: "Couple" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#family", label: "Family" },
  { href: "#venue", label: "Venue" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#wishes", label: "Wishes" },
  { href: "#contact", label: "Contact" },
];
