import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checked, optionMenu } from "../../../assets/images";
import { styles } from "./styles";
import { useAppDispatch } from "@/hooks";
import { tongleSubTaskCompleted } from "@/slices/subTaskSlice";

interface SubTaskProps {
    id: string
    isCompleted: boolean
    title: string
}

const SubTask = ({ isCompleted, title, id }: SubTaskProps) => {

    const dispatch = useAppDispatch()

    const handleCheck = () => {
        dispatch(tongleSubTaskCompleted([id, !isCompleted]))
    };


    return (
        <View style={styles.container}>
            <View style={styles.subTaskContainer}>
                <TouchableOpacity onPress={handleCheck} activeOpacity={1} style={styles.checkBox}>
                    {isCompleted && <Image style={styles.checkBoxImage} source={checked} />}
                </TouchableOpacity>
                <Text style={styles.titleText}>{title}</Text>
            </View>

            <View style={styles.optionMenuContainer}>
                <TouchableOpacity>
                    <Image style={styles.optionMenuImage} source={optionMenu} />
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default SubTask;
