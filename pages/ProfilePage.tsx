
import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, Clock, ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';
import { ServiceProvider, User } from '../types';

interface ProfilePageProps {
  provider: ServiceProvider;
  onBack: () => void;
  currentUser: User | null;
  onAddReview: (providerId: string, rating: number, text: string, author: string) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ provider, onBack, currentUser, onAddReview }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewText, setNewReviewText] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReviewRating === 0) {
      alert('נא לבחור דירוג');
      return;
    }
    const authorName = currentUser ? currentUser.name : 'אורח';
    onAddReview(provider.id, newReviewRating, newReviewText, authorName);
    setShowReviewForm(false);
    setNewReviewRating(0);
    setNewReviewText('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Breadcrumb / Back */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <button 
            onClick={onBack}
            className="flex items-center gap-1 text-gray-500 hover:text-primary transition text-sm font-medium"
          >
            <ChevronRight size={16} /> חזרה לתוצאות
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-8 relative overflow-hidden">
          {provider.isRecommended && (
            <div className="absolute top-0 right-0 bg-brandRed text-white px-6 py-2 rounded-bl-xl font-bold shadow-md z-10">
              מומלץ ע"י הקהילה
            </div>
          )}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-48 h-48 flex-shrink-0">
               <img src={provider.imageUrl} alt={provider.name} className="w-full h-full object-cover rounded-xl shadow-md" />
            </div>
            
            <div className="flex-grow">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                 <div>
                    <h1 className="text-3xl font-black text-dark mb-2">{provider.name}</h1>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{provider.category}</span>
                 </div>
                 <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-100">
                      <span className="font-bold text-xl text-dark">{provider.rating.toFixed(1)}</span>
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            fill={i < Math.floor(provider.rating) ? "currentColor" : "none"} 
                            className={i < Math.floor(provider.rating) ? "" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 mt-1">{provider.reviewCount} ביקורות מאומתות</span>
                 </div>
               </div>

               <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
                 {provider.description}
               </p>

               <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="text-primary" size={20} />
                    {provider.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-green-500" size={20} />
                    מאומת במערכת
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: Info, Gallery, Reviews */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery */}
            {provider.gallery.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4 text-primary border-r-4 border-primary pr-3">עבודות קודמות</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {provider.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-32 object-cover rounded-lg hover:opacity-90 cursor-pointer transition" />
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold text-primary border-r-4 border-primary pr-3">ביקורות ({provider.reviews.length})</h2>
                 <button 
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="text-primary font-bold hover:bg-primary/10 px-4 py-2 rounded-lg transition text-sm flex items-center gap-2"
                 >
                   <MessageCircle size={18} /> הוסף ביקורת
                 </button>
              </div>

              {/* Add Review Form */}
              {showReviewForm && (
                <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-200 animate-in slide-in-from-top-4">
                  <h3 className="font-bold mb-4">כתוב ביקורת חדשה</h3>
                  <form onSubmit={handleSubmitReview}>
                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">דירוג כללי</label>
                      <div className="flex gap-1 text-gray-300">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button 
                            key={star}
                            type="button"
                            onClick={() => setNewReviewRating(star)}
                            className="focus:outline-none transition hover:scale-110"
                          >
                            <Star 
                              size={28} 
                              fill={star <= newReviewRating ? "#FFD700" : "none"} 
                              className={star <= newReviewRating ? "text-accent" : "text-gray-300 hover:text-accent"} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">תוכן הביקורת</label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white text-gray-900"
                        rows={3}
                        placeholder="איך היה השירות? האם היית מרוצה?"
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                        required
                      />
                    </div>

                    {!currentUser && (
                      <p className="text-xs text-red-500 mb-2">* שים לב: אתה מפרסם כאורח. מומלץ להתחבר.</p>
                    )}

                    <div className="flex gap-2 justify-end">
                      <button 
                        type="button" 
                        onClick={() => setShowReviewForm(false)}
                        className="text-gray-500 font-medium px-4 py-2 hover:bg-gray-200 rounded-lg"
                      >
                        ביטול
                      </button>
                      <button 
                        type="submit"
                        className="bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-emerald-600"
                      >
                        פרסם ביקורת
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="space-y-6">
                {provider.reviews.length > 0 ? provider.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                          {review.author[0]}
                        </div>
                        <div>
                          <div className="font-bold text-dark">{review.author}</div>
                          <div className="text-xs text-gray-400">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{review.text}</p>
                    
                    {review.response && (
                      <div className="bg-primary/5 mr-8 mt-3 p-3 rounded-lg border-r-2 border-primary">
                        <p className="text-xs font-bold text-primary mb-1">תגובת בעל העסק:</p>
                        <p className="text-sm text-gray-600">{review.response}</p>
                      </div>
                    )}
                  </div>
                )) : (
                  <p className="text-gray-500 text-center py-4">אין ביקורות עדיין. היה הראשון לדרג!</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: Contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-dark">פרטי התקשרות</h3>
              
              <div className="space-y-4 mb-8">
                <a href={`tel:${provider.phone}`} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary group-hover:scale-110 transition">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">טלפון</div>
                    <div className="font-bold text-dark dir-ltr text-right">{provider.phone}</div>
                  </div>
                </a>

                {provider.email && (
                  <a href={`mailto:${provider.email}`} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                    <div className="bg-white p-2 rounded-full shadow-sm text-primary group-hover:scale-110 transition">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">אימייל</div>
                      <div className="font-bold text-dark">{provider.email}</div>
                    </div>
                  </a>
                )}

                 <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                    <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">זמינות</div>
                      <div className="font-bold text-dark text-sm">א'-ה': 08:00 - 18:00</div>
                    </div>
                  </div>
              </div>

              <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-opacity-90 transition shadow-lg shadow-primary/30 mb-3">
                חייג עכשיו
              </button>
              <button className="w-full bg-white border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary/5 transition">
                שלח הודעת וואטסאפ
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
