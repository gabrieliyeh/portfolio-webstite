"use client";
import './projects.css'
import {Footer, Projects } from "../../components";
import projectData from '../../data/projectPageData.json'
import useScrollPosition from '../../hooks/useScrollPosition'
import { useEffect, useState,} from "react"

const ProjectPage = ()=> {
  const scrollPosition = useScrollPosition()
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(()=> {
    let requestId;
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    const phones = Array.from(
      document.getElementsByClassName("phone")
    );
    const laptops = Array.from(
      document.getElementsByClassName("laptop")
    );

    const animate = ()=> {
      phones[0].style.transform = `translateX(${scrollY + 100}px)`;
      laptops[0].style.transform = `translateX(calc(150vh - ${scrollY}px))`;
      phones[1].style.transform = `translateX(calc(-250vh + ${scrollY}px))`;
      laptops[1].style.transform = `translateX(calc(380vh - ${scrollY}px))`;
      laptops[2].style.transform = `translateX(calc(-500vh + ${scrollY}px))`;
      requestId = requestAnimationFrame(animate)
    }
    window.addEventListener('scroll', handleScroll)
    animate()
    return ()=> {
      cancelAnimationFrame(requestId)
      window.removeEventListener('scroll', handleScroll)
    } 
  }, [scrollY])

  return (
    <div className='projects-page'>
      <section className={`${scrollPosition > 0 && 'margin-top'} `}>
      <Projects isWork={true} projectData={projectData}  title= 'Projects' />
      </section>
      <Footer/>
    </div>
  )
}
export default ProjectPage