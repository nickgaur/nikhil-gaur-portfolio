import React, { useEffect, useState } from "react";

export default function Resume(props) {
  return (
    <>
        <a
          href="/Files/Nikhil-Gaur-Resume.pdf"
          download="Nikhil-Gaur-Resume.pdf"
           className="download-resume"
        >
      <button type="submit">
          Download Resume
      </button>
        </a>
    </>
  );
}

// export default Resume;
