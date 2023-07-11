import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails, getSimilarMovies, getMovieImages } from "../../api/movies";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviePage.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const imagePrefixUrl = "https://image.tmdb.org/t/p/w500";
function MoviePage() {
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState({});


  const [images, setImages] = useState([]);


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

  const fetchMovieImages = () => {
    getMovieImages(movieId).then((res) => {
      if (!res) return;
      setImages(res.backdrops);
      // console.log(res.backdrops);
    });
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchSimilarMovies();
    fetchMovieImages()

    // eslint-disable-next-line
  }, [movieId]);


  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.main} flex flex-col md:flex-col xl:flex-row`}>
          <div className="min-h-80 md:min-w-[45vw] flex xs:flex-col sm:flex-col md:flex-col xl:flex-row ">

            {/* <img className={!movie?.backdrop_path ? 'max-w-80 max-h-80 w-80 h-80 my-auto ' : ''} src={!movie?.backdrop_path ? 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png' : `${imagePrefixUrl}${movie.backdrop_path}`} alt="aMovieImg" /> */}
            <div className="h-auto w-auto max-h-fit max-w-[48vw] m-auto">
              <Carousel autoPlay infiniteLoop interval={2000} swipeable>
                {
                  images && images.map((item, index) => {
                    return (
                      <div className="img " key={index}>
                        {/* <img src={item.file_path} alt="item.xss" /> */}
                        <img src={`${imagePrefixUrl}${item.file_path}`} alt="aMovieImg" />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
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
          {/* <hr /> */}
          <div className={styles.movies}>
            {similarMovies.map((item) => (
              <MovieCard movie={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="new flex flex-wrap gap-y-5 my-7 justify-evenly items-center">
        <div className={'w-full text-2xl font-bold'}>Movie Images</div>

        <Carousel>
          {
            images && images.map((item, index) => {
              return (
                <div className="img  " key={index}>
                  {/* <img src={item.file_path} alt="item.xss" /> */}
                  <img src={`${imagePrefixUrl}${item.file_path}`} alt="vf" />
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </>
  );
}

export default MoviePage;
