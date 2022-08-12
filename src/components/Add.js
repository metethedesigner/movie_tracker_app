import React, { useState } from 'react'
import ResultCard from './ResultCard';

const Add = () => {

  const [query, setQuery] = useState("");
  const [results,setResults] = useState([])

  function onChange(e) {
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=27afc29d57278de8272c2e0056ff534b&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res) => res.json())
    .then((data) => {
      if (!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    });
  }

  return (
   <div>
      <div className='relative'>
          <div className='absolute top-0 left-0 w-full'> 
              <img className='w-full' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
          </div>
              <div className='absolute top-[150px] md:top-[100px] left-[15%] flex flex-col items-left justify-center gap-y-2'>
                <h1 className='text-4xl md:text-6xl text-white font-bold'>Hoş Geldiniz.</h1>
                <p className='text-2xl md:text-3xl text-white font-semibold'>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</p>
              </div>
              
              <div className='absolute top-[325px] left-[15%] flex flex-col items-left justify-center w-[800px] md:w-[1000px]'>
                <input type="text" onChange={onChange} value={query} placeholder='Film, dizi, kişi ara...' className='h-12 rounded-3xl  p-4 outline-none border-none'/>
              </div>
              <div className='absolute mt-[500px] left-[15%] flex flex-col gap-y-4 items-center justify-center'>
                {results.length > 0 && (
                  <ul>
                    {results.map((movie) => (
                    <li key={movie.id}>
                      <ResultCard movie={movie}/>
                    </li>
                ))}
                  </ul>
                )}
              </div>
      </div>
   </div>
  )
}

export default Add