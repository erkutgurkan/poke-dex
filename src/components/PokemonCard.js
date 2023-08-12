import { Link, useParams } from "react-router-dom";
import styles from "./PokemonCard.module.css";

function PokemonCard({ pokeImage, pokeId, pokeExp, pokeName, pokeType }) {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const capitalizedPokeType = capitalizeFirstLetter(pokeType);
  const capitalizedPokeName = capitalizeFirstLetter(pokeName);

  return (
    <div className={styles.pokeWrapper}>
      <Link to={`/detailed/${pokeName}`}>
        <div className={styles.imgWrapper}>
          <img className={styles.image} src={pokeImage} alt="Pokemon" />
        </div>
      </Link>
      <div className={styles.pokemonNumberExp}>
        <span>#0{pokeId}</span>
        <span>EXP: {pokeExp}</span>
      </div>
      <h3 className={styles.pokeName}>{capitalizedPokeName}</h3>
      <h4
        className={`type-filter  ${styles.pokeStyle} ${
          pokeType === "fire" && "fire"
        } ${pokeType === "grass" && "grass"} ${
          pokeType === "normal" && "normal"
        } ${pokeType === "water" && "water"} ${pokeType === "bug" && "bug"} ${
          pokeType === "electric" && "electric"
        } ${pokeType === "rock" && "rock"} ${pokeType === "ghost" && "ghost"} ${
          pokeType === "poison" && "poison"
        } ${pokeType === "psychic" && "psychic"} ${
          pokeType === "ground" && "ground"
        } ${pokeType === "dragon" && "dragon"} ${
          pokeType === "fighting" && "fighting"
        } ${pokeType === "dark" && "dark"} ${pokeType === "fairy" && "fairy"} ${
          pokeType === "flying" && "flying"
        } ${pokeType === "steel" && "steel"} ${pokeType === "ice" && "ice"}`}
      >
        {capitalizedPokeType}
      </h4>
    </div>
  );
}

export default PokemonCard;
