import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import HeroSection from './Pages/HeroSection';
import ImageSection from './Pages/ImageSection';
import OurStorySection from './Pages/OurStorySection';
import SpecialMomentsSection from './Pages/SpecialMoments';
import TestimonialsSection from './Pages/OurClients';
import Footer from './Pages/Footer';
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ImageSection />
            <OurStorySection />
            <SpecialMomentsSection />
            <TestimonialsSection />
          </>
        } />
        
        <Route path="/login" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
