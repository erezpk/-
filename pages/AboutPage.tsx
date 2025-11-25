
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="h-[400px] relative flex items-center justify-center">
        <img 
          src="https://picsum.photos/id/1025/1920/600" 
          alt="Community" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-black mb-4">אודות "קול העדה"</h1>
          <p className="text-xl font-light">הבית הדיגיטלי של הקהילה האתיופית בישראל</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose max-w-none text-gray-700 leading-8">
          <h2 className="text-3xl font-bold text-primary mb-6">החזון שלנו</h2>
          <p className="text-lg mb-8">
            אתר "קול העדה" הוקם מתוך צורך אמיתי לחבר בין כל חלקי הקהילה - העסקים, התרבות, ההשכלה והמורשת.
            אנו מאמינים כי חיזוק הכלכלה הפנימית, לצד שמירה על המסורת המפוארת של יהדות אתיופיה, הם המפתח להצלחה ולשגשוג.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4">חיזוק עסקים מקומיים</h3>
              <p>
                פלטפורמה המאפשרת לבעלי עסקים מהקהילה לחשוף את השירותים שלהם לקהל הרחב, לקבל דירוגים ולהצמיח את העסק.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-accent">
              <h3 className="text-xl font-bold mb-4">גשר בין דורי</h3>
              <p>
                תיעוד סיפורי עלייה, מורשת ותרבות, והנגשתם לדור הצעיר בשפה עכשווית ודיגיטלית.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-6">מי אנחנו?</h2>
          <p>
            אנחנו קבוצה של יזמים חברתיים, מפתחים ואנשי תוכן מהקהילה, שהחליטו להרים את הכפפה וליצור מרחב דיגיטלי מקצועי, מכבד ומקדם.
            האתר נבנה בהתנדבות מלאה וללא מטרות רווח, לטובת הכלל.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">צור קשר</h2>
          <p>
            יש לכם רעיון לשיפור? רוצים לשתף סיפור? נתקלתם בבעיה באתר? נשמח לשמוע מכם!
          </p>
          <a href="mailto:contact@kol-haeda.co.il" className="inline-block bg-dark text-white font-bold px-8 py-3 rounded-full hover:bg-gray-800 transition mt-4">
            שלח לנו הודעה
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
