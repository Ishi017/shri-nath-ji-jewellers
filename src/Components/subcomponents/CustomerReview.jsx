import React from 'react';
import InstaLogo from '../Assets/InstaLogo.png';
import '../../Styles/CustomerReview.css'

const CustomerReview = ({ name, comment }) => {
    return (
        <div className="CustomerReview">
            
            <img src={InstaLogo} alt="" />
            <h3>{name}</h3>
            <p>{comment} via Instagram</p>

        </div>
    );
};

export default CustomerReview;