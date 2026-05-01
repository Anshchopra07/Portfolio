import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>Conation Technologies</h5>
              </div>
              <h3>May 2025 - June 2025</h3>
            </div>
            <p>
              Working as a full-time software development intern. Engaged in building software solutions and expanding technical expertise in professional environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science and Engineering</h4>
                <h5>SRM IST-Kattankulathur</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a focus on Computer Science and Engineering. Current CGPA is 8.86/10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII - SSC, Computer Science</h4>
                <h5>Shriman Bhausaheb Zadbuke Mahavidyalaya</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed higher secondary education in Barshi, Maharashtra with an aggregate score of 80.83%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X - CBSE, Computer</h4>
                <h5>Greenfinger School Akluj</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary education in Akluj, Maharashtra with a score of 77.2%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
