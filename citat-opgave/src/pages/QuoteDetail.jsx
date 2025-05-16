import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../App.module.css";

export default function QuoteDetail() {
  // Fixed function name from RecipeDetail to QuoteDetail
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/quotes/${id}`);
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        console.error("Fejl ved hentning af detaljer", error);
      }
    };

    fetchQuote();
  }, [id]);

  if (!quote) return <p>Indlæser...</p>;

  const imageUrl = `https://picsum.photos/seed/${quote.id}/400/300`;

  return (
    <div className={styles.quoteDetail}>
      <img src={imageUrl} alt={quote.author} className={styles.detailImage} />
      <blockquote>"{quote.quote}"</blockquote>
      <h4>— {quote.author}</h4>
    </div>
  );
}
