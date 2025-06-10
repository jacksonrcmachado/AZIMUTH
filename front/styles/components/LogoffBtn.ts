import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoffContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        backgroundColor: '#FF5C5C',
        borderRadius: 10,
        margin: 10,
        marginBottom: 25,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    logoutText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 22,
        paddingLeft: 5
    },
});

export default styles