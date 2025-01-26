import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

/* const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
}); */

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  
  selectors: { selectTodos: sliceState => sliceState.items },
});

//export default slice.reducer

//const selectTodos = (state) => state.todos.items

export const { selectTodos } = todosSlice.selectors;
