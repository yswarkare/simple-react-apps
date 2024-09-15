import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggedIn = true
    },
    signOut: state => {
      state.isLoggedIn = false
    }
  }
})

export const { logIn, signOut } = userSlice.actions

export default userSlice.reducer

