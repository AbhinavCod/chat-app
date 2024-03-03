import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../zustand/useConversation';
import useGetConversations from './hooks/useGetConversations';
import toast from 'react-hot-toast';

function SearchInput() {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} =  useGetConversations();

  const handleSubmit = (e)=>{

    e.preventDefault();
    if(!search) return;

    if(search.length < 3){
      return toast.error("Search term must be at least 3 charcaters long.");
    }

    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }
    else toast.error("NO such user found");

  }

  return (
    <form className='flex items-center' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}></input>
        <button className='btn btn-circle bg-sky-500 text-whiyte' type='submit'>
            <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput