import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cart/${userId}`);
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    if (userId) {
      fetchCart();
    }
  }, [userId]);

  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.post("http://localhost:3000/remove-from-cart", {
        userId,
        itemId,
      });
      setCart(response.data.cart);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: 'black', fontWeight: 'bold' }}>Your Cart</h1>
      <br />
      {cart.length === 0 ? (
        <p className="text-center" style={{ color: 'black', fontWeight: 'bold' }}>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card bg-black text-white">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  {/* <p className="card-text">Price: ₹{item.price}</p> */}
                  <div className="d-flex gap-2">
                    <button className="btn btn-success p-2">Buy Now</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <br />
    </div>
  );
};

export default Cart;