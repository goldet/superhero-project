import React, { useState, useEffect } from "react";
import axios from "axios";

import "../App.css";

function SuperHeroGrid({ allSuperheroes, setAllSuperheroes }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchSuperheroes = async () => {
      
      try {
        const response = await axios.get("http://localhost:3001/superhero");
        const superheroes = response.data;

        setAllSuperheroes(superheroes);
        setLoading(false)
        setError(null)

      } catch (error) {

        setLoading(false)
        setError(error.message);
       
      }
    };
    fetchSuperheroes();
  }, []);

  return (
    <div className="SuperheroGrid">
      <h1 className="SuperheroGridHeading">Superheroes</h1>

      {error && <h3 className="errorMessage"> { error } 😖</h3>}

      {loading && <div className="loadingMessage">loading...🌀</div>}
      <div className="Grid">
        {allSuperheroes.map((s) => (
          <div className="superheroImageContainer" key={s.name}>
            <h3 className="superheroNames">{s.name}</h3>
            <img className="images" src={s.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperHeroGrid;

/* for inside the div in the map=   also add alt to image*/
