import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buoy: {
        backgroundColor: "#fff",

        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        marginLeft: 2,
        marginRight: 2,

        height: 58,

        // iOS shadow
        shadowColor: '#171717',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
        // Android shadow
        elevation: 9,
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
        fontSize: 18,
        fontWeight: 600,
        color: "#000000",
    },
    rightComponents: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: 4,

        borderRadius: 11,
        borderWidth: 0.4,
        borderColor: 'rgb(171, 171, 171)',
        right: -5,
    },
    button: {
        height: 24,
        width: 24,
    },
})

export default styles