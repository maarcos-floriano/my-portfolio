import { Container, styled } from "@mui/material";
import ProjectCard from "./ProjectCard/ProjectCard.tsx";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(4),
    height: 'auot',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  return (
    <>
      <StyledProjects>
        <Container maxWidth="lg">
          <ProjectCard
            title="TermoTech"
            description="Description 1"
            img=""
            link="https://www.google.com"
          />
          <ProjectCard
            title="Spectra"
            description="Projeto da faculdade sobre monitormaneto de computadores."
            img="src\assets\images\spectra.png"
            link="https://www.google.com"
          />
          <ProjectCard
            title="Desafio PicPay"
            description="Realizei o desafio back-end que o PicPay propôs, onde foi necessário criar uma API RESTful que simula uma transferência de dinheiro entre usuários."
            img="src\assets\images\desafio picpay.png"
            link="https://github.com/maarcos-floriano/desafio-backend-picpay"
          />
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
