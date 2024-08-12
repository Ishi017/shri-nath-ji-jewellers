
import CustomerReview from '../subcomponents/CustomerReview';
import '../../Styles/Testimonials.css';
import InstaLogo from '../Assets/InstaLogo.png';

const reviews = [
    { id:1, name: 'Pippo', comment:'“Beautifully crafted silver jewelry at reasonable prices. My new necklace is my favorite piece now! Fast shipping and friendly service. 📦⭐️⭐️⭐️⭐️⭐️”'},
    { id:2, name: 'Thor', comment: '“Amazing variety of silver jewelry. Found the perfect ring for my sister’s birthday. She adored it and couldn’t stop talking about the intricate details. Will definitely be coming back for more. 👍🎁🌟🌟🌟🌟”' },
    { id:3, name: 'Pooja', comment: '“I’m thrilled with my new silver anklet! It’s elegant, fits well, and is comfortable to wear all day. The quality is outstanding and customer support was very helpful. Highly recommend this shop! 🎉💗”' },
];

export default function Testimonials(){

    return(
        <div class="Testimonials">
            <div className="testimonials-heading">
            <h1>Feedback!</h1> 
            <img src={InstaLogo} alt="" />
            </div>
       
         <div className='testimonial-scroll-container'>
    
            {reviews.map((review) => (
                <CustomerReview
                    key={review.id}
                    name={review.name}
                    comment={review.comment}>
                    </CustomerReview>
               
            ))}
   
        </div>
        </div>
       
    );
}