import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"

function Movie() {
  const [movie, setMovie] = ({})
  const {id} = useParams
  
  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
    .then(response => response.json)
    .then((data) => {
      setMovie(data)
    })
    .catch((error) => console.error(error))
  }, [movie.id])

  if(!movie.name){
    return <h1>Loading...</h1>
  };

  return (
      <div>
        <NavBar/>
        <h1>{movie.title}</h1>
        <p>{movie.time} min</p>
        <div>
          {movie.genres && movie.genres.map((genre, index) => {
            <span key={index}>{genre}</span>
          })}
        </div>
        <MovieCard movie={movie}/>
      </div>
  );
};

export default Movie;
