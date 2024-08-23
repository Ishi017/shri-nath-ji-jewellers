import "../../Styles/About.css";
import LogoBlue from "../Assets/logoBlue.png";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

export default function About() {
  return (
    <div className="AboutSnj">
      <div className="KnowUs">
        <h2>About Us!</h2>
      </div>

      <div className="KnowUsElements">
        <div className="SocialLinksSection">
          <h3>Social Links</h3>
          <br></br>

          <div className="SocialLinks">
            <div className="row1">
              <Link
                to="https://x.com/iishita_?s=21&t=9jJStnSASm15hLp4lHEZpQ"
                target="https://x.com/iishita_?s=21&t=9jJStnSASm15hLp4lHEZpQ"
                aria-label="Twitter"
              >
                {" "}
                <FaXTwitter className="footer-icon" />
              </Link>
              <Link
                to="https://www.instagram.com/ishita17._?igsh=dndtOGRlOXd4dWFy&utm_source=qr"
                target="https://www.instagram.com/ishita17._?igsh=dndtOGRlOXd4dWFy&utm_source=qr"
                aria-label="Instagram"
              >
                <FaInstagram className="footer-icon" />
              </Link>
            </div>
            <div className="row2">
              <Link
                to="https://www.linkedin.com/in/ishita-jain-348321249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_https://www.linkedin.com/in/ishita-jain-348321249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_appk"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="footer-icon" />
              </Link>
              <Link
                to="https://pin.it/576XSyfi3"
                target="https://pin.it/576XSyfi3"
                aria-label="Pinterest"
              >
                <FaPinterestP className="footer-icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="About-page-info">
          <h3>Info</h3>
          <br></br>

          <Link to="/shipping"><h4>Shipping</h4></Link>
          <Link to="/return-policy"><h4>Return Policy</h4></Link>
          <Link to="/faqs"><h4>FAQs</h4></Link>
        </div>

        <div className="ContactUs">
          <h3>Contact Us</h3>
          <br></br>
          <h4>
            For any suggestions, queries
            <br /> or complaints please contact us:
          </h4>
          <br></br>
          <h4>Shree Nath Ji Jewellers</h4>
          <h5>
            Whole Seller of :<br /> All Kinds of Silver Jewellery & Units
          </h5>
          <br></br>

          <h4> B-5, Punjabi Basti, Nangloi, Delhi-110041</h4>
          <h4>- pankjain211@gmail.com</h4>
        </div>
      </div>

      <div className="ContactUsMobile">
          <h3>Contact Us</h3>
          <h4>
            For any suggestions, queries
            <br /> or complaints please contact us:
          </h4>
          <h4>Shree Nath Ji Jewellers</h4>
          <h5>
            Whole Seller of :<br /> All Kinds of Silver Jewellery & Units
          </h5>
          <h4> B-5, Punjabi Basti, Nangloi, Delhi-110041</h4>
          <h4>- pankjain211@gmail.com</h4>
        </div>
      <div className="about-logo">
      <Link to="https://www.nathdwaratemple.org">
        {" "}
        <img className="LogoBlue" src={LogoBlue} alt="" />
      </Link>
      </div>
      <h5>2024, Shree Nath Ji Jewellery</h5>
    </div>
  );
}
