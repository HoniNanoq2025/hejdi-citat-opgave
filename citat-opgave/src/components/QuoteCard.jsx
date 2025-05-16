import styles from "../styles/QuoteCard.module.css";
import { FaHeart } from "react-icons/fa";

export default function QuoteCard({ quote, addToFavorites }) {
  // Use the quote ID to create a unique image for each quote
  const imageUrl = `https://picsum.photos/200?random=${quote.id}`;

  return (
    <div className={styles.quote}>
      <img src={imageUrl} alt={quote.author} className={styles.randomImage} />
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
