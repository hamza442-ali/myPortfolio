import ProjectCard from "./ProjectCard";

const ProjectCardList = () => {
  const cardsData = [
    { title: "Promptify", technologies: " DevOps · Node.js · Next.js · MongoDB", associated: "ZyncDev", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "AuditAI", technologies: " Nextjs · Node.js · OpenAI API · AWS ", associated: "ZyncDev", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "DepEase web Portal", technologies: "MERN Stack · AWS · Git", associated: "Organization", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "DepEase CI/CD automation", technologies: "Jenkins · MERN Stack · AWS · Git", associated: "Organization", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Cryptocurrency Wallet", technologies: "MERN Stack · AWS", associated: "ZyncDev", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "My Portfolio", technologies: "Next.js · Tailwind CSS · CSS", associated: "Self", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Load Balancer Solutions", technologies: "Node.js · Express.js · Git · MongoDB", associated: "Self", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <ProjectCard
          key={index}
          title={card.title}
          technologies={card.technologies}
          associated={card.associated}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
};

export default ProjectCardList;
