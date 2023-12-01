import { Box, Grid, Typography, Container } from "@mui/material";

/**
 * show contact information
 * @returns jsx
 */
export function Contact() {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Contact</Typography>
            <Typography align="center" sx={{ mt: 2 }}>
              {" "}
              moesch.jonas@protonmail.com
            </Typography>
          </Grid>
        </Grid>
        <hr />
      </Container>
    </Box>
  );
}
