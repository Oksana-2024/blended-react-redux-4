import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchAllTodos } from './todosOps';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentTodo: null,
};

/* const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
}); */

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
  },
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
      })
      .addCase(editTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => {
          return item.id === action.payload.id;
        });
        state.items.splice(index, 1, action.payload);
        state.currentTodo = null;
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

  selectors: {
    selectTodos: sliceState => sliceState.items,
    selectCurrentTodo: sliceState => sliceState.currentTodo,
  },
});

//export default slice.reducer

//const selectTodos = (state) => state.todos.items
export const { setCurrentTodo } = todosSlice.actions;
export const { selectTodos, selectCurrentTodo } = todosSlice.selectors;
