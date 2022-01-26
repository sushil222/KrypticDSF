import Header from "./Header/Header";
import Slider from "./section/Slider";
import Match from "./MatchContainer/Match";
import Footer from "./footer/Footer";
import GamesSteps from './gamesSteps/GamesSteps';

function LandingPage() {
  return (
    <>
      <Header />
      <Slider />
      <Match />
      <GamesSteps />
      <Footer />
    </>
  )
}

export default LandingPage;
