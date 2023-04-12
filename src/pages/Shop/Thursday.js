import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const Thursday = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>GHc {price}</p>
      </div>
      <div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart {cartItems[id] > 0 ? `(${cartItems[id]})` : ""}
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Thursday;
