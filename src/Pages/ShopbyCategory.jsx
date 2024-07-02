import ItemContainer from "../Components/SingleItem/ItemContainer.jsx";
import '../Styles/ShopbyCategory.css'
import byCategoryBanner from '../Components/Assets/byCategoryBanner.png';
import { useParams } from 'react-router-dom';
import Sidebar from "../Components/Sidebar/Sidebar.jsx";

export default function WomensCategory(){
    const { item } = useParams();
 
   return (
<div className="shopbycategory-page">


      <div className="bycategory-banner">
          <img src={byCategoryBanner} alt="" />
      </div>
      <br></br>
      <hr></hr>

      <div className="shopbycategory-sidebar">
          <Sidebar/>
      </div>

      <div className="shopbycategory-items">
          <h1>{item}</h1>
      
      <ItemContainer
          item={item}/>
     </div>

     </div>
    );
    }