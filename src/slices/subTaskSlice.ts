import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubTaskType } from '@/types';

interface SubTaskState {
  value: SubTaskType[];
}

const initialState: SubTaskState = {
  value: [],
};

const subTaskSlice = createSlice({
  name: 'subTasks',
  initialState,
  reducers: {
    setSubTasks: (state, action) => action.payload,
    addSubTask: (state, action: PayloadAction<SubTaskType[]>) => {
      state.value = action.payload;
    },
    changeSubTask: (state, action: PayloadAction<SubTaskType>) => {
      const updatedTaskIndex = state.value.findIndex((task) => task.id === action.payload.id);
      if (updatedTaskIndex !== -1) {
        state.value[updatedTaskIndex] = action.payload;
      }
    },
    tongleSubTaskCompleted: (state, action: PayloadAction<[string, boolean]>) => {
      const updatedTaskIndex = state.value.findIndex((task) => task.id === action.payload[0]);
      if (updatedTaskIndex !== -1) {
        state.value[updatedTaskIndex].isCompleted = action.payload[1];
      }
    },

    deleteSubTask: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
  },
});

export const {
  setSubTasks, addSubTask, changeSubTask, tongleSubTaskCompleted, deleteSubTask,
} = subTaskSlice.actions;

export default subTaskSlice.reducer;
