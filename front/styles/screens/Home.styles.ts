import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#fff",
        flex: 1
    },
    map: {
        backgroundColor: "#71CFFF",
        height: 350,
    },
    filters: {
        backgroundColor: "#ddd",
        borderTopWidth: 0,
        borderTopColor: "#A9A7A7",
        borderBottomWidth: 2,
        borderBottomColor: "#A9A7A7",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    add: {
        backgroundColor: "black",
        height: 24,
        width: 24,
        borderRadius: 5,
    },
    buoys: {
        height: 20,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: 20,
    }
})

export default styles