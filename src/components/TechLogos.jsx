import React from "react";

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function LogoJava(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 14c-2.5 1.5-2.5 3 1 3.6 4 .7 8-.1 9-1.8" />
      <path d="M9.5 3.5C7 6 13 7 11 10c-1 1.5-1.5 2.3-1 3.4" />
      <path d="M7.5 17.6c-1.6.6-1.6 1.7.4 2.1 3 .6 8 .1 9-1.4" />
    </svg>
  );
}

export function LogoReact(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function LogoSpring(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 5c4 1 9 0 12-2-1 5-1 8 1 12-4-1-9 0-12 2 1-5 1-8-1-12Z" />
    </svg>
  );
}

export function LogoNode(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5 20.5 7.3v9.4L12 21.5 3.5 16.7V7.3L12 2.5Z" />
    </svg>
  );
}

export function LogoDatabase(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.7" />
      <path d="M4.5 5.5V18c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7V5.5" />
      <path d="M4.5 12c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7" />
    </svg>
  );
}

export function LogoGit(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="6" r="2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M7 8v8M7 8c0 4 4 4 8 4" />
    </svg>
  );
}

export function LogoScript(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4c-2 0-2.5 1-2.5 2.5S7 9 7 10.5 6 13 4 13" />
      <path d="M9 20c-2 0-2.5-1-2.5-2.5S7 15 7 13.5 6 11 4 11" />
      <path d="M15 4c2 0 2.5 1 2.5 2.5S16 9 16 10.5 17 13 19 13" />
      <path d="M15 20c2 0 2.5-1 2.5-2.5S16 15 16 13.5 17 11 19 11" />
    </svg>
  );
}

export function LogoCloud(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 18h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.8 1.2A3.8 3.8 0 0 0 7 18Z" />
    </svg>
  );
}

export const techLogos = [
  { name: "Java", Icon: LogoJava, color: "#B5850F" },
  { name: "Spring Boot", Icon: LogoSpring, color: "#17A398" },
  { name: "ReactJS", Icon: LogoReact, color: "#5D5FEF" },
  { name: "Node.js", Icon: LogoNode, color: "#17A398" },
  { name: "MongoDB / SQL", Icon: LogoDatabase, color: "#FF6B57" },
  { name: "Git", Icon: LogoGit, color: "#5D5FEF" },
  { name: "JavaScript", Icon: LogoScript, color: "#B5850F" },
  { name: "Azure", Icon: LogoCloud, color: "#17A398" },
];
