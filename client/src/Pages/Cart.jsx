import {Link} from 'react-router-dom';
import '../Styles/Cart.css';
import cartBanner from '../Components/Assets/cartBanner.png';
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';

export default function Cart({cart, setCart}){


    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity >= 1) {
            const updatedCart = cart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            );
            setCart(updatedCart);
        }
    };

    const makePayment = async () => {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
        const body = { products: cart };
        const headers = { "Content-Type": "application/json" };
    
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/create-checkout-session`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });
    
            const session = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId: session.id });
    
            console.log(response);
            console.log("RESULT", result);

            if (result.error) {
                console.log(result.error);
            } else {
                toast.success('Payment Successful!');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Payment failed. Please try again.');
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.new_price * item.quantity, 0);
    };

    if (cart.length === 0) {
        return <div className="cart-empty">Your cart is empty.</div>;
    }

    return (
        <div className="outer-cart">
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>Price: Rs.{item.new_price}</p>
                        <div className="cart-quantity">
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}><RiSubtractFill/></button>
                            {item.quantity}
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}><IoAdd /></button>
                        </div>
                    </div>
                    <div className="cart-item-remove">
                        <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="cart-total">
                <h3>Total: Rs.{getTotalPrice()}</h3>
                <button onClick={ makePayment } className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
        <div className="cart-banner">
            <img src={cartBanner} alt="" />
        </div>
        </div>
    );
};





