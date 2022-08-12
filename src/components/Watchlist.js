import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';

const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);

  return (
  <div>
    <div>
      <div className='p-8 font-bold text-3xl flex justify-between items-center'>
        <h1 className='bg-green-600 text-white py-2 px-4 rounded-lg'>İzlenecek Filmler</h1>
        <div className='bg-green-600 py-2 px-4 text-sm text-white rounded-xl'>
          {watchlist.length} Movies
        </div>
      </div>
      {watchlist.length > 0 ? (
          <div className="grid grid-cols-4 ml-[10%]">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="mt-8 font-semibold text-center text-4xl text-gray-400">Listenizde herhangi bir film yok.</h2>
        )}
    </div>

  </div>
  )
}


export default Watchlist