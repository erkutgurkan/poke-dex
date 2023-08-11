import styles from "./AllPokemon.module.css";
import PokemonCard from "./PokemonCard";
import { ThreeCircles } from "react-loader-spinner";
import LoadingText from "./LoadingText";
import { usePoke } from "./context/PokeContext";

function AllPokemon() {
  const { isLoading, sortedAndFilteredRecords } = usePoke();

  return (
    <div>
      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <ThreeCircles color="#333" />
          <LoadingText />
        </div>
      ) : (
        <div className={styles.allPokemonWrapper}>
          {sortedAndFilteredRecords.map((pokemon) => (
            <PokemonCard
              pokeImage={pokemon.sprites.front_default}
              pokeId={pokemon.id}
              pokeExp={pokemon.base_experience}
              pokeName={pokemon.name}
              pokeType={pokemon.types[0].type.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllPokemon;
