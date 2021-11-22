import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import axios from '../../axios';
import requests from '../../Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request;
    }

    fetchData();
  }, [])
  console.log(movie);


  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + ' ...' : string;
  }

  return (
    <header className={styles.banner} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
      <div className={styles.bannerContents}>
        <h1 className={styles.bannerTitle}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.bannerBtns}>
          <button className={styles.bannerBtn}>Play</button>
          <button className={styles.bannerBtn}>My List</button>
        </div>
        <h1 className={styles.bannerDesc}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={styles.bannerFadeBottom}></div>
    </header>
  )
}

export default Banner;
