import {
  Box,
  Grid,
  Typography,
  Container,
  Link as LinkMui,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
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
      linkGithub={project.linkGithub}
    />
  ));

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Projekte</Typography>
          </Grid>
          {mainProjects}{" "}
          <Grid item xs={12} sx={{ mb: 3 }}>
            <LinkMui
              underline="hover"
              color="inherit"
              component={LinkRouter}
              to="projects"
            >
              Mehr Projekte
            </LinkMui>
          </Grid>
        </Grid>

        <hr />
      </Container>
    </Box>
  );
}
