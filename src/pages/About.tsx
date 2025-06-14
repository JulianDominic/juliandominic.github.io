import Markdown from "../components/Markdown";
import { markdown } from "../assets/about.md";
import { Container } from "@mui/material";
import LastUpdated from "../components/LastUpdated.tsx";

export default function About() {
  return (
    <Container>
      <Markdown>{markdown}</Markdown>
      <LastUpdated/>
    </Container>
  );
}
