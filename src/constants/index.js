export const myProjects = [
  {
    id: 1,
    title: "HabitFlow- Personal Habit Tracker",
    description:
      "AI-powered web application that helps users build, track, and sustain daily habits with personalized recommendations and progress insights.",
    subDescription: [
      "Integrated Gen AI models to generate personalized habit suggestions, motivational prompts, and adaptive reminders.",
      "Developed a React Native frontend connected to a Spring Boot backend, ensuring cross-platform performance.",
      "Implemented secure authentication, push notifications, and analytics using Firebase services.",
      "Designed RESTful APIs for habit creation, streak tracking, and progress visualization with PostgreSQL as the data store.",
    ],
    href: "https://chipper-profiterole-4f8cbd.netlify.app",
    logo: "",
    image: "/assets/projects/habitflow.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 3,
        name: "Spring Boot",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "RoomieHub - Roommate Management System",
    description:
      "Web application that simplifies shared living by allowing roommates to create, assign, and track household tasks in a collaborative dashboard.",
    subDescription: [
      "Built with Java Spring Boot backend and React frontend to enable real-time task creation and assignment between roommates.",
      "Implemented role-based access where admins can create apartments, add rooms, and assign users to rooms.",
      "Designed interactive task boards with status tracking, deadlines, and assignment notifications.",
      "Integrated PostgreSQL database for storing user profiles, rooms, and task details with efficient relational mapping.",
    ],
    href: "https://tourmaline-medovik-7c6136.netlify.app",
    logo: "",
    image: "/assets/projects/Roomiehub.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "RideShare",
    description:
      "Full-stack application enabling users to offer and book rides, connect with nearby drivers, and manage shared trips securely and efficiently.",
    subDescription: [
      "Developed Java Spring Boot backend services with RESTful APIs for ride creation, booking, and payment processing.",
      "Built an interactive React frontend with real-time ride status updates and location-based search.",
      "Implemented secure user authentication and profile management with Firebase Authentication.",
      "Integrated PostgreSQL for managing rides, users, and trip history with scalable relational schemas.",
    ],
    href: "https://complete-ride-sharin-nz5j.bolt.host/",
    logo: "",
    image: "/assets/projects/rideshare.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/React.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+917895313539",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shashank-verma7",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shashank_verma7",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Full Stack Software Developer",
    job: "AT&T",
    date: "2025-Present",
    contents: [
      "Developed TMF633 Service Catalog Management APIs using Java 21 and Spring boot to enable creation, paginated retrieval, update, and lifecycle management of service catalog entities.",
      "Integrated EPA(Ports Assignment) with AT&T inventory and provisioning systems to validate port availability and ensure accurate resource allocation during service activation.",
      "Designed and implemented fault-tolerant workflow orchestration using Temporal, automating complex business processes across distributed microservices.",
      "Developed a Git-based component loading framework that dynamically retrieves and executes application components from remote repositories.",
    ],
  },
  {
    title: "Software Engineer",
    job: "General Electric Digital",
    date: "2022-2023",
    contents: [
      "Developed Java microservices integrated into the Configuration Hub to manage UAA configuration, user persistence, and token issuance.",
      "Developed the Presentation layer using JSP, HTML and used AJAX/ JQuery based rich client for improved customer experience",
      "Integrated multi-factor authentication and session management using OAuth2 with JWT tokens, enabling secure API access and login flows",
      "Containerized the Authentication/UAA services using Docker and deployed to Kubernetes clusters (on-premise or cloud) for high availability",
      "Configured support for external IdP integration using LDAP/LDAPS and SAML providers to map users and groups imported into UAA",
    ],
  },
  {
    title: "Software Developer",
    job: "Cognizant Technology Solutions",
    date: "2019-2022",
    contents: [
      "Extensive experience of Coding and maintenance of J2EE based applications using Java 11 version, Java Collections, Data Structures, Multithreading, JDBC, Servlets, JSP, JSF, EJB, AJAX, JMS Custom Tag Libraries, JSTL, XML and Web Services",
      "Implemented event-driven processing with Kafka for asynchronous claim validation and payment initiation",
      "Developed Business components using Java Objects and used Hibernate framework to map the Java classes to the database using Annotations",
      "Implemented Spring Batch jobs for nightly reconciliation of paid claims and claim status synchronization",
      "Managed environment secrets and credentials through AWS Secrets Manager and Parameter Store",
    ],
  },
  {
    title: "Software Developer Intern",
    job: "Tata Consultancy Services",
    date: "2018-2019",
    contents: [
      "Built multi-role authentication portal with Spring Boot + JWT, cutting unauthorized access attempts by 50% within 3 months of deployment.",
      "Integrated RESTful APIs with Angular front-end, enabling CRUD operations and reducing bug reports by 25%",
    ],
  },
];
export const reviews = [
  {
    name: "Rishabh Srivastava",
    username: "@rishabh",
    body: "Amazing Full Stack Developer! Always deliver high-quality work on time.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Huzaifa Islam",
    username: "@huzaifa",
    body: "Worked with him for 2 years. Amazing skills and very professional.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Darshan Karkera",
    username: "@darshan",
    body: "He is very god in DSA and always on monitor solving leetcode",
    img: "https://robohash.org/john",
  },
  {
    name: "Rahul Patel",
    username: "@rahul",
    body: "Very dedicated and hardworking person.",
    img: "https://robohash.org/alice",
  },
  {
    name: "Shivangi Patel",
    username: "@shivangi",
    body: "He is a great team player and always ready to help others. Helped me guide in my career as well",
    img: "https://robohash.org/eva",
  },
  {
    name: "Tharun Vemula",
    username: "@tharun",
    body: "shashank worked with me and his logical thinking and problem solving skills are amazing.",
    img: "https://robohash.org/franks",
  },
];
