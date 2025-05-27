import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buoy: {
        backgroundColor: "#F4F4F4",
        borderColor: "#C0C0C0",
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    leftComponents: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
    },
    redAlert: {
        width: 16,
        height: 16,
        backgroundColor: "#FF0000",
        borderColor: "#BD0000",
        borderWidth: 1,
        borderRadius: 100,
    },
    GreenAlert: {
        width: 16,
        height: 16,
        backgroundColor: "#00FF00",
        borderColor: "#00BD00",
        borderWidth: 1,
        borderRadius: 100,
    },
    yellowAlert: {
        width: 16,
        height: 16,
        backgroundColor: "#FFAA00",
        borderColor: "#BD8A00",
        borderWidth: 1,
        borderRadius: 100,
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000000",
    },
    rightComponents: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    button: {
        height: 24,
        width: 24,
    },
})

export default styles