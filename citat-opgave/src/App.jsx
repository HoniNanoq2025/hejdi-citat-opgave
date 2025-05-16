import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import QuoteDetail from "./pages/QuoteDetail"; // Added import for QuoteDetail
import styles from "./App.module.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();

        setQuotes(data.quotes);
      } catch (error) {
        console.error("Fejl ved indhentning", error);
      }
    };

    fetchQuotes();
  }, []);

  useEffect(() => {
    const savedFavorite = localStorage.getItem("favorite");
    if (savedFavorite) setFavorite(JSON.parse(savedFavorite));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addToFavorites = (quote) => {
    // Check if quote is already in favorites to avoid duplicates
    if (!favorite.some((fav) => fav.id === quote.id)) {
      setFavorite([...favorite, quote]);
    }
  };

  return (
    <Router>
      <div className={styles.container}>
        <Header favCount={favorite.length} />{" "}
        {/* Fixed typo: length not lenght */}
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
