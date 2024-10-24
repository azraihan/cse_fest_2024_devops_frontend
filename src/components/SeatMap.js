import React, { useState } from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';

const seatStates = {
  AVAILABLE: 'available',
  RESERVED: 'reserved',
  SOLD: 'sold',
};

// Dummy data to represent seat states
const dummySeatData = [
  { id: 1, state: seatStates.AVAILABLE },
  { id: 2, state: seatStates.SOLD },
  { id: 3, state: seatStates.RESERVED },
  { id: 4, state: seatStates.AVAILABLE },
  { id: 5, state: seatStates.SOLD },
  { id: 6, state: seatStates.RESERVED },
  { id: 7, state: seatStates.AVAILABLE },
  { id: 8, state: seatStates.AVAILABLE },
  { id: 9, state: seatStates.RESERVED },
  { id: 10, state: seatStates.SOLD },
  { id: 11, state: seatStates.AVAILABLE },
  { id: 12, state: seatStates.AVAILABLE },
  { id: 13, state: seatStates.SOLD },
  { id: 14, state: seatStates.RESERVED },
  { id: 15, state: seatStates.AVAILABLE },
  { id: 16, state: seatStates.AVAILABLE },
  { id: 17, state: seatStates.SOLD },
  { id: 18, state: seatStates.RESERVED },
  { id: 19, state: seatStates.AVAILABLE },
  { id: 20, state: seatStates.AVAILABLE },
  { id: 21, state: seatStates.RESERVED },
  { id: 22, state: seatStates.SOLD },
  { id: 23, state: seatStates.AVAILABLE },
  { id: 24, state: seatStates.AVAILABLE },
  { id: 25, state: seatStates.SOLD },
  { id: 26, state: seatStates.RESERVED },
  { id: 27, state: seatStates.AVAILABLE },
  { id: 28, state: seatStates.AVAILABLE },
  { id: 29, state: seatStates.RESERVED },
  { id: 30, state: seatStates.SOLD },
  { id: 31, state: seatStates.AVAILABLE },
  { id: 32, state: seatStates.AVAILABLE },
  { id: 33, state: seatStates.SOLD },
  { id: 34, state: seatStates.RESERVED },
  { id: 35, state: seatStates.AVAILABLE },
  { id: 36, state: seatStates.AVAILABLE },
  { id: 37, state: seatStates.SOLD },
  { id: 38, state: seatStates.RESERVED },
  { id: 39, state: seatStates.AVAILABLE },
  { id: 40, state: seatStates.AVAILABLE },
  { id: 41, state: seatStates.RESERVED },
  { id: 42, state: seatStates.SOLD },
  { id: 43, state: seatStates.AVAILABLE },
  { id: 44, state: seatStates.AVAILABLE },
  { id: 45, state: seatStates.SOLD },
  { id: 46, state: seatStates.RESERVED },
  { id: 47, state: seatStates.AVAILABLE },
  { id: 48, state: seatStates.AVAILABLE },
];

const SeatMap = () => {
  const [seats, setSeats] = useState(dummySeatData);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const getSeatColor = (seatState, isSelected) => {
    if (isSelected) return 'blue'; // Color for selected seats
    switch (seatState) {
      case seatStates.AVAILABLE:
        return 'green';
      case seatStates.RESERVED:
        return 'orange';
      case seatStates.SOLD:
        return 'red';
      default:
        return 'gray';
    }
  };

  // Toggle seat selection
  const handleSeatSelect = (seat) => {
    if (seat.state !== seatStates.AVAILABLE) return; // Only allow selection for available seats

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seat.id)); // Deselect seat
    } else {
      setSelectedSeats([...selectedSeats, seat.id]); // Select seat
    }
  };

  const renderSeats = (startIndex, endIndex) => (
    <Grid container spacing={2}>
      {seats.slice(startIndex, endIndex).map((seat) => (
        <Grid item xs={4} key={seat.id}>
          <Button
            fullWidth
            variant="contained"
            style={{
              backgroundColor: getSeatColor(seat.state, selectedSeats.includes(seat.id)),
              color: '#fff',
            }}
            onClick={() => handleSeatSelect(seat)}
          >
            {seat.id}
          </Button>
        </Grid>
      ))}
    </Grid>
  );

  // Handle checkout
  const handleCheckout = () => {
    if (selectedSeats.length > 0) {
      alert(`Proceeding to checkout with seat(s): ${selectedSeats.join(', ')}`);
    } else {
      alert('No seats selected.');
    }
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: 4, width: "60%" }}>
      {/* Left and Right side seat map */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4, gap: '2rem' }}>
        <Box>
          {renderSeats(0, 24)}
        </Box>
        <Box sx={{ width: 50 }} />
        <Box>
          {renderSeats(24, 48)}
        </Box>
      </Box>

      {/* Legend */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Status</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: 'green' }} />
            <Typography>Available</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: 'orange' }} />
            <Typography>Reserved</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: 'red' }} />
            <Typography>Sold</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 20, height: 20, backgroundColor: 'blue' }} />
            <Typography>Selected</Typography>
          </Box>
        </Box>
      </Box>

      {/* Process to Checkout Button */}
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCheckout}
          disabled={selectedSeats.length === 0} // Disable if no seats selected
        >
          Process to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default SeatMap;
