import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Members = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Members</Typography>
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <PeopleOutlineIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h5">Project Members</Typography>
        <Typography color="text.secondary">Manage team members, roles, and permissions here.</Typography>
      </Paper>
    </Box>
  );
};

export default Members;
