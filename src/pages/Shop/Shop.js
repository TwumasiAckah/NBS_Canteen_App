import React from "react";
import "./Shop.css";
import { PRODUCTS } from "../../Product";
import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <div className="shopTitle">
        <h1>Twum Shop</h1>
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
