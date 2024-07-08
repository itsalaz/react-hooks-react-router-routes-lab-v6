import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import NavBar from "../components/NavBar"

function Movie () {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const foundMovie = data.movies.find(movie => movie.id === parseInt(id))
      setMovie(foundMovie)
    })
    .catch(error => console.error("Error fetching movie:", error))
  }, [id])

  if(!movie) {
    return <h1>Movie not found</h1>
  }

  return (
      <div>
        <NavBar/>
        <h1>{movie.title}</h1>
        <p>{movie.time} min</p>
        <div>
          {movie.genres.map((genre, index) => {
            <span key={index}>{genre}</span>
          })}
        </div>
      </div>
  );
};

export default Movie;
