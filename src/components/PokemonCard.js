import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";
import { ThreeCircles } from "react-loader-spinner";
import { usePoke } from "./context/PokeContext";

function PokemonCard({ pokeImage, pokeId, pokeExp, pokeName, pokeType }) {
  const { isLoading } = usePoke();
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const capitalizedPokeType = capitalizeFirstLetter(pokeType);
  const capitalizedPokeName = capitalizeFirstLetter(pokeName);

  return (
    <div className={`${styles.pokeWrapper} ${pokeType} ${pokeType}Bg`}>
      <Link to={`/detailed/${pokeName}`}>
        <div className={styles.imgWrapper}>
          {isLoading ? (
            <ThreeCircles
              height={70}
              width={70}
              wrapperClass="loadingImg"
              color="#333"
            />
          ) : (
            <img className={styles.image} src={pokeImage} alt="Pokemon" />
          )}
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
