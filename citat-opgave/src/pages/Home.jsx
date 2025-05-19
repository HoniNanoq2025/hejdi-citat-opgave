import { useState } from "react";
import QuoteList from "../components/QuoteList";
import SearchFilter from "../components/SearchFilter";
import SortingDropdown from "../components/SortingDropdown";
import styles from "../App.module.css";
import Pagination from "../components/Pagination";

export default function Home({
  quotes,
  addToFavorites,
  page,
  setPage,
  totalPages,
}) {
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredandSortedQuotes = () => {
    let filtered = [...quotes];

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (quote) =>
          quote.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
          quote.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "author") {
      filtered.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortBy === "quoteLength") {
      filtered.sort((a, b) => a.quote.length - b.quote.length); // Fixed typo: length not lenght
    }

    return filtered;
  };

  const sortedFilteredQuotes = getFilteredandSortedQuotes();

  const handleReset = () => {
    setSortBy("");
    setSearchTerm("");
  };

  return (
    <div className={styles.homeContainer}>
      <h1>Citat Liste</h1>

      <div className={styles.controls}>
        <div className={styles.sorting}>
          <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SortingDropdown sortBy={sortBy} setSortBy={setSortBy} />

          <button className={styles.resetBtn} onClick={handleReset}>
            Nulstil sortering
          </button>
        </div>
      </div>

      <QuoteList
        quotes={sortedFilteredQuotes}
        addToFavorites={addToFavorites}
      />

      <div className={styles.pagination}>
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
