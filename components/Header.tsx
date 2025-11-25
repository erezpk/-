
import React, { useState } from 'react';
import { Menu, X, User as UserIcon, LogOut, LayoutDashboard, Settings } from 'lucide-react';
import { ViewState, User } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  currentUser: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-primary shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer"
          onClick={() => onNavigate(ViewState.HOME)}
        >
          <img 
            src="logo.png" 
            alt="קול העדה" 
            className="h-14 w-auto object-contain mix-blend-multiply" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-dark">
          <button onClick={() => onNavigate(ViewState.HOME)} className="hover:text-primary transition">בית</button>
          <button onClick={() => onNavigate(ViewState.SEARCH)} className="hover:text-primary transition">חיפוש בעל מקצוע</button>
          <button onClick={() => onNavigate(ViewState.JOBS)} className="hover:text-primary transition">לוח דרושים</button>
          <button onClick={() => onNavigate(ViewState.EDUCATION)} className="hover:text-primary transition">לימודים</button>
          <button onClick={() => onNavigate(ViewState.EVENTS)} className="hover:text-primary transition">אירועים</button>
          <button onClick={() => onNavigate(ViewState.ABOUT)} className="hover:text-primary transition">אודות</button>
        </nav>

        {/* Auth Buttons / User Menu */}
        <div className="hidden md:flex items-center gap-3 relative">
          {currentUser ? (
            <div className="relative">
              <button 
                className="flex items-center gap-2 text-dark font-medium hover:text-primary transition"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <UserIcon size={18} />
                </div>
                <span>{currentUser.name}</span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-gray-50">
                    <p className="text-xs text-gray-500">מחובר כ</p>
                    <p className="font-bold text-sm truncate">{currentUser.email}</p>
                  </div>
                  
                  {currentUser.role === 'PROVIDER' && (
                    <button 
                      onClick={() => { onNavigate(ViewState.PROVIDER_DASHBOARD); setIsUserMenuOpen(false); }}
                      className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary flex items-center gap-2"
                    >
                      <LayoutDashboard size={16} /> דשבורד עסקי
                    </button>
                  )}
                  
                  <button 
                    onClick={() => { onNavigate(ViewState.USER_PROFILE); setIsUserMenuOpen(false); }}
                    className="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary flex items-center gap-2"
                  >
                    <Settings size={16} /> הגדרות פרופיל
                  </button>
                  
                  <button 
                    onClick={() => { onLogout(); setIsUserMenuOpen(false); }}
                    className="w-full text-right px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut size={16} /> התנתקות
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button 
                onClick={() => onNavigate(ViewState.LOGIN)}
                className="text-dark hover:text-primary font-medium"
              >
                התחברות
              </button>
              <button 
                onClick={() => onNavigate(ViewState.REGISTER)}
                className="bg-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition font-bold shadow-md"
              >
                הרשמה
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
          <div className="flex flex-col p-4 gap-4 font-medium text-dark">
            <button onClick={() => { onNavigate(ViewState.HOME); setIsMenuOpen(false); }} className="text-right">בית</button>
            <button onClick={() => { onNavigate(ViewState.SEARCH); setIsMenuOpen(false); }} className="text-right">חיפוש בעל מקצוע</button>
            <button onClick={() => { onNavigate(ViewState.JOBS); setIsMenuOpen(false); }} className="text-right">לוח דרושים</button>
            <button onClick={() => { onNavigate(ViewState.EDUCATION); setIsMenuOpen(false); }} className="text-right">לימודים</button>
            <button onClick={() => { onNavigate(ViewState.EVENTS); setIsMenuOpen(false); }} className="text-right">אירועים</button>
            <button onClick={() => { onNavigate(ViewState.ABOUT); setIsMenuOpen(false); }} className="text-right">אודות</button>
            
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
              {currentUser ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <UserIcon size={18} />
                    </div>
                    <span className="font-bold">{currentUser.name}</span>
                  </div>
                  {currentUser.role === 'PROVIDER' && (
                    <button 
                      onClick={() => { onNavigate(ViewState.PROVIDER_DASHBOARD); setIsMenuOpen(false); }}
                      className="text-right text-sm text-primary font-bold"
                    >
                      דשבורד עסקי
                    </button>
                  )}
                  <button 
                    onClick={() => { onNavigate(ViewState.USER_PROFILE); setIsMenuOpen(false); }}
                    className="text-right text-sm text-gray-700"
                  >
                    הגדרות פרופיל
                  </button>
                  <button 
                    onClick={() => { onLogout(); setIsMenuOpen(false); }}
                    className="text-right text-sm text-red-500"
                  >
                    התנתקות
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => { onNavigate(ViewState.LOGIN); setIsMenuOpen(false); }}
                    className="text-center w-full py-2 border border-primary text-primary rounded-lg font-bold"
                  >
                    התחברות
                  </button>
                  <button 
                    onClick={() => { onNavigate(ViewState.REGISTER); setIsMenuOpen(false); }}
                    className="text-center w-full py-2 bg-primary text-white rounded-lg font-bold"
                  >
                    הרשמה
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
