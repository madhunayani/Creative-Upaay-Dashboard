import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Home</Typography>
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <BarChartIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h5">Welcome to your Dashboard!</Typography>
        <Typography color="text.secondary">This is the homepage. Key metrics and summaries will be displayed here.</Typography>
      </Paper>
    </Box>
  );
};

export default Home;
