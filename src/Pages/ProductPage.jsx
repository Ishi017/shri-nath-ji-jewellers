import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/AllProducts.js';
import '../Styles/ProductPage.css';

export default function ProductPage(){
   
        const { id } = useParams();
        const product = all_product.find(prod => prod.id === id);
      
        if (!product) {
          return <div>Product not found</div>;
        }
      
        
        return (
          <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p><span className='newPrice'>₹{product.new_price}</span>
                <span className='oldPrice'>{product.old_price}</span></p>
              {/* <p>{product.description}</p> */}
            </div>
          </div>
        );
      };

    