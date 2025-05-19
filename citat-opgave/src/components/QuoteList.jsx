import React from "react";
import QuoteCard from "./QuoteCard";
import styles from "../styles/QuoteList.module.css";
import { useNavigate } from "react-router-dom";

export default function QuoteList({ quotes, addToFavorites }) {
  const navigate = useNavigate();

  const handleViewDetails = (quoteId) => {
    navigate(`/quote/${quoteId}`);
  };

  return (
    <div className={styles.quoteList}>
      {quotes.map((quote) => (
        <div className={styles.quoteContainer}>
          <div key={quote.id}>
            <QuoteCard quote={quote} addToFavorites={addToFavorites} />
            <button
              className={styles.buttons}
              onClick={() => handleViewDetails(quote.id)}
            >
              Vis citat
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
