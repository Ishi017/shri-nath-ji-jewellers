import React from 'react';
import '../../Styles/CustomerReview.css'

const CustomerReview = ({ name, comment }) => {
    return (
        
        <div className="CustomerReview">
            
            
            <br></br> <br></br>
            <h3>{name}</h3>
           
            <p>{comment} </p>
            <h6>via Instagram</h6>
            

        </div>
        
    );
};

export default CustomerReview;