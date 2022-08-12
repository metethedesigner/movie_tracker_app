import React, { useContext } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FaRegTimesCircle } from 'react-icons/fa'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ( {movie, type} ) => {

    const {removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeMovieFromWatched} = useContext(GlobalContext);

  return (
    <div>
        <div className='absolute flex gap-x-2 bottom-4 left-16 text-gray-300 '>
            {type === "watchlist" && (
                <>
                     <button onClick={() => addMovieToWatched(movie)} className='hover:text-green-600 '>
                        <AiOutlineEye size={30}/>
                    </button>
                    <button onClick={() => removeMovieFromWatchlist(movie.id)} className='hover:text-green-600 '>
                        <FaRegTimesCircle size={30}/>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                     <button onClick={() => moveToWatchlist(movie)} className='hover:text-green-600 '>
                        <AiOutlineEyeInvisible size={30}/>
                    </button>
                    <button onClick={() => removeMovieFromWatched(movie.id)} className='hover:text-green-600 '>
                        <FaRegTimesCircle size={30}/>
                    </button>
                </>
            )}
           
        </div>
    </div>
  )
}

export default MovieControls