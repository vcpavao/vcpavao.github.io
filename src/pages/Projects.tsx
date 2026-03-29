import { Divider, Grid, Link, Stack, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "OpenStreetMap for Conservation Presentation",
    body:
      "In December 2025, I gave a presentation to Kestrel Land Trust's stewardship team on how conservation " +
      "organizations can edit their proprietary data on OpenStreetMap. I taught tagging practices, uploading GPX traces, " +
      "JOSM, and how to get OSM trail data in a shapefile for ArcGIS projects.",
    link: "View the slides here",
    linkUrl: "https://docs.google.com/presentation/d/1vE-jAovHeDEWIDLko8_b-wEPY78aouFvf_0qGhKc8Sc/edit?usp=sharing",
  },
  {
    title: "Containerizing geospatial workflows using Podman",
    body:
      "I explored podman as an open-source software for containerizing the components of a full-stack " +
      "geospatial web application. I also researched Red Hat OpenShift as a cloud-based platform for hosting the containers, " +
      "but my computer was unable to run OpenShift clusters locally, and ROSA (Red Hat OpenShift on AWS) did not have a " +
      "free option for students. I discuss these roadblocks in my presentation, which was my term project for the " +
      "Spatial Databases course.",
    link: "View the slides here",
    linkUrl: "https://docs.google.com/presentation/d/1QLEg_zCBflH3IdzT91Cjw1UvC863RzqfL5ME2t5VYfg/edit?usp=sharing"
  },
  {
    title: "Full-stack trails application",
    body:
      "I built a full-stack web application for uploading GPX trail files and displaying them on a map " +
      "in the browser. The trails were converted from GPX and stored in a PostGIS database hosted on AWS (AWS RDS). " +
      "The trails were queried by server-side API calls written in Node/Express.js. " +
      "This project exposed me to the multiple working parts of a geospatial web application, including the GDAL toolkit.",
  },
  {
    title: "Estimating domestic wells in Massachusetts",
    body:
      "While working as a Research Assistant for the Massachusetts DEP Well Driller Program, I authored a " +
      "Jupyter Notebook script and a Python toolbox for estimating which tax parcels in the state contain active, " +
      "domestic wells. The script and toolbox follow a detailed methodology based on tax parcel attributes such as " +
      "property use code, building style, and proximity to a Public Water System. I also created and am helping " +
      "administer the ArcGIS Dashboard and other ArcGIS Online maps for displaying the relevant data to project stakeholders.",
    link: "View my scripts here",
    linkUrl:
      "https://github.com/vcpavao/gis-portfolio/blob/main/massdep_wells_estimates/Wells_Estimates.ipynb",
    downloadText: "",
    downloadUrl: ""
  },
];

export default function Projects() {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid size={3}>
        <Sidebar />
      </Grid>
      <Grid size={6} sx={{ p: 4 }}>
        {projects.map((proj) => {
          return (
            <Stack>
              <Divider sx={{ my: 2 }} />
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: "bold", fontSize: 16 }}
                gutterBottom
              >
                {proj.title}
              </Typography>
              <Typography variant="body1">{proj.body}</Typography>
              {proj.link ? (
                <Stack
                  alignItems="center"
                  direction="row"
                  gap={1}
                  sx={{ my: 1 }}
                >
                  <LaunchIcon color="secondary" />
                  <Link
                    underline="hover"
                    variant="inherit"
                    color="secondary"
                    href={proj.linkUrl}
                  >
                    {proj.link}
                  </Link>
                </Stack>
              ) : (
                <></>
              )}
              {proj?.downloadUrl ? (
                <Stack
                  alignItems="center"
                  direction="row"
                  gap={1}
                  sx={{ my: 1 }}
                >
                  <LaunchIcon color="secondary" />
                  <Link
                    underline="hover"
                    variant="inherit"
                    color="secondary"
                    href={proj?.downloadUrl}
                  >
                    {proj?.downloadText}
                  </Link>
                </Stack>
              ) : (
                <></>
              )}
            </Stack>
          );
        })}
      </Grid>
      <Grid size={3}></Grid>
    </Grid>
  );
}
