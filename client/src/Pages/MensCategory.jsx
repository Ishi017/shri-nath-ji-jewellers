import ItemContainer from "../Components/SingleItem/ItemContainer.jsx";
import "../Styles/MensCategory.css";
import mensbanner from "../Components/Assets/mensbanner.png";
import { FaChevronRight } from "react-icons/fa6";

export default function MensCategory() {
    
  return (
    <div className="menspage">
      <div className="mensbanner">
        <img src={mensbanner} alt="" />
      </div>
      <br></br>

      {/* <div className="menssidebar">
        <Sidebar />
      </div> */}

      <div className="menscategory">
        <ItemContainer subCategory="MensCategory" category="men" />
      </div>
    </div>
  );
}
