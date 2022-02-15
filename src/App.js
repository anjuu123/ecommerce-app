import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={ <Product />} />
      </Routes>
    </div>
  );
}


