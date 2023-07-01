import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails, getSimilarMovies } from "../../api/movies";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviePage.module.css";


const imagePrefixUrl = "https://image.tmdb.org/t/p/w500";
function MoviePage() {
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const price = Math.floor(Math.random() * 100 + 200);

  const fetchMovieDetails = () => {
    getMovieDetails(movieId).then((res) => {
      if (!res) return;
      setMovie(res);
    });
  };

  const fetchSimilarMovies = () => {
    getSimilarMovies(movieId).then((res) => {
      if (!res) return;
      setSimilarMovies(res.results);
    });
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchSimilarMovies();

    // eslint-disable-next-line
  }, [movieId]);


  return (
    <div className={styles.container}>
      <div className={`${styles.main} sm:flex-col md:flex-col xl:flex-row`}>
        <img className={!movie?.backdrop_path ? 'max-w-80 max-h-80 w-80 h-80 my-auto' : ''} src={!movie?.backdrop_path ? 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png' : `${imagePrefixUrl}${movie.backdrop_path}`} alt="aMovieImg" />
        <div className={styles.details}>
          <label>Title</label>
          <div className={styles.title}>{movie?.title}</div>
          <div className={styles.sub}>{movie?.tagline}</div>
          <label>Story</label>
          <div className={styles.desc}>{movie?.overview}</div>

          <div className="mt-4 mb-2 text-lg flex justify-between">
            <span
              data-tooltip-target="money"
              className="mb-2 text-green-500 transition-colors hover:border-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >
              Run time : <span >{movie?.runtime} (Mins) </span>
            </span>
            <span
              data-tooltip-target="money"
              className="mb-2 text-green-500 transition-colors hover:border-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >
              Language: <span className='uppercase'>{movie?.original_language}</span>
            </span>
            <span
              data-tooltip-target="money"
              className="pl-2 mb-2 text-green-500 transition-colors hover:border-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
            >
              Price: {`${price}`}
            </span>

          </div>

          <Link to={`/movie/${movieId}/${price}`}
            className="z-[2] inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs text-center font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] mx-1"

            type="button"
            id="sign-btn">
            Book Now
          </Link>
        </div>
      </div>
      <div className={styles.similar}>
        <div className={styles.title}>Similar movies</div>
        <div className={styles.movies}>
          {similarMovies.map((item) => (
            <MovieCard movie={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
