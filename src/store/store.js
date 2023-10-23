import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "./slices/selectedSlice";
import bookedReducer from "./slices/bookedSlice";

export default configureStore({
  reducer: {
    selected: selectedReducer,
    booked: bookedReducer,
  },
});
