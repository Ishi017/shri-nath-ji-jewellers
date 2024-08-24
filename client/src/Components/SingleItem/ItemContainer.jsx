// ItemContainer.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/ItemContainer.css";
import SingleItem from "../SingleItem/SingleItem.jsx";
import SkeletonLoader from "./Skeleton.jsx";

function ItemContainer({ category, item }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get(`${import.meta.env.VITE_APP_BASE_URL}/products`)
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on category and item
    const filtered = products.filter(
      (product) =>
        (category && product.category === category) ||
        (item && product.item === item)
    );
    setFilteredProducts(filtered);
  }, [products, category, item]);

  return (
    <div className="subcategory">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        : filteredProducts.map((product) => (
            <SingleItem
              key={product._id}
              id={product._id}
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
