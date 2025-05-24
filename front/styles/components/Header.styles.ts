import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
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
        width: 30,
        height: 30,
        backgroundColor: "#ddd",
    }
})

export default styles