"use client"
import { forwardRef } from 'react'
import './projects.css'
import Project from '../project/Project'

const Projects = forwardRef(({isWork= false, projectData, title}, ref) => {
 
  return (
    <section className='projects container'>
        <h2 ref={ isWork ? null : ref.ref1} className='mod project-title'>{title}
        </h2>
        {projectData.map((project, i)=> (
           <Project key={i}  size={project.size} {...project} />
        ))}
    </section>
  )
})

export default Projects
