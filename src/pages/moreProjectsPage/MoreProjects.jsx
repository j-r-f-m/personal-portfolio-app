import { Box, Grid, Typography, Container } from "@mui/material";
import { Project } from "../../components/project/Projects";
import { moreProjectsData } from "./MoreProjectsData";
/* import { HeaderMoreProjects } from "../../components/headerMoreProjects/HeaderMoreProjects"; */
import HeaderMoreProjects from "../../components/headerMoreProjects/HeaderMoreProjects";

export function MoreProjects() {
  // create section for each project
  const mainProjects = moreProjectsData.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      imgPath={project.imgPath}
      tools={project.tools}
      description={project.description}
      link={project.link}
      linkGithub={project.linkGithub}
    />
  ));

  return (
    <>
      <HeaderMoreProjects />
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ mt: 7 }}>
              <Typography variant="h4">Projekte</Typography>
            </Grid>
            {mainProjects}{" "}
          </Grid>
          <Box sx={{ mt: 2, mb: 4 }}>
            <hr />
          </Box>{" "}
        </Container>
      </Box>
    </>
  );
}
