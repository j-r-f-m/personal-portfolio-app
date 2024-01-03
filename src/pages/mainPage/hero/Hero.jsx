import { Box, Grid, Typography, Container } from "@mui/material";
import { aboutMeGer } from "./HeroText";

/**
 * Renders the Hero component. The Hero component contains a short description
 * about  me and the tech stack I use.
 * @returns {JSX.Element} The rendered Hero component.
 */
export function Hero() {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 7 }}>
            <Typography variant="h4">Über Mich</Typography>
            <Typography sx={{ mt: 2 }}> {aboutMeGer}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Tech Stack - Programmierung</Typography>
            <Typography>
              Javascript, Python, React.js, git, bootstrap, vite
            </Typography>{" "}
          </Grid>
          <Grid item xs={12} sx={{ mb: 1 }}>
            <Typography>Tech Stack - Tragwerksplanung</Typography>
            <Typography>Rfem, Frilo, Harzer, Revit, Briscad</Typography>{" "}
          </Grid>
        </Grid>
        <hr />
      </Container>
    </Box>
  );
}
