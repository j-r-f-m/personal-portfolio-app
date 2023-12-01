import { Box, Grid, Typography, Container } from "@mui/material";
import { Project } from "../../../components/project/Projects";

/**
 * Component that holds the three main projects I want to display on the main
 * page
 * @returns
 */

export function MainProjects() {
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Projects</Typography>
            </Grid>
            {/*        <Grid item xs={12}>
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
            </Grid> */}
            <Project
              title={"Verankerungslänge"}
              imgPath={"images/img_bemessungshilfen.png"}
            />
          </Grid>
          <hr />
        </Container>
      </Box>{" "}
    </>
  );
}
