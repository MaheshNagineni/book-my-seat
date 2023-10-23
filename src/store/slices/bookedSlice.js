import { createSlice } from "@reduxjs/toolkit";

export const bookedSlice = createSlice({
  name: "booked",
  initialState: { bookings: [], lastbooking: "" }, //arra of <{ seatId: "", seatType: "" }>
  reducers: {
    book: (state, action) => {
      state.bookings.push(...action.payload);
      state.lastbooking = new Date().toISOString();
    },
  },
});

export const { book } = bookedSlice.actions;

export default bookedSlice.reducer;
