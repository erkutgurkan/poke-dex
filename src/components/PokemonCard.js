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
  RiMeteorFill,
  RiShieldFlashFill,
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
  pokeAnimated,
  pokeStatsSpecialAttack,
  pokeStatsSpecialDefense,
  pokeType2,
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
  const capitalizedPokeType = pokeType2.map((type) =>
    capitalizeFirstLetter(type)
  );
  const capitalizedPokeName = capitalizeFirstLetter(pokeName);
  const capitalizedPokeAbility = pokeAbility.map((ability) =>
    capitalizeFirstLetter(ability)
  );
  const capitalizedPokeMoves = pokeMoves.map((move) =>
    capitalizeFirstLetter(move)
  );
  console.log(capitalizedPokeMoves);
  const capitalizedPokeForms = capitalizeFirstLetter(pokeForms);
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
            #{pokeId < 10 ? "0" : ""}
            {pokeId}
          </span>
        </div>

        <h3 className={styles.pokeName} onClick={showDrawer}>
          {capitalizedPokeName}
        </h3>
        <div className={styles.typeWrapper}>
          <h4
            className={`type-filter  ${styles.pokeStyle} ${pokeType}Card`}
            onClick={showDrawer}
          >
            {capitalizedPokeType[0]}
          </h4>

          {pokeType2[1] && (
            <h4
              className={`type-filter  ${styles.pokeStyle} ${pokeType2[1]}Card`}
              onClick={showDrawer}
            >
              {capitalizedPokeType[1]}
            </h4>
          )}
        </div>

        <Drawer
          title={`Detailed ${capitalizedPokeName} Info`}
          placement="right"
          onClose={onClose}
          open={open}
          width={400}
          style={{
            backgroundColor: "#feffdf",
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
                <RiMeteorFill className={styles.drawerIcon} />
                {pokeStatsSpecialAttack}
              </h3>
              <h3 className={styles.pokeName}>
                <RiShieldFlashFill className={styles.drawerIcon} />
                {pokeStatsSpecialDefense}
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
                src={pokeAnimated ? pokeAnimated : pokeImage}
                alt="Pokemon"
              />
              {/* {pokeImageBack && (
                <img
                  className={styles.drawerImage}
                  src={pokeImageBack}
                  alt=""
                />
              )} */}
            </div>
          </div>
          <div className={`${styles.detailedInfoWrapper} ${pokeType}`}>
            <h2>
              ID: {pokeId < 10 ? "#0" : "#"}
              {pokeId}
            </h2>
            <h3 className={styles.pokeName}>Name: {capitalizedPokeName}</h3>
            <h3 className={styles.pokeName}>
              Types: {`${capitalizedPokeType.join(" & ")}`}
            </h3>
            <h3 className={styles.pokeName}>Exp: {!pokeExp ? "0" : pokeExp}</h3>
            <h3 className={styles.pokeName}>
              Ability: {`${capitalizedPokeAbility.join(", ")}`}
            </h3>
            <h3 className={styles.pokeName}>
              Forms: {pokeForms ? capitalizedPokeForms : "None"}
            </h3>
            <h3 className={styles.pokeName}>
              Moves: {`${capitalizedPokeMoves.slice(0, 5).join(", ")} `}
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
