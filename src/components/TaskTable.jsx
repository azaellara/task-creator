import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TaskRows from "./TaskRows";

const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRows task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <TableContainer sx={{ border: "3px solid", borderRadius: "10px" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "2em",
                fontWeight: "700",
                padding: "2rem",
                background: "#2e86f7",
                color: "#FFFFFF",
                border: "1.5px solid #000000",
              }}
            >
              Task
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{taskTableRows(showCompleted)}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
