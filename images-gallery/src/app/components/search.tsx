'use client'
import React from 'react'
import { useState,FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function search ()  {
    const [search,setSearch]=useState('');
    const router=useRouter();
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        router.replace(`/results/${search}`)
        setSearch('')

    }
  return (
    <form className='flex justify-center md:justify-between ' onSubmit={handleSubmit}>
        <input type="text" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Search'
        className='bg-white p-2 w-[260px] sm:w-80 text-xl r text-black rounded-xl'
        />
    </form>
  )
}

