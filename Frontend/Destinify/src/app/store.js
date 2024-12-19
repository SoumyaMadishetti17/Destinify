import { configureStore } from '@reduxjs/toolkit';
import restReducer from '../features/REST/restSlice'
import userLogedInReducer from '../features/userLogedIn/userLogedInSlice'

export const store = configureStore({
  reducer: {
    rest: restReducer,
    user: userLogedInReducer,
  },
});
