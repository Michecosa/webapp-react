import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const urlMovies = import.meta.env.VITE_ENDPOINT;

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${urlMovies}/${id}`)
      .then((res) => {
        if (!res.data || !res.data.id) {
          return navigate("/notfound");
        }
        setMovie(res.data);
        setLoading(false);
      })
      .catch(() => navigate("/notfound"));
  }, [id, urlMovies, navigate]);

  return (
    <div className="container my-4">
      {loading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : (
        <div className="row g-5 align-items-start">
          <div className="col-md-5 d-flex justify-content-center">
            <div className="p-3" style={{ maxWidth: "350px" }}>
              <img
                src={movie.image_url}
                alt={movie.title}
                className="img-fluid rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col-md-7 text-white">
            <h2 className="fw-bold mb-1">{movie.title}</h2>

            <p className="text-white-50 mb-1">
              <strong>Genre:</strong> {movie.genre}
            </p>

            <p className="text-white-50 mb-1">
              <strong>Director:</strong> {movie.director}
            </p>

            <p className="text-white-50 mb-3">
              <strong>Year:</strong> {movie.release_year}
            </p>

            <p className="mb-4">{movie.abstract}</p>

            <button
              className="btn btn-outline-primary mt-3"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
