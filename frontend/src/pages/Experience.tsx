import { Container } from "@mui/material";
import ExperienceCard from "../components/ExperienceCard";
import experiencesJson from "../assets/experiences.json";

const experiences = experiencesJson.experiences;

export default function Experience() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em"
      }}
    >
      {
        experiences.map((exp, idx) => (
          <Container key={idx}>
            <ExperienceCard exp={ exp }/>
          </Container>
        ))
      }
    </Container>
  );
}
