import React from "react";

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconBriefcase(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5c3 1.4 15 1.4 18 0" />
    </svg>
  );
}

export function IconBrackets(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5 4 12l5 7" />
      <path d="M15 5l5 7-5 7" />
    </svg>
  );
}

export function IconGear(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18 18l-1.7-1.7M7.7 7.7 6 6M18 6l-1.7 1.7M7.7 16.3 6 18" />
    </svg>
  );
}

export function IconRibbon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7.5 21l4.5-2.5 4.5 2.5L15 12.5" />
    </svg>
  );
}

export function IconCap(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconNode(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8 7.3 10.5 16M16 7.3 13.5 16M8.4 6h7.2" />
    </svg>
  );
}
