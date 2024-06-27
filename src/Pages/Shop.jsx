import Swipeboard from "../Components/subcomponents/SwipeBoards";
import ProductRings from "../Components/subcomponents/ProductRings";
import PromisesBanner from "../Components/Assets/PromisesBanner.png";
import Testimonials from "../Components/subcomponents/Testimonials";

export default function Shop(){
    return(
        <div>
        <Swipeboard/>
        <hr></hr>
        <ProductRings/>
        <br></br>
        <Testimonials/>
        <br></br>
        <div>
            <br></br>
            <img className="PromisesBanner" src={PromisesBanner} alt="" />
        </div>
        </div>
    );
    };