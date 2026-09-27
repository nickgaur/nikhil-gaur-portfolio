import React, { useEffect, useState } from "react";
import { profile } from "../data.js";
import Blobs from "./Blobs.jsx";
import Resume from "./Resume.jsx";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sidebar-container">
    <aside className="sidebar">
      <Blobs />

      <div className="sidebar-mark">
        {/* Profile picture placeholder — swap this div for an <img src="/your-photo.jpg" alt="Nikhil Gaur" /> */}
        <div className="avatar-ring">
          <div
            className="avatar-placeholder"
            aria-label="Profile photo placeholder"
          >
            NG
          </div>
        </div>
        <p className="sidebar-name">{profile.name}</p>
        <p className="sidebar-role">{profile.role}</p>
      </div>

      <nav className="sidebar-nav" aria-label="Section navigation">
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? "is-active" : ""}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <p className="sidebar-status">
        <span className="status-dot" aria-hidden="true" />
        Open to backend &amp; full-stack opportunities
      </p>
      <Resume />
    </aside>
    </div>
  );
}
