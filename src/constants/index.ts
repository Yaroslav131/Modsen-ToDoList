import { getId } from '@/helpingFunctions';
import { ImagesType, TopicType, addTaskStagesType } from '@/types';


export const BASIC_TOPICS: TopicType[] = [
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

export const TOPIC_COLORS: string[] = ['#5EB0D2', '#BE8972', '#2A8899', '#646FD4', '#83BC74'];

export const WELCOME_TITLE = 'Manage your tasks';
export const WELCOM_DESCRIPTION = 'Organize, plan, and collaborate on tasks with Modsen todo list.Your busy life deserves this.you can manage checklist and your goal. ';

export const ADD_TASK_STAGES: addTaskStagesType[] = [
  'AddNameDescriptionImportant',
  'AddTopic',
  'AddStartTime',
  'AddEndTime',
  'AddDate',
  'AddSubtask',
];

export const ADD_START_TIME_TITLE = 'Task start time';
export const ADD_END_TIME_TITLE = 'Task end time';
export const ADD_DATA_TITLE = 'Task data';

export const STORAGE_KEY = 'isWellcomSreenCheck';

export const IMAGES = {
  welcomImg: require('@assets/images/welcomImg.png'),
  leftEllipse: require('@assets/images/leftEllipse.png'),
  rightEllipse: require('@assets/images/rightEllipse.png'),
  largeRightEllipse: require('@assets/images/largeEllipse.png'),
  searchIcon: require('@assets/images/searchIcon.png'),
  icBook: require('@assets/images/icBook.png'),
  icSchool: require('@assets/images/icSchool.png'),
  icShopping: require('@assets/images/icShopping.png'),
  icWork: require('@assets/images/icWork.png'),
  icWorkout: require('@assets/images/icWorkout.png'),
  icDefault: require('@assets/images/icDefault.png'),
  icPlus: require('@assets/images/icPlus.png'),
  deleteIcon: require('@assets/images/deleteIcon.png'),
  checked: require('@assets/images/ic_checked.png'),
  optionMenu: require('@assets/images/ic_optionMenu.png'),
  closeDone: require('@assets/images/closeDone.png'),
  openDone: require('@assets/images/openDone.png'),
  ic_plus: require('@assets/images/ic_plus.png'),
  important: require('@assets/images/important.png'),
  notImportant: require('@assets/images/notImportant.png'),
  backArrow: require('@assets/images/backArrow.png'),
  burgerMenu: require('@assets/images/burgerMenu.png'),
  drawerdDayly: require('@assets/images/drawerdDayly.png'),
  drawerImportant: require('@assets/images/drawerImportant.png'),
  doneAll: require('@assets/images/doneAll.png'),
  drawerOverdue: require('@assets/images/drawerOverdue.png'),
  drawerAllTasks: require('@assets/images/drawerAllTasks.png'),
  drawerHome: require('@assets/images/drawerHome.png'),
  cancel: require('@assets/images/cancel.png'),
};


export const TOPIC_IMAGES: ImagesType = {
  icPlus: IMAGES.icPlus,
  icBook: IMAGES.icBook,
  icSchool: IMAGES.icSchool,
  icShopping: IMAGES.icShopping,
  icWork: IMAGES.icWork,
  icWorkout: IMAGES.icWorkout,
  icDefault: IMAGES.icDefault,
};

export const DATE_BUTTONS = [
  { type: 'Today', title: "Today's tasks", buttonText: 'Today' },
  { type: 'Week', title: 'Week tasks', buttonText: 'Week' },
  { type: 'Month', title: 'Month tasks', buttonText: 'Month' },
];

export const NATIFICATIONS_DALAY = 10