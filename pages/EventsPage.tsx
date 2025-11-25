
import React from 'react';
import { Calendar, MapPin, Music } from 'lucide-react';

const EVENTS_MOCK = [
  {
    id: 1,
    title: "פסטיבל הסיגד המרכזי",
    date: "25 בנובמבר, 2024",
    location: "ארמון הנציב, ירושלים",
    image: "https://picsum.photos/id/1047/600/400",
    description: "חגיגות חג הסיגד המרכזיות בהשתתפות קייסים, אישי ציבור ואמנים."
  },
  {
    id: 2,
    title: "הופעה: זמנה מלסה",
    date: "10 בדצמבר, 2024",
    location: "זאפה תל אביב",
    image: "https://picsum.photos/id/158/600/400",
    description: "מופע מלא עם מיטב הלהיטים מכל הזמנים. אורחים מיוחדים."
  },
  {
    id: 3,
    title: "ערב שירה ומורשת",
    date: "15 בדצמבר, 2024",
    location: "מתנ\"ס נתניה",
    image: "https://picsum.photos/id/1059/600/400",
    description: "ערב מרגש של סיפורי עלייה ושירה מסורתית."
  }
];

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-4">אירועים ותרבות</h1>
          <p className="text-gray-300 text-xl">כל מה שקורה בקהילה - במקום אחד</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-dark mb-8 border-r-4 border-primary pr-3">אירועים קרובים</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_MOCK.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div className="h-48 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg font-bold text-dark text-sm shadow-sm flex items-center gap-1">
                  <Calendar size={14} className="text-primary" />
                  {event.date.split(',')[0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin size={16} />
                  {event.location}
                </div>
                <p className="text-gray-600 mb-6 line-clamp-2">{event.description}</p>
                <button className="w-full border-2 border-dark text-dark font-bold py-2 rounded-xl hover:bg-dark hover:text-white transition">
                  רכישת כרטיסים / הרשמה
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white p-6 rounded-full shadow-lg text-primary">
            <Music size={48} />
          </div>
          <div className="flex-grow text-center md:text-right">
            <h3 className="text-2xl font-bold mb-2">רוצים לפרסם אירוע?</h3>
            <p className="text-gray-600">מארגנים הופעה, הרצאה או מפגש קהילתי? פרסמו אצלנו בחינם והגיעו לאלפי אנשים.</p>
          </div>
          <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition">
            פרסום אירוע חדש
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
