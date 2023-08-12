import styles from "./Logo.module.css";
import logo from "../images/pokedex.png";
function Logo() {
  return (
    <div className={styles.logoMainWrapper}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Pokedex Logo" />
      </div>
    </div>
  );
}

export default Logo;
