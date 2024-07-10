import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header_left'>
          W
          </h1>
        <ul className='header_right'>
          <Link to={"/About"}>
            <li>01 <br />About</li>
            </Link>
            <Link to={"/Work"}>
            <li>02 <br />Work</li>
            </Link>
            <Link to={"/Contact"}>
            <li>03 <br />Contact</li>
            </Link>
          <Link to={"/Signup"}>
            <li>04 <br />Signup</li>
            </Link>
        </ul>
    </div>
  )
}

export default Header