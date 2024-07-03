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
       <Link to="/mens-category"> <h3>Men</h3></Link>
        <Link to="/womens-category"><h3>Women</h3></Link>
    </div>

    <div className="sidebar-byitem">
        <h4>By Items</h4>
        <Link className="sidebar-list-items" to="/shopbycategory/Ring"><h3>Rings</h3></Link>
        <Link className="sidebar-list-items" to="/shopbycategory/Chain"><h3>Chain</h3></Link>
        <Link className="sidebar-list-items" to="/shopbycategory/Payal"><h3>Payal</h3></Link>
        <Link className="sidebar-list-items" to="/shopbycategory/Coins"><h3>Coins</h3></Link>
        <Link className="sidebar-list-items" to="/shopbycategory/PoojaItems"><h3>Pooja Items</h3></Link>
        <Link className="sidebar-list-items" to="/shopbycategory/Earrings"><h3>Earrings</h3></Link>
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