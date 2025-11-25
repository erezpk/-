
import React, { useState } from 'react';
import { User } from '../types';
import { Save } from 'lucide-react';

interface UserProfilePageProps {
  currentUser: User;
  onUpdateUser: (updatedUser: User) => void;
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({ currentUser, onUpdateUser }) => {
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      ...currentUser,
      name,
      email
    });
    setSuccessMsg('הפרטים עודכנו בהצלחה!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-primary/10 p-6 flex items-center gap-4">
          <div className="w-20 h-20 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center">
            {name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-dark">{name}</h1>
            <p className="text-gray-600">משתמש רשום</p>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">פרטים אישיים</h2>
          
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">כתובת אימייל</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white text-gray-900"
              />
            </div>

            <div className="pt-4 border-t mt-6">
              <h3 className="font-bold mb-4 text-gray-700">שינוי סיסמה</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="password" placeholder="סיסמה נוכחית" className="p-3 border rounded-lg bg-gray-50 text-gray-500" disabled />
                <input type="password" placeholder="סיסמה חדשה" className="p-3 border rounded-lg bg-gray-50 text-gray-500" disabled />
              </div>
              <p className="text-xs text-gray-400 mt-2">* שינוי סיסמה לא זמין במצב דמו</p>
            </div>

            <div className="flex items-center justify-between pt-4">
              {successMsg && <span className="text-green-600 font-medium animate-pulse">{successMsg}</span>}
              <button 
                type="submit" 
                className="flex items-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-emerald-600 transition shadow-lg ml-auto"
              >
                <Save size={18} /> שמור שינויים
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
