import { Container, Box, Grid, Typography, Link } from "@mui/material";

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
        <Typography variant="h6">Description</Typography>
        <Typography sx={{ mt: 1 }}> {props.description}</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Used Technologies
        </Typography>
        <Typography>{props.tools}</Typography>
        <Typography sx={{ mt: 1 }}>
          <Link href={props.link} underline="hover" color="inherit">
            Visit Site
          </Link>
          <Link sx={{ ml: 1 }} href="#" underline="hover" color="inherit">
            View Code
          </Link>
        </Typography>
      </Grid>
    </>
  );
}
