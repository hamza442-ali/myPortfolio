import ProjectCard from "./ProjectCard";

const ProjectCardList = () => {
  const cardsData = [
    { title: "Daily Mix", tracks: "12", description: "Frontend Radio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Weekly Mix", tracks: "8", description: "Backend Radio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Daily Mix", tracks: "12", description: "Frontend Radio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Weekly Mix", tracks: "8", description: "Backend Radio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Daily Mix", tracks: "12", description: "Frontend Radio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Weekly Mix", tracks: "8", description: "Backend Radio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    { title: "Weekly Mix", tracks: "8", description: "Backend Radio", imageSrc: "https://nextui.org/images/hero-card-complete.jpeg" },
    
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <ProjectCard
          key={index}
          title={card.title}
          tracks={card.tracks}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
};

export default ProjectCardList;
