import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card shadow-sm bg-dark h-100">
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

        <div className="card-body d-flex flex-column text-white-50">
          <Link
            to={`/movie/${movie.id}`}
            className="text-decoration-none"
            style={{ color: "white" }}
          >
            <h5 className="card-title fw-bold">{movie.title}</h5>
          </Link>

          <p className="text-secondary mb-4">
            {movie.abstract ? movie.abstract : "No description available"}
          </p>

          <p className="mb-1">
            <strong>Director:</strong> {movie.director || "N/A"}
          </p>

          <p className="mb-1">
            <strong>Genre:</strong> {movie.genre || "N/A"}
          </p>

          <p className="mb-3">
            <strong>Year:</strong> {movie.release_year || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
