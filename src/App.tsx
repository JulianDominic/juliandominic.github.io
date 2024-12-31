import { Routes, Route } from "react-router-dom";
import { Container, useMediaQuery } from '@mui/material';
import About from './pages/About.tsx';
import Experience from './pages/Experience.tsx';
import Projects from './pages/Projects.tsx';
import Sidebar from './components/Sidebar.tsx';

function NotFound() {
  // Redirect to 404.html or display a fallback message
  window.location.href = "/404.html";
  return null; // Prevent React from rendering anything during redirection
}

function Layout({ children }: { children: React.ReactNode }) {
  const largeScreen = useMediaQuery('(min-width:900px)');
  const currentPath = window.location.pathname;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: largeScreen ? "row" : "column",
        gap: "1em",
      }}
    >
      <Sidebar currentPath={currentPath} largeScreen={largeScreen} />
      {children}
    </Container>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
