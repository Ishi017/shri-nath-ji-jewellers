import  all_product  from "../Components/Assets/AllProducts.js";
import SingleItem from "../Components/SingleItem/SingleItem.jsx";
import ItemContainer from "../Components/SingleItem/ItemContainer.jsx";
import '../Styles/WomensCategory.css'

export default function WomensCategory(){
    // const womenProducts = all_product.filter(product => product.category === "women");

    return (
<div className="womenspage">


      <div className="womensbanner"></div>

      <div className="womenssidebar"></div>

      <div className="womenscategory">
      
      <ItemContainer
          subCategory="WomensCategory"
          category="women"/>
     </div>

     </div>
    );
    }

  


