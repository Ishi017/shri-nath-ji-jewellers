import logo from '../Components/Assets/logoBlue.png';
import {Link} from 'react-router-dom'
import '../Styles/UserDetails.css'



export default function UserDetails(){

return (
    <div className="user-info-page">
    
      
    
    <div className="user-sidebar">
     <div className="sidebar-logo">
        <img src={logo} alt="" />
     </div>
  

     <div className="sidebar-options">
        <h4>Manage Account</h4>
        <Link className="sidebar-options-list" to="/userinfo/profile"><h3>Profile</h3></Link>
        <Link className="sidebar-options-list" to="/shopbycategory/orders"><h3>Your Orders</h3></Link>
        <Link className="sidebar-options-list" to="/shopbycategory/settings"><h3>Settings</h3></Link>
    
     </div>

    </div>


    <div className="user-page-details">
        <h2>Welcome to Your Profile ! </h2> </div>
   
    </div>

);
}