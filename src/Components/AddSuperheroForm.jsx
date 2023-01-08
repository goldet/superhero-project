import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function AddSuperheroForm({ addSuperhero }) {
  const [error, setError] = useState(null);
  const [superhero, setSuperhero] = useState({ name: "dsa ", image: " dsad" });
 

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setSuperhero((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const fetchSuperhero = async () => {
    
    try {
      const response = await axios.post(
        "http://localhost:3001/superhero",
        superhero
      );
      const newSuperhero = response.data;
      
      setSuperhero(newSuperhero);
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSuperhero();
    addSuperhero(superhero);
  };

  return (
    <div className="AddSuperheroForm">
      <h1 className="createAHeroHeader">Create A Hero</h1>

      <form className="formContainer" onSubmit={handleSubmit}>
       
        <label>
          Name: 
          <input
            className="inputText"
            type="text"
            name="name"
            value={superhero.name}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>

        <label>
          Publisher: 
          <input
            className="inputText"
            type="text"
            name="publisher"
            value={superhero.publisher}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>

        <label>
          Alter Ego: 
          <input
            className="inputText"
            type="text"
            name="alterEgo"
            value={superhero.alter_ego}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>

        <label>
          First Appearance: 
          <input
            className="inputText"
            type="text"
            name="firstAppearance"
            value={superhero.first_appearance}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>

        <label>
          Image: 
          <input
            className="inputText"
            type="text"
            name="image"
            value={superhero.image}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>

        <label>
          Characters: 
          <input
            className="inputText"
            type="text"
            name="characters"
            value={superhero.characters}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
      

        <button className="btn btn-form" type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default AddSuperheroForm;
