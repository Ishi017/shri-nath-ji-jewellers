import MenCategory from '../Assets/MenCategory.png';
import WomenCategory from '../Assets/WomenCategory.png';
import '../../Styles/MenWomenDisplay.css'
import {Link} from 'react-router-dom';

export default function MenWomenDisplay(){

    return(
        <div className="category-recepient">
 
         <h1>Shop by Recepient</h1>
         <br></br>

           <div className="category-pictures">
               
            <Link to="/pickcategory/:menscollection" ><img className="men" src={MenCategory} alt="" /></Link>
            <Link to="/pickcategory/:womenscollection" > <img className="women" src={WomenCategory} alt="" /></Link>
            
           </div>

        </div>
    );
}