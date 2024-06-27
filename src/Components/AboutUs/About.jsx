import '../../Styles/About.css'
import Twitter from '../Assets/Socials/Twitter.png';
import Instagram from '../Assets/Socials/Instagram.png';
import Linkedin from '../Assets/Socials/Linkedin.png';
import Pinterest from '../Assets/Socials/pinterest.png';
import LogoBlue from '../Assets/logoBlue.png';


export default function About(){

    return(
        <div className="AboutSnj">

            <div className="KnowUs"><h2>About Us!</h2></div>

            <div className="KnowUsElements">
            
            
            <div className="SocialLinksSection">
             <h3>Social Links</h3>
             <br></br>

             <div className="SocialLinks">

                 <div className="row1">
             <a href="https://x.com/iishita_?s=21&t=9jJStnSASm15hLp4lHEZpQ"  target="https://x.com/iishita_?s=21&t=9jJStnSASm15hLp4lHEZpQ" aria-label="Twitter">
             <img src={Twitter} alt="" />        
            </a>
            <a href="https://www.instagram.com/ishita17._?igsh=dndtOGRlOXd4dWFy&utm_source=qr"  target="https://www.instagram.com/ishita17._?igsh=dndtOGRlOXd4dWFy&utm_source=qr" aria-label="Instagram">
            <img src={Instagram} alt="" />   
            </a>
            </div>
            <div className="row2">
            <a  href="https://www.linkedin.com/in/ishita-jain-348321249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  target="_https://www.linkedin.com/in/ishita-jain-348321249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_appk" aria-label="LinkedIn">
            <img src={Linkedin} alt="" />   
            </a>
            <a href="https://pin.it/576XSyfi3"  target="https://pin.it/576XSyfi3" aria-label="Pinterest">
            <img src={Pinterest} alt="" />   
            </a> 
            </div>
            </div>
            </div>

            <div className="Info">
                <h3>Info</h3>
                <br></br>

                <h4>Shipping</h4>
                <h4>Return Policy</h4>
                <h4>FAQs</h4>
                <h4>Terms of Service</h4>
            </div>

            <div className="ContactUs">
                <h3>Contact Us</h3>
                <br></br>
                <h4>For any suggestions, queries<br/> or complaints please contact us:</h4>
                <br></br>
                <h4>Shree Nath Ji Jewellers</h4>
                <h5>Whole Seller of :<br/> All Kinds of Silver Jewellery & Units</h5>
                <br></br>

                <h4> B-5, Punjabi Basti, Nangloi, Delhi-110041</h4>
                <h4>- pankjain211@gmail.com</h4>

            </div>

            </div>

            <img className="LogoBlue" src={LogoBlue} alt="" />
            <h5>2024, Shree Nath Ji Jewellery</h5>

        </div>
    )
}