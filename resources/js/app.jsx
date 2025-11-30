import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import ReactDOM from 'react-dom/client';
import AdminPanel from './pages/AdminPanel';
import { useState } from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage'
import TripPlannerPage from './pages/TripPlannerPage';
import Navbar from './components/Navbar';
import Destinations from './pages/Destinations';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import MyTrips from './pages/Mytrips';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />;
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} />;
      case 'forget':
        return <Forgetpasswordpage onNavigate={setCurrentPage} />;
      case 'admin':
        return <AdminPanel onNavigate={setCurrentPage} />;
      case 'tripplanner':
         if (!isLoggedIn) return <LoginPage onNavigate={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />;
        return <TripPlannerPage onNavigate={setCurrentPage} />  
      case 'about':
        return <About onNavigate={setCurrentPage} />  
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />  
      case 'destinations':
        return <Destinations onNavigate={setCurrentPage} />  
      case 'mytrips':
        return <MyTrips onNavigate={setCurrentPage} />  
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Navbar onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

