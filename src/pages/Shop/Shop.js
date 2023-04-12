import React from "react";
import "./Shop.css";
import { PRODUCTS } from "../../Product";
import Product from "./Monday";

const Shop = () => {
  return (
    <div>
      <div className="shopTitle">
        <h1>Let us know what you would want to eat for next week</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
