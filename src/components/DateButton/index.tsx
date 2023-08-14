import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface DateButtonProps {
    buttonText: string
}

function DateButton(props: DateButtonProps) {
    return (
        <TouchableOpacity  activeOpacity={0.5} style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderColor: "#646FD4",
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical:2,
        width:90,
        alignItems:"center"
    },
    buttonText: {
        color: "#7D7D7D",
        fontFamily: "jost_regular",
        fontSize:22
    }
})

export default DateButton;