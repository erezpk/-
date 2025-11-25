import { ServiceProvider, JobListing, Article, Course, Review } from './types';

export const CATEGORIES = [
  "בנייה ושיפוצים",
  "עריכת דין",
  "ראיית חשבון",
  "צילום אירועים",
  "קייטרינג",
  "איפור ועיצוב שיער",
  "חינוך והוראה",
  "מוסכים ורכב"
];

export const CITIES = [
  "ראשון לציון",
  "תל אביב",
  "פתח תקווה",
  "נתניה",
  "אשדוד",
  "רחובות",
  "באר שבע"
];

const REVIEWS_MOCK: Review[] = [
  { id: '1', author: 'דניאל ט.', rating: 5, text: 'שירות מעולה, מקצועי מאוד ואדיב. מומלץ בחום!', date: '12/01/2024' },
  { id: '2', author: 'שרה א.', rating: 4, text: 'הגיע בזמן ועשה עבודה טובה.', date: '05/02/2024' },
];

export const SERVICE_PROVIDERS: ServiceProvider[] = [
  {
    id: '1',
    name: 'דוד מהרט',
    category: 'בנייה ושיפוצים',
    rating: 4.9,
    reviewCount: 124,
    location: 'ראשון לציון',
    phone: '050-1234567',
    email: 'david@const.co.il',
    imageUrl: 'https://picsum.photos/id/1005/400/400',
    description: 'קבלן רשום עם 15 שנות ניסיון בשיפוץ דירות ובתים פרטיים. מתמחה בעבודות גבס, צבע ואינסטלציה. שירות אמין ומחירים הוגנים.',
    isRecommended: true,
    reviews: REVIEWS_MOCK,
    gallery: ['https://picsum.photos/id/101/600/400', 'https://picsum.photos/id/102/600/400', 'https://picsum.photos/id/103/600/400']
  },
  {
    id: '2',
    name: 'עו"ד ירוסלם אבבה',
    category: 'עריכת דין',
    rating: 5.0,
    reviewCount: 58,
    location: 'תל אביב',
    phone: '03-9876543',
    imageUrl: 'https://picsum.photos/id/1027/400/400',
    description: 'מתמחה בדיני משפחה ונדל"ן. ליווי אישי ומקצועי לאורך כל הדרך.',
    isRecommended: true,
    reviews: REVIEWS_MOCK,
    gallery: []
  },
  {
    id: '3',
    name: 'קייטרינג "טעם של פעם"',
    category: 'קייטרינג',
    rating: 4.7,
    reviewCount: 210,
    location: 'פתח תקווה',
    phone: '052-5555555',
    imageUrl: 'https://picsum.photos/id/1080/400/400',
    description: 'אוכל אתיופי מסורתי לאירועים ושמחות. אינג\'רה טרייה, תבשילים אותנטיים וכשרות מהודרת.',
    isRecommended: false,
    reviews: [],
    gallery: ['https://picsum.photos/id/292/600/400']
  },
  {
    id: '4',
    name: 'רוני צילום',
    category: 'צילום אירועים',
    rating: 4.8,
    reviewCount: 85,
    location: 'נתניה',
    phone: '054-9999999',
    imageUrl: 'https://picsum.photos/id/338/400/400',
    description: 'צלם סטילס ווידאו לחתונות, בר מצווה ואירועי חברה. ציוד מתקדם ועריכה אמנותית.',
    isRecommended: false,
    reviews: REVIEWS_MOCK,
    gallery: ['https://picsum.photos/id/250/600/400']
  },
  {
    id: '5',
    name: 'אלמז עיצובים',
    category: 'איפור ועיצוב שיער',
    rating: 5.0,
    reviewCount: 42,
    location: 'רחובות',
    phone: '050-0000000',
    imageUrl: 'https://picsum.photos/id/64/400/400',
    description: 'מאפרת מקצועית לכלות וערב. התמחות בשיער מתולתל ואפרו.',
    isRecommended: true,
    reviews: REVIEWS_MOCK,
    gallery: ['https://picsum.photos/id/129/600/400']
  }
];

export const JOBS: JobListing[] = [
  {
    id: '101',
    title: 'מנהל/ת משמרת',
    company: 'מסעדת אדיס אבבה',
    location: 'תל אביב',
    type: 'משרה מלאה',
    isNew: true
  },
  {
    id: '102',
    title: 'מדריך/ה בפנימייה',
    company: 'עמותת חינוך לפסגות',
    location: 'ירושלים',
    type: 'משמרות',
    isNew: true
  },
  {
    id: '103',
    title: 'נהג/ת הפצה',
    company: 'לוגיסטיקה פלוס',
    location: 'מרכז',
    type: 'משרה מלאה',
    isNew: false
  }
];

export const ARTICLES: Article[] = [
  {
    id: '201',
    title: 'סיפורו של מבצע שלמה',
    description: 'המסע המטלטל והמרגש של אלפי יהודים שעלו ארצה ב-36 שעות.',
    imageUrl: 'https://picsum.photos/id/175/600/400'
  },
  {
    id: '202',
    title: 'הסיגד - משמעות ומנהגים',
    description: 'כל מה שרציתם לדעת על החג המרכזי של העדה, הצום והתפילה לירושלים.',
    imageUrl: 'https://picsum.photos/id/283/600/400'
  }
];

export const COURSES: Course[] = [
  {
    id: '301',
    title: 'פיתוח Full Stack',
    description: 'קורס ערב אינטנסיבי להכשרה להייטק. כולל השמה.',
    isBeginnerFriendly: true
  },
  {
    id: '302',
    title: 'יזמות עסקית',
    description: 'איך להקים עסק קטן ולנהל אותו נכון פיננסית ושיווקית.',
    isBeginnerFriendly: false
  }
];