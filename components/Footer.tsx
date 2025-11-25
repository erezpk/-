import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">קול העדה</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              הבית הדיגיטלי של הקהילה האתיופית בישראל. מחברים בין אנשים, עסקים ומסורת לעתיד טוב יותר.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">ניווט מהיר</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-primary transition">אודות</a></li>
              <li><a href="#" className="hover:text-primary transition">צור קשר</a></li>
              <li><a href="#" className="hover:text-primary transition">תנאי שימוש</a></li>
              <li><a href="#" className="hover:text-primary transition">תקנון</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">קטגוריות</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-primary transition">חיפוש בעלי מקצוע</a></li>
              <li><a href="#" className="hover:text-primary transition">לוח דרושים</a></li>
              <li><a href="#" className="hover:text-primary transition">לימודים ומלגות</a></li>
              <li><a href="#" className="hover:text-primary transition">אירועים ותרבות</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">עקבו אחרינו</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition"><Instagram size={20} /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition"><Youtube size={20} /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2025 קול העדה - כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;