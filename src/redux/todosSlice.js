import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchAllTodos } from './todosOps';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
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
  extraReducers(builder) {
    builder
      .addCase(addTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => {
          return action.payload.id !== item.id;
        });
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllTodos.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  selectors: { selectTodos: sliceState => sliceState.items },
});

//export default slice.reducer

//const selectTodos = (state) => state.todos.items

export const { selectTodos } = todosSlice.selectors;
