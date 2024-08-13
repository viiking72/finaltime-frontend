import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>HomePage pe aapka hardik swagat hai</h1>
        <br />
        <Link to="/signup">Signup karne ke liye click kare</Link>
        <br />
        <Link to="/login">Login karne ke liye click kare</Link>
    </div>
  )
}

export default Home