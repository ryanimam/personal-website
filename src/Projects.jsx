import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <main>
      <section id='projects-container'>
        <div className="project">
            <h2>Project 1</h2>
            <p>A brief description of Project 1.</p>
            <a href="https://example.com">Link to Project 1</a>
        </div>
        <div className="project"> 
            <h2>Project 2</h2>
            <p>A brief description of Project 2</p>
            <a href="https://example.com">Link to Project 2</a>
        </div>
      </section>
    </main>
  );
};

export default Projects;