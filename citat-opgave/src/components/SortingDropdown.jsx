import styles from "../styles/SortingDropdown.module.css";

export default function SortingDropdown({ sortBy, setSortBy }) {
  return (
    <div className={styles.dropdown}>
      <label htmlFor="sort">Sortér efter:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Ingen</option>
        <option value="author">Forfatter (A-Z)</option>
        <option value="quoteLength">Citat længde (lav til høj)</option>
      </select>
    </div>
  );
}
