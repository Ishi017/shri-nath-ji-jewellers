import ItemContainer from "../Components/SingleItem/ItemContainer.jsx";
import '../Styles/WomensCategory.css'
import womensbanner from '../Components/Assets/womensbanner.png';
import Sidebar from "../Components/Sidebar/Sidebar.jsx";

export default function WomensCategory(){
    // const womenProducts = all_product.filter(product => product.category === "women");

    return (
<div className="womenspage">


      <div className="womensbanner">
          <img src={womensbanner} alt="" />
      </div>
      <br></br>
      <hr></hr>

      <div className="womenssidebar">
          <Sidebar/>
      </div>

      <div className="womenscategory">
      
      <ItemContainer
          subCategory="WomensCategory"
          category="women"/>
     </div>

     </div>
    );
    }

  


