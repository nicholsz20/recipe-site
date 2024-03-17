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
import SearchPage from "./Components/SearchPage";
import SearchSpotLight from "./Components/SearchSpotLight";

function App() {
  const [showNav, setShowNav] = useState(false);
  

  const handleShowNav = () => {
    setShowNav((prevShow) => !prevShow);
  }
  //s

  return (
    <BrowserRouter>
    <Header handleShowNav={handleShowNav}/>
      <Navbar showNav={showNav} handleShowNav={handleShowNav}/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/:id" element={<SearchSpotLight />} />
            <Route path="/mystery" element={<RecipeList />} />
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
