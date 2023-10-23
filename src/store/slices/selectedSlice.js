import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
  name: "selected",
  initialState: [], //arra of <{ seatId: "", seatType: "" }>
  reducers: {
    select: (state, action) => {
      state.push(action.payload);
    },
    deselect: (state, action) => {
      const seatId = action.payload;
      // Use filter to create a new array without the deselected seat
      return state.filter((seat) => seat.seatId !== seatId);
    },
    removeall: (state) => {
      return [];
    },
  },
});

export const { select, deselect, removeall } = selectedSlice.actions;

export default selectedSlice.reducer;
