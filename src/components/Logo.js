import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoMainWrapper}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
          alt="PokeDex Logo"
        />
      </div>
    </div>
  );
}

export default Logo;
