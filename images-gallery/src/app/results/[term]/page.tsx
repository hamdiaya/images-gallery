import Gallery from '@/app/components/Gallery'
import React from 'react'

export default function page ({params}:{params:{term:string}}) {

    return <Gallery topic={params.term}/>
  
}



