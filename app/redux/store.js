import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "./testimonialSlice";

export const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
  },
});
