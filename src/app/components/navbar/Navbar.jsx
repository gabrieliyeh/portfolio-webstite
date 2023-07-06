"use client"
import Link from "next/link";
import "./navbar.css";
import { useEffect, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import { usePathname} from "next/navigation";
import { Sidebar } from "..";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const scrollPosition = typeof window !== 'undefined' && useScrollPosition()
  const pathname = usePathname()

  const handleToggle = ()=> {
    setShowSidebar(!showSidebar)
  }

  useEffect(()=> {
    if(showSidebar){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'unset';
    }
    return ()=>  document.body.style.overflow = 'unset';
  }, [showSidebar])

  return (
    <>
       <Sidebar showSidebar={showSidebar} handleToggle={handleToggle} />
      <nav className={`${scrollPosition > 0 ? 'fixed': ''} `}>
      <div className="nav-center">
        <div className="logo-container">
        <Link href="/">
        <img src="/static/logo-purple.png" alt="brand-logo" />
        </Link>
        </div>
        <ul>
          <li className="home-link">
            <Link className={`${pathname === '/' ? 'nav-active': ''} `} href={"/"}>Home</Link>
          </li>
          <li className="about-link">
          <Link className={pathname === '/about' ? 'nav-active': ''} href={"/about"}>About</Link>
          </li>
          <li className="projects-link">
          <Link className={pathname === '/projects' ? 'nav-active': ''} href={"/projects"}>Projects</Link>
          </li>
        </ul>
        <svg
          className={`ham hamRotate ham1 ${showSidebar ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="60"
          onClick={handleToggle}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
      </svg>
      </div>
    </nav>
    </>
  
  );
};

export default Navbar;
