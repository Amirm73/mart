import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: { count: 20 },
  reducers: {
    inc(state) {
      state.count -= 1;
    },
    // de(state) {
    //   state.count -= 1;
    // },
    // inc(state) {
    //   setTimeout(() => {stat}, 1000);
    // },
  },
});
