import  { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart items from local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row gap-4 justify-between items-center border-b pb-2">
                <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">
                  <span className="block font-bold">{item.title}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
          </div>
          <button
            className="btn w-full bg-[#0c4657] text-white mt-4"
            onClick={() => navigate("/checkout", { state: { totalPrice } })}
          >
            Proceed to order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
