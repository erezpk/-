
import React from 'react';
import { Briefcase, MapPin, Clock, Search, Send } from 'lucide-react';
import { JOBS } from '../constants';

const JobsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black text-dark mb-4">לוח דרושים</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מצאו את המשרה הבאה שלכם מתוך מגוון אפשרויות תעסוקה בקהילה ומחוצה לה
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-10 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto -mt-16 relative z-10">
          <div className="flex-grow relative">
            <input 
              type="text" 
              placeholder="חיפוש משרה..." 
              className="w-full p-4 pr-12 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-primary text-gray-900"
            />
            <Search className="absolute right-4 top-4 text-gray-400" size={20} />
          </div>
          <div className="relative md:w-1/3">
             <select className="w-full p-4 pr-12 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-primary appearance-none text-gray-900">
               <option>כל האזורים</option>
               <option>מרכז</option>
               <option>צפון</option>
               <option>דרום</option>
               <option>ירושלים</option>
             </select>
             <MapPin className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={20} />
          </div>
          <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition shadow-lg">
            חיפוש
          </button>
        </div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {JOBS.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition hover:-translate-x-1 flex flex-col md:flex-row justify-between items-center group">
               <div className="flex items-start gap-4 mb-4 md:mb-0">
                 <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-2xl">
                   {job.company.charAt(0)}
                 </div>
                 <div>
                   <div className="flex items-center gap-2">
                     <h3 className="text-xl font-bold text-dark group-hover:text-primary transition">{job.title}</h3>
                     {job.isNew && <span className="bg-brandRed/10 text-brandRed text-xs font-bold px-2 py-0.5 rounded-full border border-brandRed/20">חדש</span>}
                   </div>
                   <p className="text-gray-600 font-medium">{job.company}</p>
                   <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                     <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                     <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                   </div>
                 </div>
               </div>
               
               <a 
                 href={`mailto:jobs@kol-haeda.co.il?subject=מועמדות למשרת ${job.title}&body=שלום, אני מעוניין להגיש מועמדות למשרה.`}
                 className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-xl font-bold transition flex items-center gap-2"
               >
                 <Send size={18} /> שלח קו"ח
               </a>
            </div>
          ))}
          
          {/* Mock More Jobs */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition hover:-translate-x-1 flex flex-col md:flex-row justify-between items-center group">
               <div className="flex items-start gap-4 mb-4 md:mb-0">
                 <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold text-2xl">
                   ט
                 </div>
                 <div>
                   <div className="flex items-center gap-2">
                     <h3 className="text-xl font-bold text-dark group-hover:text-primary transition">טכנאי/ת מחשבים</h3>
                     <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">לפני יומיים</span>
                   </div>
                   <p className="text-gray-600 font-medium">טק-סרוויס בע"מ</p>
                   <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                     <span className="flex items-center gap-1"><MapPin size={14} /> ראשון לציון</span>
                     <span className="flex items-center gap-1"><Clock size={14} /> משרה מלאה</span>
                   </div>
                 </div>
               </div>
               
               <a 
                 href={`mailto:jobs@kol-haeda.co.il?subject=מועמדות למשרת טכנאי מחשבים&body=שלום, אני מעוניין להגיש מועמדות למשרה.`}
                 className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-xl font-bold transition flex items-center gap-2"
               >
                 <Send size={18} /> שלח קו"ח
               </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
