import React from "react";
import { projects } from "../data.js";
import { IconBrackets } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Portfolio() {
  return (
    <section id="projects" className="section">
      <Reveal as="h2">
        <IconBrackets className="heading-icon" /> Portfolio
      </Reveal>
      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.name}
            delay={(i % 3) * 90}
            className={`project-row ${i % 2 === 1 ? "project-row-reverse" : ""}`}
          >
            <div className="project-heading">
              <h3>{project.name}</h3>
              <p className="project-org">{project.org}</p>
            </div>
            <div className="project-detail">
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech, j) => (
                  <code key={tech} className={`stack-tag stack-tag-${j % 4}`}>
                    {tech}
                  </code>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
