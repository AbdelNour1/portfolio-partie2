import { createSlice } from "@reduxjs/toolkit";

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    testimonials: [
      {
        id: 1,
        name: "John Doe",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        name: "Jane Smith",
        message:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      },
      {
        id: 3,
        name: "Alice Johnson",
        message:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.",
      },
    ],
  },
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },

    editTestimonial: (state, action) => {
      const editedTestimonial = state.testimonials.find(
        (t) => t.id === action.payload.id
      );
      if (editedTestimonial) {
        editedTestimonial.name = action.payload.name;
        editedTestimonial.message = action.payload.message;
      }
    },

    deleteTestimonial: (state, action) => {
      state.testimonials = state.testimonials.filter(
        (t) => t.id !== action.payload
      );
    },
  },
});

export const { addTestimonial, editTestimonial, deleteTestimonial } =
  testimonialsSlice.actions;

export default testimonialsSlice.reducer;
