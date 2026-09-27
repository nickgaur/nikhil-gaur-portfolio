import React from "react";

export default function HeroGraphic() {
  return (
    <svg
      className="hero-graphic"
      viewBox="0 0 320 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of connected service nodes"
    >
      <g className="hg-lines" fill="none" strokeWidth="2">
        <path className="hg-line hg-line-1" d="M60 190 L150 90" stroke="#5D5FEF" />
        <path className="hg-line hg-line-2" d="M150 90 L250 60" stroke="#17A398" />
        <path className="hg-line hg-line-3" d="M150 90 L230 170" stroke="#FF6B57" />
        <path className="hg-line hg-line-4" d="M60 190 L120 220" stroke="#FFB347" />
        <path className="hg-line hg-line-5" d="M230 170 L280 210" stroke="#5D5FEF" />
      </g>

      <g className="hg-nodes">
        <circle className="hg-node hg-node-1" cx="60" cy="190" r="10" fill="#FFB347" />
        <circle className="hg-node hg-node-2" cx="150" cy="90" r="14" fill="#5D5FEF" />
        <circle className="hg-node hg-node-3" cx="250" cy="60" r="9" fill="#17A398" />
        <circle className="hg-node hg-node-4" cx="230" cy="170" r="11" fill="#FF6B57" />
        <circle className="hg-node hg-node-5" cx="120" cy="220" r="7" fill="#17A398" />
        <circle className="hg-node hg-node-6" cx="280" cy="210" r="8" fill="#5D5FEF" />
      </g>

      {/* central node rendered last so it sits above connecting lines */}
      <circle className="hg-node hg-node-core" cx="150" cy="90" r="5" fill="#FFFDF9" />
    </svg>
  );
}
