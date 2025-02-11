import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const ProjectCard = ({ title, technologies, associated, imageSrc }) => {
  return (
    <Card className="projectCard flex-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{technologies}</small>
        <small className="text-default-500">{associated}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSrc}
          width={270}
        />
      </CardBody>
    </Card>
  );
};
export default ProjectCard;