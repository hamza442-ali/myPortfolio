import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
    faPaperPlane,
    faPhone
  } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container mt-10">
      <div className="row flex">
        <div className="left-contactContainer">
          <p className="flex"><FontAwesomeIcon icon={faPaperPlane} width={20} height={20} className="mr-5"/> +92-3187734237</p>
          <p className="flex"><FontAwesomeIcon icon={faPhone} width={20} height={20} className="mr-5" /> hamzaazam994@gmail.com</p>
          <div className="about_icons">
            <a href="https://www.linkedin.com/in/hamza-azam-/">
              <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" />
            </a>
            <a href="https://github.com/hamza442-ali">
              <FontAwesomeIcon icon={faGithub} className="fa-icon" />
            </a>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
            </a>
          </div>
        </div>
        <div className="right-contactContainer">
          <h1>Contact Me</h1>
          <form className="contact-form">
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <textarea cols="20" rows="6" placeholder="Message*" required></textarea>
            <button className="btn_gen">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
