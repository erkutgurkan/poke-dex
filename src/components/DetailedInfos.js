import { useParams } from "react-router-dom";
import { usePoke } from "./context/PokeContext";
import styles from "./DetailedInfos.module.css";

function DetailedInfos() {
  const { sortedAndFilteredRecords } = usePoke();
  const { pokemonName } = useParams();
  const selectedPokemon = sortedAndFilteredRecords.find(
    (pokemon) => pokemon.name === pokemonName
  );

  return (
    <div className={styles.detailedPokeWrapper}>
      <h4>ID: #00{selectedPokemon.id}</h4>
      <h4>Name: {selectedPokemon.name}</h4>
      <h4>
        Types: {selectedPokemon.types[0].type.name}{" "}
        {selectedPokemon.types[1] ? "&" : ""}{" "}
        {selectedPokemon.types[1] ? selectedPokemon.types[1].type.name : ""}
      </h4>
      <h4>Base Exp: {selectedPokemon.base_experience}</h4>
      <h4>
        Abilities: {selectedPokemon.abilities[0].ability.name} &{" "}
        {selectedPokemon.abilities[1]
          ? selectedPokemon.abilities[1].ability.name
          : ""}
      </h4>
      <h4>
        Forms:{" "}
        {selectedPokemon.forms[0].name ? selectedPokemon.forms[0].name : ""}
      </h4>
      <h4>Height: {selectedPokemon.height / 10}m</h4>
      <h4>Weight: {selectedPokemon.weight / 10}kg</h4>
      <h4>Moves: {selectedPokemon.moves[0].move.name}</h4>
      <h4>Order: {selectedPokemon.order}</h4>
      <h4> </h4>
    </div>
  );
}

export default DetailedInfos;
