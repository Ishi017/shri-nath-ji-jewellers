import React from 'react';
import '../../Styles/FAQs.css'
import About from './About';

const FAQs = () => {
    return (
        <>
        <div className="faqs-container">
            <h1 className="faqs-title">Frequently Asked Questions</h1>
            <p className="faqs-text">
                Welcome to the Shri Nath Ji Jewellers FAQs. Here, we’ve compiled answers to some of the most common questions our customers ask. If you don’t find the information you’re looking for, please don’t hesitate to reach out to our customer support team.
            </p>

            <h6 className="faqs-subtitle">1. What is your return policy?</h6>
            <p className="faqs-text">
                We offer a 30-day return policy for most items. The item must be returned in its original condition and packaging, and custom orders or engraved items cannot be returned unless there is a manufacturing defect. For more details on how to return an item, please visit our <a href="/return-policy" className="faqs-link">Return Policy</a> page.
            </p>

            <h6 className="faqs-subtitle">2. How do I track my order?</h6>
            <p className="faqs-text">
                Once your order has been dispatched, we will send you an email with your tracking number. You can use this number to monitor your shipment’s status. If you have any trouble tracking your order, please contact our customer support team for assistance.
            </p>

            <h6 className="faqs-subtitle">3. Do you offer custom jewelry?</h6>
            <p className="faqs-text">
                Custom jewelry services are available exclusively in-store at our showroom located at B-5, Punjabi Basti, Nangloi, Delhi-110041. Our expert craftsmen will work with you to create a unique piece that meets your specifications. Please visit our store to discuss your ideas and get a quote.
            </p>

            <h6 className="faqs-subtitle">4. What payment methods do you accept?</h6>
            <p className="faqs-text">
                We accept a variety of payment methods, including credit/debit cards, net banking, and popular digital wallets like Paytm, Google Pay, and PhonePe. All transactions are securely processed to ensure your safety and privacy.
            </p>

            <h6 className="faqs-subtitle">5. Do you offer international shipping?</h6>
            <p className="faqs-text">
                Currently, we only ship within India. However, if you are located outside India and are interested in purchasing our jewelry, please contact us directly, and we may be able to arrange special shipping options for you.
            </p>

            <h6 className="faqs-subtitle">6. How can I contact customer support?</h6>
            <p className="faqs-text">
                You can reach our customer support team via email at <a href="mailto:support@shrijnathjijewellers.com" className="faqs-link">support@shrijnathjijewellers.com</a> or by phone at +91-12345-67890. Our business hours are Monday to Saturday, 10 AM to 7 PM. We are here to assist you with any inquiries or concerns.
            </p>

            <p className="faqs-text">
                <strong>If your question wasn’t answered here, don’t worry! We’re just a call or email away and ready to help you with any other queries you may have.</strong>
            </p>
        </div>
        <About/>
        </>
    );
};

export default FAQs;