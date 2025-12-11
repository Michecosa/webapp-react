import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
const urlMovies = import.meta.env.VITE_ENDPOINT;

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
        <div className="spinner-border text-primary" role="status"></div>
      ) : (
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
      )}
    </>
  );
}
