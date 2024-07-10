import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {
  const [directors, setDirectors] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/directors')
    .then(response => response.json())
    .then((data) => {
      setDirectors(data)
    })
    .catch((error) => console.error("Error fetching movies", error))
  }, [])

  const directorsList = directors.map((director) => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie) => {
            <li key={movie}>{movie}</li>
          })}
        </ul>
      </article>
    )
  })

  return (
   <>
    <NavBar />
    <h1>Directors Page</h1>
    <main>
      {directorsList}
    </main>
   </>
  );
};

export default Directors;
