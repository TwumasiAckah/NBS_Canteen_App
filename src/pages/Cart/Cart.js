import React, { useContext } from "react";
import { PRODUCTS } from "../../Product";
import { CartItem } from "./Cart-items";
import { ShopContext } from "../../context/Shop-context";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkoutShop } =
    useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {getTotalCartAmount() > 0 ? (
        <div className="checkout">
          <h1>Subtotal: GHc {getTotalCartAmount()} </h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              checkoutShop();
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
