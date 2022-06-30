import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    containerLight: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    lightningOn: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 150,
        height: 150,
    },
    lightningOff: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 150,
        height: 150,
        tintColor: "white",
    },
    logoDio: {
        resizeMode: "contain",
        alignSelf: "center",
        width: 250,
        height: 250,
    },

})

export default style;