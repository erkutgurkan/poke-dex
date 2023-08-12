import { Link, useParams } from "react-router-dom";
import styles from "./PokemonCard.module.css";

function PokemonCard({ pokeImage, pokeId, pokeExp, pokeName, pokeType }) {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const capitalizedPokeType = capitalizeFirstLetter(pokeType);
  const capitalizedPokeName = capitalizeFirstLetter(pokeName);

  return (
    <div className={`${styles.pokeWrapper} ${pokeType} ${pokeType}Bg`}>
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
      <h4 className={`type-filter  ${styles.pokeStyle} ${pokeType}Card`}>
        {capitalizedPokeType}
      </h4>
    </div>
  );
}

export default PokemonCard;
