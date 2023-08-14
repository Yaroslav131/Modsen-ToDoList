import {icPlus, icBook, icDefault, icSchool, icShopping, icWork, icWorkout } from "../../assets/images";
import { ImageName } from "../types";


type ImagesType = Record<ImageName, any>;

export const Images: ImagesType = {
    icPlus:icPlus,
    icBook: icBook,
    icSchool: icSchool,
    icShopping: icShopping,
    icWork: icWork,
    icWorkout: icWorkout,
    icDefault: icDefault
};

export const filterColors: string[] = ['#5EB0D2', '#BE8972', '#2A8899', '#646FD4', '#83BC74'];
