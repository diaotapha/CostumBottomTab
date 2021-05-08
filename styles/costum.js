import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems:'center', 
        justifyContent: 'center', 
    },
    bottomSheetContainer: {
        flex: 1, 
        alignItems:'center', 
        justifyContent: 'center', 
        backgroundColor: "#fff"
    },
    buttonOne: {
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50, 
        width: 100 , 
        backgroundColor: "#fff",
        borderRadius: 5,
        marginVertical: 30
    },
    buttonTextOne: {
        color: '#rgb(108, 99, 255)'
    },
    buttonTwo: {
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50, 
        width: 100 , 
        backgroundColor: "#F64668",
        borderRadius: 5,
        marginVertical: 30
    },
    buttonTextTwo: {
        color: '#fff'
    },
})