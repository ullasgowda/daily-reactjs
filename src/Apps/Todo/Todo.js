import { Box, Grid } from "@mui/material";
import { useState } from "react";

import Header from "./Header";
import Create from "./Create";
import List from "./List";

const Todo = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleClose = () => {
    setFormOpen(false);
  };

  const handleOpen = () => {
    setFormOpen(true);
  };

  const handleCreate = (todo) => {
    const updatedTodos = [...todos, todo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo, index) => {
      if (index !== id) return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <Box sx={{ background: "#F5F7F8", minHeight: "100vh", m: 0, p: 0 }}>
      {isFormOpen && <Create onClose={handleClose} onCreate={handleCreate} />}
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ textAlign: "center", p: 4, mt: 5 }}>
          <Header onOpen={handleOpen} />
        </Grid>

        <Grid item xs={12}>
          <List todos={todos} onDelete={handleDelete} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Todo;
