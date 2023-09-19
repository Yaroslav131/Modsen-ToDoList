import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopicType } from '@/types';
import { getId, getRandomColor } from '@/helpingFunctions';
import { BASIC_TOPICS } from '@/constants';

interface TopicState {
  value: TopicType[];
}

const initialState: TopicState = {
  value: BASIC_TOPICS,
};

const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    SetTopics: (state, action) => action.payload,
    addTopic: (state, action: PayloadAction<string>) => {
      const topic: TopicType = {
        type: 'custom',
        color: getRandomColor(),
        imageSource: 'icDefault',
        name: action.payload,
        id: getId(),
      };
      state.value = [...state.value, topic];
    },
    deleteTopic: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((topic) => topic.id !== action.payload);
    },
  },
});

export const { SetTopics, addTopic, deleteTopic } = topicSlice.actions;

export default topicSlice.reducer;
