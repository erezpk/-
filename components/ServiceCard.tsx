import React, { useRef, useState, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';
import { ServiceProvider } from '../types';

interface ServiceCardProps {
  provider: ServiceProvider;
  onClick: () => void;
  featured?: boolean;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ provider, onClick, featured, index = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`
        bg-white rounded-xl shadow-md overflow-hidden border 
        ${featured ? 'border-accent' : 'border-gray-100'} 
        cursor-pointer flex flex-col h-full
        transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01]
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      `}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="relative h-48 bg-gray-200 overflow-hidden group">
        <img 
          src={provider.imageUrl} 
          alt={provider.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {provider.isRecommended && (
          <span className="absolute top-2 right-2 bg-brandRed text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
            ⭐ מומלץ
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-dark group-hover:text-primary transition">{provider.name}</h3>
            <p className="text-sm text-gray-500">{provider.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.floor(provider.rating) ? "currentColor" : "none"} 
                className={i < Math.floor(provider.rating) ? "" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">({provider.reviewCount})</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 mt-auto">
          <MapPin size={16} className="text-primary" />
          <span>{provider.location}</span>
        </div>

        <button className="w-full mt-2 bg-primary/10 text-primary font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
          צור קשר
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;