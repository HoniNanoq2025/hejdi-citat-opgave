import styles from "./Header.module.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ favCount }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        Webshop Logo
      </Link>

      <Link to="/cart" className={styles.cartIcon}>
        <FaHeart size={24} />
        {favCount > 0 && <span className={styles.badge}>{favCount}</span>}
      </Link>
    </header>
  );
}
