import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';

const WebsiteRedesign = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Website Redesign Project</Typography>
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <WebIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h5">Project Details</Typography>
        <Typography color="text.secondary">Tasks, files, and discussions for the Website Redesign project will be displayed here.</Typography>
      </Paper>
    </Box>
  );
};

export default WebsiteRedesign;
