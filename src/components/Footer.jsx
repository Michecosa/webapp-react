export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-white mt-5 bg-dark">
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        <div className="me-5">
          <span>Follow us on social media for news and new films</span>
        </div>

        <div>
          <a href="#" className="text-white me-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">MovieReview</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                MovieReview is a simple platform where you can discover movies,
                read user reviews, and share your own opinions.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Movies</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#" className="text-white">
                  Latest releases
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Most reviewed
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Top rating
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Genres
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">User</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#" className="text-white">
                  My profile
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  My reviews
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Write a review
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Support
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contacts</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="bi bi-envelope me-2"></i>support@moviereview.com
              </p>
              <p>
                <i className="bi bi-info-circle me-2"></i>About the project
              </p>
              <p>
                <i className="bi bi-shield-check me-2"></i>Privacy & Terms
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3 bg-darker">
        &copy; {new Date().getFullYear()} MovieReview &ndash; All rights
        reserved
      </div>
    </footer>
  );
}
