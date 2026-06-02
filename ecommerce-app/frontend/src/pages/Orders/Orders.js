import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(storedOrders);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h3>No Orders Found</h3>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>
              Order #{order.id}
            </h3>

            <p>Date: {order.date}</p>

            <p>Status: {order.status}</p>

            <p>Total: ₹{order.total}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;