import React, { useEffect, useState } from "react";
import Card from "./Components/Card";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokedex App</h1>

      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, index) => (
            <Card
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>
          Load More...
        </button>
      </div>
    </div>
  );
}

export default App;
