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
        <div className="heading-banner">
          {" "}
          <h1>Women&apos;s Jewellery</h1>
        </div>
        <ItemContainer subCategory="WomensCategory" category="women" />
      </div>
    </div>
  );
}
