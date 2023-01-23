const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        position: "relative",
        // top: -15,
        backgroundColor: '#2b80ff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,

    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    text:{
        color:'white',
        fontSize: 15,
        marginBottom: 10,
        lineHeight: 20
    },
    learnMore: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default styles;