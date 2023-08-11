import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoMainWrapper}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src="./pokedex.png" alt="PokeDex Logo" />
      </div>
    </div>
  );
}

export default Logo;
