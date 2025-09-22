import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#f4f7fd', minHeight: '100vh' }}>
      {/* The persistent sidebar */}
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
        {/* The Outlet is a placeholder from React Router that will render the active page component (e.g., Home, Dashboard, etc.) */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
