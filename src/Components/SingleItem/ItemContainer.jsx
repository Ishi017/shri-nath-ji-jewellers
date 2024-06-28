import  all_product  from "../Assets/AllProducts.js";
import SingleItem from "../SingleItem/SingleItem.jsx";
import '../../Styles/ItemContainer.css';

export default function ItemContainer({category}){
    const filteredProducts = all_product.filter(product => product.category === category);

    return (

 
      <div className="subcategory">
        {filteredProducts.map(product => (
          <SingleItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
         />
        ))};
      </div>
    
    );
    }