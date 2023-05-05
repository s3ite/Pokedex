
Pokeview App
This is a React app that displays information on 20 different Pokemon, including their image, name, ID, type, weight, height, abilities, and a short description.

The app uses the PokeAPI to fetch the Pokemon data and displays it using the Pokeview component.

Components
Pokeview
This component is responsible for rendering the information for a single Pokemon. It receives a pokemon object as a prop, which contains all the relevant data for that Pokemon.

The Pokeview component is defined in ./components/Pokeview.js.

App
This is the main component of the app, which renders the Pokeview components for all 20 Pokemon. It fetches the data using the pokemonData function from ./utils/getData.js and stores it in state using the useState hook.

The App component is defined in ./App.js.

Utils
getData
This module exports a single function, pokemonData, which fetches data for 20 different Pokemon from the PokeAPI and returns an array of objects containing the relevant data.

The pokemonData function is defined in ./utils/getData.js.


There is a try catch error unsolve