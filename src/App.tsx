import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";


import axios from 'axios';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import RecipeList from './Components/RecipeList';

const KEY = '24ba6bf883a944a09e1f169a549f2c10'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${KEY}`);
        setData(response.data);
        setLoading(false)
        
      }catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData();
    console.log(data)


  }, [])


  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/recipe_list" element={<RecipeList />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
