"use client"
import Link from "next/link";
import "./navbar.css";
import { useState } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const scrollPosition = typeof window !== 'undefined' && useScrollPosition()

  const handleToggle = ()=> {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
       <Sidebar showSidebar={showSidebar} handleToggle={handleToggle} />
      <nav className={`${scrollPosition > 0 ? 'fixed': ''}`}>
      <div className="nav-center">
        <img src="/static/logo-purple.png" alt="brand-logo" />
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
          <Link href={"/about"}>About</Link>
          </li>
          <li>
          <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  
  );
};

export default Navbar;
