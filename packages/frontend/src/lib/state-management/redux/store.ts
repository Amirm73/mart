import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./slices";

export const store = configureStore({
  reducer: {
    counter: counter.reducer,
  },
});
