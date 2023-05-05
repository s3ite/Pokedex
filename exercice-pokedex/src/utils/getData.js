const MAX_POKEMON = 20;

export const pokemonData = async () => {
  const result = [];
  for (let pokemonId = 0; pokemonId < MAX_POKEMON; pokemonId++) {
    try {

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      const pokemon = await response.json();


      console.log(pokemon.sprites);
      let pokemonImage = pokemon["sprites"]["front_default"];

      const pokemonAbilities = pokemon.abilities
        .map((ability) => ability["ability"]["name"])
        .join(", ");


      const pokemonWeight = pokemon.weight;
      const pokemonHeight = pokemon.height;
      const pokemonName = pokemon.name;
      const pokemonType = pokemon.types
        .map((type) => type["type"]["name"])
        .join(", ");

      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
      const species = await speciesResponse.json();
      let pokemonDesc = "";
      for (let entry of species["flavor_text_entries"]) {
        if (entry["language"]["name"] === "en") {
          pokemonDesc = entry["flavor_text"].replace(/\n/g, " ");
        }
      }

      result.push({
        pokemonType,
        pokemonId,
        pokemonHeight,
        pokemonWeight,
        pokemonImage,
        pokemonAbilities,
        pokemonName,
        pokemonDesc,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return result;
};
