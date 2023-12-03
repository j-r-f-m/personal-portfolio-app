import { Box, Grid, Typography, Container } from "@mui/material";
import { Project } from "../../../components/project/Projects";
import { projectData } from "./MainProjectData";

/**
 * Component that holds the three main projects I want to display on the main
 * page
 * @returns
 */
export function MainProjects() {
  // create section for each project
  const mainProjects = projectData.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      imgPath={project.imgPath}
      tools={project.tools}
      description={project.description}
      link={project.link}
    />
  ));

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Projekte</Typography>
            </Grid>
            {mainProjects}
          </Grid>
          <hr />
        </Container>
      </Box>{" "}
    </>
  );
}
