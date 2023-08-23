import {
    StyleSheet,
    Dimensions,
    View,
} from "react-native";

import { TitleText } from "../../styles";
import DatePicker from "react-native-date-picker";


interface AddTimeProps {
    titleText: string;
    onStartTimeChange: (time: Date) => void;
    taskStartTime?: Date;
    mode: "time" | "date" | "datetime" | undefined

}
function AddTime({
    titleText,
    onStartTimeChange,
    taskStartTime,
    mode
}: AddTimeProps) {

    return (
        <View style={styles.container}>
            <TitleText>{titleText}</TitleText>
            <DatePicker
                style={styles.datePicker}
                date={taskStartTime ? taskStartTime : new Date()}
                onDateChange={onStartTimeChange}
                mode={mode}
            />
        </View>
    );
}

export const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create(
    {
        datePicker:
        {
            alignSelf: "center"
        },
        container: {
            width: "100%"
        },
        flatList: {
            maxHeight: height * 0.2
        },
        topicButton: {
            borderRadius: 5,
            padding: 10,
            width: "100%"
        },
        topicButtonText: {
            width: "100%"
        },
        chosenTopicButton: {
            backgroundColor: "#c4c4c4"
        },
        buttonText: {
            fontSize: 20,
            fontFamily: "signika_regular"
        }
    }
)

export default AddTime;