import Swipeboard from "../Components/subcomponents/SwipeBoards";
import ProductRings from "../Components/subcomponents/ProductRings";
import PromisesBanner from "../Components/Assets/PromisesBanner.png";
import Testimonials from "../Components/subcomponents/Testimonials";
import MenWomenDisplay from "../Components/subcomponents/MenWomenDisplay";
import About from "../Components/AboutUs/About";
import "../Styles/Shop.css";

export default function Shop() {
  return (
    <div>
      <div style={{zIndex:"1"}}>
      <Swipeboard />
      </div>
      <hr></hr>
      <ProductRings />
      <MenWomenDisplay />
      <hr></hr>
      <Testimonials />
      <img className="PromisesBanner" src={PromisesBanner} alt="" />
      <About />
    </div>
  );
}
