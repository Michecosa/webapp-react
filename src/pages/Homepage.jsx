import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { urlMovies } from "../data/api";

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(urlMovies)
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [urlMovies]);

  return (
    <>
      {loading ? (
        <div className="container text-center mt-5">
          <div className="spinner-border text-white" role="status"></div>
        </div>
      ) : (
        <div className="container mt-4">
          <div className="text-center mb-5">
            <h1 className="text-white display-4 fw-bold">MovieReview</h1>
            <p className="text-secondary fs-5 mt-3">
              Exploring films beyond the screen, one review at a time
            </p>
            <hr className="border-secondary mb-4" />
          </div>

          {movies.length > 0 ? (
            <div className="row">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="text-center mt-4 text-white">
              Oggi niente film, va a leggere un libro
            </p>
          )}
        </div>
      )}
    </>
  );
}
