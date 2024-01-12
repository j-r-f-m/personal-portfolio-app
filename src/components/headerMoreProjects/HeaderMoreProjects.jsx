import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
/**
 * Renders the header component.
 * Registers scroll events and updates scrollSpy.
 * Removes registered events when the component unmounts.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function HeaderMoreProjects() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jonas Mösch
          </Typography>

          <Button color="inherit" component={Link} to="/">
            Zurück
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
