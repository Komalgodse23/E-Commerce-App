import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🛍️ ShopHub</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>
        </li>

        <li>
          <Link to="/orders">Orders</Link>
        </li>

        {user ? (
          <>
            <li className="welcome-user">
              Hello, {user.name}
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;