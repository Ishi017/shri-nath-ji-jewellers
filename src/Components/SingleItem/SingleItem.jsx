import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/SingleItem.css';

export default function SingleItem({ id, name, image, new_price, old_price,item}){

    return (
        <div className="product-card">
          <img src={image} alt={name} />
          <div className="cardinfo">
          <h3>{name}</h3>
          <p><span className='newPrice'>{new_price}</span>
          <span className='oldPrice'>{old_price}</span></p>
          <button>Add to Cart</button>
          </div>
          {/* <p>Item: {item}</p> */}
        </div>
      );

};

SingleItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number.isRequired,
  };