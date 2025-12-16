import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { urlMovies } from "../data/api";
import { useLoading } from "../context/LoadingContext";

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    axios
      .get(urlMovies)
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-white display-4 fw-bold">MovieReview</h1>
        <p className="text-secondary fs-5 mt-3">
          Exploring films beyond the screen, one review at a time
        </p>
        <hr className="border-secondary mb-4" />
      </div>

      <div className="container mt-4">
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
    </>
  );
}
