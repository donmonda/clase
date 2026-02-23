import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ brand }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <h2>{brand}</h2>

      <button style={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul
        style={{
          ...styles.ul,
          display:
            window.innerWidth <= 768 ? (isOpen ? "flex" : "none") : "flex",
        }}
      >
        <li>
          <Link style={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#222",
    color: "#fff",
  },
  ul: {
    listStyle: "none",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  menuButton: {
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: "block",
  },
};
