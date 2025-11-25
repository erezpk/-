
import React, { useState } from 'react';
import { ViewState, UserRole } from '../types';
import { User, Briefcase, Mail, Lock, Check, ChevronRight } from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (view: ViewState) => void;
  onRegister: (name: string, email: string, role: UserRole) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('USER');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(name, email, role);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Form Section (Right Side in RTL - actually usually Left in DOM but RTL flips it, let's keep visual consistency) */}
      {/* We want Form on one side, Image on other. */}
      
      {/* Image Section (Right Side in RTL) */}
      <div 
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative order-2 lg:order-1" 
        style={{ backgroundImage: 'url("https://picsum.photos/id/1025/1200/1200")' }}
      >
        <div className="absolute inset-0 bg-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-white h-full">
          <img src="logo.png" alt="קול העדה" className="h-24 w-auto object-contain mb-8 mix-blend-screen opacity-90 self-start" />
          <h2 className="text-5xl font-black mb-6 leading-tight">
            הצטרף לכוח <br/>של הקהילה
          </h2>
          <p className="text-xl font-light leading-relaxed max-w-lg opacity-90">
            בין אם אתה מחפש שירות מקצועי או רוצה להציע את הכישורים שלך - המקום שלך איתנו.
            הרשמה קצרה ופשוטה.
          </p>
          
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-1 rounded-full"><Check size={16} /></div>
              <span>גישה למאות בעלי מקצוע מומלצים</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-1 rounded-full"><Check size={16} /></div>
              <span>פרסום משרות ואירועים</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-1 rounded-full"><Check size={16} /></div>
              <span>קהילה תומכת ומחברת</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section (Left Side in RTL) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 bg-white order-1 lg:order-2">
        <div className="w-full max-w-md mx-auto">
          <button 
            onClick={() => onNavigate(ViewState.HOME)}
            className="flex items-center gap-1 text-gray-400 hover:text-primary mb-6 text-sm font-medium transition"
          >
            <ChevronRight size={16} /> חזרה לעמוד הבית
          </button>

          <div className="mb-8">
            <h1 className="text-3xl font-black text-dark mb-2">יצירת חשבון חדש</h1>
            <p className="text-gray-500">
              כבר חבר בקהילה?{' '}
              <button onClick={() => onNavigate(ViewState.LOGIN)} className="text-primary font-bold hover:underline">
                התחבר כאן
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Custom Role Selector */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div 
                className={`
                  cursor-pointer relative p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center text-center gap-2 group
                  ${role === 'USER' 
                    ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}
                `}
                onClick={() => setRole('USER')}
              >
                {role === 'USER' && <div className="absolute top-2 right-2 text-primary"><Check size={16} /></div>}
                <div className={`p-3 rounded-full ${role === 'USER' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:text-gray-600'}`}>
                  <User size={24} />
                </div>
                <div className="font-bold text-dark text-sm">מחפש שירות</div>
              </div>

              <div 
                className={`
                  cursor-pointer relative p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center text-center gap-2 group
                  ${role === 'PROVIDER' 
                    ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}
                `}
                onClick={() => setRole('PROVIDER')}
              >
                {role === 'PROVIDER' && <div className="absolute top-2 right-2 text-primary"><Check size={16} /></div>}
                <div className={`p-3 rounded-full ${role === 'PROVIDER' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:text-gray-600'}`}>
                  <Briefcase size={24} />
                </div>
                <div className="font-bold text-dark text-sm">בעל מקצוע</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">שם מלא</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ישראל ישראלי"
                    className="block w-full pr-10 pl-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition sm:text-sm shadow-sm"
                  />
                </div>
              </div>

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
                    placeholder="לפחות 6 תווים"
                    className="block w-full pr-10 pl-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition sm:text-sm shadow-sm"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-primary hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition transform hover:scale-[1.02] duration-200"
            >
              {role === 'PROVIDER' ? 'המשך להקמת פרופיל עסקי' : 'הצטרף לקהילה'}
            </button>
            
            <p className="text-xs text-center text-gray-400 px-4 leading-normal">
              בלחיצה על הרשמה אתה מאשר את <a href="#" className="underline hover:text-primary">תנאי השימוש</a> ואת <a href="#" className="underline hover:text-primary">מדיניות הפרטיות</a> שלנו.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
