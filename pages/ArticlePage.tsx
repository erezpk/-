
import React from 'react';
import { ArrowRight, Calendar, User, Share2 } from 'lucide-react';
import { Article } from '../types';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
           <button 
             onClick={onBack}
             className="flex items-center gap-2 text-gray-600 hover:text-primary font-bold transition"
           >
             <ArrowRight size={20} /> חזרה לעמוד הבית
           </button>
        </div>
      </div>

      <article className="container mx-auto px-4 mt-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-fade-in-up">
          <div className="h-[400px] w-full relative">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 right-0 p-8 text-white">
              <span className="bg-primary px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">היסטוריה ותרבות</span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{article.title}</h1>
              <div className="flex items-center gap-6 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>25 בינואר, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>מערכת קול העדה</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-xl leading-relaxed font-light text-gray-800 mb-8 border-r-4 border-primary pr-4">
              {article.description}
            </p>

            <div className="prose max-w-none text-gray-700 leading-8">
              <p className="mb-6">
                כאן יבוא התוכן המלא של המאמר. כרגע זהו טקסט דמה שנועד להמחיש את עיצוב העמוד.
                הסיפור של קהילת בית ישראל הוא סיפור של גבורה, כיסופים ואמונה בלתי מתפשרת.
                במשך דורות רבים חלמו אבותינו על ירושלים, "ירוסלם", ושמרו על יהדותם בתנאים קשים.
              </p>
              
              <h3 className="text-2xl font-bold text-dark mt-8 mb-4">המסע לישראל</h3>
              <p className="mb-6">
                העלייה לישראל לא הייתה קלה. רבים הקריבו את חייהם בדרך, במדבריות סודן, במחנות המעבר ובמבצעים החשאיים.
                מבצע משה ומבצע שלמה הם אבני דרך בהיסטוריה של מדינת ישראל ושל העם היהודי כולו.
              </p>

              <blockquote className="bg-gray-50 p-6 rounded-xl border-r-4 border-accent italic text-gray-600 my-8">
                "לא עזבנו את אתיופיה כי היה לנו רע שם, עזבנו כי חלמנו על ירושלים."
              </blockquote>

              <p>
                כיום, הדור הצעיר ממשיך את המורשת המפוארת תוך השתלבות בכל תחומי החיים בישראל - באקדמיה, בצבא, בהייטק ובתרבות.
                אתר "קול העדה" נועד בדיוק למטרה זו - לחבר בין העבר לעתיד, ולתת במה לכישרונות הרבים בקהילה.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t flex justify-between items-center">
              <div className="flex gap-2">
                <span className="text-gray-500 font-bold">שתף מאמר:</span>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"><Share2 size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
