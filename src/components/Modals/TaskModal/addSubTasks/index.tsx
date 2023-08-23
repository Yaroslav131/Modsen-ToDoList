import SubTaskFlatList from "@/components/SubTaskFlatList";
import { SubTaskType } from "@/types";
import { ic_plus } from "@assets/images";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { TextInput, TitleText } from "../../styles";

interface AddSubTaskProps {
    subTasks: SubTaskType[],
    onAddSubTasks: (name: string) => void;
    onDeleteSubTasks: (id: string) => void
}

function AddSubTask({ subTasks, onAddSubTasks, onDeleteSubTasks }: AddSubTaskProps) {

    const [subTaskName, setSubTaskName] = useState("")

    return (
        <>
            <TitleText>Subtasks (Optional)</TitleText>

            <SubTaskFlatList tasks={subTasks} />
            <TextInput
                placeholder="New subtask"
                value={subTaskName}
                onChangeText={(text) => setSubTaskName(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => { 
                onAddSubTasks(subTaskName) 
                setSubTaskName("")
            }}>
                <Image style={styles.addButtonImage} source={ic_plus} />
            </TouchableOpacity>
        </>
    );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({

    addButton: {
        marginTop: 15,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.11,
        height: width * 0.11,
        backgroundColor: "#646FD4",
        borderRadius: 100,
        zIndex: 20
    },

    addButtonImage: {
        width: "80%",
        height: "80%"
    },
});


export default AddSubTask;