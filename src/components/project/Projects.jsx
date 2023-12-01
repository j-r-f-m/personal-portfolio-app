import { Box, Grid, Typography, Link } from "@mui/material";

export function Project(props) {
  return (
    <>
      <Grid item xs={12}>
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
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Description</Typography>
        <Typography sx={{ mt: 1 }}>
          {" "}
          A front end calculation tool for concrete construction. You can
          calculate the needed anchorage length of a rebar and the amount of
          rebars that can fit in a concrete beam.
        </Typography>
        <Typography variant="h6" Typography sx={{ mt: 1 }}>
          Used Technologies
        </Typography>
        <Typography>React.js, Material-UI, Vite</Typography>
        <Typography sx={{ mt: 1 }}>
          <Link href="#" underline="hover" color="inherit">
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
