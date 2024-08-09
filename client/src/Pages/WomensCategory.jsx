import ItemContainer from "../Components/SingleItem/ItemContainer.jsx";
import "../Styles/WomensCategory.css";
import womensbanner from "../Components/Assets/womensbanner.png";

export default function WomensCategory() {
  return (
    <div className="womenspage">
      <div className="womensbanner">
        <img src={womensbanner} alt="" />
      </div>
      <br></br>
      <hr></hr>

      <div className="womenscategory">
        <ItemContainer subCategory="WomensCategory" category="women" />
      </div>
    </div>
  );
}
