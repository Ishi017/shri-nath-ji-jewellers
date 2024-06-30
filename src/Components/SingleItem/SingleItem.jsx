import PropTypes from 'prop-types';
import '../../Styles/SingleItem.css';
// import { useHistory } from 'react-router-dom';


export default function SingleItem({ id, name, image, new_price, old_price,item}){

  // const history = useHistory();

  // const handleClick = () => {
  //   history.push(`/product/${id}`);
  // };

    return (
        <div className="product-card" >
          <img src={image} alt={name} />
          <div className="cardinfo">
          <p><span className='newPrice'>₹{new_price}</span>
          <span className='oldPrice'>{old_price}</span></p>
          <h3>{name}</h3>
          <p className='cart'>"cart icon"</p>
          </div>
          {/* <p>Item: {item}</p> */}
        </div>
      );

};

// onClick={handleClick} style={{ cursor: 'pointer' }}

SingleItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired,
  };