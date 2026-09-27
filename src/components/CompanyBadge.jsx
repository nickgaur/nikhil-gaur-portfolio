import React from "react";

// Stand-in "logo" until real company logos are available — swap the
// return value for an <img src="/logos/company.svg" alt={name} /> per entry.
export default function CompanyBadge({ initials, color }) {
  return (
    <div
      className="company-badge"
      style={{ background: `${color}1a`, color }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
