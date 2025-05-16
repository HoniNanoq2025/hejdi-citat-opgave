import styles from "../styles/Favorites.module.css";

export default function Favorites({ favorite }) {
  return (
    <div className={styles.favorite}>
      {favorite.length === 0 ? (
        <p>Ingen favoritter</p>
      ) : (
        favorite.map((item, index) => (
          <div key={index} className={styles.favoriteItem}>
            <span>{item.author}</span>
          </div>
        ))
      )}
    </div>
  );
}
