import React, { useEffect, useState } from "react";
import { profile } from "../data.js";
import Blobs from "./Blobs.jsx";
import Resume from "./Resume.jsx";
import {
  LogoLinkedIn,
  LogoGitHub,
  LogoLeetCode,
  LogoStackOverflow,
} from "./Icons.jsx";

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, Logo: LogoLinkedIn, color: "#0a66c2" },
  { label: "GitHub", href: profile.github, Logo: LogoGitHub, color: "#181717" },
  { label: "LeetCode", href: profile.leetcode, Logo: LogoLeetCode, color: "#ffa116" },
  { label: "Stack Overflow", href: profile.stackoverflow, Logo: LogoStackOverflow, color: "#f48024" },
];

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
  const [menuOpen, setMenuOpen] = useState(false); // small-screen menu only

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

  const renderSocial = (className) => (
    <ul className={className} aria-label="Social profiles">
      {socialLinks.map(({ label, href, Logo, color }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            style={{ color }}
          >
            <Logo />
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="sidebar-container">
    <aside className="sidebar">
      <Blobs />

      <div className="sidebar-mark">
        {/* Profile picture placeholder — swap this div for an <img src="/your-photo.jpg" alt="Nikhil Gaur" /> */}
        <div className="avatar-ring">
          <img className="avatar-placeholder" src="/profile.jpeg" alt="Nikhil Gaur" />
        </div>
        <div className="sidebar-id">
          <p className="sidebar-name">{profile.name}</p>
          <p className="sidebar-role">{profile.role}</p>
        </div>
        {renderSocial("sidebar-social")}
      </div>

      <button
        type="button"
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="sidebar-menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="sidebar-menu"
        className={`sidebar-menu${menuOpen ? " is-open" : ""}`}
      >
        <nav className="sidebar-nav" aria-label="Section navigation">
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? "is-active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {renderSocial("sidebar-social sidebar-social-mobile")}

        <p className="sidebar-status">
          <span className="status-dot" aria-hidden="true" />
          Open to backend &amp; full-stack opportunities
        </p>
        <Resume />
      </div>
    </aside>
    </div>
  );
}
