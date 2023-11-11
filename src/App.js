import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./About";
import Contact from "./Contact";
import RecipeSearch from "./RecipeSearch";
import EachRecipe from "./EachRecipe";

function App() {
  return (
    <Router>
    <nav>
      <Link to="/about" className='link'>About</Link>
      <Link to="/" className='link'>Recipes</Link>
      <Link to="/contact" className='link'>Contact</Link>
    </nav>

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<RecipeSearch />} />
      <Route path="/RecipeSearch/:label" element={<EachRecipe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  
  );
}

export default App;
