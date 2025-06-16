import { Dimensions, StyleSheet } from 'react-native';

// const filtersBackgroundColor = 'white';
const filtersBackgroundColor = 'rgba(232, 232, 232, 0.95)';
// const filtersBackgroundColor = '#AFBEFE';
const borderRadius = 16;
const cardColor = 'rgba(255, 255, 255, 0.9)';

const styles = StyleSheet.create({
    main: {
        backgroundColor: filtersBackgroundColor,
        flex: 1
    },
    mapContainer: {
        margin: 12,
        marginTop: 15,
        height: 400,

        // iOS shadow
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 4,
        
        // Android shadow
        elevation: 9,
    },
    map: {
        borderRadius: borderRadius,
        borderColor: 'rgb(207, 207, 207)',
        borderWidth: 0.5,
        backgroundColor: "#71CFFF",
        height: '100%',
        width: '100%',
    },
    textos: {
        marginLeft: 12,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 700,
    },
    filters: {
        backgroundColor: cardColor, //
        borderRadius: borderRadius,
        margin: 5,
        marginLeft: 12,
        marginRight: 12,
        height: 58,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,

        // iOS shadow
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        
        // Android shadow
        elevation: 9,
    },
    clearHistory: {
        height: 24,
        width: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        right: 15,

        padding: 16.5,
        borderRadius: 11,
        borderWidth: 0.4,
        borderColor: 'rgb(171, 171, 171)',
    },
    image: {
        height: 32,
        width: 32,
    },
    dateSelect: {
        backgroundColor: "transparent", // Background dos botões de dia
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: 5,
        borderRadius: 5,
    },
    filter: {
        backgroundColor: "transparent", // Botão Dias quando não selecionado
        borderRadius: 11,
        borderWidth: 0.4,
        borderColor: 'rgb(171, 171, 171)',

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        height: 35,
        width: 45,
    },
    filterText: {
        color: "black",
        fontSize: 16,
        fontWeight: 600,
    },
    filterTextSelected: {
        color: "white",
        fontSize: 16,
        fontWeight: 700,
    },
    filterSelected: {
        backgroundColor: "#7749f8", // Botão Dias quando selecionado
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 45,
        borderRadius: 11,
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
        borderRadius: 30,
    },
    buoys: {
        height: 20,
        backgroundColor: filtersBackgroundColor,
        display: "flex",
        flexDirection: "column",
        padding: 10,
        marginTop: -5,
    }
})

export default styles