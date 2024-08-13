import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Friends = () => {
    const location=useLocation()
  return (
    <div>
        <h1>Swagat hai mere dost {location.state.id}</h1>
        <h2>Dua karta hoon ki aap jald hi kamiyaabi ki uchaiyon ko chhue.</h2>
        <h3>Aapke jaisa dost paake mai dhanya hua mitra.</h3>
        <br />
        <Link to="/">HomePage me jaane ke liye click kare.</Link>
    </div>
  )
}

export default Friends