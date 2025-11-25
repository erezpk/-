
import React, { useState } from 'react';
import { ViewState } from '../types';
import { Mail, Lock, ArrowRight, ChevronRight } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (view: ViewState) => void;
  onLogin: (email: string, name: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = email.split('@')[0];
    onLogin(email, name);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Image Section (Right Side in RTL) */}
      <div 
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative" 
        style={{ backgroundImage: 'url("https://picsum.photos/id/1015/1200/1200")' }}
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-white h-full">
          <img src="logo.png" alt="קול העדה" className="h-24 w-auto object-contain mb-8 mix-blend-screen opacity-90 self-start" />
          <h2 className="text-5xl font-black mb-6 leading-tight">
            טוב שחזרת <br/>לקהילה שלנו
          </h2>
          <p className="text-xl font-light leading-relaxed max-w-lg opacity-90">
            התחבר כדי לגלות הזדמנויות חדשות, ליצור קשרים עסקיים ולשמור על הקשר עם המסורת והתרבות.
          </p>
        </div>
      </div>

      {/* Form Section (Left Side in RTL) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 bg-white">
        <div className="w-full max-w-md mx-auto">
          <button 
            onClick={() => onNavigate(ViewState.HOME)}
            className="flex items-center gap-1 text-gray-400 hover:text-primary mb-8 text-sm font-medium transition"
          >
            <ChevronRight size={16} /> חזרה לעמוד הבית
          </button>

          <div className="mb-10">
            <h1 className="text-3xl font-black text-dark mb-2">התחברות</h1>
            <p className="text-gray-500">
              אין לך עדיין חשבון?{' '}
              <button onClick={() => onNavigate(ViewState.REGISTER)} className="text-primary font-bold hover:underline">
                הירשם עכשיו בחינם
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">אימייל</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="block w-full pr-10 pl-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition sm:text-sm shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">סיסמה</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pr-10 pl-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition sm:text-sm shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-600 cursor-pointer">
                  זכור אותי
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-primary hover:text-emerald-600">
                  שכחת סיסמה?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-primary hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition transform hover:scale-[1.02] duration-200"
            >
              התחבר לחשבון
            </button>
          </form>
          
          <div className="mt-8 text-center text-xs text-gray-400">
            מוגן ע"י reCAPTCHA וכפוף למדיניות הפרטיות ותנאי השימוש.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
