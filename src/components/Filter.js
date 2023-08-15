import styles from "./Filter.module.css";
import FilterList from "./FilterList";
import { usePoke } from "./context/PokeContext";

function Filter() {
  const { sortBy, handleTypeSelection, handleSelectSort, selectedType } =
    usePoke();

  return (
    <div className={styles.filterWrapper}>
      <h1 className={styles.filterText}>Filter by type:</h1>
      <div className={styles.filtersWrapper}>
        <ul className={styles.filters}>
          <FilterList
            className={`normalCard ${styles.typeFilter} ${
              selectedType === "normal" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("normal")}
          >
            Normal
          </FilterList>
          <FilterList
            className={`grassCard ${styles.typeFilter} ${
              selectedType === "grass" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("grass")}
          >
            Grass
          </FilterList>
          <FilterList
            className={`fireCard ${styles.typeFilter} ${
              selectedType === "fire" ? styles.selectedType : ""
            } `}
            onClick={() => handleTypeSelection("fire")}
          >
            Fire
          </FilterList>
          <FilterList
            className={`waterCard ${styles.typeFilter} ${
              selectedType === "water" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("water")}
          >
            Water
          </FilterList>
          <FilterList
            className={`bugCard ${styles.typeFilter} ${
              selectedType === "bug" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("bug")}
          >
            Bug
          </FilterList>
          <FilterList
            className={`electricCard ${styles.typeFilter} ${
              selectedType === "electric" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("electric")}
          >
            Electric
          </FilterList>
          <FilterList
            className={`rockCard ${styles.typeFilter} ${
              selectedType === "rock" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("rock")}
          >
            Rock
          </FilterList>
          <FilterList
            className={`ghostCard ${styles.typeFilter} ${
              selectedType === "ghost" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("ghost")}
          >
            Ghost
          </FilterList>
          <FilterList
            className={`poisonCard ${styles.typeFilter} ${
              selectedType === "poison" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("poison")}
          >
            Poison
          </FilterList>
          <FilterList
            className={`psychicCard ${styles.typeFilter} ${
              selectedType === "psychic" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("psychic")}
          >
            Psychic
          </FilterList>
          <FilterList
            className={`groundCard ${styles.typeFilter} ${
              selectedType === "ground" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("ground")}
          >
            Ground
          </FilterList>
          <FilterList
            className={`dragonCard ${styles.typeFilter} ${
              selectedType === "dragon" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("dragon")}
          >
            Dragon
          </FilterList>
          <FilterList
            className={`fightingCard ${styles.typeFilter} ${
              selectedType === "fighting" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("fighting")}
          >
            Fighting
          </FilterList>
          <FilterList
            className={`iceCard ${styles.typeFilter} ${
              selectedType === "ice" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("ice")}
          >
            Ice
          </FilterList>
          <FilterList
            className={`steelCard ${styles.typeFilter} ${
              selectedType === "steel" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("steel")}
          >
            Steel
          </FilterList>
          <FilterList
            className={`darkCard ${styles.typeFilter} ${
              selectedType === "dark" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("dark")}
          >
            Dark
          </FilterList>
          <FilterList
            className={`fairyCard ${styles.typeFilter} ${
              selectedType === "fairy" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("fairy")}
          >
            Fairy
          </FilterList>
          <FilterList
            className={`flyingCard ${styles.typeFilter} ${
              selectedType === "flying" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("flying")}
          >
            Flying
          </FilterList>
          <FilterList
            className={`${styles.typeReset} ${styles.typeFilter} ${
              selectedType === "reset" ? styles.selectedType : ""
            }`}
            onClick={() => handleTypeSelection("")}
          >
            Reset
          </FilterList>
        </ul>
        <select
          className={`${styles.select} ${styles.insideSelect}`}
          onChange={handleSelectSort}
          value={sortBy}
        >
          <option value="idAscending" className={styles.option}>
            By id ascending
          </option>
          <option value="idDescending" className={styles.option}>
            By id descending
          </option>
          <option value="expAscending" className={styles.option}>
            By base exp ascending
          </option>
          <option value="expDescending" className={styles.option}>
            By base exp descending
          </option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
