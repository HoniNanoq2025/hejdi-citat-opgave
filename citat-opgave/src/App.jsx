import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import QuoteDetail from "./pages/QuoteDetail"; // Added import for QuoteDetail
import styles from "./App.module.css";

const QUOTES_PER_PAGE = 10;

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [page, setPage] = useState(1); // så starter første side på 1
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const skip = (page - 1) * QUOTES_PER_PAGE;
        const response = await fetch(
          `https://dummyjson.com/quotes=?limit=${QUOTES_PER_PAGE}$${skip}`
        );
        const data = await response.json();

        setQuotes(data.quotes);
        setTotalPages(Math.ceil(data.total / QUOTES_PER_PAGE));
      } catch (error) {
        console.error("Fejl ved indhentning", error);
      }
    };

    fetchQuotes();
  }, [page]);

  useEffect(() => {
    const savedFavorite = localStorage.getItem("favorite");
    if (savedFavorite) setFavorite(JSON.parse(savedFavorite));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addToFavorites = (quote) => {
    if (!favorite.some((fav) => fav.id === quote.id)) {
      setFavorite([...favorite, quote]);
    }
  };

  return (
    <Router>
      <div className={styles.container}>
        <Header favCount={favorite.length} />{" "}
        <Routes>
          <Route
            path="/"
            element={<Home quotes={quotes} addToFavorites={addToFavorites} />}
          />
          <Route
            path="/favorite"
            element={<FavoritesPage favorite={favorite} />}
          />
          <Route path="/quote/:id" element={<QuoteDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
