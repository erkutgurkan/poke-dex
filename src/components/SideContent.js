import { useNavigate, useParams } from "react-router-dom";
import { usePoke } from "./context/PokeContext";
import { LeftCircleOutlined } from "@ant-design/icons";
import styles from "./SideContent.module.css";

function SideContent() {
  const { sortedAndFilteredRecords } = usePoke();
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  const selectedPokemon = sortedAndFilteredRecords.find(
    (pokemon) => pokemon.name === pokemonName
  );

  return (
    <div className={styles.frontBackWrapper}>
      <button onClick={() => navigate(-1)}>
        <LeftCircleOutlined className={styles.sideContentBackIcon} />
      </button>

      <img
        className={styles.front}
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <img
        className={styles.back}
        src={selectedPokemon.sprites.back_default}
        alt={selectedPokemon.name}
      />
    </div>
  );
}

export default SideContent;
