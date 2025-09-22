import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Settings = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Settings</Typography>
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <SettingsIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h5">Application Settings</Typography>
        <Typography color="text.secondary">Configure your profile, notifications, and other application preferences here.</Typography>
      </Paper>
    </Box>
  );
};

export default Settings;
