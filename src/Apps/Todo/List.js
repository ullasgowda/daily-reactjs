import { Box, Button, Card, Typography } from "@mui/material";

const List = ({ todos, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {todos.map((todo, index) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: 2,
              p: 1,
              border: "2px solid #45474B",
              borderRadius: 4,
              background: "#495E57",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "auto",
                height: "100px",
                background: "#495E57",
                textAlign: "center",
                color: "#F4CE14",
              }}
              elevation={0}
            >
              <Typography variant="h6">{todo}</Typography>
            </Card>
            <Button
              sx={{ width: "50%", color: "#F5F7F8", mx: 3, px: 3 }}
              variant="outlined"
              color="primary"
              onClick={() => handleDelete(index)}
            >
              Remove
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default List;
