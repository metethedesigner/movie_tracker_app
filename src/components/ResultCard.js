import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ( {movie} ) => {

    const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } = useContext(GlobalContext);

    const storedMovieWatched = watched.find((o) => o.id === movie.id );
    const storedMovie = watchlist.find((o) => o.id === movie.id ) 
    ? true 
    : storedMovieWatched 
    ? true 
    : false
    

  return (
    <div className='flex gap-x-4 pt-8'>
        <div>
            <img  className='rounded-lg w-[200px]' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="movie-cover" />
        </div>
        <div>
            <div className='w-[600px]'>
                <h3 className='text-2xl font-bold'> {movie.title} </h3>
                <h4 className='text-gray-500 font-semibold text-lg'> {movie.release_date ? movie.release_date.substring(0, 4) : "-"} </h4>
                <h4 className='mt-1 font-semibold text-lg'> IMDB: {movie.vote_average ? movie.vote_average : "-"} </h4>
            </div>
        </div>
        
        <div className='flex gap-x-2'>
                <button disabled={storedMovie} className='h-[300px] bg-blue-500 w-[180px] rounded-lg items-center justify-center text-white font-semibold text-lg hover:bg-green-600 cursor-pointer disabled:bg-opacity-50'
                onClick={() => addMovieToWatchlist(movie)}>Add to Watchlist</button>
                
                <button disabled={storedMovieWatched} className='h-[300px] bg-blue-500 w-[180px] rounded-lg items-center justify-center text-white font-semibold text-lg hover:bg-green-600 cursor-pointer disabled:bg-opacity-50'
                onClick={() => addMovieToWatched(movie)}>Add to Watched</button>
        </div>
    </div>
  )
}

export default ResultCard