import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import Order from "./components/pages/PlaceOrder/Order";
import { Footer } from "./components/Footer/footer";
import { LoginPoppup } from "./components/LoginPopup/LoginPoppup";
import Verify from "./components/pages/Verify/Verify";
import MyOrder from "./components/pages/MyOrder/MyOrder";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPoppup setShowLogin={setShowLogin} /> : <></>}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorder" element={<MyOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
