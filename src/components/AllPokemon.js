import styles from "./AllPokemon.module.css";
import PokemonCard from "./PokemonCard";
import { ThreeCircles } from "react-loader-spinner";
import LoadingText from "./LoadingText";
import { usePoke } from "./context/PokeContext";

function AllPokemon() {
  const { isLoading, sortedAndFilteredPokemon, filteredPokemon } = usePoke();

  return (
    <div>
      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <ThreeCircles color="#333" />
          <LoadingText />
        </div>
      ) : (
        <div className={styles.allPokemonWrapper}>
          {sortedAndFilteredPokemon.map((pokemon) => (
            <PokemonCard
              pokeImage={pokemon.sprites.front_default}
              pokeImageBack={pokemon.sprites.back_default}
              pokeId={pokemon.id}
              pokeExp={pokemon.base_experience}
              pokeName={pokemon.name}
              pokeType={pokemon.types[0].type.name}
              pokeAbility={pokemon.abilities[0].ability.name}
              pokeForms={pokemon.forms[0].name}
              pokeHeight={pokemon.height}
              pokeWeight={pokemon.weight}
              pokeMoves={pokemon.moves[0].move.name}
              pokeOrder={pokemon.order}
              pokeStatsHp={pokemon.stats[0].base_stat}
              pokeStatsAttack={pokemon.stats[1].base_stat}
              pokeStatsDefense={pokemon.stats[2].base_stat}
              pokeStatsSpeed={pokemon.stats[5].base_stat}
              key={pokemon.id}
              pokeAnimated={
                pokemon["sprites"]["versions"]["generation-v"]["black-white"][
                  "animated"
                ].front_default
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllPokemon;
