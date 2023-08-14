import {configureStore} from '@reduxjs/toolkit';
import topicSlice from '../slices/topicSlice';

const store = configureStore({
  reducer: {
    topics: topicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
