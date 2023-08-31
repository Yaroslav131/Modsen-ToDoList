/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '@/types';

interface TaskState {
  value: TaskType[];
}

const initialState: TaskState = {
  value: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.value = [...state.value, action.payload];
    },
    tongleTaskCompleted: (state, action: PayloadAction<string>) => {
      const updatedTaskIndex = state.value.findIndex((task) => task.id === action.payload);
      if (updatedTaskIndex !== -1) {
        const { isCompleted } = state.value[updatedTaskIndex];
        state.value[updatedTaskIndex].isCompleted = !isCompleted;
      }
    },
    changeTask: (state, action: PayloadAction<TaskType>) => {
      const updatedTaskIndex = state.value.findIndex((task) => task.id === action.payload.id);
      if (updatedTaskIndex !== -1) {
        state.value[updatedTaskIndex] = action.payload;
      }
    },
    deleteTopicForTasks: (state, action: PayloadAction<string>) => {
      state.value.forEach((x) => {
        x.topicId = x.topicId === action.payload ? undefined : x.topicId;
      });
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  deleteTopicForTasks,
  addTask,
  changeTask,
  tongleTaskCompleted,
  setTasks,
  deleteTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
