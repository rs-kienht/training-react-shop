import React from "react";
import "./App.css";
import Header from "./component/Header";
import ListProduct from "./component/ListProduct";
import Cart from "./component/Cart";
import Promo from "./component/Promo";
import Preview from './component/Preview'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListProduct></ListProduct>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/promo" element={<Promo></Promo>} />
          <Route path="/preview" element={<Preview></Preview>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
