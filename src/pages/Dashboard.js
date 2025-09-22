import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Paper, IconButton, Badge, Typography, Stack } from '@mui/material'; // Make sure Stack is imported
import AddIcon from '@mui/icons-material/Add';
import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import AddTaskModal from '../components/AddTaskModal';

const columns = [
  { title: 'To Do', color: '#5030e5' },
  { title: 'In Progress', color: '#ffa500' },
  { title: 'Done', color: '#8bc34a' },
];

const Dashboard = () => {
    const tasks = useSelector((state) => state.tasks);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentStatus, setCurrentStatus] = useState('');
    
    const handleOpenModal = (status) => { setCurrentStatus(status); setModalOpen(true); };
    const handleCloseModal = () => { setModalOpen(false); setCurrentStatus(''); };
    const getTasksByStatus = (status) => { return Object.values(tasks).filter(task => task.status === status); };

    return (
        <Box>
            <Header />
            {/* The Stack component with direction="row" ensures all direct children are aligned horizontally. */}
            <Stack direction="row" spacing={3}>
              {columns.map((column) => {
                const columnTasks = getTasksByStatus(column.title);
                return (
                  // Each Paper is a column. The "flex: 1" style ensures each column takes up an equal amount of space.
                  <Paper key={column.title} sx={{ p: 2, flex: 1, backgroundColor: '#f4f7fd', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, borderBottom: `3px solid ${column.color}`, pb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: column.color, mr: 1 }} />
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{column.title}</Typography>
                        <Badge badgeContent={columnTasks.length} color="default" sx={{ ml: 2, '& .MuiBadge-badge': { backgroundColor: '#e0e0e0', color: '#625f6d' } }} />
                      </Box>
                      <IconButton size="small" onClick={() => handleOpenModal(column.title)} sx={{ color: 'primary.main' }}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                    {/* The tasks for this column are rendered vertically inside it */}
                    {columnTasks.map(task => <TaskCard key={task.id} task={task} />)}
                  </Paper>
                );
              })}
            </Stack>
            <AddTaskModal open={modalOpen} handleClose={handleCloseModal} status={currentStatus} />
        </Box>
    );
};

export default Dashboard;
