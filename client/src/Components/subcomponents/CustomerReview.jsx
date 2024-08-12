import React from 'react';
import InstaLogo from '../Assets/InstaLogo.png';
import '../../Styles/CustomerReview.css'
import { FaInstagram } from 'react-icons/fa6';

const CustomerReview = ({ name, comment }) => {
    return (
        
        <div className="CustomerReview">
            
            {/* <img src={InstaLogo} alt="" /> */}
            <FaInstagram className="instaLogo" />
            <br></br> <br></br>
            <h3>{name}</h3>
           
            <p>{comment} </p>
            <h6>via Instagram</h6>
            

        </div>
        
    );
};

export default CustomerReview;