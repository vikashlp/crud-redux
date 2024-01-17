import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    agents: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.agents.push(action.payload);
    },
    removeUser: (state, action) => {
      console.log("action==>", action);
      state.agents = state.agents.filter(
        (user) => user.id !== action.payload.id
      );
    },
    updateUser: (state, action) => {
      state.agents = state.agents.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
