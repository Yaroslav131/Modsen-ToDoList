/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { configureStore } from '@reduxjs/toolkit';
import topicSlice from '@/slices/topicSlice';
import taskSlice from '@/slices/taskSlice';
import subTaskSlice from '@/slices/subTaskSlice';
import modalSlice from '@/slices/modalSlice';
import taskIdOnchangeSlice from '@/slices/taskIdonchangeSlice';

const store = configureStore({
  reducer: {
    topics: topicSlice,
    tasks: taskSlice,
    subTasks: subTaskSlice,
    modal: modalSlice,
    taskIdOnchange: taskIdOnchangeSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
