import React,{useState} from 'react'
import ProjCard from '../Cards/ProjCard'
import "../Portfolio/Portflio.css"

export default function Portfolio() {
  return (
    <div>
        <div>
            <h1>Portfolio</h1>
        </div>
        <div>
            <h2>Filter by languages</h2>
        </div>
        <div>
            <ProjCard />
        </div>
    </div>
  )
}
