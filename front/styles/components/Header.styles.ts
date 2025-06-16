import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    header: {
        position: "relative",
        backgroundColor: "#1e3c72",
        height: 95,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-start',
        padding: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,

        borderBottomWidth: 2,
        borderColor: 'rgba(61, 61, 61, 0.86)',
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        height: 50,
        width: 140,
        top: -5,
    },
    buttons: {
        zIndex: 3,
        width: 40,
        height: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 12

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
    links: {
        height: 230,
        width: "100%",
    },
    link: {
        marginTop: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    linkText: {
        fontFamily: "Inter",
        fontSize: 16,
        color: "#243149",
        fontWeight: "bold",
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
        fontFamily: "Inter",
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