import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>Portfolio – Victor Pavao</strong>
          </Typography>
          <Button component={RouterLink} color="inherit" to="/">Home</Button>
          <Button component={RouterLink} color="inherit" to="/projects">Projects</Button>
          <Button component={RouterLink} color="inherit" to="/resume">Resume</Button>
          <Button component={RouterLink} color="inherit" to="/education">Education</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
