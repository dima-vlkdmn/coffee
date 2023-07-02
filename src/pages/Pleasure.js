import NavBar from "../components/navBar/NavBar";
import AboutBlock from "../components/aboutBlock/AboutBlock";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import CardList from "../components/coffeeCardList/CardList";

import pleasureNav from "../components/navBar/pleasure.jpg";
import { coffees } from "../helpers/CoffeeCatalogList"; 

import cup from '../components/aboutBlock/cup.jpg';

const Pleasure = () => {
  const subtitles = [
    'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
    'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.',
    'Children me laughing we prospect answered followed. At it went is song that held help face.',
  ];

  return (
    <>
      <NavBar backgroundImg={pleasureNav} title="For your pleasure" colorlogo="white" />
      <AboutBlock imageSrc={cup} title="About our goods" subtitles={subtitles} />
      <Divider />
      <CardList coffees={coffees} /> 
      <Footer />
    </>
  );
}

export default Pleasure;