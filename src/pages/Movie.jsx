import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { urlMovies } from "../data/api";

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${urlMovies}/${id}/reviews`, formData)
      .then((res) => {
        setMovie({
          ...movie,
          reviews: [...movie.reviews, res.data],
        });

        setFormData({
          name: "",
          vote: "",
          text: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        <>
          <div className="row g-5 align-items-start">
            <div className="col-md-5 d-flex justify-content-center">
              <div className="pe-lg-3">
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

          <div className="row mt-5">
            <div className="col-12 text-white">
              <h4 className="mb-3">Reviews</h4>

              <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-2">
                  <select
                    name="vote"
                    className="form-select"
                    value={formData.vote}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Vote</option>
                    {[1, 2, 3, 4, 5].map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-2">
                  <textarea
                    name="text"
                    className="form-control"
                    rows="3"
                    placeholder="Write your review"
                    value={formData.text}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button className="btn btn-warning">Submit review</button>
              </form>

              {movie.reviews && movie.reviews.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {movie.reviews.map((review) => (
                    <li
                      key={review.id}
                      className="list-group-item bg-dark text-white"
                    >
                      <strong className="me-1">{review.name}</strong> &ndash;{" "}
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      <strong>{review.vote}/5</strong>
                      <p className="mb-1 text-white-50">{review.text}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-white-50">No reviews available.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
