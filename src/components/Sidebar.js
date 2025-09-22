import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, Button } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const Sidebar = () => {
  const menuItems = [
    { text: 'Home', icon: <HomeOutlinedIcon />, path: '/home' },
    { text: 'Messages', icon: <MessageOutlinedIcon />, path: '/messages' },
    { text: 'Tasks', icon: <TaskAltOutlinedIcon />, path: '/projects/mobile-app' }, // Points to the main task board
    { text: 'Members', icon: <PeopleAltOutlinedIcon />, path: '/members' },
    { text: 'Settings', icon: <SettingsOutlinedIcon />, path: '/settings' },
  ];

  const projects = [
    { name: 'Mobile App', color: 'primary.main', path: '/projects/mobile-app' },
    { name: 'Website Redesign', color: '#ffaf7e', path: '/projects/website-redesign' },
    { name: 'Design System', color: '#d67eff', path: '/projects/design-system' },
    { name: 'Wireframes', color: '#8bbdff', path: '#' }, // No page created yet, so link is disabled
  ];

  return (
    <Box sx={{ width: 250, height: '100vh', bgcolor: 'background.paper', p: 2, display: 'flex', flexDirection: 'column', borderRight: '1px solid #e0e0e0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <img src="/logo.png" alt="Project M" style={{ width: 24, height: 24, marginRight: 8 }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Project M.</Typography>
      </Box>

      {/* Main Menu */}
      <List>
        {menuItems.map((item) => (
          <ListItemButton component={NavLink} to={item.path} key={item.text} sx={{ borderRadius: 2, mb: 1, '&.active': { bgcolor: 'primary.light', color: 'primary.main' } }}>
            <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Projects Menu */}
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>My Projects</Typography>
          <AddCircleOutlineIcon onClick={() => alert('This would open a modal to create a new project.')} sx={{ color: 'text.secondary', cursor: 'pointer' }} />
        </Box>
        <List>
          {projects.map((project) => (
            <ListItemButton component={NavLink} to={project.path} key={project.name} disabled={project.path === '#'} sx={{ borderRadius: 2, mb: 1, '&.active': { bgcolor: 'primary.light', color: 'text.primary', fontWeight: 600 } }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: project.color, mr: 1.5 }} />
              <ListItemText primary={project.name} />
              {/* This is a placeholder for the active state indicator */}
              <MoreHorizIcon sx={{ visibility: window.location.pathname.startsWith(project.path) && project.path !== '#' ? 'visible' : 'hidden' }} fontSize="small" />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Thoughts Time Card */}
      <Box sx={{ p: 2, textAlign: 'center', borderRadius: 4, bgcolor: 'rgba(253, 236, 219, 0.5)' }}>
        <Button onClick={() => alert('This would open a "share thoughts" modal.')} variant="contained" fullWidth disableElevation sx={{ mt: 2, color: 'white', bgcolor: 'black', textTransform: 'none' }}>
          Write a message
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
