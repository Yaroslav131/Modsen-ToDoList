import { topicColors } from "@/constants";
import { SubTaskType, TaskType } from "@/types";
import uuid from 'react-native-uuid';

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

export function filterTasksForToday(tasks: TaskType[]): TaskType[] {
  const today = new Date()

  const todayTasks = tasks.filter(task => new Date(task.date) === today);

  return todayTasks;
}

export function filterTasksUntilEndOfWeek(tasks: TaskType[]): TaskType[] {
  const today = new Date();
  const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));

  const endOfWeekTasks = tasks.filter(task => new Date(task.date) <= endOfWeek);

  return endOfWeekTasks;
}

export function filterTasksUntilEndOfMonth(tasks: TaskType[]): TaskType[] {
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const endOfMonthTasks = tasks.filter(task => new Date(task.date) <= endOfMonth);

  return endOfMonthTasks;
}

export function filterOverdueTasks(tasks: TaskType[]): TaskType[] {
  const today = new Date()

  const overdueTasks = tasks.filter(task => new Date(task.date) < today && !task.isCompleted);

  return overdueTasks;
}

export function filterTasksByTopic(tasks: TaskType[], topicId: string): TaskType[] {
  return tasks.filter(task => task.topicId === topicId);
}

export function filterTasksByImportance(tasks: TaskType[]): TaskType[] {
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

export function formatTime(date: string): string {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}