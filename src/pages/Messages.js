import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Messages = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>Messages</Typography>
      <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <MailOutlineIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h5">Your Inbox</Typography>
        <Typography color="text.secondary">All your project-related messages and notifications will appear here.</Typography>
      </Paper>
    </Box>
  );
};

export default Messages;
