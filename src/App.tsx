import { BrowserRouter, Routes, Route} from "react-router-dom";


import Navbar from './Components/Navbar';
import Home from './Components/Home';
import RecipeList from './Components/RecipeList';
import Header from "./Components/Header";
import { useState } from "react";
import Category from "./Components/Category";

import Chatbot from './Components/Chatbot';
import RecipePage from "./Components/ReicpePage";
import RecipeSpotLight from "./Components/RecipeSpotLight";

function App() {
  const [showNav, setShowNav] = useState(false);
  

  const handleShowNav = () => {
    setShowNav((prevShow) => !prevShow);
  }

  return (
    <BrowserRouter>
    <Header handleShowNav={handleShowNav}/>
      <Navbar showNav={showNav} handleShowNav={handleShowNav}/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/recipe_list" element={<RecipeList />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/categories/:mealType" element={<RecipePage />} />
            <Route path="/categories/:mealType/:id" element={<RecipeSpotLight />} />
          </Route>
        </Routes>
        <Chatbot />
    </BrowserRouter>
  );
}

export default App;
