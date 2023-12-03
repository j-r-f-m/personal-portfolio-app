import { Container, Box, Grid, Typography, Link } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

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
          >
            <LinkIcon sx={{ mr: 0.25 }} />
            Webpage
          </Link>
          <Link
            sx={{ ml: 1, display: "flex", justifyContent: "center" }}
            href="#"
            underline="hover"
            color="inherit"
          >
            <LinkIcon sx={{ mr: 0.25 }} />
            Github
          </Link>
        </Typography>
      </Grid>
    </>
  );
}
