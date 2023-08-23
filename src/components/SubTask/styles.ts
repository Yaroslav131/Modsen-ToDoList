import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({

    titleText: {
        fontFamily: "signika_light",
        color: "#363636",
        fontSize: 18,
    },
    checkBox: {
        height: width * 0.07,
        width: width * 0.07,
        borderWidth: 2,
        borderColor: "#E7E7E7",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    checkBoxImage: {
        width: "100%",
        height: "100%",
    },
    subTaskContainer: {
        flexDirection: "row",
        width: "80%",
        gap:15,
        marginLeft:15,
       alignItems:"center"
    },
    container: {
        marginVertical:10,
        alignItems: "center",
        flexDirection: "row",
    },
    optionMenuContainer: {
        width: "20%",
        height: width * 0.065,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    optionMenuImage: {
        height: "100%",
    },
});