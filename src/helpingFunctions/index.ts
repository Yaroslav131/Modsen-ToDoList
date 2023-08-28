import { topicColors } from "@/constants";
import { SubTaskType, TaskType, tasksScreenType } from "@/types";
import uuid from 'react-native-uuid';
import * as Yup from "yup";

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}

export function getRandomColor(): string {
  const randomIndex = Math.floor(Math.random() * topicColors.length);
  return topicColors[randomIndex];
}

export function getId() {
  return uuid.v4().toString();
}

function filterTasksForToday(tasks: TaskType[]): TaskType[] {
  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const todayTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    const taskDateWithoutTime = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
    return taskDateWithoutTime.getTime() === todayDate.getTime();
  });

  return todayTasks;
}

export function filtertoDoToday(tasks: TaskType[]): TaskType[] {
  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const todayTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    const taskDateWithoutTime = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
    return taskDateWithoutTime.getTime() === todayDate.getTime() && !task.isCompleted;
  });

  return todayTasks;
}

function filterTasksUntilEndOfWeek(tasks: TaskType[]): TaskType[] {
  const today = new Date();
  const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
  const endOfWeekDate = new Date(endOfWeek.getFullYear(), endOfWeek.getMonth(), endOfWeek.getDate());

  const endOfWeekTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    const taskDateWithoutTime = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
    return taskDateWithoutTime <= endOfWeekDate;
  });

  return endOfWeekTasks;
}

function filterTasksUntilEndOfMonth(tasks: TaskType[]): TaskType[] {
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const endOfMonthDate = new Date(endOfMonth.getFullYear(), endOfMonth.getMonth(), endOfMonth.getDate());

  const endOfMonthTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    const taskDateWithoutTime = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
    return taskDateWithoutTime <= endOfMonthDate;
  });

  return endOfMonthTasks;
}


function filterOverdueTasks(tasks: TaskType[]): TaskType[] {
  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const overdueTasks = tasks.filter(task => {
    const taskDate = new Date(task.date);
    const taskDateWithoutTime = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
    return taskDateWithoutTime < todayDate;
  });

  return overdueTasks;
}

export function filterTasksByTopic(tasks: TaskType[], topicId: string): TaskType[] {

  return tasks.filter(x => x.topicId === topicId);
}

function filterTasksByImportance(tasks: TaskType[]): TaskType[] {
  return tasks.filter(task => task.important === true);
}

export function filterTasksByCompletion(tasks: TaskType[], isCompleted: boolean): TaskType[] {
  return tasks.filter(task => task.isCompleted === isCompleted);
}

export function checkIsAllSubTaskCompleted(subTasks: SubTaskType[]) {
  for (let index = 0; index < subTasks.length; index++) {
    if (!subTasks[index].isCompleted) {
      return false
    }
  }

  return true
}
function filterTasksByPartialName(tasks: TaskType[], partialTaskName: string): TaskType[] {
  const filteredTasks: TaskType[] = tasks.filter(task => task.title.startsWith(partialTaskName));
  return filteredTasks;
}
export function formatTime(date: string): string {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}


export function getSortedTasks(tasks: TaskType[], type: tasksScreenType): TaskType[] {
  if (type == "Done") {
    return filterTasksByCompletion(tasks, true)
  }
  else if (type == "Falled") {
    return filterOverdueTasks(tasks)
  }
  else if (type == "Important") {
    return filterTasksByImportance(tasks)
  }
  else if (type == "Month") {
    return filterTasksUntilEndOfMonth(tasks)
  }
  else if (type == "Today") {
    return filterTasksForToday(tasks)
  }
  else if (type == "Week") {
    return filterTasksUntilEndOfWeek(tasks)
  }
  else if (type[0] == "Topic") {
    return filterTasksByTopic(tasks, type[1].id)
  }
  else if (type[0] == "Searched") {
    return filterTasksByPartialName(tasks, type[1].name)
  }
  else {
    return tasks
  }
}
