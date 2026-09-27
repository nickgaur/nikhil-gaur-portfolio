import React from "react";
import { certifications, achievements } from "../data.js";
import { IconRibbon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <Reveal as="h2">
        <IconRibbon className="heading-icon" /> Credentials
      </Reveal>
      <div className="credentials-grid">
        <Reveal>
          <p className="skill-label">Certifications</p>
          <ul className="ledger">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <p className="skill-label">Achievements</p>
          <ul className="ledger">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
