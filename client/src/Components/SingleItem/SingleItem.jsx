import PropTypes from "prop-types";
import "../../Styles/SingleItem.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function SingleItem({ id, name, image, new_price, old_price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

    return (
        <div className="product-card" onClick={handleClick} >
          <img src={image} alt={name} />
          <div className="cardinfo">
          <p className='singlecard-title'>{name}</p>
          <p>
             <span className='newPrice'>₹{new_price}</span>
             <span className='oldPrice'>{old_price}</span>
          </p>
         
          <button className="add-single-card">
            <p>Add to Cart</p>
            <AiOutlineShoppingCart />
          </button>
          </div>
        </div>
      );

};

SingleItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};
