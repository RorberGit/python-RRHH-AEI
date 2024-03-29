import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    resetUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { createUser, resetUser, decrement, incrementByAmount } =
  userSlice.actions;

export default userSlice.reducer;
