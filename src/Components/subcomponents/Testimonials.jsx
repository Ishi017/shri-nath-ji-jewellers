import { Swiper, SwiperSlide } from 'swiper/react';
import CustomerReview from '../subcomponents/CustomerReview';
import '../../Styles/Testimonials.css'
import { Pagination, Navigation } from 'swiper'; 
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';  
import 'swiper/css/pagination'; 



const reviews = [
    { id:1, name: 'Pippo', comment:'“Beautifully crafted silver jewelry at reasonable prices. My new necklace is my favorite piece now! Fast shipping and friendly service. 📦⭐️⭐️⭐️⭐️⭐️”'},
    { id:2, name: 'Anurag', comment: '“Amazing variety of silver jewelry. Found the perfect ring for my sister’s birthday. She adored it and couldn’t stop talking about the intricate details. Will definitely be coming back for more. 👍🎁🌟🌟🌟🌟”' },
    { id:3, name: 'Pooja', comment: '“I’m thrilled with my new silver anklet! It’s elegant, fits well, and is comfortable to wear all day. The quality is outstanding and customer support was very helpful. Highly recommend this shop! 🎉💗”' },
];

export default function Testimonials(){

    return(

    <div className="swiper-container">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20} 
                slidesPerView={2} 
                loop={true} 
                pagination={{ clickable: true }} 
                navigation={true} 
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <CustomerReview name={review.name} comment={review.comment} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );

}