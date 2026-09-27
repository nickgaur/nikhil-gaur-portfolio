import React from "react";
import { experience } from "../data.js";
import { IconBriefcase } from "./Icons.jsx";
import CompanyBadge from "./CompanyBadge.jsx";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal as="h2">
        <IconBriefcase className="heading-icon" /> Experience
      </Reveal>
      <ol className="timeline">
        {experience.map((job, i) => (
          <Reveal
            as="li"
            key={`${job.org}-${job.period}`}
            delay={i * 90}
            className="timeline-item"
          >
            <div className="timeline-dot" style={{ background: job.color }} />
            <div className="timeline-when">{job.period}</div>
            <div className="timeline-body">
              <div className="timeline-heading">
                <CompanyBadge initials={job.initials} color={job.color} />
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline-org">
                    {job.org} — {job.location}
                  </p>
                </div>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
