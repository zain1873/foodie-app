import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from './pages/home';
import ScrollToTopButton from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage'; 
import ServicePage from './pages/servicePage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/bookingPage';
import OurTeamPage from './pages/ourTeamPage';
import TestimonialsPage from './pages/testimonialsPage';
import ContactPage from './pages/contactPage';
import ProductPage from './pages/productPage';
import SignUpPage from './pages/signupPage';
import LoginPage from './pages/loginPage';
import CheckoutPage from './pages/checkoutPage';
import PlaceOrderPage from './pages/placeOrderPage';






function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/our-team" element={<OurTeamPage/>} />
        <Route path="/testimonial" element={<TestimonialsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/products/:category" element={<ProductPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/placeorder" element={<PlaceOrderPage/>} />

      </Routes>
    </div>
  );
}

export default App;
