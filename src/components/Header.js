import React from 'react'
import {FiPlus} from 'react-icons/fi';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-header-color h-16 w-full flex items-center text-white font-semibold text-sm'>
        <div className='container mx-auto flex justify-around items-center'>
            <div >
                <Link to={"/"} className='text-sm tracking-wide bg-blue-500 bg-opacity-20 p-2 rounded-lg hover:bg-green-600 cursor-pointer transition-colors'>İzlenecekler</Link>
            </div>
            <nav>
                <ul className='flex items-center gap-x-4'>
                    <li>
                        <Link to={"/watched"}  className='text-sm tracking-wide bg-blue-500 bg-opacity-20 p-2 rounded-lg hover:bg-green-600 cursor-pointer transition-colors' >İzlenenler</Link>
                    </li>
                    <li className='bg-blue-400 rounded p-1 hover:bg-green-500 transition-colors'>
                        <Link to={"/add"} >
                            <FiPlus size={26}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header