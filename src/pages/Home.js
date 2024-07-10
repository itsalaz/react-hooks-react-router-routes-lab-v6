import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie= {movie} />
        ))}
      </main>
    </>
  );
};

export default Home;
