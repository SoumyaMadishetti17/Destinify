import { configureStore } from '@reduxjs/toolkit';
import restReducer from '../features/REST/restSlice'

export const store = configureStore({
  reducer: {
    rest: restReducer,
  },
});
