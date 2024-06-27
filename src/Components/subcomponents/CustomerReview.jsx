import React from 'react';
import InstaLogo from '../Assets/InstaLogo.png';
import '../../Styles/CustomerReview.css'

const CustomerReview = ({ name, comment }) => {
    return (
        
        <div className="CustomerReview">
            
            <img src={InstaLogo} alt="" />
            <br></br> <br></br>
            <h3>{name}</h3>
           
            <p>{comment} </p>
            <h6>via Instagram</h6>
            

        </div>
        
    );
};

export default CustomerReview;