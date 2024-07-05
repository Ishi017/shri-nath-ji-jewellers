import Swipeboard from "../Components/subcomponents/SwipeBoards";
import ProductRings from "../Components/subcomponents/ProductRings";
import PromisesBanner from "../Components/Assets/PromisesBanner.png";
import Testimonials from "../Components/subcomponents/Testimonials";
import MenWomenDisplay from "../Components/subcomponents/MenWomenDisplay";
import About from "../Components/AboutUs/About";
import '../Styles/Shop.css';

export default function Shop(){
    return(
        <div>
            <br/><br/>
        <Swipeboard/>
        <br/><br/>
        <hr></hr><br/><br/>
        <ProductRings/>
        <br></br><br/><br/>
        <MenWomenDisplay/>
        <br></br><br/><br/>
        <hr></hr>
        <br/><br/>
        <Testimonials/>
        <br/><br/><br/>
        <img className="PromisesBanner" src={PromisesBanner} alt="" />
        <br/><br/>
        <About/>
       
        </div>
    );
    };