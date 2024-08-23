import React from 'react';
import '../../Styles/Shipping.css';
import About from './About.jsx';

const ShippingDetails = () => {
    return (
        <>
        <div className="shipping-container">
            <h1 className="shipping-title">Shipping Details</h1>
            <p className="shipping-text"><br/>
                At Shri Nath Ji Jewellers, we are committed to delivering your orders safely and efficiently. Our pan-India shipping service ensures that you can enjoy our exquisite jewelry, no matter where you are located in the country.
            </p><br/>
            
            <p className="shipping-text">
                <strong>Shipping Coverage:</strong><br/> We deliver to every part of India, from major metropolitan cities to remote villages. Our extensive network of trusted logistics partners allows us to reach even the most distant locations. We ensure that your jewelry is securely packaged and handled with the utmost care during transit.
                Whether you're purchasing a gift or something special for yourself, you can be confident that it will arrive safely and on time. We also offer express shipping options for an additional fee if you need your order sooner.
            </p>
            
            <p className="shipping-text">
                <strong>Dispatch and Delivery:</strong><br/> Once your order is placed, our team begins processing it immediately. We aim to dispatch all orders within 2-3 business days. Custom-made pieces or items requiring special attention may take slightly longer, but rest assured, we’ll keep you informed at every step.
                After dispatch, standard delivery times are typically 5-7 business days, depending on your location. For rural or remote areas, delivery might take a little longer, but we strive to keep delays to a minimum. In the rare event of an unexpected delay, we will promptly notify you and work to resolve the issue.
            </p>
            
            <p className="shipping-text">
                <strong>Shipping Costs:</strong><br/> We are pleased to offer free shipping on all orders above ₹5,000 as part of our commitment to customer satisfaction. For orders below ₹5,000, a flat shipping fee of ₹100 is applicable. This fee helps us maintain the high standards of service and packaging that our customers expect.
                For international orders, please contact our customer service team for detailed shipping rates and delivery timelines, as these vary depending on the destination.
            </p>
            
            <p className="shipping-text">
                <strong>Easy Returns:</strong><br/> At Shri Nath Ji Jewellers, your satisfaction is our top priority. If, for any reason, you are not completely happy with your purchase, you can return the item within 30 days for a full refund or exchange. 
                Please ensure that the item is returned in its original packaging and in an unused condition. We regret that custom orders and engraved items cannot be returned unless there is a manufacturing defect.
                To initiate a return, please contact our customer service team, who will guide you through the process. We also offer the option to return your purchase to one of our physical stores if that is more convenient for you.
            </p>
            
            <p className="shipping-text">
                <strong>Order Tracking:</strong> <br/>Once your order is dispatched, we will send you an email with your tracking number and a link to the courier’s website. You can use this tracking number to monitor the status of your shipment from the time it leaves our warehouse until it arrives at your door.
                If you experience any issues with tracking your order or if you notice any discrepancies, please contact us immediately so we can assist you.
            </p>
            
            <p className="shipping-text">
                <strong>Customer Support:</strong><br/> Our customer service team is here to help with any questions or concerns you might have about your order. Whether you need assistance with tracking your shipment, processing a return, or choosing the perfect piece of jewelry, we’re just a phone call or email away.
                You can reach us at <a href="mailto:support@shrijnathjijewellers.com" className="shipping-link">support@shrijnathjijewellers.com</a> or call us at +91-12345-67890 during our business hours, which are Monday to Saturday, 10 AM to 7 PM. We’re here to ensure that your experience with Shri Nath Ji Jewellers is as smooth and enjoyable as possible.
            </p>
            
            <p className="shipping-text">
                Thank you for choosing Shri Nath Ji Jewellers. We take great pride in the quality of our products and the satisfaction of our customers. We look forward to providing you with beautiful jewelry and exceptional service every time you shop with us.
            </p>
          
        </div>
        </>

    );
};

export default ShippingDetails;