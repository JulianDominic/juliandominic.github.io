import Markdown from "../components/Markdown";
import { markdown } from "../assets/about.md";
import { Container } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Markdown>{markdown}</Markdown>
    </Container>
  );
}
