import styles from "../styles/QuoteCard.module.css";
import { FaHeart } from "react-icons/fa";

export default function QuoteCard({ quote, addToFavorites }) {
  return (
    <div className={styles.quote}>
      <img
        src="https://picsum.photos/200"
        alt="{quote.author}"
        className={styles.randomImage}
      />
      <h3>{quote.quote}</h3>
      <p>
        <em>{quote.author}</em>
      </p>

      <button onClick={() => addToFavorites(quote)} className={styles.favBtn}>
        <FaHeart size={18} />
      </button>
    </div>
  );
}
