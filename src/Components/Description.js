import React from "react";

const Description = ({ PokemonHeight, PokemonWeight }) => {
  return (
    <div className="desc">
      <p>
        <b>Height: {PokemonHeight * 10} cm.</b>
      </p>

      <p>
        <b>Weight: {PokemonWeight * 0.1} kg</b>
      </p>
    </div>
  );
};

export default Description;
