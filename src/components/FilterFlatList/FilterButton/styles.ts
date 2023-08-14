import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    imgStyle: {
        resizeMode: 'cover'
    },

    addButton: {
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "#D25EB0",
        justifyContent: 'center',
    },

    button: {
        elevation: 3,
        width: screenWidth * 0.28,
        height: screenWidth * 0.28,
        margin: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10
    },
    buttonText: {

        textAlign: "center",
        color: '#FFF',
        fontFamily: 'jost_regular',
        fontSize: 20,
    },
    counterText: {
        position: 'absolute',
        right: 10,
        top: 10,
        textAlign: 'right',
        color: '#FFF',
        fontFamily: 'jost_regular',
        fontSize: 20,
    },
});
