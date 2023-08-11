import styles from "./Filter.module.css";
import FilterList from "./FilterList";
import { usePoke } from "./context/PokeContext";

function Filter() {
  const { sortBy, handleTypeSelection, handleSelectSort } = usePoke();

  return (
    <div className={styles.filterWrapper}>
      <h1>Filter by type:</h1>
      <div className={styles.filtersWrapper}>
        <ul className={styles.filters}>
          <FilterList
            className={`normal ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("normal")}
          >
            Normal
          </FilterList>
          <FilterList
            className={`grass ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("grass")}
          >
            Grass
          </FilterList>
          <FilterList
            className={`fire ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("fire")}
          >
            Fire
          </FilterList>
          <FilterList
            className={`water ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("water")}
          >
            Water
          </FilterList>
          <FilterList
            className={`bug ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("bug")}
          >
            Bug
          </FilterList>
          <FilterList
            className={`electric ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("electric")}
          >
            Electric
          </FilterList>
          <FilterList
            className={`rock ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("rock")}
          >
            Rock
          </FilterList>
          <FilterList
            className={`ghost ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("ghost")}
          >
            Ghost
          </FilterList>
          <FilterList
            className={`poison ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("poison")}
          >
            Poison
          </FilterList>
          <FilterList
            className={`psychic ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("psychic")}
          >
            Psychic
          </FilterList>
          <FilterList
            className={`ground ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("ground")}
          >
            Ground
          </FilterList>
          <FilterList
            className={`dragon ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("dragon")}
          >
            Dragon
          </FilterList>
          <FilterList
            className={`fighting ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("fighting")}
          >
            Fighting
          </FilterList>
          <FilterList
            className={`ice ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("ice")}
          >
            Ice
          </FilterList>
          <FilterList
            className={`steel ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("steel")}
          >
            Steel
          </FilterList>
          <FilterList
            className={`dark ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("dark")}
          >
            Dark
          </FilterList>
          <FilterList
            className={`fairy ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("fairy")}
          >
            Fairy
          </FilterList>
          <FilterList
            className={`flying ${styles.typeFilter}`}
            onClick={() => handleTypeSelection("flying")}
          >
            Flying
          </FilterList>
          <FilterList
            className={`${styles.typeReset} ${styles.typeFilter}`}
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
          <option value="idAscending">By id ascending</option>
          <option value="idDescending">By id descending</option>
          <option value="expAscending">By base exp ascending</option>
          <option value="expDescending">By base exp descending</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
