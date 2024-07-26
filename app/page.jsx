import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';


const Home = () => {
  return (
    <div className="hero flex"> 
    <section className="home ">
      <div className="home_content">
        <h1 className="">Hi, I'm Ali Hamza</h1>
        <h3> Full Stack Developer</h3>
        <p>
          {" "}
          As adedicated software engineer proficient in Full Stack and other
          cutting-edge technologies, I am eager to contribute my technical
          skills and innovative mindset to a dynamic organization. My goal is to
          leverage my expertise in full stack development and cloud computing to
          drive technological advancements and team success.
        </p>
        <div className="btn_box">
            <Link href= "/contact">Hire Me</Link>
            <Link href= "https://res.cloudinary.com/dfeek69mi/image/upload/f_auto,q_auto/cxkriowgmiymjadoucmk">My CV</Link>
        </div>
      </div>
      <div className="home_icons  ">
        <a href="https://www.linkedin.com/in/hamza-azam-/" >
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon"   /> 
        </a>
        <a href="https://github.com/hamza442-ali" >
          <FontAwesomeIcon icon={faGithub} className="fa-icon"  /> 
        </a>
        <a href="https://www.facebook.com" >
          <FontAwesomeIcon icon={faFacebook} className="fa-icon"  /> 
        </a>
      </div>
    </section>
      <div>
      <Image
            src="/assets/images/myPic.jpg"
            alt="My Picture"
            width={500}
            height={500}
            className="myPic rounded-full object-contain"
          />
      </div>
    </div>
  );
};

export default Home;
