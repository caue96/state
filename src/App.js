import React,  { useState, Fragment, useContext } from 'react'
import Nav from './Nav.js'
import './global.css'
import { MovieProvider } from './MovieContext.js'
import { movie_context } from './MovieContext.js'

function App() {
  const [movies, setmovies] = useContext(movie_context)

  return (
    <Fragment>
      <MovieProvider>
        <Nav/>
      </MovieProvider>
      {
        movies.map((movie, i, a) => (
          <div className='movie-block'>
            <h3>{i = i + 1}</h3>
            <h1>{movie.name}</h1>
            <h2>R$ {movie.preco}</h2>
          </div>
        ))
      }
    </Fragment>
  );
}

export default App;
