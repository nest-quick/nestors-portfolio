import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import Contact from "../components/Contact";
import "../styles/pages/Home.css";
import "../styles/components/Svg.css"
import ReactLogo from '../assets/icons8-react-native.svg';
import AngularLogo from '../assets/icons8-angular.svg';
import JavaScriptLogo from '../assets/icons8-javascript.svg';
import TypeScriptLogo from '../assets/icons8-typescript.svg';
import NodeLogo from '../assets/icons8-node-js.svg';
import ExpressLogo from '../assets/icons8-express-js.svg';
import ASPLogo from '../assets/aspnet-svgrepo-com.svg';
import MySQLLogo from '../assets/icons8-mysql-logo.svg';
import SQLServerLogo from '../assets/icons8-sql-server.svg';
import FirestoreLogo from '../assets/icons8-firestore.svg';
import AWSLogo from '../assets/icons8-aws.svg';
import AzureLogo from '../assets/icons8-azure.svg';
import FirebaseLogo from '../assets/icons8-firebase.svg';
import BootstrapLogo from '../assets/icons8-bootstrap.svg';
import HTMLLogo from '../assets/icons8-html.svg';
import CSSLogo from '../assets/icons8-css.svg';
import NetlifyLogo from '../assets/netlify-svgrepo-com.svg';


const Home = () => {
   const projectsData = [
    {
      title: "CourseMate AI",
      description: "AI-powered application to convert notes into Google Slides, flash cards and quizzes.",
      image: "/src/assets/coursemate.png",
      link: "https://github.com/nest-quick/CollegeMate-Frontend",
    },
    {
      title: "Poll Mobile App",
      description: "Social application where you can create and vote on polls.",
      image: "/src/assets/portfolio.png",
      link: "https://github.com/nest-quick/poll-app",
    },
    {
      title: "Prison Escape Game",
      description: "First person video game. Group project where I took lead on designing the map and programming players movements and actions.",
      image: "/src/assets/booking.png",
      link: "https://github.com/amatree/ESC-the-prisoner-escape-game",
    },
  ];
  
const skillsData = {
  Frontend: [
    { title: "React", description: "Frontend Framework", image: <img src={ReactLogo} alt="ReactLogo" className="logo" /> },
    { title: "Angular", description: "Frontend Framework", image: <img src={AngularLogo} alt="ReactLogo" className="logo" /> },
    { title: "JavaScript", description: "Scripting Language", image: <img src={JavaScriptLogo} alt="ReactLogo" className="logo" /> },
    { title: "TypeScript", description: "Type-safe JavaScript", image: <img src={TypeScriptLogo} alt="ReactLogo" className="logo" /> },
    { title: "HTML", description: "Hypertext Markup Language", image: <img src={HTMLLogo} alt="ReactLogo" className="logo" /> },
    { title: "CSS", description: "Cascading Style Sheets", image: <img src={CSSLogo} alt="ReactLogo" className="logo" /> },
    { title: "Bootstrap", description: "CSS Framework", image: <img src={BootstrapLogo} alt="ReactLogo" className="logo" /> },

  ],
  Backend: [
    { title: "Node.js", description: "Backend Runtime", image: <img src={NodeLogo} alt="ReactLogo" className="logo" /> },
    { title: "Express.js", description: "Backend Framework", image: <img src={ExpressLogo} alt="ReactLogo" className="logo" /> },
    { title: "ASP.NET Core", description: "Backend Framework", image: <img src={ASPLogo} alt="ReactLogo" className="logo" /> },
  ],
  Database: [
    { title: "MySQL", description: "SQL Database", image: <img src={MySQLLogo} alt="ReactLogo" className="logo" /> },
    { title: "Microsoft SQL Server", description: "SQL Database", image: <img src={SQLServerLogo} alt="ReactLogo" className="logo" /> },
    { title: "Firestore", description: "NoSQL Database", image: <img src={FirestoreLogo} alt="ReactLogo" className="logo" /> },
  ],
  Cloud: [
    { title: "AWS", description: "Cloud Platform", image: <img src={AWSLogo} alt="ReactLogo" className="logo" /> },
    { title: "Azure", description: "Cloud Platform", image: <img src={AzureLogo} alt="ReactLogo" className="logo" /> },
    { title: "Firebase", description: "Cloud Backend", image: <img src={FirebaseLogo} alt="ReactLogo" className="logo" /> },
    { title: "Netlify", description: "Hosting Service", image: <img src={NetlifyLogo} alt="ReactLogo" className="logo" /> },

  ],
};

  return (
    <div className="home-page">
          <div className="aboutme-container">
            <h1 className="mb-4 text-white">Hi, I'm Nestor Jacinto</h1>
            <p className="lead text-white">
              I’m a dynamic and results-driven software engineer with 2 years of experience building scalable web applications and internal tools. 
              I specialize in full-stack development using Angular, ASP.NET, and cloud technologies like AWS and Azure. I’ve led initiatives 
              that improve system performance, user experience, and developer efficiency—bringing impactful features from concept to deployment.
            </p>
            <div className="button-group">
              <a href="/Nestor_Jacinto_Resume_05_2025.pdf"  className="btn me-2 resume-button">Resume</a>
              <a href="https://www.linkedin.com/in/nestor-jacinto-17763a22a/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light"> LinkedIn</a>
            </div>
          </div>
          <div className="projects-container" id="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
              {projectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          </div>
          <div className="skills-container" id="skills">
            <h1 className="skills-title">Skills</h1>
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="skills-category">
                <h2 className="category-title">{category}</h2>
                <div className="skills-grid mb-4">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={index}
                      title={skill.title}
                      description={skill.description}
                      image={skill.image}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div id="contact">
            <Contact/>
          </div>
    </div>
  );
};

export default Home;
