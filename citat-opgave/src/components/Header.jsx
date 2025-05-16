import styles from "../styles/Header.module.css";
import { FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ favCount }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        <FaHome size={24} />
      </Link>

      <Link to="/favorite" className={styles.favIcon}>
        <FaHeart size={24} />
        {favCount > 0 && <span className={styles.badge}>{favCount}</span>}
      </Link>
    </header>
  );
}
