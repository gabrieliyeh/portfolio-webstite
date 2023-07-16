"use client";
import Link from "next/link"
import "./sidebar.css"
import { usePathname } from "next/navigation";

const Sidebar = ({showSidebar, handleToggle}) => {
  const pathname = usePathname()

  return (
    <aside onClick={handleToggle} className={`${showSidebar && 'showSidebar'} backdrop`}>
      <div onClick={e=> e.stopPropagation()} className='sidebar'>
        <ul>
          <li onClick={handleToggle} className="">
            <Link className={`${pathname === '/' ? 'nav-active': ''} home-link `} href='/'>
              Home
            </Link>
          </li>
          <li onClick={handleToggle} className="">
            <Link className={`${pathname === '/about' ? 'nav-active': ''} about-link`}  href='/about'>
              About
            </Link>
          </li>
          <li onClick={handleToggle} className="">
            <Link className={`${pathname === '/projects' ? 'nav-active': ''} projects-link`} href='/projects'>
              Project
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
