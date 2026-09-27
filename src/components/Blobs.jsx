import React from "react";

// Purely decorative, ambient background shapes. aria-hidden so screen
// readers skip them entirely.
export default function Blobs() {
  return (
    <div className="blobs" aria-hidden="true">
      <svg className="blob blob-a" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M45.3,-58.5C58.6,-49.7,69.2,-35.4,73.6,-19.3C78,-3.2,76.2,14.7,68.6,29.7C61,44.7,47.6,56.8,32.2,63.9C16.8,71,-0.6,73.1,-17.6,69.8C-34.6,66.5,-51.2,57.8,-61.7,44C-72.2,30.2,-76.6,11.3,-73.9,-6.1C-71.2,-23.5,-61.4,-39.4,-48,-49C-34.6,-58.6,-17.3,-61.9,-0.3,-61.5C16.7,-61.1,32,-67.3,45.3,-58.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg className="blob blob-b" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M39.5,-51.6C49.9,-44.1,56.6,-30.9,60.4,-16.6C64.2,-2.3,65.1,13.1,59.2,25.9C53.3,38.7,40.6,48.9,26.4,55.6C12.2,62.3,-3.5,65.5,-18.6,62.4C-33.7,59.3,-48.2,49.9,-57.1,36.7C-66,23.5,-69.3,6.5,-66.4,-9.1C-63.5,-24.7,-54.4,-38.9,-42,-47.1C-29.6,-55.3,-14.8,-57.5,0.5,-58.1C15.8,-58.7,29.1,-59.1,39.5,-51.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
