import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-reducer';
import todoReducer from "./todo-reducer"

const store = configureStore({
	reducer: {
    user: userReducer,
    todos: todoReducer
  },
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

export default store;