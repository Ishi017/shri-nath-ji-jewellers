// import  all_product  from "../Assets/AllProducts.js";
// import SingleItem from "../SingleItem/SingleItem.jsx";
// import '../../Styles/ItemContainer.css';

// export default function ItemContainer({category,item}){
//     const filteredProducts = all_product.filter(product => (product.category === category || product.item=== item));

//     return (

 
//       <div className="subcategory">
//         {filteredProducts.map(product => (
//           <SingleItem
//             key={product.id}
//             id={product.id}
//             name={product.name}
//             image={product.image}
//             new_price={product.new_price}
//             old_price={product.old_price}
//          />
//         ))};
//       </div>
    
//     );
//     }

// ItemContainer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styles/ItemContainer.css';
import SingleItem from "../SingleItem/SingleItem.jsx";

function ItemContainer({ category, item }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    // Filter products based on category and item
    const filtered = products.filter(product => 
      (category && product.category === category) || 
      (item && product.item === item)
    );
    setFilteredProducts(filtered);
  }, [products, category, item]);


  return (
    <div className="subcategory">
       {filteredProducts.map(product => (
        <SingleItem
          key={product._id}
          id={product.id}  
          name={product.name} 
          image={product.image} 
          new_price={product.newPrice} 
          old_price={product.oldPrice} 
        />
      ))}
    </div>
  );
}

export default ItemContainer;