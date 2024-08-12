import React from 'react';
import'../../Styles/ReturnPolicy.css'
import About from './About';

const ReturnPolicy = () => {
    return (
        <>
        <div className="return-container">
            <h1 className="return-title">Return Policy</h1>
            <p className="return-text">
                At <i>Shri Nath Ji Jewellers</i>, your satisfaction is our top priority. We want you to be completely happy with your purchase, but we understand that sometimes you may need to return an item. Our return policy is designed to make this process as smooth and convenient as possible for you.
            </p>

            <p className="return-text">
                If you are not satisfied with your purchase, you may return it within <strong>30 days</strong> of receiving the item. To be eligible for a return, the item must be unused, in the same condition as you received it, and in its original packaging. Please note that custom orders, engraved items, and jewelry that has been altered or resized are not eligible for return unless there is a manufacturing defect.
            </p>

            <p className="return-text">
                1. &nbsp; To initiate a return, contact our customer service team at <a href="mailto:support@shrijnathjijewellers.com" className="return-link">support@shrijnathjijewellers.com</a> or call us at +91-12345-67890 to obtain a Return Merchandise Authorization (RMA) number. Once you have received the RMA number, please pack the item securely and include the RMA number in the package. We recommend using a trackable shipping service to ensure that the item reaches us safely. The cost of return shipping is the responsibility of the customer, unless the return is due to a defect or an error on our part.
            </p>

            <p className="return-text">
                2.  &nbsp; After we receive and inspect the returned item, we will notify you about the status of your refund. If your return is approved, a refund will be processed, and a credit will be applied to your original method of payment within 7-10 business days. The time it takes for the refund to appear in your account may vary depending on your bank or credit card provider.
            </p>

            <p className="return-text">
                If you prefer to exchange your item for a different size, color, or style, please inform our customer service team when you request your RMA number. Exchanges are subject to product availability, and if the desired item is not available, we will issue a refund instead.
            </p>

            <p className="return-text">
                We also want to remind you that items purchased on final sale, as well as custom orders and engraved items, are not eligible for return or exchange. However, if you encounter any issues with these items, please reach out to us so we can find the best possible solution for you.
            </p>

            <p className="return-text">
                Our customer service team is here to assist you with any questions or concerns you may have about our return policy. We are committed to making your shopping experience with Shri Nath Ji Jewellers as enjoyable and worry-free as possible. Thank you for choosing us, and we look forward to serving you again.
            </p>
        </div>
        <About/>
        </>
    );
};

export default ReturnPolicy;