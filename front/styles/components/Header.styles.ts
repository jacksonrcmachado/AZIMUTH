import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        position: "relative",
        backgroundColor: "#fff",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingTop: 35
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        height: 40,
        width: 110,
    },
    buttons: {
        zIndex: 3,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    line: {
        width: 20,
        height: 3,
        borderRadius: 5,
        backgroundColor: "#000",
    },
    topLine: {
        width: 25,
        height: 3,
        borderRadius: 5,
        backgroundColor: "#000",
        transform: [{ rotate: "45deg" }],
        top: 4,
    },
    midLine: {
        display: "none",
    },
    botLine: {
        width: 25,
        height: 3,
        borderRadius: 5,
        backgroundColor: "#000",
        transform: [{ rotate: "-45deg" }],
        bottom: 4,
    },
    menu: {
        zIndex: 2,
        position: "absolute",
        backgroundColor: "#fff",
        top: 0,
        right: 0,
        width: 200,
        height: 400,
        borderBottomLeftRadius: 10,
    },
    menuContent: {
        borderTopColor: "#243149",
        borderTopWidth: 1,
        width: 160,
        height: 300,
        marginTop: 80,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    links: { // adicionar display flex quando tiver os links
        // backgroundColor: "red",
        height: 230,
        width: "100%",
    },
    account: {
        height: 70,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    logoutButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: 30,
        width: 80,
    },
    logoutText: {
        fontSize: 16,
        color: "red",
        fontWeight: "bold",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
        width: "100%",
        height: "100%",
    }
})

export default styles