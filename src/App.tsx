import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext"; // Adjust the import path as needed
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSelling from './components/BestSelling';
import Footer from './components/Footer';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Reservations from './components/Reservations';
import Specials from './components/Specials';
import Events from './components/Events';
import Contact from './components/Contact';
import './App.css';
import Cart from './components/Cart';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="font-sans flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero
                    title="Welcome to FazFood"
                    subtitle="Experience the finest dining with our delicious and authentic dishes."
                    primaryButtonText="Explore Menu"
                    primaryButtonLink="/menu"
                    secondaryButtonText="Book a Table"
                    secondaryButtonLink="/reservations"
                    backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <BestSelling />
                </>
              }
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:filter" element={<Menu />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}