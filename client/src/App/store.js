import { configureStore } from "@reduxjs/toolkit";
import isLoggedInReducer from "../Features/isLoggedInSlice";

export const store = configureStore({
  reducer: {
    userLogin: isLoggedInReducer,
  },
});
