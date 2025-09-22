import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Import all pages
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Members from './pages/Members';
import Settings from './pages/Settings';
import WebsiteRedesign from './pages/WebsiteRedesign'; // Import new project page
import DesignSystem from './pages/DesignSystem';   // Import new project page

// Theme remains the same
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f4f7fd', paper: '#ffffff' },
    text: { primary: '#171717', secondary: '#8a8a8a' },
    primary: { main: '#5030e5', light: 'rgba(80, 48, 229, 0.1)' },
    secondary: { main: '#fdecdb' },
    error: { light: 'rgba(216, 114, 125, 0.1)', main: '#d8727d' },
    success: { light: 'rgba(104, 178, 102, 0.1)', main: '#68b266' },
  },
  typography: { fontFamily: 'Inter, sans-serif', h4: { fontWeight: 600 }, h6: { fontWeight: 600 } },
  components: { MuiPaper: { styleOverrides: { root: { borderRadius: 16, boxShadow: 'none' } } } },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {/* Main Navigation */}
            <Route path="/" element={<Navigate to="/projects/mobile-app" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/members" element={<Members />} />
            <Route path="/settings" element={<Settings />} />

            {/* Project Navigation */}
            <Route path="/projects/mobile-app" element={<Dashboard />} />
            <Route path="/projects/website-redesign" element={<WebsiteRedesign />} />
            <Route path="/projects/design-system" element={<DesignSystem />} />
            {/* A route for "Wireframes" can be added here following the same pattern */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
