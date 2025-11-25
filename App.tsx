
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import ProviderDashboard from './pages/ProviderDashboard';
import JobsPage from './pages/JobsPage';
import EducationPage from './pages/EducationPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import { ViewState, ServiceProvider, User, UserRole, Review, Article } from './types';
import { SERVICE_PROVIDERS } from './constants';
import { analytics } from './firebase';
import { logEvent } from "firebase/analytics";

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [providers, setProviders] = useState<ServiceProvider[]>(SERVICE_PROVIDERS);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    logEvent(analytics, 'page_view', { page_title: view });
  };

  const handleSelectProvider = (provider: ServiceProvider) => {
    setSelectedProviderId(provider.id);
    setCurrentView(ViewState.PROFILE);
    window.scrollTo(0, 0);
    logEvent(analytics, 'view_item', { item_id: provider.id, item_name: provider.name, item_category: 'provider' });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentView(ViewState.ARTICLE);
    window.scrollTo(0, 0);
    logEvent(analytics, 'select_content', { content_type: 'article', item_id: article.id });
  };

  const handleBackFromProfile = () => {
    setCurrentView(ViewState.SEARCH);
    setSelectedProviderId(null);
  };

  const handleBackToHome = () => {
    setCurrentView(ViewState.HOME);
    setSelectedArticle(null);
  };

  // Auth Functions
  const handleLogin = (email: string, name: string) => {
    // Mock login logic
    const user: User = {
      id: 'user-123',
      name: name,
      email: email,
      role: 'USER' // Default for simple login
    };
    
    // Check if this is our mock provider (David)
    if (email.includes('david')) {
      user.role = 'PROVIDER';
      user.providerId = '1'; // Links to David Mehret
    }

    setCurrentUser(user);
    handleNavigate(ViewState.HOME);
    logEvent(analytics, 'login', { method: 'mock' });
  };

  const handleRegister = (name: string, email: string, role: UserRole) => {
    // Mock register
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role
    };

    if (role === 'PROVIDER') {
      // Create a mock provider entry for them
      const newProvider: ServiceProvider = {
        id: `provider-${Date.now()}`,
        name: name,
        category: 'כללי',
        rating: 0,
        reviewCount: 0,
        location: 'ישראל',
        phone: '',
        imageUrl: 'https://picsum.photos/400/400',
        description: 'בעל מקצוע חדש',
        isRecommended: false,
        reviews: [],
        gallery: []
      };
      setProviders([...providers, newProvider]);
      newUser.providerId = newProvider.id;
    }

    setCurrentUser(newUser);
    handleNavigate(ViewState.HOME);
    logEvent(analytics, 'sign_up', { method: 'mock' });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    handleNavigate(ViewState.HOME);
  };

  const handleUpdateUser = (updatedUser: User) => {
    setCurrentUser(updatedUser);
  };

  // Provider Data Logic
  const handleUpdateProvider = (updatedProvider: ServiceProvider) => {
    setProviders(providers.map(p => p.id === updatedProvider.id ? updatedProvider : p));
  };

  const handleAddReview = (providerId: string, rating: number, text: string, author: string) => {
    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: author,
      rating,
      text,
      date: new Date().toLocaleDateString('he-IL')
    };

    const updatedProviders = providers.map(p => {
      if (p.id === providerId) {
        const newReviews = [newReview, ...p.reviews];
        const newRating = (p.rating * p.reviewCount + rating) / (p.reviewCount + 1);
        return {
          ...p,
          reviews: newReviews,
          rating: newRating,
          reviewCount: p.reviewCount + 1
        };
      }
      return p;
    });
    setProviders(updatedProviders);
  };

  const handleReplyToReview = (providerId: string, reviewId: string, response: string) => {
    const updatedProviders = providers.map(p => {
      if (p.id === providerId) {
        const updatedReviews = p.reviews.map(r => {
          if (r.id === reviewId) {
            return {
              ...r,
              response,
              responseDate: new Date().toLocaleDateString('he-IL')
            };
          }
          return r;
        });
        return { ...p, reviews: updatedReviews };
      }
      return p;
    });
    setProviders(updatedProviders);
  };

  // Derived state for current provider view
  const selectedProvider = providers.find(p => p.id === selectedProviderId);

  // Router Logic
  let content;
  switch (currentView) {
    case ViewState.HOME:
      content = <Home onNavigate={handleNavigate} onSelectProvider={handleSelectProvider} onSelectArticle={handleSelectArticle} />;
      break;
    case ViewState.SEARCH:
      content = <SearchPage onSelectProvider={handleSelectProvider} />;
      break;
    case ViewState.PROFILE:
      if (selectedProvider) {
        content = (
          <ProfilePage 
            provider={selectedProvider} 
            onBack={handleBackFromProfile} 
            currentUser={currentUser}
            onAddReview={handleAddReview}
          />
        );
      } else {
        content = <SearchPage onSelectProvider={handleSelectProvider} />;
      }
      break;
    case ViewState.ARTICLE:
        if (selectedArticle) {
            content = <ArticlePage article={selectedArticle} onBack={handleBackToHome} />;
        } else {
            content = <Home onNavigate={handleNavigate} onSelectProvider={handleSelectProvider} onSelectArticle={handleSelectArticle} />;
        }
        break;
    case ViewState.JOBS:
      content = <JobsPage />;
      break;
    case ViewState.EDUCATION:
      content = <EducationPage />;
      break;
    case ViewState.EVENTS:
      content = <EventsPage />;
      break;
    case ViewState.ABOUT:
      content = <AboutPage />;
      break;
    case ViewState.LOGIN:
      content = <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      break;
    case ViewState.REGISTER:
      content = <RegisterPage onNavigate={handleNavigate} onRegister={handleRegister} />;
      break;
    case ViewState.USER_PROFILE:
      if (currentUser) {
        content = <UserProfilePage currentUser={currentUser} onUpdateUser={handleUpdateUser} />;
      } else {
        content = <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      }
      break;
    case ViewState.PROVIDER_DASHBOARD:
      if (currentUser && currentUser.role === 'PROVIDER' && currentUser.providerId) {
        const myProvider = providers.find(p => p.id === currentUser.providerId);
        if (myProvider) {
          content = (
            <ProviderDashboard 
              provider={myProvider} 
              onUpdateProvider={handleUpdateProvider}
              onReplyToReview={handleReplyToReview}
            />
          );
        } else {
          content = <div>Error: Provider profile not found</div>;
        }
      } else {
        content = <Home onNavigate={handleNavigate} onSelectProvider={handleSelectProvider} onSelectArticle={handleSelectArticle} />;
      }
      break;
    default:
      content = <Home onNavigate={handleNavigate} onSelectProvider={handleSelectProvider} onSelectArticle={handleSelectArticle} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        onNavigate={handleNavigate} 
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      <div className="flex-grow">
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default App;
