import "./App.css";
import React, { useState, useEffect } from "react";

import { pokemonData } from "./utils/getData";
import Pokeview from "./components/Pokeview";
import SearchBar from "./components/searchbar";
import PokePage from "./components/pokepage";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [viewPage, setViewPage] = useState(false);
  const [pokemonView, setPokemonView] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await pokemonData();

      setPokemon(data);
    };
    fetchData();
  }, []);

  const handleSearch = (value) => {
    const res = [];
    let find = pokemon.filter((item) => {
      return item.pokemonName === value.toLowerCase();
    });

    if (find.length > 0) {
      res.push(...find);
      setPokemon([...res]);
      return;
    }

    find = pokemon.filter((item) => {
      return item.pokemonType.includes(value.toLowerCase());
    });

    if (find.length > 0) {
      res.push(...find);
      setPokemon([...res]);
      return;
    }

    setPokemon([...pokemon]);
  };

  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  const handlerFilter = (value) => {
    if (value === "name") {
      const sortArray = pokemon.sort((a, b) => {
        return compare(a.pokemonName, b.pokemonName);
      });
      setPokemon([...sortArray]);
    } else if (value === "id") {
      const sortArray = pokemon.sort((a, b) => {
        return compare(a.pokemonId, b.pokemonId);
      });
      setPokemon([...sortArray]);
    }
  };

  const handleViewPokePage = (data) => {
    setPokemonView(data);
    setViewPage(true);
  };

  return (
    <div className="App">
      <div className="searchbar">
        <SearchBar handleSearch={handleSearch} />
      </div>

      <div className="filter">
        <select onChange={(e) => handlerFilter(e.target.value)}>
          <option value="id">Id</option>
          <option value="name">Name</option>
        </select>
      </div>

      {viewPage ? (
        <PokePage pokemon={pokemonView} onClick={() => setViewPage(false)} />
      ) : (
        <div className="pokeview">
          {pokemon.map((data, id) => (
            <Pokeview
              key={id}
              pokemon={data}
              onClick={() => handleViewPokePage(data)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
