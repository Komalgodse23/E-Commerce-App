import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const placeOrder = () => {
    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total,
      status: "Processing",
      date: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    alert("Order Placed Successfully!");

    navigate("/orders");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Checkout</h1>

      <h2>Total Amount: ₹{total}</h2>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;