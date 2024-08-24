import { useParams, Link  } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../Styles/ProductPage.css";
import addToCartSound from "../Components/Assets/add-to-cart.mp3";
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import toast from "react-hot-toast";

export default function ProductPage({ cart, setCart }) {
  const { id } = useParams();

  const [count, setCount] = useState(1);
  const audioRef = useRef(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductbyId = () => {
    axios
    .get(`${import.meta.env.VITE_APP_BASE_URL}/product/${id}`)
    .then(response => setProduct(response.data))
    .catch(error => console.error('Error fetching product:', error));
  };

  fetchProductbyId();
 } , [id]);

  function handleIncrement() {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + count }
          : item
      );
      setCart(updatedCart);
    } else {
      const newItem = { ...product, quantity: count };
      setCart([...cart, newItem]);
    }

    toast.success("Item added to cart!")
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const buyItNow = () => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (!existingItem) {
       
      const newItem = { ...product, quantity: count };
      setCart([...cart, newItem]);
    }

    if(!existingItem)toast.success("Item added to cart!")
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="product-detail">
      <div className="">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <div>
          <span className="newPrice">Rs.{product.newPrice}</span>
          <span className="oldPrice">Rs.{product.oldPrice}</span>
          <span>
            <p className="taxes-mrp">*MRP is all inclusive of all taxes</p>
          </span>
        </div>
        <div className="product-buttons">
          <div className="quantity">
            <button onClick={handleDecrement}>
              <RiSubtractFill />
            </button>{" "}
            {count}{" "}
            <button onClick={handleIncrement}>
              <IoAdd />
            </button>
          </div>
          <br />
          <div  className="buttons-div">
            <button className="add-to-cart" onClick={addToCart}>
              Add to Cart
            </button>
           <Link to="/cart"> <button onClick={buyItNow} className="buy-it-now">Buy Now</button></Link>
          </div>
        </div>

        <p className="productDescription">{product.description}</p>
      </div>
      <audio ref={audioRef} src={addToCartSound} preload="auto" />
    </div>
  );
}
