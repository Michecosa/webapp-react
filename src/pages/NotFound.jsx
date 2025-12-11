import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold">404</h1>
      <p className="text-secondary">How did you even get here?</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go back to the Movie page
      </Link>
    </div>
  );
}
