import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoMainWrapper}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
          alt="PokeDex Logo"
        />
      </div>
    </div>
  );
}

export default Logo;
