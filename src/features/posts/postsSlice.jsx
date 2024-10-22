import { createSlice, nanoid } from "@reduxjs/toolkit";

//import ".assets/shampoo";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    category: "shampoo",
    itemName: "Head & Shoulders Clinical Dandruff",
    link: "https://a.co/d/4bYjlNT",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
    },
  },
  {
    id: 2,
    category: "bottle",
    itemName: "Hydro Flask ",
    link: "",
    image: "",
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
    },
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded(state, action) {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload); // formData
      },
      prepare(itemName, image, link, userId) {
        return {
          payload: {
            id: nanoid(),
            itemName,
            image,
            link,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumpsUp: 0,
              thumpsDown: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++; // not mutating state
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
