export default function Card({ movie }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card shadow-sm h-100">
        {movie.image_url ? (
          <img
            src={movie.image_url}
            alt={movie.title}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
        ) : (
          <div
            className="d-flex align-items-center justify-content-center bg-secondary text-white"
            style={{ height: "300px" }}
          >
            No image
          </div>
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{movie.title}</h5>

          <p className="text-secondary mb-4">
            {movie.abstract ? movie.abstract : "No description available"}
          </p>

          <p className="mb-1">
            <strong>Regista:</strong> {movie.director || "N/A"}
          </p>

          <p className="mb-1">
            <strong>Genere:</strong> {movie.genre || "N/A"}
          </p>

          <p className="mb-3">
            <strong>Anno:</strong> {movie.release_year || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
