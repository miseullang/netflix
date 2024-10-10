import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});


  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  ).json();
  console.log(json);
  setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.description_full}</p>
    </>
  )
}

export default Detail