import React, { useState } from "react";
import Description from "./Description";

const Card = ({ id, name, image, type, height, weight }) => {
  const style = `thumb-container ${type}`;
  const [showToggleClick, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="number">{id}</div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <p>{type[0].toUpperCase() + type.slice(1)}</p>
        {showToggleClick === true ? (
          <Description PokemonWeight={weight} PokemonHeight={height} />
        ) : (
          <></>
        )}
        <button className="pokeinfo" onClick={() => setShow(!showToggleClick)}>
          {showToggleClick === true ? "Hide" : "Details"}
        </button>
      </div>
    </div>
  );
};

export default Card;
