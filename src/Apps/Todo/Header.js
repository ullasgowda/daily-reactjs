import { Button, Grid, Typography, Stack } from "@mui/material";

const Header = ({ onOpen }) => {
  return (
    <Stack direction="row" spacing={4} justifyContent={"center"}>
      <Button
        component="label"
        variant="outlined"
        size="small"
        onClick={onOpen}
        sx={{ border: 0 }}
      >
        <Typography variant="h2">
          ✔️ Todo{" "}
          <Typography component="span" variant="caption">
            create
          </Typography>
        </Typography>
      </Button>
    </Stack>
  );
};

export default Header;
