import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Actors from "../src/pages/Actors"
import Directors from "../src/pages/Directors"
import Home from "../src/pages/Home"
import Movie from "../src/pages/Movie"
import ErrorPage from "../src/pages/ErrorPage"


const routes = createBrowserRouter([
  {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />

  },
  {
      path: "/actors",
      element: <Actors />,
      errorElement: <ErrorPage />
  },
  {
      path: "/movies/:id",
      element: <Movie />,
      errorElement: <ErrorPage />
  },
  {
      path: "/directors",
      element: <Directors />,
      errorElement: <ErrorPage />
  }
  ])

export default routes;


