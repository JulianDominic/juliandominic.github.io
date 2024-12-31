import { Routes, Route, useLocation } from "react-router-dom";
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

// Fix for rewritten paths from 404.html
function RedirectHandler({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Check if URL uses the rewritten format (/?/path)
  if (location.search.startsWith("?/")) {
    const newPath = location.search.slice(2).replace(/~and~/g, "&");
    window.history.replaceState({}, "", newPath); // Update the URL to the correct path
  }

  return <>{children}</>;
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
    <RedirectHandler>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </RedirectHandler>
  );
}
