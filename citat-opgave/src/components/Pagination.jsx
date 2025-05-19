export default function Pagination({ page, total, onPageChange }) {
  return (
    <div>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Forrige
      </button>

      <span>
        {" "}
        Side {page} af {total}{" "}
      </span>

      <button onClick={() => onPageChange(page + 1)} disabled={page === total}>
        Næste
      </button>
    </div>
  );
}
