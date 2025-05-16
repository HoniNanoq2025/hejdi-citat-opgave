import QuoteCard from "./QuoteCard";
import styles from "../styles/QuoteList.module.css";

export default function QuoteList({ quotes, addToFavorites }) {
  return (
    <div className={styles.quoteList}>
      {quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
}
