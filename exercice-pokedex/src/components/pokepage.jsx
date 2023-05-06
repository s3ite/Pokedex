import React from "react";
import "../css/pokepage.css";
const PokePage = ({ pokemon, onClick }) => {
    return (
      <div className="container" onClick={onClick}>
        <div className="image-container">
          <img src={pokemon.pokemonImage} alt={pokemon.pokemonName} />
        </div>
  
        <div className="info-container">
          <h2 className="name">{pokemon.pokemonName}</h2>
          <p className="type">{pokemon.pokemonType}</p>
          <p className="id">ID: {pokemon.pokemonId}</p>
          <p className="weight">Weight: {pokemon.pokemonWeight}</p>
          <p className="height">Height: {pokemon.pokemonHeight}</p>
  
          <p className="abilities">Abilities: {pokemon.pokemonAbilities}</p>
          <p className="description">Description: {pokemon.pokemonDesc}</p>
        </div>
      </div>
    );
  };
  
  export default PokePage;