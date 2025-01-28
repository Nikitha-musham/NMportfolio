import "./AboutContentStyles.css";
import React from "react";
import React1 from "../assets/introo.jpg";


const AboutContent = () => {
  return (
    <div className="about">
      <div className="top-section">
        <div className="img-container">
          <img src={React1} className="img" alt="Profile" />
        </div>
        <p className="intro-text">
          I’m an enthusiastic engineer with strong interpersonal skills. I have
          an avid interest in web development and designing. I am seeking
          challenging roles in software development to utilize and enhance my
          skills while learning from experienced professionals.
        </p>
      </div>

      <div className="bottom-section">
        {/* Skills Section */}
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>Web Development: HTML, CSS, JavaScript, Bootstrap, React JS</li>
          <li>Programming Languages: Java, Python </li>
          <li>Database: MySQL</li>
          <li>Version Control: Git,Github</li>
        </ul>
<br></br>
        {/* Education Section */}
        <h3>Education</h3>

        <div className="timeline">
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Full Stack Java Course</h4>
              <p>Teks Academy, [2024]</p>
              <p>Grade: A+</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Bachelor of Technology (B.Tech)</h4>
              <p>Malla Reddy Institute of Technology and Science(JNTUH), [Information Technology], [2019-2023]</p>
              <p>CGPA: 7.29/10</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Intermediate (Class 12)</h4>
              <p>Sri Chaitanya Junior College, [2017-2019]</p>
              <p>Marks: 854/1000</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Secondary School (Class 10)</h4>
              <p>St'Anthony's Girls High School, [2017]</p>
              <p>CGPA: 9.0/10</p>
            </div>
          </div>
        </div>
        <h3>Work Experience</h3>
        <div className="timeline">
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Full Stack Java Developer Intern | Infoz IT Solutions [September  2024 - January 2025]</h4>
              <ul className="skills-list">
             <li>Developed a comprehensive e-learning platform as part of a full-stack Java project, leveraging Servlets, JSP, CSS, Bootstrap, and MySQL for frontend and backend integration.</li> 
             <li>Contributed to designing the user interface, managing databases, and ensuring seamless interaction between client and server-side components.</li>
             <li>Awarded an Excellence Certificate for exceptional performance and contribution to the project.</li>
             </ul> </div>
          </div>
          </div>
        
      </div>
    </div>
  );
};

export default AboutContent;
