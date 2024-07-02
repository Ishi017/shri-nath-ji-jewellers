import {Link} from 'react-router-dom';
import '../Styles/Cart.css';
import cartBanner from '../Components/Assets/cartBanner.png';

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
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                            {item.quantity}
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <div className="cart-item-remove">
                        <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="cart-total">
                <h3>Total: Rs.{getTotalPrice()}</h3>
                <Link to="/checkout"><button className="checkout-button">Proceed to Checkout</button></Link>
            </div>
        </div>
        <div className="cart-banner">
            <img src={cartBanner} alt="" />

        </div>
        </div>
    );
};
