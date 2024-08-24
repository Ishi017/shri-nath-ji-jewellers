import ItemContainer from "../Components/SingleItem/ItemContainer.jsx";
import "../Styles/ShopbyCategory.css";
import byCategoryBanner from "../Components/Assets/byCategoryBanner.png";
import { useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

export default function WomensCategory() {
  const { item } = useParams();

  return (
    <div className="shopbycategory-page">
      <div className="bycategory-banner">
        <img src={byCategoryBanner} alt="" />
      </div>
      <br></br>
      <hr></hr>

      <div className="shopbycategory-items">
        <div className="heading-banner">
          {" "}
          <h1>Shop by Category</h1>
          <FaChevronRight className="chevron-right" />
          <h1>{item}</h1>
        </div>

        <ItemContainer item={item} />
      </div>
    </div>
  );
}


