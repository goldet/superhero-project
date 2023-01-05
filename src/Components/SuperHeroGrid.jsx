import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../App.css'


function SuperHeroGrid({ superheroes, setSuperheroes }) {

const [error, setError] = useState(null)


useEffect(() => {

  const fetchSuperheroes = async () => {

    try {
      const response = await 
      axios.get("http://localhost:3001/superhero")
      const superheroes = await response.json()
      

      setSuperheroes(superheroes)
    } catch(error){
      setError(error)
    }
  }
 fetchSuperheroes()
}, []);


  return (
    <div className="SuperheroGrid">
      <h1>Superhero Grid</h1>
      
    {/* {!error && <div className="Grid">
      {superheroes.map((s) => (
        <div> 
        <img src={s.image}/> 
      
     

    </div>))}
    
     
    </div>} */}

    </div>
  );
}

export default SuperHeroGrid;

/* for inside the div in the map= key={superheroes.id} className="superheroImageContainer" */