import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header_left'>W</h1>
        <ul className='header_right'>
            <li>about</li>
            <li>work</li>
            <li>contact</li>
        </ul>
    </div>
  )
}

export default Header