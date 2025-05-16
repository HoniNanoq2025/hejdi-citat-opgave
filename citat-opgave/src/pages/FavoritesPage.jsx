import Favorites from "../components/Favorites";

export default function FavoritesPage({ favorite }) {
  return (
    <div>
      <h2>Din Favoritter</h2>
      <Favorites favorite={favorite} />
    </div>
  );
}
