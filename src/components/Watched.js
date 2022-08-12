import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';

const Watched = () => {
  const {watched} = useContext(GlobalContext);

  return (
  <div>
    <div>
      <div className='p-8 font-bold text-3xl flex justify-between items-center'>
        <h1 className='bg-indigo-900 text-white py-2 px-4 rounded-lg'>İzlenen Filmler</h1>
        <div className='bg-green-600 py-2 px-4 text-sm text-white rounded-xl'>
          {watched.length} Movies
        </div>
      </div>
      {watched.length > 0 ? (
          <div className="grid grid-cols-4 ml-[10%]">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="mt-8 font-semibold text-center text-4xl text-gray-400">Listenizde herhangi bir film yok.</h2>
        )}
    </div>

  </div>
  )
}


export default Watched;