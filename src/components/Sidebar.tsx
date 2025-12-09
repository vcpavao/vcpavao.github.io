import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar, Box, Link, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        p: 2,
        //borderRight: "1px solid grey",
        //#height: "100vh",
        display: "flex",
        //justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        alt="Victor Pavao"
        src="/public/x6qi1dy9.jpg"
        sx={{ width: 96, height: 96 }}
      />
      <Box sx={{ fontSize: 22, fontWeight: 600 }}>Victor Pavao</Box>
      <Typography sx={{ fontSize: 14 }}>
       M.S. in GIS Technology
      </Typography>
      <Typography sx={{ fontSize: 14 }}>
         B.S. in Computer Science
      </Typography>
      <Link color="inherit" href="https://www.linkedin.com/in/vcpavao/">
        <Typography>
          <LinkedInIcon />
          {"LinkedIn"}
        </Typography>
      </Link>
    </Box>
  );
}
