import React from "react";
import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";

const imagePrefixUrl = "https://image.tmdb.org/t/p/w200";

function MovieCard(props) {
  const movie = props?.movie;
  // console.log(movie);

  return (
    <Link
      to={`/movie/${movie.id}`}
      // target="_blank"
      className={styles.container}
      title={movie?.title}
    >
      <img src={`${imagePrefixUrl}${movie?.poster_path}`} alt={movie?.title} />
      <p>{movie?.title}</p>

      <button className="my-2">Book Now</button>
    </Link>
  );
}

export default MovieCard;
