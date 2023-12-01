import { Box, Grid, Typography, styled, Paper, Container } from "@mui/material";
import { aboutMeEng } from "./HeroText";

export function Hero() {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">About Me</Typography>
            <Typography sx={{ mt: 2 }}> {aboutMeEng}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Technologies I use as a programmer</Typography>
            <Typography>
              Javascript, Python, React.js, git, bootstrap, vite
            </Typography>{" "}
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <Typography>
              Technologies I use as a structural engineer:
            </Typography>
            <Typography>Rfem, Frilo, Harzer, Revit, Briscad</Typography>{" "}
          </Grid>
        </Grid>
        <hr />
      </Container>
    </Box>
  );
}
