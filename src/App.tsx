import { BrowserRouter, Routes, Route} from "react-router-dom";




import Navbar from './Components/Navbar';
import Home from './Components/Home';
import RecipeList from './Components/RecipeList';


function App() {
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
