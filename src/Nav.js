import React, { useContext } from 'react'
import './Nav.css'
import { movie_context } from './MovieContext.js'

export default function Nav() {
    const [movies, setmovies] = useContext(movie_context)
    
    return (
        <nav>
            <h2>Filmes</h2>
            <h3>Lista de Filmes: {movies.length}</h3>
        </nav>
    )
}
