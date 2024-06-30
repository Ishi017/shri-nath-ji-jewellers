import ItemContainer from "../Components/SingleItem/ItemContainer.jsx";
import '../Styles/MensCategory.css'
import mensbanner from '../Components/Assets/mensbanner.png';
import Sidebar from "../Components/Sidebar/Sidebar.jsx";

export default function MensCategory(){
    

    return (
<div className="menspage">


      <div className="mensbanner">
          <img src={mensbanner} alt="" />
      </div>
      <br></br>
      <hr></hr>

      <div className="menssidebar">
         <Sidebar/>
      </div>

      <div className="menscategory">
      
      <ItemContainer
          subCategory="MensCategory"
          category="men"/>
     </div>

     </div>
    );
    }