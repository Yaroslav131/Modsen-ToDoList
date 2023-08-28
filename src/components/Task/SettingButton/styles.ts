import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    settingButton: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
       
        borderRadius: 10,
    },

    activeSettingButton: {
        backgroundColor: "#646FD4"
    },
    activeSettingButtonText: {
      color:"#FFF"
    },
    settingButtonText: {
        fontFamily: "signika_light",
        color: "#363636",
        fontSize: 18,
    },

});