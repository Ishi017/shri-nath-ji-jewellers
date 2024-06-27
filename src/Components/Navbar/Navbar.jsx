import '../../Styles/Navbar.css'
import logo from '../Assets/main-logo.png'
import cart from '../Assets/cart.png'
import DynamicSection from './DynamicNews';
import {Link} from 'react-router-dom'
import logo2 from '../Assets/logo.png'



export default function Navbar(){

   return(
       
    <nav className='navbar'>
          <div className="navbar-news">
            <DynamicSection/>
          </div>
          <div className="navbar-items">
        <div className="mainlogo">
            <Link to="/"><img id="main-logo" src={logo} alt=""/></Link>
            <img className="title" src={logo2} alt="" />
            
        </div>
        
        <div className="navbar-list">
        <ul id="nav-list">
         
        <li><Link to="/pickcategory/: latest collection">Latest Collection</Link></li>
        <li><Link to="/pickcategory/: mensjewellery">Men's Jewellery</Link></li>
        <li><Link to="/pickcategory/: womensjewellery">Women's Jewellery</Link></li>
          
        </ul>
        </div>

        <div className="nav-login-cart">
           <Link to="/login"><button>Login</button></Link> 
            <Link to="/cart"><img src={cart} alt="" /> </Link>
            <div className="cart-count">0</div>
        </div>
        </div>


    </nav>
    )
}