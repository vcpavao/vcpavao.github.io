//@ts-nocheck
import { Divider, Grid, Link, Stack, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import LaunchIcon from "@mui/icons-material/Launch";

const education = [
  {
    title: "Villanova University",
    body:
      "B.S. in Computer Science (2018)",
  },
  {
    title: "University of Massachusetts, Amherst",
    body:
      "M.S. in GIS Technology (2026)",
  }
];

const awards = [
  {
    title: "2026 AAG Geobowl – Most Valuable Player",
    body:
      "Finished first in individual points at the 2026 American Association of Geographers (AAG) conference Geography Bowl",
  }
];

const memberships = [
  {
    title: "Connecticut GIS Network",
  }
];

export default function Education() {
  return (
    <Grid container style={{ height: "100%" }}>
      <Grid size={3}>
        <Sidebar />
      </Grid>
      <Grid size={6} sx={{ p: 4 }}>
        <Divider sx={{ mb: 4 }} />
        <strong>EDUCATION</strong>
        {education.map((edu) => {
          return (
            <Stack my={2}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: "bold", fontSize: 16 }}
                gutterBottom
              >
                {edu.title}
              </Typography>
              {edu.body && <Typography variant="body1">{edu.body}</Typography>}
              {edu.link ? (
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
                    href={edu.linkUrl}
                  >
                    {edu.link}
                  </Link>
                </Stack>
              ) : (
                <></>
              )}
              {edu?.downloadUrl ? (
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
                    href={edu?.downloadUrl}
                  >
                    {edu?.downloadText}
                  </Link>
                </Stack>
              ) : (
                <></>
              )}
            </Stack>
          );
        })}
        <Divider sx={{ my: 4 }} />
        <strong>AWARDS</strong>
        {awards.map((edu) => {
          return (
            <Stack my={3}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: "bold", fontSize: 16 }}
                gutterBottom
              >
                {edu.title}
              </Typography>
              {edu.body && <Typography variant="body1">{edu.body}</Typography>}
              {edu.link ? (
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
                    href={edu.linkUrl}
                  >
                    {edu.link}
                  </Link>
                </Stack>
              ) : (
                <></>
              )}
              {edu?.downloadUrl ? (
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
                    href={edu?.downloadUrl}
                  >
                    {edu?.downloadText}
                  </Link>
                </Stack>
              ) : (
                <></>
              )}
            </Stack>
          );
        })}
         <Divider sx={{ my: 4 }} />
        <strong>MEMBERSHIPS</strong>
        {memberships.map((edu) => {
          return (
            <Stack my={2}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: "bold", fontSize: 16 }}
                gutterBottom
              >
                {edu.title}
              </Typography>
              {edu.body && <Typography variant="body1">{edu.body}</Typography>}
              {edu.link ? (
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
                    href={edu.linkUrl}
                  >
                    {edu.link}
                  </Link>
                </Stack>
              ) : (
                <></>
              )}
              {edu?.downloadUrl ? (
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
                    href={edu?.downloadUrl}
                  >
                    {edu?.downloadText}
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
