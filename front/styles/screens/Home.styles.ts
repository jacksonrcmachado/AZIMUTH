import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#fff",
        flex: 1
    },
    map: {
        backgroundColor: "#71CFFF",
        height: 500,
    },
    filters: {
        backgroundColor: "#243149",
        borderTopWidth: 1,
        borderTopColor: "#A9A7A7",
        borderBottomWidth: 1,
        borderBottomColor: "#A9A7A7",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    clearHistory: {
        height: 24,
        width: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 32,
        width: 32,
    },
    dateSelect: {
        backgroundColor: "#243149",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: 5,
        borderRadius: 5,
    },
    filter: {
        backgroundColor: "#243149",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        width: 40,
        borderRadius: 5,
    },
    filterText: {
        color: "white",
    },
    filterSelected: {
        backgroundColor: "#7749f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        width: 40,
        borderRadius: 5,
    },
    clearHistoryText: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "500",
    },
    add: {
        backgroundColor: "#7749f8",
        height: 24,
        width: 24,
        borderRadius: 5,
    },
    buoys: {
        height: 20,
        backgroundColor: "#F4F4F4",
        display: "flex",
        flexDirection: "column",
        padding: 20,
    }
})

export default styles