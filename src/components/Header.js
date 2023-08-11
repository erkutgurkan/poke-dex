import styles from "./Header.module.css";
import { usePoke } from "./context/PokeContext";

function Header() {
  const { searchQuery, handleSearch } = usePoke();
  return (
    <div className={styles.header}>
      <input
        value={searchQuery}
        onChange={handleSearch}
        type="text"
        className={`${styles.searchInput} ${styles.insideInput}`}
        placeholder="Search Pokemon"
      />
      <p className={styles.inputTextDescription}>
        Use this input to search for any pokemon. In an instant.
      </p>
    </div>
  );
}

export default Header;
