import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, CartProvider } from "./cartContext";
import "./cart.css";

function CartItem({ product }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cartItem">
      <img src={product.image} alt={product.name} />
      <div className="description">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <div className="countHandler">
          <div className="quantity">
            <button onClick={() => decreaseQuantity(product.id)}>-</button>
            &nbsp;
            <span>{product.quantity}</span>&nbsp;
            <button onClick={() => increaseQuantity(product.id)}>+</button>
          </div>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const { cart, clearCart, calculateTotal, setCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your Cart is empty. Please add an item to your cart");
    } else {
      alert("Your order has been placed successfully!");
      clearCart();
      setCart([]);
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your Cart is empty. Please add an item to your cart
          <br />
          <Link to="/"> Back to Shopping</Link>
        </p>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
