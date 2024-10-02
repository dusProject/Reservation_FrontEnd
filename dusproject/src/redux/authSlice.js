import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  reservedSeat: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    reserveSeat: (state, action) => {
        state.reservedSeat = action.payload;
    },
    cancelSeat: (state) => {
        state.reservedSeat= null;
    }
  },
});

export const { login, logout, reserveSeat, cancelSeat } = authSlice.actions;
export default authSlice.reducer;