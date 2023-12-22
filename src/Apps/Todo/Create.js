import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Create = ({ onClose, onCreate }) => {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCreateTodo = () => {
    onCreate(todo);
    onClose();
    setTodo("");
  };

  return (
    <Dialog open={true} fullWidth maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <DialogTitle sx={{ textAlign: "center" }}>Add Todo</DialogTitle>
          <DialogContent sx={{ my: 1, p: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sx={{ mt: 5 }}>
                <TextField
                  fullWidth
                  id="todo"
                  value={todo}
                  onChange={handleTodoChange}
                  label={
                    <Typography variant="legend">Write here 🖊...</Typography>
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button variant="outlined" onClick={onClose}>
                  Close
                </Button>
                <Button variant="contained" onClick={handleCreateTodo}>
                  Create
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Create;
