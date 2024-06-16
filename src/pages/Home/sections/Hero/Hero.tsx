import { Button, Container, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/foto-elera.jpg";
import Grid from "@mui/material/Grid";
import DownloadIcon from '@mui/icons-material/Download';
import SmsIcon from '@mui/icons-material/Sms';

const Hero = () => {
  const StyleHero = styled("div")(() => ({
    backgroundColor: "black",
    color: "white",
    height: "100vh",
  }));

  const StyleImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyleHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyleImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Marcos Floriano
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Backend Developer Salesforce
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon/>
                    Download CV
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <SmsIcon/>
                      Contact me
                    </Button>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyleHero>
    </>
  );
};

export default Hero;
