import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  overflow-y: scroll;
  overflow-x: hidden;
  
  color: white;

  width: 100%;
  min-height: 100vh;
  padding: 2rem 4rem;
  box-sizing: border-box;

  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CoverImg = styled.img`
  max-width: 500px;
  max-height: 700px;
`;

const Rating = styled.span`
  color: rgba(255,255,255,0.7);
`;

const Content = styled.div`
  max-width: calc(100% - 700px);
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GenreWrapper = styled.ul`
  width: fit-content;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Genre = styled.li`
  width: fit-content;
  font-size: 1rem;

  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  background-color: burlywood;

  list-style: none;
`;



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
    <Container background={movie.background_image}>
      <Center>
        <Link to={movie.url}>
          <CoverImg src={movie.large_cover_image} />
        </Link>
        <Content>
          <h1>{movie.title}</h1>
          <Rating>Rating : {movie.rating} / 10</Rating>
          <Rating>Likes : {movie.like_count}</Rating>
          <Rating>RunTime : {movie.runtime}</Rating>
          <GenreWrapper>
            {movie.genres && movie.genres.length > 0 && movie.genres.map((genre, index) => (
              <Genre key={index}>{genre}</Genre>
            ))}
          </GenreWrapper>
          <p>{movie.description_full === "" ? "Description does not exist" : movie.description_full}</p>
        </Content>
      </Center>
    </Container>
  )
}

export default Detail