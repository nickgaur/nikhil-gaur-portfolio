import React from "react";
import { profile } from "../data.js";
import HeroGraphic from "./HeroGraphic.jsx";
import LogoMarquee from "./LogoMarquee.jsx";

export default function Hero() {
  return (
    <section id="profile" className="section hero-section">
      <div className="hero">
        <div className="hero-text">
          <h1 className="reveal reveal-1">
            Building the systems people trust with their identity,
            <br />
            one release at a time.
          </h1>
          <p className="hero-summary reveal reveal-2">{profile.summary}</p>
          <p className="hero-meta reveal reveal-3">
            Based in {profile.location}, currently three years deep into
            production systems at Fiserv.
          </p>
        </div>
        <div className="hero-art reveal reveal-2" aria-hidden="true">
          <HeroGraphic />
        </div>
      </div>
      <div className="reveal reveal-3">
        <LogoMarquee />
      </div>
    </section>
  );
}
