import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "100%", 
    },

    filter:{
        width: '100%',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        paddingTop: 15
    },

    filterTextActived:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#379734'
    },

    filterTextInactive:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#CDCDCD'
    },

    content:{
        width: '100%',
        marginTop: 20,
    },

    title:{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#379734',
        alignItems: 'center'
    },

    titleText:{
        color: '#379734',
        fontWeight: 'bold',
        fontSize: 16,
        position: 'relative',
        top: 12,
        backgroundColor: '#FCFCFC',
        paddingHorizontal: 10
    },

});

export default styles;

