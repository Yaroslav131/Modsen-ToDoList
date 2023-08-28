import { NavigationProp, RouteProp } from "@react-navigation/native";

export type ImageName = 'icPlus' | 'icBook' | 'icSchool' | 'icShopping' | 'icWork' | 'icWorkout' | 'icDefault';
export type ImagesType = Record<ImageName, unknown>;

export type addTaskStagesType = "AddNameDescriptionImportant" | "AddTopic" | "AddStartTime" | "AddEndTime" | "AddSubtask" | "AddDate"
export type topicType = ('basic' | 'custom');

export type topicButtonType = 'add' | topicType;

export interface TopicType {
    type: topicType
    id: string
    imageSource: ImageName
    name: string
    color: string
}

export interface TaskType {
    id: string
    isCompleted: boolean
    title: string
    topicId?: string
    description?: string
    important: boolean
    date: string
    forTime: string
    tillTime: string
}


export interface SubTaskType {
    id: string
    isCompleted: boolean
    taskId: string
    title: string
}

export type tasksScreenType =
    "Today" | "Week" | "Month" | ["Topic", { id: string }]
    | "Important" | ["Searched", { name: string }] | "Falled" | "Done" | "All"

export type RootStackParamList = {
    WelcomScreen: undefined;
    HomeScreen: undefined;
    TaskScreen: { type: tasksScreenType, title: string };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    RouteName
>;

export type StackNavigation = NavigationProp<RootStackParamList>;
