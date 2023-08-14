import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopicType } from '../types';

interface HistoryState {
  value: TopicType[];
}

const initialState: HistoryState = {
  value: [
    {
      imageSource: 'icSchool',
      name: "School",
      color: "#5EB0D2"
    },
    {
      imageSource: 'icWork',
      name: "Work",
      color: "#BE8972"
    }
    ,
    {
      imageSource: 'icShopping',
      name: "Shop",
      color: "#2A8899"
    },
    {
      name: "Read",
      imageSource: 'icBook',
      color: "#646FD4"
    }
    ,
    {
      imageSource: 'icWorkout',
      name: "Workout",
      color: "#83BC74"
    },
  ],
};

const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action: PayloadAction<TopicType>) => {
      state.value.push(action.payload);
    },
    deleteTopic: (state, action: PayloadAction<TopicType>) => {
      state.value = state.value.filter(topic => topic.name !== action.payload.name);
    },
  },
});

export const { addTopic, deleteTopic } = topicSlice.actions;

export default topicSlice.reducer;
