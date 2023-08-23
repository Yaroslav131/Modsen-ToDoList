/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubTaskType, } from '@/types';
import { subTasks } from '@/constants';

interface SubTaskState {
  value: SubTaskType[];
}

const initialState: SubTaskState = {
  value: subTasks,
};

const subTaskSlice = createSlice({
  name: 'subTasks',
  initialState,
  reducers: {
    addSubTask: (state, action: PayloadAction<SubTaskType[]>) => {

      state.value = action.payload;
    },
    changeSubTask: (state, action: PayloadAction<SubTaskType>) => {
      const updatedTaskIndex = state.value.findIndex(task => task.id === action.payload.id);
      if (updatedTaskIndex !== -1) {
        state.value[updatedTaskIndex] = action.payload;
      }
    },
    tongleSubTaskCompleted: (state, action: PayloadAction<[string, boolean]>) => {
      const updatedTaskIndex = state.value.findIndex(task => task.id === action.payload[0]);
      if (updatedTaskIndex !== -1) {
        state.value[updatedTaskIndex].isCompleted = action.payload[1]
      }
    },

    deleteSubTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addSubTask, changeSubTask, tongleSubTaskCompleted, deleteSubTask } = subTaskSlice.actions;

export default subTaskSlice.reducer;
