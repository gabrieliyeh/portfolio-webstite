"use client";
import "./about.css";
import useScrollPosition from "../../hooks/useScrollPosition";
import {Footer} from "../../components";

import { useEffect, useRef, useState } from "react";
const AboutPage = () => {
  const nameRef = useRef()
  const [scrollY, setScrollY] = useState(0);
  useEffect(()=> {
    let requestId;

    const handleScroll = ()=> {
      setScrollY(window.scrollY)
    }

    const animate = ()=> {
      if(nameRef.current){
        nameRef.current.style.transform = `translateX(-${scrollY * 0.3}px)`;
        nameRef.current.style.color = `${scrollY !== 0 && '#aaa'}`;
        requestId = requestAnimationFrame(animate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    animate()

    return ()=> {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(requestId)
    }
  }, [scrollY])
  const scrollPosition = typeof window !== "undefined" && useScrollPosition();
  return (
    <section className="about-page">
      <div className={`container  ${scrollPosition > 0 ? "margin-top" : ""}`}>
        <div className="name-wrapper">
          <h1 ref={nameRef} className="about-text">Iyeh Onyewuchi Gabriel</h1>
          <a className="download-link" target="_blank" download rel="noopener noreferrer" href="iyehgabrielCV.pdf">
            <span>Download</span>
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="about-desc">
          <div className="left">
            <h2 className="title">FrontEnd Tools</h2>
            <p>
              <span>JavaScript(ES6+),</span>
              <span> TypeScript,</span>
              <span> Next Js,</span>
              <span> HTML5,</span>
              <span> React JS,</span>
              <span> Redux, </span>
              <span> Redux Toolkit,</span>
              <span> Redux Thunk,</span>
              <span> Vue Js,</span>
              <span> Vue X,</span>
              <span> React Query,</span>
              <span>PWA,</span>
              <span> SWR,</span>
              <span> Context API,</span>
              <span> React Testing Library,</span>
              <span> Vitest,</span>
              <span> Jest,</span>
              <span>Git/Gitlab/Github/BitBucket.</span>
              <span>Strapi/Firebase.</span>
            </p>

            <h2 className="title">UI Libraries</h2>
            <p>
              <span> CSS3/SCSS/SASS, </span>
              <span> Tailwind CSS,</span>
              <span> Framer Motion, </span>
              <span> GSAP,</span>
              <span> Material UI,</span>
              <span>Bootstrap, </span>
              <span>Framer Motion.</span>
            </p>
            <h2 className="title">Interests</h2>
            <p>
              <span>E-Commerce,</span>
              <span> Creative Development,</span>
              <span> Artificial Intelligence and Machine Learning,</span>
              <span> Professional Development,</span>
              <span> Augmented Reality,</span>
              <span> Web3.</span>
            </p>
          </div>

          <article className="right">
            <p>
              Welcome to my corner of the internet! I am a frontend developer
              based in Lagos, Nigeria, and a creative problem solver who is
              passionate about leveraging technology to improve people's lives.
            </p>
            <p>
              I've been a part of this industry for over three years, and within
              those years, I've honed my analytic and collaboration skills,
              which makes working with a team easier. I've had the opportunity
              to work on a variety of projects, from small landing pages to
              large-scale web applications. I've also had the opportunity to
              serve as the lead software engineer for some of these projects.
            </p>
            <p>One of my favorite parts of this job is collaborating with designers and other developers to bring their ideas to life. I enjoy brainstorming creative solutions to complex problems, and I'm always looking for ways to improve my skills and stay up-to-date with the latest front-end technologies.</p>

            <p>When I'm not coding, you can usually find me reading a book, playing chess with friends, playing video games, or listening to music. I mostly listen to afrobeats, R&B, and hip-hop. Some of my favorite artists are Wizkid, Ed Sheeran, and Jay-Z.</p>
            <p>
            I'm surprised you actually read all of that. Well, thanks for taking the time to learn a bit about me.
            </p>
            <p>
            I'm excited to connect with others who share my passion for technology. I'm available for full-time roles and freelance projects worldwide. Let's collaborate and create something amazing together! ❤️
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutPage;
