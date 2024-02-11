import { Box, Typography, Container, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * show contact information
 * @returns jsx
 */
export function Contact() {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4">Kontakt</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Link
            sx={{ mr: 1, ml: 1 }}
            href="https://github.com/j-r-f-m"
            color="inherit"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </Link>
          <Link
            sx={{ mr: 1, ml: 1 }}
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            color="inherit"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        </Box>
        <Typography align="center" sx={{ mt: 2 }}>
          {" "}
          moesch.jonas@protonmail.com
        </Typography>
        <hr />
      </Container>
    </Box>
  );
}
