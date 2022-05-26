import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  posts: {},
  titles: {},
  photos: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.users = payload;
    },
    addPosts: (state, { payload }) => {
      state.posts = payload;
    },
    showUsers: (state, { payload }) => {
      state.list = payload;
    },
    showTitles: (state, { payload }) => {
      state.titles = payload;
    },
    showPhotos: (state, { payload }) => {
      state.photos = payload;
    },
  },
});

export const { addUsers } = usersSlice.actions;
export const { addPosts } = usersSlice.actions;
export const { showTitles } = usersSlice.actions;
export const { showPhotos } = usersSlice.actions;
export const getAllUsers = (state) => state.users.users;
export const getAllPosts = (state) => state.users.posts;
export const getAllTitles = (state) => state.users.titles;
export const getAllPhotos = (state) => state.users.photos;
export default usersSlice.reducer;
