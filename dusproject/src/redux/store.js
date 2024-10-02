import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // 올바른 경로로 import 확인

export const store = configureStore({
  reducer: {
    auth: authReducer, // authSlice를 reducer로 추가
  },
});