import React from 'react'

const Nav = () => {
  return (
    
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home2">Home2</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    </BrowserRouter>
    
  )
}

export default Nav
