import { useParams } from 'react-router-dom';
import {useState, useRef} from 'react';
import all_product from '../Components/Assets/AllProducts.js';
import '../Styles/ProductPage.css';
import addToCartSound from '../Components/Assets/add-to-cart.mp3'

export default function ProductPage({cart,setCart}){
   
        const { id } = useParams();
        const product = all_product.find(prod => prod.id === parseInt(id));

        const [count, setCount] = useState(1);
        const [showMessage, setShowMessage] = useState(false);
        const audioRef = useRef(null);
       
    function handleIncrement() {
    setCount(count + 1);
  }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

   
    const addToCart = () => {
      const existingItem = cart.find(item => item.id === product.id);

      if (existingItem) {
          const updatedCart = cart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + count } : item
          );
          setCart(updatedCart);
      } else {
          const newItem = { ...product, quantity: count };
          setCart([...cart, newItem]);
      }

      setShowMessage(true);
      if (audioRef.current) {
        audioRef.current.play();
    }
      setTimeout(() => setShowMessage(false), 3000); 
  

  };



        if (!product) {
          return <div>Product not found</div>;
        }
      
        
        return (
          <div className="product-detail">
            <div className="product-image">
            <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              
              <p className='product-company'>shree nath ji jewellers</p>
              
              <h2>{product.name}</h2>
              <hr/>
          
              <p>
                <span className='newPrice'>Rs.{product.new_price}</span>
                <span className='oldPrice'>Rs.{product.old_price}</span>
                <span><p className='taxes-mrp'>*MRP is all inclusive of all taxes</p></span>
              </p>

              <hr/>
               
              <div className="product-buttons">
                  <div className="quantity">
                  <button onClick={handleDecrement}>-</button>  {count} <button  onClick={handleIncrement}>+</button>
                  </div>
                  <br/><br/>
                  <button className='add-to-cart' onClick={addToCart} >Add to Cart</button>
                  {/* <Link to='/cart'><Cart/></Link> */}
                  <br/> <br/>
                  <button className='buy-it-now'>Buy it Now</button>
              </div>
              {showMessage && <div className="cart-message">Item added to cart!</div>}
                
              <p className='productDescription'>{product.description}</p>
             
            </div>
            <audio ref={audioRef} src={addToCartSound} preload="auto" />
          </div>
        );
      };

    