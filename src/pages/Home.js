import { useEffect, useState } from "react";
import routes from "../routes.js"
import NavBar from "../components/NavBar"

function Home() {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(response => response.json)
    .then((data) => {
      setMovies(data)
    })
    .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie= {movie}/>
        ))}
      </main>
    </>
  );
};

export default Home;
