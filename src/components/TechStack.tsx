const stackGroups = [
  {
    title: "Automation Frameworks",
    items: [
      "Playwright",
      "Selenium WebDriver",
      "TestNG",
      "POM",
      "Cucumber BDD",
    ],
  },
  {
    title: "Languages & Tools",
    items: [
      "Java",
      "JavaScript",
      "Git",
      "GitHub",
      "Maven",
      "VS Code",
      "Eclipse IDE",
    ],
  },
  {
    title: "Quality & Delivery",
    items: [
      "Jenkins CI/CD",
      "Jira",
      "ALM / Octane",
      "Postman",
      "Agile / Scrum",
      "Functional Testing",
      "Regression Testing",
    ],
  },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <div className="techstack-shell section-container">
        <h2>Testing Stack</h2>
        <p className="techstack-subtitle">
          Core tools, frameworks, and delivery practices I use to build stable
          automation and support release quality.
        </p>
        <div className="techstack-grid">
          {stackGroups.map((group) => (
            <div key={group.title} className="techstack-card">
              <h3>{group.title}</h3>
              <div className="techstack-tags">
                {group.items.map((item) => (
                  <span key={item} className="techstack-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
