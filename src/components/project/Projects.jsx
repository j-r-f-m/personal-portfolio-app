import { Box, Grid, Typography, Link } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import PropTypes from "prop-types";

/**
 * Renders a project component.
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the project.
 * @param {string} props.imgPath - The path to the project image.
 * @param {string} props.description - The description of the project.
 * @param {string} props.tools - The tech stack used in the project.
 * @param {string} props.link - The link to the project webpage.
 * @param {string} props.linkGithub - The link to the project's GitHub repository.
 * @returns {JSX.Element} The rendered project component.
 */

export function Project(props) {
  return (
    <>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography variant="h5">{props.title}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          sx={{
            maxWidth: "100%",
            height: "auto",
            padding: 0,
            margin: 0,
            borderRadius: "5px",
          }}
          alt="The house from the offer."
          src={props.imgPath}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ mb: 4 }}>
        <Typography variant="h6">Beschreibung</Typography>
        <Typography sx={{ mt: 1 }}> {props.description}</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Tech Stack
        </Typography>
        <Typography>{props.tools}</Typography>
        <Typography sx={{ mt: 1, display: "flex" }}>
          <Link
            href={props.link}
            underline="hover"
            color="inherit"
            sx={{ display: "flex", justifyContent: "center" }}
            target="_blank"
          >
            <LinkIcon sx={{ mr: 0.25 }} />
            Webpage
          </Link>
          <Link
            href={props.linkGithub}
            underline="hover"
            color="inherit"
            sx={{ ml: 1, display: "flex", justifyContent: "center" }}
            target="_blank"
          >
            <LinkIcon sx={{ mr: 0.25 }} />
            Github
          </Link>
        </Typography>
      </Grid>
    </>
  );
}

// Type check props that are passed to the component
Project.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkGithub: PropTypes.string.isRequired,
};
