import React, { useEffect, useState } from "react";

export default function Resume(props) {
  return (
    <>
        <a
          href="/Files/Nikhil_Gaur_Resume.pdf"
          download="Nikhil_Gaur_Resume.pdf"
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
