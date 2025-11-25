
import React from 'react';
import { BookOpen, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { COURSES } from '../constants';

const EducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black mb-4">לימודים, הכשרות ומלגות</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            השער שלכם להשכלה גבוהה ורכישת מקצוע לחיים. כאן תמצאו את כל המידע על קורסים, מלגות ותוכניות מצוינות.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-accent">
              <div className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center text-accent mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">מלגות לימודים</h3>
              <p className="text-gray-600 mb-4 text-sm">מאגר המלגות הגדול לסטודנטים בני העדה. סיוע בשכר לימוד ומחייה.</p>
              <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">לרשימת המלגות <ArrowRight size={14} className="rotate-180" /></button>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-primary">
              <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">קורסים מקצועיים</h3>
              <p className="text-gray-600 mb-4 text-sm">הכשרות הייטק, ניהול, ושיווק. קורסים במימון מלא או מסובסד.</p>
              <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">לכל הקורסים <ArrowRight size={14} className="rotate-180" /></button>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-brandRed">
              <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center text-brandRed mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">תוכניות מצוינות</h3>
              <p className="text-gray-600 mb-4 text-sm">תוכניות מנהיגות לצעירים מובילים המעוניינים להשפיע על החברה.</p>
              <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">לפרטים נוספים <ArrowRight size={14} className="rotate-180" /></button>
           </div>
        </div>

        <h2 className="text-2xl font-bold text-dark mb-6">קורסים פופולריים שנפתחים בקרוב</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES.map((course) => (
             <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark">{course.title}</h3>
                    <span className="text-gray-500 text-sm">בשיתוף טק-קריירה</span>
                  </div>
                  {course.isBeginnerFriendly && <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">למתחילים</span>}
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <button className="w-full bg-primary/10 text-primary font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition">
                  בדיקת התאמה והרשמה
                </button>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
