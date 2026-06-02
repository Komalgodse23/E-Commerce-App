import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState } from "react";
import products from "../../data/products";
import { motion } from "framer-motion";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Welcome to ShopHub</h1>

          <p>
            Discover premium products with secure shopping
            and fast delivery.
          </p>

          <button className="shop-btn">
            Explore Collection
          </button>
        </div>
      </motion.section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Satisfaction</p>
        </div>
      </section>

      <div className="category-buttons">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Electronics")}>
          Electronics
        </button>

        <button onClick={() => setCategory("Fashion")}>
          Fashion
        </button>

        <button onClick={() => setCategory("Accessories")}>
          Accessories
        </button>

        <button onClick={() => setCategory("Shoes")}>
          Shoes
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className="products-section">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;