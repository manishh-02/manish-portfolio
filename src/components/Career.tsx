import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Professional <span>&</span>
          <br /> journey
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science & Engineering</h4>
                <h5>Haridwar University</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree with a strong focus on Data Structures,
              Algorithms, and Object-Oriented Programming. Maintaining a CGPA of
              7.8 while actively building real-world development skills.
            </p>
          </div>

          {/* Project 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Banking Management System</h4>
                <h5>Full Stack Web Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a secure banking application featuring authentication,
              fund transfers, and transaction management. Implemented efficient
              data handling using DSA concepts and built an interactive dashboard
              for financial insights.
            </p>
          </div>

          {/* Project 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hospital Management & Patient Triage System</h4>
                <h5>Frontend & Logic-Based Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and developed a patient management system with a
              priority-based triage mechanism. Built an admin dashboard with
              analytics and ensured a fully responsive and user-friendly interface.
            </p>
          </div>

          {/* Skills / Development */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Development</h4>
                <h5>DSA | MERN Stack | Backend</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Actively strengthening problem-solving skills through Data Structures
              and Algorithms practice on coding platforms. Building scalable web
              applications using the MERN stack and exploring backend development
              with FastAPI and Flask.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;