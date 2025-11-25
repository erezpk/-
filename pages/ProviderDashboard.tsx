
import React, { useState } from 'react';
import { ServiceProvider, Review } from '../types';
import { BarChart3, Star, MessageSquare, Edit3, Save, MapPin, Phone, Reply } from 'lucide-react';

interface ProviderDashboardProps {
  provider: ServiceProvider;
  onUpdateProvider: (updatedProvider: ServiceProvider) => void;
  onReplyToReview: (providerId: string, reviewId: string, response: string) => void;
}

const ProviderDashboard: React.FC<ProviderDashboardProps> = ({ provider, onUpdateProvider, onReplyToReview }) => {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'EDIT' | 'REVIEWS'>('OVERVIEW');
  const [editForm, setEditForm] = useState(provider);
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);

  // Stats
  const averageRating = provider.rating;
  const totalReviews = provider.reviewCount;
  const totalViews = provider.views || 1240; // Mock data if undefined

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProvider(editForm);
    alert('הפרופיל עודכן בהצלחה!');
  };

  const submitReply = (reviewId: string) => {
    if (!replyText[reviewId]) return;
    onReplyToReview(provider.id, reviewId, replyText[reviewId]);
    setActiveReplyId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-dark">דשבורד בעל עסק: {provider.name}</h1>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">חשבון פעיל</span>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-8 mt-8 border-b border-gray-100">
            <button 
              onClick={() => setActiveTab('OVERVIEW')}
              className={`pb-4 px-2 font-medium transition ${activeTab === 'OVERVIEW' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-dark'}`}
            >
              סקירה כללית
            </button>
            <button 
              onClick={() => setActiveTab('EDIT')}
              className={`pb-4 px-2 font-medium transition ${activeTab === 'EDIT' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-dark'}`}
            >
              עריכת פרופיל
            </button>
            <button 
              onClick={() => setActiveTab('REVIEWS')}
              className={`pb-4 px-2 font-medium transition ${activeTab === 'REVIEWS' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-dark'}`}
            >
              ניהול ביקורות
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'OVERVIEW' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">צפיות בפרופיל</div>
                  <div className="text-2xl font-bold">{totalViews}</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-4 bg-yellow-50 text-yellow-600 rounded-full">
                  <Star size={24} />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">דירוג ממוצע</div>
                  <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-4 bg-green-50 text-green-600 rounded-full">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">סה"כ ביקורות</div>
                  <div className="text-2xl font-bold">{totalReviews}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-lg font-bold mb-2">טיפ לקידום העסק</h3>
              <p className="text-gray-600">הוספת תמונות חדשות לגלריה מעלה את כמות הפניות ב-30% בממוצע.</p>
              <button 
                onClick={() => setActiveTab('EDIT')}
                className="mt-4 text-primary font-bold hover:underline"
              >
                הוסף תמונות עכשיו
              </button>
            </div>
          </div>
        )}

        {/* EDIT PROFILE TAB */}
        {activeTab === 'EDIT' && (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Edit3 className="text-primary" /> עריכת פרטי עסק
            </h2>
            <form onSubmit={handleSaveProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">שם העסק / בעל המקצוע</label>
                  <input 
                    type="text" 
                    value={editForm.name}
                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white text-gray-900"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">קטגוריה</label>
                   <input 
                    type="text" 
                    value={editForm.category}
                    disabled
                    className="w-full p-3 border border-gray-200 bg-gray-50 rounded-lg text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">תיאור העסק</label>
                <textarea 
                  rows={4}
                  value={editForm.description}
                  onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">מיקום</label>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-3 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      value={editForm.location}
                      onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                      className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white text-gray-900"
                    />
                  </div>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">טלפון</label>
                   <div className="relative">
                    <Phone className="absolute right-3 top-3 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      value={editForm.phone}
                      onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                      className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white text-gray-900"
                    />
                   </div>
                </div>
              </div>

              <div className="flex justify-end pt-6 border-t">
                <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-emerald-600 transition flex items-center gap-2">
                  <Save size={18} /> שמור שינויים
                </button>
              </div>
            </form>
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === 'REVIEWS' && (
          <div className="max-w-4xl mx-auto space-y-6">
             <div className="flex items-center justify-between mb-4">
               <h2 className="text-xl font-bold">ביקורות ({provider.reviews.length})</h2>
             </div>

             {provider.reviews.length === 0 ? (
               <div className="bg-white p-12 rounded-xl text-center text-gray-500">
                 עדיין אין ביקורות. זה הזמן לבקש מלקוחות לדרג אותך!
               </div>
             ) : (
               provider.reviews.map(review => (
                 <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                   <div className="flex justify-between items-start mb-3">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">
                         {review.author.charAt(0)}
                       </div>
                       <div>
                         <div className="font-bold">{review.author}</div>
                         <div className="text-xs text-gray-400">{review.date}</div>
                       </div>
                     </div>
                     <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                        ))}
                     </div>
                   </div>
                   
                   <p className="text-gray-700 mb-4">{review.text}</p>
                   
                   {/* Provider Response Display */}
                   {review.response ? (
                     <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-primary">
                       <div className="text-sm font-bold text-primary mb-1">תגובה שלך ({review.responseDate || 'היום'}):</div>
                       <p className="text-sm text-gray-600">{review.response}</p>
                     </div>
                   ) : (
                     /* Response Form */
                     <div>
                       {activeReplyId === review.id ? (
                         <div className="mt-4">
                           <textarea
                             value={replyText[review.id] || ''}
                             onChange={(e) => setReplyText({...replyText, [review.id]: e.target.value})}
                             placeholder="כתוב תגובה ללקוח..."
                             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm mb-2 bg-white text-gray-900"
                             rows={3}
                           />
                           <div className="flex gap-2">
                             <button 
                              onClick={() => submitReply(review.id)}
                              className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg"
                             >
                               שלח תגובה
                             </button>
                             <button 
                              onClick={() => setActiveReplyId(null)}
                              className="bg-gray-200 text-gray-700 text-sm font-bold px-4 py-2 rounded-lg"
                             >
                               ביטול
                             </button>
                           </div>
                         </div>
                       ) : (
                         <button 
                           onClick={() => setActiveReplyId(review.id)}
                           className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                         >
                           <Reply size={14} /> הגב לביקורת
                         </button>
                       )}
                     </div>
                   )}
                 </div>
               ))
             )}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProviderDashboard;
