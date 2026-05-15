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
                <h4>Automation Tester</h4>
                <h5>Cognizant Technology Solutions | Travelers Insurance</h5>
              </div>
              <h3>2025-Present</h3>
            </div>
            <p>
              Migrated insurance form automation from Selenium Java to
              Playwright JavaScript, improving execution speed by 45 percent and
              reducing regression cycles from 2 days to 5 hours. Mentored 3 QA
              engineers and established Playwright standards across the team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Engineer</h4>
                <h5>Cognizant Technology Solutions | Travelers Insurance</h5>
              </div>
              <h3>2023-2025</h3>
            </div>
            <p>
              Delivered manual and functional testing for BI insurance forms and
              maintained 700 plus Selenium scripts with POM and TestNG. Reduced
              regression time from 3 days to 6 hours and improved traceability
              through ALM Octane integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Cognizant Technology Solutions | QEA Selenium with Java</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed automation internship work with the Identify Courses
              project, covering browser navigation, form handling, data
              validation, and execution control using Selenium, POM, and
              TestNG.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
