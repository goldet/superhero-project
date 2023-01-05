import React, { useState } from 'react';
import AddSuperheroForm from './Components/AddSuperheroForm';
import SuperHeroGrid from './Components/SuperHeroGrid';
import './App.css';


function App() {
   const [isSuperheroGrid, setIsSuperheroGrid] = useState (true)
   const [superheroes, setSuperheroes] = useState(null)


  return (
    <div className="App">
    <div className="header">Superhero Display</div>

   <button onClick={() => setIsSuperheroGrid(true)}>Superheroes</button>  
   <button onClick={() => setIsSuperheroGrid(false)}>Add A Superhero</button>  
   {isSuperheroGrid && <SuperHeroGrid superheroes={superheroes}/>}
   {!isSuperheroGrid && <AddSuperheroForm />}


    </div>
  );
}

export default App;
