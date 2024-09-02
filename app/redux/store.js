import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slice/favoritesSlice.jsx';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
