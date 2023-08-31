/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  icPlus, icBook, icDefault, icSchool, icShopping, icWork, icWorkout,
} from '@assets/images';
import * as Yup from 'yup';
import { getId } from '@/helpingFunctions';
import { ImagesType, TopicType, addTaskStagesType } from '@/types';

export const Images: ImagesType = {
  icPlus,
  icBook,
  icSchool,
  icShopping,
  icWork,
  icWorkout,
  icDefault,
};

export const basicTopics: TopicType[] = [
  {
    type: 'basic',
    id: getId(),
    imageSource: 'icSchool',
    name: 'School',
    color: '#5EB0D2',
  },
  {
    type: 'basic',
    id: getId(),
    imageSource: 'icWork',
    name: 'Work',
    color: '#BE8972',
  },
  {
    type: 'basic',
    id: getId(),
    imageSource: 'icShopping',
    name: 'Shop',
    color: '#2A8899',
  },
  {
    type: 'basic',
    id: getId(),
    name: 'Read',
    imageSource: 'icBook',
    color: '#646FD4',
  },
  {
    type: 'basic',
    id: 'Workout',
    imageSource: 'icWorkout',
    name: 'Workout',
    color: '#83BC74',
  },
];

export const topicColors: string[] = ['#5EB0D2', '#BE8972', '#2A8899', '#646FD4', '#83BC74'];

export const welcomTitle = 'Manage your tasks';
export const welcomDescription = 'Organize, plan, and collaborate on tasks with Modsen todo list.Your busy life deserves this.you can manage checklist and your goal. ';

export const addTaskStages: addTaskStagesType[] = [
  'AddNameDescriptionImportant',
  'AddTopic',
  'AddStartTime',
  'AddEndTime',
  'AddDate',
  'AddSubtask',
];

export const addStartTimeTitle = 'Task start time';
export const addEndTimeTitle = 'Task end time';
export const addDataTitle = 'Task data';
