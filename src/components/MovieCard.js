import React from 'react'
import MovieControls from './MovieControls'

const MovieCard = ( {movie, type} ) => {
  return (
    <div className='pt-8 relative'>
        <div>
            {movie.poster_path ? (
                <img  className='rounded-lg w-[200px]' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="movie-cover" />
            ) : "-"} 
            <MovieControls movie={movie} className="absolute" type={type} />
        </div>
    </div>
  )
}

export default MovieCard