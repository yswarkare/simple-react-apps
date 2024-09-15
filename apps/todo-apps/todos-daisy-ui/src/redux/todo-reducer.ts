import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: () => {

    }
  }
})

export default todoSlice.reducer;