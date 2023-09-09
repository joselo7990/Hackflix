// import movies from "../data/movies";
import React from "react";
import ReactStars from "react-rating-stars-component";
import ModalPage from "./Modal";
import MovieComponent from "./MovieComponent";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { useState } from "react";

const Movies = function () {
  const [rating, setRating] = React.useState(0);

  const ratingChanged = (newRating) => {
    Setpage(1);
    setRating(newRating);
  };
  const [movies, setMovies] = React.useState([]);
  const [page, Setpage] = React.useState(1);
  React.useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=af2964833f9387b623327e68d84b87c1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&vote_average/gte=${
          rating * 2 - 2
        }`
      );
      setMovies(response.data.results);
    };
    getMovies();
  }, [rating]); //array de dependencia

  const fetchData = async () => {
    Setpage(page + 1);
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=af2964833f9387b623327e68d84b87c1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&vote_average/gte=${
        rating * 2 - 2
      }`
    );
    setMovies([...movies, ...response.data.results]); // guarda ...movies y ..response en nuevo array
  }; //  trae las 20 siguientes movies
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="mt-2">
          <p>Filtrar por rating:</p>
        </div>

        <div className="">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div>
          <p className="mt-2">& Mas</p>
        </div>
      </div>
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={fetchData} // esta es la funcion que trae el scroll
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="row">
          {movies
            // .filter((movie) => movie.vote_average >= rating * 2 - 2)
            .map((film) => (
              <div key={film.id} className="col-lg-3 col-md-6 col-12">
                <MovieComponent film={film} />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Movies;
