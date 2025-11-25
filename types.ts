
export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  response?: string;
  responseDate?: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  phone: string;
  email?: string;
  imageUrl: string;
  description: string;
  isRecommended: boolean;
  reviews: Review[];
  gallery: string[];
  views?: number; // For analytics
}

export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string; // Full-time, Part-time
  isNew: boolean;
  company: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  isBeginnerFriendly: boolean;
}

export enum ViewState {
  HOME = 'HOME',
  SEARCH = 'SEARCH',
  PROFILE = 'PROFILE',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  USER_PROFILE = 'USER_PROFILE',
  PROVIDER_DASHBOARD = 'PROVIDER_DASHBOARD',
  JOBS = 'JOBS',
  EDUCATION = 'EDUCATION',
  EVENTS = 'EVENTS',
  ABOUT = 'ABOUT',
  ARTICLE = 'ARTICLE'
}

export type UserRole = 'USER' | 'PROVIDER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  providerId?: string; // If role is PROVIDER, links to ServiceProvider ID
}
