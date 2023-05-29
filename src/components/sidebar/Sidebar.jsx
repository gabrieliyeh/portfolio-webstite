"use client";
import Link from "next/link"
import "./sidebar.css"

const Sidebar = ({showSidebar, handleToggle}) => {

  return (

    <aside className={`${showSidebar && 'showSidebar'} backdrop`}>
      <div className={`sidebar ${showSidebar && 'showSidebar'}`}>
        <ul>
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about'>
              About
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              Project
            </Link>
          </li>
  
        </ul>
        <button onClick={handleToggle}>cancel</button>
      </div>
    </aside>
  )
}

export default Sidebar
