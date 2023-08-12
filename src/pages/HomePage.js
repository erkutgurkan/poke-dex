import { FloatButton } from "antd";
import AllPokemon from "../components/AllPokemon";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Logo from "../components/Logo";

function HomePage() {
  return (
    <div className="container">
      <Logo />
      <Header />
      <Filter />
      <AllPokemon />
      <FloatButton.BackTop visibilityHeight={1080} />
    </div>
  );
}

export default HomePage;
