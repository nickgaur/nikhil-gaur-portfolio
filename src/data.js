export const profile = {
  name: "Nikhil Gaur",
  role: "Software Developer & Engineer",
  location: "Gwalior, Madhya Pradesh, India",
  phone: "+91-9009111512",
  email: "nikhilgaur581@gmail.com",
  linkedin: "https://www.linkedin.com/in/nikhilgaur-gwalior/",
  github: "https://github.com/nickgaur",
  leetcode: "https://leetcode.com/u/nikhilgaur581/",
  stackoverflow: "https://stackoverflow.com/users/14957455/anonymous-coder",
  summary:
    "Software Developer with 3+ years of experience building scalable web applications and backend systems using Java, Spring Boot, and ReactJS. Track record of improving user productivity by up to 40%, cutting security breaches by 10%, and reducing certificate-related outages by 50% through RESTful API integration and IAM solutions. Skilled in cross-functional collaboration, microservices architecture, and authentication/authorization protocols (SAML, OAuth 2.0, OIDC).",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "C", "C++", "C#", "TypeScript", "Python"],
  },
  {
    label: "Backend & Frameworks",
    items: [
      "Spring Boot",
      "Microservices",
      "Spring Data JPA",
      "RESTful APIs",
      "Spring Security",
      "Hibernate",
      "JDBC",
      "J2EE",
      "NodeJS",
      "ExpressJS",
      ".NET",
    ],
  },
  {
    label: "Frontend",
    items: [
      "ReactJS",
      "Angular",
      "JavaScript",
      "JQuery",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Data & Databases",
    items: ["SQL", "NoSQL", "MongoDB", "DBMS"],
  },
  {
    label: "Tools & Practices",
    items: [
      "Prompt Engineering",
      "Git/GitHub",
      "Linux",
      "OOP",
      "System Design",
      "Data Structures & Algorithms",
      "Full Stack Web Development",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer",
    org: "Fiserv India Pvt. Ltd",
    initials: "FI",
    color: "#5D5FEF",
    location: "Noida, UP",
    period: "Jul 2023 – Present",
    points: [
      "Designed and implemented scalable Java-based applications using Spring Boot and Hibernate, supporting a critical module used by 100,000+ users daily",
      "Built and maintained a ReactJS-based frontend with modern JavaScript frameworks and state management libraries, increasing user productivity by 20%",
      "Developed and deployed microservices for a high-traffic application, improving performance by 30%",
      "Spearheaded the migration of a legacy monolithic application to a microservices architecture, enhancing system scalability and maintainability",
      "Built a web-based UI to streamline internal workflows, driving a 30% increase in team efficiency",
      "Applied authentication and authorization protocols (SAML, OAuth 2.0, OIDC) to strengthen application security",
      "Collaborated with designers and QA across cross-functional teams to deliver high-quality releases",
    ],
  },
  {
    role: "Junior Associate",
    org: "Celebal Technologies Pvt. Ltd",
    initials: "CT",
    color: "#17A398",
    location: "Jaipur, Rajasthan",
    period: "Feb 2023 – Jun 2023",
    points: [
      "Developed a React.js-based dynamic data visualization dashboard, improving reporting efficiency by 20%",
      "Built and maintained an Employee Management Portal (React, Node.js, Express, MongoDB), improving productivity by 40%",
      "Designed and implemented automated workflows with Azure Logic Apps to optimize business processes",
      "Led R&D efforts to implement a CI/CD pipeline for Azure Logic Apps",
    ],
  },
  {
    role: "Full Stack Web Developer",
    org: "Freelance",
    initials: "FL",
    color: "#FF6B57",
    location: "Remote",
    period: "Jun 2022 – Nov 2022",
    points: [
      "Engineered a full-stack e-commerce web application using React, Node.js, and MongoDB in a monolithic architecture, supporting 100+ users per day",
      "Managed end-to-end deployment of the application on a Heroku Linux server",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Livinart Technologies Pvt. Ltd",
    initials: "LT",
    color: "#FFB347",
    location: "Remote",
    period: "Mar 2022 – May 2022",
    points: [
      "Built a backend system for an online learning platform using Node.js, Express.js, Passport.js, and MongoDB",
      "Developed a single-page frontend application using AngularJS",
      "Optimized application design to improve overall user experience and performance",
    ],
  },
];

export const projects = [
  {
    name: "Self Service Portal",
    org: "Fiserv India Pvt. Ltd",
    points: [
      "Built a portal to manage Identity and Access Management (IAM) solutions, including client and internal SSL/signing certificates, reducing expiration-related outages by 50%",
      "Developed dynamic user interfaces with ReactJS and scalable backend services with Java and Spring Boot",
      "Implemented Spring Security and Role-Based Access Control (RBAC) to strengthen authentication and authorization",
    ],
    stack: ["ReactJS", "Java", "Spring Boot", "Spring Security"],
  },
  {
    name: "CIAM MFA APIs",
    org: "Fiserv India Pvt. Ltd",
    points: [
      "Reduced security breaches by 10% by integrating PingOne MFA into client applications via RESTful APIs",
      "Improved security posture for 50+ applications by integrating CIAM MFA APIs with PingOne and PingFederate for token access",
      "Built scalable applications using Java, Spring Boot, and microservices architecture",
    ],
    stack: ["Java", "Spring Boot", "PingOne", "PingFederate"],
  },
  {
    name: "Admin Console",
    org: "Fiserv India Pvt. Ltd",
    points: [
      "Developed a web-based platform integrating 50+ internal tools, streamlining daily operations and improving team productivity",
    ],
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    name: "Application Migration",
    org: "Fiserv India Pvt. Ltd",
    points: [
      "Guided 50+ application teams through onboarding/migration to CIAM infrastructure to enable MFA",
      "Onboarded 150+ applications onto PingFederate and Entra ID to enable SSO and MFA",
    ],
    stack: ["PingFederate", "Entra ID", "SSO", "MFA"],
  },
  {
    name: "E-Commerce Platform — Sova-Skills",
    org: "Livinart Technologies Pvt. Ltd",
    points: [
      "Implemented JWT-based authentication and Role-Based Access Control (RBAC) to secure the platform",
    ],
    stack: ["ReactJS", "NodeJS", "ExpressJS", "PassportJS", "MongoDB"],
  },
  {
    name: "E-Commerce Platform — Aseedo",
    org: "Freelance",
    points: [
      "Built authentication and authorization workflows with email verification to strengthen access management",
      "Integrated Stripe APIs for seamless payment processing",
    ],
    stack: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "Twilio SendGrid",
      "Stripe",
      "MongoDB",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Dehradun Institute of Technology, Dehradun, UK",
    period: "Jul 2019 – Aug 2023",
    detail: "CGPA: 7.57",
  },
  {
    degree: "Class 12",
    school: "Nobel Convent School, Gwalior, MP",
    period: "Apr 2017 – May 2018",
    detail: "70%, MPBSE",
  },
];

export const certifications = [
  "Microsoft Azure AZ-900 Certification",
  "C++ Development Certification",
  "Udemy Certified Full Stack Web Developer (MERN)",
];

export const achievements = [
  "Solved 170+ problems on LeetCode",
  "Achieved 5-Star rating in Problem Solving on HackerRank",
  "Reached 2-Star rating on CodeChef",
];
