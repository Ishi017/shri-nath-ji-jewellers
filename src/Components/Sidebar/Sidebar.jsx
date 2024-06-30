import logo from '../Assets/logoBlue.png';
import '../../Styles/Sidebar.css'
import {Link} from 'react-router-dom'
import Sale from '../Assets/Sale.png'
import sidebannerPromises from '../Assets/sidebanner-promises.png'

export default function Sidebar(){

return(

    <div className="side-bar">
    <div className="sidebar-logo">
        <img src={logo} alt="" />
    </div>
    <div className="sidebar-byrecepient">
        <h4>By Recepient:</h4>
       <Link to="/menscategory"> <h3>Men</h3></Link>
        <Link to="/womenscategory"><h3>Women</h3></Link>
    </div>

    <div className="sidebar-byitem">
        <h4>By Items</h4>
        <h3>Rings</h3>
        <h3>Chain</h3>
        <h3>Payal</h3>
        <h3>Coins</h3>
        <h3>Pooja Items</h3>
        <h3>Earrings</h3>
    </div>
<br></br>
    <div className="sidebar-footer">
        <img src={Sale} alt="" />
        
        <br></br>
        <br></br>
        {/* <img src={sidebannerPromises} alt="" /> */}
    </div>


    </div>

);

}