import NavBar from "../components/navBar/NavBar";
import AboutBlock from "../components/aboutBlock/AboutBlock";
import Footer from "../components/footer/Footer";
import Divider from "../components/divider/Divider";
import SearchPanel from "../components/search/Search";

import coffeeNav from "../components/navBar/nav_bar.jpg"
import girl from '../components/aboutBlock/girl.jpg';

const Catalog = () => {

  const subtitles = [
    'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
    'Afraid at highly months do things on at. Situation recommend objection do intention so questions.',
    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.',
    'Children me laughing we prospect answered followed. At it went is song that held help face.',
  ];
    return (
		<>
        <NavBar backgroundImg={coffeeNav} title="Our Coffee" colorlogo="white" />
        <AboutBlock imageSrc={girl} title="About our goods" subtitles={subtitles} />
        <Divider />
        <SearchPanel/>
        <Footer />
		</>
	);
}

export default Catalog;