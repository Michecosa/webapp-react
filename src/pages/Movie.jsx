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
  const [showAddReview, setShowAddReview] = useState(false);

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
          vote: 0,
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
          <div
            className="rounded p-5 mb-5"
            style={{
              backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)),
      url(${movie.image_url})
    `,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
            }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="text-white">
                <h1 className="fw-bold mb-2">{movie.title}</h1>

                <p className="text-white-50 mb-1">
                  {movie.genre} &bull; {movie.release_year}
                </p>

                <p className="text-white-50 mb-3">
                  Directed by <strong>{movie.director}</strong>
                </p>

                <p className="col-md-8">{movie.abstract}</p>
              </div>

              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => navigate(-1)}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
            </div>
          </div>

          <hr className="border-secondary my-5" />

          <div className="row mt-5">
            <div className="col-12 text-white">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">Reviews</h4>

                <button
                  className="btn btn-sm btn-outline-warning"
                  onClick={() => setShowAddReview(true)}
                >
                  Add review
                </button>
              </div>

              {showAddReview && (
                <form
                  onSubmit={handleSubmit}
                  className="mb-3 p-3 rounded bg-dark border border-secondary"
                >
                  <div className="mb-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-sm bg-dark text-light border-secondary dark-placeholder"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-2 d-flex align-items-center gap-1 ms-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`bi ${
                          star <= formData.vote
                            ? "bi-star-fill text-warning"
                            : "bi-star text-secondary"
                        } fs-5`}
                        role="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, vote: star }))
                        }
                      />
                    ))}
                  </div>

                  <div className="mb-2">
                    <textarea
                      name="text"
                      className="form-control form-control-sm bg-dark text-light border-secondary dark-placeholder"
                      rows="2"
                      placeholder="Write your review"
                      value={formData.text}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => setShowAddReview(false)}
                    >
                      Cancel
                    </button>

                    <button className="btn btn-sm btn-warning px-3">
                      Submit
                    </button>
                  </div>
                </form>
              )}

              {movie.reviews && movie.reviews.length > 0 ? (
                <div className="row g-3">
                  {movie.reviews.map((review) => (
                    <div key={review.id} className="col-12 col-md-6">
                      <div className="card bg-dark text-white h-100 shadow-sm">
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <strong>{review.name}</strong>
                            <span>
                              <i className="bi bi-star-fill text-warning me-1"></i>
                              <strong>{review.vote}/5</strong>
                            </span>
                          </div>

                          <p className="card-text text-white-50 small mb-2">
                            {review.text}
                          </p>

                          <div className="text-end text-white-50 small">
                            {new Date(
                              review.created_at.replace(" ", "T")
                            ).toLocaleDateString("it-IT", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
