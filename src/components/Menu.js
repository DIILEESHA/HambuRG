import React from 'react';
import {useState} from 'react'
import {CgMenuRightAlt} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import '../styles/menu.css'


const Menu = () => {
    const[IsOpen ,SetIsOpen] = useState(false);
  return <>
  <div className="menu-btn">
      <button onClick={()=>SetIsOpen(!IsOpen)}>
          <CgMenuRightAlt/>
      </button>
  </div>
  {IsOpen &&(
      <header className='header open'>
<nav>
    <ul>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/'>homepage</Link>
        </li>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/projects'>project</Link>
        </li>
        <li>
            <Link></Link>
        </li>
    </ul>
</nav>
      </header>
  )}
  </>;
};

export default Menu;
