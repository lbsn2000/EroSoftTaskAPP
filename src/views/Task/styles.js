import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#FCFCFC',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    subcontainer:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    content:{
        marginTop: 20,
        alignItems: 'center'
       },

    label:{
        color: '#202020',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,      
        marginTop: 20,
        marginBottom: 5
    },

    input:{
        color: '#050505',
        fontSize: 16,
        padding: 5,
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#BABABA',
        marginHorizontal: 20
    },

    inputArea:{
        color: '#050505',
        fontSize: 16,
        padding: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: '#BABABA',
        borderRadius: 10,
        marginHorizontal: 20,
        height: 100,
        textAlignVertical: 'top',
        marginTop: 10,
        marginBottom: 10

    }, 

    inLine:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: 10,
        marginTop: 10
    },

    saveLabel:{
        fontWeight: 'bold',
        color: '#379734',
        textTransform: 'uppercase',
        fontSize: 18,
    },

    savesub:{

        fontWeight: 'bold',
        color: '#379734',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 20
    },

    removeLabel:{
        fontWeight: 'bold',
        color: '#379734',
        textTransform: 'uppercase',
        fontSize: 18,

    },

    removesubLabel:{
        fontWeight: 'bold',
        color: '#379734',
        textTransform: 'uppercase',
        fontSize: 18,
        paddingRight: 25,
        paddingTop: 20
    },
    
    typeIconInative:{
        opacity: 0.5
    }, 

    title:{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#BABABA',
        alignItems: 'center',
    },

    titleText:{
        color: '#BABABA',
        fontWeight: 'bold',
        fontSize: 18,
        position: 'relative',
        top: 12,
        backgroundColor: '#FCFCFC',
        paddingHorizontal: 10
    },

});

export default styles;

