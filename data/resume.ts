export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  overview: string;
  description: string[];
  technologies: string[];
  accent: 'green' | 'red' | 'blue' | 'indigo' | 'cyan' | 'orange';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  graduationYear: string;
  gpa?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  skills: SkillGroup[];
  education: Education[];
}

export const resumeData: ResumeData = {
  personal: {
    name: 'Rahul Naradala',
    title: 'Full Stack Java Developer',
    email: 'naradalarahul59@gmail.com',
    location: 'Buford, Georgia',
    summary:
      'Java Full Stack Developer experienced in designing, developing, and supporting enterprise-grade applications across Banking, Financial Services, Healthcare, and Technology domains.',
  },

  experience: [
    {
      id: 'JPMorganChase',
      company: 'JPMorgan Chase',
      position: 'Full Stack Developer',
      duration: 'March 2026 – Present',
      overview:
        'Developed a cloud-native Commercial Banking Digital Client Portal that enables corporate customers to manage accounts, initiate payments, monitor transactions, access treasury services, and view liquidity reports through a unified digital platform. Built using Microservices and Event-Driven Architecture, the solution integrates with core banking systems and external financial networks to deliver secure, real-time banking services with high availability, scalability, and regulatory compliance.',
      description: [
        'Design and develop enterprise-scale cloud-native applications using Java 17, Spring Boot 3, and Spring Cloud, delivering scalable microservices capable of supporting high-volume business transactions and distributed workloads.',
        'Architect and implement RESTful APIs and Microservices following Domain-Driven Design (DDD) and EventDriven Architecture principles, improving system scalability, resiliency, and maintainability.',
        'Develop backend services using Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL while implementing reusable business components and service-layer frameworks.',
        'Build event-driven integrations using Apache Kafka and Kafka Streams to process real-time business events and support asynchronous communication across distributed systems.',
        'Implement secure authentication and authorization mechanisms using Spring Security, OAuth 2.0, JWT, and OpenID Connect (OIDC), ensuring compliance with enterprise security standards.',
        'Develop responsive Single Page Applications using Angular 17, TypeScript, HTML5, CSS3, and Bootstrap while integrating frontend modules with backend Microservices.',
        'Design and optimize PostgreSQL and MongoDB databases, implementing indexing strategies, query tuning, and schema optimizations to improve application performance.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'TypeScript',
        'Apache Camel',
        'AWS',
        'Backstage',
        'Microservices',
        'REST APIs',
        'SQL',
        'NoSQL',
        'Docker',
        'Jenkins',
        'JUnit',
        'CI/CD',
      ],
      accent: 'green',
    },
    {
      id: 'Humana',
      company: 'Humana',
      position: 'Full Stack Developer',
      duration: 'June 2025 – February 2026',
      overview:
        'Developed a Member Digital Experience Platform that enables Humana members to manage benefits, claims, prescriptions, provider searches, and care programs through a unified self-service portal. Built using a Microservices-based architecture, the platform integrates with healthcare systems to deliver secure, scalable, and personalized member experiences while supporting real-time access to healthcare information and services.',
      description: [
        'Developed enterprise applications using Java 17, Spring Boot, and Microservices architecture supporting customerfacing and internal business platforms.',
        'Designed and implemented RESTful APIs and backend services using Spring Boot, Spring MVC, Hibernate, and Spring Data JPA to support scalable application functionality.',
        'Developed reusable Microservices and service-layer components enabling independent deployment and streamlined maintenance across distributed environments.',
        'Implemented Apache Kafka-based messaging solutions to support asynchronous communication, event processing, and business workflow automation.',
        'Integrated enterprise applications with third-party APIs and external systems using RESTful services while implementing validation, exception handling, and retry mechanisms.',
        'Implemented secure authentication and authorization using Spring Security, OAuth 2.0, and JWT to protect enterprise applications and APIs.',
        'Developed responsive user interfaces using Angular, React.js, TypeScript, JavaScript, HTML5, CSS3, and Bootstrap, enhancing user experience and usability.',
      ],
      technologies: [
        'Java 17',
        'Spring Boot',
        'React',
        'TypeScript',
        'Redux',
        'Kafka',
        'RabbitMQ',
        'Docker',
        'Kubernetes',
        'MongoDB',
        'PostgreSQL',
        'Jenkins',
        'JUnit',
        'Mockito',
        'AWS',
      ],
      accent: 'red',
    },
    {
      id: 'TechMahindra',
      company: 'Tech Mahindra',
      position: 'Full Stack Developer',
      duration: 'September 2019 – August 2023',
      overview:
        'Developed a Digital Customer Experience Platform for a leading telecommunications provider, enabling customers to manage accounts, billing, service requests, subscriptions, and product orders through a unified web portal. The platform integrated with multiple backend systems and enterprise services to provide secure, scalable, and real-time customer engagement capabilities while supporting high-volume transactions and operational workflows.',
      description: [
        'Developed enterprise web applications using Java 8/11, Spring MVC, Spring Boot, Hibernate, and JPA while supporting critical business processes and customer-facing platforms.',
        'Participated in all phases of the Software Development Life Cycle (SDLC), including requirements analysis, application design, development, testing, deployment, and production support.',
        'Designed and implemented RESTful and SOAP-based web services to facilitate integration between internal applications and external business systems.',
        'Developed backend business services, data access layers, and reusable components using Spring Framework, Hibernate, and object-oriented design principles.',
        'Implemented secure application functionality using Spring Security and role-based access control mechanisms to safeguard business transactions.',
        'Developed responsive web interfaces using Angular, JavaScript, HTML5, CSS3, Bootstrap, AJAX, and JSON technologies to improve user experience.',
        'Developed responsive web interfaces using Angular, JavaScript, HTML5, CSS3, Bootstrap, AJAX, and JSON technologies to improve user experience.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Angular',
        'React',
        'Liferay',
        'MongoDB',
        'Kafka',
        'AWS',
        'SQS',
        'Lambda',
        'MySQL',
        'SOAP',
        'REST APIs',
      ],
      accent: 'blue',
    },
  ],

  skills: [
    {
      category: 'Backend Development',
      skills: [
        'Java',
        'Java 8',
        'Java 11',
        'Java 17',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'Spring Cloud',
        'Hibernate',
        'JPA',
        'Kotlin',
        'Node.js',
        'REST APIs',
        'SOAP',
        'Microservices',
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        'React',
        'Angular',
        'AngularJS',
        'TypeScript',
        'JavaScript',
        'Redux',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'Tailwind CSS',
        'JQuery',
      ],
    },
    {
      category: 'Cloud and DevOps',
      skills: [
        'AWS',
        'EC2',
        'S3',
        'Lambda',
        'SQS',
        'CloudWatch',
        'VPC',
        'Elastic Beanstalk',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Git',
        'GitHub Actions',
        'CI/CD',
      ],
    },
    {
      category: 'Databases and Messaging',
      skills: [
        'SQL',
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'MongoDB',
        'DynamoDB',
        'Redis',
        'Kafka',
        'RabbitMQ',
      ],
    },
    {
      category: 'Testing and Quality',
      skills: [
        'JUnit',
        'Mockito',
        'Jest',
        'React Testing Library',
        'SonarQube',
        'TDD',
        'Code Reviews',
        'Performance Testing',
      ],
    },
    {
      category: 'Tools and Architecture',
      skills: [
        'IntelliJ IDEA',
        'Backstage',
        'Monorepo',
        'Liferay',
        'MVC',
        'Agile',
        'Scrum',
        'JIRA',
        'Design Patterns',
        'Distributed Systems',
      ],
    },
  ],

  education: [
    {
      id: 'florida-institute-of-technology',
      degree: "Master's Degree",
      field: 'Computer Information Systems',
      institution: 'Florida Institute of Technology',
      graduationYear: 'May 2020',
      gpa: '3.36',
    },
    {
      id: 'gitam-university',
      degree: "Bachelor's Degree",
      field: 'Electronics & Communication Engineering',
      institution: 'GITAM University',
      graduationYear: 'June 2017',
      gpa: '7.57',
    },
  ],
};