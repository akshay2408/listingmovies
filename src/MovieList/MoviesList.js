import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const baseURL = "http://localhost:5000/movies";

const MoviesList = () => {
  const [moviesList, setMoviesList] = useState("");

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await axios(baseURL);
      setMoviesList(response.data);
    };
    getPopularMovies();
  }, []);
  return (
    <div>
    <Header />
      <section className="bg-dark">
        <div className="container">
          <div className="row">            
            {moviesList &&
              moviesList.map((movie, i) => {
                return (
                  <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-6" key={i}>
                    <div className="product-listing-box">
                      <div className="product-listing-img">
                        <Link to={"/movie-details"} state={{ movie: movie }}>
                          <img src={movie.image} alt="movie" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}              
          </div>
        </div>
        ;
      </section>
    </div>
  );
};

export default MoviesList;
