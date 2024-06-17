import { Container, Tooltip, Typography, styled } from "@mui/material";

const About = () => {

  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(4),
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }));

  return (
    <>
    <StyledAbout>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary.main">About</Typography>
        <div className="estudos">
          <Typography variant="h4" color="primary.main">Estudos</Typography>
          <Typography variant="body1" color="primary.main">Eu sou um estudante de Analise e Desenvolvimento de Sistemas na faculdade São Paulo Tech School, estou no 3º semestre de faculdade e nesse periodo desenvolvi diversos projetos baseado em problemas da vida real.</Typography>
          <Typography variant="body1" color="primary.main">Atualmente estou estudando para me tornar um desenvolvedor Full Stack, e estou estudando as tecnologias mais utilizadas no mercado de trabalho, como React, Node.js, TypeScript, entre outras.</Typography>
          <Typography variant="body1" color="primary.main">Estou sempre em busca de novos conhecimentos e desafios, e estou sempre disposto a ajudar e aprender com outras pessoas.</Typography>
        </div>

        <div className="experiencia">
          <Typography variant="h4" color="primary.main">Experiência</Typography>
          <Typography variant="body1" color="primary.main">Atualmente sou um desenvolvedor Salesforce na empresa <Tooltip title="Elera.io" arrow><span><a href="https://www.elera.io/">Elera</a></span></Tooltip>, onde desenvolvo soluções para os clientes da empresa utilizando a plataforma Salesforce.</Typography>
        </div>
      </Container>
    </StyledAbout>
    </>
  )
}

export default About