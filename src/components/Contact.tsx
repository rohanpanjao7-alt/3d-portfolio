import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://linkedin.com/in/rohanpanja"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - rohanpanja
              </a>
            </p>
            <p>
              <a href="mailto:panjarohan@gmail.com" data-cursor="disable">
                panjarohan@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+917586839467" data-cursor="disable">
                +91 7586839467 / +91 8637560007
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/r_o_h_a_n_panja?igsh=MWFyYmtmcjRvMDY4Mg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Instagram - @r_o_h_a_n_panja
              </a>
            </p>
            <p>Tamluk, Purba Medinipur, West Bengal</p>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>
              B.Tech in Computer Science and Engineering, Narula Institute of
              Technology, Kolkata - 2019-2023 | CGPA: 8.4
            </p>
            <p>
              Higher Secondary, Tamluk Hamilton High School - 2017-2019 |
              79.8%
            </p>
            <p>
              Secondary, Tamluk Hamilton High School - 2016-2017 | 90.03%
            </p>
          </div>
          <div className="contact-box">
            <h4>Certifications</h4>
            <a
              href="https://linkedin.com/in/rohanpanja"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Advanced Selenium Testing <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/rohanpanja"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Automation Anywhere Advanced RPA <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/rohanpanja"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Persistent Martian Program <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/rohanpanja"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Highway to High Radius Internship <MdArrowOutward />
            </a>
            <h2>
              Built for <br /> <span>Rohan Panja</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
