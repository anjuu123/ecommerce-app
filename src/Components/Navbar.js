import React from "react";
import {Route, Link, Routes} from "react-router-dom"
import Cart from "./Cart";
import Category from "./Category";
import Home from "./Home";

export default function Navbar() {
  return (
    <div>
        <h1>A & A Collection</h1>
    <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/categories'>Category</Link>
        <Link to = '/cart'>Cart</Link>
    </nav>

    <main>
        <Routes>
            <Route path = '/' element={<Home />}/>
            <Route path = '/categories' element={<Category />}/>
            <Route path = '/cart' element={<Cart />}/>

        </Routes>
    </main>
    </div>
  );
}
