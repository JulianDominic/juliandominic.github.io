import { Container, useMediaQuery } from '@mui/material';
import About from './pages/About.tsx';
import Experience from './pages/Experience.tsx'
import Projects from './pages/Projects.tsx';
import Sidebar from './components/Sidebar.tsx'

export default function App() {
  const largeScreen = useMediaQuery('(min-width:900px)');
  const currentPath: String   = window.location.pathname;
  var pageDisplay;
  if (currentPath == "/") {
    pageDisplay = <About />;
  } else if (currentPath == "/experience") {
    pageDisplay = <Experience />;
  } else if (currentPath == "/projects") {
    pageDisplay = <Projects />;
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: largeScreen ? "row" : "column",
        gap: "1em",
      }}
    >
      <Sidebar currentPath={ currentPath } largeScreen={ largeScreen }/>
      {pageDisplay}
    </Container>
  );
}
