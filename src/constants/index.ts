/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { getId } from '@/helpingFunctions';
import {
  icPlus, icBook, icDefault, icSchool, icShopping, icWork, icWorkout,
} from '../../assets/images';
import { ImagesType, SubTaskType, TaskType, TopicType } from '@/types';

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
    id: "School",
    imageSource: 'icSchool',
    name: 'School',
    color: '#5EB0D2',
  },
  {
    type: 'basic',
    id: 'Work',
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
]

export const topicColors: string[] = ['#5EB0D2', '#BE8972', '#2A8899', '#646FD4', '#83BC74'];

export const welcomTitle = 'Manage your tasks';
export const welcomDescription = 'Organize, plan, and collaborate on tasks with Modsen todo list.Your busy life deserves this.you can manage checklist and your goal. ';

export const tasks: TaskType[] = [
  {
    id: "task1",
    title: "Задача 1",
    topicId: 'Workout',
    description: "Описание задачи 1",
    important: true,
    date: "2023-08-17T00:00:00",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: false
  },
  {
    id: "task2",
    title: 'Work',
    topicId: "topic2",
    description: "Описание задачи 2",
    important: false,
    date: "2023-08-18T00:00:00",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: false
  },
  {
    id: "task3",
    title: "Задача 3",
    topicId: "topic3",
    description: "Описание задачи 3",
    important: false,
    date: "2023-08-17T00:00:00",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: false
  },
  {
    id: "task4",
    title: 'Workout',
    topicId: "topic3",
    description: "Описание задачи 4",
    important: false,
    date: "2023-08-18T00:00:00",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: false
  },
  {
    id: "task5",
    title: 'Work',
    topicId: "topic3",
    description: "Описание задачи 5",
    important: false,
    date: "12.12.3012",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: false
  },
  {
    id: "task6",
    title: 'Work',
    topicId: "topic3",
    description: "Описание задачи 6",
    important: false,
    date: "2023-08-18T00:00:00",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: true
  }
  ,
  {
    id: "task7",
    title: "Задача 7",
    topicId: "School",
    description: "Описание задачи 7",
    important: false,
    date: "2023-08-18T00:00:00",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: false
  },
  {
    id: "task8",
    title: "Задача 8",
    topicId: "School",
    description: "Описание задачи 8",
    important: false,
    date: "2023-08-18T00:00:00",
    forTime: "14:00 am",
    tillTime: "16:00 pm",
    isCompleted: true
  }
];

export const subTasks: SubTaskType[] = [
  {
    id: "subtask1",
    taskId: "task1",
    title: "Подзадача 1 для Задачи 1",
    isCompleted: false
  },
  {
    id: "subtask2",
    taskId: "task1",
    title: "Подзадача 2 для Задачи 1",
    isCompleted: false
  },
  {
    id: "subtask3",
    taskId: "task2",
    title: "Подзадача 1 для Задачи 2",
    isCompleted: false
  }
];
