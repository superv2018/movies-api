import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import Card from './components/Card'





function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => { 
      const result = await axios.get(
        'http://localhost:3001/api/data',
        );
        console.log(result.data)
        setMovies(result.data)
    };
    fetchData();
  }, [])

console.log(movies.moviesCategory)

  return (
    <div className="App">
      <h1>Hello world</h1>
       <ul>
         
       </ul>
        
    </div>
  );
}

export default App;
