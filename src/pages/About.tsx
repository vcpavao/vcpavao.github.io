import Sidebar from "../components/Sidebar";
import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid size={3}>
        <Sidebar />
      </Grid>
      <Grid size={6} sx={{ p: 4 }}>
        <Typography sx={{ fontSize: 18 }}>
          Hello! Welcome to my page. I am an aspiring GIS Software Engineer who is graduating
          {' '}with a Master's in Geographic Information Science Technology (GIST) at
          {' '}University of Massachusetts, Amherst. Here I'll showcase some of my projects,
          old and new. I am interested in applying modern software engineering and database
          technology to the field of GIS.
        </Typography>
      </Grid>
      <Grid size={3}></Grid>
    </Grid>
  );
}
