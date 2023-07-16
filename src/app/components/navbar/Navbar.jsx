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
        <svg width="40" height="40" viewBox="0 0 122 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_18)">
          <path d="M121.973 28.2204V0L0.000999451 0V28.2204L121.973 28.2204Z" fill="#9C6ACD"/>
          <path d="M27.1436 110.606L27.1436 0.303467L0 0.303467L0 110.606H27.1436Z" fill="#9C6ACD"/>
          <path d="M86.2464 133.971V105.751H0V133.971H86.2464Z" fill="#9C6ACD"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M88.0896 73.5855V133.971H60.946V73.5855H88.0896Z" fill="#9C6ACD"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M88.0896 70.539V98.7609H33.8565V70.539H88.0896Z" fill="#9C6ACD"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M88.0896 35.2558V63.4763H33.5646V35.2558H88.0896Z" fill="#9C6ACD"/>
          <path d="M121.973 134V70.542H94.8294V134H121.973Z" fill="#9C6ACD"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M122 35.2558V63.4763H94.8565V35.2558H122Z" fill="#9C6ACD"/>
          </g>
          <defs>
          <clipPath id="clip0_1_18">
          <rect width="134" height="122" fill="white" transform="matrix(0 1 -1 0 122 0)"/>
          </clipPath>
          </defs>
        </svg>
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
