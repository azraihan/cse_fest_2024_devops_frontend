import React, { useState, useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputs = useRef([]);

  // Handle OTP input
  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow numeric input
    if (!/^[0-9]$/.test(value) && value !== "") return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input if a number is entered and it's not the last input
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle backspace to move to the previous box
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      let newOtp = [...otp];
      if (otp[index] === "") {
        // If current input is empty, move to the previous one
        if (index > 0) {
          inputs.current[index - 1].focus();
        }
      } else {
        // Clear the current input
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Enter 6-digit OTP:
      </Typography>

      <Box sx={{ display: "flex", gap: "10px" }}>
        {otp.map((data, index) => (
          <TextField
            key={index}
            inputRef={(el) => (inputs.current[index] = el)}
            type="text"
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center" },
            }}
            value={data}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            sx={{
              width: 50,
              height: 50,
              fontSize: "20px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OtpInput;
