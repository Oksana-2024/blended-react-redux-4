import { configureStore } from '@reduxjs/toolkit';
/* import todos from './todosSlice'; */
import {todosSlice} from "./todosSlice"

const store = configureStore({
  reducer: {
     /* todos, */
     [todosSlice.name]: todosSlice.reducer
  },
});

export { store };
