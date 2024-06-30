import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import empleadoReducer from "./slices/empleadoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    empleado: empleadoReducer,
  },
});
