import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import axios from '../../axios';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.rowPosters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <section className={`${styles.rowPoster} ${isLargeRow && styles.rowPosterLarge}`}>
                < img

                  key={movie.id}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name || movie.title} />
                <div className={styles.rowPosterDesc}>
                  <h5>
                    {movie.name || movie.title}
                  </h5>
                </div>
              </section>
            )
        )}
      </div>
    </div>
  )
}

export default Row;
