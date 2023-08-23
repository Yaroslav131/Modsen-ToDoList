import { StyleSheet, Dimensions, } from "react-native";

export const { width } = Dimensions.get("window");

export const dynamicTextStyles = (isDisplaySubTasks: boolean) => ({
    descriptionText: {
        fontFamily: "signika_light",
        color: isDisplaySubTasks ? "#9c9c9c" : "#E7E7E7",
        fontSize: isDisplaySubTasks ? 18 : 14,
    },
});

export const styles = StyleSheet.create({

   
    settingContainer: {
        position: "absolute",

        height: "100%",
        zIndex: 20,
        backgroundColor: "#FFF",
        borderRadius: 20,
        elevation: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
        right: 40,
        padding: 15
    },
    container: {
        width: "100%",
        backgroundColor: "#FFF",
        borderRadius: 20,
        elevation: 2,
        margin: 10,
        alignSelf: "center",
    },
    mainContantContainer: {
        padding: 16,
        alignItems: "center",
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftContainer: {
        flex: 4,
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    timeContainer: {
        alignItems: "center",
        justifyContent: "center",

    },
    timeText: {
        fontFamily: "signika_light",
        color: "#888",
    },
    taskContainer: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
    },
    checkBox: {
        height: width * 0.08,
        width: width * 0.08,
        borderWidth: 2,
        borderColor: "#E7E7E7",
        borderRadius: 100,
    },
    checkBoxImage: {
        width: "100%",
        height: "100%",
    },
    taskTextContainer: {
        justifyContent: "center",
        width: "80%",
        paddingBottom: 6
    },
    titleText: {
        fontFamily: "signika_light",
        color: "#363636",
        fontSize: 22,
    },
    optionMenuContainer: {
        flex: 1,
        height: width * 0.08,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    optionMenuImage: {
        height: "100%",
    },
    bottomContainer: {
        marginLeft: 30,
    },
});