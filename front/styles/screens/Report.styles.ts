import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        // backgroundColor: "red"
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "100%"
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold"
    },
    input: {
        // backgroundColor: "yellow"
    },
    inputText: {
        fontSize: 15,
    },
    select: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#ddd"
    },
    selectPlaceholder: {
        color: "#ddd",
    },
    datas: {
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
        flexDirection: "row"
    },
    inputTitle: {
        marginBottom: 10,
        fontSize: 15
    },
    inputData: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: "#ddd",
        borderWidth: 2,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    inputDataText: {
        fontSize: 15
    },
    inputDataTextPlaceholder: {
        color: "#bbb"
    },
    image: {
        width: 18,
        height: 18
    },
    indisponivel: {
        backgroundColor: "#ddd",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: 140,
        width: "100%",
        height: 40,
        marginLeft: 20,
    },
    baixar: {
        backgroundColor: "#7749f8",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        bottom: 140,
        width: "100%",
        height: 40,
        marginLeft: 20,
    },
    baixarText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white"
    }
})

export default styles