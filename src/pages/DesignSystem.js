import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';

const DesignSystem = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Design System Project</Typography>
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <PaletteIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h5">Component Library</Typography>
        <Typography color="text.secondary">All components, styles, and guidelines for the Design System project live here.</Typography>
      </Paper>
    </Box>
  );
};

export default DesignSystem;
