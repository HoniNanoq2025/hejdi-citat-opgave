import styles from "../styles/SearchFilter.module.css";

export default function SearchFilter({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.search}>
      <label htmlFor="search">Søg</label>
      <input
        type="text"
        id="search"
        placeholder="søg her..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
