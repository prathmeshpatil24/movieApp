import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice'; // Default import

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store; // Default export