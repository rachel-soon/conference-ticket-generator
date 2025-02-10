import { createSlice, configureStore } from "@reduxjs/toolkit";

const ticketSlicer = createSlice({
  name: "ticket",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },

    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = ticketSlicer.actions;

const store = configureStore({
  reducer: ticketSlicer.reducer,
});

export default store;
