import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav class="navbar bg-light">
        <div class="container-fluid">
       <a class="navbar-brand" href="#">
       <img src="src\components\homepage.b4fe8c9f.png"  class="d-inline-block align-text-top" /> Transit Pro
       </a>
       <div class="d-inline-block align-text-top">
       <Link to='/' class="navbar-brand">Home</Link>
       
       </div>
      </div>
     </nav>
      
    </div>
  )
}
