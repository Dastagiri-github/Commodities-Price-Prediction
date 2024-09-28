import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'; // Import the Header component
import CommodityTable from './components/Header/CommodityTable/CommodityTable'; // Import the CommodityTable component
import PredictionPage from './components/PredictionPage/PredictionPage'; // Import PredictionPage
import PredictDashboard from './components/predictpage/PredictDashboard'; // Import PredictDashboard

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Header /> {/* Include Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/predict" element={<CommodityTable />} /> {/* Route for CommodityTable */}
          <Route path="/prediction" element={<PredictionPage />} /> {/* Route for PredictionPage */}
          <Route path="/predictdashboard" element={<PredictDashboard />} /> {/* Route for PredictDashboard */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
