import { Container } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import projectsJson from "../assets/projects.json";

const projects = projectsJson.projects;

export default function Projects() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em"
      }}
    >
      {
        projects.map((proj, idx) => (
          <Container key={idx}>
            <ProjectCard proj={proj} />
          </Container>
        ))
      }
    </Container>
  );
}

