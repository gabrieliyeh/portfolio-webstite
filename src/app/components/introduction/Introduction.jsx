"use client";
import { forwardRef } from "react";
import "./introduction.css";
import useScrollPosition from "../../hooks/useScrollPosition";
import saluteImage from '../../../../public/static/person.png'

const Introduction = forwardRef(({}, ref) => {
  const scrollPosition = useScrollPosition();

  return (
    <section className="intro">
      <div className={`salute  `}>
        <div className={`container  ${scrollPosition > 0 ? "margin-top" : ""}`}>
          <div ref={ref.ref1} className="salute-text-container">
            <h1 className="salute-text">Hi</h1>
          </div>
          <div ref={ref.ref2} className="salute-img-container">
            <img
              src={saluteImage.src}
              alt="a person-holding a book"
              className="salute-img"
            />  
          </div>
        </div>
      </div>
      <div className="name-container">
        <div className="container">
          <h2 ref={ref.ref3} className="name">
            I'm
            <br />
            Gabriel
          </h2>
        </div>
      </div>
      <div className="job-title-container dark">
        <div className="container">
          <h2 className="job-title">a Front End Engineer</h2>
        </div>
      </div>
      <div className="job-title-container purple">
        <div className="container">
          <h2 className="job-title">and Freelancer</h2>
        </div>
      </div>
    </section>
  );
});

export default Introduction;
