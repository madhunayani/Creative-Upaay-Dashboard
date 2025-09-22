import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'; // We need a library to generate unique IDs

// Style for the modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const AddTaskModal = ({ open, handleClose, status }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) return; // Don't add empty tasks

    const newTask = {
      id: uuidv4(),
      title,
      description,
      status, // The column where the task is being added
    };

    // We will create this action type next
    dispatch({ type: 'ADD_TASK', payload: newTask });

    handleClose(); // Close the modal after submitting
    setTitle('');
    setDescription('');
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Add New Task to "{status}"
        </Typography>
        <TextField
          fullWidth
          label="Task Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Task Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Task
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
