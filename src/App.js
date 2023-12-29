import { React, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import './assets/sass/style.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Pricing } from './Pages/Pricing';
import { Instructor } from './Pages/Instructor';
import { Contact } from './Pages/Conatact';
import { Footer } from './components/Footer';
import { Overlay } from './components/Overlay';
import { Hampop } from './components/Hampop';
import { Inquirypop } from './components/Inquirypop';
import { Cartpop } from './components/Cart';
import { CartProvider } from './components/Modelscontext';

function App() {
  const modelState = useRef(null);
  const modelInquiry = useRef(null);
  const showoverlay = useRef(null);
  const modelCart = useRef(null);
  const cartItems = useRef([]);
  const addToCart = useRef([]);

  useEffect(() => {
    document.documentElement.style.setProperty('--headerheight', window.getComputedStyle(document.querySelector("header")).height);
    document.documentElement.style.setProperty('--footerheight', window.getComputedStyle(document.querySelector("footer")).height);
  }, []);

  return (
    <Router>
      <CartProvider>
        <Header modelState={modelState} modelInquiry={modelInquiry} modelCart={modelCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing cartItems={cartItems} modelCart={modelCart} addToCart={addToCart} />} />
          <Route path="/instructors" element={<Instructor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Hampop ref={modelState} showoverlay={showoverlay} />
        <Inquirypop ref={modelInquiry} showoverlay={showoverlay} />
        <Cartpop ref={modelCart} cartItems={cartItems} showoverlay={showoverlay} />
        <Overlay ref={showoverlay} modelInquiry={modelInquiry} modelState={modelState} modelCart={modelCart} />
      </CartProvider>
    </Router>

  );
}

export default App;
