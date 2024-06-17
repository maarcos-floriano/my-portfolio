import React from "react";
import "./ProjectCard.scss";
import { styled } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const StyledImg = styled("img")(({ theme }) => ({
  width: "80%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  img,
  link,
}) => {
  return (
    <div className="project-card">
      <div className="project-card__title">
        <h3>{title}</h3>
      </div>
      <div className="project-card__description">
        <p>{description}</p>
      </div>
      <div className="project-card__image">
        <StyledImg src={img} alt={title} />
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
