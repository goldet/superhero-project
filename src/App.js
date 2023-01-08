import React, { useState } from "react";
import AddSuperheroForm from "./Components/AddSuperheroForm";
import SuperHeroGrid from "./Components/SuperHeroGrid";
import "./App.css";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isSuperheroGrid, setIsSuperheroGrid] = useState(true);
  const [allSuperheroes, setAllSuperheroes] = useState([]);

  const addSuperhero = (superhero) => {
    setAllSuperheroes((state) => {
      return [...state, superhero];
    });
  };

  return (
    <div className="App">
      <div className="header"></div> {/* header? */}
      <div className="buttonContainer">
        <button className="btn" onClick={() => setIsSuperheroGrid(true)}>
          Superheroes
        </button>
        <button className="btn" onClick={() => setIsSuperheroGrid(false)}>
          Add A Superhero
        </button>
      </div>

      {isSuperheroGrid && (
        <SuperHeroGrid
          allSuperheroes={allSuperheroes}
          setAllSuperheroes={setAllSuperheroes}
        />
      )}
      {!isSuperheroGrid && <AddSuperheroForm addSuperhero={addSuperhero} />}
    </div>
  );
}

export default App;
