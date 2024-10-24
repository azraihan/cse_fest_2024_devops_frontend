import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import { jsPDF } from "jspdf";

const Payment = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a payment process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, stop the loading and show the success message
    }, 3000); // 3 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  // Function to generate and download the PDF receipt
  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.text("Payment Receipt", 20, 20);
    doc.text("Thank you for your payment!", 20, 30);
    doc.text("Receipt No: 123456", 20, 40);
    doc.text("Amount: $100.00", 20, 50);
    doc.text("Date: 24 October 2024", 20, 60);
    doc.save("receipt.pdf");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {loading ? (
        <>
          {/* Show loading spinner */}
          <CircularProgress />
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Processing your payment...
          </Typography>
        </>
      ) : (
        <>
          {/* Payment completed message */}
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Payment Completed!
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Thank you for your purchase.
          </Typography>

          {/* Buttons */}
          <Box sx={{ marginTop: 3, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.reload()} // Reload page to simulate going back
            >
              Go Back
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={downloadReceipt}
            >
              Download Receipt
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Payment;
