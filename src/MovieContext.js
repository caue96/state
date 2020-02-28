import React, { useState, createContext } from 'react'

export const movie_context = createContext()

export function MovieProvider (props){
    const [movies, set_movies] = useState(
        [{
          name: 'HP1',
          preco: 1,
          id: 1
        },
        {
          name: 'HP2',
          preco: 3,
          id: 2
        },
        {
            name: 'HP3',
            preco: 6,
            id: 3
        }]
      )

    return (
        <movie_context.Provider value={[movies, set_movies]}>
            {props.children}
        </movie_context.Provider>
    )
}