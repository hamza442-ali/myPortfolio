
import Link from "next/link";
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
    <div className="contact-container">
      <div className="row flex">
        <div className="left-contactContainer  mt-10">
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
          <div className="btn_contact mt-28 ">
            <Link href= "https://res.cloudinary.com/dfeek69mi/image/upload/f_auto,q_auto/cxkriowgmiymjadoucmk" className="p-3" >My CV</Link>
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
