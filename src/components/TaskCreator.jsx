import React from "react";
import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <TextField
        sx={{ margin: "1rem" }}
        type="text"
        variant="outlined"
        value={newTask}
        label="Enter a new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button sx={{ margin: "1rem" }} type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default TaskCreator;
