// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import phpLogo from './assets/tech_logo/php.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import ApacheLogo from './assets/tech_logo/Apache.png';
import ngrokLogo from './assets/tech_logo/ngrok.png';
import nginxLogo from './assets/tech_logo/nginx.png';

// Experience Section Logo's
import rpicLogo from './assets/company_logo/rpicLogo.png';


// Education Section Logo's
import gptanakpurLogo from './assets/education_logo/gptanakpur.png';
import hnbpgLogo from './assets/education_logo/hnbpg.png';
import rpiclogoLogo from './assets/education_logo/rpiclogo.png';

// Project Section Logo's
import srmsLogo from './assets/work_logo/srms.png';
import ismsLogo from './assets/work_logo/isms.png';
import gptLogo from './assets/work_logo/gpt.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Apache Web Server', logo: ApacheLogo },
      { name: 'Ngrok', logo: ngrokLogo },
      { name: 'Nginx', logo: nginxLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: rpicLogo,
      role: "Computer Assistant",
      company: "Rana Pratap Inter College Khatima Udham Singh Nagar",
      date: "September 2025 - Present",
      desc: "My responsibilities as a Computer Assistant include managing computer lab activities, assisting students with basic computer operations, handling school data entry, maintaining digital records, and supporting teachers in preparing digital materials. I also help in troubleshooting basic hardware and software issues and ensure the smooth functioning of computer systems in the school.",
      skills: [
        "M.S. Word",
        "M.S. Excel",
        "M.S. PowerPoint",
        "Computer Maintenance",
        "Data Entry"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: gptanakpurLogo,
      school: "Government Polytechnic Tanakpur",
      date: "Aug 2023 - May 2025",
      grade: "86.19%",
      desc: "I have completed my Diploma in Computer Science & Engineering from Government Polytechnic Tanakpur. During my time at G.P. Tanakpur, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at G.P. Tanakpur has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Diploma in Computer Science & Engineering",
    },
    {
      id: 1,
      img: hnbpgLogo,
      school: "H.N.B. P.G. College Khatima, Udham Singh Nagar",
      date: "Aug 2020 - July 2023",
      grade: "57.7%",
      desc: "I completed my Bachelor's degree in Science (B.Sc. PCM) from H.N.B. P.G. College, Khatima. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Mathematics and Science.",
      degree: "Bachelor of Science - B.Sc. (PCM)",
    },
    {
      id: 2,
      img: rpiclogoLogo,
      school: "Rana Pratap Inter College, Khatima, Udham Singh Nagar",
      date: "Apr 2019 - March 2020",
      grade: "75.2%",
      desc: "I completed my class 12 education from Rana Pratap Inter College, Khatima under the Uttarakhand Board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Intermediate(XII) - PCM",
    },
    {
      id: 3,
      img: rpiclogoLogo,
      school: "Rana Pratap Inter College, Khatima, Udham Singh Nagar",
      date: "Apr 2017 - March 2018",
      grade: "75.6%",
      desc: "I completed my class 10 education from Rana Pratap Inter College, Khatima under the Uttarakhand Board, where I studied Science.",
      degree: "Highschool(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Student Result Management System",
      description:
        "A console-based application designed to streamline the management of student academic records for educational institutions. Developed in C, this projects allows administrators to efficiently handle student data, including adding, viewing, updating, and deleting records. The system enables students to securely access their results, providing a user-friendly interface for both administrators and students. Data storage is implemented through CSV files, allowing easy export and viewing of records in MS Excel for portability and accessibility.",
      image: srmsLogo,
      tags: ["C", "M.S. Excel", "Dev C/C++"],
      github: "https://github.com/Keshav-tech31/Student-Result-Management-System",
    },
    {
      id: 1,
      title: "Institute Sessional Management System",
      description:
        "The Institute Sessional Management System is a web-based application developed to streamline the internal assessment process in polytechnic institutes. Traditionally, faculty members face challenges in manually maintaining and calculating sessional marks for students. This system digitizes the entire workflow—from data entry to sessional report generation—ensuring accuracy, efficiency, and secure data handling. The project is built using widely adopted technologies like PHP, MySQL, and HTML/CSS, making it reliable and easy to deploy across institutions.",
      image: ismsLogo,
      tags: ["PHP", "MySQL", "Apache Web Server", "Ngrok", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Keshav-tech31/ISMS",
    },
    {
      id: 2,
      title: "G.P. Tanakpur",
      description:
        "A digital journey through tha making of GP Tanakpur college building was planned, designed and constructed step by step - from the foundation to the final finish.",
      image: gptLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Keshav-tech31/GP-Tanakpur",
      webapp: "https://keshav-tech31.github.io/GP-Tanakpur/"
    },
    
  ];  