import React from "react";

const Pokeview = ({ pokemon }) => {
  return (
    <div className="container">
      <img src={pokemon.image} alt={pokemon.name} />
      <h2 className="name">{pokemon.name}</h2>
      <p className="id">{pokemon.id}</p>
      <p className="type">{pokemon.type}</p>
    </div>
  );
};

export default Pokeview;
