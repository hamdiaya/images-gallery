import Gallery from '@/app/components/Gallery'
import React from 'react'

export default function page ({params}:{params:{term:string}}) {

    return <Gallery topic={params.term}/>
  
}
export function generateMetaData({params}:{params:{term:string}}){
    return {
        title:`Resultes for ${params.term}`
    }

}


