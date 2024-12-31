import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Container, IconButton, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Sidebar({ currentPath, largeScreen } : { currentPath:String, largeScreen:Boolean }) {
  const isAbout: Boolean      = currentPath == "/";
  const isExperience: Boolean = currentPath == "/experience";
  const isProjects: Boolean   = currentPath == "/projects";
  // const isContact: Boolean    = currentPath == "/contact";

  return (
    <Container
      sx={{
        flex: 0,
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        borderRight: largeScreen ? "inset grey 1px" : "",
        borderBottom: !largeScreen ? "inset grey 1px" : "",
        minWidth: "300px",
        padding: 0,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
        }}
      >
        <Link href="/" color={grey[900]} variant="h6" underline="none">
          Julian Dominic
        </Link>
        <Typography variant="subtitle1" color="textSecondary">What would you like to find out?</Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
          color: grey[900]
        }}
      >
        <Link href="/" color="inherit" underline={isAbout ? "always" : "hover"}>
          <Typography variant="button">About</Typography>
        </Link>
        <Link href="/experience" color="inherit" underline={isExperience ? "always" : "hover"}>
          <Typography variant="button">Work Experience</Typography>
        </Link>
        <Link href="/projects" color="inherit" underline={isProjects ? "always" : "hover"}>
          <Typography variant="button">Projects</Typography>
        </Link>
        {/* <Link color="inherit" underline={isContact ? "always" : "hover"}>
          <Typography variant="button">Contact</Typography>
        </Link> */}
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <IconButton aria-label="github" href="https://github.com/JulianDominic" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </IconButton>
        <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/julian-dominic-liaw/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </IconButton>
        <IconButton aria-label="email" href="mailto:juliandominicliaw@outlook.com" target="_blank" rel="noopener noreferrer">
          <Email />
        </IconButton>
      </Container>
    </Container>
  );
}
