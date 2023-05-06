import React from "react";
import "../css/pokeview.css";

const Pokeview = ({ pokemon, onClick }) => {
  return (
    <div className="container-view" onClick={onClick}>
      <div className="image-container-view">
        <img src={pokemon.pokemonImage} alt={pokemon.pokemonName} />
      </div>
      <div className="info-container-view">
        <h2 className="name">{pokemon.pokemonName}</h2>
        <p className="type">{pokemon.pokemonType}</p>
      </div>
      <div className="id-container-view">
        <p className="id">{pokemon.pokemonId}</p>
      </div>
    </div>
  );
};

export default Pokeview;
