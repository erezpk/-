
import React, { useState } from 'react';
import { Search, Filter, X, MapPin, RotateCcw, Check } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { ServiceProvider, ViewState } from '../types';
import { SERVICE_PROVIDERS, CATEGORIES, CITIES } from '../constants';

interface SearchPageProps {
  onSelectProvider: (provider: ServiceProvider) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onSelectProvider }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Filter Logic
  const filteredProviders = SERVICE_PROVIDERS.filter(provider => {
    const matchesSearch = provider.name.includes(searchTerm) || provider.category.includes(searchTerm);
    const matchesCategory = selectedCategory ? provider.category === selectedCategory : true;
    const matchesCity = selectedCity ? provider.location === selectedCity : true;
    return matchesSearch && matchesCategory && matchesCity;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedCity('');
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50/50">
      <div className="flex flex-col md:flex-row gap-8 relative">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-dark">חיפוש בעלי מקצוע</h1>
          <button 
            onClick={() => setShowFiltersMobile(true)}
            className="flex items-center gap-2 bg-white text-dark border border-gray-200 px-4 py-2 rounded-xl shadow-sm font-medium"
          >
            <Filter size={18} /> סינון תוצאות
          </button>
        </div>

        {/* Sidebar Filters - Desktop & Mobile Modal */}
        <aside className={`
          md:w-1/4 
          fixed md:sticky md:top-24 inset-0 z-50 md:z-30
          bg-white/95 md:bg-white backdrop-blur-md md:backdrop-blur-none
          p-6 md:p-6 md:rounded-2xl md:shadow-lg md:border md:border-gray-100
          transition-transform duration-300 ease-in-out
          ${showFiltersMobile ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          overflow-y-auto md:overflow-visible h-full md:h-fit
        `}>
          
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-dark flex items-center gap-2">
              <Filter className="text-primary" size={24} />
              סינון מתקדם
            </h3>
            <button onClick={() => setShowFiltersMobile(false)} className="md:hidden p-2 bg-gray-100 rounded-full">
              <X size={20} />
            </button>
            {(searchTerm || selectedCategory || selectedCity) && (
              <button 
                onClick={clearFilters}
                className="hidden md:flex text-xs text-gray-400 hover:text-red-500 items-center gap-1 transition"
              >
                <RotateCcw size={12} /> איפוס
              </button>
            )}
          </div>

          {/* Search Input */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">חיפוש חופשי</label>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="שם העסק או שירות..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3.5 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            </div>
          </div>

          {/* City Filter */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">אזור שירות</label>
            <div className="relative group">
              <select 
                className="w-full p-3.5 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-gray-900 shadow-sm"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">כל הארץ</option>
                {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
              <MapPin className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              <div className="absolute right-3 top-4 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400"></div>
            </div>
          </div>

          {/* Category Filter - Chips Style */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-3">קטגוריה</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border
                  ${selectedCategory === '' 
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/30' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
                `}
              >
                הכל
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border flex items-center gap-1
                    ${selectedCategory === cat 
                      ? 'bg-primary text-white border-primary shadow-md shadow-primary/30' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
                  `}
                >
                  {selectedCategory === cat && <Check size={12} />}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden mt-auto pt-6 border-t border-gray-100">
             <button 
              className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-emerald-600 transition active:scale-95"
              onClick={() => setShowFiltersMobile(false)}
            >
              הצג {filteredProviders.length} תוצאות
            </button>
            <button 
              className="w-full mt-3 text-gray-500 py-3 font-medium hover:text-dark transition flex items-center justify-center gap-2"
              onClick={clearFilters}
            >
              <RotateCcw size={16} /> איפוס הכל
            </button>
          </div>

        </aside>

        {/* Results Area */}
        <section className="md:w-3/4 flex-grow">
          {/* Desktop Top Bar */}
          <div className="hidden md:flex justify-between items-end mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div>
               <h2 className="text-2xl font-black text-dark">
                תוצאות חיפוש
               </h2>
               <p className="text-gray-500 text-sm mt-1">
                 נמצאו <span className="font-bold text-primary">{filteredProviders.length}</span> בעלי מקצוע שמתאימים לך
               </p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500">מיון לפי:</span>
              <select className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2 outline-none cursor-pointer hover:bg-white transition">
                <option>מומלץ ביותר</option>
                <option>דירוג (גבוה לנמוך)</option>
                <option>הכי חדש</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
              {filteredProviders.map((provider, index) => (
                <ServiceCard 
                  key={provider.id} 
                  provider={provider} 
                  onClick={() => onSelectProvider(provider)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
              <div className="bg-gray-50 p-6 rounded-full mb-4">
                <Search size={48} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">לא נמצאו תוצאות</h3>
              <p className="text-gray-500 mb-6 text-center max-w-xs">
                נסה לשנות את מונחי החיפוש או להסיר חלק מהמסננים כדי לראות תוצאות נוספות.
              </p>
              <button 
                onClick={clearFilters}
                className="bg-primary/10 text-primary font-bold px-6 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-2"
              >
                <RotateCcw size={18} /> נקה את כל הסינונים
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default SearchPage;
