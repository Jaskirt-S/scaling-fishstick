import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="h-[120px] bg-[rgb(79,114,182)] flex justify-between">
      <p className="p-2.5 text-[70px] m-0 font-extrabold">
        <Link to='/Dashboard'>B A S J S</Link>
          
        </p>
        <img src="./src/assets/Account-User-PNG.png" className="p-2.5" alt=" admin img" />
    </div>
  )
}

export default Header