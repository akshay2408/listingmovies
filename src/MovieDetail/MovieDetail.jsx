import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:5000/movies";

const MovieDetail = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await axios(`${baseURL}/${location.state.movie._id}`);
      setMovieDetails(response.data);
    };
    getMovieDetails();
  },[]);
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>
              <Link to='/'>
              <i className="fal fa-arrow-left"></i>
                </Link>
              Movie Details
            </h2>
            <div className="dropdown header-right">
              <button
                type="button"
                className="btn-dots"
                data-bs-toggle="dropdown"
              >
              <i className="fal fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="header-details">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{movieDetails.title}</h2>
          </div>
        </div>
      </div>
      <section className="details-box">
        <div className="container">
          <div className="row mb-4">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-5">
              <div className="product-listing-box">
                <a href="details.html">
                  <div className="product-listing-img">
                    <img src={movieDetails.image} alt="img"/>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-7">
              <div className="product-listing-details">
                <h3>{movieDetails.year}</h3>
                <h5>{movieDetails.min}</h5>
                <i className="bi bi-three-dots-vertical"></i>
                <div className="rating-box">{movieDetails.rating}</div>
                <div className="addbtn">
                  <button className="btn btn-secondary">Add to Favorite</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <p>
              {movieDetails.description}
              </p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <div className="trailers">
                <h4>Trailers</h4>
                <div className="play-trailers">
                 <i className="fal fa-play-circle"></i>Play Trailers 1
                </div>
                <div className="play-trailers">
                 <i className="fal fa-play-circle"></i>Play Trailers 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
