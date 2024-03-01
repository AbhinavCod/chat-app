import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form className='flex items-center'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'></input>
        <button className='btn btn-circle bg-sky-500 text-whiyte' type='submit'>
        <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput