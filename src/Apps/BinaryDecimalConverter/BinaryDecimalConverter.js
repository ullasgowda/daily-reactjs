import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

import Header from "./Header";

const BinaryDecimalConverter = () => {
  const [binary, setBinary] = useState("0");
  const [decimal, setDecimal] = useState(0);
  const [isConvertingToDecimal, setConvertingToDecimal] = useState(true);

  const handleBinaryChange = (e) => {
    const binaryText = e.target.value;

    if (binaryText.match(/^[0-1]+$/g) === null) {
      alert("Enter either 0 or 1");
      return;
    }

    const reversedBinaryText = binaryText.split("").map(Number).reverse();

    const convertedValue = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );

    setBinary(binaryText);
    setDecimal(convertedValue);
  };

  const handleDecimalChange = (e) => {
    const decimalText = parseInt(e.target.value);
    setDecimal(decimalText);
    setBinary(decimalText.toString(2));
  };

  const handlePrimary = () => {
    setConvertingToDecimal(!isConvertingToDecimal);
  };

  return (
    <Box sx={{ background: "#F5F7F8", minHeight: "100vh", m: 0, p: 0 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ textAlign: "center", p: 4, mt: 5 }}>
          <Header />
        </Grid>

        <Grid item xs={10}>
          <Box
            sx={{
              width: "80%",
              m: 1,
              p: 2,
              display: "flex",
              flexDirection: isConvertingToDecimal
                ? "column"
                : "column-reverse",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              sx={{ m: 2, p: 1 }}
              fullWidth
              id="binary"
              label="Enter Binary number here"
              value={binary}
              onChange={handleBinaryChange}
            />
            <TextField
              sx={{ m: 2, p: 1 }}
              inputProps={{ maxLength: 245 }}
              fullWidth
              id="decimal"
              label="Enter Decimal number here"
              value={decimal}
              onChange={handleDecimalChange}
            />
          </Box>
        </Grid>
        <Grid item xs={2} sx={{ m: "auto" }}>
          <Button variant="contained" onClick={handlePrimary}>
            {" "}
            Reverse
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BinaryDecimalConverter;
