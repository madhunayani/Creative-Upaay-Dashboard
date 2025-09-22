import React from 'react';
import { Box, Typography, Avatar, AvatarGroup, Button } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const Header = () => {
  const handleInvite = () => {
    alert('Invite functionality: This would open a modal to invite team members.');
  };

  const handleEdit = () => {
    alert('Edit Project Name: This would allow renaming the "Mobile App" project.');
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Creative Upaay Dashboard',
        text: 'Check out this project dashboard!',
        url: url,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(url).then(() => {
        alert('Project link copied to clipboard!');
      }, () => {
        alert('Failed to copy link.');
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      {/* Left side of Header */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mr: 2 }}>Mobile App</Typography>
        <EditOutlinedIcon onClick={handleEdit} sx={{ color: 'primary.main', mr: 1, cursor: 'pointer' }} />
        <LinkOutlinedIcon onClick={handleShare} sx={{ color: 'primary.main', cursor: 'pointer' }} />
      </Box>

      {/* Right side of Header */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AvatarGroup max={5}>
          <Avatar alt="User 1" src="/static/images/avatar/1.jpg" />
          <Avatar alt="User 2" src="/static/images/avatar/2.jpg" />
          <Avatar alt="User 3" src="/static/images/avatar/3.jpg" />
          <Avatar alt="User 4" src="/static/images/avatar/4.jpg" />
        </AvatarGroup>
        <Button onClick={handleInvite} variant="text" sx={{ ml: 2, color: 'primary.main', textTransform: 'none', fontWeight: 600 }}>
          + Invite
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
