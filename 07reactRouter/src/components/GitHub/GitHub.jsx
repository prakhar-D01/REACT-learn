import React from 'react'
import { use } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data= useLoaderData()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/prakhar-D01')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className= 'text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers: {data.followers}</div>
  )
}

export default GitHub

export const githubInfoLoader= async() =>{
    const response = await fetch('https://api.github.com/users/prakhar-D01')
    return response.json()
}