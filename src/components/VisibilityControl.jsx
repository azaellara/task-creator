import React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

const VisibilityControl = ({ setShowCompleted, cleanTask, isChecked }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTask();
    }
  };

  return (
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <FormControlLabel
        sx={{ margin: "0 2rem" }}
        control={
          <Switch
            checked={isChecked}
            {...label}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
        }
        label="Show Task Done"
      />
      <Button
        color="error"
        onClick={handleDelete}
        variant="contained"
        sx={{ margin: "0 2rem" }}
      >
        Clean
      </Button>
    </FormGroup>
  );
};

export default VisibilityControl;
