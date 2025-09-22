import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Avatar, AvatarGroup, LinearProgress } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const priorityChipStyles = {
  'Low': { backgroundColor: 'secondary.main', color: '#d58d49' },
  'High': { backgroundColor: 'error.light', color: '#d8727d' },
  'Completed': { backgroundColor: 'success.light', color: '#68b266' },
};

const TaskCard = ({ task }) => {
  if (!task) return null;

  const chipStyle = priorityChipStyles[task.priority] || {};

  return (
    <Card sx={{ mb: 2, p: 2, borderRadius: 4, backgroundColor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Chip label={task.priority} size="small" sx={{ fontWeight: 'bold', ...chipStyle }} />
        <MoreHorizIcon sx={{ color: 'text.secondary' }} />
      </Box>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        {task.title}
      </Typography>
      {task.description && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          {task.description}
        </Typography>
      )}
      
      {/* Progress Bar for specific tasks, can be made conditional */}
      {task.id === 'task-5' && <LinearProgress variant="determinate" value={100} color="success" sx={{ borderRadius: 5, height: 6, mb: 2 }} />}
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <AvatarGroup max={3}>
          <Avatar sx={{ width: 24, height: 24 }} alt="User 1" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ width: 24, height: 24 }} alt="User 2" src="/static/images/avatar/2.jpg" />
        </AvatarGroup>
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2" sx={{ mr: 2 }}>12 comments</Typography>
          <AttachFileIcon sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2">0 files</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TaskCard;
