import "./App.css";
import React, { useState, useEffect } from "react";

import { pokemonData } from "./utils/getData";
import Pokeview from "./components/Pokeview";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    pokemonData().then((data) => {
      setPokemon(data);
    });
  }, []);

  return (
    <div className="App">
      {pokemon.map((data, id) => (
        <Pokeview key={id} pokemon={data} />
      ))}
    </div>
  );
}

export default App;
