import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>ShopHub</h2>

        <p>
          Your one-stop destination for modern shopping.
        </p>

        <div className="footer-links">
          <span>Home</span>
          <span>Products</span>
          <span>Orders</span>
          <span>Contact</span>
        </div>

        <p className="copyright">
          © 2026 ShopHub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;