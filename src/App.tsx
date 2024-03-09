import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';

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
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
