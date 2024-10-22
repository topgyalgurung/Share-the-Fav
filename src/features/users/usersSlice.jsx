import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Topgyal" },
  { id: "2", name: "Dolkar" },
  { id: "3", name: "Tsering" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
