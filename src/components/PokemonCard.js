import { ThreeCircles } from "react-loader-spinner";
import { usePoke } from "./context/PokeContext";
import { Drawer } from "antd";
import { useState } from "react";
import styles from "./PokemonCard.module.css";
import {
  RiShieldFill,
  RiSwordFill,
  RiHeart3Fill,
  RiSpeedFill,
} from "react-icons/ri";
function PokemonCard({
  pokeImage,
  pokeId,
  pokeExp,
  pokeName,
  pokeType,
  pokeImageBack,
  pokeAbility,
  pokeForms,
  pokeHeight,
  pokeWeight,
  pokeMoves,
  pokeOrder,
  pokeStatsHp,
  pokeStatsAttack,
  pokeStatsDefense,
  pokeStatsSpeed,
}) {
  const [open, setOpen] = useState(false);
  const { isLoading } = usePoke();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const capitalizedPokeType = capitalizeFirstLetter(pokeType);
  const capitalizedPokeName = capitalizeFirstLetter(pokeName);
  const capitalizedPokeAbility = capitalizeFirstLetter(pokeAbility);
  const capitalizedPokeForms = capitalizeFirstLetter(pokeForms);
  const capitalizedPokeMoves = capitalizeFirstLetter(pokeMoves);
  return (
    <>
      <div className={`${styles.pokeWrapper} ${pokeType} ${pokeType}Bg `}>
        <div className={styles.imgWrapper}>
          {isLoading ? (
            <ThreeCircles
              height={70}
              width={70}
              wrapperClass="loadingImg"
              color="#333"
            />
          ) : (
            <img
              className={styles.image}
              src={pokeImage}
              alt="Pokemon"
              onClick={showDrawer}
            />
          )}
        </div>

        <div className={styles.pokemonNumberExp} onClick={showDrawer}>
          <span>
            {pokeId < 10 ? "#0" : "#"}
            {pokeId}
          </span>
          <span>EXP: {!pokeExp ? "0" : pokeExp}</span>
        </div>
        <h3 className={styles.pokeName} onClick={showDrawer}>
          {capitalizedPokeName}
        </h3>
        <h4
          className={`type-filter  ${styles.pokeStyle} ${pokeType}Card`}
          onClick={showDrawer}
        >
          {capitalizedPokeType}
        </h4>

        <Drawer
          title="Detailed Pokemon Info"
          placement="right"
          onClose={onClose}
          open={open}
          style={{
            backgroundColor: "#e0ffcd",
            fontFamily: "VT323, monospace",
            fontSize: "1.2em",
          }}
        >
          <div className={`${styles.drawerBackAndFrontImages} ${pokeType}`}>
            <div className={styles.statsWrapper}>
              <h3 className={styles.pokeName}>
                <RiHeart3Fill className={styles.drawerIcon} /> {pokeStatsHp}
              </h3>
              <h3 className={styles.pokeName}>
                <RiSwordFill className={styles.drawerIcon} />
                {pokeStatsAttack}
              </h3>
              <h3 className={styles.pokeName}>
                <RiShieldFill className={styles.drawerIcon} />
                {pokeStatsDefense}
              </h3>
              <h3 className={styles.pokeName}>
                <RiSpeedFill className={styles.drawerIcon} />
                {pokeStatsSpeed}
              </h3>
            </div>
            <div className={styles.drawerBackAndFrontImagesFlex}>
              <img
                className={`${styles.drawerImage} ${
                  !pokeImageBack && styles.noBack
                }`}
                src={pokeImage}
                alt="Pokemon"
              />
              {pokeImageBack && (
                <img
                  className={styles.drawerImage}
                  src={pokeImageBack}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className={`${styles.detailedInfoWrapper} ${pokeType}`}>
            <h2>
              ID: {pokeId < 10 ? "#0" : "#"}
              {pokeId}
            </h2>
            <h3 className={styles.pokeName}>Name: {capitalizedPokeName}</h3>
            <h3 className={styles.pokeName}>Types: {capitalizedPokeType}</h3>
            <h3 className={styles.pokeName}>Exp: {!pokeExp ? "0" : pokeExp}</h3>
            <h3 className={styles.pokeName}>
              Ability: {pokeAbility ? capitalizedPokeAbility : "None"}
            </h3>
            <h3 className={styles.pokeName}>
              Forms: {pokeForms ? capitalizedPokeForms : "None"}
            </h3>
            <h3 className={styles.pokeName}>
              Moves: {pokeMoves ? capitalizedPokeMoves : "None"}
            </h3>
            <h3 className={styles.pokeName}>Height: {pokeHeight / 10}m</h3>
            <h3 className={styles.pokeName}>Weight: {pokeWeight / 10}m</h3>
            <h3 className={styles.pokeName}>Order: {pokeOrder}</h3>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default PokemonCard;
