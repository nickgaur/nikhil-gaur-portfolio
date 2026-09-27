import React from "react";
import { profile } from "../data.js";
import { IconMail } from "./Icons.jsx";
import ContactForm from "./ContactForm.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal as="h2">
        <IconMail className="heading-icon" /> Let's build something reliable
        together
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-info">
          <p>
            Reachable by phone at {profile.phone} or by email at{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
          <div className="contact-links">
            <a target="_blank" href={profile.linkedin}>LinkedIn</a>
            <a target="_blank" href={profile.github}>GitHub</a>
          </div>
          <p className="contact-footer">
            {profile.name} — {profile.role}, {profile.location}
          </p>
        </Reveal>

        <Reveal delay={120} className="contact-form-wrap">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
