// components/ProductList.js
import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Список продуктов</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Цена: {product.price}₽</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
