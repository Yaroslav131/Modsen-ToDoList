export type ImageName = 'icPlus' | 'icBook' | 'icSchool' | 'icShopping' | 'icWork' | 'icWorkout' | 'icDefault';
export type filterButtonType = 'add' | 'filter';

export interface TopicType {
    imageSource: ImageName
    name: string
    color: string
}