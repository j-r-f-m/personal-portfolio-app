import { Box, Grid, Typography, Container } from "@mui/material";
import { Project } from "../../../components/project/Projects";
import { projectData } from "./MainProjectData";

/**
 * Component that holds the three main projects I want to display on the main
 * page
 * @returns
 */
export function MainProjects() {
  const mainProjects = projectData.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      imgPath={project.imgPath}
      tools={project.tools}
      description={project.description}
    />
  ));

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Projects</Typography>
            </Grid>
            {/*             <Project
              title={projectData[0].title}
              imgPath={"images/img_bemessungshilfen.png"}
              tools={"Javascript, React.js, MUI, Vite"}
              description={
                " A front end calculation tool for concrete construction. You can calculate the needed anchorage length of a rebar and the amount of rebars that can fit in a concrete beam."
              }
            /> */}

            {mainProjects}
          </Grid>
          <hr />
        </Container>
      </Box>{" "}
    </>
  );
}
