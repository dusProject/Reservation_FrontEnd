import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  reservedSeat: null,
  userId: 'nickName',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userId = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userId = '';  // logout 시 userId 초기화
      state.reservedSeat = null;  // 로그아웃 시 예약 좌석도 초기화
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