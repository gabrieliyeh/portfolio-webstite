"use client";
import { useEffect, useRef, useState } from "react";
import {Projects , ContactMe, Introduction} from "../components";
import projectData from '../data/landingPageProjectData.json'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const saluteTextContainerRef = useRef(null);
  const saluteImgContainerRef = useRef(null);
  const nameRef = useRef(null);
  const projectTitleRef = useRef(null);
 
  useEffect(() => {
    let requestId;
    const jobTitleContainers = Array.from(
        document.getElementsByClassName("job-title-container")
    );
    const jobTitles = Array.from(
        document.getElementsByClassName("job-title")
    );
    const phones = Array.from(
      document.getElementsByClassName("phone")
    );
    const laptops = Array.from(
      document.getElementsByClassName("laptop")
    );
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    const animate = () => {
      if(saluteTextContainerRef.current !== null || saluteImgContainerRef.current !== null || nameRef.current !== null || projectTitleRef.current !== null  ){
        saluteTextContainerRef.current.style.transform = `translateY(${
          scrollY * 0.1
        }px)`;
        saluteImgContainerRef.current.style.transform = `translate(${
          scrollY * 0.4
        }px, ${scrollY * 0.7}px)`;
        nameRef.current.style.transform = `translateX(${scrollY * 0.1}px)`;
        projectTitleRef.current.style.transform = `translateY(calc(320vh - ${
          scrollY * 0.9
        }px))`;
      }
      
      jobTitleContainers[0].style.backgroundPositionY = `${-scrollY * 0.5}px`;
      jobTitleContainers[1].style.backgroundPositionY = `${scrollY * 0.5}px`;
      jobTitles[0].style.transform = `translateX(calc(200vh - ${scrollY}px))`;
      jobTitles[1].style.transform = `translateX(calc(-280vh + ${scrollY}px))`;
  
      phones[0].style.transform = `translateX(calc(470vh - ${scrollY}px))`;
      laptops[0].style.transform = `translateX(calc(560vh - ${scrollY}px))`;
      phones[1].style.transform = `translateX(calc(-680vh + ${scrollY}px))`;
     requestId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    animate();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    }
  }, [scrollY]);

  return (
    <>
      <Introduction
        ref={{
          ref1: saluteTextContainerRef,
          ref2: saluteImgContainerRef,
          ref3: nameRef,
        }}
      />
      <Projects
        ref={{
          ref1: projectTitleRef,
        }}
        projectData={projectData}
        title= 'Here are some of my projects'
      />
      <ContactMe />
    </>
  );
}
