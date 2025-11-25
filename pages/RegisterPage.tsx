
import React, { useState } from 'react';
import { ViewState, UserRole } from '../types';

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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mb-6 flex justify-center">
          <img src="logo.png" alt="קול העדה" className="h-24 w-auto object-contain mix-blend-multiply" />
        </div>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
          יצירת חשבון חדש
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          כבר יש לך חשבון?{' '}
          <button onClick={() => onNavigate(ViewState.LOGIN)} className="font-medium text-primary hover:text-emerald-500">
             התחבר
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Account Type Selection */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div 
                className={`cursor-pointer border-2 rounded-xl p-4 text-center transition ${role === 'USER' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setRole('USER')}
              >
                <div className="text-2xl mb-2">👤</div>
                <div className={`font-bold ${role === 'USER' ? 'text-primary' : 'text-gray-500'}`}>מחפש שירות</div>
              </div>
              <div 
                className={`cursor-pointer border-2 rounded-xl p-4 text-center transition ${role === 'PROVIDER' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setRole('PROVIDER')}
              >
                <div className="text-2xl mb-2">💼</div>
                <div className={`font-bold ${role === 'PROVIDER' ? 'text-primary' : 'text-gray-500'}`}>בעל מקצוע</div>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                שם מלא
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                כתובת אימייל
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                סיסמה
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
              >
                {role === 'PROVIDER' ? 'הירשם והקם פרופיל עסקי' : 'הירשם בחינם'}
              </button>
            </div>
            
            <div className="text-xs text-center text-gray-500">
              בלחיצה על הרשמה אתה מאשר את <a href="#" className="underline">תנאי השימוש</a> ו<a href="#" className="underline">מדיניות הפרטיות</a> שלנו.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
