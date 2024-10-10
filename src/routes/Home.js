import React, { useEffect, useState } from 'react'
import Movie from '../Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // async-await 사용 (짧은 버전)
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);

    // async-await 사용 (조금 더 긴 버전)
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    // );
    // const json = await response.json();
    // setMovies(json.data.movies);
    // setLoading(false);
  };
  useEffect(() => {
    getMovies();
  },[]);

// console.log(movies);

  // fetch만 사용
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
  //   ).then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // },[]);

  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : (
        <div>{movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}/>
          ))}
        </div>
      )}
    </div>
  )

}

export default Home
