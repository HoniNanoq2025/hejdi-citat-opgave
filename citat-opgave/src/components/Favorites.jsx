import styles from "../styles/Favorites.module.css";

export default function Favorites({ favorite }) {
  return (
    <div className={styles.favorite}>
      {favorite.length === 0 ? (
        <p>
          Ingen favoritter endnu - klik på hjerte-ikonet på citaterne for at
          tilføje favoritter
        </p>
      ) : (
        favorite.map((item) => (
          <div key={item.id} className={styles.favoriteItem}>
            <img
              src={`https://picsum.photos/seed/${item.id}/100`}
              alt={item.author}
              className={styles.favoriteImage}
            />
            <div className={styles.favoriteContent}>
              <blockquote>"{item.quote}"</blockquote>
              <p>
                <em>— {item.author}</em>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
