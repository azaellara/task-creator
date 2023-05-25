import styled from "@emotion/styled";
import { TableCell, TableRow } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TaskRows = ({ task, toggleTask }) => {
  return (
    <TableRow>
      <TableCell
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.5em",
          fontWeight: "700",
          color: "#000000",
          border: ".5px solid",
        }}
      >
        {task.name}
        <Checkbox
          {...label}
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </TableCell>
    </TableRow>
  );
};

export default TaskRows;
