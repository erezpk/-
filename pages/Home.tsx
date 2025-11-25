
import React from 'react';
import { Search, MapPin, Briefcase, BookOpen, Music, ChevronLeft, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { ServiceProvider, ViewState, Article } from '../types';
import { SERVICE_PROVIDERS, JOBS, ARTICLES, COURSES, CATEGORIES, CITIES } from '../constants';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
  onSelectProvider: (provider: ServiceProvider) => void;
  onSelectArticle: (article: Article) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectProvider, onSelectArticle }) => {
  const featuredProviders = SERVICE_PROVIDERS.filter(p => p.isRecommended).slice(0, 3);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1015/1920/1080" 
            alt="Ethiopian Landscape" 
            className="w-full h-full object-cover animate-[scale-in_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            בואו נכיר את <span className="text-primary">אתיופיה של פעם</span>,<br />
            את הסיפורים והמסורות
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 font-light">
            גשר בין הדור של ההורים לסיפורים של פעם - קהילה חזקה, מחוברת ומתקדמת
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate(ViewState.SEARCH)}
              className="bg-primary hover:bg-emerald-500 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
            >
              חיפוש בעל מקצוע
            </button>
            <button 
              onClick={() => onNavigate(ViewState.REGISTER)}
              className="group bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
            >
              הרשמה כנותן שירות
            </button>
          </div>
        </div>
      </section>

      {/* Main Search Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-4 mb-20">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-bold mb-6 text-dark flex items-center gap-2">
            <Search className="text-primary" />
            מצא את השירות שאתה צריך
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
               <select className="w-full p-4 bg-white rounded-xl appearance-none pr-4 outline-none focus:ring-2 focus:ring-primary text-gray-900 border border-gray-200">
                  <option value="">כל הקטגוריות</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
               </select>
               <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                 <Briefcase size={20} />
               </div>
            </div>
            <div className="relative">
              <select className="w-full p-4 bg-white rounded-xl appearance-none pr-4 outline-none focus:ring-2 focus:ring-primary text-gray-900 border border-gray-200">
                 <option value="">כל הארץ</option>
                 {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
               <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                 <MapPin size={20} />
               </div>
            </div>
            <button 
              onClick={() => onNavigate(ViewState.SEARCH)}
              className="bg-primary text-white font-bold text-lg rounded-xl hover:bg-emerald-600 transition shadow-md"
            >
              חיפוש
            </button>
          </div>
        </div>
      </section>

      {/* Recommended Pros */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-2">בעלי מקצוע <span className="text-primary">מומלצים</span></h2>
            <p className="text-gray-500">הנבחרים של הקהילה, מדורגים ואיכותיים</p>
          </div>
          <button 
            onClick={() => onNavigate(ViewState.SEARCH)}
            className="hidden md:flex items-center text-primary font-bold hover:underline"
          >
            לכל בעלי המקצוע <ChevronLeft size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProviders.map((provider, index) => (
            <ServiceCard 
              key={provider.id} 
              provider={provider} 
              onClick={() => onSelectProvider(provider)}
              featured={true}
              index={index}
            />
          ))}
        </div>
        <button 
            onClick={() => onNavigate(ViewState.SEARCH)}
            className="md:hidden w-full mt-6 flex justify-center items-center text-primary font-bold border border-primary p-3 rounded-lg hover:bg-primary/5 transition"
          >
            לכל בעלי המקצוע
        </button>
      </section>

      {/* Business & History */}
      <section className="bg-secondary py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark mb-8 border-r-4 border-primary pr-4">עסקים והיסטוריה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((article, index) => (
              <div 
                key={article.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col md:flex-row h-full cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => onSelectArticle(article)}
              >
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition duration-500 hover:scale-110" />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-dark">{article.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectArticle(article);
                    }}
                    className="self-start text-primary font-bold hover:underline flex items-center gap-1"
                  >
                    לקריאה <ArrowRight size={16} className="rotate-180" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid: Jobs & Education */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Jobs */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Briefcase className="text-dark" /> לוח דרושים
              </h2>
              <button onClick={() => onNavigate(ViewState.JOBS)} className="text-sm text-gray-500 hover:text-primary underline">לכל המשרות</button>
            </div>
            <div className="space-y-4">
              {JOBS.map(job => (
                <div key={job.id} className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-x-1 flex justify-between items-center group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg text-dark group-hover:text-primary transition">{job.title}</h4>
                      {job.isNew && <span className="bg-brandRed text-white text-[10px] px-2 py-0.5 rounded-full font-bold">חדש</span>}
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{job.company} • {job.location}</p>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{job.type}</span>
                  </div>
                  <a 
                    href={`mailto:jobs@kol-haeda.co.il?subject=מועמדות למשרת ${job.title}&body=שלום, אני מעוניין להגיש מועמדות למשרה.`}
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-bold text-sm transition"
                  >
                    שלח קו"ח
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <BookOpen className="text-dark" /> קורסים והשכלה
              </h2>
              <button onClick={() => onNavigate(ViewState.EDUCATION)} className="text-sm text-gray-500 hover:text-primary underline">לעוד מלגות</button>
            </div>
            <div className="space-y-4">
              {COURSES.map(course => (
                <div key={course.id} className="bg-gradient-to-r from-gray-50 to-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-x-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 h-full bg-accent group-hover:w-2 transition-all"></div>
                  <h4 className="font-bold text-lg text-dark mb-2 group-hover:text-primary transition">{course.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    {course.isBeginnerFriendly && (
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">מתאים למתחילים</span>
                    )}
                    <button onClick={() => onNavigate(ViewState.EDUCATION)} className="text-primary font-bold text-sm hover:underline">לפרטים נוספים</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Music & Culture */}
      <section className="bg-dark py-16 text-white mb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Music className="text-accent" size={32} />
            <h2 className="text-3xl font-bold">מוזיקה ותרבות</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <img src="https://picsum.photos/id/453/500/500" alt="Music" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 group-hover:bg-black/40 transition">
                <h3 className="font-bold text-xl mb-1">להיטים מאתיופיה</h3>
                <p className="text-gray-300 text-sm">פלייליסט נוסטלגי</p>
                <button 
                  onClick={() => onNavigate(ViewState.EVENTS)}
                  className="mt-4 bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition"
                >
                  ▶
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <img src="https://picsum.photos/id/447/500/500" alt="Music" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 group-hover:bg-black/40 transition">
                <h3 className="font-bold text-xl mb-1">פופ עדכני</h3>
                <p className="text-gray-300 text-sm">הזמרים החדשים של העדה</p>
                <button 
                  onClick={() => onNavigate(ViewState.EVENTS)}
                  className="mt-4 bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition"
                >
                  ▶
                </button>
              </div>
            </div>
             <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer md:hidden lg:block animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <img src="https://picsum.photos/id/129/500/500" alt="Music" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 group-hover:bg-black/40 transition">
                <h3 className="font-bold text-xl mb-1">טקסים ומסורת</h3>
                <p className="text-gray-300 text-sm">ניגונים ושירים</p>
                <button 
                  onClick={() => onNavigate(ViewState.EVENTS)}
                  className="mt-4 bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => onNavigate(ViewState.EVENTS)}
              className="border border-white hover:bg-white hover:text-dark text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
            >
              לספריית המוזיקה המלאה
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-primary/10 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary mb-4">הירשמו לאתר ותשארו מעודכנים</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">קבלו עדכונים שבועיים על משרות חדשות, קורסים שנפתחים, אירועי תרבות והטבות ייחודיות לחברי הקהילה.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="הכנס את המייל שלך" 
              className="flex-grow p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary transition bg-white text-gray-900"
            />
            <button className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition shadow-lg whitespace-nowrap transform hover:scale-105">
              הרשמה
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
